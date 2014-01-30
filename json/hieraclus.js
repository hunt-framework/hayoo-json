[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHieraclus is a library that supports clustering of arbitrary elements in haskell. The difference to the already \n existing cluster library \u003cem\u003ehierarchical-clustering\u003c/em\u003e is the ability to work with abort criterias which allow an \n \"intelligent\" clustering. With the help of abort criterias the user can specify conditions that must be fulfilled\n in order to stop the clustering process.\n\u003c/p\u003e\u003cp\u003eAnother motivation of creating this library was to make the cluster process run in \u003cem\u003eO(n^2)\u003c/em\u003e. However, the current \n implementation runs in \u003cem\u003eO(n^2 * log n)\u003c/em\u003e. It has to be mentioned that the real runtime complexity tends to grow \n faster due to memory management, I guess. Some profiling showed that there is quite a big amount of memory \n spent managing the maps. The principle idea was not to work with a matrix, but with two maps instead. The \n first map holds the mappings from cluster pairs to distances, the second map vice versa, thus allowing to find \n the minimal distance in \u003cem\u003eO(log n)\u003c/em\u003e and not in \u003cem\u003eO(n^2)\u003c/em\u003e. Two make things more efficient the data to be clustered\n initially is transformed to vector space, as all clutering operations work in vector space. The actual clustering\n thus is done with the vector representations of the input data, which finally are transformed back.\n\u003c/p\u003e\u003cp\u003eThe above mentioned information for the abort criterias, the maps and the element-mappings are carried through\n the cluster process in a cluster state. So the actual cluster process takes place within the state monad.\n However, the library offers a function \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e that is purely functional as it returns a tuple. \n First element of the tuple is the cluster result - simply implemented as list of list. \n The second element of the tuple holds the cluster information used by the abort criterias. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html",
        "fct-type": "module",
        "title": "Clustering"
      },
      "index": {
        "description": "Hieraclus is library that supports clustering of arbitrary elements in haskell The difference to the already existing cluster library hierarchical-clustering is the ability to work with abort criterias which allow an intelligent clustering With the help of abort criterias the user can specify conditions that must be fulfilled in order to stop the clustering process Another motivation of creating this library was to make the cluster process run in However the current implementation runs in log It has to be mentioned that the real runtime complexity tends to grow faster due to memory management guess Some profiling showed that there is quite big amount of memory spent managing the maps The principle idea was not to work with matrix but with two maps instead The first map holds the mappings from cluster pairs to distances the second map vice versa thus allowing to find the minimal distance in log and not in Two make things more efficient the data to be clustered initially is transformed to vector space as all clutering operations work in vector space The actual clustering thus is done with the vector representations of the input data which finally are transformed back The above mentioned information for the abort criterias the maps and the element-mappings are carried through the cluster process in cluster state So the actual cluster process takes place within the state monad However the library offers function cluster that is purely functional as it returns tuple First element of the tuple is the cluster result simply implemented as list of list The second element of the tuple holds the cluster information used by the abort criterias",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "Clustering",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Clustering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Cluster",
      "description": {
        "fct-descr": "\u003cp\u003ea Cluster is represented as a list of Vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
        "fct-type": "newtype",
        "title": "Cluster"
      },
      "index": {
        "description": "Cluster is represented as list of Vectors",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "Cluster",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterInfo",
      "description": {
        "fct-descr": "\u003cp\u003ethe cluster process produces information about the clustering after each step.\n these information are given to functions that decide if the cluster process \n may continue or stop and return the results\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "data",
        "title": "ClusterInfo"
      },
      "index": {
        "description": "the cluster process produces information about the clustering after each step these information are given to functions that decide if the cluster process may continue or stop and return the results",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ClusterInfo",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterMap",
      "description": {
        "fct-descr": "\u003cp\u003ethe Cluster map serves to represent unions of elements. Therefore it maps\n IDs to clusters.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterMap",
        "fct-type": "type",
        "title": "ClusterMap"
      },
      "index": {
        "description": "the Cluster map serves to represent unions of elements Therefore it maps IDs to clusters",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ClusterMap",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterResult",
      "description": {
        "fct-descr": "\u003cp\u003ethe resulting clusters are represented as a lists                    \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterResult",
        "fct-type": "type",
        "title": "ClusterResult"
      },
      "index": {
        "description": "the resulting clusters are represented as lists",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ClusterResult",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterState",
      "description": {
        "fct-descr": "\u003cp\u003ethe cluster state contains information about all relevant maps\n that are needed for the clustering and information about the \n clustering process. The ClusterState is passed around withing\n the state monad\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
        "fct-type": "data",
        "title": "ClusterState"
      },
      "index": {
        "description": "the cluster state contains information about all relevant maps that are needed for the clustering and information about the clustering process The ClusterState is passed around withing the state monad",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ClusterState",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:CombinationMap",
      "description": {
        "fct-descr": "\u003cp\u003eLike the minimum map but with the pairs as the keys, thus allowing\n to find the distance of a given pair in \u003cem\u003eO(log n)\u003c/em\u003e.\n Storage complexity is \u003cem\u003eO(n^2)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#CombinationMap",
        "fct-type": "type",
        "title": "CombinationMap"
      },
      "index": {
        "description": "Like the minimum map but with the pairs as the keys thus allowing to find the distance of given pair in log Storage complexity is",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "CombinationMap",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Combination Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:DistanceFunction",
      "description": {
        "fct-descr": "\u003cp\u003ea distance function determines how to calculate the distance between two\n vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#DistanceFunction",
        "fct-type": "type",
        "title": "DistanceFunction"
      },
      "index": {
        "description": "distance function determines how to calculate the distance between two vectors",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "DistanceFunction",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Distance Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ID",
      "description": {
        "fct-descr": "\u003cp\u003eUnique ID for a cluster\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ID",
        "fct-type": "type",
        "title": "ID"
      },
      "index": {
        "description": "Unique ID for cluster",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ID",
        "normalized": "",
        "package": "hieraclus",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:MinimumMap",
      "description": {
        "fct-descr": "\u003cp\u003ethe minimum map saves the distance matrix as a multi set, because a distance \n can occur more than one times. The set allows to find a distance pair \n by its ids and is used to find the minimum distance in \u003cem\u003eO(log n)\u003c/em\u003e\n Note: Alternatively one could use kind of a binary heap to find\n the minimum distance in \u003cem\u003eO(1)\u003c/em\u003e\n Storage complexity is \u003cem\u003eO(n^2)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#MinimumMap",
        "fct-type": "type",
        "title": "MinimumMap"
      },
      "index": {
        "description": "the minimum map saves the distance matrix as multi set because distance can occur more than one times The set allows to find distance pair by its ids and is used to find the minimum distance in log Note Alternatively one could use kind of binary heap to find the minimum distance in Storage complexity is",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "MinimumMap",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Minimum Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003ea pair of ID is used for mappings from and to distances between \n two clusters. \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#Pair",
        "fct-type": "type",
        "title": "Pair"
      },
      "index": {
        "description": "pair of ID is used for mappings from and to distances between two clusters",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "Pair",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:SimilarityFunction",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates the difference of two clusters by comparing them as a whole,\n e.g. the sum of variances of the clusters can be used\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#SimilarityFunction",
        "fct-type": "type",
        "title": "SimilarityFunction"
      },
      "index": {
        "description": "calculates the difference of two clusters by comparing them as whole e.g the sum of variances of the clusters can be used",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "SimilarityFunction",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Similarity Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Transformation",
      "description": {
        "fct-descr": "\u003cp\u003etransforms the input data into a vector representation\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#Transformation",
        "fct-type": "type",
        "title": "Transformation"
      },
      "index": {
        "description": "transforms the input data into vector representation",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "Transformation",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Transformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:CI",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "CI",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "CI"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "CI",
        "normalized": "",
        "package": "hieraclus",
        "partial": "CI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:CS",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "CS",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
        "fct-type": "function",
        "title": "CS"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "CS",
        "normalized": "",
        "package": "hieraclus",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:Cluster",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Cluster",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
        "fct-type": "function",
        "title": "Cluster"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "Cluster",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Cluster",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:addition",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "CostFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#addition",
        "fct-type": "function",
        "title": "addition"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "addition",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:averageLinkage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the average linkage method for clustering\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "DistanceFunction a -\u003e ClusterFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#averageLinkage",
        "fct-type": "function",
        "title": "averageLinkage"
      },
      "index": {
        "description": "log Uses the average linkage method for clustering",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "averageLinkage",
        "normalized": "DistanceFunction a-\u003eClusterFunction a",
        "package": "hieraclus",
        "partial": "Linkage",
        "signature": "DistanceFunction a-\u003eClusterFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cHistory",
      "description": {
        "fct-descr": "\u003cp\u003eholds a history of all costs\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "[a]",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "cHistory"
      },
      "index": {
        "description": "holds history of all costs",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "cHistory",
        "normalized": "[a]",
        "package": "hieraclus",
        "partial": "History",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cNew",
      "description": {
        "fct-descr": "\u003cp\u003ethe new created cluster and the all other clusters\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "(Cluster a, [Cluster a])",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "cNew"
      },
      "index": {
        "description": "the new created cluster and the all other clusters",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "cNew",
        "normalized": "(Cluster a,[Cluster a])",
        "package": "hieraclus",
        "partial": "New",
        "signature": "(Cluster a,[Cluster a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cStep",
      "description": {
        "fct-descr": "\u003cp\u003ethe current clustering step\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "cStep"
      },
      "index": {
        "description": "the current clustering step",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "cStep",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:calinski",
      "description": {
        "fct-descr": "\u003cp\u003edefines a tolerance for the homogeneity of the clusters\n that is the relation of the inner varianceSum of the recently \n created cluster and the outer varianceSum of all other clusters\n Developed by Calinski and Habarasz, see: \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "a -\u003e AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#calinski",
        "fct-type": "function",
        "title": "calinski"
      },
      "index": {
        "description": "defines tolerance for the homogeneity of the clusters that is the relation of the inner varianceSum of the recently created cluster and the outer varianceSum of all other clusters Developed by Calinski and Habarasz see",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "calinski",
        "normalized": "a-\u003eAbortCriterium a b",
        "package": "hieraclus",
        "partial": "",
        "signature": "a-\u003eAbortCriterium a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cinfo",
      "description": {
        "fct-descr": "\u003cp\u003eholds information of the clustering process that is needed by the Abort Criterias\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "ClusterInfo a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
        "fct-type": "function",
        "title": "cinfo"
      },
      "index": {
        "description": "holds information of the clustering process that is needed by the Abort Criterias",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "cinfo",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cluster",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Transformation b a -\u003e ClusterFunction a -\u003e CostFunction a -\u003e [AbortCriterium a b] -\u003e [b] -\u003e (ClusterResult b, ClusterInfo a b)",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#cluster",
        "fct-type": "function",
        "title": "cluster"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "cluster",
        "normalized": "Transformation a b-\u003eClusterFunction b-\u003eCostFunction b-\u003e[AbortCriterium b a]-\u003e[a]-\u003e(ClusterResult a,ClusterInfo b a)",
        "package": "hieraclus",
        "partial": "",
        "signature": "Transformation b a-\u003eClusterFunction a-\u003eCostFunction a-\u003e[AbortCriterium a b]-\u003e[b]-\u003e(ClusterResult b,ClusterInfo a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:clusterwise",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "SimilarityFunction a -\u003e ClusterFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#clusterwise",
        "fct-type": "function",
        "title": "clusterwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "clusterwise",
        "normalized": "SimilarityFunction a-\u003eClusterFunction a",
        "package": "hieraclus",
        "partial": "",
        "signature": "SimilarityFunction a-\u003eClusterFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:combis",
      "description": {
        "fct-descr": "\u003cp\u003eholds the mappings from pairs to distances\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "CombinationMap a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
        "fct-type": "function",
        "title": "combis"
      },
      "index": {
        "description": "holds the mappings from pairs to distances",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "combis",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:completeLinkage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the complete linkage method for clustering\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "DistanceFunction a -\u003e ClusterFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#completeLinkage",
        "fct-type": "function",
        "title": "completeLinkage"
      },
      "index": {
        "description": "log Uses the complete linkage method for clustering",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "completeLinkage",
        "normalized": "DistanceFunction a-\u003eClusterFunction a",
        "package": "hieraclus",
        "partial": "Linkage",
        "signature": "DistanceFunction a-\u003eClusterFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:costs",
      "description": {
        "fct-descr": "\u003cp\u003ea quality factor of the current combining that indicates the \"costs\" of cNew  \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "costs"
      },
      "index": {
        "description": "quality factor of the current combining that indicates the costs of cNew",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "costs",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:ellbow",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates the ellbow criterium that is to find a cluster steps\n which costs are above average. The first parameter gives a number\n of steps that are tolerated as a kind of stabilization phase. So if\n minSteps is set to k than ellbow criterium starts calculation average\n at step k+1. The second parameter gives the max. allowed multiple of \n average inclination             \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Int -\u003e a -\u003e AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ellbow",
        "fct-type": "function",
        "title": "ellbow"
      },
      "index": {
        "description": "calculates the ellbow criterium that is to find cluster steps which costs are above average The first parameter gives number of steps that are tolerated as kind of stabilization phase So if minSteps is set to than ellbow criterium starts calculation average at step The second parameter gives the max allowed multiple of average inclination",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "ellbow",
        "normalized": "Int-\u003ea-\u003eAbortCriterium a b",
        "package": "hieraclus",
        "partial": "",
        "signature": "Int-\u003ea-\u003eAbortCriterium a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:extractClusterElements",
      "description": {
        "fct-descr": "\u003cp\u003eextracts the original values from the cluster map. It runs in the state\n monad as it needs the mapping of vectors to original values.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "ClusterMap a -\u003e State (ClusterState a b) [[b]]",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#extractClusterElements",
        "fct-type": "function",
        "title": "extractClusterElements"
      },
      "index": {
        "description": "extracts the original values from the cluster map It runs in the state monad as it needs the mapping of vectors to original values",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "extractClusterElements",
        "normalized": "ClusterMap a-\u003eState(ClusterState a b)[[b]]",
        "package": "hieraclus",
        "partial": "Cluster Elements",
        "signature": "ClusterMap a-\u003eState(ClusterState a b)[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e\n creates clusters by a given map\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "[Vector a] -\u003e ClusterMap a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "creates clusters by given map",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "fromList",
        "normalized": "[Vector a]-\u003eClusterMap a",
        "package": "hieraclus",
        "partial": "List",
        "signature": "[Vector a]-\u003eClusterMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:getCluster",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "ClusterMap a -\u003e ID -\u003e Maybe (Cluster a)",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#getCluster",
        "fct-type": "function",
        "title": "getCluster"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "getCluster",
        "normalized": "ClusterMap a-\u003eID-\u003eMaybe(Cluster a)",
        "package": "hieraclus",
        "partial": "Cluster",
        "signature": "ClusterMap a-\u003eID-\u003eMaybe(Cluster a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:getClusterUnsafe",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "ClusterMap a -\u003e ID -\u003e Cluster a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#getClusterUnsafe",
        "fct-type": "function",
        "title": "getClusterUnsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "getClusterUnsafe",
        "normalized": "ClusterMap a-\u003eID-\u003eCluster a",
        "package": "hieraclus",
        "partial": "Cluster Unsafe",
        "signature": "ClusterMap a-\u003eID-\u003eCluster a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:idents",
      "description": {
        "fct-descr": "\u003cp\u003eholds the mapping from the representation vectors to its actual objects\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Map (Vector a) b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "idents"
      },
      "index": {
        "description": "holds the mapping from the representation vectors to its actual objects",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "idents",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:maxTotal",
      "description": {
        "fct-descr": "\u003cp\u003edefines the max. \"costs\" of a further combining of two clusters. \n This can be the increase of the euclidean distance e.g. as\n well as the varianceSum\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "a -\u003e AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#maxTotal",
        "fct-type": "function",
        "title": "maxTotal"
      },
      "index": {
        "description": "defines the max costs of further combining of two clusters This can be the increase of the euclidean distance e.g as well as the varianceSum",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "maxTotal",
        "normalized": "a-\u003eAbortCriterium a b",
        "package": "hieraclus",
        "partial": "Total",
        "signature": "a-\u003eAbortCriterium a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:mergeClusters",
      "description": {
        "fct-descr": "\u003cp\u003emerge two clusters given by their ids and return a tuple.\n The first element of the tuple is the new created cluster.\n The second element is the new resulting cluster structure    \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "ID -\u003e ID -\u003e ClusterMap a -\u003e State (ClusterState a b) (Cluster a, ClusterMap a, ClusterMap a)",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#mergeClusters",
        "fct-type": "function",
        "title": "mergeClusters"
      },
      "index": {
        "description": "merge two clusters given by their ids and return tuple The first element of the tuple is the new created cluster The second element is the new resulting cluster structure",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "mergeClusters",
        "normalized": "ID-\u003eID-\u003eClusterMap a-\u003eState(ClusterState a b)(Cluster a,ClusterMap a,ClusterMap a)",
        "package": "hieraclus",
        "partial": "Clusters",
        "signature": "ID-\u003eID-\u003eClusterMap a-\u003eState(ClusterState a b)(Cluster a,ClusterMap a,ClusterMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:minmap",
      "description": {
        "fct-descr": "\u003cp\u003eholds the mappings from distances to pairs \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "MinimumMap a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
        "fct-type": "function",
        "title": "minmap"
      },
      "index": {
        "description": "holds the mappings from distances to pairs",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "minmap",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nCluster",
      "description": {
        "fct-descr": "\u003cp\u003esets a max. number of clusters \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Int -\u003e AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#nCluster",
        "fct-type": "function",
        "title": "nCluster"
      },
      "index": {
        "description": "sets max number of clusters",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "nCluster",
        "normalized": "Int-\u003eAbortCriterium a b",
        "package": "hieraclus",
        "partial": "Cluster",
        "signature": "Int-\u003eAbortCriterium a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nElems",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of elements to be clustered \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "nElems"
      },
      "index": {
        "description": "the number of elements to be clustered",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "nElems",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Elems",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nSteps",
      "description": {
        "fct-descr": "\u003cp\u003esets a number of steps that has to be done     \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Int -\u003e AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#nSteps",
        "fct-type": "function",
        "title": "nSteps"
      },
      "index": {
        "description": "sets number of steps that has to be done",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "nSteps",
        "normalized": "Int-\u003eAbortCriterium a b",
        "package": "hieraclus",
        "partial": "Steps",
        "signature": "Int-\u003eAbortCriterium a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:noAbort",
      "description": {
        "fct-descr": "\u003cp\u003eno abortion means that the cluster process is only limited by its \n maximum number of possible steps that is: \u003cem\u003en\u003c/em\u003e - 1 where \u003cem\u003en\u003c/em\u003e is the\n number of elements to be clustered\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "AbortCriterium a b",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#noAbort",
        "fct-type": "function",
        "title": "noAbort"
      },
      "index": {
        "description": "no abortion means that the cluster process is only limited by its maximum number of possible steps that is where is the number of elements to be clustered",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "noAbort",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:pairwise",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "DistanceFunction a -\u003e Cluster a -\u003e Cluster a -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#pairwise",
        "fct-type": "function",
        "title": "pairwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "pairwise",
        "normalized": "DistanceFunction a-\u003eCluster a-\u003eCluster a-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "DistanceFunction a-\u003eCluster a-\u003eCluster a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:runCluster",
      "description": {
        "fct-descr": "\u003cp\u003ea wrapper for the acutal clustering function running in the\n state monad receiving the needed parameters to transform them for it           \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "(b -\u003e Vector a) -\u003e ClusterFunction a -\u003e CostFunction a -\u003e [AbortCriterium a b] -\u003e [b] -\u003e State (ClusterState a b) (ClusterMap a)",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#runCluster",
        "fct-type": "function",
        "title": "runCluster"
      },
      "index": {
        "description": "wrapper for the acutal clustering function running in the state monad receiving the needed parameters to transform them for it",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "runCluster",
        "normalized": "(a-\u003eVector b)-\u003eClusterFunction b-\u003eCostFunction b-\u003e[AbortCriterium b a]-\u003e[a]-\u003eState(ClusterState b a)(ClusterMap b)",
        "package": "hieraclus",
        "partial": "Cluster",
        "signature": "(b-\u003eVector a)-\u003eClusterFunction a-\u003eCostFunction a-\u003e[AbortCriterium a b]-\u003e[b]-\u003eState(ClusterState a b)(ClusterMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:singleLinkage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the single linkage method for clustering\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "DistanceFunction a -\u003e ClusterFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#singleLinkage",
        "fct-type": "function",
        "title": "singleLinkage"
      },
      "index": {
        "description": "log Uses the single linkage method for clustering",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "singleLinkage",
        "normalized": "DistanceFunction a-\u003eClusterFunction a",
        "package": "hieraclus",
        "partial": "Linkage",
        "signature": "DistanceFunction a-\u003eClusterFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \n creates a cluster with only one element \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "Maybe (Vector a) -\u003e Cluster a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "creates cluster with only one element",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "singleton",
        "normalized": "Maybe(Vector a)-\u003eCluster a",
        "package": "hieraclus",
        "partial": "",
        "signature": "Maybe(Vector a)-\u003eCluster a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:total",
      "description": {
        "fct-descr": "\u003cp\u003ethe accmulated costs\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
        "fct-type": "function",
        "title": "total"
      },
      "index": {
        "description": "the accmulated costs",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "total",
        "normalized": "",
        "package": "hieraclus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:vals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "[Vector a]",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
        "fct-type": "function",
        "title": "vals"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "vals",
        "normalized": "[Vector a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[Vector a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:varianceSum",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "CostFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#varianceSum",
        "fct-type": "function",
        "title": "varianceSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "varianceSum",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:wardLinkage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the ward linkage method for clustering\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.Clustering",
        "fct-package": "hieraclus",
        "fct-signature": "SimilarityFunction a -\u003e ClusterFunction a",
        "fct-source": "src/Numeric-Statistics-Clustering-Clustering.html#wardLinkage",
        "fct-type": "function",
        "title": "wardLinkage"
      },
      "index": {
        "description": "log Uses the ward linkage method for clustering",
        "hierarchy": "Numeric Statistics Clustering Clustering",
        "module": "Numeric.Statistics.Clustering.Clustering",
        "name": "wardLinkage",
        "normalized": "SimilarityFunction a-\u003eClusterFunction a",
        "package": "hieraclus",
        "partial": "Linkage",
        "signature": "SimilarityFunction a-\u003eClusterFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library providing basic vector operations for the clustering module\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html",
        "fct-type": "module",
        "title": "VectorUtils"
      },
      "index": {
        "description": "library providing basic vector operations for the clustering module",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "VectorUtils",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Vector Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003ea vector is represented as an ordinary list    \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "vector is represented as an ordinary list",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "Vector",
        "normalized": "",
        "package": "hieraclus",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:addV",
      "description": {
        "fct-descr": "\u003cp\u003eadds two given vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#addV",
        "fct-type": "function",
        "title": "addV"
      },
      "index": {
        "description": "adds two given vectors",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "addV",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:average",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#average",
        "fct-type": "function",
        "title": "average"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "average",
        "normalized": "[a]-\u003ea",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:devsq",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#devsq",
        "fct-type": "function",
        "title": "devsq"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "devsq",
        "normalized": "[a]-\u003ea",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:divV",
      "description": {
        "fct-descr": "\u003cp\u003edivides two given vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#divV",
        "fct-type": "function",
        "title": "divV"
      },
      "index": {
        "description": "divides two given vectors",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "divV",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:emptyVector",
      "description": {
        "fct-descr": "\u003cp\u003ecreates an empty vector\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#emptyVector",
        "fct-type": "function",
        "title": "emptyVector"
      },
      "index": {
        "description": "creates an empty vector",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "emptyVector",
        "normalized": "[a]",
        "package": "hieraclus",
        "partial": "Vector",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:euklideanDistance",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "Vector a -\u003e Vector a -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#euklideanDistance",
        "fct-type": "function",
        "title": "euklideanDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "euklideanDistance",
        "normalized": "Vector a-\u003eVector a-\u003ea",
        "package": "hieraclus",
        "partial": "Distance",
        "signature": "Vector a-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003econverts every element of a given list into a one element vector\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [Vector a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "converts every element of given list into one element vector",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "fromList",
        "normalized": "[a]-\u003e[Vector a]",
        "package": "hieraclus",
        "partial": "List",
        "signature": "[a]-\u003e[Vector a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:meanSquareV",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[Vector a] -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#meanSquareV",
        "fct-type": "function",
        "title": "meanSquareV"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "meanSquareV",
        "normalized": "[Vector a]-\u003ea",
        "package": "hieraclus",
        "partial": "Square",
        "signature": "[Vector a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:mulV",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates the vector product of two given vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#mulV",
        "fct-type": "function",
        "title": "mulV"
      },
      "index": {
        "description": "calculates the vector product of two given vectors",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "mulV",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:norm",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#norm",
        "fct-type": "function",
        "title": "norm"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "norm",
        "normalized": "Vector a-\u003ea",
        "package": "hieraclus",
        "partial": "",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:qeuklideanDistance",
      "description": {
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [a] -\u003e a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#qeuklideanDistance",
        "fct-type": "function",
        "title": "qeuklideanDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "qeuklideanDistance",
        "normalized": "[a]-\u003e[a]-\u003ea",
        "package": "hieraclus",
        "partial": "Distance",
        "signature": "[a]-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003emaps an element into a one element vector\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "a -\u003e Vector a",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "maps an element into one element vector",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "singleton",
        "normalized": "a-\u003eVector a",
        "package": "hieraclus",
        "partial": "",
        "signature": "a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:subV",
      "description": {
        "fct-descr": "\u003cp\u003esubtracts two given vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#subV",
        "fct-type": "function",
        "title": "subV"
      },
      "index": {
        "description": "subtracts two given vectors",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "subV",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:sumV",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates the sum of a given list of vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.Clustering.VectorUtils",
        "fct-package": "hieraclus",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Numeric-Statistics-Clustering-VectorUtils.html#sumV",
        "fct-type": "function",
        "title": "sumV"
      },
      "index": {
        "description": "calculates the sum of given list of vectors",
        "hierarchy": "Numeric Statistics Clustering VectorUtils",
        "module": "Numeric.Statistics.Clustering.VectorUtils",
        "name": "sumV",
        "normalized": "[[a]]-\u003e[a]",
        "package": "hieraclus",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  }
]