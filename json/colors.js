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
        "word": "colors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for colors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Color.Class",
          "name": "Class",
          "package": "colors",
          "source": "src/Data-Color-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Classes for colors",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "Class",
          "package": "colors",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Class",
          "name": "HasAlpha",
          "package": "colors",
          "source": "src/Data-Color-Class.html#HasAlpha",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "HasAlpha",
          "package": "colors",
          "partial": "Has Alpha",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#t:HasAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Class",
          "name": "HasHSB",
          "package": "colors",
          "source": "src/Data-Color-Class.html#HasHSB",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "HasHSB",
          "package": "colors",
          "partial": "Has HSB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#t:HasHSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Class",
          "name": "HasRGB",
          "package": "colors",
          "source": "src/Data-Color-Class.html#HasRGB",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "HasRGB",
          "package": "colors",
          "partial": "Has RGB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#t:HasRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_8Bit\u003c/a\u003e\u003c/code\u003e :: Iso' \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_8Bit",
          "package": "colors",
          "signature": "p Word8 (f Word8) -\u003e p Float (f Float)",
          "source": "src/Data-Color-Class.html#_8Bit",
          "type": "function"
        },
        "index": {
          "description": "Bit Iso Float Word8",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_8Bit",
          "normalized": "a Word(b Word)-\u003ea Float(b Float)",
          "package": "colors",
          "partial": "Bit",
          "signature": "p Word(f Word)-\u003ep Float(f Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_8Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Alpha\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Alpha",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Alpha",
          "type": "method"
        },
        "index": {
          "description": "Alpha Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Alpha",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Alpha",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Blue\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Blue",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Blue",
          "type": "method"
        },
        "index": {
          "description": "Blue Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Blue",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Blue",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Brightness\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Brightness",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Brightness",
          "type": "method"
        },
        "index": {
          "description": "Brightness Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Brightness",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Brightness",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Brightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Green\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Green",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Green",
          "type": "method"
        },
        "index": {
          "description": "Green Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Green",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Green",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Hue\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Hue",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Hue",
          "type": "method"
        },
        "index": {
          "description": "Hue Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Hue",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Hue",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Hue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Red\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Red",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Red",
          "type": "method"
        },
        "index": {
          "description": "Red Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Red",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Red",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Saturation\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Color.Class",
          "name": "_Saturation",
          "package": "colors",
          "signature": "(Float -\u003e f Float) -\u003e a -\u003e f a",
          "source": "src/Data-Color-Class.html#_Saturation",
          "type": "method"
        },
        "index": {
          "description": "Saturation Lens Float",
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "_Saturation",
          "normalized": "(Float-\u003ea Float)-\u003eb-\u003ea b",
          "package": "colors",
          "partial": "Saturation",
          "signature": "(Float-\u003ef Float)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:_Saturation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Class",
          "name": "fromHSB",
          "package": "colors",
          "signature": "Float -\u003e Float -\u003e Float -\u003e a",
          "source": "src/Data-Color-Class.html#fromHSB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "fromHSB",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003ea",
          "package": "colors",
          "partial": "HSB",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:fromHSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Class",
          "name": "fromRGB",
          "package": "colors",
          "signature": "Float -\u003e Float -\u003e Float -\u003e a",
          "source": "src/Data-Color-Class.html#fromRGB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Color Class",
          "module": "Data.Color.Class",
          "name": "fromRGB",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003ea",
          "package": "colors",
          "partial": "RGB",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Class.html#v:fromRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEntities\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Color.Names",
          "name": "Names",
          "package": "colors",
          "source": "src/Data-Color-Names.html",
          "type": "module"
        },
        "index": {
          "description": "Entities",
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "Names",
          "package": "colors",
          "partial": "Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "black",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "black",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "blue",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "blue",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "cyan",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "cyan",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "gray",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "gray",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "green",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "green",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "magenta",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "magenta",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "red",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "red",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "white",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "white",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color.Names",
          "name": "yellow",
          "package": "colors",
          "signature": "a",
          "source": "src/Data-Color-Names.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color Names",
          "module": "Data.Color.Names",
          "name": "yellow",
          "package": "colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color-Names.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eColors and its operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "source": "src/Data-Color.html",
          "type": "module"
        },
        "index": {
          "description": "Colors and its operations",
          "hierarchy": "Data Color",
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color that has red, green, blue, alpha as its components.\n It is an instance of \u003ccode\u003e\u003ca\u003eHasRGB\u003c/a\u003e\u003c/code\u003e so there are some lenses to tweak individual components.\n\u003c/p\u003e",
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "source": "src/Data-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "color that has red green blue alpha as its components It is an instance of HasRGB so there are some lenses to tweak individual components",
          "hierarchy": "Data Color",
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "signature": "Color Float Float Float Float",
          "source": "src/Data-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Color",
          "module": "Data.Color",
          "name": "Color",
          "package": "colors",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlend two colors.\n\u003c/p\u003e",
          "module": "Data.Color",
          "name": "blend",
          "package": "colors",
          "signature": "Float -\u003e Color -\u003e Color -\u003e Color",
          "source": "src/Data-Color.html#blend",
          "type": "function"
        },
        "index": {
          "description": "Blend two colors",
          "hierarchy": "Data Color",
          "module": "Data.Color",
          "name": "blend",
          "normalized": "Float-\u003eColor-\u003eColor-\u003eColor",
          "package": "colors",
          "signature": "Float-\u003eColor-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colors/docs/Data-Color.html#v:blend"
      }
    }
  ]
]