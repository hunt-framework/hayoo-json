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
        "word": "GPipe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the various formats that are used by \u003ccode\u003eFrameBuffer\u003c/code\u003es and textures, both\n on the GPU and the CPU.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "Format",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-Format.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the various formats that are used by FrameBuffer and textures both on the GPU and the CPU",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Format",
          "package": "GPipe",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format with only an alpha value.\n These are the associated types in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat AlphaFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat1Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eColor AlphaFormat a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eAlpha a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "AlphaFormat",
          "package": "GPipe",
          "source": "src/Formats.html#AlphaFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format with only an alpha value These are the associated types in GPUFormat and ColorFormat CPUFormat AlphaFormat CPUFormat1Comp Color AlphaFormat Alpha",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "AlphaFormat",
          "package": "GPipe",
          "partial": "Alpha Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:AlphaFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CPU format for 1 component\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat1Comp",
          "package": "GPipe",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "data"
        },
        "index": {
          "description": "CPU format for component",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat1Comp",
          "package": "GPipe",
          "partial": "CPUFormat Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:CPUFormat1Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CPU format for 2 components (i.e. a LuminanceAlpha color).\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat2Comp",
          "package": "GPipe",
          "source": "src/Formats.html#CPUFormat2Comp",
          "type": "data"
        },
        "index": {
          "description": "CPU format for components i.e LuminanceAlpha color",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat2Comp",
          "package": "GPipe",
          "partial": "CPUFormat Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:CPUFormat2Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CPU format for 3 components (i.e. a RGB color).\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat3Comp",
          "package": "GPipe",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "data"
        },
        "index": {
          "description": "CPU format for components i.e RGB color",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat3Comp",
          "package": "GPipe",
          "partial": "CPUFormat Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:CPUFormat3Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CPU format for 4 components (i.e. a RGBA color).\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat4Comp",
          "package": "GPipe",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "data"
        },
        "index": {
          "description": "CPU format for components i.e RGBA color",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "CPUFormat4Comp",
          "package": "GPipe",
          "partial": "CPUFormat Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:CPUFormat4Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis context is used to select which types can be used in a frame buffers color buffer, and also\n to restrict the type of a texture.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "ColorFormat",
          "package": "GPipe",
          "source": "src/Formats.html#ColorFormat",
          "type": "class"
        },
        "index": {
          "description": "This context is used to select which types can be used in frame buffers color buffer and also to restrict the type of texture",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "ColorFormat",
          "package": "GPipe",
          "partial": "Color Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:ColorFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Depth",
          "package": "GPipe",
          "source": "src/Formats.html#Depth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Depth",
          "package": "GPipe",
          "partial": "Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format for a depth buffer value.\n This is the associated type in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat DepthFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat1Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "DepthFormat",
          "package": "GPipe",
          "source": "src/Formats.html#DepthFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format for depth buffer value This is the associated type in GPUFormat CPUFormat DepthFormat CPUFormat1Comp",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "DepthFormat",
          "package": "GPipe",
          "partial": "Depth Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:DepthFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "GPUFormat",
          "package": "GPipe",
          "source": "src/Formats.html#GPUFormat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "GPUFormat",
          "package": "GPipe",
          "partial": "GPUFormat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:GPUFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format with a single color component and an alpha value.\n These are the associated types in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat LuminanceAlphaFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat2Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eColor LuminanceAlphaFormat a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eLuminanceAlpha a a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "LuminanceAlphaFormat",
          "package": "GPipe",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format with single color component and an alpha value These are the associated types in GPUFormat and ColorFormat CPUFormat LuminanceAlphaFormat CPUFormat2Comp Color LuminanceAlphaFormat LuminanceAlpha",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "LuminanceAlphaFormat",
          "package": "GPipe",
          "partial": "Luminance Alpha Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:LuminanceAlphaFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format with a single color component.\n These are the associated types in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat LuminanceFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat1Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eColor LuminanceFormat a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eLuminance a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "LuminanceFormat",
          "package": "GPipe",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format with single color component These are the associated types in GPUFormat and ColorFormat CPUFormat LuminanceFormat CPUFormat1Comp Color LuminanceFormat Luminance",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "LuminanceFormat",
          "package": "GPipe",
          "partial": "Luminance Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:LuminanceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format with color components for red, green and blue, and an alpha value.\n These are the associated types in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat RGBAFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat4Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eColor RGBAFormat a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eRGBA (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a) a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "RGBAFormat",
          "package": "GPipe",
          "source": "src/Formats.html#RGBAFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format with color components for red green and blue and an alpha value These are the associated types in GPUFormat and ColorFormat CPUFormat RGBAFormat CPUFormat4Comp Color RGBAFormat RGBA Vec3",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBAFormat",
          "package": "GPipe",
          "partial": "RGBAFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:RGBAFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format with color components for red, green and blue.\n These are the associated types in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat RGBFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat3Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eColor RGBFormat a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eRGB (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "RGBFormat",
          "package": "GPipe",
          "source": "src/Formats.html#RGBFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format with color components for red green and blue These are the associated types in GPUFormat and ColorFormat CPUFormat RGBFormat CPUFormat3Comp Color RGBFormat RGB Vec3",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBFormat",
          "package": "GPipe",
          "partial": "RGBFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:RGBFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Stencil",
          "package": "GPipe",
          "source": "src/Formats.html#Stencil",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Stencil",
          "package": "GPipe",
          "partial": "Stencil",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GPU format for a stencil buffer value.\n This is the associated type in \u003ccode\u003e\u003ca\u003eGPUFormat\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCPUFormat StencilFormat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eCPUFormat1Comp\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Format",
          "name": "StencilFormat",
          "package": "GPipe",
          "source": "src/Formats.html#StencilFormat",
          "type": "data"
        },
        "index": {
          "description": "GPU format for stencil buffer value This is the associated type in GPUFormat CPUFormat StencilFormat CPUFormat1Comp",
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "StencilFormat",
          "package": "GPipe",
          "partial": "Stencil Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:StencilFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "StorableCPUFormat",
          "package": "GPipe",
          "source": "src/Formats.html#StorableCPUFormat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "StorableCPUFormat",
          "package": "GPipe",
          "partial": "Storable CPUFormat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#t:StorableCPUFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Alpha12",
          "package": "GPipe",
          "signature": "Alpha12",
          "source": "src/Formats.html#AlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Alpha12",
          "package": "GPipe",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Alpha12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Alpha16",
          "package": "GPipe",
          "signature": "Alpha16",
          "source": "src/Formats.html#AlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Alpha16",
          "package": "GPipe",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Alpha16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Alpha4",
          "package": "GPipe",
          "signature": "Alpha4",
          "source": "src/Formats.html#AlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Alpha4",
          "package": "GPipe",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Alpha4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Alpha8",
          "package": "GPipe",
          "signature": "Alpha8",
          "source": "src/Formats.html#AlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Alpha8",
          "package": "GPipe",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Alpha8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "BitmapFormat",
          "package": "GPipe",
          "signature": "BitmapFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "BitmapFormat",
          "package": "GPipe",
          "partial": "Bitmap Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:BitmapFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "ByteFormat",
          "package": "GPipe",
          "signature": "ByteFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "ByteFormat",
          "package": "GPipe",
          "partial": "Byte Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:ByteFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Depth16",
          "package": "GPipe",
          "signature": "Depth16",
          "source": "src/Formats.html#DepthFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Depth16",
          "package": "GPipe",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Depth16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Depth24",
          "package": "GPipe",
          "signature": "Depth24",
          "source": "src/Formats.html#DepthFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Depth24",
          "package": "GPipe",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Depth24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Depth32",
          "package": "GPipe",
          "signature": "Depth32",
          "source": "src/Formats.html#DepthFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Depth32",
          "package": "GPipe",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Depth32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "FloatFormat",
          "package": "GPipe",
          "signature": "FloatFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "FloatFormat",
          "package": "GPipe",
          "partial": "Float Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:FloatFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "IntFormat",
          "package": "GPipe",
          "signature": "IntFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "IntFormat",
          "package": "GPipe",
          "partial": "Int Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:IntFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12",
          "package": "GPipe",
          "signature": "Luminance12",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12",
          "package": "GPipe",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12Alpha12",
          "package": "GPipe",
          "signature": "Luminance12Alpha12",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12Alpha12",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance12Alpha12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12Alpha4",
          "package": "GPipe",
          "signature": "Luminance12Alpha4",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance12Alpha4",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance12Alpha4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance16",
          "package": "GPipe",
          "signature": "Luminance16",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance16",
          "package": "GPipe",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance16Alpha16",
          "package": "GPipe",
          "signature": "Luminance16Alpha16",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance16Alpha16",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance16Alpha16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance4",
          "package": "GPipe",
          "signature": "Luminance4",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance4",
          "package": "GPipe",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance4Alpha4",
          "package": "GPipe",
          "signature": "Luminance4Alpha4",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance4Alpha4",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance4Alpha4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance6Alpha2",
          "package": "GPipe",
          "signature": "Luminance6Alpha2",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance6Alpha2",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance6Alpha2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance8",
          "package": "GPipe",
          "signature": "Luminance8",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance8",
          "package": "GPipe",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "Luminance8Alpha8",
          "package": "GPipe",
          "signature": "Luminance8Alpha8",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "Luminance8Alpha8",
          "package": "GPipe",
          "partial": "Luminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:Luminance8Alpha8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "PerComp2",
          "package": "GPipe",
          "signature": "PerComp2 CPUFormat1Comp",
          "source": "src/Formats.html#CPUFormat2Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "PerComp2",
          "package": "GPipe",
          "partial": "Per Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:PerComp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "PerComp3",
          "package": "GPipe",
          "signature": "PerComp3 CPUFormat1Comp",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "PerComp3",
          "package": "GPipe",
          "partial": "Per Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:PerComp3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "PerComp4",
          "package": "GPipe",
          "signature": "PerComp4 CPUFormat1Comp",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "PerComp4",
          "package": "GPipe",
          "partial": "Per Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:PerComp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "R3G3B2",
          "package": "GPipe",
          "signature": "R3G3B2",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "R3G3B2",
          "package": "GPipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:R3G3B2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB10",
          "package": "GPipe",
          "signature": "RGB10",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB10",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB10A2",
          "package": "GPipe",
          "signature": "RGB10A2",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB10A2",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB10A2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB12",
          "package": "GPipe",
          "signature": "RGB12",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB12",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB16",
          "package": "GPipe",
          "signature": "RGB16",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB16",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB4",
          "package": "GPipe",
          "signature": "RGB4",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB4",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB5",
          "package": "GPipe",
          "signature": "RGB5",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB5",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB5A1",
          "package": "GPipe",
          "signature": "RGB5A1",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB5A1",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB5A1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGB8",
          "package": "GPipe",
          "signature": "RGB8",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGB8",
          "package": "GPipe",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGBA12",
          "package": "GPipe",
          "signature": "RGBA12",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBA12",
          "package": "GPipe",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGBA12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGBA16",
          "package": "GPipe",
          "signature": "RGBA16",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBA16",
          "package": "GPipe",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGBA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGBA2",
          "package": "GPipe",
          "signature": "RGBA2",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBA2",
          "package": "GPipe",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGBA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGBA4",
          "package": "GPipe",
          "signature": "RGBA4",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBA4",
          "package": "GPipe",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGBA4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "RGBA8",
          "package": "GPipe",
          "signature": "RGBA8",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "RGBA8",
          "package": "GPipe",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:RGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "SLuminance8",
          "package": "GPipe",
          "signature": "SLuminance8",
          "source": "src/Formats.html#LuminanceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "SLuminance8",
          "package": "GPipe",
          "partial": "SLuminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:SLuminance8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "SLuminance8Alpha8",
          "package": "GPipe",
          "signature": "SLuminance8Alpha8",
          "source": "src/Formats.html#LuminanceAlphaFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "SLuminance8Alpha8",
          "package": "GPipe",
          "partial": "SLuminance Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:SLuminance8Alpha8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "SRGB8",
          "package": "GPipe",
          "signature": "SRGB8",
          "source": "src/Formats.html#RGBFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "SRGB8",
          "package": "GPipe",
          "partial": "SRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:SRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "SRGBA8",
          "package": "GPipe",
          "signature": "SRGBA8",
          "source": "src/Formats.html#RGBAFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "SRGBA8",
          "package": "GPipe",
          "partial": "SRGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:SRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "ShortFormat",
          "package": "GPipe",
          "signature": "ShortFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "ShortFormat",
          "package": "GPipe",
          "partial": "Short Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:ShortFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "StencilFormat",
          "package": "GPipe",
          "signature": "StencilFormat",
          "source": "src/Formats.html#StencilFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "StencilFormat",
          "package": "GPipe",
          "partial": "Stencil Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:StencilFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByte2_3_3_Rev",
          "package": "GPipe",
          "signature": "UnsignedByte2_3_3_Rev",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByte2_3_3_Rev",
          "package": "GPipe",
          "partial": "Unsigned Byte Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedByte2_3_3_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByte3_3_2",
          "package": "GPipe",
          "signature": "UnsignedByte3_3_2",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByte3_3_2",
          "package": "GPipe",
          "partial": "Unsigned Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedByte3_3_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByteFormat",
          "package": "GPipe",
          "signature": "UnsignedByteFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedByteFormat",
          "package": "GPipe",
          "partial": "Unsigned Byte Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedByteFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt10_10_10_2",
          "package": "GPipe",
          "signature": "UnsignedInt10_10_10_2",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt10_10_10_2",
          "package": "GPipe",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedInt10_10_10_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt2_10_10_10_Rev",
          "package": "GPipe",
          "signature": "UnsignedInt2_10_10_10_Rev",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt2_10_10_10_Rev",
          "package": "GPipe",
          "partial": "Unsigned Int Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedInt2_10_10_10_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt8_8_8_8",
          "package": "GPipe",
          "signature": "UnsignedInt8_8_8_8",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt8_8_8_8",
          "package": "GPipe",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedInt8_8_8_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt8_8_8_8_Rev",
          "package": "GPipe",
          "signature": "UnsignedInt8_8_8_8_Rev",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedInt8_8_8_8_Rev",
          "package": "GPipe",
          "partial": "Unsigned Int Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedInt8_8_8_8_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedIntFormat",
          "package": "GPipe",
          "signature": "UnsignedIntFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedIntFormat",
          "package": "GPipe",
          "partial": "Unsigned Int Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedIntFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort1_5_5_5_Rev",
          "package": "GPipe",
          "signature": "UnsignedShort1_5_5_5_Rev",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort1_5_5_5_Rev",
          "package": "GPipe",
          "partial": "Unsigned Short Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort1_5_5_5_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort4_4_4_4",
          "package": "GPipe",
          "signature": "UnsignedShort4_4_4_4",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort4_4_4_4",
          "package": "GPipe",
          "partial": "Unsigned Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort4_4_4_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort4_4_4_4_Rev",
          "package": "GPipe",
          "signature": "UnsignedShort4_4_4_4_Rev",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort4_4_4_4_Rev",
          "package": "GPipe",
          "partial": "Unsigned Short Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort4_4_4_4_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_5_5_1",
          "package": "GPipe",
          "signature": "UnsignedShort5_5_5_1",
          "source": "src/Formats.html#CPUFormat4Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_5_5_1",
          "package": "GPipe",
          "partial": "Unsigned Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort5_5_5_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_6_5",
          "package": "GPipe",
          "signature": "UnsignedShort5_6_5",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_6_5",
          "package": "GPipe",
          "partial": "Unsigned Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort5_6_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_6_5_Rev",
          "package": "GPipe",
          "signature": "UnsignedShort5_6_5_Rev",
          "source": "src/Formats.html#CPUFormat3Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShort5_6_5_Rev",
          "package": "GPipe",
          "partial": "Unsigned Short Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShort5_6_5_Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShortFormat",
          "package": "GPipe",
          "signature": "UnsignedShortFormat",
          "source": "src/Formats.html#CPUFormat1Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Format",
          "module": "Graphics.GPipe.Format",
          "name": "UnsignedShortFormat",
          "package": "GPipe",
          "partial": "Unsigned Short Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Format.html#v:UnsignedShortFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es are 2D images in which fragments from \u003ccode\u003eFragmentStream\u003c/code\u003es are painted. A \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003e\n may contain any combination of a color buffer, a depth buffer and a stencil buffer.\n \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es may be shown in windows, saved to memory or converted to textures.\n \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es have no size, but takes the size of the window when shown, or are given a size when\n saved to memory or converted to a texture.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FrameBuffer",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-FrameBuffer.html",
          "type": "module"
        },
        "index": {
          "description": "FrameBuffer are images in which fragments from FragmentStream are painted FrameBuffer may contain any combination of color buffer depth buffer and stencil buffer FrameBuffer may be shown in windows saved to memory or converted to textures FrameBuffer have no size but takes the size of the window when shown or are given size when saved to memory or converted to texture",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FrameBuffer",
          "package": "GPipe",
          "partial": "Frame Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendEquation",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendEquation",
          "package": "GPipe",
          "partial": "Blend Equation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:BlendEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets how the painted colors are blended with the \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es previous value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Blending",
          "package": "GPipe",
          "source": "src/OutputMerger.html#Blending",
          "type": "data"
        },
        "index": {
          "description": "Sets how the painted colors are blended with the FrameBuffer previous value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Blending",
          "package": "GPipe",
          "partial": "Blending",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:Blending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendingFactor",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendingFactor",
          "package": "GPipe",
          "partial": "Blending Factor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:BlendingFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for each color component that should be written to the \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ColorMask",
          "package": "GPipe",
          "source": "src/OutputMerger.html#ColorMask",
          "type": "type"
        },
        "index": {
          "description": "True for each color component that should be written to the FrameBuffer",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ColorMask",
          "package": "GPipe",
          "partial": "Color Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:ColorMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ComparisonFunction",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ComparisonFunction",
          "package": "GPipe",
          "partial": "Comparison Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:ComparisonFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to compare the fragment's depth and the depth buffers depth with.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DepthFunction",
          "package": "GPipe",
          "source": "src/OutputMerger.html#DepthFunction",
          "type": "type"
        },
        "index": {
          "description": "The function used to compare the fragment depth and the depth buffers depth with",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DepthFunction",
          "package": "GPipe",
          "partial": "Depth Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:DepthFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the depth component should be written to the \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DepthMask",
          "package": "GPipe",
          "source": "src/OutputMerger.html#DepthMask",
          "type": "type"
        },
        "index": {
          "description": "True if the depth component should be written to the FrameBuffer",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DepthMask",
          "package": "GPipe",
          "partial": "Depth Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:DepthMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FragmentDepth",
          "package": "GPipe",
          "source": "src/OutputMerger.html#FragmentDepth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FragmentDepth",
          "package": "GPipe",
          "partial": "Fragment Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:FragmentDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polymorphic frame buffer. It is parameterized on the type of color buffer, depth buffer and stencil buffer.\n Any instances of \u003ccode\u003e\u003ca\u003eColorFormat\u003c/a\u003e\u003c/code\u003e can be used for color buffer, or '()' to denote \u003ca\u003eno color buffer\u003c/a\u003e.\n For depth and stencil buffers, \u003ccode\u003e\u003ca\u003eDepthFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStencilFormat\u003c/a\u003e\u003c/code\u003e marks the existance of buffer, while '()'\n marks the inexistance.  \n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FrameBuffer",
          "package": "GPipe",
          "source": "src/OutputMerger.html#FrameBuffer",
          "type": "data"
        },
        "index": {
          "description": "polymorphic frame buffer It is parameterized on the type of color buffer depth buffer and stencil buffer Any instances of ColorFormat can be used for color buffer or to denote no color buffer For depth and stencil buffers DepthFormat and StencilFormat marks the existance of buffer while marks the inexistance",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FrameBuffer",
          "package": "GPipe",
          "partial": "Frame Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:FrameBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "LogicOp",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "LogicOp",
          "package": "GPipe",
          "partial": "Logic Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:LogicOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOp",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOp",
          "package": "GPipe",
          "partial": "Stencil Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:StencilOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the operations that should be performed on the \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es stencil value\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOps",
          "package": "GPipe",
          "source": "src/OutputMerger.html#StencilOps",
          "type": "data"
        },
        "index": {
          "description": "Sets the operations that should be performed on the FrameBuffer stencil value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOps",
          "package": "GPipe",
          "partial": "Stencil Ops",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:StencilOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a test that should be performed on the stencil value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTest",
          "package": "GPipe",
          "source": "src/OutputMerger.html#StencilTest",
          "type": "data"
        },
        "index": {
          "description": "Sets test that should be performed on the stencil value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTest",
          "package": "GPipe",
          "partial": "Stencil Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:StencilTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the tests that should be performed on the stencil value, first for front facing triangles and other primitives, then for back facing triangles.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTests",
          "package": "GPipe",
          "source": "src/OutputMerger.html#StencilTests",
          "type": "data"
        },
        "index": {
          "description": "Sets the tests that should be performed on the stencil value first for front facing triangles and other primitives then for back facing triangles",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTests",
          "package": "GPipe",
          "partial": "Stencil Tests",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#t:StencilTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Always",
          "package": "GPipe",
          "signature": "Always",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Always",
          "package": "GPipe",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "And",
          "package": "GPipe",
          "signature": "And",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "And",
          "package": "GPipe",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "AndInverted",
          "package": "GPipe",
          "signature": "AndInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "AndInverted",
          "package": "GPipe",
          "partial": "And Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:AndInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "AndReverse",
          "package": "GPipe",
          "signature": "AndReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "AndReverse",
          "package": "GPipe",
          "partial": "And Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:AndReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse blending equations to combine the fragment with the previous value.\n The first \u003ccode\u003e\u003ca\u003eBlendEquation\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBlendingFactor\u003c/a\u003e\u003c/code\u003es is used for front faced triangles and other primitives,\n and the second for back faced triangles.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Blend",
          "package": "GPipe",
          "signature": "Blend (BlendEquation, BlendEquation) ((BlendingFactor, BlendingFactor), (BlendingFactor, BlendingFactor)) (Color RGBAFormat Float)",
          "source": "src/OutputMerger.html#Blending",
          "type": "function"
        },
        "index": {
          "description": "Use blending equations to combine the fragment with the previous value The first BlendEquation and BlendingFactor is used for front faced triangles and other primitives and the second for back faced triangles",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Blend",
          "normalized": "Blend(BlendEquation,BlendEquation)((BlendingFactor,BlendingFactor),(BlendingFactor,BlendingFactor))(Color RGBAFormat Float)",
          "package": "GPipe",
          "partial": "Blend",
          "signature": "Blend(BlendEquation,BlendEquation)((BlendingFactor,BlendingFactor),(BlendingFactor,BlendingFactor))(Color RGBAFormat Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Blend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003eLogicOp\u003c/a\u003e\u003c/code\u003e to combine the fragment with the previous value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendLogicOp",
          "package": "GPipe",
          "signature": "BlendLogicOp LogicOp",
          "source": "src/OutputMerger.html#Blending",
          "type": "function"
        },
        "index": {
          "description": "Use LogicOp to combine the fragment with the previous value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "BlendLogicOp",
          "package": "GPipe",
          "partial": "Blend Logic Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:BlendLogicOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Clear",
          "package": "GPipe",
          "signature": "Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Clear",
          "package": "GPipe",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ConstantAlpha",
          "package": "GPipe",
          "signature": "ConstantAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ConstantAlpha",
          "package": "GPipe",
          "partial": "Constant Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:ConstantAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ConstantColor",
          "package": "GPipe",
          "signature": "ConstantColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "ConstantColor",
          "package": "GPipe",
          "partial": "Constant Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:ConstantColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Copy",
          "package": "GPipe",
          "signature": "Copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Copy",
          "package": "GPipe",
          "partial": "Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "CopyInverted",
          "package": "GPipe",
          "signature": "CopyInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "CopyInverted",
          "package": "GPipe",
          "partial": "Copy Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:CopyInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DstAlpha",
          "package": "GPipe",
          "signature": "DstAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DstAlpha",
          "package": "GPipe",
          "partial": "Dst Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:DstAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DstColor",
          "package": "GPipe",
          "signature": "DstColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "DstColor",
          "package": "GPipe",
          "partial": "Dst Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:DstColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Equal",
          "package": "GPipe",
          "signature": "Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Equal",
          "package": "GPipe",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Equiv",
          "package": "GPipe",
          "signature": "Equiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Equiv",
          "package": "GPipe",
          "partial": "Equiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncAdd",
          "package": "GPipe",
          "signature": "FuncAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncAdd",
          "package": "GPipe",
          "partial": "Func Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:FuncAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncReverseSubtract",
          "package": "GPipe",
          "signature": "FuncReverseSubtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncReverseSubtract",
          "package": "GPipe",
          "partial": "Func Reverse Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:FuncReverseSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncSubtract",
          "package": "GPipe",
          "signature": "FuncSubtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "FuncSubtract",
          "package": "GPipe",
          "partial": "Func Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:FuncSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Gequal",
          "package": "GPipe",
          "signature": "Gequal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Gequal",
          "package": "GPipe",
          "partial": "Gequal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Gequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Greater",
          "package": "GPipe",
          "signature": "Greater",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Greater",
          "package": "GPipe",
          "partial": "Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Invert",
          "package": "GPipe",
          "signature": "Invert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Invert",
          "package": "GPipe",
          "partial": "Invert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Lequal",
          "package": "GPipe",
          "signature": "Lequal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Lequal",
          "package": "GPipe",
          "partial": "Lequal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Lequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Less",
          "package": "GPipe",
          "signature": "Less",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Less",
          "package": "GPipe",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "LogicOp",
          "package": "GPipe",
          "signature": "LogicOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "LogicOp",
          "package": "GPipe",
          "partial": "Logic Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:LogicOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Max",
          "package": "GPipe",
          "signature": "Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Max",
          "package": "GPipe",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Min",
          "package": "GPipe",
          "signature": "Min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Min",
          "package": "GPipe",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Nand",
          "package": "GPipe",
          "signature": "Nand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Nand",
          "package": "GPipe",
          "partial": "Nand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Nand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Never",
          "package": "GPipe",
          "signature": "Never",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Never",
          "package": "GPipe",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe painted fragment completely overwrites the previous value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "NoBlending",
          "package": "GPipe",
          "signature": "NoBlending",
          "source": "src/OutputMerger.html#Blending",
          "type": "function"
        },
        "index": {
          "description": "The painted fragment completely overwrites the previous value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "NoBlending",
          "package": "GPipe",
          "partial": "No Blending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:NoBlending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Noop",
          "package": "GPipe",
          "signature": "Noop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Noop",
          "package": "GPipe",
          "partial": "Noop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Nor",
          "package": "GPipe",
          "signature": "Nor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Nor",
          "package": "GPipe",
          "partial": "Nor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Nor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Notequal",
          "package": "GPipe",
          "signature": "Notequal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Notequal",
          "package": "GPipe",
          "partial": "Notequal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Notequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "One",
          "package": "GPipe",
          "signature": "One",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "One",
          "package": "GPipe",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusConstantAlpha",
          "package": "GPipe",
          "signature": "OneMinusConstantAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusConstantAlpha",
          "package": "GPipe",
          "partial": "One Minus Constant Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusConstantAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusConstantColor",
          "package": "GPipe",
          "signature": "OneMinusConstantColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusConstantColor",
          "package": "GPipe",
          "partial": "One Minus Constant Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusConstantColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusDstAlpha",
          "package": "GPipe",
          "signature": "OneMinusDstAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusDstAlpha",
          "package": "GPipe",
          "partial": "One Minus Dst Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusDstAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusDstColor",
          "package": "GPipe",
          "signature": "OneMinusDstColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusDstColor",
          "package": "GPipe",
          "partial": "One Minus Dst Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusDstColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusSrcAlpha",
          "package": "GPipe",
          "signature": "OneMinusSrcAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusSrcAlpha",
          "package": "GPipe",
          "partial": "One Minus Src Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusSrcAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusSrcColor",
          "package": "GPipe",
          "signature": "OneMinusSrcColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OneMinusSrcColor",
          "package": "GPipe",
          "partial": "One Minus Src Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OneMinusSrcColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpDecr",
          "package": "GPipe",
          "signature": "OpDecr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpDecr",
          "package": "GPipe",
          "partial": "Op Decr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpDecr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpDecrWrap",
          "package": "GPipe",
          "signature": "OpDecrWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpDecrWrap",
          "package": "GPipe",
          "partial": "Op Decr Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpDecrWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpIncr",
          "package": "GPipe",
          "signature": "OpIncr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpIncr",
          "package": "GPipe",
          "partial": "Op Incr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpIncr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpIncrWrap",
          "package": "GPipe",
          "signature": "OpIncrWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpIncrWrap",
          "package": "GPipe",
          "partial": "Op Incr Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpIncrWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpInvert",
          "package": "GPipe",
          "signature": "OpInvert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpInvert",
          "package": "GPipe",
          "partial": "Op Invert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpInvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpKeep",
          "package": "GPipe",
          "signature": "OpKeep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpKeep",
          "package": "GPipe",
          "partial": "Op Keep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpKeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpReplace",
          "package": "GPipe",
          "signature": "OpReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpReplace",
          "package": "GPipe",
          "partial": "Op Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpZero",
          "package": "GPipe",
          "signature": "OpZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OpZero",
          "package": "GPipe",
          "partial": "Op Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OpZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Or",
          "package": "GPipe",
          "signature": "Or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Or",
          "package": "GPipe",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OrInverted",
          "package": "GPipe",
          "signature": "OrInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OrInverted",
          "package": "GPipe",
          "partial": "Or Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OrInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OrReverse",
          "package": "GPipe",
          "signature": "OrReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "OrReverse",
          "package": "GPipe",
          "partial": "Or Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:OrReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Set",
          "package": "GPipe",
          "signature": "Set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Set",
          "package": "GPipe",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcAlpha",
          "package": "GPipe",
          "signature": "SrcAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcAlpha",
          "package": "GPipe",
          "partial": "Src Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:SrcAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcAlphaSaturate",
          "package": "GPipe",
          "signature": "SrcAlphaSaturate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcAlphaSaturate",
          "package": "GPipe",
          "partial": "Src Alpha Saturate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:SrcAlphaSaturate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcColor",
          "package": "GPipe",
          "signature": "SrcColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "SrcColor",
          "package": "GPipe",
          "partial": "Src Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:SrcColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOps",
          "package": "GPipe",
          "signature": "StencilOps",
          "source": "src/OutputMerger.html#StencilOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilOps",
          "package": "GPipe",
          "partial": "Stencil Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:StencilOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTest",
          "package": "GPipe",
          "signature": "StencilTest",
          "source": "src/OutputMerger.html#StencilTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTest",
          "package": "GPipe",
          "partial": "Stencil Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:StencilTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTests",
          "package": "GPipe",
          "signature": "StencilTests StencilTest StencilTest",
          "source": "src/OutputMerger.html#StencilTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "StencilTests",
          "package": "GPipe",
          "partial": "Stencil Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:StencilTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Xor",
          "package": "GPipe",
          "signature": "Xor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Xor",
          "package": "GPipe",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Zero",
          "package": "GPipe",
          "signature": "Zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "Zero",
          "package": "GPipe",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for back faced triangles.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "backStencilOp",
          "package": "GPipe",
          "signature": "StencilOp",
          "source": "src/OutputMerger.html#StencilOps",
          "type": "function"
        },
        "index": {
          "description": "Used for back faced triangles",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "backStencilOp",
          "package": "GPipe",
          "partial": "Stencil Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:backStencilOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for front faced triangles and other primitives.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "frontStencilOp",
          "package": "GPipe",
          "signature": "StencilOp",
          "source": "src/OutputMerger.html#StencilOps",
          "type": "function"
        },
        "index": {
          "description": "Used for front faced triangles and other primitives",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "frontStencilOp",
          "package": "GPipe",
          "partial": "Stencil Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:frontStencilOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the byte size needed to store a certain format and size of a framebuffer. Use this to\n allocate memory before using \u003ccode\u003e\u003ca\u003egetFrameBufferColor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetFrameBufferDepth\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetFrameBufferStencil\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferCPUFormatByteSize",
          "package": "GPipe",
          "signature": "f-\u003e Vec2 Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Returns the byte size needed to store certain format and size of framebuffer Use this to allocate memory before using getFrameBufferColor getFrameBufferDepth or getFrameBufferStencil",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferCPUFormatByteSize",
          "normalized": "a-\u003eVec Int-\u003eInt",
          "package": "GPipe",
          "partial": "Frame Buffer CPUFormat Byte Size",
          "signature": "f-\u003eVec Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:getFrameBufferCPUFormatByteSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es color buffer to main memory.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferColor",
          "package": "GPipe",
          "signature": "CPUFormat c-\u003e Vec2 Int-\u003e FrameBuffer c d s-\u003e Ptr a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Saves FrameBuffer color buffer to main memory",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferColor",
          "normalized": "CPUFormat a-\u003eVec Int-\u003eFrameBuffer a b c-\u003ePtr d-\u003eIO()",
          "package": "GPipe",
          "partial": "Frame Buffer Color",
          "signature": "CPUFormat c-\u003eVec Int-\u003eFrameBuffer c d s-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:getFrameBufferColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es depth buffer to main memory.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferDepth",
          "package": "GPipe",
          "signature": "CPUFormat DepthFormat-\u003e Vec2 Int-\u003e FrameBuffer c DepthFormat s-\u003e Ptr a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Saves FrameBuffer depth buffer to main memory",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferDepth",
          "normalized": "CPUFormat DepthFormat-\u003eVec Int-\u003eFrameBuffer a DepthFormat b-\u003ePtr c-\u003eIO()",
          "package": "GPipe",
          "partial": "Frame Buffer Depth",
          "signature": "CPUFormat DepthFormat-\u003eVec Int-\u003eFrameBuffer c DepthFormat s-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:getFrameBufferDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es stencil buffer to main memory.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferStencil",
          "package": "GPipe",
          "signature": "CPUFormat StencilFormat-\u003e Vec2 Int-\u003e FrameBuffer c d StencilFormat-\u003e Ptr a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Saves FrameBuffer stencil buffer to main memory",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "getFrameBufferStencil",
          "normalized": "CPUFormat StencilFormat-\u003eVec Int-\u003eFrameBuffer a b StencilFormat-\u003ePtr c-\u003eIO()",
          "package": "GPipe",
          "partial": "Frame Buffer Stencil",
          "signature": "CPUFormat StencilFormat-\u003eVec Int-\u003eFrameBuffer c d StencilFormat-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:getFrameBufferStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColor",
          "package": "GPipe",
          "signature": "Color f Float -\u003e FrameBuffer f () ()",
          "source": "src/OutputMerger.html#newFrameBufferColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColor",
          "normalized": "Color a Float-\u003eFrameBuffer a()()",
          "package": "GPipe",
          "partial": "Frame Buffer Color",
          "signature": "Color f Float-\u003eFrameBuffer f()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorDepth",
          "package": "GPipe",
          "signature": "Color f Float -\u003e Depth -\u003e FrameBuffer f DepthFormat ()",
          "source": "src/OutputMerger.html#newFrameBufferColorDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorDepth",
          "normalized": "Color a Float-\u003eDepth-\u003eFrameBuffer a DepthFormat()",
          "package": "GPipe",
          "partial": "Frame Buffer Color Depth",
          "signature": "Color f Float-\u003eDepth-\u003eFrameBuffer f DepthFormat()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferColorDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorDepthStencil",
          "package": "GPipe",
          "signature": "Color f Float -\u003e Depth -\u003e Stencil -\u003e FrameBuffer f DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#newFrameBufferColorDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorDepthStencil",
          "normalized": "Color a Float-\u003eDepth-\u003eStencil-\u003eFrameBuffer a DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Frame Buffer Color Depth Stencil",
          "signature": "Color f Float-\u003eDepth-\u003eStencil-\u003eFrameBuffer f DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferColorDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorStencil",
          "package": "GPipe",
          "signature": "Color f Float -\u003e Stencil -\u003e FrameBuffer f () StencilFormat",
          "source": "src/OutputMerger.html#newFrameBufferColorStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferColorStencil",
          "normalized": "Color a Float-\u003eStencil-\u003eFrameBuffer a()StencilFormat",
          "package": "GPipe",
          "partial": "Frame Buffer Color Stencil",
          "signature": "Color f Float-\u003eStencil-\u003eFrameBuffer f()StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferColorStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferDepth",
          "package": "GPipe",
          "signature": "Depth -\u003e FrameBuffer () DepthFormat ()",
          "source": "src/OutputMerger.html#newFrameBufferDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferDepth",
          "normalized": "Depth-\u003eFrameBuffer()DepthFormat()",
          "package": "GPipe",
          "partial": "Frame Buffer Depth",
          "signature": "Depth-\u003eFrameBuffer()DepthFormat()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferDepthStencil",
          "package": "GPipe",
          "signature": "Depth -\u003e Stencil -\u003e FrameBuffer () DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#newFrameBufferDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferDepthStencil",
          "normalized": "Depth-\u003eStencil-\u003eFrameBuffer()DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Frame Buffer Depth Stencil",
          "signature": "Depth-\u003eStencil-\u003eFrameBuffer()DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferStencil",
          "package": "GPipe",
          "signature": "Stencil -\u003e FrameBuffer () () StencilFormat",
          "source": "src/OutputMerger.html#newFrameBufferStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newFrameBufferStencil",
          "normalized": "Stencil-\u003eFrameBuffer()()StencilFormat",
          "package": "GPipe",
          "partial": "Frame Buffer Stencil",
          "signature": "Stencil-\u003eFrameBuffer()()StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newFrameBufferStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCretes and shows a new GPipe window. Use the last parameter to add extra GLUT callbacks to the window. Note that you can't register your own \u003ccode\u003e\u003ca\u003edisplayCallback\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereshapeCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newWindow",
          "package": "GPipe",
          "signature": "String-\u003e Vec2 Int-\u003e Vec2 Int-\u003e (Vec2 Int -\u003e IO (FrameBuffer c d s))-\u003e (Window -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Cretes and shows new GPipe window Use the last parameter to add extra GLUT callbacks to the window Note that you can register your own displayCallback and reshapeCallback",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "newWindow",
          "normalized": "String-\u003eVec Int-\u003eVec Int-\u003e(Vec Int-\u003eIO(FrameBuffer a b c))-\u003e(Window-\u003eIO())-\u003eIO()",
          "package": "GPipe",
          "partial": "Window",
          "signature": "String-\u003eVec Int-\u003eVec Int-\u003e(Vec Int-\u003eIO(FrameBuffer c d s))-\u003e(Window-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:newWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColor",
          "package": "GPipe",
          "signature": "Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float)) -\u003e FrameBuffer c d s -\u003e FrameBuffer c d s",
          "source": "src/OutputMerger.html#paintColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColor",
          "normalized": "Blending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float))-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c",
          "package": "GPipe",
          "partial": "Color",
          "signature": "Blending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float))-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorDepth",
          "package": "GPipe",
          "signature": "DepthFunction -\u003e DepthMask -\u003e Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float), FragmentDepth) -\u003e FrameBuffer c DepthFormat s -\u003e FrameBuffer c DepthFormat s",
          "source": "src/OutputMerger.html#paintColorDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorDepth",
          "normalized": "DepthFunction-\u003eDepthMask-\u003eBlending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float),FragmentDepth)-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b",
          "package": "GPipe",
          "partial": "Color Depth",
          "signature": "DepthFunction-\u003eDepthMask-\u003eBlending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float),FragmentDepth)-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColorDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorDepthStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e DepthFunction -\u003e DepthMask -\u003e StencilOps -\u003e StencilOps -\u003e Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float), FragmentDepth) -\u003e FrameBuffer c DepthFormat StencilFormat -\u003e FrameBuffer c DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#paintColorDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorDepthStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float),FragmentDepth)-\u003eFrameBuffer a DepthFormat StencilFormat-\u003eFrameBuffer a DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Color Depth Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float),FragmentDepth)-\u003eFrameBuffer c DepthFormat StencilFormat-\u003eFrameBuffer c DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColorDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorRastDepth",
          "package": "GPipe",
          "signature": "DepthFunction -\u003e DepthMask -\u003e Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float)) -\u003e FrameBuffer c DepthFormat s -\u003e FrameBuffer c DepthFormat s",
          "source": "src/OutputMerger.html#paintColorRastDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorRastDepth",
          "normalized": "DepthFunction-\u003eDepthMask-\u003eBlending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float))-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b",
          "package": "GPipe",
          "partial": "Color Rast Depth",
          "signature": "DepthFunction-\u003eDepthMask-\u003eBlending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float))-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColorRastDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorRastDepthStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e DepthFunction -\u003e DepthMask -\u003e StencilOps -\u003e StencilOps -\u003e Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float)) -\u003e FrameBuffer c DepthFormat StencilFormat -\u003e FrameBuffer c DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#paintColorRastDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorRastDepthStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float))-\u003eFrameBuffer a DepthFormat StencilFormat-\u003eFrameBuffer a DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Color Rast Depth Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float))-\u003eFrameBuffer c DepthFormat StencilFormat-\u003eFrameBuffer c DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColorRastDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e StencilOps -\u003e Blending -\u003e ColorMask c -\u003e FragmentStream (Color c (Fragment Float)) -\u003e FrameBuffer c d StencilFormat -\u003e FrameBuffer c d StencilFormat",
          "source": "src/OutputMerger.html#paintColorStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintColorStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask a-\u003eFragmentStream(Color a(Fragment Float))-\u003eFrameBuffer a b StencilFormat-\u003eFrameBuffer a b StencilFormat",
          "package": "GPipe",
          "partial": "Color Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eStencilOps-\u003eBlending-\u003eColorMask c-\u003eFragmentStream(Color c(Fragment Float))-\u003eFrameBuffer c d StencilFormat-\u003eFrameBuffer c d StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintColorStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintDepth",
          "package": "GPipe",
          "signature": "DepthFunction -\u003e DepthMask -\u003e FragmentStream FragmentDepth -\u003e FrameBuffer c DepthFormat s -\u003e FrameBuffer c DepthFormat s",
          "source": "src/OutputMerger.html#paintDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintDepth",
          "normalized": "DepthFunction-\u003eDepthMask-\u003eFragmentStream FragmentDepth-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b",
          "package": "GPipe",
          "partial": "Depth",
          "signature": "DepthFunction-\u003eDepthMask-\u003eFragmentStream FragmentDepth-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintDepthStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e DepthFunction -\u003e DepthMask -\u003e StencilOps -\u003e StencilOps -\u003e FragmentStream FragmentDepth -\u003e FrameBuffer c DepthFormat StencilFormat -\u003e FrameBuffer c DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#paintDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintDepthStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream FragmentDepth-\u003eFrameBuffer a DepthFormat StencilFormat-\u003eFrameBuffer a DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Depth Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream FragmentDepth-\u003eFrameBuffer c DepthFormat StencilFormat-\u003eFrameBuffer c DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintRastDepth",
          "package": "GPipe",
          "signature": "DepthFunction -\u003e DepthMask -\u003e FragmentStream (Fragment a) -\u003e FrameBuffer c DepthFormat s -\u003e FrameBuffer c DepthFormat s",
          "source": "src/OutputMerger.html#paintRastDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintRastDepth",
          "normalized": "DepthFunction-\u003eDepthMask-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer b DepthFormat c-\u003eFrameBuffer b DepthFormat c",
          "package": "GPipe",
          "partial": "Rast Depth",
          "signature": "DepthFunction-\u003eDepthMask-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintRastDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintRastDepthStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e DepthFunction -\u003e DepthMask -\u003e StencilOps -\u003e StencilOps -\u003e FragmentStream (Fragment a) -\u003e FrameBuffer c DepthFormat StencilFormat -\u003e FrameBuffer c DepthFormat StencilFormat",
          "source": "src/OutputMerger.html#paintRastDepthStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintRastDepthStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer b DepthFormat StencilFormat-\u003eFrameBuffer b DepthFormat StencilFormat",
          "package": "GPipe",
          "partial": "Rast Depth Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eDepthFunction-\u003eDepthMask-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer c DepthFormat StencilFormat-\u003eFrameBuffer c DepthFormat StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintRastDepthStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintStencil",
          "package": "GPipe",
          "signature": "StencilTests -\u003e StencilOps -\u003e StencilOps -\u003e FragmentStream (Fragment a) -\u003e FrameBuffer c d StencilFormat -\u003e FrameBuffer c d StencilFormat",
          "source": "src/OutputMerger.html#paintStencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "paintStencil",
          "normalized": "StencilTests-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer b c StencilFormat-\u003eFrameBuffer b c StencilFormat",
          "package": "GPipe",
          "partial": "Stencil",
          "signature": "StencilTests-\u003eStencilOps-\u003eStencilOps-\u003eFragmentStream(Fragment a)-\u003eFrameBuffer c d StencilFormat-\u003eFrameBuffer c d StencilFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:paintStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to compare the \u003ccode\u003estencilReference\u003c/code\u003e and the stencil buffers value with.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilComparision",
          "package": "GPipe",
          "signature": "ComparisonFunction",
          "source": "src/OutputMerger.html#StencilTest",
          "type": "function"
        },
        "index": {
          "description": "The function used to compare the stencilReference and the stencil buffers value with",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilComparision",
          "package": "GPipe",
          "partial": "Comparision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:stencilComparision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bit mask with ones in each position that should be compared and written to the stencil buffer.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilMask",
          "package": "GPipe",
          "signature": "Word32",
          "source": "src/OutputMerger.html#StencilTest",
          "type": "function"
        },
        "index": {
          "description": "bit mask with ones in each position that should be compared and written to the stencil buffer",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilMask",
          "package": "GPipe",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:stencilMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value to compare with the stencil buffer's value. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilReference",
          "package": "GPipe",
          "signature": "Int32",
          "source": "src/OutputMerger.html#StencilTest",
          "type": "function"
        },
        "index": {
          "description": "The value to compare with the stencil buffer value",
          "hierarchy": "Graphics GPipe FrameBuffer",
          "module": "Graphics.GPipe.FrameBuffer",
          "name": "stencilReference",
          "package": "GPipe",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-FrameBuffer.html#v:stencilReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFragmentStream\u003c/a\u003e\u003c/code\u003es implement the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class, which provides the\n \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e method that you can use to manipulate those streams. This corresponds to writing and using\n fragment shaders, but in a much more modular way. You may for instance apply \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n several times in a sequence, effectively creating complex shaders.\n\u003c/p\u003e\u003cp\u003eInstances are also provided for the \u003ccode\u003eMonoid\u003c/code\u003e class, so several streams (of the same type) can be\n concatenated. The order is preserved, meaning that the fragments in stream \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003ea \u003ccode\u003emappend\u003c/code\u003e b\u003c/code\u003e will be\n drawn before the fragments in \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll atomic values except textures in fragment streams uses the \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e type constructor.\n Composite types are created by composing the atomic \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e types, rather than wrapping the\n composite type in the \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e type constructors.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e instances for are provided for most of Prelude's numerical classes. Since \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e are prerequisites for these classes, instances are provided for them too, even though\n their methods all will generate errors if used (except \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e). Use the instances of\n \u003ccode\u003e\u003ca\u003eEqB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrdB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIfB\u003c/a\u003e\u003c/code\u003e from the Boolean package if you want to compare \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e values.\n Hyperbolic trigonometrical functions aren't provided either.\n\u003c/p\u003e\u003cp\u003eRewrite rule specializations are provided for the Vec package functions \u003ccode\u003enorm\u003c/code\u003e, \u003ccode\u003enormalize\u003c/code\u003e,\n \u003ccode\u003edot\u003c/code\u003e and \u003ccode\u003ecross\u003c/code\u003e on vectors of \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, so the use of these functions (and others\n from that package that is defined in terms of them) are highly encouraged.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Fragment",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-Stream-Fragment.html",
          "type": "module"
        },
        "index": {
          "description": "FragmentStream implement the Functor class which provides the fmap method that you can use to manipulate those streams This corresponds to writing and using fragment shaders but in much more modular way You may for instance apply fmap several times in sequence effectively creating complex shaders Instances are also provided for the Monoid class so several streams of the same type can be concatenated The order is preserved meaning that the fragments in stream in mappend will be drawn before the fragments in All atomic values except textures in fragment streams uses the Fragment type constructor Composite types are created by composing the atomic Fragment types rather than wrapping the composite type in the Fragment type constructors Fragment instances for are provided for most of Prelude numerical classes Since Eq Ord and Show are prerequisites for these classes instances are provided for them too even though their methods all will generate errors if used except min and max Use the instances of EqB OrdB and IfB from the Boolean package if you want to compare Fragment values Hyperbolic trigonometrical functions aren provided either Rewrite rule specializations are provided for the Vec package functions norm normalize dot and cross on vectors of Fragment Float so the use of these functions and others from that package that is defined in terms of them are highly encouraged",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Fragment",
          "package": "GPipe",
          "partial": "Fragment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to denote a fragment context in the first parameter to \u003ccode\u003e\u003ca\u003eShader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "F",
          "package": "GPipe",
          "source": "src/Shader.html#F",
          "type": "data"
        },
        "index": {
          "description": "Used to denote fragment context in the first parameter to Shader",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "F",
          "package": "GPipe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonyme for atomic values in a fragment on the GPU, e.g. \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Fragment",
          "package": "GPipe",
          "source": "src/Shader.html#Fragment",
          "type": "type"
        },
        "index": {
          "description": "type synonyme for atomic values in fragment on the GPU e.g Fragment Float",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Fragment",
          "package": "GPipe",
          "partial": "Fragment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:Fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of fragments on the GPU, parameterized on the fragments type\n (built up of atoms of type \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "FragmentStream",
          "package": "GPipe",
          "source": "src/GPUStream.html#FragmentStream",
          "type": "data"
        },
        "index": {
          "description": "stream of fragments on the GPU parameterized on the fragments type built up of atoms of type Fragment",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "FragmentStream",
          "package": "GPipe",
          "partial": "Fragment Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:FragmentStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arrow by which vertex data gets converted to fragment data.\n   Use \u003ccode\u003e\u003ca\u003etoFragment\u003c/a\u003e\u003c/code\u003e in the existing instances of \u003ccode\u003e\u003ca\u003eVertexOutput\u003c/a\u003e\u003c/code\u003e to operate in this arrow.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Rasterizer",
          "package": "GPipe",
          "source": "src/Rasterizer.html#Rasterizer",
          "type": "data"
        },
        "index": {
          "description": "An arrow by which vertex data gets converted to fragment data Use toFragment in the existing instances of VertexOutput to operate in this arrow",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "Rasterizer",
          "package": "GPipe",
          "partial": "Rasterizer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:Rasterizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context of types that can be rasterized from vertices in \u003ccode\u003e\u003ca\u003ePrimitiveStream\u003c/a\u003e\u003c/code\u003es to fragments in \u003ccode\u003e\u003ca\u003eFragmentStream\u003c/a\u003e\u003c/code\u003es.\n   Create your own instances in terms of the existing ones, e.g. convert your vertex data to \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es,\n   turn them into \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003etoFragment\u003c/a\u003e\u003c/code\u003e and then convert them to your fragment data representation.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "VertexOutput",
          "package": "GPipe",
          "source": "src/Rasterizer.html#VertexOutput",
          "type": "class"
        },
        "index": {
          "description": "The context of types that can be rasterized from vertices in PrimitiveStream to fragments in FragmentStream Create your own instances in terms of the existing ones e.g convert your vertex data to Vertex Float turn them into Fragment Float with toFragment and then convert them to your fragment data representation",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "VertexOutput",
          "package": "GPipe",
          "partial": "Vertex Output",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:VertexOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "VertexPosition",
          "package": "GPipe",
          "source": "src/GPUStream.html#VertexPosition",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "VertexPosition",
          "package": "GPipe",
          "partial": "Vertex Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#t:VertexPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe derivative in x using local differencing of the rasterized value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "dFdx",
          "package": "GPipe",
          "signature": "Fragment Float -\u003e Fragment Float",
          "source": "src/Shader.html#dFdx",
          "type": "function"
        },
        "index": {
          "description": "The derivative in using local differencing of the rasterized value",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "dFdx",
          "normalized": "Fragment Float-\u003eFragment Float",
          "package": "GPipe",
          "partial": "Fdx",
          "signature": "Fragment Float-\u003eFragment Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:dFdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe derivative in y using local differencing of the rasterized value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "dFdy",
          "package": "GPipe",
          "signature": "Fragment Float -\u003e Fragment Float",
          "source": "src/Shader.html#dFdy",
          "type": "function"
        },
        "index": {
          "description": "The derivative in using local differencing of the rasterized value",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "dFdy",
          "normalized": "Fragment Float-\u003eFragment Float",
          "package": "GPipe",
          "partial": "Fdy",
          "signature": "Fragment Float-\u003eFragment Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:dFdy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters out fragments in a stream where the provided function returns \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "filterFragments",
          "package": "GPipe",
          "signature": "(a -\u003e Fragment Bool) -\u003e FragmentStream a -\u003e FragmentStream a",
          "source": "src/GPUStream.html#filterFragments",
          "type": "function"
        },
        "index": {
          "description": "Filters out fragments in stream where the provided function returns true",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "filterFragments",
          "normalized": "(a-\u003eFragment Bool)-\u003eFragmentStream a-\u003eFragmentStream a",
          "package": "GPipe",
          "partial": "Fragments",
          "signature": "(a-\u003eFragment Bool)-\u003eFragmentStream a-\u003eFragmentStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:filterFragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of the absolute derivative in x and y using local differencing of the rasterized value.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "fwidth",
          "package": "GPipe",
          "signature": "Fragment Float -\u003e Fragment Float",
          "source": "src/Shader.html#fwidth",
          "type": "function"
        },
        "index": {
          "description": "The sum of the absolute derivative in and using local differencing of the rasterized value",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "fwidth",
          "normalized": "Fragment Float-\u003eFragment Float",
          "package": "GPipe",
          "signature": "Fragment Float-\u003eFragment Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:fwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRasterize back side of triangles with vertices containing canonical view coordinates into fragments.    \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeBack",
          "package": "GPipe",
          "signature": "PrimitiveStream Triangle (VertexPosition, a)-\u003e FragmentStream (FragmentInput a)",
          "type": "function"
        },
        "index": {
          "description": "Rasterize back side of triangles with vertices containing canonical view coordinates into fragments",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeBack",
          "normalized": "PrimitiveStream Triangle(VertexPosition,a)-\u003eFragmentStream(FragmentInput a)",
          "package": "GPipe",
          "partial": "Back",
          "signature": "PrimitiveStream Triangle(VertexPosition,a)-\u003eFragmentStream(FragmentInput a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:rasterizeBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRasterize front side of all types of primitives with vertices containing canonical view coordinates into fragments.    \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeFront",
          "package": "GPipe",
          "signature": "PrimitiveStream p (VertexPosition, a)-\u003e FragmentStream (FragmentInput a)",
          "type": "function"
        },
        "index": {
          "description": "Rasterize front side of all types of primitives with vertices containing canonical view coordinates into fragments",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeFront",
          "normalized": "PrimitiveStream a(VertexPosition,b)-\u003eFragmentStream(FragmentInput b)",
          "package": "GPipe",
          "partial": "Front",
          "signature": "PrimitiveStream p(VertexPosition,a)-\u003eFragmentStream(FragmentInput a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:rasterizeFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRasterize both sides of triangles with vertices containing canonical view coordinates into fragments, also returning the primitives side in the fragments.    \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeFrontAndBack",
          "package": "GPipe",
          "signature": "PrimitiveStream Triangle (VertexPosition, a)-\u003e FragmentStream (Fragment Bool, FragmentInput a)",
          "type": "function"
        },
        "index": {
          "description": "Rasterize both sides of triangles with vertices containing canonical view coordinates into fragments also returning the primitives side in the fragments",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "rasterizeFrontAndBack",
          "normalized": "PrimitiveStream Triangle(VertexPosition,a)-\u003eFragmentStream(Fragment Bool,FragmentInput a)",
          "package": "GPipe",
          "partial": "Front And Back",
          "signature": "PrimitiveStream Triangle(VertexPosition,a)-\u003eFragmentStream(Fragment Bool,FragmentInput a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:rasterizeFrontAndBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a vertex value into a fragment value in the \u003ccode\u003e\u003ca\u003eRasterizer\u003c/a\u003e\u003c/code\u003e arrow. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "toFragment",
          "package": "GPipe",
          "signature": "Rasterizer a (FragmentInput a)",
          "source": "src/Rasterizer.html#toFragment",
          "type": "method"
        },
        "index": {
          "description": "Turns vertex value into fragment value in the Rasterizer arrow",
          "hierarchy": "Graphics GPipe Stream Fragment",
          "module": "Graphics.GPipe.Stream.Fragment",
          "name": "toFragment",
          "package": "GPipe",
          "partial": "Fragment",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Fragment.html#v:toFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrimitiveStream\u003c/a\u003e\u003c/code\u003es implement the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class, which provides the\n \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e method that you can use to manipulate those streams. This corresponds to writing and using\n vertex shaders, but in a much more modular way. You may for instance apply \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n several times in a sequence, effectively creating complex shaders.\n\u003c/p\u003e\u003cp\u003eInstances are also provided for the \u003ccode\u003eMonoid\u003c/code\u003e class, so several streams (of the same type) can be\n concatenated. The order is preserved, meaning that the primitives in stream \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003ea \u003ccode\u003emappend\u003c/code\u003e b\u003c/code\u003e will be\n drawn before the primitives in \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll atomic values except textures in vertex streams uses the \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e type constructor.\n Composite types are created by composing the atomic \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e types, rather than wrapping the\n composite type in the \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e type constructors.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e instances for are provided for most of Prelude's numerical classes. Since \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e are prerequisites for these classes, instances are provided for them too, even though\n their methods all will generate errors if used (except \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e). Use the instances of\n \u003ccode\u003e\u003ca\u003eEqB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrdB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIfB\u003c/a\u003e\u003c/code\u003e from the Boolean package if you want to compare \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e values.\n Hyperbolic trigonometrical functions aren't provided either.\n\u003c/p\u003e\u003cp\u003eRewrite rule specializations are provided for the Vec package functions \u003ccode\u003enorm\u003c/code\u003e, \u003ccode\u003enormalize\u003c/code\u003e,\n \u003ccode\u003edot\u003c/code\u003e and \u003ccode\u003ecross\u003c/code\u003e on vectors of \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, so the use of these functions (and others\n from that package that is defined in terms of them) are highly encouraged.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Primitive",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-Stream-Primitive.html",
          "type": "module"
        },
        "index": {
          "description": "PrimitiveStream implement the Functor class which provides the fmap method that you can use to manipulate those streams This corresponds to writing and using vertex shaders but in much more modular way You may for instance apply fmap several times in sequence effectively creating complex shaders Instances are also provided for the Monoid class so several streams of the same type can be concatenated The order is preserved meaning that the primitives in stream in mappend will be drawn before the primitives in All atomic values except textures in vertex streams uses the Vertex type constructor Composite types are created by composing the atomic Vertex types rather than wrapping the composite type in the Vertex type constructors Vertex instances for are provided for most of Prelude numerical classes Since Eq Ord and Show are prerequisites for these classes instances are provided for them too even though their methods all will generate errors if used except min and max Use the instances of EqB OrdB and IfB from the Boolean package if you want to compare Vertex values Hyperbolic trigonometrical functions aren provided either Rewrite rule specializations are provided for the Vec package functions norm normalize dot and cross on vectors of Vertex Float so the use of these functions and others from that package that is defined in terms of them are highly encouraged",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Primitive",
          "package": "GPipe",
          "partial": "Primitive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arrow by which CPU data gets converted to vertex data.\n   Use \u003ccode\u003e\u003ca\u003etoVertex\u003c/a\u003e\u003c/code\u003e in the existing instances of \u003ccode\u003e\u003ca\u003eVertexInput\u003c/a\u003e\u003c/code\u003e to operate in this arrow.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "InputAssembler",
          "package": "GPipe",
          "source": "src/InputAssembler.html#InputAssembler",
          "type": "data"
        },
        "index": {
          "description": "An arrow by which CPU data gets converted to vertex data Use toVertex in the existing instances of VertexInput to operate in this arrow",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "InputAssembler",
          "package": "GPipe",
          "partial": "Input Assembler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:InputAssembler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Line",
          "package": "GPipe",
          "source": "src/GPUStream.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Line",
          "package": "GPipe",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Point",
          "package": "GPipe",
          "source": "src/GPUStream.html#Point",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Point",
          "package": "GPipe",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Primitive",
          "package": "GPipe",
          "source": "src/GPUStream.html#Primitive",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Primitive",
          "package": "GPipe",
          "partial": "Primitive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of primitives built by vertices on the GPU. The first parameter is the primitive type (currently \u003ccode\u003e\u003ca\u003eTriangle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e) and the second the\n the type of each primitives' vertices' type (built up of atoms of type \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "PrimitiveStream",
          "package": "GPipe",
          "source": "src/GPUStream.html#PrimitiveStream",
          "type": "data"
        },
        "index": {
          "description": "stream of primitives built by vertices on the GPU The first parameter is the primitive type currently Triangle Line or Point and the second the the type of each primitives vertices type built up of atoms of type Vertex",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "PrimitiveStream",
          "package": "GPipe",
          "partial": "Primitive Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:PrimitiveStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Triangle",
          "package": "GPipe",
          "source": "src/GPUStream.html#Triangle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Triangle",
          "package": "GPipe",
          "partial": "Triangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to denote a vertex context in the first parameter to \u003ccode\u003e\u003ca\u003eShader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "V",
          "package": "GPipe",
          "source": "src/Shader.html#V",
          "type": "data"
        },
        "index": {
          "description": "Used to denote vertex context in the first parameter to Shader",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "V",
          "package": "GPipe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonyme for atomic values in a vertex on the GPU, e.g. \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Vertex",
          "package": "GPipe",
          "source": "src/Shader.html#Vertex",
          "type": "type"
        },
        "index": {
          "description": "type synonyme for atomic values in vertex on the GPU e.g Vertex Float",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "Vertex",
          "package": "GPipe",
          "partial": "Vertex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:Vertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context of types that can be converted into vertices in \u003ccode\u003e\u003ca\u003ePrimitiveStream\u003c/a\u003e\u003c/code\u003es.\n   Create your own instances in terms of the existing ones, e.g. convert your vertex data to \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es,\n   turn them into \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003etoVertex\u003c/a\u003e\u003c/code\u003e and then convert them to your vertex data representation.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "VertexInput",
          "package": "GPipe",
          "source": "src/InputAssembler.html#VertexInput",
          "type": "class"
        },
        "index": {
          "description": "The context of types that can be converted into vertices in PrimitiveStream Create your own instances in terms of the existing ones e.g convert your vertex data to Float turn them into Vertex Float with toVertex and then convert them to your vertex data representation",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "VertexInput",
          "package": "GPipe",
          "partial": "Vertex Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#t:VertexInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "LineList",
          "package": "GPipe",
          "signature": "LineList",
          "source": "src/GPUStream.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "LineList",
          "package": "GPipe",
          "partial": "Line List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:LineList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "LineStrip",
          "package": "GPipe",
          "signature": "LineStrip",
          "source": "src/GPUStream.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "LineStrip",
          "package": "GPipe",
          "partial": "Line Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:LineStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "PointList",
          "package": "GPipe",
          "signature": "PointList",
          "source": "src/GPUStream.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "PointList",
          "package": "GPipe",
          "partial": "Point List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:PointList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleFan",
          "package": "GPipe",
          "signature": "TriangleFan",
          "source": "src/GPUStream.html#Triangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleFan",
          "package": "GPipe",
          "partial": "Triangle Fan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:TriangleFan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleList",
          "package": "GPipe",
          "signature": "TriangleList",
          "source": "src/GPUStream.html#Triangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleList",
          "package": "GPipe",
          "partial": "Triangle List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:TriangleList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleStrip",
          "package": "GPipe",
          "signature": "TriangleStrip",
          "source": "src/GPUStream.html#Triangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "TriangleStrip",
          "package": "GPipe",
          "partial": "Triangle Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:TriangleStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of values to a \u003ccode\u003e\u003ca\u003ePrimitiveStream\u003c/a\u003e\u003c/code\u003e, using a specified \u003ccode\u003e\u003ca\u003ePrimitive\u003c/a\u003e\u003c/code\u003e type.\n This function is lazy in the aspect that if parts of the values aren't used on the GPU, they won't\n get evaluated and transferred there either.  \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toGPUStream",
          "package": "GPipe",
          "signature": "p-\u003e [CPU a]-\u003e PrimitiveStream p a",
          "type": "function"
        },
        "index": {
          "description": "Converts list of values to PrimitiveStream using specified Primitive type This function is lazy in the aspect that if parts of the values aren used on the GPU they won get evaluated and transferred there either",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toGPUStream",
          "normalized": "a-\u003e[CPU b]-\u003ePrimitiveStream a b",
          "package": "GPipe",
          "partial": "GPUStream",
          "signature": "p-\u003e[CPU a]-\u003ePrimitiveStream p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:toGPUStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of values to a \u003ccode\u003e\u003ca\u003ePrimitiveStream\u003c/a\u003e\u003c/code\u003e, using a specified \u003ccode\u003e\u003ca\u003ePrimitive\u003c/a\u003e\u003c/code\u003e type and an index list.\n This will use index buffer objects on the GPU, and is recommended if several primitives share vertices.\n This function is lazy in the aspect that if parts of the values aren't used on the GPU, they won't\n get evaluated and transferred there either.  \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toIndexedGPUStream",
          "package": "GPipe",
          "signature": "p-\u003e [CPU a]-\u003e [Int]-\u003e PrimitiveStream p a",
          "type": "function"
        },
        "index": {
          "description": "Converts list of values to PrimitiveStream using specified Primitive type and an index list This will use index buffer objects on the GPU and is recommended if several primitives share vertices This function is lazy in the aspect that if parts of the values aren used on the GPU they won get evaluated and transferred there either",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toIndexedGPUStream",
          "normalized": "a-\u003e[CPU b]-\u003e[Int]-\u003ePrimitiveStream a b",
          "package": "GPipe",
          "partial": "Indexed GPUStream",
          "signature": "p-\u003e[CPU a]-\u003e[Int]-\u003ePrimitiveStream p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:toIndexedGPUStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns an ordinary value into a vertex value in the \u003ccode\u003e\u003ca\u003eInputAssembler\u003c/a\u003e\u003c/code\u003e arrow.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toVertex",
          "package": "GPipe",
          "signature": "InputAssembler (CPU a) a",
          "source": "src/InputAssembler.html#toVertex",
          "type": "method"
        },
        "index": {
          "description": "Turns an ordinary value into vertex value in the InputAssembler arrow",
          "hierarchy": "Graphics GPipe Stream Primitive",
          "module": "Graphics.GPipe.Stream.Primitive",
          "name": "toVertex",
          "package": "GPipe",
          "partial": "Vertex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream-Primitive.html#v:toVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA GPipe program mainly consits of creating and manipulating streams of primitives and fragments.\n The modules \u003ca\u003eGraphics.GPipe.Stream.Primitive\u003c/a\u003e and \u003ca\u003eGraphics.GPipe.Stream.Fragment\u003c/a\u003e defines those streams.\n\u003c/p\u003e\u003cp\u003eAll atomic values except textures in streams uses the \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e type constructors.\n Composite types are created by composing the atomic \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e types, rather than wrapping the\n composite type in any of those type constructors. This module provides the common classes for those atomic types,\n as well as reexports of imported common types and modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "Stream",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "GPipe program mainly consits of creating and manipulating streams of primitives and fragments The modules Graphics.GPipe.Stream.Primitive and Graphics.GPipe.Stream.Fragment defines those streams All atomic values except textures in streams uses the Vertex or Fragment type constructors Composite types are created by composing the atomic Vertex or Fragment types rather than wrapping the composite type in any of those type constructors This module provides the common classes for those atomic types as well as reexports of imported common types and modules",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Stream",
          "package": "GPipe",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector constructor. \u003ccode\u003e(:.)\u003c/code\u003e for vectors is like \u003ccode\u003e(:)\u003c/code\u003e for lists, and\n \u003ccode\u003e()\u003c/code\u003e takes the place of \u003ccode\u003e[]\u003c/code\u003e. (The list of instances here is not meant to be\n readable.)\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": ":.",
          "package": "GPipe",
          "type": "data"
        },
        "index": {
          "description": "The vector constructor for vectors is like for lists and takes the place of The list of instances here is not meant to be readable",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": ":.",
          "package": "GPipe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a common way to convert numeric types to integer and floating point representations.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "Convert",
          "package": "GPipe",
          "source": "src/Shader.html#Convert",
          "type": "class"
        },
        "index": {
          "description": "Provides common way to convert numeric types to integer and floating point representations",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Convert",
          "package": "GPipe",
          "partial": "Convert",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes a type on the GPU, that can be moved there from the CPU (through the internal use of uniforms).\n   Use the existing instances of this class to create new ones.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "GPU",
          "package": "GPipe",
          "source": "src/Shader.html#GPU",
          "type": "class"
        },
        "index": {
          "description": "Denotes type on the GPU that can be moved there from the CPU through the internal use of uniforms Use the existing instances of this class to create new ones",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "GPU",
          "package": "GPipe",
          "partial": "GPU",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:GPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides the GPU functions either not found in Prelude's numerical classes, or that has wrong types.\n   Instances are also provided for normal \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es.\n   Minimal complete definition: \u003ccode\u003e\u003ca\u003efloor'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eceiling'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "Real'",
          "package": "GPipe",
          "source": "src/Shader.html#Real%27",
          "type": "class"
        },
        "index": {
          "description": "This class provides the GPU functions either not found in Prelude numerical classes or that has wrong types Instances are also provided for normal Float and Double Minimal complete definition floor and ceiling",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Real'",
          "package": "GPipe",
          "partial": "Real'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Real-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type constructor for atomic values in a specific GPU context (i.e. \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e), e.g. \u003ccode\u003e\u003ca\u003eShader\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "Shader",
          "package": "GPipe",
          "source": "src/Shader.html#Shader",
          "type": "data"
        },
        "index": {
          "description": "An opaque type constructor for atomic values in specific GPU context i.e or e.g Shader Float",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Shader",
          "package": "GPipe",
          "partial": "Shader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Shader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "Vec2",
          "package": "GPipe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Vec2",
          "package": "GPipe",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "Vec3",
          "package": "GPipe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Vec3",
          "package": "GPipe",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "Vec4",
          "package": "GPipe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "Vec4",
          "package": "GPipe",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#t:Vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": ":.",
          "package": "GPipe",
          "signature": "a :. !b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": ":.",
          "package": "GPipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "ceiling'",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#ceiling%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "ceiling'",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:ceiling-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "clamp",
          "package": "GPipe",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Shader.html#clamp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "clamp",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "exp2",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#exp2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "exp2",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:exp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "floor'",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#floor%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "floor'",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:floor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "fract'",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#fract%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "fract'",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:fract-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "log2",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#log2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "log2",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:log2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "mix",
          "package": "GPipe",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Shader.html#mix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "mix",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "mod'",
          "package": "GPipe",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Shader.html#mod%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "mod'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "rsqrt",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#rsqrt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "rsqrt",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:rsqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "saturate",
          "package": "GPipe",
          "signature": "a -\u003e a",
          "source": "src/Shader.html#saturate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "saturate",
          "normalized": "a-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:saturate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "smoothstep",
          "package": "GPipe",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Shader.html#smoothstep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "smoothstep",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:smoothstep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Stream",
          "name": "step",
          "package": "GPipe",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Shader.html#step",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "step",
          "normalized": "a-\u003ea-\u003ea",
          "package": "GPipe",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a floating point number.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "toFloat",
          "package": "GPipe",
          "signature": "a -\u003e ConvertFloat a",
          "source": "src/Shader.html#toFloat",
          "type": "method"
        },
        "index": {
          "description": "Convert to floating point number",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "toFloat",
          "normalized": "a-\u003eConvertFloat a",
          "package": "GPipe",
          "partial": "Float",
          "signature": "a-\u003eConvertFloat a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:toFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a value from the CPU to the GPU.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "toGPU",
          "package": "GPipe",
          "signature": "CPU a -\u003e a",
          "source": "src/Shader.html#toGPU",
          "type": "method"
        },
        "index": {
          "description": "Converts value from the CPU to the GPU",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "toGPU",
          "normalized": "CPU a-\u003ea",
          "package": "GPipe",
          "partial": "GPU",
          "signature": "CPU a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:toGPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an integral number, using truncation if necessary.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Stream",
          "name": "toInt",
          "package": "GPipe",
          "signature": "a -\u003e ConvertInt a",
          "source": "src/Shader.html#toInt",
          "type": "method"
        },
        "index": {
          "description": "Convert to an integral number using truncation if necessary",
          "hierarchy": "Graphics GPipe Stream",
          "module": "Graphics.GPipe.Stream",
          "name": "toInt",
          "normalized": "a-\u003eConvertInt a",
          "package": "GPipe",
          "partial": "Int",
          "signature": "a-\u003eConvertInt a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Stream.html#v:toInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTextures are type safe in GPipe, e.g. when you sample a \u003ccode\u003eRGBFormat\u003c/code\u003e texture, you get an \u003ccode\u003eRGB\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eTextures are either created directly from memory, or by giving a framebuffer a concrete size (which\n it otherwise don't have). The latter is however not possible for 3D textures.\n\u003c/p\u003e\u003cp\u003eDepth textures are textures that contains depth component data (of type \u003ccode\u003eDepthFormat\u003c/code\u003e) but takes the type\n of \u003ccode\u003eLuminanceFormat\u003c/code\u003e or \u003ccode\u003eAlphaFormat\u003c/code\u003e textures, and are sampled as such.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture",
          "package": "GPipe",
          "source": "src/Graphics-GPipe-Texture.html",
          "type": "module"
        },
        "index": {
          "description": "Textures are type safe in GPipe e.g when you sample RGBFormat texture you get an RGB value Textures are either created directly from memory or by giving framebuffer concrete size which it otherwise don have The latter is however not possible for textures Depth textures are textures that contains depth component data of type DepthFormat but takes the type of LuminanceFormat or AlphaFormat textures and are sampled as such",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture",
          "package": "GPipe",
          "partial": "Texture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe formats that is instances of this class may be used as depth textures, i.e. created with\n   \u003ccode\u003e\u003ca\u003enewDepthTexture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromFrameBufferDepth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromFrameBufferCubeDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "DepthColorFormat",
          "package": "GPipe",
          "source": "src/Textures.html#DepthColorFormat",
          "type": "class"
        },
        "index": {
          "description": "The formats that is instances of this class may be used as depth textures i.e created with newDepthTexture fromFrameBufferDepth and fromFrameBufferCubeDepth",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "DepthColorFormat",
          "package": "GPipe",
          "partial": "Depth Color Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:DepthColorFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdge mode used in sampler state\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "EdgeMode",
          "package": "GPipe",
          "source": "src/Resources.html#EdgeMode",
          "type": "data"
        },
        "index": {
          "description": "Edge mode used in sampler state",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "EdgeMode",
          "package": "GPipe",
          "partial": "Edge Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:EdgeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter mode used in sampler state\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Filter",
          "package": "GPipe",
          "source": "src/Resources.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "Filter mode used in sampler state",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Filter",
          "package": "GPipe",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe textures that is instances of this class may be created from a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es color buffer.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "FromFrameBufferColor",
          "package": "GPipe",
          "source": "src/Textures.html#FromFrameBufferColor",
          "type": "class"
        },
        "index": {
          "description": "The textures that is instances of this class may be created from FrameBuffer color buffer",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "FromFrameBufferColor",
          "package": "GPipe",
          "partial": "From Frame Buffer Color",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:FromFrameBufferColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe textures that is instances of this class may be created from a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003es depth buffer.\n The texture will have the type of a color format and is sampled as such, but contains depth\n component information internally.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "FromFrameBufferDepth",
          "package": "GPipe",
          "source": "src/Textures.html#FromFrameBufferDepth",
          "type": "class"
        },
        "index": {
          "description": "The textures that is instances of this class may be created from FrameBuffer depth buffer The texture will have the type of color format and is sampled as such but contains depth component information internally",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "FromFrameBufferDepth",
          "package": "GPipe",
          "partial": "From Frame Buffer Depth",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:FromFrameBufferDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure describing how a texture is sampled\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Sampler",
          "package": "GPipe",
          "source": "src/Resources.html#Sampler",
          "type": "data"
        },
        "index": {
          "description": "structure describing how texture is sampled",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Sampler",
          "package": "GPipe",
          "partial": "Sampler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Texture",
          "package": "GPipe",
          "source": "src/Textures.html#Texture",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture",
          "package": "GPipe",
          "partial": "Texture",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 1D texture. Assumes a frame buffer of height 1 when created from such.\n \u003ccode\u003e\u003ca\u003eTexture1D\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e has the following associated types in its \u003ccode\u003e\u003ca\u003eTexture\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTextureFormat (Texture1D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ef\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureSize (Texture1D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureVertexCoord (Texture1D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureFragmentCoord (Texture1D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture1D",
          "package": "GPipe",
          "source": "src/Textures.html#Texture1D",
          "type": "data"
        },
        "index": {
          "description": "texture Assumes frame buffer of height when created from such Texture1D has the following associated types in its Texture instance TextureFormat Texture1D TextureSize Texture1D Int TextureVertexCoord Texture1D Vertex Float TextureFragmentCoord Texture1D Fragment Float",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture1D",
          "package": "GPipe",
          "partial": "Texture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Texture1D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D texture.\n \u003ccode\u003e\u003ca\u003eTexture2D\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e has the following associated types in its \u003ccode\u003e\u003ca\u003eTexture\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTextureFormat (Texture2D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ef\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureSize (Texture2D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureVertexCoord (Texture2D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureFragmentCoord (Texture2D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture2D",
          "package": "GPipe",
          "source": "src/Textures.html#Texture2D",
          "type": "data"
        },
        "index": {
          "description": "texture Texture2D has the following associated types in its Texture instance TextureFormat Texture2D TextureSize Texture2D Vec2 Int TextureVertexCoord Texture2D Vec2 Vertex Float TextureFragmentCoord Texture2D Vec2 Fragment Float",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture2D",
          "package": "GPipe",
          "partial": "Texture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Texture2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3D texture. May only be created from main memory in GPipe.\n \u003ccode\u003e\u003ca\u003eTexture3D\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e has the following associated types in its \u003ccode\u003e\u003ca\u003eTexture\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTextureFormat (Texture3D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ef\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureSize (Texture3D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureVertexCoord (Texture3D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureFragmentCoord (Texture3D f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture3D",
          "package": "GPipe",
          "source": "src/Textures.html#Texture3D",
          "type": "data"
        },
        "index": {
          "description": "texture May only be created from main memory in GPipe Texture3D has the following associated types in its Texture instance TextureFormat Texture3D TextureSize Texture3D Vec3 Int TextureVertexCoord Texture3D Vec3 Vertex Float TextureFragmentCoord Texture3D Vec3 Fragment Float",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Texture3D",
          "package": "GPipe",
          "partial": "Texture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:Texture3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cube texture. The sides of the cube are always specified in this order: Positive X, negative X,\n positive Y, negative Y, positive Z, negative Z.\n \u003ccode\u003e\u003ca\u003eTextureCube\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e has the following associated types in its \u003ccode\u003e\u003ca\u003eTexture\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTextureFormat (TextureCube f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ef\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureSize (TextureCube f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e (The size of each side)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureVertexCoord (TextureCube f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTextureFragmentCoord (TextureCube f)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "TextureCube",
          "package": "GPipe",
          "source": "src/Textures.html#TextureCube",
          "type": "data"
        },
        "index": {
          "description": "cube texture The sides of the cube are always specified in this order Positive negative positive negative positive negative TextureCube has the following associated types in its Texture instance TextureFormat TextureCube TextureSize TextureCube Vec2 Int The size of each side TextureVertexCoord TextureCube Vec3 Vertex Float TextureFragmentCoord TextureCube Vec3 Fragment Float",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "TextureCube",
          "package": "GPipe",
          "partial": "Texture Cube",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#t:TextureCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Clamp",
          "package": "GPipe",
          "signature": "Clamp",
          "source": "src/Resources.html#EdgeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Clamp",
          "package": "GPipe",
          "partial": "Clamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Linear",
          "package": "GPipe",
          "signature": "Linear",
          "source": "src/Resources.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Linear",
          "package": "GPipe",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Mirror",
          "package": "GPipe",
          "signature": "Mirror",
          "source": "src/Resources.html#EdgeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Mirror",
          "package": "GPipe",
          "partial": "Mirror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Point",
          "package": "GPipe",
          "signature": "Point",
          "source": "src/Resources.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Point",
          "package": "GPipe",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Sampler",
          "package": "GPipe",
          "signature": "Sampler Filter EdgeMode",
          "source": "src/Resources.html#Sampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Sampler",
          "package": "GPipe",
          "partial": "Sampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture",
          "name": "Wrap",
          "package": "GPipe",
          "signature": "Wrap",
          "source": "src/Resources.html#EdgeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "Wrap",
          "package": "GPipe",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a texture of a specific format from a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003e and a size. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferColor",
          "package": "GPipe",
          "signature": "TextureFormat t -\u003e TextureSize t -\u003e FrameBuffer c d s -\u003e t",
          "source": "src/Textures.html#fromFrameBufferColor",
          "type": "method"
        },
        "index": {
          "description": "Create texture of specific format from FrameBuffer and size",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferColor",
          "normalized": "TextureFormat a-\u003eTextureSize a-\u003eFrameBuffer b c d-\u003ea",
          "package": "GPipe",
          "partial": "Frame Buffer Color",
          "signature": "TextureFormat t-\u003eTextureSize t-\u003eFrameBuffer c d s-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:fromFrameBufferColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTextureCube\u003c/a\u003e\u003c/code\u003e of a specific format and size from the the color buffers of six framebuffers.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferCubeColor",
          "package": "GPipe",
          "signature": "c -\u003e Vec2 Int -\u003e FrameBuffer c d1 s1 -\u003e FrameBuffer c d2 s2 -\u003e FrameBuffer c d3 s3 -\u003e FrameBuffer c d4 s4 -\u003e FrameBuffer c d5 s5 -\u003e FrameBuffer c d6 s6 -\u003e TextureCube c",
          "source": "src/Textures.html#fromFrameBufferCubeColor",
          "type": "function"
        },
        "index": {
          "description": "Create TextureCube of specific format and size from the the color buffers of six framebuffers",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferCubeColor",
          "normalized": "a-\u003eVec Int-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c-\u003eFrameBuffer a b c-\u003eTextureCube a",
          "package": "GPipe",
          "partial": "Frame Buffer Cube Color",
          "signature": "c-\u003eVec Int-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s-\u003eFrameBuffer c d s-\u003eTextureCube c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:fromFrameBufferCubeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTextureCube\u003c/a\u003e\u003c/code\u003e of a specific depth format and size from the the depth buffers of six framebuffers.\n The texture will have the type of a color format and is sampled as such, but contains depth\n component information internally.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferCubeDepth",
          "package": "GPipe",
          "signature": "DepthFormat -\u003e Vec2 Int -\u003e FrameBuffer c1 DepthFormat s1 -\u003e FrameBuffer c2 DepthFormat s2 -\u003e FrameBuffer c3 DepthFormat s3 -\u003e FrameBuffer c4 DepthFormat s4 -\u003e FrameBuffer c5 DepthFormat s5 -\u003e FrameBuffer c6 DepthFormat s6 -\u003e TextureCube d",
          "source": "src/Textures.html#fromFrameBufferCubeDepth",
          "type": "function"
        },
        "index": {
          "description": "Create TextureCube of specific depth format and size from the the depth buffers of six framebuffers The texture will have the type of color format and is sampled as such but contains depth component information internally",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferCubeDepth",
          "normalized": "DepthFormat-\u003eVec Int-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b-\u003eFrameBuffer a DepthFormat b-\u003eTextureCube c",
          "package": "GPipe",
          "partial": "Frame Buffer Cube Depth",
          "signature": "DepthFormat-\u003eVec Int-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s-\u003eFrameBuffer c DepthFormat s-\u003eTextureCube d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:fromFrameBufferCubeDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a texture of a specific depth format from a \u003ccode\u003e\u003ca\u003eFrameBuffer\u003c/a\u003e\u003c/code\u003e and a size.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferDepth",
          "package": "GPipe",
          "signature": "DepthFormat -\u003e TextureSize t -\u003e FrameBuffer c DepthFormat s -\u003e t",
          "source": "src/Textures.html#fromFrameBufferDepth",
          "type": "method"
        },
        "index": {
          "description": "Create texture of specific depth format from FrameBuffer and size",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "fromFrameBufferDepth",
          "normalized": "DepthFormat-\u003eTextureSize a-\u003eFrameBuffer b DepthFormat c-\u003ea",
          "package": "GPipe",
          "partial": "Frame Buffer Depth",
          "signature": "DepthFormat-\u003eTextureSize t-\u003eFrameBuffer c DepthFormat s-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:fromFrameBufferDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a depth texture from data in main memory. The texture will have the type of a color format and is sampled as such, but contains depth\n component information internally. It lives in the IO monad for the sake of the Ptr's, and could otherwise safely be wrapped in \u003ccode\u003eunsafePerformIO\u003c/code\u003e calls.  \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "newDepthTexture",
          "package": "GPipe",
          "signature": "CPUFormat (TextureFormat t)-\u003e DepthFormat-\u003e TextureSize t-\u003e [Ptr a]-\u003e IO t",
          "type": "function"
        },
        "index": {
          "description": "Creates depth texture from data in main memory The texture will have the type of color format and is sampled as such but contains depth component information internally It lives in the IO monad for the sake of the Ptr and could otherwise safely be wrapped in unsafePerformIO calls",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "newDepthTexture",
          "normalized": "CPUFormat(TextureFormat a)-\u003eDepthFormat-\u003eTextureSize a-\u003e[Ptr b]-\u003eIO a",
          "package": "GPipe",
          "partial": "Depth Texture",
          "signature": "CPUFormat(TextureFormat t)-\u003eDepthFormat-\u003eTextureSize t-\u003e[Ptr a]-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:newDepthTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a texture from color data in main memory. It lives in the IO monad for the sake of the Ptr's, and could otherwise safely be wrapped in \u003ccode\u003eunsafePerformIO\u003c/code\u003e calls.  \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "newTexture",
          "package": "GPipe",
          "signature": "CPUFormat (TextureFormat t)-\u003e TextureFormat t-\u003e TextureSize t-\u003e [Ptr a]-\u003e IO t",
          "type": "function"
        },
        "index": {
          "description": "Creates texture from color data in main memory It lives in the IO monad for the sake of the Ptr and could otherwise safely be wrapped in unsafePerformIO calls",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "newTexture",
          "normalized": "CPUFormat(TextureFormat a)-\u003eTextureFormat a-\u003eTextureSize a-\u003e[Ptr b]-\u003eIO a",
          "package": "GPipe",
          "partial": "Texture",
          "signature": "CPUFormat(TextureFormat t)-\u003eTextureFormat t-\u003eTextureSize t-\u003e[Ptr a]-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:newTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamples the texture using mipmaps in a \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "sample",
          "package": "GPipe",
          "signature": "Sampler -\u003e t -\u003e TextureFragmentCoord t -\u003e Color (TextureFormat t) (Fragment Float)",
          "source": "src/Textures.html#sample",
          "type": "method"
        },
        "index": {
          "description": "Samples the texture using mipmaps in Fragment",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "sample",
          "normalized": "Sampler-\u003ea-\u003eTextureFragmentCoord a-\u003eColor(TextureFormat a)(Fragment Float)",
          "package": "GPipe",
          "signature": "Sampler-\u003et-\u003eTextureFragmentCoord t-\u003eColor(TextureFormat t)(Fragment Float)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamples the texture using mipmaps in a \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e, with a bias to add to the mipmap level. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "sampleBias",
          "package": "GPipe",
          "signature": "Sampler -\u003e t -\u003e TextureFragmentCoord t -\u003e Fragment Float -\u003e Color (TextureFormat t) (Fragment Float)",
          "source": "src/Textures.html#sampleBias",
          "type": "method"
        },
        "index": {
          "description": "Samples the texture using mipmaps in Fragment with bias to add to the mipmap level",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "sampleBias",
          "normalized": "Sampler-\u003ea-\u003eTextureFragmentCoord a-\u003eFragment Float-\u003eColor(TextureFormat a)(Fragment Float)",
          "package": "GPipe",
          "partial": "Bias",
          "signature": "Sampler-\u003et-\u003eTextureFragmentCoord t-\u003eFragment Float-\u003eColor(TextureFormat t)(Fragment Float)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:sampleBias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamples the texture using a specific mipmap in a \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "sampleLod",
          "package": "GPipe",
          "signature": "Sampler -\u003e t -\u003e TextureVertexCoord t -\u003e Vertex Float -\u003e Color (TextureFormat t) (Vertex Float)",
          "source": "src/Textures.html#sampleLod",
          "type": "method"
        },
        "index": {
          "description": "Samples the texture using specific mipmap in Vertex",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "sampleLod",
          "normalized": "Sampler-\u003ea-\u003eTextureVertexCoord a-\u003eVertex Float-\u003eColor(TextureFormat a)(Vertex Float)",
          "package": "GPipe",
          "partial": "Lod",
          "signature": "Sampler-\u003et-\u003eTextureVertexCoord t-\u003eVertex Float-\u003eColor(TextureFormat t)(Vertex Float)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:sampleLod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the byte size of all mipmaps for a specific format and size, which eases the useage of\n \u003ccode\u003e\u003ca\u003enewTexture\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enewDepthTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture",
          "name": "textureCPUFormatByteSize",
          "package": "GPipe",
          "signature": "CPUFormat (TextureFormat t) -\u003e TextureSize t -\u003e [Int]",
          "source": "src/Textures.html#textureCPUFormatByteSize",
          "type": "method"
        },
        "index": {
          "description": "Calculates the byte size of all mipmaps for specific format and size which eases the useage of newTexture and newDepthTexture",
          "hierarchy": "Graphics GPipe Texture",
          "module": "Graphics.GPipe.Texture",
          "name": "textureCPUFormatByteSize",
          "normalized": "CPUFormat(TextureFormat a)-\u003eTextureSize a-\u003e[Int]",
          "package": "GPipe",
          "partial": "CPUFormat Byte Size",
          "signature": "CPUFormat(TextureFormat t)-\u003eTextureSize t-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe-Texture.html#v:textureCPUFormatByteSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGPipe models the entire graphics pipeline in a purely functional, immutable and typesafe way. It is built on top of the programmable pipeline (i.e. non-fixed function) of\n OpenGL 2.1 and uses features such as vertex buffer objects (VBO's), texture objects and GLSL shader code synthetisation to create fast graphics programs. Buffers,\n textures and shaders are cached internally to ensure fast framerate, and GPipe is also capable of managing multiple windows and contexts. By creating your own\n instances of GPipes classes, it's possible to use additional datatypes on the GPU.\n\u003c/p\u003e\u003cp\u003eYou'll need full OpenGL 2.1 support, including GLSL 1.20 to use GPipe. Thanks to OpenGLRaw, you may still build GPipe programs on machines lacking this support.\n\u003c/p\u003e\u003cp\u003eThis is a conveniance module, combining GPipes all other modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe",
          "name": "GPipe",
          "package": "GPipe",
          "source": "src/Graphics-GPipe.html",
          "type": "module"
        },
        "index": {
          "description": "GPipe models the entire graphics pipeline in purely functional immutable and typesafe way It is built on top of the programmable pipeline i.e non-fixed function of OpenGL and uses features such as vertex buffer objects VBO texture objects and GLSL shader code synthetisation to create fast graphics programs Buffers textures and shaders are cached internally to ensure fast framerate and GPipe is also capable of managing multiple windows and contexts By creating your own instances of GPipes classes it possible to use additional datatypes on the GPU You ll need full OpenGL support including GLSL to use GPipe Thanks to OpenGLRaw you may still build GPipe programs on machines lacking this support This is conveniance module combining GPipes all other modules",
          "hierarchy": "Graphics GPipe",
          "module": "Graphics.GPipe",
          "name": "GPipe",
          "package": "GPipe",
          "partial": "GPipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe/docs/Graphics-GPipe.html#"
      }
    }
  ]
]