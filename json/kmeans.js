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
        "word": "kmeans"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of the standard k-means clustering algorithm: \u003ca\u003ehttp://en.wikipedia.org/wiki/K-means_clustering\u003c/a\u003e. K-means clustering partitions points into clusters, with each point belonging to the cluster with th nearest mean. As the general problem is NP hard, the standard algorithm, which is relatively rapid, is heuristic and not guaranteed to converge to a global optimum. Varying the input order, from which the initial clusters are generated, can yield different results. For degenerate and malicious cases, the algorithm may take exponential time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.KMeans",
          "name": "KMeans",
          "package": "kmeans",
          "source": "src/Data-KMeans.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of the standard k-means clustering algorithm http en.wikipedia.org wiki K-means clustering K-means clustering partitions points into clusters with each point belonging to the cluster with th nearest mean As the general problem is NP hard the standard algorithm which is relatively rapid is heuristic and not guaranteed to converge to global optimum Varying the input order from which the initial clusters are generated can yield different results For degenerate and malicious cases the algorithm may take exponential time",
          "hierarchy": "Data KMeans",
          "module": "Data.KMeans",
          "name": "KMeans",
          "package": "kmeans",
          "partial": "KMeans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kmeans/docs/Data-KMeans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecluster points\n\u003c/p\u003e\u003cp\u003eCluster points in a Euclidian space, represented as lists of Doubles, into at most k clusters.\n The initial clusters are chosen arbitrarily.\n\u003c/p\u003e",
          "module": "Data.KMeans",
          "name": "kmeans",
          "package": "kmeans",
          "signature": "Int -\u003e [[Double]] -\u003e [[[Double]]]",
          "source": "src/Data-KMeans.html#kmeans",
          "type": "function"
        },
        "index": {
          "description": "Recluster points Cluster points in Euclidian space represented as lists of Doubles into at most clusters The initial clusters are chosen arbitrarily",
          "hierarchy": "Data KMeans",
          "module": "Data.KMeans",
          "name": "kmeans",
          "normalized": "Int-\u003e[[Double]]-\u003e[[[Double]]]",
          "package": "kmeans",
          "signature": "Int-\u003e[[Double]]-\u003e[[[Double]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans/docs/Data-KMeans.html#v:kmeans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized kmeans function. This function operates not on points, but an arbitrary type which may be projected into a Euclidian space. Since the projection may be chosen freely, this allows for weighting dimensions to different degrees, etc.\n\u003c/p\u003e",
          "module": "Data.KMeans",
          "name": "kmeansGen",
          "package": "kmeans",
          "signature": "(a -\u003e [Double]) -\u003e Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-KMeans.html#kmeansGen",
          "type": "function"
        },
        "index": {
          "description": "generalized kmeans function This function operates not on points but an arbitrary type which may be projected into Euclidian space Since the projection may be chosen freely this allows for weighting dimensions to different degrees etc",
          "hierarchy": "Data KMeans",
          "module": "Data.KMeans",
          "name": "kmeansGen",
          "normalized": "(a-\u003e[Double])-\u003eInt-\u003e[a]-\u003e[[a]]",
          "package": "kmeans",
          "partial": "Gen",
          "signature": "(a-\u003e[Double])-\u003eInt-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kmeans/docs/Data-KMeans.html#v:kmeansGen"
      }
    }
  ]
]