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
        "word": "IcoGrid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IcoGrid",
          "name": "IcoGrid",
          "package": "IcoGrid",
          "source": "src/Data-IcoGrid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "IcoGrid",
          "package": "IcoGrid",
          "partial": "Ico Grid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all cells in a grid of a given size.  The length of this\n list is the number of cells, and they are numberd from 0 to n-1.\n\u003c/p\u003e",
          "module": "Data.IcoGrid",
          "name": "all_cells",
          "package": "IcoGrid",
          "signature": "Int -\u003e [Int]",
          "source": "src/Data-IcoGrid.html#all_cells",
          "type": "function"
        },
        "index": {
          "description": "Get list of all cells in grid of given size The length of this list is the number of cells and they are numberd from to n-1",
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "all_cells",
          "normalized": "Int-\u003e[Int]",
          "package": "IcoGrid",
          "signature": "Int-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#v:all_cells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all groups of 3 cells that meet at a point in the whole grid (of a\n given size).\n Each triad is repeated 3 times, with a different cell as the first one in\n the list. \n\u003c/p\u003e",
          "module": "Data.IcoGrid",
          "name": "all_triads",
          "package": "IcoGrid",
          "signature": "Int -\u003e [(Int, Int, Int)]",
          "source": "src/Data-IcoGrid.html#all_triads",
          "type": "function"
        },
        "index": {
          "description": "Get all groups of cells that meet at point in the whole grid of given size Each triad is repeated times with different cell as the first one in the list",
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "all_triads",
          "normalized": "Int-\u003e[(Int,Int,Int)]",
          "package": "IcoGrid",
          "signature": "Int-\u003e[(Int,Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#v:all_triads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the center of a cell as a point in 3-space, assuming a\n grid of a certain size.  I have not yet implemented the reverse function,\n which is to find the closest cell to a given point.\n\u003c/p\u003e",
          "module": "Data.IcoGrid",
          "name": "coord_to_vec",
          "package": "IcoGrid",
          "signature": "Int -\u003e Int -\u003e Vec",
          "source": "src/Data-IcoGrid.html#coord_to_vec",
          "type": "function"
        },
        "index": {
          "description": "Get the center of cell as point in space assuming grid of certain size have not yet implemented the reverse function which is to find the closest cell to given point",
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "coord_to_vec",
          "normalized": "Int-\u003eInt-\u003eVec",
          "package": "IcoGrid",
          "signature": "Int-\u003eInt-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#v:coord_to_vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of neighbors of a particular cell, assuming a grid of a certain\n size.\n\u003c/p\u003e",
          "module": "Data.IcoGrid",
          "name": "neighbors",
          "package": "IcoGrid",
          "signature": "Int -\u003e Int -\u003e [Int]",
          "source": "src/Data-IcoGrid.html#neighbors",
          "type": "function"
        },
        "index": {
          "description": "Get list of neighbors of particular cell assuming grid of certain size",
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "neighbors",
          "normalized": "Int-\u003eInt-\u003e[Int]",
          "package": "IcoGrid",
          "signature": "Int-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#v:neighbors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn list of vectors with the center vertex as head, and then the vertex \n between center and first neighbor,\n vertex in the middle, and a vertex between the center and the second \n neighbor.  Can be drawn with a triangle fan.  By drawing all the triads in\n this fashion, one can draw the whole grid.  I left a little bit of a gap\n between cells to make the edges easier to see.\n\u003c/p\u003e",
          "module": "Data.IcoGrid",
          "name": "triad_vecs",
          "package": "IcoGrid",
          "signature": "Int -\u003e (Int, Int, Int) -\u003e [Vec]",
          "source": "src/Data-IcoGrid.html#triad_vecs",
          "type": "function"
        },
        "index": {
          "description": "Return list of vectors with the center vertex as head and then the vertex between center and first neighbor vertex in the middle and vertex between the center and the second neighbor Can be drawn with triangle fan By drawing all the triads in this fashion one can draw the whole grid left little bit of gap between cells to make the edges easier to see",
          "hierarchy": "Data IcoGrid",
          "module": "Data.IcoGrid",
          "name": "triad_vecs",
          "normalized": "Int-\u003e(Int,Int,Int)-\u003e[Vec]",
          "package": "IcoGrid",
          "signature": "Int-\u003e(Int,Int,Int)-\u003e[Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IcoGrid/docs/Data-IcoGrid.html#v:triad_vecs"
      }
    }
  ]
]