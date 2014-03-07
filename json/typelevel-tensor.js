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
        "word": "typelevel-tensor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "Axis",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel-Axis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "Axis",
          "package": "typelevel-tensor",
          "partial": "Axis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the axes belonging to the dimension.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "all",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e [Axis v]",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#all",
          "type": "function"
        },
        "index": {
          "description": "All the axes belonging to the dimension",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "all",
          "normalized": "Axis a-\u003e[Axis a]",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003e[Axis v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the axes belonging to the dimension,               \n starting from the argument and followed by the Law of Cycles.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "allFrom",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e [Axis v]",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#allFrom",
          "type": "function"
        },
        "index": {
          "description": "All the axes belonging to the dimension starting from the argument and followed by the Law of Cycles",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "allFrom",
          "normalized": "Axis a-\u003e[Axis a]",
          "package": "typelevel-tensor",
          "partial": "From",
          "signature": "Axis v-\u003e[Axis v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:allFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dimension of the vector space the axis belongs to.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "dimension",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e Int",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#dimension",
          "type": "function"
        },
        "index": {
          "description": "The dimension of the vector space the axis belongs to",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "dimension",
          "normalized": "Axis a-\u003eInt",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:dimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next axis under the Law of Cycles.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "next",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e Axis v",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#next",
          "type": "function"
        },
        "index": {
          "description": "The next axis under the Law of Cycles",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "next",
          "normalized": "Axis a-\u003eAxis a",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003eAxis v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the axes belonging to the dimension but the argument itself,               \n in the order of the Law of Cycles.              \n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "others",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e [Axis v]",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#others",
          "type": "function"
        },
        "index": {
          "description": "All the axes belonging to the dimension but the argument itself in the order of the Law of Cycles",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "others",
          "normalized": "Axis a-\u003e[Axis a]",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003e[Axis v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:others"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe previous axis under the Law of Cycles.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "prev",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e Axis v",
          "source": "src/Data-Tensor-TypeLevel-Axis.html#prev",
          "type": "function"
        },
        "index": {
          "description": "The previous axis under the Law of Cycles",
          "hierarchy": "Data Tensor TypeLevel Axis",
          "module": "Data.Tensor.TypeLevel.Axis",
          "name": "prev",
          "normalized": "Axis a-\u003eAxis a",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003eAxis v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel-Axis.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tensor algebra library. Main ingredients are :\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:~\u003c/a\u003e\u003c/code\u003e are data constructors for rank-1 tensor.\n This is essentially a touple of objects of the same type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e is a class for rank-1 tensor.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e is an object for accessing the tensor components.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "TypeLevel",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html",
          "type": "module"
        },
        "index": {
          "description": "tensor algebra library Main ingredients are Vec and are data constructors for rank-1 tensor This is essentially touple of objects of the same type Vector is class for rank-1 tensor Axis is an object for accessing the tensor components",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "TypeLevel",
          "package": "typelevel-tensor",
          "partial": "Type Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata constructor for constructing n+1-dimensional tensor\n from n-dimensional tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": ":~",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#%3A~",
          "type": "data"
        },
        "index": {
          "description": "data constructor for constructing dimensional tensor from n-dimensional tensor",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": ":~",
          "package": "typelevel-tensor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn coordinate \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e , labeled by an integer.\n Axis also carries v, the container type for its corresponding\n vector. Therefore, An axis of one type can access only vectors\n of a fixed dimension, but of arbitrary type.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "Axis",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Axis",
          "type": "newtype"
        },
        "index": {
          "description": "An coordinate Axis labeled by an integer Axis also carries the container type for its corresponding vector Therefore An axis of one type can access only vectors of fixed dimension but of arbitrary type",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Axis",
          "package": "typelevel-tensor",
          "partial": "Axis",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata constructor for 0-dimensional tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec",
          "type": "data"
        },
        "index": {
          "description": "data constructor for dimensional tensor",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec0",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec0",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec0",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec1",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec1",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec10",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec10",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec10",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec2",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec2",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec3",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec3",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec4",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec4",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec5",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec5",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec6",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec6",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec7",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec7",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec8",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec8",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec9",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vec9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec9",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vec9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that allows component-wise access.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vector",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#Vector",
          "type": "class"
        },
        "index": {
          "description": "An object that allows component-wise access",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vector",
          "package": "typelevel-tensor",
          "partial": "Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVectorRing\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e whose components belongs to \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e,\n thus providing unit vectors.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "VectorRing",
          "package": "typelevel-tensor",
          "source": "src/Data-Tensor-TypeLevel.html#VectorRing",
          "type": "class"
        },
        "index": {
          "description": "VectorRing is Vector whose components belongs to thus providing unit vectors",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "VectorRing",
          "package": "typelevel-tensor",
          "partial": "Vector Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#t:VectorRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea component operator.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "(!)",
          "package": "typelevel-tensor",
          "signature": "v a -\u003e Axis v -\u003e a",
          "source": "src/Data-Tensor-TypeLevel.html#%21",
          "type": "function"
        },
        "index": {
          "description": "component operator",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "(!) !",
          "normalized": "a b-\u003eAxis a-\u003eb",
          "package": "typelevel-tensor",
          "signature": "v a-\u003eAxis v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": ":~",
          "package": "typelevel-tensor",
          "signature": "(n a) :~ a",
          "source": "src/Data-Tensor-TypeLevel.html#%3A~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": ":~",
          "package": "typelevel-tensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Axis",
          "package": "typelevel-tensor",
          "signature": "Axis",
          "source": "src/Data-Tensor-TypeLevel.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Axis",
          "package": "typelevel-tensor",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec",
          "package": "typelevel-tensor",
          "signature": "Vec",
          "source": "src/Data-Tensor-TypeLevel.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "Vec",
          "package": "typelevel-tensor",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "axisIndex",
          "package": "typelevel-tensor",
          "signature": "Int",
          "source": "src/Data-Tensor-TypeLevel.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "axisIndex",
          "package": "typelevel-tensor",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:axisIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a component. This computation may result in a runtime error,\n though, as long as the \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e is generated from library functions\n such as \u003ccode\u003e\u003ca\u003ecompose\u003c/a\u003e\u003c/code\u003e, there will be no error.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "component",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e v a -\u003e a",
          "source": "src/Data-Tensor-TypeLevel.html#component",
          "type": "method"
        },
        "index": {
          "description": "Get component This computation may result in runtime error though as long as the Axis is generated from library functions such as compose there will be no error",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "component",
          "normalized": "Axis a-\u003ea b-\u003eb",
          "package": "typelevel-tensor",
          "signature": "Axis v-\u003ev a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a component within f, a context which allows failure.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "componentF",
          "package": "typelevel-tensor",
          "signature": "componentF",
          "source": "src/Data-Tensor-TypeLevel.html#componentF",
          "type": "method"
        },
        "index": {
          "description": "Get component within context which allows failure",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "componentF",
          "package": "typelevel-tensor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:componentF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a function that maps\n axis to components.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "compose",
          "package": "typelevel-tensor",
          "signature": "(Axis v -\u003e a) -\u003e v a",
          "source": "src/Data-Tensor-TypeLevel.html#compose",
          "type": "method"
        },
        "index": {
          "description": "Create Vector from function that maps axis to components",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "compose",
          "normalized": "(Axis a-\u003eb)-\u003ea b",
          "package": "typelevel-tensor",
          "signature": "(Axis v-\u003ea)-\u003ev a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTensor contraction. Create a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a function that maps\n axis to component, then sums over the axis and returns \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "contract",
          "package": "typelevel-tensor",
          "signature": "(Axis v -\u003e a) -\u003e a",
          "source": "src/Data-Tensor-TypeLevel.html#contract",
          "type": "function"
        },
        "index": {
          "description": "Tensor contraction Create Vector from function that maps axis to component then sums over the axis and returns",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "contract",
          "normalized": "(Axis a-\u003eb)-\u003eb",
          "package": "typelevel-tensor",
          "signature": "(Axis v-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:contract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dimension of the vector.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "dimension",
          "package": "typelevel-tensor",
          "signature": "v a -\u003e Int",
          "source": "src/Data-Tensor-TypeLevel.html#dimension",
          "type": "method"
        },
        "index": {
          "description": "The dimension of the vector",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "dimension",
          "normalized": "a b-\u003eInt",
          "package": "typelevel-tensor",
          "signature": "v a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:dimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epure but unsafe version means of obtaining a \u003ccode\u003e\u003ca\u003eunitVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "unitVector",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e v a",
          "source": "src/Data-Tensor-TypeLevel.html#unitVector",
          "type": "method"
        },
        "index": {
          "description": "pure but unsafe version means of obtaining unitVector",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "unitVector",
          "normalized": "Axis a-\u003ea b",
          "package": "typelevel-tensor",
          "partial": "Vector",
          "signature": "Axis v-\u003ev a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:unitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector where \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003eth component is unity but others are zero.\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "unitVectorF",
          "package": "typelevel-tensor",
          "signature": "Axis v -\u003e f (v a)",
          "source": "src/Data-Tensor-TypeLevel.html#unitVectorF",
          "type": "method"
        },
        "index": {
          "description": "vector where Axis th component is unity but others are zero",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "unitVectorF",
          "normalized": "Axis a-\u003eb(a c)",
          "package": "typelevel-tensor",
          "partial": "Vector",
          "signature": "Axis v-\u003ef(v a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:unitVectorF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility functions\n\u003c/p\u003e",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec0",
          "package": "typelevel-tensor",
          "signature": "Vec0 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec0",
          "type": "function"
        },
        "index": {
          "description": "Utility functions",
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec0",
          "package": "typelevel-tensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec1",
          "package": "typelevel-tensor",
          "signature": "a -\u003e Vec1 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec1",
          "normalized": "a-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec10",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec10 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec10",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec2",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e Vec2 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec2",
          "normalized": "a-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec3",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e Vec3 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec3",
          "normalized": "a-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec4",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Vec4 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec5",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec5 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec5",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec6",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec6 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec6",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec7",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec7 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec7",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec8",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec8 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec8",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tensor.TypeLevel",
          "name": "vec9",
          "package": "typelevel-tensor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec9 a",
          "source": "src/Data-Tensor-TypeLevel.html#vec9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tensor TypeLevel",
          "module": "Data.Tensor.TypeLevel",
          "name": "vec9",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "typelevel-tensor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typelevel-tensor/docs/Data-Tensor-TypeLevel.html#v:vec9"
      }
    }
  ]
]