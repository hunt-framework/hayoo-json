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
        "word": "hxt-tagsoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for TagSoup Parser\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.TagSoup",
          "name": "TagSoup",
          "package": "hxt-tagsoup",
          "source": "src/Text-XML-HXT-TagSoup.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for TagSoup Parser",
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "TagSoup",
          "package": "hxt-tagsoup",
          "partial": "Tag Soup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.TagSoup",
          "name": "a_tagsoup",
          "package": "hxt-tagsoup",
          "signature": "String",
          "source": "src/Text-XML-HXT-TagSoup.html#a_tagsoup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "a_tagsoup",
          "package": "hxt-tagsoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:a_tagsoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Tagsoup parser arrow\n\u003c/p\u003e",
          "module": "Text.XML.HXT.TagSoup",
          "name": "parseHtmlTagSoup",
          "package": "hxt-tagsoup",
          "signature": "IOSArrow XmlTree XmlTree",
          "source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#parseHtmlTagSoup",
          "type": "function"
        },
        "index": {
          "description": "The Tagsoup parser arrow",
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "parseHtmlTagSoup",
          "package": "hxt-tagsoup",
          "partial": "Html Tag Soup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:parseHtmlTagSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.TagSoup",
          "name": "tagSoupOptions",
          "package": "hxt-tagsoup",
          "signature": "[OptDescr SysConfig]",
          "source": "src/Text-XML-HXT-TagSoup.html#tagSoupOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "tagSoupOptions",
          "normalized": "[OptDescr SysConfig]",
          "package": "hxt-tagsoup",
          "partial": "Soup Options",
          "signature": "[OptDescr SysConfig]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:tagSoupOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe system config option to enable the tagsoup parser\n\u003c/p\u003e\u003cp\u003eHere is an example, how to use it:\n\u003c/p\u003e\u003cpre\u003e ...\n import Text.HXT.XML.Core\n import Text.HXT.XML.TagSoup\n ...\n\n readDocument [ withExpat ] \"some-file.xml\"\n ...\n\u003c/pre\u003e\u003cp\u003ereads the given document and parses it with the lazy tagsoup parser.\nThere is no validation enabled.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.TagSoup",
          "name": "withTagSoup",
          "package": "hxt-tagsoup",
          "signature": "SysConfig",
          "source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#withTagSoup",
          "type": "function"
        },
        "index": {
          "description": "The system config option to enable the tagsoup parser Here is an example how to use it import Text.HXT.XML.Core import Text.HXT.XML.TagSoup readDocument withExpat some-file.xml reads the given document and parses it with the lazy tagsoup parser There is no validation enabled",
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "withTagSoup",
          "package": "hxt-tagsoup",
          "partial": "Tag Soup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:withTagSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns off tagsoup parsing. The build in HXT parser will be used.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.TagSoup",
          "name": "withoutTagSoup",
          "package": "hxt-tagsoup",
          "signature": "SysConfig",
          "source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#withoutTagSoup",
          "type": "function"
        },
        "index": {
          "description": "Turns off tagsoup parsing The build in HXT parser will be used",
          "hierarchy": "Text XML HXT TagSoup",
          "module": "Text.XML.HXT.TagSoup",
          "name": "withoutTagSoup",
          "package": "hxt-tagsoup",
          "partial": "Tag Soup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:withoutTagSoup"
      }
    }
  ]
]