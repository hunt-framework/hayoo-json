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
        "word": "dual-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides access to all of the internals of the\n DUAL-tree implementation.  Depend on the internals at your own\n risk!  For a safe public API (and complete documentation), see\n \u003ca\u003eData.Tree.DUAL\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe main things exported by this module which are not exported from\n \u003ca\u003eData.Tree.DUAL\u003c/a\u003e are two extra types used in the implementation of\n \u003ccode\u003e\u003ca\u003eDUALTree\u003c/a\u003e\u003c/code\u003e, along with functions for manipulating them.  A type of\n \u003cem\u003enon-empty\u003c/em\u003e trees, \u003ccode\u003e\u003ca\u003eDUALTreeNE\u003c/a\u003e\u003c/code\u003e, is defined, as well as the type\n \u003ccode\u003e\u003ca\u003eDUALTreeU\u003c/a\u003e\u003c/code\u003e which represents a non-empty tree paired with a cached\n \u003ccode\u003eu\u003c/code\u003e annotation.  \u003ccode\u003e\u003ca\u003eDUALTreeNE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDUALTreeU\u003c/a\u003e\u003c/code\u003e are mutually\n recursive, so that recursive tree nodes are interleaved with cached\n \u003ccode\u003eu\u003c/code\u003e annotations.  \u003ccode\u003e\u003ca\u003eDUALTree\u003c/a\u003e\u003c/code\u003e is defined by just wrapping\n \u003ccode\u003e\u003ca\u003eDUALTreeU\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e.  This method has the advantage that the\n type system enforces the invariant that there is only one\n representation for the empty tree.  It also allows us to get away\n with only \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e constraints in many places.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Internal",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides access to all of the internals of the DUAL-tree implementation Depend on the internals at your own risk For safe public API and complete documentation see Data.Tree.DUAL The main things exported by this module which are not exported from Data.Tree.DUAL are two extra types used in the implementation of DUALTree along with functions for manipulating them type of non-empty trees DUALTreeNE is defined as well as the type DUALTreeU which represents non-empty tree paired with cached annotation DUALTreeNE and DUALTreeU are mutually recursive so that recursive tree nodes are interleaved with cached annotations DUALTree is defined by just wrapping DUALTreeU in Option This method has the advantage that the type system enforces the invariant that there is only one representation for the empty tree It also allows us to get away with only Semigroup constraints in many places",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Internal",
          "package": "dual-tree",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRose (n-ary) trees with both upwards- (\u003cem\u003ei.e.\u003c/em\u003e cached) and\n   downwards-traveling (\u003cem\u003ei.e.\u003c/em\u003e accumulating) monoidal annotations.\n   Abstractly, a DUALTree is a rose (n-ary) tree with data (of type\n   \u003ccode\u003el\u003c/code\u003e) at leaves, data (of type \u003ccode\u003ea\u003c/code\u003e) at internal nodes, and two\n   types of monoidal annotations, one (of type \u003ccode\u003eu\u003c/code\u003e) travelling\n   \"up\" the tree and one (of type \u003ccode\u003ed\u003c/code\u003e) traveling \"down\".  See\n   the documentation at the top of this file for full details.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDUALTree\u003c/code\u003e comes with some instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, for modifying leaf data.  Note that \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e of course\n     cannot alter any \u003ccode\u003eu\u003c/code\u003e annotations.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eDUALTreeNE\u003c/code\u003es form a semigroup where \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e\n     corresponds to adjoining two trees under a common parent root,\n     with \u003ccode\u003esconcat\u003c/code\u003e specialized to put all the trees under a single\n     parent.  Note that this does not satisfy associativity up to\n     structural equality, but only up to observational equivalence\n     under \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.  Technically using \u003ccode\u003e\u003ca\u003efoldDUAL\u003c/a\u003e\u003c/code\u003e directly enables\n     one to observe the difference, but it is understood that\n     \u003ccode\u003e\u003ca\u003efoldDUAL\u003c/a\u003e\u003c/code\u003e should be used only in ways such that reassociation\n     of subtrees \"does not matter\".\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. The identity is the empty tree.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTree",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTree",
          "type": "newtype"
        },
        "index": {
          "description": "Rose n-ary trees with both upwards i.e cached and downwards-traveling i.e accumulating monoidal annotations Abstractly DUALTree is rose n-ary tree with data of type at leaves data of type at internal nodes and two types of monoidal annotations one of type travelling up the tree and one of type traveling down See the documentation at the top of this file for full details DUALTree comes with some instances Functor for modifying leaf data Note that fmap of course cannot alter any annotations Semigroup DUALTreeNE form semigroup where corresponds to adjoining two trees under common parent root with sconcat specialized to put all the trees under single parent Note that this does not satisfy associativity up to structural equality but only up to observational equivalence under flatten Technically using foldDUAL directly enables one to observe the difference but it is understood that foldDUAL should be used only in ways such that reassociation of subtrees does not matter Monoid The identity is the empty tree",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTree",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#t:DUALTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eNon-empty\u003c/em\u003e DUAL-trees.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeNE",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "data"
        },
        "index": {
          "description": "Non-empty DUAL-trees",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeNE",
          "package": "dual-tree",
          "partial": "DUALTree NE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#t:DUALTreeNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-empty DUAL-tree paired with a cached \u003ccode\u003eu\u003c/code\u003e value.  These\n   should never be constructed directly; instead, use \u003ccode\u003epullU\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeU",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeU",
          "type": "newtype"
        },
        "index": {
          "description": "non-empty DUAL-tree paired with cached value These should never be constructed directly instead use pullU",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeU",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#t:DUALTreeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ed\u003c/code\u003e annotation\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Act",
          "package": "dual-tree",
          "signature": "Act d (DUALTreeU d u a l)",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "function"
        },
        "index": {
          "description": "annotation",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Act",
          "package": "dual-tree",
          "partial": "Act",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:Act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal data value\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Annot",
          "package": "dual-tree",
          "signature": "Annot a (DUALTreeU d u a l)",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "function"
        },
        "index": {
          "description": "Internal data value",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Annot",
          "package": "dual-tree",
          "partial": "Annot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:Annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003en-way branch, containing a \u003cem\u003enon-empty\u003c/em\u003e list\n   of subtrees.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Concat",
          "package": "dual-tree",
          "signature": "Concat (NonEmpty (DUALTreeU d u a l))",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "function"
        },
        "index": {
          "description": "n-way branch containing non-empty list of subtrees",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Concat",
          "package": "dual-tree",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTree",
          "package": "dual-tree",
          "signature": "DUALTree",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTree",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:DUALTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeU",
          "package": "dual-tree",
          "signature": "DUALTreeU",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "DUALTreeU",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:DUALTreeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeaf with data value and \u003ccode\u003eu\u003c/code\u003e annotation\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Leaf",
          "package": "dual-tree",
          "signature": "Leaf u l",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "function"
        },
        "index": {
          "description": "Leaf with data value and annotation",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "Leaf",
          "package": "dual-tree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeaf with only \u003ccode\u003eu\u003c/code\u003e annotation\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "LeafU",
          "package": "dual-tree",
          "signature": "LeafU u",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeNE",
          "type": "function"
        },
        "index": {
          "description": "Leaf with only annotation",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "LeafU",
          "package": "dual-tree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:LeafU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an internal data value at the root of a tree.  Note that this\n   only works on \u003cem\u003enon-empty\u003c/em\u003e trees; on empty trees this function is\n   the identity.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "annot",
          "package": "dual-tree",
          "signature": "a -\u003e DUALTree d u a l -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#annot",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:annot\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:annot\"]"
        },
        "index": {
          "description": "Add an internal data value at the root of tree Note that this only works on non-empty trees on empty trees this function is the identity",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "annot",
          "normalized": "a-\u003eDUALTree b c a d-\u003eDUALTree b c a d",
          "package": "dual-tree",
          "signature": "a-\u003eDUALTree d u a l-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003ed\u003c/code\u003e annotation at the root of a tree, transforming all\n   \u003ccode\u003eu\u003c/code\u003e annotations by the action of \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "applyD",
          "package": "dual-tree",
          "signature": "d -\u003e DUALTree d u a l -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#applyD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyD\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:applyD\"]"
        },
        "index": {
          "description": "Apply annotation at the root of tree transforming all annotations by the action of",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "applyD",
          "normalized": "a-\u003eDUALTree a b c d-\u003eDUALTree a b c d",
          "package": "dual-tree",
          "signature": "d-\u003eDUALTree d u a l-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003eu\u003c/code\u003e annotation to the root, combining it (on the right) with\n   the existing cached \u003ccode\u003eu\u003c/code\u003e annotation.  This function is provided\n   just for convenience; \u003ccode\u003eapplyUpost u t = t \u003c\u003e \u003ccode\u003e\u003ca\u003eleafU\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "applyUpost",
          "package": "dual-tree",
          "signature": "u -\u003e DUALTree d u a l -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#applyUpost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyUpost\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:applyUpost\"]"
        },
        "index": {
          "description": "Add annotation to the root combining it on the right with the existing cached annotation This function is provided just for convenience applyUpost leafU",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "applyUpost",
          "normalized": "a-\u003eDUALTree b a c d-\u003eDUALTree b a c d",
          "package": "dual-tree",
          "partial": "Upost",
          "signature": "u-\u003eDUALTree d u a l-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyUpost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003eu\u003c/code\u003e annotation to the root, combining it (on the left) with\n   the existing cached \u003ccode\u003eu\u003c/code\u003e annotation.  This function is provided\n   just for convenience; \u003ccode\u003eapplyUpre u t = \u003ccode\u003e\u003ca\u003eleafU\u003c/a\u003e\u003c/code\u003e u \u003c\u003e t\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "applyUpre",
          "package": "dual-tree",
          "signature": "u -\u003e DUALTree d u a l -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#applyUpre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyUpre\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:applyUpre\"]"
        },
        "index": {
          "description": "Add annotation to the root combining it on the left with the existing cached annotation This function is provided just for convenience applyUpre leafU",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "applyUpre",
          "normalized": "a-\u003eDUALTree b a c d-\u003eDUALTree b a c d",
          "package": "dual-tree",
          "partial": "Upre",
          "signature": "u-\u003eDUALTree d u a l-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:applyUpre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty DUAL-tree.  This is a synonym for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, but with a\n   more general type.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "empty",
          "package": "dual-tree",
          "signature": "DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:empty\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:empty\"]"
        },
        "index": {
          "description": "The empty DUAL-tree This is synonym for mempty but with more general type",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "empty",
          "package": "dual-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized fold provided for convenience: flatten a tree into\n   a list of leaves along with their \u003ccode\u003ed\u003c/code\u003e annotations, ignoring\n   internal data values.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "flatten",
          "package": "dual-tree",
          "signature": "DUALTree d u a l -\u003e [(l, d)]",
          "source": "src/Data-Tree-DUAL-Internal.html#flatten",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:flatten\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:flatten\"]"
        },
        "index": {
          "description": "specialized fold provided for convenience flatten tree into list of leaves along with their annotations ignoring internal data values",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "flatten",
          "normalized": "DUALTree a b c d-\u003e[(d,a)]",
          "package": "dual-tree",
          "signature": "DUALTree d u a l-\u003e[(l,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold for DUAL-trees. It is given access to the internal and leaf\n   data, internal \u003ccode\u003ed\u003c/code\u003e values, and the accumulated \u003ccode\u003ed\u003c/code\u003e values at each\n   leaf.  It is also allowed to replace \"\u003ccode\u003eu\u003c/code\u003e-only\" leaves with a\n   constant value.  In particular, however, it is \u003cem\u003enot\u003c/em\u003e given access\n   to any of the \u003ccode\u003eu\u003c/code\u003e annotations, the idea being that those are used\n   only for \u003cem\u003econstructing\u003c/em\u003e trees.  If you do need access to \u003ccode\u003eu\u003c/code\u003e\n   values, you can duplicate the values you need in the internal\n   data nodes.\n\u003c/p\u003e\u003cp\u003eBe careful not to mix up the \u003ccode\u003ed\u003c/code\u003e values at internal nodes with\n   the \u003ccode\u003ed\u003c/code\u003e values at leaves.  Each \u003ccode\u003ed\u003c/code\u003e value at a leaf satisfies the\n   property that it is the \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e of all internal \u003ccode\u003ed\u003c/code\u003e values\n   along the path from the root to the leaf.\n\u003c/p\u003e\u003cp\u003eThe result is \u003ccode\u003eNothing\u003c/code\u003e if and only if the tree is empty.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "foldDUAL",
          "package": "dual-tree",
          "signature": "(d -\u003e l -\u003e r)-\u003e r-\u003e (NonEmpty r -\u003e r)-\u003e (d -\u003e r -\u003e r)-\u003e (a -\u003e r -\u003e r)-\u003e DUALTree d u a l-\u003e Maybe r",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:foldDUAL\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:foldDUAL\"]"
        },
        "index": {
          "description": "Fold for DUAL-trees It is given access to the internal and leaf data internal values and the accumulated values at each leaf It is also allowed to replace only leaves with constant value In particular however it is not given access to any of the annotations the idea being that those are used only for constructing trees If you do need access to values you can duplicate the values you need in the internal data nodes Be careful not to mix up the values at internal nodes with the values at leaves Each value at leaf satisfies the property that it is the mconcat of all internal values along the path from the root to the leaf The result is Nothing if and only if the tree is empty",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "foldDUAL",
          "normalized": "(a-\u003eb-\u003ec)-\u003ec-\u003e(NonEmpty c-\u003ec)-\u003e(a-\u003ec-\u003ec)-\u003e(d-\u003ec-\u003ec)-\u003eDUALTree a e d b-\u003eMaybe c",
          "package": "dual-tree",
          "partial": "DUAL",
          "signature": "(d-\u003el-\u003er)-\u003er-\u003e(NonEmpty r-\u003er)-\u003e(d-\u003er-\u003er)-\u003e(a-\u003er-\u003er)-\u003eDUALTree d u a l-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:foldDUAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold for non-empty DUAL-trees.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "foldDUALNE",
          "package": "dual-tree",
          "signature": "(d -\u003e l -\u003e r)-\u003e r-\u003e (NonEmpty r -\u003e r)-\u003e (d -\u003e r -\u003e r)-\u003e (a -\u003e r -\u003e r)-\u003e DUALTreeNE d u a l-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Fold for non-empty DUAL-trees",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "foldDUALNE",
          "normalized": "(a-\u003eb-\u003ec)-\u003ec-\u003e(NonEmpty c-\u003ec)-\u003e(a-\u003ec-\u003ec)-\u003e(d-\u003ec-\u003ec)-\u003eDUALTreeNE a e d b-\u003ec",
          "package": "dual-tree",
          "partial": "DUALNE",
          "signature": "(d-\u003el-\u003er)-\u003er-\u003e(NonEmpty r-\u003er)-\u003e(d-\u003er-\u003er)-\u003e(a-\u003er-\u003er)-\u003eDUALTreeNE d u a l-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:foldDUALNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003eu\u003c/code\u003e annotation at the root, or \u003ccode\u003eNothing\u003c/code\u003e if the tree is\n   empty.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "getU",
          "package": "dual-tree",
          "signature": "DUALTree d u a l -\u003e Maybe u",
          "source": "src/Data-Tree-DUAL-Internal.html#getU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:getU\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:getU\"]"
        },
        "index": {
          "description": "Get the annotation at the root or Nothing if the tree is empty",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "getU",
          "normalized": "DUALTree a b c d-\u003eMaybe b",
          "package": "dual-tree",
          "signature": "DUALTree d u a l-\u003eMaybe u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:getU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a leaf node from a \u003ccode\u003eu\u003c/code\u003e annotation along with a leaf\n   datum.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "leaf",
          "package": "dual-tree",
          "signature": "u -\u003e l -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#leaf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:leaf\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:leaf\"]"
        },
        "index": {
          "description": "Construct leaf node from annotation along with leaf datum",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "leaf",
          "normalized": "a-\u003eb-\u003eDUALTree c a d b",
          "package": "dual-tree",
          "signature": "u-\u003el-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a leaf node from a \u003ccode\u003eu\u003c/code\u003e annotation.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "leafU",
          "package": "dual-tree",
          "signature": "u -\u003e DUALTree d u a l",
          "source": "src/Data-Tree-DUAL-Internal.html#leafU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:leafU\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:leafU\"]"
        },
        "index": {
          "description": "Construct leaf node from annotation",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "leafU",
          "normalized": "a-\u003eDUALTree b a c d",
          "package": "dual-tree",
          "signature": "u-\u003eDUALTree d u a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:leafU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all the \u003ccode\u003eu\u003c/code\u003e annotations in a DUAL-tree.  The\n   function must be a monoid homomorphism, and must commute with the\n   action of \u003ccode\u003ed\u003c/code\u003e on \u003ccode\u003eu\u003c/code\u003e.  That is, to use \u003ccode\u003emapU f\u003c/code\u003e safely it must be\n   the case that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ef mempty == mempty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ef (u1 \u003c\u003e u2) == f u1 \u003c\u003e f u2\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ef (act d u) == act d (f u)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Tree.DUAL.Internal\",\"Data.Tree.DUAL\"]",
          "name": "mapU",
          "package": "dual-tree",
          "signature": "(u -\u003e u') -\u003e DUALTree d u a l -\u003e DUALTree d u' a l",
          "source": "src/Data-Tree-DUAL-Internal.html#mapU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:mapU\",\"http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#v:mapU\"]"
        },
        "index": {
          "description": "Map function over all the annotations in DUAL-tree The function must be monoid homomorphism and must commute with the action of on That is to use mapU safely it must be the case that mempty mempty u1 u2 u1 u2 act act",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "mapU",
          "normalized": "(a-\u003eb)-\u003eDUALTree c a d e-\u003eDUALTree c b d e",
          "package": "dual-tree",
          "signature": "(u-\u003eu')-\u003eDUALTree d u a l-\u003eDUALTree d u' a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:mapU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function (which must be a monoid homomorphism, and commute\n   with the action of \u003ccode\u003ed\u003c/code\u003e) over all the \u003ccode\u003eu\u003c/code\u003e annotations in a non-empty\n   DUAL-tree.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "mapUNE",
          "package": "dual-tree",
          "signature": "(u -\u003e u') -\u003e DUALTreeNE d u a l -\u003e DUALTreeNE d u' a l",
          "source": "src/Data-Tree-DUAL-Internal.html#mapUNE",
          "type": "function"
        },
        "index": {
          "description": "Map function which must be monoid homomorphism and commute with the action of over all the annotations in non-empty DUAL-tree",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "mapUNE",
          "normalized": "(a-\u003eb)-\u003eDUALTreeNE c a d e-\u003eDUALTreeNE c b d e",
          "package": "dual-tree",
          "partial": "UNE",
          "signature": "(u-\u003eu')-\u003eDUALTreeNE d u a l-\u003eDUALTreeNE d u' a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:mapUNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function (which must be a monoid homomorphism, and commute\n   with the action of \u003ccode\u003ed\u003c/code\u003e) over all the \u003ccode\u003eu\u003c/code\u003e annotations in a\n   non-empty DUAL-tree paired with its cached \u003ccode\u003eu\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "mapUU",
          "package": "dual-tree",
          "signature": "(u -\u003e u') -\u003e DUALTreeU d u a l -\u003e DUALTreeU d u' a l",
          "source": "src/Data-Tree-DUAL-Internal.html#mapUU",
          "type": "function"
        },
        "index": {
          "description": "Map function which must be monoid homomorphism and commute with the action of over all the annotations in non-empty DUAL-tree paired with its cached value",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "mapUU",
          "normalized": "(a-\u003eb)-\u003eDUALTreeU c a d e-\u003eDUALTreeU c b d e",
          "package": "dual-tree",
          "partial": "UU",
          "signature": "(u-\u003eu')-\u003eDUALTreeU d u a l-\u003eDUALTreeU d u' a l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:mapUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompose a DUAL-tree into either \u003ccode\u003eNothing\u003c/code\u003e (if empty) or a\n   top-level cached \u003ccode\u003eu\u003c/code\u003e annotation paired with a non-empty\n   DUAL-tree.\n\u003c/p\u003e",
          "module": "Data.Tree.DUAL.Internal",
          "name": "nonEmpty",
          "package": "dual-tree",
          "signature": "DUALTree d u a l -\u003e Maybe (u, DUALTreeNE d u a l)",
          "source": "src/Data-Tree-DUAL-Internal.html#nonEmpty",
          "type": "function"
        },
        "index": {
          "description": "Decompose DUAL-tree into either Nothing if empty or top-level cached annotation paired with non-empty DUAL-tree",
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "nonEmpty",
          "normalized": "DUALTree a b c d-\u003eMaybe(b,DUALTreeNE a b c d)",
          "package": "dual-tree",
          "partial": "Empty",
          "signature": "DUALTree d u a l-\u003eMaybe(u,DUALTreeNE d u a l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:nonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.DUAL.Internal",
          "name": "unDUALTree",
          "package": "dual-tree",
          "signature": "Option (DUALTreeU d u a l)",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "unDUALTree",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:unDUALTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.DUAL.Internal",
          "name": "unDUALTreeU",
          "package": "dual-tree",
          "signature": "(u, DUALTreeNE d u a l)",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTreeU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree DUAL Internal",
          "module": "Data.Tree.DUAL.Internal",
          "name": "unDUALTreeU",
          "normalized": "(a,DUALTreeNE b a c d)",
          "package": "dual-tree",
          "partial": "DUALTree",
          "signature": "(u,DUALTreeNE d u a l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL-Internal.html#v:unDUALTreeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRose (n-ary) trees with both upwards- (\u003cem\u003ei.e.\u003c/em\u003e cached) and\n downwards-traveling (\u003cem\u003ei.e.\u003c/em\u003e accumulating) monoidal annotations.\n This is used as the core data structure underlying the \u003ccode\u003ediagrams\u003c/code\u003e\n framework (\u003ca\u003ehttp://projects.haskell.org/diagrams\u003c/a\u003e), but potentially\n has other applications as well.\n\u003c/p\u003e\u003cp\u003eAbstractly, a DUALTree is a rose (n-ary) tree with data (of type\n \u003ccode\u003el\u003c/code\u003e) at leaves, data (of type \u003ccode\u003ea\u003c/code\u003e) at internal nodes, and two types\n of monoidal annotations, one (of type \u003ccode\u003eu\u003c/code\u003e) travelling \"up\" the\n tree and one (of type \u003ccode\u003ed\u003c/code\u003e) traveling \"down\".\n\u003c/p\u003e\u003cp\u003eSpecifically, there are five types of nodes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Leaf nodes which contain a data value of type \u003ccode\u003el\u003c/code\u003e and an\n     annotation of type \u003ccode\u003eu\u003c/code\u003e.  The annotation represents information\n     about a tree that should be accumulated (\u003cem\u003ee.g.\u003c/em\u003e number of\n     leaves, some sort of \"weight\", \u003cem\u003eetc.\u003c/em\u003e).  If you are familiar\n     with finger trees\n     (\u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e,\n     \u003ca\u003ehttp://hackage.haskell.org/package/fingertree\u003c/a\u003e), it is the\n     same idea.\n\u003c/li\u003e\u003cli\u003e There is also a special type of leaf node which contains only a\n     \u003ccode\u003eu\u003c/code\u003e value, and no data. This allows cached \u003ccode\u003eu\u003c/code\u003e values to be\n     \"modified\" by inserting extra annotations.\n\u003c/li\u003e\u003cli\u003e Branch nodes, containing a list of subtrees.\n\u003c/li\u003e\u003cli\u003e Internal nodes with a value of type \u003ccode\u003ed\u003c/code\u003e.  \u003ccode\u003ed\u003c/code\u003e may have an\n     \u003cem\u003eaction\u003c/em\u003e on \u003ccode\u003eu\u003c/code\u003e (see the \u003ccode\u003eAction\u003c/code\u003e type class, defined in\n     \u003ca\u003eData.Monoid.Action\u003c/a\u003e from the \u003ccode\u003emonoid-extras\u003c/code\u003e package).\n     Semantically speaking, applying a \u003ccode\u003ed\u003c/code\u003e annotation to a tree\n     transforms all the \u003ccode\u003eu\u003c/code\u003e annotations below it by acting on them.\n     Operationally, however, since the action must be a monoid\n     homomorphism, applying a \u003ccode\u003ed\u003c/code\u003e annotation can actually be done in\n     constant time.\n\u003c/li\u003e\u003cli\u003e Internal nodes with data values of type \u003ccode\u003ea\u003c/code\u003e, possibly of a\n     different type than those in the leaves.  These are just \"along\n     for the ride\" and are unaffected by \u003ccode\u003eu\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e annotations.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are two critical points to note about \u003ccode\u003eu\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e annotations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The combined \u003ccode\u003eu\u003c/code\u003e annotation for an entire tree is always cached\n     at the root and available in constant (amortized) time.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003emconcat\u003c/code\u003e of all the \u003ccode\u003ed\u003c/code\u003e annotations along the path from\n     the root to each leaf is available along with the leaf during a\n     fold operation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA fold over a \u003ccode\u003eDUALTree\u003c/code\u003e is given access to the internal and leaf\n data, and the accumulated \u003ccode\u003ed\u003c/code\u003e values at each leaf.  It is also\n allowed to replace \"\u003ccode\u003eu\u003c/code\u003e-only\" leaves with a constant value.  In\n particular, however, it is \u003cem\u003enot\u003c/em\u003e given access to any of the \u003ccode\u003eu\u003c/code\u003e\n annotations, the idea being that those are used only for\n \u003cem\u003econstructing\u003c/em\u003e trees.  It is also not given access to \u003ccode\u003ed\u003c/code\u003e values as\n they occur in the tree, only as they accumulate at leaves.  If you\n do need access to \u003ccode\u003eu\u003c/code\u003e or \u003ccode\u003ed\u003c/code\u003e values, you can duplicate the values\n you need in the internal data nodes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tree.DUAL",
          "name": "DUAL",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL.html",
          "type": "module"
        },
        "index": {
          "description": "Rose n-ary trees with both upwards i.e cached and downwards-traveling i.e accumulating monoidal annotations This is used as the core data structure underlying the diagrams framework http projects.haskell.org diagrams but potentially has other applications as well Abstractly DUALTree is rose n-ary tree with data of type at leaves data of type at internal nodes and two types of monoidal annotations one of type travelling up the tree and one of type traveling down Specifically there are five types of nodes Leaf nodes which contain data value of type and an annotation of type The annotation represents information about tree that should be accumulated e.g number of leaves some sort of weight etc If you are familiar with finger trees http www.soi.city.ac.uk ross papers FingerTree.html http hackage.haskell.org package fingertree it is the same idea There is also special type of leaf node which contains only value and no data This allows cached values to be modified by inserting extra annotations Branch nodes containing list of subtrees Internal nodes with value of type may have an action on see the Action type class defined in Data.Monoid.Action from the monoid-extras package Semantically speaking applying annotation to tree transforms all the annotations below it by acting on them Operationally however since the action must be monoid homomorphism applying annotation can actually be done in constant time Internal nodes with data values of type possibly of different type than those in the leaves These are just along for the ride and are unaffected by and annotations There are two critical points to note about and annotations The combined annotation for an entire tree is always cached at the root and available in constant amortized time The mconcat of all the annotations along the path from the root to each leaf is available along with the leaf during fold operation fold over DUALTree is given access to the internal and leaf data and the accumulated values at each leaf It is also allowed to replace only leaves with constant value In particular however it is not given access to any of the annotations the idea being that those are used only for constructing trees It is also not given access to values as they occur in the tree only as they accumulate at leaves If you do need access to or values you can duplicate the values you need in the internal data nodes",
          "hierarchy": "Data Tree DUAL",
          "module": "Data.Tree.DUAL",
          "name": "DUAL",
          "package": "dual-tree",
          "partial": "DUAL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRose (n-ary) trees with both upwards- (\u003cem\u003ei.e.\u003c/em\u003e cached) and\n   downwards-traveling (\u003cem\u003ei.e.\u003c/em\u003e accumulating) monoidal annotations.\n   Abstractly, a DUALTree is a rose (n-ary) tree with data (of type\n   \u003ccode\u003el\u003c/code\u003e) at leaves, data (of type \u003ccode\u003ea\u003c/code\u003e) at internal nodes, and two\n   types of monoidal annotations, one (of type \u003ccode\u003eu\u003c/code\u003e) travelling\n   \"up\" the tree and one (of type \u003ccode\u003ed\u003c/code\u003e) traveling \"down\".  See\n   the documentation at the top of this file for full details.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDUALTree\u003c/code\u003e comes with some instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, for modifying leaf data.  Note that \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e of course\n     cannot alter any \u003ccode\u003eu\u003c/code\u003e annotations.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eDUALTreeNE\u003c/code\u003es form a semigroup where \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e\n     corresponds to adjoining two trees under a common parent root,\n     with \u003ccode\u003esconcat\u003c/code\u003e specialized to put all the trees under a single\n     parent.  Note that this does not satisfy associativity up to\n     structural equality, but only up to observational equivalence\n     under \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.  Technically using \u003ccode\u003e\u003ca\u003efoldDUAL\u003c/a\u003e\u003c/code\u003e directly enables\n     one to observe the difference, but it is understood that\n     \u003ccode\u003e\u003ca\u003efoldDUAL\u003c/a\u003e\u003c/code\u003e should be used only in ways such that reassociation\n     of subtrees \"does not matter\".\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. The identity is the empty tree.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.DUAL",
          "name": "DUALTree",
          "package": "dual-tree",
          "source": "src/Data-Tree-DUAL-Internal.html#DUALTree",
          "type": "data"
        },
        "index": {
          "description": "Rose n-ary trees with both upwards i.e cached and downwards-traveling i.e accumulating monoidal annotations Abstractly DUALTree is rose n-ary tree with data of type at leaves data of type at internal nodes and two types of monoidal annotations one of type travelling up the tree and one of type traveling down See the documentation at the top of this file for full details DUALTree comes with some instances Functor for modifying leaf data Note that fmap of course cannot alter any annotations Semigroup DUALTreeNE form semigroup where corresponds to adjoining two trees under common parent root with sconcat specialized to put all the trees under single parent Note that this does not satisfy associativity up to structural equality but only up to observational equivalence under flatten Technically using foldDUAL directly enables one to observe the difference but it is understood that foldDUAL should be used only in ways such that reassociation of subtrees does not matter Monoid The identity is the empty tree",
          "hierarchy": "Data Tree DUAL",
          "module": "Data.Tree.DUAL",
          "name": "DUALTree",
          "package": "dual-tree",
          "partial": "DUALTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dual-tree/docs/Data-Tree-DUAL.html#t:DUALTree"
      }
    }
  ]
]