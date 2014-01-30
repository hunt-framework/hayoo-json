[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for TagSoup Parser\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-TagSoup.html",
        "fct-type": "module",
        "title": "TagSoup"
      },
      "index": {
        "description": "Interface for TagSoup Parser",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "TagSoup",
        "normalized": "",
        "package": "hxt-tagsoup",
        "partial": "Tag Soup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:a_tagsoup",
      "description": {
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-TagSoup.html#a_tagsoup",
        "fct-type": "function",
        "title": "a_tagsoup"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "a_tagsoup",
        "normalized": "",
        "package": "hxt-tagsoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:parseHtmlTagSoup",
      "description": {
        "fct-descr": "\u003cp\u003eThe Tagsoup parser arrow\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "IOSArrow XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#parseHtmlTagSoup",
        "fct-type": "function",
        "title": "parseHtmlTagSoup"
      },
      "index": {
        "description": "The Tagsoup parser arrow",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "parseHtmlTagSoup",
        "normalized": "",
        "package": "hxt-tagsoup",
        "partial": "Html Tag Soup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:tagSoupOptions",
      "description": {
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "[OptDescr SysConfig]",
        "fct-source": "src/Text-XML-HXT-TagSoup.html#tagSoupOptions",
        "fct-type": "function",
        "title": "tagSoupOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "tagSoupOptions",
        "normalized": "[OptDescr SysConfig]",
        "package": "hxt-tagsoup",
        "partial": "Soup Options",
        "signature": "[OptDescr SysConfig]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:withTagSoup",
      "description": {
        "fct-descr": "\u003cp\u003eThe system config option to enable the tagsoup parser\n\u003c/p\u003e\u003cp\u003eHere is an example, how to use it:\n\u003c/p\u003e\u003cpre\u003e ...\n import Text.HXT.XML.Core\n import Text.HXT.XML.TagSoup\n ...\n\n readDocument [ withExpat ] \"some-file.xml\"\n ...\n\u003c/pre\u003e\u003cp\u003ereads the given document and parses it with the lazy tagsoup parser.\nThere is no validation enabled.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "SysConfig",
        "fct-source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#withTagSoup",
        "fct-type": "function",
        "title": "withTagSoup"
      },
      "index": {
        "description": "The system config option to enable the tagsoup parser Here is an example how to use it import Text.HXT.XML.Core import Text.HXT.XML.TagSoup readDocument withExpat some-file.xml reads the given document and parses it with the lazy tagsoup parser There is no validation enabled",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "withTagSoup",
        "normalized": "",
        "package": "hxt-tagsoup",
        "partial": "Tag Soup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-tagsoup/docs/Text-XML-HXT-TagSoup.html#v:withoutTagSoup",
      "description": {
        "fct-descr": "\u003cp\u003eTurns off tagsoup parsing. The build in HXT parser will be used.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.TagSoup",
        "fct-package": "hxt-tagsoup",
        "fct-signature": "SysConfig",
        "fct-source": "src/Text-XML-HXT-Arrow-TagSoupInterface.html#withoutTagSoup",
        "fct-type": "function",
        "title": "withoutTagSoup"
      },
      "index": {
        "description": "Turns off tagsoup parsing The build in HXT parser will be used",
        "hierarchy": "Text XML HXT TagSoup",
        "module": "Text.XML.HXT.TagSoup",
        "name": "withoutTagSoup",
        "normalized": "",
        "package": "hxt-tagsoup",
        "partial": "Tag Soup",
        "signature": ""
      }
    }
  }
]