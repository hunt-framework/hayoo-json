[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMost of the XPath arrows come in two versions,\n   one without dealing with namespaces, element and attribute names\n   in XPath expressions are taken as they ar ignoring any prefix:localname structure.\n\u003c/p\u003e\u003cp\u003eThe second variant uses a namespace environment for associating the right\n   namespace for the appropriate prefix. An entry for the empty prefix\n   defines the default namespace for the expression.\n\u003c/p\u003e\u003cp\u003eThe second variant should be used, when in the application namespaces\n   are significant, that means when namespace propagation is done for\n   the documents to be processed.\n\u003c/p\u003e\u003cp\u003eThe XPath evaluator computes a result, which can be a simple value\n   like a string or number, or a node set. The nodes in these sets\n   are identified by their position in the document tree.\n   Node sets are returned as a list of XmlTrees with respect to the\n   document order.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html",
        "fct-type": "module",
        "title": "Arrows"
      },
      "index": {
        "description": "Most of the XPath arrows come in two versions one without dealing with namespaces element and attribute names in XPath expressions are taken as they ar ignoring any prefix localname structure The second variant uses namespace environment for associating the right namespace for the appropriate prefix An entry for the empty prefix defines the default namespace for the expression The second variant should be used when in the application namespaces are significant that means when namespace propagation is done for the documents to be processed The XPath evaluator computes result which can be simple value like string or number or node set The nodes in these sets are identified by their position in the document tree Node sets are returned as list of XmlTrees with respect to the document order",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "Arrows",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Arrows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getElemAndAttrNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003ecompute a node set from a tree, containing all nodes including attribute nodes\n elected by the predicate arrow\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "a XmlTree XmlTree -\u003e a XmlTree XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getElemAndAttrNodeSet",
        "fct-type": "function",
        "title": "getElemAndAttrNodeSet"
      },
      "index": {
        "description": "compute node set from tree containing all nodes including attribute nodes elected by the predicate arrow",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getElemAndAttrNodeSet",
        "normalized": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
        "package": "hxt-xpath",
        "partial": "Elem And Attr Node Set",
        "signature": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getElemNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003ecompute a node set from a tree, containing all nodes selected by the predicate arrow\n\u003c/p\u003e\u003cp\u003ecomputation of the set of element nodes with name \"a\" is done with\n\u003c/p\u003e\u003cpre\u003e getElemNodeSet (hasName \"a\")\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "a XmlTree XmlTree -\u003e a XmlTree XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getElemNodeSet",
        "fct-type": "function",
        "title": "getElemNodeSet"
      },
      "index": {
        "description": "compute node set from tree containing all nodes selected by the predicate arrow computation of the set of element nodes with name is done with getElemNodeSet hasName",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getElemNodeSet",
        "normalized": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
        "package": "hxt-xpath",
        "partial": "Elem Node Set",
        "signature": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getFromNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003eselect all subtrees specified by a previously computed node set\n\u003c/p\u003e\u003cp\u003ethe following law holds:\n\u003c/p\u003e\u003cpre\u003e getFromNodeSet $\u003c getElemNodeSet f == multi f\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "XmlNodeSet -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getFromNodeSet",
        "fct-type": "function",
        "title": "getFromNodeSet"
      },
      "index": {
        "description": "select all subtrees specified by previously computed node set the following law holds getFromNodeSet getElemNodeSet multi",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getFromNodeSet",
        "normalized": "XmlNodeSet-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "From Node Set",
        "signature": "XmlNodeSet-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003eSelect a set of nodes via an XPath expression from an arbitray XML tree\n\u003c/p\u003e\u003cp\u003eThe result is a set of \"pointers\" to nodes. This set can be used to\n access or modify the values of the subnodes in subsequent calls to \u003ccode\u003e\u003ca\u003egetFromNodeSet\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eprocessFromNodeSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function enables for parsing an XPath expressions and traversing the tree for node selection once\n and reuse this result possibly many times for later selection and modification operations.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e a XmlTree XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathNodeSet",
        "fct-type": "function",
        "title": "getXPathNodeSet"
      },
      "index": {
        "description": "Select set of nodes via an XPath expression from an arbitray XML tree The result is set of pointers to nodes This set can be used to access or modify the values of the subnodes in subsequent calls to getFromNodeSet or processFromNodeSet This function enables for parsing an XPath expressions and traversing the tree for node selection once and reuse this result possibly many times for later selection and modification operations",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getXPathNodeSet",
        "normalized": "String-\u003ea XmlTree XmlNodeSet",
        "package": "hxt-xpath",
        "partial": "XPath Node Set",
        "signature": "String-\u003ea XmlTree XmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTrees",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of an arbitrary XML tree by a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of an arbitrary XML tree via XPath.\n The string argument must be a XPath expression with an absolute location path,\n There are no restrictions on the argument tree.\n\u003c/p\u003e\u003cp\u003eNo canonicalization is performed before evaluating the query\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTrees",
        "fct-type": "function",
        "title": "getXPathTrees"
      },
      "index": {
        "description": "Select parts of an arbitrary XML tree by XPath expression The main filter for selecting parts of an arbitrary XML tree via XPath The string argument must be XPath expression with an absolute location path There are no restrictions on the argument tree No canonicalization is performed before evaluating the query Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getXPathTrees",
        "normalized": "String-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees",
        "signature": "String-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesInDoc",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of a whole XML document with root node by a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of a document via XPath.\n\u003c/p\u003e\u003cp\u003eThe string argument must be a XPath expression with an absolute location path,\n the argument tree must be a complete document tree.\n\u003c/p\u003e\u003cp\u003eBefore evaluating the xpath query, the document is canonicalized\n with \u003ccode\u003e\u003ca\u003ecanonicalizeForXPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesInDoc",
        "fct-type": "function",
        "title": "getXPathTreesInDoc"
      },
      "index": {
        "description": "Select parts of whole XML document with root node by XPath expression The main filter for selecting parts of document via XPath The string argument must be XPath expression with an absolute location path the argument tree must be complete document tree Before evaluating the xpath query the document is canonicalized with canonicalizeForXPath Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getXPathTreesInDoc",
        "normalized": "String-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees In Doc",
        "signature": "String-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesInDocWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathTreesInDoc\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesInDocWithNsEnv",
        "fct-type": "function",
        "title": "getXPathTreesInDocWithNsEnv"
      },
      "index": {
        "description": "Same as getXPathTreesInDoc but with namespace environment for the XPath names",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getXPathTreesInDocWithNsEnv",
        "normalized": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees In Doc With Ns Env",
        "signature": "Attributes-\u003eString-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathTrees\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesWithNsEnv",
        "fct-type": "function",
        "title": "getXPathTreesWithNsEnv"
      },
      "index": {
        "description": "Same as getXPathTrees but with namespace environment for the XPath names",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "getXPathTreesWithNsEnv",
        "normalized": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees With Ns Env",
        "signature": "Attributes-\u003eString-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processFromNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003eprocess all subtrees specified by a previously computed node set in bottom up manner\n\u003c/p\u003e\u003cp\u003ethe following law should hold:\n\u003c/p\u003e\u003cpre\u003e processFromNodeSet g $\u003c getElemNodeSet f == processBottomUp (g `when` f)\n\u003c/pre\u003e\u003cp\u003ewhen attributes are contained in the node set (see \u003ccode\u003e\u003ca\u003egetElemAndAttrNodeSet\u003c/a\u003e\u003c/code\u003e), these are processed\n after the children and before the node itself\n\u003c/p\u003e\u003cp\u003ethe advantage of processFromNodeSet is the separation of the selection of set of nodes to be processed (e.g. modified)\n from the real proccessing. The selection sometimes can be done once, the processing possibly many times.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "a XmlTree XmlTree -\u003e XmlNodeSet -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#processFromNodeSet",
        "fct-type": "function",
        "title": "processFromNodeSet"
      },
      "index": {
        "description": "process all subtrees specified by previously computed node set in bottom up manner the following law should hold processFromNodeSet getElemNodeSet processBottomUp when when attributes are contained in the node set see getElemAndAttrNodeSet these are processed after the children and before the node itself the advantage of processFromNodeSet is the separation of the selection of set of nodes to be processed e.g modified from the real proccessing The selection sometimes can be done once the processing possibly many times",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "processFromNodeSet",
        "normalized": "a XmlTree XmlTree-\u003eXmlNodeSet-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "From Node Set",
        "signature": "a XmlTree XmlTree-\u003eXmlNodeSet-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processXPathTrees",
      "description": {
        "fct-descr": "\u003cp\u003eprocess all subtrees selected by an XPath expression\n\u003c/p\u003e\u003cp\u003ethe following law holds:\n\u003c/p\u003e\u003cpre\u003e processXPathTrees p xpathExpr == processFromNodeSet p $\u003c getXPathNodeSet xpathExpr\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "a XmlTree XmlTree -\u003e String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#processXPathTrees",
        "fct-type": "function",
        "title": "processXPathTrees"
      },
      "index": {
        "description": "process all subtrees selected by an XPath expression the following law holds processXPathTrees xpathExpr processFromNodeSet getXPathNodeSet xpathExpr",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "processXPathTrees",
        "normalized": "a XmlTree XmlTree-\u003eString-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees",
        "signature": "a XmlTree XmlTree-\u003eString-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processXPathTreesWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eprocessXPathTrees\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.Arrows",
        "fct-package": "hxt-xpath",
        "fct-signature": "a XmlTree XmlTree -\u003e Attributes -\u003e String -\u003e a XmlTree XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-Arrows.html#processXPathTreesWithNsEnv",
        "fct-type": "function",
        "title": "processXPathTreesWithNsEnv"
      },
      "index": {
        "description": "Same as processXPathTrees but with namespace environment for the XPath names",
        "hierarchy": "Text XML HXT XPath Arrows",
        "module": "Text.XML.HXT.XPath.Arrows",
        "name": "processXPathTreesWithNsEnv",
        "normalized": "a XmlTree XmlTree-\u003eAttributes-\u003eString-\u003ea XmlTree XmlTree",
        "package": "hxt-xpath",
        "partial": "XPath Trees With Ns Env",
        "signature": "a XmlTree XmlTree-\u003eAttributes-\u003eString-\u003ea XmlTree XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNavigable tree structure which allow a program to traverse\n for XPath expressions\n copied and modified from HXML (\u003ca\u003ehttp://www.flightlab.com/~joe/hxml/\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html",
        "fct-type": "module",
        "title": "NavTree"
      },
      "index": {
        "description": "Navigable tree structure which allow program to traverse for XPath expressions copied and modified from HXML http www.flightlab.com joe hxml",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "NavTree",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Nav Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#t:NavTree",
      "description": {
        "fct-descr": "\u003cp\u003enavigable tree with nodes of type node\n\u003c/p\u003e\u003cp\u003ea navigable tree consists of a n-ary tree for the current fragment tree,\n a navigable tree for all ancestors, and two n-ary trees for\n the previous- and following siblings\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "data",
        "title": "NavTree"
      },
      "index": {
        "description": "navigable tree with nodes of type node navigable tree consists of n-ary tree for the current fragment tree navigable tree for all ancestors and two n-ary trees for the previous and following siblings",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "NavTree",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Nav Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:NT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NT",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "NT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "NT",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestorAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#ancestorAxis",
        "fct-type": "function",
        "title": "ancestorAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "ancestorAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestorOrSelfAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#ancestorOrSelfAxis",
        "fct-type": "function",
        "title": "ancestorOrSelfAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "ancestorOrSelfAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Or Self Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "[NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "ancestors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "ancestors",
        "normalized": "[NavTree a]",
        "package": "hxt-xpath",
        "partial": "",
        "signature": "[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:attributeAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree XNode -\u003e [NavTree XNode]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#attributeAxis",
        "fct-type": "function",
        "title": "attributeAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "attributeAxis",
        "normalized": "NavTree XNode-\u003e[NavTree XNode]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree XNode-\u003e[NavTree XNode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:childAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#childAxis",
        "fct-type": "function",
        "title": "childAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "childAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:childrenNT",
      "description": {
        "fct-descr": "\u003cp\u003efunction for selecting all children of a tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#childrenNT",
        "fct-type": "function",
        "title": "childrenNT"
      },
      "index": {
        "description": "function for selecting all children of tree",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "childrenNT",
        "normalized": "NavTree a-\u003e[NTree a]",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003e[NTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:dataNT",
      "description": {
        "fct-descr": "\u003cp\u003efunction for selecting the value of the current fragment tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e a",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#dataNT",
        "fct-type": "function",
        "title": "dataNT"
      },
      "index": {
        "description": "function for selecting the value of the current fragment tree",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "dataNT",
        "normalized": "NavTree a-\u003ea",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:descendantAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#descendantAxis",
        "fct-type": "function",
        "title": "descendantAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "descendantAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:descendantOrSelfAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#descendantOrSelfAxis",
        "fct-type": "function",
        "title": "descendantOrSelfAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "descendantOrSelfAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Or Self Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:downNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e Maybe (NavTree a)",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#downNT",
        "fct-type": "function",
        "title": "downNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "downNT",
        "normalized": "NavTree a-\u003eMaybe(NavTree a)",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eMaybe(NavTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#followingAxis",
        "fct-type": "function",
        "title": "followingAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "followingAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingSiblingAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#followingSiblingAxis",
        "fct-type": "function",
        "title": "followingSiblingAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "followingSiblingAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Sibling Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingSiblings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "[NTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "followingSiblings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "followingSiblings",
        "normalized": "[NTree a]",
        "package": "hxt-xpath",
        "partial": "Siblings",
        "signature": "[NTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:getChildrenNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#getChildrenNT",
        "fct-type": "function",
        "title": "getChildrenNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "getChildrenNT",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Children NT",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:indexNT",
      "description": {
        "fct-descr": "\u003cp\u003eposition of tree in parent\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e Int",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#indexNT",
        "fct-type": "function",
        "title": "indexNT"
      },
      "index": {
        "description": "position of tree in parent",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "indexNT",
        "normalized": "NavTree a-\u003eInt",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:leftNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e Maybe (NavTree a)",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#leftNT",
        "fct-type": "function",
        "title": "leftNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "leftNT",
        "normalized": "NavTree a-\u003eMaybe(NavTree a)",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eMaybe(NavTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:maybePlus",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "(a -\u003e Maybe a) -\u003e a -\u003e [a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#maybePlus",
        "fct-type": "function",
        "title": "maybePlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "maybePlus",
        "normalized": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
        "package": "hxt-xpath",
        "partial": "Plus",
        "signature": "(a-\u003eMaybe a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:maybeStar",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "(a -\u003e Maybe a) -\u003e a -\u003e [a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#maybeStar",
        "fct-type": "function",
        "title": "maybeStar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "maybeStar",
        "normalized": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
        "package": "hxt-xpath",
        "partial": "Star",
        "signature": "(a-\u003eMaybe a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ntree",
      "description": {
        "fct-descr": "\u003cp\u003econverts a n-ary tree in a navigable tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NTree a -\u003e NavTree a",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#ntree",
        "fct-type": "function",
        "title": "ntree"
      },
      "index": {
        "description": "converts n-ary tree in navigable tree",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "ntree",
        "normalized": "NTree a-\u003eNavTree a",
        "package": "hxt-xpath",
        "partial": "",
        "signature": "NTree a-\u003eNavTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:o-39-",
      "description": {
        "fct-descr": "\u003cp\u003eKleisli composition:\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "(b -\u003e [c]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [c]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#o%27",
        "fct-type": "function",
        "title": "o'"
      },
      "index": {
        "description": "Kleisli composition",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "o'",
        "normalized": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]",
        "package": "hxt-xpath",
        "partial": "",
        "signature": "(b-\u003e[c])-\u003e(a-\u003e[b])-\u003ea-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:parentAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#parentAxis",
        "fct-type": "function",
        "title": "parentAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "parentAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:pathNT",
      "description": {
        "fct-descr": "\u003cp\u003epath (index list) of a navigatable tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [Int]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#pathNT",
        "fct-type": "function",
        "title": "pathNT"
      },
      "index": {
        "description": "path index list of navigatable tree",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "pathNT",
        "normalized": "NavTree a-\u003e[Int]",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:precedingAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#precedingAxis",
        "fct-type": "function",
        "title": "precedingAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "precedingAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:precedingSiblingAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#precedingSiblingAxis",
        "fct-type": "function",
        "title": "precedingSiblingAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "precedingSiblingAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Sibling Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:preorderNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#preorderNT",
        "fct-type": "function",
        "title": "preorderNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "preorderNT",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:previousSiblings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "[NTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "previousSiblings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "previousSiblings",
        "normalized": "[NTree a]",
        "package": "hxt-xpath",
        "partial": "Siblings",
        "signature": "[NTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:revPreorderNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#revPreorderNT",
        "fct-type": "function",
        "title": "revPreorderNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "revPreorderNT",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Preorder NT",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:rightNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e Maybe (NavTree a)",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#rightNT",
        "fct-type": "function",
        "title": "rightNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "rightNT",
        "normalized": "NavTree a-\u003eMaybe(NavTree a)",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eMaybe(NavTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:self",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NTree a",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "self"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "self",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:selfAxis",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e [NavTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#selfAxis",
        "fct-type": "function",
        "title": "selfAxis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "selfAxis",
        "normalized": "NavTree a-\u003e[NavTree a]",
        "package": "hxt-xpath",
        "partial": "Axis",
        "signature": "NavTree a-\u003e[NavTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:selfIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "Int",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
        "fct-type": "function",
        "title": "selfIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "selfIndex",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:subtreeNT",
      "description": {
        "fct-descr": "\u003cp\u003econverts a navigable tree in a n-ary tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e NTree a",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#subtreeNT",
        "fct-type": "function",
        "title": "subtreeNT"
      },
      "index": {
        "description": "converts navigable tree in n-ary tree",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "subtreeNT",
        "normalized": "NavTree a-\u003eNTree a",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eNTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:upNT",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.NavTree",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavTree a -\u003e Maybe (NavTree a)",
        "fct-source": "src/Text-XML-HXT-XPath-NavTree.html#upNT",
        "fct-type": "function",
        "title": "upNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath NavTree",
        "module": "Text.XML.HXT.XPath.NavTree",
        "name": "upNT",
        "normalized": "NavTree a-\u003eMaybe(NavTree a)",
        "package": "hxt-xpath",
        "partial": "NT",
        "signature": "NavTree a-\u003eMaybe(NavTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module contains arithmetic calculations according the IEEE 754 standard\n for plus, minus, unary minus, multiplication, modulo and division.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html",
        "fct-type": "module",
        "title": "XPathArithmetic"
      },
      "index": {
        "description": "The module contains arithmetic calculations according the IEEE standard for plus minus unary minus multiplication modulo and division",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "XPathArithmetic",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Arithmetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathAdd",
      "description": {
        "fct-descr": "\u003cp\u003ePlus and minus\n\u003c/p\u003e\u003col\u003e\u003cli\u003eparameter op :  plus or minus operation\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "Op -\u003e XPathValue -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathAdd",
        "fct-type": "function",
        "title": "xPathAdd"
      },
      "index": {
        "description": "Plus and minus parameter op plus or minus operation",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "xPathAdd",
        "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "Path Add",
        "signature": "Op-\u003eXPathValue-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathDiv",
      "description": {
        "fct-descr": "\u003cp\u003eDivision: the divison-operator is not according the IEEE 754 standard,\n it calculates the same as the % operator in Java and ECMAScript\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "Op -\u003e XPathValue -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathDiv",
        "fct-type": "function",
        "title": "xPathDiv"
      },
      "index": {
        "description": "Division the divison-operator is not according the IEEE standard it calculates the same as the operator in Java and ECMAScript",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "xPathDiv",
        "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "Path Div",
        "signature": "Op-\u003eXPathValue-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathMod",
      "description": {
        "fct-descr": "\u003cp\u003eModulo\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "Op -\u003e XPathValue -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathMod",
        "fct-type": "function",
        "title": "xPathMod"
      },
      "index": {
        "description": "Modulo",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "xPathMod",
        "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "Path Mod",
        "signature": "Op-\u003eXPathValue-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathMulti",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "Op -\u003e XPathValue -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathMulti",
        "fct-type": "function",
        "title": "xPathMulti"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "xPathMulti",
        "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "Path Multi",
        "signature": "Op-\u003eXPathValue-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathUnary",
      "description": {
        "fct-descr": "\u003cp\u003eUnary minus: the value \u003ccode\u003e\u003ca\u003eNaN\u003c/a\u003e\u003c/code\u003e is not calculatable and returned unchanged,\n all other values can be denied.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathArithmetic",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathUnary",
        "fct-type": "function",
        "title": "xPathUnary"
      },
      "index": {
        "description": "Unary minus the value NaN is not calculatable and returned unchanged all other values can be denied",
        "hierarchy": "Text XML HXT XPath XPathArithmetic",
        "module": "Text.XML.HXT.XPath.XPathArithmetic",
        "name": "xPathUnary",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Path Unary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core data types of XPath.\n   The Type NodeSet is based on the module \u003ca\u003eNavTree\u003c/a\u003e which was adapted from\n   HXML (\u003ca\u003ehttp://www.flightlab.com/~joe/hxml/\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html",
        "fct-type": "module",
        "title": "XPathDataTypes"
      },
      "index": {
        "description": "The core data types of XPath The Type NodeSet is based on the module NavTree which was adapted from HXML http www.flightlab.com joe hxml",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPathDataTypes",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Data Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:AxisSpec",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents XPath axis\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "data",
        "title": "AxisSpec"
      },
      "index": {
        "description": "Represents XPath axis",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "AxisSpec",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Axis Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConLen",
      "description": {
        "fct-descr": "\u003cp\u003eContext length\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConLen",
        "fct-type": "type",
        "title": "ConLen"
      },
      "index": {
        "description": "Context length",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "ConLen",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Con Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConNode",
      "description": {
        "fct-descr": "\u003cp\u003eContext node\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConNode",
        "fct-type": "type",
        "title": "ConNode"
      },
      "index": {
        "description": "Context node",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "ConNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Con Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConPos",
      "description": {
        "fct-descr": "\u003cp\u003eContext position\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConPos",
        "fct-type": "type",
        "title": "ConPos"
      },
      "index": {
        "description": "Context position",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "ConPos",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Con Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluation context\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Context",
        "fct-type": "type",
        "title": "Context"
      },
      "index": {
        "description": "Evaluation context",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Context",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Env",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Env",
        "fct-type": "type",
        "title": "Env"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Env",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents expression\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "Represents expression",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Expr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:FctArguments",
      "description": {
        "fct-descr": "\u003cp\u003eFunction arguments\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#FctArguments",
        "fct-type": "type",
        "title": "FctArguments"
      },
      "index": {
        "description": "Function arguments",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "FctArguments",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Fct Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:FctName",
      "description": {
        "fct-descr": "\u003cp\u003eFunction name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#FctName",
        "fct-type": "type",
        "title": "FctName"
      },
      "index": {
        "description": "Function name",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "FctName",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Fct Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:KeyTab",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#KeyTab",
        "fct-type": "type",
        "title": "KeyTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "KeyTab",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Key Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Literal",
      "description": {
        "fct-descr": "\u003cp\u003ea string\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Literal",
        "fct-type": "type",
        "title": "Literal"
      },
      "index": {
        "description": "string",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Literal",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:LocalName",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocalName",
        "fct-type": "type",
        "title": "LocalName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "LocalName",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Local Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:LocationPath",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents location path\n\u003c/p\u003e\u003cp\u003eA location path consists of a sequence of one or more location steps.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocationPath",
        "fct-type": "data",
        "title": "LocationPath"
      },
      "index": {
        "description": "Represents location path location path consists of sequence of one or more location steps",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "LocationPath",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Location Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Name",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Name",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NamePrefix",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NamePrefix",
        "fct-type": "type",
        "title": "NamePrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NamePrefix",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Name Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NavXmlTree",
      "description": {
        "fct-descr": "\u003cp\u003eNode of navigable tree representation\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NavXmlTree",
        "fct-type": "type",
        "title": "NavXmlTree"
      },
      "index": {
        "description": "Node of navigable tree representation",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NavXmlTree",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Nav Xml Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NavXmlTrees",
      "description": {
        "fct-descr": "\u003cp\u003eList of nodes of navigable tree representation\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NavXmlTrees",
        "fct-type": "type",
        "title": "NavXmlTrees"
      },
      "index": {
        "description": "List of nodes of navigable tree representation",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NavXmlTrees",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Nav Xml Trees",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodePath",
      "description": {
        "fct-descr": "\u003cp\u003epath represented as list of indices starting at root\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodePath",
        "fct-type": "type",
        "title": "NodePath"
      },
      "index": {
        "description": "path represented as list of indices starting at root",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NodePath",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Node Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodeSet",
      "description": {
        "fct-descr": "\u003cp\u003eSet of navigable trees identified by their document position (NodePath)\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "newtype",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
        "fct-type": "newtype",
        "title": "NodeSet"
      },
      "index": {
        "description": "Set of navigable trees identified by their document position NodePath",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NodeSet",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodeTest",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents XPath node-tests\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
        "fct-type": "data",
        "title": "NodeTest"
      },
      "index": {
        "description": "Represents XPath node-tests",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NodeTest",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Node Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents XPath operators\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Represents XPath operators",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Op",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA location path is either a relative or an absolute path.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "location path is either relative or an absolute path",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Path",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:VarName",
      "description": {
        "fct-descr": "\u003cp\u003eVariable name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#VarName",
        "fct-type": "type",
        "title": "VarName"
      },
      "index": {
        "description": "Variable name",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "VarName",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Var Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:VarTab",
      "description": {
        "fct-descr": "\u003cp\u003eXPath environment\n\u003c/p\u003e\u003cp\u003eAll variables are stored in the environment,\n each variable name is bound to a value.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#VarTab",
        "fct-type": "type",
        "title": "VarTab"
      },
      "index": {
        "description": "XPath environment All variables are stored in the environment each variable name is bound to value",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "VarTab",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Var Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPNumber",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a floating-point number according the IEEE 754 standard\n\u003c/p\u003e\u003cp\u003eThe standard includes a special Not-a-Number (NaN) value,\n positive and negative infinity, positive and negative zero.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "data",
        "title": "XPNumber"
      },
      "index": {
        "description": "Represents floating-point number according the IEEE standard The standard includes special Not-a-Number NaN value positive and negative infinity positive and negative zero",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPNumber",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPNumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA functions that takes a XPath result and returns a XPath result\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathFilter",
        "fct-type": "type",
        "title": "XPathFilter"
      },
      "index": {
        "description": "functions that takes XPath result and returns XPath result",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPathFilter",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathNode",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents nodetype-tests\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
        "fct-type": "data",
        "title": "XPathNode"
      },
      "index": {
        "description": "Represents nodetype-tests",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPathNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathValue",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents XPath results\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "data",
        "title": "XPathValue"
      },
      "index": {
        "description": "Represents XPath results",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPathValue",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XStep",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents location step\n\u003c/p\u003e\u003cp\u003eA location step consists of an axis, a node-test and zero or more predicates.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XStep",
        "fct-type": "data",
        "title": "XStep"
      },
      "index": {
        "description": "Represents location step location step consists of an axis node-test and zero or more predicates",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XStep",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XStep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Abs",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Abs",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
        "fct-type": "function",
        "title": "Abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Abs",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Ancestor",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Ancestor",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Ancestor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Ancestor",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Ancestor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:AncestorOrSelf",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "AncestorOrSelf",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "AncestorOrSelf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "AncestorOrSelf",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Ancestor Or Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:And",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "And",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "And",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Attribute",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attribute",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Attribute",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Child",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Child",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Child"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Child",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Descendant",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Descendant",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Descendant"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Descendant",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Descendant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:DescendantOrSelf",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "DescendantOrSelf",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "DescendantOrSelf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "DescendantOrSelf",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Descendant Or Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Div",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Div",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Div"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Div",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Eq",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Eq",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Eq",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FctExpr",
      "description": {
        "fct-descr": "\u003cp\u003ea function with a name and an optional list of arguments\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "FctExpr FctName FctArguments",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "FctExpr"
      },
      "index": {
        "description": "function with name and an optional list of arguments",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "FctExpr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Fct Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FilterExpr",
      "description": {
        "fct-descr": "\u003cp\u003efilter-expression with zero or more predicates\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "FilterExpr [Expr]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "FilterExpr"
      },
      "index": {
        "description": "filter-expression with zero or more predicates",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "FilterExpr",
        "normalized": "FilterExpr[Expr]",
        "package": "hxt-xpath",
        "partial": "Filter Expr",
        "signature": "FilterExpr[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Float",
      "description": {
        "fct-descr": "\u003cp\u003efloating-point number\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Float Float",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "Float"
      },
      "index": {
        "description": "floating-point number",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Float",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Following",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Following",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Following"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Following",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Following",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FollowingSibling",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "FollowingSibling",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "FollowingSibling"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "FollowingSibling",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Following Sibling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:GenExpr",
      "description": {
        "fct-descr": "\u003cp\u003egeneric expression with an operator and one or more operands\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "GenExpr Op [Expr]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "GenExpr"
      },
      "index": {
        "description": "generic expression with an operator and one or more operands",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "GenExpr",
        "normalized": "GenExpr Op[Expr]",
        "package": "hxt-xpath",
        "partial": "Gen Expr",
        "signature": "GenExpr Op[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Greater",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Greater",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Greater"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Greater",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Greater",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:GreaterEq",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "GreaterEq",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "GreaterEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "GreaterEq",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Greater Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Less",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Less",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Less"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Less",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Less",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LessEq",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "LessEq",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "LessEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "LessEq",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Less Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LiteralExpr",
      "description": {
        "fct-descr": "\u003cp\u003estring\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "LiteralExpr Literal",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "LiteralExpr"
      },
      "index": {
        "description": "string",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "LiteralExpr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Literal Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LocPath",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "LocPath Path [XStep]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocationPath",
        "fct-type": "function",
        "title": "LocPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "LocPath",
        "normalized": "LocPath Path[XStep]",
        "package": "hxt-xpath",
        "partial": "Loc Path",
        "signature": "LocPath Path[XStep]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Minus",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Minus",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Minus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Minus",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Mod",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Mod",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Mod",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Mult",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Mult",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Mult"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Mult",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Mult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NEq",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NEq",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "NEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NEq",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "NEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NS",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NS",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
        "fct-type": "function",
        "title": "NS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NS",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NaN",
      "description": {
        "fct-descr": "\u003cp\u003enot-a-number\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NaN",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "NaN"
      },
      "index": {
        "description": "not-a-number",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NaN",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Na",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NameTest",
      "description": {
        "fct-descr": "\u003cp\u003ename-test\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NameTest QName",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
        "fct-type": "function",
        "title": "NameTest"
      },
      "index": {
        "description": "name-test",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NameTest",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Name Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Namespace",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Namespace",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Namespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Namespace",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Neg0",
      "description": {
        "fct-descr": "\u003cp\u003enegative zero\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Neg0",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "Neg0"
      },
      "index": {
        "description": "negative zero",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Neg0",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NegInf",
      "description": {
        "fct-descr": "\u003cp\u003enegative infinity\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NegInf",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "NegInf"
      },
      "index": {
        "description": "negative infinity",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NegInf",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Neg Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NumberExpr",
      "description": {
        "fct-descr": "\u003cp\u003enumber\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NumberExpr XPNumber",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "NumberExpr"
      },
      "index": {
        "description": "number",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "NumberExpr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Number Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Or",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Or",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Or",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PI",
      "description": {
        "fct-descr": "\u003cp\u003eprocessing-instruction-test with a literal argument\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "PI String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
        "fct-type": "function",
        "title": "PI"
      },
      "index": {
        "description": "processing-instruction-test with literal argument",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "PI",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "PI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Parent",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Parent",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Parent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Parent",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PathExpr",
      "description": {
        "fct-descr": "\u003cp\u003ea path expression contains an optional filter-expression\n or an optional locationpath. one expression is urgently\n necessary, both are possible\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "PathExpr (Maybe Expr) (Maybe LocationPath)",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "PathExpr"
      },
      "index": {
        "description": "path expression contains an optional filter-expression or an optional locationpath one expression is urgently necessary both are possible",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "PathExpr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Path Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Plus",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Plus",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Plus",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Pos0",
      "description": {
        "fct-descr": "\u003cp\u003epositive zero\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Pos0",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "Pos0"
      },
      "index": {
        "description": "positive zero",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Pos0",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PosInf",
      "description": {
        "fct-descr": "\u003cp\u003epositive infinity\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "PosInf",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
        "fct-type": "function",
        "title": "PosInf"
      },
      "index": {
        "description": "positive infinity",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "PosInf",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Pos Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Preceding",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Preceding",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Preceding"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Preceding",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Preceding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PrecedingSibling",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "PrecedingSibling",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "PrecedingSibling"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "PrecedingSibling",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Preceding Sibling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Rel",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Rel",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
        "fct-type": "function",
        "title": "Rel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Rel",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Self",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Self",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
        "fct-type": "function",
        "title": "Self"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Self",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Step",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Step AxisSpec NodeTest [Expr]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XStep",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Step",
        "normalized": "Step AxisSpec NodeTest[Expr]",
        "package": "hxt-xpath",
        "partial": "Step",
        "signature": "Step AxisSpec NodeTest[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:TypeTest",
      "description": {
        "fct-descr": "\u003cp\u003eall nodetype-tests\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "TypeTest XPathNode",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
        "fct-type": "function",
        "title": "TypeTest"
      },
      "index": {
        "description": "all nodetype-tests",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "TypeTest",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Type Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Unary",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Unary",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Unary"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Unary",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Unary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Union",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Union",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "Union",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:VarExpr",
      "description": {
        "fct-descr": "\u003cp\u003evariable\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "VarExpr VarName",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
        "fct-type": "function",
        "title": "VarExpr"
      },
      "index": {
        "description": "variable",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "VarExpr",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Var Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPCommentNode",
      "description": {
        "fct-descr": "\u003cp\u003ecomment-nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPCommentNode",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
        "fct-type": "function",
        "title": "XPCommentNode"
      },
      "index": {
        "description": "comment-nodes",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPCommentNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPComment Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPNode",
      "description": {
        "fct-descr": "\u003cp\u003eall 7 nodetypes\n  (root, element, attribute, namespace, pi, comment, text)\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPNode",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
        "fct-type": "function",
        "title": "XPNode"
      },
      "index": {
        "description": "all nodetypes root element attribute namespace pi comment text",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPPINode",
      "description": {
        "fct-descr": "\u003cp\u003eprocessing-instruction-nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPPINode",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
        "fct-type": "function",
        "title": "XPPINode"
      },
      "index": {
        "description": "processing-instruction-nodes",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPPINode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPPINode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPTextNode",
      "description": {
        "fct-descr": "\u003cp\u003etext-nodes: cdata, character data\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPTextNode",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
        "fct-type": "function",
        "title": "XPTextNode"
      },
      "index": {
        "description": "text-nodes cdata character data",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPTextNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPText Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVBool",
      "description": {
        "fct-descr": "\u003cp\u003eboolean value\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPVBool Bool",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "function",
        "title": "XPVBool"
      },
      "index": {
        "description": "boolean value",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPVBool",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPVBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVError",
      "description": {
        "fct-descr": "\u003cp\u003eerror message with text\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPVError String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "function",
        "title": "XPVError"
      },
      "index": {
        "description": "error message with text",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPVError",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPVError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVNode",
      "description": {
        "fct-descr": "\u003cp\u003enode-set\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPVNode NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "function",
        "title": "XPVNode"
      },
      "index": {
        "description": "node-set",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPVNode",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPVNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVNumber",
      "description": {
        "fct-descr": "\u003cp\u003enumber according the IEEE 754 standard\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPVNumber XPNumber",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "function",
        "title": "XPVNumber"
      },
      "index": {
        "description": "number according the IEEE standard",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPVNumber",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPVNumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVString",
      "description": {
        "fct-descr": "\u003cp\u003estring value\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPVString String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
        "fct-type": "function",
        "title": "XPVString"
      },
      "index": {
        "description": "string value",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "XPVString",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPVString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:cardNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e Int",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#cardNodeSet",
        "fct-type": "function",
        "title": "cardNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "cardNodeSet",
        "normalized": "NodeSet-\u003eInt",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:deleteNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodePath -\u003e NodeSet -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#deleteNodeSet",
        "fct-type": "function",
        "title": "deleteNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "deleteNodeSet",
        "normalized": "NodePath-\u003eNodeSet-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodePath-\u003eNodeSet-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:elemsNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e [(NodePath, NavXmlTree)]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#elemsNodeSet",
        "fct-type": "function",
        "title": "elemsNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "elemsNodeSet",
        "normalized": "NodeSet-\u003e[(NodePath,NavXmlTree)]",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003e[(NodePath,NavXmlTree)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:emptyNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003enode set functions\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#emptyNodeSet",
        "fct-type": "function",
        "title": "emptyNodeSet"
      },
      "index": {
        "description": "node set functions",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "emptyNodeSet",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:fromNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e NavXmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#fromNodeSet",
        "fct-type": "function",
        "title": "fromNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "fromNodeSet",
        "normalized": "NodeSet-\u003eNavXmlTrees",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003eNavXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:headNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e NavXmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#headNodeSet",
        "fct-type": "function",
        "title": "headNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "headNodeSet",
        "normalized": "NodeSet-\u003eNavXmlTree",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003eNavXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:insertNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavXmlTree -\u003e NodeSet -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#insertNodeSet",
        "fct-type": "function",
        "title": "insertNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "insertNodeSet",
        "normalized": "NavXmlTree-\u003eNodeSet-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NavXmlTree-\u003eNodeSet-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:nullNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#nullNodeSet",
        "fct-type": "function",
        "title": "nullNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "nullNodeSet",
        "normalized": "NodeSet-\u003eBool",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:singletonNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavXmlTree -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#singletonNodeSet",
        "fct-type": "function",
        "title": "singletonNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "singletonNodeSet",
        "normalized": "NavXmlTree-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NavXmlTree-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:toNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavXmlTrees -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#toNodeSet",
        "fct-type": "function",
        "title": "toNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "toNodeSet",
        "normalized": "NavXmlTrees-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NavXmlTrees-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unNS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Map NodePath NavXmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
        "fct-type": "function",
        "title": "unNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "unNS",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unionNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeSet -\u003e NodeSet -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#unionNodeSet",
        "fct-type": "function",
        "title": "unionNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "unionNodeSet",
        "normalized": "NodeSet-\u003eNodeSet-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "NodeSet-\u003eNodeSet-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unionsNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "[NodeSet] -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#unionsNodeSet",
        "fct-type": "function",
        "title": "unionsNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "unionsNodeSet",
        "normalized": "[NodeSet]-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "[NodeSet]-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:varEnv",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "Env",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#varEnv",
        "fct-type": "function",
        "title": "varEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "varEnv",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:withNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "(NavXmlTrees -\u003e NavXmlTrees) -\u003e NodeSet -\u003e NodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#withNodeSet",
        "fct-type": "function",
        "title": "withNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "withNodeSet",
        "normalized": "(NavXmlTrees-\u003eNavXmlTrees)-\u003eNodeSet-\u003eNodeSet",
        "package": "hxt-xpath",
        "partial": "Node Set",
        "signature": "(NavXmlTrees-\u003eNavXmlTrees)-\u003eNodeSet-\u003eNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:withXPVNode",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathDataTypes",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e (NodeSet -\u003e XPathValue) -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#withXPVNode",
        "fct-type": "function",
        "title": "withXPVNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathDataTypes",
        "module": "Text.XML.HXT.XPath.XPathDataTypes",
        "name": "withXPVNode",
        "normalized": "String-\u003e(NodeSet-\u003eXPathValue)-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "XPVNode",
        "signature": "String-\u003e(NodeSet-\u003eXPathValue)-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core functions for evaluating the different types of XPath expressions.\n   Each \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e-constructor is mapped to an evaluation function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html",
        "fct-type": "module",
        "title": "XPathEval"
      },
      "index": {
        "description": "The core functions for evaluating the different types of XPath expressions Each Expr constructor is mapped to an evaluation function",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "XPathEval",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Eval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:addRoot-39-",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "XmlTree -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#addRoot%27",
        "fct-type": "function",
        "title": "addRoot'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "addRoot'",
        "normalized": "XmlTree-\u003eXmlTree",
        "package": "hxt-xpath",
        "partial": "Root'",
        "signature": "XmlTree-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:evalExpr",
      "description": {
        "fct-descr": "\u003cp\u003eThe main evaluation entry point.\n Each XPath-\u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e is mapped to an evaluation function. The \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e-parameter contains the set of global variables\n for the evaluator, the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e-parameter the root of the tree in which the expression is evaluated.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Env -\u003e Context -\u003e Expr -\u003e XPathFilter",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#evalExpr",
        "fct-type": "function",
        "title": "evalExpr"
      },
      "index": {
        "description": "The main evaluation entry point Each XPath Expr is mapped to an evaluation function The Env parameter contains the set of global variables for the evaluator the Context parameter the root of the tree in which the expression is evaluated",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "evalExpr",
        "normalized": "Env-\u003eContext-\u003eExpr-\u003eXPathFilter",
        "package": "hxt-xpath",
        "partial": "Expr",
        "signature": "Env-\u003eContext-\u003eExpr-\u003eXPathFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPath",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of a document by a string representing a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of a document via XPath.\n The string argument must be a XPath expression with an absolute location path,\n the argument tree must be a complete document tree.\n Result is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are converted to text nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPath",
        "fct-type": "function",
        "title": "getXPath"
      },
      "index": {
        "description": "Select parts of document by string representing XPath expression The main filter for selecting parts of document via XPath The string argument must be XPath expression with an absolute location path the argument tree must be complete document tree Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are converted to text nodes",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPath",
        "normalized": "String-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath",
        "signature": "String-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPath-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of a document by an already parsed XPath expression\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Expr -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPath%27",
        "fct-type": "function",
        "title": "getXPath'"
      },
      "index": {
        "description": "Select parts of document by an already parsed XPath expression",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPath'",
        "normalized": "Expr-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath'",
        "signature": "Expr-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSet-39-",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the node set of an XPath query\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e XmlTree -\u003e XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSet%27",
        "fct-type": "function",
        "title": "getXPathNodeSet'"
      },
      "index": {
        "description": "compute the node set of an XPath query",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathNodeSet'",
        "normalized": "String-\u003eXmlTree-\u003eXmlNodeSet",
        "package": "hxt-xpath",
        "partial": "XPath Node Set'",
        "signature": "String-\u003eXmlTree-\u003eXmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSet-39--39-",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the node set of an XPath query for an already parsed XPath expr\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Expr -\u003e XmlTree -\u003e XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSet%27%27",
        "fct-type": "function",
        "title": "getXPathNodeSet''"
      },
      "index": {
        "description": "compute the node set of an XPath query for an already parsed XPath expr",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathNodeSet''",
        "normalized": "Expr-\u003eXmlTree-\u003eXmlNodeSet",
        "package": "hxt-xpath",
        "partial": "XPath Node Set''",
        "signature": "Expr-\u003eXmlTree-\u003eXmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSetWithNsEnv-39-",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the node set of a namespace aware XPath query\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSetWithNsEnv%27",
        "fct-type": "function",
        "title": "getXPathNodeSetWithNsEnv'"
      },
      "index": {
        "description": "compute the node set of namespace aware XPath query",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathNodeSetWithNsEnv'",
        "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlNodeSet",
        "package": "hxt-xpath",
        "partial": "XPath Node Set With Ns Env'",
        "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTrees",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of an XML tree by a string representing an XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of an arbitrary XML tree via XPath.\n The string argument must be a XPath expression with an absolute location path,\n There are no restrictions on the arument tree.\n\u003c/p\u003e\u003cp\u003eNo canonicalization is performed before evaluating the query\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTrees",
        "fct-type": "function",
        "title": "getXPathSubTrees"
      },
      "index": {
        "description": "Select parts of an XML tree by string representing an XPath expression The main filter for selecting parts of an arbitrary XML tree via XPath The string argument must be XPath expression with an absolute location path There are no restrictions on the arument tree No canonicalization is performed before evaluating the query Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathSubTrees",
        "normalized": "String-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath Sub Trees",
        "signature": "String-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTrees-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of an XML tree by an XPath expression.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Expr -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTrees%27",
        "fct-type": "function",
        "title": "getXPathSubTrees'"
      },
      "index": {
        "description": "Select parts of an XML tree by an XPath expression",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathSubTrees'",
        "normalized": "Expr-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath Sub Trees'",
        "signature": "Expr-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTreesWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathSubTrees\u003c/a\u003e\u003c/code\u003e but with namespace aware XPath expression\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTreesWithNsEnv",
        "fct-type": "function",
        "title": "getXPathSubTreesWithNsEnv"
      },
      "index": {
        "description": "Same as getXPathSubTrees but with namespace aware XPath expression",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathSubTreesWithNsEnv",
        "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath Sub Trees With Ns Env",
        "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSelect parts of a document by a namespace aware XPath expression.\n\u003c/p\u003e\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003egetXPath\u003c/a\u003e\u003c/code\u003e but the prefix:localpart names in the XPath expression\n are interpreted with respect to the given namespace environment\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathWithNsEnv",
        "fct-type": "function",
        "title": "getXPathWithNsEnv"
      },
      "index": {
        "description": "Select parts of document by namespace aware XPath expression Works like getXPath but the prefix localpart names in the XPath expression are interpreted with respect to the given namespace environment",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "getXPathWithNsEnv",
        "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "XPath With Ns Env",
        "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:parseXPathExpr",
      "description": {
        "fct-descr": "\u003cp\u003eparse an XPath expr string\n and return an expr tree or an error message.\n Namespaces are not taken into account.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e Either String Expr",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#parseXPathExpr",
        "fct-type": "function",
        "title": "parseXPathExpr"
      },
      "index": {
        "description": "parse an XPath expr string and return an expr tree or an error message Namespaces are not taken into account",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "parseXPathExpr",
        "normalized": "String-\u003eEither String Expr",
        "package": "hxt-xpath",
        "partial": "XPath Expr",
        "signature": "String-\u003eEither String Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:parseXPathExprWithNsEnv",
      "description": {
        "fct-descr": "\u003cp\u003eparse an XPath expr string with a namespace environment for qualified names in the XPath expr\n and return an expr tree or an error message\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathEval",
        "fct-package": "hxt-xpath",
        "fct-signature": "Attributes -\u003e String -\u003e Either String Expr",
        "fct-source": "src/Text-XML-HXT-XPath-XPathEval.html#parseXPathExprWithNsEnv",
        "fct-type": "function",
        "title": "parseXPathExprWithNsEnv"
      },
      "index": {
        "description": "parse an XPath expr string with namespace environment for qualified names in the XPath expr and return an expr tree or an error message",
        "hierarchy": "Text XML HXT XPath XPathEval",
        "module": "Text.XML.HXT.XPath.XPathEval",
        "name": "parseXPathExprWithNsEnv",
        "normalized": "Attributes-\u003eString-\u003eEither String Expr",
        "package": "hxt-xpath",
        "partial": "XPath Expr With Ns Env",
        "signature": "Attributes-\u003eString-\u003eEither String Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module contains the core-functions of the XPath function library.\n   All functions are implemented as XFct. Each XFct contains the evaluation context,\n   the variable environment and the function arguments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html",
        "fct-type": "module",
        "title": "XPathFct"
      },
      "index": {
        "description": "The module contains the core-functions of the XPath function library All functions are implemented as XFct Each XFct contains the evaluation context the variable environment and the function arguments",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "XPathFct",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Fct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#t:XFct",
      "description": {
        "fct-descr": "\u003cp\u003eType signature for all functions which can be used in the XPath module.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#XFct",
        "fct-type": "type",
        "title": "XFct"
      },
      "index": {
        "description": "Type signature for all functions which can be used in the XPath module",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "XFct",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XFct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:evalFct",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a function.\n Calculation of the function value is done by looking up the function name in the function table,\n check the number of arguments and calculate the funtion, if no\n argument evaluation returns an error.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the function value as \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "FctName -\u003e Env -\u003e Context -\u003e [XPathValue] -\u003e XPathValue",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#evalFct",
        "fct-type": "function",
        "title": "evalFct"
      },
      "index": {
        "description": "Evaluates function Calculation of the function value is done by looking up the function name in the function table check the number of arguments and calculate the funtion if no argument evaluation returns an error returns the function value as XPathValue",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "evalFct",
        "normalized": "FctName-\u003eEnv-\u003eContext-\u003e[XPathValue]-\u003eXPathValue",
        "package": "hxt-xpath",
        "partial": "Fct",
        "signature": "FctName-\u003eEnv-\u003eContext-\u003e[XPathValue]-\u003eXPathValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getConvFct",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the conversion function for the XPath results: string, boolean and number\n A nodeset can not be converted.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathValue -\u003e Maybe XFct",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#getConvFct",
        "fct-type": "function",
        "title": "getConvFct"
      },
      "index": {
        "description": "Returns the conversion function for the XPath results string boolean and number nodeset can not be converted",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "getConvFct",
        "normalized": "XPathValue-\u003eMaybe XFct",
        "package": "hxt-xpath",
        "partial": "Conv Fct",
        "signature": "XPathValue-\u003eMaybe XFct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getKeyTab",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the table of keys, needed by xslt, from the environment\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "Env -\u003e KeyTab",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#getKeyTab",
        "fct-type": "function",
        "title": "getKeyTab"
      },
      "index": {
        "description": "Returns the table of keys needed by xslt from the environment",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "getKeyTab",
        "normalized": "Env-\u003eKeyTab",
        "package": "hxt-xpath",
        "partial": "Key Tab",
        "signature": "Env-\u003eKeyTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getVarTab",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the table of variables from the environment\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "Env -\u003e VarTab",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#getVarTab",
        "fct-type": "function",
        "title": "getVarTab"
      },
      "index": {
        "description": "Returns the table of variables from the environment",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "getVarTab",
        "normalized": "Env-\u003eVarTab",
        "package": "hxt-xpath",
        "partial": "Var Tab",
        "signature": "Env-\u003eVarTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:isNotInNodeList",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a node is not a part of a node list. Needed to implement matching & testing in xslt.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavXmlTree -\u003e [NavXmlTree] -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#isNotInNodeList",
        "fct-type": "function",
        "title": "isNotInNodeList"
      },
      "index": {
        "description": "Check whether node is not part of node list Needed to implement matching testing in xslt",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "isNotInNodeList",
        "normalized": "NavXmlTree-\u003e[NavXmlTree]-\u003eBool",
        "package": "hxt-xpath",
        "partial": "Not In Node List",
        "signature": "NavXmlTree-\u003e[NavXmlTree]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:stringValue",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the string-value of a node,\n the value of a namespace node is not supported\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "NavXmlTree -\u003e XPathValue",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#stringValue",
        "fct-type": "function",
        "title": "stringValue"
      },
      "index": {
        "description": "Returns the string-value of node the value of namespace node is not supported",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "stringValue",
        "normalized": "NavXmlTree-\u003eXPathValue",
        "package": "hxt-xpath",
        "partial": "Value",
        "signature": "NavXmlTree-\u003eXPathValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:toXValue",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list of different \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e types in a list of one \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fct :  the conversion function\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "XFct -\u003e Context -\u003e Env -\u003e [XPathValue] -\u003e [XPathValue]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#toXValue",
        "fct-type": "function",
        "title": "toXValue"
      },
      "index": {
        "description": "Converts list of different XPathValue types in list of one XPathValue type parameter fct the conversion function",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "toXValue",
        "normalized": "XFct-\u003eContext-\u003eEnv-\u003e[XPathValue]-\u003e[XPathValue]",
        "package": "hxt-xpath",
        "partial": "XValue",
        "signature": "XFct-\u003eContext-\u003eEnv-\u003e[XPathValue]-\u003e[XPathValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xboolean",
      "description": {
        "fct-descr": "\u003cp\u003eboolean boolean(object): converts its argument to a boolean value\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "XFct",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#xboolean",
        "fct-type": "function",
        "title": "xboolean"
      },
      "index": {
        "description": "boolean boolean object converts its argument to boolean value",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "xboolean",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xnumber",
      "description": {
        "fct-descr": "\u003cp\u003enumber number(object?): converts its argument to a number\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "XFct",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#xnumber",
        "fct-type": "function",
        "title": "xnumber"
      },
      "index": {
        "description": "number number object converts its argument to number",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "xnumber",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xstring",
      "description": {
        "fct-descr": "\u003cp\u003estring string(object?): converts an object to a string\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathFct",
        "fct-package": "hxt-xpath",
        "fct-signature": "XFct",
        "fct-source": "src/Text-XML-HXT-XPath-XPathFct.html#xstring",
        "fct-type": "function",
        "title": "xstring"
      },
      "index": {
        "description": "string string object converts an object to string",
        "hierarchy": "Text XML HXT XPath XPathFct",
        "module": "Text.XML.HXT.XPath.XPathFct",
        "name": "xstring",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003expath keywords\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html",
        "fct-type": "module",
        "title": "XPathKeywords"
      },
      "index": {
        "description": "xpath keywords",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "XPathKeywords",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Keywords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_ancestor",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_ancestor",
        "fct-type": "function",
        "title": "a_ancestor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_ancestor",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_ancestor_or_self",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_ancestor_or_self",
        "fct-type": "function",
        "title": "a_ancestor_or_self"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_ancestor_or_self",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_attribute",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_attribute",
        "fct-type": "function",
        "title": "a_attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_attribute",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_child",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_child",
        "fct-type": "function",
        "title": "a_child"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_child",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_descendant",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_descendant",
        "fct-type": "function",
        "title": "a_descendant"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_descendant",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_descendant_or_self",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_descendant_or_self",
        "fct-type": "function",
        "title": "a_descendant_or_self"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_descendant_or_self",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_following",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_following",
        "fct-type": "function",
        "title": "a_following"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_following",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_following_sibling",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_following_sibling",
        "fct-type": "function",
        "title": "a_following_sibling"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_following_sibling",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_namespace",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_namespace",
        "fct-type": "function",
        "title": "a_namespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_namespace",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_parent",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_parent",
        "fct-type": "function",
        "title": "a_parent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_parent",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_preceding",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_preceding",
        "fct-type": "function",
        "title": "a_preceding"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_preceding",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_preceding_sibling",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_preceding_sibling",
        "fct-type": "function",
        "title": "a_preceding_sibling"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_preceding_sibling",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_self",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_self",
        "fct-type": "function",
        "title": "a_self"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "a_self",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_comment",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_comment",
        "fct-type": "function",
        "title": "n_comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "n_comment",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_node",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_node",
        "fct-type": "function",
        "title": "n_node"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "n_node",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_processing_instruction",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_processing_instruction",
        "fct-type": "function",
        "title": "n_processing_instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "n_processing_instruction",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_text",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathKeywords",
        "fct-package": "hxt-xpath",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_text",
        "fct-type": "function",
        "title": "n_text"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathKeywords",
        "module": "Text.XML.HXT.XPath.XPathKeywords",
        "name": "n_text",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe XPath Parser\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathParser",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathParser.html",
        "fct-type": "module",
        "title": "XPathParser"
      },
      "index": {
        "description": "The XPath Parser",
        "hierarchy": "Text XML HXT XPath XPathParser",
        "module": "Text.XML.HXT.XPath.XPathParser",
        "name": "XPathParser",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#v:parseNumber",
      "description": {
        "fct-descr": "\u003cp\u003eparsing a number, parseNumber is used in \u003ca\u003eXPathFct\u003c/a\u003e\n by the number function\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the parsed number as \u003ccode\u003e\u003ca\u003eXPNumber\u003c/a\u003e\u003c/code\u003e float\n                or \u003ccode\u003e\u003ca\u003eXPVNumber\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNaN\u003c/a\u003e\u003c/code\u003e in case of error\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathParser",
        "fct-package": "hxt-xpath",
        "fct-signature": "String -\u003e XPathValue",
        "fct-source": "src/Text-XML-HXT-XPath-XPathParser.html#parseNumber",
        "fct-type": "function",
        "title": "parseNumber"
      },
      "index": {
        "description": "parsing number parseNumber is used in XPathFct by the number function returns the parsed number as XPNumber float or XPVNumber NaN in case of error",
        "hierarchy": "Text XML HXT XPath XPathParser",
        "module": "Text.XML.HXT.XPath.XPathParser",
        "name": "parseNumber",
        "normalized": "String-\u003eXPathValue",
        "package": "hxt-xpath",
        "partial": "Number",
        "signature": "String-\u003eXPathValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#v:parseXPath",
      "description": {
        "fct-descr": "\u003cp\u003ethe main entry point:\n parsing a XPath expression\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathParser",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathParser Expr",
        "fct-source": "src/Text-XML-HXT-XPath-XPathParser.html#parseXPath",
        "fct-type": "function",
        "title": "parseXPath"
      },
      "index": {
        "description": "the main entry point parsing XPath expression",
        "hierarchy": "Text XML HXT XPath XPathParser",
        "module": "Text.XML.HXT.XPath.XPathParser",
        "name": "parseXPath",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an XPath result set into a node set\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html",
        "fct-type": "module",
        "title": "XPathToNodeSet"
      },
      "index": {
        "description": "Convert an XPath result set into node set",
        "hierarchy": "Text XML HXT XPath XPathToNodeSet",
        "module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "name": "XPathToNodeSet",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath To Node Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#v:emptyXmlNodeSet",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "fct-package": "hxt-xpath",
        "fct-signature": "XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html#emptyXmlNodeSet",
        "fct-type": "function",
        "title": "emptyXmlNodeSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathToNodeSet",
        "module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "name": "emptyXmlNodeSet",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "Xml Node Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#v:xPValue2XmlNodeSet",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a a XPath-value into a XmlNodeSet represented by a tree structure\n\u003c/p\u003e\u003cp\u003eThe XmlNodeSet can be used to traverse a tree an process all\n marked nodes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathValue -\u003e XmlNodeSet",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html#xPValue2XmlNodeSet",
        "fct-type": "function",
        "title": "xPValue2XmlNodeSet"
      },
      "index": {
        "description": "Convert XPath-value into XmlNodeSet represented by tree structure The XmlNodeSet can be used to traverse tree an process all marked nodes",
        "hierarchy": "Text XML HXT XPath XPathToNodeSet",
        "module": "Text.XML.HXT.XPath.XPathToNodeSet",
        "name": "xPValue2XmlNodeSet",
        "normalized": "XPathValue-\u003eXmlNodeSet",
        "package": "hxt-xpath",
        "partial": "PValue Xml Node Set",
        "signature": "XPathValue-\u003eXmlNodeSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat an expression or value in tree- or string-representation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html",
        "fct-type": "module",
        "title": "XPathToString"
      },
      "index": {
        "description": "Format an expression or value in tree or string-representation",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "XPathToString",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath To String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:expr2XPathTree",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a parsed XPath-expression in tree representation.\n Text output is done by \u003ccode\u003e\u003ca\u003eformatXmlTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "Expr -\u003e XPathTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#expr2XPathTree",
        "fct-type": "function",
        "title": "expr2XPathTree"
      },
      "index": {
        "description": "Format parsed XPath-expression in tree representation Text output is done by formatXmlTree",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "expr2XPathTree",
        "normalized": "Expr-\u003eXPathTree",
        "package": "hxt-xpath",
        "partial": "XPath Tree",
        "signature": "Expr-\u003eXPathTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:formatXPathTree",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "Expr -\u003e String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#formatXPathTree",
        "fct-type": "function",
        "title": "formatXPathTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "formatXPathTree",
        "normalized": "Expr-\u003eString",
        "package": "hxt-xpath",
        "partial": "XPath Tree",
        "signature": "Expr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:nt2XPathTree",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "NodeTest -\u003e XPathTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#nt2XPathTree",
        "fct-type": "function",
        "title": "nt2XPathTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "nt2XPathTree",
        "normalized": "NodeTest-\u003eXPathTree",
        "package": "hxt-xpath",
        "partial": "XPath Tree",
        "signature": "NodeTest-\u003eXPathTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:pred2XPathTree",
      "description": {
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "[Expr] -\u003e XPathTree",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#pred2XPathTree",
        "fct-type": "function",
        "title": "pred2XPathTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "pred2XPathTree",
        "normalized": "[Expr]-\u003eXPathTree",
        "package": "hxt-xpath",
        "partial": "XPath Tree",
        "signature": "[Expr]-\u003eXPathTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:toXPathTree",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an navigable tree in a xmltree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "[NavTree a] -\u003e [NTree a]",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#toXPathTree",
        "fct-type": "function",
        "title": "toXPathTree"
      },
      "index": {
        "description": "Convert an navigable tree in xmltree",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "toXPathTree",
        "normalized": "[NavTree a]-\u003e[NTree a]",
        "package": "hxt-xpath",
        "partial": "XPath Tree",
        "signature": "[NavTree a]-\u003e[NTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:xPValue2String",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a XPath-value in string representation.\n Text output is done by \u003ccode\u003e\u003ca\u003eformatXmlTree\u003c/a\u003e\u003c/code\u003e for node-sets (trees),\n all other values are represented as strings.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathValue -\u003e String",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#xPValue2String",
        "fct-type": "function",
        "title": "xPValue2String"
      },
      "index": {
        "description": "Format XPath-value in string representation Text output is done by formatXmlTree for node-sets trees all other values are represented as strings",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "xPValue2String",
        "normalized": "XPathValue-\u003eString",
        "package": "hxt-xpath",
        "partial": "PValue String",
        "signature": "XPathValue-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:xPValue2XmlTrees",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a a XPath-value into XmlTrees.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.XPath.XPathToString",
        "fct-package": "hxt-xpath",
        "fct-signature": "XPathValue -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-XPath-XPathToString.html#xPValue2XmlTrees",
        "fct-type": "function",
        "title": "xPValue2XmlTrees"
      },
      "index": {
        "description": "Convert XPath-value into XmlTrees",
        "hierarchy": "Text XML HXT XPath XPathToString",
        "module": "Text.XML.HXT.XPath.XPathToString",
        "name": "xPValue2XmlTrees",
        "normalized": "XPathValue-\u003eXmlTrees",
        "package": "hxt-xpath",
        "partial": "PValue Xml Trees",
        "signature": "XPathValue-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports elements from the basic libraries:\n XPathEval, XPathToString and XPathParser\n\u003c/p\u003e\u003cp\u003eAuthor : Torben Kuseler\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.XPath",
        "fct-package": "hxt-xpath",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-XPath.html",
        "fct-type": "module",
        "title": "XPath"
      },
      "index": {
        "description": "This helper module exports elements from the basic libraries XPathEval XPathToString and XPathParser Author Torben Kuseler",
        "hierarchy": "Text XML HXT XPath",
        "module": "Text.XML.HXT.XPath",
        "name": "XPath",
        "normalized": "",
        "package": "hxt-xpath",
        "partial": "XPath",
        "signature": ""
      }
    }
  }
]