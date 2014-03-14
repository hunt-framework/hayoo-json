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
        "word": "dsmc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParticle tracking for spatial grid for DSMC.\n\u003c/p\u003e\u003cp\u003eThis module is used to sort (classify) particles into ordered vector\nof cells for collision step or macroscopic parameter sampling. We do\nnot provide any special cell datatype since it varies which cell data\nis required on every step, so only particles in every cell are stored.\n\u003c/p\u003e\u003cp\u003eMonad is provided for storing grid options during the whole program\nrun.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Cells",
          "name": "Cells",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html",
          "type": "module"
        },
        "index": {
          "description": "Particle tracking for spatial grid for DSMC This module is used to sort classify particles into ordered vector of cells for collision step or macroscopic parameter sampling We do not provide any special cell datatype since it varies which cell data is required on every step so only particles in every cell are stored Monad is provided for storing grid options during the whole program run",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "Cells",
          "package": "dsmc",
          "partial": "Cells",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCell contents with particles.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "CellContents",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#CellContents",
          "type": "type"
        },
        "index": {
          "description": "Cell contents with particles",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "CellContents",
          "package": "dsmc",
          "partial": "Cell Contents",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:CellContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParticles sorted by cells.\n\u003c/p\u003e\u003cp\u003eWe store contents of all cells in a single densely packed unboxed\n vector. Additionally cell count, cell starting positions in vector\n (\u003ccode\u003es\u003c/code\u003e) and cell sizes (\u003ccode\u003el\u003c/code\u003e) are stored.\n\u003c/p\u003e\u003cpre\u003e   s1         s2    s3\n   |          |     |\n {[ooooooooo][oooo][oooooo]...}\n     cell1     c2     c3\n     l1=9      l2=4   l3=6\n\u003c/pre\u003e\u003cp\u003eNote that any extra data about cells (like position or volume)\n should be maintained separately from cell contents. We use this\n approach because collision sampling and macroscopic parameter\n calculation require different\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "Cells",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#Cells",
          "type": "data"
        },
        "index": {
          "description": "Particles sorted by cells We store contents of all cells in single densely packed unboxed vector Additionally cell count cell starting positions in vector and cell sizes are stored s1 s2 s3 ooooooooo oooo oooooo cell1 c2 c3 l1 l2 l3 Note that any extra data about cells like position or volume should be maintained separately from cell contents We use this approach because collision sampling and macroscopic parameter calculation require different",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "Cells",
          "package": "dsmc",
          "partial": "Cells",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Cells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming there's a linear ordering on all cells, Classifier must\n yield index of cell for given particle.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "Classifier",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#Classifier",
          "type": "type"
        },
        "index": {
          "description": "Assuming there linear ordering on all cells Classifier must yield index of cell for given particle",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "Classifier",
          "package": "dsmc",
          "partial": "Classifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Classifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain divided in uniform grid with given steps by X, Y and Z\n axes.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "Grid",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#Grid",
          "type": "data"
        },
        "index": {
          "description": "Domain divided in uniform grid with given steps by and axes",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "Grid",
          "package": "dsmc",
          "partial": "Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad used to keep grid options and cell volumes. Due to the\n low-level \u003ccode\u003e\u003ca\u003eCells\u003c/a\u003e\u003c/code\u003e structure we use to store particles sorted in\n cells, things may break badly if improper/inconsistent\n classifier/indexer parameters are used with cells structure. It\n also helps to maintain precalculated cell volumes. See\n \u003ccode\u003eMacroSamplingMonad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "GridMonad",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#GridMonad",
          "type": "type"
        },
        "index": {
          "description": "Monad used to keep grid options and cell volumes Due to the low-level Cells structure we use to store particles sorted in cells things may break badly if improper inconsistent classifier indexer parameters are used with cells structure It also helps to maintain precalculated cell volumes See MacroSamplingMonad",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "GridMonad",
          "package": "dsmc",
          "partial": "Grid Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:GridMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData stored in \u003ccode\u003e\u003ca\u003eGridMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "GridWares",
          "package": "dsmc",
          "source": "src/DSMC-Cells.html#GridWares",
          "type": "data"
        },
        "index": {
          "description": "Data stored in GridMonad",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "GridWares",
          "package": "dsmc",
          "partial": "Grid Wares",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#t:GridWares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Cells",
          "name": "GridWares",
          "package": "dsmc",
          "signature": "GridWares",
          "source": "src/DSMC-Cells.html#GridWares",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "GridWares",
          "package": "dsmc",
          "partial": "Grid Wares",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:GridWares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Cells",
          "name": "UniformGrid",
          "package": "dsmc",
          "signature": "UniformGrid !Domain !Double !Double !Double",
          "source": "src/DSMC-Cells.html#Grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "UniformGrid",
          "package": "dsmc",
          "partial": "Uniform Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:UniformGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over cell indices and contents of every cell.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "cellMap",
          "package": "dsmc",
          "signature": "(Int -\u003e Maybe CellContents -\u003e a) -\u003e Cells -\u003e Array D DIM1 a",
          "source": "src/DSMC-Cells.html#cellMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over cell indices and contents of every cell",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "cellMap",
          "normalized": "(Int-\u003eMaybe CellContents-\u003ea)-\u003eCells-\u003eArray D DIM a",
          "package": "dsmc",
          "partial": "Map",
          "signature": "(Int-\u003eMaybe CellContents-\u003ea)-\u003eCells-\u003eArray D DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:cellMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate volumes of grid cells wrt body within the domain. For\n every cell, \u003ccode\u003e\u003ca\u003efreeVolume\u003c/a\u003e\u003c/code\u003e is called with the domain of cell.\n Calculation is performed in parallel.\n\u003c/p\u003e\u003cp\u003eSince our grid are static, this is usually done only once when the\n grid is first defined. We throw away the used seeds.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "cellVolumes",
          "package": "dsmc",
          "signature": "ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e Vector Double",
          "type": "function"
        },
        "index": {
          "description": "Calculate volumes of grid cells wrt body within the domain For every cell freeVolume is called with the domain of cell Calculation is performed in parallel Since our grid are static this is usually done only once when the grid is first defined We throw away the used seeds",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "cellVolumes",
          "normalized": "ParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eVector Double",
          "package": "dsmc",
          "partial": "Volumes",
          "signature": "ParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:cellVolumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCell count and classifier function.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "classifier",
          "package": "dsmc",
          "signature": "(Int, Classifier)",
          "source": "src/DSMC-Cells.html#GridWares",
          "type": "function"
        },
        "index": {
          "description": "Cell count and classifier function",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "classifier",
          "normalized": "(Int,Classifier)",
          "package": "dsmc",
          "signature": "(Int,Classifier)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:classifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassify particle ensemble into \u003ccode\u003eN\u003c/code\u003e cells using the classifier\n function.\n\u003c/p\u003e\u003cp\u003eClassifier's extent must match \u003ccode\u003eN\u003c/code\u003e, yielding numbers between \u003ccode\u003e0\u003c/code\u003e\n and \u003ccode\u003eN-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "classifyParticles",
          "package": "dsmc",
          "signature": "(Int, Classifier)-\u003e Ensemble-\u003e Cells",
          "type": "function"
        },
        "index": {
          "description": "Classify particle ensemble into cells using the classifier function Classifier extent must match yielding numbers between and N-1",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "classifyParticles",
          "normalized": "(Int,Classifier)-\u003eEnsemble-\u003eCells",
          "package": "dsmc",
          "partial": "Particles",
          "signature": "(Int,Classifier)-\u003eEnsemble-\u003eCells",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:classifyParticles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch contents of n-th cell.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "getCell",
          "package": "dsmc",
          "signature": "Cells-\u003e Int-\u003e Maybe CellContents",
          "type": "function"
        },
        "index": {
          "description": "Fetch contents of n-th cell",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "getCell",
          "normalized": "Cells-\u003eInt-\u003eMaybe CellContents",
          "package": "dsmc",
          "partial": "Cell",
          "signature": "Cells-\u003eInt-\u003eMaybe CellContents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:getCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Cells",
          "name": "indexer",
          "package": "dsmc",
          "signature": "Int -\u003e Point",
          "source": "src/DSMC-Cells.html#GridWares",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "indexer",
          "normalized": "Int-\u003ePoint",
          "package": "dsmc",
          "signature": "Int-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:indexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn grid cell count and classifier for a grid.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "makeUniformClassifier",
          "package": "dsmc",
          "signature": "Grid -\u003e (Int, Classifier)",
          "source": "src/DSMC-Cells.html#makeUniformClassifier",
          "type": "function"
        },
        "index": {
          "description": "Return grid cell count and classifier for grid",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "makeUniformClassifier",
          "normalized": "Grid-\u003e(Int,Classifier)",
          "package": "dsmc",
          "partial": "Uniform Classifier",
          "signature": "Grid-\u003e(Int,Classifier)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:makeUniformClassifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn indexer for a grid.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "makeUniformIndexer",
          "package": "dsmc",
          "signature": "Grid -\u003e Indexer",
          "source": "src/DSMC-Cells.html#makeUniformIndexer",
          "type": "function"
        },
        "index": {
          "description": "Return indexer for grid",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "makeUniformIndexer",
          "normalized": "Grid-\u003eIndexer",
          "package": "dsmc",
          "partial": "Uniform Indexer",
          "signature": "Grid-\u003eIndexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:makeUniformIndexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun action using spatial subdivision.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "runGrid",
          "package": "dsmc",
          "signature": "GridMonad a-\u003e ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e DSMCRootMonad a",
          "type": "function"
        },
        "index": {
          "description": "Run action using spatial subdivision",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "runGrid",
          "normalized": "GridMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eDSMCRootMonad a",
          "package": "dsmc",
          "partial": "Grid",
          "signature": "GridMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eDSMCRootMonad a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:runGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of cell volumes.\n\u003c/p\u003e",
          "module": "DSMC.Cells",
          "name": "volumes",
          "package": "dsmc",
          "signature": "(Vector Double)",
          "source": "src/DSMC-Cells.html#GridWares",
          "type": "function"
        },
        "index": {
          "description": "Vector of cell volumes",
          "hierarchy": "DSMC Cells",
          "module": "DSMC.Cells",
          "name": "volumes",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Cells.html#v:volumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDomain operations: defining domains; free flow boundary conditions &\nclipping for DSMC steps.\n\u003c/p\u003e\u003cp\u003ePRNG required to sample molecular velocities implies monadic interface\nfor most of operations. We use functions specifically typed for \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "source": "src/DSMC-Domain.html",
          "type": "module"
        },
        "index": {
          "description": "Domain operations defining domains free flow boundary conditions clipping for DSMC steps PRNG required to sample molecular velocities implies monadic interface for most of operations We use functions specifically typed for ST",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "partial": "Domain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain in which particles are spawned or system evolution is\n simulated.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "source": "src/DSMC-Domain.html#Domain",
          "type": "data"
        },
        "index": {
          "description": "Domain in which particles are spawned or system evolution is simulated",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "partial": "Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePRNG seeds used by particle generators.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "DomainSeeds",
          "package": "dsmc",
          "source": "src/DSMC-Domain.html#DomainSeeds",
          "type": "type"
        },
        "index": {
          "description": "PRNG seeds used by particle generators",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "DomainSeeds",
          "package": "dsmc",
          "partial": "Domain Seeds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#t:DomainSeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangular volume, given by min/max value on every\n dimension.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "signature": "Domain !Double !Double !Double !Double !Double !Double",
          "source": "src/DSMC-Domain.html#Domain",
          "type": "function"
        },
        "index": {
          "description": "Rectangular volume given by min max value on every dimension",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "Domain",
          "package": "dsmc",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out particles which are outside of the domain.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "clipToDomain",
          "package": "dsmc",
          "signature": "Domain -\u003e Ensemble -\u003e Ensemble",
          "source": "src/DSMC-Domain.html#clipToDomain",
          "type": "function"
        },
        "index": {
          "description": "Filter out particles which are outside of the domain",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "clipToDomain",
          "normalized": "Domain-\u003eEnsemble-\u003eEnsemble",
          "package": "dsmc",
          "partial": "To Domain",
          "signature": "Domain-\u003eEnsemble-\u003eEnsemble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:clipToDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVolume of a domain unoccupied by a given body, in m^3.\n\u003c/p\u003e\u003cp\u003eWe use Monte Carlo method to calculate the approximate body volume\n and then subtract it from the overall domain volume.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "freeVolume",
          "package": "dsmc",
          "signature": "Domain-\u003e Body-\u003e Int-\u003e GenST s-\u003e ST s Double",
          "type": "function"
        },
        "index": {
          "description": "Volume of domain unoccupied by given body in We use Monte Carlo method to calculate the approximate body volume and then subtract it from the overall domain volume",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "freeVolume",
          "normalized": "Domain-\u003eBody-\u003eInt-\u003eGenST a-\u003eST a Double",
          "package": "dsmc",
          "partial": "Volume",
          "signature": "Domain-\u003eBody-\u003eInt-\u003eGenST s-\u003eST s Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:freeVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential \u003ccode\u003e\u003ca\u003efreeVolume\u003c/a\u003e\u003c/code\u003e for a vector of domains.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "freeVolumes",
          "package": "dsmc",
          "signature": "Body -\u003e Int -\u003e GenST s -\u003e Vector Domain -\u003e ST s (Vector Double)",
          "source": "src/DSMC-Domain.html#freeVolumes",
          "type": "function"
        },
        "index": {
          "description": "Sequential freeVolume for vector of domains",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "freeVolumes",
          "normalized": "Body-\u003eInt-\u003eGenST a-\u003eVector Domain-\u003eST a(Vector Double)",
          "package": "dsmc",
          "partial": "Volumes",
          "signature": "Body-\u003eInt-\u003eGenST s-\u003eVector Domain-\u003eST s(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:freeVolumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate geometric center of a domain.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "getCenter",
          "package": "dsmc",
          "signature": "Domain -\u003e Point",
          "source": "src/DSMC-Domain.html#getCenter",
          "type": "function"
        },
        "index": {
          "description": "Calculate geometric center of domain",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "getCenter",
          "normalized": "Domain-\u003ePoint",
          "package": "dsmc",
          "partial": "Center",
          "signature": "Domain-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:getCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate width, length and height of a domain, which are\n dimensions measured by x, y and z axes, respectively.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "getDimensions",
          "package": "dsmc",
          "signature": "Domain -\u003e (Double, Double, Double)",
          "source": "src/DSMC-Domain.html#getDimensions",
          "type": "function"
        },
        "index": {
          "description": "Calculate width length and height of domain which are dimensions measured by and axes respectively",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "getDimensions",
          "normalized": "Domain-\u003e(Double,Double,Double)",
          "package": "dsmc",
          "partial": "Dimensions",
          "signature": "Domain-\u003e(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:getDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill the domain with particles for given flow parameters.\n Particles inside the body are removed.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "initializeParticles",
          "package": "dsmc",
          "signature": "Domain -\u003e Flow -\u003e Body -\u003e Seed -\u003e (Ensemble, Seed)",
          "source": "src/DSMC-Domain.html#initializeParticles",
          "type": "function"
        },
        "index": {
          "description": "Fill the domain with particles for given flow parameters Particles inside the body are removed",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "initializeParticles",
          "normalized": "Domain-\u003eFlow-\u003eBody-\u003eSeed-\u003e(Ensemble,Seed)",
          "package": "dsmc",
          "partial": "Particles",
          "signature": "Domain-\u003eFlow-\u003eBody-\u003eSeed-\u003e(Ensemble,Seed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:initializeParticles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a rectangular domain with center in the given point and\n dimensions.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "makeDomain",
          "package": "dsmc",
          "signature": "Point-\u003e Double-\u003e Double-\u003e Double-\u003e Domain",
          "type": "function"
        },
        "index": {
          "description": "Create rectangular domain with center in the given point and dimensions",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "makeDomain",
          "normalized": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDomain",
          "package": "dsmc",
          "partial": "Domain",
          "signature": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDomain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:makeDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample new particles in 6 interface domains along each side of\n rectangular simulation domain and add them to existing ensemble.\n\u003c/p\u003e\u003cp\u003eThis function implements open boundary condition for\n three-dimensional simulation domain.\n\u003c/p\u003e\u003cp\u003eInterface domains are built on faces of simulation domain using\n extrusion along the outward normal of the face.\n\u003c/p\u003e\u003cp\u003eIn 2D projection:\n\u003c/p\u003e\u003cpre\u003e          +-----------------+\n          |    Interface1   |\n       +--+-----------------+--+\n       |I3|    Simulation   |I4|\n       |  |      domain     |  |\n       +--+-----------------+--+\n          |        I2       |\n          +-----------------+\n\u003c/pre\u003e\u003cp\u003eParticles in every interface domain are spawned in parallel using\n Strategies.\n\u003c/p\u003e",
          "module": "DSMC.Domain",
          "name": "openBoundaryInjection",
          "package": "dsmc",
          "signature": "DomainSeeds-\u003e Domain-\u003e Double-\u003e Flow-\u003e Ensemble-\u003e (Ensemble, DomainSeeds)",
          "type": "function"
        },
        "index": {
          "description": "Sample new particles in interface domains along each side of rectangular simulation domain and add them to existing ensemble This function implements open boundary condition for three-dimensional simulation domain Interface domains are built on faces of simulation domain using extrusion along the outward normal of the face In projection Interface1 I3 Simulation I4 domain I2 Particles in every interface domain are spawned in parallel using Strategies",
          "hierarchy": "DSMC Domain",
          "module": "DSMC.Domain",
          "name": "openBoundaryInjection",
          "normalized": "DomainSeeds-\u003eDomain-\u003eDouble-\u003eFlow-\u003eEnsemble-\u003e(Ensemble,DomainSeeds)",
          "package": "dsmc",
          "partial": "Boundary Injection",
          "signature": "DomainSeeds-\u003eDomain-\u003eDouble-\u003eFlow-\u003eEnsemble-\u003e(Ensemble,DomainSeeds)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Domain.html#v:openBoundaryInjection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMacroscopic parameters calculation.\n\u003c/p\u003e\u003cp\u003eWe use regular spatial grid and time averaging for sampling. Sampling\nshould start after particle system has reached steady state. Samples\nare then collected in each cell for a certain number of time steps.\n\u003c/p\u003e\u003cp\u003eSampling is performed in \u003ccode\u003e\u003ca\u003eMacroSamplingMonad\u003c/a\u003e\u003c/code\u003e to ensure consistency of\naveraging process. During sampling, basic parameters are calculated\nlike number of molecules per cell or mean square of thermal velocity.\nAfter sampling these are used to derive final (intensive) parameters\nlike number density or temperature.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Macroscopic",
          "name": "Macroscopic",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html",
          "type": "module"
        },
        "index": {
          "description": "Macroscopic parameters calculation We use regular spatial grid and time averaging for sampling Sampling should start after particle system has reached steady state Samples are then collected in each cell for certain number of time steps Sampling is performed in MacroSamplingMonad to ensure consistency of averaging process During sampling basic parameters are calculated like number of molecules per cell or mean square of thermal velocity After sampling these are used to derive final intensive parameters like number density or temperature",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "Macroscopic",
          "package": "dsmc",
          "partial": "Macroscopic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic macroscopic parameters calculated in every cell: particle\n count, mean absolute velocity, mean square of thermal velocity.\n\u003c/p\u003e\u003cp\u003eParticle count is non-integer because of averaging.\n\u003c/p\u003e\u003cp\u003eThese are then post-processed into number density, flow velocity,\n pressure and translational temperature.\n\u003c/p\u003e\u003cp\u003eNote the lack of root on thermal velocity!\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "BasicMacroParameters",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#BasicMacroParameters",
          "type": "type"
        },
        "index": {
          "description": "Basic macroscopic parameters calculated in every cell particle count mean absolute velocity mean square of thermal velocity Particle count is non-integer because of averaging These are then post-processed into number density flow velocity pressure and translational temperature Note the lack of root on thermal velocity",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "BasicMacroParameters",
          "package": "dsmc",
          "partial": "Basic Macro Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:BasicMacroParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntensive macroscopic parameters available after averaging has\n completed. These are: number density, absolute velocity, pressure\n and translational temperature.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "IntensiveMacroParameters",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#IntensiveMacroParameters",
          "type": "type"
        },
        "index": {
          "description": "Intensive macroscopic parameters available after averaging has completed These are number density absolute velocity pressure and translational temperature",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "IntensiveMacroParameters",
          "package": "dsmc",
          "partial": "Intensive Macro Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:IntensiveMacroParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray of central points of grid cells with averaged macroscopic\n parameters attached to every point.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "MacroField",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#MacroField",
          "type": "type"
        },
        "index": {
          "description": "Array of central points of grid cells with averaged macroscopic parameters attached to every point",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "MacroField",
          "package": "dsmc",
          "partial": "Macro Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector which stores averaged macroscropic parameters in each\n cell.\n\u003c/p\u003e\u003cp\u003eIf samples are collected for M iterations, then this vector is\n built as a sum of vectors \u003ccode\u003eV1, .. VM\u003c/code\u003e, where \u003ccode\u003eVi\u003c/code\u003e is vector of\n parameters sampled on \u003ccode\u003ei\u003c/code\u003e-th time step divided by \u003ccode\u003eM\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "MacroSamples",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#MacroSamples",
          "type": "type"
        },
        "index": {
          "description": "Vector which stores averaged macroscropic parameters in each cell If samples are collected for iterations then this vector is built as sum of vectors V1 VM where Vi is vector of parameters sampled on th time step divided by",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "MacroSamples",
          "package": "dsmc",
          "partial": "Macro Samples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad which keeps track of sampling process data and stores\n options of macroscopic sampling.\n\u003c/p\u003e\u003cp\u003eGridMonad is used to ensure that only safe values for cell count\n and classifier are used in \u003ccode\u003e\u003ca\u003eupdateSamples\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eaverageSamples\u003c/code\u003e\n (that may otherwise cause unbounded access errors). Note that\n steady condition is not handled by this monad (instead, caller code\n should decide when to start averaging).\n\u003c/p\u003e\u003cp\u003eInner Reader Monad stores averaging steps setting.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "MacroSamplingMonad",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#MacroSamplingMonad",
          "type": "type"
        },
        "index": {
          "description": "Monad which keeps track of sampling process data and stores options of macroscopic sampling GridMonad is used to ensure that only safe values for cell count and classifier are used in updateSamples and averageSamples that may otherwise cause unbounded access errors Note that steady condition is not handled by this monad instead caller code should decide when to start averaging Inner Reader Monad stores averaging steps setting",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "MacroSamplingMonad",
          "package": "dsmc",
          "partial": "Macro Sampling Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:MacroSamplingMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of sampling process.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "SamplingState",
          "package": "dsmc",
          "source": "src/DSMC-Macroscopic.html#SamplingState",
          "type": "data"
        },
        "index": {
          "description": "State of sampling process",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "SamplingState",
          "package": "dsmc",
          "partial": "Sampling State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#t:SamplingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAveraging is complete, use \u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e to\n unload the samples.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "Complete",
          "package": "dsmc",
          "signature": "Complete MacroSamples",
          "source": "src/DSMC-Macroscopic.html#SamplingState",
          "type": "function"
        },
        "index": {
          "description": "Averaging is complete use getField to unload the samples",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "Complete",
          "package": "dsmc",
          "partial": "Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:Complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling is in progress, not enough samples\n yet. Integer field indicates how many steps are\n left.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "Incomplete",
          "package": "dsmc",
          "signature": "Incomplete Int MacroSamples",
          "source": "src/DSMC-Macroscopic.html#SamplingState",
          "type": "function"
        },
        "index": {
          "description": "Sampling is in progress not enough samples yet Integer field indicates how many steps are left",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "Incomplete",
          "package": "dsmc",
          "partial": "Incomplete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:Incomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling has not started yet.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "None",
          "package": "dsmc",
          "signature": "None",
          "source": "src/DSMC-Macroscopic.html#SamplingState",
          "type": "function"
        },
        "index": {
          "description": "Sampling has not started yet",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "None",
          "package": "dsmc",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch macroscopic field of intensive parameters if averaging is\n complete.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "getField",
          "package": "dsmc",
          "signature": "Double-\u003e Double-\u003e MacroSamplingMonad (Maybe MacroField)",
          "type": "function"
        },
        "index": {
          "description": "Fetch macroscopic field of intensive parameters if averaging is complete",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "getField",
          "normalized": "Double-\u003eDouble-\u003eMacroSamplingMonad(Maybe MacroField)",
          "package": "dsmc",
          "partial": "Field",
          "signature": "Double-\u003eDouble-\u003eMacroSamplingMonad(Maybe MacroField)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eMacroSamplingMonad\u003c/a\u003e\u003c/code\u003e action with given sampling options and\n return final \u003ccode\u003e\u003ca\u003eComplete\u003c/a\u003e\u003c/code\u003e state with macroscopic samples.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "runMacroSampling",
          "package": "dsmc",
          "signature": "MacroSamplingMonad r-\u003e ParallelSeeds-\u003e Grid-\u003e Body-\u003e Int-\u003e Int-\u003e DSMCRootMonad (r, SamplingState)",
          "type": "function"
        },
        "index": {
          "description": "Run MacroSamplingMonad action with given sampling options and return final Complete state with macroscopic samples",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "runMacroSampling",
          "normalized": "MacroSamplingMonad a-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eInt-\u003eDSMCRootMonad(a,SamplingState)",
          "package": "dsmc",
          "partial": "Macro Sampling",
          "signature": "MacroSamplingMonad r-\u003eParallelSeeds-\u003eGrid-\u003eBody-\u003eInt-\u003eInt-\u003eDSMCRootMonad(r,SamplingState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:runMacroSampling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather samples from ensemble. Return True if sampling is\n finished, False otherwise.\n\u003c/p\u003e",
          "module": "DSMC.Macroscopic",
          "name": "updateSamples",
          "package": "dsmc",
          "signature": "Ensemble -\u003e MacroSamplingMonad Bool",
          "source": "src/DSMC-Macroscopic.html#updateSamples",
          "type": "function"
        },
        "index": {
          "description": "Gather samples from ensemble Return True if sampling is finished False otherwise",
          "hierarchy": "DSMC Macroscopic",
          "module": "DSMC.Macroscopic",
          "name": "updateSamples",
          "normalized": "Ensemble-\u003eMacroSamplingMonad Bool",
          "package": "dsmc",
          "partial": "Samples",
          "signature": "Ensemble-\u003eMacroSamplingMonad Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Macroscopic.html#v:updateSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollisionless motion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Motion",
          "name": "Motion",
          "package": "dsmc",
          "source": "src/DSMC-Motion.html",
          "type": "module"
        },
        "index": {
          "description": "Collisionless motion",
          "hierarchy": "DSMC Motion",
          "module": "DSMC.Motion",
          "name": "Motion",
          "package": "dsmc",
          "partial": "Motion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Motion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollisionless motion step.\n\u003c/p\u003e",
          "module": "[\"DSMC.Motion\",\"DSMC\"]",
          "name": "motion",
          "package": "dsmc",
          "signature": "ParallelSeeds -\u003e Body -\u003e Time -\u003e Surface -\u003e Ensemble -\u003e (Ensemble, ParallelSeeds)",
          "source": "src/DSMC-Motion.html#motion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dsmc/docs/DSMC-Motion.html#v:motion\",\"http://hackage.haskell.org/package/dsmc/docs/DSMC.html#v:motion\"]"
        },
        "index": {
          "description": "Collisionless motion step",
          "hierarchy": "DSMC Motion",
          "module": "DSMC.Motion",
          "name": "motion",
          "normalized": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)",
          "package": "dsmc",
          "signature": "ParallelSeeds-\u003eBody-\u003eTime-\u003eSurface-\u003eEnsemble-\u003e(Ensemble,ParallelSeeds)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Motion.html#v:motion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParticles, ensembles, flow parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Particles",
          "name": "Particles",
          "package": "dsmc",
          "source": "src/DSMC-Particles.html",
          "type": "module"
        },
        "index": {
          "description": "Particles ensembles flow parameters",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "Particles",
          "package": "dsmc",
          "partial": "Particles",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepa array of particles.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "Ensemble",
          "package": "dsmc",
          "source": "src/DSMC-Particles.html#Ensemble",
          "type": "type"
        },
        "index": {
          "description": "Repa array of particles",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "Ensemble",
          "package": "dsmc",
          "partial": "Ensemble",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Ensemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlow with given concentration, temperature, mass of molecule and\n macroscopic velocity.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "Flow",
          "package": "dsmc",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "data"
        },
        "index": {
          "description": "Flow with given concentration temperature mass of molecule and macroscopic velocity",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "Flow",
          "package": "dsmc",
          "partial": "Flow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGas particle with position and velocity.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "Particle",
          "package": "dsmc",
          "source": "src/DSMC-Particles.html#Particle",
          "type": "type"
        },
        "index": {
          "description": "Gas particle with position and velocity",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "Particle",
          "package": "dsmc",
          "partial": "Particle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#t:Particle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Particles",
          "name": "Flow",
          "package": "dsmc",
          "signature": "Flow",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "Flow",
          "package": "dsmc",
          "partial": "Flow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Particles",
          "name": "concentration",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "concentration",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:concentration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsemble with zero particles in it.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "emptyEnsemble",
          "package": "dsmc",
          "signature": "Ensemble",
          "source": "src/DSMC-Particles.html#emptyEnsemble",
          "type": "function"
        },
        "index": {
          "description": "Ensemble with zero particles in it",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "emptyEnsemble",
          "package": "dsmc",
          "partial": "Ensemble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:emptyEnsemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of particles in an ensemble.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "ensembleSize",
          "package": "dsmc",
          "signature": "Ensemble -\u003e Int",
          "source": "src/DSMC-Particles.html#ensembleSize",
          "type": "function"
        },
        "index": {
          "description": "Amount of particles in an ensemble",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "ensembleSize",
          "normalized": "Ensemble-\u003eInt",
          "package": "dsmc",
          "partial": "Size",
          "signature": "Ensemble-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:ensembleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out those particles which do not satisfy the predicate.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "filterEnsemble",
          "package": "dsmc",
          "signature": "(Particle -\u003e Bool) -\u003e Ensemble -\u003e Ensemble",
          "source": "src/DSMC-Particles.html#filterEnsemble",
          "type": "function"
        },
        "index": {
          "description": "Filter out those particles which do not satisfy the predicate",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "filterEnsemble",
          "normalized": "(Particle-\u003eBool)-\u003eEnsemble-\u003eEnsemble",
          "package": "dsmc",
          "partial": "Ensemble",
          "signature": "(Particle-\u003eBool)-\u003eEnsemble-\u003eEnsemble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:filterEnsemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Particles",
          "name": "mass",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "mass",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate model concentration to simulate real flow concentration\n wrt statistical weight of single particle as set in flow options.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "modelConcentration",
          "package": "dsmc",
          "signature": "Flow -\u003e Double",
          "source": "src/DSMC-Particles.html#modelConcentration",
          "type": "function"
        },
        "index": {
          "description": "Calculate model concentration to simulate real flow concentration wrt statistical weight of single particle as set in flow options",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "modelConcentration",
          "normalized": "Flow-\u003eDouble",
          "package": "dsmc",
          "partial": "Concentration",
          "signature": "Flow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:modelConcentration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinearly move particle for t time and update its position.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "move",
          "package": "dsmc",
          "signature": "Time -\u003e Particle -\u003e Particle",
          "source": "src/DSMC-Particles.html#move",
          "type": "function"
        },
        "index": {
          "description": "Linearly move particle for time and update its position",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "move",
          "normalized": "Time-\u003eParticle-\u003eParticle",
          "package": "dsmc",
          "signature": "Time-\u003eParticle-\u003eParticle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint particles, one per row, using the format:\n\u003c/p\u003e\u003cpre\u003e x y z u v w\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ex y z\u003c/code\u003e are position coordinates and \u003ccode\u003eu v w\u003c/code\u003e are velocity\n components. This is handy for debugging purposes.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "printEnsemble",
          "package": "dsmc",
          "signature": "Ensemble -\u003e IO ()",
          "source": "src/DSMC-Particles.html#printEnsemble",
          "type": "function"
        },
        "index": {
          "description": "Print particles one per row using the format where are position coordinates and are velocity components This is handy for debugging purposes",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "printEnsemble",
          "normalized": "Ensemble-\u003eIO()",
          "package": "dsmc",
          "partial": "Ensemble",
          "signature": "Ensemble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:printEnsemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many real particles a single simulator\n represents.\n\u003c/p\u003e",
          "module": "DSMC.Particles",
          "name": "statWeight",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "description": "How many real particles single simulator represents",
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "statWeight",
          "package": "dsmc",
          "partial": "Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:statWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Particles",
          "name": "temperature",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "temperature",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:temperature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Particles",
          "name": "velocity",
          "package": "dsmc",
          "signature": "Vec3",
          "source": "src/DSMC-Particles.html#Flow",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Particles",
          "module": "DSMC.Particles",
          "name": "velocity",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Particles.html#v:velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGas-surface interaction models.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Surface",
          "name": "Surface",
          "package": "dsmc",
          "source": "src/DSMC-Surface.html",
          "type": "module"
        },
        "index": {
          "description": "Gas-surface interaction models",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "Surface",
          "package": "dsmc",
          "partial": "Surface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which takes PRNG state, molecular velocity, surface\n normal and samples post-collisional wrt to impregnable wall\n boundary condition.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "Reflector",
          "package": "dsmc",
          "source": "src/DSMC-Surface.html#Reflector",
          "type": "type"
        },
        "index": {
          "description": "function which takes PRNG state molecular velocity surface normal and samples post-collisional wrt to impregnable wall boundary condition",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "Reflector",
          "package": "dsmc",
          "partial": "Reflector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#t:Reflector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurface models.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "Surface",
          "package": "dsmc",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "data"
        },
        "index": {
          "description": "Surface models",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "Surface",
          "package": "dsmc",
          "partial": "Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCercignani-Lampis-Lord model.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "CLL",
          "package": "dsmc",
          "signature": "CLL",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Cercignani-Lampis-Lord model",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "CLL",
          "package": "dsmc",
          "partial": "CLL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:CLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiffuse reflection.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "Diffuse",
          "package": "dsmc",
          "signature": "Diffuse",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Diffuse reflection",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "Diffuse",
          "package": "dsmc",
          "partial": "Diffuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:Diffuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurface with specular reflection.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "Mirror",
          "package": "dsmc",
          "signature": "Mirror",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Surface with specular reflection",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "Mirror",
          "package": "dsmc",
          "partial": "Mirror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:Mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKinetic energy accomodation for normal\n velocity component.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "alpha",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Kinetic energy accomodation for normal velocity component",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "alpha",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute temperature of surface.\n\u003c/p\u003e\u003cp\u003eAbsolute temperature of surface.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "bodyTemperature",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Absolute temperature of surface Absolute temperature of surface",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "bodyTemperature",
          "package": "dsmc",
          "partial": "Temperature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:bodyTemperature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce reflector depending on surface type.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "makeReflector",
          "package": "dsmc",
          "signature": "Surface -\u003e Reflector s",
          "source": "src/DSMC-Surface.html#makeReflector",
          "type": "function"
        },
        "index": {
          "description": "Produce reflector depending on surface type",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "makeReflector",
          "normalized": "Surface-\u003eReflector a",
          "package": "dsmc",
          "partial": "Reflector",
          "signature": "Surface-\u003eReflector s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:makeReflector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMass of reflected molecules (usually equal\n to that in incident flow).\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "mass",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Mass of reflected molecules usually equal to that in incident flow",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "mass",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccomodation for tangential momentum.\n\u003c/p\u003e",
          "module": "DSMC.Surface",
          "name": "sigma",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Surface.html#Surface",
          "type": "function"
        },
        "index": {
          "description": "Accomodation for tangential momentum",
          "hierarchy": "DSMC Surface",
          "module": "DSMC.Surface",
          "name": "sigma",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Surface.html#v:sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for body definitions.\n\u003c/p\u003e\u003cp\u003eBody definition contains a number of solid definitions and ends\n with the top level object definition. RHS of solid equations may\n reference other solids to compose into complex bodies.\n\u003c/p\u003e\u003cp\u003eMultiple-body compositions are right-associative.\n\u003c/p\u003e\u003cpre\u003e # comment\n\n # define few primitives\n solid b1 = sphere (0, 0, 0; 5);\n solid p1 = plane (0, 0, 0; 1, 0, 0);\n\n # define a composition\n solid body = b1 and p1;\n\n # assign it to be the top level object\n tlo body;\n\u003c/pre\u003e\u003cp\u003eStatements must end with a semicolon (newlines are optional).\n Excessive spaces are ignored.\n\u003c/p\u003e\u003cp\u003eTop-level object line must reference a previously defined solid.\n\u003c/p\u003e\u003cp\u003eSyntax for primitives follows the signatures of \u003ccode\u003eTraceables\u003c/code\u003e\n constructors for \u003ccode\u003e\u003ca\u003eplane\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esphere\u003c/a\u003e\u003c/code\u003e, but differs for cylinder\n and cone, as this module provides access only to frustums\n (\u003ccode\u003e\u003ca\u003ecylinderFrustum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econeFrustum\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eHalf-space\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eplane (px, py, pz; nx, ny, nz)\u003c/code\u003e, where \u003ccode\u003e(px, py, pz)\u003c/code\u003e\n is a point on a plane which defines the half-space and \u003ccode\u003e(nx, ny,\n nz)\u003c/code\u003e is a normal to the plane (outward to the half-space), not\n necessarily a unit vector.\n\u003c/dd\u003e\u003cdt\u003eSphere\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003esphere (cx, cy, cz; r)\u003c/code\u003e, where \u003ccode\u003e(cx, cy, cz)\u003c/code\u003e is a\n central point of a sphere and \u003ccode\u003er\u003c/code\u003e is radius.\n\u003c/dd\u003e\u003cdt\u003eRight circular cylinder\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ecylinder (p1x, p1y, p1z; p2x, p2y, p2z;\n r)\u003c/code\u003e where \u003ccode\u003e(p1x, p1y, p1z)\u003c/code\u003e and \u003ccode\u003e(p2x, p2y, p2z)\u003c/code\u003e are bottom and\n top points on axis and \u003ccode\u003er\u003c/code\u003e is radius.\n\u003c/dd\u003e\u003cdt\u003eRight circular conical frustum\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003econe (p1x, p1y, p1z; r1; p2x,\n p2y, p2z; r2)\u003c/code\u003e where \u003ccode\u003e(p1x, p1y, p1z)\u003c/code\u003e and \u003ccode\u003e(p2x, p2y, p2z)\u003c/code\u003e are\n bottom and top points on cone axis and \u003ccode\u003er1\u003c/code\u003e, \u003ccode\u003er2\u003c/code\u003e are the\n corresponding radii.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "DSMC.Traceables.Parser",
          "name": "Parser",
          "package": "dsmc",
          "source": "src/DSMC-Traceables-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for body definitions Body definition contains number of solid definitions and ends with the top level object definition RHS of solid equations may reference other solids to compose into complex bodies Multiple-body compositions are right-associative comment define few primitives solid b1 sphere solid p1 plane define composition solid body b1 and p1 assign it to be the top level object tlo body Statements must end with semicolon newlines are optional Excessive spaces are ignored Top-level object line must reference previously defined solid Syntax for primitives follows the signatures of Traceables constructors for plane and sphere but differs for cylinder and cone as this module provides access only to frustums cylinderFrustum and coneFrustum Half-space plane px py pz nx ny nz where px py pz is point on plane which defines the half-space and nx ny nz is normal to the plane outward to the half-space not necessarily unit vector Sphere sphere cx cy cz where cx cy cz is central point of sphere and is radius Right circular cylinder cylinder p1x p1y p1z p2x p2y p2z where p1x p1y p1z and p2x p2y p2z are bottom and top points on axis and is radius Right circular conical frustum cone p1x p1y p1z r1 p2x p2y p2z r2 where p1x p1y p1z and p2x p2y p2z are bottom and top points on cone axis and r1 r2 are the corresponding radii",
          "hierarchy": "DSMC Traceables Parser",
          "module": "DSMC.Traceables.Parser",
          "name": "Parser",
          "package": "dsmc",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read body definition from bytestring. Return body or error\n message if parsing fails.\n\u003c/p\u003e",
          "module": "DSMC.Traceables.Parser",
          "name": "parseBody",
          "package": "dsmc",
          "signature": "ByteString -\u003e Either String Body",
          "source": "src/DSMC-Traceables-Parser.html#parseBody",
          "type": "function"
        },
        "index": {
          "description": "Try to read body definition from bytestring Return body or error message if parsing fails",
          "hierarchy": "DSMC Traceables Parser",
          "module": "DSMC.Traceables.Parser",
          "name": "parseBody",
          "normalized": "ByteString-\u003eEither String Body",
          "package": "dsmc",
          "partial": "Body",
          "signature": "ByteString-\u003eEither String Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#v:parseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead body definition from file. If parsing fails or IOError when\n reading file occurs, return error message.\n\u003c/p\u003e",
          "module": "DSMC.Traceables.Parser",
          "name": "parseBodyFile",
          "package": "dsmc",
          "signature": "FilePath -\u003e IO (Either String Body)",
          "source": "src/DSMC-Traceables-Parser.html#parseBodyFile",
          "type": "function"
        },
        "index": {
          "description": "Read body definition from file If parsing fails or IOError when reading file occurs return error message",
          "hierarchy": "DSMC Traceables Parser",
          "module": "DSMC.Traceables.Parser",
          "name": "parseBodyFile",
          "normalized": "FilePath-\u003eIO(Either String Body)",
          "package": "dsmc",
          "partial": "Body File",
          "signature": "FilePath-\u003eIO(Either String Body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables-Parser.html#v:parseBodyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRay-casting routines for constructive solid geometry.\n\u003c/p\u003e\u003cp\u003eThis module provides constructors for complex bodies as well as\nroutines to compute intersections of such bodies with ray. In DSMC it\nis used to calculate points at which particles hit the body surface.\n\u003c/p\u003e\u003cp\u003eGas-surface interactions are not handled by this module, see\n\u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Traceables",
          "name": "Traceables",
          "package": "dsmc",
          "source": "src/DSMC-Traceables.html",
          "type": "module"
        },
        "index": {
          "description": "Ray-casting routines for constructive solid geometry This module provides constructors for complex bodies as well as routines to compute intersections of such bodies with ray In DSMC it is used to calculate points at which particles hit the body surface Gas-surface interactions are not handled by this module see Surface instead",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "Traceables",
          "package": "dsmc",
          "partial": "Traceables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSG body is a recursive composition of primitive objects or other\n bodies.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "Body",
          "package": "dsmc",
          "source": "src/DSMC-Traceables.html#Body",
          "type": "data"
        },
        "index": {
          "description": "CSG body is recursive composition of primitive objects or other bodies",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "Body",
          "package": "dsmc",
          "partial": "Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime when particle hits the surface with normal at the hit point.\n If hit is in infinity, then normal is Nothing.\n\u003c/p\u003e\u003cp\u003eNote that this datatype is strict only on first argument: we do not\n compare normals when classifying traces.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "HitPoint",
          "package": "dsmc",
          "source": "src/DSMC-Traceables.html#HitPoint",
          "type": "data"
        },
        "index": {
          "description": "Time when particle hits the surface with normal at the hit point If hit is in infinity then normal is Nothing Note that this datatype is strict only on first argument we do not compare normals when classifying traces",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "HitPoint",
          "package": "dsmc",
          "partial": "Hit Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:HitPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA segment on time line when particle is inside the body.\n\u003c/p\u003e\u003cp\u003eUsing strict tuple performs better: 100 traces for 350K\n particles perform roughly 7s against 8s with common datatypes.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "HitSegment",
          "package": "dsmc",
          "source": "src/DSMC-Traceables.html#HitSegment",
          "type": "type"
        },
        "index": {
          "description": "segment on time line when particle is inside the body Using strict tuple performs better traces for particles perform roughly against with common datatypes",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "HitSegment",
          "package": "dsmc",
          "partial": "Hit Segment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:HitSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace of a linearly-moving particle on a body is a list of time\n segments/intervals during which the particle is inside the body.\n\u003c/p\u003e\u003cpre\u003e                       # - particle\n                        \\\n                         \\\n                          o------------\n                      ---/ *           \\---\n                    -/      *              \\-\n                   /         *               \\\n                  (           *  - trace      )\n                   \\           *             /\n                    -\\          *          /-\n       primitive -  ---\\         *     /---\n                          --------o----\n                                   \\\n                                    \\\n                                    _\\/\n                                      \\\n\u003c/pre\u003e\u003cp\u003eFor example, since a ray intersects a plane only once, a half-space\n primitive defined by this plane results in a half-interval trace of\n a particle:\n\u003c/p\u003e\u003cpre\u003e                                          /\n                                         /\n                                        /\n              #------------------------o*****************\u003e\n              |                       /                  |\n           particle                  /            goes to infinity\n                                    /\n                                   /\n                                  /\n                                 / - surface of half-space\n\u003c/pre\u003e\u003cp\u003eEnds of segments or intervals are calculated by intersecting the\n trajectory ray of a particle and the surface of the primitive. This\n may be done by substituting the equation of trajectory \u003ccode\u003eX(t) = X_o\n + V*t\u003c/code\u003e into the equation which defines the surface and solving it\n for \u003ccode\u003et\u003c/code\u003e. If the body is a composition, traces from primitives are\n then classified according to operators used to define the body\n (union, intersection or complement).\n\u003c/p\u003e\u003cp\u003eAlthough only convex primitives are used in current implementation,\n compositions may result in concave bodies, which is why trace is\n defined as a list of segments.\n\u003c/p\u003e\u003cp\u003eIn this example, body is an intersection of a sphere and sphere\n complement:\n\u003c/p\u003e\u003cpre\u003e                                /|\\\n                                 |\n                                 |\n                                 |\n                   -----------   |\n              ----/           \\--o-\n            -/                   * \\-\n          -/               hs2 - *   \\\n        -/                       * ---/\n       /                         o/\n      /                        -/|\n     /                        /  |\n     |                       /   |\n    /                        |   |\n    |                       /    |\n    |                       |    |\n    |                       \\    |\n    \\                        |   |\n     |                       \\   |\n     \\                        \\  |\n      \\                        -\\|\n       \\                         o\\\n        -\\                       * ---\\\n          -\\               hs1 - *   /\n            -\\                   * /-\n              ----\\           /--o-\n                   -----------   |\n                                 |\n                                 |\n                                 # - particle\n\u003c/pre\u003e\u003cp\u003eIf only intersections of concave primitives were allowed, then\n trace type might be simplified to be just single \u003ccode\u003e\u003ca\u003eHitSegment\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "Trace",
          "package": "dsmc",
          "source": "src/DSMC-Traceables.html#Trace",
          "type": "type"
        },
        "index": {
          "description": "Trace of linearly-moving particle on body is list of time segments intervals during which the particle is inside the body particle trace primitive For example since ray intersects plane only once half-space primitive defined by this plane results in half-interval trace of particle particle goes to infinity surface of half-space Ends of segments or intervals are calculated by intersecting the trajectory ray of particle and the surface of the primitive This may be done by substituting the equation of trajectory into the equation which defines the surface and solving it for If the body is composition traces from primitives are then classified according to operators used to define the body union intersection or complement Although only convex primitives are used in current implementation compositions may result in concave bodies which is why trace is defined as list of segments In this example body is an intersection of sphere and sphere complement hs2 hs1 particle If only intersections of concave primitives were allowed then trace type might be simplified to be just single HitSegment",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "Trace",
          "package": "dsmc",
          "partial": "Trace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSMC.Traceables",
          "name": "HitPoint",
          "package": "dsmc",
          "signature": "HitPoint !Double (Maybe Vec3)",
          "source": "src/DSMC-Traceables.html#HitPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "HitPoint",
          "package": "dsmc",
          "partial": "Hit Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:HitPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplement to a body (normals flipped).\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "complement",
          "package": "dsmc",
          "signature": "Body -\u003e Body",
          "source": "src/DSMC-Traceables.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Complement to body normals flipped",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "complement",
          "normalized": "Body-\u003eBody",
          "package": "dsmc",
          "signature": "Body-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite right circular cone defined by outward axis vector,\n apex point and angle between generatrix and axis (in degrees, less\n than 90).\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "cone",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Point -\u003e Double -\u003e Body",
          "source": "src/DSMC-Traceables.html#cone",
          "type": "function"
        },
        "index": {
          "description": "An infinite right circular cone defined by outward axis vector apex point and angle between generatrix and axis in degrees less than",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "cone",
          "normalized": "Vec-\u003ePoint-\u003eDouble-\u003eBody",
          "package": "dsmc",
          "signature": "Vec-\u003ePoint-\u003eDouble-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conical frustum given by two points on its axis with radii at\n that points. One of radii may be zero (in which case one of frustum\n ends will be the apex).\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "coneFrustum",
          "package": "dsmc",
          "signature": "(Point, Double) -\u003e (Point, Double) -\u003e Body",
          "source": "src/DSMC-Traceables.html#coneFrustum",
          "type": "function"
        },
        "index": {
          "description": "conical frustum given by two points on its axis with radii at that points One of radii may be zero in which case one of frustum ends will be the apex",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "coneFrustum",
          "normalized": "(Point,Double)-\u003e(Point,Double)-\u003eBody",
          "package": "dsmc",
          "partial": "Frustum",
          "signature": "(Point,Double)-\u003e(Point,Double)-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:coneFrustum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite circular cylinder defined by two arbitary\n points on axis and radius.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "cylinder",
          "package": "dsmc",
          "signature": "Point -\u003e Point -\u003e Double -\u003e Body",
          "source": "src/DSMC-Traceables.html#cylinder",
          "type": "function"
        },
        "index": {
          "description": "An infinite circular cylinder defined by two arbitary points on axis and radius",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "cylinder",
          "normalized": "Point-\u003ePoint-\u003eDouble-\u003eBody",
          "package": "dsmc",
          "signature": "Point-\u003ePoint-\u003eDouble-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cylinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite right circular cylinder defined by two points on its top\n and bottom and radius.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "cylinderFrustum",
          "package": "dsmc",
          "signature": "Point -\u003e Point -\u003e Double -\u003e Body",
          "source": "src/DSMC-Traceables.html#cylinderFrustum",
          "type": "function"
        },
        "index": {
          "description": "finite right circular cylinder defined by two points on its top and bottom and radius",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "cylinderFrustum",
          "normalized": "Point-\u003ePoint-\u003eDouble-\u003eBody",
          "package": "dsmc",
          "partial": "Frustum",
          "signature": "Point-\u003ePoint-\u003eDouble-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:cylinderFrustum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the particle has hit the body during last time step, calculate\n the first corresponding \u003ccode\u003e\u003ca\u003eHitPoint\u003c/a\u003e\u003c/code\u003e. Note that the time at which the hit\n occured will be negative. This is the primary function to calculate\n ray-body intersections.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "hitPoint",
          "package": "dsmc",
          "signature": "Time -\u003e Body -\u003e Particle -\u003e Maybe HitPoint",
          "source": "src/DSMC-Traceables.html#hitPoint",
          "type": "function"
        },
        "index": {
          "description": "If the particle has hit the body during last time step calculate the first corresponding HitPoint Note that the time at which the hit occured will be negative This is the primary function to calculate ray-body intersections",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "hitPoint",
          "normalized": "Time-\u003eBody-\u003eParticle-\u003eMaybe HitPoint",
          "package": "dsmc",
          "partial": "Point",
          "signature": "Time-\u003eBody-\u003eParticle-\u003eMaybe HitPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:hitPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if particle is in inside the body.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "inside",
          "package": "dsmc",
          "signature": "Body -\u003e Particle -\u003e Bool",
          "source": "src/DSMC-Traceables.html#inside",
          "type": "function"
        },
        "index": {
          "description": "True if particle is in inside the body",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "inside",
          "normalized": "Body-\u003eParticle-\u003eBool",
          "package": "dsmc",
          "signature": "Body-\u003eParticle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of two bodies.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "intersect",
          "package": "dsmc",
          "signature": "Body -\u003e Body -\u003e Body",
          "source": "src/DSMC-Traceables.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two bodies",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "intersect",
          "normalized": "Body-\u003eBody-\u003eBody",
          "package": "dsmc",
          "signature": "Body-\u003eBody-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA half-space defined by arbitary point on the boundary plane and\n outward normal (not necessarily a unit vector).\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "plane",
          "package": "dsmc",
          "signature": "Point -\u003e Vec3 -\u003e Body",
          "source": "src/DSMC-Traceables.html#plane",
          "type": "function"
        },
        "index": {
          "description": "half-space defined by arbitary point on the boundary plane and outward normal not necessarily unit vector",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "plane",
          "normalized": "Point-\u003eVec-\u003eBody",
          "package": "dsmc",
          "signature": "Point-\u003eVec-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:plane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sphere defined by center point and radius.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "sphere",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Double -\u003e Body",
          "source": "src/DSMC-Traceables.html#sphere",
          "type": "function"
        },
        "index": {
          "description": "sphere defined by center point and radius",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "sphere",
          "normalized": "Vec-\u003eDouble-\u003eBody",
          "package": "dsmc",
          "signature": "Vec-\u003eDouble-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a trace of a particle on a body.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "trace",
          "package": "dsmc",
          "signature": "Body -\u003e Particle -\u003e Trace",
          "source": "src/DSMC-Traceables.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Calculate trace of particle on body",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "trace",
          "normalized": "Body-\u003eParticle-\u003eTrace",
          "package": "dsmc",
          "signature": "Body-\u003eParticle-\u003eTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two bodies.\n\u003c/p\u003e",
          "module": "DSMC.Traceables",
          "name": "unite",
          "package": "dsmc",
          "signature": "Body -\u003e Body -\u003e Body",
          "source": "src/DSMC-Traceables.html#unite",
          "type": "function"
        },
        "index": {
          "description": "Union of two bodies",
          "hierarchy": "DSMC Traceables",
          "module": "DSMC.Traceables",
          "name": "unite",
          "normalized": "Body-\u003eBody-\u003eBody",
          "package": "dsmc",
          "signature": "Body-\u003eBody-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Traceables.html#v:unite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePhysical constants.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Util.Constants",
          "name": "Constants",
          "package": "dsmc",
          "source": "src/DSMC-Util-Constants.html",
          "type": "module"
        },
        "index": {
          "description": "Physical constants",
          "hierarchy": "DSMC Util Constants",
          "module": "DSMC.Util.Constants",
          "name": "Constants",
          "package": "dsmc",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic mass unit 1.660538921(73)e-27, inverse to Avogadro's\n constant.\n\u003c/p\u003e",
          "module": "DSMC.Util.Constants",
          "name": "amu",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Util-Constants.html#amu",
          "type": "function"
        },
        "index": {
          "description": "Atomic mass unit e-27 inverse to Avogadro constant",
          "hierarchy": "DSMC Util Constants",
          "module": "DSMC.Util.Constants",
          "name": "amu",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:amu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvogadro constant 6.02214129(27)e23\n\u003c/p\u003e",
          "module": "DSMC.Util.Constants",
          "name": "avogadro",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Util-Constants.html#avogadro",
          "type": "function"
        },
        "index": {
          "description": "Avogadro constant e23",
          "hierarchy": "DSMC Util Constants",
          "module": "DSMC.Util.Constants",
          "name": "avogadro",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:avogadro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoltzmann constant 1.3806488(13)e-23\n\u003c/p\u003e",
          "module": "DSMC.Util.Constants",
          "name": "boltzmann",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Util-Constants.html#boltzmann",
          "type": "function"
        },
        "index": {
          "description": "Boltzmann constant e-23",
          "hierarchy": "DSMC Util Constants",
          "module": "DSMC.Util.Constants",
          "name": "boltzmann",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:boltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal gas constant.\n\u003c/p\u003e",
          "module": "DSMC.Util.Constants",
          "name": "unigas",
          "package": "dsmc",
          "signature": "Double",
          "source": "src/DSMC-Util-Constants.html#unigas",
          "type": "function"
        },
        "index": {
          "description": "Universal gas constant",
          "hierarchy": "DSMC Util Constants",
          "module": "DSMC.Util.Constants",
          "name": "unigas",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Constants.html#v:unigas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple 3-vectors and matrices built atop tuples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC.Util.Vector",
          "name": "Vector",
          "package": "dsmc",
          "source": "src/DSMC-Util-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Simple vectors and matrices built atop tuples",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "Vector",
          "package": "dsmc",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix given by its rows.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "Matrix",
          "package": "dsmc",
          "source": "src/DSMC-Util-Vector.html#Matrix",
          "type": "type"
        },
        "index": {
          "description": "Matrix given by its rows",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "Matrix",
          "package": "dsmc",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint in \u003ccode\u003eR^3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "Point",
          "package": "dsmc",
          "source": "src/DSMC-Util-Vector.html#Point",
          "type": "type"
        },
        "index": {
          "description": "Point in",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "Point",
          "package": "dsmc",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector in \u003ccode\u003eR^3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "Vec3",
          "package": "dsmc",
          "source": "src/DSMC-Util-Vector.html#Vec3",
          "type": "type"
        },
        "index": {
          "description": "Vector in",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "Vec3",
          "package": "dsmc",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "(\u003c+\u003e)",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Add two vectors",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Vec-\u003eVec-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "(\u003c-\u003e)",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Subtract two vectors",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Vec-\u003eVec-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVec3 cross product.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "(\u003e\u003c)",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "Vec3 cross product",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "Vec-\u003eVec-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVec3 dot product.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "(.*)",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Double",
          "source": "src/DSMC-Util-Vector.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Vec3 dot product",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "(.*) .*",
          "normalized": "Vec-\u003eVec-\u003eDouble",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale vector.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "(.^)",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Double -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#.%5E",
          "type": "function"
        },
        "index": {
          "description": "Scale vector",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "(.^) .^",
          "normalized": "Vec-\u003eDouble-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eDouble-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two matrices.\n\u003c/p\u003e\u003cp\u003eWe could add Applicative instance for Matrix and lift (+) to it.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "addM",
          "package": "dsmc",
          "signature": "Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/DSMC-Util-Vector.html#addM",
          "type": "function"
        },
        "index": {
          "description": "Add two matrices We could add Applicative instance for Matrix and lift to it",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "addM",
          "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
          "package": "dsmc",
          "signature": "Matrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:addM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild cartesian axes from yaw and pitch with 0 roll. Angles are\n in radians.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "buildCartesian",
          "package": "dsmc",
          "signature": "Double -\u003e Double -\u003e (Vec3, Vec3, Vec3)",
          "source": "src/DSMC-Util-Vector.html#buildCartesian",
          "type": "function"
        },
        "index": {
          "description": "Build cartesian axes from yaw and pitch with roll Angles are in radians",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "buildCartesian",
          "normalized": "Double-\u003eDouble-\u003e(Vec,Vec,Vec)",
          "package": "dsmc",
          "partial": "Cartesian",
          "signature": "Double-\u003eDouble-\u003e(Vec,Vec,Vec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:buildCartesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce matrix with diagonal elements equal to given value.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "diag",
          "package": "dsmc",
          "signature": "Double -\u003e Matrix",
          "source": "src/DSMC-Util-Vector.html#diag",
          "type": "function"
        },
        "index": {
          "description": "Produce matrix with diagonal elements equal to given value",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "diag",
          "normalized": "Double-\u003eMatrix",
          "package": "dsmc",
          "signature": "Double-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean distance between two points.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "distance",
          "package": "dsmc",
          "signature": "Point -\u003e Point -\u003e Double",
          "source": "src/DSMC-Util-Vector.html#distance",
          "type": "function"
        },
        "index": {
          "description": "Euclidean distance between two points",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "distance",
          "normalized": "Point-\u003ePoint-\u003eDouble",
          "package": "dsmc",
          "signature": "Point-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric vector dot product.\n\u003c/p\u003e\u003cp\u003eMultiply transpose of first vector by given matrix, then multiply\n the result by second vector.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "dotM",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Matrix -\u003e Double",
          "source": "src/DSMC-Util-Vector.html#dotM",
          "type": "function"
        },
        "index": {
          "description": "Generic vector dot product Multiply transpose of first vector by given matrix then multiply the result by second vector",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "dotM",
          "normalized": "Vec-\u003eVec-\u003eMatrix-\u003eDouble",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eMatrix-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:dotM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale vector by -1.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "invert",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Scale vector by",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "invert",
          "normalized": "Vec-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove point by velocity vector for given time and return new\n position.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "moveBy",
          "package": "dsmc",
          "signature": "Point-\u003e Vec3-\u003e Double-\u003e Point",
          "type": "function"
        },
        "index": {
          "description": "Move point by velocity vector for given time and return new position",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "moveBy",
          "normalized": "Point-\u003eVec-\u003eDouble-\u003ePoint",
          "package": "dsmc",
          "partial": "By",
          "signature": "Point-\u003eVec-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:moveBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply matrix (given by row vectors) and vector\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "mxv",
          "package": "dsmc",
          "signature": "Matrix -\u003e Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#mxv",
          "type": "function"
        },
        "index": {
          "description": "Multiply matrix given by row vectors and vector",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "mxv",
          "normalized": "Matrix-\u003eVec-\u003eVec",
          "package": "dsmc",
          "signature": "Matrix-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:mxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean norm of vector.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "norm",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Double",
          "source": "src/DSMC-Util-Vector.html#norm",
          "type": "function"
        },
        "index": {
          "description": "Euclidean norm of vector",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "norm",
          "normalized": "Vec-\u003eDouble",
          "package": "dsmc",
          "signature": "Vec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce unit vector with same direction as the original one.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "normalize",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3",
          "source": "src/DSMC-Util-Vector.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Produce unit vector with same direction as the original one",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "normalize",
          "normalized": "Vec-\u003eVec",
          "package": "dsmc",
          "signature": "Vec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrigin point \u003ccode\u003e(0, 0, 0)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "origin",
          "package": "dsmc",
          "signature": "Point",
          "source": "src/DSMC-Util-Vector.html#origin",
          "type": "function"
        },
        "index": {
          "description": "Origin point",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "origin",
          "package": "dsmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose vector and multiply it by another vector, producing a\n matrix.\n\u003c/p\u003e",
          "module": "DSMC.Util.Vector",
          "name": "vxv",
          "package": "dsmc",
          "signature": "Vec3 -\u003e Vec3 -\u003e Matrix",
          "source": "src/DSMC-Util-Vector.html#vxv",
          "type": "function"
        },
        "index": {
          "description": "Transpose vector and multiply it by another vector producing matrix",
          "hierarchy": "DSMC Util Vector",
          "module": "DSMC.Util.Vector",
          "name": "vxv",
          "normalized": "Vec-\u003eVec-\u003eMatrix",
          "package": "dsmc",
          "signature": "Vec-\u003eVec-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC-Util-Vector.html#v:vxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDSMC is an algorithm used for simulating rarefied gas flows.\n\u003c/p\u003e\u003cp\u003eYou define the simulation domain, the body inside this domain, gas\nflow parameters and several other options. DSMC iteratively models the\nbehaviour of gas molecules according to time and space decoupling\nscheme for the Boltzmann equation. The result of simulation is a field\nof macroscopic parameters across the simulation domain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSMC",
          "name": "DSMC",
          "package": "dsmc",
          "source": "src/DSMC.html",
          "type": "module"
        },
        "index": {
          "description": "DSMC is an algorithm used for simulating rarefied gas flows You define the simulation domain the body inside this domain gas flow parameters and several other options DSMC iteratively models the behaviour of gas molecules according to time and space decoupling scheme for the Boltzmann equation The result of simulation is field of macroscopic parameters across the simulation domain",
          "hierarchy": "DSMC",
          "module": "DSMC",
          "name": "DSMC",
          "package": "dsmc",
          "partial": "DSMC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform DSMC simulation, return total iterations count, final\n particle distribution and field of averaged macroscopic parameters.\n\u003c/p\u003e\u003cp\u003eThis is an IO action since system entropy source is polled for\n seeds.\n\u003c/p\u003e",
          "module": "DSMC",
          "name": "simulate",
          "package": "dsmc",
          "signature": "Domain-\u003e Body-\u003e Flow-\u003e Time-\u003e Bool-\u003e Double-\u003e Double-\u003e Int-\u003e Surface-\u003e (Double, Double, Double)-\u003e Int-\u003e Int-\u003e IO (Int, Ensemble, MacroField)",
          "type": "function"
        },
        "index": {
          "description": "Perform DSMC simulation return total iterations count final particle distribution and field of averaged macroscopic parameters This is an IO action since system entropy source is polled for seeds",
          "hierarchy": "DSMC",
          "module": "DSMC",
          "name": "simulate",
          "normalized": "Domain-\u003eBody-\u003eFlow-\u003eTime-\u003eBool-\u003eDouble-\u003eDouble-\u003eInt-\u003eSurface-\u003e(Double,Double,Double)-\u003eInt-\u003eInt-\u003eIO(Int,Ensemble,MacroField)",
          "package": "dsmc",
          "signature": "Domain-\u003eBody-\u003eFlow-\u003eTime-\u003eBool-\u003eDouble-\u003eDouble-\u003eInt-\u003eSurface-\u003e(Double,Double,Double)-\u003eInt-\u003eInt-\u003eIO(Int,Ensemble,MacroField)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsmc/docs/DSMC.html#v:simulate"
      }
    }
  ]
]