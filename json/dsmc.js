[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParticle tracking for spatial grid for DSMC.\n\u003c/p\u003e\u003cp\u003eThis module is used to sort (classify) particles into ordered vector\nof cells for collision step or macroscopic parameter sampling. We do\nnot provide any special cell datatype since it varies which cell data\nis required on every step, so only particles in every cell are stored.\n\u003c/p\u003e\u003cp\u003eMonad is provided for storing grid options during the whole program\nrun.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Cells.html",
        "fct-type": "module",
        "title": "Cells"
      },
      "index": {
        "description": "Particle tracking for spatial grid for DSMC This module is used to sort classify particles into ordered vector of cells for collision step or macroscopic parameter sampling We do not provide any special cell datatype since it varies which cell data is required on every step so only particles in every cell are stored Monad is provided for storing grid options during the whole program run",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "Cells",
        "normalized": "",
        "package": "dsmc",
        "partial": "Cells",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:CellContents",
      "description": {
        "fct-descr": "\u003cp\u003eCell contents with particles.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Cells.html#CellContents",
        "fct-type": "type",
        "title": "CellContents"
      },
      "index": {
        "description": "Cell contents with particles",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "CellContents",
        "normalized": "",
        "package": "dsmc",
        "partial": "Cell Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Cells",
      "description": {
        "fct-descr": "\u003cp\u003eParticles sorted by cells.\n\u003c/p\u003e\u003cp\u003eWe store contents of all cells in a single densely packed unboxed\n vector. Additionally cell count, cell starting positions in vector\n (\u003ccode\u003es\u003c/code\u003e) and cell sizes (\u003ccode\u003el\u003c/code\u003e) are stored.\n\u003c/p\u003e\u003cpre\u003e   s1         s2    s3\n   |          |     |\n {[ooooooooo][oooo][oooooo]...}\n     cell1     c2     c3\n     l1=9      l2=4   l3=6\n\u003c/pre\u003e\u003cp\u003eNote that any extra data about cells (like position or volume)\n should be maintained separately from cell contents. We use this\n approach because collision sampling and macroscopic parameter\n calculation require different\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Cells.html#Cells",
        "fct-type": "data",
        "title": "Cells"
      },
      "index": {
        "description": "Particles sorted by cells We store contents of all cells in single densely packed unboxed vector Additionally cell count cell starting positions in vector and cell sizes are stored s1 s2 s3 ooooooooo oooo oooooo cell1 c2 c3 l1 l2 l3 Note that any extra data about cells like position or volume should be maintained separately from cell contents We use this approach because collision sampling and macroscopic parameter calculation require different",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "Cells",
        "normalized": "",
        "package": "dsmc",
        "partial": "Cells",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Classifier",
      "description": {
        "fct-descr": "\u003cp\u003eAssuming there's a linear ordering on all cells, Classifier must\n yield index of cell for given particle.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Cells.html#Classifier",
        "fct-type": "type",
        "title": "Classifier"
      },
      "index": {
        "description": "Assuming there linear ordering on all cells Classifier must yield index of cell for given particle",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "Classifier",
        "normalized": "",
        "package": "dsmc",
        "partial": "Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Grid",
      "description": {
        "fct-descr": "\u003cp\u003eDomain divided in uniform grid with given steps by X, Y and Z\n axes.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Cells.html#Grid",
        "fct-type": "data",
        "title": "Grid"
      },
      "index": {
        "description": "Domain divided in uniform grid with given steps by and axes",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "Grid",
        "normalized": "",
        "package": "dsmc",
        "partial": "Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:GridMonad",
      "description": {
        "fct-descr": "\u003cp\u003eMonad used to keep grid options and cell volumes. Due to the\n low-level \u003ccode\u003e\u003ca\u003eCells\u003c/a\u003e\u003c/code\u003e structure we use to store particles sorted in\n cells, things may break badly if improper/inconsistent\n classifier/indexer parameters are used with cells structure. It\n also helps to maintain precalculated cell volumes. See\n \u003ccode\u003eMacroSamplingMonad\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Cells.html#GridMonad",
        "fct-type": "type",
        "title": "GridMonad"
      },
      "index": {
        "description": "Monad used to keep grid options and cell volumes Due to the low-level Cells structure we use to store particles sorted in cells things may break badly if improper inconsistent classifier indexer parameters are used with cells structure It also helps to maintain precalculated cell volumes See MacroSamplingMonad",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "GridMonad",
        "normalized": "",
        "package": "dsmc",
        "partial": "Grid Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:GridWares",
      "description": {
        "fct-descr": "\u003cp\u003eData stored in \u003ccode\u003e\u003ca\u003eGridMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Cells.html#GridWares",
        "fct-type": "data",
        "title": "GridWares"
      },
      "index": {
        "description": "Data stored in GridMonad",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "GridWares",
        "normalized": "",
        "package": "dsmc",
        "partial": "Grid Wares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:GridWares",
      "description": {
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "GridWares",
        "fct-source": "src/DSMC-Cells.html#GridWares",
        "fct-type": "function",
        "title": "GridWares"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "GridWares",
        "normalized": "",
        "package": "dsmc",
        "partial": "Grid Wares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:UniformGrid",
      "description": {
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "UniformGrid !Domain !Double !Double !Double",
        "fct-source": "src/DSMC-Cells.html#Grid",
        "fct-type": "function",
        "title": "UniformGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "UniformGrid",
        "normalized": "",
        "package": "dsmc",
        "partial": "Uniform Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:cellMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over cell indices and contents of every cell.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "(Int -\u003e Maybe CellContents -\u003e a) -\u003e Cells -\u003e Array D DIM1 a",
        "fct-source": "src/DSMC-Cells.html#cellMap",
        "fct-type": "function",
        "title": "cellMap"
      },
      "index": {
        "description": "Map function over cell indices and contents of every cell",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "cellMap",
        "normalized": "(Int-\u003eMaybe CellContents-\u003ea)-\u003eCells-\u003eArray D DIM a",
        "package": "dsmc",
        "partial": "Map",
        "signature": "(Int-\u003eMaybe CellContents-\u003ea)-\u003eCells-\u003eArray D DIM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:cellVolumes",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate volumes of grid cells wrt body within the domain. For\n every cell, \u003ccode\u003e\u003ca\u003efreeVolume\u003c/a\u003e\u003c/code\u003e is called with the domain of cell.\n Calculation is performed in parallel.\n\u003c/p\u003e\u003cp\u003eSince our grid are static, this is usually done only once when the\n grid is first defined. We throw away the used seeds.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e Vector Double",
        "fct-type": "function",
        "title": "cellVolumes"
      },
      "index": {
        "description": "Calculate volumes of grid cells wrt body within the domain For every cell freeVolume is called with the domain of cell Calculation is performed in parallel Since our grid are static this is usually done only once when the grid is first defined We throw away the used seeds",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "cellVolumes",
        "normalized": "ParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eVector Double",
        "package": "dsmc",
        "partial": "Volumes",
        "signature": "ParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:classifier",
      "description": {
        "fct-descr": "\u003cp\u003eCell count and classifier function.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "(Int, Classifier)",
        "fct-source": "src/DSMC-Cells.html#GridWares",
        "fct-type": "function",
        "title": "classifier"
      },
      "index": {
        "description": "Cell count and classifier function",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "classifier",
        "normalized": "(Int,Classifier)",
        "package": "dsmc",
        "partial": "",
        "signature": "(Int,Classifier)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:classifyParticles",
      "description": {
        "fct-descr": "\u003cp\u003eClassify particle ensemble into \u003ccode\u003eN\u003c/code\u003e cells using the classifier\n function.\n\u003c/p\u003e\u003cp\u003eClassifier's extent must match \u003ccode\u003eN\u003c/code\u003e, yielding numbers between \u003ccode\u003e0\u003c/code\u003e\n and \u003ccode\u003eN-1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "(Int, Classifier)-\u003e Ensemble-\u003e Cells",
        "fct-type": "function",
        "title": "classifyParticles"
      },
      "index": {
        "description": "Classify particle ensemble into cells using the classifier function Classifier extent must match yielding numbers between and N-1",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "classifyParticles",
        "normalized": "(Int,Classifier)-\u003eEnsemble-\u003eCells",
        "package": "dsmc",
        "partial": "Particles",
        "signature": "(Int,Classifier)-\u003eEnsemble-\u003eCells"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:getCell",
      "description": {
        "fct-descr": "\u003cp\u003eFetch contents of n-th cell.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "Cells-\u003e Int-\u003e Maybe CellContents",
        "fct-type": "function",
        "title": "getCell"
      },
      "index": {
        "description": "Fetch contents of n-th cell",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "getCell",
        "normalized": "Cells-\u003eInt-\u003eMaybe CellContents",
        "package": "dsmc",
        "partial": "Cell",
        "signature": "Cells-\u003eInt-\u003eMaybe CellContents"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:indexer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "Int -\u003e Point",
        "fct-source": "src/DSMC-Cells.html#GridWares",
        "fct-type": "function",
        "title": "indexer"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "indexer",
        "normalized": "Int-\u003ePoint",
        "package": "dsmc",
        "partial": "",
        "signature": "Int-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:makeUniformClassifier",
      "description": {
        "fct-descr": "\u003cp\u003eReturn grid cell count and classifier for a grid.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "Grid -\u003e (Int, Classifier)",
        "fct-source": "src/DSMC-Cells.html#makeUniformClassifier",
        "fct-type": "function",
        "title": "makeUniformClassifier"
      },
      "index": {
        "description": "Return grid cell count and classifier for grid",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "makeUniformClassifier",
        "normalized": "Grid-\u003e(Int,Classifier)",
        "package": "dsmc",
        "partial": "Uniform Classifier",
        "signature": "Grid-\u003e(Int,Classifier)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:makeUniformIndexer",
      "description": {
        "fct-descr": "\u003cp\u003eReturn indexer for a grid.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "Grid -\u003e Indexer",
        "fct-source": "src/DSMC-Cells.html#makeUniformIndexer",
        "fct-type": "function",
        "title": "makeUniformIndexer"
      },
      "index": {
        "description": "Return indexer for grid",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "makeUniformIndexer",
        "normalized": "Grid-\u003eIndexer",
        "package": "dsmc",
        "partial": "Uniform Indexer",
        "signature": "Grid-\u003eIndexer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:runGrid",
      "description": {
        "fct-descr": "\u003cp\u003eRun action using spatial subdivision.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "GridMonad a-\u003e ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e DSMCRootMonad a",
        "fct-type": "function",
        "title": "runGrid"
      },
      "index": {
        "description": "Run action using spatial subdivision",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "runGrid",
        "normalized": "GridMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eDSMCRootMonad a",
        "package": "dsmc",
        "partial": "Grid",
        "signature": "GridMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eDSMCRootMonad a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:volumes",
      "description": {
        "fct-descr": "\u003cp\u003eVector of cell volumes.\n\u003c/p\u003e",
        "fct-module": "DSMC.Cells",
        "fct-package": "dsmc",
        "fct-signature": "!(Vector Double)",
        "fct-source": "src/DSMC-Cells.html#GridWares",
        "fct-type": "function",
        "title": "volumes"
      },
      "index": {
        "description": "Vector of cell volumes",
        "hierarchy": "DSMC Cells",
        "module": "DSMC.Cells",
        "name": "volumes",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDomain operations: defining domains; free flow boundary conditions &\nclipping for DSMC steps.\n\u003c/p\u003e\u003cp\u003ePRNG required to sample molecular velocities implies monadic interface\nfor most of operations. We use functions specifically typed for \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Domain.html",
        "fct-type": "module",
        "title": "Domain"
      },
      "index": {
        "description": "Domain operations defining domains free flow boundary conditions clipping for DSMC steps PRNG required to sample molecular velocities implies monadic interface for most of operations We use functions specifically typed for ST",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "Domain",
        "normalized": "",
        "package": "dsmc",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#t:Domain",
      "description": {
        "fct-descr": "\u003cp\u003eDomain in which particles are spawned or system evolution is\n simulated.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Domain.html#Domain",
        "fct-type": "data",
        "title": "Domain"
      },
      "index": {
        "description": "Domain in which particles are spawned or system evolution is simulated",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "Domain",
        "normalized": "",
        "package": "dsmc",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#t:DomainSeeds",
      "description": {
        "fct-descr": "\u003cp\u003ePRNG seeds used by particle generators.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Domain.html#DomainSeeds",
        "fct-type": "type",
        "title": "DomainSeeds"
      },
      "index": {
        "description": "PRNG seeds used by particle generators",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "DomainSeeds",
        "normalized": "",
        "package": "dsmc",
        "partial": "Domain Seeds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:Domain",
      "description": {
        "fct-descr": "\u003cp\u003eRectangular volume, given by min/max value on every\n dimension.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/DSMC-Domain.html#Domain",
        "fct-type": "function",
        "title": "Domain"
      },
      "index": {
        "description": "Rectangular volume given by min max value on every dimension",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "Domain",
        "normalized": "",
        "package": "dsmc",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:clipToDomain",
      "description": {
        "fct-descr": "\u003cp\u003eFilter out particles which are outside of the domain.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain -\u003e Ensemble -\u003e Ensemble",
        "fct-source": "src/DSMC-Domain.html#clipToDomain",
        "fct-type": "function",
        "title": "clipToDomain"
      },
      "index": {
        "description": "Filter out particles which are outside of the domain",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "clipToDomain",
        "normalized": "Domain-\u003eEnsemble-\u003eEnsemble",
        "package": "dsmc",
        "partial": "To Domain",
        "signature": "Domain-\u003eEnsemble-\u003eEnsemble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:freeVolume",
      "description": {
        "fct-descr": "\u003cp\u003eVolume of a domain unoccupied by a given body, in m^3.\n\u003c/p\u003e\u003cp\u003eWe use Monte Carlo method to calculate the approximate body volume\n and then subtract it from the overall domain volume.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain-\u003e Body-\u003e Int-\u003e GenST s-\u003e ST s Double",
        "fct-type": "function",
        "title": "freeVolume"
      },
      "index": {
        "description": "Volume of domain unoccupied by given body in We use Monte Carlo method to calculate the approximate body volume and then subtract it from the overall domain volume",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "freeVolume",
        "normalized": "Domain-\u003eBody-\u003eInt-\u003eGenST a-\u003eST a Double",
        "package": "dsmc",
        "partial": "Volume",
        "signature": "Domain-\u003eBody-\u003eInt-\u003eGenST s-\u003eST s Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:freeVolumes",
      "description": {
        "fct-descr": "\u003cp\u003eSequential \u003ccode\u003e\u003ca\u003efreeVolume\u003c/a\u003e\u003c/code\u003e for a vector of domains.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Int -\u003e GenST s -\u003e Vector Domain -\u003e ST s (Vector Double)",
        "fct-source": "src/DSMC-Domain.html#freeVolumes",
        "fct-type": "function",
        "title": "freeVolumes"
      },
      "index": {
        "description": "Sequential freeVolume for vector of domains",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "freeVolumes",
        "normalized": "Body-\u003eInt-\u003eGenST a-\u003eVector Domain-\u003eST a(Vector Double)",
        "package": "dsmc",
        "partial": "Volumes",
        "signature": "Body-\u003eInt-\u003eGenST s-\u003eVector Domain-\u003eST s(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:getCenter",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate geometric center of a domain.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain -\u003e Point",
        "fct-source": "src/DSMC-Domain.html#getCenter",
        "fct-type": "function",
        "title": "getCenter"
      },
      "index": {
        "description": "Calculate geometric center of domain",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "getCenter",
        "normalized": "Domain-\u003ePoint",
        "package": "dsmc",
        "partial": "Center",
        "signature": "Domain-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:getDimensions",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate width, length and height of a domain, which are\n dimensions measured by x, y and z axes, respectively.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain -\u003e (Double, Double, Double)",
        "fct-source": "src/DSMC-Domain.html#getDimensions",
        "fct-type": "function",
        "title": "getDimensions"
      },
      "index": {
        "description": "Calculate width length and height of domain which are dimensions measured by and axes respectively",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "getDimensions",
        "normalized": "Domain-\u003e(Double,Double,Double)",
        "package": "dsmc",
        "partial": "Dimensions",
        "signature": "Domain-\u003e(Double,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:initializeParticles",
      "description": {
        "fct-descr": "\u003cp\u003eFill the domain with particles for given flow parameters.\n Particles inside the body are removed.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Domain -\u003e Flow -\u003e Body -\u003e Seed -\u003e (Ensemble, Seed)",
        "fct-source": "src/DSMC-Domain.html#initializeParticles",
        "fct-type": "function",
        "title": "initializeParticles"
      },
      "index": {
        "description": "Fill the domain with particles for given flow parameters Particles inside the body are removed",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "initializeParticles",
        "normalized": "Domain-\u003eFlow-\u003eBody-\u003eSeed-\u003e(Ensemble,Seed)",
        "package": "dsmc",
        "partial": "Particles",
        "signature": "Domain-\u003eFlow-\u003eBody-\u003eSeed-\u003e(Ensemble,Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:makeDomain",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a rectangular domain with center in the given point and\n dimensions.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "Point-\u003e Double-\u003e Double-\u003e Double-\u003e Domain",
        "fct-type": "function",
        "title": "makeDomain"
      },
      "index": {
        "description": "Create rectangular domain with center in the given point and dimensions",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "makeDomain",
        "normalized": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDomain",
        "package": "dsmc",
        "partial": "Domain",
        "signature": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDomain"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:openBoundaryInjection",
      "description": {
        "fct-descr": "\u003cp\u003eSample new particles in 6 interface domains along each side of\n rectangular simulation domain and add them to existing ensemble.\n\u003c/p\u003e\u003cp\u003eThis function implements open boundary condition for\n three-dimensional simulation domain.\n\u003c/p\u003e\u003cp\u003eInterface domains are built on faces of simulation domain using\n extrusion along the outward normal of the face.\n\u003c/p\u003e\u003cp\u003eIn 2D projection:\n\u003c/p\u003e\u003cpre\u003e          +-----------------+\n          |    Interface1   |\n       +--+-----------------+--+\n       |I3|    Simulation   |I4|\n       |  |      domain     |  |\n       +--+-----------------+--+\n          |        I2       |\n          +-----------------+\n\u003c/pre\u003e\u003cp\u003eParticles in every interface domain are spawned in parallel using\n Strategies.\n\u003c/p\u003e",
        "fct-module": "DSMC.Domain",
        "fct-package": "dsmc",
        "fct-signature": "DomainSeeds-\u003e Domain-\u003e Double-\u003e Flow-\u003e Ensemble-\u003e (Ensemble, DomainSeeds)",
        "fct-type": "function",
        "title": "openBoundaryInjection"
      },
      "index": {
        "description": "Sample new particles in interface domains along each side of rectangular simulation domain and add them to existing ensemble This function implements open boundary condition for three-dimensional simulation domain Interface domains are built on faces of simulation domain using extrusion along the outward normal of the face In projection Interface1 I3 Simulation I4 domain I2 Particles in every interface domain are spawned in parallel using Strategies",
        "hierarchy": "DSMC Domain",
        "module": "DSMC.Domain",
        "name": "openBoundaryInjection",
        "normalized": "DomainSeeds-\u003eDomain-\u003eDouble-\u003eFlow-\u003eEnsemble-\u003e(Ensemble,DomainSeeds)",
        "package": "dsmc",
        "partial": "Boundary Injection",
        "signature": "DomainSeeds-\u003eDomain-\u003eDouble-\u003eFlow-\u003eEnsemble-\u003e(Ensemble,DomainSeeds)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMacroscopic parameters calculation.\n\u003c/p\u003e\u003cp\u003eWe use regular spatial grid and time averaging for sampling. Sampling\nshould start after particle system has reached steady state. Samples\nare then collected in each cell for a certain number of time steps.\n\u003c/p\u003e\u003cp\u003eSampling is performed in \u003ccode\u003e\u003ca\u003eMacroSamplingMonad\u003c/a\u003e\u003c/code\u003e to ensure consistency of\naveraging process. During sampling, basic parameters are calculated\nlike number of molecules per cell or mean square of thermal velocity.\nAfter sampling these are used to derive final (intensive) parameters\nlike number density or temperature.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Macroscopic.html",
        "fct-type": "module",
        "title": "Macroscopic"
      },
      "index": {
        "description": "Macroscopic parameters calculation We use regular spatial grid and time averaging for sampling Sampling should start after particle system has reached steady state Samples are then collected in each cell for certain number of time steps Sampling is performed in MacroSamplingMonad to ensure consistency of averaging process During sampling basic parameters are calculated like number of molecules per cell or mean square of thermal velocity After sampling these are used to derive final intensive parameters like number density or temperature",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "Macroscopic",
        "normalized": "",
        "package": "dsmc",
        "partial": "Macroscopic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:BasicMacroParameters",
      "description": {
        "fct-descr": "\u003cp\u003eBasic macroscopic parameters calculated in every cell: particle\n count, mean absolute velocity, mean square of thermal velocity.\n\u003c/p\u003e\u003cp\u003eParticle count is non-integer because of averaging.\n\u003c/p\u003e\u003cp\u003eThese are then post-processed into number density, flow velocity,\n pressure and translational temperature.\n\u003c/p\u003e\u003cp\u003eNote the lack of root on thermal velocity!\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Macroscopic.html#BasicMacroParameters",
        "fct-type": "type",
        "title": "BasicMacroParameters"
      },
      "index": {
        "description": "Basic macroscopic parameters calculated in every cell particle count mean absolute velocity mean square of thermal velocity Particle count is non-integer because of averaging These are then post-processed into number density flow velocity pressure and translational temperature Note the lack of root on thermal velocity",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "BasicMacroParameters",
        "normalized": "",
        "package": "dsmc",
        "partial": "Basic Macro Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:IntensiveMacroParameters",
      "description": {
        "fct-descr": "\u003cp\u003eIntensive macroscopic parameters available after averaging has\n completed. These are: number density, absolute velocity, pressure\n and translational temperature.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Macroscopic.html#IntensiveMacroParameters",
        "fct-type": "type",
        "title": "IntensiveMacroParameters"
      },
      "index": {
        "description": "Intensive macroscopic parameters available after averaging has completed These are number density absolute velocity pressure and translational temperature",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "IntensiveMacroParameters",
        "normalized": "",
        "package": "dsmc",
        "partial": "Intensive Macro Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroField",
      "description": {
        "fct-descr": "\u003cp\u003eArray of central points of grid cells with averaged macroscopic\n parameters attached to every point.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Macroscopic.html#MacroField",
        "fct-type": "type",
        "title": "MacroField"
      },
      "index": {
        "description": "Array of central points of grid cells with averaged macroscopic parameters attached to every point",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "MacroField",
        "normalized": "",
        "package": "dsmc",
        "partial": "Macro Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroSamples",
      "description": {
        "fct-descr": "\u003cp\u003eVector which stores averaged macroscropic parameters in each\n cell.\n\u003c/p\u003e\u003cp\u003eIf samples are collected for M iterations, then this vector is\n built as a sum of vectors \u003ccode\u003eV1, .. VM\u003c/code\u003e, where \u003ccode\u003eVi\u003c/code\u003e is vector of\n parameters sampled on \u003ccode\u003ei\u003c/code\u003e-th time step divided by \u003ccode\u003eM\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Macroscopic.html#MacroSamples",
        "fct-type": "type",
        "title": "MacroSamples"
      },
      "index": {
        "description": "Vector which stores averaged macroscropic parameters in each cell If samples are collected for iterations then this vector is built as sum of vectors V1 VM where Vi is vector of parameters sampled on th time step divided by",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "MacroSamples",
        "normalized": "",
        "package": "dsmc",
        "partial": "Macro Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroSamplingMonad",
      "description": {
        "fct-descr": "\u003cp\u003eMonad which keeps track of sampling process data and stores\n options of macroscopic sampling.\n\u003c/p\u003e\u003cp\u003eGridMonad is used to ensure that only safe values for cell count\n and classifier are used in \u003ccode\u003e\u003ca\u003eupdateSamples\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eaverageSamples\u003c/code\u003e\n (that may otherwise cause unbounded access errors). Note that\n steady condition is not handled by this monad (instead, caller code\n should decide when to start averaging).\n\u003c/p\u003e\u003cp\u003eInner Reader Monad stores averaging steps setting.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Macroscopic.html#MacroSamplingMonad",
        "fct-type": "type",
        "title": "MacroSamplingMonad"
      },
      "index": {
        "description": "Monad which keeps track of sampling process data and stores options of macroscopic sampling GridMonad is used to ensure that only safe values for cell count and classifier are used in updateSamples and averageSamples that may otherwise cause unbounded access errors Note that steady condition is not handled by this monad instead caller code should decide when to start averaging Inner Reader Monad stores averaging steps setting",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "MacroSamplingMonad",
        "normalized": "",
        "package": "dsmc",
        "partial": "Macro Sampling Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:SamplingState",
      "description": {
        "fct-descr": "\u003cp\u003eState of sampling process.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Macroscopic.html#SamplingState",
        "fct-type": "data",
        "title": "SamplingState"
      },
      "index": {
        "description": "State of sampling process",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "SamplingState",
        "normalized": "",
        "package": "dsmc",
        "partial": "Sampling State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:Complete",
      "description": {
        "fct-descr": "\u003cp\u003eAveraging is complete, use \u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e to\n unload the samples.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "Complete MacroSamples",
        "fct-source": "src/DSMC-Macroscopic.html#SamplingState",
        "fct-type": "function",
        "title": "Complete"
      },
      "index": {
        "description": "Averaging is complete use getField to unload the samples",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "Complete",
        "normalized": "",
        "package": "dsmc",
        "partial": "Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:Incomplete",
      "description": {
        "fct-descr": "\u003cp\u003eSampling is in progress, not enough samples\n yet. Integer field indicates how many steps are\n left.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "Incomplete Int MacroSamples",
        "fct-source": "src/DSMC-Macroscopic.html#SamplingState",
        "fct-type": "function",
        "title": "Incomplete"
      },
      "index": {
        "description": "Sampling is in progress not enough samples yet Integer field indicates how many steps are left",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "Incomplete",
        "normalized": "",
        "package": "dsmc",
        "partial": "Incomplete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eSampling has not started yet.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "None",
        "fct-source": "src/DSMC-Macroscopic.html#SamplingState",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "Sampling has not started yet",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "None",
        "normalized": "",
        "package": "dsmc",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eFetch macroscopic field of intensive parameters if averaging is\n complete.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "Double-\u003e Double-\u003e MacroSamplingMonad (Maybe MacroField)",
        "fct-type": "function",
        "title": "getField"
      },
      "index": {
        "description": "Fetch macroscopic field of intensive parameters if averaging is complete",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "getField",
        "normalized": "Double-\u003eDouble-\u003eMacroSamplingMonad(Maybe MacroField)",
        "package": "dsmc",
        "partial": "Field",
        "signature": "Double-\u003eDouble-\u003eMacroSamplingMonad(Maybe MacroField)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:runMacroSampling",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eMacroSamplingMonad\u003c/a\u003e\u003c/code\u003e action with given sampling options and\n return final \u003ccode\u003e\u003ca\u003eComplete\u003c/a\u003e\u003c/code\u003e state with macroscopic samples.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "MacroSamplingMonad r-\u003e ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e Int-\u003e DSMCRootMonad (r, SamplingState)",
        "fct-type": "function",
        "title": "runMacroSampling"
      },
      "index": {
        "description": "Run MacroSamplingMonad action with given sampling options and return final Complete state with macroscopic samples",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "runMacroSampling",
        "normalized": "MacroSamplingMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eInt-\u003eDSMCRootMonad(a,SamplingState)",
        "package": "dsmc",
        "partial": "Macro Sampling",
        "signature": "MacroSamplingMonad r-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eInt-\u003eDSMCRootMonad(r,SamplingState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:updateSamples",
      "description": {
        "fct-descr": "\u003cp\u003eGather samples from ensemble. Return True if sampling is\n finished, False otherwise.\n\u003c/p\u003e",
        "fct-module": "DSMC.Macroscopic",
        "fct-package": "dsmc",
        "fct-signature": "Ensemble -\u003e MacroSamplingMonad Bool",
        "fct-source": "src/DSMC-Macroscopic.html#updateSamples",
        "fct-type": "function",
        "title": "updateSamples"
      },
      "index": {
        "description": "Gather samples from ensemble Return True if sampling is finished False otherwise",
        "hierarchy": "DSMC Macroscopic",
        "module": "DSMC.Macroscopic",
        "name": "updateSamples",
        "normalized": "Ensemble-\u003eMacroSamplingMonad Bool",
        "package": "dsmc",
        "partial": "Samples",
        "signature": "Ensemble-\u003eMacroSamplingMonad Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Motion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollisionless motion.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Motion",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Motion.html",
        "fct-type": "module",
        "title": "Motion"
      },
      "index": {
        "description": "Collisionless motion",
        "hierarchy": "DSMC Motion",
        "module": "DSMC.Motion",
        "name": "Motion",
        "normalized": "",
        "package": "dsmc",
        "partial": "Motion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Motion.html#v:motion",
      "description": {
        "fct-descr": "\u003cp\u003eCollisionless motion step.\n\u003c/p\u003e",
        "fct-module": "DSMC.Motion",
        "fct-package": "dsmc",
        "fct-signature": "ParallelSeeds -\u003e Body -\u003e Time -\u003e Surface -\u003e Ensemble -\u003e (Ensemble, ParallelSeeds)",
        "fct-source": "src/DSMC-Motion.html#motion",
        "fct-type": "function",
        "title": "motion"
      },
      "index": {
        "description": "Collisionless motion step",
        "hierarchy": "DSMC Motion",
        "module": "DSMC.Motion",
        "name": "motion",
        "normalized": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)",
        "package": "dsmc",
        "partial": "",
        "signature": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParticles, ensembles, flow parameters.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Particles.html",
        "fct-type": "module",
        "title": "Particles"
      },
      "index": {
        "description": "Particles ensembles flow parameters",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "Particles",
        "normalized": "",
        "package": "dsmc",
        "partial": "Particles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Ensemble",
      "description": {
        "fct-descr": "\u003cp\u003eRepa array of particles.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Particles.html#Ensemble",
        "fct-type": "type",
        "title": "Ensemble"
      },
      "index": {
        "description": "Repa array of particles",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "Ensemble",
        "normalized": "",
        "package": "dsmc",
        "partial": "Ensemble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Flow",
      "description": {
        "fct-descr": "\u003cp\u003eFlow with given concentration, temperature, mass of molecule and\n macroscopic velocity.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "data",
        "title": "Flow"
      },
      "index": {
        "description": "Flow with given concentration temperature mass of molecule and macroscopic velocity",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "Flow",
        "normalized": "",
        "package": "dsmc",
        "partial": "Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Particle",
      "description": {
        "fct-descr": "\u003cp\u003eGas particle with position and velocity.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Particles.html#Particle",
        "fct-type": "type",
        "title": "Particle"
      },
      "index": {
        "description": "Gas particle with position and velocity",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "Particle",
        "normalized": "",
        "package": "dsmc",
        "partial": "Particle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:Flow",
      "description": {
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Flow",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "Flow"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "Flow",
        "normalized": "",
        "package": "dsmc",
        "partial": "Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:concentration",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "concentration"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "concentration",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:emptyEnsemble",
      "description": {
        "fct-descr": "\u003cp\u003eEnsemble with zero particles in it.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Ensemble",
        "fct-source": "src/DSMC-Particles.html#emptyEnsemble",
        "fct-type": "function",
        "title": "emptyEnsemble"
      },
      "index": {
        "description": "Ensemble with zero particles in it",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "emptyEnsemble",
        "normalized": "",
        "package": "dsmc",
        "partial": "Ensemble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:ensembleSize",
      "description": {
        "fct-descr": "\u003cp\u003eAmount of particles in an ensemble.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Ensemble -\u003e Int",
        "fct-source": "src/DSMC-Particles.html#ensembleSize",
        "fct-type": "function",
        "title": "ensembleSize"
      },
      "index": {
        "description": "Amount of particles in an ensemble",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "ensembleSize",
        "normalized": "Ensemble-\u003eInt",
        "package": "dsmc",
        "partial": "Size",
        "signature": "Ensemble-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:filterEnsemble",
      "description": {
        "fct-descr": "\u003cp\u003eFilter out those particles which do not satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "(Particle -\u003e Bool) -\u003e Ensemble -\u003e Ensemble",
        "fct-source": "src/DSMC-Particles.html#filterEnsemble",
        "fct-type": "function",
        "title": "filterEnsemble"
      },
      "index": {
        "description": "Filter out those particles which do not satisfy the predicate",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "filterEnsemble",
        "normalized": "(Particle-\u003eBool)-\u003eEnsemble-\u003eEnsemble",
        "package": "dsmc",
        "partial": "Ensemble",
        "signature": "(Particle-\u003eBool)-\u003eEnsemble-\u003eEnsemble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:mass",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "mass"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "mass",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:modelConcentration",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate model concentration to simulate real flow concentration\n wrt statistical weight of single particle as set in flow options.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Flow -\u003e Double",
        "fct-source": "src/DSMC-Particles.html#modelConcentration",
        "fct-type": "function",
        "title": "modelConcentration"
      },
      "index": {
        "description": "Calculate model concentration to simulate real flow concentration wrt statistical weight of single particle as set in flow options",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "modelConcentration",
        "normalized": "Flow-\u003eDouble",
        "package": "dsmc",
        "partial": "Concentration",
        "signature": "Flow-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:move",
      "description": {
        "fct-descr": "\u003cp\u003eLinearly move particle for t time and update its position.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Time -\u003e Particle -\u003e Particle",
        "fct-source": "src/DSMC-Particles.html#move",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "Linearly move particle for time and update its position",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "move",
        "normalized": "Time-\u003eParticle-\u003eParticle",
        "package": "dsmc",
        "partial": "",
        "signature": "Time-\u003eParticle-\u003eParticle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:printEnsemble",
      "description": {
        "fct-descr": "\u003cp\u003ePrint particles, one per row, using the format:\n\u003c/p\u003e\u003cpre\u003e x y z u v w\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ex y z\u003c/code\u003e are position coordinates and \u003ccode\u003eu v w\u003c/code\u003e are velocity\n components. This is handy for debugging purposes.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "Ensemble -\u003e IO ()",
        "fct-source": "src/DSMC-Particles.html#printEnsemble",
        "fct-type": "function",
        "title": "printEnsemble"
      },
      "index": {
        "description": "Print particles one per row using the format where are position coordinates and are velocity components This is handy for debugging purposes",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "printEnsemble",
        "normalized": "Ensemble-\u003eIO()",
        "package": "dsmc",
        "partial": "Ensemble",
        "signature": "Ensemble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:statWeight",
      "description": {
        "fct-descr": "\u003cp\u003eHow many real particles a single simulator\n represents.\n\u003c/p\u003e",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "statWeight"
      },
      "index": {
        "description": "How many real particles single simulator represents",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "statWeight",
        "normalized": "",
        "package": "dsmc",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:temperature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "temperature"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "temperature",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:velocity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DSMC.Particles",
        "fct-package": "dsmc",
        "fct-signature": "!Vec3",
        "fct-source": "src/DSMC-Particles.html#Flow",
        "fct-type": "function",
        "title": "velocity"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Particles",
        "module": "DSMC.Particles",
        "name": "velocity",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGas-surface interaction models.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Surface.html",
        "fct-type": "module",
        "title": "Surface"
      },
      "index": {
        "description": "Gas-surface interaction models",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "Surface",
        "normalized": "",
        "package": "dsmc",
        "partial": "Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#t:Reflector",
      "description": {
        "fct-descr": "\u003cp\u003eA function which takes PRNG state, molecular velocity, surface\n normal and samples post-collisional wrt to impregnable wall\n boundary condition.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Surface.html#Reflector",
        "fct-type": "type",
        "title": "Reflector"
      },
      "index": {
        "description": "function which takes PRNG state molecular velocity surface normal and samples post-collisional wrt to impregnable wall boundary condition",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "Reflector",
        "normalized": "",
        "package": "dsmc",
        "partial": "Reflector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#t:Surface",
      "description": {
        "fct-descr": "\u003cp\u003eSurface models.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "data",
        "title": "Surface"
      },
      "index": {
        "description": "Surface models",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "Surface",
        "normalized": "",
        "package": "dsmc",
        "partial": "Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:CLL",
      "description": {
        "fct-descr": "\u003cp\u003eCercignani-Lampis-Lord model.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "CLL",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "CLL"
      },
      "index": {
        "description": "Cercignani-Lampis-Lord model",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "CLL",
        "normalized": "",
        "package": "dsmc",
        "partial": "CLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:Diffuse",
      "description": {
        "fct-descr": "\u003cp\u003eDiffuse reflection.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "Diffuse",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "Diffuse"
      },
      "index": {
        "description": "Diffuse reflection",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "Diffuse",
        "normalized": "",
        "package": "dsmc",
        "partial": "Diffuse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:Mirror",
      "description": {
        "fct-descr": "\u003cp\u003eSurface with specular reflection.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "Mirror",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "Mirror"
      },
      "index": {
        "description": "Surface with specular reflection",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "Mirror",
        "normalized": "",
        "package": "dsmc",
        "partial": "Mirror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eKinetic energy accomodation for normal\n velocity component.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Kinetic energy accomodation for normal velocity component",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "alpha",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:bodyTemperature",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute temperature of surface.\n\u003c/p\u003e\u003cp\u003eAbsolute temperature of surface.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "bodyTemperature"
      },
      "index": {
        "description": "Absolute temperature of surface Absolute temperature of surface",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "bodyTemperature",
        "normalized": "",
        "package": "dsmc",
        "partial": "Temperature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:makeReflector",
      "description": {
        "fct-descr": "\u003cp\u003eProduce reflector depending on surface type.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "Surface -\u003e Reflector s",
        "fct-source": "src/DSMC-Surface.html#makeReflector",
        "fct-type": "function",
        "title": "makeReflector"
      },
      "index": {
        "description": "Produce reflector depending on surface type",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "makeReflector",
        "normalized": "Surface-\u003eReflector a",
        "package": "dsmc",
        "partial": "Reflector",
        "signature": "Surface-\u003eReflector s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:mass",
      "description": {
        "fct-descr": "\u003cp\u003eMass of reflected molecules (usually equal\n to that in incident flow).\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "mass"
      },
      "index": {
        "description": "Mass of reflected molecules usually equal to that in incident flow",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "mass",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:sigma",
      "description": {
        "fct-descr": "\u003cp\u003eAccomodation for tangential momentum.\n\u003c/p\u003e",
        "fct-module": "DSMC.Surface",
        "fct-package": "dsmc",
        "fct-signature": "!Double",
        "fct-source": "src/DSMC-Surface.html#Surface",
        "fct-type": "function",
        "title": "sigma"
      },
      "index": {
        "description": "Accomodation for tangential momentum",
        "hierarchy": "DSMC Surface",
        "module": "DSMC.Surface",
        "name": "sigma",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for body definitions.\n\u003c/p\u003e\u003cp\u003eBody definition contains a number of solid definitions and ends\n with the top level object definition. RHS of solid equations may\n reference other solids to compose into complex bodies.\n\u003c/p\u003e\u003cp\u003eMultiple-body compositions are right-associative.\n\u003c/p\u003e\u003cpre\u003e # comment\n\n # define few primitives\n solid b1 = sphere (0, 0, 0; 5);\n solid p1 = plane (0, 0, 0; 1, 0, 0);\n\n # define a composition\n solid body = b1 and p1;\n\n # assign it to be the top level object\n tlo body;\n\u003c/pre\u003e\u003cp\u003eStatements must end with a semicolon (newlines are optional).\n Excessive spaces are ignored.\n\u003c/p\u003e\u003cp\u003eTop-level object line must reference a previously defined solid.\n\u003c/p\u003e\u003cp\u003eSyntax for primitives follows the signatures of \u003ccode\u003eTraceables\u003c/code\u003e\n constructors for \u003ccode\u003e\u003ca\u003eplane\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esphere\u003c/a\u003e\u003c/code\u003e, but differs for cylinder\n and cone, as this module provides access only to frustums\n (\u003ccode\u003e\u003ca\u003ecylinderFrustum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econeFrustum\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eHalf-space\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eplane (px, py, pz; nx, ny, nz)\u003c/code\u003e, where \u003ccode\u003e(px, py, pz)\u003c/code\u003e\n is a point on a plane which defines the half-space and \u003ccode\u003e(nx, ny,\n nz)\u003c/code\u003e is a normal to the plane (outward to the half-space), not\n necessarily a unit vector.\n\u003c/dd\u003e\u003cdt\u003eSphere\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003esphere (cx, cy, cz; r)\u003c/code\u003e, where \u003ccode\u003e(cx, cy, cz)\u003c/code\u003e is a\n central point of a sphere and \u003ccode\u003er\u003c/code\u003e is radius.\n\u003c/dd\u003e\u003cdt\u003eRight circular cylinder\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ecylinder (p1x, p1y, p1z; p2x, p2y, p2z;\n r)\u003c/code\u003e where \u003ccode\u003e(p1x, p1y, p1z)\u003c/code\u003e and \u003ccode\u003e(p2x, p2y, p2z)\u003c/code\u003e are bottom and\n top points on axis and \u003ccode\u003er\u003c/code\u003e is radius.\n\u003c/dd\u003e\u003cdt\u003eRight circular conical frustum\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003econe (p1x, p1y, p1z; r1; p2x,\n p2y, p2z; r2)\u003c/code\u003e where \u003ccode\u003e(p1x, p1y, p1z)\u003c/code\u003e and \u003ccode\u003e(p2x, p2y, p2z)\u003c/code\u003e are\n bottom and top points on cone axis and \u003ccode\u003er1\u003c/code\u003e, \u003ccode\u003er2\u003c/code\u003e are the\n corresponding radii.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Traceables.Parser",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Traceables-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parser for body definitions Body definition contains number of solid definitions and ends with the top level object definition RHS of solid equations may reference other solids to compose into complex bodies Multiple-body compositions are right-associative comment define few primitives solid b1 sphere solid p1 plane define composition solid body b1 and p1 assign it to be the top level object tlo body Statements must end with semicolon newlines are optional Excessive spaces are ignored Top-level object line must reference previously defined solid Syntax for primitives follows the signatures of Traceables constructors for plane and sphere but differs for cylinder and cone as this module provides access only to frustums cylinderFrustum and coneFrustum Half-space plane px py pz nx ny nz where px py pz is point on plane which defines the half-space and nx ny nz is normal to the plane outward to the half-space not necessarily unit vector Sphere sphere cx cy cz where cx cy cz is central point of sphere and is radius Right circular cylinder cylinder p1x p1y p1z p2x p2y p2z where p1x p1y p1z and p2x p2y p2z are bottom and top points on axis and is radius Right circular conical frustum cone p1x p1y p1z r1 p2x p2y p2z r2 where p1x p1y p1z and p2x p2y p2z are bottom and top points on cone axis and r1 r2 are the corresponding radii",
        "hierarchy": "DSMC Traceables Parser",
        "module": "DSMC.Traceables.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "dsmc",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#v:parseBody",
      "description": {
        "fct-descr": "\u003cp\u003eTry to read body definition from bytestring. Return body or error\n message if parsing fails.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables.Parser",
        "fct-package": "dsmc",
        "fct-signature": "ByteString -\u003e Either String Body",
        "fct-source": "src/DSMC-Traceables-Parser.html#parseBody",
        "fct-type": "function",
        "title": "parseBody"
      },
      "index": {
        "description": "Try to read body definition from bytestring Return body or error message if parsing fails",
        "hierarchy": "DSMC Traceables Parser",
        "module": "DSMC.Traceables.Parser",
        "name": "parseBody",
        "normalized": "ByteString-\u003eEither String Body",
        "package": "dsmc",
        "partial": "Body",
        "signature": "ByteString-\u003eEither String Body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#v:parseBodyFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead body definition from file. If parsing fails or IOError when\n reading file occurs, return error message.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables.Parser",
        "fct-package": "dsmc",
        "fct-signature": "FilePath -\u003e IO (Either String Body)",
        "fct-source": "src/DSMC-Traceables-Parser.html#parseBodyFile",
        "fct-type": "function",
        "title": "parseBodyFile"
      },
      "index": {
        "description": "Read body definition from file If parsing fails or IOError when reading file occurs return error message",
        "hierarchy": "DSMC Traceables Parser",
        "module": "DSMC.Traceables.Parser",
        "name": "parseBodyFile",
        "normalized": "FilePath-\u003eIO(Either String Body)",
        "package": "dsmc",
        "partial": "Body File",
        "signature": "FilePath-\u003eIO(Either String Body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRay-casting routines for constructive solid geometry.\n\u003c/p\u003e\u003cp\u003eThis module provides constructors for complex bodies as well as\nroutines to compute intersections of such bodies with ray. In DSMC it\nis used to calculate points at which particles hit the body surface.\n\u003c/p\u003e\u003cp\u003eGas-surface interactions are not handled by this module, see\n\u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Traceables.html",
        "fct-type": "module",
        "title": "Traceables"
      },
      "index": {
        "description": "Ray-casting routines for constructive solid geometry This module provides constructors for complex bodies as well as routines to compute intersections of such bodies with ray In DSMC it is used to calculate points at which particles hit the body surface Gas-surface interactions are not handled by this module see Surface instead",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "Traceables",
        "normalized": "",
        "package": "dsmc",
        "partial": "Traceables",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:Body",
      "description": {
        "fct-descr": "\u003cp\u003eCSG body is a recursive composition of primitive objects or other\n bodies.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Traceables.html#Body",
        "fct-type": "data",
        "title": "Body"
      },
      "index": {
        "description": "CSG body is recursive composition of primitive objects or other bodies",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "Body",
        "normalized": "",
        "package": "dsmc",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:HitPoint",
      "description": {
        "fct-descr": "\u003cp\u003eTime when particle hits the surface with normal at the hit point.\n If hit is in infinity, then normal is Nothing.\n\u003c/p\u003e\u003cp\u003eNote that this datatype is strict only on first argument: we do not\n compare normals when classifying traces.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "data",
        "fct-source": "src/DSMC-Traceables.html#HitPoint",
        "fct-type": "data",
        "title": "HitPoint"
      },
      "index": {
        "description": "Time when particle hits the surface with normal at the hit point If hit is in infinity then normal is Nothing Note that this datatype is strict only on first argument we do not compare normals when classifying traces",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "HitPoint",
        "normalized": "",
        "package": "dsmc",
        "partial": "Hit Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:HitSegment",
      "description": {
        "fct-descr": "\u003cp\u003eA segment on time line when particle is inside the body.\n\u003c/p\u003e\u003cp\u003eUsing strict tuple performs better: 100 traces for 350K\n particles perform roughly 7s against 8s with common datatypes.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Traceables.html#HitSegment",
        "fct-type": "type",
        "title": "HitSegment"
      },
      "index": {
        "description": "segment on time line when particle is inside the body Using strict tuple performs better traces for particles perform roughly against with common datatypes",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "HitSegment",
        "normalized": "",
        "package": "dsmc",
        "partial": "Hit Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:Trace",
      "description": {
        "fct-descr": "\u003cp\u003eTrace of a linearly-moving particle on a body is a list of time\n segments/intervals during which the particle is inside the body.\n\u003c/p\u003e\u003cpre\u003e                       # - particle\n                        \\\n                         \\\n                          o------------\n                      ---/ *           \\---\n                    -/      *              \\-\n                   /         *               \\\n                  (           *  - trace      )\n                   \\           *             /\n                    -\\          *          /-\n       primitive -  ---\\         *     /---\n                          --------o----\n                                   \\\n                                    \\\n                                    _\\/\n                                      \\\n\u003c/pre\u003e\u003cp\u003eFor example, since a ray intersects a plane only once, a half-space\n primitive defined by this plane results in a half-interval trace of\n a particle:\n\u003c/p\u003e\u003cpre\u003e                                          /\n                                         /\n                                        /\n              #------------------------o*****************\u003e\n              |                       /                  |\n           particle                  /            goes to infinity\n                                    /\n                                   /\n                                  /\n                                 / - surface of half-space\n\u003c/pre\u003e\u003cp\u003eEnds of segments or intervals are calculated by intersecting the\n trajectory ray of a particle and the surface of the primitive. This\n may be done by substituting the equation of trajectory \u003ccode\u003eX(t) = X_o\n + V*t\u003c/code\u003e into the equation which defines the surface and solving it\n for \u003ccode\u003et\u003c/code\u003e. If the body is a composition, traces from primitives are\n then classified according to operators used to define the body\n (union, intersection or complement).\n\u003c/p\u003e\u003cp\u003eAlthough only convex primitives are used in current implementation,\n compositions may result in concave bodies, which is why trace is\n defined as a list of segments.\n\u003c/p\u003e\u003cp\u003eIn this example, body is an intersection of a sphere and sphere\n complement:\n\u003c/p\u003e\u003cpre\u003e                                /|\\\n                                 |\n                                 |\n                                 |\n                   -----------   |\n              ----/           \\--o-\n            -/                   * \\-\n          -/               hs2 - *   \\\n        -/                       * ---/\n       /                         o/\n      /                        -/|\n     /                        /  |\n     |                       /   |\n    /                        |   |\n    |                       /    |\n    |                       |    |\n    |                       \\    |\n    \\                        |   |\n     |                       \\   |\n     \\                        \\  |\n      \\                        -\\|\n       \\                         o\\\n        -\\                       * ---\\\n          -\\               hs1 - *   /\n            -\\                   * /-\n              ----\\           /--o-\n                   -----------   |\n                                 |\n                                 |\n                                 # - particle\n\u003c/pre\u003e\u003cp\u003eIf only intersections of concave primitives were allowed, then\n trace type might be simplified to be just single \u003ccode\u003e\u003ca\u003eHitSegment\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Traceables.html#Trace",
        "fct-type": "type",
        "title": "Trace"
      },
      "index": {
        "description": "Trace of linearly-moving particle on body is list of time segments intervals during which the particle is inside the body particle trace primitive For example since ray intersects plane only once half-space primitive defined by this plane results in half-interval trace of particle particle goes to infinity surface of half-space Ends of segments or intervals are calculated by intersecting the trajectory ray of particle and the surface of the primitive This may be done by substituting the equation of trajectory into the equation which defines the surface and solving it for If the body is composition traces from primitives are then classified according to operators used to define the body union intersection or complement Although only convex primitives are used in current implementation compositions may result in concave bodies which is why trace is defined as list of segments In this example body is an intersection of sphere and sphere complement hs2 hs1 particle If only intersections of concave primitives were allowed then trace type might be simplified to be just single HitSegment",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "Trace",
        "normalized": "",
        "package": "dsmc",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:HitPoint",
      "description": {
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "HitPoint !Double (Maybe Vec3)",
        "fct-source": "src/DSMC-Traceables.html#HitPoint",
        "fct-type": "function",
        "title": "HitPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "HitPoint",
        "normalized": "",
        "package": "dsmc",
        "partial": "Hit Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:complement",
      "description": {
        "fct-descr": "\u003cp\u003eComplement to a body (normals flipped).\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#complement",
        "fct-type": "function",
        "title": "complement"
      },
      "index": {
        "description": "Complement to body normals flipped",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "complement",
        "normalized": "Body-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Body-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cone",
      "description": {
        "fct-descr": "\u003cp\u003eAn infinite right circular cone defined by outward axis vector,\n apex point and angle between generatrix and axis (in degrees, less\n than 90).\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Point -\u003e Double -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#cone",
        "fct-type": "function",
        "title": "cone"
      },
      "index": {
        "description": "An infinite right circular cone defined by outward axis vector apex point and angle between generatrix and axis in degrees less than",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "cone",
        "normalized": "Vec-\u003ePoint-\u003eDouble-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003ePoint-\u003eDouble-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:coneFrustum",
      "description": {
        "fct-descr": "\u003cp\u003eA conical frustum given by two points on its axis with radii at\n that points. One of radii may be zero (in which case one of frustum\n ends will be the apex).\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "(Point, Double) -\u003e (Point, Double) -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#coneFrustum",
        "fct-type": "function",
        "title": "coneFrustum"
      },
      "index": {
        "description": "conical frustum given by two points on its axis with radii at that points One of radii may be zero in which case one of frustum ends will be the apex",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "coneFrustum",
        "normalized": "(Point,Double)-\u003e(Point,Double)-\u003eBody",
        "package": "dsmc",
        "partial": "Frustum",
        "signature": "(Point,Double)-\u003e(Point,Double)-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cylinder",
      "description": {
        "fct-descr": "\u003cp\u003eAn infinite circular cylinder defined by two arbitary\n points on axis and radius.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Point -\u003e Point -\u003e Double -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#cylinder",
        "fct-type": "function",
        "title": "cylinder"
      },
      "index": {
        "description": "An infinite circular cylinder defined by two arbitary points on axis and radius",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "cylinder",
        "normalized": "Point-\u003ePoint-\u003eDouble-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Point-\u003ePoint-\u003eDouble-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cylinderFrustum",
      "description": {
        "fct-descr": "\u003cp\u003eA finite right circular cylinder defined by two points on its top\n and bottom and radius.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Point -\u003e Point -\u003e Double -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#cylinderFrustum",
        "fct-type": "function",
        "title": "cylinderFrustum"
      },
      "index": {
        "description": "finite right circular cylinder defined by two points on its top and bottom and radius",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "cylinderFrustum",
        "normalized": "Point-\u003ePoint-\u003eDouble-\u003eBody",
        "package": "dsmc",
        "partial": "Frustum",
        "signature": "Point-\u003ePoint-\u003eDouble-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:hitPoint",
      "description": {
        "fct-descr": "\u003cp\u003eIf the particle has hit the body during last time step, calculate\n the first corresponding \u003ccode\u003e\u003ca\u003eHitPoint\u003c/a\u003e\u003c/code\u003e. Note that the time at which the hit\n occured will be negative. This is the primary function to calculate\n ray-body intersections.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Time -\u003e Body -\u003e Particle -\u003e Maybe HitPoint",
        "fct-source": "src/DSMC-Traceables.html#hitPoint",
        "fct-type": "function",
        "title": "hitPoint"
      },
      "index": {
        "description": "If the particle has hit the body during last time step calculate the first corresponding HitPoint Note that the time at which the hit occured will be negative This is the primary function to calculate ray-body intersections",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "hitPoint",
        "normalized": "Time-\u003eBody-\u003eParticle-\u003eMaybe HitPoint",
        "package": "dsmc",
        "partial": "Point",
        "signature": "Time-\u003eBody-\u003eParticle-\u003eMaybe HitPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:inside",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if particle is in inside the body.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Particle -\u003e Bool",
        "fct-source": "src/DSMC-Traceables.html#inside",
        "fct-type": "function",
        "title": "inside"
      },
      "index": {
        "description": "True if particle is in inside the body",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "inside",
        "normalized": "Body-\u003eParticle-\u003eBool",
        "package": "dsmc",
        "partial": "",
        "signature": "Body-\u003eParticle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eIntersection of two bodies.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Body -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "Intersection of two bodies",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "intersect",
        "normalized": "Body-\u003eBody-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Body-\u003eBody-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:plane",
      "description": {
        "fct-descr": "\u003cp\u003eA half-space defined by arbitary point on the boundary plane and\n outward normal (not necessarily a unit vector).\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Point -\u003e Vec3 -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#plane",
        "fct-type": "function",
        "title": "plane"
      },
      "index": {
        "description": "half-space defined by arbitary point on the boundary plane and outward normal not necessarily unit vector",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "plane",
        "normalized": "Point-\u003eVec-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Point-\u003eVec-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:sphere",
      "description": {
        "fct-descr": "\u003cp\u003eA sphere defined by center point and radius.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Double -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#sphere",
        "fct-type": "function",
        "title": "sphere"
      },
      "index": {
        "description": "sphere defined by center point and radius",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "sphere",
        "normalized": "Vec-\u003eDouble-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eDouble-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a trace of a particle on a body.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Particle -\u003e Trace",
        "fct-source": "src/DSMC-Traceables.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Calculate trace of particle on body",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "trace",
        "normalized": "Body-\u003eParticle-\u003eTrace",
        "package": "dsmc",
        "partial": "",
        "signature": "Body-\u003eParticle-\u003eTrace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:unite",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of two bodies.\n\u003c/p\u003e",
        "fct-module": "DSMC.Traceables",
        "fct-package": "dsmc",
        "fct-signature": "Body -\u003e Body -\u003e Body",
        "fct-source": "src/DSMC-Traceables.html#unite",
        "fct-type": "function",
        "title": "unite"
      },
      "index": {
        "description": "Union of two bodies",
        "hierarchy": "DSMC Traceables",
        "module": "DSMC.Traceables",
        "name": "unite",
        "normalized": "Body-\u003eBody-\u003eBody",
        "package": "dsmc",
        "partial": "",
        "signature": "Body-\u003eBody-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePhysical constants.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Util.Constants",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Util-Constants.html",
        "fct-type": "module",
        "title": "Constants"
      },
      "index": {
        "description": "Physical constants",
        "hierarchy": "DSMC Util Constants",
        "module": "DSMC.Util.Constants",
        "name": "Constants",
        "normalized": "",
        "package": "dsmc",
        "partial": "Constants",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:amu",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic mass unit 1.660538921(73)e-27, inverse to Avogadro's\n constant.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Constants",
        "fct-package": "dsmc",
        "fct-signature": "Double",
        "fct-source": "src/DSMC-Util-Constants.html#amu",
        "fct-type": "function",
        "title": "amu"
      },
      "index": {
        "description": "Atomic mass unit e-27 inverse to Avogadro constant",
        "hierarchy": "DSMC Util Constants",
        "module": "DSMC.Util.Constants",
        "name": "amu",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:avogadro",
      "description": {
        "fct-descr": "\u003cp\u003eAvogadro constant 6.02214129(27)e23\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Constants",
        "fct-package": "dsmc",
        "fct-signature": "Double",
        "fct-source": "src/DSMC-Util-Constants.html#avogadro",
        "fct-type": "function",
        "title": "avogadro"
      },
      "index": {
        "description": "Avogadro constant e23",
        "hierarchy": "DSMC Util Constants",
        "module": "DSMC.Util.Constants",
        "name": "avogadro",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:boltzmann",
      "description": {
        "fct-descr": "\u003cp\u003eBoltzmann constant 1.3806488(13)e-23\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Constants",
        "fct-package": "dsmc",
        "fct-signature": "Double",
        "fct-source": "src/DSMC-Util-Constants.html#boltzmann",
        "fct-type": "function",
        "title": "boltzmann"
      },
      "index": {
        "description": "Boltzmann constant e-23",
        "hierarchy": "DSMC Util Constants",
        "module": "DSMC.Util.Constants",
        "name": "boltzmann",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:unigas",
      "description": {
        "fct-descr": "\u003cp\u003eUniversal gas constant.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Constants",
        "fct-package": "dsmc",
        "fct-signature": "Double",
        "fct-source": "src/DSMC-Util-Constants.html#unigas",
        "fct-type": "function",
        "title": "unigas"
      },
      "index": {
        "description": "Universal gas constant",
        "hierarchy": "DSMC Util Constants",
        "module": "DSMC.Util.Constants",
        "name": "unigas",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple 3-vectors and matrices built atop tuples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC-Util-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Simple vectors and matrices built atop tuples",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "dsmc",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Matrix",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix given by its rows.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Util-Vector.html#Matrix",
        "fct-type": "type",
        "title": "Matrix"
      },
      "index": {
        "description": "Matrix given by its rows",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "Matrix",
        "normalized": "",
        "package": "dsmc",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003ePoint in \u003ccode\u003eR^3\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Util-Vector.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "Point in",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "Point",
        "normalized": "",
        "package": "dsmc",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Vec3",
      "description": {
        "fct-descr": "\u003cp\u003eVector in \u003ccode\u003eR^3\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "type",
        "fct-source": "src/DSMC-Util-Vector.html#Vec3",
        "fct-type": "type",
        "title": "Vec3"
      },
      "index": {
        "description": "Vector in",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "Vec3",
        "normalized": "",
        "package": "dsmc",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Add two vectors",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Vec-\u003eVec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-60--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "Subtract two vectors",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "Vec-\u003eVec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eVec3 cross product.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Vec3 cross product",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "Vec-\u003eVec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:.-42-",
      "description": {
        "fct-descr": "\u003cp\u003eVec3 dot product.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Double",
        "fct-source": "src/DSMC-Util-Vector.html#.%2A",
        "fct-type": "function",
        "title": "(.*)"
      },
      "index": {
        "description": "Vec3 dot product",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "(.*) .*",
        "normalized": "Vec-\u003eVec-\u003eDouble",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:.-94-",
      "description": {
        "fct-descr": "\u003cp\u003eScale vector.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Double -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#.%5E",
        "fct-type": "function",
        "title": "(.^)"
      },
      "index": {
        "description": "Scale vector",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "(.^) .^",
        "normalized": "Vec-\u003eDouble-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eDouble-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:addM",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two matrices.\n\u003c/p\u003e\u003cp\u003eWe could add Applicative instance for Matrix and lift (+) to it.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/DSMC-Util-Vector.html#addM",
        "fct-type": "function",
        "title": "addM"
      },
      "index": {
        "description": "Add two matrices We could add Applicative instance for Matrix and lift to it",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "addM",
        "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
        "package": "dsmc",
        "partial": "",
        "signature": "Matrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:buildCartesian",
      "description": {
        "fct-descr": "\u003cp\u003eBuild cartesian axes from yaw and pitch with 0 roll. Angles are\n in radians.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Double -\u003e Double -\u003e (Vec3, Vec3, Vec3)",
        "fct-source": "src/DSMC-Util-Vector.html#buildCartesian",
        "fct-type": "function",
        "title": "buildCartesian"
      },
      "index": {
        "description": "Build cartesian axes from yaw and pitch with roll Angles are in radians",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "buildCartesian",
        "normalized": "Double-\u003eDouble-\u003e(Vec,Vec,Vec)",
        "package": "dsmc",
        "partial": "Cartesian",
        "signature": "Double-\u003eDouble-\u003e(Vec,Vec,Vec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:diag",
      "description": {
        "fct-descr": "\u003cp\u003eProduce matrix with diagonal elements equal to given value.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Double -\u003e Matrix",
        "fct-source": "src/DSMC-Util-Vector.html#diag",
        "fct-type": "function",
        "title": "diag"
      },
      "index": {
        "description": "Produce matrix with diagonal elements equal to given value",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "diag",
        "normalized": "Double-\u003eMatrix",
        "package": "dsmc",
        "partial": "",
        "signature": "Double-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003eEuclidean distance between two points.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Point -\u003e Point -\u003e Double",
        "fct-source": "src/DSMC-Util-Vector.html#distance",
        "fct-type": "function",
        "title": "distance"
      },
      "index": {
        "description": "Euclidean distance between two points",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "distance",
        "normalized": "Point-\u003ePoint-\u003eDouble",
        "package": "dsmc",
        "partial": "",
        "signature": "Point-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:dotM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric vector dot product.\n\u003c/p\u003e\u003cp\u003eMultiply transpose of first vector by given matrix, then multiply\n the result by second vector.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Matrix -\u003e Double",
        "fct-source": "src/DSMC-Util-Vector.html#dotM",
        "fct-type": "function",
        "title": "dotM"
      },
      "index": {
        "description": "Generic vector dot product Multiply transpose of first vector by given matrix then multiply the result by second vector",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "dotM",
        "normalized": "Vec-\u003eVec-\u003eMatrix-\u003eDouble",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eMatrix-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:invert",
      "description": {
        "fct-descr": "\u003cp\u003eScale vector by -1.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#invert",
        "fct-type": "function",
        "title": "invert"
      },
      "index": {
        "description": "Scale vector by",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "invert",
        "normalized": "Vec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:moveBy",
      "description": {
        "fct-descr": "\u003cp\u003eMove point by velocity vector for given time and return new\n position.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Point-\u003e Vec3-\u003e Double-\u003e Point",
        "fct-type": "function",
        "title": "moveBy"
      },
      "index": {
        "description": "Move point by velocity vector for given time and return new position",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "moveBy",
        "normalized": "Point-\u003eVec-\u003eDouble-\u003ePoint",
        "package": "dsmc",
        "partial": "By",
        "signature": "Point-\u003eVec-\u003eDouble-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:mxv",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply matrix (given by row vectors) and vector\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Matrix -\u003e Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#mxv",
        "fct-type": "function",
        "title": "mxv"
      },
      "index": {
        "description": "Multiply matrix given by row vectors and vector",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "mxv",
        "normalized": "Matrix-\u003eVec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Matrix-\u003eVec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:norm",
      "description": {
        "fct-descr": "\u003cp\u003eEuclidean norm of vector.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Double",
        "fct-source": "src/DSMC-Util-Vector.html#norm",
        "fct-type": "function",
        "title": "norm"
      },
      "index": {
        "description": "Euclidean norm of vector",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "norm",
        "normalized": "Vec-\u003eDouble",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003eProduce unit vector with same direction as the original one.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3",
        "fct-source": "src/DSMC-Util-Vector.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "Produce unit vector with same direction as the original one",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "normalize",
        "normalized": "Vec-\u003eVec",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:origin",
      "description": {
        "fct-descr": "\u003cp\u003eOrigin point \u003ccode\u003e(0, 0, 0)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Point",
        "fct-source": "src/DSMC-Util-Vector.html#origin",
        "fct-type": "function",
        "title": "origin"
      },
      "index": {
        "description": "Origin point",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "origin",
        "normalized": "",
        "package": "dsmc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:vxv",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose vector and multiply it by another vector, producing a\n matrix.\n\u003c/p\u003e",
        "fct-module": "DSMC.Util.Vector",
        "fct-package": "dsmc",
        "fct-signature": "Vec3 -\u003e Vec3 -\u003e Matrix",
        "fct-source": "src/DSMC-Util-Vector.html#vxv",
        "fct-type": "function",
        "title": "vxv"
      },
      "index": {
        "description": "Transpose vector and multiply it by another vector producing matrix",
        "hierarchy": "DSMC Util Vector",
        "module": "DSMC.Util.Vector",
        "name": "vxv",
        "normalized": "Vec-\u003eVec-\u003eMatrix",
        "package": "dsmc",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDSMC is an algorithm used for simulating rarefied gas flows.\n\u003c/p\u003e\u003cp\u003eYou define the simulation domain, the body inside this domain, gas\nflow parameters and several other options. DSMC iteratively models the\nbehaviour of gas molecules according to time and space decoupling\nscheme for the Boltzmann equation. The result of simulation is a field\nof macroscopic parameters across the simulation domain.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DSMC",
        "fct-package": "dsmc",
        "fct-signature": "module",
        "fct-source": "src/DSMC.html",
        "fct-type": "module",
        "title": "DSMC"
      },
      "index": {
        "description": "DSMC is an algorithm used for simulating rarefied gas flows You define the simulation domain the body inside this domain gas flow parameters and several other options DSMC iteratively models the behaviour of gas molecules according to time and space decoupling scheme for the Boltzmann equation The result of simulation is field of macroscopic parameters across the simulation domain",
        "hierarchy": "DSMC",
        "module": "DSMC",
        "name": "DSMC",
        "normalized": "",
        "package": "dsmc",
        "partial": "DSMC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC.html#v:motion",
      "description": {
        "fct-descr": "\u003cp\u003eCollisionless motion step.\n\u003c/p\u003e",
        "fct-module": "DSMC",
        "fct-package": "dsmc",
        "fct-signature": "ParallelSeeds -\u003e Body -\u003e Time -\u003e Surface -\u003e Ensemble -\u003e (Ensemble, ParallelSeeds)",
        "fct-source": "src/DSMC-Motion.html#motion",
        "fct-type": "function",
        "title": "motion"
      },
      "index": {
        "description": "Collisionless motion step",
        "hierarchy": "DSMC",
        "module": "DSMC",
        "name": "motion",
        "normalized": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)",
        "package": "dsmc",
        "partial": "",
        "signature": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003ePerform DSMC simulation, return total iterations count, final\n particle distribution and field of averaged macroscopic parameters.\n\u003c/p\u003e\u003cp\u003eThis is an IO action since system entropy source is polled for\n seeds.\n\u003c/p\u003e",
        "fct-module": "DSMC",
        "fct-package": "dsmc",
        "fct-signature": "Domain-\u003e Body-\u003e Flow-\u003e Time-\u003e Bool-\u003e Double-\u003e Double-\u003e Int-\u003e Surface-\u003e (Double, Double, Double)-\u003e Int-\u003e Int-\u003e IO (Int, Ensemble, MacroField)",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "Perform DSMC simulation return total iterations count final particle distribution and field of averaged macroscopic parameters This is an IO action since system entropy source is polled for seeds",
        "hierarchy": "DSMC",
        "module": "DSMC",
        "name": "simulate",
        "normalized": "Domain-\u003eBody-\u003eFlow-\u003eTime-\u003eBool-\u003eDouble-\u003eDouble-\u003eInt-\u003eSurface-\u003e(Double,Double,Double)-\u003eInt-\u003eInt-\u003eIO(Int,Ensemble,MacroField)",
        "package": "dsmc",
        "partial": "",
        "signature": "Domain-\u003eBody-\u003eFlow-\u003eTime-\u003eBool-\u003eDouble-\u003eDouble-\u003eInt-\u003eSurface-\u003e(Double,Double,Double)-\u003eInt-\u003eInt-\u003eIO(Int,Ensemble,MacroField)"
      }
    }
  }
]