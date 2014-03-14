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
        "word": "hsgsom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe network created by the GSOM algorithm is layed out in two dimensions.\n Thus one needs to assign two dimensional coordinates to the nodes of the\n network and for a clustering to the clusters.\n\u003c/p\u003e\u003cp\u003eThe types defining these coordinates and the functions to handle them belong\n into this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Coordinates",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html",
          "type": "module"
        },
        "index": {
          "description": "The network created by the GSOM algorithm is layed out in two dimensions Thus one needs to assign two dimensional coordinates to the nodes of the network and for clustering to the clusters The types defining these coordinates and the functions to handle them belong into this module",
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Coordinates",
          "package": "hsgsom",
          "partial": "Coordinates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Coordinates",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#Coordinates",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Coordinates",
          "package": "hsgsom",
          "partial": "Coordinates",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#t:Coordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Direction",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#Direction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Direction",
          "package": "hsgsom",
          "partial": "Direction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Directions",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#Directions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "Directions",
          "package": "hsgsom",
          "partial": "Directions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#t:Directions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of supported directions. Since we are only dealing with\n hexagonal lattices, there are only six possible directions.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "directions",
          "package": "hsgsom",
          "signature": "Directions",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#directions",
          "type": "function"
        },
        "index": {
          "description": "The list of supported directions Since we are only dealing with hexagonal lattices there are only six possible directions",
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "directions",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#v:directions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbour\u003c/a\u003e\u003c/code\u003e location direction\u003c/code\u003e calculates the coordinates of\n the neighbour of node with location \u003ccode\u003elocation\u003c/code\u003e in direction\n \u003ccode\u003edirection\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "neighbour",
          "package": "hsgsom",
          "signature": "Coordinates -\u003e Direction -\u003e Coordinates",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#neighbour",
          "type": "function"
        },
        "index": {
          "description": "neighbour location direction calculates the coordinates of the neighbour of node with location location in direction direction",
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "neighbour",
          "normalized": "Coordinates-\u003eDirection-\u003eCoordinates",
          "package": "hsgsom",
          "signature": "Coordinates-\u003eDirection-\u003eCoordinates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#v:neighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbourCoordinates\u003c/a\u003e\u003c/code\u003e point\u003c/code\u003e calculates the list of\n coordinates which are directly adjacent to \u003ccode\u003epoint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "neighbourCoordinates",
          "package": "hsgsom",
          "signature": "Coordinates -\u003e [Coordinates]",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#neighbourCoordinates",
          "type": "function"
        },
        "index": {
          "description": "neighbourCoordinates point calculates the list of coordinates which are directly adjacent to point",
          "hierarchy": "Data Datamining Clustering Gsom Coordinates",
          "module": "Data.Datamining.Clustering.Gsom.Coordinates",
          "name": "neighbourCoordinates",
          "normalized": "Coordinates-\u003e[Coordinates]",
          "package": "hsgsom",
          "partial": "Coordinates",
          "signature": "Coordinates-\u003e[Coordinates]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Coordinates.html#v:neighbourCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe GSOM algorithm works on numerical input vectors. These input vectors\n are internally represented as lists of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es and this module contains\n the functions working on these.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Input",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html",
          "type": "module"
        },
        "index": {
          "description": "The GSOM algorithm works on numerical input vectors These input vectors are internally represented as lists of Double and this module contains the functions working on these",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Input",
          "package": "hsgsom",
          "partial": "Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of a list of inputs. Having the tuple \u003ccode\u003e(a,b)\u003c/code\u003e at index \u003ccode\u003ei\u003c/code\u003e\n in \u003ccode\u003ebounds\u003c/code\u003e means that the value at index \u003ccode\u003ei\u003c/code\u003e of each of the input vectors\n from the inputs which where used to calculate \u003ccode\u003ebounds\u003c/code\u003e is from the\n intervall \u003ccode\u003e[a,b]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Bounds",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Bounds",
          "type": "type"
        },
        "index": {
          "description": "The bounds of list of inputs Having the tuple at index in bounds means that the value at index of each of the input vectors from the inputs which where used to calculate bounds is from the intervall",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Bounds",
          "package": "hsgsom",
          "partial": "Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#t:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput vectors are represented as lists of Doubles.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Input",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Input",
          "type": "type"
        },
        "index": {
          "description": "Input vectors are represented as lists of Doubles",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Input",
          "package": "hsgsom",
          "partial": "Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Inputs",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Inputs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "Inputs",
          "package": "hsgsom",
          "partial": "Inputs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#t:Inputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "(*.)",
          "package": "hsgsom",
          "signature": "Input -\u003e Double -\u003e Input",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#%2A.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-42-.\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:-42-.\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "(*.) *.",
          "normalized": "Input-\u003eDouble-\u003eInput",
          "package": "hsgsom",
          "signature": "Input-\u003eDouble-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction and addition of vectors between each other.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "(\u003c+\u003e)",
          "package": "hsgsom",
          "signature": "Input -\u003e Input -\u003e Input",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#%3C%2B%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-60--43--62-\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:-60--43--62-\"]"
        },
        "index": {
          "description": "Subtraction and addition of vectors between each other",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Input-\u003eInput-\u003eInput",
          "package": "hsgsom",
          "signature": "Input-\u003eInput-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "(\u003c-\u003e)",
          "package": "hsgsom",
          "signature": "Input -\u003e Input -\u003e Input",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#%3C-%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-60--45--62-\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:-60--45--62-\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Input-\u003eInput-\u003eInput",
          "package": "hsgsom",
          "signature": "Input-\u003eInput-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication of an input vector with a scalar.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "(.*)",
          "package": "hsgsom",
          "signature": "Double -\u003e Input -\u003e Input",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#.%2A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:.-42-\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:.-42-\"]"
        },
        "index": {
          "description": "Multiplication of an input vector with scalar",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "(.*) .*",
          "normalized": "Double-\u003eInput-\u003eInput",
          "package": "hsgsom",
          "signature": "Double-\u003eInput-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the bounds of the input vector components.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "bounds",
          "package": "hsgsom",
          "signature": "Inputs -\u003e Bounds",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#bounds",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:bounds\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:bounds\"]"
        },
        "index": {
          "description": "Calculates the bounds of the input vector components",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "bounds",
          "normalized": "Inputs-\u003eBounds",
          "package": "hsgsom",
          "signature": "Inputs-\u003eBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculating the dimension of a given set of inputs just means finding\n the length of the longest input vector.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "dimension",
          "package": "hsgsom",
          "signature": "Inputs -\u003e Int",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#dimension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:dimension\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:dimension\"]"
        },
        "index": {
          "description": "Calculating the dimension of given set of inputs just means finding the length of the longest input vector",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "dimension",
          "normalized": "Inputs-\u003eInt",
          "package": "hsgsom",
          "signature": "Inputs-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:dimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e i1 i2\u003c/code\u003e calculates the euclidean distance between\n \u003ccode\u003ei1\u003c/code\u003e and \u003ccode\u003ei2\u003c/code\u003e. If \u003ccode\u003ei1\u003c/code\u003e and \u003ccode\u003ei2\u003c/code\u003e have different lengths, excess\n values are ignored.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "distance",
          "package": "hsgsom",
          "signature": "Input -\u003e Input -\u003e Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#distance",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:distance\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:distance\"]"
        },
        "index": {
          "description": "distance i1 i2 calculates the euclidean distance between i1 and i2 If i1 and i2 have different lengths excess values are ignored",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "distance",
          "normalized": "Input-\u003eInput-\u003eDouble",
          "package": "hsgsom",
          "signature": "Input-\u003eInput-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalizes input vectors.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e inputs\u003c/code\u003e takes the given list of input vectors \u003ccode\u003einputs\u003c/code\u003e and\n returns a list of input vectors where each component is in \u003ccode\u003e[0,1]\u003c/code\u003e.\n If you want to unnormalize the input vectors use \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunnormalize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "normalize",
          "package": "hsgsom",
          "signature": "Bounds -\u003e Inputs -\u003e Inputs",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#normalize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:normalize\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:normalize\"]"
        },
        "index": {
          "description": "Normalizes input vectors normalize inputs takes the given list of input vectors inputs and returns list of input vectors where each component is in If you want to unnormalize the input vectors use bounds and unnormalize",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "normalize",
          "normalized": "Bounds-\u003eInputs-\u003eInputs",
          "package": "hsgsom",
          "signature": "Bounds-\u003eInputs-\u003eInputs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnnormalizes the given input vectors \u003ccode\u003einputs\u003c/code\u003e assuming that it's bounds\n previously where \u003ccode\u003ebounds\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Input\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "unnormalize",
          "package": "hsgsom",
          "signature": "Bounds -\u003e Inputs -\u003e Inputs",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#unnormalize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:unnormalize\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:unnormalize\"]"
        },
        "index": {
          "description": "Unnormalizes the given input vectors inputs assuming that it bounds previously where bounds",
          "hierarchy": "Data Datamining Clustering Gsom Input",
          "module": "Data.Datamining.Clustering.Gsom.Input",
          "name": "unnormalize",
          "normalized": "Bounds-\u003eInputs-\u003eInputs",
          "package": "hsgsom",
          "signature": "Bounds-\u003eInputs-\u003eInputs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Input.html#v:unnormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the type of the network build by the GSOM\n algorithm. This type and most of the functions dealing with it are defined\n in this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "Lattice",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html",
          "type": "module"
        },
        "index": {
          "description": "The type Lattice is the type of the network build by the GSOM algorithm This type and most of the functions dealing with it are defined in this module",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "Lattice",
          "package": "hsgsom",
          "partial": "Lattice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lattice type. Since global access to nodes is needed they're\n stored in a \u003ccode\u003eData.Map\u003c/code\u003e indexed by their coordinates.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "Lattice",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#Lattice",
          "type": "type"
        },
        "index": {
          "description": "The lattice type Since global access to nodes is needed they re stored in Data.Map indexed by their coordinates",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "Lattice",
          "package": "hsgsom",
          "partial": "Lattice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#t:Lattice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebmu\u003c/a\u003e\u003c/code\u003e input lattice\u003c/code\u003e returns the best matching unit i.e. the node with\n minimal distance to the given input vector.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "bmu",
          "package": "hsgsom",
          "signature": "Input -\u003e Lattice -\u003e STM Node",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#bmu",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:bmu\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:bmu\"]"
        },
        "index": {
          "description": "bmu input lattice returns the best matching unit i.e the node with minimal distance to the given input vector",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "bmu",
          "normalized": "Input-\u003eLattice-\u003eSTM Node",
          "package": "hsgsom",
          "signature": "Input-\u003eLattice-\u003eSTM Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:bmu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e lattice node\u003c/code\u003e will create new neighbours for every Leaf\n neighbour of the given \u003ccode\u003enode\u003c/code\u003e and add the created nodes to \u003ccode\u003elattice\u003c/code\u003e.\n It will return the list of spawned nodes and the new lattice containing\n every node created in the process of spawning.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "grow",
          "package": "hsgsom",
          "signature": "Lattice -\u003e Node -\u003e STM (Lattice, Nodes)",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#grow",
          "type": "function"
        },
        "index": {
          "description": "grow lattice node will create new neighbours for every Leaf neighbour of the given node and add the created nodes to lattice It will return the list of spawned nodes and the new lattice containing every node created in the process of spawning",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "grow",
          "normalized": "Lattice-\u003eNode-\u003eSTM(Lattice,Nodes)",
          "package": "hsgsom",
          "signature": "Lattice-\u003eNode-\u003eSTM(Lattice,Nodes)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003enewNormalized\u003c/code\u003e dimension\u003c/code\u003e creates a new minimal lattice where weights\n are initialized with all components having the value \u003ccode\u003e0.5\u003c/code\u003e the and with\n the weight vectors having length \u003ccode\u003edimension\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "newCentered",
          "package": "hsgsom",
          "signature": "Int -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#newCentered",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:newCentered\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:newCentered\"]"
        },
        "index": {
          "description": "newNormalized dimension creates new minimal lattice where weights are initialized with all components having the value the and with the weight vectors having length dimension",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "newCentered",
          "normalized": "Int-\u003eIO Lattice",
          "package": "hsgsom",
          "partial": "Centered",
          "signature": "Int-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:newCentered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewRandom\u003c/a\u003e\u003c/code\u003e g dimension\u003c/code\u003e creates a new minimal lattice where weights are\n randomly initialized with values between 0 and 1 using the random number\n generator \u003ccode\u003eg\u003c/code\u003e and with the weight vectors having the specified \u003ccode\u003edimension\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "newRandom",
          "package": "hsgsom",
          "signature": "g -\u003e Int -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#newRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:newRandom\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:newRandom\"]"
        },
        "index": {
          "description": "newRandom dimension creates new minimal lattice where weights are randomly initialized with values between and using the random number generator and with the weight vectors having the specified dimension",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "newRandom",
          "normalized": "a-\u003eInt-\u003eIO Lattice",
          "package": "hsgsom",
          "partial": "Random",
          "signature": "g-\u003eInt-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:newRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the nodes stored in lattice.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "nodes",
          "package": "hsgsom",
          "signature": "Lattice -\u003e STM Nodes",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#nodes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:nodes\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:nodes\"]"
        },
        "index": {
          "description": "Returns the nodes stored in lattice",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "nodes",
          "normalized": "Lattice-\u003eSTM Nodes",
          "package": "hsgsom",
          "signature": "Lattice-\u003eSTM Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "putLattice",
          "package": "hsgsom",
          "signature": "Lattice -\u003e IO String",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#putLattice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:putLattice\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:putLattice\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "putLattice",
          "normalized": "Lattice-\u003eIO String",
          "package": "hsgsom",
          "partial": "Lattice",
          "signature": "Lattice-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:putLattice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Lattice\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "putWeights",
          "package": "hsgsom",
          "signature": "Lattice -\u003e IO String",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#putWeights",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:putWeights\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:putWeights\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "putWeights",
          "normalized": "Lattice-\u003eIO String",
          "package": "hsgsom",
          "partial": "Weights",
          "signature": "Lattice-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:putWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003event\u003c/a\u003e\u003c/code\u003e lattice node growthThreshold\u003c/code\u003e will check the accumulated error\n of the \u003ccode\u003enode\u003c/code\u003e against the given \u003ccode\u003egrowthThreshold\u003c/code\u003e and will do nothing if\n the errror value is below the growth threshhold. Otherwise it will either\n spawn new nodes or it will propagate the accumulated error value to it's\n neighbours, depending on whether the node is a boundary node or not.\n If new nodes are spawned they will be added to \u003ccode\u003elattice\u003c/code\u003e and returned as\n the second component of the resulting pair.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "vent",
          "package": "hsgsom",
          "signature": "Lattice -\u003e Node -\u003e Double -\u003e STM (Lattice, [Node])",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#vent",
          "type": "function"
        },
        "index": {
          "description": "vent lattice node growthThreshold will check the accumulated error of the node against the given growthThreshold and will do nothing if the errror value is below the growth threshhold Otherwise it will either spawn new nodes or it will propagate the accumulated error value to it neighbours depending on whether the node is boundary node or not If new nodes are spawned they will be added to lattice and returned as the second component of the resulting pair",
          "hierarchy": "Data Datamining Clustering Gsom Lattice",
          "module": "Data.Datamining.Clustering.Gsom.Lattice",
          "name": "vent",
          "normalized": "Lattice-\u003eNode-\u003eDouble-\u003eSTM(Lattice,[Node])",
          "package": "hsgsom",
          "signature": "Lattice-\u003eNode-\u003eDouble-\u003eSTM(Lattice,[Node])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Lattice.html#v:vent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe network of nodes which is build by GSOM consists if nodes of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and this module contains the definition if this type along with\n most of the functions altering or working on them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Node",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html",
          "type": "module"
        },
        "index": {
          "description": "The network of nodes which is build by GSOM consists if nodes of type Node and this module contains the definition if this type along with most of the functions altering or working on them",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Node",
          "package": "hsgsom",
          "partial": "Node",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of neighbourhoods. Wherever a neighbourhood of a node\n is neede, this type should be used.\n A \u003ccode\u003eNeighbourhood\u003c/code\u003e consits of a list of pairs of nodes and their\n discrete grid distance from the source of the neighbourhood.\n The source node is the only one with distance \u003ccode\u003e0\u003c/code\u003e while immediate\n neighbours get distance one and so on.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Neighbourhood",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Neighbourhood",
          "type": "type"
        },
        "index": {
          "description": "The type of neighbourhoods Wherever neighbourhood of node is neede this type should be used Neighbourhood consits of list of pairs of nodes and their discrete grid distance from the source of the neighbourhood The source node is the only one with distance while immediate neighbours get distance one and so on",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Neighbourhood",
          "package": "hsgsom",
          "partial": "Neighbourhood",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#t:Neighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node's neighbours are stored in fields of type \u003ccode\u003eNeighbours\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Neighbours",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Neighbours",
          "type": "type"
        },
        "index": {
          "description": "node neighbours are stored in fields of type Neighbours",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Neighbours",
          "package": "hsgsom",
          "partial": "Neighbours",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#t:Neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of nodes of a gsom.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Node",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "data"
        },
        "index": {
          "description": "The type of nodes of gsom",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Node",
          "package": "hsgsom",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Nodes",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Nodes",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Nodes",
          "package": "hsgsom",
          "partial": "Nodes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#t:Nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThey're either Leafs, signalling neighbours of boundary nodes\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Leaf",
          "package": "hsgsom",
          "signature": "Leaf",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:Leaf\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Leaf\"]"
        },
        "index": {
          "description": "They re either Leafs signalling neighbours of boundary nodes",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Leaf",
          "package": "hsgsom",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor they are actual nodes with a few associated values and a list of\n neighbouring nodes.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Node",
          "package": "hsgsom",
          "signature": "Node",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:Node\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Node\"]"
        },
        "index": {
          "description": "or they are actual nodes with few associated values and list of neighbouring nodes",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "Node",
          "package": "hsgsom",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "boundaryNode",
          "package": "hsgsom",
          "signature": "Node -\u003e STM Bool",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#boundaryNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "boundaryNode",
          "normalized": "Node-\u003eSTM Bool",
          "package": "hsgsom",
          "partial": "Node",
          "signature": "Node-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:boundaryNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "isLeaf",
          "package": "hsgsom",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#isLeaf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:isLeaf\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:isLeaf\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "isLeaf",
          "normalized": "Node-\u003eBool",
          "package": "hsgsom",
          "partial": "Leaf",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisLeaf\u003c/a\u003e\u003c/code\u003e node\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the given node is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeaf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "isNode",
          "package": "hsgsom",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#isNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:isNode\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:isNode\"]"
        },
        "index": {
          "description": "isLeaf node returns True if the given node is Leaf and False otherwise",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "isNode",
          "normalized": "Node-\u003eBool",
          "package": "hsgsom",
          "partial": "Node",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:isNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to uniquely identify nodes. This is also the actual location of\n the node if the lattice it belongs to is beeing laid out in the two\n dimensional plane and it is used to store the node in the map\n comprising the lattice.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "location",
          "package": "hsgsom",
          "signature": "Coordinates",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:location\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:location\"]"
        },
        "index": {
          "description": "Used to uniquely identify nodes This is also the actual location of the node if the lattice it belongs to is beeing laid out in the two dimensional plane and it is used to store the node in the map comprising the lattice",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "location",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisNode\u003c/a\u003e\u003c/code\u003e node\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the given node is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeaf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eCalculates the neighbourhood of the given size of the given node.\n A neighbourhood size of \u003ccode\u003e0\u003c/code\u003e means that only the given node will be\n an element of the returned set while a size of one will return the\n given node and it's immediate neighbours and so on.\n It's not very efficient so you shouldn't try big neihbourhood sizes.\n The returned neighbourhood always includes \u003ccode\u003enode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "neighbourhood",
          "package": "hsgsom",
          "signature": "Node -\u003e Int -\u003e STM Neighbourhood",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#neighbourhood",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:neighbourhood\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:neighbourhood\"]"
        },
        "index": {
          "description": "isNode node returns False if the given node is Leaf and True otherwise Calculates the neighbourhood of the given size of the given node neighbourhood size of means that only the given node will be an element of the returned set while size of one will return the given node and it immediate neighbours and so on It not very efficient so you shouldn try big neihbourhood sizes The returned neighbourhood always includes node",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "neighbourhood",
          "normalized": "Node-\u003eInt-\u003eSTM Neighbourhood",
          "package": "hsgsom",
          "signature": "Node-\u003eInt-\u003eSTM Neighbourhood",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:neighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe node's neighbours.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "neighbours",
          "package": "hsgsom",
          "signature": "Neighbours",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:neighbours\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:neighbours\"]"
        },
        "index": {
          "description": "The node neighbours",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "neighbours",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a new node is spawned we need to calculate it's new weight vector.\n If the new node is spawned from parent p in direction d and p has a\n neighbour n in the direction d' opposite to d then the new weight\n vector nw is calculated according to the formula:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enw = 2 * (\u003ccode\u003e\u003ca\u003eweights\u003c/a\u003e\u003c/code\u003e p) - (\u003ccode\u003e\u003ca\u003eweights\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn all other cases there exists exactly one neighbour of the new node.\n Let this neighbour be called n and let d' be the direction in which we\n have to go to reach this neighbour from the new node. Let s then be\n the child of the new node's parent p in direction d'.\n The new weights are then calculated according to the formula:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enw = p + n - s\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "newWeight",
          "package": "hsgsom",
          "signature": "Node -\u003e Int -\u003e STM ()",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#newWeight",
          "type": "function"
        },
        "index": {
          "description": "When new node is spawned we need to calculate it new weight vector If the new node is spawned from parent in direction and has neighbour in the direction opposite to then the new weight vector nw is calculated according to the formula nw weights weights In all other cases there exists exactly one neighbour of the new node Let this neighbour be called and let be the direction in which we have to go to reach this neighbour from the new node Let then be the child of the new node parent in direction The new weights are then calculated according to the formula nw",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "newWeight",
          "normalized": "Node-\u003eInt-\u003eSTM()",
          "package": "hsgsom",
          "partial": "Weight",
          "signature": "Node-\u003eInt-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:newWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enode\u003c/a\u003e\u003c/code\u003e id weights neighbours\u003c/code\u003e creates a node with the specified\n parameters and initial quantization error of \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "node",
          "package": "hsgsom",
          "signature": "Coordinates -\u003e Input -\u003e Neighbours -\u003e STM Node",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:node\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:node\"]"
        },
        "index": {
          "description": "node id weights neighbours creates node with the specified parameters and initial quantization error of",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "node",
          "normalized": "Coordinates-\u003eInput-\u003eNeighbours-\u003eSTM Node",
          "package": "hsgsom",
          "signature": "Coordinates-\u003eInput-\u003eNeighbours-\u003eSTM Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003e node\u003c/code\u003e propagates the accumulated error of the given \u003ccode\u003enode\u003c/code\u003e\n to it's neighbours.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "propagate",
          "package": "hsgsom",
          "signature": "Node -\u003e Nodes -\u003e STM ()",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#propagate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:propagate\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:propagate\"]"
        },
        "index": {
          "description": "propagate node propagates the accumulated error of the given node to it neighbours",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "propagate",
          "normalized": "Node-\u003eNodes-\u003eSTM()",
          "package": "hsgsom",
          "signature": "Node-\u003eNodes-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:propagate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "putNode",
          "package": "hsgsom",
          "signature": "Node -\u003e IO [String]",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#putNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:putNode\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:putNode\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "putNode",
          "normalized": "Node-\u003eIO[String]",
          "package": "hsgsom",
          "partial": "Node",
          "signature": "Node-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:putNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe quantization error the node has accumulated so far.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "quantizationError",
          "package": "hsgsom",
          "signature": "TVar Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:quantizationError\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:quantizationError\"]"
        },
        "index": {
          "description": "The quantization error the node has accumulated so far",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "quantizationError",
          "package": "hsgsom",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:quantizationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunwrappedNeighbours\u003c/a\u003e\u003c/code\u003e node\u003c/code\u003e returns the list of neighbours of the\n given \u003ccode\u003enode\u003c/code\u003e.\n Note that neighbours is unwrapped, i.e. the returned list hast type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNodes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e not \u003ccode\u003eTVar \u003ccode\u003e\u003ca\u003eNodes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "unwrappedNeighbours",
          "package": "hsgsom",
          "signature": "Node -\u003e STM Nodes",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#unwrappedNeighbours",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:unwrappedNeighbours\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:unwrappedNeighbours\"]"
        },
        "index": {
          "description": "unwrappedNeighbours node returns the list of neighbours of the given node Note that neighbours is unwrapped i.e the returned list hast type Nodes not TVar Nodes",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "unwrappedNeighbours",
          "normalized": "Node-\u003eSTM Nodes",
          "package": "hsgsom",
          "partial": "Neighbours",
          "signature": "Node-\u003eSTM Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:unwrappedNeighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e input learning_rate kernel neighbour\u003c/code\u003e updates\n the weights of the \u003ccode\u003eneighbour\u003c/code\u003e according to the formula:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eweight -\u003e weight + learning_rate * (kernel d) (input - weight)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "update",
          "package": "hsgsom",
          "signature": "Input -\u003e Double -\u003e (Int -\u003e Double) -\u003e (Int, Node) -\u003e STM ()",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#update",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:update\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:update\"]"
        },
        "index": {
          "description": "update input learning rate kernel neighbour updates the weights of the neighbour according to the formula weight weight learning rate kernel input weight",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "update",
          "normalized": "Input-\u003eDouble-\u003e(Int-\u003eDouble)-\u003e(Int,Node)-\u003eSTM()",
          "package": "hsgsom",
          "signature": "Input-\u003eDouble-\u003e(Int-\u003eDouble)-\u003e(Int,Node)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateError node input\u003c/code\u003e updates the \u003ccode\u003e\u003ccode\u003e\u003ca\u003equantizationError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of \u003ccode\u003enode\u003c/code\u003e.\n The new error is just the old error plus the distance of the \u003ccode\u003enode\u003c/code\u003e's\n weight vector from \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "updateError",
          "package": "hsgsom",
          "signature": "Node -\u003e Input -\u003e STM ()",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#updateError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:updateError\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:updateError\"]"
        },
        "index": {
          "description": "updateError node input updates the quantizationError of node The new error is just the old error plus the distance of the node weight vector from input",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "updateError",
          "normalized": "Node-\u003eInput-\u003eSTM()",
          "package": "hsgsom",
          "partial": "Error",
          "signature": "Node-\u003eInput-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:updateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe node's weight vector. This is the center of the voronoi cell the\n node represents.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Node\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "weights",
          "package": "hsgsom",
          "signature": "TVar Input",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:weights\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:weights\"]"
        },
        "index": {
          "description": "The node weight vector This is the center of the voronoi cell the node represents",
          "hierarchy": "Data Datamining Clustering Gsom Node",
          "module": "Data.Datamining.Clustering.Gsom.Node",
          "name": "weights",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Node.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the necessary modifications of some functions to\n parallelise a phase of the GSOM Algorithm by using multiple threads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "Parallel",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the necessary modifications of some functions to parallelise phase of the GSOM Algorithm by using multiple threads",
          "hierarchy": "Data Datamining Clustering Gsom Parallel",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "Parallel",
          "package": "hsgsom",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ephase\u003c/a\u003e\u003c/code\u003e n parameters inputs\u003c/code\u003e will update the given \u003ccode\u003elattice\u003c/code\u003e by\n executing one phase of the GSOM algorithm with the given \u003ccode\u003einputs\u003c/code\u003e\n and \u003ccode\u003eparameters\u003c/code\u003e using \u003ccode\u003en\u003c/code\u003e threads.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "phase",
          "package": "hsgsom",
          "signature": "Int -\u003e Phase -\u003e Lattice -\u003e Inputs -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Parallel.html#phase",
          "type": "function"
        },
        "index": {
          "description": "phase parameters inputs will update the given lattice by executing one phase of the GSOM algorithm with the given inputs and parameters using threads",
          "hierarchy": "Data Datamining Clustering Gsom Parallel",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "phase",
          "normalized": "Int-\u003ePhase-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "package": "hsgsom",
          "signature": "Int-\u003ePhase-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Parallel.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince a complete run of the GSOM algorithm means running a number\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhases\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e this is usually the main function used.  \u003ccode\u003erun n phases\n lattice inputs\u003c/code\u003e runs the GSOM algorithm by running the \u003ccode\u003ephases\u003c/code\u003e in\n the order specified, each time making passes over \u003ccode\u003einputs\u003c/code\u003e and using\n the produced \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as an argument to the next phase.  The\n phases are run using \u003ccode\u003en\u003c/code\u003e worker threads.  The initial \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n \u003ccode\u003elattice\u003c/code\u003e may be constructed with the \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewRandom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewCentered\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "run",
          "package": "hsgsom",
          "signature": "Int -\u003e Phases -\u003e Lattice -\u003e Inputs -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Parallel.html#run",
          "type": "function"
        },
        "index": {
          "description": "Since complete run of the GSOM algorithm means running number of Phases this is usually the main function used run phases lattice inputs runs the GSOM algorithm by running the phases in the order specified each time making passes over inputs and using the produced Lattice as an argument to the next phase The phases are run using worker threads The initial Lattice lattice may be constructed with the newRandom and the newCentered functions",
          "hierarchy": "Data Datamining Clustering Gsom Parallel",
          "module": "Data.Datamining.Clustering.Gsom.Parallel",
          "name": "run",
          "normalized": "Int-\u003ePhases-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "package": "hsgsom",
          "signature": "Int-\u003ePhases-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Parallel.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe GSOM Algorithm can be split up in multiple sequentially executed\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es. Each of these phases makes a certain number of passes over\n the inputs. While doing so each \u003ccode\u003e\u003ccode\u003e\u003ca\u003ephase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e modifies a given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n according to a certain set of specified parameters.\n This module contains the definition of the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type, a few default\n instances and the functions needed to run a single \u003ccode\u003e\u003ccode\u003e\u003ca\u003ephase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e a sequence of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phase",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html",
          "type": "module"
        },
        "index": {
          "description": "The GSOM Algorithm can be split up in multiple sequentially executed Phase Each of these phases makes certain number of passes over the inputs While doing so each phase modifies given Lattice according to certain set of specified parameters This module contains the definition of the Phase type few default instances and the functions needed to run single phase or to run sequence of Phase",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phase",
          "package": "hsgsom",
          "partial": "Phase",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Kernel",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Kernel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Kernel",
          "package": "hsgsom",
          "partial": "Kernel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "LearningRate",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#LearningRate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "LearningRate",
          "package": "hsgsom",
          "partial": "Learning Rate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#t:LearningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis datatype encapsulates all the parameters needed to be known to\n run one phase of the GSOM algorithm.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phase",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "data"
        },
        "index": {
          "description": "This datatype encapsulates all the parameters needed to be known to run one phase of the GSOM algorithm",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phase",
          "package": "hsgsom",
          "partial": "Phase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#t:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phases",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phases",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phases",
          "package": "hsgsom",
          "partial": "Phases",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#t:Phases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bubble kernel is essentially the identity,\n i.e. it has no effect.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Bubble",
          "package": "hsgsom",
          "signature": "Bubble",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Kernel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Bubble\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Bubble\"]"
        },
        "index": {
          "description": "The bubble kernel is essentially the identity i.e it has no effect",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Bubble",
          "package": "hsgsom",
          "partial": "Bubble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Bubble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet \u003ccode\u003es\u003c/code\u003e be the neighbourhood size currently in effect\n and \u003ccode\u003ed\u003c/code\u003e be the grid-distance of the current node to the winning node\n then this kernel calculates a factor to control weight adaption with\n the following formula:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003egaussian s d = exp(d^2/(2*s^2))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Gaussian",
          "package": "hsgsom",
          "signature": "Gaussian",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Kernel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Gaussian\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Gaussian\"]"
        },
        "index": {
          "description": "Let be the neighbourhood size currently in effect and be the grid-distance of the current node to the winning node then this kernel calculates factor to control weight adaption with the following formula gaussian exp",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Gaussian",
          "package": "hsgsom",
          "partial": "Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse time learning rate reduction function. Given an initial\n learning rate of \u003ccode\u003elr\u003c/code\u003e, a maximum number of steps of \u003ccode\u003esteps\u003c/code\u003e and the\n current step number beeing \u003ccode\u003estep\u003c/code\u003e, the formula is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einverseAge lr step steps = lr * steps / (steps + 100 * step)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "InverseAge",
          "package": "hsgsom",
          "signature": "InverseAge Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#LearningRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:InverseAge\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:InverseAge\"]"
        },
        "index": {
          "description": "The inverse time learning rate reduction function Given an initial learning rate of lr maximum number of steps of steps and the current step number beeing step the formula is inverseAge lr step steps lr steps steps step",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "InverseAge",
          "package": "hsgsom",
          "partial": "Inverse Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:InverseAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe linear learning rate reduction function. If you supply it with\n the initial learning rate \u003ccode\u003elr\u003c/code\u003e it uses the following formula where\n \u003ccode\u003estep\u003c/code\u003e is the current step the phase is in and \u003ccode\u003esteps\u003c/code\u003e is the overall\n number of steps the phase will take:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003elinear lr step steps = lr * (1-step/steps)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Linear",
          "package": "hsgsom",
          "signature": "Linear Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#LearningRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Linear\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Linear\"]"
        },
        "index": {
          "description": "The linear learning rate reduction function If you supply it with the initial learning rate lr it uses the following formula where step is the current step the phase is in and steps is the overall number of steps the phase will take linear lr step steps lr step steps",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Linear",
          "package": "hsgsom",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "Phase",
          "package": "hsgsom",
          "signature": "Phase",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Phase\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Phase\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "Phase",
          "package": "hsgsom",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the learning rate adaption function associated with the given\n type of learning rate.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "adaption",
          "package": "hsgsom",
          "signature": "LearningRate -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#adaption",
          "type": "function"
        },
        "index": {
          "description": "Returns the learning rate adaption function associated with the given type of learning rate",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "adaption",
          "normalized": "LearningRate-\u003eInt-\u003eInt-\u003eDouble",
          "package": "hsgsom",
          "signature": "LearningRate-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:adaption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default first phase is the only growing phase. It makes 5\n passes over the input, uses an initial learning rate of 0.1 and\n a starting neighbourhood size of 3. The \u003ccode\u003e\u003ccode\u003e\u003ca\u003espreadFactor\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is set\n to 0.1.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "defaultFirst",
          "package": "hsgsom",
          "signature": "Phase",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#defaultFirst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultFirst\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:defaultFirst\"]"
        },
        "index": {
          "description": "The default first phase is the only growing phase It makes passes over the input uses an initial learning rate of and starting neighbourhood size of The spreadFactor is set to",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "defaultFirst",
          "package": "hsgsom",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default for the second phase is a smoothing phase making 50\n passes over the input vectors with a learning rate of 0.05 and an\n initial neighbourhood size of 2. Since there is no node growth the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003espreadFactor\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is ignored and thus set to 0.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "defaultSecond",
          "package": "hsgsom",
          "signature": "Phase",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#defaultSecond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultSecond\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:defaultSecond\"]"
        },
        "index": {
          "description": "The default for the second phase is smoothing phase making passes over the input vectors with learning rate of and an initial neighbourhood size of Since there is no node growth the spreadFactor is ignored and thus set to",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "defaultSecond",
          "package": "hsgsom",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default for the third and last phase is a smoothing phase making\n 50 passes over the input vectors with a learning rate of 0.01 and\n an initial neighbourhood size of 1. Since there is no node growth the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003espreadFactor\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is ignored and thus set to 0.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "defaultThird",
          "package": "hsgsom",
          "signature": "Phase",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#defaultThird",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultThird\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:defaultThird\"]"
        },
        "index": {
          "description": "The default for the third and last phase is smoothing phase making passes over the input vectors with learning rate of and an initial neighbourhood size of Since there is no node growth the spreadFactor is ignored and thus set to",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "defaultThird",
          "package": "hsgsom",
          "partial": "Third",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaultThird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the list of the three default phases of the GSOM algorithm.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "defaults",
          "package": "hsgsom",
          "signature": "Phases",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#defaults",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaults\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:defaults\"]"
        },
        "index": {
          "description": "This is the list of the three default phases of the GSOM algorithm",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "defaults",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:defaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003egrow\u003c/code\u003e flag determines whether this is a growing phase or not.\n If this is \u003ccode\u003eFalse\u003c/code\u003e then no new nodes will be grown.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "grow",
          "package": "hsgsom",
          "signature": "Bool",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:grow\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:grow\"]"
        },
        "index": {
          "description": "The grow flag determines whether this is growing phase or not If this is False then no new nodes will be grown",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "grow",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the growth threshold as explained in the documentation\n for \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "growthThreshold",
          "package": "hsgsom",
          "signature": "Phase -\u003e Int -\u003e Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#growthThreshold",
          "type": "function"
        },
        "index": {
          "description": "Calculates the growth threshold as explained in the documentation for Phase",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "growthThreshold",
          "normalized": "Phase-\u003eInt-\u003eDouble",
          "package": "hsgsom",
          "partial": "Threshold",
          "signature": "Phase-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:growthThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kernel function. It is used in conjunction with the learning\n rate to adjust weight adaption.\n \u003ccode\u003ekernel currentNeighbourhoodsize gridDistance\u003c/code\u003e should take the\n neighbourhood size which is in effect during the current step and\n a nodes grid distance from the winning node.\n The neighbourhood size will be a real number due to the linear decrease.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "kernel",
          "package": "hsgsom",
          "signature": "Kernel",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:kernel\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:kernel\"]"
        },
        "index": {
          "description": "The kernel function It is used in conjunction with the learning rate to adjust weight adaption kernel currentNeighbourhoodsize gridDistance should take the neighbourhood size which is in effect during the current step and nodes grid distance from the winning node The neighbourhood size will be real number due to the linear decrease",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "kernel",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the kernel function associated with the given kernel.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "kernelFunction",
          "package": "hsgsom",
          "signature": "Kernel -\u003e Double -\u003e Int -\u003e Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#kernelFunction",
          "type": "function"
        },
        "index": {
          "description": "Returns the kernel function associated with the given kernel",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "kernelFunction",
          "normalized": "Kernel-\u003eDouble-\u003eInt-\u003eDouble",
          "package": "hsgsom",
          "partial": "Function",
          "signature": "Kernel-\u003eDouble-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:kernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to calculate the learning rate in each of the\n phase's steps.\n During each step \u003ccode\u003elearninRate currentStep maxSteps\u003c/code\u003e is fed the\n number (starting from zero) of the current step as the first\n argument and the total number of steps the phase will have as the\n second argument to calculate the learning rate which will be in\n effect for this phase.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "learningRate",
          "package": "hsgsom",
          "signature": "LearningRate",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:learningRate\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:learningRate\"]"
        },
        "index": {
          "description": "The function used to calculate the learning rate in each of the phase steps During each step learninRate currentStep maxSteps is fed the number starting from zero of the current step as the first argument and the total number of steps the phase will have as the second argument to calculate the learning rate which will be in effect for this phase",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "learningRate",
          "package": "hsgsom",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:learningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial size of the neighbourhood affected by weight adaption.\n This will decrease linearly while the phase is executed.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "neighbourhoodSize",
          "package": "hsgsom",
          "signature": "Int",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:neighbourhoodSize\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:neighbourhoodSize\"]"
        },
        "index": {
          "description": "The initial size of the neighbourhood affected by weight adaption This will decrease linearly while the phase is executed",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "neighbourhoodSize",
          "package": "hsgsom",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:neighbourhoodSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of passes which are to be made over the input vectors.\n Since each step of the phase consumes one input vector, the overall\n number of steps the phase will have will be:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esteps = passes * length inputs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "passes",
          "package": "hsgsom",
          "signature": "Int",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:passes\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:passes\"]"
        },
        "index": {
          "description": "The number of passes which are to be made over the input vectors Since each step of the phase consumes one input vector the overall number of steps the phase will have will be steps passes length inputs",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "passes",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:passes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ephase\u003c/a\u003e\u003c/code\u003e parameters inputs\u003c/code\u003e will update the given \u003ccode\u003elattice\u003c/code\u003e by\n executing one phase of the GSOM algorithm with the given \u003ccode\u003einputs\u003c/code\u003e\n and \u003ccode\u003eparameters\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "phase",
          "package": "hsgsom",
          "signature": "Phase -\u003e Lattice -\u003e Inputs -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:phase\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:phase\"]"
        },
        "index": {
          "description": "phase parameters inputs will update the given lattice by executing one phase of the GSOM algorithm with the given inputs and parameters",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "phase",
          "normalized": "Phase-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "package": "hsgsom",
          "signature": "Phase-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince a complete run of the GSOM algorithm means running a number of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePhases\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e this is usually the main function used.\n \u003ccode\u003erun phases lattice inputs\u003c/code\u003e runs the GSOM algorithm by running the\n \u003ccode\u003ephases\u003c/code\u003e in the order specified, each time making passes over \u003ccode\u003einputs\u003c/code\u003e\n and using the produced \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to as an argument to the next phase.\n The initial \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003elattice\u003c/code\u003e may be constructed with the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewRandom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewCentered\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "run",
          "package": "hsgsom",
          "signature": "Phases -\u003e Lattice -\u003e Inputs -\u003e IO Lattice",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:run\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:run\"]"
        },
        "index": {
          "description": "Since complete run of the GSOM algorithm means running number of Phases this is usually the main function used run phases lattice inputs runs the GSOM algorithm by running the phases in the order specified each time making passes over inputs and using the produced Lattice to as an argument to the next phase The initial Lattice lattice may be constructed with the newRandom and the newCentered functions",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "run",
          "normalized": "Phases-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "package": "hsgsom",
          "signature": "Phases-\u003eLattice-\u003eInputs-\u003eIO Lattice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe spread factor is used to calculate the growth threshold according\n to the formula:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eGT = - sqrt(\u003ccode\u003ed\u003c/code\u003e)*ln(\u003ccode\u003e\u003ca\u003espreadFactor\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere \u003ccode\u003ed\u003c/code\u003e is the input dimension.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.Gsom.Phase\",\"Data.Datamining.Clustering.Gsom\"]",
          "name": "spreadFactor",
          "package": "hsgsom",
          "signature": "Double",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:spreadFactor\",\"http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:spreadFactor\"]"
        },
        "index": {
          "description": "The spread factor is used to calculate the growth threshold according to the formula GT sqrt ln spreadFactor where is the input dimension",
          "hierarchy": "Data Datamining Clustering Gsom Phase",
          "module": "Data.Datamining.Clustering.Gsom.Phase",
          "name": "spreadFactor",
          "package": "hsgsom",
          "partial": "Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom-Phase.html#v:spreadFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module should contain everything you need to run the GSOM clustering\n algorithm. It collects and re-exports all important and needed functions\n from moduls lower in the hirarchy.\n\u003c/p\u003e\u003cp\u003eIdeally you should never need to look at those modules. If you do need\n to do this, it is a design failure and I would appreciate it if you\n would drop me a note.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Gsom",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom.html",
          "type": "module"
        },
        "index": {
          "description": "This module should contain everything you need to run the GSOM clustering algorithm It collects and re-exports all important and needed functions from moduls lower in the hirarchy Ideally you should never need to look at those modules If you do need to do this it is design failure and would appreciate it if you would drop me note",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Gsom",
          "package": "hsgsom",
          "partial": "Gsom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of a list of inputs. Having the tuple \u003ccode\u003e(a,b)\u003c/code\u003e at index \u003ccode\u003ei\u003c/code\u003e\n in \u003ccode\u003ebounds\u003c/code\u003e means that the value at index \u003ccode\u003ei\u003c/code\u003e of each of the input vectors\n from the inputs which where used to calculate \u003ccode\u003ebounds\u003c/code\u003e is from the\n intervall \u003ccode\u003e[a,b]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Bounds",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Bounds",
          "type": "type"
        },
        "index": {
          "description": "The bounds of list of inputs Having the tuple at index in bounds means that the value at index of each of the input vectors from the inputs which where used to calculate bounds is from the intervall",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Bounds",
          "package": "hsgsom",
          "partial": "Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe clusters generated by GSOM basically consist of three things:\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Cluster",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Cluster",
          "type": "data"
        },
        "index": {
          "description": "The clusters generated by GSOM basically consist of three things",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Cluster",
          "package": "hsgsom",
          "partial": "Cluster",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe final clustering which is the result of the GSOM algorithm\n is a \u003ccode\u003e\u003ccode\u003eData.Map\u003c/code\u003e\u003c/code\u003e mapping \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCoordinates\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCluster\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Clustering",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Clustering",
          "type": "type"
        },
        "index": {
          "description": "The final clustering which is the result of the GSOM algorithm is Data.Map mapping Coordinates to Cluster",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Clustering",
          "package": "hsgsom",
          "partial": "Clustering",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Clustering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Coordinates",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Coordinates.html#Coordinates",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Coordinates",
          "package": "hsgsom",
          "partial": "Coordinates",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Coordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput vectors are represented as lists of Doubles.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Input",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Input",
          "type": "type"
        },
        "index": {
          "description": "Input vectors are represented as lists of Doubles",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Input",
          "package": "hsgsom",
          "partial": "Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Inputs",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Input.html#Inputs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Inputs",
          "package": "hsgsom",
          "partial": "Inputs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Inputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Kernel",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Kernel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Kernel",
          "package": "hsgsom",
          "partial": "Kernel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lattice type. Since global access to nodes is needed they're\n stored in a \u003ccode\u003eData.Map\u003c/code\u003e indexed by their coordinates.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Lattice",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Lattice.html#Lattice",
          "type": "type"
        },
        "index": {
          "description": "The lattice type Since global access to nodes is needed they re stored in Data.Map indexed by their coordinates",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Lattice",
          "package": "hsgsom",
          "partial": "Lattice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Lattice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "LearningRate",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#LearningRate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "LearningRate",
          "package": "hsgsom",
          "partial": "Learning Rate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:LearningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of neighbourhoods. Wherever a neighbourhood of a node\n is neede, this type should be used.\n A \u003ccode\u003eNeighbourhood\u003c/code\u003e consits of a list of pairs of nodes and their\n discrete grid distance from the source of the neighbourhood.\n The source node is the only one with distance \u003ccode\u003e0\u003c/code\u003e while immediate\n neighbours get distance one and so on.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Neighbourhood",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Neighbourhood",
          "type": "type"
        },
        "index": {
          "description": "The type of neighbourhoods Wherever neighbourhood of node is neede this type should be used Neighbourhood consits of list of pairs of nodes and their discrete grid distance from the source of the neighbourhood The source node is the only one with distance while immediate neighbours get distance one and so on",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Neighbourhood",
          "package": "hsgsom",
          "partial": "Neighbourhood",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Neighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node's neighbours are stored in fields of type \u003ccode\u003eNeighbours\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Neighbours",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Neighbours",
          "type": "type"
        },
        "index": {
          "description": "node neighbours are stored in fields of type Neighbours",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Neighbours",
          "package": "hsgsom",
          "partial": "Neighbours",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of nodes of a gsom.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Node",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Node",
          "type": "data"
        },
        "index": {
          "description": "The type of nodes of gsom",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Node",
          "package": "hsgsom",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Nodes",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Node.html#Nodes",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Nodes",
          "package": "hsgsom",
          "partial": "Nodes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis datatype encapsulates all the parameters needed to be known to\n run one phase of the GSOM algorithm.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Phase",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phase",
          "type": "data"
        },
        "index": {
          "description": "This datatype encapsulates all the parameters needed to be known to run one phase of the GSOM algorithm",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Phase",
          "package": "hsgsom",
          "partial": "Phase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Phases",
          "package": "hsgsom",
          "source": "src/Data-Datamining-Clustering-Gsom-Phase.html#Phases",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Phases",
          "package": "hsgsom",
          "partial": "Phases",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#t:Phases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Cluster",
          "package": "hsgsom",
          "signature": "Cluster",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "Cluster",
          "package": "hsgsom",
          "partial": "Cluster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe vector which best represents all the vectors belonging to this\n cluster.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "center",
          "package": "hsgsom",
          "signature": "Input",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Cluster",
          "type": "function"
        },
        "index": {
          "description": "the vector which best represents all the vectors belonging to this cluster",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "center",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e inputs clustering\u003c/code\u003e clusters the given \u003ccode\u003einputs\u003c/code\u003e according to\n the centers of the clusters in \u003ccode\u003eclustering\u003c/code\u003e. That means for each input \u003ccode\u003ei\u003c/code\u003e\n from \u003ccode\u003einputs\u003c/code\u003e the index of \u003ccode\u003ei\u003c/code\u003e is added to the contents of the cluster\n center to which \u003ccode\u003ei\u003c/code\u003e has minimal distance.\n TODO: Implement tiebreaker.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "cluster",
          "package": "hsgsom",
          "signature": "Inputs -\u003e Clustering -\u003e Clustering",
          "source": "src/Data-Datamining-Clustering-Gsom.html#cluster",
          "type": "function"
        },
        "index": {
          "description": "cluster inputs clustering clusters the given inputs according to the centers of the clusters in clustering That means for each input from inputs the index of is added to the contents of the cluster center to which has minimal distance TODO Implement tiebreaker",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "cluster",
          "normalized": "Inputs-\u003eClustering-\u003eClustering",
          "package": "hsgsom",
          "signature": "Inputs-\u003eClustering-\u003eClustering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a clustering induced by the given lattice.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eclustering\u003c/a\u003e\u003c/code\u003e lattice\u003c/code\u003e uses the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eweights\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ccode\u003e\u003ca\u003enodes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e stored\n in \u003ccode\u003elattice\u003c/code\u003e to generate \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003es and returns the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClustering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n storing these \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003es. Each non leaf node \u003ccode\u003en\u003c/code\u003e in \u003ccode\u003elattice\u003c/code\u003e\n corresponds to one \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e with \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ecoordinates\u003c/a\u003e\u003c/code\u003e c = \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e\n n)\u003c/code\u003e and with \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecenter\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e equal to the weight vector of \u003ccode\u003en\u003c/code\u003e. Each\n generated \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e's \u003ccode\u003e\u003ca\u003econtents\u003c/a\u003e\u003c/code\u003e are empty. Use the \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e\n function with a set of inputs to obtain a clustering where each\n \u003ccode\u003e\u003ca\u003eCluster\u003c/a\u003e\u003c/code\u003e's \u003ccode\u003e\u003ca\u003econtents\u003c/a\u003e\u003c/code\u003e is a list of the indices of the input\n points belonging to this \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "clustering",
          "package": "hsgsom",
          "signature": "Lattice -\u003e IO Clustering",
          "source": "src/Data-Datamining-Clustering-Gsom.html#clustering",
          "type": "function"
        },
        "index": {
          "description": "Computes clustering induced by the given lattice clustering lattice uses the weights of the nodes stored in lattice to generate cluster and returns the Clustering storing these cluster Each non leaf node in lattice corresponds to one cluster with coordinates location and with center equal to the weight vector of Each generated cluster contents are empty Use the cluster function with set of inputs to obtain clustering where each Cluster contents is list of the indices of the input points belonging to this cluster",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "clustering",
          "normalized": "Lattice-\u003eIO Clustering",
          "package": "hsgsom",
          "signature": "Lattice-\u003eIO Clustering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:clustering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indices of the input vectors belonging to this cluster.\n That means a cluster is always relative to a set of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInputs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "contents",
          "package": "hsgsom",
          "signature": "[Int]",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Cluster",
          "type": "function"
        },
        "index": {
          "description": "The indices of the input vectors belonging to this cluster That means cluster is always relative to set of Inputs",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "contents",
          "normalized": "[Int]",
          "package": "hsgsom",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe coordinates of this cluster\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "coordinates",
          "package": "hsgsom",
          "signature": "Coordinates",
          "source": "src/Data-Datamining-Clustering-Gsom.html#Cluster",
          "type": "function"
        },
        "index": {
          "description": "the coordinates of this cluster",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "coordinates",
          "package": "hsgsom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:coordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDumps the given input vectors to a string which can be fed to\n gnuplot. Just write the string to a file and write \u003ccode\u003eplot \"file\"\u003c/code\u003e in\n gnuplot.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "dumpInputs",
          "package": "hsgsom",
          "signature": "Inputs -\u003e String",
          "source": "src/Data-Datamining-Clustering-Gsom.html#dumpInputs",
          "type": "function"
        },
        "index": {
          "description": "Dumps the given input vectors to string which can be fed to gnuplot Just write the string to file and write plot file in gnuplot",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "dumpInputs",
          "normalized": "Inputs-\u003eString",
          "package": "hsgsom",
          "partial": "Inputs",
          "signature": "Inputs-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:dumpInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enearestCluster\u003c/a\u003e\u003c/code\u003e input clustering\u003c/code\u003e returns the cluster which has\n the center with the smallest distance to \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "nearestCluster",
          "package": "hsgsom",
          "signature": "Input -\u003e Clustering -\u003e Cluster",
          "source": "src/Data-Datamining-Clustering-Gsom.html#nearestCluster",
          "type": "function"
        },
        "index": {
          "description": "nearestCluster input clustering returns the cluster which has the center with the smallest distance to input",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "nearestCluster",
          "normalized": "Input-\u003eClustering-\u003eCluster",
          "package": "hsgsom",
          "partial": "Cluster",
          "signature": "Input-\u003eClustering-\u003eCluster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:nearestCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenderScript\u003c/a\u003e\u003c/code\u003e c path\u003c/code\u003e expects to be given a \u003ccode\u003e\u003ca\u003eClustering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e\n having 2 dimensional \u003ccode\u003e\u003ca\u003ecenter\u003c/a\u003e\u003c/code\u003es and will call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if that's not\n the case. On success it will save a python script to \u003ccode\u003epath\u003c/code\u003e.py. If\n this python script is run it will in turn save a PDF image to\n \u003ccode\u003epath\u003c/code\u003e.pdf. The image will contain the graph induced by \u003ccode\u003ec\u003c/code\u003e with each\n node (cluster center) placed positioned according to the \u003ccode\u003ec\u003c/code\u003e's\n center (weight vector). The python script will depend on the\n \u003ccode\u003enetworkx\u003c/code\u003e and \u003ccode\u003emathplotlib\u003c/code\u003e python packages being installed.\n I know that this is relatively clunky, but since I haven't found a\n better way of creating an image of a graph with known node positions,\n this is the way I chose to go.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "renderScript",
          "package": "hsgsom",
          "signature": "Clustering -\u003e String -\u003e IO ()",
          "source": "src/Data-Datamining-Clustering-Gsom.html#renderScript",
          "type": "function"
        },
        "index": {
          "description": "renderScript path expects to be given Clustering having dimensional center and will call error if that not the case On success it will save python script to path py If this python script is run it will in turn save PDF image to path pdf The image will contain the graph induced by with each node cluster center placed positioned according to the center weight vector The python script will depend on the networkx and mathplotlib python packages being installed know that this is relatively clunky but since haven found better way of creating an image of graph with known node positions this is the way chose to go",
          "hierarchy": "Data Datamining Clustering Gsom",
          "module": "Data.Datamining.Clustering.Gsom",
          "name": "renderScript",
          "normalized": "Clustering-\u003eString-\u003eIO()",
          "package": "hsgsom",
          "partial": "Script",
          "signature": "Clustering-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsgsom/docs/Data-Datamining-Clustering-Gsom.html#v:renderScript"
      }
    }
  ]
]