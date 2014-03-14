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
        "word": "hieraclus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHieraclus is a library that supports clustering of arbitrary elements in haskell. The difference to the already \n existing cluster library \u003cem\u003ehierarchical-clustering\u003c/em\u003e is the ability to work with abort criterias which allow an \n \"intelligent\" clustering. With the help of abort criterias the user can specify conditions that must be fulfilled\n in order to stop the clustering process.\n\u003c/p\u003e\u003cp\u003eAnother motivation of creating this library was to make the cluster process run in \u003cem\u003eO(n^2)\u003c/em\u003e. However, the current \n implementation runs in \u003cem\u003eO(n^2 * log n)\u003c/em\u003e. It has to be mentioned that the real runtime complexity tends to grow \n faster due to memory management, I guess. Some profiling showed that there is quite a big amount of memory \n spent managing the maps. The principle idea was not to work with a matrix, but with two maps instead. The \n first map holds the mappings from cluster pairs to distances, the second map vice versa, thus allowing to find \n the minimal distance in \u003cem\u003eO(log n)\u003c/em\u003e and not in \u003cem\u003eO(n^2)\u003c/em\u003e. Two make things more efficient the data to be clustered\n initially is transformed to vector space, as all clutering operations work in vector space. The actual clustering\n thus is done with the vector representations of the input data, which finally are transformed back.\n\u003c/p\u003e\u003cp\u003eThe above mentioned information for the abort criterias, the maps and the element-mappings are carried through\n the cluster process in a cluster state. So the actual cluster process takes place within the state monad.\n However, the library offers a function \u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e that is purely functional as it returns a tuple. \n First element of the tuple is the cluster result - simply implemented as list of list. \n The second element of the tuple holds the cluster information used by the abort criterias. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Clustering",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html",
          "type": "module"
        },
        "index": {
          "description": "Hieraclus is library that supports clustering of arbitrary elements in haskell The difference to the already existing cluster library hierarchical-clustering is the ability to work with abort criterias which allow an intelligent clustering With the help of abort criterias the user can specify conditions that must be fulfilled in order to stop the clustering process Another motivation of creating this library was to make the cluster process run in However the current implementation runs in log It has to be mentioned that the real runtime complexity tends to grow faster due to memory management guess Some profiling showed that there is quite big amount of memory spent managing the maps The principle idea was not to work with matrix but with two maps instead The first map holds the mappings from cluster pairs to distances the second map vice versa thus allowing to find the minimal distance in log and not in Two make things more efficient the data to be clustered initially is transformed to vector space as all clutering operations work in vector space The actual clustering thus is done with the vector representations of the input data which finally are transformed back The above mentioned information for the abort criterias the maps and the element-mappings are carried through the cluster process in cluster state So the actual cluster process takes place within the state monad However the library offers function cluster that is purely functional as it returns tuple First element of the tuple is the cluster result simply implemented as list of list The second element of the tuple holds the cluster information used by the abort criterias",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Clustering",
          "package": "hieraclus",
          "partial": "Clustering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Cluster is represented as a list of Vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Cluster",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
          "type": "newtype"
        },
        "index": {
          "description": "Cluster is represented as list of Vectors",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Cluster",
          "package": "hieraclus",
          "partial": "Cluster",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe cluster process produces information about the clustering after each step.\n these information are given to functions that decide if the cluster process \n may continue or stop and return the results\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterInfo",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "data"
        },
        "index": {
          "description": "the cluster process produces information about the clustering after each step these information are given to functions that decide if the cluster process may continue or stop and return the results",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterInfo",
          "package": "hieraclus",
          "partial": "Cluster Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Cluster map serves to represent unions of elements. Therefore it maps\n IDs to clusters.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterMap",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterMap",
          "type": "type"
        },
        "index": {
          "description": "the Cluster map serves to represent unions of elements Therefore it maps IDs to clusters",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterMap",
          "package": "hieraclus",
          "partial": "Cluster Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe resulting clusters are represented as a lists                    \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterResult",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterResult",
          "type": "type"
        },
        "index": {
          "description": "the resulting clusters are represented as lists",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterResult",
          "package": "hieraclus",
          "partial": "Cluster Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe cluster state contains information about all relevant maps\n that are needed for the clustering and information about the \n clustering process. The ClusterState is passed around withing\n the state monad\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterState",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
          "type": "data"
        },
        "index": {
          "description": "the cluster state contains information about all relevant maps that are needed for the clustering and information about the clustering process The ClusterState is passed around withing the state monad",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ClusterState",
          "package": "hieraclus",
          "partial": "Cluster State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ClusterState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the minimum map but with the pairs as the keys, thus allowing\n to find the distance of a given pair in \u003cem\u003eO(log n)\u003c/em\u003e.\n Storage complexity is \u003cem\u003eO(n^2)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CombinationMap",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#CombinationMap",
          "type": "type"
        },
        "index": {
          "description": "Like the minimum map but with the pairs as the keys thus allowing to find the distance of given pair in log Storage complexity is",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CombinationMap",
          "package": "hieraclus",
          "partial": "Combination Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:CombinationMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea distance function determines how to calculate the distance between two\n vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "DistanceFunction",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#DistanceFunction",
          "type": "type"
        },
        "index": {
          "description": "distance function determines how to calculate the distance between two vectors",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "DistanceFunction",
          "package": "hieraclus",
          "partial": "Distance Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:DistanceFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique ID for a cluster\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ID",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ID",
          "type": "type"
        },
        "index": {
          "description": "Unique ID for cluster",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ID",
          "package": "hieraclus",
          "partial": "ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe minimum map saves the distance matrix as a multi set, because a distance \n can occur more than one times. The set allows to find a distance pair \n by its ids and is used to find the minimum distance in \u003cem\u003eO(log n)\u003c/em\u003e\n Note: Alternatively one could use kind of a binary heap to find\n the minimum distance in \u003cem\u003eO(1)\u003c/em\u003e\n Storage complexity is \u003cem\u003eO(n^2)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "MinimumMap",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#MinimumMap",
          "type": "type"
        },
        "index": {
          "description": "the minimum map saves the distance matrix as multi set because distance can occur more than one times The set allows to find distance pair by its ids and is used to find the minimum distance in log Note Alternatively one could use kind of binary heap to find the minimum distance in Storage complexity is",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "MinimumMap",
          "package": "hieraclus",
          "partial": "Minimum Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:MinimumMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea pair of ID is used for mappings from and to distances between \n two clusters. \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Pair",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#Pair",
          "type": "type"
        },
        "index": {
          "description": "pair of ID is used for mappings from and to distances between two clusters",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Pair",
          "package": "hieraclus",
          "partial": "Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the difference of two clusters by comparing them as a whole,\n e.g. the sum of variances of the clusters can be used\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "SimilarityFunction",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#SimilarityFunction",
          "type": "type"
        },
        "index": {
          "description": "calculates the difference of two clusters by comparing them as whole e.g the sum of variances of the clusters can be used",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "SimilarityFunction",
          "package": "hieraclus",
          "partial": "Similarity Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:SimilarityFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransforms the input data into a vector representation\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Transformation",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#Transformation",
          "type": "type"
        },
        "index": {
          "description": "transforms the input data into vector representation",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Transformation",
          "package": "hieraclus",
          "partial": "Transformation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#t:Transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CI",
          "package": "hieraclus",
          "signature": "CI",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CI",
          "package": "hieraclus",
          "partial": "CI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:CI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CS",
          "package": "hieraclus",
          "signature": "CS",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "CS",
          "package": "hieraclus",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:CS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Cluster",
          "package": "hieraclus",
          "signature": "Cluster",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "Cluster",
          "package": "hieraclus",
          "partial": "Cluster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:Cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "addition",
          "package": "hieraclus",
          "signature": "CostFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#addition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "addition",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:addition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the average linkage method for clustering\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "averageLinkage",
          "package": "hieraclus",
          "signature": "DistanceFunction a -\u003e ClusterFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#averageLinkage",
          "type": "function"
        },
        "index": {
          "description": "log Uses the average linkage method for clustering",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "averageLinkage",
          "normalized": "DistanceFunction a-\u003eClusterFunction a",
          "package": "hieraclus",
          "partial": "Linkage",
          "signature": "DistanceFunction a-\u003eClusterFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:averageLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eholds a history of all costs\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cHistory",
          "package": "hieraclus",
          "signature": "[a]",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "holds history of all costs",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cHistory",
          "normalized": "[a]",
          "package": "hieraclus",
          "partial": "History",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe new created cluster and the all other clusters\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cNew",
          "package": "hieraclus",
          "signature": "(Cluster a, [Cluster a])",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "the new created cluster and the all other clusters",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cNew",
          "normalized": "(Cluster a,[Cluster a])",
          "package": "hieraclus",
          "partial": "New",
          "signature": "(Cluster a,[Cluster a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current clustering step\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cStep",
          "package": "hieraclus",
          "signature": "Int",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "the current clustering step",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cStep",
          "package": "hieraclus",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefines a tolerance for the homogeneity of the clusters\n that is the relation of the inner varianceSum of the recently \n created cluster and the outer varianceSum of all other clusters\n Developed by Calinski and Habarasz, see: \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "calinski",
          "package": "hieraclus",
          "signature": "a -\u003e AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#calinski",
          "type": "function"
        },
        "index": {
          "description": "defines tolerance for the homogeneity of the clusters that is the relation of the inner varianceSum of the recently created cluster and the outer varianceSum of all other clusters Developed by Calinski and Habarasz see",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "calinski",
          "normalized": "a-\u003eAbortCriterium a b",
          "package": "hieraclus",
          "signature": "a-\u003eAbortCriterium a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:calinski"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eholds information of the clustering process that is needed by the Abort Criterias\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cinfo",
          "package": "hieraclus",
          "signature": "ClusterInfo a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
          "type": "function"
        },
        "index": {
          "description": "holds information of the clustering process that is needed by the Abort Criterias",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cinfo",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cluster",
          "package": "hieraclus",
          "signature": "Transformation b a -\u003e ClusterFunction a -\u003e CostFunction a -\u003e [AbortCriterium a b] -\u003e [b] -\u003e (ClusterResult b, ClusterInfo a b)",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "cluster",
          "normalized": "Transformation a b-\u003eClusterFunction b-\u003eCostFunction b-\u003e[AbortCriterium b a]-\u003e[a]-\u003e(ClusterResult a,ClusterInfo b a)",
          "package": "hieraclus",
          "signature": "Transformation b a-\u003eClusterFunction a-\u003eCostFunction a-\u003e[AbortCriterium a b]-\u003e[b]-\u003e(ClusterResult b,ClusterInfo a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "clusterwise",
          "package": "hieraclus",
          "signature": "SimilarityFunction a -\u003e ClusterFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#clusterwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "clusterwise",
          "normalized": "SimilarityFunction a-\u003eClusterFunction a",
          "package": "hieraclus",
          "signature": "SimilarityFunction a-\u003eClusterFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:clusterwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eholds the mappings from pairs to distances\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "combis",
          "package": "hieraclus",
          "signature": "CombinationMap a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
          "type": "function"
        },
        "index": {
          "description": "holds the mappings from pairs to distances",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "combis",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:combis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the complete linkage method for clustering\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "completeLinkage",
          "package": "hieraclus",
          "signature": "DistanceFunction a -\u003e ClusterFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#completeLinkage",
          "type": "function"
        },
        "index": {
          "description": "log Uses the complete linkage method for clustering",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "completeLinkage",
          "normalized": "DistanceFunction a-\u003eClusterFunction a",
          "package": "hieraclus",
          "partial": "Linkage",
          "signature": "DistanceFunction a-\u003eClusterFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:completeLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea quality factor of the current combining that indicates the \"costs\" of cNew  \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "costs",
          "package": "hieraclus",
          "signature": "a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "quality factor of the current combining that indicates the costs of cNew",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "costs",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:costs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the ellbow criterium that is to find a cluster steps\n which costs are above average. The first parameter gives a number\n of steps that are tolerated as a kind of stabilization phase. So if\n minSteps is set to k than ellbow criterium starts calculation average\n at step k+1. The second parameter gives the max. allowed multiple of \n average inclination             \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ellbow",
          "package": "hieraclus",
          "signature": "Int -\u003e a -\u003e AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ellbow",
          "type": "function"
        },
        "index": {
          "description": "calculates the ellbow criterium that is to find cluster steps which costs are above average The first parameter gives number of steps that are tolerated as kind of stabilization phase So if minSteps is set to than ellbow criterium starts calculation average at step The second parameter gives the max allowed multiple of average inclination",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "ellbow",
          "normalized": "Int-\u003ea-\u003eAbortCriterium a b",
          "package": "hieraclus",
          "signature": "Int-\u003ea-\u003eAbortCriterium a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:ellbow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracts the original values from the cluster map. It runs in the state\n monad as it needs the mapping of vectors to original values.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "extractClusterElements",
          "package": "hieraclus",
          "signature": "ClusterMap a -\u003e State (ClusterState a b) [[b]]",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#extractClusterElements",
          "type": "function"
        },
        "index": {
          "description": "extracts the original values from the cluster map It runs in the state monad as it needs the mapping of vectors to original values",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "extractClusterElements",
          "normalized": "ClusterMap a-\u003eState(ClusterState a b)[[b]]",
          "package": "hieraclus",
          "partial": "Cluster Elements",
          "signature": "ClusterMap a-\u003eState(ClusterState a b)[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:extractClusterElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e\n creates clusters by a given map\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "fromList",
          "package": "hieraclus",
          "signature": "[Vector a] -\u003e ClusterMap a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "creates clusters by given map",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "fromList",
          "normalized": "[Vector a]-\u003eClusterMap a",
          "package": "hieraclus",
          "partial": "List",
          "signature": "[Vector a]-\u003eClusterMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "getCluster",
          "package": "hieraclus",
          "signature": "ClusterMap a -\u003e ID -\u003e Maybe (Cluster a)",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#getCluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "getCluster",
          "normalized": "ClusterMap a-\u003eID-\u003eMaybe(Cluster a)",
          "package": "hieraclus",
          "partial": "Cluster",
          "signature": "ClusterMap a-\u003eID-\u003eMaybe(Cluster a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:getCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "getClusterUnsafe",
          "package": "hieraclus",
          "signature": "ClusterMap a -\u003e ID -\u003e Cluster a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#getClusterUnsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "getClusterUnsafe",
          "normalized": "ClusterMap a-\u003eID-\u003eCluster a",
          "package": "hieraclus",
          "partial": "Cluster Unsafe",
          "signature": "ClusterMap a-\u003eID-\u003eCluster a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:getClusterUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eholds the mapping from the representation vectors to its actual objects\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "idents",
          "package": "hieraclus",
          "signature": "Map (Vector a) b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "holds the mapping from the representation vectors to its actual objects",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "idents",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:idents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefines the max. \"costs\" of a further combining of two clusters. \n This can be the increase of the euclidean distance e.g. as\n well as the varianceSum\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "maxTotal",
          "package": "hieraclus",
          "signature": "a -\u003e AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#maxTotal",
          "type": "function"
        },
        "index": {
          "description": "defines the max costs of further combining of two clusters This can be the increase of the euclidean distance e.g as well as the varianceSum",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "maxTotal",
          "normalized": "a-\u003eAbortCriterium a b",
          "package": "hieraclus",
          "partial": "Total",
          "signature": "a-\u003eAbortCriterium a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:maxTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emerge two clusters given by their ids and return a tuple.\n The first element of the tuple is the new created cluster.\n The second element is the new resulting cluster structure    \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "mergeClusters",
          "package": "hieraclus",
          "signature": "ID -\u003e ID -\u003e ClusterMap a -\u003e State (ClusterState a b) (Cluster a, ClusterMap a, ClusterMap a)",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#mergeClusters",
          "type": "function"
        },
        "index": {
          "description": "merge two clusters given by their ids and return tuple The first element of the tuple is the new created cluster The second element is the new resulting cluster structure",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "mergeClusters",
          "normalized": "ID-\u003eID-\u003eClusterMap a-\u003eState(ClusterState a b)(Cluster a,ClusterMap a,ClusterMap a)",
          "package": "hieraclus",
          "partial": "Clusters",
          "signature": "ID-\u003eID-\u003eClusterMap a-\u003eState(ClusterState a b)(Cluster a,ClusterMap a,ClusterMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:mergeClusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eholds the mappings from distances to pairs \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "minmap",
          "package": "hieraclus",
          "signature": "MinimumMap a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterState",
          "type": "function"
        },
        "index": {
          "description": "holds the mappings from distances to pairs",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "minmap",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:minmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets a max. number of clusters \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nCluster",
          "package": "hieraclus",
          "signature": "Int -\u003e AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#nCluster",
          "type": "function"
        },
        "index": {
          "description": "sets max number of clusters",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nCluster",
          "normalized": "Int-\u003eAbortCriterium a b",
          "package": "hieraclus",
          "partial": "Cluster",
          "signature": "Int-\u003eAbortCriterium a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of elements to be clustered \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nElems",
          "package": "hieraclus",
          "signature": "Int",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "the number of elements to be clustered",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nElems",
          "package": "hieraclus",
          "partial": "Elems",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets a number of steps that has to be done     \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nSteps",
          "package": "hieraclus",
          "signature": "Int -\u003e AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#nSteps",
          "type": "function"
        },
        "index": {
          "description": "sets number of steps that has to be done",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "nSteps",
          "normalized": "Int-\u003eAbortCriterium a b",
          "package": "hieraclus",
          "partial": "Steps",
          "signature": "Int-\u003eAbortCriterium a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:nSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno abortion means that the cluster process is only limited by its \n maximum number of possible steps that is: \u003cem\u003en\u003c/em\u003e - 1 where \u003cem\u003en\u003c/em\u003e is the\n number of elements to be clustered\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "noAbort",
          "package": "hieraclus",
          "signature": "AbortCriterium a b",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#noAbort",
          "type": "function"
        },
        "index": {
          "description": "no abortion means that the cluster process is only limited by its maximum number of possible steps that is where is the number of elements to be clustered",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "noAbort",
          "package": "hieraclus",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:noAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "pairwise",
          "package": "hieraclus",
          "signature": "DistanceFunction a -\u003e Cluster a -\u003e Cluster a -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#pairwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "pairwise",
          "normalized": "DistanceFunction a-\u003eCluster a-\u003eCluster a-\u003e[a]",
          "package": "hieraclus",
          "signature": "DistanceFunction a-\u003eCluster a-\u003eCluster a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:pairwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea wrapper for the acutal clustering function running in the\n state monad receiving the needed parameters to transform them for it           \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "runCluster",
          "package": "hieraclus",
          "signature": "(b -\u003e Vector a) -\u003e ClusterFunction a -\u003e CostFunction a -\u003e [AbortCriterium a b] -\u003e [b] -\u003e State (ClusterState a b) (ClusterMap a)",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#runCluster",
          "type": "function"
        },
        "index": {
          "description": "wrapper for the acutal clustering function running in the state monad receiving the needed parameters to transform them for it",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "runCluster",
          "normalized": "(a-\u003eVector b)-\u003eClusterFunction b-\u003eCostFunction b-\u003e[AbortCriterium b a]-\u003e[a]-\u003eState(ClusterState b a)(ClusterMap b)",
          "package": "hieraclus",
          "partial": "Cluster",
          "signature": "(b-\u003eVector a)-\u003eClusterFunction a-\u003eCostFunction a-\u003e[AbortCriterium a b]-\u003e[b]-\u003eState(ClusterState a b)(ClusterMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:runCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the single linkage method for clustering\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "singleLinkage",
          "package": "hieraclus",
          "signature": "DistanceFunction a -\u003e ClusterFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#singleLinkage",
          "type": "function"
        },
        "index": {
          "description": "log Uses the single linkage method for clustering",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "singleLinkage",
          "normalized": "DistanceFunction a-\u003eClusterFunction a",
          "package": "hieraclus",
          "partial": "Linkage",
          "signature": "DistanceFunction a-\u003eClusterFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:singleLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \n creates a cluster with only one element \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "singleton",
          "package": "hieraclus",
          "signature": "Maybe (Vector a) -\u003e Cluster a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "creates cluster with only one element",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "singleton",
          "normalized": "Maybe(Vector a)-\u003eCluster a",
          "package": "hieraclus",
          "signature": "Maybe(Vector a)-\u003eCluster a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe accmulated costs\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "total",
          "package": "hieraclus",
          "signature": "a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#ClusterInfo",
          "type": "function"
        },
        "index": {
          "description": "the accmulated costs",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "total",
          "package": "hieraclus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "vals",
          "package": "hieraclus",
          "signature": "[Vector a]",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#Cluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "vals",
          "normalized": "[Vector a]",
          "package": "hieraclus",
          "signature": "[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:vals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "varianceSum",
          "package": "hieraclus",
          "signature": "CostFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#varianceSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "varianceSum",
          "package": "hieraclus",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:varianceSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2 log n)\u003c/em\u003e. \n Uses the ward linkage method for clustering\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "wardLinkage",
          "package": "hieraclus",
          "signature": "SimilarityFunction a -\u003e ClusterFunction a",
          "source": "src/Numeric-Statistics-Clustering-Clustering.html#wardLinkage",
          "type": "function"
        },
        "index": {
          "description": "log Uses the ward linkage method for clustering",
          "hierarchy": "Numeric Statistics Clustering Clustering",
          "module": "Numeric.Statistics.Clustering.Clustering",
          "name": "wardLinkage",
          "normalized": "SimilarityFunction a-\u003eClusterFunction a",
          "package": "hieraclus",
          "partial": "Linkage",
          "signature": "SimilarityFunction a-\u003eClusterFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-Clustering.html#v:wardLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library providing basic vector operations for the clustering module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "VectorUtils",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html",
          "type": "module"
        },
        "index": {
          "description": "library providing basic vector operations for the clustering module",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "VectorUtils",
          "package": "hieraclus",
          "partial": "Vector Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea vector is represented as an ordinary list    \n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "Vector",
          "package": "hieraclus",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#Vector",
          "type": "type"
        },
        "index": {
          "description": "vector is represented as an ordinary list",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "Vector",
          "package": "hieraclus",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadds two given vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "addV",
          "package": "hieraclus",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#addV",
          "type": "function"
        },
        "index": {
          "description": "adds two given vectors",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "addV",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hieraclus",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:addV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "average",
          "package": "hieraclus",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#average",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "average",
          "normalized": "[a]-\u003ea",
          "package": "hieraclus",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "devsq",
          "package": "hieraclus",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#devsq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "devsq",
          "normalized": "[a]-\u003ea",
          "package": "hieraclus",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:devsq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edivides two given vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "divV",
          "package": "hieraclus",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#divV",
          "type": "function"
        },
        "index": {
          "description": "divides two given vectors",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "divV",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hieraclus",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:divV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates an empty vector\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "emptyVector",
          "package": "hieraclus",
          "signature": "[a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#emptyVector",
          "type": "function"
        },
        "index": {
          "description": "creates an empty vector",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "emptyVector",
          "normalized": "[a]",
          "package": "hieraclus",
          "partial": "Vector",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:emptyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "euklideanDistance",
          "package": "hieraclus",
          "signature": "Vector a -\u003e Vector a -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#euklideanDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "euklideanDistance",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "hieraclus",
          "partial": "Distance",
          "signature": "Vector a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:euklideanDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts every element of a given list into a one element vector\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "fromList",
          "package": "hieraclus",
          "signature": "[a] -\u003e [Vector a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "converts every element of given list into one element vector",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "fromList",
          "normalized": "[a]-\u003e[Vector a]",
          "package": "hieraclus",
          "partial": "List",
          "signature": "[a]-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "meanSquareV",
          "package": "hieraclus",
          "signature": "[Vector a] -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#meanSquareV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "meanSquareV",
          "normalized": "[Vector a]-\u003ea",
          "package": "hieraclus",
          "partial": "Square",
          "signature": "[Vector a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:meanSquareV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the vector product of two given vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "mulV",
          "package": "hieraclus",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#mulV",
          "type": "function"
        },
        "index": {
          "description": "calculates the vector product of two given vectors",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "mulV",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hieraclus",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:mulV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "norm",
          "package": "hieraclus",
          "signature": "Vector a -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "norm",
          "normalized": "Vector a-\u003ea",
          "package": "hieraclus",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "qeuklideanDistance",
          "package": "hieraclus",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#qeuklideanDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "qeuklideanDistance",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "hieraclus",
          "partial": "Distance",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:qeuklideanDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps an element into a one element vector\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "singleton",
          "package": "hieraclus",
          "signature": "a -\u003e Vector a",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "maps an element into one element vector",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "singleton",
          "normalized": "a-\u003eVector a",
          "package": "hieraclus",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtracts two given vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "subV",
          "package": "hieraclus",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#subV",
          "type": "function"
        },
        "index": {
          "description": "subtracts two given vectors",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "subV",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hieraclus",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:subV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the sum of a given list of vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "sumV",
          "package": "hieraclus",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Numeric-Statistics-Clustering-VectorUtils.html#sumV",
          "type": "function"
        },
        "index": {
          "description": "calculates the sum of given list of vectors",
          "hierarchy": "Numeric Statistics Clustering VectorUtils",
          "module": "Numeric.Statistics.Clustering.VectorUtils",
          "name": "sumV",
          "normalized": "[[a]]-\u003e[a]",
          "package": "hieraclus",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hieraclus/docs/Numeric-Statistics-Clustering-VectorUtils.html#v:sumV"
      }
    }
  ]
]