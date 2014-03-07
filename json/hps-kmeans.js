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
        "word": "hps-kmeans"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.KMeans",
          "name": "KMeans",
          "package": "hps-kmeans",
          "source": "src/Math-Statistics-KMeans.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "KMeans",
          "package": "hps-kmeans",
          "partial": "KMeans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign Points to a Cluster based on the Minimum distance to each Center\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "assignCluster",
          "package": "hps-kmeans",
          "signature": "Vector (Vector a) -\u003e Vector Int",
          "source": "src/Math-Statistics-KMeans.html#assignCluster",
          "type": "function"
        },
        "index": {
          "description": "Assign Points to Cluster based on the Minimum distance to each Center",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "assignCluster",
          "normalized": "Vector(Vector a)-\u003eVector Int",
          "package": "hps-kmeans",
          "partial": "Cluster",
          "signature": "Vector(Vector a)-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:assignCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the Center of a Cloud of Points\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "cloudCenter",
          "package": "hps-kmeans",
          "signature": "Vector (Vector a) -\u003e Vector a",
          "source": "src/Math-Statistics-KMeans.html#cloudCenter",
          "type": "function"
        },
        "index": {
          "description": "Calculates the Center of Cloud of Points",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "cloudCenter",
          "normalized": "Vector(Vector a)-\u003eVector a",
          "package": "hps-kmeans",
          "partial": "Center",
          "signature": "Vector(Vector a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:cloudCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance from a Point to a set of Centers\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "distanceToCenters",
          "package": "hps-kmeans",
          "signature": "(t -\u003e a -\u003e b) -\u003e Vector a -\u003e t -\u003e Vector b",
          "source": "src/Math-Statistics-KMeans.html#distanceToCenters",
          "type": "function"
        },
        "index": {
          "description": "Distance from Point to set of Centers",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "distanceToCenters",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector b-\u003ea-\u003eVector c",
          "package": "hps-kmeans",
          "partial": "To Centers",
          "signature": "(t-\u003ea-\u003eb)-\u003eVector a-\u003et-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:distanceToCenters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean Distance between two points\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "euclideanDist",
          "package": "hps-kmeans",
          "signature": "Vector a -\u003e Vector a -\u003e a",
          "source": "src/Math-Statistics-KMeans.html#euclideanDist",
          "type": "function"
        },
        "index": {
          "description": "Euclidean Distance between two points",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "euclideanDist",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "hps-kmeans",
          "partial": "Dist",
          "signature": "Vector a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:euclideanDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ek-Means classifier for a given Distance, Variation Guard and Cloud\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "kMeans",
          "package": "hps-kmeans",
          "signature": "(Vector a -\u003e Vector a -\u003e a) -\u003e a -\u003e Vector (Vector a) -\u003e Vector (Vector a) -\u003e Vector (Vector a)",
          "source": "src/Math-Statistics-KMeans.html#kMeans",
          "type": "function"
        },
        "index": {
          "description": "k-Means classifier for given Distance Variation Guard and Cloud",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "kMeans",
          "normalized": "(Vector a-\u003eVector a-\u003ea)-\u003ea-\u003eVector(Vector a)-\u003eVector(Vector a)-\u003eVector(Vector a)",
          "package": "hps-kmeans",
          "partial": "Means",
          "signature": "(Vector a-\u003eVector a-\u003ea)-\u003ea-\u003eVector(Vector a)-\u003eVector(Vector a)-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:kMeans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects elements of a Vector given its indices\n\u003c/p\u003e",
          "module": "Math.Statistics.KMeans",
          "name": "selectFrom",
          "package": "hps-kmeans",
          "signature": "Vector a -\u003e Vector Int -\u003e Vector a",
          "source": "src/Math-Statistics-KMeans.html#selectFrom",
          "type": "function"
        },
        "index": {
          "description": "Selects elements of Vector given its indices",
          "hierarchy": "Math Statistics KMeans",
          "module": "Math.Statistics.KMeans",
          "name": "selectFrom",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "hps-kmeans",
          "partial": "From",
          "signature": "Vector a-\u003eVector Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hps-kmeans/docs/Math-Statistics-KMeans.html#v:selectFrom"
      }
    }
  ]
]