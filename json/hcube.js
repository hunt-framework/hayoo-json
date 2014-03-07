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
        "word": "hcube"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides functions for re-constructing internal data representation\n of virtual cube from a physical cube.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Cons",
          "name": "Cons",
          "package": "hcube",
          "source": "src/HCube-Cons.html",
          "type": "module"
        },
        "index": {
          "description": "Provides functions for re-constructing internal data representation of virtual cube from physical cube",
          "hierarchy": "HCube Cons",
          "module": "HCube.Cons",
          "name": "Cons",
          "package": "hcube",
          "partial": "Cons",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Cons.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs the orientaion of a cubie from the color of two of its faces.\n\u003c/p\u003e",
          "module": "HCube.Cons",
          "name": "consOrient",
          "package": "hcube",
          "signature": "(Side, Color) -\u003e (Side, Color) -\u003e Orient",
          "source": "src/HCube-Cons.html#consOrient",
          "type": "function"
        },
        "index": {
          "description": "Constructs the orientaion of cubie from the color of two of its faces",
          "hierarchy": "HCube Cons",
          "module": "HCube.Cons",
          "name": "consOrient",
          "normalized": "(Side,Color)-\u003e(Side,Color)-\u003eOrient",
          "package": "hcube",
          "partial": "Orient",
          "signature": "(Side,Color)-\u003e(Side,Color)-\u003eOrient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Cons.html#v:consOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Cons",
          "name": "fromPhysical",
          "package": "hcube",
          "signature": "FilePath -\u003e IO Rubik",
          "source": "src/HCube-Cons.html#fromPhysical",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Cons",
          "module": "HCube.Cons",
          "name": "fromPhysical",
          "normalized": "FilePath-\u003eIO Rubik",
          "package": "hcube",
          "partial": "Physical",
          "signature": "FilePath-\u003eIO Rubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Cons.html#v:fromPhysical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a virtual cube from a physical cube using CubeSurf.\n\u003c/p\u003e",
          "module": "HCube.Cons",
          "name": "realToVirtual",
          "package": "hcube",
          "signature": "CubeSurf -\u003e Rubik",
          "source": "src/HCube-Cons.html#realToVirtual",
          "type": "function"
        },
        "index": {
          "description": "Constructs virtual cube from physical cube using CubeSurf",
          "hierarchy": "HCube Cons",
          "module": "HCube.Cons",
          "name": "realToVirtual",
          "normalized": "CubeSurf-\u003eRubik",
          "package": "hcube",
          "partial": "To Virtual",
          "signature": "CubeSurf-\u003eRubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Cons.html#v:realToVirtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Data",
          "package": "hcube",
          "source": "src/HCube-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Data",
          "package": "hcube",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "ActualCube",
          "package": "hcube",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "data"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "ActualCube",
          "package": "hcube",
          "partial": "Actual Cube",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:ActualCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the color of a cubie face.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Color",
          "package": "hcube",
          "source": "src/HCube-Data.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Represents the color of cubie face",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Color",
          "package": "hcube",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString with each character representing a color of a physical cubie.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "ColorTag",
          "package": "hcube",
          "source": "src/HCube-Data.html#ColorTag",
          "type": "type"
        },
        "index": {
          "description": "String with each character representing color of physical cubie",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "ColorTag",
          "package": "hcube",
          "partial": "Color Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:ColorTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for simplistic processing of console commands.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Command",
          "package": "hcube",
          "source": "src/HCube-Data.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Used for simplistic processing of console commands",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Command",
          "package": "hcube",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used to specify state of physical cube.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "CubeSurf",
          "package": "hcube",
          "source": "src/HCube-Data.html#CubeSurf",
          "type": "type"
        },
        "index": {
          "description": "Type used to specify state of physical cube",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "CubeSurf",
          "package": "hcube",
          "partial": "Cube Surf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:CubeSurf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines direction of slab movement.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Direction",
          "package": "hcube",
          "source": "src/HCube-Data.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "Defines direction of slab movement",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Direction",
          "package": "hcube",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Format",
          "package": "hcube",
          "source": "src/HCube-Data.html#Format",
          "type": "type"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Format",
          "package": "hcube",
          "partial": "Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrices in hcube are constructed from column vectors.\n The third vector is often chosen as the cross product of the first two\n such that the determinate of the matrix is one.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Matrix",
          "package": "hcube",
          "source": "src/HCube-Data.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Matrices in hcube are constructed from column vectors The third vector is often chosen as the cross product of the first two such that the determinate of the matrix is one",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Matrix",
          "package": "hcube",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger type used in hcube.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Numb",
          "package": "hcube",
          "source": "src/HCube-Data.html#Numb",
          "type": "type"
        },
        "index": {
          "description": "Integer type used in hcube",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Numb",
          "package": "hcube",
          "partial": "Numb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Numb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint is used in transformations of cubies in a two dimensional plane.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Point",
          "package": "hcube",
          "source": "src/HCube-Data.html#Point",
          "type": "type"
        },
        "index": {
          "description": "Point is used in transformations of cubies in two dimensional plane",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Point",
          "package": "hcube",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Projection",
          "package": "hcube",
          "source": "src/HCube-Data.html#Projection",
          "type": "type"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Projection",
          "package": "hcube",
          "partial": "Projection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Projection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a rotation of an arbitrary cube slice.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Rotation",
          "package": "hcube",
          "source": "src/HCube-Data.html#Rotation",
          "type": "data"
        },
        "index": {
          "description": "Defines rotation of an arbitrary cube slice",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Rotation",
          "package": "hcube",
          "partial": "Rotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Rotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSides of a cube.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Side",
          "package": "hcube",
          "source": "src/HCube-Data.html#Side",
          "type": "data"
        },
        "index": {
          "description": "Sides of cube",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Side",
          "package": "hcube",
          "partial": "Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhysical size of cube.  For example a value of 3 refers to original 3x3x3 Rubik's cube.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Size",
          "package": "hcube",
          "source": "src/HCube-Data.html#Size",
          "type": "type"
        },
        "index": {
          "description": "Physical size of cube For example value of refers to original x3x3 Rubik cube",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Size",
          "package": "hcube",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines an axis for slab movement.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Slab",
          "package": "hcube",
          "source": "src/HCube-Data.html#Slab",
          "type": "data"
        },
        "index": {
          "description": "Defines an axis for slab movement",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Slab",
          "package": "hcube",
          "partial": "Slab",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Slab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector which orientation group matrices act on.\n Also used for calculating new cubie positions.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "Vec",
          "package": "hcube",
          "source": "src/HCube-Data.html#Vec",
          "type": "type"
        },
        "index": {
          "description": "Vector which orientation group matrices act on Also used for calculating new cubie positions",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Vec",
          "package": "hcube",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft and right 3D view of cube.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "View",
          "package": "hcube",
          "source": "src/HCube-Data.html#View",
          "type": "data"
        },
        "index": {
          "description": "Left and right view of cube",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "View",
          "package": "hcube",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by Template to map logical structure of cube to display views.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "ViewAssociation",
          "package": "hcube",
          "source": "src/HCube-Data.html#ViewAssociation",
          "type": "data"
        },
        "index": {
          "description": "Used by Template to map logical structure of cube to display views",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "ViewAssociation",
          "package": "hcube",
          "partial": "View Association",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#t:ViewAssociation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "ActualCube",
          "package": "hcube",
          "signature": "ActualCube",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "ActualCube",
          "package": "hcube",
          "partial": "Actual Cube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:ActualCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "BackS",
          "package": "hcube",
          "signature": "BackS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "BackS",
          "package": "hcube",
          "partial": "Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:BackS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Blue",
          "package": "hcube",
          "signature": "Blue",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Blue",
          "package": "hcube",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Clockwise",
          "package": "hcube",
          "signature": "Clockwise",
          "source": "src/HCube-Data.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Clockwise",
          "package": "hcube",
          "partial": "Clockwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Clockwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Counter",
          "package": "hcube",
          "signature": "Counter",
          "source": "src/HCube-Data.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Counter",
          "package": "hcube",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "DownS",
          "package": "hcube",
          "signature": "DownS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "DownS",
          "package": "hcube",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:DownS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "FrontS",
          "package": "hcube",
          "signature": "FrontS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "FrontS",
          "package": "hcube",
          "partial": "Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:FrontS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Green",
          "package": "hcube",
          "signature": "Green",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Green",
          "package": "hcube",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "HSlice",
          "package": "hcube",
          "signature": "HSlice",
          "source": "src/HCube-Data.html#Slab",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "HSlice",
          "package": "hcube",
          "partial": "HSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:HSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Help",
          "package": "hcube",
          "signature": "Help",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Help",
          "package": "hcube",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Ide",
          "package": "hcube",
          "signature": "Ide Numb",
          "source": "src/HCube-Data.html#ViewAssociation",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Ide",
          "package": "hcube",
          "partial": "Ide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Ide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Layer",
          "package": "hcube",
          "signature": "Layer",
          "source": "src/HCube-Data.html#Slab",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Layer",
          "package": "hcube",
          "partial": "Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "LeftS",
          "package": "hcube",
          "signature": "LeftS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "LeftS",
          "package": "hcube",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:LeftS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "LeftV",
          "package": "hcube",
          "signature": "LeftV",
          "source": "src/HCube-Data.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "LeftV",
          "package": "hcube",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:LeftV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Matrix",
          "package": "hcube",
          "signature": "Matrix Vec Vec Vec",
          "source": "src/HCube-Data.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Matrix",
          "package": "hcube",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "NoColor",
          "package": "hcube",
          "signature": "NoColor",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "NoColor",
          "package": "hcube",
          "partial": "No Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:NoColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "NoCommand",
          "package": "hcube",
          "signature": "NoCommand",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "NoCommand",
          "package": "hcube",
          "partial": "No Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:NoCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "NoDir",
          "package": "hcube",
          "signature": "NoDir",
          "source": "src/HCube-Data.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "NoDir",
          "package": "hcube",
          "partial": "No Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:NoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "NoSide",
          "package": "hcube",
          "signature": "NoSide",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "NoSide",
          "package": "hcube",
          "partial": "No Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:NoSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "NoSlab",
          "package": "hcube",
          "signature": "NoSlab",
          "source": "src/HCube-Data.html#Slab",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "NoSlab",
          "package": "hcube",
          "partial": "No Slab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:NoSlab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Operation",
          "package": "hcube",
          "signature": "Operation [Rotation]",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Operation",
          "normalized": "Operation[Rotation]",
          "package": "hcube",
          "partial": "Operation",
          "signature": "Operation[Rotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Operation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Orange",
          "package": "hcube",
          "signature": "Orange",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Orange",
          "package": "hcube",
          "partial": "Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Ori",
          "package": "hcube",
          "signature": "Ori Numb",
          "source": "src/HCube-Data.html#ViewAssociation",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Ori",
          "package": "hcube",
          "partial": "Ori",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Ori"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Projection",
          "package": "hcube",
          "signature": "Projection View",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Projection",
          "package": "hcube",
          "partial": "Projection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Projection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Quit",
          "package": "hcube",
          "signature": "Quit",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Quit",
          "package": "hcube",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Red",
          "package": "hcube",
          "signature": "Red",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Red",
          "package": "hcube",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "RightS",
          "package": "hcube",
          "signature": "RightS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "RightS",
          "package": "hcube",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:RightS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "RightV",
          "package": "hcube",
          "signature": "RightV",
          "source": "src/HCube-Data.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "RightV",
          "package": "hcube",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:RightV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "RotateCube",
          "package": "hcube",
          "signature": "RotateCube Slab Direction",
          "source": "src/HCube-Data.html#Rotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "RotateCube",
          "package": "hcube",
          "partial": "Rotate Cube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:RotateCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Rotation",
          "package": "hcube",
          "signature": "Rotation Slab Direction Numb",
          "source": "src/HCube-Data.html#Rotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Rotation",
          "package": "hcube",
          "partial": "Rotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Rotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Sur",
          "package": "hcube",
          "signature": "Sur (Numb, Side)",
          "source": "src/HCube-Data.html#ViewAssociation",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Sur",
          "normalized": "Sur(Numb,Side)",
          "package": "hcube",
          "partial": "Sur",
          "signature": "Sur(Numb,Side)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Sur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Twice",
          "package": "hcube",
          "signature": "Twice",
          "source": "src/HCube-Data.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Twice",
          "package": "hcube",
          "partial": "Twice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Twice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Undo",
          "package": "hcube",
          "signature": "Undo",
          "source": "src/HCube-Data.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Undo",
          "package": "hcube",
          "partial": "Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Undo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "UpS",
          "package": "hcube",
          "signature": "UpS",
          "source": "src/HCube-Data.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "UpS",
          "package": "hcube",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:UpS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "VSlice",
          "package": "hcube",
          "signature": "VSlice",
          "source": "src/HCube-Data.html#Slab",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "VSlice",
          "package": "hcube",
          "partial": "VSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:VSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "White",
          "package": "hcube",
          "signature": "White",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "White",
          "package": "hcube",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "Yellow",
          "package": "hcube",
          "signature": "Yellow",
          "source": "src/HCube-Data.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "Yellow",
          "package": "hcube",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "back",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "back",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:back"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "blueC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#blueC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "blueC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:blueC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of sideToColor\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "colorToSide",
          "package": "hcube",
          "signature": "Color -\u003e Side",
          "source": "src/HCube-Data.html#colorToSide",
          "type": "function"
        },
        "index": {
          "description": "Inverse of sideToColor",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "colorToSide",
          "normalized": "Color-\u003eSide",
          "package": "hcube",
          "partial": "To Side",
          "signature": "Color-\u003eSide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:colorToSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "down",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "down",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "front",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "front",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:front"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "greenC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#greenC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "greenC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:greenC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses direction of rotation.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "invDir",
          "package": "hcube",
          "signature": "Direction -\u003e Direction",
          "source": "src/HCube-Data.html#invDir",
          "type": "function"
        },
        "index": {
          "description": "Reverses direction of rotation",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "invDir",
          "normalized": "Direction-\u003eDirection",
          "package": "hcube",
          "partial": "Dir",
          "signature": "Direction-\u003eDirection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:invDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives inverse of a cube operation.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "invOpp",
          "package": "hcube",
          "signature": "Rotation -\u003e Rotation",
          "source": "src/HCube-Data.html#invOpp",
          "type": "function"
        },
        "index": {
          "description": "Gives inverse of cube operation",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "invOpp",
          "normalized": "Rotation-\u003eRotation",
          "package": "hcube",
          "partial": "Opp",
          "signature": "Rotation-\u003eRotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:invOpp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "left",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "left",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "noC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#noC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "noC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:noC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "orangeC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#orangeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "orangeC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:orangeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "redC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#redC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "redC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:redC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "right",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "right",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates a side of a solved cube to a color.\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "sideToColor",
          "package": "hcube",
          "signature": "Side -\u003e Color",
          "source": "src/HCube-Data.html#sideToColor",
          "type": "function"
        },
        "index": {
          "description": "Associates side of solved cube to color",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "sideToColor",
          "normalized": "Side-\u003eColor",
          "package": "hcube",
          "partial": "To Color",
          "signature": "Side-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:sideToColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "up",
          "package": "hcube",
          "signature": "Color",
          "source": "src/HCube-Data.html#ActualCube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "up",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the color white. Modify if the physical cube uses a different coloring scheme\n\u003c/p\u003e",
          "module": "HCube.Data",
          "name": "whiteC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#whiteC",
          "type": "function"
        },
        "index": {
          "description": "Represents the color white Modify if the physical cube uses different coloring scheme",
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "whiteC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:whiteC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Data",
          "name": "yellowC",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-Data.html#yellowC",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Data",
          "module": "HCube.Data",
          "name": "yellowC",
          "normalized": "[Char]",
          "package": "hcube",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Data.html#v:yellowC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExposes virtual cube functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Lib",
          "name": "Lib",
          "package": "hcube",
          "source": "src/HCube-Lib.html",
          "type": "module"
        },
        "index": {
          "description": "Exposes virtual cube functionality",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "Lib",
          "package": "hcube",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndividual cube of Rubik's cube, known as a Cubie.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "Cube",
          "package": "hcube",
          "source": "src/HCube-Lib.html#Cube",
          "type": "data"
        },
        "index": {
          "description": "Individual cube of Rubik cube known as Cubie",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "Cube",
          "package": "hcube",
          "partial": "Cube",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#t:Cube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVitrual Rubik's cube.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "Rubik",
          "package": "hcube",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "data"
        },
        "index": {
          "description": "Vitrual Rubik cube",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "Rubik",
          "package": "hcube",
          "partial": "Rubik",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#t:Rubik"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "Cube",
          "package": "hcube",
          "signature": "Cube",
          "source": "src/HCube-Lib.html#Cube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "Cube",
          "package": "hcube",
          "partial": "Cube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:Cube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "Rubik",
          "package": "hcube",
          "signature": "Rubik",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "Rubik",
          "package": "hcube",
          "partial": "Rubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:Rubik"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "cid",
          "package": "hcube",
          "signature": "Numb",
          "source": "src/HCube-Lib.html#Cube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "cid",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:cid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "cnt",
          "package": "hcube",
          "signature": "[Cube]",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "cnt",
          "normalized": "[Cube]",
          "package": "hcube",
          "signature": "[Cube]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:cnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts from a surface view of cube to a cubie view of cube. \n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "consCubeInfo",
          "package": "hcube",
          "signature": "Int -\u003e CubeSurf -\u003e [(Int, ActualCube, ColorTag)]",
          "source": "src/HCube-Lib.html#consCubeInfo",
          "type": "function"
        },
        "index": {
          "description": "Converts from surface view of cube to cubie view of cube",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "consCubeInfo",
          "normalized": "Int-\u003eCubeSurf-\u003e[(Int,ActualCube,ColorTag)]",
          "package": "hcube",
          "partial": "Cube Info",
          "signature": "Int-\u003eCubeSurf-\u003e[(Int,ActualCube,ColorTag)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:consCubeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "crn",
          "package": "hcube",
          "signature": "[Cube]",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "crn",
          "normalized": "[Cube]",
          "package": "hcube",
          "signature": "[Cube]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:crn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a face id defined with respect to a side, to the cube id.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "cubeIdsOfFace",
          "package": "hcube",
          "signature": "Int -\u003e Side -\u003e [Int]",
          "source": "src/HCube-Lib.html#cubeIdsOfFace",
          "type": "function"
        },
        "index": {
          "description": "Maps face id defined with respect to side to the cube id",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "cubeIdsOfFace",
          "normalized": "Int-\u003eSide-\u003e[Int]",
          "package": "hcube",
          "partial": "Ids Of Face",
          "signature": "Int-\u003eSide-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:cubeIdsOfFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a tuple of cube ids corresponding to (corners, edges, centers, hidden cubies).\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "cubeTypes",
          "package": "hcube",
          "signature": "Size -\u003e ([Int], [Int], [Int], [Int])",
          "source": "src/HCube-Lib.html#cubeTypes",
          "type": "function"
        },
        "index": {
          "description": "Generates tuple of cube ids corresponding to corners edges centers hidden cubies",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "cubeTypes",
          "normalized": "Size-\u003e([Int],[Int],[Int],[Int])",
          "package": "hcube",
          "partial": "Types",
          "signature": "Size-\u003e([Int],[Int],[Int],[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:cubeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a cube operation on virtual cube.\n Conceptually this corresponds to multiplying the cube state by an appropriate element of the permutation group.\n However a vector approach is used here. \n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "doCubeOps",
          "package": "hcube",
          "signature": "[Rotation] -\u003e Rubik -\u003e Rubik",
          "source": "src/HCube-Lib.html#doCubeOps",
          "type": "function"
        },
        "index": {
          "description": "Performs cube operation on virtual cube Conceptually this corresponds to multiplying the cube state by an appropriate element of the permutation group However vector approach is used here",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "doCubeOps",
          "normalized": "[Rotation]-\u003eRubik-\u003eRubik",
          "package": "hcube",
          "partial": "Cube Ops",
          "signature": "[Rotation]-\u003eRubik-\u003eRubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:doCubeOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "edg",
          "package": "hcube",
          "signature": "[Cube]",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "edg",
          "normalized": "[Cube]",
          "package": "hcube",
          "signature": "[Cube]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:edg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the cubie at a given position.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "getCubeFromPos",
          "package": "hcube",
          "signature": "Rubik -\u003e Numb -\u003e Cube",
          "source": "src/HCube-Lib.html#getCubeFromPos",
          "type": "function"
        },
        "index": {
          "description": "Returns the cubie at given position",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "getCubeFromPos",
          "normalized": "Rubik-\u003eNumb-\u003eCube",
          "package": "hcube",
          "partial": "Cube From Pos",
          "signature": "Rubik-\u003eNumb-\u003eCube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:getCubeFromPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor of cube id on a face is returned.\n This function is important for rendering.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "getFaceColor",
          "package": "hcube",
          "signature": "Rubik -\u003e (Numb, Side) -\u003e String",
          "source": "src/HCube-Lib.html#getFaceColor",
          "type": "function"
        },
        "index": {
          "description": "Color of cube id on face is returned This function is important for rendering",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "getFaceColor",
          "normalized": "Rubik-\u003e(Numb,Side)-\u003eString",
          "package": "hcube",
          "partial": "Face Color",
          "signature": "Rubik-\u003e(Numb,Side)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:getFaceColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a cube id to a pseudo-vector representation.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "getPos",
          "package": "hcube",
          "signature": "Size -\u003e Numb -\u003e Vec",
          "source": "src/HCube-Lib.html#getPos",
          "type": "function"
        },
        "index": {
          "description": "Converts cube id to pseudo-vector representation",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "getPos",
          "normalized": "Size-\u003eNumb-\u003eVec",
          "package": "hcube",
          "partial": "Pos",
          "signature": "Size-\u003eNumb-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:getPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "hid",
          "package": "hcube",
          "signature": "[Cube]",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "hid",
          "normalized": "[Cube]",
          "package": "hcube",
          "signature": "[Cube]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:hid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "his",
          "package": "hcube",
          "signature": "[Rotation]",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "his",
          "normalized": "[Rotation]",
          "package": "hcube",
          "signature": "[Rotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:his"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a virtual cube in solved state\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "initCube",
          "package": "hcube",
          "signature": "Size -\u003e Rubik",
          "source": "src/HCube-Lib.html#initCube",
          "type": "function"
        },
        "index": {
          "description": "Creates virtual cube in solved state",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "initCube",
          "normalized": "Size-\u003eRubik",
          "package": "hcube",
          "partial": "Cube",
          "signature": "Size-\u003eRubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:initCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads cube from a file.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "loadCube",
          "package": "hcube",
          "signature": "Size -\u003e FilePath -\u003e IO Rubik",
          "source": "src/HCube-Lib.html#loadCube",
          "type": "function"
        },
        "index": {
          "description": "Loads cube from file",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "loadCube",
          "normalized": "Size-\u003eFilePath-\u003eIO Rubik",
          "package": "hcube",
          "partial": "Cube",
          "signature": "Size-\u003eFilePath-\u003eIO Rubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:loadCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "loop",
          "package": "hcube",
          "signature": "Bool",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "loop",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "n",
          "package": "hcube",
          "signature": "Size",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "n",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "ori",
          "package": "hcube",
          "signature": "Orient",
          "source": "src/HCube-Lib.html#Cube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "ori",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:ori"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "pos",
          "package": "hcube",
          "signature": "Vec",
          "source": "src/HCube-Lib.html#Cube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "pos",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pseudo-vector representation to a cube id.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "posToId",
          "package": "hcube",
          "signature": "Size -\u003e Vec -\u003e Numb",
          "source": "src/HCube-Lib.html#posToId",
          "type": "function"
        },
        "index": {
          "description": "Converts pseudo-vector representation to cube id",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "posToId",
          "normalized": "Size-\u003eVec-\u003eNumb",
          "package": "hcube",
          "partial": "To Id",
          "signature": "Size-\u003eVec-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:posToId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves cube to a file.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "saveCube",
          "package": "hcube",
          "signature": "FilePath -\u003e Rubik -\u003e IO ()",
          "source": "src/HCube-Lib.html#saveCube",
          "type": "function"
        },
        "index": {
          "description": "Saves cube to file",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "saveCube",
          "normalized": "FilePath-\u003eRubik-\u003eIO()",
          "package": "hcube",
          "partial": "Cube",
          "signature": "FilePath-\u003eRubik-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:saveCube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCubeSurf representing a solved cube.\n\u003c/p\u003e",
          "module": "HCube.Lib",
          "name": "solvedSurf",
          "package": "hcube",
          "signature": "Int -\u003e CubeSurf",
          "source": "src/HCube-Lib.html#solvedSurf",
          "type": "function"
        },
        "index": {
          "description": "CubeSurf representing solved cube",
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "solvedSurf",
          "normalized": "Int-\u003eCubeSurf",
          "package": "hcube",
          "partial": "Surf",
          "signature": "Int-\u003eCubeSurf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:solvedSurf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Lib",
          "name": "view",
          "package": "hcube",
          "signature": "View",
          "source": "src/HCube-Lib.html#Rubik",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Lib",
          "module": "HCube.Lib",
          "name": "view",
          "package": "hcube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Lib.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrientation group is used to represent orientation of cubies, and cube as a\n whole. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.OrientGroup",
          "name": "OrientGroup",
          "package": "hcube",
          "source": "src/HCube-OrientGroup.html",
          "type": "module"
        },
        "index": {
          "description": "Orientation group is used to represent orientation of cubies and cube as whole",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "OrientGroup",
          "package": "hcube",
          "partial": "Orient Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical extension of Monoid to a group.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "Group",
          "package": "hcube",
          "source": "src/HCube-OrientGroup.html#Group",
          "type": "class"
        },
        "index": {
          "description": "Logical extension of Monoid to group",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "Group",
          "package": "hcube",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of Cubie orientation.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "Orient",
          "package": "hcube",
          "source": "src/HCube-OrientGroup.html#Orient",
          "type": "data"
        },
        "index": {
          "description": "Representation of Cubie orientation",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "Orient",
          "package": "hcube",
          "partial": "Orient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#t:Orient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.OrientGroup",
          "name": "Orient",
          "package": "hcube",
          "signature": "Orient [Vec]",
          "source": "src/HCube-OrientGroup.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "Orient",
          "normalized": "Orient[Vec]",
          "package": "hcube",
          "partial": "Orient",
          "signature": "Orient[Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:Orient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the color of the side identified by the vector, in a solved state.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "colorToVec",
          "package": "hcube",
          "signature": "Color -\u003e Vec",
          "source": "src/HCube-OrientGroup.html#colorToVec",
          "type": "function"
        },
        "index": {
          "description": "Gives the color of the side identified by the vector in solved state",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "colorToVec",
          "normalized": "Color-\u003eVec",
          "package": "hcube",
          "partial": "To Vec",
          "signature": "Color-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:colorToVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an element of the orientation group from the name.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "cons",
          "package": "hcube",
          "signature": "Char -\u003e Orient",
          "source": "src/HCube-OrientGroup.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Constructs an element of the orientation group from the name",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "cons",
          "normalized": "Char-\u003eOrient",
          "package": "hcube",
          "signature": "Char-\u003eOrient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the name of an element of the orientation group.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "eid",
          "package": "hcube",
          "signature": "Orient -\u003e Char",
          "source": "src/HCube-OrientGroup.html#eid",
          "type": "function"
        },
        "index": {
          "description": "Gives the name of an element of the orientation group",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "eid",
          "normalized": "Orient-\u003eChar",
          "package": "hcube",
          "signature": "Orient-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:eid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo vector representation of orientation.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "getVec",
          "package": "hcube",
          "signature": "Orient -\u003e [Vec]",
          "source": "src/HCube-OrientGroup.html#getVec",
          "type": "function"
        },
        "index": {
          "description": "Two vector representation of orientation",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "getVec",
          "normalized": "Orient-\u003e[Vec]",
          "package": "hcube",
          "partial": "Vec",
          "signature": "Orient-\u003e[Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:getVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.OrientGroup",
          "name": "inv",
          "package": "hcube",
          "signature": "a -\u003e a",
          "source": "src/HCube-OrientGroup.html#inv",
          "type": "method"
        },
        "index": {
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "inv",
          "normalized": "a-\u003ea",
          "package": "hcube",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of names for elements of the orientation group.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "orientChrDomain",
          "package": "hcube",
          "signature": "[Char]",
          "source": "src/HCube-OrientGroup.html#orientChrDomain",
          "type": "function"
        },
        "index": {
          "description": "List of names for elements of the orientation group",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "orientChrDomain",
          "normalized": "[Char]",
          "package": "hcube",
          "partial": "Chr Domain",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:orientChrDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of rawToOrientNumber\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "orientNumberToRaw",
          "package": "hcube",
          "signature": "Numb -\u003e Numb",
          "source": "src/HCube-OrientGroup.html#orientNumberToRaw",
          "type": "function"
        },
        "index": {
          "description": "Inverse of rawToOrientNumber",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "orientNumberToRaw",
          "normalized": "Numb-\u003eNumb",
          "package": "hcube",
          "partial": "Number To Raw",
          "signature": "Numb-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:orientNumberToRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the orientation to the raw orientation number.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "rawOrientNum",
          "package": "hcube",
          "signature": "Orient -\u003e Numb",
          "source": "src/HCube-OrientGroup.html#rawOrientNum",
          "type": "function"
        },
        "index": {
          "description": "Converts the orientation to the raw orientation number",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "rawOrientNum",
          "normalized": "Orient-\u003eNumb",
          "package": "hcube",
          "partial": "Orient Num",
          "signature": "Orient-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:rawOrientNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw number is an intermediate step in associating two vectors\n to an orientation. The orientation number 1 corresponds to an orientation of ''a'' and so on.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "rawToOrientNumber",
          "package": "hcube",
          "signature": "Numb -\u003e Numb",
          "source": "src/HCube-OrientGroup.html#rawToOrientNumber",
          "type": "function"
        },
        "index": {
          "description": "Raw number is an intermediate step in associating two vectors to an orientation The orientation number corresponds to an orientation of and so on",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "rawToOrientNumber",
          "normalized": "Numb-\u003eNumb",
          "package": "hcube",
          "partial": "To Orient Number",
          "signature": "Numb-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:rawToOrientNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates a side to a vector.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "sideToVec",
          "package": "hcube",
          "signature": "Side -\u003e Vec",
          "source": "src/HCube-OrientGroup.html#sideToVec",
          "type": "function"
        },
        "index": {
          "description": "Associates side to vector",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "sideToVec",
          "normalized": "Side-\u003eVec",
          "package": "hcube",
          "partial": "To Vec",
          "signature": "Side-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:sideToVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a function of orientation over orient domain.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "spanDomain",
          "package": "hcube",
          "signature": "(Orient -\u003e b) -\u003e [(a, b)]",
          "source": "src/HCube-OrientGroup.html#spanDomain",
          "type": "function"
        },
        "index": {
          "description": "Maps function of orientation over orient domain",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "spanDomain",
          "normalized": "(Orient-\u003ea)-\u003e[(b,a)]",
          "package": "hcube",
          "partial": "Domain",
          "signature": "(Orient-\u003eb)-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:spanDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps an element of the orientation group to a matrix.\n Orient tranformation matrix is determined by specifing, (1,0,0) goes to v1 and (0,1,0) goes to v2.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "to",
          "package": "hcube",
          "signature": "Orient -\u003e Matrix",
          "source": "src/HCube-OrientGroup.html#to",
          "type": "function"
        },
        "index": {
          "description": "Maps an element of the orientation group to matrix Orient tranformation matrix is determined by specifing goes to v1 and goes to v2",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "to",
          "normalized": "Orient-\u003eMatrix",
          "package": "hcube",
          "signature": "Orient-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of colorToVec.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "vecToColor",
          "package": "hcube",
          "signature": "Vec -\u003e Color",
          "source": "src/HCube-OrientGroup.html#vecToColor",
          "type": "function"
        },
        "index": {
          "description": "Inverse of colorToVec",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "vecToColor",
          "normalized": "Vec-\u003eColor",
          "package": "hcube",
          "partial": "To Color",
          "signature": "Vec-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:vecToColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of sideToVec.\n\u003c/p\u003e",
          "module": "HCube.OrientGroup",
          "name": "vecToSide",
          "package": "hcube",
          "signature": "Vec -\u003e Side",
          "source": "src/HCube-OrientGroup.html#vecToSide",
          "type": "function"
        },
        "index": {
          "description": "Inverse of sideToVec",
          "hierarchy": "HCube OrientGroup",
          "module": "HCube.OrientGroup",
          "name": "vecToSide",
          "normalized": "Vec-\u003eSide",
          "package": "hcube",
          "partial": "To Side",
          "signature": "Vec-\u003eSide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-OrientGroup.html#v:vecToSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of permutation representation of cube.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Permutation",
          "name": "Permutation",
          "package": "hcube",
          "source": "src/HCube-Permutation.html",
          "type": "module"
        },
        "index": {
          "description": "Generation of permutation representation of cube",
          "hierarchy": "HCube Permutation",
          "module": "HCube.Permutation",
          "name": "Permutation",
          "package": "hcube",
          "partial": "Permutation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Permutation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a cube operation to an element of the permutation group.\n\u003c/p\u003e",
          "module": "HCube.Permutation",
          "name": "genPerm",
          "package": "hcube",
          "signature": "Size -\u003e (Rubik -\u003e [Cube]) -\u003e Rotation -\u003e Permutation Numb",
          "source": "src/HCube-Permutation.html#genPerm",
          "type": "function"
        },
        "index": {
          "description": "Map cube operation to an element of the permutation group",
          "hierarchy": "HCube Permutation",
          "module": "HCube.Permutation",
          "name": "genPerm",
          "normalized": "Size-\u003e(Rubik-\u003e[Cube])-\u003eRotation-\u003ePermutation Numb",
          "package": "hcube",
          "partial": "Perm",
          "signature": "Size-\u003e(Rubik-\u003e[Cube])-\u003eRotation-\u003ePermutation Numb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Permutation.html#v:genPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsole visualization of virtual cube.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Template",
          "name": "Template",
          "package": "hcube",
          "source": "src/HCube-Template.html",
          "type": "module"
        },
        "index": {
          "description": "Console visualization of virtual cube",
          "hierarchy": "HCube Template",
          "module": "HCube.Template",
          "name": "Template",
          "package": "hcube",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Template",
          "name": "render",
          "package": "hcube",
          "signature": "Rubik -\u003e IO Rubik",
          "source": "src/HCube-Template.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Template",
          "module": "HCube.Template",
          "name": "render",
          "normalized": "Rubik-\u003eIO Rubik",
          "package": "hcube",
          "signature": "Rubik-\u003eIO Rubik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Template.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest invariants of hcube. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Test",
          "name": "Test",
          "package": "hcube",
          "source": "src/HCube-Test.html",
          "type": "module"
        },
        "index": {
          "description": "Test invariants of hcube",
          "hierarchy": "HCube Test",
          "module": "HCube.Test",
          "name": "Test",
          "package": "hcube",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Test",
          "name": "runTests",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Test.html#runTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Test",
          "module": "HCube.Test",
          "name": "runTests",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Tests",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Test.html#v:runTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for generating tables exhibiting internals of hcube.\n See the design directory for output generated by these functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Theory",
          "name": "Theory",
          "package": "hcube",
          "source": "src/HCube-Theory.html",
          "type": "module"
        },
        "index": {
          "description": "Module for generating tables exhibiting internals of hcube See the design directory for output generated by these functions",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "Theory",
          "package": "hcube",
          "partial": "Theory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays how coloring of cubie is used to determine cube id of cube.\n Cube id represents position of cubie in solved configuration.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayColorTags",
          "package": "hcube",
          "signature": "Size -\u003e IO ()",
          "source": "src/HCube-Theory.html#displayColorTags",
          "type": "function"
        },
        "index": {
          "description": "Displays how coloring of cubie is used to determine cube id of cube Cube id represents position of cubie in solved configuration",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayColorTags",
          "normalized": "Size-\u003eIO()",
          "package": "hcube",
          "partial": "Color Tags",
          "signature": "Size-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayColorTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows how colors on a cubie are mapped to orientation. \n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayColorToOrient",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayColorToOrient",
          "type": "function"
        },
        "index": {
          "description": "Shows how colors on cubie are mapped to orientation",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayColorToOrient",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Color To Orient",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayColorToOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow mapping of cube face to vector and color.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayColors",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayColors",
          "type": "function"
        },
        "index": {
          "description": "Show mapping of cube face to vector and color",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayColors",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Colors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays mapping of face id to cube id.\n Face ids are useful when specifing the state of a physical cube.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayFaceIds",
          "package": "hcube",
          "signature": "Size -\u003e IO ()",
          "source": "src/HCube-Theory.html#displayFaceIds",
          "type": "function"
        },
        "index": {
          "description": "Displays mapping of face id to cube id Face ids are useful when specifing the state of physical cube",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayFaceIds",
          "normalized": "Size-\u003eIO()",
          "package": "hcube",
          "partial": "Face Ids",
          "signature": "Size-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayFaceIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays inverses for orientation group.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayOrientI",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayOrientI",
          "type": "function"
        },
        "index": {
          "description": "Displays inverses for orientation group",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayOrientI",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Orient",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayOrientI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix representation of oriention group.\n Right handed coordinate system implies determinate must be one.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayOrientMatrices",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayOrientMatrices",
          "type": "function"
        },
        "index": {
          "description": "Matrix representation of oriention group Right handed coordinate system implies determinate must be one",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayOrientMatrices",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Orient Matrices",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayOrientMatrices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays multiplication table for orientation group.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayOrientP",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayOrientP",
          "type": "function"
        },
        "index": {
          "description": "Displays multiplication table for orientation group",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayOrientP",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Orient",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayOrientP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCube orientation can be viewed as a transformation of faces from identity position.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayOrientTransforms",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayOrientTransforms",
          "type": "function"
        },
        "index": {
          "description": "Cube orientation can be viewed as transformation of faces from identity position",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayOrientTransforms",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Orient Transforms",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayOrientTransforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo vectors are required to uniquely determine cube orientation.\n Orientation is defined as an operation from identity orientation.\n Right face goes to face represented by vector 1.\n Back gace goes to face represented by vector 2.\n\u003c/p\u003e",
          "module": "HCube.Theory",
          "name": "displayOrientVecMapping",
          "package": "hcube",
          "signature": "IO ()",
          "source": "src/HCube-Theory.html#displayOrientVecMapping",
          "type": "function"
        },
        "index": {
          "description": "Two vectors are required to uniquely determine cube orientation Orientation is defined as an operation from identity orientation Right face goes to face represented by vector Back gace goes to face represented by vector",
          "hierarchy": "HCube Theory",
          "module": "HCube.Theory",
          "name": "displayOrientVecMapping",
          "normalized": "IO()",
          "package": "hcube",
          "partial": "Orient Vec Mapping",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Theory.html#v:displayOrientVecMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon utility functions, simple linear algebra. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "HCube.Utility",
          "name": "Utility",
          "package": "hcube",
          "source": "src/HCube-Utility.html",
          "type": "module"
        },
        "index": {
          "description": "Common utility functions simple linear algebra",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "Utility",
          "package": "hcube",
          "partial": "Utility",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple a matrix on the left side of a vector.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "(|*|)",
          "package": "hcube",
          "signature": "Matrix -\u003e Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Multiple matrix on the left side of vector",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "(|*|) |*|",
          "normalized": "Matrix-\u003eVec-\u003eVec",
          "package": "hcube",
          "signature": "Matrix-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple two matrices.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "(|**|)",
          "package": "hcube",
          "signature": "Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/HCube-Utility.html#%7C%2A%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Multiple two matrices",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "(|**|) |**|",
          "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
          "package": "hcube",
          "signature": "Matrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:-124--42--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "(~|)",
          "package": "hcube",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/HCube-Utility.html#~%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "(~|) ~|",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb a",
          "package": "hcube",
          "signature": "(a-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:-126--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "(~\u003e)",
          "package": "hcube",
          "signature": "m a -\u003e (a -\u003e b -\u003e m b) -\u003e b -\u003e m b",
          "source": "src/HCube-Utility.html#~%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "(~\u003e) ~\u003e",
          "normalized": "a b-\u003e(b-\u003ec-\u003ea c)-\u003ec-\u003ea c",
          "package": "hcube",
          "signature": "m a-\u003e(a-\u003eb-\u003em b)-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "(\u003c*)",
          "package": "hcube",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/HCube-Utility.html#%3C%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "hcube",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cofactor of a matrix.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "cofactors",
          "package": "hcube",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/HCube-Utility.html#cofactors",
          "type": "function"
        },
        "index": {
          "description": "The cofactor of matrix",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "cofactors",
          "normalized": "Matrix-\u003eMatrix",
          "package": "hcube",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:cofactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "concatMapM",
          "package": "hcube",
          "signature": "(a -\u003e m [b]) -\u003e [a] -\u003e m [b]",
          "source": "src/HCube-Utility.html#concatMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "concatMapM",
          "normalized": "(a-\u003eb[c])-\u003e[a]-\u003eb[c]",
          "package": "hcube",
          "partial": "Map",
          "signature": "(a-\u003em[b])-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cross product of two vectors.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "cross",
          "package": "hcube",
          "signature": "Vec -\u003e Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#cross",
          "type": "function"
        },
        "index": {
          "description": "The cross product of two vectors",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "cross",
          "normalized": "Vec-\u003eVec-\u003eVec",
          "package": "hcube",
          "signature": "Vec-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe determinate of a matrix.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "det",
          "package": "hcube",
          "signature": "Matrix -\u003e Int",
          "source": "src/HCube-Utility.html#det",
          "type": "function"
        },
        "index": {
          "description": "The determinate of matrix",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "det",
          "normalized": "Matrix-\u003eInt",
          "package": "hcube",
          "signature": "Matrix-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "doM",
          "package": "hcube",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/HCube-Utility.html#doM",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "doM",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "hcube",
          "signature": "(a-\u003eBool)-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:doM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dot product of two vectors.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "dot",
          "package": "hcube",
          "signature": "Vec -\u003e Vec -\u003e Numb",
          "source": "src/HCube-Utility.html#dot",
          "type": "function"
        },
        "index": {
          "description": "The dot product of two vectors",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "dot",
          "normalized": "Vec-\u003eVec-\u003eNumb",
          "package": "hcube",
          "signature": "Vec-\u003eVec-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "gateMinus",
          "package": "hcube",
          "signature": "Numb -\u003e Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#gateMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "gateMinus",
          "normalized": "Numb-\u003eVec-\u003eVec",
          "package": "hcube",
          "partial": "Minus",
          "signature": "Numb-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:gateMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of a matrix.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "inverse",
          "package": "hcube",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/HCube-Utility.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Inverse of matrix",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "inverse",
          "normalized": "Matrix-\u003eMatrix",
          "package": "hcube",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "listToMaybe",
          "package": "hcube",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/HCube-Utility.html#listToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hcube",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a function with two vector arguments to one accepting a list of vectors.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "mapVec",
          "package": "hcube",
          "signature": "(Vec -\u003e Vec -\u003e a) -\u003e [Vec] -\u003e a",
          "source": "src/HCube-Utility.html#mapVec",
          "type": "function"
        },
        "index": {
          "description": "Convert function with two vector arguments to one accepting list of vectors",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "mapVec",
          "normalized": "(Vec-\u003eVec-\u003ea)-\u003e[Vec]-\u003ea",
          "package": "hcube",
          "partial": "Vec",
          "signature": "(Vec-\u003eVec-\u003ea)-\u003e[Vec]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:mapVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple a matrix by a scalar.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "matrixMult",
          "package": "hcube",
          "signature": "Matrix -\u003e Int -\u003e Matrix",
          "source": "src/HCube-Utility.html#matrixMult",
          "type": "function"
        },
        "index": {
          "description": "Multiple matrix by scalar",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "matrixMult",
          "normalized": "Matrix-\u003eInt-\u003eMatrix",
          "package": "hcube",
          "partial": "Mult",
          "signature": "Matrix-\u003eInt-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:matrixMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe form of read.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "maybeRead",
          "package": "hcube",
          "signature": "String -\u003e Maybe Int",
          "source": "src/HCube-Utility.html#maybeRead",
          "type": "function"
        },
        "index": {
          "description": "safe form of read",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "maybeRead",
          "normalized": "String-\u003eMaybe Int",
          "package": "hcube",
          "partial": "Read",
          "signature": "String-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector multipled by scalar -1.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "minus",
          "package": "hcube",
          "signature": "Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#minus",
          "type": "function"
        },
        "index": {
          "description": "Vector multipled by scalar",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "minus",
          "normalized": "Vec-\u003eVec",
          "package": "hcube",
          "signature": "Vec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "modMinus",
          "package": "hcube",
          "signature": "Numb -\u003e Numb -\u003e Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#modMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "modMinus",
          "normalized": "Numb-\u003eNumb-\u003eVec-\u003eVec",
          "package": "hcube",
          "partial": "Minus",
          "signature": "Numb-\u003eNumb-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:modMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HCube.Utility",
          "name": "modNot",
          "package": "hcube",
          "signature": "Numb -\u003e Numb -\u003e Numb",
          "source": "src/HCube-Utility.html#modNot",
          "type": "function"
        },
        "index": {
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "modNot",
          "normalized": "Numb-\u003eNumb-\u003eNumb",
          "package": "hcube",
          "partial": "Not",
          "signature": "Numb-\u003eNumb-\u003eNumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:modNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple a matrix by a scalar.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "multMatrix",
          "package": "hcube",
          "signature": "Numb -\u003e Matrix -\u003e Matrix",
          "source": "src/HCube-Utility.html#multMatrix",
          "type": "function"
        },
        "index": {
          "description": "Multiple matrix by scalar",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "multMatrix",
          "normalized": "Numb-\u003eMatrix-\u003eMatrix",
          "package": "hcube",
          "partial": "Matrix",
          "signature": "Numb-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:multMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple a vector by a scalar.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "multVec",
          "package": "hcube",
          "signature": "Numb -\u003e Vec -\u003e Vec",
          "source": "src/HCube-Utility.html#multVec",
          "type": "function"
        },
        "index": {
          "description": "Multiple vector by scalar",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "multVec",
          "normalized": "Numb-\u003eVec-\u003eVec",
          "package": "hcube",
          "partial": "Vec",
          "signature": "Numb-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:multVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a matrix.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "showM",
          "package": "hcube",
          "signature": "Matrix -\u003e String",
          "source": "src/HCube-Utility.html#showM",
          "type": "function"
        },
        "index": {
          "description": "Display matrix",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "showM",
          "normalized": "Matrix-\u003eString",
          "package": "hcube",
          "signature": "Matrix-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:showM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of the sides.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "sides",
          "package": "hcube",
          "signature": "[Side]",
          "source": "src/HCube-Utility.html#sides",
          "type": "function"
        },
        "index": {
          "description": "List of the sides",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "sides",
          "normalized": "[Side]",
          "package": "hcube",
          "signature": "[Side]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:sides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function on the domain of Side x Side.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "spanFaces",
          "package": "hcube",
          "signature": "(Side -\u003e Side -\u003e b) -\u003e [(a, b)]",
          "source": "src/HCube-Utility.html#spanFaces",
          "type": "function"
        },
        "index": {
          "description": "Applies function on the domain of Side Side",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "spanFaces",
          "normalized": "(Side-\u003eSide-\u003ea)-\u003e[(b,a)]",
          "package": "hcube",
          "partial": "Faces",
          "signature": "(Side-\u003eSide-\u003eb)-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:spanFaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns square root of argument if argument is a perfect square. \n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "squareRoot",
          "package": "hcube",
          "signature": "Int -\u003e Maybe Int",
          "source": "src/HCube-Utility.html#squareRoot",
          "type": "function"
        },
        "index": {
          "description": "Returns square root of argument if argument is perfect square",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "squareRoot",
          "normalized": "Int-\u003eMaybe Int",
          "package": "hcube",
          "partial": "Root",
          "signature": "Int-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:squareRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose of a matrix.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "transposeM",
          "package": "hcube",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/HCube-Utility.html#transposeM",
          "type": "function"
        },
        "index": {
          "description": "Transpose of matrix",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "transposeM",
          "normalized": "Matrix-\u003eMatrix",
          "package": "hcube",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:transposeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectors we are interested in only have one non zero component. \n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "vcomp",
          "package": "hcube",
          "signature": "Vec -\u003e Int",
          "source": "src/HCube-Utility.html#vcomp",
          "type": "function"
        },
        "index": {
          "description": "Vectors we are interested in only have one non zero component",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "vcomp",
          "normalized": "Vec-\u003eInt",
          "package": "hcube",
          "signature": "Vec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:vcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the determinate of a matrix constructed by three column vectors.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "vecDet",
          "package": "hcube",
          "signature": "Vec -\u003e Vec -\u003e Vec -\u003e Int",
          "source": "src/HCube-Utility.html#vecDet",
          "type": "function"
        },
        "index": {
          "description": "Calculate the determinate of matrix constructed by three column vectors",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "vecDet",
          "normalized": "Vec-\u003eVec-\u003eVec-\u003eInt",
          "package": "hcube",
          "partial": "Det",
          "signature": "Vec-\u003eVec-\u003eVec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:vecDet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of the vectors.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "vecs",
          "package": "hcube",
          "signature": "[Vec]",
          "source": "src/HCube-Utility.html#vecs",
          "type": "function"
        },
        "index": {
          "description": "List of the vectors",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "vecs",
          "normalized": "[Vec]",
          "package": "hcube",
          "signature": "[Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:vecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition of non-zero vector component.\n\u003c/p\u003e",
          "module": "HCube.Utility",
          "name": "vpos",
          "package": "hcube",
          "signature": "Vec -\u003e Int",
          "source": "src/HCube-Utility.html#vpos",
          "type": "function"
        },
        "index": {
          "description": "Position of non-zero vector component",
          "hierarchy": "HCube Utility",
          "module": "HCube.Utility",
          "name": "vpos",
          "normalized": "Vec-\u003eInt",
          "package": "hcube",
          "signature": "Vec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcube/docs/HCube-Utility.html#v:vpos"
      }
    }
  ]
]