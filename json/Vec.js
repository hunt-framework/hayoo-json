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
        "word": "Vec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Base",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Base",
          "package": "Vec",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector constructor. \u003ccode\u003e(:.)\u003c/code\u003e for vectors is like \u003ccode\u003e(:)\u003c/code\u003e for lists, and\n \u003ccode\u003e()\u003c/code\u003e takes the place of \u003ccode\u003e[]\u003c/code\u003e. (The list of instances here is not meant to be\n readable.)\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": ":.",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "The vector constructor for vectors is like for lists and takes the place of The list of instances here is not meant to be readable",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": ":.",
          "package": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget or set a vector element, known at compile\ntime. Use the Nat types to access vector components. For instance, \u003ccode\u003eget n0\u003c/code\u003e\ngets the x component, \u003ccode\u003eset n2 44\u003c/code\u003e sets the z component to 44.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Access",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Access",
          "type": "class"
        },
        "index": {
          "description": "get or set vector element known at compile time Use the Nat types to access vector components For instance get n0 gets the component set n2 sets the component to",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Access",
          "package": "Vec",
          "partial": "Access",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two vectors\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Append",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Append",
          "type": "class"
        },
        "index": {
          "description": "Append two vectors",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Append",
          "package": "Vec",
          "partial": "Append",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrop n v\u003c/code\u003e strips the first \u003ccode\u003en\u003c/code\u003e elements from \u003ccode\u003ev\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e is a type-level\n natural. For example \u003ccode\u003edrop n2 v\u003c/code\u003e drops the first two elements.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Drop",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Drop",
          "type": "class"
        },
        "index": {
          "description": "drop strips the first elements from is type-level natural For example drop n2 drops the first two elements",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Drop",
          "package": "Vec",
          "partial": "Drop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a function over a vector.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Fold",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Fold",
          "type": "class"
        },
        "index": {
          "description": "Fold function over vector",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Fold",
          "package": "Vec",
          "partial": "Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first element.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Head",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Head",
          "type": "class"
        },
        "index": {
          "description": "The first element",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Head",
          "package": "Vec",
          "partial": "Head",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last element, usually significant for some reason (quaternions,\n homogenous coordinates, whatever)\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Last",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Last",
          "type": "class"
        },
        "index": {
          "description": "Get the last element usually significant for some reason quaternions homogenous coordinates whatever",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Last",
          "package": "Vec",
          "partial": "Last",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of a vector\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Length",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Length",
          "type": "class"
        },
        "index": {
          "description": "The length of vector",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Length",
          "package": "Vec",
          "partial": "Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function over each element in a vector. Constraint \u003ccode\u003eMap a b u v\u003c/code\u003e\n states that \u003ccode\u003eu\u003c/code\u003e is a vector of \u003ccode\u003ea\u003c/code\u003es, \u003ccode\u003ev\u003c/code\u003e is a vector of \u003ccode\u003eb\u003c/code\u003es with the same\n length as \u003ccode\u003eu\u003c/code\u003e, and the function is of type \u003ccode\u003ea -\u003e b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Map",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Map",
          "type": "class"
        },
        "index": {
          "description": "Apply function over each element in vector Constraint Map states that is vector of is vector of with the same length as and the function is of type",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Map",
          "package": "Vec",
          "partial": "Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat22",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat22",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat22",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat23",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat23",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat23",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat24",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat24",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat32",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat32",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat33",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat33",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat33",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat34",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat34",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat34",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat35",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat35",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat35",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat36",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat36",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat36",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat42",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat42",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat42",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat43",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat43",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat43",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat44",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat44",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat44",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat45",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat45",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat45",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat46",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat46",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat46",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat47",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat47",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat47",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Mat48",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Mat48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Mat48",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Mat48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse helper function : accumulates the reversed list in its first argument\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Reverse'",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Reverse%27",
          "type": "class"
        },
        "index": {
          "description": "Reverse helper function accumulates the reversed list in its first argument",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Reverse'",
          "package": "Vec",
          "partial": "Reverse'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Reverse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "ShowVec",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#ShowVec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "ShowVec",
          "package": "Vec",
          "partial": "Show Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:ShowVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esnoc v a\u003c/code\u003e appends the element a to the end of v.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Snoc",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Snoc",
          "type": "class"
        },
        "index": {
          "description": "snoc appends the element to the end of",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Snoc",
          "package": "Vec",
          "partial": "Snoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll but the first element.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Tail",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Tail",
          "type": "class"
        },
        "index": {
          "description": "All but the first element",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Tail",
          "package": "Vec",
          "partial": "Tail",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etake n v\u003c/code\u003e constructs a vector from the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003ev\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e is a\n type-level natural. For example \u003ccode\u003etake n3 v\u003c/code\u003e makes a 3-vector of the first\n three elements of \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Take",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Take",
          "type": "class"
        },
        "index": {
          "description": "take constructs vector from the first elements of is type-level natural For example take n3 makes vector of the first three elements of",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Take",
          "package": "Vec",
          "partial": "Take",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type constraint \u003ccode\u003eVec n a v\u003c/code\u003e infers the vector type \u003ccode\u003ev\u003c/code\u003e from the\n length \u003ccode\u003en\u003c/code\u003e, a type-level natural, and underlying component type \u003ccode\u003ea\u003c/code\u003e.\n So \u003ccode\u003ex :: Vec N4 a v =\u003e v\u003c/code\u003e declares \u003ccode\u003ex\u003c/code\u003e to be a 4-vector of \u003ccode\u003ea\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "Vec",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec",
          "type": "class"
        },
        "index": {
          "description": "The type constraint Vec infers the vector type from the length type-level natural and underlying component type So Vec N4 declares to be vector of",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec",
          "package": "Vec",
          "partial": "Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec10",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec10",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec10",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec11",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec11",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec11",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec12",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec12",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec12",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec13",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec13",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec13",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec14",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec14",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec14",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec15",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec15",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec15",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec16",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec16",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec17",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec17",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec17",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec18",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec18",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec18",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec19",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec19",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec19",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec2",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec2",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec3",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec3",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec4",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec4",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec5",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec5",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec6",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec6",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec7",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec7",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec8",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec8",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "Vec9",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#Vec9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "Vec9",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:Vec9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "VecArrayRW",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#VecArrayRW",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "VecArrayRW",
          "package": "Vec",
          "partial": "Vec Array RW",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:VecArrayRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a vector from a list, or access vector elements using run-time\n indicies, numbered from 0.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "VecList",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#VecList",
          "type": "class"
        },
        "index": {
          "description": "Build vector from list or access vector elements using run-time indicies numbered from",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "VecList",
          "package": "Vec",
          "partial": "Vec List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:VecList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two vectors using a binary function. The length of the result is\n the min of the lengths of the arguments. The constraint \u003ccode\u003eZipWith a b c u v\n w\u003c/code\u003e states that \u003ccode\u003eu\u003c/code\u003e is a vector of \u003ccode\u003ea\u003c/code\u003es, \u003ccode\u003ev\u003c/code\u003e is a vector of \u003ccode\u003eb\u003c/code\u003es, \u003ccode\u003ew\u003c/code\u003e is a\n vector of \u003ccode\u003ec\u003c/code\u003es, and the binary function is of type \u003ccode\u003ea -\u003e b -\u003e c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "ZipWith",
          "package": "Vec",
          "source": "src/Data-Vec-Base.html#ZipWith",
          "type": "class"
        },
        "index": {
          "description": "Combine two vectors using binary function The length of the result is the min of the lengths of the arguments The constraint ZipWith states that is vector of is vector of is vector of and the binary function is of type",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "ZipWith",
          "package": "Vec",
          "partial": "Zip With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#t:ZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": ":.",
          "package": "Vec",
          "signature": "a :. !b",
          "source": "src/Data-Vec-Base.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": ":.",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "append",
          "package": "Vec",
          "signature": "v1 -\u003e v2 -\u003e v3",
          "source": "src/Data-Vec-Base.html#append",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Vec",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "drop",
          "package": "Vec",
          "signature": "n -\u003e v -\u003e v'",
          "source": "src/Data-Vec-Base.html#drop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "drop",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "n-\u003ev-\u003ev'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "fold",
          "package": "Vec",
          "signature": "(a -\u003e a -\u003e a) -\u003e v -\u003e a",
          "source": "src/Data-Vec-Base.html#fold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "Vec",
          "signature": "(a-\u003ea-\u003ea)-\u003ev-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "foldl",
          "package": "Vec",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e v -\u003e b",
          "source": "src/Data-Vec-Base.html#foldl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "Vec",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ev-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "foldr",
          "package": "Vec",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e v -\u003e b",
          "source": "src/Data-Vec-Base.html#foldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "Vec",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ev-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list into a vector of inferred length. The list must be at least\n as long as the vector, but may be longer. Make a mental note of the\n distinction between this and \u003ccode\u003e\u003ca\u003ematFromList\u003c/a\u003e\u003c/code\u003e, as you might accidentally use\n this when you mean that. Because number literals can be converted to\n vectors, and matrices are vectors of vectors, the following works\n\u003c/p\u003e\u003cpre\u003e fromList [1,2,3,4] :: Mat22 Int\n \u003e ((1):.(1):.()):.((2):.(2):.()):.()\n\u003c/pre\u003e\u003cp\u003eeven though we meant to do this\n\u003c/p\u003e\u003cpre\u003e matFromList [1,2,3,4] :: Mat22 Int\n \u003e ((1):.(2):.()):.((3):.(4):.()):.()\n\u003c/pre\u003e",
          "module": "Data.Vec.Base",
          "name": "fromList",
          "package": "Vec",
          "signature": "[a] -\u003e v",
          "source": "src/Data-Vec-Base.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Turn list into vector of inferred length The list must be at least as long as the vector but may be longer Make mental note of the distinction between this and matFromList as you might accidentally use this when you mean that Because number literals can be converted to vectors and matrices are vectors of vectors the following works fromList Mat22 Int even though we meant to do this matFromList Mat22 Int",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "Vec",
          "partial": "List",
          "signature": "[a]-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "get",
          "package": "Vec",
          "signature": "n -\u003e v -\u003e a",
          "source": "src/Data-Vec-Base.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "get",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "n-\u003ev-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a vector element, which one determined at runtime.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "getElem",
          "package": "Vec",
          "signature": "Int -\u003e v -\u003e a",
          "source": "src/Data-Vec-Base.html#getElem",
          "type": "method"
        },
        "index": {
          "description": "Get vector element which one determined at runtime",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "getElem",
          "normalized": "Int-\u003ea-\u003eb",
          "package": "Vec",
          "partial": "Elem",
          "signature": "Int-\u003ev-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:getElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "head",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#head",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "head",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "init#",
          "package": "Vec",
          "signature": "v",
          "source": "src/Data-Vec-Base.html#init%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "init#",
          "package": "Vec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:init-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "last",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#last",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "last",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "length",
          "package": "Vec",
          "signature": "v -\u003e Int",
          "source": "src/Data-Vec-Base.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "Vec",
          "signature": "v-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "map",
          "package": "Vec",
          "signature": "(a -\u003e b) -\u003e u -\u003e v",
          "source": "src/Data-Vec-Base.html#map",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "Vec",
          "signature": "(a-\u003eb)-\u003eu-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a list into a matrix. (row-major order)\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "matFromList",
          "package": "Vec",
          "signature": "[a] -\u003e m",
          "source": "src/Data-Vec-Base.html#matFromList",
          "type": "function"
        },
        "index": {
          "description": "convert list into matrix row-major order",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "matFromList",
          "normalized": "[a]-\u003eb",
          "package": "Vec",
          "partial": "From List",
          "signature": "[a]-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:matFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a list-of-lists into a matrix\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "matFromLists",
          "package": "Vec",
          "signature": "[[a]] -\u003e m",
          "source": "src/Data-Vec-Base.html#matFromLists",
          "type": "function"
        },
        "index": {
          "description": "convert list-of-lists into matrix",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "matFromLists",
          "normalized": "[[a]]-\u003eb",
          "package": "Vec",
          "partial": "From Lists",
          "signature": "[[a]]-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:matFromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a matrix to a list in row-major order\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "matToList",
          "package": "Vec",
          "signature": "m -\u003e [a]",
          "source": "src/Data-Vec-Base.html#matToList",
          "type": "function"
        },
        "index": {
          "description": "convert matrix to list in row-major order",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "matToList",
          "normalized": "a-\u003e[b]",
          "package": "Vec",
          "partial": "To List",
          "signature": "m-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:matToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a matrix to a list-of-lists\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "matToLists",
          "package": "Vec",
          "signature": "m -\u003e [[a]]",
          "source": "src/Data-Vec-Base.html#matToLists",
          "type": "function"
        },
        "index": {
          "description": "convert matrix to list-of-lists",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "matToLists",
          "normalized": "a-\u003e[[b]]",
          "package": "Vec",
          "partial": "To Lists",
          "signature": "m-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:matToLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum vector element\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "maximum",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum vector element",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "maximum",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum vector element\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "minimum",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum vector element",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "minimum",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a uniform vector of a given length. \u003ccode\u003en\u003c/code\u003e is a type-level natural.\n Use \u003ccode\u003e\u003ca\u003evec\u003c/a\u003e\u003c/code\u003e when the length can be inferred.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "mkVec",
          "package": "Vec",
          "signature": "n -\u003e a -\u003e v",
          "source": "src/Data-Vec-Base.html#mkVec",
          "type": "method"
        },
        "index": {
          "description": "Make uniform vector of given length is type-level natural Use vec when the length can be inferred",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "mkVec",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "partial": "Vec",
          "signature": "n-\u003ea-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:mkVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproduct of vector elements\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "product",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#product",
          "type": "function"
        },
        "index": {
          "description": "product of vector elements",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "product",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a vector\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "reverse",
          "package": "Vec",
          "signature": "v -\u003e v'",
          "source": "src/Data-Vec-Base.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse vector",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "reverse",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "reverse'",
          "package": "Vec",
          "signature": "p -\u003e v -\u003e v'",
          "source": "src/Data-Vec-Base.html#reverse%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "reverse'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "p-\u003ev-\u003ev'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:reverse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "set",
          "package": "Vec",
          "signature": "n -\u003e a -\u003e v -\u003e v",
          "source": "src/Data-Vec-Base.html#set",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "set",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "Vec",
          "signature": "n-\u003ea-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a vector element, which one determined at runtime\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "setElem",
          "package": "Vec",
          "signature": "Int -\u003e a -\u003e v -\u003e v",
          "source": "src/Data-Vec-Base.html#setElem",
          "type": "method"
        },
        "index": {
          "description": "Set vector element which one determined at runtime",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "setElem",
          "normalized": "Int-\u003ea-\u003eb-\u003eb",
          "package": "Vec",
          "partial": "Elem",
          "signature": "Int-\u003ea-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:setElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "showVec",
          "package": "Vec",
          "signature": "v -\u003e String",
          "source": "src/Data-Vec-Base.html#showVec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "showVec",
          "normalized": "a-\u003eString",
          "package": "Vec",
          "partial": "Vec",
          "signature": "v-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:showVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "sizeOf#",
          "package": "Vec",
          "signature": "a -\u003e Int#",
          "source": "src/Data-Vec-Base.html#sizeOf%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "sizeOf#",
          "normalized": "a-\u003eInt #",
          "package": "Vec",
          "partial": "Of",
          "signature": "a-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:sizeOf-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "snoc",
          "package": "Vec",
          "signature": "v -\u003e a -\u003e v'",
          "source": "src/Data-Vec-Base.html#snoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "snoc",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "v-\u003ea-\u003ev'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esum of vector elements\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "sum",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-Base.html#sum",
          "type": "function"
        },
        "index": {
          "description": "sum of vector elements",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "sum",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "tail",
          "package": "Vec",
          "signature": "v -\u003e v_",
          "source": "src/Data-Vec-Base.html#tail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "tail",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ev_",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "take",
          "package": "Vec",
          "signature": "n -\u003e v -\u003e v'",
          "source": "src/Data-Vec-Base.html#take",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "take",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "n-\u003ev-\u003ev'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "toList",
          "package": "Vec",
          "signature": "v -\u003e [a]",
          "source": "src/Data-Vec-Base.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "toList",
          "normalized": "a-\u003e[b]",
          "package": "Vec",
          "partial": "List",
          "signature": "v-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "vaIndex#",
          "package": "Vec",
          "signature": "ByteArray# -\u003e Int# -\u003e v",
          "source": "src/Data-Vec-Base.html#vaIndex%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vaIndex#",
          "normalized": "ByteArray #-\u003eInt #-\u003ea",
          "package": "Vec",
          "partial": "Index",
          "signature": "ByteArray #-\u003eInt #-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vaIndex-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "vaLength#",
          "package": "Vec",
          "signature": "v -\u003e Int#",
          "source": "src/Data-Vec-Base.html#vaLength%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vaLength#",
          "normalized": "a-\u003eInt #",
          "package": "Vec",
          "partial": "Length",
          "signature": "v-\u003eInt #",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vaLength-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "vaRead#",
          "package": "Vec",
          "signature": "MutableByteArray# s# -\u003e Int# -\u003e State# s# -\u003e (#State# s#, v#)",
          "source": "src/Data-Vec-Base.html#vaRead%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vaRead#",
          "normalized": "MutableByteArray # a #-\u003eInt #-\u003eState # a #-\u003e(#State # a #,b #)",
          "package": "Vec",
          "partial": "Read",
          "signature": "MutableByteArray # s #-\u003eInt #-\u003eState # s #-\u003e(#State # s #,v #)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vaRead-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "vaSizeOf#",
          "package": "Vec",
          "signature": "v -\u003e Int#",
          "source": "src/Data-Vec-Base.html#vaSizeOf%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vaSizeOf#",
          "normalized": "a-\u003eInt #",
          "package": "Vec",
          "partial": "Size Of",
          "signature": "v-\u003eInt #",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vaSizeOf-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "vaWrite#",
          "package": "Vec",
          "signature": "MutableByteArray# s# -\u003e Int# -\u003e v -\u003e State# s# -\u003e State# s#",
          "source": "src/Data-Vec-Base.html#vaWrite%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vaWrite#",
          "normalized": "MutableByteArray # a #-\u003eInt #-\u003eb-\u003eState # a #-\u003eState # a #",
          "package": "Vec",
          "partial": "Write",
          "signature": "MutableByteArray # s #-\u003eInt #-\u003ev-\u003eState # s #-\u003eState # s #",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vaWrite-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a uniform vector. The length is inferred.\n\u003c/p\u003e",
          "module": "Data.Vec.Base",
          "name": "vec",
          "package": "Vec",
          "signature": "a -\u003e v",
          "source": "src/Data-Vec-Base.html#vec",
          "type": "function"
        },
        "index": {
          "description": "Make uniform vector The length is inferred",
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "vec",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "a-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Base",
          "name": "zipWith",
          "package": "Vec",
          "signature": "(a -\u003e b -\u003e c) -\u003e u -\u003e v -\u003e w",
          "source": "src/Data-Vec-Base.html#zipWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Base",
          "module": "Data.Vec.Base",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed-\u003ee-\u003ef",
          "package": "Vec",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eu-\u003ev-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Base.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.LinAlg",
          "name": "LinAlg",
          "package": "Vec",
          "source": "src/Data-Vec-LinAlg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "LinAlg",
          "package": "Vec",
          "partial": "Lin Alg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaussian elimination, adapted from Mirko Rahn:\n \u003ca\u003ehttp://www.haskell.org/pipermail/glasgow-haskell-users/2007-May/012648.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis is more of a proof of concept. Using a foreign C function will run\n slightly faster, and compile much faster. But where is the fun in that?\n Set your unfolding threshold as high as possible.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "GaussElim",
          "package": "Vec",
          "source": "src/Data-Vec-LinAlg.html#GaussElim",
          "type": "class"
        },
        "index": {
          "description": "Gaussian elimination adapted from Mirko Rahn http www.haskell.org pipermail glasgow-haskell-users May html This is more of proof of concept Using foreign function will run slightly faster and compile much faster But where is the fun in that Set your unfolding threshold as high as possible",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "GaussElim",
          "package": "Vec",
          "partial": "Gauss Elim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#t:GaussElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematrix transposition\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "Transpose",
          "package": "Vec",
          "source": "src/Data-Vec-LinAlg.html#Transpose",
          "type": "class"
        },
        "index": {
          "description": "matrix transposition",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "Transpose",
          "package": "Vec",
          "partial": "Transpose",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#t:Transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the \u003ccode\u003en\u003c/code\u003e-th column as a vector. \u003ccode\u003en\u003c/code\u003e is a type-level natural.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "column",
          "package": "Vec",
          "signature": "n -\u003e m -\u003e v",
          "source": "src/Data-Vec-LinAlg.html#column",
          "type": "function"
        },
        "index": {
          "description": "get the th column as vector is type-level natural",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "column",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "n-\u003em-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecramer'sRule m v\u003c/code\u003e computes the solution to \u003ccode\u003em`multmv`x=v\u003c/code\u003e  using the\n eponymous method. For larger than 3x3 you will want to use \u003ccode\u003e\u003ca\u003esolve\u003c/a\u003e\u003c/code\u003e, which\n uses \u003ccode\u003e\u003ca\u003egaussElim\u003c/a\u003e\u003c/code\u003e. Cramer's rule, however, unfolds into a closed-form\n expression, with no branches or allocations (other than the result). You may\n need to increase the unfolding threshold to see this.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "cramer'sRule",
          "package": "Vec",
          "signature": "m -\u003e v -\u003e v",
          "source": "src/Data-Vec-LinAlg.html#cramer%27sRule",
          "type": "function"
        },
        "index": {
          "description": "cramer sRule computes the solution to multmv using the eponymous method For larger than x3 you will want to use solve which uses gaussElim Cramer rule however unfolds into closed-form expression with no branches or allocations other than the result You may need to increase the unfolding threshold to see this",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "cramer'sRule",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Vec",
          "partial": "Rule",
          "signature": "m-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:cramer-39-sRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3d cross product.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "cross",
          "package": "Vec",
          "signature": "Vec3 a -\u003e Vec3 a -\u003e Vec3 a",
          "source": "src/Data-Vec-LinAlg.html#cross",
          "type": "function"
        },
        "index": {
          "description": "cross product",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "cross",
          "normalized": "Vec a-\u003eVec a-\u003eVec a",
          "package": "Vec",
          "signature": "Vec a-\u003eVec a-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeterminant by minor expansion, i.e. Laplace's formula. Unfolds into a\n closed form expression.  This should be the fastest way for 4x4 and smaller,\n but \u003ccode\u003esnd . gaussElim\u003c/code\u003e works too.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "det",
          "package": "Vec",
          "signature": "m -\u003e a",
          "source": "src/Data-Vec-LinAlg.html#det",
          "type": "function"
        },
        "index": {
          "description": "Determinant by minor expansion i.e Laplace formula Unfolds into closed form expression This should be the fastest way for x4 and smaller but snd gaussElim works too",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "det",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "m-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ediagonal v\u003c/code\u003e is a square matrix with the vector v as the diagonal, and 0\n elsewhere.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "diagonal",
          "package": "Vec",
          "signature": "v -\u003e m",
          "source": "src/Data-Vec-LinAlg.html#diagonal",
          "type": "function"
        },
        "index": {
          "description": "diagonal is square matrix with the vector as the diagonal and elsewhere",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "diagonal",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edot / inner / scalar product\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "dot",
          "package": "Vec",
          "signature": "v -\u003e v -\u003e a",
          "source": "src/Data-Vec-LinAlg.html#dot",
          "type": "function"
        },
        "index": {
          "description": "dot inner scalar product",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "dot",
          "normalized": "a-\u003ea-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ev-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussElim m\u003c/code\u003e returns a pair \u003ccode\u003e(m',d)\u003c/code\u003e where \u003ccode\u003em'\u003c/code\u003e is \u003ccode\u003em\u003c/code\u003e in row echelon\n form and \u003ccode\u003ed\u003c/code\u003e is the determinant of \u003ccode\u003em\u003c/code\u003e. The determinant of \u003ccode\u003em'\u003c/code\u003e is 1 or 0,\n i.e., the leading coefficient of each non-zero row is 1.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "gaussElim",
          "package": "Vec",
          "signature": "m -\u003e (m, a)",
          "source": "src/Data-Vec-LinAlg.html#gaussElim",
          "type": "method"
        },
        "index": {
          "description": "gaussElim returns pair where is in row echelon form and is the determinant of The determinant of is or i.e the leading coefficient of each non-zero row is",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "gaussElim",
          "normalized": "a-\u003e(a,b)",
          "package": "Vec",
          "partial": "Elim",
          "signature": "m-\u003e(m,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:gaussElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a point into homogenous coordinates\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "homPoint",
          "package": "Vec",
          "signature": "v -\u003e v'",
          "source": "src/Data-Vec-LinAlg.html#homPoint",
          "type": "function"
        },
        "index": {
          "description": "lift point into homogenous coordinates",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "homPoint",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "partial": "Point",
          "signature": "v-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:homPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoint-at-infinity in homogenous coordinates\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "homVec",
          "package": "Vec",
          "signature": "v -\u003e v'",
          "source": "src/Data-Vec-LinAlg.html#homVec",
          "type": "function"
        },
        "index": {
          "description": "point-at-infinity in homogenous coordinates",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "homVec",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "partial": "Vec",
          "signature": "v-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:homVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentity matrix (square)\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "identity",
          "package": "Vec",
          "signature": "m",
          "source": "src/Data-Vec-LinAlg.html#identity",
          "type": "function"
        },
        "index": {
          "description": "identity matrix square",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "identity",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einvert m\u003c/code\u003e returns \u003ccode\u003eJust\u003c/code\u003e the inverse of \u003ccode\u003em\u003c/code\u003e or \u003ccode\u003eNothing\u003c/code\u003e if \u003ccode\u003em\u003c/code\u003e is singular.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "invert",
          "package": "Vec",
          "signature": "m -\u003e Maybe m",
          "source": "src/Data-Vec-LinAlg.html#invert",
          "type": "function"
        },
        "index": {
          "description": "invert returns Just the inverse of or Nothing if is singular",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "invert",
          "normalized": "a-\u003eMaybe a",
          "package": "Vec",
          "signature": "m-\u003eMaybe m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einverse and determinant. If det = 0, inverted matrix is garbage.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "invertAndDet",
          "package": "Vec",
          "signature": "m -\u003e (m, a)",
          "source": "src/Data-Vec-LinAlg.html#invertAndDet",
          "type": "function"
        },
        "index": {
          "description": "inverse and determinant If det inverted matrix is garbage",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "invertAndDet",
          "normalized": "a-\u003e(a,b)",
          "package": "Vec",
          "partial": "And Det",
          "signature": "m-\u003e(m,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:invertAndDet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematrix * matrix\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "multmm",
          "package": "Vec",
          "signature": "m1 -\u003e m2 -\u003e m3",
          "source": "src/Data-Vec-LinAlg.html#multmm",
          "type": "function"
        },
        "index": {
          "description": "matrix matrix",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "multmm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Vec",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:multmm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematrix * column vector\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "multmv",
          "package": "Vec",
          "signature": "m -\u003e v -\u003e v'",
          "source": "src/Data-Vec-LinAlg.html#multmv",
          "type": "function"
        },
        "index": {
          "description": "matrix column vector",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "multmv",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "m-\u003ev-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:multmv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erow vector * matrix\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "multvm",
          "package": "Vec",
          "signature": "v -\u003e m -\u003e v'",
          "source": "src/Data-Vec-LinAlg.html#multvm",
          "type": "function"
        },
        "index": {
          "description": "row vector matrix",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "multvm",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "v-\u003em-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:multvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evector / L2 / Euclidean norm\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "norm",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-LinAlg.html#norm",
          "type": "function"
        },
        "index": {
          "description": "vector L2 Euclidean norm",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "norm",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evector norm, squared\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "normSq",
          "package": "Vec",
          "signature": "v -\u003e a",
          "source": "src/Data-Vec-LinAlg.html#normSq",
          "type": "function"
        },
        "index": {
          "description": "vector norm squared",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "normSq",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "partial": "Sq",
          "signature": "v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:normSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormalize v\u003c/code\u003e is a unit vector in the direction of \u003ccode\u003ev\u003c/code\u003e. \u003ccode\u003ev\u003c/code\u003e is assumed\n non-null.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "normalize",
          "package": "Vec",
          "signature": "v -\u003e v",
          "source": "src/Data-Vec-LinAlg.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "normalize is unit vector in the direction of is assumed non-null",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "normalize",
          "normalized": "a-\u003ea",
          "package": "Vec",
          "signature": "v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn orthogonal projection matrix for a right handed coordinate system looking down negative z. This will project far plane to \u003ccode\u003ez = +1\u003c/code\u003e and near plane to \u003ccode\u003ez = -1\u003c/code\u003e, i.e. into a left handed system.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "orthogonal",
          "package": "Vec",
          "signature": "a-\u003e a-\u003e Vec2 a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "An orthogonal projection matrix for right handed coordinate system looking down negative This will project far plane to and near plane to i.e into left handed system",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "orthogonal",
          "normalized": "a-\u003ea-\u003eVec a-\u003eMat a",
          "package": "Vec",
          "signature": "a-\u003ea-\u003eVec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:orthogonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA perspective projection matrix for a right handed coordinate system looking down negative z. This will project far plane to \u003ccode\u003ez = +1\u003c/code\u003e and near plane to \u003ccode\u003ez = -1\u003c/code\u003e, i.e. into a left handed system.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "perspective",
          "package": "Vec",
          "signature": "a-\u003e a-\u003e a-\u003e a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "perspective projection matrix for right handed coordinate system looking down negative This will project far plane to and near plane to i.e into left handed system",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "perspective",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eMat a",
          "package": "Vec",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:perspective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproject a vector from homogenous coordinates. Last vector element is\n assumed non-zero.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "project",
          "package": "Vec",
          "signature": "v -\u003e v'",
          "source": "src/Data-Vec-LinAlg.html#project",
          "type": "function"
        },
        "index": {
          "description": "project vector from homogenous coordinates Last vector element is assumed non-zero",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "project",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "v-\u003ev'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix from the euler angles yaw pitch and roll. Could be useful in e.g.\n   first person shooter games,\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationEuler",
          "package": "Vec",
          "signature": "Vec3 a -\u003e Mat44 a",
          "source": "src/Data-Vec-LinAlg.html#rotationEuler",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix from the euler angles yaw pitch and roll Could be useful in e.g first person shooter games",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationEuler",
          "normalized": "Vec a-\u003eMat a",
          "package": "Vec",
          "partial": "Euler",
          "signature": "Vec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationEuler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix for turning toward a point. Useful for targeting a camera to a specific point.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationLookAt",
          "package": "Vec",
          "signature": "Vec3 a-\u003e Vec3 a-\u003e Vec3 a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix for turning toward point Useful for targeting camera to specific point",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationLookAt",
          "normalized": "Vec a-\u003eVec a-\u003eVec a-\u003eMat a",
          "package": "Vec",
          "partial": "Look At",
          "signature": "Vec a-\u003eVec a-\u003eVec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationLookAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix from a normalized quaternion. Useful for most free flying rotations, such as airplanes.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationQuat",
          "package": "Vec",
          "signature": "Vec4 a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix from normalized quaternion Useful for most free flying rotations such as airplanes",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationQuat",
          "normalized": "Vec a-\u003eMat a",
          "package": "Vec",
          "partial": "Quat",
          "signature": "Vec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationQuat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix for a rotation around an arbitrary normalized vector\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationVec",
          "package": "Vec",
          "signature": "Vec3 a-\u003e a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix for rotation around an arbitrary normalized vector",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationVec",
          "normalized": "Vec a-\u003ea-\u003eMat a",
          "package": "Vec",
          "partial": "Vec",
          "signature": "Vec a-\u003ea-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix for a rotation around the X axis\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationX",
          "package": "Vec",
          "signature": "a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix for rotation around the axis",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationX",
          "normalized": "a-\u003eMat a",
          "package": "Vec",
          "signature": "a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix for a rotation around the Y axis\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationY",
          "package": "Vec",
          "signature": "a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix for rotation around the axis",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationY",
          "normalized": "a-\u003eMat a",
          "package": "Vec",
          "signature": "a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 rotation matrix for a rotation around the Z axis\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "rotationZ",
          "package": "Vec",
          "signature": "a-\u003e Mat44 a",
          "type": "function"
        },
        "index": {
          "description": "x4 rotation matrix for rotation around the axis",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "rotationZ",
          "normalized": "a-\u003eMat a",
          "package": "Vec",
          "signature": "a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:rotationZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the \u003ccode\u003en\u003c/code\u003e-th row as a vector. \u003ccode\u003en\u003c/code\u003e is a type-level natural.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "row",
          "package": "Vec",
          "signature": "n -\u003e v -\u003e a",
          "source": "src/Data-Vec-LinAlg.html#row",
          "type": "function"
        },
        "index": {
          "description": "get the th row as vector is type-level natural",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "row",
          "normalized": "a-\u003eb-\u003ec",
          "package": "Vec",
          "signature": "n-\u003ev-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escale v m\u003c/code\u003e multiplies the diagonal of matrix \u003ccode\u003em\u003c/code\u003e by the vector \u003ccode\u003es\u003c/code\u003e, component-wise. So\n \u003ccode\u003escale 5 m\u003c/code\u003e multiplies the diagonal by 5, whereas \u003ccode\u003escale 2:.1 m\u003c/code\u003e\n only scales the x component.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "scale",
          "package": "Vec",
          "signature": "r -\u003e m -\u003e m",
          "source": "src/Data-Vec-LinAlg.html#scale",
          "type": "function"
        },
        "index": {
          "description": "scale multiplies the diagonal of matrix by the vector component-wise So scale multiplies the diagonal by whereas scale only scales the component",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "scale",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Vec",
          "signature": "r-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 scaling matrix\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "scaling",
          "package": "Vec",
          "signature": "Vec3 a -\u003e Mat44 a",
          "source": "src/Data-Vec-LinAlg.html#scaling",
          "type": "function"
        },
        "index": {
          "description": "x4 scaling matrix",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "scaling",
          "normalized": "Vec a-\u003eMat a",
          "package": "Vec",
          "signature": "Vec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:scaling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of linear system by Gaussian elimination. Returns \u003ccode\u003eNothing\u003c/code\u003e\n if no solution.\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "solve",
          "package": "Vec",
          "signature": "m -\u003e r -\u003e Maybe r",
          "source": "src/Data-Vec-LinAlg.html#solve",
          "type": "function"
        },
        "index": {
          "description": "Solution of linear system by Gaussian elimination Returns Nothing if no solution",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "solve",
          "normalized": "a-\u003eb-\u003eMaybe b",
          "package": "Vec",
          "signature": "m-\u003er-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a translation to a projective transformation matrix\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "translate",
          "package": "Vec",
          "signature": "v -\u003e m -\u003e m",
          "source": "src/Data-Vec-LinAlg.html#translate",
          "type": "function"
        },
        "index": {
          "description": "apply translation to projective transformation matrix",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "translate",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Vec",
          "signature": "v-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 translation matrix\n\u003c/p\u003e",
          "module": "Data.Vec.LinAlg",
          "name": "translation",
          "package": "Vec",
          "signature": "Vec3 a -\u003e Mat44 a",
          "source": "src/Data-Vec-LinAlg.html#translation",
          "type": "function"
        },
        "index": {
          "description": "x4 translation matrix",
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "translation",
          "normalized": "Vec a-\u003eMat a",
          "package": "Vec",
          "signature": "Vec a-\u003eMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:translation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.LinAlg",
          "name": "transpose",
          "package": "Vec",
          "signature": "a -\u003e b",
          "source": "src/Data-Vec-LinAlg.html#transpose",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec LinAlg",
          "module": "Data.Vec.LinAlg",
          "name": "transpose",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-LinAlg.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType level naturals. \u003ccode\u003eNi\u003c/code\u003e is a type, \u003ccode\u003eni\u003c/code\u003e an undefined value of that type,\n for \u003ccode\u003ei \u003c- [0..19]\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vec.Nat",
          "name": "Nat",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html",
          "type": "module"
        },
        "index": {
          "description": "Type level naturals Ni is type ni an undefined value of that type for",
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "Nat",
          "package": "Vec",
          "partial": "Nat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N0",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N0",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N0",
          "package": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N1",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N1",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N10",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N10",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N10",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N11",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N11",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N11",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N12",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N12",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N12",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N13",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N13",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N13",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N14",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N14",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N14",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N15",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N15",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N15",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N16",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N16",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N17",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N17",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N17",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N18",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N18",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N18",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N19",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N19",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N19",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N2",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N2",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N3",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N3",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N4",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N4",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N5",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N5",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N6",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N6",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N7",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N7",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N8",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N8",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "N9",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#N9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "N9",
          "package": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:N9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enat n\u003c/code\u003e yields the \u003ccode\u003eInt\u003c/code\u003e value of the type-level natural \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec.Nat",
          "name": "Nat",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#Nat",
          "type": "class"
        },
        "index": {
          "description": "nat yields the Int value of the type-level natural",
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "Nat",
          "package": "Vec",
          "partial": "Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "Pred",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#Pred",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "Pred",
          "package": "Vec",
          "partial": "Pred",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "Succ",
          "package": "Vec",
          "source": "src/Data-Vec-Nat.html#Succ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "Succ",
          "package": "Vec",
          "partial": "Succ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#t:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n0",
          "package": "Vec",
          "signature": "N0",
          "source": "src/Data-Vec-Nat.html#n0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n0",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n1",
          "package": "Vec",
          "signature": "N1",
          "source": "src/Data-Vec-Nat.html#n1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n1",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n10",
          "package": "Vec",
          "signature": "N10",
          "source": "src/Data-Vec-Nat.html#n10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n10",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n11",
          "package": "Vec",
          "signature": "N11",
          "source": "src/Data-Vec-Nat.html#n11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n11",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n12",
          "package": "Vec",
          "signature": "N12",
          "source": "src/Data-Vec-Nat.html#n12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n12",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n13",
          "package": "Vec",
          "signature": "N13",
          "source": "src/Data-Vec-Nat.html#n13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n13",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n14",
          "package": "Vec",
          "signature": "N14",
          "source": "src/Data-Vec-Nat.html#n14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n14",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n15",
          "package": "Vec",
          "signature": "N15",
          "source": "src/Data-Vec-Nat.html#n15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n15",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n16",
          "package": "Vec",
          "signature": "N16",
          "source": "src/Data-Vec-Nat.html#n16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n16",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n17",
          "package": "Vec",
          "signature": "N17",
          "source": "src/Data-Vec-Nat.html#n17",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n17",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n18",
          "package": "Vec",
          "signature": "N18",
          "source": "src/Data-Vec-Nat.html#n18",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n18",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n19",
          "package": "Vec",
          "signature": "N19",
          "source": "src/Data-Vec-Nat.html#n19",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n19",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n2",
          "package": "Vec",
          "signature": "N2",
          "source": "src/Data-Vec-Nat.html#n2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n2",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n3",
          "package": "Vec",
          "signature": "N3",
          "source": "src/Data-Vec-Nat.html#n3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n3",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n4",
          "package": "Vec",
          "signature": "N4",
          "source": "src/Data-Vec-Nat.html#n4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n4",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n5",
          "package": "Vec",
          "signature": "N5",
          "source": "src/Data-Vec-Nat.html#n5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n5",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n6",
          "package": "Vec",
          "signature": "N6",
          "source": "src/Data-Vec-Nat.html#n6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n6",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n7",
          "package": "Vec",
          "signature": "N7",
          "source": "src/Data-Vec-Nat.html#n7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n7",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n8",
          "package": "Vec",
          "signature": "N8",
          "source": "src/Data-Vec-Nat.html#n8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n8",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "n9",
          "package": "Vec",
          "signature": "N9",
          "source": "src/Data-Vec-Nat.html#n9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "n9",
          "package": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:n9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Nat",
          "name": "nat",
          "package": "Vec",
          "signature": "n -\u003e Int",
          "source": "src/Data-Vec-Nat.html#nat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Nat",
          "module": "Data.Vec.Nat",
          "name": "nat",
          "normalized": "a-\u003eInt",
          "package": "Vec",
          "signature": "n-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Nat.html#v:nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePacked vectors : use these whenever possible. The polymorphic vector type\n is represented at run-time by a linked list of boxed values. Specialized, or\n \u003cem\u003epacked\u003c/em\u003e types, store the vector components sequentially in memory, in a\n single boxed value. Definitions for vector operations, given in terms of\n polymorphic vectors, can be (almost) automatically propagated to packed\n types using the functions \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e. The compiler can then\n specialize the definition to the packed type and produce efficient code.\n\u003c/p\u003e\u003cp\u003ePacked vectors are related to their unpacked representations by way of an\n associated type. An instance of class \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePackedVec\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e declares that \u003ccode\u003ev\u003c/code\u003e has\n a packed representation, and the type of that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePacked\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e. The packed\n constructors are named \u003ccode\u003eVec\u003c/code\u003e\u003cem\u003eNT\u003c/em\u003e where \u003cem\u003eN\u003c/em\u003e is 2, 3 or 4 and \u003cem\u003eT\u003c/em\u003e is \u003ccode\u003eI\u003c/code\u003e, \u003ccode\u003eF\u003c/code\u003e\n or \u003ccode\u003eD\u003c/code\u003e for \u003ccode\u003eInt\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e or \u003ccode\u003eDouble\u003c/code\u003e. So the expression \u003ccode\u003eVec3D x y z\u003c/code\u003e\n constructs a packed 3-vector of Doubles, the type of which is \u003ccode\u003ePacked (Vec3\n Double)\u003c/code\u003e.  The constructor name is also a synonym for the packed type name,\n i.e., \u003ccode\u003etype Vec3D = Packed (Vec3 Double)\u003c/code\u003e, so the packed type acts as if it\n had been declared \u003ccode\u003edata Vec3D = Vec3D x y z\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eZipWith\u003c/a\u003e\u003c/code\u003e instances are\n provided for packed vectors, so some operations do not require pack/unpack.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edot\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e does not require pack/unpack because it is defined in\n terms of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. However \u003ccode\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edet\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egaussElim\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and most others are recursive (i.e., defined in terms of the\n same operation on lower-dimensional vectors), and so you'll still need to\n use pack/unpack with these. This goes for \u003ccode\u003e\u003ccode\u003e\u003ca\u003emultmm\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as well because it uses\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Some functions, like \u003ccode\u003e\u003ccode\u003e\u003ca\u003emultmv\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, do not need their arguments\n to be unpacked, but the result is a polymorphic vector \u003ccode\u003e(:.)\u003c/code\u003e, so you will\n need to pack it again. I admit that this is awkward, and I'm still looking\n for a better way.\n\u003c/p\u003e\u003cp\u003eThere are also instances for \u003ccode\u003e\u003ca\u003eAccess\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTake\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDrop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eHead\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eTail\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSnoc\u003c/a\u003e\u003c/code\u003e. These come in handy for things like quaternions and\n homogenous coordinates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vec.Packed",
          "name": "Packed",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html",
          "type": "module"
        },
        "index": {
          "description": "Packed vectors use these whenever possible The polymorphic vector type is represented at run-time by linked list of boxed values Specialized or packed types store the vector components sequentially in memory in single boxed value Definitions for vector operations given in terms of polymorphic vectors can be almost automatically propagated to packed types using the functions pack and unpack The compiler can then specialize the definition to the packed type and produce efficient code Packed vectors are related to their unpacked representations by way of an associated type An instance of class PackedVec declares that has packed representation and the type of that is Packed The packed constructors are named Vec NT where is or and is or for Int Float or Double So the expression Vec3D constructs packed vector of Doubles the type of which is Packed Vec3 Double The constructor name is also synonym for the packed type name i.e type Vec3D Packed Vec3 Double so the packed type acts as if it had been declared data Vec3D Vec3D Storable Num Fractional Fold Map and ZipWith instances are provided for packed vectors so some operations do not require pack unpack For example dot does not require pack unpack because it is defined in terms of zipWith and fold However transpose det gaussElim and most others are recursive i.e defined in terms of the same operation on lower-dimensional vectors and so you ll still need to use pack unpack with these This goes for multmm as well because it uses transpose Some functions like multmv do not need their arguments to be unpacked but the result is polymorphic vector so you will need to pack it again admit that this is awkward and still looking for better way There are also instances for Access Take Drop Last Head Tail and Snoc These come in handy for things like quaternions and homogenous coordinates",
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Packed",
          "package": "Vec",
          "partial": "Packed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat22D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat22D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat22D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat22D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat23D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat23D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat23D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat23D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat24D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat24D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat24D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat24D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat33D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat33D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat33D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat33D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat34D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat34D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat34D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat34D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Mat44D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Mat44D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Mat44D",
          "package": "Vec",
          "partial": "Mat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Mat44D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackedVec class : relates a vector type to its space-optimized\n representation.\n\u003c/p\u003e",
          "module": "Data.Vec.Packed",
          "name": "PackedVec",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#PackedVec",
          "type": "class"
        },
        "index": {
          "description": "PackedVec class relates vector type to its space-optimized representation",
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "PackedVec",
          "package": "Vec",
          "partial": "Packed Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:PackedVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec2B",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec2B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec2B",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec2D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec2D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec2D",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec2F",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec2F",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec2F",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec2F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec2I",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec2I",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec2I",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec2I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec3B",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec3B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec3B",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec3B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec3D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec3D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec3D",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec3F",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec3F",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec3F",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec3F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec3I",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec3I",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec3I",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec3I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec4B",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec4B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec4B",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec4B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec4D",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec4D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec4D",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec4D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec4F",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec4F",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec4F",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec4F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "Vec4I",
          "package": "Vec",
          "source": "src/Data-Vec-Packed.html#Vec4I",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "Vec4I",
          "package": "Vec",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#t:Vec4I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "pack",
          "package": "Vec",
          "signature": "v -\u003e Packed v",
          "source": "src/Data-Vec-Packed.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "pack",
          "normalized": "a-\u003ePacked a",
          "package": "Vec",
          "signature": "v-\u003ePacked v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a semi-packed matrix, one whose rows are packed.\n\u003c/p\u003e",
          "module": "Data.Vec.Packed",
          "name": "packMat",
          "package": "Vec",
          "signature": "mat -\u003e packedMat",
          "source": "src/Data-Vec-Packed.html#packMat",
          "type": "function"
        },
        "index": {
          "description": "Construct semi-packed matrix one whose rows are packed",
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "packMat",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "partial": "Mat",
          "signature": "mat-\u003epackedMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#v:packMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "unpack",
          "package": "Vec",
          "signature": "Packed v -\u003e v",
          "source": "src/Data-Vec-Packed.html#unpack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "unpack",
          "normalized": "Packed a-\u003ea",
          "package": "Vec",
          "signature": "Packed v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec.Packed",
          "name": "unpackMat",
          "package": "Vec",
          "signature": "packedMat -\u003e mat",
          "source": "src/Data-Vec-Packed.html#unpackMat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vec Packed",
          "module": "Data.Vec.Packed",
          "name": "unpackMat",
          "normalized": "a-\u003eb",
          "package": "Vec",
          "partial": "Mat",
          "signature": "packedMat-\u003emat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec-Packed.html#v:unpackMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVec : a library for fixed-length lists and low-dimensional linear algebra\n\u003c/p\u003e\u003cp\u003eScott E. Dillard \u003ca\u003esedillard@gmail.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe darcs repository is at \u003ca\u003ehttp://graphics.cs.ucdavis.edu/~sdillard/Vec\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSome examples can be found at \u003ca\u003ehttp://graphics.cs.ucdavis.edu/~sdillard/Vec/examples\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSynopsis\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eVectors are represented by lists with type-encoded lengths. The constructor is\n\u003ccode\u003e:.\u003c/code\u003e, which acts like a cons both at the value and type levels, with \u003ccode\u003e()\u003c/code\u003e\ntaking the place of nil. So \u003ccode\u003ex:.y:.z:.()\u003c/code\u003e is a 3d vector. The library provides\na set of common list-like functions (map, fold, etc) for working with vectors.\nBuilt up from these functions are a small but useful set of linear algebra\noperations: matrix multiplication, determinants, solving linear systems,\ninverting matrices.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDesign\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Simplicity : \nBeyond the initial complexities of type-level lists and\nnumbers, I've tried to keep the API simple. There is no vector-space\nclass, nor a complicated hierarchy of linear/affine/projective\ntransformations. These can be added on top of the library easily.\n\u003c/li\u003e\u003cli\u003e Purity :\nThe library is written in the functional style. For most\nfunctions this does not hinder performance at all, but some I am still\nworking on (Gaussian elimination) so if this library is a bottleneck you\ncan easily drop down to C. \n\u003c/li\u003e\u003cli\u003e Low Dimension :\nAlthough the dimensionality is limited only by what GHC\nwill handle, the library is meant for 2,3 and 4 dimensions. For general\nlinear algebra, check out the excellent hmatrix library and blas bindings.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo the point of simplicity, vectors and matrices are instances of Num and\nFractional.  All arithmetic is done component-wise and literals construct\nuniform vectors and matrices. There are many interesting projects aiming to\noverhaul Haskell's number classes, but for now the type of \u003ccode\u003e(*)\u003c/code\u003e is \u003ccode\u003ea -\u003e a -\u003e\na\u003c/code\u003e so that's what we're working with. It is easy to incorporate this library\ninto a more mathematically consistent class hierarchy (provided you can design\none.) \n\u003c/p\u003e\u003cp\u003eThe rule is simple : \n  If the method is unary, it's a map. \n  If it's binary, it's a zipWith.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePerformance\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(:.)\u003c/code\u003e is strict in both arguments, but it is also polymorphic, so at runtime\nvectors will be realized as linked lists, albeit with less pattern matching.\nHowever the library provides packed representations for 2,3 and 4d vectors of\nInts, Floats and Doubles. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVec3F\u003c/a\u003e\u003c/code\u003e x y z\u003c/code\u003e constructs a packed vector of unboxed\nFloats. Functions \u003ccode\u003e\u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e convert between packed and unpacked\ntypes. When vector operations are bracketed by \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e, GHC can\nunfold them into very efficient code. The \u003ccode\u003eStorable\u003c/code\u003e and \u003ccode\u003eUArray\u003c/code\u003e instances for\nvectors also store them efficiently and generate fast code.  Without\noptimizations, the code falls back into linked-list mode. The optimizations\ndepend on inlining, so you may need to increase your unfolding threshold in\ncertain situations.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Extensions\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis library makes heavy use of functional dependencies. I have tried to\ntweak things so that they \"just work.\" However, every now and then you will\nget incomprehensible error messages, usually about how this isn't an\ninstance of that. These are how type errors typically manifest, so first\ndouble check to make sure you aren't trying to mix vectors of different\ndimension or component types. If you still get these errors, manual type\nannotations usually make them go away.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eRelated Work\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSee previous work by David Menendez,\n  \u003ca\u003ehttp://haskell.org/pipermail/haskell/2005-May/015815.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand of course Oleg Kiselyov,\n  \u003ca\u003ehttp://okmij.org/ftp/papers/number-parameterized-types.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOther vector and linear algebra packages :\n\u003c/p\u003e\u003cp\u003evector-space, by Conal Elliott : \n  \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/vector-space\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003ehmatrix, by Alberto Ruiz :\n  \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/hmatrix\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eblas bindings, by Patrick Perry :\n  \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/blas\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003etemplatized geometry library (C++), by Oliver Kreylos :\n  \u003ca\u003ehttp://graphics.cs.ucdavis.edu/~okreylos/ResDev/Geometry/index.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vec",
          "name": "Vec",
          "package": "Vec",
          "source": "src/Data-Vec.html",
          "type": "module"
        },
        "index": {
          "description": "Vec library for fixed-length lists and low-dimensional linear algebra Scott Dillard sedillard@gmail.com The darcs repository is at http graphics.cs.ucdavis.edu sdillard Vec Some examples can be found at http graphics.cs.ucdavis.edu sdillard Vec examples Synopsis Vectors are represented by lists with type-encoded lengths The constructor is which acts like cons both at the value and type levels with taking the place of nil So is vector The library provides set of common list-like functions map fold etc for working with vectors Built up from these functions are small but useful set of linear algebra operations matrix multiplication determinants solving linear systems inverting matrices Design Simplicity Beyond the initial complexities of type-level lists and numbers ve tried to keep the API simple There is no vector-space class nor complicated hierarchy of linear affine projective transformations These can be added on top of the library easily Purity The library is written in the functional style For most functions this does not hinder performance at all but some am still working on Gaussian elimination so if this library is bottleneck you can easily drop down to Low Dimension Although the dimensionality is limited only by what GHC will handle the library is meant for and dimensions For general linear algebra check out the excellent hmatrix library and blas bindings To the point of simplicity vectors and matrices are instances of Num and Fractional All arithmetic is done component-wise and literals construct uniform vectors and matrices There are many interesting projects aiming to overhaul Haskell number classes but for now the type of is so that what we re working with It is easy to incorporate this library into more mathematically consistent class hierarchy provided you can design one The rule is simple If the method is unary it map If it binary it zipWith Performance is strict in both arguments but it is also polymorphic so at runtime vectors will be realized as linked lists albeit with less pattern matching However the library provides packed representations for and vectors of Ints Floats and Doubles Vec3F constructs packed vector of unboxed Floats Functions pack and unpack convert between packed and unpacked types When vector operations are bracketed by pack and unpack GHC can unfold them into very efficient code The Storable and UArray instances for vectors also store them efficiently and generate fast code Without optimizations the code falls back into linked-list mode The optimizations depend on inlining so you may need to increase your unfolding threshold in certain situations GHC Extensions This library makes heavy use of functional dependencies have tried to tweak things so that they just work However every now and then you will get incomprehensible error messages usually about how this isn an instance of that These are how type errors typically manifest so first double check to make sure you aren trying to mix vectors of different dimension or component types If you still get these errors manual type annotations usually make them go away Related Work See previous work by David Menendez http haskell.org pipermail haskell May html and of course Oleg Kiselyov http okmij.org ftp papers number-parameterized-types.pdf Other vector and linear algebra packages vector-space by Conal Elliott http hackage.haskell.org cgi-bin hackage-scripts package vector-space hmatrix by Alberto Ruiz http hackage.haskell.org cgi-bin hackage-scripts package hmatrix blas bindings by Patrick Perry http hackage.haskell.org cgi-bin hackage-scripts package blas templatized geometry library by Oliver Kreylos http graphics.cs.ucdavis.edu okreylos ResDev Geometry index.html",
          "hierarchy": "Data Vec",
          "module": "Data.Vec",
          "name": "Vec",
          "package": "Vec",
          "partial": "Vec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Vec/docs/Data-Vec.html#"
      }
    }
  ]
]