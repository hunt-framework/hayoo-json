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
        "word": "pandoc-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions for building pandoc documents programmatically.\n\u003c/p\u003e\u003cp\u003eExample of use (with \u003ccode\u003eOverloadedStrings\u003c/code\u003e pragma):\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Builder\n\n myDoc :: Pandoc\n myDoc = setTitle \"My title\" $ doc $\n   para \"This is the first paragraph\" \u003c\u003e\n   para (\"And \" \u003c\u003e emph \"another\" \u003c\u003e \".\") \u003c\u003e\n   bulletList [ para \"item one\" \u003c\u003e para \"continuation\"\n              , plain (\"item two and a \" \u003c\u003e\n                  link \"/url\" \"go to url\" \"link\")\n              ]\n\u003c/pre\u003e\u003cp\u003eIsn't that nicer than writing the following?\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Data.Map (fromList)\n\n myDoc :: Pandoc\n myDoc = Pandoc (Meta {unMeta = fromList [(\"title\",\n           MetaInlines [Str \"My\",Space,Str \"title\"])]})\n         [Para [Str \"This\",Space,Str \"is\",Space,Str \"the\",Space,Str \"first\",\n          Space,Str \"paragraph\"],Para [Str \"And\",Space,Emph [Str \"another\"],\n          Str \".\"]\n         ,BulletList [\n           [Para [Str \"item\",Space,Str \"one\"]\n           ,Para [Str \"continuation\"]]\n          ,[Plain [Str \"item\",Space,Str \"two\",Space,Str \"and\",Space,\n                   Str \"a\",Space,Link [Str \"link\"] (\"/url\",\"go to url\")]]]]\n\u003c/pre\u003e\u003cp\u003eAnd of course, you can use Haskell to define your own builders:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Builder\n import Text.JSON\n import Control.Arrow ((***))\n import Data.Monoid (mempty)\n\n -- | Converts a JSON document into 'Blocks'.\n json :: String -\u003e Blocks\n json x =\n   case decode x of\n        Ok y    -\u003e jsValueToBlocks y\n        Error y -\u003e error y\n    where jsValueToBlocks x =\n           case x of\n            JSNull         -\u003e mempty\n            JSBool x       -\u003e plain $ text $ show x\n            JSRational _ x -\u003e plain $ text $ show x\n            JSString x     -\u003e plain $ text $ fromJSString x\n            JSArray xs     -\u003e bulletList $ map jsValueToBlocks xs\n            JSObject x     -\u003e definitionList $\n                               map (text *** (:[]) . jsValueToBlocks) $\n                               fromJSObject x\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "Builder",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience functions for building pandoc documents programmatically Example of use with OverloadedStrings pragma import Text.Pandoc.Builder myDoc Pandoc myDoc setTitle My title doc para This is the first paragraph para And emph another bulletList para item one para continuation plain item two and link url go to url link Isn that nicer than writing the following import Text.Pandoc.Definition import Data.Map fromList myDoc Pandoc myDoc Pandoc Meta unMeta fromList title MetaInlines Str My Space Str title Para Str This Space Str is Space Str the Space Str first Space Str paragraph Para Str And Space Emph Str another Str BulletList Para Str item Space Str one Para Str continuation Plain Str item Space Str two Space Str and Space Str Space Link Str link url go to url And of course you can use Haskell to define your own builders import Text.Pandoc.Builder import Text.JSON import Control.Arrow import Data.Monoid mempty Converts JSON document into Blocks json String Blocks json case decode of Ok jsValueToBlocks Error error where jsValueToBlocks case of JSNull mempty JSBool plain text show JSRational plain text show JSString plain text fromJSString JSArray xs bulletList map jsValueToBlocks xs JSObject definitionList map text jsValueToBlocks fromJSObject",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "Builder",
          "package": "pandoc-types",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "Blocks",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html#Blocks",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "Blocks",
          "package": "pandoc-types",
          "partial": "Blocks",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "HasMeta",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html#HasMeta",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "HasMeta",
          "package": "pandoc-types",
          "partial": "Has Meta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:HasMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "Inlines",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html#Inlines",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "Inlines",
          "package": "pandoc-types",
          "partial": "Inlines",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Inlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "Many",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html#Many",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "Many",
          "package": "pandoc-types",
          "partial": "Many",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "ToMetaValue",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Builder.html#ToMetaValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "ToMetaValue",
          "package": "pandoc-types",
          "partial": "To Meta Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#t:ToMetaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "(\u003c\u003e)",
          "package": "pandoc-types",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "pandoc-types",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "Many",
          "package": "pandoc-types",
          "signature": "Many",
          "source": "src/Text-Pandoc-Builder.html#Many",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "Many",
          "package": "pandoc-types",
          "partial": "Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "blockQuote",
          "package": "pandoc-types",
          "signature": "Blocks -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#blockQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "blockQuote",
          "normalized": "Blocks-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "Quote",
          "signature": "Blocks-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:blockQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "bulletList",
          "package": "pandoc-types",
          "signature": "[Blocks] -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#bulletList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "bulletList",
          "normalized": "[Blocks]-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "List",
          "signature": "[Blocks]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:bulletList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "cite",
          "package": "pandoc-types",
          "signature": "[Citation] -\u003e Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#cite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "cite",
          "normalized": "[Citation]-\u003eInlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "[Citation]-\u003eInlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:cite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain inline code.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "code",
          "package": "pandoc-types",
          "signature": "String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#code",
          "type": "function"
        },
        "index": {
          "description": "Plain inline code",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "code",
          "normalized": "String-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plain code block.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "codeBlock",
          "package": "pandoc-types",
          "signature": "String -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#codeBlock",
          "type": "function"
        },
        "index": {
          "description": "plain code block",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "codeBlock",
          "normalized": "String-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "Block",
          "signature": "String-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA code block with attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "codeBlockWith",
          "package": "pandoc-types",
          "signature": "Attr -\u003e String -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#codeBlockWith",
          "type": "function"
        },
        "index": {
          "description": "code block with attributes",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "codeBlockWith",
          "normalized": "Attr-\u003eString-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "Block With",
          "signature": "Attr-\u003eString-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeBlockWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline code with attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "codeWith",
          "package": "pandoc-types",
          "signature": "Attr -\u003e String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#codeWith",
          "type": "function"
        },
        "index": {
          "description": "Inline code with attributes",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "codeWith",
          "normalized": "Attr-\u003eString-\u003eInlines",
          "package": "pandoc-types",
          "partial": "With",
          "signature": "Attr-\u003eString-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:codeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "definitionList",
          "package": "pandoc-types",
          "signature": "[(Inlines, [Blocks])] -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#definitionList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "definitionList",
          "normalized": "[(Inlines,[Blocks])]-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "List",
          "signature": "[(Inlines,[Blocks])]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:definitionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "deleteMeta",
          "package": "pandoc-types",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Text-Pandoc-Builder.html#deleteMeta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "deleteMeta",
          "normalized": "String-\u003ea-\u003ea",
          "package": "pandoc-types",
          "partial": "Meta",
          "signature": "String-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:deleteMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay math\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "displayMath",
          "package": "pandoc-types",
          "signature": "String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#displayMath",
          "type": "function"
        },
        "index": {
          "description": "Display math",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "displayMath",
          "normalized": "String-\u003eInlines",
          "package": "pandoc-types",
          "partial": "Math",
          "signature": "String-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:displayMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "divWith",
          "package": "pandoc-types",
          "signature": "Attr -\u003e Blocks -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#divWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "divWith",
          "normalized": "Attr-\u003eBlocks-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "With",
          "signature": "Attr-\u003eBlocks-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:divWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "doc",
          "package": "pandoc-types",
          "signature": "Blocks -\u003e Pandoc",
          "source": "src/Text-Pandoc-Builder.html#doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "doc",
          "normalized": "Blocks-\u003ePandoc",
          "package": "pandoc-types",
          "signature": "Blocks-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "doubleQuoted",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#doubleQuoted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "doubleQuoted",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "partial": "Quoted",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:doubleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "emph",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#emph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "emph",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "fromList",
          "package": "pandoc-types",
          "signature": "[a] -\u003e Many a",
          "source": "src/Text-Pandoc-Builder.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "fromList",
          "normalized": "[a]-\u003eMany a",
          "package": "pandoc-types",
          "partial": "List",
          "signature": "[a]-\u003eMany a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "header",
          "package": "pandoc-types",
          "signature": "Int-\u003e Inlines-\u003e Blocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "header",
          "normalized": "Int-\u003eInlines-\u003eBlocks",
          "package": "pandoc-types",
          "signature": "Int-\u003eInlines-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "headerWith",
          "package": "pandoc-types",
          "signature": "Attr -\u003e Int -\u003e Inlines -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#headerWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "headerWith",
          "normalized": "Attr-\u003eInt-\u003eInlines-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "With",
          "signature": "Attr-\u003eInt-\u003eInlines-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:headerWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "horizontalRule",
          "package": "pandoc-types",
          "signature": "Blocks",
          "source": "src/Text-Pandoc-Builder.html#horizontalRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "horizontalRule",
          "package": "pandoc-types",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:horizontalRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "image",
          "package": "pandoc-types",
          "signature": "String-\u003e String-\u003e Inlines-\u003e Inlines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "image",
          "normalized": "String-\u003eString-\u003eInlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eString-\u003eInlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "isNull",
          "package": "pandoc-types",
          "signature": "Many a -\u003e Bool",
          "source": "src/Text-Pandoc-Builder.html#isNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "isNull",
          "normalized": "Many a-\u003eBool",
          "package": "pandoc-types",
          "partial": "Null",
          "signature": "Many a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "linebreak",
          "package": "pandoc-types",
          "signature": "Inlines",
          "source": "src/Text-Pandoc-Builder.html#linebreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "linebreak",
          "package": "pandoc-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:linebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "link",
          "package": "pandoc-types",
          "signature": "String-\u003e String-\u003e Inlines-\u003e Inlines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "link",
          "normalized": "String-\u003eString-\u003eInlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eString-\u003eInlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline math\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "math",
          "package": "pandoc-types",
          "signature": "String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#math",
          "type": "function"
        },
        "index": {
          "description": "Inline math",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "math",
          "normalized": "String-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "note",
          "package": "pandoc-types",
          "signature": "Blocks -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "note",
          "normalized": "Blocks-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Blocks-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list with default attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "orderedList",
          "package": "pandoc-types",
          "signature": "[Blocks] -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#orderedList",
          "type": "function"
        },
        "index": {
          "description": "Ordered list with default attributes",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "orderedList",
          "normalized": "[Blocks]-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "List",
          "signature": "[Blocks]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:orderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list with attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "orderedListWith",
          "package": "pandoc-types",
          "signature": "ListAttributes -\u003e [Blocks] -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#orderedListWith",
          "type": "function"
        },
        "index": {
          "description": "Ordered list with attributes",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "orderedListWith",
          "normalized": "ListAttributes-\u003e[Blocks]-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "List With",
          "signature": "ListAttributes-\u003e[Blocks]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:orderedListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "para",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#para",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "para",
          "normalized": "Inlines-\u003eBlocks",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "plain",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#plain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "plain",
          "normalized": "Inlines-\u003eBlocks",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "rawBlock",
          "package": "pandoc-types",
          "signature": "String -\u003e String -\u003e Blocks",
          "source": "src/Text-Pandoc-Builder.html#rawBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "rawBlock",
          "normalized": "String-\u003eString-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "Block",
          "signature": "String-\u003eString-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:rawBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "rawInline",
          "package": "pandoc-types",
          "signature": "String -\u003e String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#rawInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "rawInline",
          "normalized": "String-\u003eString-\u003eInlines",
          "package": "pandoc-types",
          "partial": "Inline",
          "signature": "String-\u003eString-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:rawInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "setAuthors",
          "package": "pandoc-types",
          "signature": "[Inlines] -\u003e Pandoc -\u003e Pandoc",
          "source": "src/Text-Pandoc-Builder.html#setAuthors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "setAuthors",
          "normalized": "[Inlines]-\u003ePandoc-\u003ePandoc",
          "package": "pandoc-types",
          "partial": "Authors",
          "signature": "[Inlines]-\u003ePandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setAuthors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "setDate",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Pandoc -\u003e Pandoc",
          "source": "src/Text-Pandoc-Builder.html#setDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "setDate",
          "normalized": "Inlines-\u003ePandoc-\u003ePandoc",
          "package": "pandoc-types",
          "partial": "Date",
          "signature": "Inlines-\u003ePandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "setMeta",
          "package": "pandoc-types",
          "signature": "String -\u003e b -\u003e a -\u003e a",
          "source": "src/Text-Pandoc-Builder.html#setMeta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "setMeta",
          "normalized": "String-\u003ea-\u003eb-\u003eb",
          "package": "pandoc-types",
          "partial": "Meta",
          "signature": "String-\u003eb-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "setTitle",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Pandoc -\u003e Pandoc",
          "source": "src/Text-Pandoc-Builder.html#setTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "setTitle",
          "normalized": "Inlines-\u003ePandoc-\u003ePandoc",
          "package": "pandoc-types",
          "partial": "Title",
          "signature": "Inlines-\u003ePandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple table without a caption.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "simpleTable",
          "package": "pandoc-types",
          "signature": "[Blocks]-\u003e [[Blocks]]-\u003e Blocks",
          "type": "function"
        },
        "index": {
          "description": "simple table without caption",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "simpleTable",
          "normalized": "[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
          "package": "pandoc-types",
          "partial": "Table",
          "signature": "[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:simpleTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "singleQuoted",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#singleQuoted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "singleQuoted",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "partial": "Quoted",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:singleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "singleton",
          "package": "pandoc-types",
          "signature": "a -\u003e Many a",
          "source": "src/Text-Pandoc-Builder.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "singleton",
          "normalized": "a-\u003eMany a",
          "package": "pandoc-types",
          "signature": "a-\u003eMany a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "smallcaps",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#smallcaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "smallcaps",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:smallcaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "space",
          "package": "pandoc-types",
          "signature": "Inlines",
          "source": "src/Text-Pandoc-Builder.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "space",
          "package": "pandoc-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "spanWith",
          "package": "pandoc-types",
          "signature": "Attr -\u003e Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#spanWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "spanWith",
          "normalized": "Attr-\u003eInlines-\u003eInlines",
          "package": "pandoc-types",
          "partial": "With",
          "signature": "Attr-\u003eInlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:spanWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "str",
          "package": "pandoc-types",
          "signature": "String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "str",
          "normalized": "String-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "strikeout",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#strikeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "strikeout",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:strikeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "strong",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#strong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "strong",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "subscript",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#subscript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "subscript",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "superscript",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#superscript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "superscript",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:superscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "table",
          "package": "pandoc-types",
          "signature": "Inlines-\u003e [(Alignment, Double)]-\u003e [Blocks]-\u003e [[Blocks]]-\u003e Blocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "table",
          "normalized": "Inlines-\u003e[(Alignment,Double)]-\u003e[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
          "package": "pandoc-types",
          "signature": "Inlines-\u003e[(Alignment,Double)]-\u003e[Blocks]-\u003e[[Blocks]]-\u003eBlocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInlines\u003c/a\u003e\u003c/code\u003e, treating interword spaces as \u003ccode\u003e\u003ca\u003eSpace\u003c/a\u003e\u003c/code\u003es.\n If you want a \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e with literal spaces, use \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "text",
          "package": "pandoc-types",
          "signature": "String -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#text",
          "type": "function"
        },
        "index": {
          "description": "Convert String to Inlines treating interword spaces as Space If you want Str with literal spaces use str",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "text",
          "normalized": "String-\u003eInlines",
          "package": "pandoc-types",
          "signature": "String-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "toList",
          "package": "pandoc-types",
          "signature": "Many a -\u003e [a]",
          "source": "src/Text-Pandoc-Builder.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "toList",
          "normalized": "Many a-\u003e[a]",
          "package": "pandoc-types",
          "partial": "List",
          "signature": "Many a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "toMetaValue",
          "package": "pandoc-types",
          "signature": "a -\u003e MetaValue",
          "source": "src/Text-Pandoc-Builder.html#toMetaValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "toMetaValue",
          "normalized": "a-\u003eMetaValue",
          "package": "pandoc-types",
          "partial": "Meta Value",
          "signature": "a-\u003eMetaValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:toMetaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim leading and trailing Sp (spaces) from an Inlines.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Builder",
          "name": "trimInlines",
          "package": "pandoc-types",
          "signature": "Inlines -\u003e Inlines",
          "source": "src/Text-Pandoc-Builder.html#trimInlines",
          "type": "function"
        },
        "index": {
          "description": "Trim leading and trailing Sp spaces from an Inlines",
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "trimInlines",
          "normalized": "Inlines-\u003eInlines",
          "package": "pandoc-types",
          "partial": "Inlines",
          "signature": "Inlines-\u003eInlines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:trimInlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Builder",
          "name": "unMany",
          "package": "pandoc-types",
          "signature": "Seq a",
          "source": "src/Text-Pandoc-Builder.html#Many",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Builder",
          "module": "Text.Pandoc.Builder",
          "name": "unMany",
          "package": "pandoc-types",
          "partial": "Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html#v:unMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e data structure for format-neutral representation\nof documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Definition",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of Pandoc data structure for format-neutral representation of documents",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Definition",
          "package": "pandoc-types",
          "partial": "Definition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of a table column.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Alignment",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Alignment of table column",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Alignment",
          "package": "pandoc-types",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttributes: identifier, classes, key-value pairs\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Attr",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Attr",
          "type": "type"
        },
        "index": {
          "description": "Attributes identifier classes key-value pairs",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Attr",
          "package": "pandoc-types",
          "partial": "Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock element.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Block",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Block element",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Block",
          "package": "pandoc-types",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Citation",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Citation",
          "package": "pandoc-types",
          "partial": "Citation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Citation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "CitationMode",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#CitationMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "CitationMode",
          "package": "pandoc-types",
          "partial": "Citation Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:CitationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats for raw blocks\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Format",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Format",
          "type": "newtype"
        },
        "index": {
          "description": "Formats for raw blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Format",
          "package": "pandoc-types",
          "partial": "Format",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline elements.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Inline",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "data"
        },
        "index": {
          "description": "Inline elements",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Inline",
          "package": "pandoc-types",
          "partial": "Inline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListAttributes",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#ListAttributes",
          "type": "type"
        },
        "index": {
          "description": "List attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListAttributes",
          "package": "pandoc-types",
          "partial": "List Attributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter of list numbers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberDelim",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "data"
        },
        "index": {
          "description": "Delimiter of list numbers",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberDelim",
          "package": "pandoc-types",
          "partial": "List Number Delim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListNumberDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of list numbers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberStyle",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "data"
        },
        "index": {
          "description": "Style of list numbers",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberStyle",
          "package": "pandoc-types",
          "partial": "List Number Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:ListNumberStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of math element (display or inline).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "MathType",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "data"
        },
        "index": {
          "description": "Type of math element display or inline",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MathType",
          "package": "pandoc-types",
          "partial": "Math Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:MathType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata for the document:  title, authors, date.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "newtype"
        },
        "index": {
          "description": "Metadata for the document title authors date",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "pandoc-types",
          "partial": "Meta",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaValue",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaValue",
          "package": "pandoc-types",
          "partial": "Meta Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:MetaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Pandoc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "pandoc-types",
          "partial": "Pandoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Pandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of quotation marks to use in Quoted inline.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "QuoteType",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "data"
        },
        "index": {
          "description": "Type of quotation marks to use in Quoted inline",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "QuoteType",
          "package": "pandoc-types",
          "partial": "Quote Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:QuoteType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable cells are list of Blocks\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "TableCell",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#TableCell",
          "type": "type"
        },
        "index": {
          "description": "Table cells are list of Blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "TableCell",
          "package": "pandoc-types",
          "partial": "Table Cell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:TableCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink target (URL, title).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Target",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Definition.html#Target",
          "type": "type"
        },
        "index": {
          "description": "Link target URL title",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Target",
          "package": "pandoc-types",
          "partial": "Target",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignCenter",
          "package": "pandoc-types",
          "signature": "AlignCenter",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignCenter",
          "package": "pandoc-types",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignDefault",
          "package": "pandoc-types",
          "signature": "AlignDefault",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignDefault",
          "package": "pandoc-types",
          "partial": "Align Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignLeft",
          "package": "pandoc-types",
          "signature": "AlignLeft",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignLeft",
          "package": "pandoc-types",
          "partial": "Align Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignRight",
          "package": "pandoc-types",
          "signature": "AlignRight",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignRight",
          "package": "pandoc-types",
          "partial": "Align Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AuthorInText",
          "package": "pandoc-types",
          "signature": "AuthorInText",
          "source": "src/Text-Pandoc-Definition.html#CitationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AuthorInText",
          "package": "pandoc-types",
          "partial": "Author In Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:AuthorInText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock quote (list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "BlockQuote",
          "package": "pandoc-types",
          "signature": "BlockQuote [Block]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Block quote list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "BlockQuote",
          "normalized": "BlockQuote[Block]",
          "package": "pandoc-types",
          "partial": "Block Quote",
          "signature": "BlockQuote[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:BlockQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBullet list (list of items, each\n a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "BulletList",
          "package": "pandoc-types",
          "signature": "BulletList [[Block]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Bullet list list of items each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "BulletList",
          "normalized": "BulletList[[Block]]",
          "package": "pandoc-types",
          "partial": "Bullet List",
          "signature": "BulletList[[Block]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:BulletList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Citation",
          "package": "pandoc-types",
          "signature": "Citation",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Citation",
          "package": "pandoc-types",
          "partial": "Citation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Citation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCitation (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Cite",
          "package": "pandoc-types",
          "signature": "Cite [Citation] [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Citation list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Cite",
          "normalized": "Cite[Citation][Inline]",
          "package": "pandoc-types",
          "partial": "Cite",
          "signature": "Cite[Citation][Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Cite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline code (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Code",
          "package": "pandoc-types",
          "signature": "Code Attr String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Inline code literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Code",
          "package": "pandoc-types",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode block (literal) with attributes\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "CodeBlock",
          "package": "pandoc-types",
          "signature": "CodeBlock Attr String",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Code block literal with attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "CodeBlock",
          "package": "pandoc-types",
          "partial": "Code Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:CodeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Decimal",
          "package": "pandoc-types",
          "signature": "Decimal",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Decimal",
          "package": "pandoc-types",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DefaultDelim",
          "package": "pandoc-types",
          "signature": "DefaultDelim",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefaultDelim",
          "package": "pandoc-types",
          "partial": "Default Delim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefaultDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DefaultStyle",
          "package": "pandoc-types",
          "signature": "DefaultStyle",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefaultStyle",
          "package": "pandoc-types",
          "partial": "Default Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefaultStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition list\n Each list item is a pair consisting of a\n term (a list of inlines) and one or more\n definitions (each a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "DefinitionList",
          "package": "pandoc-types",
          "signature": "DefinitionList [([Inline], [[Block]])]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Definition list Each list item is pair consisting of term list of inlines and one or more definitions each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefinitionList",
          "normalized": "DefinitionList[([Inline],[[Block]])]",
          "package": "pandoc-types",
          "partial": "Definition List",
          "signature": "DefinitionList[([Inline],[[Block]])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DefinitionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DisplayMath",
          "package": "pandoc-types",
          "signature": "DisplayMath",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DisplayMath",
          "package": "pandoc-types",
          "partial": "Display Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DisplayMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric block container with attributes\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Div",
          "package": "pandoc-types",
          "signature": "Div Attr [Block]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Generic block container with attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Div",
          "normalized": "Div Attr[Block]",
          "package": "pandoc-types",
          "partial": "Div",
          "signature": "Div Attr[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DoubleQuote",
          "package": "pandoc-types",
          "signature": "DoubleQuote",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DoubleQuote",
          "package": "pandoc-types",
          "partial": "Double Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:DoubleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmphasized text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Emph",
          "package": "pandoc-types",
          "signature": "Emph [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Emphasized text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Emph",
          "normalized": "Emph[Inline]",
          "package": "pandoc-types",
          "partial": "Emph",
          "signature": "Emph[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Example",
          "package": "pandoc-types",
          "signature": "Example",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Example",
          "package": "pandoc-types",
          "partial": "Example",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Example"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Format",
          "package": "pandoc-types",
          "signature": "Format String",
          "source": "src/Text-Pandoc-Definition.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Format",
          "package": "pandoc-types",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader - level (integer) and text (inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Header",
          "package": "pandoc-types",
          "signature": "Header Int Attr [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Header level integer and text inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Header",
          "normalized": "Header Int Attr[Inline]",
          "package": "pandoc-types",
          "partial": "Header",
          "signature": "Header Int Attr[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal rule\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "HorizontalRule",
          "package": "pandoc-types",
          "signature": "HorizontalRule",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Horizontal rule",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "HorizontalRule",
          "package": "pandoc-types",
          "partial": "Horizontal Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:HorizontalRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage:  alt text (list of inlines), target\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Image",
          "package": "pandoc-types",
          "signature": "Image [Inline] Target",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Image alt text list of inlines target",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Image",
          "normalized": "Image[Inline]Target",
          "package": "pandoc-types",
          "partial": "Image",
          "signature": "Image[Inline]Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "InlineMath",
          "package": "pandoc-types",
          "signature": "InlineMath",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "InlineMath",
          "package": "pandoc-types",
          "partial": "Inline Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:InlineMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHard line break\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "LineBreak",
          "package": "pandoc-types",
          "signature": "LineBreak",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Hard line break",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LineBreak",
          "package": "pandoc-types",
          "partial": "Line Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperlink: text (list of inlines), target\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Link",
          "package": "pandoc-types",
          "signature": "Link [Inline] Target",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Hyperlink text list of inlines target",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Link",
          "normalized": "Link[Inline]Target",
          "package": "pandoc-types",
          "partial": "Link",
          "signature": "Link[Inline]Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "LowerAlpha",
          "package": "pandoc-types",
          "signature": "LowerAlpha",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LowerAlpha",
          "package": "pandoc-types",
          "partial": "Lower Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LowerAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "LowerRoman",
          "package": "pandoc-types",
          "signature": "LowerRoman",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LowerRoman",
          "package": "pandoc-types",
          "partial": "Lower Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:LowerRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTeX math (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Math",
          "package": "pandoc-types",
          "signature": "Math MathType String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "TeX math literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Math",
          "package": "pandoc-types",
          "partial": "Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "pandoc-types",
          "signature": "Meta",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "pandoc-types",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaBlocks",
          "package": "pandoc-types",
          "signature": "MetaBlocks [Block]",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaBlocks",
          "normalized": "MetaBlocks[Block]",
          "package": "pandoc-types",
          "partial": "Meta Blocks",
          "signature": "MetaBlocks[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaBool",
          "package": "pandoc-types",
          "signature": "MetaBool Bool",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaBool",
          "package": "pandoc-types",
          "partial": "Meta Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaInlines",
          "package": "pandoc-types",
          "signature": "MetaInlines [Inline]",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaInlines",
          "normalized": "MetaInlines[Inline]",
          "package": "pandoc-types",
          "partial": "Meta Inlines",
          "signature": "MetaInlines[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaInlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaList",
          "package": "pandoc-types",
          "signature": "MetaList [MetaValue]",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaList",
          "normalized": "MetaList[MetaValue]",
          "package": "pandoc-types",
          "partial": "Meta List",
          "signature": "MetaList[MetaValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaMap",
          "package": "pandoc-types",
          "signature": "MetaMap (Map String MetaValue)",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaMap",
          "package": "pandoc-types",
          "partial": "Meta Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "MetaString",
          "package": "pandoc-types",
          "signature": "MetaString String",
          "source": "src/Text-Pandoc-Definition.html#MetaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MetaString",
          "package": "pandoc-types",
          "partial": "Meta String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:MetaString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "NormalCitation",
          "package": "pandoc-types",
          "signature": "NormalCitation",
          "source": "src/Text-Pandoc-Definition.html#CitationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "NormalCitation",
          "package": "pandoc-types",
          "partial": "Normal Citation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:NormalCitation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFootnote or endnote\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Note",
          "package": "pandoc-types",
          "signature": "Note [Block]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Footnote or endnote",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Note",
          "normalized": "Note[Block]",
          "package": "pandoc-types",
          "partial": "Note",
          "signature": "Note[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Null",
          "package": "pandoc-types",
          "signature": "Null",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Nothing",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Null",
          "package": "pandoc-types",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "OneParen",
          "package": "pandoc-types",
          "signature": "OneParen",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "OneParen",
          "package": "pandoc-types",
          "partial": "One Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:OneParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list (attributes\n and a list of items, each a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "OrderedList",
          "package": "pandoc-types",
          "signature": "OrderedList ListAttributes [[Block]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Ordered list attributes and list of items each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "OrderedList",
          "normalized": "OrderedList ListAttributes[[Block]]",
          "package": "pandoc-types",
          "partial": "Ordered List",
          "signature": "OrderedList ListAttributes[[Block]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:OrderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "pandoc-types",
          "signature": "Pandoc Meta [Block]",
          "source": "src/Text-Pandoc-Definition.html#Pandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "normalized": "Pandoc Meta[Block]",
          "package": "pandoc-types",
          "partial": "Pandoc",
          "signature": "Pandoc Meta[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Pandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraph\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Para",
          "package": "pandoc-types",
          "signature": "Para [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Paragraph",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Para",
          "normalized": "Para[Inline]",
          "package": "pandoc-types",
          "partial": "Para",
          "signature": "Para[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Period",
          "package": "pandoc-types",
          "signature": "Period",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Period",
          "package": "pandoc-types",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain text, not a paragraph\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Plain",
          "package": "pandoc-types",
          "signature": "Plain [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Plain text not paragraph",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Plain",
          "normalized": "Plain[Inline]",
          "package": "pandoc-types",
          "partial": "Plain",
          "signature": "Plain[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuoted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Quoted",
          "package": "pandoc-types",
          "signature": "Quoted QuoteType [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Quoted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Quoted",
          "normalized": "Quoted QuoteType[Inline]",
          "package": "pandoc-types",
          "partial": "Quoted",
          "signature": "Quoted QuoteType[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw block\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "RawBlock",
          "package": "pandoc-types",
          "signature": "RawBlock Format String",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Raw block",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "RawBlock",
          "package": "pandoc-types",
          "partial": "Raw Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:RawBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw inline\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "RawInline",
          "package": "pandoc-types",
          "signature": "RawInline Format String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Raw inline",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "RawInline",
          "package": "pandoc-types",
          "partial": "Raw Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:RawInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "SingleQuote",
          "package": "pandoc-types",
          "signature": "SingleQuote",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "SingleQuote",
          "package": "pandoc-types",
          "partial": "Single Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SingleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmall caps text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "SmallCaps",
          "package": "pandoc-types",
          "signature": "SmallCaps [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Small caps text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "SmallCaps",
          "normalized": "SmallCaps[Inline]",
          "package": "pandoc-types",
          "partial": "Small Caps",
          "signature": "SmallCaps[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SmallCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInter-word space\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Space",
          "package": "pandoc-types",
          "signature": "Space",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Inter-word space",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Space",
          "package": "pandoc-types",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric inline container with attributes\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Span",
          "package": "pandoc-types",
          "signature": "Span Attr [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Generic inline container with attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Span",
          "normalized": "Span Attr[Inline]",
          "package": "pandoc-types",
          "partial": "Span",
          "signature": "Span Attr[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText (string)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Str",
          "package": "pandoc-types",
          "signature": "Str String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Text string",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Str",
          "package": "pandoc-types",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrikeout text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Strikeout",
          "package": "pandoc-types",
          "signature": "Strikeout [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Strikeout text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Strikeout",
          "normalized": "Strikeout[Inline]",
          "package": "pandoc-types",
          "partial": "Strikeout",
          "signature": "Strikeout[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Strikeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrongly emphasized text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Strong",
          "package": "pandoc-types",
          "signature": "Strong [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Strongly emphasized text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Strong",
          "normalized": "Strong[Inline]",
          "package": "pandoc-types",
          "partial": "Strong",
          "signature": "Strong[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscripted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Subscript",
          "package": "pandoc-types",
          "signature": "Subscript [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Subscripted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Subscript",
          "normalized": "Subscript[Inline]",
          "package": "pandoc-types",
          "partial": "Subscript",
          "signature": "Subscript[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuperscripted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Superscript",
          "package": "pandoc-types",
          "signature": "Superscript [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Superscripted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Superscript",
          "normalized": "Superscript[Inline]",
          "package": "pandoc-types",
          "partial": "Superscript",
          "signature": "Superscript[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Superscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "SuppressAuthor",
          "package": "pandoc-types",
          "signature": "SuppressAuthor",
          "source": "src/Text-Pandoc-Definition.html#CitationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "SuppressAuthor",
          "package": "pandoc-types",
          "partial": "Suppress Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:SuppressAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable,\n with caption, column alignments (required),\n relative column widths (0 = default),\n column headers (each a list of blocks), and\n rows (each a list of lists of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Table",
          "package": "pandoc-types",
          "signature": "Table [Inline] [Alignment] [Double] [TableCell] [[TableCell]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Table with caption column alignments required relative column widths default column headers each list of blocks and rows each list of lists of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Table",
          "normalized": "Table[Inline][Alignment][Double][TableCell][[TableCell]]",
          "package": "pandoc-types",
          "partial": "Table",
          "signature": "Table[Inline][Alignment][Double][TableCell][[TableCell]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "TwoParens",
          "package": "pandoc-types",
          "signature": "TwoParens",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "TwoParens",
          "package": "pandoc-types",
          "partial": "Two Parens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:TwoParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "UpperAlpha",
          "package": "pandoc-types",
          "signature": "UpperAlpha",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "UpperAlpha",
          "package": "pandoc-types",
          "partial": "Upper Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:UpperAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "UpperRoman",
          "package": "pandoc-types",
          "signature": "UpperRoman",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "UpperRoman",
          "package": "pandoc-types",
          "partial": "Upper Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:UpperRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationHash",
          "package": "pandoc-types",
          "signature": "Int",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationHash",
          "package": "pandoc-types",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationId",
          "package": "pandoc-types",
          "signature": "String",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationId",
          "package": "pandoc-types",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationMode",
          "package": "pandoc-types",
          "signature": "CitationMode",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationMode",
          "package": "pandoc-types",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationNoteNum",
          "package": "pandoc-types",
          "signature": "Int",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationNoteNum",
          "package": "pandoc-types",
          "partial": "Note Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationNoteNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationPrefix",
          "package": "pandoc-types",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationPrefix",
          "normalized": "[Inline]",
          "package": "pandoc-types",
          "partial": "Prefix",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "citationSuffix",
          "package": "pandoc-types",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Definition.html#Citation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "citationSuffix",
          "normalized": "[Inline]",
          "package": "pandoc-types",
          "partial": "Suffix",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:citationSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract document authors from metadata; works just like the old\n \u003ccode\u003edocAuthors\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "docAuthors",
          "package": "pandoc-types",
          "signature": "Meta -\u003e [[Inline]]",
          "source": "src/Text-Pandoc-Definition.html#docAuthors",
          "type": "function"
        },
        "index": {
          "description": "Extract document authors from metadata works just like the old docAuthors",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docAuthors",
          "normalized": "Meta-\u003e[[Inline]]",
          "package": "pandoc-types",
          "partial": "Authors",
          "signature": "Meta-\u003e[[Inline]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docAuthors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract date from metadata; works just like the old \u003ccode\u003edocDate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "docDate",
          "package": "pandoc-types",
          "signature": "Meta -\u003e [Inline]",
          "source": "src/Text-Pandoc-Definition.html#docDate",
          "type": "function"
        },
        "index": {
          "description": "Extract date from metadata works just like the old docDate",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docDate",
          "normalized": "Meta-\u003e[Inline]",
          "package": "pandoc-types",
          "partial": "Date",
          "signature": "Meta-\u003e[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract document title from metadata; works just like the old \u003ccode\u003edocTitle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "docTitle",
          "package": "pandoc-types",
          "signature": "Meta -\u003e [Inline]",
          "source": "src/Text-Pandoc-Definition.html#docTitle",
          "type": "function"
        },
        "index": {
          "description": "Extract document title from metadata works just like the old docTitle",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docTitle",
          "normalized": "Meta-\u003e[Inline]",
          "package": "pandoc-types",
          "partial": "Title",
          "signature": "Meta-\u003e[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:docTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "isNullMeta",
          "package": "pandoc-types",
          "signature": "Meta -\u003e Bool",
          "source": "src/Text-Pandoc-Definition.html#isNullMeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "isNullMeta",
          "normalized": "Meta-\u003eBool",
          "package": "pandoc-types",
          "partial": "Null Meta",
          "signature": "Meta-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:isNullMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the metadata value for a given \u003ccode\u003ekey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "lookupMeta",
          "package": "pandoc-types",
          "signature": "String -\u003e Meta -\u003e Maybe MetaValue",
          "source": "src/Text-Pandoc-Definition.html#lookupMeta",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the metadata value for given key",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "lookupMeta",
          "normalized": "String-\u003eMeta-\u003eMaybe MetaValue",
          "package": "pandoc-types",
          "partial": "Meta",
          "signature": "String-\u003eMeta-\u003eMaybe MetaValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:lookupMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "nullAttr",
          "package": "pandoc-types",
          "signature": "Attr",
          "source": "src/Text-Pandoc-Definition.html#nullAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "nullAttr",
          "package": "pandoc-types",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:nullAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "nullMeta",
          "package": "pandoc-types",
          "signature": "Meta",
          "source": "src/Text-Pandoc-Definition.html#nullMeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "nullMeta",
          "package": "pandoc-types",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:nullMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "unMeta",
          "package": "pandoc-types",
          "signature": "Map String MetaValue",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "unMeta",
          "package": "pandoc-types",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html#v:unMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric functions for manipulating \u003ccode\u003ePandoc\u003c/code\u003e documents.\n(Note:  the functions defined in \u003ccode\u003eText.Pandoc.Walk\u003c/code\u003e should be used instead,\nwhen possible, as they are much faster.)\n\u003c/p\u003e\u003cp\u003eHere's a simple example, defining a function that replaces all the level 3+\nheaders in a document with regular paragraphs in ALL CAPS:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Text.Pandoc.Generic\n import Data.Char (toUpper)\n\n modHeader :: Block -\u003e Block\n modHeader (Header n _ xs) | n \u003e= 3 = Para $ bottomUp allCaps xs\n modHeader x = x\n\n allCaps :: Inline -\u003e Inline\n allCaps (Str xs) = Str $ map toUpper xs\n allCaps x = x\n\n changeHeaders :: Pandoc -\u003e Pandoc\n changeHeaders = bottomUp modHeader\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e is so called because it traverses the \u003ccode\u003ePandoc\u003c/code\u003e structure from\nbottom up. \u003ccode\u003e\u003ca\u003etopDown\u003c/a\u003e\u003c/code\u003e goes the other way. The difference between them can be\nseen from this example:\n\u003c/p\u003e\u003cpre\u003e normal :: [Inline] -\u003e [Inline]\n normal (Space : Space : xs) = Space : xs\n normal (Emph xs : Emph ys : zs) = Emph (xs ++ ys) : zs\n normal xs = xs\n\n myDoc :: Pandoc\n myDoc =  Pandoc nullMeta\n  [ Para [Str \"Hi\",Space,Emph [Str \"world\",Space],Emph [Space,Str \"emphasized\"]]]\n\u003c/pre\u003e\u003cp\u003eHere we want to use \u003ccode\u003e\u003ca\u003etopDown\u003c/a\u003e\u003c/code\u003e to lift \u003ccode\u003enormal\u003c/code\u003e to \u003ccode\u003ePandoc -\u003e Pandoc\u003c/code\u003e.\nThe top down strategy will collapse the two adjacent \u003ccode\u003eEmph\u003c/code\u003es first, then\ncollapse the resulting adjacent \u003ccode\u003eSpace\u003c/code\u003es, as desired. If we used \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e,\nwe would end up with two adjacent \u003ccode\u003eSpace\u003c/code\u003es, since the contents of the\ntwo \u003ccode\u003eEmph\u003c/code\u003e inlines would be processed before the \u003ccode\u003eEmph\u003c/code\u003es were collapsed\ninto one.\n\u003c/p\u003e\u003cpre\u003e topDown normal myDoc ==\n   Pandoc nullMeta\n    [Para [Str \"Hi\",Space,Emph [Str \"world\",Space,Str \"emphasized\"]]]\n\n bottomUp normal myDoc ==\n   Pandoc nullMeta\n    [Para [Str \"Hi\",Space,Emph [Str \"world\",Space,Space,Str \"emphasized\"]]]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebottomUpM\u003c/a\u003e\u003c/code\u003e is a monadic version of \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e.  It could be used,\nfor example, to replace the contents of delimited code blocks with\nattribute \u003ccode\u003einclude=FILENAME\u003c/code\u003e with the contents of \u003ccode\u003eFILENAME\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e doInclude :: Block -\u003e IO Block\n doInclude cb@(CodeBlock (id, classes, namevals) contents) =\n   case lookup \"include\" namevals of\n        Just f  -\u003e return . (CodeBlock (id, classes, namevals)) =\u003c\u003c readFile f\n        Nothing -\u003e return cb\n doInclude x = return x\n\n processIncludes :: Pandoc -\u003e IO Pandoc\n processIncludes = bottomUpM doInclude\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003equeryWith\u003c/a\u003e\u003c/code\u003e can be used, for example, to compile a list of URLs\nlinked to in a document:\n\u003c/p\u003e\u003cpre\u003e extractURL :: Inline -\u003e [String]\n extractURL (Link _ (u,_)) = [u]\n extractURL (Image _ (u,_)) = [u]\n extractURL _ = []\n\n extractURLs :: Pandoc -\u003e [String]\n extractURLs = queryWith extractURL\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Generic",
          "name": "Generic",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generic functions for manipulating Pandoc documents Note the functions defined in Text.Pandoc.Walk should be used instead when possible as they are much faster Here simple example defining function that replaces all the level headers in document with regular paragraphs in ALL CAPS import Text.Pandoc.Definition import Text.Pandoc.Generic import Data.Char toUpper modHeader Block Block modHeader Header xs Para bottomUp allCaps xs modHeader allCaps Inline Inline allCaps Str xs Str map toUpper xs allCaps changeHeaders Pandoc Pandoc changeHeaders bottomUp modHeader bottomUp is so called because it traverses the Pandoc structure from bottom up topDown goes the other way The difference between them can be seen from this example normal Inline Inline normal Space Space xs Space xs normal Emph xs Emph ys zs Emph xs ys zs normal xs xs myDoc Pandoc myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Emph Space Str emphasized Here we want to use topDown to lift normal to Pandoc Pandoc The top down strategy will collapse the two adjacent Emph first then collapse the resulting adjacent Space as desired If we used bottomUp we would end up with two adjacent Space since the contents of the two Emph inlines would be processed before the Emph were collapsed into one topDown normal myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Str emphasized bottomUp normal myDoc Pandoc nullMeta Para Str Hi Space Emph Str world Space Space Str emphasized bottomUpM is monadic version of bottomUp It could be used for example to replace the contents of delimited code blocks with attribute include FILENAME with the contents of FILENAME doInclude Block IO Block doInclude cb CodeBlock id classes namevals contents case lookup include namevals of Just return CodeBlock id classes namevals readFile Nothing return cb doInclude return processIncludes Pandoc IO Pandoc processIncludes bottomUpM doInclude queryWith can be used for example to compile list of URLs linked to in document extractURL Inline String extractURL Link extractURL Image extractURL extractURLs Pandoc String extractURLs queryWith extractURL",
          "hierarchy": "Text Pandoc Generic",
          "module": "Text.Pandoc.Generic",
          "name": "Generic",
          "package": "pandoc-types",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a transformation on \u003ccode\u003ea\u003c/code\u003es to matching elements in a \u003ccode\u003eb\u003c/code\u003e,\n moving from the bottom of the structure up.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Generic",
          "name": "bottomUp",
          "package": "pandoc-types",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Text-Pandoc-Generic.html#bottomUp",
          "type": "function"
        },
        "index": {
          "description": "Applies transformation on to matching elements in moving from the bottom of the structure up",
          "hierarchy": "Text Pandoc Generic",
          "module": "Text.Pandoc.Generic",
          "name": "bottomUp",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "pandoc-types",
          "partial": "Up",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:bottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebottomUp\u003c/a\u003e\u003c/code\u003e, but with monadic transformations.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Generic",
          "name": "bottomUpM",
          "package": "pandoc-types",
          "signature": "(a -\u003e m a) -\u003e b -\u003e m b",
          "source": "src/Text-Pandoc-Generic.html#bottomUpM",
          "type": "function"
        },
        "index": {
          "description": "Like bottomUp but with monadic transformations",
          "hierarchy": "Text Pandoc Generic",
          "module": "Text.Pandoc.Generic",
          "name": "bottomUpM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "pandoc-types",
          "partial": "Up",
          "signature": "(a-\u003em a)-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:bottomUpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a query on matching \u003ccode\u003ea\u003c/code\u003e elements in a \u003ccode\u003ec\u003c/code\u003e.  The results\n of the queries are combined using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Generic",
          "name": "queryWith",
          "package": "pandoc-types",
          "signature": "(a -\u003e b) -\u003e c -\u003e b",
          "source": "src/Text-Pandoc-Generic.html#queryWith",
          "type": "function"
        },
        "index": {
          "description": "Runs query on matching elements in The results of the queries are combined using mappend",
          "hierarchy": "Text Pandoc Generic",
          "module": "Text.Pandoc.Generic",
          "name": "queryWith",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "pandoc-types",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003ec-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:queryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a transformation on \u003ccode\u003ea\u003c/code\u003es to matching elements in a \u003ccode\u003eb\u003c/code\u003e,\n moving from the top of the structure down.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Generic",
          "name": "topDown",
          "package": "pandoc-types",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Text-Pandoc-Generic.html#topDown",
          "type": "function"
        },
        "index": {
          "description": "Applies transformation on to matching elements in moving from the top of the structure down",
          "hierarchy": "Text Pandoc Generic",
          "module": "Text.Pandoc.Generic",
          "name": "topDown",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "pandoc-types",
          "partial": "Down",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Generic.html#v:topDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for serializing the Pandoc AST to JSON and deserializing from JSON.\n\u003c/p\u003e\u003cp\u003eExample of use:  The following script (\u003ccode\u003ecapitalize.hs\u003c/code\u003e) reads\nreads a JSON representation of a Pandoc document from stdin,\nand writes a JSON representation of a Pandoc document to stdout.\nIt changes all regular text in the document to uppercase, without\naffecting URLs, code, tags, etc.  Run the script with\n\u003c/p\u003e\u003cpre\u003e pandoc -t json | runghc capitalize.hs | pandoc -f json\n\u003c/pre\u003e\u003cp\u003eor (making capitalize.hs executable)\n\u003c/p\u003e\u003cpre\u003e pandoc --filter ./capitalize.hs\n\u003c/pre\u003e\u003cpre\u003e #!/usr/bin/env runghc\n import Text.Pandoc.JSON\n import Data.Char (toUpper)\n\n main :: IO ()\n main = toJSONFilter capitalizeStrings\n\n capitalizeStrings :: Inline -\u003e Inline\n capitalizeStrings (Str s) = Str $ map toUpper s\n capitalizeStrings x       = x\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.JSON",
          "name": "JSON",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for serializing the Pandoc AST to JSON and deserializing from JSON Example of use The following script capitalize.hs reads reads JSON representation of Pandoc document from stdin and writes JSON representation of Pandoc document to stdout It changes all regular text in the document to uppercase without affecting URLs code tags etc Run the script with pandoc json runghc capitalize.hs pandoc json or making capitalize.hs executable pandoc filter capitalize.hs usr bin env runghc import Text.Pandoc.JSON import Data.Char toUpper main IO main toJSONFilter capitalizeStrings capitalizeStrings Inline Inline capitalizeStrings Str Str map toUpper capitalizeStrings",
          "hierarchy": "Text Pandoc JSON",
          "module": "Text.Pandoc.JSON",
          "name": "JSON",
          "package": "pandoc-types",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoJSONFilter\u003c/a\u003e\u003c/code\u003e convert a function into a filter that reads pandoc's\n JSON serialized output from stdin, transforms it by walking the AST\n and applying the specified function, and serializes the result as JSON\n to stdout.\n\u003c/p\u003e\u003cp\u003eFor a straight transformation, use a function of type \u003ccode\u003ea -\u003e a\u003c/code\u003e or\n \u003ccode\u003ea -\u003e IO a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInline\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eMetaValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your transformation needs to be sensitive to the script's arguments,\n use a function of type \u003ccode\u003e[String] -\u003e a -\u003e a\u003c/code\u003e (with \u003ccode\u003ea\u003c/code\u003e constrained as above).\n The \u003ccode\u003e[String]\u003c/code\u003e will be populated with the script's arguments.\n\u003c/p\u003e\u003cp\u003eAn alternative is to use the type \u003ccode\u003eMaybe Format -\u003e a -\u003e a\u003c/code\u003e.\n This is appropriate when the first argument of the script (if present)\n will be the target format, and allows scripts to behave differently\n depending on the target format.  The pandoc executable automatically\n provides the target format as argument when scripts are called using\n the `--filter` option.\n\u003c/p\u003e",
          "module": "Text.Pandoc.JSON",
          "name": "ToJSONFilter",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-JSON.html#ToJSONFilter",
          "type": "class"
        },
        "index": {
          "description": "toJSONFilter convert function into filter that reads pandoc JSON serialized output from stdin transforms it by walking the AST and applying the specified function and serializes the result as JSON to stdout For straight transformation use function of type or IO where Block Inline Pandoc Meta or MetaValue If your transformation needs to be sensitive to the script arguments use function of type String with constrained as above The String will be populated with the script arguments An alternative is to use the type Maybe Format This is appropriate when the first argument of the script if present will be the target format and allows scripts to behave differently depending on the target format The pandoc executable automatically provides the target format as argument when scripts are called using the filter option",
          "hierarchy": "Text Pandoc JSON",
          "module": "Text.Pandoc.JSON",
          "name": "ToJSONFilter",
          "package": "pandoc-types",
          "partial": "To JSONFilter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#t:ToJSONFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.JSON",
          "name": "toJSONFilter",
          "package": "pandoc-types",
          "signature": "a -\u003e IO ()",
          "source": "src/Text-Pandoc-JSON.html#toJSONFilter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Pandoc JSON",
          "module": "Text.Pandoc.JSON",
          "name": "toJSONFilter",
          "normalized": "a-\u003eIO()",
          "package": "pandoc-types",
          "partial": "JSONFilter",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-JSON.html#v:toJSONFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for manipulating \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents or extracting\ninformation from them by walking the \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e structure (or\nintermediate structures like '[Block]' or '[Inline]'.\nThese are faster (by a factor of four or five) than the generic\nfunctions defined in \u003ccode\u003eText.Pandoc.Generic\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere's a simple example, defining a function that replaces all the level 3+\nheaders in a document with regular paragraphs in ALL CAPS:\n\u003c/p\u003e\u003cpre\u003e import Text.Pandoc.Definition\n import Text.Pandoc.Walk\n import Data.Char (toUpper)\n\n modHeader :: Block -\u003e Block\n modHeader (Header n _ xs) | n \u003e= 3 = Para $ walk allCaps xs\n modHeader x = x\n\n allCaps :: Inline -\u003e Inline\n allCaps (Str xs) = Str $ map toUpper xs\n allCaps x = x\n\n changeHeaders :: Pandoc -\u003e Pandoc\n changeHeaders = walk modHeader\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e can be used, for example, to compile a list of URLs\nlinked to in a document:\n\u003c/p\u003e\u003cpre\u003e extractURL :: Inline -\u003e [String]\n extractURL (Link _ (u,_)) = [u]\n extractURL (Image _ (u,_)) = [u]\n extractURL _ = []\n\n extractURLs :: Pandoc -\u003e [String]\n extractURLs = query extractURL\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Walk",
          "name": "Walk",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Walk.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for manipulating Pandoc documents or extracting information from them by walking the Pandoc structure or intermediate structures like Block or Inline These are faster by factor of four or five than the generic functions defined in Text.Pandoc.Generic Here simple example defining function that replaces all the level headers in document with regular paragraphs in ALL CAPS import Text.Pandoc.Definition import Text.Pandoc.Walk import Data.Char toUpper modHeader Block Block modHeader Header xs Para walk allCaps xs modHeader allCaps Inline Inline allCaps Str xs Str map toUpper xs allCaps changeHeaders Pandoc Pandoc changeHeaders walk modHeader query can be used for example to compile list of URLs linked to in document extractURL Inline String extractURL Link extractURL Image extractURL extractURLs Pandoc String extractURLs query extractURL",
          "hierarchy": "Text Pandoc Walk",
          "module": "Text.Pandoc.Walk",
          "name": "Walk",
          "package": "pandoc-types",
          "partial": "Walk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Walk",
          "name": "Walkable",
          "package": "pandoc-types",
          "source": "src/Text-Pandoc-Walk.html#Walkable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Pandoc Walk",
          "module": "Text.Pandoc.Walk",
          "name": "Walkable",
          "package": "pandoc-types",
          "partial": "Walkable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#t:Walkable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003equery f x\u003c/code\u003e walks the structure \u003ccode\u003ex\u003c/code\u003e (bottom up) and applies \u003ccode\u003ef\u003c/code\u003e\n to every \u003ccode\u003ea\u003c/code\u003e, appending the results.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Walk",
          "name": "query",
          "package": "pandoc-types",
          "signature": "(a -\u003e c) -\u003e b -\u003e c",
          "source": "src/Text-Pandoc-Walk.html#query",
          "type": "method"
        },
        "index": {
          "description": "query walks the structure bottom up and applies to every appending the results",
          "hierarchy": "Text Pandoc Walk",
          "module": "Text.Pandoc.Walk",
          "name": "query",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "pandoc-types",
          "signature": "(a-\u003ec)-\u003eb-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewalk f x\u003c/code\u003e walks the structure \u003ccode\u003ex\u003c/code\u003e (bottom up) and replaces every\n occurrence of an \u003ccode\u003ea\u003c/code\u003e with the result of applying \u003ccode\u003ef\u003c/code\u003e to it.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Walk",
          "name": "walk",
          "package": "pandoc-types",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Text-Pandoc-Walk.html#walk",
          "type": "method"
        },
        "index": {
          "description": "walk walks the structure bottom up and replaces every occurrence of an with the result of applying to it",
          "hierarchy": "Text Pandoc Walk",
          "module": "Text.Pandoc.Walk",
          "name": "walk",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "pandoc-types",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003ewalk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Walk",
          "name": "walkM",
          "package": "pandoc-types",
          "signature": "(a -\u003e m a) -\u003e b -\u003e m b",
          "source": "src/Text-Pandoc-Walk.html#walkM",
          "type": "method"
        },
        "index": {
          "description": "monadic version of walk",
          "hierarchy": "Text Pandoc Walk",
          "module": "Text.Pandoc.Walk",
          "name": "walkM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "pandoc-types",
          "signature": "(a-\u003em a)-\u003eb-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html#v:walkM"
      }
    }
  ]
]