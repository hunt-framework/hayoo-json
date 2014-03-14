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
        "word": "hxt-xpath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMost of the XPath arrows come in two versions,\n   one without dealing with namespaces, element and attribute names\n   in XPath expressions are taken as they ar ignoring any prefix:localname structure.\n\u003c/p\u003e\u003cp\u003eThe second variant uses a namespace environment for associating the right\n   namespace for the appropriate prefix. An entry for the empty prefix\n   defines the default namespace for the expression.\n\u003c/p\u003e\u003cp\u003eThe second variant should be used, when in the application namespaces\n   are significant, that means when namespace propagation is done for\n   the documents to be processed.\n\u003c/p\u003e\u003cp\u003eThe XPath evaluator computes a result, which can be a simple value\n   like a string or number, or a node set. The nodes in these sets\n   are identified by their position in the document tree.\n   Node sets are returned as a list of XmlTrees with respect to the\n   document order.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "Arrows",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-Arrows.html",
          "type": "module"
        },
        "index": {
          "description": "Most of the XPath arrows come in two versions one without dealing with namespaces element and attribute names in XPath expressions are taken as they ar ignoring any prefix localname structure The second variant uses namespace environment for associating the right namespace for the appropriate prefix An entry for the empty prefix defines the default namespace for the expression The second variant should be used when in the application namespaces are significant that means when namespace propagation is done for the documents to be processed The XPath evaluator computes result which can be simple value like string or number or node set The nodes in these sets are identified by their position in the document tree Node sets are returned as list of XmlTrees with respect to the document order",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "Arrows",
          "package": "hxt-xpath",
          "partial": "Arrows",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute a node set from a tree, containing all nodes including attribute nodes\n elected by the predicate arrow\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getElemAndAttrNodeSet",
          "package": "hxt-xpath",
          "signature": "a XmlTree XmlTree -\u003e a XmlTree XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getElemAndAttrNodeSet",
          "type": "function"
        },
        "index": {
          "description": "compute node set from tree containing all nodes including attribute nodes elected by the predicate arrow",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getElemAndAttrNodeSet",
          "normalized": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
          "package": "hxt-xpath",
          "partial": "Elem And Attr Node Set",
          "signature": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getElemAndAttrNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute a node set from a tree, containing all nodes selected by the predicate arrow\n\u003c/p\u003e\u003cp\u003ecomputation of the set of element nodes with name \"a\" is done with\n\u003c/p\u003e\u003cpre\u003e getElemNodeSet (hasName \"a\")\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getElemNodeSet",
          "package": "hxt-xpath",
          "signature": "a XmlTree XmlTree -\u003e a XmlTree XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getElemNodeSet",
          "type": "function"
        },
        "index": {
          "description": "compute node set from tree containing all nodes selected by the predicate arrow computation of the set of element nodes with name is done with getElemNodeSet hasName",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getElemNodeSet",
          "normalized": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
          "package": "hxt-xpath",
          "partial": "Elem Node Set",
          "signature": "a XmlTree XmlTree-\u003ea XmlTree XmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getElemNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect all subtrees specified by a previously computed node set\n\u003c/p\u003e\u003cp\u003ethe following law holds:\n\u003c/p\u003e\u003cpre\u003e getFromNodeSet $\u003c getElemNodeSet f == multi f\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getFromNodeSet",
          "package": "hxt-xpath",
          "signature": "XmlNodeSet -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getFromNodeSet",
          "type": "function"
        },
        "index": {
          "description": "select all subtrees specified by previously computed node set the following law holds getFromNodeSet getElemNodeSet multi",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getFromNodeSet",
          "normalized": "XmlNodeSet-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "From Node Set",
          "signature": "XmlNodeSet-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getFromNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a set of nodes via an XPath expression from an arbitray XML tree\n\u003c/p\u003e\u003cp\u003eThe result is a set of \"pointers\" to nodes. This set can be used to\n access or modify the values of the subnodes in subsequent calls to \u003ccode\u003e\u003ca\u003egetFromNodeSet\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eprocessFromNodeSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function enables for parsing an XPath expressions and traversing the tree for node selection once\n and reuse this result possibly many times for later selection and modification operations.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathNodeSet",
          "package": "hxt-xpath",
          "signature": "String -\u003e a XmlTree XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathNodeSet",
          "type": "function"
        },
        "index": {
          "description": "Select set of nodes via an XPath expression from an arbitray XML tree The result is set of pointers to nodes This set can be used to access or modify the values of the subnodes in subsequent calls to getFromNodeSet or processFromNodeSet This function enables for parsing an XPath expressions and traversing the tree for node selection once and reuse this result possibly many times for later selection and modification operations",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathNodeSet",
          "normalized": "String-\u003ea XmlTree XmlNodeSet",
          "package": "hxt-xpath",
          "partial": "XPath Node Set",
          "signature": "String-\u003ea XmlTree XmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of an arbitrary XML tree by a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of an arbitrary XML tree via XPath.\n The string argument must be a XPath expression with an absolute location path,\n There are no restrictions on the argument tree.\n\u003c/p\u003e\u003cp\u003eNo canonicalization is performed before evaluating the query\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTrees",
          "package": "hxt-xpath",
          "signature": "String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTrees",
          "type": "function"
        },
        "index": {
          "description": "Select parts of an arbitrary XML tree by XPath expression The main filter for selecting parts of an arbitrary XML tree via XPath The string argument must be XPath expression with an absolute location path There are no restrictions on the argument tree No canonicalization is performed before evaluating the query Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTrees",
          "normalized": "String-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees",
          "signature": "String-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of a whole XML document with root node by a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of a document via XPath.\n\u003c/p\u003e\u003cp\u003eThe string argument must be a XPath expression with an absolute location path,\n the argument tree must be a complete document tree.\n\u003c/p\u003e\u003cp\u003eBefore evaluating the xpath query, the document is canonicalized\n with \u003ccode\u003e\u003ca\u003ecanonicalizeForXPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesInDoc",
          "package": "hxt-xpath",
          "signature": "String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesInDoc",
          "type": "function"
        },
        "index": {
          "description": "Select parts of whole XML document with root node by XPath expression The main filter for selecting parts of document via XPath The string argument must be XPath expression with an absolute location path the argument tree must be complete document tree Before evaluating the xpath query the document is canonicalized with canonicalizeForXPath Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesInDoc",
          "normalized": "String-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees In Doc",
          "signature": "String-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesInDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathTreesInDoc\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesInDocWithNsEnv",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesInDocWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "Same as getXPathTreesInDoc but with namespace environment for the XPath names",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesInDocWithNsEnv",
          "normalized": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees In Doc With Ns Env",
          "signature": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesInDocWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathTrees\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesWithNsEnv",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#getXPathTreesWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "Same as getXPathTrees but with namespace environment for the XPath names",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "getXPathTreesWithNsEnv",
          "normalized": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees With Ns Env",
          "signature": "Attributes-\u003eString-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:getXPathTreesWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess all subtrees specified by a previously computed node set in bottom up manner\n\u003c/p\u003e\u003cp\u003ethe following law should hold:\n\u003c/p\u003e\u003cpre\u003e processFromNodeSet g $\u003c getElemNodeSet f == processBottomUp (g `when` f)\n\u003c/pre\u003e\u003cp\u003ewhen attributes are contained in the node set (see \u003ccode\u003e\u003ca\u003egetElemAndAttrNodeSet\u003c/a\u003e\u003c/code\u003e), these are processed\n after the children and before the node itself\n\u003c/p\u003e\u003cp\u003ethe advantage of processFromNodeSet is the separation of the selection of set of nodes to be processed (e.g. modified)\n from the real proccessing. The selection sometimes can be done once, the processing possibly many times.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processFromNodeSet",
          "package": "hxt-xpath",
          "signature": "a XmlTree XmlTree -\u003e XmlNodeSet -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#processFromNodeSet",
          "type": "function"
        },
        "index": {
          "description": "process all subtrees specified by previously computed node set in bottom up manner the following law should hold processFromNodeSet getElemNodeSet processBottomUp when when attributes are contained in the node set see getElemAndAttrNodeSet these are processed after the children and before the node itself the advantage of processFromNodeSet is the separation of the selection of set of nodes to be processed e.g modified from the real proccessing The selection sometimes can be done once the processing possibly many times",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processFromNodeSet",
          "normalized": "a XmlTree XmlTree-\u003eXmlNodeSet-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "From Node Set",
          "signature": "a XmlTree XmlTree-\u003eXmlNodeSet-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processFromNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess all subtrees selected by an XPath expression\n\u003c/p\u003e\u003cp\u003ethe following law holds:\n\u003c/p\u003e\u003cpre\u003e processXPathTrees p xpathExpr == processFromNodeSet p $\u003c getXPathNodeSet xpathExpr\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processXPathTrees",
          "package": "hxt-xpath",
          "signature": "a XmlTree XmlTree -\u003e String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#processXPathTrees",
          "type": "function"
        },
        "index": {
          "description": "process all subtrees selected by an XPath expression the following law holds processXPathTrees xpathExpr processFromNodeSet getXPathNodeSet xpathExpr",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processXPathTrees",
          "normalized": "a XmlTree XmlTree-\u003eString-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees",
          "signature": "a XmlTree XmlTree-\u003eString-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processXPathTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eprocessXPathTrees\u003c/a\u003e\u003c/code\u003e but with namespace environment for the XPath names\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processXPathTreesWithNsEnv",
          "package": "hxt-xpath",
          "signature": "a XmlTree XmlTree -\u003e Attributes -\u003e String -\u003e a XmlTree XmlTree",
          "source": "src/Text-XML-HXT-XPath-Arrows.html#processXPathTreesWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "Same as processXPathTrees but with namespace environment for the XPath names",
          "hierarchy": "Text XML HXT XPath Arrows",
          "module": "Text.XML.HXT.XPath.Arrows",
          "name": "processXPathTreesWithNsEnv",
          "normalized": "a XmlTree XmlTree-\u003eAttributes-\u003eString-\u003ea XmlTree XmlTree",
          "package": "hxt-xpath",
          "partial": "XPath Trees With Ns Env",
          "signature": "a XmlTree XmlTree-\u003eAttributes-\u003eString-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-Arrows.html#v:processXPathTreesWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNavigable tree structure which allow a program to traverse\n for XPath expressions\n copied and modified from HXML (\u003ca\u003ehttp://www.flightlab.com/~joe/hxml/\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NavTree",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-NavTree.html",
          "type": "module"
        },
        "index": {
          "description": "Navigable tree structure which allow program to traverse for XPath expressions copied and modified from HXML http www.flightlab.com joe hxml",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NavTree",
          "package": "hxt-xpath",
          "partial": "Nav Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enavigable tree with nodes of type node\n\u003c/p\u003e\u003cp\u003ea navigable tree consists of a n-ary tree for the current fragment tree,\n a navigable tree for all ancestors, and two n-ary trees for\n the previous- and following siblings\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NavTree",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "data"
        },
        "index": {
          "description": "navigable tree with nodes of type node navigable tree consists of n-ary tree for the current fragment tree navigable tree for all ancestors and two n-ary trees for the previous and following siblings",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NavTree",
          "package": "hxt-xpath",
          "partial": "Nav Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#t:NavTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NT",
          "package": "hxt-xpath",
          "signature": "NT",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "NT",
          "package": "hxt-xpath",
          "partial": "NT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:NT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestorAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#ancestorAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestorAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestorAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestorOrSelfAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#ancestorOrSelfAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestorOrSelfAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Or Self Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestorOrSelfAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestors",
          "package": "hxt-xpath",
          "signature": "[NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ancestors",
          "normalized": "[NavTree a]",
          "package": "hxt-xpath",
          "signature": "[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ancestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "attributeAxis",
          "package": "hxt-xpath",
          "signature": "NavTree XNode -\u003e [NavTree XNode]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#attributeAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "attributeAxis",
          "normalized": "NavTree XNode-\u003e[NavTree XNode]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree XNode-\u003e[NavTree XNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:attributeAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "childAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#childAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "childAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:childAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction for selecting all children of a tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "childrenNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#childrenNT",
          "type": "function"
        },
        "index": {
          "description": "function for selecting all children of tree",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "childrenNT",
          "normalized": "NavTree a-\u003e[NTree a]",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003e[NTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:childrenNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction for selecting the value of the current fragment tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "dataNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e a",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#dataNT",
          "type": "function"
        },
        "index": {
          "description": "function for selecting the value of the current fragment tree",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "dataNT",
          "normalized": "NavTree a-\u003ea",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:dataNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "descendantAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#descendantAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "descendantAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:descendantAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "descendantOrSelfAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#descendantOrSelfAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "descendantOrSelfAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Or Self Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:descendantOrSelfAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "downNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e Maybe (NavTree a)",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#downNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "downNT",
          "normalized": "NavTree a-\u003eMaybe(NavTree a)",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eMaybe(NavTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:downNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#followingAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingSiblingAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#followingSiblingAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingSiblingAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Sibling Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingSiblingAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingSiblings",
          "package": "hxt-xpath",
          "signature": "[NTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "followingSiblings",
          "normalized": "[NTree a]",
          "package": "hxt-xpath",
          "partial": "Siblings",
          "signature": "[NTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:followingSiblings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "getChildrenNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#getChildrenNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "getChildrenNT",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Children NT",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:getChildrenNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eposition of tree in parent\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "indexNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e Int",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#indexNT",
          "type": "function"
        },
        "index": {
          "description": "position of tree in parent",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "indexNT",
          "normalized": "NavTree a-\u003eInt",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:indexNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "leftNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e Maybe (NavTree a)",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#leftNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "leftNT",
          "normalized": "NavTree a-\u003eMaybe(NavTree a)",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eMaybe(NavTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:leftNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "maybePlus",
          "package": "hxt-xpath",
          "signature": "(a -\u003e Maybe a) -\u003e a -\u003e [a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#maybePlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "maybePlus",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
          "package": "hxt-xpath",
          "partial": "Plus",
          "signature": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:maybePlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "maybeStar",
          "package": "hxt-xpath",
          "signature": "(a -\u003e Maybe a) -\u003e a -\u003e [a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#maybeStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "maybeStar",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
          "package": "hxt-xpath",
          "partial": "Star",
          "signature": "(a-\u003eMaybe a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:maybeStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a n-ary tree in a navigable tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ntree",
          "package": "hxt-xpath",
          "signature": "NTree a -\u003e NavTree a",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#ntree",
          "type": "function"
        },
        "index": {
          "description": "converts n-ary tree in navigable tree",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "ntree",
          "normalized": "NTree a-\u003eNavTree a",
          "package": "hxt-xpath",
          "signature": "NTree a-\u003eNavTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:ntree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKleisli composition:\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "o'",
          "package": "hxt-xpath",
          "signature": "(b -\u003e [c]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [c]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#o%27",
          "type": "function"
        },
        "index": {
          "description": "Kleisli composition",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "o'",
          "normalized": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]",
          "package": "hxt-xpath",
          "signature": "(b-\u003e[c])-\u003e(a-\u003e[b])-\u003ea-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:o-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "parentAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#parentAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "parentAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:parentAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath (index list) of a navigatable tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "pathNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [Int]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#pathNT",
          "type": "function"
        },
        "index": {
          "description": "path index list of navigatable tree",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "pathNT",
          "normalized": "NavTree a-\u003e[Int]",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:pathNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "precedingAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#precedingAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "precedingAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:precedingAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "precedingSiblingAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#precedingSiblingAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "precedingSiblingAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Sibling Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:precedingSiblingAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "preorderNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#preorderNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "preorderNT",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:preorderNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "previousSiblings",
          "package": "hxt-xpath",
          "signature": "[NTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "previousSiblings",
          "normalized": "[NTree a]",
          "package": "hxt-xpath",
          "partial": "Siblings",
          "signature": "[NTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:previousSiblings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "revPreorderNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#revPreorderNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "revPreorderNT",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Preorder NT",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:revPreorderNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "rightNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e Maybe (NavTree a)",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#rightNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "rightNT",
          "normalized": "NavTree a-\u003eMaybe(NavTree a)",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eMaybe(NavTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:rightNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "self",
          "package": "hxt-xpath",
          "signature": "NTree a",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "self",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "selfAxis",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e [NavTree a]",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#selfAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "selfAxis",
          "normalized": "NavTree a-\u003e[NavTree a]",
          "package": "hxt-xpath",
          "partial": "Axis",
          "signature": "NavTree a-\u003e[NavTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:selfAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "selfIndex",
          "package": "hxt-xpath",
          "signature": "Int",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#NavTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "selfIndex",
          "package": "hxt-xpath",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:selfIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a navigable tree in a n-ary tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "subtreeNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e NTree a",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#subtreeNT",
          "type": "function"
        },
        "index": {
          "description": "converts navigable tree in n-ary tree",
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "subtreeNT",
          "normalized": "NavTree a-\u003eNTree a",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eNTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:subtreeNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "upNT",
          "package": "hxt-xpath",
          "signature": "NavTree a -\u003e Maybe (NavTree a)",
          "source": "src/Text-XML-HXT-XPath-NavTree.html#upNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath NavTree",
          "module": "Text.XML.HXT.XPath.NavTree",
          "name": "upNT",
          "normalized": "NavTree a-\u003eMaybe(NavTree a)",
          "package": "hxt-xpath",
          "partial": "NT",
          "signature": "NavTree a-\u003eMaybe(NavTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-NavTree.html#v:upNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module contains arithmetic calculations according the IEEE 754 standard\n for plus, minus, unary minus, multiplication, modulo and division.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "XPathArithmetic",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html",
          "type": "module"
        },
        "index": {
          "description": "The module contains arithmetic calculations according the IEEE standard for plus minus unary minus multiplication modulo and division",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "XPathArithmetic",
          "package": "hxt-xpath",
          "partial": "XPath Arithmetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlus and minus\n\u003c/p\u003e\u003col\u003e\u003cli\u003eparameter op :  plus or minus operation\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathAdd",
          "package": "hxt-xpath",
          "signature": "Op -\u003e XPathValue -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathAdd",
          "type": "function"
        },
        "index": {
          "description": "Plus and minus parameter op plus or minus operation",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathAdd",
          "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "Path Add",
          "signature": "Op-\u003eXPathValue-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision: the divison-operator is not according the IEEE 754 standard,\n it calculates the same as the % operator in Java and ECMAScript\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathDiv",
          "package": "hxt-xpath",
          "signature": "Op -\u003e XPathValue -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathDiv",
          "type": "function"
        },
        "index": {
          "description": "Division the divison-operator is not according the IEEE standard it calculates the same as the operator in Java and ECMAScript",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathDiv",
          "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "Path Div",
          "signature": "Op-\u003eXPathValue-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulo\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathMod",
          "package": "hxt-xpath",
          "signature": "Op -\u003e XPathValue -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathMod",
          "type": "function"
        },
        "index": {
          "description": "Modulo",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathMod",
          "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "Path Mod",
          "signature": "Op-\u003eXPathValue-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathMulti",
          "package": "hxt-xpath",
          "signature": "Op -\u003e XPathValue -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathMulti",
          "type": "function"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathMulti",
          "normalized": "Op-\u003eXPathValue-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "Path Multi",
          "signature": "Op-\u003eXPathValue-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary minus: the value \u003ccode\u003e\u003ca\u003eNaN\u003c/a\u003e\u003c/code\u003e is not calculatable and returned unchanged,\n all other values can be denied.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathUnary",
          "package": "hxt-xpath",
          "signature": "XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathArithmetic.html#xPathUnary",
          "type": "function"
        },
        "index": {
          "description": "Unary minus the value NaN is not calculatable and returned unchanged all other values can be denied",
          "hierarchy": "Text XML HXT XPath XPathArithmetic",
          "module": "Text.XML.HXT.XPath.XPathArithmetic",
          "name": "xPathUnary",
          "package": "hxt-xpath",
          "partial": "Path Unary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathArithmetic.html#v:xPathUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core data types of XPath.\n   The Type NodeSet is based on the module \u003ca\u003eNavTree\u003c/a\u003e which was adapted from\n   HXML (\u003ca\u003ehttp://www.flightlab.com/~joe/hxml/\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathDataTypes",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html",
          "type": "module"
        },
        "index": {
          "description": "The core data types of XPath The Type NodeSet is based on the module NavTree which was adapted from HXML http www.flightlab.com joe hxml",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathDataTypes",
          "package": "hxt-xpath",
          "partial": "XPath Data Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents XPath axis\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "AxisSpec",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "data"
        },
        "index": {
          "description": "Represents XPath axis",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "AxisSpec",
          "package": "hxt-xpath",
          "partial": "Axis Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:AxisSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext length\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConLen",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConLen",
          "type": "type"
        },
        "index": {
          "description": "Context length",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConLen",
          "package": "hxt-xpath",
          "partial": "Con Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext node\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConNode",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConNode",
          "type": "type"
        },
        "index": {
          "description": "Context node",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConNode",
          "package": "hxt-xpath",
          "partial": "Con Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext position\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConPos",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#ConPos",
          "type": "type"
        },
        "index": {
          "description": "Context position",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "ConPos",
          "package": "hxt-xpath",
          "partial": "Con Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:ConPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluation context\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Context",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Evaluation context",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Context",
          "package": "hxt-xpath",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Env",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Env",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Env",
          "package": "hxt-xpath",
          "partial": "Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents expression\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Expr",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Represents expression",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Expr",
          "package": "hxt-xpath",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction arguments\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctArguments",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#FctArguments",
          "type": "type"
        },
        "index": {
          "description": "Function arguments",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctArguments",
          "package": "hxt-xpath",
          "partial": "Fct Arguments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:FctArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctName",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#FctName",
          "type": "type"
        },
        "index": {
          "description": "Function name",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctName",
          "package": "hxt-xpath",
          "partial": "Fct Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:FctName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "KeyTab",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#KeyTab",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "KeyTab",
          "package": "hxt-xpath",
          "partial": "Key Tab",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:KeyTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea string\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Literal",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Literal",
          "type": "type"
        },
        "index": {
          "description": "string",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Literal",
          "package": "hxt-xpath",
          "partial": "Literal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocalName",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocalName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocalName",
          "package": "hxt-xpath",
          "partial": "Local Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:LocalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents location path\n\u003c/p\u003e\u003cp\u003eA location path consists of a sequence of one or more location steps.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocationPath",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocationPath",
          "type": "data"
        },
        "index": {
          "description": "Represents location path location path consists of sequence of one or more location steps",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocationPath",
          "package": "hxt-xpath",
          "partial": "Location Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:LocationPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Name",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Name",
          "package": "hxt-xpath",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NamePrefix",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NamePrefix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NamePrefix",
          "package": "hxt-xpath",
          "partial": "Name Prefix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NamePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode of navigable tree representation\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NavXmlTree",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NavXmlTree",
          "type": "type"
        },
        "index": {
          "description": "Node of navigable tree representation",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NavXmlTree",
          "package": "hxt-xpath",
          "partial": "Nav Xml Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NavXmlTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of nodes of navigable tree representation\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NavXmlTrees",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NavXmlTrees",
          "type": "type"
        },
        "index": {
          "description": "List of nodes of navigable tree representation",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NavXmlTrees",
          "package": "hxt-xpath",
          "partial": "Nav Xml Trees",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NavXmlTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath represented as list of indices starting at root\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodePath",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodePath",
          "type": "type"
        },
        "index": {
          "description": "path represented as list of indices starting at root",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodePath",
          "package": "hxt-xpath",
          "partial": "Node Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of navigable trees identified by their document position (NodePath)\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodeSet",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
          "type": "newtype"
        },
        "index": {
          "description": "Set of navigable trees identified by their document position NodePath",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents XPath node-tests\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodeTest",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
          "type": "data"
        },
        "index": {
          "description": "Represents XPath node-tests",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NodeTest",
          "package": "hxt-xpath",
          "partial": "Node Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:NodeTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents XPath operators\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Op",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Represents XPath operators",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Op",
          "package": "hxt-xpath",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location path is either a relative or an absolute path.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Path",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
          "type": "data"
        },
        "index": {
          "description": "location path is either relative or an absolute path",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Path",
          "package": "hxt-xpath",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarName",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#VarName",
          "type": "type"
        },
        "index": {
          "description": "Variable name",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarName",
          "package": "hxt-xpath",
          "partial": "Var Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:VarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXPath environment\n\u003c/p\u003e\u003cp\u003eAll variables are stored in the environment,\n each variable name is bound to a value.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarTab",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#VarTab",
          "type": "type"
        },
        "index": {
          "description": "XPath environment All variables are stored in the environment each variable name is bound to value",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarTab",
          "package": "hxt-xpath",
          "partial": "Var Tab",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:VarTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a floating-point number according the IEEE 754 standard\n\u003c/p\u003e\u003cp\u003eThe standard includes a special Not-a-Number (NaN) value,\n positive and negative infinity, positive and negative zero.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPNumber",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "data"
        },
        "index": {
          "description": "Represents floating-point number according the IEEE standard The standard includes special Not-a-Number NaN value positive and negative infinity positive and negative zero",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPNumber",
          "package": "hxt-xpath",
          "partial": "XPNumber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functions that takes a XPath result and returns a XPath result\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathFilter",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathFilter",
          "type": "type"
        },
        "index": {
          "description": "functions that takes XPath result and returns XPath result",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathFilter",
          "package": "hxt-xpath",
          "partial": "XPath Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents nodetype-tests\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathNode",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
          "type": "data"
        },
        "index": {
          "description": "Represents nodetype-tests",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathNode",
          "package": "hxt-xpath",
          "partial": "XPath Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents XPath results\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathValue",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "data"
        },
        "index": {
          "description": "Represents XPath results",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPathValue",
          "package": "hxt-xpath",
          "partial": "XPath Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XPathValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents location step\n\u003c/p\u003e\u003cp\u003eA location step consists of an axis, a node-test and zero or more predicates.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XStep",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XStep",
          "type": "data"
        },
        "index": {
          "description": "Represents location step location step consists of an axis node-test and zero or more predicates",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XStep",
          "package": "hxt-xpath",
          "partial": "XStep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#t:XStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Abs",
          "package": "hxt-xpath",
          "signature": "Abs",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Abs",
          "package": "hxt-xpath",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Ancestor",
          "package": "hxt-xpath",
          "signature": "Ancestor",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Ancestor",
          "package": "hxt-xpath",
          "partial": "Ancestor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Ancestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "AncestorOrSelf",
          "package": "hxt-xpath",
          "signature": "AncestorOrSelf",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "AncestorOrSelf",
          "package": "hxt-xpath",
          "partial": "Ancestor Or Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:AncestorOrSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "And",
          "package": "hxt-xpath",
          "signature": "And",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "And",
          "package": "hxt-xpath",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Attribute",
          "package": "hxt-xpath",
          "signature": "Attribute",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Attribute",
          "package": "hxt-xpath",
          "partial": "Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Child",
          "package": "hxt-xpath",
          "signature": "Child",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Child",
          "package": "hxt-xpath",
          "partial": "Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Descendant",
          "package": "hxt-xpath",
          "signature": "Descendant",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Descendant",
          "package": "hxt-xpath",
          "partial": "Descendant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "DescendantOrSelf",
          "package": "hxt-xpath",
          "signature": "DescendantOrSelf",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "DescendantOrSelf",
          "package": "hxt-xpath",
          "partial": "Descendant Or Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:DescendantOrSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Div",
          "package": "hxt-xpath",
          "signature": "Div",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Div",
          "package": "hxt-xpath",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Eq",
          "package": "hxt-xpath",
          "signature": "Eq",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Eq",
          "package": "hxt-xpath",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function with a name and an optional list of arguments\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctExpr",
          "package": "hxt-xpath",
          "signature": "FctExpr FctName FctArguments",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "function with name and an optional list of arguments",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FctExpr",
          "package": "hxt-xpath",
          "partial": "Fct Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FctExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter-expression with zero or more predicates\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FilterExpr",
          "package": "hxt-xpath",
          "signature": "FilterExpr [Expr]",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "filter-expression with zero or more predicates",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FilterExpr",
          "normalized": "FilterExpr[Expr]",
          "package": "hxt-xpath",
          "partial": "Filter Expr",
          "signature": "FilterExpr[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FilterExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloating-point number\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Float",
          "package": "hxt-xpath",
          "signature": "Float Float",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "floating-point number",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Float",
          "package": "hxt-xpath",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Following",
          "package": "hxt-xpath",
          "signature": "Following",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Following",
          "package": "hxt-xpath",
          "partial": "Following",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Following"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FollowingSibling",
          "package": "hxt-xpath",
          "signature": "FollowingSibling",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "FollowingSibling",
          "package": "hxt-xpath",
          "partial": "Following Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:FollowingSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric expression with an operator and one or more operands\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "GenExpr",
          "package": "hxt-xpath",
          "signature": "GenExpr Op [Expr]",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "generic expression with an operator and one or more operands",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "GenExpr",
          "normalized": "GenExpr Op[Expr]",
          "package": "hxt-xpath",
          "partial": "Gen Expr",
          "signature": "GenExpr Op[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:GenExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Greater",
          "package": "hxt-xpath",
          "signature": "Greater",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Greater",
          "package": "hxt-xpath",
          "partial": "Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "GreaterEq",
          "package": "hxt-xpath",
          "signature": "GreaterEq",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "GreaterEq",
          "package": "hxt-xpath",
          "partial": "Greater Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:GreaterEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Less",
          "package": "hxt-xpath",
          "signature": "Less",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Less",
          "package": "hxt-xpath",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LessEq",
          "package": "hxt-xpath",
          "signature": "LessEq",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LessEq",
          "package": "hxt-xpath",
          "partial": "Less Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LessEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LiteralExpr",
          "package": "hxt-xpath",
          "signature": "LiteralExpr Literal",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "string",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LiteralExpr",
          "package": "hxt-xpath",
          "partial": "Literal Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LiteralExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocPath",
          "package": "hxt-xpath",
          "signature": "LocPath Path [XStep]",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#LocationPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "LocPath",
          "normalized": "LocPath Path[XStep]",
          "package": "hxt-xpath",
          "partial": "Loc Path",
          "signature": "LocPath Path[XStep]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:LocPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Minus",
          "package": "hxt-xpath",
          "signature": "Minus",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Minus",
          "package": "hxt-xpath",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Mod",
          "package": "hxt-xpath",
          "signature": "Mod",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Mod",
          "package": "hxt-xpath",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Mult",
          "package": "hxt-xpath",
          "signature": "Mult",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Mult",
          "package": "hxt-xpath",
          "partial": "Mult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NEq",
          "package": "hxt-xpath",
          "signature": "NEq",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NEq",
          "package": "hxt-xpath",
          "partial": "NEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NS",
          "package": "hxt-xpath",
          "signature": "NS",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NS",
          "package": "hxt-xpath",
          "partial": "NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot-a-number\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NaN",
          "package": "hxt-xpath",
          "signature": "NaN",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "not-a-number",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NaN",
          "package": "hxt-xpath",
          "partial": "Na",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename-test\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NameTest",
          "package": "hxt-xpath",
          "signature": "NameTest QName",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
          "type": "function"
        },
        "index": {
          "description": "name-test",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NameTest",
          "package": "hxt-xpath",
          "partial": "Name Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NameTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Namespace",
          "package": "hxt-xpath",
          "signature": "Namespace",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Namespace",
          "package": "hxt-xpath",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegative zero\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Neg0",
          "package": "hxt-xpath",
          "signature": "Neg0",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "negative zero",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Neg0",
          "package": "hxt-xpath",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Neg0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegative infinity\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NegInf",
          "package": "hxt-xpath",
          "signature": "NegInf",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "negative infinity",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NegInf",
          "package": "hxt-xpath",
          "partial": "Neg Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NumberExpr",
          "package": "hxt-xpath",
          "signature": "NumberExpr XPNumber",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "number",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "NumberExpr",
          "package": "hxt-xpath",
          "partial": "Number Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:NumberExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Or",
          "package": "hxt-xpath",
          "signature": "Or",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Or",
          "package": "hxt-xpath",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocessing-instruction-test with a literal argument\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PI",
          "package": "hxt-xpath",
          "signature": "PI String",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
          "type": "function"
        },
        "index": {
          "description": "processing-instruction-test with literal argument",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PI",
          "package": "hxt-xpath",
          "partial": "PI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Parent",
          "package": "hxt-xpath",
          "signature": "Parent",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Parent",
          "package": "hxt-xpath",
          "partial": "Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea path expression contains an optional filter-expression\n or an optional locationpath. one expression is urgently\n necessary, both are possible\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PathExpr",
          "package": "hxt-xpath",
          "signature": "PathExpr (Maybe Expr) (Maybe LocationPath)",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "path expression contains an optional filter-expression or an optional locationpath one expression is urgently necessary both are possible",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PathExpr",
          "package": "hxt-xpath",
          "partial": "Path Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PathExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Plus",
          "package": "hxt-xpath",
          "signature": "Plus",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Plus",
          "package": "hxt-xpath",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epositive zero\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Pos0",
          "package": "hxt-xpath",
          "signature": "Pos0",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "positive zero",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Pos0",
          "package": "hxt-xpath",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Pos0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epositive infinity\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PosInf",
          "package": "hxt-xpath",
          "signature": "PosInf",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPNumber",
          "type": "function"
        },
        "index": {
          "description": "positive infinity",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PosInf",
          "package": "hxt-xpath",
          "partial": "Pos Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PosInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Preceding",
          "package": "hxt-xpath",
          "signature": "Preceding",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Preceding",
          "package": "hxt-xpath",
          "partial": "Preceding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Preceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PrecedingSibling",
          "package": "hxt-xpath",
          "signature": "PrecedingSibling",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "PrecedingSibling",
          "package": "hxt-xpath",
          "partial": "Preceding Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:PrecedingSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Rel",
          "package": "hxt-xpath",
          "signature": "Rel",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Rel",
          "package": "hxt-xpath",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Self",
          "package": "hxt-xpath",
          "signature": "Self",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#AxisSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Self",
          "package": "hxt-xpath",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Step",
          "package": "hxt-xpath",
          "signature": "Step AxisSpec NodeTest [Expr]",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Step",
          "normalized": "Step AxisSpec NodeTest[Expr]",
          "package": "hxt-xpath",
          "partial": "Step",
          "signature": "Step AxisSpec NodeTest[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall nodetype-tests\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "TypeTest",
          "package": "hxt-xpath",
          "signature": "TypeTest XPathNode",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeTest",
          "type": "function"
        },
        "index": {
          "description": "all nodetype-tests",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "TypeTest",
          "package": "hxt-xpath",
          "partial": "Type Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:TypeTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Unary",
          "package": "hxt-xpath",
          "signature": "Unary",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Unary",
          "package": "hxt-xpath",
          "partial": "Unary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Union",
          "package": "hxt-xpath",
          "signature": "Union",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "Union",
          "package": "hxt-xpath",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarExpr",
          "package": "hxt-xpath",
          "signature": "VarExpr VarName",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "VarExpr",
          "package": "hxt-xpath",
          "partial": "Var Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:VarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomment-nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPCommentNode",
          "package": "hxt-xpath",
          "signature": "XPCommentNode",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
          "type": "function"
        },
        "index": {
          "description": "comment-nodes",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPCommentNode",
          "package": "hxt-xpath",
          "partial": "XPComment Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPCommentNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall 7 nodetypes\n  (root, element, attribute, namespace, pi, comment, text)\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPNode",
          "package": "hxt-xpath",
          "signature": "XPNode",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
          "type": "function"
        },
        "index": {
          "description": "all nodetypes root element attribute namespace pi comment text",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPNode",
          "package": "hxt-xpath",
          "partial": "XPNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocessing-instruction-nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPPINode",
          "package": "hxt-xpath",
          "signature": "XPPINode",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
          "type": "function"
        },
        "index": {
          "description": "processing-instruction-nodes",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPPINode",
          "package": "hxt-xpath",
          "partial": "XPPINode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPPINode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etext-nodes: cdata, character data\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPTextNode",
          "package": "hxt-xpath",
          "signature": "XPTextNode",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathNode",
          "type": "function"
        },
        "index": {
          "description": "text-nodes cdata character data",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPTextNode",
          "package": "hxt-xpath",
          "partial": "XPText Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eboolean value\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVBool",
          "package": "hxt-xpath",
          "signature": "XPVBool Bool",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "function"
        },
        "index": {
          "description": "boolean value",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVBool",
          "package": "hxt-xpath",
          "partial": "XPVBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror message with text\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVError",
          "package": "hxt-xpath",
          "signature": "XPVError String",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "function"
        },
        "index": {
          "description": "error message with text",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVError",
          "package": "hxt-xpath",
          "partial": "XPVError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enode-set\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVNode",
          "package": "hxt-xpath",
          "signature": "XPVNode NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "function"
        },
        "index": {
          "description": "node-set",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVNode",
          "package": "hxt-xpath",
          "partial": "XPVNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber according the IEEE 754 standard\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVNumber",
          "package": "hxt-xpath",
          "signature": "XPVNumber XPNumber",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "function"
        },
        "index": {
          "description": "number according the IEEE standard",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVNumber",
          "package": "hxt-xpath",
          "partial": "XPVNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring value\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVString",
          "package": "hxt-xpath",
          "signature": "XPVString String",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#XPathValue",
          "type": "function"
        },
        "index": {
          "description": "string value",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "XPVString",
          "package": "hxt-xpath",
          "partial": "XPVString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:XPVString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "cardNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e Int",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#cardNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "cardNodeSet",
          "normalized": "NodeSet-\u003eInt",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:cardNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "deleteNodeSet",
          "package": "hxt-xpath",
          "signature": "NodePath -\u003e NodeSet -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#deleteNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "deleteNodeSet",
          "normalized": "NodePath-\u003eNodeSet-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodePath-\u003eNodeSet-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:deleteNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "elemsNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e [(NodePath, NavXmlTree)]",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#elemsNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "elemsNodeSet",
          "normalized": "NodeSet-\u003e[(NodePath,NavXmlTree)]",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003e[(NodePath,NavXmlTree)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:elemsNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enode set functions\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "emptyNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#emptyNodeSet",
          "type": "function"
        },
        "index": {
          "description": "node set functions",
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "emptyNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:emptyNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "fromNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e NavXmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#fromNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "fromNodeSet",
          "normalized": "NodeSet-\u003eNavXmlTrees",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003eNavXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:fromNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "headNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e NavXmlTree",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#headNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "headNodeSet",
          "normalized": "NodeSet-\u003eNavXmlTree",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003eNavXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:headNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "insertNodeSet",
          "package": "hxt-xpath",
          "signature": "NavXmlTree -\u003e NodeSet -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#insertNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "insertNodeSet",
          "normalized": "NavXmlTree-\u003eNodeSet-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NavXmlTree-\u003eNodeSet-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:insertNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "nullNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e Bool",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#nullNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "nullNodeSet",
          "normalized": "NodeSet-\u003eBool",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:nullNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "singletonNodeSet",
          "package": "hxt-xpath",
          "signature": "NavXmlTree -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#singletonNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "singletonNodeSet",
          "normalized": "NavXmlTree-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NavXmlTree-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:singletonNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "toNodeSet",
          "package": "hxt-xpath",
          "signature": "NavXmlTrees -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#toNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "toNodeSet",
          "normalized": "NavXmlTrees-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NavXmlTrees-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:toNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unNS",
          "package": "hxt-xpath",
          "signature": "Map NodePath NavXmlTree",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#NodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unNS",
          "package": "hxt-xpath",
          "partial": "NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unionNodeSet",
          "package": "hxt-xpath",
          "signature": "NodeSet -\u003e NodeSet -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#unionNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unionNodeSet",
          "normalized": "NodeSet-\u003eNodeSet-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "NodeSet-\u003eNodeSet-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unionNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unionsNodeSet",
          "package": "hxt-xpath",
          "signature": "[NodeSet] -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#unionsNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "unionsNodeSet",
          "normalized": "[NodeSet]-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "[NodeSet]-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:unionsNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "varEnv",
          "package": "hxt-xpath",
          "signature": "Env",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#varEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "varEnv",
          "package": "hxt-xpath",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:varEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "withNodeSet",
          "package": "hxt-xpath",
          "signature": "(NavXmlTrees -\u003e NavXmlTrees) -\u003e NodeSet -\u003e NodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#withNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "withNodeSet",
          "normalized": "(NavXmlTrees-\u003eNavXmlTrees)-\u003eNodeSet-\u003eNodeSet",
          "package": "hxt-xpath",
          "partial": "Node Set",
          "signature": "(NavXmlTrees-\u003eNavXmlTrees)-\u003eNodeSet-\u003eNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:withNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "withXPVNode",
          "package": "hxt-xpath",
          "signature": "String -\u003e (NodeSet -\u003e XPathValue) -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathDataTypes.html#withXPVNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathDataTypes",
          "module": "Text.XML.HXT.XPath.XPathDataTypes",
          "name": "withXPVNode",
          "normalized": "String-\u003e(NodeSet-\u003eXPathValue)-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "XPVNode",
          "signature": "String-\u003e(NodeSet-\u003eXPathValue)-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathDataTypes.html#v:withXPVNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core functions for evaluating the different types of XPath expressions.\n   Each \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e-constructor is mapped to an evaluation function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "XPathEval",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html",
          "type": "module"
        },
        "index": {
          "description": "The core functions for evaluating the different types of XPath expressions Each Expr constructor is mapped to an evaluation function",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "XPathEval",
          "package": "hxt-xpath",
          "partial": "XPath Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "addRoot'",
          "package": "hxt-xpath",
          "signature": "XmlTree -\u003e XmlTree",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#addRoot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "addRoot'",
          "normalized": "XmlTree-\u003eXmlTree",
          "package": "hxt-xpath",
          "partial": "Root'",
          "signature": "XmlTree-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:addRoot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main evaluation entry point.\n Each XPath-\u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e is mapped to an evaluation function. The \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e-parameter contains the set of global variables\n for the evaluator, the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e-parameter the root of the tree in which the expression is evaluated.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "evalExpr",
          "package": "hxt-xpath",
          "signature": "Env -\u003e Context -\u003e Expr -\u003e XPathFilter",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#evalExpr",
          "type": "function"
        },
        "index": {
          "description": "The main evaluation entry point Each XPath Expr is mapped to an evaluation function The Env parameter contains the set of global variables for the evaluator the Context parameter the root of the tree in which the expression is evaluated",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "evalExpr",
          "normalized": "Env-\u003eContext-\u003eExpr-\u003eXPathFilter",
          "package": "hxt-xpath",
          "partial": "Expr",
          "signature": "Env-\u003eContext-\u003eExpr-\u003eXPathFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:evalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of a document by a string representing a XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of a document via XPath.\n The string argument must be a XPath expression with an absolute location path,\n the argument tree must be a complete document tree.\n Result is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are converted to text nodes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPath",
          "package": "hxt-xpath",
          "signature": "String -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPath",
          "type": "function"
        },
        "index": {
          "description": "Select parts of document by string representing XPath expression The main filter for selecting parts of document via XPath The string argument must be XPath expression with an absolute location path the argument tree must be complete document tree Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are converted to text nodes",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPath",
          "normalized": "String-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath",
          "signature": "String-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of a document by an already parsed XPath expression\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPath'",
          "package": "hxt-xpath",
          "signature": "Expr -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPath%27",
          "type": "function"
        },
        "index": {
          "description": "Select parts of document by an already parsed XPath expression",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPath'",
          "normalized": "Expr-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath'",
          "signature": "Expr-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPath-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the node set of an XPath query\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSet'",
          "package": "hxt-xpath",
          "signature": "String -\u003e XmlTree -\u003e XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSet%27",
          "type": "function"
        },
        "index": {
          "description": "compute the node set of an XPath query",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSet'",
          "normalized": "String-\u003eXmlTree-\u003eXmlNodeSet",
          "package": "hxt-xpath",
          "partial": "XPath Node Set'",
          "signature": "String-\u003eXmlTree-\u003eXmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSet-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the node set of an XPath query for an already parsed XPath expr\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSet''",
          "package": "hxt-xpath",
          "signature": "Expr -\u003e XmlTree -\u003e XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSet%27%27",
          "type": "function"
        },
        "index": {
          "description": "compute the node set of an XPath query for an already parsed XPath expr",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSet''",
          "normalized": "Expr-\u003eXmlTree-\u003eXmlNodeSet",
          "package": "hxt-xpath",
          "partial": "XPath Node Set''",
          "signature": "Expr-\u003eXmlTree-\u003eXmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSet-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the node set of a namespace aware XPath query\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSetWithNsEnv'",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathNodeSetWithNsEnv%27",
          "type": "function"
        },
        "index": {
          "description": "compute the node set of namespace aware XPath query",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathNodeSetWithNsEnv'",
          "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlNodeSet",
          "package": "hxt-xpath",
          "partial": "XPath Node Set With Ns Env'",
          "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathNodeSetWithNsEnv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of an XML tree by a string representing an XPath expression.\n\u003c/p\u003e\u003cp\u003eThe main filter for selecting parts of an arbitrary XML tree via XPath.\n The string argument must be a XPath expression with an absolute location path,\n There are no restrictions on the arument tree.\n\u003c/p\u003e\u003cp\u003eNo canonicalization is performed before evaluating the query\n\u003c/p\u003e\u003cp\u003eResult is a possibly empty list of XmlTrees forming the set of selected XPath values.\n XPath values other than XmlTrees (numbers, attributes, tagnames, ...)\n are convertet to text nodes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTrees",
          "package": "hxt-xpath",
          "signature": "String -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTrees",
          "type": "function"
        },
        "index": {
          "description": "Select parts of an XML tree by string representing an XPath expression The main filter for selecting parts of an arbitrary XML tree via XPath The string argument must be XPath expression with an absolute location path There are no restrictions on the arument tree No canonicalization is performed before evaluating the query Result is possibly empty list of XmlTrees forming the set of selected XPath values XPath values other than XmlTrees numbers attributes tagnames are convertet to text nodes",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTrees",
          "normalized": "String-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath Sub Trees",
          "signature": "String-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of an XML tree by an XPath expression.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTrees'",
          "package": "hxt-xpath",
          "signature": "Expr -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTrees%27",
          "type": "function"
        },
        "index": {
          "description": "Select parts of an XML tree by an XPath expression",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTrees'",
          "normalized": "Expr-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath Sub Trees'",
          "signature": "Expr-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTrees-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetXPathSubTrees\u003c/a\u003e\u003c/code\u003e but with namespace aware XPath expression\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTreesWithNsEnv",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathSubTreesWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "Same as getXPathSubTrees but with namespace aware XPath expression",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathSubTreesWithNsEnv",
          "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath Sub Trees With Ns Env",
          "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathSubTreesWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect parts of a document by a namespace aware XPath expression.\n\u003c/p\u003e\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003egetXPath\u003c/a\u003e\u003c/code\u003e but the prefix:localpart names in the XPath expression\n are interpreted with respect to the given namespace environment\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathWithNsEnv",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#getXPathWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "Select parts of document by namespace aware XPath expression Works like getXPath but the prefix localpart names in the XPath expression are interpreted with respect to the given namespace environment",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "getXPathWithNsEnv",
          "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "XPath With Ns Env",
          "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:getXPathWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse an XPath expr string\n and return an expr tree or an error message.\n Namespaces are not taken into account.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "parseXPathExpr",
          "package": "hxt-xpath",
          "signature": "String -\u003e Either String Expr",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#parseXPathExpr",
          "type": "function"
        },
        "index": {
          "description": "parse an XPath expr string and return an expr tree or an error message Namespaces are not taken into account",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "parseXPathExpr",
          "normalized": "String-\u003eEither String Expr",
          "package": "hxt-xpath",
          "partial": "XPath Expr",
          "signature": "String-\u003eEither String Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:parseXPathExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse an XPath expr string with a namespace environment for qualified names in the XPath expr\n and return an expr tree or an error message\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "parseXPathExprWithNsEnv",
          "package": "hxt-xpath",
          "signature": "Attributes -\u003e String -\u003e Either String Expr",
          "source": "src/Text-XML-HXT-XPath-XPathEval.html#parseXPathExprWithNsEnv",
          "type": "function"
        },
        "index": {
          "description": "parse an XPath expr string with namespace environment for qualified names in the XPath expr and return an expr tree or an error message",
          "hierarchy": "Text XML HXT XPath XPathEval",
          "module": "Text.XML.HXT.XPath.XPathEval",
          "name": "parseXPathExprWithNsEnv",
          "normalized": "Attributes-\u003eString-\u003eEither String Expr",
          "package": "hxt-xpath",
          "partial": "XPath Expr With Ns Env",
          "signature": "Attributes-\u003eString-\u003eEither String Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathEval.html#v:parseXPathExprWithNsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module contains the core-functions of the XPath function library.\n   All functions are implemented as XFct. Each XFct contains the evaluation context,\n   the variable environment and the function arguments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "XPathFct",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html",
          "type": "module"
        },
        "index": {
          "description": "The module contains the core-functions of the XPath function library All functions are implemented as XFct Each XFct contains the evaluation context the variable environment and the function arguments",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "XPathFct",
          "package": "hxt-xpath",
          "partial": "XPath Fct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType signature for all functions which can be used in the XPath module.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "XFct",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#XFct",
          "type": "type"
        },
        "index": {
          "description": "Type signature for all functions which can be used in the XPath module",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "XFct",
          "package": "hxt-xpath",
          "partial": "XFct",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#t:XFct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a function.\n Calculation of the function value is done by looking up the function name in the function table,\n check the number of arguments and calculate the funtion, if no\n argument evaluation returns an error.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the function value as \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "evalFct",
          "package": "hxt-xpath",
          "signature": "FctName -\u003e Env -\u003e Context -\u003e [XPathValue] -\u003e XPathValue",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#evalFct",
          "type": "function"
        },
        "index": {
          "description": "Evaluates function Calculation of the function value is done by looking up the function name in the function table check the number of arguments and calculate the funtion if no argument evaluation returns an error returns the function value as XPathValue",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "evalFct",
          "normalized": "FctName-\u003eEnv-\u003eContext-\u003e[XPathValue]-\u003eXPathValue",
          "package": "hxt-xpath",
          "partial": "Fct",
          "signature": "FctName-\u003eEnv-\u003eContext-\u003e[XPathValue]-\u003eXPathValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:evalFct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the conversion function for the XPath results: string, boolean and number\n A nodeset can not be converted.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getConvFct",
          "package": "hxt-xpath",
          "signature": "XPathValue -\u003e Maybe XFct",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#getConvFct",
          "type": "function"
        },
        "index": {
          "description": "Returns the conversion function for the XPath results string boolean and number nodeset can not be converted",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getConvFct",
          "normalized": "XPathValue-\u003eMaybe XFct",
          "package": "hxt-xpath",
          "partial": "Conv Fct",
          "signature": "XPathValue-\u003eMaybe XFct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getConvFct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the table of keys, needed by xslt, from the environment\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getKeyTab",
          "package": "hxt-xpath",
          "signature": "Env -\u003e KeyTab",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#getKeyTab",
          "type": "function"
        },
        "index": {
          "description": "Returns the table of keys needed by xslt from the environment",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getKeyTab",
          "normalized": "Env-\u003eKeyTab",
          "package": "hxt-xpath",
          "partial": "Key Tab",
          "signature": "Env-\u003eKeyTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getKeyTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the table of variables from the environment\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getVarTab",
          "package": "hxt-xpath",
          "signature": "Env -\u003e VarTab",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#getVarTab",
          "type": "function"
        },
        "index": {
          "description": "Returns the table of variables from the environment",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "getVarTab",
          "normalized": "Env-\u003eVarTab",
          "package": "hxt-xpath",
          "partial": "Var Tab",
          "signature": "Env-\u003eVarTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:getVarTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a node is not a part of a node list. Needed to implement matching & testing in xslt.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "isNotInNodeList",
          "package": "hxt-xpath",
          "signature": "NavXmlTree -\u003e [NavXmlTree] -\u003e Bool",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#isNotInNodeList",
          "type": "function"
        },
        "index": {
          "description": "Check whether node is not part of node list Needed to implement matching testing in xslt",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "isNotInNodeList",
          "normalized": "NavXmlTree-\u003e[NavXmlTree]-\u003eBool",
          "package": "hxt-xpath",
          "partial": "Not In Node List",
          "signature": "NavXmlTree-\u003e[NavXmlTree]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:isNotInNodeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the string-value of a node,\n the value of a namespace node is not supported\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "stringValue",
          "package": "hxt-xpath",
          "signature": "NavXmlTree -\u003e XPathValue",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#stringValue",
          "type": "function"
        },
        "index": {
          "description": "Returns the string-value of node the value of namespace node is not supported",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "stringValue",
          "normalized": "NavXmlTree-\u003eXPathValue",
          "package": "hxt-xpath",
          "partial": "Value",
          "signature": "NavXmlTree-\u003eXPathValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:stringValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of different \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e types in a list of one \u003ccode\u003e\u003ca\u003eXPathValue\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fct :  the conversion function\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "toXValue",
          "package": "hxt-xpath",
          "signature": "XFct -\u003e Context -\u003e Env -\u003e [XPathValue] -\u003e [XPathValue]",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#toXValue",
          "type": "function"
        },
        "index": {
          "description": "Converts list of different XPathValue types in list of one XPathValue type parameter fct the conversion function",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "toXValue",
          "normalized": "XFct-\u003eContext-\u003eEnv-\u003e[XPathValue]-\u003e[XPathValue]",
          "package": "hxt-xpath",
          "partial": "XValue",
          "signature": "XFct-\u003eContext-\u003eEnv-\u003e[XPathValue]-\u003e[XPathValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:toXValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eboolean boolean(object): converts its argument to a boolean value\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xboolean",
          "package": "hxt-xpath",
          "signature": "XFct",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#xboolean",
          "type": "function"
        },
        "index": {
          "description": "boolean boolean object converts its argument to boolean value",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xboolean",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber number(object?): converts its argument to a number\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xnumber",
          "package": "hxt-xpath",
          "signature": "XFct",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#xnumber",
          "type": "function"
        },
        "index": {
          "description": "number number object converts its argument to number",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xnumber",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xnumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring string(object?): converts an object to a string\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xstring",
          "package": "hxt-xpath",
          "signature": "XFct",
          "source": "src/Text-XML-HXT-XPath-XPathFct.html#xstring",
          "type": "function"
        },
        "index": {
          "description": "string string object converts an object to string",
          "hierarchy": "Text XML HXT XPath XPathFct",
          "module": "Text.XML.HXT.XPath.XPathFct",
          "name": "xstring",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathFct.html#v:xstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003expath keywords\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "XPathKeywords",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html",
          "type": "module"
        },
        "index": {
          "description": "xpath keywords",
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "XPathKeywords",
          "package": "hxt-xpath",
          "partial": "XPath Keywords",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_ancestor",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_ancestor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_ancestor",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_ancestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_ancestor_or_self",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_ancestor_or_self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_ancestor_or_self",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_ancestor_or_self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_attribute",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_attribute",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_child",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_child",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_descendant",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_descendant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_descendant",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_descendant_or_self",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_descendant_or_self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_descendant_or_self",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_descendant_or_self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_following",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_following",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_following",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_following"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_following_sibling",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_following_sibling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_following_sibling",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_following_sibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_namespace",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_namespace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_namespace",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_parent",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_parent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_parent",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_preceding",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_preceding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_preceding",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_preceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_preceding_sibling",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_preceding_sibling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_preceding_sibling",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_preceding_sibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_self",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#a_self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "a_self",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:a_self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_comment",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_comment",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_node",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_node",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_processing_instruction",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_processing_instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_processing_instruction",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_processing_instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_text",
          "package": "hxt-xpath",
          "signature": "String",
          "source": "src/Text-XML-HXT-XPath-XPathKeywords.html#n_text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathKeywords",
          "module": "Text.XML.HXT.XPath.XPathKeywords",
          "name": "n_text",
          "package": "hxt-xpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathKeywords.html#v:n_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe XPath Parser\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "XPathParser",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathParser.html",
          "type": "module"
        },
        "index": {
          "description": "The XPath Parser",
          "hierarchy": "Text XML HXT XPath XPathParser",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "XPathParser",
          "package": "hxt-xpath",
          "partial": "XPath Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparsing a number, parseNumber is used in \u003ca\u003eXPathFct\u003c/a\u003e\n by the number function\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the parsed number as \u003ccode\u003e\u003ca\u003eXPNumber\u003c/a\u003e\u003c/code\u003e float\n                or \u003ccode\u003e\u003ca\u003eXPVNumber\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNaN\u003c/a\u003e\u003c/code\u003e in case of error\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "parseNumber",
          "package": "hxt-xpath",
          "signature": "String -\u003e XPathValue",
          "source": "src/Text-XML-HXT-XPath-XPathParser.html#parseNumber",
          "type": "function"
        },
        "index": {
          "description": "parsing number parseNumber is used in XPathFct by the number function returns the parsed number as XPNumber float or XPVNumber NaN in case of error",
          "hierarchy": "Text XML HXT XPath XPathParser",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "parseNumber",
          "normalized": "String-\u003eXPathValue",
          "package": "hxt-xpath",
          "partial": "Number",
          "signature": "String-\u003eXPathValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#v:parseNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe main entry point:\n parsing a XPath expression\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "parseXPath",
          "package": "hxt-xpath",
          "signature": "XPathParser Expr",
          "source": "src/Text-XML-HXT-XPath-XPathParser.html#parseXPath",
          "type": "function"
        },
        "index": {
          "description": "the main entry point parsing XPath expression",
          "hierarchy": "Text XML HXT XPath XPathParser",
          "module": "Text.XML.HXT.XPath.XPathParser",
          "name": "parseXPath",
          "package": "hxt-xpath",
          "partial": "XPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathParser.html#v:parseXPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an XPath result set into a node set\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "XPathToNodeSet",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html",
          "type": "module"
        },
        "index": {
          "description": "Convert an XPath result set into node set",
          "hierarchy": "Text XML HXT XPath XPathToNodeSet",
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "XPathToNodeSet",
          "package": "hxt-xpath",
          "partial": "XPath To Node Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "emptyXmlNodeSet",
          "package": "hxt-xpath",
          "signature": "XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html#emptyXmlNodeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathToNodeSet",
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "emptyXmlNodeSet",
          "package": "hxt-xpath",
          "partial": "Xml Node Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#v:emptyXmlNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a a XPath-value into a XmlNodeSet represented by a tree structure\n\u003c/p\u003e\u003cp\u003eThe XmlNodeSet can be used to traverse a tree an process all\n marked nodes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "xPValue2XmlNodeSet",
          "package": "hxt-xpath",
          "signature": "XPathValue -\u003e XmlNodeSet",
          "source": "src/Text-XML-HXT-XPath-XPathToNodeSet.html#xPValue2XmlNodeSet",
          "type": "function"
        },
        "index": {
          "description": "Convert XPath-value into XmlNodeSet represented by tree structure The XmlNodeSet can be used to traverse tree an process all marked nodes",
          "hierarchy": "Text XML HXT XPath XPathToNodeSet",
          "module": "Text.XML.HXT.XPath.XPathToNodeSet",
          "name": "xPValue2XmlNodeSet",
          "normalized": "XPathValue-\u003eXmlNodeSet",
          "package": "hxt-xpath",
          "partial": "PValue Xml Node Set",
          "signature": "XPathValue-\u003eXmlNodeSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToNodeSet.html#v:xPValue2XmlNodeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat an expression or value in tree- or string-representation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "XPathToString",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html",
          "type": "module"
        },
        "index": {
          "description": "Format an expression or value in tree or string-representation",
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "XPathToString",
          "package": "hxt-xpath",
          "partial": "XPath To String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a parsed XPath-expression in tree representation.\n Text output is done by \u003ccode\u003e\u003ca\u003eformatXmlTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "expr2XPathTree",
          "package": "hxt-xpath",
          "signature": "Expr -\u003e XPathTree",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#expr2XPathTree",
          "type": "function"
        },
        "index": {
          "description": "Format parsed XPath-expression in tree representation Text output is done by formatXmlTree",
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "expr2XPathTree",
          "normalized": "Expr-\u003eXPathTree",
          "package": "hxt-xpath",
          "partial": "XPath Tree",
          "signature": "Expr-\u003eXPathTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:expr2XPathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "formatXPathTree",
          "package": "hxt-xpath",
          "signature": "Expr -\u003e String",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#formatXPathTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "formatXPathTree",
          "normalized": "Expr-\u003eString",
          "package": "hxt-xpath",
          "partial": "XPath Tree",
          "signature": "Expr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:formatXPathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "nt2XPathTree",
          "package": "hxt-xpath",
          "signature": "NodeTest -\u003e XPathTree",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#nt2XPathTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "nt2XPathTree",
          "normalized": "NodeTest-\u003eXPathTree",
          "package": "hxt-xpath",
          "partial": "XPath Tree",
          "signature": "NodeTest-\u003eXPathTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:nt2XPathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "pred2XPathTree",
          "package": "hxt-xpath",
          "signature": "[Expr] -\u003e XPathTree",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#pred2XPathTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "pred2XPathTree",
          "normalized": "[Expr]-\u003eXPathTree",
          "package": "hxt-xpath",
          "partial": "XPath Tree",
          "signature": "[Expr]-\u003eXPathTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:pred2XPathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an navigable tree in a xmltree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "toXPathTree",
          "package": "hxt-xpath",
          "signature": "[NavTree a] -\u003e [NTree a]",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#toXPathTree",
          "type": "function"
        },
        "index": {
          "description": "Convert an navigable tree in xmltree",
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "toXPathTree",
          "normalized": "[NavTree a]-\u003e[NTree a]",
          "package": "hxt-xpath",
          "partial": "XPath Tree",
          "signature": "[NavTree a]-\u003e[NTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:toXPathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a XPath-value in string representation.\n Text output is done by \u003ccode\u003e\u003ca\u003eformatXmlTree\u003c/a\u003e\u003c/code\u003e for node-sets (trees),\n all other values are represented as strings.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "xPValue2String",
          "package": "hxt-xpath",
          "signature": "XPathValue -\u003e String",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#xPValue2String",
          "type": "function"
        },
        "index": {
          "description": "Format XPath-value in string representation Text output is done by formatXmlTree for node-sets trees all other values are represented as strings",
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "xPValue2String",
          "normalized": "XPathValue-\u003eString",
          "package": "hxt-xpath",
          "partial": "PValue String",
          "signature": "XPathValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:xPValue2String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a a XPath-value into XmlTrees.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "xPValue2XmlTrees",
          "package": "hxt-xpath",
          "signature": "XPathValue -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-XPath-XPathToString.html#xPValue2XmlTrees",
          "type": "function"
        },
        "index": {
          "description": "Convert XPath-value into XmlTrees",
          "hierarchy": "Text XML HXT XPath XPathToString",
          "module": "Text.XML.HXT.XPath.XPathToString",
          "name": "xPValue2XmlTrees",
          "normalized": "XPathValue-\u003eXmlTrees",
          "package": "hxt-xpath",
          "partial": "PValue Xml Trees",
          "signature": "XPathValue-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath-XPathToString.html#v:xPValue2XmlTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports elements from the basic libraries:\n XPathEval, XPathToString and XPathParser\n\u003c/p\u003e\u003cp\u003eAuthor : Torben Kuseler\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.XPath",
          "name": "XPath",
          "package": "hxt-xpath",
          "source": "src/Text-XML-HXT-XPath.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module exports elements from the basic libraries XPathEval XPathToString and XPathParser Author Torben Kuseler",
          "hierarchy": "Text XML HXT XPath",
          "module": "Text.XML.HXT.XPath",
          "name": "XPath",
          "package": "hxt-xpath",
          "partial": "XPath",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-xpath/docs/Text-XML-HXT-XPath.html#"
      }
    }
  ]
]