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
        "word": "xml-helpers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of useful helper functions for dealing with XML data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "Helpers",
          "package": "xml-helpers",
          "source": "src/Text-XML-Light-Helpers.html",
          "type": "module"
        },
        "index": {
          "description": "set of useful helper functions for dealing with XML data",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "Helpers",
          "package": "xml-helpers",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True iff the given alement has an attribute \u003ca\u003ename\u003c/a\u003e equal to\n the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "elementHasNameAttr",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e Bool",
          "source": "src/Text-XML-Light-Helpers.html#elementHasNameAttr",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the given alement has an attribute name equal to the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "elementHasNameAttr",
          "normalized": "String-\u003eElement-\u003eBool",
          "package": "xml-helpers",
          "partial": "Has Name Attr",
          "signature": "String-\u003eElement-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:elementHasNameAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a child of the given element with that has an attribute \u003ca\u003ename\u003c/a\u003e\n equal to the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "findChildWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Helpers.html#findChildWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Find child of the given element with that has an attribute name equal to the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "findChildWithAttName",
          "normalized": "String-\u003eElement-\u003eMaybe Element",
          "package": "xml-helpers",
          "partial": "Child With Att Name",
          "signature": "String-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:findChildWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all the children of the given element that have an attribute \u003ca\u003ename\u003c/a\u003e\n equal to the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "findChildrenWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Helpers.html#findChildrenWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Find all the children of the given element that have an attribute name equal to the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "findChildrenWithAttName",
          "normalized": "String-\u003eElement-\u003e[Element]",
          "package": "xml-helpers",
          "partial": "Children With Att Name",
          "signature": "String-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:findChildrenWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a subelement of the given element that has an attribute \u003ca\u003ename\u003c/a\u003e\n equal to the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "findElementWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Helpers.html#findElementWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Find subelement of the given element that has an attribute name equal to the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "findElementWithAttName",
          "normalized": "String-\u003eElement-\u003eMaybe Element",
          "package": "xml-helpers",
          "partial": "Element With Att Name",
          "signature": "String-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:findElementWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all the subelements of the given element that have an attribute\n \u003ca\u003ename\u003c/a\u003e equal to the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "findElementsWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Helpers.html#findElementsWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Find all the subelements of the given element that have an attribute name equal to the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "findElementsWithAttName",
          "normalized": "String-\u003eElement-\u003e[Element]",
          "package": "xml-helpers",
          "partial": "Elements With Att Name",
          "signature": "String-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:findElementsWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the function over the children of the given element with the given\n name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "foldChildren",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e a -\u003e (a -\u003e Element -\u003e Maybe a) -\u003e Maybe a",
          "source": "src/Text-XML-Light-Helpers.html#foldChildren",
          "type": "function"
        },
        "index": {
          "description": "Fold the function over the children of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "foldChildren",
          "normalized": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "package": "xml-helpers",
          "partial": "Children",
          "signature": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:foldChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the given function over the children of the given element that\n have an attribute \u003ca\u003ename\u003c/a\u003e matching the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "foldChildrenWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e a -\u003e (a -\u003e Element -\u003e Maybe a) -\u003e Maybe a",
          "source": "src/Text-XML-Light-Helpers.html#foldChildrenWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Fold the given function over the children of the given element that have an attribute name matching the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "foldChildrenWithAttName",
          "normalized": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "package": "xml-helpers",
          "partial": "Children With Att Name",
          "signature": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:foldChildrenWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the given function over the children of the given element with\n the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "foldElements",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e a -\u003e (a -\u003e Element -\u003e Maybe a) -\u003e Maybe a",
          "source": "src/Text-XML-Light-Helpers.html#foldElements",
          "type": "function"
        },
        "index": {
          "description": "Fold the given function over the children of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "foldElements",
          "normalized": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "package": "xml-helpers",
          "partial": "Elements",
          "signature": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:foldElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the given function over the subelements of the given element that\n have an attribute \u003ca\u003ename\u003c/a\u003e matching the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "foldElementsWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e a -\u003e (a -\u003e Element -\u003e Maybe a) -\u003e Maybe a",
          "source": "src/Text-XML-Light-Helpers.html#foldElementsWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Fold the given function over the subelements of the given element that have an attribute name matching the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "foldElementsWithAttName",
          "normalized": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "package": "xml-helpers",
          "partial": "Elements With Att Name",
          "signature": "String-\u003eElement-\u003ea-\u003e(a-\u003eElement-\u003eMaybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:foldElementsWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string contents of the child of the given element with the given\n name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "getChildData",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e Maybe String",
          "source": "src/Text-XML-Light-Helpers.html#getChildData",
          "type": "function"
        },
        "index": {
          "description": "Get the string contents of the child of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "getChildData",
          "normalized": "String-\u003eElement-\u003eMaybe String",
          "package": "xml-helpers",
          "partial": "Child Data",
          "signature": "String-\u003eElement-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:getChildData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string contents of the subelement of the given element with the\n given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "getElementData",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e Maybe String",
          "source": "src/Text-XML-Light-Helpers.html#getElementData",
          "type": "function"
        },
        "index": {
          "description": "Get the string contents of the subelement of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "getElementData",
          "normalized": "String-\u003eElement-\u003eMaybe String",
          "package": "xml-helpers",
          "partial": "Element Data",
          "signature": "String-\u003eElement-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:getElementData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the given function over the children of the given element with the\n given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "mapChildren",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e (Element -\u003e Maybe a) -\u003e Maybe [a]",
          "source": "src/Text-XML-Light-Helpers.html#mapChildren",
          "type": "function"
        },
        "index": {
          "description": "Map the given function over the children of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "mapChildren",
          "normalized": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "package": "xml-helpers",
          "partial": "Children",
          "signature": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:mapChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the given function over the children of the given element that\n have an attribute \u003ca\u003ename\u003c/a\u003e matching the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "mapChildrenWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e (Element -\u003e Maybe a) -\u003e Maybe [a]",
          "source": "src/Text-XML-Light-Helpers.html#mapChildrenWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Map the given function over the children of the given element that have an attribute name matching the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "mapChildrenWithAttName",
          "normalized": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "package": "xml-helpers",
          "partial": "Children With Att Name",
          "signature": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:mapChildrenWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the given function over all subelements of the given element with\n the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "mapElements",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e (Element -\u003e Maybe a) -\u003e Maybe [a]",
          "source": "src/Text-XML-Light-Helpers.html#mapElements",
          "type": "function"
        },
        "index": {
          "description": "Map the given function over all subelements of the given element with the given name",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "mapElements",
          "normalized": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "package": "xml-helpers",
          "partial": "Elements",
          "signature": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:mapElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the given function over the subelements of the given element that\n have an attribute \u003ca\u003ename\u003c/a\u003e matching the given string.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "mapElementsWithAttName",
          "package": "xml-helpers",
          "signature": "String -\u003e Element -\u003e (Element -\u003e Maybe a) -\u003e Maybe [a]",
          "source": "src/Text-XML-Light-Helpers.html#mapElementsWithAttName",
          "type": "function"
        },
        "index": {
          "description": "Map the given function over the subelements of the given element that have an attribute name matching the given string",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "mapElementsWithAttName",
          "normalized": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "package": "xml-helpers",
          "partial": "Elements With Att Name",
          "signature": "String-\u003eElement-\u003e(Element-\u003eMaybe a)-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:mapElementsWithAttName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of rows (subelement with the name \u003ca\u003erow\u003c/a\u003e) into a Haskell\n datatype using the given function.s \n\u003c/p\u003e",
          "module": "Text.XML.Light.Helpers",
          "name": "parseRows",
          "package": "xml-helpers",
          "signature": "(Element -\u003e Maybe a) -\u003e Element -\u003e Maybe [a]",
          "source": "src/Text-XML-Light-Helpers.html#parseRows",
          "type": "function"
        },
        "index": {
          "description": "Convert list of rows subelement with the name row into Haskell datatype using the given function.s",
          "hierarchy": "Text XML Light Helpers",
          "module": "Text.XML.Light.Helpers",
          "name": "parseRows",
          "normalized": "(Element-\u003eMaybe a)-\u003eElement-\u003eMaybe[a]",
          "package": "xml-helpers",
          "partial": "Rows",
          "signature": "(Element-\u003eMaybe a)-\u003eElement-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-helpers/docs/Text-XML-Light-Helpers.html#v:parseRows"
      }
    }
  ]
]