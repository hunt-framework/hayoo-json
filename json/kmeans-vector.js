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
        "word": "kmeans-vector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the k-means clustering algorithm based on the efficient vector package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.KMeans",
          "name": "KMeans",
          "package": "kmeans-vector",
          "source": "src/Math-KMeans.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the k-means clustering algorithm based on the efficient vector package",
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "KMeans",
          "package": "kmeans-vector",
          "partial": "KMeans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing a cluster (group) of vectors by its center and an id\n\u003c/p\u003e",
          "module": "Math.KMeans",
          "name": "Cluster",
          "package": "kmeans-vector",
          "source": "src/Math-KMeans.html#Cluster",
          "type": "data"
        },
        "index": {
          "description": "Type representing cluster group of vectors by its center and an id",
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "Cluster",
          "package": "kmeans-vector",
          "partial": "Cluster",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#t:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType holding an object of any type and its associated feature vector\n\u003c/p\u003e",
          "module": "Math.KMeans",
          "name": "Point",
          "package": "kmeans-vector",
          "source": "src/Math-KMeans.html#Point",
          "type": "type"
        },
        "index": {
          "description": "Type holding an object of any type and its associated feature vector",
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "Point",
          "package": "kmeans-vector",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.KMeans",
          "name": "Cluster",
          "package": "kmeans-vector",
          "signature": "Cluster",
          "source": "src/Math-KMeans.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "Cluster",
          "package": "kmeans-vector",
          "partial": "Cluster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#v:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.KMeans",
          "name": "center",
          "package": "kmeans-vector",
          "signature": "(Vector Double)",
          "source": "src/Math-KMeans.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "center",
          "package": "kmeans-vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.KMeans",
          "name": "cid",
          "package": "kmeans-vector",
          "signature": "Int",
          "source": "src/Math-KMeans.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "cid",
          "package": "kmeans-vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#v:cid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.KMeans",
          "name": "computeClusters",
          "package": "kmeans-vector",
          "signature": "[[Vector Double]] -\u003e [Cluster]",
          "source": "src/Math-KMeans.html#computeClusters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "computeClusters",
          "normalized": "[[Vector Double]]-\u003e[Cluster]",
          "package": "kmeans-vector",
          "partial": "Clusters",
          "signature": "[[Vector Double]]-\u003e[Cluster]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#v:computeClusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the k-means clustering algorithm\n   using trying to use \u003ccode\u003ek\u003c/code\u003e clusters on the given list of points\n\u003c/p\u003e",
          "module": "Math.KMeans",
          "name": "kmeans",
          "package": "kmeans-vector",
          "signature": "Int -\u003e [Point a] -\u003e [[Point a]]",
          "source": "src/Math-KMeans.html#kmeans",
          "type": "function"
        },
        "index": {
          "description": "Performs the k-means clustering algorithm using trying to use clusters on the given list of points",
          "hierarchy": "Math KMeans",
          "module": "Math.KMeans",
          "name": "kmeans",
          "normalized": "Int-\u003e[Point a]-\u003e[[Point a]]",
          "package": "kmeans-vector",
          "signature": "Int-\u003e[Point a]-\u003e[[Point a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans-vector/docs/Math-KMeans.html#v:kmeans"
      }
    }
  ]
]