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
        "word": "hierarchical-clustering"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "DistanceMatrix",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Clustering Hierarchical Internal DistanceMatrix",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "DistanceMatrix",
          "package": "hierarchical-clustering",
          "partial": "Distance Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space. Calculates a complete,\n rooted dendrogram for a list of items using complete linkage\n with the na&#239;ve algorithm using a distance matrix.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "completeLinkage",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#completeLinkage",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using complete linkage with the na ve algorithm using distance matrix",
          "hierarchy": "Data Clustering Hierarchical Internal DistanceMatrix",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "completeLinkage",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#v:completeLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space. Calculates a complete,\n rooted dendrogram for a list of items using fake average\n linkage with the na&#239;ve algorithm using a distance matrix.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "fakeAverageLinkage",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#fakeAverageLinkage",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using fake average linkage with the na ve algorithm using distance matrix",
          "hierarchy": "Data Clustering Hierarchical Internal DistanceMatrix",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "fakeAverageLinkage",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "partial": "Average Linkage",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#v:fakeAverageLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space. Calculates a complete,\n rooted dendrogram for a list of items using single linkage\n with the na&#239;ve algorithm using a distance matrix.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "singleLinkage",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#singleLinkage",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using single linkage with the na ve algorithm using distance matrix",
          "hierarchy": "Data Clustering Hierarchical Internal DistanceMatrix",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "singleLinkage",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#v:singleLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space. Calculates a complete,\n rooted dendrogram for a list of items using UPGMA with the\n na&#239;ve algorithm using a distance matrix.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "upgma",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#upgma",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using UPGMA with the na ve algorithm using distance matrix",
          "hierarchy": "Data Clustering Hierarchical Internal DistanceMatrix",
          "module": "Data.Clustering.Hierarchical.Internal.DistanceMatrix",
          "name": "upgma",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-DistanceMatrix.html#v:upgma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementations that are optimal in space and time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "Optimal",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Optimal.html",
          "type": "module"
        },
        "index": {
          "description": "Implementations that are optimal in space and time",
          "hierarchy": "Data Clustering Hierarchical Internal Optimal",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "Optimal",
          "package": "hierarchical-clustering",
          "partial": "Optimal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Optimal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e time and \u003cem\u003eO(n)\u003c/em\u003e space. Calculates a complete, rooted dendrogram for a list\n of items using complete linkage with the CLINK algorithm.  This\n algorithm is optimal in space and time.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eReference\u003c/dt\u003e\u003cdd\u003e D. Defays (1977). \"An efficient algorithm for a\n   complete link method\". \u003cem\u003eThe Computer Journal\u003c/em\u003e (British\n   Computer Society) 20 (4): 364-366.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "completeLinkage",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-Optimal.html#completeLinkage",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using complete linkage with the CLINK algorithm This algorithm is optimal in space and time Reference Defays An efficient algorithm for complete link method The Computer Journal British Computer Society",
          "hierarchy": "Data Clustering Hierarchical Internal Optimal",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "completeLinkage",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Optimal.html#v:completeLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e time and \u003cem\u003eO(n)\u003c/em\u003e space. Calculates a complete,\n rooted dendrogram for a list of items using single linkage\n with the SLINK algorithm.  This algorithm is optimal in space\n and time.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eReference\u003c/dt\u003e\u003cdd\u003e R. Sibson (1973). \"SLINK: an optimally efficient\n   algorithm for the single-link cluster method\". \u003cem\u003eThe\u003c/em\u003e\n   \u003cem\u003eComputer Journal\u003c/em\u003e (British Computer Society) 16 (1):\n   30-34.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "singleLinkage",
          "package": "hierarchical-clustering",
          "signature": "[a] -\u003e (a -\u003e a -\u003e Distance) -\u003e Dendrogram a",
          "source": "src/Data-Clustering-Hierarchical-Internal-Optimal.html#singleLinkage",
          "type": "function"
        },
        "index": {
          "description": "time and space Calculates complete rooted dendrogram for list of items using single linkage with the SLINK algorithm This algorithm is optimal in space and time Reference Sibson SLINK an optimally efficient algorithm for the single-link cluster method The Computer Journal British Computer Society",
          "hierarchy": "Data Clustering Hierarchical Internal Optimal",
          "module": "Data.Clustering.Hierarchical.Internal.Optimal",
          "name": "singleLinkage",
          "normalized": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "signature": "[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Optimal.html#v:singleLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Types",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Types",
          "package": "hierarchical-clustering",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for storing hierarchical clusters.  The\n distance between clusters is stored on the branches.\n Distances between leafs are the distances between the elements\n on those leafs, while distances between branches are defined\n by the linkage used (see \u003ccode\u003e\u003ca\u003eLinkage\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Dendrogram",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Dendrogram",
          "type": "data"
        },
        "index": {
          "description": "Data structure for storing hierarchical clusters The distance between clusters is stored on the branches Distances between leafs are the distances between the elements on those leafs while distances between branches are defined by the linkage used see Linkage",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Dendrogram",
          "package": "hierarchical-clustering",
          "partial": "Dendrogram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#t:Dendrogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distance is simply a synonym of \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for efficiency.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Distance",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Distance",
          "type": "type"
        },
        "index": {
          "description": "distance is simply synonym of Double for efficiency",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Distance",
          "package": "hierarchical-clustering",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe linkage type determines how the distance between\n clusters will be calculated.  These are the linkage types\n currently available on this library.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Linkage",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "data"
        },
        "index": {
          "description": "The linkage type determines how the distance between clusters will be calculated These are the linkage types currently available on this library",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Linkage",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#t:Linkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach branch connects two clusters/dendrograms that are\n \u003ccode\u003ed\u003c/code\u003e distance apart.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "Branch",
          "package": "hierarchical-clustering",
          "signature": "Branch !Distance (Dendrogram a) (Dendrogram a)",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Dendrogram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:Branch\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:Branch\"]"
        },
        "index": {
          "description": "Each branch connects two clusters dendrograms that are distance apart",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Branch",
          "package": "hierarchical-clustering",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eCompleteLinkage\u003c/a\u003e\u003c/code\u003e, but using the CLINK\n algorithm.  It's much faster however doesn't always give the\n best complete linkage dendrogram.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "CLINK",
          "package": "hierarchical-clustering",
          "signature": "CLINK",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:CLINK\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:CLINK\"]"
        },
        "index": {
          "description": "The same as CompleteLinkage but using the CLINK algorithm It much faster however doesn always give the best complete linkage dendrogram",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "CLINK",
          "package": "hierarchical-clustering",
          "partial": "CLINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:CLINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distance between two clusters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is the\n \u003cem\u003emaximum\u003c/em\u003e distance between an element of \u003ccode\u003ea\u003c/code\u003e and an element\n of \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "CompleteLinkage",
          "package": "hierarchical-clustering",
          "signature": "CompleteLinkage",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:CompleteLinkage\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:CompleteLinkage\"]"
        },
        "index": {
          "description": "The distance between two clusters and is the maximum distance between an element of and an element of",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "CompleteLinkage",
          "package": "hierarchical-clustering",
          "partial": "Complete Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:CompleteLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method is usually wrongly called \"average linkage\".\n The distance between cluster \u003ccode\u003ea = a1 U a2\u003c/code\u003e (that is, cluster\n \u003ccode\u003ea\u003c/code\u003e was formed by the linkage of clusters \u003ccode\u003ea1\u003c/code\u003e and \u003ccode\u003ea2\u003c/code\u003e) and\n an old cluster \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e(d(a1,b) + d(a2,b)) / 2\u003c/code\u003e.  So when\n clustering two elements to create a cluster, this method is\n the same as UPGMA.  However, in general when joining two\n clusters this method assigns equal weights to \u003ccode\u003ea1\u003c/code\u003e and \u003ccode\u003ea2\u003c/code\u003e,\n while UPGMA assigns weights proportional to the number of\n elements in each cluster.  See, for example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\n \u003ca\u003ehttp://www.cs.tau.ac.il/~rshamir/algmb/00/scribe00/html/lec08/node21.html\u003c/a\u003e,\n which defines the real UPGMA and gives the equation to\n calculate the distance between an old and a new cluster.\n\u003c/li\u003e\u003cli\u003e\n \u003ca\u003ehttp://github.com/JadeFerret/ai4r/blob/master/lib/ai4r/clusterers/average_linkage.rb\u003c/a\u003e,\n code for \"average linkage\" on ai4r library implementing\n what we call here \u003ccode\u003eFakeAverageLinkage\u003c/code\u003e and not UPGMA.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "FakeAverageLinkage",
          "package": "hierarchical-clustering",
          "signature": "FakeAverageLinkage",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:FakeAverageLinkage\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:FakeAverageLinkage\"]"
        },
        "index": {
          "description": "This method is usually wrongly called average linkage The distance between cluster a1 a2 that is cluster was formed by the linkage of clusters a1 and a2 and an old cluster is a1 a2 So when clustering two elements to create cluster this method is the same as UPGMA However in general when joining two clusters this method assigns equal weights to a1 and a2 while UPGMA assigns weights proportional to the number of elements in each cluster See for example http www.cs.tau.ac.il rshamir algmb scribe00 html lec08 node21.html which defines the real UPGMA and gives the equation to calculate the distance between an old and new cluster http github.com JadeFerret ai4r blob master lib ai4r clusterers average linkage.rb code for average linkage on ai4r library implementing what we call here FakeAverageLinkage and not UPGMA",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "FakeAverageLinkage",
          "package": "hierarchical-clustering",
          "partial": "Fake Average Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:FakeAverageLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe leaf contains the item \u003ccode\u003ea\u003c/code\u003e itself.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "Leaf",
          "package": "hierarchical-clustering",
          "signature": "Leaf a",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Dendrogram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:Leaf\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:Leaf\"]"
        },
        "index": {
          "description": "The leaf contains the item itself",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "Leaf",
          "package": "hierarchical-clustering",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distance between two clusters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is the\n \u003cem\u003eminimum\u003c/em\u003e distance between an element of \u003ccode\u003ea\u003c/code\u003e and an element\n of \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "SingleLinkage",
          "package": "hierarchical-clustering",
          "signature": "SingleLinkage",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:SingleLinkage\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:SingleLinkage\"]"
        },
        "index": {
          "description": "The distance between two clusters and is the minimum distance between an element of and an element of",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "SingleLinkage",
          "package": "hierarchical-clustering",
          "partial": "Single Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:SingleLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnweighted Pair Group Method with Arithmetic mean, also\n called \"average linkage\".  The distance between two\n clusters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is the \u003cem\u003earithmetic average\u003c/em\u003e between the\n distances of all elements in \u003ccode\u003ea\u003c/code\u003e to all elements in \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Clustering.Hierarchical.Internal.Types\",\"Data.Clustering.Hierarchical\"]",
          "name": "UPGMA",
          "package": "hierarchical-clustering",
          "signature": "UPGMA",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:UPGMA\",\"http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:UPGMA\"]"
        },
        "index": {
          "description": "Unweighted Pair Group Method with Arithmetic mean also called average linkage The distance between two clusters and is the arithmetic average between the distances of all elements in to all elements in",
          "hierarchy": "Data Clustering Hierarchical Internal Types",
          "module": "Data.Clustering.Hierarchical.Internal.Types",
          "name": "UPGMA",
          "package": "hierarchical-clustering",
          "partial": "UPGMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical-Internal-Types.html#v:UPGMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Clustering.Hierarchical",
          "name": "Hierarchical",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "Hierarchical",
          "package": "hierarchical-clustering",
          "partial": "Hierarchical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for storing hierarchical clusters.  The\n distance between clusters is stored on the branches.\n Distances between leafs are the distances between the elements\n on those leafs, while distances between branches are defined\n by the linkage used (see \u003ccode\u003e\u003ca\u003eLinkage\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "Dendrogram",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Dendrogram",
          "type": "data"
        },
        "index": {
          "description": "Data structure for storing hierarchical clusters The distance between clusters is stored on the branches Distances between leafs are the distances between the elements on those leafs while distances between branches are defined by the linkage used see Linkage",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "Dendrogram",
          "package": "hierarchical-clustering",
          "partial": "Dendrogram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#t:Dendrogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distance is simply a synonym of \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for efficiency.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "Distance",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Distance",
          "type": "type"
        },
        "index": {
          "description": "distance is simply synonym of Double for efficiency",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "Distance",
          "package": "hierarchical-clustering",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe linkage type determines how the distance between\n clusters will be calculated.  These are the linkage types\n currently available on this library.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "Linkage",
          "package": "hierarchical-clustering",
          "source": "src/Data-Clustering-Hierarchical-Internal-Types.html#Linkage",
          "type": "data"
        },
        "index": {
          "description": "The linkage type determines how the distance between clusters will be calculated These are the linkage types currently available on this library",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "Linkage",
          "package": "hierarchical-clustering",
          "partial": "Linkage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#t:Linkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edendro `cutAt` threshold\u003c/code\u003e cuts the dendrogram \u003ccode\u003edendro\u003c/code\u003e at\n all branches which have distances strictly greater than\n \u003ccode\u003ethreshold\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, suppose we have\n\u003c/p\u003e\u003cpre\u003e\n dendro = Branch 0.8\n            (Branch 0.5\n              (Branch 0.2\n                (Leaf 'A')\n                (Leaf 'B'))\n              (Leaf 'C'))\n            (Leaf 'D')\n\u003c/pre\u003e\u003cp\u003eThen:\n\u003c/p\u003e\u003cpre\u003e\n dendro `cutAt` 0.9 == dendro `cutAt` 0.8 == [dendro] -- no changes\n dendro `cutAt` 0.7 == dendro `cutAt` 0.5 == [Branch 0.5 (Branch 0.2 (Leaf 'A') (Leaf 'B')) (Leaf 'C'), Leaf 'D']\n dendro `cutAt` 0.4 == dendro `cutAt` 0.2 == [Branch 0.2 (Leaf 'A') (Leaf 'B'), Leaf 'C', Leaf 'D']\n dendro `cutAt` 0.1 == [Leaf 'A', Leaf 'B', Leaf 'C', Leaf 'D'] -- no branches at all\n\u003c/pre\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "cutAt",
          "package": "hierarchical-clustering",
          "signature": "Dendrogram a -\u003e Distance -\u003e [Dendrogram a]",
          "source": "src/Data-Clustering-Hierarchical.html#cutAt",
          "type": "function"
        },
        "index": {
          "description": "dendro cutAt threshold cuts the dendrogram dendro at all branches which have distances strictly greater than threshold For example suppose we have dendro Branch Branch Branch Leaf Leaf Leaf Leaf Then dendro cutAt dendro cutAt dendro no changes dendro cutAt dendro cutAt Branch Branch Leaf Leaf Leaf Leaf dendro cutAt dendro cutAt Branch Leaf Leaf Leaf Leaf dendro cutAt Leaf Leaf Leaf Leaf no branches at all",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "cutAt",
          "normalized": "Dendrogram a-\u003eDistance-\u003e[Dendrogram a]",
          "package": "hierarchical-clustering",
          "partial": "At",
          "signature": "Dendrogram a-\u003eDistance-\u003e[Dendrogram a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:cutAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates a complete, rooted dendrogram for a list of items\n and a linkage type.  The following are the time and space\n complexities for each linkage:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSingleLinkage\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003cem\u003eO(n^2)\u003c/em\u003e time and \u003cem\u003eO(n)\u003c/em\u003e space, using the\n   SLINK algorithm.  This algorithm is optimal in both space\n   and time and gives the same answer as the naive algorithm\n   using a distance matrix.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eCompleteLinkage\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space, using\n   the naive algorithm with a distance matrix.  Use \u003ccode\u003e\u003ca\u003eCLINK\u003c/a\u003e\u003c/code\u003e if\n   you need more performance.\n\u003c/dd\u003e\u003cdt\u003eComplete linkage with \u003ccode\u003e\u003ca\u003eCLINK\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003cem\u003eO(n^2)\u003c/em\u003e time and \u003cem\u003eO(n)\u003c/em\u003e\n   space, using the CLINK algorithm.  Note that this algorithm\n   doesn't always give the same answer as the naive algorithm\n   using a distance matrix, but it's much faster.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eUPGMA\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space, using the naive\n   algorithm with a distance matrix.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eFakeAverageLinkage\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003cem\u003eO(n^3)\u003c/em\u003e time and \u003cem\u003eO(n^2)\u003c/em\u003e space, using\n the naive algorithm with a distance matrix.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "dendrogram",
          "package": "hierarchical-clustering",
          "signature": "Linkage-\u003e [a]-\u003e (a -\u003e a -\u003e Distance)-\u003e Dendrogram a",
          "type": "function"
        },
        "index": {
          "description": "Calculates complete rooted dendrogram for list of items and linkage type The following are the time and space complexities for each linkage SingleLinkage time and space using the SLINK algorithm This algorithm is optimal in both space and time and gives the same answer as the naive algorithm using distance matrix CompleteLinkage time and space using the naive algorithm with distance matrix Use CLINK if you need more performance Complete linkage with CLINK time and space using the CLINK algorithm Note that this algorithm doesn always give the same answer as the naive algorithm using distance matrix but it much faster UPGMA time and space using the naive algorithm with distance matrix FakeAverageLinkage time and space using the naive algorithm with distance matrix",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "dendrogram",
          "normalized": "Linkage-\u003e[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "package": "hierarchical-clustering",
          "signature": "Linkage-\u003e[a]-\u003e(a-\u003ea-\u003eDistance)-\u003eDendrogram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:dendrogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of elements in a dendrogram.\n\u003c/p\u003e",
          "module": "Data.Clustering.Hierarchical",
          "name": "elements",
          "package": "hierarchical-clustering",
          "signature": "Dendrogram a -\u003e [a]",
          "source": "src/Data-Clustering-Hierarchical.html#elements",
          "type": "function"
        },
        "index": {
          "description": "List of elements in dendrogram",
          "hierarchy": "Data Clustering Hierarchical",
          "module": "Data.Clustering.Hierarchical",
          "name": "elements",
          "normalized": "Dendrogram a-\u003e[a]",
          "package": "hierarchical-clustering",
          "signature": "Dendrogram a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-clustering/docs/Data-Clustering-Hierarchical.html#v:elements"
      }
    }
  ]
]