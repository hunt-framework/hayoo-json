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
        "word": "rangemin"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RangeMin.Cartesian",
          "name": "Cartesian",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Cartesian.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RangeMin Cartesian",
          "module": "Data.RangeMin.Cartesian",
          "name": "Cartesian",
          "package": "rangemin",
          "partial": "Cartesian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-Cartesian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Given a comparison function and a lookup function, this function constructs a\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with the property that the minimum index between \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ej\u003c/code\u003e \n in the result vector is the same as the minimum index between \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ej\u003c/code\u003e from the original\n elements.  (In both cases, ties are broken by which index comes first.)\n\u003c/p\u003e\u003cp\u003eThis allows us to use the specialized range-min implementation on \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n even for other \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e implementations, other element types, and other comparison \n functions.\n\u003c/p\u003e\u003cp\u003eInternally, this function constructs the Cartesian tree of the input vector \n (implicitly, to save memory and stack space), and returns the vector of the \n depth of each element in the tree.\n\u003c/p\u003e",
          "module": "Data.RangeMin.Cartesian",
          "name": "equivVectorBy",
          "package": "rangemin",
          "signature": "LEq a -\u003e v a -\u003e Vector Int",
          "source": "src/Data-RangeMin-Cartesian.html#equivVectorBy",
          "type": "function"
        },
        "index": {
          "description": "Given comparison function and lookup function this function constructs Vector Int with the property that the minimum index between and in the result vector is the same as the minimum index between and from the original elements In both cases ties are broken by which index comes first This allows us to use the specialized range-min implementation on Vector Int even for other Vector implementations other element types and other comparison functions Internally this function constructs the Cartesian tree of the input vector implicitly to save memory and stack space and returns the vector of the depth of each element in the tree",
          "hierarchy": "Data RangeMin Cartesian",
          "module": "Data.RangeMin.Cartesian",
          "name": "equivVectorBy",
          "normalized": "LEq a-\u003eb a-\u003eVector Int",
          "package": "rangemin",
          "partial": "Vector By",
          "signature": "LEq a-\u003ev a-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-Cartesian.html#v:equivVectorBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for finding \u003cem\u003elowest common ancestors\u003c/em\u003e in binary trees in \u003cem\u003eO(1)\u003c/em\u003e time, with \u003cem\u003eO(n)\u003c/em\u003e preprocessing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Binary",
          "package": "rangemin",
          "source": "src/Data-RangeMin-LCA-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for finding lowest common ancestors in binary trees in time with preprocessing",
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Binary",
          "package": "rangemin",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic binary tree.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "BinTree",
          "package": "rangemin",
          "source": "src/Data-RangeMin-LCA-Binary.html#BinTree",
          "type": "data"
        },
        "index": {
          "description": "generic binary tree",
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "BinTree",
          "package": "rangemin",
          "partial": "Bin Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#t:BinTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a vector index.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Index",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#Index",
          "type": "type"
        },
        "index": {
          "description": "The type of vector index",
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Index",
          "package": "rangemin",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RangeMin.LCA.Binary",
          "name": "BinTree",
          "package": "rangemin",
          "signature": "BinTree a (BinTree a) (BinTree a)",
          "source": "src/Data-RangeMin-LCA-Binary.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "BinTree",
          "package": "rangemin",
          "partial": "Bin Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#v:BinTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Tip",
          "package": "rangemin",
          "signature": "Tip",
          "source": "src/Data-RangeMin-LCA-Binary.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "Tip",
          "package": "rangemin",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#v:Tip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003eLCA.lowestCommonAncestor\u003c/code\u003e, but optimized for binary trees.  This method can reasonably\n be expected to run twice as fast as \u003ccode\u003elowestCommonAncestor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "lcaBinary",
          "package": "rangemin",
          "signature": "Int -\u003e (a -\u003e Index) -\u003e BinTree a -\u003e Index -\u003e Index -\u003e a",
          "source": "src/Data-RangeMin-LCA-Binary.html#lcaBinary",
          "type": "function"
        },
        "index": {
          "description": "Similar to LCA.lowestCommonAncestor but optimized for binary trees This method can reasonably be expected to run twice as fast as lowestCommonAncestor",
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "lcaBinary",
          "normalized": "Int-\u003e(a-\u003eIndex)-\u003eBinTree a-\u003eIndex-\u003eIndex-\u003ea",
          "package": "rangemin",
          "partial": "Binary",
          "signature": "Int-\u003e(a-\u003eIndex)-\u003eBinTree a-\u003eIndex-\u003eIndex-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#v:lcaBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a binary tree and indexes it inorder, returning the number of nodes, the indexed\n tree, and the lowest common ancestor function.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "quickLCABinary",
          "package": "rangemin",
          "signature": "BinTree a -\u003e (Int, BinTree (Index, a), Index -\u003e Index -\u003e (Index, a))",
          "source": "src/Data-RangeMin-LCA-Binary.html#quickLCABinary",
          "type": "function"
        },
        "index": {
          "description": "Takes binary tree and indexes it inorder returning the number of nodes the indexed tree and the lowest common ancestor function",
          "hierarchy": "Data RangeMin LCA Binary",
          "module": "Data.RangeMin.LCA.Binary",
          "name": "quickLCABinary",
          "normalized": "BinTree a-\u003e(Int,BinTree(Index,a),Index-\u003eIndex-\u003e(Index,a))",
          "package": "rangemin",
          "partial": "LCABinary",
          "signature": "BinTree a-\u003e(Int,BinTree(Index,a),Index-\u003eIndex-\u003e(Index,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA-Binary.html#v:quickLCABinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for finding \u003cem\u003elowest common ancestors\u003c/em\u003e in trees in \u003cem\u003eO(1)\u003c/em\u003e time, with \u003cem\u003eO(n)\u003c/em\u003e preprocessing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RangeMin.LCA",
          "name": "LCA",
          "package": "rangemin",
          "source": "src/Data-RangeMin-LCA.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for finding lowest common ancestors in trees in time with preprocessing",
          "hierarchy": "Data RangeMin LCA",
          "module": "Data.RangeMin.LCA",
          "name": "LCA",
          "package": "rangemin",
          "partial": "LCA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a vector index.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA",
          "name": "Index",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#Index",
          "type": "type"
        },
        "index": {
          "description": "The type of vector index",
          "hierarchy": "Data RangeMin LCA",
          "module": "Data.RangeMin.LCA",
          "name": "Index",
          "package": "rangemin",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elowestCommonAncestor\u003c/a\u003e\u003c/code\u003e n ix tree\u003c/code\u003e takes a tree whose nodes are mapped by\n \u003ccode\u003eix\u003c/code\u003e to a unique index in the range \u003ccode\u003e0..n-1\u003c/code\u003e, and returns a function\n which takes two indices (corresponding to two nodes in the tree) and returns\n the label of their \u003cem\u003elowest common ancestor\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis takes \u003cem\u003eO(n)\u003c/em\u003e preprocessing and answers queries in \u003cem\u003eO(1)\u003c/em\u003e, as it is an\n application of \u003ca\u003eData.RangeMin\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFor binary trees, consider using \u003ca\u003eData.RangeMin.LCA.Binary\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA",
          "name": "lowestCommonAncestor",
          "package": "rangemin",
          "signature": "Int -\u003e (a -\u003e Index) -\u003e Tree a -\u003e Index -\u003e Index -\u003e a",
          "source": "src/Data-RangeMin-LCA.html#lowestCommonAncestor",
          "type": "function"
        },
        "index": {
          "description": "lowestCommonAncestor ix tree takes tree whose nodes are mapped by ix to unique index in the range n-1 and returns function which takes two indices corresponding to two nodes in the tree and returns the label of their lowest common ancestor This takes preprocessing and answers queries in as it is an application of Data.RangeMin For binary trees consider using Data.RangeMin.LCA.Binary",
          "hierarchy": "Data RangeMin LCA",
          "module": "Data.RangeMin.LCA",
          "name": "lowestCommonAncestor",
          "normalized": "Int-\u003e(a-\u003eIndex)-\u003eTree a-\u003eIndex-\u003eIndex-\u003ea",
          "package": "rangemin",
          "partial": "Common Ancestor",
          "signature": "Int-\u003e(a-\u003eIndex)-\u003eTree a-\u003eIndex-\u003eIndex-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA.html#v:lowestCommonAncestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a tree and indexes it in depth-first order, returning the number of nodes, the indexed\n tree, and the lowest common ancestor function.\n\u003c/p\u003e",
          "module": "Data.RangeMin.LCA",
          "name": "quickLCA",
          "package": "rangemin",
          "signature": "Tree a -\u003e (Int, Tree (Index, a), Index -\u003e Index -\u003e (Index, a))",
          "source": "src/Data-RangeMin-LCA.html#quickLCA",
          "type": "function"
        },
        "index": {
          "description": "Takes tree and indexes it in depth-first order returning the number of nodes the indexed tree and the lowest common ancestor function",
          "hierarchy": "Data RangeMin LCA",
          "module": "Data.RangeMin.LCA",
          "name": "quickLCA",
          "normalized": "Tree a-\u003e(Int,Tree(Index,a),Index-\u003eIndex-\u003e(Index,a))",
          "package": "rangemin",
          "partial": "LCA",
          "signature": "Tree a-\u003e(Int,Tree(Index,a),Index-\u003eIndex-\u003e(Index,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin-LCA.html#v:quickLCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsider the following function, which, given \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ek\u003c/code\u003e, finds the index of \n the minimum element in the range \u003ccode\u003ei..i+k-1\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e\n rangeMin :: \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e v a =\u003e (a -\u003e a -\u003e \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e) -\u003e v a -\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n rangeMin cmp xs i k = i + \u003ccode\u003e\u003ca\u003eminIndexBy\u003c/a\u003e\u003c/code\u003e cmp (\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e i k xs)\n\u003c/pre\u003e\u003cp\u003eThis module implements functions which, given a fixed comparison function, preprocess\n an array in \u003cem\u003eO(n)\u003c/em\u003e time to support queries of this form in \u003cem\u003eO(1)\u003c/em\u003e time.\n\u003c/p\u003e\u003cp\u003eFor all methods in this module, ties are broken by which element comes first in the array.\n\u003c/p\u003e\u003cp\u003eWhen certain methods are called on an element type which has a natural, order-preserving \n injection into \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e -- specifically, on instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e -- this module is \n smart enough to (fusibly) convert the vector into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and to use \n \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e as appropriate.  Though you cannot make your\n own instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsafeInjectRangeMin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einjectRangeMin\u003c/a\u003e\u003c/code\u003e work the same\n way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RangeMin",
          "name": "RangeMin",
          "package": "rangemin",
          "source": "src/Data-RangeMin.html",
          "type": "module"
        },
        "index": {
          "description": "Consider the following function which given and finds the index of the minimum element in the range i..i k-1 rangeMin Vector Ordering Int Int Int rangeMin cmp xs minIndexBy cmp slice xs This module implements functions which given fixed comparison function preprocess an array in time to support queries of this form in time For all methods in this module ties are broken by which element comes first in the array When certain methods are called on an element type which has natural order-preserving injection into Int specifically on instances of Injective this module is smart enough to fusibly convert the vector into Vector Int and to use unsafeIntRangeMin or intRangeMin as appropriate Though you cannot make your own instances of Injective unsafeInjectRangeMin and injectRangeMin work the same way",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "RangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a vector index.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "Index",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#Index",
          "type": "type"
        },
        "index": {
          "description": "The type of vector index",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "Index",
          "package": "rangemin",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type is an instance of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e if it has a natural order-preserving injection\n into \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, typically but not always \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.  Functions like \u003ccode\u003erangeMin\u003c/code\u003e and \n \u003ccode\u003eunsafeVecRangeMax\u003c/code\u003e which use the element type's natural ordering may be auto-specialized \n when the element type is an \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "Injective",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Cartesian-Spec.html#Injective",
          "type": "class"
        },
        "index": {
          "description": "type is an instance of Injective if it has natural order-preserving injection into Int typically but not always fromEnum Functions like rangeMin and unsafeVecRangeMax which use the element type natural ordering may be auto-specialized when the element type is an Injective instance",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "Injective",
          "package": "rangemin",
          "partial": "Injective",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#t:Injective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLEq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is used as if it were \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for comparison purposes.\n This function \u003cem\u003emust\u003c/em\u003e be a total ordering.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "LEq",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#LEq",
          "type": "type"
        },
        "index": {
          "description": "function of type LEq is used as if it were for comparison purposes This function must be total ordering",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "LEq",
          "package": "rangemin",
          "partial": "LEq",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#t:LEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the length of a vector.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "Length",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#Length",
          "type": "type"
        },
        "index": {
          "description": "The type of the length of vector",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "Length",
          "package": "rangemin",
          "partial": "Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range min function.  Given an index \u003ccode\u003ei\u003c/code\u003e and a length \u003ccode\u003em\u003c/code\u003e, returns the \n minimum element in the range \u003ccode\u003ei..i+m-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "RangeMin",
          "package": "rangemin",
          "source": "src/Data-RangeMin-Common-Types.html#RangeMin",
          "type": "type"
        },
        "index": {
          "description": "range min function Given an index and length returns the minimum element in the range i..i m-1",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "RangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#t:RangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003einjectRangeMax\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e is equivalent to\t\t\t\t\u003ccode\u003e\u003ccode\u003e\u003ca\u003evecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ x y -\u003e f x \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f y) xs\u003c/code\u003e, but is frequently much faster,\t\t\t\tfusing with the input vector and converting it directly to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "injectRangeMax",
          "package": "rangemin",
          "signature": "(a -\u003e Int)-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "injectRangeMax xs is equivalent to vecRangeMinBy xs but is frequently much faster fusing with the input vector and converting it directly to Vector Int The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "injectRangeMax",
          "normalized": "(a-\u003eInt)-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Max",
          "signature": "(a-\u003eInt)-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:injectRangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003einjectRangeMin\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e is equivalent to\t\t\t\t\u003ccode\u003e\u003ccode\u003e\u003ca\u003evecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ x y -\u003e f x \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e f y) xs\u003c/code\u003e, but is frequently much faster,\t\t\t\tfusing with the input vector and converting it directly to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "injectRangeMin",
          "package": "rangemin",
          "signature": "(a -\u003e Int)-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "injectRangeMin xs is equivalent to vecRangeMinBy xs but is frequently much faster fusing with the input vector and converting it directly to Vector Int The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "injectRangeMin",
          "normalized": "(a-\u003eInt)-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "signature": "(a-\u003eInt)-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:injectRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a range-min function on the vector, with the natural ordering of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n This function can be, depending on the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e implementation, three to four\n times as fast as \u003ccode\u003e\u003ccode\u003evecRangeMinBy\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e, except that the returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks.\n When it receives a bad query, it throws an \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "intRangeMin",
          "package": "rangemin",
          "signature": "Vector Int-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Returns range-min function on the vector with the natural ordering of Int This function can be depending on the Vector implementation three to four times as fast as vecRangeMinBy Equivalent to unsafeIntRangeMin except that the returned function does do bounds checks When it receives bad query it throws an ArrayException",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "intRangeMin",
          "normalized": "Vector Int-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "signature": "Vector Int-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:intRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and a safer version of \u003ccode\u003e\u003ca\u003eunsafeRangeMax\u003c/a\u003e\u003c/code\u003e.\n Specialized for instances of \u003ccode\u003eInjective\u003c/code\u003e. The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003eintRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "rangeMax",
          "package": "rangemin",
          "signature": "Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to rangeMinBy and safer version of unsafeRangeMax Specialized for instances of Injective The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "rangeMax",
          "normalized": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Max",
          "signature": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:rangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and a safer version of \u003ccode\u003e\u003ca\u003eunsafeRangeMin\u003c/a\u003e\u003c/code\u003e.\n Specialized for instances of \u003ccode\u003eInjective\u003c/code\u003e. The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003eintRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "rangeMin",
          "package": "rangemin",
          "signature": "Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to rangeMinBy and safer version of unsafeRangeMin Specialized for instances of Injective The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "rangeMin",
          "normalized": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Min",
          "signature": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:rangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003erangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003c=?) n look\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003evecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003c=?) (\u003ccode\u003e\u003ca\u003egenerate\u003c/a\u003e\u003c/code\u003e n look)\u003c/code\u003e,\n and is a safer version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003c=?) n look\u003c/code\u003e.  The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003eintRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "rangeMinBy",
          "package": "rangemin",
          "signature": "LEq a-\u003e Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "rangeMinBy look is equivalent to vecRangeMinBy generate look and is safer version of unsafeRangeMinBy look The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "rangeMinBy",
          "normalized": "LEq a-\u003eLength-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Min By",
          "signature": "LEq a-\u003eLength-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:rangeMinBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeInjectRangeMax\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e is equivalent to\t\t\t\t\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ x y -\u003e f x \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f y) xs\u003c/code\u003e, but is frequently much faster,\t\t\t\tfusing with the input vector and converting it directly to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks;\n see \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeInjectRangeMax",
          "package": "rangemin",
          "signature": "(a -\u003e Int)-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "unsafeInjectRangeMax xs is equivalent to unsafeVecRangeMinBy xs but is frequently much faster fusing with the input vector and converting it directly to Vector Int The returned function does not do bounds checks see unsafeIntRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeInjectRangeMax",
          "normalized": "(a-\u003eInt)-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Inject Range Max",
          "signature": "(a-\u003eInt)-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeInjectRangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeInjectRangeMin\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e is equivalent to\t\t\t\t\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ x y -\u003e f x \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e f y) xs\u003c/code\u003e, but is frequently much faster,\t\t\t\tfusing with the input vector and converting it directly to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks;\n see \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeInjectRangeMin",
          "package": "rangemin",
          "signature": "(a -\u003e Int)-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "unsafeInjectRangeMin xs is equivalent to unsafeVecRangeMinBy xs but is frequently much faster fusing with the input vector and converting it directly to Vector Int The returned function does not do bounds checks see unsafeIntRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeInjectRangeMin",
          "normalized": "(a-\u003eInt)-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Inject Range Min",
          "signature": "(a-\u003eInt)-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeInjectRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a range-min function on the vector, under the natural ordering of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n This function can be, depending on the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e implementation, three to four\n times as fast as \u003ccode\u003e\u003ccode\u003eunsafeVecRangeMinBy\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [0,7,-10,4,5,4]) 0 6 == 2\n \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [0,7,-10,4,5,4]) 2 3 == 2\n \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [0,7,-10,4,5,4]) 3 3 == 3\n\u003c/pre\u003e\u003cp\u003eThe returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks.  If \u003ccode\u003en\u003c/code\u003e is the length of the vector,\n and \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e are passed as arguments to the \u003ccode\u003e\u003ca\u003eRangeMin\u003c/a\u003e\u003c/code\u003e, then if \u003ccode\u003ei \u003c 0\u003c/code\u003e, \u003ccode\u003em \u003c 1\u003c/code\u003e, or\n \u003ccode\u003ei + m \u003e n\u003c/code\u003e, a segfault may occur.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeIntRangeMin",
          "package": "rangemin",
          "signature": "Vector Int-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Returns range-min function on the vector under the natural ordering of Int This function can be depending on the Vector implementation three to four times as fast as unsafeVecRangeMinBy Example unsafeIntRangeMin fromList unsafeIntRangeMin fromList unsafeIntRangeMin fromList The returned function does not do bounds checks If is the length of the vector and and are passed as arguments to the RangeMin then if or segfault may occur",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeIntRangeMin",
          "normalized": "Vector Int-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Int Range Min",
          "signature": "Vector Int-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeIntRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  Specialized for instances of \u003ccode\u003eInjective\u003c/code\u003e.\n The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003eunsafeIntRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMax",
          "package": "rangemin",
          "signature": "Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to unsafeRangeMinBy Specialized for instances of Injective The returned function does not do bounds checks see unsafeIntRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMax",
          "normalized": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Max",
          "signature": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeRangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  Specialized for instances of \u003ccode\u003eInjective\u003c/code\u003e.\n The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003eunsafeIntRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMin",
          "package": "rangemin",
          "signature": "Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to unsafeRangeMinBy Specialized for instances of Injective The returned function does not do bounds checks see unsafeIntRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMin",
          "normalized": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "signature": "Length-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003c=?) n look\u003c/code\u003e is equivalent to \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003c=?) (\u003ccode\u003e\u003ca\u003egenerate\u003c/a\u003e\u003c/code\u003e n look)\u003c/code\u003e. The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003eunsafeIntRangeMin\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMinBy",
          "package": "rangemin",
          "signature": "LEq a-\u003e Length-\u003e (Index -\u003e a)-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "unsafeRangeMinBy look is equivalent to unsafeVecRangeMinBy generate look The returned function does not do bounds checks see unsafeIntRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeRangeMinBy",
          "normalized": "LEq a-\u003eLength-\u003e(Index-\u003ea)-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min By",
          "signature": "LEq a-\u003eLength-\u003e(Index-\u003ea)-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeRangeMinBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  Specialized for instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e.\n The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n -- In reality, these would be rewritten into calls to \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e, since \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n -- is an instance of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMax\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 0 6 == 2\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMax\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 1 1 == 1\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMax\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 3 3 == 4\n\u003c/pre\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMax",
          "package": "rangemin",
          "signature": "v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to unsafeVecRangeMinBy Specialized for instances of Injective The returned function does not do bounds checks see unsafeIntRangeMin for details Example In reality these would be rewritten into calls to unsafeIntRangeMin since Char is an instance of Injective unsafeVecRangeMax PV.fromList banana unsafeVecRangeMax PV.fromList banana unsafeVecRangeMax PV.fromList banana",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMax",
          "normalized": "a b-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Vec Range Max",
          "signature": "v a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeVecRangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  Specialized for instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e.\n The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n -- In reality, these would be rewritten into calls to \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e, since \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an\n -- instance of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 0 6 == 1\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 1 1 == 1\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003ePV.fromList\u003c/code\u003e \"banana\") 3 3 == 3\n\u003c/pre\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMin",
          "package": "rangemin",
          "signature": "v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to unsafeVecRangeMinBy Specialized for instances of Injective The returned function does not do bounds checks see unsafeIntRangeMin for details Example In reality these would be rewritten into calls to unsafeIntRangeMin since Char is an instance of Injective unsafeVecRangeMin PV.fromList banana unsafeVecRangeMin PV.fromList banana unsafeVecRangeMin PV.fromList banana",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMin",
          "normalized": "a b-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Vec Range Min",
          "signature": "v a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeVecRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a range-min function on the vector, under the specified ordering.\n The returned function \u003cem\u003edoes not\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eunsafeIntRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n -- Finding the element with the \u003cem\u003elargest absolute value\u003c/em\u003e in a subrange.\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ i j -\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e i \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e j) (\u003ccode\u003ePV.fromList\u003c/code\u003e [0,7,-10,4,5,4]) 0 6 == 2\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ i j -\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e i \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e j) (\u003ccode\u003ePV.fromList\u003c/code\u003e [0,7,-10,4,5,4]) 2 3 == 2\n \u003ccode\u003e\u003ca\u003eunsafeVecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\\ i j -\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e i \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e j) (\u003ccode\u003ePV.fromList\u003c/code\u003e [0,7,-10,4,5,4]) 3 3 == 4\n\u003c/pre\u003e",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMinBy",
          "package": "rangemin",
          "signature": "LEq a-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Returns range-min function on the vector under the specified ordering The returned function does not do bounds checks see unsafeIntRangeMin for details Example Finding the element with the largest absolute value in subrange unsafeVecRangeMinBy abs abs PV.fromList unsafeVecRangeMinBy abs abs PV.fromList unsafeVecRangeMinBy abs abs PV.fromList",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "unsafeVecRangeMinBy",
          "normalized": "LEq a-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Vec Range Min By",
          "signature": "LEq a-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:unsafeVecRangeMinBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003evecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e; a safer version of \u003ccode\u003e\u003ca\u003eunsafeVecRangeMax\u003c/a\u003e\u003c/code\u003e.\n Specialized for instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e. The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "vecRangeMax",
          "package": "rangemin",
          "signature": "v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to vecRangeMinBy safer version of unsafeVecRangeMax Specialized for instances of Injective The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "vecRangeMax",
          "normalized": "a b-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Max",
          "signature": "v a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:vecRangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003evecRangeMinBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e; a safer version of \u003ccode\u003e\u003ca\u003eunsafeVecRangeMin\u003c/a\u003e\u003c/code\u003e.\n Specialized for instances of \u003ccode\u003e\u003ca\u003eInjective\u003c/a\u003e\u003c/code\u003e.  The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "vecRangeMin",
          "package": "rangemin",
          "signature": "v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to vecRangeMinBy safer version of unsafeVecRangeMin Specialized for instances of Injective The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "vecRangeMin",
          "normalized": "a b-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min",
          "signature": "v a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:vecRangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a range-min function on the vector, under the specified ordering.\n The returned function \u003cem\u003edoes\u003c/em\u003e do bounds checks; see \u003ccode\u003e\u003ca\u003eintRangeMin\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.RangeMin",
          "name": "vecRangeMinBy",
          "package": "rangemin",
          "signature": "LEq a-\u003e v a-\u003e RangeMin",
          "type": "function"
        },
        "index": {
          "description": "Returns range-min function on the vector under the specified ordering The returned function does do bounds checks see intRangeMin for details",
          "hierarchy": "Data RangeMin",
          "module": "Data.RangeMin",
          "name": "vecRangeMinBy",
          "normalized": "LEq a-\u003eb a-\u003eRangeMin",
          "package": "rangemin",
          "partial": "Range Min By",
          "signature": "LEq a-\u003ev a-\u003eRangeMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rangemin/docs/Data-RangeMin.html#v:vecRangeMinBy"
      }
    }
  ]
]