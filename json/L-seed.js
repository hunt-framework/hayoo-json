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
        "word": "L-seed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contians the main nobs to control the game play.\n\u003c/p\u003e\u003cp\u003eAll length data is relative to the screen width.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lseed.Constants",
          "name": "Constants",
          "package": "L-seed",
          "source": "src/Lseed-Constants.html",
          "type": "module"
        },
        "index": {
          "description": "This module contians the main nobs to control the game play All length data is relative to the screen width",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "Constants",
          "package": "L-seed",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Constants",
          "name": "blossomSize",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#blossomSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "blossomSize",
          "package": "L-seed",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:blossomSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Constants",
          "name": "budSize",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#budSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "budSize",
          "package": "L-seed",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:budSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost (in light units) per (sum for all branches (length * distance), to limit the growth of the plants\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "costPerLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#costPerLength",
          "type": "function"
        },
        "index": {
          "description": "Cost in light units per sum for all branches length distance to limit the growth of the plants",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "costPerLength",
          "package": "L-seed",
          "partial": "Per Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:costPerLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of one day, in seconds\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "dayLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#dayLength",
          "type": "function"
        },
        "index": {
          "description": "Length of one day in seconds",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "dayLength",
          "package": "L-seed",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:dayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Constants",
          "name": "groundLevel",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#groundLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "groundLevel",
          "package": "L-seed",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:groundLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlant length growth per Day and Light\n\u003c/p\u003e\u003cp\u003e1 means: Can grow one stipeLength during one day, when catching the sunlight\n with one branch of (projected) length screenwidth\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "growthPerDayAndLight",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#growthPerDayAndLight",
          "type": "function"
        },
        "index": {
          "description": "Plant length growth per Day and Light means Can grow one stipeLength during one day when catching the sunlight with one branch of projected length screenwidth",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "growthPerDayAndLight",
          "package": "L-seed",
          "partial": "Per Day And Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:growthPerDayAndLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBranch translucency. Proportion of light that is let through by a plant\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "lightFalloff",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#lightFalloff",
          "type": "function"
        },
        "index": {
          "description": "Branch translucency Proportion of light that is let through by plant",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "lightFalloff",
          "package": "L-seed",
          "partial": "Falloff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:lightFalloff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\n\u003c/p\u003e\u003cp\u003eMinimum radial angular distance between two branches\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "minAngle",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#minAngle",
          "type": "function"
        },
        "index": {
          "description": "Minimum radial angular distance between two branches",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "minAngle",
          "package": "L-seed",
          "partial": "Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:minAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost (in length growths equivalent) per seed to be grown\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "seedGrowthCost",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#seedGrowthCost",
          "type": "function"
        },
        "index": {
          "description": "Cost in length growths equivalent per seed to be grown",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "seedGrowthCost",
          "package": "L-seed",
          "partial": "Growth Cost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:seedGrowthCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum growths for plants of size less then smallPlantBoostSize\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "smallPlantBoostLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#smallPlantBoostLength",
          "type": "function"
        },
        "index": {
          "description": "Minimum growths for plants of size less then smallPlantBoostSize",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "smallPlantBoostLength",
          "package": "L-seed",
          "partial": "Plant Boost Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:smallPlantBoostLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlants up to this size get an boost in growths\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "smallPlantBoostSize",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#smallPlantBoostSize",
          "type": "function"
        },
        "index": {
          "description": "Plants up to this size get an boost in growths",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "smallPlantBoostSize",
          "package": "L-seed",
          "partial": "Plant Boost Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:smallPlantBoostSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Constants",
          "name": "stipeLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#stipeLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "stipeLength",
          "package": "L-seed",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:stipeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Constants",
          "name": "stipeWidth",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Constants.html#stipeWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "stipeWidth",
          "package": "L-seed",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:stipeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLight and growths interpolation frequency\n\u003c/p\u003e",
          "module": "Lseed.Constants",
          "name": "ticksPerDay",
          "package": "L-seed",
          "signature": "Integer",
          "source": "src/Lseed-Constants.html#ticksPerDay",
          "type": "function"
        },
        "index": {
          "description": "Light and growths interpolation frequency",
          "hierarchy": "Lseed Constants",
          "module": "Lseed.Constants",
          "name": "ticksPerDay",
          "package": "L-seed",
          "partial": "Per Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Constants.html#v:ticksPerDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "Functions",
          "package": "L-seed",
          "source": "src/Lseed-Data-Functions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "Functions",
          "package": "L-seed",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each Planted in a Garden\n\u003c/p\u003e",
          "module": "Lseed.Data.Functions",
          "name": "mapGarden",
          "package": "L-seed",
          "signature": "(Planted a -\u003e Planted b) -\u003e Garden a -\u003e Garden b",
          "source": "src/Lseed-Data-Functions.html#mapGarden",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each Planted in Garden",
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "mapGarden",
          "normalized": "(Planted a-\u003ePlanted b)-\u003eGarden a-\u003eGarden b",
          "package": "L-seed",
          "partial": "Garden",
          "signature": "(Planted a-\u003ePlanted b)-\u003eGarden a-\u003eGarden b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:mapGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the Plant in a Planted\n\u003c/p\u003e",
          "module": "Lseed.Data.Functions",
          "name": "mapPlanted",
          "package": "L-seed",
          "signature": "(Plant a -\u003e Plant b) -\u003e Planted a -\u003e Planted b",
          "source": "src/Lseed-Data-Functions.html#mapPlanted",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the Plant in Planted",
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "mapPlanted",
          "normalized": "(Plant a-\u003ePlant b)-\u003ePlanted a-\u003ePlanted b",
          "package": "L-seed",
          "partial": "Planted",
          "signature": "(Plant a-\u003ePlant b)-\u003ePlanted a-\u003ePlanted b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:mapPlanted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "plantLength",
          "package": "L-seed",
          "signature": "Plant a -\u003e Double",
          "source": "src/Lseed-Data-Functions.html#plantLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "plantLength",
          "normalized": "Plant a-\u003eDouble",
          "package": "L-seed",
          "partial": "Length",
          "signature": "Plant a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:plantLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts the length of the current segment in the additional information field\n\u003c/p\u003e",
          "module": "Lseed.Data.Functions",
          "name": "plantPieceLengths",
          "package": "L-seed",
          "signature": "Plant a -\u003e Plant Double",
          "source": "src/Lseed-Data-Functions.html#plantPieceLengths",
          "type": "function"
        },
        "index": {
          "description": "Puts the length of the current segment in the additional information field",
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "plantPieceLengths",
          "normalized": "Plant a-\u003ePlant Double",
          "package": "L-seed",
          "partial": "Piece Lengths",
          "signature": "Plant a-\u003ePlant Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:plantPieceLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "plantTotalSum",
          "package": "L-seed",
          "signature": "Plant Double -\u003e Double",
          "source": "src/Lseed-Data-Functions.html#plantTotalSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "plantTotalSum",
          "normalized": "Plant Double-\u003eDouble",
          "package": "L-seed",
          "partial": "Total Sum",
          "signature": "Plant Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:plantTotalSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "plantWeightedPieceLengths",
          "package": "L-seed",
          "signature": "Double -\u003e Plant a -\u003e Plant Double",
          "source": "src/Lseed-Data-Functions.html#plantWeightedPieceLengths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "plantWeightedPieceLengths",
          "normalized": "Double-\u003ePlant a-\u003ePlant Double",
          "package": "L-seed",
          "partial": "Weighted Piece Lengths",
          "signature": "Double-\u003ePlant a-\u003ePlant Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:plantWeightedPieceLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "subPieceAccumulate",
          "package": "L-seed",
          "signature": "Plant m -\u003e Plant m",
          "source": "src/Lseed-Data-Functions.html#subPieceAccumulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "subPieceAccumulate",
          "normalized": "Plant a-\u003ePlant a",
          "package": "L-seed",
          "partial": "Piece Accumulate",
          "signature": "Plant m-\u003ePlant m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:subPieceAccumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data.Functions",
          "name": "weightedPlantLength",
          "package": "L-seed",
          "signature": "Plant a -\u003e Double",
          "source": "src/Lseed-Data-Functions.html#weightedPlantLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "weightedPlantLength",
          "normalized": "Plant a-\u003eDouble",
          "package": "L-seed",
          "partial": "Plant Length",
          "signature": "Plant a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:weightedPlantLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each Planted in a Garden, with an extra argument from a list\n\u003c/p\u003e\u003cp\u003eYou need to make sure that the list is long enough!\n\u003c/p\u003e",
          "module": "Lseed.Data.Functions",
          "name": "zipWithGarden",
          "package": "L-seed",
          "signature": "(Planted a -\u003e x -\u003e Planted b) -\u003e Garden a -\u003e [x] -\u003e Garden b",
          "source": "src/Lseed-Data-Functions.html#zipWithGarden",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each Planted in Garden with an extra argument from list You need to make sure that the list is long enough",
          "hierarchy": "Lseed Data Functions",
          "module": "Lseed.Data.Functions",
          "name": "zipWithGarden",
          "normalized": "(Planted a-\u003eb-\u003ePlanted c)-\u003eGarden a-\u003e[b]-\u003eGarden c",
          "package": "L-seed",
          "partial": "With Garden",
          "signature": "(Planted a-\u003ex-\u003ePlanted b)-\u003eGarden a-\u003e[x]-\u003eGarden b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data-Functions.html#v:zipWithGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData definitions for L-seed\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lseed.Data",
          "name": "Data",
          "package": "L-seed",
          "source": "src/Lseed-Data.html",
          "type": "module"
        },
        "index": {
          "description": "Data definitions for L-seed",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Data",
          "package": "L-seed",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLight angle\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Angle",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Angle",
          "type": "type"
        },
        "index": {
          "description": "Light angle",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Angle",
          "package": "L-seed",
          "partial": "Angle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "AnnotatedGarden",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#AnnotatedGarden",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "AnnotatedGarden",
          "package": "L-seed",
          "partial": "Annotated Garden",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:AnnotatedGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "AnnotatedPlant",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#AnnotatedPlant",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "AnnotatedPlant",
          "package": "L-seed",
          "partial": "Annotated Plant",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:AnnotatedPlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "AnnotatedPlanted",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#AnnotatedPlanted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "AnnotatedPlanted",
          "package": "L-seed",
          "partial": "Annotated Planted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:AnnotatedPlanted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Cmp",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Cmp",
          "package": "L-seed",
          "partial": "Cmp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Condition",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Condition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Condition",
          "package": "L-seed",
          "partial": "Condition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of plants, together with their position in the garden, in the interval [0,1]\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Garden",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Garden",
          "type": "type"
        },
        "index": {
          "description": "list of plants together with their position in the garden in the interval",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Garden",
          "package": "L-seed",
          "partial": "Garden",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Garden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods to get the initial garden and the updated code when a plant multiplies\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GardenSource",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GardenSource",
          "type": "data"
        },
        "index": {
          "description": "Methods to get the initial garden and the updated code when plant multiplies",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GardenSource",
          "package": "L-seed",
          "partial": "Garden Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GardenSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "GrammarAction",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrammarAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrammarAction",
          "package": "L-seed",
          "partial": "Grammar Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrammarAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete grammar file\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrammarFile",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrammarFile",
          "type": "type"
        },
        "index": {
          "description": "complete grammar file",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrammarFile",
          "package": "L-seed",
          "partial": "Grammar File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrammarFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single Rule. For now, only single branches\n   can be matched, not whole subtree structures\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrammarRule",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "data"
        },
        "index": {
          "description": "single Rule For now only single branches can be matched not whole subtree structures",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrammarRule",
          "package": "L-seed",
          "partial": "Grammar Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrammarRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed variants of a garden, for more expressive type signatures\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrowingGarden",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrowingGarden",
          "type": "type"
        },
        "index": {
          "description": "Named variants of garden for more expressive type signatures",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrowingGarden",
          "package": "L-seed",
          "partial": "Growing Garden",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrowingGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed variants of a Plant, for more expressive type signatures\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrowingPlant",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrowingPlant",
          "type": "type"
        },
        "index": {
          "description": "Named variants of Plant for more expressive type signatures",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrowingPlant",
          "package": "L-seed",
          "partial": "Growing Plant",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrowingPlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed variants of a Planted, for more expressive type signatures\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrowingPlanted",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrowingPlanted",
          "type": "type"
        },
        "index": {
          "description": "Named variants of Planted for more expressive type signatures",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrowingPlanted",
          "package": "L-seed",
          "partial": "Growing Planted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrowingPlanted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GrowingPlant can be growing in one of these three ways:\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrowthState",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#GrowthState",
          "type": "data"
        },
        "index": {
          "description": "GrowingPlant can be growing in one of these three ways",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrowthState",
          "package": "L-seed",
          "partial": "Growth State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:GrowthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "LengthDescr",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#LengthDescr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "LengthDescr",
          "package": "L-seed",
          "partial": "Length Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:LengthDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Matchable",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Matchable",
          "package": "L-seed",
          "partial": "Matchable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Matchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain loop observers\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Observer",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Observer",
          "type": "data"
        },
        "index": {
          "description": "Main loop observers",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Observer",
          "package": "L-seed",
          "partial": "Observer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plant, which is\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Plant",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Plant",
          "type": "data"
        },
        "index": {
          "description": "plant which is",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Plant",
          "package": "L-seed",
          "partial": "Plant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Plant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plant with metainformatoin\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Planted",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Planted",
          "type": "data"
        },
        "index": {
          "description": "plant with metainformatoin",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Planted",
          "package": "L-seed",
          "partial": "Planted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Planted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Priority",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Priority",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Priority",
          "package": "L-seed",
          "partial": "Priority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of what is on screen\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "ScreenContent",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "data"
        },
        "index": {
          "description": "Representation of what is on screen",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "ScreenContent",
          "package": "L-seed",
          "partial": "Screen Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:ScreenContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA straight, untagged plant with length zero and no branches.\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "StipeInfo",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "data"
        },
        "index": {
          "description": "straight untagged plant with length zero and no branches",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "StipeInfo",
          "package": "L-seed",
          "partial": "Stipe Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:StipeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser Tag\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "UserTag",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#UserTag",
          "type": "type"
        },
        "index": {
          "description": "User Tag",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "UserTag",
          "package": "L-seed",
          "partial": "User Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:UserTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Weight",
          "package": "L-seed",
          "source": "src/Lseed-Data.html#Weight",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Weight",
          "package": "L-seed",
          "partial": "Weight",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#t:Weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Absolute",
          "package": "L-seed",
          "signature": "Absolute Double",
          "source": "src/Lseed-Data.html#LengthDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Absolute",
          "package": "L-seed",
          "partial": "Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Absolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "AddBranches",
          "package": "L-seed",
          "signature": "AddBranches (Maybe UserTag) Double [(Angle, Double, Maybe UserTag)]",
          "source": "src/Lseed-Data.html#GrammarAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "AddBranches",
          "normalized": "AddBranches(Maybe UserTag)Double[(Angle,Double,Maybe UserTag)]",
          "package": "L-seed",
          "partial": "Add Branches",
          "signature": "AddBranches(Maybe UserTag)Double[(Angle,Double,Maybe UserTag)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:AddBranches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Additional",
          "package": "L-seed",
          "signature": "Additional Double",
          "source": "src/Lseed-Data.html#LengthDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Additional",
          "package": "L-seed",
          "partial": "Additional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Additional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein Percent\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "AdditionalRelative",
          "package": "L-seed",
          "signature": "AdditionalRelative Double",
          "source": "src/Lseed-Data.html#LengthDescr",
          "type": "function"
        },
        "index": {
          "description": "in Percent",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "AdditionalRelative",
          "package": "L-seed",
          "partial": "Additional Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:AdditionalRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Always",
          "package": "L-seed",
          "signature": "Always Bool",
          "source": "src/Lseed-Data.html#Condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Always",
          "package": "L-seed",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "And",
          "package": "L-seed",
          "signature": "Condition And Condition",
          "source": "src/Lseed-Data.html#Condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "And",
          "package": "L-seed",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Blossom",
          "package": "L-seed",
          "signature": "Blossom (Maybe UserTag)",
          "source": "src/Lseed-Data.html#GrammarAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Blossom",
          "package": "L-seed",
          "partial": "Blossom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Blossom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue indicates the growth target \n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "EnlargingTo",
          "package": "L-seed",
          "signature": "EnlargingTo Double",
          "source": "src/Lseed-Data.html#GrowthState",
          "type": "function"
        },
        "index": {
          "description": "value indicates the growth target",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "EnlargingTo",
          "package": "L-seed",
          "partial": "Enlarging To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:EnlargingTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Equals",
          "package": "L-seed",
          "signature": "Equals",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Equals",
          "package": "L-seed",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "GE",
          "package": "L-seed",
          "signature": "GE",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GE",
          "package": "L-seed",
          "partial": "GE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:GE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "GardenSource",
          "package": "L-seed",
          "signature": "GardenSource",
          "source": "src/Lseed-Data.html#GardenSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GardenSource",
          "package": "L-seed",
          "partial": "Garden Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:GardenSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "GrammarRule",
          "package": "L-seed",
          "signature": "GrammarRule",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrammarRule",
          "package": "L-seed",
          "partial": "Grammar Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:GrammarRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Greater",
          "package": "L-seed",
          "signature": "Greater",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Greater",
          "package": "L-seed",
          "partial": "Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue indicates the current state [0..1]\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "GrowingSeed",
          "package": "L-seed",
          "signature": "GrowingSeed Double",
          "source": "src/Lseed-Data.html#GrowthState",
          "type": "function"
        },
        "index": {
          "description": "value indicates the current state",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "GrowingSeed",
          "package": "L-seed",
          "partial": "Growing Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:GrowingSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "LE",
          "package": "L-seed",
          "signature": "LE",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "LE",
          "package": "L-seed",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Less",
          "package": "L-seed",
          "signature": "Less",
          "source": "src/Lseed-Data.html#Cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Less",
          "package": "L-seed",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchAngle",
          "package": "L-seed",
          "signature": "MatchAngle",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchAngle",
          "package": "L-seed",
          "partial": "Match Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchDirection",
          "package": "L-seed",
          "signature": "MatchDirection",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchDirection",
          "package": "L-seed",
          "partial": "Match Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchDistance",
          "package": "L-seed",
          "signature": "MatchDistance",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchDistance",
          "package": "L-seed",
          "partial": "Match Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchLength",
          "package": "L-seed",
          "signature": "MatchLength",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchLength",
          "package": "L-seed",
          "partial": "Match Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchLight",
          "package": "L-seed",
          "signature": "MatchLight",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchLight",
          "package": "L-seed",
          "partial": "Match Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchSubLength",
          "package": "L-seed",
          "signature": "MatchSubLength",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchSubLength",
          "package": "L-seed",
          "partial": "Match Sub Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchSubLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "MatchSubLight",
          "package": "L-seed",
          "signature": "MatchSubLight",
          "source": "src/Lseed-Data.html#Matchable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "MatchSubLight",
          "package": "L-seed",
          "partial": "Match Sub Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:MatchSubLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "NoGrowth",
          "package": "L-seed",
          "signature": "NoGrowth",
          "source": "src/Lseed-Data.html#GrowthState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "NoGrowth",
          "package": "L-seed",
          "partial": "No Growth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:NoGrowth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "NumCond",
          "package": "L-seed",
          "signature": "NumCond Matchable Cmp Double",
          "source": "src/Lseed-Data.html#Condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "NumCond",
          "package": "L-seed",
          "partial": "Num Cond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:NumCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Observer",
          "package": "L-seed",
          "signature": "Observer",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Observer",
          "package": "L-seed",
          "partial": "Observer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Or",
          "package": "L-seed",
          "signature": "Condition Or Condition",
          "source": "src/Lseed-Data.html#Condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Or",
          "package": "L-seed",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea stipe with a length (factor of stipeLength), an angle relative\n to the parent stipe and a list of plants sprouting at the end\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "Plant",
          "package": "L-seed",
          "signature": "Plant",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "description": "stipe with length factor of stipeLength an angle relative to the parent stipe and list of plants sprouting at the end",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Plant",
          "package": "L-seed",
          "partial": "Plant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Plant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "Planted",
          "package": "L-seed",
          "signature": "Planted",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "Planted",
          "package": "L-seed",
          "partial": "Planted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:Planted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "ScreenContent",
          "package": "L-seed",
          "signature": "ScreenContent",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "ScreenContent",
          "package": "L-seed",
          "partial": "Screen Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:ScreenContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "SetLength",
          "package": "L-seed",
          "signature": "SetLength (Maybe UserTag) LengthDescr",
          "source": "src/Lseed-Data.html#GrammarAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "SetLength",
          "package": "L-seed",
          "partial": "Set Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:SetLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "StipeInfo",
          "package": "L-seed",
          "signature": "StipeInfo",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "StipeInfo",
          "package": "L-seed",
          "partial": "Stipe Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:StipeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "UserTagIs",
          "package": "L-seed",
          "signature": "UserTagIs String",
          "source": "src/Lseed-Data.html#Condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "UserTagIs",
          "package": "L-seed",
          "partial": "User Tag Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:UserTagIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "constGardenSource",
          "package": "L-seed",
          "signature": "Garden () -\u003e GardenSource",
          "source": "src/Lseed-Data.html#constGardenSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "constGardenSource",
          "normalized": "Garden()-\u003eGardenSource",
          "package": "L-seed",
          "partial": "Garden Source",
          "signature": "Garden()-\u003eGardenSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:constGardenSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "defaultPriority",
          "package": "L-seed",
          "signature": "Priority",
          "source": "src/Lseed-Data.html#defaultPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "defaultPriority",
          "package": "L-seed",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:defaultPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "defaultWeight",
          "package": "L-seed",
          "signature": "Weight",
          "source": "src/Lseed-Data.html#defaultWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "defaultWeight",
          "package": "L-seed",
          "partial": "Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:defaultWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLsystem in use\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "genome",
          "package": "L-seed",
          "signature": "GrammarFile",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "description": "Lsystem in use",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "genome",
          "package": "L-seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:genome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled at the beginning of a season, to aquire the garden\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "getGarden",
          "package": "L-seed",
          "signature": "IO (Garden ())",
          "source": "src/Lseed-Data.html#GardenSource",
          "type": "function"
        },
        "index": {
          "description": "Called at the beginning of season to aquire the garden",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "getGarden",
          "normalized": "IO(Garden())",
          "package": "L-seed",
          "partial": "Garden",
          "signature": "IO(Garden())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:getGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText to display on the screen\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "getScreenMessage",
          "package": "L-seed",
          "signature": "IO (Maybe String)",
          "source": "src/Lseed-Data.html#GardenSource",
          "type": "function"
        },
        "index": {
          "description": "Text to display on the screen",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "getScreenMessage",
          "package": "L-seed",
          "partial": "Screen Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:getScreenMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a plant, returns the genome to be used for a seedling.\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "getUpdatedCode",
          "package": "L-seed",
          "signature": "Planted () -\u003e IO GrammarFile",
          "source": "src/Lseed-Data.html#GardenSource",
          "type": "function"
        },
        "index": {
          "description": "Given plant returns the genome to be used for seedling",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "getUpdatedCode",
          "normalized": "Planted()-\u003eIO GrammarFile",
          "package": "L-seed",
          "partial": "Updated Code",
          "signature": "Planted()-\u003eIO GrammarFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:getUpdatedCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "grAction",
          "package": "L-seed",
          "signature": "GrammarAction",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "grAction",
          "package": "L-seed",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:grAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "grCondition",
          "package": "L-seed",
          "signature": "Condition",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "grCondition",
          "package": "L-seed",
          "partial": "Condition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:grCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "grName",
          "package": "L-seed",
          "signature": "String",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "grName",
          "package": "L-seed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:grName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "grPriority",
          "package": "L-seed",
          "signature": "Priority",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "grPriority",
          "package": "L-seed",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:grPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "grWeight",
          "package": "L-seed",
          "signature": "Weight",
          "source": "src/Lseed-Data.html#GrammarRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "grWeight",
          "package": "L-seed",
          "partial": "Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:grWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled before the main loop quits, with the last state of the garden\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "obFinished",
          "package": "L-seed",
          "signature": "GrowingGarden -\u003e IO ()",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "description": "Called before the main loop quits with the last state of the garden",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "obFinished",
          "normalized": "GrowingGarden-\u003eIO()",
          "package": "L-seed",
          "partial": "Finished",
          "signature": "GrowingGarden-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:obFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlso called once per tick, with a function that calculates the\n information that should be displayed given a point in time\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "obGrowingState",
          "package": "L-seed",
          "signature": "(ClockTime -\u003e ScreenContent) -\u003e IO ()",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "description": "Also called once per tick with function that calculates the information that should be displayed given point in time",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "obGrowingState",
          "normalized": "(ClockTime-\u003eScreenContent)-\u003eIO()",
          "package": "L-seed",
          "partial": "Growing State",
          "signature": "(ClockTime-\u003eScreenContent)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:obGrowingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled once per season, before the main loop starts\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "obInit",
          "package": "L-seed",
          "signature": "IO ()",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "description": "Called once per season before the main loop starts",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "obInit",
          "normalized": "IO()",
          "package": "L-seed",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:obInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled once before program termination\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "obShutdown",
          "package": "L-seed",
          "signature": "IO ()",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "description": "Called once before program termination",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "obShutdown",
          "normalized": "IO()",
          "package": "L-seed",
          "partial": "Shutdown",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:obShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled once per tick, with the current tick number corresponding\n light angle and the current state of the garden\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "obState",
          "package": "L-seed",
          "signature": "Integer -\u003e Angle -\u003e GrowingGarden -\u003e IO ()",
          "source": "src/Lseed-Data.html#Observer",
          "type": "function"
        },
        "index": {
          "description": "Called once per tick with the current tick number corresponding light angle and the current state of the garden",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "obState",
          "normalized": "Integer-\u003eAngle-\u003eGrowingGarden-\u003eIO()",
          "package": "L-seed",
          "partial": "State",
          "signature": "Integer-\u003eAngle-\u003eGrowingGarden-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:obState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "pAngle",
          "package": "L-seed",
          "signature": "Angle",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "pAngle",
          "package": "L-seed",
          "partial": "Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:pAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "pBranches",
          "package": "L-seed",
          "signature": "[Plant a]",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "pBranches",
          "normalized": "[Plant a]",
          "package": "L-seed",
          "partial": "Branches",
          "signature": "[Plant a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:pBranches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "pData",
          "package": "L-seed",
          "signature": "a",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "pData",
          "package": "L-seed",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:pData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "pLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "pLength",
          "package": "L-seed",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:pLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "pUserTag",
          "package": "L-seed",
          "signature": "UserTag",
          "source": "src/Lseed-Data.html#Plant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "pUserTag",
          "package": "L-seed",
          "partial": "User Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:pUserTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActual current form of the plant\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "phenotype",
          "package": "L-seed",
          "signature": "Plant a",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "description": "Actual current form of the plant",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "phenotype",
          "package": "L-seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:phenotype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eId of the user that owns this plant\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "plantOwner",
          "package": "L-seed",
          "signature": "Integer",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "description": "Id of the user that owns this plant",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "plantOwner",
          "package": "L-seed",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:plantOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the owner of the plant\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "plantOwnerName",
          "package": "L-seed",
          "signature": "String",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "description": "Name of the owner of the plant",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "plantOwnerName",
          "package": "L-seed",
          "partial": "Owner Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:plantOwnerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in the garden, interval [0,1]\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "plantPosition",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#Planted",
          "type": "function"
        },
        "index": {
          "description": "Position in the garden interval",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "plantPosition",
          "package": "L-seed",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:plantPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "scGarden",
          "package": "L-seed",
          "signature": "AnnotatedGarden",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "scGarden",
          "package": "L-seed",
          "partial": "Garden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:scGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "scLightAngle",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "scLightAngle",
          "package": "L-seed",
          "partial": "Light Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:scLightAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "scMessage",
          "package": "L-seed",
          "signature": "Maybe String",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "scMessage",
          "package": "L-seed",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:scMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "scTime",
          "package": "L-seed",
          "signature": "String",
          "source": "src/Lseed-Data.html#ScreenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "scTime",
          "package": "L-seed",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:scTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siAngle",
          "package": "L-seed",
          "signature": "Angle",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siAngle",
          "package": "L-seed",
          "partial": "Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siDirection",
          "package": "L-seed",
          "signature": "Angle",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siDirection",
          "package": "L-seed",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance from root\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "siDistance",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "description": "Distance from root",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siDistance",
          "package": "L-seed",
          "partial": "Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siGrowth",
          "package": "L-seed",
          "signature": "GrowthState",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siGrowth",
          "package": "L-seed",
          "partial": "Growth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siGrowth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical distance from bottom\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "siHeight",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "description": "Vertical distance from bottom",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siHeight",
          "package": "L-seed",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea bit redundant, but what shells\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "siLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "description": "bit redundant but what shells",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siLength",
          "package": "L-seed",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siLight",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siLight",
          "package": "L-seed",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSideways position, relative to Plant origin\n\u003c/p\u003e",
          "module": "Lseed.Data",
          "name": "siOffset",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "description": "Sideways position relative to Plant origin",
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siOffset",
          "package": "L-seed",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siSubLength",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siSubLength",
          "package": "L-seed",
          "partial": "Sub Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siSubLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Data",
          "name": "siSubLight",
          "package": "L-seed",
          "signature": "Double",
          "source": "src/Lseed-Data.html#StipeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Data",
          "module": "Lseed.Data",
          "name": "siSubLight",
          "package": "L-seed",
          "partial": "Sub Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Data.html#v:siSubLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper module providing a monad that collects lines\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lseed.Geometry.Generator",
          "name": "Generator",
          "package": "L-seed",
          "source": "src/Lseed-Geometry-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Helper module providing monad that collects lines",
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "Generator",
          "package": "L-seed",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry.Generator",
          "name": "GeometryGenerator",
          "package": "L-seed",
          "source": "src/Lseed-Geometry-Generator.html#GeometryGenerator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "GeometryGenerator",
          "package": "L-seed",
          "partial": "Geometry Generator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#t:GeometryGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry.Generator",
          "name": "addLine",
          "package": "L-seed",
          "signature": "x -\u003e Line -\u003e GeometryGenerator x ()",
          "source": "src/Lseed-Geometry-Generator.html#addLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "addLine",
          "normalized": "a-\u003eLine-\u003eGeometryGenerator a()",
          "package": "L-seed",
          "partial": "Line",
          "signature": "x-\u003eLine-\u003eGeometryGenerator x()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#v:addLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry.Generator",
          "name": "rotated",
          "package": "L-seed",
          "signature": "Double -\u003e GeometryGenerator x a -\u003e GeometryGenerator x a",
          "source": "src/Lseed-Geometry-Generator.html#rotated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "rotated",
          "normalized": "Double-\u003eGeometryGenerator a b-\u003eGeometryGenerator a b",
          "package": "L-seed",
          "signature": "Double-\u003eGeometryGenerator x a-\u003eGeometryGenerator x a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#v:rotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry.Generator",
          "name": "runGeometryGenerator",
          "package": "L-seed",
          "signature": "Point -\u003e Double -\u003e GeometryGenerator x () -\u003e [(Line, x)]",
          "source": "src/Lseed-Geometry-Generator.html#runGeometryGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "runGeometryGenerator",
          "normalized": "Point-\u003eDouble-\u003eGeometryGenerator a()-\u003e[(Line,a)]",
          "package": "L-seed",
          "partial": "Geometry Generator",
          "signature": "Point-\u003eDouble-\u003eGeometryGenerator x()-\u003e[(Line,x)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#v:runGeometryGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry.Generator",
          "name": "translated",
          "package": "L-seed",
          "signature": "Point -\u003e GeometryGenerator x a -\u003e GeometryGenerator x a",
          "source": "src/Lseed-Geometry-Generator.html#translated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry Generator",
          "module": "Lseed.Geometry.Generator",
          "name": "translated",
          "normalized": "Point-\u003eGeometryGenerator a b-\u003eGeometryGenerator a b",
          "package": "L-seed",
          "signature": "Point-\u003eGeometryGenerator x a-\u003eGeometryGenerator x a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry-Generator.html#v:translated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "Geometry",
          "package": "L-seed",
          "source": "src/Lseed-Geometry.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "Geometry",
          "package": "L-seed",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "Line",
          "package": "L-seed",
          "source": "src/Lseed-Geometry.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "Line",
          "package": "L-seed",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "Point",
          "package": "L-seed",
          "source": "src/Lseed-Geometry.html#Point",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "Point",
          "package": "L-seed",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "allKindsOfStuffWithAngle",
          "package": "L-seed",
          "signature": "forall a.  Double -\u003e [(Line, a)] -\u003e ([(Line, a, Double)], [(Point, Point, Point, Point, Double)])",
          "source": "src/Lseed-Geometry.html#allKindsOfStuffWithAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "allKindsOfStuffWithAngle",
          "normalized": "a b Double-\u003e[(Line,c)]-\u003e([(Line,c,Double)],[(Point,Point,Point,Point,Double)])",
          "package": "L-seed",
          "partial": "Kinds Of Stuff With Angle",
          "signature": "forall a. Double-\u003e[(Line,a)]-\u003e([(Line,a,Double)],[(Point,Point,Point,Point,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:allKindsOfStuffWithAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom http:\u003cem/\u003ewww.pdas.com/lineint.htm\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "crossPoint",
          "package": "L-seed",
          "signature": "Line -\u003e Line -\u003e Maybe Point",
          "source": "src/Lseed-Geometry.html#crossPoint",
          "type": "function"
        },
        "index": {
          "description": "from http www.pdas.com lineint.htm",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "crossPoint",
          "normalized": "Line-\u003eLine-\u003eMaybe Point",
          "package": "L-seed",
          "partial": "Point",
          "signature": "Line-\u003eLine-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:crossPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlightly shifts angles \n\u003c/p\u003e\u003cp\u003eFor a Garden, calculates the maximum size to the left, to the right, and\n maximum height\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "gardenOffset",
          "package": "L-seed",
          "signature": "AnnotatedGarden -\u003e (Double, Double, Double)",
          "source": "src/Lseed-Geometry.html#gardenOffset",
          "type": "function"
        },
        "index": {
          "description": "Slightly shifts angles For Garden calculates the maximum size to the left to the right and maximum height",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "gardenOffset",
          "normalized": "AnnotatedGarden-\u003e(Double,Double,Double)",
          "package": "L-seed",
          "partial": "Offset",
          "signature": "AnnotatedGarden-\u003e(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:gardenOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLines are annotated with its plant, identified by the extra data\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "gardenToLines",
          "package": "L-seed",
          "signature": "Garden a -\u003e [(Line, a)]",
          "source": "src/Lseed-Geometry.html#gardenToLines",
          "type": "function"
        },
        "index": {
          "description": "Lines are annotated with its plant identified by the extra data",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "gardenToLines",
          "normalized": "Garden a-\u003e[(Line,a)]",
          "package": "L-seed",
          "partial": "To Lines",
          "signature": "Garden a-\u003e[(Line,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:gardenToLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "lightPolygons",
          "package": "L-seed",
          "signature": "Double -\u003e [(Line, a)] -\u003e [(Point, Point, Point, Point, Double)]",
          "source": "src/Lseed-Geometry.html#lightPolygons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "lightPolygons",
          "normalized": "Double-\u003e[(Line,a)]-\u003e[(Point,Point,Point,Point,Double)]",
          "package": "L-seed",
          "partial": "Polygons",
          "signature": "Double-\u003e[(Line,a)]-\u003e[(Point,Point,Point,Point,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:lightPolygons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotates each piece of the garden with the amount of line it attacts\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "lightenGarden",
          "package": "L-seed",
          "signature": "Angle -\u003e Garden a -\u003e Garden (a, Double)",
          "source": "src/Lseed-Geometry.html#lightenGarden",
          "type": "function"
        },
        "index": {
          "description": "Annotates each piece of the garden with the amount of line it attacts",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "lightenGarden",
          "normalized": "Angle-\u003eGarden a-\u003eGarden(a,Double)",
          "package": "L-seed",
          "partial": "Garden",
          "signature": "Angle-\u003eGarden a-\u003eGarden(a,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:lightenGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd lightning from a given angle\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "lightenLines",
          "package": "L-seed",
          "signature": "Double -\u003e [(Line, a)] -\u003e [(Line, a, Double)]",
          "source": "src/Lseed-Geometry.html#lightenLines",
          "type": "function"
        },
        "index": {
          "description": "Add lightning from given angle",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "lightenLines",
          "normalized": "Double-\u003e[(Line,a)]-\u003e[(Line,a,Double)]",
          "package": "L-seed",
          "partial": "Lines",
          "signature": "Double-\u003e[(Line,a)]-\u003e[(Line,a,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:lightenLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper to apply a function that works on lines to a garden\n\u003c/p\u003e",
          "module": "Lseed.Geometry",
          "name": "mapLine",
          "package": "L-seed",
          "signature": "(forall b.  [(Line, b)] -\u003e [(Line, b, c)]) -\u003e c -\u003e (c -\u003e c -\u003e c) -\u003e Garden a -\u003e Garden (a, c)",
          "source": "src/Lseed-Geometry.html#mapLine",
          "type": "function"
        },
        "index": {
          "description": "Helper to apply function that works on lines to garden",
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "mapLine",
          "normalized": "(a b[(Line,c)]-\u003e[(Line,c,d)])-\u003ed-\u003e(d-\u003ed-\u003ed)-\u003eGarden e-\u003eGarden(e,d)",
          "package": "L-seed",
          "partial": "Line",
          "signature": "(forall b.[(Line,b)]-\u003e[(Line,b,c)])-\u003ec-\u003e(c-\u003ec-\u003ec)-\u003eGarden a-\u003eGarden(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:mapLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "plantToGeometry",
          "package": "L-seed",
          "signature": "Plant a -\u003e GeometryGenerator a ()",
          "source": "src/Lseed-Geometry.html#plantToGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "plantToGeometry",
          "normalized": "Plant a-\u003eGeometryGenerator a()",
          "package": "L-seed",
          "partial": "To Geometry",
          "signature": "Plant a-\u003eGeometryGenerator a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:plantToGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Geometry",
          "name": "plantedToLines",
          "package": "L-seed",
          "signature": "Planted a -\u003e [(Line, a)]",
          "source": "src/Lseed-Geometry.html#plantedToLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Geometry",
          "module": "Lseed.Geometry",
          "name": "plantedToLines",
          "normalized": "Planted a-\u003e[(Line,a)]",
          "package": "L-seed",
          "partial": "To Lines",
          "signature": "Planted a-\u003e[(Line,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Geometry.html#v:plantedToLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Grammar.Parse",
          "name": "Parse",
          "package": "L-seed",
          "source": "src/Lseed-Grammar-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lseed Grammar Parse",
          "module": "Lseed.Grammar.Parse",
          "name": "Parse",
          "package": "L-seed",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Grammar-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Grammar.Parse",
          "name": "parseGrammar",
          "package": "L-seed",
          "signature": "String -\u003e String -\u003e Either ParseError GrammarFile",
          "source": "src/Lseed-Grammar-Parse.html#parseGrammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Grammar Parse",
          "module": "Lseed.Grammar.Parse",
          "name": "parseGrammar",
          "normalized": "String-\u003eString-\u003eEither ParseError GrammarFile",
          "package": "L-seed",
          "partial": "Grammar",
          "signature": "String-\u003eString-\u003eEither ParseError GrammarFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Grammar-Parse.html#v:parseGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.LSystem",
          "name": "LSystem",
          "package": "L-seed",
          "source": "src/Lseed-LSystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lseed LSystem",
          "module": "Lseed.LSystem",
          "name": "LSystem",
          "package": "L-seed",
          "partial": "LSystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-LSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.LSystem",
          "name": "applyLSystem",
          "package": "L-seed",
          "signature": "g -\u003e GrammarFile -\u003e AnnotatedPlant -\u003e GrowingPlant",
          "source": "src/Lseed-LSystem.html#applyLSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed LSystem",
          "module": "Lseed.LSystem",
          "name": "applyLSystem",
          "normalized": "a-\u003eGrammarFile-\u003eAnnotatedPlant-\u003eGrowingPlant",
          "package": "L-seed",
          "partial": "LSystem",
          "signature": "g-\u003eGrammarFile-\u003eAnnotatedPlant-\u003eGrowingPlant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-LSystem.html#v:applyLSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength reductions are silenty turned into no-ops\n\u003c/p\u003e",
          "module": "Lseed.LSystem",
          "name": "calcLengthDescr",
          "package": "L-seed",
          "signature": "LengthDescr -\u003e Double -\u003e Double",
          "source": "src/Lseed-LSystem.html#calcLengthDescr",
          "type": "function"
        },
        "index": {
          "description": "Length reductions are silenty turned into no-ops",
          "hierarchy": "Lseed LSystem",
          "module": "Lseed.LSystem",
          "name": "calcLengthDescr",
          "normalized": "LengthDescr-\u003eDouble-\u003eDouble",
          "package": "L-seed",
          "partial": "Length Descr",
          "signature": "LengthDescr-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-LSystem.html#v:calcLengthDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.LSystem",
          "name": "conformsTo",
          "package": "L-seed",
          "signature": "AnnotatedPlant -\u003e Condition -\u003e Bool",
          "source": "src/Lseed-LSystem.html#conformsTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed LSystem",
          "module": "Lseed.LSystem",
          "name": "conformsTo",
          "normalized": "AnnotatedPlant-\u003eCondition-\u003eBool",
          "package": "L-seed",
          "partial": "To",
          "signature": "AnnotatedPlant-\u003eCondition-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-LSystem.html#v:conformsTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is mostly a general dump...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lseed.Logic",
          "name": "Logic",
          "package": "L-seed",
          "source": "src/Lseed-Logic.html",
          "type": "module"
        },
        "index": {
          "description": "This module is mostly general dump",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "Logic",
          "package": "L-seed",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all Growing plants that are done, find out the next step\n If new plants are to be created, these are returned via their position, next\n to their parent plant.\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "applyGenome",
          "package": "L-seed",
          "signature": "Angle -\u003e g -\u003e GrowingGarden -\u003e [(GrowingPlanted, [Double])]",
          "source": "src/Lseed-Logic.html#applyGenome",
          "type": "function"
        },
        "index": {
          "description": "For all Growing plants that are done find out the next step If new plants are to be created these are returned via their position next to their parent plant",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "applyGenome",
          "normalized": "Angle-\u003ea-\u003eGrowingGarden-\u003e[(GrowingPlanted,[Double])]",
          "package": "L-seed",
          "partial": "Genome",
          "signature": "Angle-\u003eg-\u003eGrowingGarden-\u003e[(GrowingPlanted,[Double])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:applyGenome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies Growth at given fraction, leaving the target length in place\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "applyGrowth",
          "package": "L-seed",
          "signature": "Double -\u003e GrowingPlanted -\u003e GrowingPlanted",
          "source": "src/Lseed-Logic.html#applyGrowth",
          "type": "function"
        },
        "index": {
          "description": "Applies Growth at given fraction leaving the target length in place",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "applyGrowth",
          "normalized": "Double-\u003eGrowingPlanted-\u003eGrowingPlanted",
          "package": "L-seed",
          "partial": "Growth",
          "signature": "Double-\u003eGrowingPlanted-\u003eGrowingPlanted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:applyGrowth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Logic",
          "name": "applyGrowth'",
          "package": "L-seed",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e GrowingPlant -\u003e GrowingPlant",
          "source": "src/Lseed-Logic.html#applyGrowth%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "applyGrowth'",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eGrowingPlant-\u003eGrowingPlant",
          "package": "L-seed",
          "partial": "Growth'",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eGrowingPlant-\u003eGrowingPlant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:applyGrowth-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Logic",
          "name": "formatTimeInfo",
          "package": "L-seed",
          "signature": "Integer -\u003e Double -\u003e String",
          "source": "src/Lseed-Logic.html#formatTimeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "formatTimeInfo",
          "normalized": "Integer-\u003eDouble-\u003eString",
          "package": "L-seed",
          "partial": "Time Info",
          "signature": "Integer-\u003eDouble-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:formatTimeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a GrowingGarden, calculates the current amount of light and then\n advance the growth. This ought to be called after applyGenome\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "growGarden",
          "package": "L-seed",
          "signature": "Angle -\u003e g -\u003e GrowingGarden -\u003e Double -\u003e GrowingGarden",
          "source": "src/Lseed-Logic.html#growGarden",
          "type": "function"
        },
        "index": {
          "description": "For GrowingGarden calculates the current amount of light and then advance the growth This ought to be called after applyGenome",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "growGarden",
          "normalized": "Angle-\u003ea-\u003eGrowingGarden-\u003eDouble-\u003eGrowingGarden",
          "package": "L-seed",
          "partial": "Garden",
          "signature": "Angle-\u003eg-\u003eGrowingGarden-\u003eDouble-\u003eGrowingGarden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:growGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies an L-System to a Plant, putting the new length in the additional\n   information field\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "growPlanted",
          "package": "L-seed",
          "signature": "GrowingPlanted -\u003e Double -\u003e Double -\u003e GrowingPlanted",
          "source": "src/Lseed-Logic.html#growPlanted",
          "type": "function"
        },
        "index": {
          "description": "Applies an L-System to Plant putting the new length in the additional information field",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "growPlanted",
          "normalized": "GrowingPlanted-\u003eDouble-\u003eDouble-\u003eGrowingPlanted",
          "package": "L-seed",
          "partial": "Planted",
          "signature": "GrowingPlanted-\u003eDouble-\u003eDouble-\u003eGrowingPlanted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:growPlanted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the fraction of the time passed, returnes the angle of the sunlight\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "lightAngle",
          "package": "L-seed",
          "signature": "Double -\u003e Angle",
          "source": "src/Lseed-Logic.html#lightAngle",
          "type": "function"
        },
        "index": {
          "description": "Given the fraction of the time passed returnes the angle of the sunlight",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "lightAngle",
          "normalized": "Double-\u003eAngle",
          "package": "L-seed",
          "partial": "Angle",
          "signature": "Double-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:lightAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the length to be grown\n\u003c/p\u003e",
          "module": "Lseed.Logic",
          "name": "remainingGrowth",
          "package": "L-seed",
          "signature": "(a -\u003e GrowthState) -\u003e Planted a -\u003e Double",
          "source": "src/Lseed-Logic.html#remainingGrowth",
          "type": "function"
        },
        "index": {
          "description": "Calculates the length to be grown",
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "remainingGrowth",
          "normalized": "(a-\u003eGrowthState)-\u003ePlanted a-\u003eDouble",
          "package": "L-seed",
          "partial": "Growth",
          "signature": "(a-\u003eGrowthState)-\u003ePlanted a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:remainingGrowth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.Logic",
          "name": "timeSpanFraction",
          "package": "L-seed",
          "signature": "Double -\u003e ClockTime -\u003e ClockTime -\u003e Double",
          "source": "src/Lseed-Logic.html#timeSpanFraction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed Logic",
          "module": "Lseed.Logic",
          "name": "timeSpanFraction",
          "normalized": "Double-\u003eClockTime-\u003eClockTime-\u003eDouble",
          "package": "L-seed",
          "partial": "Span Fraction",
          "signature": "Double-\u003eClockTime-\u003eClockTime-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Logic.html#v:timeSpanFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a runner for a an Lseed garden. It can be passed an\n observer that will receive the results.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lseed.Mainloop",
          "name": "Mainloop",
          "package": "L-seed",
          "source": "src/Lseed-Mainloop.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains runner for an Lseed garden It can be passed an observer that will receive the results",
          "hierarchy": "Lseed Mainloop",
          "module": "Lseed.Mainloop",
          "name": "Mainloop",
          "package": "L-seed",
          "partial": "Mainloop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Mainloop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets a garden grow for the given number of days, while keeping the\n observer informed about any changes.\n\u003c/p\u003e",
          "module": "Lseed.Mainloop",
          "name": "lseedMainLoop",
          "package": "L-seed",
          "signature": "Bool-\u003e Observer-\u003e GardenSource-\u003e Integer-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Lets garden grow for the given number of days while keeping the observer informed about any changes",
          "hierarchy": "Lseed Mainloop",
          "module": "Lseed.Mainloop",
          "name": "lseedMainLoop",
          "normalized": "Bool-\u003eObserver-\u003eGardenSource-\u003eInteger-\u003eIO()",
          "package": "L-seed",
          "partial": "Main Loop",
          "signature": "Bool-\u003eObserver-\u003eGardenSource-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-Mainloop.html#v:lseedMainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.StipeInfo",
          "name": "StipeInfo",
          "package": "L-seed",
          "source": "src/Lseed-StipeInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lseed StipeInfo",
          "module": "Lseed.StipeInfo",
          "name": "StipeInfo",
          "package": "L-seed",
          "partial": "Stipe Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-StipeInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.StipeInfo",
          "name": "annotateGarden",
          "package": "L-seed",
          "signature": "Angle -\u003e GrowingGarden -\u003e AnnotatedGarden",
          "source": "src/Lseed-StipeInfo.html#annotateGarden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed StipeInfo",
          "module": "Lseed.StipeInfo",
          "name": "annotateGarden",
          "normalized": "Angle-\u003eGrowingGarden-\u003eAnnotatedGarden",
          "package": "L-seed",
          "partial": "Garden",
          "signature": "Angle-\u003eGrowingGarden-\u003eAnnotatedGarden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-StipeInfo.html#v:annotateGarden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lseed.StipeInfo",
          "name": "annotatePlant",
          "package": "L-seed",
          "signature": "Plant (GrowthState, Double) -\u003e AnnotatedPlant",
          "source": "src/Lseed-StipeInfo.html#annotatePlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lseed StipeInfo",
          "module": "Lseed.StipeInfo",
          "name": "annotatePlant",
          "normalized": "Plant(GrowthState,Double)-\u003eAnnotatedPlant",
          "package": "L-seed",
          "partial": "Plant",
          "signature": "Plant(GrowthState,Double)-\u003eAnnotatedPlant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/L-seed/docs/Lseed-StipeInfo.html#v:annotatePlant"
      }
    }
  ]
]