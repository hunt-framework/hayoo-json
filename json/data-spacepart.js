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
        "word": "data-spacepart"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "AABB",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-AABB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "AABB",
          "package": "data-spacepart",
          "partial": "AABB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D axis aligned square.\n The boundary_corner defines the lower bound.\n The boundary_size is the length of any edge of the square.\n\u003c/p\u003e\u003cp\u003eThe boundary is inclusive on the low extent and exclusive on the max extent.\n\u003c/p\u003e\u003cp\u003eUsed to represent both the \n 0. 2D axis aligned minimum bounding square of an element.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The boundary of a quadtree element\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.SpacePart.AABB",
          "name": "Boundary",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-AABB.html#Boundary",
          "type": "data"
        },
        "index": {
          "description": "axis aligned square The boundary corner defines the lower bound The boundary size is the length of any edge of the square The boundary is inclusive on the low extent and exclusive on the max extent Used to represent both the axis aligned minimum bounding square of an element The boundary of quadtree element",
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "Boundary",
          "package": "data-spacepart",
          "partial": "Boundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#t:Boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA instance of HasBoundary has an axis aligned boundign square defined that entirely encloses\n - the space represented by the type.\n\u003c/p\u003e",
          "module": "Data.SpacePart.AABB",
          "name": "HasBoundary",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-AABB.html#HasBoundary",
          "type": "class"
        },
        "index": {
          "description": "instance of HasBoundary has an axis aligned boundign square defined that entirely encloses the space represented by the type",
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "HasBoundary",
          "package": "data-spacepart",
          "partial": "Has Boundary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#t:HasBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "Boundary",
          "package": "data-spacepart",
          "signature": "Boundary",
          "source": "src/Data-SpacePart-AABB.html#Boundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "Boundary",
          "package": "data-spacepart",
          "partial": "Boundary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:Boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_corner",
          "package": "data-spacepart",
          "signature": "Vertex2 Double",
          "source": "src/Data-SpacePart-AABB.html#Boundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_corner",
          "package": "data-spacepart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_corner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_edges",
          "package": "data-spacepart",
          "signature": "s -\u003e [Edge2 Double]",
          "source": "src/Data-SpacePart-AABB.html#boundary_edges",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_edges",
          "normalized": "a-\u003e[Edge Double]",
          "package": "data-spacepart",
          "signature": "s-\u003e[Edge Double]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_extents",
          "package": "data-spacepart",
          "signature": "s -\u003e (Vertex2 Double, Vertex2 Double)",
          "source": "src/Data-SpacePart-AABB.html#boundary_extents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_extents",
          "normalized": "a-\u003e(Vertex Double,Vertex Double)",
          "package": "data-spacepart",
          "signature": "s-\u003e(Vertex Double,Vertex Double)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_extents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_points",
          "package": "data-spacepart",
          "signature": "s -\u003e [Vertex2 Double]",
          "source": "src/Data-SpacePart-AABB.html#boundary_points",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_points",
          "normalized": "a-\u003e[Vertex Double]",
          "package": "data-spacepart",
          "signature": "s-\u003e[Vertex Double]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_size",
          "package": "data-spacepart",
          "signature": "Double",
          "source": "src/Data-SpacePart-AABB.html#Boundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_size",
          "package": "data-spacepart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "boundary_square",
          "package": "data-spacepart",
          "signature": "s -\u003e Boundary",
          "source": "src/Data-SpacePart-AABB.html#boundary_square",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "boundary_square",
          "normalized": "a-\u003eBoundary",
          "package": "data-spacepart",
          "signature": "s-\u003eBoundary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:boundary_square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the first boundary entirely encloses the second boundary.\n - This is expected to be reflexive.\n\u003c/p\u003e",
          "module": "Data.SpacePart.AABB",
          "name": "encloses",
          "package": "data-spacepart",
          "signature": "Boundary -\u003e Boundary -\u003e Bool",
          "source": "src/Data-SpacePart-AABB.html#encloses",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the first boundary entirely encloses the second boundary This is expected to be reflexive",
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "encloses",
          "normalized": "Boundary-\u003eBoundary-\u003eBool",
          "package": "data-spacepart",
          "signature": "Boundary-\u003eBoundary-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:encloses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.AABB",
          "name": "intersects",
          "package": "data-spacepart",
          "signature": "s0 -\u003e s1 -\u003e Bool",
          "source": "src/Data-SpacePart-AABB.html#intersects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart AABB",
          "module": "Data.SpacePart.AABB",
          "name": "intersects",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "data-spacepart",
          "signature": "s-\u003es-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-AABB.html#v:intersects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-QuadTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "package": "data-spacepart",
          "partial": "Quad Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D binary hierarchical space subdivision of a region. \n All elements contained in the quadtree are required to have a Boundary. This is an axis aligned\n box with congruent sides.\n\u003c/p\u003e\u003cp\u003eEach node of the quadtree is composed of:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e A list of elements who's shape can be queried for intersection with the quad.  These are all\n the elements with a boundary that are fully enclosed by the boundary of this node but not fully\n enclosed by a quadrant of this node. \n\u003c/li\u003e\u003cli\u003e The Boundary of this node.\n\u003c/li\u003e\u003cli\u003e The child nodes of this node. Each is a quadrant of this nodes boundary.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-QuadTree.html#QuadTree",
          "type": "data"
        },
        "index": {
          "description": "binary hierarchical space subdivision of region All elements contained in the quadtree are required to have Boundary This is an axis aligned box with congruent sides Each node of the quadtree is composed of list of elements who shape can be queried for intersection with the quad These are all the elements with boundary that are fully enclosed by the boundary of this node but not fully enclosed by quadrant of this node The Boundary of this node The child nodes of this node Each is quadrant of this nodes boundary",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "package": "data-spacepart",
          "partial": "Quad Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#t:QuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "Quadrant",
          "package": "data-spacepart",
          "source": "src/Data-SpacePart-QuadTree.html#Quadrant",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "Quadrant",
          "package": "data-spacepart",
          "partial": "Quadrant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#t:Quadrant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "NNQuad",
          "package": "data-spacepart",
          "signature": "NNQuad",
          "source": "src/Data-SpacePart-QuadTree.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "NNQuad",
          "package": "data-spacepart",
          "partial": "NNQuad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:NNQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "NPQuad",
          "package": "data-spacepart",
          "signature": "NPQuad",
          "source": "src/Data-SpacePart-QuadTree.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "NPQuad",
          "package": "data-spacepart",
          "partial": "NPQuad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:NPQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "PNQuad",
          "package": "data-spacepart",
          "signature": "PNQuad",
          "source": "src/Data-SpacePart-QuadTree.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "PNQuad",
          "package": "data-spacepart",
          "partial": "PNQuad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:PNQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "PPQuad",
          "package": "data-spacepart",
          "signature": "PPQuad",
          "source": "src/Data-SpacePart-QuadTree.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "PPQuad",
          "package": "data-spacepart",
          "partial": "PPQuad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:PPQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "package": "data-spacepart",
          "signature": "[e] -\u003e Boundary -\u003e (Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e)) -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#QuadTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "QuadTree",
          "normalized": "[a]-\u003eBoundary-\u003e(Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a))-\u003eQuadTree a",
          "package": "data-spacepart",
          "partial": "Quad Tree",
          "signature": "[e]-\u003eBoundary-\u003e(Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e))-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:QuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "children",
          "package": "data-spacepart",
          "signature": "QuadTree e -\u003e (Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e))",
          "source": "src/Data-SpacePart-QuadTree.html#children",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "children",
          "normalized": "QuadTree a-\u003e(Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a))",
          "package": "data-spacepart",
          "signature": "QuadTree e-\u003e(Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "elements",
          "package": "data-spacepart",
          "signature": "QuadTree e -\u003e [e]",
          "source": "src/Data-SpacePart-QuadTree.html#elements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "elements",
          "normalized": "QuadTree a-\u003e[a]",
          "package": "data-spacepart",
          "signature": "QuadTree e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an empty QuadTree without a specific boundary. The default bounds are centered around\n - (0,0) with a size of 2\n -\n - TODO: Alternatively an empty quadtree could have no defined bounds. The bounds would then be\n - defined on the first insertion. \n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "empty",
          "package": "data-spacepart",
          "signature": "QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Returns an empty QuadTree without specific boundary The default bounds are centered around with size of TODO Alternatively an empty quadtree could have no defined bounds The bounds would then be defined on the first insertion",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "empty",
          "package": "data-spacepart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an empty QuadTree with the given bounds.\n - The given bounds cannot have a size of 0. This will error out on that case.\n -\n - TODO: The user may find it easier for this to accept a 0 sized boundary which is transparently\n - changed to a non-0 sized boundary on insert.\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "empty_with_bounds",
          "package": "data-spacepart",
          "signature": "Boundary -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#empty_with_bounds",
          "type": "function"
        },
        "index": {
          "description": "Returns an empty QuadTree with the given bounds The given bounds cannot have size of This will error out on that case TODO The user may find it easier for this to accept sized boundary which is transparently changed to non-0 sized boundary on insert",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "empty_with_bounds",
          "normalized": "Boundary-\u003eQuadTree a",
          "package": "data-spacepart",
          "signature": "Boundary-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:empty_with_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts the given element into the quadtree. \n - This inserts the element into a this node or a child quadrant node if the current node encloses\n - the element.  Otherwise this inserts the element into a new node that is a parent of the given\n - node.\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert",
          "package": "data-spacepart",
          "signature": "e -\u003e QuadTree e -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts the given element into the quadtree This inserts the element into this node or child quadrant node if the current node encloses the element Otherwise this inserts the element into new node that is parent of the given node",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert",
          "normalized": "a-\u003eQuadTree a-\u003eQuadTree a",
          "package": "data-spacepart",
          "signature": "e-\u003eQuadTree e-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent_trees generates all possible parent trees of the given tree (Without memoization) in the\n order suitable for a breadth first search.\n\u003c/p\u003e\u003cp\u003eInserts the element in the child identified by the given boundary and Quadrant.\n If there is no child at the given quadrant then a child is added and the element is inserted into\n the new child.\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_child",
          "package": "data-spacepart",
          "signature": "(Boundary, Quadrant) -\u003e e -\u003e QuadTree e -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#insert_child",
          "type": "function"
        },
        "index": {
          "description": "parent trees generates all possible parent trees of the given tree Without memoization in the order suitable for breadth first search Inserts the element in the child identified by the given boundary and Quadrant If there is no child at the given quadrant then child is added and the element is inserted into the new child",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_child",
          "normalized": "(Boundary,Quadrant)-\u003ea-\u003eQuadTree a-\u003eQuadTree a",
          "package": "data-spacepart",
          "signature": "(Boundary,Quadrant)-\u003ee-\u003eQuadTree e-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:insert_child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts the given element into either a child node of the current node if one of the quadrants\n - encloses the element.\n - Otherwise the element is added to the current node's list of elements.\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_self_or_child",
          "package": "data-spacepart",
          "signature": "e -\u003e QuadTree e -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#insert_self_or_child",
          "type": "function"
        },
        "index": {
          "description": "Inserts the given element into either child node of the current node if one of the quadrants encloses the element Otherwise the element is added to the current node list of elements",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_self_or_child",
          "normalized": "a-\u003eQuadTree a-\u003eQuadTree a",
          "package": "data-spacepart",
          "signature": "e-\u003eQuadTree e-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:insert_self_or_child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the element to quadtree via a parent node to the given quadtree.\n The parent to add e to is then the first of the possible parents nodes that enclose e.\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_via_parent",
          "package": "data-spacepart",
          "signature": "e -\u003e QuadTree e -\u003e QuadTree e",
          "source": "src/Data-SpacePart-QuadTree.html#insert_via_parent",
          "type": "function"
        },
        "index": {
          "description": "Adds the element to quadtree via parent node to the given quadtree The parent to add to is then the first of the possible parents nodes that enclose",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "insert_via_parent",
          "normalized": "a-\u003eQuadTree a-\u003eQuadTree a",
          "package": "data-spacepart",
          "signature": "e-\u003eQuadTree e-\u003eQuadTree e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:insert_via_parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "map_child",
          "package": "data-spacepart",
          "signature": "(Maybe (QuadTree e) -\u003e Maybe (QuadTree e)) -\u003e Quadrant -\u003e (Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e)) -\u003e (Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e), Maybe (QuadTree e))",
          "source": "src/Data-SpacePart-QuadTree.html#map_child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "map_child",
          "normalized": "(Maybe(QuadTree a)-\u003eMaybe(QuadTree a))-\u003eQuadrant-\u003e(Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a))-\u003e(Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a),Maybe(QuadTree a))",
          "package": "data-spacepart",
          "signature": "(Maybe(QuadTree e)-\u003eMaybe(QuadTree e))-\u003eQuadrant-\u003e(Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e))-\u003e(Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e),Maybe(QuadTree e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:map_child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SpacePart.QuadTree",
          "name": "quadrant_bounds",
          "package": "data-spacepart",
          "signature": "QuadTree e -\u003e [(Boundary, Quadrant)]",
          "source": "src/Data-SpacePart-QuadTree.html#quadrant_bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "quadrant_bounds",
          "normalized": "QuadTree a-\u003e[(Boundary,Quadrant)]",
          "package": "data-spacepart",
          "signature": "QuadTree e-\u003e[(Boundary,Quadrant)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:quadrant_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements with boundaries that intersect the given boundary\n - By case:\n -  Boundary does not intersect quadtree\n -  Boundary intersects the quadtree\n -      All elements at the level of the quadtree could intersect the boundary. Test each element\n -      for intersection. \n -      Descend into the quadrants\n\u003c/p\u003e",
          "module": "Data.SpacePart.QuadTree",
          "name": "query",
          "package": "data-spacepart",
          "signature": "Boundary -\u003e QuadTree e -\u003e [e]",
          "source": "src/Data-SpacePart-QuadTree.html#query",
          "type": "function"
        },
        "index": {
          "description": "Returns all elements with boundaries that intersect the given boundary By case Boundary does not intersect quadtree Boundary intersects the quadtree All elements at the level of the quadtree could intersect the boundary Test each element for intersection Descend into the quadrants",
          "hierarchy": "Data SpacePart QuadTree",
          "module": "Data.SpacePart.QuadTree",
          "name": "query",
          "normalized": "Boundary-\u003eQuadTree a-\u003e[a]",
          "package": "data-spacepart",
          "signature": "Boundary-\u003eQuadTree e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-spacepart/docs/Data-SpacePart-QuadTree.html#v:query"
      }
    }
  ]
]