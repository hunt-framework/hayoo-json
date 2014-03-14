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
        "word": "adobe-swatch-exchange"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate a \u003ccode\u003e.css\u003c/code\u003e file from a \u003ccode\u003e.ase\u003c/code\u003e file. For each color in the \u003ccode\u003e.ase\u003c/code\u003e the \u003ccode\u003e.css\u003c/code\u003e will contain three entries:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eWhere \u003ccode\u003en\u003c/code\u003e is an integer based on the order the color was found in the \u003ccode\u003e.ase\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "CSS",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange-CSS.html",
          "type": "module"
        },
        "index": {
          "description": "Create css file from ase file For each color in the ase the css will contain three entries fg-color-ase-n bg-color-ase-n border-color-ase-n Where is an integer based on the order the color was found in the ase file",
          "hierarchy": "Data AdobeSwatchExchange CSS",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "CSS",
          "package": "adobe-swatch-exchange",
          "partial": "CSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a \u003ccode\u003e\u003ca\u003eStyleSheet\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAdobeSwatchExchange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "ase2css",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange -\u003e StyleSheet",
          "source": "src/Data-AdobeSwatchExchange-CSS.html#ase2css",
          "type": "function"
        },
        "index": {
          "description": "generate StyleSheet from an AdobeSwatchExchange",
          "hierarchy": "Data AdobeSwatchExchange CSS",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "ase2css",
          "normalized": "AdobeSwatchExchange-\u003eStyleSheet",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange-\u003eStyleSheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#v:ase2css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a color rules from an indexed \u003ccode\u003eColorEntry\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003egenerates:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eCurrently only \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color is supported. Since CSS only supports\n rgb, supporting other colors would require the conversion to RGB\n color space. Feel free to send a patch!\n genColor :: (Int, ASEBlock) -\u003e (Int, [RuleSet])\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "genBlock",
          "package": "adobe-swatch-exchange",
          "signature": "ASEBlock -\u003e State Int [RuleSet]",
          "source": "src/Data-AdobeSwatchExchange-CSS.html#genBlock",
          "type": "function"
        },
        "index": {
          "description": "generate color rules from an indexed ColorEntry generates fg-color-ase-n bg-color-ase-n border-color-ase-n Currently only RGB color is supported Since CSS only supports rgb supporting other colors would require the conversion to RGB color space Feel free to send patch genColor Int ASEBlock Int RuleSet",
          "hierarchy": "Data AdobeSwatchExchange CSS",
          "module": "Data.AdobeSwatchExchange.CSS",
          "name": "genBlock",
          "normalized": "ASEBlock-\u003eState Int[RuleSet]",
          "package": "adobe-swatch-exchange",
          "partial": "Block",
          "signature": "ASEBlock-\u003eState Int[RuleSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#v:genBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate a \u003ccode\u003e.less\u003c/code\u003e file from a \u003ccode\u003e.ase\u003c/code\u003e file. For each color in the \u003ccode\u003e.ase\u003c/code\u003e the \u003ccode\u003e.css\u003c/code\u003e will contain an entry:\n\u003c/p\u003e\u003cp\u003ecolor-ase-n\n\u003c/p\u003e\u003cp\u003eWhere \u003ccode\u003en\u003c/code\u003e is an integer based on the order the color was found in the \u003ccode\u003e.ase\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "LESS",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange-LESS.html",
          "type": "module"
        },
        "index": {
          "description": "Create less file from ase file For each color in the ase the css will contain an entry color-ase-n Where is an integer based on the order the color was found in the ase file",
          "hierarchy": "Data AdobeSwatchExchange LESS",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "LESS",
          "package": "adobe-swatch-exchange",
          "partial": "LESS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a less document from an \u003ccode\u003e\u003ca\u003eAdobeSwatchExchange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "ase2less",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange -\u003e Doc",
          "source": "src/Data-AdobeSwatchExchange-LESS.html#ase2less",
          "type": "function"
        },
        "index": {
          "description": "generate less document from an AdobeSwatchExchange",
          "hierarchy": "Data AdobeSwatchExchange LESS",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "ase2less",
          "normalized": "AdobeSwatchExchange-\u003eDoc",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#v:ase2less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a color rules from an indexed \u003ccode\u003eColorEntry\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003egenerates:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eCurrently only \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color is supported. Since CSS only supports\n rgb, supporting other colors would require the conversion to RGB\n color space. Feel free to send a patch!\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "genColor",
          "package": "adobe-swatch-exchange",
          "signature": "ASEBlock -\u003e State Int Doc",
          "source": "src/Data-AdobeSwatchExchange-LESS.html#genColor",
          "type": "function"
        },
        "index": {
          "description": "generate color rules from an indexed ColorEntry generates fg-color-ase-n bg-color-ase-n border-color-ase-n Currently only RGB color is supported Since CSS only supports rgb supporting other colors would require the conversion to RGB color space Feel free to send patch",
          "hierarchy": "Data AdobeSwatchExchange LESS",
          "module": "Data.AdobeSwatchExchange.LESS",
          "name": "genColor",
          "normalized": "ASEBlock-\u003eState Int Doc",
          "package": "adobe-swatch-exchange",
          "partial": "Color",
          "signature": "ASEBlock-\u003eState Int Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#v:genColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the types for \u003ccode\u003eAdobeStageExchange\u003c/code\u003e and a suitable\n\u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance. All the get/put helper functions are also exported,\nbut, in general, you will just want the types and the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e\ninstance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the types for AdobeStageExchange and suitable Binary instance All the get put helper functions are also exported but in general you will just want the types and the Binary instance",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "partial": "Adobe Swatch Exchange",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Adobe Swatch Exchange block\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "ASEBlock",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
          "type": "data"
        },
        "index": {
          "description": "An Adobe Swatch Exchange block",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "ASEBlock",
          "package": "adobe-swatch-exchange",
          "partial": "ASEBlock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ASEBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdobeSwatchExchange\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
          "type": "data"
        },
        "index": {
          "description": "AdobeSwatchExchange",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "partial": "Adobe Swatch Exchange",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:AdobeSwatchExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "Color",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html#Color",
          "type": "data"
        },
        "index": {
          "description": "color",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "Color",
          "package": "adobe-swatch-exchange",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA named color\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorEntry",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
          "type": "data"
        },
        "index": {
          "description": "named color",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorEntry",
          "package": "adobe-swatch-exchange",
          "partial": "Color Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ColorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolor type\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorType",
          "package": "adobe-swatch-exchange",
          "source": "src/Data-AdobeSwatchExchange.html#ColorType",
          "type": "data"
        },
        "index": {
          "description": "color type",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorType",
          "package": "adobe-swatch-exchange",
          "partial": "Color Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ColorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange",
          "source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "AdobeSwatchExchange",
          "package": "adobe-swatch-exchange",
          "partial": "Adobe Swatch Exchange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:AdobeSwatchExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "CE",
          "package": "adobe-swatch-exchange",
          "signature": "CE ColorEntry",
          "source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "CE",
          "package": "adobe-swatch-exchange",
          "partial": "CE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:CE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "CYMK",
          "package": "adobe-swatch-exchange",
          "signature": "CYMK Float Float Float Float",
          "source": "src/Data-AdobeSwatchExchange.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "CYMK",
          "package": "adobe-swatch-exchange",
          "partial": "CYMK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:CYMK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorEntry",
          "package": "adobe-swatch-exchange",
          "signature": "ColorEntry",
          "source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "ColorEntry",
          "package": "adobe-swatch-exchange",
          "partial": "Color Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:ColorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "Global",
          "package": "adobe-swatch-exchange",
          "signature": "Global",
          "source": "src/Data-AdobeSwatchExchange.html#ColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "Global",
          "package": "adobe-swatch-exchange",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "Gray",
          "package": "adobe-swatch-exchange",
          "signature": "Gray Float",
          "source": "src/Data-AdobeSwatchExchange.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "Gray",
          "package": "adobe-swatch-exchange",
          "partial": "Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "GroupEnd",
          "package": "adobe-swatch-exchange",
          "signature": "GroupEnd",
          "source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "GroupEnd",
          "package": "adobe-swatch-exchange",
          "partial": "Group End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:GroupEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "GroupStart",
          "package": "adobe-swatch-exchange",
          "signature": "GroupStart",
          "source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "GroupStart",
          "package": "adobe-swatch-exchange",
          "partial": "Group Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:GroupStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "LAB",
          "package": "adobe-swatch-exchange",
          "signature": "LAB Float Float Float",
          "source": "src/Data-AdobeSwatchExchange.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "LAB",
          "package": "adobe-swatch-exchange",
          "partial": "LAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:LAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "Normal",
          "package": "adobe-swatch-exchange",
          "signature": "Normal",
          "source": "src/Data-AdobeSwatchExchange.html#ColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "Normal",
          "package": "adobe-swatch-exchange",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "RGB",
          "package": "adobe-swatch-exchange",
          "signature": "RGB Float Float Float",
          "source": "src/Data-AdobeSwatchExchange.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "RGB",
          "package": "adobe-swatch-exchange",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "Spot",
          "package": "adobe-swatch-exchange",
          "signature": "Spot",
          "source": "src/Data-AdobeSwatchExchange.html#ColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "Spot",
          "package": "adobe-swatch-exchange",
          "partial": "Spot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Spot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "blColor",
          "package": "adobe-swatch-exchange",
          "signature": "Color -\u003e a",
          "source": "src/Data-AdobeSwatchExchange.html#blColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "blColor",
          "normalized": "Color-\u003ea",
          "package": "adobe-swatch-exchange",
          "partial": "Color",
          "signature": "Color-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "blColorType",
          "package": "adobe-swatch-exchange",
          "signature": "a",
          "source": "src/Data-AdobeSwatchExchange.html#blColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "blColorType",
          "package": "adobe-swatch-exchange",
          "partial": "Color Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blColorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "blName",
          "package": "adobe-swatch-exchange",
          "signature": "String -\u003e a",
          "source": "src/Data-AdobeSwatchExchange.html#blName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "blName",
          "normalized": "String-\u003ea",
          "package": "adobe-swatch-exchange",
          "partial": "Name",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "blocks",
          "package": "adobe-swatch-exchange",
          "signature": "[ASEBlock]",
          "source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "blocks",
          "normalized": "[ASEBlock]",
          "package": "adobe-swatch-exchange",
          "signature": "[ASEBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "color",
          "package": "adobe-swatch-exchange",
          "signature": "Color",
          "source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "color",
          "package": "adobe-swatch-exchange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "colorName",
          "package": "adobe-swatch-exchange",
          "signature": "String",
          "source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "colorName",
          "package": "adobe-swatch-exchange",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e to an RGB hex value.\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "colorToHex",
          "package": "adobe-swatch-exchange",
          "signature": "Color -\u003e String",
          "source": "src/Data-AdobeSwatchExchange.html#colorToHex",
          "type": "function"
        },
        "index": {
          "description": "Convert Color to an RGB hex value",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "colorToHex",
          "normalized": "Color-\u003eString",
          "package": "adobe-swatch-exchange",
          "partial": "To Hex",
          "signature": "Color-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorToHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "colorType",
          "package": "adobe-swatch-exchange",
          "signature": "ColorType",
          "source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "colorType",
          "package": "adobe-swatch-exchange",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getASE",
          "package": "adobe-swatch-exchange",
          "signature": "Get AdobeSwatchExchange",
          "source": "src/Data-AdobeSwatchExchange.html#getASE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getASE",
          "package": "adobe-swatch-exchange",
          "partial": "ASE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getASE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getBlock",
          "package": "adobe-swatch-exchange",
          "signature": "Get ASEBlock",
          "source": "src/Data-AdobeSwatchExchange.html#getBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getBlock",
          "package": "adobe-swatch-exchange",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getColor",
          "package": "adobe-swatch-exchange",
          "signature": "Get Color",
          "source": "src/Data-AdobeSwatchExchange.html#getColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getColor",
          "package": "adobe-swatch-exchange",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getColorEntry",
          "package": "adobe-swatch-exchange",
          "signature": "Get ColorEntry",
          "source": "src/Data-AdobeSwatchExchange.html#getColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getColorEntry",
          "package": "adobe-swatch-exchange",
          "partial": "Color Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getColorType",
          "package": "adobe-swatch-exchange",
          "signature": "Get ColorType",
          "source": "src/Data-AdobeSwatchExchange.html#getColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getColorType",
          "package": "adobe-swatch-exchange",
          "partial": "Color Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the ASEF file signature\n\u003c/p\u003e",
          "module": "Data.AdobeSwatchExchange",
          "name": "getFileSig",
          "package": "adobe-swatch-exchange",
          "signature": "Get ()",
          "source": "src/Data-AdobeSwatchExchange.html#getFileSig",
          "type": "function"
        },
        "index": {
          "description": "get the ASEF file signature",
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getFileSig",
          "normalized": "Get()",
          "package": "adobe-swatch-exchange",
          "partial": "File Sig",
          "signature": "Get()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getFileSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getName",
          "package": "adobe-swatch-exchange",
          "signature": "Get String",
          "source": "src/Data-AdobeSwatchExchange.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getName",
          "package": "adobe-swatch-exchange",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "getVersion",
          "package": "adobe-swatch-exchange",
          "signature": "Get (Word16, Word16)",
          "source": "src/Data-AdobeSwatchExchange.html#getVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "getVersion",
          "normalized": "Get(Word,Word)",
          "package": "adobe-swatch-exchange",
          "partial": "Version",
          "signature": "Get(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "groupName",
          "package": "adobe-swatch-exchange",
          "signature": "String",
          "source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "groupName",
          "package": "adobe-swatch-exchange",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putASE",
          "package": "adobe-swatch-exchange",
          "signature": "AdobeSwatchExchange -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putASE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putASE",
          "normalized": "AdobeSwatchExchange-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "ASE",
          "signature": "AdobeSwatchExchange-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putASE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putBlock",
          "package": "adobe-swatch-exchange",
          "signature": "ASEBlock -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putBlock",
          "normalized": "ASEBlock-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Block",
          "signature": "ASEBlock-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putColor",
          "package": "adobe-swatch-exchange",
          "signature": "Color -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putColor",
          "normalized": "Color-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Color",
          "signature": "Color-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putColorEntry",
          "package": "adobe-swatch-exchange",
          "signature": "ColorEntry -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putColorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putColorEntry",
          "normalized": "ColorEntry-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Color Entry",
          "signature": "ColorEntry-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putColorType",
          "package": "adobe-swatch-exchange",
          "signature": "ColorType -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putColorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putColorType",
          "normalized": "ColorType-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Color Type",
          "signature": "ColorType-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putFileSig",
          "package": "adobe-swatch-exchange",
          "signature": "Put",
          "source": "src/Data-AdobeSwatchExchange.html#putFileSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putFileSig",
          "package": "adobe-swatch-exchange",
          "partial": "File Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putFileSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putName",
          "package": "adobe-swatch-exchange",
          "signature": "String -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putName",
          "normalized": "String-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Name",
          "signature": "String-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "putVersion",
          "package": "adobe-swatch-exchange",
          "signature": "(Word16, Word16) -\u003e Put",
          "source": "src/Data-AdobeSwatchExchange.html#putVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "putVersion",
          "normalized": "(Word,Word)-\u003ePut",
          "package": "adobe-swatch-exchange",
          "partial": "Version",
          "signature": "(Word,Word)-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AdobeSwatchExchange",
          "name": "version",
          "package": "adobe-swatch-exchange",
          "signature": "(Word16, Word16)",
          "source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AdobeSwatchExchange",
          "module": "Data.AdobeSwatchExchange",
          "name": "version",
          "normalized": "(Word,Word)",
          "package": "adobe-swatch-exchange",
          "signature": "(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:version"
      }
    }
  ]
]