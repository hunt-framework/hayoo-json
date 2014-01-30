[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate a \u003ccode\u003e.css\u003c/code\u003e file from a \u003ccode\u003e.ase\u003c/code\u003e file. For each color in the \u003ccode\u003e.ase\u003c/code\u003e the \u003ccode\u003e.css\u003c/code\u003e will contain three entries:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eWhere \u003ccode\u003en\u003c/code\u003e is an integer based on the order the color was found in the \u003ccode\u003e.ase\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AdobeSwatchExchange.CSS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "module",
        "fct-source": "src/Data-AdobeSwatchExchange-CSS.html",
        "fct-type": "module",
        "title": "CSS"
      },
      "index": {
        "description": "Create css file from ase file For each color in the ase the css will contain three entries fg-color-ase-n bg-color-ase-n border-color-ase-n Where is an integer based on the order the color was found in the ase file",
        "hierarchy": "Data AdobeSwatchExchange CSS",
        "module": "Data.AdobeSwatchExchange.CSS",
        "name": "CSS",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "CSS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#v:ase2css",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a \u003ccode\u003e\u003ca\u003eStyleSheet\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAdobeSwatchExchange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange.CSS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "AdobeSwatchExchange -\u003e StyleSheet",
        "fct-source": "src/Data-AdobeSwatchExchange-CSS.html#ase2css",
        "fct-type": "function",
        "title": "ase2css"
      },
      "index": {
        "description": "generate StyleSheet from an AdobeSwatchExchange",
        "hierarchy": "Data AdobeSwatchExchange CSS",
        "module": "Data.AdobeSwatchExchange.CSS",
        "name": "ase2css",
        "normalized": "AdobeSwatchExchange-\u003eStyleSheet",
        "package": "adobe-swatch-exchange",
        "partial": "",
        "signature": "AdobeSwatchExchange-\u003eStyleSheet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-CSS.html#v:genBlock",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a color rules from an indexed \u003ccode\u003eColorEntry\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003egenerates:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eCurrently only \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color is supported. Since CSS only supports\n rgb, supporting other colors would require the conversion to RGB\n color space. Feel free to send a patch!\n genColor :: (Int, ASEBlock) -\u003e (Int, [RuleSet])\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange.CSS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ASEBlock -\u003e State Int [RuleSet]",
        "fct-source": "src/Data-AdobeSwatchExchange-CSS.html#genBlock",
        "fct-type": "function",
        "title": "genBlock"
      },
      "index": {
        "description": "generate color rules from an indexed ColorEntry generates fg-color-ase-n bg-color-ase-n border-color-ase-n Currently only RGB color is supported Since CSS only supports rgb supporting other colors would require the conversion to RGB color space Feel free to send patch genColor Int ASEBlock Int RuleSet",
        "hierarchy": "Data AdobeSwatchExchange CSS",
        "module": "Data.AdobeSwatchExchange.CSS",
        "name": "genBlock",
        "normalized": "ASEBlock-\u003eState Int[RuleSet]",
        "package": "adobe-swatch-exchange",
        "partial": "Block",
        "signature": "ASEBlock-\u003eState Int[RuleSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate a \u003ccode\u003e.less\u003c/code\u003e file from a \u003ccode\u003e.ase\u003c/code\u003e file. For each color in the \u003ccode\u003e.ase\u003c/code\u003e the \u003ccode\u003e.css\u003c/code\u003e will contain an entry:\n\u003c/p\u003e\u003cp\u003ecolor-ase-n\n\u003c/p\u003e\u003cp\u003eWhere \u003ccode\u003en\u003c/code\u003e is an integer based on the order the color was found in the \u003ccode\u003e.ase\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AdobeSwatchExchange.LESS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "module",
        "fct-source": "src/Data-AdobeSwatchExchange-LESS.html",
        "fct-type": "module",
        "title": "LESS"
      },
      "index": {
        "description": "Create less file from ase file For each color in the ase the css will contain an entry color-ase-n Where is an integer based on the order the color was found in the ase file",
        "hierarchy": "Data AdobeSwatchExchange LESS",
        "module": "Data.AdobeSwatchExchange.LESS",
        "name": "LESS",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "LESS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#v:ase2less",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a less document from an \u003ccode\u003e\u003ca\u003eAdobeSwatchExchange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange.LESS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "AdobeSwatchExchange -\u003e Doc",
        "fct-source": "src/Data-AdobeSwatchExchange-LESS.html#ase2less",
        "fct-type": "function",
        "title": "ase2less"
      },
      "index": {
        "description": "generate less document from an AdobeSwatchExchange",
        "hierarchy": "Data AdobeSwatchExchange LESS",
        "module": "Data.AdobeSwatchExchange.LESS",
        "name": "ase2less",
        "normalized": "AdobeSwatchExchange-\u003eDoc",
        "package": "adobe-swatch-exchange",
        "partial": "",
        "signature": "AdobeSwatchExchange-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange-LESS.html#v:genColor",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a color rules from an indexed \u003ccode\u003eColorEntry\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003egenerates:\n\u003c/p\u003e\u003cp\u003efg-color-ase-n\n    bg-color-ase-n\n    border-color-ase-n\n\u003c/p\u003e\u003cp\u003eCurrently only \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color is supported. Since CSS only supports\n rgb, supporting other colors would require the conversion to RGB\n color space. Feel free to send a patch!\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange.LESS",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ASEBlock -\u003e State Int Doc",
        "fct-source": "src/Data-AdobeSwatchExchange-LESS.html#genColor",
        "fct-type": "function",
        "title": "genColor"
      },
      "index": {
        "description": "generate color rules from an indexed ColorEntry generates fg-color-ase-n bg-color-ase-n border-color-ase-n Currently only RGB color is supported Since CSS only supports rgb supporting other colors would require the conversion to RGB color space Feel free to send patch",
        "hierarchy": "Data AdobeSwatchExchange LESS",
        "module": "Data.AdobeSwatchExchange.LESS",
        "name": "genColor",
        "normalized": "ASEBlock-\u003eState Int Doc",
        "package": "adobe-swatch-exchange",
        "partial": "Color",
        "signature": "ASEBlock-\u003eState Int Doc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the types for \u003ccode\u003eAdobeStageExchange\u003c/code\u003e and a suitable\n\u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance. All the get/put helper functions are also exported,\nbut, in general, you will just want the types and the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e\ninstance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "module",
        "fct-source": "src/Data-AdobeSwatchExchange.html",
        "fct-type": "module",
        "title": "AdobeSwatchExchange"
      },
      "index": {
        "description": "This module defines the types for AdobeStageExchange and suitable Binary instance All the get put helper functions are also exported but in general you will just want the types and the Binary instance",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "AdobeSwatchExchange",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Adobe Swatch Exchange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ASEBlock",
      "description": {
        "fct-descr": "\u003cp\u003eAn Adobe Swatch Exchange block\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "data",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
        "fct-type": "data",
        "title": "ASEBlock"
      },
      "index": {
        "description": "An Adobe Swatch Exchange block",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "ASEBlock",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "ASEBlock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:AdobeSwatchExchange",
      "description": {
        "fct-descr": "\u003cp\u003eAdobeSwatchExchange\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "data",
        "fct-source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
        "fct-type": "data",
        "title": "AdobeSwatchExchange"
      },
      "index": {
        "description": "AdobeSwatchExchange",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "AdobeSwatchExchange",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Adobe Swatch Exchange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eA color\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "data",
        "fct-source": "src/Data-AdobeSwatchExchange.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "color",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "Color",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ColorEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA named color\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "data",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
        "fct-type": "data",
        "title": "ColorEntry"
      },
      "index": {
        "description": "named color",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "ColorEntry",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#t:ColorType",
      "description": {
        "fct-descr": "\u003cp\u003ecolor type\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "data",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorType",
        "fct-type": "data",
        "title": "ColorType"
      },
      "index": {
        "description": "color type",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "ColorType",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:AdobeSwatchExchange",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "AdobeSwatchExchange",
        "fct-source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
        "fct-type": "function",
        "title": "AdobeSwatchExchange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "AdobeSwatchExchange",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Adobe Swatch Exchange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:CE",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "CE ColorEntry",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
        "fct-type": "function",
        "title": "CE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "CE",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "CE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:CYMK",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "CYMK Float Float Float Float",
        "fct-source": "src/Data-AdobeSwatchExchange.html#Color",
        "fct-type": "function",
        "title": "CYMK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "CYMK",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "CYMK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:ColorEntry",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ColorEntry",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
        "fct-type": "function",
        "title": "ColorEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "ColorEntry",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Global",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Global",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorType",
        "fct-type": "function",
        "title": "Global"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "Global",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Gray",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Gray Float",
        "fct-source": "src/Data-AdobeSwatchExchange.html#Color",
        "fct-type": "function",
        "title": "Gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "Gray",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:GroupEnd",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "GroupEnd",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
        "fct-type": "function",
        "title": "GroupEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "GroupEnd",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Group End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:GroupStart",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "GroupStart",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
        "fct-type": "function",
        "title": "GroupStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "GroupStart",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Group Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:LAB",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "LAB Float Float Float",
        "fct-source": "src/Data-AdobeSwatchExchange.html#Color",
        "fct-type": "function",
        "title": "LAB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "LAB",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "LAB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Normal",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Normal",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorType",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "Normal",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:RGB",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "RGB Float Float Float",
        "fct-source": "src/Data-AdobeSwatchExchange.html#Color",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "RGB",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:Spot",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Spot",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorType",
        "fct-type": "function",
        "title": "Spot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "Spot",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Spot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blColor",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Color -\u003e a",
        "fct-source": "src/Data-AdobeSwatchExchange.html#blColor",
        "fct-type": "function",
        "title": "blColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "blColor",
        "normalized": "Color-\u003ea",
        "package": "adobe-swatch-exchange",
        "partial": "Color",
        "signature": "Color-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blColorType",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "a",
        "fct-source": "src/Data-AdobeSwatchExchange.html#blColorType",
        "fct-type": "function",
        "title": "blColorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "blColorType",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blName",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-AdobeSwatchExchange.html#blName",
        "fct-type": "function",
        "title": "blName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "blName",
        "normalized": "String-\u003ea",
        "package": "adobe-swatch-exchange",
        "partial": "Name",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:blocks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "[ASEBlock]",
        "fct-source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
        "fct-type": "function",
        "title": "blocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "blocks",
        "normalized": "[ASEBlock]",
        "package": "adobe-swatch-exchange",
        "partial": "",
        "signature": "[ASEBlock]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Color",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "color",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "String",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
        "fct-type": "function",
        "title": "colorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "colorName",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorToHex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e to an RGB hex value.\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Color -\u003e String",
        "fct-source": "src/Data-AdobeSwatchExchange.html#colorToHex",
        "fct-type": "function",
        "title": "colorToHex"
      },
      "index": {
        "description": "Convert Color to an RGB hex value",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "colorToHex",
        "normalized": "Color-\u003eString",
        "package": "adobe-swatch-exchange",
        "partial": "To Hex",
        "signature": "Color-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:colorType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ColorType",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ColorEntry",
        "fct-type": "function",
        "title": "colorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "colorType",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getASE",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get AdobeSwatchExchange",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getASE",
        "fct-type": "function",
        "title": "getASE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getASE",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "ASE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getBlock",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get ASEBlock",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getBlock",
        "fct-type": "function",
        "title": "getBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getBlock",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColor",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get Color",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getColor",
        "fct-type": "function",
        "title": "getColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getColor",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColorEntry",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get ColorEntry",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getColorEntry",
        "fct-type": "function",
        "title": "getColorEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getColorEntry",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getColorType",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get ColorType",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getColorType",
        "fct-type": "function",
        "title": "getColorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getColorType",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Color Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getFileSig",
      "description": {
        "fct-descr": "\u003cp\u003eget the ASEF file signature\n\u003c/p\u003e",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get ()",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getFileSig",
        "fct-type": "function",
        "title": "getFileSig"
      },
      "index": {
        "description": "get the ASEF file signature",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getFileSig",
        "normalized": "Get()",
        "package": "adobe-swatch-exchange",
        "partial": "File Sig",
        "signature": "Get()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getName",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get String",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getName",
        "fct-type": "function",
        "title": "getName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getName",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:getVersion",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Get (Word16, Word16)",
        "fct-source": "src/Data-AdobeSwatchExchange.html#getVersion",
        "fct-type": "function",
        "title": "getVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "getVersion",
        "normalized": "Get(Word,Word)",
        "package": "adobe-swatch-exchange",
        "partial": "Version",
        "signature": "Get(Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:groupName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "String",
        "fct-source": "src/Data-AdobeSwatchExchange.html#ASEBlock",
        "fct-type": "function",
        "title": "groupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "groupName",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putASE",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "AdobeSwatchExchange -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putASE",
        "fct-type": "function",
        "title": "putASE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putASE",
        "normalized": "AdobeSwatchExchange-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "ASE",
        "signature": "AdobeSwatchExchange-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putBlock",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ASEBlock -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putBlock",
        "fct-type": "function",
        "title": "putBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putBlock",
        "normalized": "ASEBlock-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Block",
        "signature": "ASEBlock-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColor",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Color -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putColor",
        "fct-type": "function",
        "title": "putColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putColor",
        "normalized": "Color-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Color",
        "signature": "Color-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColorEntry",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ColorEntry -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putColorEntry",
        "fct-type": "function",
        "title": "putColorEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putColorEntry",
        "normalized": "ColorEntry-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Color Entry",
        "signature": "ColorEntry-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putColorType",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "ColorType -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putColorType",
        "fct-type": "function",
        "title": "putColorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putColorType",
        "normalized": "ColorType-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Color Type",
        "signature": "ColorType-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putFileSig",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putFileSig",
        "fct-type": "function",
        "title": "putFileSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putFileSig",
        "normalized": "",
        "package": "adobe-swatch-exchange",
        "partial": "File Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putName",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "String -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putName",
        "fct-type": "function",
        "title": "putName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putName",
        "normalized": "String-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Name",
        "signature": "String-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:putVersion",
      "description": {
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "(Word16, Word16) -\u003e Put",
        "fct-source": "src/Data-AdobeSwatchExchange.html#putVersion",
        "fct-type": "function",
        "title": "putVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "putVersion",
        "normalized": "(Word,Word)-\u003ePut",
        "package": "adobe-swatch-exchange",
        "partial": "Version",
        "signature": "(Word,Word)-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adobe-swatch-exchange/docs/Data-AdobeSwatchExchange.html#v:version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.AdobeSwatchExchange",
        "fct-package": "adobe-swatch-exchange",
        "fct-signature": "(Word16, Word16)",
        "fct-source": "src/Data-AdobeSwatchExchange.html#AdobeSwatchExchange",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AdobeSwatchExchange",
        "module": "Data.AdobeSwatchExchange",
        "name": "version",
        "normalized": "(Word,Word)",
        "package": "adobe-swatch-exchange",
        "partial": "",
        "signature": "(Word,Word)"
      }
    }
  }
]