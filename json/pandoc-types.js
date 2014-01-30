[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions for building pandoc documents programmatically.\n\u003c/p\u003e\u003cp\u003eExample of use (with \u003ccode\u003eOverloadedStrings\u003c/code\u003e pragma):\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Builder\n\n myDoc :: Pandoc\n myDoc = setTitle \"My title\" $ doc $\n   para \"This is the first paragraph\" \u003c\u003e\n   para (\"And \" \u003c\u003e emph \"another\" \u003c\u003e \".\") \u003c\u003e\n   bulletList [ para \"item one\" \u003c\u003e para \"continuation\"\n              , plain (\"item two and a \" \u003c\u003e\n                  link \"/url\" \"go to url\" \"link\")\n              ]\n\u003c/pre\u003e\u003cp\u003eIsn't that nicer than writing the following?\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Data.Map (fromList)\n\n myDoc :: Pandoc\n myDoc = Pandoc (Meta {unMeta = fromList [(\"title\",\n           MetaInlines [Str \"My\",Space,Str \"title\"])]})\n         [Para [Str \"This\",Space,Str \"is\",Space,Str \"the\",Space,Str \"first\",\n          Space,Str \"paragraph\"],Para [Str \"And\",Space,Emph [Str \"another\"],\n          Str \".\"]\n         ,BulletList [\n           [Para [Str \"item\",Space,Str \"one\"]\n           ,Para [Str \"continuation\"]]\n          ,[Plain [Str \"item\",Space,Str \"two\",Space,Str \"and\",Space,\n                   Str \"a\",Space,Link [Str \"link\"] (\"/url\",\"go to url\")]]]]\n\u003c/pre\u003e\u003cp\u003eAnd of course, you can use Haskell to define your own builders:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Builder\n import Text.JSON\n import Control.Arrow ((***))\n import Data.Monoid (mempty)\n\n -- | Converts a JSON document into 'Blocks'.\n json :: String -\u003e Blocks\n json x =\n   case decode x of\n        Ok y    -\u003e jsValueToBlocks y\n        Error y -\u003e error y\n    where jsValueToBlocks x =\n           case x of\n            JSNull         -\u003e mempty\n            JSBool x       -\u003e plain $ text $ show x\n            JSRational _ x -\u003e plain $ text $ show x\n            JSString x     -\u003e plain $ text $ fromJSString x\n            JSArray xs     -\u003e bulletList $ map jsValueToBlocks xs\n            JSObject x     -\u003e definitionList $\n                               map (text *** (:[]) . jsValueToBlocks) $\n                               fromJSObject x\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "module",
        "fct-source": "src/Text-Pandoc-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Convenience functions for building pandoc documents programmatically Example of use with OverloadedStrings pragma import Text.Pandoc.Builder myDoc Pandoc myDoc setTitle My title doc para This is the first paragraph para And emph another bulletList para item one para continuation plain item two and link url go to url link Isn that nicer than writing the following import Text.Pandoc.Definition import Data.Map fromList myDoc Pandoc myDoc Pandoc Meta unMeta fromList title MetaInlines Str My Space Str title Para Str This Space Str is Space Str the Space Str first Space Str paragraph Para Str And Space Emph Str another Str BulletList Para Str item Space Str one Para Str continuation Plain Str item Space Str two Space Str and Space Str Space Link Str link url go to url And of course you can use Haskell to define your own builders import Text.Pandoc.Builder import Text.JSON import Control.Arrow import Data.Monoid mempty Converts JSON document into Blocks json String Blocks json case decode of Ok jsValueToBlocks Error error where jsValueToBlocks case of JSNull mempty JSBool plain text show JSRational plain text show JSString plain text fromJSString JSArray xs bulletList map jsValueToBlocks xs JSObject definitionList map text jsValueToBlocks fromJSObject",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Blocks",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Builder.html#Blocks",
        "fct-type": "type",
        "title": "Blocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "Blocks",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:HasMeta",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "class",
        "fct-source": "src/Text-Pandoc-Builder.html#HasMeta",
        "fct-type": "class",
        "title": "HasMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "HasMeta",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Has Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Inlines",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Builder.html#Inlines",
        "fct-type": "type",
        "title": "Inlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "Inlines",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Inlines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Many",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Pandoc-Builder.html#Many",
        "fct-type": "newtype",
        "title": "Many"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "Many",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:ToMetaValue",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "class",
        "fct-source": "src/Text-Pandoc-Builder.html#ToMetaValue",
        "fct-type": "class",
        "title": "ToMetaValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "ToMetaValue",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "To Meta Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "pandoc-types",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:Many",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Many",
        "fct-source": "src/Text-Pandoc-Builder.html#Many",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "Many",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:blockQuote",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Blocks -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#blockQuote",
        "fct-type": "function",
        "title": "blockQuote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "blockQuote",
        "normalized": "Blocks-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "Quote",
        "signature": "Blocks-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:bulletList",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[Blocks] -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#bulletList",
        "fct-type": "function",
        "title": "bulletList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "bulletList",
        "normalized": "[Blocks]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "List",
        "signature": "[Blocks]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:cite",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[Citation] -\u003e Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#cite",
        "fct-type": "function",
        "title": "cite"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "cite",
        "normalized": "[Citation]-\u003eInlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "[Citation]-\u003eInlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:code",
      "description": {
        "fct-descr": "\u003cp\u003ePlain inline code.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#code",
        "fct-type": "function",
        "title": "code"
      },
      "index": {
        "description": "Plain inline code",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "code",
        "normalized": "String-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeBlock",
      "description": {
        "fct-descr": "\u003cp\u003eA plain code block.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#codeBlock",
        "fct-type": "function",
        "title": "codeBlock"
      },
      "index": {
        "description": "plain code block",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "codeBlock",
        "normalized": "String-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "Block",
        "signature": "String-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeBlockWith",
      "description": {
        "fct-descr": "\u003cp\u003eA code block with attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr -\u003e String -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#codeBlockWith",
        "fct-type": "function",
        "title": "codeBlockWith"
      },
      "index": {
        "description": "code block with attributes",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "codeBlockWith",
        "normalized": "Attr-\u003eString-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "Block With",
        "signature": "Attr-\u003eString-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeWith",
      "description": {
        "fct-descr": "\u003cp\u003eInline code with attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr -\u003e String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#codeWith",
        "fct-type": "function",
        "title": "codeWith"
      },
      "index": {
        "description": "Inline code with attributes",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "codeWith",
        "normalized": "Attr-\u003eString-\u003eInlines",
        "package": "pandoc-types",
        "partial": "With",
        "signature": "Attr-\u003eString-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:definitionList",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[(Inlines, [Blocks])] -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#definitionList",
        "fct-type": "function",
        "title": "definitionList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "definitionList",
        "normalized": "[(Inlines,[Blocks])]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "List",
        "signature": "[(Inlines,[Blocks])]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:deleteMeta",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Text-Pandoc-Builder.html#deleteMeta",
        "fct-type": "method",
        "title": "deleteMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "deleteMeta",
        "normalized": "String-\u003ea-\u003ea",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:displayMath",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay math\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#displayMath",
        "fct-type": "function",
        "title": "displayMath"
      },
      "index": {
        "description": "Display math",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "displayMath",
        "normalized": "String-\u003eInlines",
        "package": "pandoc-types",
        "partial": "Math",
        "signature": "String-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:divWith",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr -\u003e Blocks -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#divWith",
        "fct-type": "function",
        "title": "divWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "divWith",
        "normalized": "Attr-\u003eBlocks-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "With",
        "signature": "Attr-\u003eBlocks-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:doc",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Blocks -\u003e Pandoc",
        "fct-source": "src/Text-Pandoc-Builder.html#doc",
        "fct-type": "function",
        "title": "doc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "doc",
        "normalized": "Blocks-\u003ePandoc",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Blocks-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:doubleQuoted",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#doubleQuoted",
        "fct-type": "function",
        "title": "doubleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "doubleQuoted",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "Quoted",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:emph",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#emph",
        "fct-type": "function",
        "title": "emph"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "emph",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:fromList",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[a] -\u003e Many a",
        "fct-source": "src/Text-Pandoc-Builder.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "fromList",
        "normalized": "[a]-\u003eMany a",
        "package": "pandoc-types",
        "partial": "List",
        "signature": "[a]-\u003eMany a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:header",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Int-\u003e Inlines-\u003e Blocks",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "header",
        "normalized": "Int-\u003eInlines-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Int-\u003eInlines-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:headerWith",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr -\u003e Int -\u003e Inlines -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#headerWith",
        "fct-type": "function",
        "title": "headerWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "headerWith",
        "normalized": "Attr-\u003eInt-\u003eInlines-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "With",
        "signature": "Attr-\u003eInt-\u003eInlines-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:horizontalRule",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#horizontalRule",
        "fct-type": "function",
        "title": "horizontalRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "horizontalRule",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:image",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String-\u003e String-\u003e Inlines-\u003e Inlines",
        "fct-type": "function",
        "title": "image"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "image",
        "normalized": "String-\u003eString-\u003eInlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eString-\u003eInlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:isNull",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Many a -\u003e Bool",
        "fct-source": "src/Text-Pandoc-Builder.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "isNull",
        "normalized": "Many a-\u003eBool",
        "package": "pandoc-types",
        "partial": "Null",
        "signature": "Many a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:linebreak",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "linebreak",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:link",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String-\u003e String-\u003e Inlines-\u003e Inlines",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "link",
        "normalized": "String-\u003eString-\u003eInlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eString-\u003eInlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:math",
      "description": {
        "fct-descr": "\u003cp\u003eInline math\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#math",
        "fct-type": "function",
        "title": "math"
      },
      "index": {
        "description": "Inline math",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "math",
        "normalized": "String-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:note",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Blocks -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#note",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "note",
        "normalized": "Blocks-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Blocks-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:orderedList",
      "description": {
        "fct-descr": "\u003cp\u003eOrdered list with default attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[Blocks] -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#orderedList",
        "fct-type": "function",
        "title": "orderedList"
      },
      "index": {
        "description": "Ordered list with default attributes",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "orderedList",
        "normalized": "[Blocks]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "List",
        "signature": "[Blocks]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:orderedListWith",
      "description": {
        "fct-descr": "\u003cp\u003eOrdered list with attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "ListAttributes -\u003e [Blocks] -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#orderedListWith",
        "fct-type": "function",
        "title": "orderedListWith"
      },
      "index": {
        "description": "Ordered list with attributes",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "orderedListWith",
        "normalized": "ListAttributes-\u003e[Blocks]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "List With",
        "signature": "ListAttributes-\u003e[Blocks]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:para",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#para",
        "fct-type": "function",
        "title": "para"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "para",
        "normalized": "Inlines-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:plain",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#plain",
        "fct-type": "function",
        "title": "plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "plain",
        "normalized": "Inlines-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:rawBlock",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e String -\u003e Blocks",
        "fct-source": "src/Text-Pandoc-Builder.html#rawBlock",
        "fct-type": "function",
        "title": "rawBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "rawBlock",
        "normalized": "String-\u003eString-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "Block",
        "signature": "String-\u003eString-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:rawInline",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#rawInline",
        "fct-type": "function",
        "title": "rawInline"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "rawInline",
        "normalized": "String-\u003eString-\u003eInlines",
        "package": "pandoc-types",
        "partial": "Inline",
        "signature": "String-\u003eString-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setAuthors",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[Inlines] -\u003e Pandoc -\u003e Pandoc",
        "fct-source": "src/Text-Pandoc-Builder.html#setAuthors",
        "fct-type": "function",
        "title": "setAuthors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "setAuthors",
        "normalized": "[Inlines]-\u003ePandoc-\u003ePandoc",
        "package": "pandoc-types",
        "partial": "Authors",
        "signature": "[Inlines]-\u003ePandoc-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setDate",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Pandoc -\u003e Pandoc",
        "fct-source": "src/Text-Pandoc-Builder.html#setDate",
        "fct-type": "function",
        "title": "setDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "setDate",
        "normalized": "Inlines-\u003ePandoc-\u003ePandoc",
        "package": "pandoc-types",
        "partial": "Date",
        "signature": "Inlines-\u003ePandoc-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setMeta",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Text-Pandoc-Builder.html#setMeta",
        "fct-type": "method",
        "title": "setMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "setMeta",
        "normalized": "String-\u003ea-\u003eb-\u003eb",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": "String-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setTitle",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Pandoc -\u003e Pandoc",
        "fct-source": "src/Text-Pandoc-Builder.html#setTitle",
        "fct-type": "function",
        "title": "setTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "setTitle",
        "normalized": "Inlines-\u003ePandoc-\u003ePandoc",
        "package": "pandoc-types",
        "partial": "Title",
        "signature": "Inlines-\u003ePandoc-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:simpleTable",
      "description": {
        "fct-descr": "\u003cp\u003eA simple table without a caption.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "[Blocks]-\u003e [[Blocks]]-\u003e Blocks",
        "fct-type": "function",
        "title": "simpleTable"
      },
      "index": {
        "description": "simple table without caption",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "simpleTable",
        "normalized": "[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "Table",
        "signature": "[Blocks]-\u003e[[Blocks]]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:singleQuoted",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#singleQuoted",
        "fct-type": "function",
        "title": "singleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "singleQuoted",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "Quoted",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:singleton",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "a -\u003e Many a",
        "fct-source": "src/Text-Pandoc-Builder.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "singleton",
        "normalized": "a-\u003eMany a",
        "package": "pandoc-types",
        "partial": "",
        "signature": "a-\u003eMany a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:smallcaps",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#smallcaps",
        "fct-type": "function",
        "title": "smallcaps"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "smallcaps",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:space",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "space",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:spanWith",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr -\u003e Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#spanWith",
        "fct-type": "function",
        "title": "spanWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "spanWith",
        "normalized": "Attr-\u003eInlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "With",
        "signature": "Attr-\u003eInlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:str",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "str",
        "normalized": "String-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:strikeout",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#strikeout",
        "fct-type": "function",
        "title": "strikeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "strikeout",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:strong",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#strong",
        "fct-type": "function",
        "title": "strong"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "strong",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:subscript",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#subscript",
        "fct-type": "function",
        "title": "subscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "subscript",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:superscript",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#superscript",
        "fct-type": "function",
        "title": "superscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "superscript",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:table",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines-\u003e [(Alignment, Double)]-\u003e [Blocks]-\u003e [[Blocks]]-\u003e Blocks",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "table",
        "normalized": "Inlines-\u003e[(Alignment,Double)]-\u003e[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
        "package": "pandoc-types",
        "partial": "",
        "signature": "Inlines-\u003e[(Alignment,Double)]-\u003e[Blocks]-\u003e[[Blocks]]-\u003eBlocks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInlines\u003c/a\u003e\u003c/code\u003e, treating interword spaces as \u003ccode\u003e\u003ca\u003eSpace\u003c/a\u003e\u003c/code\u003es.\n If you want a \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e with literal spaces, use \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Convert String to Inlines treating interword spaces as Space If you want Str with literal spaces use str",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "text",
        "normalized": "String-\u003eInlines",
        "package": "pandoc-types",
        "partial": "",
        "signature": "String-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:toList",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Many a -\u003e [a]",
        "fct-source": "src/Text-Pandoc-Builder.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "toList",
        "normalized": "Many a-\u003e[a]",
        "package": "pandoc-types",
        "partial": "List",
        "signature": "Many a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:toMetaValue",
      "description": {
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "a -\u003e MetaValue",
        "fct-source": "src/Text-Pandoc-Builder.html#toMetaValue",
        "fct-type": "method",
        "title": "toMetaValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "toMetaValue",
        "normalized": "a-\u003eMetaValue",
        "package": "pandoc-types",
        "partial": "Meta Value",
        "signature": "a-\u003eMetaValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:trimInlines",
      "description": {
        "fct-descr": "\u003cp\u003eTrim leading and trailing Sp (spaces) from an Inlines.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Inlines -\u003e Inlines",
        "fct-source": "src/Text-Pandoc-Builder.html#trimInlines",
        "fct-type": "function",
        "title": "trimInlines"
      },
      "index": {
        "description": "Trim leading and trailing Sp spaces from an Inlines",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "trimInlines",
        "normalized": "Inlines-\u003eInlines",
        "package": "pandoc-types",
        "partial": "Inlines",
        "signature": "Inlines-\u003eInlines"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:unMany",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Builder",
        "fct-package": "pandoc-types",
        "fct-signature": "Seq a",
        "fct-source": "src/Text-Pandoc-Builder.html#Many",
        "fct-type": "function",
        "title": "unMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Builder",
        "module": "Text.Pandoc.Builder",
        "name": "unMany",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e data structure for format-neutral representation\nof documents.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "module",
        "fct-source": "src/Text-Pandoc-Definition.html",
        "fct-type": "module",
        "title": "Definition"
      },
      "index": {
        "description": "Definition of Pandoc data structure for format-neutral representation of documents",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Definition",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Definition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Alignment",
      "description": {
        "fct-descr": "\u003cp\u003eAlignment of a table column.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#Alignment",
        "fct-type": "data",
        "title": "Alignment"
      },
      "index": {
        "description": "Alignment of table column",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Alignment",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes: identifier, classes, key-value pairs\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Definition.html#Attr",
        "fct-type": "type",
        "title": "Attr"
      },
      "index": {
        "description": "Attributes identifier classes key-value pairs",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Attr",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Block",
      "description": {
        "fct-descr": "\u003cp\u003eBlock element.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "data",
        "title": "Block"
      },
      "index": {
        "description": "Block element",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Block",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Citation",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "data",
        "title": "Citation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Citation",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Citation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:CitationMode",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#CitationMode",
        "fct-type": "data",
        "title": "CitationMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "CitationMode",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Citation Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eFormats for raw blocks\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Pandoc-Definition.html#Format",
        "fct-type": "newtype",
        "title": "Format"
      },
      "index": {
        "description": "Formats for raw blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Format",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Inline",
      "description": {
        "fct-descr": "\u003cp\u003eInline elements.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "data",
        "title": "Inline"
      },
      "index": {
        "description": "Inline elements",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Inline",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eList attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Definition.html#ListAttributes",
        "fct-type": "type",
        "title": "ListAttributes"
      },
      "index": {
        "description": "List attributes",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "ListAttributes",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "List Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListNumberDelim",
      "description": {
        "fct-descr": "\u003cp\u003eDelimiter of list numbers.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
        "fct-type": "data",
        "title": "ListNumberDelim"
      },
      "index": {
        "description": "Delimiter of list numbers",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "ListNumberDelim",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "List Number Delim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListNumberStyle",
      "description": {
        "fct-descr": "\u003cp\u003eStyle of list numbers.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "data",
        "title": "ListNumberStyle"
      },
      "index": {
        "description": "Style of list numbers",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "ListNumberStyle",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "List Number Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:MathType",
      "description": {
        "fct-descr": "\u003cp\u003eType of math element (display or inline).\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#MathType",
        "fct-type": "data",
        "title": "MathType"
      },
      "index": {
        "description": "Type of math element display or inline",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MathType",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Math Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Meta",
      "description": {
        "fct-descr": "\u003cp\u003eMetadata for the document:  title, authors, date.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Pandoc-Definition.html#Meta",
        "fct-type": "newtype",
        "title": "Meta"
      },
      "index": {
        "description": "Metadata for the document title authors date",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Meta",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:MetaValue",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "data",
        "title": "MetaValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaValue",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Pandoc",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#Pandoc",
        "fct-type": "data",
        "title": "Pandoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Pandoc",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Pandoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:QuoteType",
      "description": {
        "fct-descr": "\u003cp\u003eType of quotation marks to use in Quoted inline.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "data",
        "fct-source": "src/Text-Pandoc-Definition.html#QuoteType",
        "fct-type": "data",
        "title": "QuoteType"
      },
      "index": {
        "description": "Type of quotation marks to use in Quoted inline",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "QuoteType",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Quote Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:TableCell",
      "description": {
        "fct-descr": "\u003cp\u003eTable cells are list of Blocks\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Definition.html#TableCell",
        "fct-type": "type",
        "title": "TableCell"
      },
      "index": {
        "description": "Table cells are list of Blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "TableCell",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Table Cell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Target",
      "description": {
        "fct-descr": "\u003cp\u003eLink target (URL, title).\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "type",
        "fct-source": "src/Text-Pandoc-Definition.html#Target",
        "fct-type": "type",
        "title": "Target"
      },
      "index": {
        "description": "Link target URL title",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Target",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignCenter",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "AlignCenter",
        "fct-source": "src/Text-Pandoc-Definition.html#Alignment",
        "fct-type": "function",
        "title": "AlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "AlignCenter",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Align Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignDefault",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "AlignDefault",
        "fct-source": "src/Text-Pandoc-Definition.html#Alignment",
        "fct-type": "function",
        "title": "AlignDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "AlignDefault",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Align Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignLeft",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "AlignLeft",
        "fct-source": "src/Text-Pandoc-Definition.html#Alignment",
        "fct-type": "function",
        "title": "AlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "AlignLeft",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Align Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignRight",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "AlignRight",
        "fct-source": "src/Text-Pandoc-Definition.html#Alignment",
        "fct-type": "function",
        "title": "AlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "AlignRight",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Align Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AuthorInText",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "AuthorInText",
        "fct-source": "src/Text-Pandoc-Definition.html#CitationMode",
        "fct-type": "function",
        "title": "AuthorInText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "AuthorInText",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Author In Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:BlockQuote",
      "description": {
        "fct-descr": "\u003cp\u003eBlock quote (list of blocks)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "BlockQuote [Block]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "BlockQuote"
      },
      "index": {
        "description": "Block quote list of blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "BlockQuote",
        "normalized": "BlockQuote[Block]",
        "package": "pandoc-types",
        "partial": "Block Quote",
        "signature": "BlockQuote[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:BulletList",
      "description": {
        "fct-descr": "\u003cp\u003eBullet list (list of items, each\n a list of blocks)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "BulletList [[Block]]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "BulletList"
      },
      "index": {
        "description": "Bullet list list of items each list of blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "BulletList",
        "normalized": "BulletList[[Block]]",
        "package": "pandoc-types",
        "partial": "Bullet List",
        "signature": "BulletList[[Block]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Citation",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Citation",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "Citation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Citation",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Citation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Cite",
      "description": {
        "fct-descr": "\u003cp\u003eCitation (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Cite [Citation] [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Cite"
      },
      "index": {
        "description": "Citation list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Cite",
        "normalized": "Cite[Citation][Inline]",
        "package": "pandoc-types",
        "partial": "Cite",
        "signature": "Cite[Citation][Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Code",
      "description": {
        "fct-descr": "\u003cp\u003eInline code (literal)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Code Attr String",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "Inline code literal",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Code",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:CodeBlock",
      "description": {
        "fct-descr": "\u003cp\u003eCode block (literal) with attributes\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "CodeBlock Attr String",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "CodeBlock"
      },
      "index": {
        "description": "Code block literal with attributes",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "CodeBlock",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Code Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Decimal",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Decimal",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "Decimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Decimal",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefaultDelim",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "DefaultDelim",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
        "fct-type": "function",
        "title": "DefaultDelim"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "DefaultDelim",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Default Delim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefaultStyle",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "DefaultStyle",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "DefaultStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "DefaultStyle",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Default Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefinitionList",
      "description": {
        "fct-descr": "\u003cp\u003eDefinition list\n Each list item is a pair consisting of a\n term (a list of inlines) and one or more\n definitions (each a list of blocks)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "DefinitionList [([Inline], [[Block]])]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "DefinitionList"
      },
      "index": {
        "description": "Definition list Each list item is pair consisting of term list of inlines and one or more definitions each list of blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "DefinitionList",
        "normalized": "DefinitionList[([Inline],[[Block]])]",
        "package": "pandoc-types",
        "partial": "Definition List",
        "signature": "DefinitionList[([Inline],[[Block]])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DisplayMath",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "DisplayMath",
        "fct-source": "src/Text-Pandoc-Definition.html#MathType",
        "fct-type": "function",
        "title": "DisplayMath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "DisplayMath",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Display Math",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Div",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric block container with attributes\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Div Attr [Block]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Div"
      },
      "index": {
        "description": "Generic block container with attributes",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Div",
        "normalized": "Div Attr[Block]",
        "package": "pandoc-types",
        "partial": "Div",
        "signature": "Div Attr[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DoubleQuote",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "DoubleQuote",
        "fct-source": "src/Text-Pandoc-Definition.html#QuoteType",
        "fct-type": "function",
        "title": "DoubleQuote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "DoubleQuote",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Double Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Emph",
      "description": {
        "fct-descr": "\u003cp\u003eEmphasized text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Emph [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Emph"
      },
      "index": {
        "description": "Emphasized text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Emph",
        "normalized": "Emph[Inline]",
        "package": "pandoc-types",
        "partial": "Emph",
        "signature": "Emph[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Example",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Example",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "Example"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Example",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Example",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Format",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Format String",
        "fct-source": "src/Text-Pandoc-Definition.html#Format",
        "fct-type": "function",
        "title": "Format"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Format",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Header",
      "description": {
        "fct-descr": "\u003cp\u003eHeader - level (integer) and text (inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Header Int Attr [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "Header level integer and text inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Header",
        "normalized": "Header Int Attr[Inline]",
        "package": "pandoc-types",
        "partial": "Header",
        "signature": "Header Int Attr[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:HorizontalRule",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal rule\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "HorizontalRule",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "HorizontalRule"
      },
      "index": {
        "description": "Horizontal rule",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "HorizontalRule",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Horizontal Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Image",
      "description": {
        "fct-descr": "\u003cp\u003eImage:  alt text (list of inlines), target\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Image [Inline] Target",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "Image alt text list of inlines target",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Image",
        "normalized": "Image[Inline]Target",
        "package": "pandoc-types",
        "partial": "Image",
        "signature": "Image[Inline]Target"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:InlineMath",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "InlineMath",
        "fct-source": "src/Text-Pandoc-Definition.html#MathType",
        "fct-type": "function",
        "title": "InlineMath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "InlineMath",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Inline Math",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LineBreak",
      "description": {
        "fct-descr": "\u003cp\u003eHard line break\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "LineBreak",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "LineBreak"
      },
      "index": {
        "description": "Hard line break",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "LineBreak",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Line Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Link",
      "description": {
        "fct-descr": "\u003cp\u003eHyperlink: text (list of inlines), target\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Link [Inline] Target",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Link"
      },
      "index": {
        "description": "Hyperlink text list of inlines target",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Link",
        "normalized": "Link[Inline]Target",
        "package": "pandoc-types",
        "partial": "Link",
        "signature": "Link[Inline]Target"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LowerAlpha",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "LowerAlpha",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "LowerAlpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "LowerAlpha",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Lower Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LowerRoman",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "LowerRoman",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "LowerRoman"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "LowerRoman",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Lower Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Math",
      "description": {
        "fct-descr": "\u003cp\u003eTeX math (literal)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Math MathType String",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Math"
      },
      "index": {
        "description": "TeX math literal",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Math",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Math",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Meta",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta",
        "fct-source": "src/Text-Pandoc-Definition.html#Meta",
        "fct-type": "function",
        "title": "Meta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Meta",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaBlocks",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaBlocks [Block]",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaBlocks",
        "normalized": "MetaBlocks[Block]",
        "package": "pandoc-types",
        "partial": "Meta Blocks",
        "signature": "MetaBlocks[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaBool",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaBool Bool",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaBool",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaInlines",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaInlines [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaInlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaInlines",
        "normalized": "MetaInlines[Inline]",
        "package": "pandoc-types",
        "partial": "Meta Inlines",
        "signature": "MetaInlines[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaList",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaList [MetaValue]",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaList",
        "normalized": "MetaList[MetaValue]",
        "package": "pandoc-types",
        "partial": "Meta List",
        "signature": "MetaList[MetaValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaMap",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaMap (Map String MetaValue)",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaMap",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaString",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "MetaString String",
        "fct-source": "src/Text-Pandoc-Definition.html#MetaValue",
        "fct-type": "function",
        "title": "MetaString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "MetaString",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:NormalCitation",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "NormalCitation",
        "fct-source": "src/Text-Pandoc-Definition.html#CitationMode",
        "fct-type": "function",
        "title": "NormalCitation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "NormalCitation",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Normal Citation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Note",
      "description": {
        "fct-descr": "\u003cp\u003eFootnote or endnote\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Note [Block]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Note"
      },
      "index": {
        "description": "Footnote or endnote",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Note",
        "normalized": "Note[Block]",
        "package": "pandoc-types",
        "partial": "Note",
        "signature": "Note[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Null",
      "description": {
        "fct-descr": "\u003cp\u003eNothing\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Null",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "Nothing",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Null",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:OneParen",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "OneParen",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
        "fct-type": "function",
        "title": "OneParen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "OneParen",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "One Paren",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:OrderedList",
      "description": {
        "fct-descr": "\u003cp\u003eOrdered list (attributes\n and a list of items, each a list of blocks)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "OrderedList ListAttributes [[Block]]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "OrderedList"
      },
      "index": {
        "description": "Ordered list attributes and list of items each list of blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "OrderedList",
        "normalized": "OrderedList ListAttributes[[Block]]",
        "package": "pandoc-types",
        "partial": "Ordered List",
        "signature": "OrderedList ListAttributes[[Block]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Pandoc",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Pandoc Meta [Block]",
        "fct-source": "src/Text-Pandoc-Definition.html#Pandoc",
        "fct-type": "function",
        "title": "Pandoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Pandoc",
        "normalized": "Pandoc Meta[Block]",
        "package": "pandoc-types",
        "partial": "Pandoc",
        "signature": "Pandoc Meta[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Para",
      "description": {
        "fct-descr": "\u003cp\u003eParagraph\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Para [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Para"
      },
      "index": {
        "description": "Paragraph",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Para",
        "normalized": "Para[Inline]",
        "package": "pandoc-types",
        "partial": "Para",
        "signature": "Para[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Period",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Period",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
        "fct-type": "function",
        "title": "Period"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Period",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Period",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Plain",
      "description": {
        "fct-descr": "\u003cp\u003ePlain text, not a paragraph\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Plain [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "Plain text not paragraph",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Plain",
        "normalized": "Plain[Inline]",
        "package": "pandoc-types",
        "partial": "Plain",
        "signature": "Plain[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Quoted",
      "description": {
        "fct-descr": "\u003cp\u003eQuoted text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Quoted QuoteType [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Quoted"
      },
      "index": {
        "description": "Quoted text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Quoted",
        "normalized": "Quoted QuoteType[Inline]",
        "package": "pandoc-types",
        "partial": "Quoted",
        "signature": "Quoted QuoteType[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:RawBlock",
      "description": {
        "fct-descr": "\u003cp\u003eRaw block\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "RawBlock Format String",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "RawBlock"
      },
      "index": {
        "description": "Raw block",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "RawBlock",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Raw Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:RawInline",
      "description": {
        "fct-descr": "\u003cp\u003eRaw inline\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "RawInline Format String",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "RawInline"
      },
      "index": {
        "description": "Raw inline",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "RawInline",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Raw Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SingleQuote",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "SingleQuote",
        "fct-source": "src/Text-Pandoc-Definition.html#QuoteType",
        "fct-type": "function",
        "title": "SingleQuote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "SingleQuote",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Single Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SmallCaps",
      "description": {
        "fct-descr": "\u003cp\u003eSmall caps text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "SmallCaps [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "SmallCaps"
      },
      "index": {
        "description": "Small caps text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "SmallCaps",
        "normalized": "SmallCaps[Inline]",
        "package": "pandoc-types",
        "partial": "Small Caps",
        "signature": "SmallCaps[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Space",
      "description": {
        "fct-descr": "\u003cp\u003eInter-word space\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Space",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Space"
      },
      "index": {
        "description": "Inter-word space",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Space",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Span",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric inline container with attributes\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Span Attr [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Span"
      },
      "index": {
        "description": "Generic inline container with attributes",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Span",
        "normalized": "Span Attr[Inline]",
        "package": "pandoc-types",
        "partial": "Span",
        "signature": "Span Attr[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Str",
      "description": {
        "fct-descr": "\u003cp\u003eText (string)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Str String",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "Text string",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Str",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Strikeout",
      "description": {
        "fct-descr": "\u003cp\u003eStrikeout text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Strikeout [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Strikeout"
      },
      "index": {
        "description": "Strikeout text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Strikeout",
        "normalized": "Strikeout[Inline]",
        "package": "pandoc-types",
        "partial": "Strikeout",
        "signature": "Strikeout[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Strong",
      "description": {
        "fct-descr": "\u003cp\u003eStrongly emphasized text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Strong [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Strong"
      },
      "index": {
        "description": "Strongly emphasized text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Strong",
        "normalized": "Strong[Inline]",
        "package": "pandoc-types",
        "partial": "Strong",
        "signature": "Strong[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Subscript",
      "description": {
        "fct-descr": "\u003cp\u003eSubscripted text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Subscript [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Subscript"
      },
      "index": {
        "description": "Subscripted text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Subscript",
        "normalized": "Subscript[Inline]",
        "package": "pandoc-types",
        "partial": "Subscript",
        "signature": "Subscript[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Superscript",
      "description": {
        "fct-descr": "\u003cp\u003eSuperscripted text (list of inlines)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Superscript [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Inline",
        "fct-type": "function",
        "title": "Superscript"
      },
      "index": {
        "description": "Superscripted text list of inlines",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Superscript",
        "normalized": "Superscript[Inline]",
        "package": "pandoc-types",
        "partial": "Superscript",
        "signature": "Superscript[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SuppressAuthor",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "SuppressAuthor",
        "fct-source": "src/Text-Pandoc-Definition.html#CitationMode",
        "fct-type": "function",
        "title": "SuppressAuthor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "SuppressAuthor",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Suppress Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Table",
      "description": {
        "fct-descr": "\u003cp\u003eTable,\n with caption, column alignments (required),\n relative column widths (0 = default),\n column headers (each a list of blocks), and\n rows (each a list of lists of blocks)\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Table [Inline] [Alignment] [Double] [TableCell] [[TableCell]]",
        "fct-source": "src/Text-Pandoc-Definition.html#Block",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "Table with caption column alignments required relative column widths default column headers each list of blocks and rows each list of lists of blocks",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "Table",
        "normalized": "Table[Inline][Alignment][Double][TableCell][[TableCell]]",
        "package": "pandoc-types",
        "partial": "Table",
        "signature": "Table[Inline][Alignment][Double][TableCell][[TableCell]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:TwoParens",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "TwoParens",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
        "fct-type": "function",
        "title": "TwoParens"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "TwoParens",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Two Parens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:UpperAlpha",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "UpperAlpha",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "UpperAlpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "UpperAlpha",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Upper Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:UpperRoman",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "UpperRoman",
        "fct-source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
        "fct-type": "function",
        "title": "UpperRoman"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "UpperRoman",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Upper Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationHash",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Int",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationHash",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "String",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationId",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "CitationMode",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationMode",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationNoteNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Int",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationNoteNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationNoteNum",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Note Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationPrefix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "[Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationPrefix",
        "normalized": "[Inline]",
        "package": "pandoc-types",
        "partial": "Prefix",
        "signature": "[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationSuffix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "[Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#Citation",
        "fct-type": "function",
        "title": "citationSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "citationSuffix",
        "normalized": "[Inline]",
        "package": "pandoc-types",
        "partial": "Suffix",
        "signature": "[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docAuthors",
      "description": {
        "fct-descr": "\u003cp\u003eExtract document authors from metadata; works just like the old\n \u003ccode\u003edocAuthors\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta -\u003e [[Inline]]",
        "fct-source": "src/Text-Pandoc-Definition.html#docAuthors",
        "fct-type": "function",
        "title": "docAuthors"
      },
      "index": {
        "description": "Extract document authors from metadata works just like the old docAuthors",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "docAuthors",
        "normalized": "Meta-\u003e[[Inline]]",
        "package": "pandoc-types",
        "partial": "Authors",
        "signature": "Meta-\u003e[[Inline]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docDate",
      "description": {
        "fct-descr": "\u003cp\u003eExtract date from metadata; works just like the old \u003ccode\u003edocDate\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta -\u003e [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#docDate",
        "fct-type": "function",
        "title": "docDate"
      },
      "index": {
        "description": "Extract date from metadata works just like the old docDate",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "docDate",
        "normalized": "Meta-\u003e[Inline]",
        "package": "pandoc-types",
        "partial": "Date",
        "signature": "Meta-\u003e[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docTitle",
      "description": {
        "fct-descr": "\u003cp\u003eExtract document title from metadata; works just like the old \u003ccode\u003edocTitle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta -\u003e [Inline]",
        "fct-source": "src/Text-Pandoc-Definition.html#docTitle",
        "fct-type": "function",
        "title": "docTitle"
      },
      "index": {
        "description": "Extract document title from metadata works just like the old docTitle",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "docTitle",
        "normalized": "Meta-\u003e[Inline]",
        "package": "pandoc-types",
        "partial": "Title",
        "signature": "Meta-\u003e[Inline]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:isNullMeta",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta -\u003e Bool",
        "fct-source": "src/Text-Pandoc-Definition.html#isNullMeta",
        "fct-type": "function",
        "title": "isNullMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "isNullMeta",
        "normalized": "Meta-\u003eBool",
        "package": "pandoc-types",
        "partial": "Null Meta",
        "signature": "Meta-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:lookupMeta",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the metadata value for a given \u003ccode\u003ekey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "String -\u003e Meta -\u003e Maybe MetaValue",
        "fct-source": "src/Text-Pandoc-Definition.html#lookupMeta",
        "fct-type": "function",
        "title": "lookupMeta"
      },
      "index": {
        "description": "Retrieve the metadata value for given key",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "lookupMeta",
        "normalized": "String-\u003eMeta-\u003eMaybe MetaValue",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": "String-\u003eMeta-\u003eMaybe MetaValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:nullAttr",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Attr",
        "fct-source": "src/Text-Pandoc-Definition.html#nullAttr",
        "fct-type": "function",
        "title": "nullAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "nullAttr",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:nullMeta",
      "description": {
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Meta",
        "fct-source": "src/Text-Pandoc-Definition.html#nullMeta",
        "fct-type": "function",
        "title": "nullMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "nullMeta",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:unMeta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Pandoc.Definition",
        "fct-package": "pandoc-types",
        "fct-signature": "Map String MetaValue",
        "fct-source": "src/Text-Pandoc-Definition.html#Meta",
        "fct-type": "function",
        "title": "unMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Definition",
        "module": "Text.Pandoc.Definition",
        "name": "unMeta",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric functions for manipulating \u003ccode\u003ePandoc\u003c/code\u003e documents.\n(Note:  the functions defined in \u003ccode\u003eText.Pandoc.Walk\u003c/code\u003e should be used instead,\nwhen possible, as they are much faster.)\n\u003c/p\u003e\u003cp\u003eHere's a simple example, defining a function that replaces all the level 3+\nheaders in a document with regular paragraphs in ALL CAPS:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Text.Pandoc.Generic\n import Data.Char (toUpper)\n\n modHeader :: Block -\u003e Block\n modHeader (Header n _ xs) | n \u003e= 3 = Para $ bottomUp allCaps xs\n modHeader x = x\n\n allCaps :: Inline -\u003e Inline\n allCaps (Str xs) = Str $ map toUpper xs\n allCaps x = x\n\n changeHeaders :: Pandoc -\u003e Pandoc\n changeHeaders = bottomUp modHeader\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e is so called because it traverses the \u003ccode\u003ePandoc\u003c/code\u003e structure from\nbottom up. \u003ccode\u003e\u003ca\u003etopDown\u003c/a\u003e\u003c/code\u003e goes the other way. The difference between them can be\nseen from this example:\n\u003c/p\u003e\u003cpre\u003e normal :: [Inline] -\u003e [Inline]\n normal (Space : Space : xs) = Space : xs\n normal (Emph xs : Emph ys : zs) = Emph (xs ++ ys) : zs\n normal xs = xs\n\n myDoc :: Pandoc\n myDoc =  Pandoc nullMeta\n  [ Para [Str \"Hi\",Space,Emph [Str \"world\",Space],Emph [Space,Str \"emphasized\"]]]\n\u003c/pre\u003e\u003cp\u003eHere we want to use \u003ccode\u003e\u003ca\u003etopDown\u003c/a\u003e\u003c/code\u003e to lift \u003ccode\u003enormal\u003c/code\u003e to \u003ccode\u003ePandoc -\u003e Pandoc\u003c/code\u003e.\nThe top down strategy will collapse the two adjacent \u003ccode\u003eEmph\u003c/code\u003es first, then\ncollapse the resulting adjacent \u003ccode\u003eSpace\u003c/code\u003es, as desired. If we used \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e,\nwe would end up with two adjacent \u003ccode\u003eSpace\u003c/code\u003es, since the contents of the\ntwo \u003ccode\u003eEmph\u003c/code\u003e inlines would be processed before the \u003ccode\u003eEmph\u003c/code\u003es were collapsed\ninto one.\n\u003c/p\u003e\u003cpre\u003e topDown normal myDoc ==\n   Pandoc nullMeta\n    [Para [Str \"Hi\",Space,Emph [Str \"world\",Space,Str \"emphasized\"]]]\n\n bottomUp normal myDoc ==\n   Pandoc nullMeta\n    [Para [Str \"Hi\",Space,Emph [Str \"world\",Space,Space,Str \"emphasized\"]]]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebottomUpM\u003c/a\u003e\u003c/code\u003e is a monadic version of \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e.  It could be used,\nfor example, to replace the contents of delimited code blocks with\nattribute \u003ccode\u003einclude=FILENAME\u003c/code\u003e with the contents of \u003ccode\u003eFILENAME\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e doInclude :: Block -\u003e IO Block\n doInclude cb@(CodeBlock (id, classes, namevals) contents) =\n   case lookup \"include\" namevals of\n        Just f  -\u003e return . (CodeBlock (id, classes, namevals)) =\u003c\u003c readFile f\n        Nothing -\u003e return cb\n doInclude x = return x\n\n processIncludes :: Pandoc -\u003e IO Pandoc\n processIncludes = bottomUpM doInclude\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003equeryWith\u003c/a\u003e\u003c/code\u003e can be used, for example, to compile a list of URLs\nlinked to in a document:\n\u003c/p\u003e\u003cpre\u003e extractURL :: Inline -\u003e [String]\n extractURL (Link _ (u,_)) = [u]\n extractURL (Image _ (u,_)) = [u]\n extractURL _ = []\n\n extractURLs :: Pandoc -\u003e [String]\n extractURLs = queryWith extractURL\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Pandoc.Generic",
        "fct-package": "pandoc-types",
        "fct-signature": "module",
        "fct-source": "src/Text-Pandoc-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "Generic functions for manipulating Pandoc documents Note the functions defined in Text.Pandoc.Walk should be used instead when possible as they are much faster Here simple example defining function that replaces all the level headers in document with regular paragraphs in ALL CAPS import Text.Pandoc.Definition import Text.Pandoc.Generic import Data.Char toUpper modHeader Block Block modHeader Header xs Para bottomUp allCaps xs modHeader allCaps Inline Inline allCaps Str xs Str map toUpper xs allCaps changeHeaders Pandoc Pandoc changeHeaders bottomUp modHeader bottomUp is so called because it traverses the Pandoc structure from bottom up topDown goes the other way The difference between them can be seen from this example normal Inline Inline normal Space Space xs Space xs normal Emph xs Emph ys zs Emph xs ys zs normal xs xs myDoc Pandoc myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Emph Space Str emphasized Here we want to use topDown to lift normal to Pandoc Pandoc The top down strategy will collapse the two adjacent Emph first then collapse the resulting adjacent Space as desired If we used bottomUp we would end up with two adjacent Space since the contents of the two Emph inlines would be processed before the Emph were collapsed into one topDown normal myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Str emphasized bottomUp normal myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Space Str emphasized bottomUpM is monadic version of bottomUp It could be used for example to replace the contents of delimited code blocks with attribute include FILENAME with the contents of FILENAME doInclude Block IO Block doInclude cb CodeBlock id classes namevals contents case lookup include namevals of Just return CodeBlock id classes namevals readFile Nothing return cb doInclude return processIncludes Pandoc IO Pandoc processIncludes bottomUpM doInclude queryWith can be used for example to compile list of URLs linked to in document extractURL Inline String extractURL Link extractURL Image extractURL extractURLs Pandoc String extractURLs queryWith extractURL",
        "hierarchy": "Text Pandoc Generic",
        "module": "Text.Pandoc.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:bottomUp",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a transformation on \u003ccode\u003ea\u003c/code\u003es to matching elements in a \u003ccode\u003eb\u003c/code\u003e,\n moving from the bottom of the structure up.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Generic",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e a) -\u003e b -\u003e b",
        "fct-source": "src/Text-Pandoc-Generic.html#bottomUp",
        "fct-type": "function",
        "title": "bottomUp"
      },
      "index": {
        "description": "Applies transformation on to matching elements in moving from the bottom of the structure up",
        "hierarchy": "Text Pandoc Generic",
        "module": "Text.Pandoc.Generic",
        "name": "bottomUp",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "pandoc-types",
        "partial": "Up",
        "signature": "(a-\u003ea)-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:bottomUpM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e, but with monadic transformations.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Generic",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e m a) -\u003e b -\u003e m b",
        "fct-source": "src/Text-Pandoc-Generic.html#bottomUpM",
        "fct-type": "function",
        "title": "bottomUpM"
      },
      "index": {
        "description": "Like bottomUp but with monadic transformations",
        "hierarchy": "Text Pandoc Generic",
        "module": "Text.Pandoc.Generic",
        "name": "bottomUpM",
        "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
        "package": "pandoc-types",
        "partial": "Up",
        "signature": "(a-\u003em a)-\u003eb-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:queryWith",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a query on matching \u003ccode\u003ea\u003c/code\u003e elements in a \u003ccode\u003ec\u003c/code\u003e.  The results\n of the queries are combined using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Generic",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e b) -\u003e c -\u003e b",
        "fct-source": "src/Text-Pandoc-Generic.html#queryWith",
        "fct-type": "function",
        "title": "queryWith"
      },
      "index": {
        "description": "Runs query on matching elements in The results of the queries are combined using mappend",
        "hierarchy": "Text Pandoc Generic",
        "module": "Text.Pandoc.Generic",
        "name": "queryWith",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "pandoc-types",
        "partial": "With",
        "signature": "(a-\u003eb)-\u003ec-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:topDown",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a transformation on \u003ccode\u003ea\u003c/code\u003es to matching elements in a \u003ccode\u003eb\u003c/code\u003e,\n moving from the top of the structure down.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Generic",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e a) -\u003e b -\u003e b",
        "fct-source": "src/Text-Pandoc-Generic.html#topDown",
        "fct-type": "function",
        "title": "topDown"
      },
      "index": {
        "description": "Applies transformation on to matching elements in moving from the top of the structure down",
        "hierarchy": "Text Pandoc Generic",
        "module": "Text.Pandoc.Generic",
        "name": "topDown",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "pandoc-types",
        "partial": "Down",
        "signature": "(a-\u003ea)-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for serializing the Pandoc AST to JSON and deserializing from JSON.\n\u003c/p\u003e\u003cp\u003eExample of use:  The following script (\u003ccode\u003ecapitalize.hs\u003c/code\u003e) reads\nreads a JSON representation of a Pandoc document from stdin,\nand writes a JSON representation of a Pandoc document to stdout.\nIt changes all regular text in the document to uppercase, without\naffecting URLs, code, tags, etc.  Run the script with\n\u003c/p\u003e\u003cpre\u003e pandoc -t json | runghc capitalize.hs | pandoc -f json\n\u003c/pre\u003e\u003cp\u003eor (making capitalize.hs executable)\n\u003c/p\u003e\u003cpre\u003e pandoc --filter ./capitalize.hs\n\u003c/pre\u003e\u003cpre\u003e #!/usr/bin/env runghc\n import Text.Pandoc.JSON\n import Data.Char (toUpper)\n\n main :: IO ()\n main = toJSONFilter capitalizeStrings\n\n capitalizeStrings :: Inline -\u003e Inline\n capitalizeStrings (Str s) = Str $ map toUpper s\n capitalizeStrings x       = x\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Pandoc.JSON",
        "fct-package": "pandoc-types",
        "fct-signature": "module",
        "fct-source": "src/Text-Pandoc-JSON.html",
        "fct-type": "module",
        "title": "JSON"
      },
      "index": {
        "description": "Functions for serializing the Pandoc AST to JSON and deserializing from JSON Example of use The following script capitalize.hs reads reads JSON representation of Pandoc document from stdin and writes JSON representation of Pandoc document to stdout It changes all regular text in the document to uppercase without affecting URLs code tags etc Run the script with pandoc json runghc capitalize.hs pandoc json or making capitalize.hs executable pandoc filter capitalize.hs usr bin env runghc import Text.Pandoc.JSON import Data.Char toUpper main IO main toJSONFilter capitalizeStrings capitalizeStrings Inline Inline capitalizeStrings Str Str map toUpper capitalizeStrings",
        "hierarchy": "Text Pandoc JSON",
        "module": "Text.Pandoc.JSON",
        "name": "JSON",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#t:ToJSONFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoJSONFilter\u003c/a\u003e\u003c/code\u003e convert a function into a filter that reads pandoc's\n JSON serialized output from stdin, transforms it by walking the AST\n and applying the specified function, and serializes the result as JSON\n to stdout.\n\u003c/p\u003e\u003cp\u003eFor a straight transformation, use a function of type \u003ccode\u003ea -\u003e a\u003c/code\u003e or\n \u003ccode\u003ea -\u003e IO a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInline\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eMetaValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your transformation needs to be sensitive to the script's arguments,\n use a function of type \u003ccode\u003e[String] -\u003e a -\u003e a\u003c/code\u003e (with \u003ccode\u003ea\u003c/code\u003e constrained as above).\n The \u003ccode\u003e[String]\u003c/code\u003e will be populated with the script's arguments.\n\u003c/p\u003e\u003cp\u003eAn alternative is to use the type \u003ccode\u003eMaybe Format -\u003e a -\u003e a\u003c/code\u003e.\n This is appropriate when the first argument of the script (if present)\n will be the target format, and allows scripts to behave differently\n depending on the target format.  The pandoc executable automatically\n provides the target format as argument when scripts are called using\n the `--filter` option.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.JSON",
        "fct-package": "pandoc-types",
        "fct-signature": "class",
        "fct-source": "src/Text-Pandoc-JSON.html#ToJSONFilter",
        "fct-type": "class",
        "title": "ToJSONFilter"
      },
      "index": {
        "description": "toJSONFilter convert function into filter that reads pandoc JSON serialized output from stdin transforms it by walking the AST and applying the specified function and serializes the result as JSON to stdout For straight transformation use function of type or IO where Block Inline Pandoc Meta or MetaValue If your transformation needs to be sensitive to the script arguments use function of type String with constrained as above The String will be populated with the script arguments An alternative is to use the type Maybe Format This is appropriate when the first argument of the script if present will be the target format and allows scripts to behave differently depending on the target format The pandoc executable automatically provides the target format as argument when scripts are called using the filter option",
        "hierarchy": "Text Pandoc JSON",
        "module": "Text.Pandoc.JSON",
        "name": "ToJSONFilter",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "To JSONFilter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#v:toJSONFilter",
      "description": {
        "fct-module": "Text.Pandoc.JSON",
        "fct-package": "pandoc-types",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Text-Pandoc-JSON.html#toJSONFilter",
        "fct-type": "method",
        "title": "toJSONFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc JSON",
        "module": "Text.Pandoc.JSON",
        "name": "toJSONFilter",
        "normalized": "a-\u003eIO()",
        "package": "pandoc-types",
        "partial": "JSONFilter",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for manipulating \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents or extracting\ninformation from them by walking the \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e structure (or\nintermediate structures like '[Block]' or '[Inline]'.\nThese are faster (by a factor of four or five) than the generic\nfunctions defined in \u003ccode\u003eText.Pandoc.Generic\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere's a simple example, defining a function that replaces all the level 3+\nheaders in a document with regular paragraphs in ALL CAPS:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Text.Pandoc.Walk\n import Data.Char (toUpper)\n\n modHeader :: Block -\u003e Block\n modHeader (Header n _ xs) | n \u003e= 3 = Para $ walk allCaps xs\n modHeader x = x\n\n allCaps :: Inline -\u003e Inline\n allCaps (Str xs) = Str $ map toUpper xs\n allCaps x = x\n\n changeHeaders :: Pandoc -\u003e Pandoc\n changeHeaders = walk modHeader\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e can be used, for example, to compile a list of URLs\nlinked to in a document:\n\u003c/p\u003e\u003cpre\u003e extractURL :: Inline -\u003e [String]\n extractURL (Link _ (u,_)) = [u]\n extractURL (Image _ (u,_)) = [u]\n extractURL _ = []\n\n extractURLs :: Pandoc -\u003e [String]\n extractURLs = query extractURL\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Pandoc.Walk",
        "fct-package": "pandoc-types",
        "fct-signature": "module",
        "fct-source": "src/Text-Pandoc-Walk.html",
        "fct-type": "module",
        "title": "Walk"
      },
      "index": {
        "description": "Functions for manipulating Pandoc documents or extracting information from them by walking the Pandoc structure or intermediate structures like Block or Inline These are faster by factor of four or five than the generic functions defined in Text.Pandoc.Generic Here simple example defining function that replaces all the level headers in document with regular paragraphs in ALL CAPS import Text.Pandoc.Definition import Text.Pandoc.Walk import Data.Char toUpper modHeader Block Block modHeader Header xs Para walk allCaps xs modHeader allCaps Inline Inline allCaps Str xs Str map toUpper xs allCaps changeHeaders Pandoc Pandoc changeHeaders walk modHeader query can be used for example to compile list of URLs linked to in document extractURL Inline String extractURL Link extractURL Image extractURL extractURLs Pandoc String extractURLs query extractURL",
        "hierarchy": "Text Pandoc Walk",
        "module": "Text.Pandoc.Walk",
        "name": "Walk",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Walk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#t:Walkable",
      "description": {
        "fct-module": "Text.Pandoc.Walk",
        "fct-package": "pandoc-types",
        "fct-signature": "class",
        "fct-source": "src/Text-Pandoc-Walk.html#Walkable",
        "fct-type": "class",
        "title": "Walkable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pandoc Walk",
        "module": "Text.Pandoc.Walk",
        "name": "Walkable",
        "normalized": "",
        "package": "pandoc-types",
        "partial": "Walkable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003equery f x\u003c/code\u003e walks the structure \u003ccode\u003ex\u003c/code\u003e (bottom up) and applies \u003ccode\u003ef\u003c/code\u003e\n to every \u003ccode\u003ea\u003c/code\u003e, appending the results.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Walk",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e c) -\u003e b -\u003e c",
        "fct-source": "src/Text-Pandoc-Walk.html#query",
        "fct-type": "method",
        "title": "query"
      },
      "index": {
        "description": "query walks the structure bottom up and applies to every appending the results",
        "hierarchy": "Text Pandoc Walk",
        "module": "Text.Pandoc.Walk",
        "name": "query",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "pandoc-types",
        "partial": "",
        "signature": "(a-\u003ec)-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:walk",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewalk f x\u003c/code\u003e walks the structure \u003ccode\u003ex\u003c/code\u003e (bottom up) and replaces every\n occurrence of an \u003ccode\u003ea\u003c/code\u003e with the result of applying \u003ccode\u003ef\u003c/code\u003e to it.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Walk",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e a) -\u003e b -\u003e b",
        "fct-source": "src/Text-Pandoc-Walk.html#walk",
        "fct-type": "method",
        "title": "walk"
      },
      "index": {
        "description": "walk walks the structure bottom up and replaces every occurrence of an with the result of applying to it",
        "hierarchy": "Text Pandoc Walk",
        "module": "Text.Pandoc.Walk",
        "name": "walk",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "pandoc-types",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:walkM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003ewalk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pandoc.Walk",
        "fct-package": "pandoc-types",
        "fct-signature": "(a -\u003e m a) -\u003e b -\u003e m b",
        "fct-source": "src/Text-Pandoc-Walk.html#walkM",
        "fct-type": "method",
        "title": "walkM"
      },
      "index": {
        "description": "monadic version of walk",
        "hierarchy": "Text Pandoc Walk",
        "module": "Text.Pandoc.Walk",
        "name": "walkM",
        "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
        "package": "pandoc-types",
        "partial": "",
        "signature": "(a-\u003em a)-\u003eb-\u003em b"
      }
    }
  }
]