[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the infrastructure used to maintain a checkpoint during\n    a tree exploration.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html",
        "fct-type": "module",
        "title": "Checkpoint"
      },
      "index": {
        "description": "This module contains the infrastructure used to maintain checkpoint during tree exploration",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Checkpoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Checkpoint",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the parts of a tree that have been explored. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
        "fct-type": "data",
        "title": "Checkpoint"
      },
      "index": {
        "description": "Information about the parts of tree that have been explored",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Checkpoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:CheckpointCursor",
      "description": {
        "fct-descr": "\u003cp\u003eA zipper that allows us to zoom in on a particular point in the checkpoint. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointCursor",
        "fct-type": "type",
        "title": "CheckpointCursor"
      },
      "index": {
        "description": "zipper that allows us to zoom in on particular point in the checkpoint",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "CheckpointCursor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:CheckpointDifferential",
      "description": {
        "fct-descr": "\u003cp\u003eThe derivative of \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e, used to implement the zipper type \u003ccode\u003e\u003ca\u003eCheckpointCursor\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
        "fct-type": "data",
        "title": "CheckpointDifferential"
      },
      "index": {
        "description": "The derivative of Checkpoint used to implement the zipper type CheckpointCursor",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "CheckpointDifferential",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint Differential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eCheckpointCursor\u003c/a\u003e\u003c/code\u003e, but each step keeps track of the subtree for the\n    alternative branch in case we backtrack to it.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Context",
        "fct-type": "type",
        "title": "Context"
      },
      "index": {
        "description": "Like CheckpointCursor but each step keeps track of the subtree for the alternative branch in case we backtrack to it",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Context",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ContextStep",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eCheckpointDifferential\u003c/a\u003e\u003c/code\u003e, but left branches include the subtree for the\n    right branch; the right branches do not need this information because we\n    always explore the left branch first.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
        "fct-type": "data",
        "title": "ContextStep"
      },
      "index": {
        "description": "Like CheckpointDifferential but left branches include the subtree for the right branch the right branches do not need this information because we always explore the left branch first",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ContextStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Context Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ExplorationState",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eExplorationTState\u003c/a\u003e\u003c/code\u003e in a pure setting. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationState",
        "fct-type": "type",
        "title": "ExplorationState"
      },
      "index": {
        "description": "An alias for ExplorationTState in pure setting",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ExplorationState",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ExplorationTState",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of the exploration of a tree starting from a checkpoint. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
        "fct-type": "data",
        "title": "ExplorationTState"
      },
      "index": {
        "description": "The current state of the exploration of tree starting from checkpoint",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ExplorationTState",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration TState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:InconsistentCheckpoints",
      "description": {
        "fct-descr": "\u003cp\u003eThis exception is thrown when one attempts to merge checkpoints that\n    disagree with each other; this will never happen as long as you only merge\n    checkpoints that came from the same tree, so if you get this\n    exception then there is almost certainly a bug in your code.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#InconsistentCheckpoints",
        "fct-type": "data",
        "title": "InconsistentCheckpoints"
      },
      "index": {
        "description": "This exception is thrown when one attempts to merge checkpoints that disagree with each other this will never happen as long as you only merge checkpoints that came from the same tree so if you get this exception then there is almost certainly bug in your code",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "InconsistentCheckpoints",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Inconsistent Checkpoints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Progress",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about both the current checkpoint and the results we have\n    gathered so far.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
        "fct-type": "data",
        "title": "Progress"
      },
      "index": {
        "description": "Information about both the current checkpoint and the results we have gathered so far",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Progress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CacheContextStep",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CacheContextStep ByteString",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
        "fct-type": "function",
        "title": "CacheContextStep"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "CacheContextStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Cache Context Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CachePoint",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CachePoint ByteString Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
        "fct-type": "function",
        "title": "CachePoint"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "CachePoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Cache Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CachePointD",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CachePointD ByteString",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
        "fct-type": "function",
        "title": "CachePointD"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "CachePointD",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Cache Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ChoicePoint",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ChoicePoint Checkpoint Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
        "fct-type": "function",
        "title": "ChoicePoint"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ChoicePoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Choice Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ChoicePointD",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ChoicePointD BranchChoice Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
        "fct-type": "function",
        "title": "ChoicePointD"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ChoicePointD",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Choice Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ExplorationTState",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationTState",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
        "fct-type": "function",
        "title": "ExplorationTState"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "ExplorationTState",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration TState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Explored",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Explored",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
        "fct-type": "function",
        "title": "Explored"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Explored",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Explored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:InconsistentCheckpoints",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "InconsistentCheckpoints Checkpoint Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#InconsistentCheckpoints",
        "fct-type": "function",
        "title": "InconsistentCheckpoints"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "InconsistentCheckpoints",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Inconsistent Checkpoints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:LeftBranchContextStep",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LeftBranchContextStep Checkpoint (TreeT m α)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
        "fct-type": "function",
        "title": "LeftBranchContextStep"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "LeftBranchContextStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Left Branch Context Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Progress",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Progress",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
        "fct-type": "function",
        "title": "Progress"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Progress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:RightBranchContextStep",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RightBranchContextStep",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
        "fct-type": "function",
        "title": "RightBranchContextStep"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "RightBranchContextStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Right Branch Context Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Unexplored",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Unexplored",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
        "fct-type": "function",
        "title": "Unexplored"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "Unexplored",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Unexplored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromContext",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a full checkpoint given a (context) checkpoint zipper with a hole\n    at your current location and the subcheckpoint at your location.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Context m α -\u003e Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromContext",
        "fct-type": "function",
        "title": "checkpointFromContext"
      },
      "index": {
        "description": "Constructs full checkpoint given context checkpoint zipper with hole at your current location and the subcheckpoint at your location",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromContext",
        "normalized": "Context a b-\u003eCheckpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Context",
        "signature": "Context m α-\u003eCheckpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromCursor",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a full checkpoint given a (cursor) checkpoint zipper with a hole\n    at your current location and the subcheckpoint at your location.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CheckpointCursor -\u003e Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromCursor",
        "fct-type": "function",
        "title": "checkpointFromCursor"
      },
      "index": {
        "description": "Constructs full checkpoint given cursor checkpoint zipper with hole at your current location and the subcheckpoint at your location",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromCursor",
        "normalized": "CheckpointCursor-\u003eCheckpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Cursor",
        "signature": "CheckpointCursor-\u003eCheckpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromExplorationState",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the current checkpoint given the state of an exploration. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationTState m α -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromExplorationState",
        "fct-type": "function",
        "title": "checkpointFromExplorationState"
      },
      "index": {
        "description": "Computes the current checkpoint given the state of an exploration",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromExplorationState",
        "normalized": "ExplorationTState a b-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Exploration State",
        "signature": "ExplorationTState m α-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromInitialPath",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a full checkpoint given the path to where you are currently\n    searching and the subcheckpoint at your location, assuming that we have no\n    knowledge of anything outside our location (which is indicated by marking it\n    as \u003ccode\u003e\u003ca\u003eUnexplored\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path -\u003e Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromInitialPath",
        "fct-type": "function",
        "title": "checkpointFromInitialPath"
      },
      "index": {
        "description": "Constructs full checkpoint given the path to where you are currently searching and the subcheckpoint at your location assuming that we have no knowledge of anything outside our location which is indicated by marking it as Unexplored",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromInitialPath",
        "normalized": "Path-\u003eCheckpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Initial Path",
        "signature": "Path-\u003eCheckpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromSequence",
      "description": {
        "fct-descr": "\u003cp\u003eIncrementally builds up a full checkpoint given a sequence corresponding to\n    some cursor at a particular location of the full checkpoint and the\n    subcheckpoint to splice in at that location.\n\u003c/p\u003e\u003cp\u003eThe main reason that you should use this function is that, as it builds up\n    the full checkpoint, it makes some important simplifications via.\n    \u003ccode\u003e\u003ca\u003esimplifyCheckpointRoot\u003c/a\u003e\u003c/code\u003e, such as replacing \u003ccode\u003eChoicePoint Explored Explored\u003c/code\u003e\n    with \u003ccode\u003eExplored\u003c/code\u003e, which both shrinks the size of the checkpoint as well as\n    making it \u003cem\u003emuch\u003c/em\u003e easier to determine if it is equivalent to \u003ccode\u003e\u003ca\u003eExplored\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Checkpoint -\u003e Checkpoint) -\u003e Seq α -\u003e Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromSequence",
        "fct-type": "function",
        "title": "checkpointFromSequence"
      },
      "index": {
        "description": "Incrementally builds up full checkpoint given sequence corresponding to some cursor at particular location of the full checkpoint and the subcheckpoint to splice in at that location The main reason that you should use this function is that as it builds up the full checkpoint it makes some important simplifications via simplifyCheckpointRoot such as replacing ChoicePoint Explored Explored with Explored which both shrinks the size of the checkpoint as well as making it much easier to determine if it is equivalent to Explored",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromSequence",
        "normalized": "(a-\u003eCheckpoint-\u003eCheckpoint)-\u003eSeq a-\u003eCheckpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Sequence",
        "signature": "(α-\u003eCheckpoint-\u003eCheckpoint)-\u003eSeq α-\u003eCheckpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromUnexploredPath",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a full checkpoint given the path to where you are currently\n    located, assuming that the current location is \u003ccode\u003e\u003ca\u003eUnexplored\u003c/a\u003e\u003c/code\u003e and everything\n    outside of our location has been fully explored already.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromUnexploredPath",
        "fct-type": "function",
        "title": "checkpointFromUnexploredPath"
      },
      "index": {
        "description": "Constructs full checkpoint given the path to where you are currently located assuming that the current location is Unexplored and everything outside of our location has been fully explored already",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "checkpointFromUnexploredPath",
        "normalized": "Path-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Unexplored Path",
        "signature": "Path-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateCheckpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
        "fct-type": "function",
        "title": "explorationStateCheckpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "explorationStateCheckpoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "State Checkpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateContext",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(Context m α)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
        "fct-type": "function",
        "title": "explorationStateContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "explorationStateContext",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "State Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(TreeT m α)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
        "fct-type": "function",
        "title": "explorationStateTree"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "explorationStateTree",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "State Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the remaining nodes in a pure tree, starting from the\n    given checkpoint, and sums over all the results in the leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e Tree α -\u003e α",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeStartingFromCheckpoint"
      },
      "index": {
        "description": "Explores the remaining nodes in pure tree starting from the given checkpoint and sums over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeStartingFromCheckpoint",
        "normalized": "Checkpoint-\u003eTree a-\u003ea",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Starting From Checkpoint",
        "signature": "Checkpoint-\u003eTree α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the remaining nodes in an impure tree, starting from the\n    given checkpoint, and sums over all the results in the leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e TreeT m α -\u003e m α",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeTStartingFromCheckpoint"
      },
      "index": {
        "description": "Explores the remaining nodes in an impure tree starting from the given checkpoint and sums over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeTStartingFromCheckpoint",
        "normalized": "Checkpoint-\u003eTreeT a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TStarting From Checkpoint",
        "signature": "Checkpoint-\u003eTreeT m α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTUntilFirstStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e TreeT m α -\u003e m (Maybe α)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTUntilFirstStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirstStartingFromCheckpoint"
      },
      "index": {
        "description": "Same as exploreTreeUntilFirstStartingFromCheckpoint but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeTUntilFirstStartingFromCheckpoint",
        "normalized": "Checkpoint-\u003eTreeT a b-\u003ea(Maybe b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First Starting From Checkpoint",
        "signature": "Checkpoint-\u003eTreeT m α-\u003em(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTUntilFoundStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool) -\u003e Checkpoint -\u003e TreeT m α -\u003e m (α, Bool)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTUntilFoundStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundStartingFromCheckpoint"
      },
      "index": {
        "description": "Same as exploreTreeUntilFoundStartingFromCheckpoint but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeTUntilFoundStartingFromCheckpoint",
        "normalized": "(a-\u003eBool)-\u003eCheckpoint-\u003eTreeT b a-\u003eb(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Starting From Checkpoint",
        "signature": "(α-\u003eBool)-\u003eCheckpoint-\u003eTreeT m α-\u003em(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeUntilFirstStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the remaining nodes in a pure tree, starting from the\n    given checkpoint, until a result (i.e., a leaf) has been found; if a result\n    has been found then it is returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n    returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e Tree α -\u003e Maybe α",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeUntilFirstStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeUntilFirstStartingFromCheckpoint"
      },
      "index": {
        "description": "Explores all the remaining nodes in pure tree starting from the given checkpoint until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeUntilFirstStartingFromCheckpoint",
        "normalized": "Checkpoint-\u003eTree a-\u003eMaybe a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First Starting From Checkpoint",
        "signature": "Checkpoint-\u003eTree α-\u003eMaybe α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeUntilFoundStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the remaining nodes in a tree, starting from the given checkpoint\n    and summing all results encountered (i.e., in the leaves) until the current\n    partial sum satisfies the condition provided by the first parameter.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool) -\u003e Checkpoint -\u003e Tree α -\u003e (α, Bool)",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeUntilFoundStartingFromCheckpoint",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundStartingFromCheckpoint"
      },
      "index": {
        "description": "Explores all the remaining nodes in tree starting from the given checkpoint and summing all results encountered i.e in the leaves until the current partial sum satisfies the condition provided by the first parameter See exploreTreeUntilFound for more details",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "exploreTreeUntilFoundStartingFromCheckpoint",
        "normalized": "(a-\u003eBool)-\u003eCheckpoint-\u003eTree a-\u003e(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Starting From Checkpoint",
        "signature": "(α-\u003eBool)-\u003eCheckpoint-\u003eTree α-\u003e(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:initialExplorationState",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the initial \u003ccode\u003e\u003ca\u003eExplorationTState\u003c/a\u003e\u003c/code\u003e for the given tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e TreeT m α -\u003e ExplorationTState m α",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#initialExplorationState",
        "fct-type": "function",
        "title": "initialExplorationState"
      },
      "index": {
        "description": "Constructs the initial ExplorationTState for the given tree",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "initialExplorationState",
        "normalized": "Checkpoint-\u003eTreeT a b-\u003eExplorationTState a b",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration State",
        "signature": "Checkpoint-\u003eTreeT m α-\u003eExplorationTState m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:invertCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eInverts a checkpoint so that unexplored areas become explored areas and vice\n    versa.  This function satisfies the law that if you sum the result of\n    exploring the tree with the original checkpoint and the result of summing\n    the tree with the inverted checkpoint then (assuming the result monoid\n    commutes) you will get the same result as exploring the entire tree.  That\n    is to say,\n\u003c/p\u003e\u003cpre\u003e\nexploreTreeStartingFromCheckpoint checkpoint tree\n\u003c\u003e\nexploreTreeStartingFromCheckpoint (invertCheckpoint checkpoint) tree\n==\nexploreTree tree\n\u003c/pre\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#invertCheckpoint",
        "fct-type": "function",
        "title": "invertCheckpoint"
      },
      "index": {
        "description": "Inverts checkpoint so that unexplored areas become explored areas and vice versa This function satisfies the law that if you sum the result of exploring the tree with the original checkpoint and the result of summing the tree with the inverted checkpoint then assuming the result monoid commutes you will get the same result as exploring the entire tree That is to say exploreTreeStartingFromCheckpoint checkpoint tree exploreTreeStartingFromCheckpoint invertCheckpoint checkpoint tree exploreTree tree",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "invertCheckpoint",
        "normalized": "Checkpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": "Checkpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathFromContext",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the path to the current location in the checkpoint as given by the\n    context.  (Note that this is a lossy conversation because the resulting path\n    does not contain any information about the branches not taken.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Context m α -\u003e Path",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#pathFromContext",
        "fct-type": "function",
        "title": "pathFromContext"
      },
      "index": {
        "description": "Computes the path to the current location in the checkpoint as given by the context Note that this is lossy conversation because the resulting path does not contain any information about the branches not taken",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "pathFromContext",
        "normalized": "Context a b-\u003ePath",
        "package": "LogicGrowsOnTrees",
        "partial": "From Context",
        "signature": "Context m α-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathFromCursor",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the path to the current location in the checkpoint as given by the\n    cursor.  (Note that this is a lossy conversation because the resulting path\n    does not contain any information about the branches not taken.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CheckpointCursor -\u003e Path",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#pathFromCursor",
        "fct-type": "function",
        "title": "pathFromCursor"
      },
      "index": {
        "description": "Computes the path to the current location in the checkpoint as given by the cursor Note that this is lossy conversation because the resulting path does not contain any information about the branches not taken",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "pathFromCursor",
        "normalized": "CheckpointCursor-\u003ePath",
        "package": "LogicGrowsOnTrees",
        "partial": "From Cursor",
        "signature": "CheckpointCursor-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathStepFromContextStep",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a context step to a path step by throwing away information about\n    the alternative branch (if present).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ContextStep m α -\u003e Step",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#pathStepFromContextStep",
        "fct-type": "function",
        "title": "pathStepFromContextStep"
      },
      "index": {
        "description": "Converts context step to path step by throwing away information about the alternative branch if present",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "pathStepFromContextStep",
        "normalized": "ContextStep a b-\u003eStep",
        "package": "LogicGrowsOnTrees",
        "partial": "Step From Context Step",
        "signature": "ContextStep m α-\u003eStep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathStepFromCursorDifferential",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a cursor differential to a path step by throwing away information\n    about the alternative branch (if present).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CheckpointDifferential -\u003e Step",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#pathStepFromCursorDifferential",
        "fct-type": "function",
        "title": "pathStepFromCursorDifferential"
      },
      "index": {
        "description": "Converts cursor differential to path step by throwing away information about the alternative branch if present",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "pathStepFromCursorDifferential",
        "normalized": "CheckpointDifferential-\u003eStep",
        "package": "LogicGrowsOnTrees",
        "partial": "Step From Cursor Differential",
        "signature": "CheckpointDifferential-\u003eStep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:progressCheckpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
        "fct-type": "function",
        "title": "progressCheckpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "progressCheckpoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:progressResult",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "α",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
        "fct-type": "function",
        "title": "progressResult"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "progressResult",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:simplifyCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003esimplifyCheckpointRoot\u003c/a\u003e\u003c/code\u003e everywhere in the checkpoint starting from\n    the bottom up.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#simplifyCheckpoint",
        "fct-type": "function",
        "title": "simplifyCheckpoint"
      },
      "index": {
        "description": "Applies simplifyCheckpointRoot everywhere in the checkpoint starting from the bottom up",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "simplifyCheckpoint",
        "normalized": "Checkpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": "Checkpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:simplifyCheckpointRoot",
      "description": {
        "fct-descr": "\u003cp\u003eSimplifies the root of the checkpoint by replacing\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eChoicepoint Unexplored Unexplored\u003c/code\u003e with \u003ccode\u003eUnexplored\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eChoicepoint Explored Explored\u003c/code\u003e with \u003ccode\u003eExplored\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eCachePoint _ Explored\u003c/code\u003e with \u003ccode\u003eExplored\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#simplifyCheckpointRoot",
        "fct-type": "function",
        "title": "simplifyCheckpointRoot"
      },
      "index": {
        "description": "Simplifies the root of the checkpoint by replacing Choicepoint Unexplored Unexplored with Unexplored Choicepoint Explored Explored with Explored and CachePoint Explored with Explored",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "simplifyCheckpointRoot",
        "normalized": "Checkpoint-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint Root",
        "signature": "Checkpoint-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:stepThroughTreeStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the current state of exploration, perform an additional step of\n    exploration, returning any solution that was found and the next state of the\n    exploration --- which will be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the entire tree has been\n    explored.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationState α -\u003e (Maybe α, Maybe (ExplorationState α))",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#stepThroughTreeStartingFromCheckpoint",
        "fct-type": "function",
        "title": "stepThroughTreeStartingFromCheckpoint"
      },
      "index": {
        "description": "Given the current state of exploration perform an additional step of exploration returning any solution that was found and the next state of the exploration which will be Nothing if the entire tree has been explored",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "stepThroughTreeStartingFromCheckpoint",
        "normalized": "ExplorationState a-\u003e(Maybe a,Maybe(ExplorationState a))",
        "package": "LogicGrowsOnTrees",
        "partial": "Through Tree Starting From Checkpoint",
        "signature": "ExplorationState α-\u003e(Maybe α,Maybe(ExplorationState α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:stepThroughTreeTStartingFromCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estepThroughTreeStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Checkpoint",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationTState m α -\u003e m (Maybe α, Maybe (ExplorationTState m α))",
        "fct-source": "src/LogicGrowsOnTrees-Checkpoint.html#stepThroughTreeTStartingFromCheckpoint",
        "fct-type": "function",
        "title": "stepThroughTreeTStartingFromCheckpoint"
      },
      "index": {
        "description": "Like stepThroughTreeStartingFromCheckpoint but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Checkpoint",
        "module": "LogicGrowsOnTrees.Checkpoint",
        "name": "stepThroughTreeTStartingFromCheckpoint",
        "normalized": "ExplorationTState a b-\u003ea(Maybe b,Maybe(ExplorationTState a b))",
        "package": "LogicGrowsOnTrees",
        "partial": "Through Tree TStarting From Checkpoint",
        "signature": "ExplorationTState m α-\u003em(Maybe α,Maybe(ExplorationTState m α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains examples of logic programs that generate all the valid\n    colorings of a given (geographical) map.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.MapColoring",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Examples-MapColoring.html",
        "fct-type": "module",
        "title": "MapColoring"
      },
      "index": {
        "description": "This module contains examples of logic programs that generate all the valid colorings of given geographical map",
        "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
        "module": "LogicGrowsOnTrees.Examples.MapColoring",
        "name": "MapColoring",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Map Coloring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#v:coloringSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all valid map colorings. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.MapColoring",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e Word-\u003e (Word -\u003e Word -\u003e Bool)-\u003e m [(Word, Word)]",
        "fct-type": "function",
        "title": "coloringSolutions"
      },
      "index": {
        "description": "Generate all valid map colorings",
        "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
        "module": "LogicGrowsOnTrees.Examples.MapColoring",
        "name": "coloringSolutions",
        "normalized": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003ea[(Word,Word)]",
        "package": "LogicGrowsOnTrees",
        "partial": "Solutions",
        "signature": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003em[(Word,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#v:coloringUniqueSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all \u003cem\u003eunique\u003c/em\u003e valid map colorings.  That is, exactly one coloring will\n    be generated from each class of colorings that are equivalent under a\n    permutation of colors.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.MapColoring",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e Word-\u003e (Word -\u003e Word -\u003e Bool)-\u003e m [(Word, Word)]",
        "fct-type": "function",
        "title": "coloringUniqueSolutions"
      },
      "index": {
        "description": "Generate all unique valid map colorings That is exactly one coloring will be generated from each class of colorings that are equivalent under permutation of colors",
        "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
        "module": "LogicGrowsOnTrees.Examples.MapColoring",
        "name": "coloringUniqueSolutions",
        "normalized": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003ea[(Word,Word)]",
        "package": "LogicGrowsOnTrees",
        "partial": "Unique Solutions",
        "signature": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003em[(Word,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a heavily optimized solver for the n-queens problems.\nSpecifically, it uses the following tricks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e symmetry breaking to prune redundant solutions\n\u003c/li\u003e\u003cli\u003e unpacked datatypes instead of multiple arguments\n\u003c/li\u003e\u003cli\u003e optimized \u003ccode\u003e\u003ca\u003egetOpenings\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e C code for the inner-most loop\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eINLINE\u003c/code\u003es in many places in order to create optimized specializations of\n    the generic functions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBenchmarks were used to determine that all of these tricks resulted in\nperformance improvements using GHC 7.4.3.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html",
        "fct-type": "module",
        "title": "Advanced"
      },
      "index": {
        "description": "This module contains heavily optimized solver for the n-queens problems Specifically it uses the following tricks symmetry breaking to prune redundant solutions unpacked datatypes instead of multiple arguments optimized getOpenings code for the inner-most loop INLINE in many places in order to create optimized specializations of the generic functions Benchmarks were used to determine that all of these tricks resulted in performance improvements using GHC",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "Advanced",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Advanced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensBreak180State",
      "description": {
        "fct-descr": "\u003cp\u003eThe state while the 180-degree rotational symmetry is being broken. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "data",
        "title": "NQueensBreak180State"
      },
      "index": {
        "description": "The state while the degree rotational symmetry is being broken",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensBreak180State",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Break State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensBreak90State",
      "description": {
        "fct-descr": "\u003cp\u003eThe state type while the 90-degree rotational symmetry is being broken. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "data",
        "title": "NQueensBreak90State"
      },
      "index": {
        "description": "The state type while the degree rotational symmetry is being broken",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensBreak90State",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Break State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSearchState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state during the brute-force search. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "data",
        "title": "NQueensSearchState"
      },
      "index": {
        "description": "The state during the brute-force search",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensSearchState",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Search State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSolution",
      "description": {
        "fct-descr": "\u003cp\u003eType alias for a solution, which takes the form of a list of coordinates. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSolution",
        "fct-type": "type",
        "title": "NQueensSolution"
      },
      "index": {
        "description": "Type alias for solution which takes the form of list of coordinates",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensSolution",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Solution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eType alias for a list of solutions. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSolutions",
        "fct-type": "type",
        "title": "NQueensSolutions"
      },
      "index": {
        "description": "Type alias for list of solutions",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensSolutions",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Solutions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSymmetry",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible board symmetries. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
        "fct-type": "data",
        "title": "NQueensSymmetry"
      },
      "index": {
        "description": "The possible board symmetries",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensSymmetry",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Symmetry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:PositionAndBit",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a position and bit at that position. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#PositionAndBit",
        "fct-type": "data",
        "title": "PositionAndBit"
      },
      "index": {
        "description": "Represents position and bit at that position",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "PositionAndBit",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Position And Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:PositionAndBitWithReflection",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ePositionAndBit\u003c/a\u003e\u003c/code\u003e, but also including the same for the reflection of the\n    position (i.e., one less than the board size minus the position).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#PositionAndBitWithReflection",
        "fct-type": "data",
        "title": "PositionAndBitWithReflection"
      },
      "index": {
        "description": "Like PositionAndBit but also including the same for the reflection of the position i.e one less than the board size minus the position",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "PositionAndBitWithReflection",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Position And Bit With Reflection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:AllRotations",
      "description": {
        "fct-descr": "\u003cp\u003ethe board is symmetric under all rotations \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "AllRotations",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
        "fct-type": "function",
        "title": "AllRotations"
      },
      "index": {
        "description": "the board is symmetric under all rotations",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "AllRotations",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "All Rotations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:AllSymmetries",
      "description": {
        "fct-descr": "\u003cp\u003ethe board is symmetric under all rotations and reflections \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "AllSymmetries",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
        "fct-type": "function",
        "title": "AllSymmetries"
      },
      "index": {
        "description": "the board is symmetric under all rotations and reflections",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "AllSymmetries",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "All Symmetries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensBreak180State",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NQueensBreak180State",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "NQueensBreak180State"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensBreak180State",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Break State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensBreak90State",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NQueensBreak90State",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "NQueensBreak90State"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensBreak90State",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Break State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensSearchState",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NQueensSearchState",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "NQueensSearchState"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NQueensSearchState",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "NQueens Search State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NoSymmetries",
      "description": {
        "fct-descr": "\u003cp\u003ethe board has no symmetries at all \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NoSymmetries",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
        "fct-type": "function",
        "title": "NoSymmetries"
      },
      "index": {
        "description": "the board has no symmetries at all",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "NoSymmetries",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "No Symmetries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:Rotate180Only",
      "description": {
        "fct-descr": "\u003cp\u003ethe board is symmetric under 180 degree rotations \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Rotate180Only",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
        "fct-type": "function",
        "title": "Rotate180Only"
      },
      "index": {
        "description": "the board is symmetric under degree rotations",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "Rotate180Only",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Rotate Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:allRotationsAndReflectionsOf",
      "description": {
        "fct-descr": "\u003cp\u003eComputes all rotations and reflections of the given solution. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolutions",
        "fct-type": "function",
        "title": "allRotationsAndReflectionsOf"
      },
      "index": {
        "description": "Computes all rotations and reflections of the given solution",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "allRotationsAndReflectionsOf",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
        "package": "LogicGrowsOnTrees",
        "partial": "Rotations And Reflections Of",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolutions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:allRotationsOf",
      "description": {
        "fct-descr": "\u003cp\u003eComputes all rotations of the given solution. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolutions",
        "fct-type": "function",
        "title": "allRotationsOf"
      },
      "index": {
        "description": "Computes all rotations of the given solution",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "allRotationsOf",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
        "package": "LogicGrowsOnTrees",
        "partial": "Rotations Of",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolutions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_number_of_queens_remaining",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_number_of_queens_remaining"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_number_of_queens_remaining",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_columns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_occupied_columns"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_occupied_columns",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_negative_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_occupied_negative_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_occupied_negative_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_positive_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_occupied_positive_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_occupied_positive_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_right_positive_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_occupied_right_positive_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_occupied_right_positive_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_rows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_occupied_rows"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_occupied_rows",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_window_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_window_size"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_window_size",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_window_start",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
        "fct-type": "function",
        "title": "b180_window_start"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b180_window_start",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_number_of_queens_remaining",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_number_of_queens_remaining"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_number_of_queens_remaining",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_negative_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_occupied_negative_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_occupied_negative_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_positive_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_occupied_positive_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_occupied_positive_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_rows_and_columns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_occupied_rows_and_columns"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_occupied_rows_and_columns",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_window_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_window_size"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_window_size",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_window_start",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
        "fct-type": "function",
        "title": "b90_window_start"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "b90_window_start",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:c_LogicGrowsOnTrees_Queens_count_solutions",
      "description": {
        "fct-descr": "\u003cp\u003eC code that performs a brute-force search for the remaining queens.  The\n    last three arguments are allowed to be NULL, in which case they are ignored\n    and only the count is returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CUInt-\u003e CUInt-\u003e CUInt-\u003e Word64-\u003e Word64-\u003e Word64-\u003e Word64-\u003e FunPtr (CUInt -\u003e CUInt -\u003e IO ())-\u003e FunPtr (IO ())-\u003e FunPtr (IO ())-\u003e IO CUInt",
        "fct-type": "function",
        "title": "c_LogicGrowsOnTrees_Queens_count_solutions"
      },
      "index": {
        "description": "code that performs brute-force search for the remaining queens The last three arguments are allowed to be NULL in which case they are ignored and only the count is returned",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "c_LogicGrowsOnTrees_Queens_count_solutions",
        "normalized": "CUInt-\u003eCUInt-\u003eCUInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eFunPtr(CUInt-\u003eCUInt-\u003eIO())-\u003eFunPtr(IO())-\u003eFunPtr(IO())-\u003eIO CUInt",
        "package": "LogicGrowsOnTrees",
        "partial": "Logic Grows On Trees Queens",
        "signature": "CUInt-\u003eCUInt-\u003eCUInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eFunPtr(CUInt-\u003eCUInt-\u003eIO())-\u003eFunPtr(IO())-\u003eFunPtr(IO())-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:convertSolutionToWord",
      "description": {
        "fct-descr": "\u003cp\u003eConverts coordinates of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e to type \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "[(Int, Int)] -\u003e [(Word, Word)]",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#convertSolutionToWord",
        "fct-type": "function",
        "title": "convertSolutionToWord"
      },
      "index": {
        "description": "Converts coordinates of type Int to type Word",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "convertSolutionToWord",
        "normalized": "[(Int,Int)]-\u003e[(Word,Word)]",
        "package": "LogicGrowsOnTrees",
        "partial": "Solution To Word",
        "signature": "[(Int,Int)]-\u003e[(Word,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:extractExteriorFromSolution",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the outermost layers of a solution. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e Word-\u003e NQueensSolution-\u003e NQueensSolution",
        "fct-type": "function",
        "title": "extractExteriorFromSolution"
      },
      "index": {
        "description": "Extracts the outermost layers of solution",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "extractExteriorFromSolution",
        "normalized": "Word-\u003eWord-\u003eNQueensSolution-\u003eNQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Exterior From Solution",
        "signature": "Word-\u003eWord-\u003eNQueensSolution-\u003eNQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:getOpenings",
      "description": {
        "fct-descr": "\u003cp\u003eGet the openings for a queen \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int-\u003e Word64-\u003e m PositionAndBit",
        "fct-type": "function",
        "title": "getOpenings"
      },
      "index": {
        "description": "Get the openings for queen",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "getOpenings",
        "normalized": "Int-\u003eWord-\u003ea PositionAndBit",
        "package": "LogicGrowsOnTrees",
        "partial": "Openings",
        "signature": "Int-\u003eWord-\u003em PositionAndBit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:getSymmetricOpenings",
      "description": {
        "fct-descr": "\u003cp\u003eGet the symmetric openings for a queen \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int-\u003e Word64-\u003e m PositionAndBitWithReflection",
        "fct-type": "function",
        "title": "getSymmetricOpenings"
      },
      "index": {
        "description": "Get the symmetric openings for queen",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "getSymmetricOpenings",
        "normalized": "Int-\u003eWord-\u003ea PositionAndBitWithReflection",
        "package": "LogicGrowsOnTrees",
        "partial": "Symmetric Openings",
        "signature": "Int-\u003eWord-\u003em PositionAndBitWithReflection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasReflectionSymmetry",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a solution has reflection symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e Bool",
        "fct-type": "function",
        "title": "hasReflectionSymmetry"
      },
      "index": {
        "description": "Checks if solution has reflection symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "hasReflectionSymmetry",
        "normalized": "Word-\u003eNQueensSolution-\u003eBool",
        "package": "LogicGrowsOnTrees",
        "partial": "Reflection Symmetry",
        "signature": "Word-\u003eNQueensSolution-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasRotate180Symmetry",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a solution has 180-degree rotation symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e Bool",
        "fct-type": "function",
        "title": "hasRotate180Symmetry"
      },
      "index": {
        "description": "Checks if solution has degree rotation symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "hasRotate180Symmetry",
        "normalized": "Word-\u003eNQueensSolution-\u003eBool",
        "package": "LogicGrowsOnTrees",
        "partial": "Rotate Symmetry",
        "signature": "Word-\u003eNQueensSolution-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasRotate90Symmetry",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a solution has 90-degree rotation symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e Bool",
        "fct-type": "function",
        "title": "hasRotate90Symmetry"
      },
      "index": {
        "description": "Checks if solution has degree rotation symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "hasRotate90Symmetry",
        "normalized": "Word-\u003eNQueensSolution-\u003eBool",
        "package": "LogicGrowsOnTrees",
        "partial": "Rotate Symmetry",
        "signature": "Word-\u003eNQueensSolution-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkFinalizeValue",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper stub for the finalize value function pointer \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IO () -\u003e IO (FunPtr (IO ()))",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkFinalizeValue",
        "fct-type": "function",
        "title": "mkFinalizeValue"
      },
      "index": {
        "description": "wrapper stub for the finalize value function pointer",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "mkFinalizeValue",
        "normalized": "IO()-\u003eIO(FunPtr(IO()))",
        "package": "LogicGrowsOnTrees",
        "partial": "Finalize Value",
        "signature": "IO()-\u003eIO(FunPtr(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkPopValue",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper stub for the pop value function pointer \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IO () -\u003e IO (FunPtr (IO ()))",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkPopValue",
        "fct-type": "function",
        "title": "mkPopValue"
      },
      "index": {
        "description": "wrapper stub for the pop value function pointer",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "mkPopValue",
        "normalized": "IO()-\u003eIO(FunPtr(IO()))",
        "package": "LogicGrowsOnTrees",
        "partial": "Pop Value",
        "signature": "IO()-\u003eIO(FunPtr(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkPushValue",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper stub for the push value function pointer \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(CUInt -\u003e CUInt -\u003e IO ()) -\u003e IO (FunPtr (CUInt -\u003e CUInt -\u003e IO ()))",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkPushValue",
        "fct-type": "function",
        "title": "mkPushValue"
      },
      "index": {
        "description": "wrapper stub for the push value function pointer",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "mkPushValue",
        "normalized": "(CUInt-\u003eCUInt-\u003eIO())-\u003eIO(FunPtr(CUInt-\u003eCUInt-\u003eIO()))",
        "package": "LogicGrowsOnTrees",
        "partial": "Push Value",
        "signature": "(CUInt-\u003eCUInt-\u003eIO())-\u003eIO(FunPtr(CUInt-\u003eCUInt-\u003eIO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:multiplicityForSymmetry",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of equivalent solutions for a solution with a given symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NQueensSymmetry -\u003e Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#multiplicityForSymmetry",
        "fct-type": "function",
        "title": "multiplicityForSymmetry"
      },
      "index": {
        "description": "Returns the number of equivalent solutions for solution with given symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "multiplicityForSymmetry",
        "normalized": "NQueensSymmetry-\u003eWord",
        "package": "LogicGrowsOnTrees",
        "partial": "For Symmetry",
        "signature": "NQueensSymmetry-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:multiplySolution",
      "description": {
        "fct-descr": "\u003cp\u003eGets all of the equivalent solutions with an equivalent symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSymmetry-\u003e NQueensSolution-\u003e m NQueensSolution",
        "fct-type": "function",
        "title": "multiplySolution"
      },
      "index": {
        "description": "Gets all of the equivalent solutions with an equivalent symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "multiplySolution",
        "normalized": "Word-\u003eNQueensSymmetry-\u003eNQueensSolution-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Solution",
        "signature": "Word-\u003eNQueensSymmetry-\u003eNQueensSolution-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBreak180",
      "description": {
        "fct-descr": "\u003cp\u003eBreak the 180-degree rotational symmetry at the current layer. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e NQueensBreak180State-\u003e m β",
        "fct-type": "function",
        "title": "nqueensBreak180"
      },
      "index": {
        "description": "Break the degree rotational symmetry at the current layer",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensBreak180",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eNQueensBreak State-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Break",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eNQueensBreak State-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBreak90",
      "description": {
        "fct-descr": "\u003cp\u003eBreak the 90-degree rotational symmetry at the current layer. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e (α -\u003e NQueensBreak90State -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e NQueensBreak90State-\u003e m β",
        "fct-type": "function",
        "title": "nqueensBreak90"
      },
      "index": {
        "description": "Break the degree rotational symmetry at the current layer",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensBreak90",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eNQueensBreak State-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Break",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eNQueensBreak State-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceCount",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board size. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensBruteForceCount",
        "fct-type": "function",
        "title": "nqueensBruteForceCount"
      },
      "index": {
        "description": "Generates the solution count to the n-queens problem with the given board size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensBruteForceCount",
        "normalized": "Word-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "Brute Force Count",
        "signature": "Word-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for directly using the brute-force search approach \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
        "fct-type": "function",
        "title": "nqueensBruteForceGeneric"
      },
      "index": {
        "description": "Interface for directly using the brute-force search approach",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensBruteForceGeneric",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Brute Force Generic",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eWord-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m NQueensSolution",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensBruteForceSolutions",
        "fct-type": "function",
        "title": "nqueensBruteForceSolutions"
      },
      "index": {
        "description": "Generates the solutions to the n-queens problem with the given board size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensBruteForceSolutions",
        "normalized": "Word-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Brute Force Solutions",
        "signature": "Word-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCCount",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board size. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensCCount",
        "fct-type": "function",
        "title": "nqueensCCount"
      },
      "index": {
        "description": "Generates the solution count to the n-queens problem with the given board size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensCCount",
        "normalized": "Word-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "CCount",
        "signature": "Word-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for directly using the C search approach \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
        "fct-type": "function",
        "title": "nqueensCGeneric"
      },
      "index": {
        "description": "Interface for directly using the search approach",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensCGeneric",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "CGeneric",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eWord-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCSearch",
      "description": {
        "fct-descr": "\u003cp\u003eCalls C code to perform a brute-force search for the remaining queens.  The\n    types &#945; and &#946; must be   \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e because this function actually optimizes\n    for the case where only counting is being done by providing null values for\n    the function pointer inputs.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Int-\u003e Int-\u003e NQueensSearchState-\u003e m β",
        "fct-type": "function",
        "title": "nqueensCSearch"
      },
      "index": {
        "description": "Calls code to perform brute-force search for the remaining queens The types and must be Typeable because this function actually optimizes for the case where only counting is being done by providing null values for the function pointer inputs",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensCSearch",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eInt-\u003eInt-\u003eNQueensSearchState-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "CSearch",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eInt-\u003eInt-\u003eNQueensSearchState-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m NQueensSolution",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensCSolutions",
        "fct-type": "function",
        "title": "nqueensCSolutions"
      },
      "index": {
        "description": "Generates the solutions to the n-queens problem with the given board size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensCSolutions",
        "normalized": "Word-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "CSolutions",
        "signature": "Word-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to the main algorithm;  note that &#945; and &#946; need to be   \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n    because of an optimization used in the C part of the code. This function\n   takes functions for its first two operators that operate on partial solutions\n   so that the same algorithm can be used both for generating solutions and\n   counting them; the advantage of this approach is that it is much easier to\n   find problems in the generated solution than it is in their count, so we can\n   test it by looking for problems in the generated solutions, and when we are\n   assured that it works we can trust it to obtain the correct counts.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (Word -\u003e NQueensSymmetry -\u003e α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
        "fct-type": "function",
        "title": "nqueensGeneric"
      },
      "index": {
        "description": "Interface to the main algorithm note that and need to be Typeable because of an optimization used in the part of the code This function takes functions for its first two operators that operate on partial solutions so that the same algorithm can be used both for generating solutions and counting them the advantage of this approach is that it is much easier to find problems in the generated solution than it is in their count so we can test it by looking for problems in the generated solutions and when we are assured that it works we can trust it to obtain the correct counts",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensGeneric",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(Word-\u003eNQueensSymmetry-\u003ea-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Generic",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(Word-\u003eNQueensSymmetry-\u003eα-\u003em β)-\u003eα-\u003eWord-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensSearch",
      "description": {
        "fct-descr": "\u003cp\u003eUsing brute-force to find placements for all of the remaining queens. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Int-\u003e NQueensSearchState-\u003e m β",
        "fct-type": "function",
        "title": "nqueensSearch"
      },
      "index": {
        "description": "Using brute-force to find placements for all of the remaining queens",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensSearch",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eInt-\u003eNQueensSearchState-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Search",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eInt-\u003eNQueensSearchState-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensStart",
      "description": {
        "fct-descr": "\u003cp\u003eBreak the reflection symmetry. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e NQueensBreak90State -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
        "fct-type": "function",
        "title": "nqueensStart"
      },
      "index": {
        "description": "Break the reflection symmetry",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "nqueensStart",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Start",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eWord-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:reflectBits",
      "description": {
        "fct-descr": "\u003cp\u003eReflects the bits in a number so that each bit at position i is moved to\n    position -i (i.e., what you get when you take a bit at position 0 and rotate\n    it i positions to the right)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word64 -\u003e Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#reflectBits",
        "fct-type": "function",
        "title": "reflectBits"
      },
      "index": {
        "description": "Reflects the bits in number so that each bit at position is moved to position i.e what you get when you take bit at position and rotate it positions to the right",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "reflectBits",
        "normalized": "Word-\u003eWord",
        "package": "LogicGrowsOnTrees",
        "partial": "Bits",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:reflectSolution",
      "description": {
        "fct-descr": "\u003cp\u003eReflects the columns of a solution \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
        "fct-type": "function",
        "title": "reflectSolution"
      },
      "index": {
        "description": "Reflects the columns of solution",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "reflectSolution",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Solution",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotate180",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a solution left by 180 degrees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
        "fct-type": "function",
        "title": "rotate180"
      },
      "index": {
        "description": "Rotate solution left by degrees",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "rotate180",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotateLeft",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a solution left by 90 degrees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
        "fct-type": "function",
        "title": "rotateLeft"
      },
      "index": {
        "description": "Rotate solution left by degrees",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "rotateLeft",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Left",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotateRight",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a solution right by 90 degrees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
        "fct-type": "function",
        "title": "rotateRight"
      },
      "index": {
        "description": "Rotate solution right by degrees",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "rotateRight",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Right",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_number_of_queens_remaining",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_number_of_queens_remaining"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_number_of_queens_remaining",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_columns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_occupied_columns"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_occupied_columns",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_negative_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_occupied_negative_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_occupied_negative_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_positive_diagonals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_occupied_positive_diagonals"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_occupied_positive_diagonals",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_rows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word64",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_occupied_rows"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_occupied_rows",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_row",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
        "fct-type": "function",
        "title": "s_row"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "s_row",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:symmetryOf",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the symmetry class of the given solution \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e NQueensSolution-\u003e NQueensSymmetry",
        "fct-type": "function",
        "title": "symmetryOf"
      },
      "index": {
        "description": "Computes the symmetry class of the given solution",
        "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
        "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
        "name": "symmetryOf",
        "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSymmetry",
        "package": "LogicGrowsOnTrees",
        "partial": "Of",
        "signature": "Word-\u003eNQueensSolution-\u003eNQueensSymmetry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains examples of logic programs that generate solutions to the\n    n-queens problem, which is the problem of finding ways to put n queens on an\n    n x n chessboard in such a way that they do not conflict. Solutions of the\n    n-queens problem take the form of a list of n coordinates such that no\n    coordinates have overlapping rows, columns, or diagonals (as these are the\n    directions in which a queen can attack).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html",
        "fct-type": "module",
        "title": "Queens"
      },
      "index": {
        "description": "This module contains examples of logic programs that generate solutions to the n-queens problem which is the problem of finding ways to put queens on an chessboard in such way that they do not conflict Solutions of the n-queens problem take the form of list of coordinates such that no coordinates have overlapping rows columns or diagonals as these are the directions in which queen can attack",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "Queens",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Queens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#t:BoardSize",
      "description": {
        "fct-descr": "\u003cp\u003eThis newtype wrapper is used to provide an ArgVal instance that ensure that\n    an input board size is between 1 and \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.  In general you\n    do not need to use this type directly but instead can use the function\n    \u003ccode\u003e\u003ca\u003emakeBoardSizeTermAtPosition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
        "fct-type": "newtype",
        "title": "BoardSize"
      },
      "index": {
        "description": "This newtype wrapper is used to provide an ArgVal instance that ensure that an input board size is between and nqueens maximum size In general you do not need to use this type directly but instead can use the function makeBoardSizeTermAtPosition",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "BoardSize",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Board Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:BoardSize",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "BoardSize",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
        "fct-type": "function",
        "title": "BoardSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "BoardSize",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Board Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:getBoardSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
        "fct-type": "function",
        "title": "getBoardSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "getBoardSize",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Board Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:makeBoardSizeTermAtPosition",
      "description": {
        "fct-descr": "\u003cp\u003eThis constructs a term for the \u003ccode\u003ecmdtheline\u003c/code\u003e command line parser that expects\n    a valid board size (i.e., a number between 1 and \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e) at\n    the given positional argument.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int-\u003e Term Word",
        "fct-type": "function",
        "title": "makeBoardSizeTermAtPosition"
      },
      "index": {
        "description": "This constructs term for the cmdtheline command line parser that expects valid board size i.e number between and nqueens maximum size at the given positional argument",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "makeBoardSizeTermAtPosition",
        "normalized": "Int-\u003eTerm Word",
        "package": "LogicGrowsOnTrees",
        "partial": "Board Size Term At Position",
        "signature": "Int-\u003eTerm Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensCorrectCount",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003epartial function\u003c/em\u003e that returns the number of solutions for the given\n    input board size;  this should only be used when you are sure that the input\n    is not greater than \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensCorrectCount",
        "fct-type": "function",
        "title": "nqueensCorrectCount"
      },
      "index": {
        "description": "partial function that returns the number of solutions for the given input board size this should only be used when you are sure that the input is not greater than nqueens maximum size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensCorrectCount",
        "normalized": "Word-\u003eWord",
        "package": "LogicGrowsOnTrees",
        "partial": "Correct Count",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensCount",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensCount",
        "fct-type": "function",
        "title": "nqueensCount"
      },
      "index": {
        "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensCount",
        "normalized": "Word-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "Count",
        "signature": "Word-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to the main algorithm;  note that &#945; and &#946; need to be   \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n    because of an optimization used in the C part of the code. This function\n   takes functions for its first two operators that operate on partial solutions\n   so that the same algorithm can be used both for generating solutions and\n   counting them; the advantage of this approach is that it is much easier to\n   find problems in the generated solution than it is in their count, so we can\n   test it by looking for problems in the generated solutions, and when we are\n   assured that it works we can trust it to obtain the correct counts.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (Word -\u003e NQueensSymmetry -\u003e α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
        "fct-type": "function",
        "title": "nqueensGeneric"
      },
      "index": {
        "description": "Interface to the main algorithm note that and need to be Typeable because of an optimization used in the part of the code This function takes functions for its first two operators that operate on partial solutions so that the same algorithm can be used both for generating solutions and counting them the advantage of this approach is that it is much easier to find problems in the generated solution than it is in their count so we can test it by looking for problems in the generated solutions and when we are assured that it works we can trust it to obtain the correct counts",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensGeneric",
        "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(Word-\u003eNQueensSymmetry-\u003ea-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
        "package": "LogicGrowsOnTrees",
        "partial": "Generic",
        "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(Word-\u003eNQueensSymmetry-\u003eα-\u003em β)-\u003eα-\u003eWord-\u003em β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m NQueensSolution",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensSolutions",
        "fct-type": "function",
        "title": "nqueensSolutions"
      },
      "index": {
        "description": "Generates the solutions to the n-queens problem with the given board size",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensSolutions",
        "normalized": "Word-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Solutions",
        "signature": "Word-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingBitsCount",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingBitsCount",
        "fct-type": "function",
        "title": "nqueensUsingBitsCount"
      },
      "index": {
        "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensUsingBitsCount",
        "normalized": "Word-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "Using Bits Count",
        "signature": "Word-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingBitsSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate solutions to the n-queens problem using bitwise-operations. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m NQueensSolution",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingBitsSolutions",
        "fct-type": "function",
        "title": "nqueensUsingBitsSolutions"
      },
      "index": {
        "description": "Generate solutions to the n-queens problem using bitwise-operations",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensUsingBitsSolutions",
        "normalized": "Word-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Using Bits Solutions",
        "signature": "Word-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingSetsCount",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingSetsCount",
        "fct-type": "function",
        "title": "nqueensUsingSetsCount"
      },
      "index": {
        "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensUsingSetsCount",
        "normalized": "Word-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "Using Sets Count",
        "signature": "Word-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingSetsSolutions",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate solutions to the n-queens problem using \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m NQueensSolution",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingSetsSolutions",
        "fct-type": "function",
        "title": "nqueensUsingSetsSolutions"
      },
      "index": {
        "description": "Generate solutions to the n-queens problem using IntSet",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueensUsingSetsSolutions",
        "normalized": "Word-\u003ea NQueensSolution",
        "package": "LogicGrowsOnTrees",
        "partial": "Using Sets Solutions",
        "signature": "Word-\u003em NQueensSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueens_correct_counts",
      "description": {
        "fct-descr": "\u003cp\u003eA table with the correct number of solutions for board sizes ranging from 1\n    to \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis data was pulled from \u003ca\u003ehttp://queens.inf.tu-dresden.de/?n=f&l=en\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IntMap Word",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueens_correct_counts",
        "fct-type": "function",
        "title": "nqueens_correct_counts"
      },
      "index": {
        "description": "table with the correct number of solutions for board sizes ranging from to nqueens maximum size This data was pulled from http queens.inf.tu-dresden.de en",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueens_correct_counts",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueens_maximum_size",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum board size in \u003ccode\u003e\u003ca\u003enqueens_correct_counts\u003c/a\u003e\u003c/code\u003e.  In a 64-bit environment\n    this value is equal to the largest board size for which we know the number\n    of solutions, which is 26.  In a 32-bit environment this value is equal to\n    the largest board size such that the number of solutions fits within a\n    32-bit (unsigned) integer (i.e., the range of \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e), which is 18.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Examples.Queens",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int",
        "fct-source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueens_maximum_size",
        "fct-type": "function",
        "title": "nqueens_maximum_size"
      },
      "index": {
        "description": "The maximum board size in nqueens correct counts In bit environment this value is equal to the largest board size for which we know the number of solutions which is In bit environment this value is equal to the largest board size such that the number of solutions fits within bit unsigned integer i.e the range of Word which is",
        "hierarchy": "LogicGrowsOnTrees Examples Queens",
        "module": "LogicGrowsOnTrees.Examples.Queens",
        "name": "nqueens_maximum_size",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for working with \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003es, which\n    indicate a location within a tree but, unlike \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e, without the cached\n    values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Location.html",
        "fct-type": "module",
        "title": "Location"
      },
      "index": {
        "description": "This module contains infrastructure for working with Location which indicate location within tree but unlike Path without the cached values",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "Location",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLocatableT\u003c/a\u003e\u003c/code\u003e is a monad transformer that allows you to take any MonadPlus\n    and add to it the ability to tell where you are in the tree created by the\n    \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
        "fct-type": "newtype",
        "title": "LocatableT"
      },
      "index": {
        "description": "LocatableT is monad transformer that allows you to take any MonadPlus and add to it the ability to tell where you are in the tree created by the mplus",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTree",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e augmented with the ability to get the current location \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableTree",
        "fct-type": "type",
        "title": "LocatableTree"
      },
      "index": {
        "description": "Tree augmented with the ability to get the current location",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableTree",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTreeIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e, but running in the IO monad. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeIO",
        "fct-type": "type",
        "title": "LocatableTreeIO"
      },
      "index": {
        "description": "Like LocatableTree but running in the IO monad",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableTreeIO",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTreeT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e, but running in an arbitrary monad. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
        "fct-type": "newtype",
        "title": "LocatableTreeT"
      },
      "index": {
        "description": "Like LocatableTree but running in an arbitrary monad",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableTreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:Location",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e identifies a location in a tree;  unlike \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e it only\n    contains information about the list of branches that have been taken, and\n    not information about the cached values encounted along the way.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#Location",
        "fct-type": "data",
        "title": "Location"
      },
      "index": {
        "description": "Location identifies location in tree unlike Path it only contains information about the list of branches that have been taken and not information about the cached values encounted along the way",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "Location",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:MonadLocatable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eMonadLocatable\u003c/a\u003e\u003c/code\u003e allows you to get your current location within a tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#MonadLocatable",
        "fct-type": "class",
        "title": "MonadLocatable"
      },
      "index": {
        "description": "The class MonadLocatable allows you to get your current location within tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "MonadLocatable",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Monad Locatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:Solution",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSolution\u003c/a\u003e\u003c/code\u003e is a result tagged with the location of the leaf at which it\n    was found.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#Solution",
        "fct-type": "data",
        "title": "Solution"
      },
      "index": {
        "description": "Solution is result tagged with the location of the leaf at which it was found",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "Solution",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Solution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:LocatableT",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableT",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
        "fct-type": "function",
        "title": "LocatableT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:LocatableTreeT",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTreeT",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
        "fct-type": "function",
        "title": "LocatableTreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "LocatableTreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:Solution",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Solution",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#Solution",
        "fct-type": "function",
        "title": "Solution"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "Solution",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Solution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyCheckpointCursorToLocation",
      "description": {
        "fct-descr": "\u003cp\u003eAppend the path indicated by a checkpoint cursor to the given location's path. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CheckpointCursor-\u003e Location-\u003e Location",
        "fct-type": "function",
        "title": "applyCheckpointCursorToLocation"
      },
      "index": {
        "description": "Append the path indicated by checkpoint cursor to the given location path",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "applyCheckpointCursorToLocation",
        "normalized": "CheckpointCursor-\u003eLocation-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint Cursor To Location",
        "signature": "CheckpointCursor-\u003eLocation-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyContextToLocation",
      "description": {
        "fct-descr": "\u003cp\u003eAppend the path indicated by a context to the given location's path. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Context m α-\u003e Location-\u003e Location",
        "fct-type": "function",
        "title": "applyContextToLocation"
      },
      "index": {
        "description": "Append the path indicated by context to the given location path",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "applyContextToLocation",
        "normalized": "Context a b-\u003eLocation-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Context To Location",
        "signature": "Context m α-\u003eLocation-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyPathToLocation",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a path to a location's path. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path-\u003e Location-\u003e Location",
        "fct-type": "function",
        "title": "applyPathToLocation"
      },
      "index": {
        "description": "Append path to location path",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "applyPathToLocation",
        "normalized": "Path-\u003eLocation-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Path To Location",
        "signature": "Path-\u003eLocation-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:branchingFromLocation",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a location to a list of branch choices. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e [BranchChoice]",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#branchingFromLocation",
        "fct-type": "function",
        "title": "branchingFromLocation"
      },
      "index": {
        "description": "Converts location to list of branch choices",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "branchingFromLocation",
        "normalized": "Location-\u003e[BranchChoice]",
        "package": "LogicGrowsOnTrees",
        "partial": "From Location",
        "signature": "Location-\u003e[BranchChoice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTree",
      "description": {
        "fct-descr": "\u003cp\u003eExplore all the nodes in a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e and sum over all the results in the\n    leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTree α -\u003e α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTree",
        "fct-type": "function",
        "title": "exploreLocatableTree"
      },
      "index": {
        "description": "Explore all the nodes in LocatableTree and sum over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreLocatableTree",
        "normalized": "LocatableTree a-\u003ea",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": "LocatableTree α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeT",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreLocatableTree\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTreeT m α -\u003e m α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeT",
        "fct-type": "function",
        "title": "exploreLocatableTreeT"
      },
      "index": {
        "description": "Same as exploreLocatableTree but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreLocatableTreeT",
        "normalized": "LocatableTreeT a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": "LocatableTreeT m α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeTAndIgnoreResults",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreLocatableTree\u003c/a\u003e\u003c/code\u003e, but the results are discarded so the tree is\n    only explored for its side-effects.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTreeT m α -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeTAndIgnoreResults",
        "fct-type": "function",
        "title": "exploreLocatableTreeTAndIgnoreResults"
      },
      "index": {
        "description": "Same as exploreLocatableTree but the results are discarded so the tree is only explored for its side-effects",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreLocatableTreeTAndIgnoreResults",
        "normalized": "LocatableTreeT a b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree TAnd Ignore Results",
        "signature": "LocatableTreeT m α-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e until a result (i.e., a leaf) has\n    been found; if a result has been found then it is returned wrapped in\n    \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTree α -\u003e Maybe α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeUntilFirst",
        "fct-type": "function",
        "title": "exploreLocatableTreeUntilFirst"
      },
      "index": {
        "description": "Explores all the nodes in LocatableTree until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreLocatableTreeUntilFirst",
        "normalized": "LocatableTree a-\u003eMaybe a",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree Until First",
        "signature": "LocatableTree α-\u003eMaybe α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeUntilFirstT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreLocatableTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTreeT m α -\u003e m (Maybe α)",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeUntilFirstT",
        "fct-type": "function",
        "title": "exploreLocatableTreeUntilFirstT"
      },
      "index": {
        "description": "Like exploreLocatableTreeUntilFirst but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreLocatableTreeUntilFirstT",
        "normalized": "LocatableTreeT a b-\u003ea(Maybe b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree Until First",
        "signature": "LocatableTreeT m α-\u003em(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTUntilFirstWithLocation",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocation\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α -\u003e m (Maybe (Solution α))",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTUntilFirstWithLocation",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirstWithLocation"
      },
      "index": {
        "description": "Like exploreTreeUntilFirstWithLocation but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeTUntilFirstWithLocation",
        "normalized": "TreeT a b-\u003ea(Maybe(Solution b))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First With Location",
        "signature": "TreeT m α-\u003em(Maybe(Solution α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTUntilFirstWithLocationStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocationStartingAt\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e TreeT m α -\u003e m (Maybe (Solution α))",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTUntilFirstWithLocationStartingAt",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirstWithLocationStartingAt"
      },
      "index": {
        "description": "Like exploreTreeUntilFirstWithLocationStartingAt but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeTUntilFirstWithLocationStartingAt",
        "normalized": "Location-\u003eTreeT a b-\u003ea(Maybe(Solution b))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First With Location Starting At",
        "signature": "Location-\u003eTreeT m α-\u003em(Maybe(Solution α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTWithLocations",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocations\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α -\u003e m [Solution α]",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTWithLocations",
        "fct-type": "function",
        "title": "exploreTreeTWithLocations"
      },
      "index": {
        "description": "Like exploreTreeWithLocations but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeTWithLocations",
        "normalized": "TreeT a b-\u003ea[Solution b]",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TWith Locations",
        "signature": "TreeT m α-\u003em[Solution α]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTWithLocationsStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocationsStartingAt\u003c/a\u003e\u003c/code\u003e but for an impure trees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e TreeT m α -\u003e m [Solution α]",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTWithLocationsStartingAt",
        "fct-type": "function",
        "title": "exploreTreeTWithLocationsStartingAt"
      },
      "index": {
        "description": "Like exploreTreeWithLocationsStartingAt but for an impure trees",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeTWithLocationsStartingAt",
        "normalized": "Location-\u003eTreeT a b-\u003ea[Solution b]",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TWith Locations Starting At",
        "signature": "Location-\u003eTreeT m α-\u003em[Solution α]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeUntilFirstWithLocation",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in a tree until a result (i.e., a leaf) has been found;\n    if a result has been found then it is returned tagged with the location at\n    which it was found and wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Tree α -\u003e Maybe (Solution α)",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeUntilFirstWithLocation",
        "fct-type": "function",
        "title": "exploreTreeUntilFirstWithLocation"
      },
      "index": {
        "description": "Explores all the nodes in tree until result i.e leaf has been found if result has been found then it is returned tagged with the location at which it was found and wrapped in Just otherwise Nothing is returned",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeUntilFirstWithLocation",
        "normalized": "Tree a-\u003eMaybe(Solution a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First With Location",
        "signature": "Tree α-\u003eMaybe(Solution α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeUntilFirstWithLocationStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocation\u003c/a\u003e\u003c/code\u003e, but for a subtree whose location is\n    given by the first argument; the solution (if present) is labeled by the\n    \u003cem\u003eabsolute\u003c/em\u003e location within the full tree (as opposed to its relative\n    location within the subtree).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e Tree α -\u003e Maybe (Solution α)",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeUntilFirstWithLocationStartingAt",
        "fct-type": "function",
        "title": "exploreTreeUntilFirstWithLocationStartingAt"
      },
      "index": {
        "description": "Like exploreTreeUntilFirstWithLocation but for subtree whose location is given by the first argument the solution if present is labeled by the absolute location within the full tree as opposed to its relative location within the subtree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeUntilFirstWithLocationStartingAt",
        "normalized": "Location-\u003eTree a-\u003eMaybe(Solution a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First With Location Starting At",
        "signature": "Location-\u003eTree α-\u003eMaybe(Solution α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeWithLocations",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all of the nodes of a tree, returning a list of solutions each\n    tagged with the location at which it was found.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Tree α -\u003e [Solution α]",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeWithLocations",
        "fct-type": "function",
        "title": "exploreTreeWithLocations"
      },
      "index": {
        "description": "Explores all of the nodes of tree returning list of solutions each tagged with the location at which it was found",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeWithLocations",
        "normalized": "Tree a-\u003e[Solution a]",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree With Locations",
        "signature": "Tree α-\u003e[Solution α]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeWithLocationsStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocations\u003c/a\u003e\u003c/code\u003e, but for a subtree whose location is given by\n    the first argument;  the solutions are labeled by the \u003cem\u003eabsolute\u003c/em\u003e location\n    within the full tree (as opposed to their relative location within the\n    subtree).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e Tree α -\u003e [Solution α]",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#exploreTreeWithLocationsStartingAt",
        "fct-type": "function",
        "title": "exploreTreeWithLocationsStartingAt"
      },
      "index": {
        "description": "Like exploreTreeWithLocations but for subtree whose location is given by the first argument the solutions are labeled by the absolute location within the full tree as opposed to their relative location within the subtree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "exploreTreeWithLocationsStartingAt",
        "normalized": "Location-\u003eTree a-\u003e[Solution a]",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree With Locations Starting At",
        "signature": "Location-\u003eTree α-\u003e[Solution α]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:getLocation",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#getLocation",
        "fct-type": "method",
        "title": "getLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "getLocation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromBranching",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list (or other \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e) of branch choices to a location. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "t BranchChoice -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#labelFromBranching",
        "fct-type": "function",
        "title": "labelFromBranching"
      },
      "index": {
        "description": "Converts list or other Foldable of branch choices to location",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "labelFromBranching",
        "normalized": "a BranchChoice-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "From Branching",
        "signature": "t BranchChoice-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromContext",
      "description": {
        "fct-descr": "\u003cp\u003eContructs a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e representing the location within the tree indicated by the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Context m α -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#labelFromContext",
        "fct-type": "function",
        "title": "labelFromContext"
      },
      "index": {
        "description": "Contructs Location representing the location within the tree indicated by the Context",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "labelFromContext",
        "normalized": "Context a b-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "From Context",
        "signature": "Context m α-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromPath",
      "description": {
        "fct-descr": "\u003cp\u003eContructs a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e representing the location within the tree indicated by the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#labelFromPath",
        "fct-type": "function",
        "title": "labelFromPath"
      },
      "index": {
        "description": "Contructs Location representing the location within the tree indicated by the Path",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "labelFromPath",
        "normalized": "Path-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "From Path",
        "signature": "Path-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:leftBranchOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e at the left branch of the given location. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#leftBranchOf",
        "fct-type": "function",
        "title": "leftBranchOf"
      },
      "index": {
        "description": "Returns the Location at the left branch of the given location",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "leftBranchOf",
        "normalized": "Location-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Branch Of",
        "signature": "Location-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:locationTransformerForBranchChoice",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function takes a branch choice and returns a location\n    transformer that appends the branch choice to the given location.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "BranchChoice -\u003e Location -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#locationTransformerForBranchChoice",
        "fct-type": "function",
        "title": "locationTransformerForBranchChoice"
      },
      "index": {
        "description": "Convenience function takes branch choice and returns location transformer that appends the branch choice to the given location",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "locationTransformerForBranchChoice",
        "normalized": "BranchChoice-\u003eLocation-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Transformer For Branch Choice",
        "signature": "BranchChoice-\u003eLocation-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:normalizeLocatableTree",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTree α -\u003e Tree α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#normalizeLocatableTree",
        "fct-type": "function",
        "title": "normalizeLocatableTree"
      },
      "index": {
        "description": "Converts LocatableTree to Tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "normalizeLocatableTree",
        "normalized": "LocatableTree a-\u003eTree a",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": "LocatableTree α-\u003eTree α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:normalizeLocatableTreeT",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eLocatableTreeT\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTreeT\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableTreeT m α -\u003e TreeT m α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#normalizeLocatableTreeT",
        "fct-type": "function",
        "title": "normalizeLocatableTreeT"
      },
      "index": {
        "description": "Converts LocatableTreeT to TreeT",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "normalizeLocatableTreeT",
        "normalized": "LocatableTreeT a b-\u003eTreeT a b",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": "LocatableTreeT m α-\u003eTreeT m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:rightBranchOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e at the right branch of the given location. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#rightBranchOf",
        "fct-type": "function",
        "title": "rightBranchOf"
      },
      "index": {
        "description": "Returns the Location at the right branch of the given location",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "rightBranchOf",
        "normalized": "Location-\u003eLocation",
        "package": "LogicGrowsOnTrees",
        "partial": "Branch Of",
        "signature": "Location-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:rootLocation",
      "description": {
        "fct-descr": "\u003cp\u003eThe location at the root of the tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#rootLocation",
        "fct-type": "function",
        "title": "rootLocation"
      },
      "index": {
        "description": "The location at the root of the tree",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "rootLocation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:runLocatableT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eLocatableT\u003c/a\u003e\u003c/code\u003e to obtain the nested monad. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableT m α -\u003e m α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#runLocatableT",
        "fct-type": "function",
        "title": "runLocatableT"
      },
      "index": {
        "description": "Runs LocatableT to obtain the nested monad",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "runLocatableT",
        "normalized": "LocatableT a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable",
        "signature": "LocatableT m α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:sendTreeDownLocation",
      "description": {
        "fct-descr": "\u003cp\u003eWalks down a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to the subtree at the given \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e. This function is\n    analogous to \u003ccode\u003e\u003ca\u003esendTreeDownPath\u003c/a\u003e\u003c/code\u003e, and shares the\n    same caveats.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e Tree α -\u003e Tree α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#sendTreeDownLocation",
        "fct-type": "function",
        "title": "sendTreeDownLocation"
      },
      "index": {
        "description": "Walks down Tree to the subtree at the given Location This function is analogous to sendTreeDownPath and shares the same caveats",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "sendTreeDownLocation",
        "normalized": "Location-\u003eTree a-\u003eTree a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Down Location",
        "signature": "Location-\u003eTree α-\u003eTree α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:sendTreeTDownLocation",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esendTreeDownLocation\u003c/a\u003e\u003c/code\u003e, but for impure trees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location -\u003e TreeT m α -\u003e m (TreeT m α)",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#sendTreeTDownLocation",
        "fct-type": "function",
        "title": "sendTreeTDownLocation"
      },
      "index": {
        "description": "Like sendTreeDownLocation but for impure trees",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "sendTreeTDownLocation",
        "normalized": "Location-\u003eTreeT a b-\u003ea(TreeT a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TDown Location",
        "signature": "Location-\u003eTreeT m α-\u003em(TreeT m α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Location",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#Solution",
        "fct-type": "function",
        "title": "solutionLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "solutionLocation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionResult",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#Solution",
        "fct-type": "function",
        "title": "solutionResult"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "solutionResult",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionsToMap",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list (or other \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e) of solutions to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from\n    \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003es to results.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "t (Solution α) -\u003e Map Location α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#solutionsToMap",
        "fct-type": "function",
        "title": "solutionsToMap"
      },
      "index": {
        "description": "Converts list or other Foldable of solutions to Map from Location to results",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "solutionsToMap",
        "normalized": "a(Solution b)-\u003eMap Location b",
        "package": "LogicGrowsOnTrees",
        "partial": "To Map",
        "signature": "t(Solution α)-\u003eMap Location α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:unwrapLocatableT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ReaderT Location m α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
        "fct-type": "function",
        "title": "unwrapLocatableT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "unwrapLocatableT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:unwrapLocatableTreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Location",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LocatableT (TreeT m) α",
        "fct-source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
        "fct-type": "function",
        "title": "unwrapLocatableTreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Location",
        "module": "LogicGrowsOnTrees.Location",
        "name": "unwrapLocatableTreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Locatable Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adapter implements parallelism by spawning multiple worker threads, the\n    number of which can be changed arbitrarily during the run.\n\u003c/p\u003e\u003cp\u003eNOTE: For the use of threads to results in parallelization, you need to make\n    sure that the number of capabilities is at least as large as the largest\n    number of worker threads you will be spawning. If you are using the\n    \u003ccode\u003e\u003ca\u003edriver\u003c/a\u003e\u003c/code\u003e, then this will be taken care of for you. If not, then you will\n    need to either call \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e (but only to increase the\n    number of threads in GHC 7.4, and not too often as it may crash) or use the\n    command-line argument \u003ccode\u003e+RTS -N#\u003c/code\u003e, where \u003ccode\u003e#\u003c/code\u003e is the number of threads you\n    want to run in parallel. The \u003ccode\u003e\u003ca\u003edriver\u003c/a\u003e\u003c/code\u003e takes care of this automatically by\n    calling \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e a single time to set the number of capabilities\n    equal to the number of request threads (provided via. a command-line\n    argument).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html",
        "fct-type": "module",
        "title": "Threads"
      },
      "index": {
        "description": "This adapter implements parallelism by spawning multiple worker threads the number of which can be changed arbitrarily during the run NOTE For the use of threads to results in parallelization you need to make sure that the number of capabilities is at least as large as the largest number of worker threads you will be spawning If you are using the driver then this will be taken care of for you If not then you will need to either call setNumCapabilities but only to increase the number of threads in GHC and not too often as it may crash or use the command-line argument RTS where is the number of threads you want to run in parallel The driver takes care of this automatically by calling setNumCapabilities single time to set the number of capabilities equal to the number of request threads provided via command-line argument",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "Threads",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:RunOutcome",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "data",
        "title": "RunOutcome"
      },
      "index": {
        "description": "type that represents the outcome of run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:RunStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "data",
        "title": "RunStatistics"
      },
      "index": {
        "description": "Statistics gathered about the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:TerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "data",
        "title": "TerminationReason"
      },
      "index": {
        "description": "type that represents the reason why run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "TerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:ThreadsControllerMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the monad in which the thread controller will run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#ThreadsControllerMonad",
        "fct-type": "data",
        "title": "ThreadsControllerMonad"
      },
      "index": {
        "description": "This is the monad in which the thread controller will run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "ThreadsControllerMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Threads Controller Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Aborted",
      "description": {
        "fct-descr": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Aborted progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Aborted"
      },
      "index": {
        "description": "the run was aborted with the given progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "Aborted",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Completed",
      "description": {
        "fct-descr": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Completed final_result",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Completed"
      },
      "index": {
        "description": "the run completed with the given final result",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "Completed",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Completed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Failure",
      "description": {
        "fct-descr": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Failure progress String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "the run failed with the given progress for the given reason",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "Failure",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunOutcome",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunOutcome",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "RunOutcome"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "RunStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "Abort the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "abort",
        "normalized": "a()",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but it blocks until the number of workers\n    has been changed and returns the new number of workers.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Word -\u003e Word) -\u003e m Word",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkers",
        "fct-type": "function",
        "title": "changeNumberOfWorkers"
      },
      "index": {
        "description": "Like changeNumberOfWorkersAsync but it blocks until the number of workers has been changed and returns the new number of workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "changeNumberOfWorkers",
        "normalized": "(Word-\u003eWord)-\u003ea Word",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": "(Word-\u003eWord)-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eChange the number of workers;  the first argument is a map that computes\n        the new number of workers given the old number of workers, and the\n        second argument is a callback that will be invoked with the new number\n        of workers.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echangeNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version of this request.\n\u003c/p\u003e\u003cp\u003eIf you just want to set the number of workers to some fixed value, then\n        see \u003ccode\u003e\u003ca\u003esetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Word -\u003e Word) -\u003e (Word -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkersAsync",
        "fct-type": "function",
        "title": "changeNumberOfWorkersAsync"
      },
      "index": {
        "description": "Change the number of workers the first argument is map that computes the new number of workers given the old number of workers and the second argument is callback that will be invoked with the new number of workers See changeNumberOfWorkers for the synchronous version of this request If you just want to set the number of workers to some fixed value then see setNumberOfWorkers setNumberOfWorkersAsync",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "changeNumberOfWorkersAsync",
        "normalized": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkersToMatchCapabilities",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the number of a parallel workers to equal the number of capabilities\n    as reported by \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadsControllerMonad exploration_mode ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#changeNumberOfWorkersToMatchCapabilities",
        "fct-type": "function",
        "title": "changeNumberOfWorkersToMatchCapabilities"
      },
      "index": {
        "description": "Changes the number of parallel workers to equal the number of capabilities as reported by getNumCapabilities",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "changeNumberOfWorkersToMatchCapabilities",
        "normalized": "ThreadsControllerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers To Match Capabilities",
        "signature": "ThreadsControllerMonad exploration_mode()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:driver",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the driver for the threads adapter.  The number of workers is\n    specified via. the (required) command-line option \u003ca\u003e-n\u003c/a\u003e; \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e\n    is called exactly once to make sure that there is an equal number of\n    capabilities.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver IO shared_configuration supervisor_configuration m n exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#driver",
        "fct-type": "function",
        "title": "driver"
      },
      "index": {
        "description": "This is the driver for the threads adapter The number of workers is specified via the required command-line option setNumCapabilities is called exactly once to make sure that there is an equal number of capabilities",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "driver",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTree",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the pure tree and sum over all results. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadsControllerMonad (AllMode result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTree"
      },
      "index": {
        "description": "Explore the pure tree and sum over all results",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTree",
        "normalized": "ThreadsControllerMonad(AllMode a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "ThreadsControllerMonad(AllMode result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadsControllerMonad (AllMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTreeIO"
      },
      "index": {
        "description": "Like exploreTree but with the tree running in IO",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIO",
        "normalized": "ThreadsControllerMonad(AllMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IO",
        "signature": "ThreadsControllerMonad(AllMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIO\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTreeIOStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeIO but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOStartingFrom",
        "normalized": "Progress a-\u003eThreadsControllerMonad(AllMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOStarting From",
        "signature": "Progress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadsControllerMonad (FirstMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFirst"
      },
      "index": {
        "description": "Like exploreTreeUntilFirst but with the tree running in IO",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFirst",
        "normalized": "ThreadsControllerMonad(FirstMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil First",
        "signature": "ThreadsControllerMonad(FirstMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFirstStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFirst\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFirstStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeIOUntilFirst but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFirstStartingFrom",
        "normalized": "Checkpoint-\u003eThreadsControllerMonad(FirstMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil First Starting From",
        "signature": "Checkpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFoundUsingPull"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPull but with the tree running in IO",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil Found Using Pull",
        "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPullStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFoundUsingPullStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeIOUntilFoundUsingPull but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFoundUsingPullStartingFrom",
        "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil Found Using Pull Starting From",
        "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFoundUsingPush"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPush but with the tree running in IO",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil Found Using Push",
        "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPushStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting result. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeIOUntilFoundUsingPushStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeIOUntilFoundUsingPush but with starting result",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeIOUntilFoundUsingPushStartingFrom",
        "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IOUntil Found Using Push Starting From",
        "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTreeStartingFrom"
      },
      "index": {
        "description": "Like exploreTree but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeStartingFrom",
        "normalized": "Progress a-\u003eThreadsControllerMonad(AllMode a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Starting From",
        "signature": "Progress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTreeT"
      },
      "index": {
        "description": "Like exploreTree but with generic impure tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeT",
        "normalized": "(a b c d-\u003eIO d)-\u003eThreadsControllerMonad(AllMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome(Progress e)e)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeT\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) result)",
        "fct-type": "function",
        "title": "exploreTreeTStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeT but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTStartingFrom",
        "normalized": "(a b c d-\u003eIO d)-\u003eProgress e-\u003eThreadsControllerMonad(AllMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome(Progress e)e)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TStarting From",
        "signature": "(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirst"
      },
      "index": {
        "description": "Like exploreTreeUntilFirst but with generic impure tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFirst",
        "normalized": "(a b c d-\u003eIO d)-\u003eThreadsControllerMonad(FirstMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome Checkpoint(Maybe(Progress e)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First",
        "signature": "(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFirstStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFirst\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall α.  m α -\u003e IO α)-\u003e Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirstStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeTUntilFirst but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFirstStartingFrom",
        "normalized": "(a b c d-\u003eIO d)-\u003eCheckpoint-\u003eThreadsControllerMonad(FirstMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome Checkpoint(Maybe(Progress e)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First Starting From",
        "signature": "(forall α. m α-\u003eIO α)-\u003eCheckpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundUsingPull"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPull but with generic impure tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Using Pull",
        "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPullStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundUsingPullStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeTUntilFoundUsingPull but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFoundUsingPullStartingFrom",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Using Pull Starting From",
        "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundUsingPush"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPush but with generic impure tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Using Push",
        "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPushStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundUsingPushStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeTUntilFoundUsingPush but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeTUntilFoundUsingPushStartingFrom",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Using Push Starting From",
        "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the pure tree until a result has been found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadsControllerMonad (FirstMode result) ()-\u003e Tree result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFirst"
      },
      "index": {
        "description": "Explore the pure tree until result has been found",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFirst",
        "normalized": "ThreadsControllerMonad(FirstMode a)()-\u003eTree a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First",
        "signature": "ThreadsControllerMonad(FirstMode result)()-\u003eTree result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFirstStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e Tree result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFirstStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeUntilFirst but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFirstStartingFrom",
        "normalized": "Checkpoint-\u003eThreadsControllerMonad(FirstMode a)()-\u003eTree a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First Starting From",
        "signature": "Checkpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTree result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the pure tree until the sum of resuts meets a condition. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the pure tree until the sum of resuts meets condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Using Pull",
        "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPullStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundUsingPullStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPull but with starting progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFoundUsingPullStartingFrom",
        "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Using Pull Starting From",
        "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the pure tree until the sum of resuts meets a condition. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the pure tree until the sum of resuts meets condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Using Push",
        "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPushStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting result. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundUsingPushStartingFrom"
      },
      "index": {
        "description": "Like exploreTreeUntilFoundUsingPush but with starting result",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "exploreTreeUntilFoundUsingPushStartingFrom",
        "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Using Push Starting From",
        "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentProgress",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgress",
        "fct-type": "function",
        "title": "getCurrentProgress"
      },
      "index": {
        "description": "Like getCurrentProgressAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "getCurrentProgress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentProgressAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgressAsync",
        "fct-type": "function",
        "title": "getCurrentProgressAsync"
      },
      "index": {
        "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "getCurrentProgressAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkers",
        "fct-type": "function",
        "title": "getNumberOfWorkers"
      },
      "index": {
        "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "getNumberOfWorkers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Int -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkersAsync",
        "fct-type": "function",
        "title": "getNumberOfWorkersAsync"
      },
      "index": {
        "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "getNumberOfWorkersAsync",
        "normalized": "(Int-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "(Int-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:requestProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdate",
        "fct-type": "function",
        "title": "requestProgressUpdate"
      },
      "index": {
        "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "requestProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:requestProgressUpdateAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdateAsync",
        "fct-type": "function",
        "title": "requestProgressUpdateAsync"
      },
      "index": {
        "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "requestProgressUpdateAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAvailableWorkloadStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAvailableWorkloadStatistics"
      },
      "index": {
        "description": "statistics for the number of available workloads waiting for worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runAvailableWorkloadStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Available Workload Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAverageTimePerCall",
      "description": {
        "fct-descr": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAverageTimePerCall"
      },
      "index": {
        "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runAverageTimePerCall",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Average Time Per Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runEndTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runEndTime"
      },
      "index": {
        "description": "the end time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runEndTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "End Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runExplorer",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the given tree using multiple threads to achieve parallelism.\n\u003c/p\u003e\u003cp\u003eThis function grants access to all of the functionality of this adapter,\n    but because its generality complicates its use (primarily the fact that the\n    types are dependent on the first parameter) you may find it easier to use\n    one of the specialized functions in the preceding section.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e ProgressFor exploration_mode-\u003e ThreadsControllerMonad exploration_mode ()-\u003e TreeT m (ResultFor exploration_mode)-\u003e IO (RunOutcomeFor exploration_mode)",
        "fct-type": "function",
        "title": "runExplorer"
      },
      "index": {
        "description": "Explores the given tree using multiple threads to achieve parallelism This function grants access to all of the functionality of this adapter but because its generality complicates its use primarily the fact that the types are dependent on the first parameter you may find it easier to use one of the specialized functions in the preceding section",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runExplorer",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003eProgressFor a-\u003eThreadsControllerMonad a()-\u003eTreeT b(ResultFor a)-\u003eIO(RunOutcomeFor a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Explorer",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eProgressFor exploration_mode-\u003eThreadsControllerMonad exploration_mode()-\u003eTreeT m(ResultFor exploration_mode)-\u003eIO(RunOutcomeFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadRequestRateStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadRequestRateStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runInstantaneousWorkloadRequestRateStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Request Rate Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadStealTimeStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadStealTimeStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runInstantaneousWorkloadStealTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Steal Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runNumberOfCalls",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runNumberOfCalls"
      },
      "index": {
        "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runNumberOfCalls",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Calls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStartTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStartTime"
      },
      "index": {
        "description": "the start time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runStartTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics gathered during the run, useful if the system is not scaling with the number of workers as it should \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "runStatistics"
      },
      "index": {
        "description": "statistics gathered during the run useful if the system is not scaling with the number of workers as it should",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStealWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!IndependentMeasurementsStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStealWaitTimes"
      },
      "index": {
        "description": "statistics for the time needed to steal workload from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runStealWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Steal Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorMonadOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorMonadOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runSupervisorMonadOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Monad Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runSupervisorOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003ethe reason why the run terminated \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TerminationReason progress final_result",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "runTerminationReason"
      },
      "index": {
        "description": "the reason why the run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWaitingWorkerStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWaitingWorkerStatistics"
      },
      "index": {
        "description": "statistics for the number of workers waiting for workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runWaitingWorkerStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Waiting Worker Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWallTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!NominalDiffTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWallTime"
      },
      "index": {
        "description": "the wall time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runWallTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Wall Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerOccupation"
      },
      "index": {
        "description": "the fraction of the total time that workers were occupied",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runWorkerOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics NominalDiffTime)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerWaitTimes"
      },
      "index": {
        "description": "statistics for how long it took for workers to obtain workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "runWorkerWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the number of workers has been set to the desired value. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkers",
        "fct-type": "function",
        "title": "setNumberOfWorkers"
      },
      "index": {
        "description": "Like setNumberOfWorkersAsync but blocks until the number of workers has been set to the desired value",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "setNumberOfWorkers",
        "normalized": "Word-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that the number of workers be set to the given amount, invoking the given callback when this has been done. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e IO () -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkersAsync",
        "fct-type": "function",
        "title": "setNumberOfWorkersAsync"
      },
      "index": {
        "description": "Request that the number of workers be set to the given amount invoking the given callback when this has been done",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "setNumberOfWorkersAsync",
        "normalized": "Word-\u003eIO()-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "Word-\u003eIO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setWorkloadBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#setWorkloadBufferSize",
        "fct-type": "function",
        "title": "setWorkloadBufferSize"
      },
      "index": {
        "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
        "name": "setWorkloadBufferSize",
        "normalized": "Int-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Buffer Size",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for communicating with workers over an\n    inter-process channel.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html",
        "fct-type": "module",
        "title": "Message"
      },
      "index": {
        "description": "This module contains infrastructure for communicating with workers over an inter-process channel",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "Message",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisor",
      "description": {
        "fct-descr": "\u003cp\u003eA message from a worker to the supervisor;  the worker id is assumed to be\n    known based on from where the message was received.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "data",
        "title": "MessageForSupervisor"
      },
      "index": {
        "description": "message from worker to the supervisor the worker id is assumed to be known based on from where the message was received",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "MessageForSupervisor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisorFor",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient type alias for the \u003ccode\u003e\u003ca\u003eMessageForSupervisor\u003c/a\u003e\u003c/code\u003e type for the given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorFor",
        "fct-type": "type",
        "title": "MessageForSupervisorFor"
      },
      "index": {
        "description": "Convenient type alias for the MessageForSupervisor type for the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "MessageForSupervisorFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisorReceivers",
      "description": {
        "fct-descr": "\u003cp\u003eThis data structure contains callbacks to be invoked when a message has\n    been received, depending on the kind of message.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "data",
        "title": "MessageForSupervisorReceivers"
      },
      "index": {
        "description": "This data structure contains callbacks to be invoked when message has been received depending on the kind of message",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "MessageForSupervisorReceivers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor Receivers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForWorker",
      "description": {
        "fct-descr": "\u003cp\u003eA message from the supervisor to a worker.\n\u003c/p\u003e\u003cp\u003eNOTE: It is your responsibility not to send a workload to a worker that\n          already has one;  if you do then the worker will report an error and\n          then terminate.  The converse, however, is not true:  it is okay to\n          send a progress request to a worker without a workload because the\n          worker might have finished between when you sent the message and when\n          it was received.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
        "fct-type": "data",
        "title": "MessageForWorker"
      },
      "index": {
        "description": "message from the supervisor to worker NOTE It is your responsibility not to send workload to worker that already has one if you do then the worker will report an error and then terminate The converse however is not true it is okay to send progress request to worker without workload because the worker might have finished between when you sent the message and when it was received",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "MessageForWorker",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:Failed",
      "description": {
        "fct-descr": "\u003cp\u003eThe worker encountered a failure with the given message while exploring the tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Failed String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "function",
        "title": "Failed"
      },
      "index": {
        "description": "The worker encountered failure with the given message while exploring the tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "Failed",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:Finished",
      "description": {
        "fct-descr": "\u003cp\u003eThe worker has finished with the given final progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Finished worker_final_progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "function",
        "title": "Finished"
      },
      "index": {
        "description": "The worker has finished with the given final progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "Finished",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:MessageForSupervisorReceivers",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "MessageForSupervisorReceivers",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "MessageForSupervisorReceivers"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "MessageForSupervisorReceivers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor Receivers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:ProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eThe worker has responded to the progress update request with the given progress update. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgressUpdate (ProgressUpdate progress)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "function",
        "title": "ProgressUpdate"
      },
      "index": {
        "description": "The worker has responded to the progress update request with the given progress update",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "ProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:QuitWorker",
      "description": {
        "fct-descr": "\u003cp\u003estop what you are doing and quit the system \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "QuitWorker",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
        "fct-type": "function",
        "title": "QuitWorker"
      },
      "index": {
        "description": "stop what you are doing and quit the system",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "QuitWorker",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Quit Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:RequestProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003erequest a progress update \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestProgressUpdate",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
        "fct-type": "function",
        "title": "RequestProgressUpdate"
      },
      "index": {
        "description": "request progress update",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "RequestProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:RequestWorkloadSteal",
      "description": {
        "fct-descr": "\u003cp\u003erequest a stolen workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestWorkloadSteal",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
        "fct-type": "function",
        "title": "RequestWorkloadSteal"
      },
      "index": {
        "description": "request stolen workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "RequestWorkloadSteal",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Workload Steal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:StartWorkload",
      "description": {
        "fct-descr": "\u003cp\u003estart exploring the given workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "StartWorkload Workload",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
        "fct-type": "function",
        "title": "StartWorkload"
      },
      "index": {
        "description": "start exploring the given workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "StartWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Start Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:StolenWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eThe worker has responded to the workload steal request with possibly the stolen workload (and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it was not possible to steal a workload at this time). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "StolenWorkload (Maybe (StolenWorkload progress))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "function",
        "title": "StolenWorkload"
      },
      "index": {
        "description": "The worker has responded to the workload steal request with possibly the stolen workload and Nothing if it was not possible to steal workload at this time",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "StolenWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:WorkerQuit",
      "description": {
        "fct-descr": "\u003cp\u003eThe worker has quit the system and is no longer available \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerQuit",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
        "fct-type": "function",
        "title": "WorkerQuit"
      },
      "index": {
        "description": "The worker has quit the system and is no longer available",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "WorkerQuit",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Quit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveAndProcessMessagesFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eContinually performs the given IO action to read a message from a worker\n    with the given id and calls one of the given callbacks depending on the\n    content of the message.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003e IO (MessageForSupervisorFor exploration_mode)-\u003e worker_id-\u003e IO ()",
        "fct-type": "function",
        "title": "receiveAndProcessMessagesFromWorker"
      },
      "index": {
        "description": "Continually performs the given IO action to read message from worker with the given id and calls one of the given callbacks depending on the content of the message",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveAndProcessMessagesFromWorker",
        "normalized": "MessageForSupervisorReceivers a b-\u003eIO(MessageForSupervisorFor a)-\u003eb-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "And Process Messages From Worker",
        "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003eIO(MessageForSupervisorFor exploration_mode)-\u003eworker_id-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveAndProcessMessagesFromWorkerUsingHandle",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ereceiveAndProcessMessagesFromWorker\u003c/a\u003e\u003c/code\u003e except that instead of\n    giving it an IO action to fetch a message you provide a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e from which\n    messsages (assumed to be deserializable) are read.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003e Handle-\u003e worker_id-\u003e IO ()",
        "fct-type": "function",
        "title": "receiveAndProcessMessagesFromWorkerUsingHandle"
      },
      "index": {
        "description": "The same as receiveAndProcessMessagesFromWorker except that instead of giving it an IO action to fetch message you provide Handle from which messsages assumed to be deserializable are read",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveAndProcessMessagesFromWorkerUsingHandle",
        "normalized": "MessageForSupervisorReceivers a b-\u003eHandle-\u003eb-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "And Process Messages From Worker Using Handle",
        "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003eHandle-\u003eworker_id-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFailureFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a failure (with the given message) has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e String -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveFailureFromWorker"
      },
      "index": {
        "description": "to be called when failure with the given message has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveFailureFromWorker",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Failure From Worker",
        "signature": "worker_id-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFinishedFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a worker has finished with the given final progress \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveFinishedFromWorker"
      },
      "index": {
        "description": "to be called when worker has finished with the given final progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveFinishedFromWorker",
        "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Finished From Worker",
        "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveProgressUpdateFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a progress update has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e ProgressUpdate (ProgressFor exploration_mode) -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveProgressUpdateFromWorker"
      },
      "index": {
        "description": "to be called when progress update has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveProgressUpdateFromWorker",
        "normalized": "a-\u003eProgressUpdate(ProgressFor b)-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update From Worker",
        "signature": "worker_id-\u003eProgressUpdate(ProgressFor exploration_mode)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveQuitFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a worker has quit the system and is no longer available \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveQuitFromWorker"
      },
      "index": {
        "description": "to be called when worker has quit the system and is no longer available",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveQuitFromWorker",
        "normalized": "a-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Quit From Worker",
        "signature": "worker_id-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveStolenWorkloadFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a (possibly) stolen workload has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e Maybe (StolenWorkload (ProgressFor exploration_mode)) -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveStolenWorkloadFromWorker"
      },
      "index": {
        "description": "to be called when possibly stolen workload has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
        "module": "LogicGrowsOnTrees.Parallel.Common.Message",
        "name": "receiveStolenWorkloadFromWorker",
        "normalized": "a-\u003eMaybe(StolenWorkload(ProgressFor b))-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload From Worker",
        "signature": "worker_id-\u003eMaybe(StolenWorkload(ProgressFor exploration_mode))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions that let one easily implement the worker side\n    of an adapter under the assumption that the worker uses a two-way\n    communication channel with the supervisor for sending and receiving\n    messages.  (Examples of when this is NOT the case is the threads adapter,\n    where you can communicate with the worker threads directly, and the MPI\n    adapter, which has communication primitives that don't quite align with\n    this setup.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "This module contains functions that let one easily implement the worker side of an adapter under the assumption that the worker uses two-way communication channel with the supervisor for sending and receiving messages Examples of when this is NOT the case is the threads adapter where you can communicate with the worker threads directly and the MPI adapter which has communication primitives that don quite align with this setup",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
        "module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "name": "Process",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#t:ConnectionLost",
      "description": {
        "fct-descr": "\u003cp\u003eThis exception is thrown when the connection has been lost. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
        "fct-type": "data",
        "title": "ConnectionLost"
      },
      "index": {
        "description": "This exception is thrown when the connection has been lost",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
        "module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "name": "ConnectionLost",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:ConnectionLost",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ConnectionLost",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
        "fct-type": "function",
        "title": "ConnectionLost"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
        "module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "name": "ConnectionLost",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:runWorker",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a loop that continually fetches and reacts to messages from the\n    supervisor until the worker quits.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e IO MessageForWorker-\u003e (MessageForSupervisorFor exploration_mode -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "runWorker"
      },
      "index": {
        "description": "Runs loop that continually fetches and reacts to messages from the supervisor until the worker quits",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
        "module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "name": "runWorker",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor a-\u003eIO())-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor exploration_mode-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:runWorkerUsingHandles",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erunWorker\u003c/a\u003e\u003c/code\u003e, but it lets you provide handles through which the\n    messages will be sent and received. (Note that the reading and writing\n    handles might be the same.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e Handle-\u003e Handle-\u003e IO ()",
        "fct-type": "function",
        "title": "runWorkerUsingHandles"
      },
      "index": {
        "description": "The same as runWorker but it lets you provide handles through which the messages will be sent and received Note that the reading and writing handles might be the same",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
        "module": "LogicGrowsOnTrees.Parallel.Common.Process",
        "name": "runWorkerUsingHandles",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eHandle-\u003eHandle-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Using Handles",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eHandle-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo understand the purpose of this module, it helps to know that there are\n    two main loops running in the supervisor. The first loop runs inside the\n    \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e and is usually taken over by the adapter, which handles\n    the communication between the supervisors and the workers. The second loop\n    (referred to as the \u003cem\u003econtroller\u003c/em\u003e) is intended for the user to be able to\n    submit requests such as a global progress update to the supervisor, or\n    possibly adapter-specific requests (such as changing the number of workers).\n\u003c/p\u003e\u003cp\u003eWith this in mind, the purpose of this module is to create infrastructure\n    for the second loop (the controller) to submit requests to the first loop.\n    It provides this functionality through a class so that specific adapters can\n    extend this to provide requests specific to that adapter (such as changing\n    the number of workers).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html",
        "fct-type": "module",
        "title": "RequestQueue"
      },
      "index": {
        "description": "To understand the purpose of this module it helps to know that there are two main loops running in the supervisor The first loop runs inside the SupervisorMonad and is usually taken over by the adapter which handles the communication between the supervisors and the workers The second loop referred to as the controller is intended for the user to be able to submit requests such as global progress update to the supervisor or possibly adapter-specific requests such as changing the number of workers With this in mind the purpose of this module is to create infrastructure for the second loop the controller to submit requests to the first loop It provides this functionality through class so that specific adapters can extend this to provide requests specific to that adapter such as changing the number of workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "RequestQueue",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eA supervisor request. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#Request",
        "fct-type": "type",
        "title": "Request"
      },
      "index": {
        "description": "supervisor request",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "Request",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA basic supervisor request queue. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
        "fct-type": "data",
        "title": "RequestQueue"
      },
      "index": {
        "description": "basic supervisor request queue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "RequestQueue",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueueMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis class provides the set of supervisor requests common to all adapters. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueueMonad",
        "fct-type": "class",
        "title": "RequestQueueMonad"
      },
      "index": {
        "description": "This class provides the set of supervisor requests common to all adapters",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "RequestQueueMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueueReader",
      "description": {
        "fct-descr": "\u003cp\u003eA basic supervisor request queue monad, which has an implicit \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e\n    object that it uses to communicate with the supervisor loop.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueueReader",
        "fct-type": "type",
        "title": "RequestQueueReader"
      },
      "index": {
        "description": "basic supervisor request queue monad which has an implicit RequestQueue object that it uses to communicate with the supervisor loop",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "RequestQueueReader",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:RequestQueue",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
        "fct-type": "function",
        "title": "RequestQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "RequestQueue",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#abort",
        "fct-type": "method",
        "title": "abort"
      },
      "index": {
        "description": "Abort the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "abort",
        "normalized": "a()",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:addProgressReceiver",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a callback to the given \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e that will be invoked when the current global progress update has completed. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(ProgressFor exploration_mode -\u003e IO ()) -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#addProgressReceiver",
        "fct-type": "function",
        "title": "addProgressReceiver"
      },
      "index": {
        "description": "Adds callback to the given RequestQueue that will be invoked when the current global progress update has completed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "addProgressReceiver",
        "normalized": "(ProgressFor a-\u003eIO())-\u003eRequestQueue a b c-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Receiver",
        "signature": "(ProgressFor exploration_mode-\u003eIO())-\u003eRequestQueue exploration_mode worker_id m-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:controllerThreads",
      "description": {
        "fct-descr": "\u003cp\u003ea list of the controller threads \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(IORef [ThreadId])",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
        "fct-type": "function",
        "title": "controllerThreads"
      },
      "index": {
        "description": "list of the controller threads",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "controllerThreads",
        "normalized": "(IORef[ThreadId])",
        "package": "LogicGrowsOnTrees",
        "partial": "Threads",
        "signature": "(IORef[ThreadId])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:enqueueRequest",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueues a supervisor request into the given queue. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Request exploration_mode worker_id m -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#enqueueRequest",
        "fct-type": "function",
        "title": "enqueueRequest"
      },
      "index": {
        "description": "Enqueues supervisor request into the given queue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "enqueueRequest",
        "normalized": "Request a b c-\u003eRequestQueue a b c-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Request",
        "signature": "Request exploration_mode worker_id m-\u003eRequestQueue exploration_mode worker_id m-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:enqueueRequestAndWait",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenqueueRequest\u003c/a\u003e\u003c/code\u003e, but does not return until the request has been run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Request exploration_mode worker_id m -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#enqueueRequestAndWait",
        "fct-type": "function",
        "title": "enqueueRequestAndWait"
      },
      "index": {
        "description": "Like enqueueRequest but does not return until the request has been run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "enqueueRequestAndWait",
        "normalized": "Request a b c-\u003eRequestQueue a b c-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Request And Wait",
        "signature": "Request exploration_mode worker_id m-\u003eRequestQueue exploration_mode worker_id m-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:forkControllerThread",
      "description": {
        "fct-descr": "\u003cp\u003eForks a controller thread;  it's \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is added the list in the request\n    queue. We deliberately do not return the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e from this function\n    because you must always call \u003ccode\u003e\u003ca\u003ekillControllerThreads\u003c/a\u003e\u003c/code\u003e to kill the controller\n    thread as this makes sure that all child threads also get killed.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue exploration_mode worker_id m-\u003e RequestQueueReader exploration_mode worker_id m ()-\u003e m' ()",
        "fct-type": "function",
        "title": "forkControllerThread"
      },
      "index": {
        "description": "Forks controller thread it ThreadId is added the list in the request queue We deliberately do not return the ThreadId from this function because you must always call killControllerThreads to kill the controller thread as this makes sure that all child threads also get killed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "forkControllerThread",
        "normalized": "RequestQueue a b c-\u003eRequestQueueReader a b c()-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Controller Thread",
        "signature": "RequestQueue exploration_mode worker_id m-\u003eRequestQueueReader exploration_mode worker_id m()-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentProgress",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgress",
        "fct-type": "function",
        "title": "getCurrentProgress"
      },
      "index": {
        "description": "Like getCurrentProgressAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "getCurrentProgress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentProgressAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgressAsync",
        "fct-type": "method",
        "title": "getCurrentProgressAsync"
      },
      "index": {
        "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "getCurrentProgressAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkers",
        "fct-type": "function",
        "title": "getNumberOfWorkers"
      },
      "index": {
        "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "getNumberOfWorkers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Int -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkersAsync",
        "fct-type": "method",
        "title": "getNumberOfWorkersAsync"
      },
      "index": {
        "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "getNumberOfWorkersAsync",
        "normalized": "(Int-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "(Int-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getQuantityAsync",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to the supervisor and invokes the given callback with the\n    result when it is available.  (This function is used by\n    \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m α -\u003e (α -\u003e IO ()) -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getQuantityAsync",
        "fct-type": "function",
        "title": "getQuantityAsync"
      },
      "index": {
        "description": "Submits Request to the supervisor and invokes the given callback with the result when it is available This function is used by getCurrentProgressAsync and getNumberOfWorkersAsync",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "getQuantityAsync",
        "normalized": "SupervisorMonad a b c d-\u003e(d-\u003eIO())-\u003eRequestQueue a b c-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "Quantity Async",
        "signature": "SupervisorMonad exploration_mode worker_id m α-\u003e(α-\u003eIO())-\u003eRequestQueue exploration_mode worker_id m-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:killControllerThreads",
      "description": {
        "fct-descr": "\u003cp\u003eKill all the controller threads and their children. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue exploration_mode worker_id m-\u003e m' ()",
        "fct-type": "function",
        "title": "killControllerThreads"
      },
      "index": {
        "description": "Kill all the controller threads and their children",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "killControllerThreads",
        "normalized": "RequestQueue a b c-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Controller Threads",
        "signature": "RequestQueue exploration_mode worker_id m-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:newRequestQueue",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a new \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m' (RequestQueue exploration_mode worker_id m)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#newRequestQueue",
        "fct-type": "function",
        "title": "newRequestQueue"
      },
      "index": {
        "description": "Constructs new RequestQueue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "newRequestQueue",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Request Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:processAllRequests",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses all of the requests in the given \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e, and returns when\n    the queue has been emptied.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue exploration_mode worker_id m -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#processAllRequests",
        "fct-type": "function",
        "title": "processAllRequests"
      },
      "index": {
        "description": "Processes all of the requests in the given RequestQueue and returns when the queue has been emptied",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "processAllRequests",
        "normalized": "RequestQueue a b c-\u003eSupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "All Requests",
        "signature": "RequestQueue exploration_mode worker_id m-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:receiveProgress",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes all of the callbacks with the given progress and then clears the list of callbacks. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue exploration_mode worker_id m -\u003e ProgressFor exploration_mode -\u003e m' ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#receiveProgress",
        "fct-type": "function",
        "title": "receiveProgress"
      },
      "index": {
        "description": "Invokes all of the callbacks with the given progress and then clears the list of callbacks",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "receiveProgress",
        "normalized": "RequestQueue a b c-\u003eProgressFor a-\u003ed()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress",
        "signature": "RequestQueue exploration_mode worker_id m-\u003eProgressFor exploration_mode-\u003em'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:receivers",
      "description": {
        "fct-descr": "\u003cp\u003ea list of callbacks to invoke when a global progress update has completed \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(IORef [ProgressFor exploration_mode -\u003e IO ()])",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
        "fct-type": "function",
        "title": "receivers"
      },
      "index": {
        "description": "list of callbacks to invoke when global progress update has completed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "receivers",
        "normalized": "(IORef[ProgressFor a-\u003eIO()])",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "(IORef[ProgressFor exploration_mode-\u003eIO()])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdate",
        "fct-type": "function",
        "title": "requestProgressUpdate"
      },
      "index": {
        "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "requestProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestProgressUpdateAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdateAsync",
        "fct-type": "method",
        "title": "requestProgressUpdateAsync"
      },
      "index": {
        "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "requestProgressUpdateAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestQueueProgram",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a supervisor program that loops forever processing requests from the given queue. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()-\u003e RequestQueue exploration_mode worker_id m-\u003e SupervisorProgram exploration_mode worker_id m",
        "fct-type": "function",
        "title": "requestQueueProgram"
      },
      "index": {
        "description": "Creates supervisor program that loops forever processing requests from the given queue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "requestQueueProgram",
        "normalized": "SupervisorMonad a b c()-\u003eRequestQueue a b c-\u003eSupervisorProgram a b c",
        "package": "LogicGrowsOnTrees",
        "partial": "Queue Program",
        "signature": "SupervisorMonad exploration_mode worker_id m()-\u003eRequestQueue exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requests",
      "description": {
        "fct-descr": "\u003cp\u003ethe queue of requests to the supervisor \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(TChan (Request exploration_mode worker_id m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
        "fct-type": "function",
        "title": "requests"
      },
      "index": {
        "description": "the queue of requests to the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "requests",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:setWorkloadBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#setWorkloadBufferSize",
        "fct-type": "method",
        "title": "setWorkloadBufferSize"
      },
      "index": {
        "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "setWorkloadBufferSize",
        "normalized": "Int-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Buffer Size",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:syncAsync",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral utility function for converting an asynchronous request to a\n    synchronous request;  it uses an \u003ccode\u003eMVar\u003c/code\u003e to hold the result of the request and\n    blocks until the \u003ccode\u003eMVar\u003c/code\u003e has been filled.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "((α -\u003e IO ()) -\u003e m ()) -\u003e m α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#syncAsync",
        "fct-type": "function",
        "title": "syncAsync"
      },
      "index": {
        "description": "General utility function for converting an asynchronous request to synchronous request it uses an MVar to hold the result of the request and blocks until the MVar has been filled",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "syncAsync",
        "normalized": "((a-\u003eIO())-\u003eb())-\u003eb a",
        "package": "LogicGrowsOnTrees",
        "partial": "Async",
        "signature": "((α-\u003eIO())-\u003em())-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:tryDequeueRequest",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to pop a request from the \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueue exploration_mode worker_id m -\u003e m' (Maybe (Request exploration_mode worker_id m))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#tryDequeueRequest",
        "fct-type": "function",
        "title": "tryDequeueRequest"
      },
      "index": {
        "description": "Attempt to pop request from the RequestQueue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
        "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
        "name": "tryDequeueRequest",
        "normalized": "RequestQueue a b c-\u003ed(Maybe(Request a b c))",
        "package": "LogicGrowsOnTrees",
        "partial": "Dequeue Request",
        "signature": "RequestQueue exploration_mode worker_id m-\u003em'(Maybe(Request exploration_mode worker_id m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Supervisor module contains logic that is common to all of the adapters\n    for the parallization infrastructure. The way to use it is to package the\n    logic for communicating with your workers into a \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e that\n    runs in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e with your state just below the\n    \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e in the monad stack.\n\u003c/p\u003e\u003cp\u003eA great deal of the logic in this module deals with gathering statistics\n    whose purpose is to provide data that can be used to figure out what is\n    going wrong if the runtime is not scaling inversely with the number of\n    workers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html",
        "fct-type": "module",
        "title": "Supervisor"
      },
      "index": {
        "description": "The Supervisor module contains logic that is common to all of the adapters for the parallization infrastructure The way to use it is to package the logic for communicating with your workers into SupervisorProgram that runs in the SupervisorMonad with your state just below the SupervisorMonad in the monad stack great deal of the logic in this module deals with gathering statistics whose purpose is to provide data that can be used to figure out what is going wrong if the runtime is not scaling inversely with the number of workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "Supervisor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:FunctionOfTimeStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics for a value obtained by integrating a value that is a function of\n    time --- i.e., a quantity that holds a single value at any given point in\n    time.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "data",
        "title": "FunctionOfTimeStatistics"
      },
      "index": {
        "description": "Statistics for value obtained by integrating value that is function of time i.e quantity that holds single value at any given point in time",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "FunctionOfTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Function Of Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:IndependentMeasurementsStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics for a value obtained by collecting a number of independent measurements. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "data",
        "title": "IndependentMeasurementsStatistics"
      },
      "index": {
        "description": "Statistics for value obtained by collecting number of independent measurements",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "IndependentMeasurementsStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Independent Measurements Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:RunStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "data",
        "title": "RunStatistics"
      },
      "index": {
        "description": "Statistics gathered about the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorCallbacks",
      "description": {
        "fct-descr": "\u003cp\u003eSupervisor callbacks provide the means by which the supervisor logic\n    communicates to the adapter, usually in order to tell it what it wants to\n    say to various workers.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "data",
        "title": "SupervisorCallbacks"
      },
      "index": {
        "description": "Supervisor callbacks provide the means by which the supervisor logic communicates to the adapter usually in order to tell it what it wants to say to various workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorFullConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just a sum of \u003ccode\u003e\u003ca\u003eSupervisorMonadConstraint\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eSupervisorWorkerIdConstraint\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorFullConstraint",
        "fct-type": "type",
        "title": "SupervisorFullConstraint"
      },
      "index": {
        "description": "This is just sum of SupervisorMonadConstraint and the SupervisorWorkerIdConstraint",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorFullConstraint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Full Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the monad in which the supervisor logic is run;  it keeps track of\n    the state of the system including the current workers and their workloads,\n    the current progress of the system, which workers we are waiting for a\n    progress update or stolen workload from, etc.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorMonad",
        "fct-type": "data",
        "title": "SupervisorMonad"
      },
      "index": {
        "description": "This is the monad in which the supervisor logic is run it keeps track of the state of the system including the current workers and their workloads the current progress of the system which workers we are waiting for progress update or stolen workload from etc",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorMonadConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the constraint placed on the monad in which the supervisor is running. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorMonadConstraint",
        "fct-type": "type",
        "title": "SupervisorMonadConstraint"
      },
      "index": {
        "description": "This is the constraint placed on the monad in which the supervisor is running",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorMonadConstraint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Monad Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorOutcome",
      "description": {
        "fct-descr": "\u003cp\u003eThe outcome of running the supervisor. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
        "fct-type": "data",
        "title": "SupervisorOutcome"
      },
      "index": {
        "description": "The outcome of running the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorOutcomeFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the \u003ccode\u003e\u003ca\u003eSupervisorOutcome\u003c/a\u003e\u003c/code\u003e associated with a given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcomeFor",
        "fct-type": "type",
        "title": "SupervisorOutcomeFor"
      },
      "index": {
        "description": "convenient type alias for the SupervisorOutcome associated with given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorOutcomeFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Outcome For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorProgram",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e is a specification of an event loop to be run inside\n    the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e;  it exists in order to help the supervisor get an\n    estimate for how much time it is spending doing work as opposed to waiting\n    for a message from a worker so that it can generate accurate statistics\n    about how much of the time it was occupied at the end of the run.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
        "fct-type": "data",
        "title": "SupervisorProgram"
      },
      "index": {
        "description": "SupervisorProgram is specification of an event loop to be run inside the SupervisorMonad it exists in order to help the supervisor get an estimate for how much time it is spending doing work as opposed to waiting for message from worker so that it can generate accurate statistics about how much of the time it was occupied at the end of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorProgram",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003eThe reason why the supervisor terminated. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
        "fct-type": "data",
        "title": "SupervisorTerminationReason"
      },
      "index": {
        "description": "The reason why the supervisor terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorTerminationReasonFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the \u003ccode\u003e\u003ca\u003eSupervisorTerminationReason\u003c/a\u003e\u003c/code\u003e associated with a given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReasonFor",
        "fct-type": "type",
        "title": "SupervisorTerminationReasonFor"
      },
      "index": {
        "description": "convenient type alias for the SupervisorTerminationReason associated with given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorTerminationReasonFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Termination Reason For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorWorkerIdConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the constraint placed on the types that can be used as worker ids. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorWorkerIdConstraint",
        "fct-type": "type",
        "title": "SupervisorWorkerIdConstraint"
      },
      "index": {
        "description": "This is the constraint placed on the types that can be used as worker ids",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorWorkerIdConstraint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Worker Id Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:BlockingProgram",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlockingProgram\u003c/a\u003e\u003c/code\u003e has an event loop that executes an action that\n        pauses the thread until an event occurs and then reacts to that event.\n        The first argument is the supervisor action that initializes the system,\n        the second argument is an action that blocks until an event has\n        occurred, and the third argument is the supervisor action to run in\n        response to the event.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "forall α . BlockingProgram (SupervisorMonad exploration_mode worker_id m ()) (m α) (α -\u003e SupervisorMonad exploration_mode worker_id m ())",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
        "fct-type": "function",
        "title": "BlockingProgram"
      },
      "index": {
        "description": "BlockingProgram has an event loop that executes an action that pauses the thread until an event occurs and then reacts to that event The first argument is the supervisor action that initializes the system the second argument is an action that blocks until an event has occurred and the third argument is the supervisor action to run in response to the event",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "BlockingProgram",
        "normalized": "a b BlockingProgram(SupervisorMonad c d e())(e b)(b-\u003eSupervisorMonad c d e())",
        "package": "LogicGrowsOnTrees",
        "partial": "Blocking Program",
        "signature": "forall α BlockingProgram(SupervisorMonad exploration_mode worker_id m())(m α)(α-\u003eSupervisorMonad exploration_mode worker_id m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:FunctionOfTimeStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "FunctionOfTimeStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "FunctionOfTimeStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "FunctionOfTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Function Of Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:IndependentMeasurementsStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IndependentMeasurementsStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "IndependentMeasurementsStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "IndependentMeasurementsStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Independent Measurements Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:PollingProgram",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePollingProgram\u003c/a\u003e\u003c/code\u003e has an event loop that executes an action that\n        checks whether an event has occurred and if so then reacts to that\n        event. The first argument is the supervisor action that initializes the\n        system, the second argument is an action that checks whether an event\n        has occurred, and the third argument is the supervisor action to run in\n        response to an event.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "forall α . PollingProgram (SupervisorMonad exploration_mode worker_id m ()) (m (Maybe α)) (α -\u003e SupervisorMonad exploration_mode worker_id m ())",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
        "fct-type": "function",
        "title": "PollingProgram"
      },
      "index": {
        "description": "PollingProgram has an event loop that executes an action that checks whether an event has occurred and if so then reacts to that event The first argument is the supervisor action that initializes the system the second argument is an action that checks whether an event has occurred and the third argument is the supervisor action to run in response to an event",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "PollingProgram",
        "normalized": "a b PollingProgram(SupervisorMonad c d e())(e(Maybe b))(b-\u003eSupervisorMonad c d e())",
        "package": "LogicGrowsOnTrees",
        "partial": "Polling Program",
        "signature": "forall α PollingProgram(SupervisorMonad exploration_mode worker_id m())(m(Maybe α))(α-\u003eSupervisorMonad exploration_mode worker_id m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:RunStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "RunStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorAborted",
      "description": {
        "fct-descr": "\u003cp\u003ethe supervisor aborted before finishing;  included is the current progress at the time it aborted \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorAborted progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
        "fct-type": "function",
        "title": "SupervisorAborted"
      },
      "index": {
        "description": "the supervisor aborted before finishing included is the current progress at the time it aborted",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorAborted",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorCallbacks",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorCallbacks",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "function",
        "title": "SupervisorCallbacks"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorCompleted",
      "description": {
        "fct-descr": "\u003cp\u003ethe supervisor completed exploring the tree;  included is the final result \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorCompleted final_result",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
        "fct-type": "function",
        "title": "SupervisorCompleted"
      },
      "index": {
        "description": "the supervisor completed exploring the tree included is the final result",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorCompleted",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Completed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorFailure",
      "description": {
        "fct-descr": "\u003cp\u003ethe supervisor failed to explore the tree;  included is the worker where the failure occured as well as the message and the current progress at the time of failure \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorFailure progress worker_id String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
        "fct-type": "function",
        "title": "SupervisorFailure"
      },
      "index": {
        "description": "the supervisor failed to explore the tree included is the worker where the failure occured as well as the message and the current progress at the time of failure",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorFailure",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorOutcome",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorOutcome",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
        "fct-type": "function",
        "title": "SupervisorOutcome"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "SupervisorOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:UnrestrictedProgram",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eUnrestrictedProgram\u003c/a\u003e\u003c/code\u003e is an event loop that you implement manually;\n        note that it must run forever until the logic in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e\n        decides to exit --- although you can always force it to abort by calling\n        \u003ccode\u003e\u003ca\u003eabortSupervisor\u003c/a\u003e\u003c/code\u003e.  This mode exists for testing rather than to be used\n        by an adapter, but if you do use it then you take on responsibility for\n        calling \u003ccode\u003e\u003ca\u003ebeginSupervisorOccupied\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eendSupervisorOccupied\u003c/a\u003e\u003c/code\u003e when\n        respectively the supervisor has begun and ended processing events so\n        that the supervisor occupation statistics are correct.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "UnrestrictedProgram (forall α.  SupervisorMonad exploration_mode worker_id m α)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
        "fct-type": "function",
        "title": "UnrestrictedProgram"
      },
      "index": {
        "description": "An UnrestrictedProgram is an event loop that you implement manually note that it must run forever until the logic in the SupervisorMonad decides to exit although you can always force it to abort by calling abortSupervisor This mode exists for testing rather than to be used by an adapter but if you do use it then you take on responsibility for calling beginSupervisorOccupied and endSupervisorOccupied when respectively the supervisor has begun and ended processing events so that the supervisor occupation statistics are correct",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "UnrestrictedProgram",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Unrestricted Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:abortSupervisor",
      "description": {
        "fct-descr": "\u003cp\u003eAborts the supervisor. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#abortSupervisor",
        "fct-type": "function",
        "title": "abortSupervisor"
      },
      "index": {
        "description": "Aborts the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "abortSupervisor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:addWorker",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has been added to the system;  the\n    supervisor will attempt to obtain a workload for it, stealing one if\n    necessary.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#addWorker",
        "fct-type": "function",
        "title": "addWorker"
      },
      "index": {
        "description": "Informs the supervisor that worker has been added to the system the supervisor will attempt to obtain workload for it stealing one if necessary",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "addWorker",
        "normalized": "a-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:beginSupervisorOccupied",
      "description": {
        "fct-descr": "\u003cp\u003eSignals that the supervisor has begun processing an event. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#beginSupervisorOccupied",
        "fct-type": "function",
        "title": "beginSupervisorOccupied"
      },
      "index": {
        "description": "Signals that the supervisor has begun processing an event",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "beginSupervisorOccupied",
        "normalized": "SupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Occupied",
        "signature": "SupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:broadcastProgressUpdateToWorkers",
      "description": {
        "fct-descr": "\u003cp\u003esend a progress update request to the given workers \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "[worker_id] -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "function",
        "title": "broadcastProgressUpdateToWorkers"
      },
      "index": {
        "description": "send progress update request to the given workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "broadcastProgressUpdateToWorkers",
        "normalized": "[a]-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update To Workers",
        "signature": "[worker_id]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:broadcastWorkloadStealToWorkers",
      "description": {
        "fct-descr": "\u003cp\u003esend a workload steal request to the given workers \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "[worker_id] -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "function",
        "title": "broadcastWorkloadStealToWorkers"
      },
      "index": {
        "description": "send workload steal request to the given workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "broadcastWorkloadStealToWorkers",
        "normalized": "[a]-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Steal To Workers",
        "signature": "[worker_id]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:disableSupervisorDebugMode",
      "description": {
        "fct-descr": "\u003cp\u003eTurns off debug mode;  for more details see \u003ccode\u003e\u003ca\u003esetSupervisorDebugMode\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#disableSupervisorDebugMode",
        "fct-type": "function",
        "title": "disableSupervisorDebugMode"
      },
      "index": {
        "description": "Turns off debug mode for more details see setSupervisorDebugMode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "disableSupervisorDebugMode",
        "normalized": "SupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Debug Mode",
        "signature": "SupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:enableSupervisorDebugMode",
      "description": {
        "fct-descr": "\u003cp\u003eTurns on debug mode;  for more details see \u003ccode\u003e\u003ca\u003esetSupervisorDebugMode\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#enableSupervisorDebugMode",
        "fct-type": "function",
        "title": "enableSupervisorDebugMode"
      },
      "index": {
        "description": "Turns on debug mode for more details see setSupervisorDebugMode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "enableSupervisorDebugMode",
        "normalized": "SupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Debug Mode",
        "signature": "SupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:endSupervisorOccupied",
      "description": {
        "fct-descr": "\u003cp\u003eSignals that the supervisor has finished processing an event. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#endSupervisorOccupied",
        "fct-type": "function",
        "title": "endSupervisorOccupied"
      },
      "index": {
        "description": "Signals that the supervisor has finished processing an event",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "endSupervisorOccupied",
        "normalized": "SupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Occupied",
        "signature": "SupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getCurrentProgress",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current progress of the system. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m (ProgressFor exploration_mode)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getCurrentProgress",
        "fct-type": "function",
        "title": "getCurrentProgress"
      },
      "index": {
        "description": "Gets the current progress of the system",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "getCurrentProgress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getCurrentStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current statistics of the system. (Unlike the other \"get\"\n    operations, there is a small but non-zero cost to do this as the statistics\n    exist in an intermediate state that needs to be finalized.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getCurrentStatistics",
        "fct-type": "function",
        "title": "getCurrentStatistics"
      },
      "index": {
        "description": "Gets the current statistics of the system Unlike the other get operations there is small but non-zero cost to do this as the statistics exist in an intermediate state that needs to be finalized",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "getCurrentStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eGets the number of workers that are currently present in the system. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getNumberOfWorkers",
        "fct-type": "function",
        "title": "getNumberOfWorkers"
      },
      "index": {
        "description": "Gets the number of workers that are currently present in the system",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "getNumberOfWorkers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:performGlobalProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that a global progress update be performed;  the supervisor will\n    send progress update requests to all workers, and when it has received a\n    response from everyone it will call the \u003ccode\u003e\u003ca\u003ereceiveCurrentProgress\u003c/a\u003e\u003c/code\u003e callback in\n    the \u003ccode\u003e\u003ca\u003eSupervisorCallbacks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#performGlobalProgressUpdate",
        "fct-type": "function",
        "title": "performGlobalProgressUpdate"
      },
      "index": {
        "description": "Request that global progress update be performed the supervisor will send progress update requests to all workers and when it has received response from everyone it will call the receiveCurrentProgress callback in the SupervisorCallbacks",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "performGlobalProgressUpdate",
        "normalized": "SupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Global Progress Update",
        "signature": "SupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveCurrentProgress",
      "description": {
        "fct-descr": "\u003cp\u003ereceive the result of the global progress update that was requested by the controller \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgressFor exploration_mode -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "function",
        "title": "receiveCurrentProgress"
      },
      "index": {
        "description": "receive the result of the global progress update that was requested by the controller",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveCurrentProgress",
        "normalized": "ProgressFor a-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Current Progress",
        "signature": "ProgressFor exploration_mode-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a progress update has been received by a worker. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e ProgressUpdateFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveProgressUpdate",
        "fct-type": "function",
        "title": "receiveProgressUpdate"
      },
      "index": {
        "description": "Informs the supervisor that progress update has been received by worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveProgressUpdate",
        "normalized": "a-\u003eProgressUpdateFor b-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": "worker_id-\u003eProgressUpdateFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveStolenWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has responded to a workload steal\n    request;  a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates that the worker did not have a workload that\n    could be stolen (which occurs if it hadn't taken any branches at the time\n    the request was received).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e Maybe (StolenWorkloadFor exploration_mode) -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveStolenWorkload",
        "fct-type": "function",
        "title": "receiveStolenWorkload"
      },
      "index": {
        "description": "Informs the supervisor that worker has responded to workload steal request Nothing indicates that the worker did not have workload that could be stolen which occurs if it hadn taken any branches at the time the request was received",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveStolenWorkload",
        "normalized": "a-\u003eMaybe(StolenWorkloadFor b)-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload",
        "signature": "worker_id-\u003eMaybe(StolenWorkloadFor exploration_mode)-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFailure",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has failed;  the system will be\n    terminated and the given message returned as the failure message.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e String -\u003e SupervisorMonad exploration_mode worker_id m α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFailure",
        "fct-type": "function",
        "title": "receiveWorkerFailure"
      },
      "index": {
        "description": "Informs the supervisor that worker has failed the system will be terminated and the given message returned as the failure message",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveWorkerFailure",
        "normalized": "a-\u003eString-\u003eSupervisorMonad b a c d",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Failure",
        "signature": "worker_id-\u003eString-\u003eSupervisorMonad exploration_mode worker_id m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinished",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinished",
        "fct-type": "function",
        "title": "receiveWorkerFinished"
      },
      "index": {
        "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveWorkerFinished",
        "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Finished",
        "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinishedAndRemoved",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress; the worker will be removed after its\n    final progress has been processed.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinishedAndRemoved",
        "fct-type": "function",
        "title": "receiveWorkerFinishedAndRemoved"
      },
      "index": {
        "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress the worker will be removed after its final progress has been processed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveWorkerFinishedAndRemoved",
        "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Finished And Removed",
        "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinishedWithRemovalFlag",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress;  if the first argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e then the\n    worker will be removed.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Bool -\u003e worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinishedWithRemovalFlag",
        "fct-type": "function",
        "title": "receiveWorkerFinishedWithRemovalFlag"
      },
      "index": {
        "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress if the first argument is True then the worker will be removed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "receiveWorkerFinishedWithRemovalFlag",
        "normalized": "Bool-\u003ea-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Finished With Removal Flag",
        "signature": "Bool-\u003eworker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:removeWorker",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the supervisor that a worker (which might have been active and\n    possibly even waited on for a progress update and/or stolen workload) has\n    been removed; the worker will be removed from the set of workers with\n    pending requests and its workload will be returned to the pool of available\n    workloads.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#removeWorker",
        "fct-type": "function",
        "title": "removeWorker"
      },
      "index": {
        "description": "Informs the supervisor that worker which might have been active and possibly even waited on for progress update and or stolen workload has been removed the worker will be removed from the set of workers with pending requests and its workload will be returned to the pool of available workloads",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "removeWorker",
        "normalized": "a-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:removeWorkerIfPresent",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eremoveWorker\u003c/a\u003e\u003c/code\u003e, but only acts if the worker is present. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#removeWorkerIfPresent",
        "fct-type": "function",
        "title": "removeWorkerIfPresent"
      },
      "index": {
        "description": "Like removeWorker but only acts if the worker is present",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "removeWorkerIfPresent",
        "normalized": "a-\u003eSupervisorMonad b a c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker If Present",
        "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runAvailableWorkloadStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAvailableWorkloadStatistics"
      },
      "index": {
        "description": "statistics for the number of available workloads waiting for worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runAvailableWorkloadStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Available Workload Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runAverageTimePerCall",
      "description": {
        "fct-descr": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAverageTimePerCall"
      },
      "index": {
        "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runAverageTimePerCall",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Average Time Per Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runEndTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runEndTime"
      },
      "index": {
        "description": "the end time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runEndTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "End Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runInstantaneousWorkloadRequestRateStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadRequestRateStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runInstantaneousWorkloadRequestRateStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Request Rate Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runInstantaneousWorkloadStealTimeStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadStealTimeStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runInstantaneousWorkloadStealTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Steal Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runNumberOfCalls",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runNumberOfCalls"
      },
      "index": {
        "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runNumberOfCalls",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Calls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runStartTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStartTime"
      },
      "index": {
        "description": "the start time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runStartTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runStealWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!IndependentMeasurementsStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStealWaitTimes"
      },
      "index": {
        "description": "statistics for the time needed to steal workload from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runStealWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Steal Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisor",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the supervisor in the given exploration mode with the given callbacks\n    and program.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e SupervisorProgram exploration_mode worker_id m -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runSupervisor",
        "fct-type": "function",
        "title": "runSupervisor"
      },
      "index": {
        "description": "Runs the supervisor in the given exploration mode with the given callbacks and program",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runSupervisor",
        "normalized": "ExplorationMode a-\u003eSupervisorCallbacks a b c-\u003eSupervisorProgram a b c-\u003ec(SupervisorOutcomeFor a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor",
        "signature": "ExplorationMode exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m-\u003em(SupervisorOutcomeFor exploration_mode worker_id)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorMonadOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorMonadOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runSupervisorMonadOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Monad Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runSupervisorOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunSupervisor\u003c/a\u003e\u003c/code\u003e but starting from the given progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e SupervisorProgram exploration_mode worker_id m -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runSupervisorStartingFrom",
        "fct-type": "function",
        "title": "runSupervisorStartingFrom"
      },
      "index": {
        "description": "Like runSupervisor but starting from the given progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runSupervisorStartingFrom",
        "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eSupervisorCallbacks a b c-\u003eSupervisorProgram a b c-\u003ec(SupervisorOutcomeFor a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Starting From",
        "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m-\u003em(SupervisorOutcomeFor exploration_mode worker_id)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runUnrestrictedSupervisor",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the supervisor with a raw action in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE:  You should not normally use this function, as it exists primarily for\n           testing purposes;  see \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e (forall α.  SupervisorMonad exploration_mode worker_id m α) -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runUnrestrictedSupervisor",
        "fct-type": "function",
        "title": "runUnrestrictedSupervisor"
      },
      "index": {
        "description": "Runs the supervisor with raw action in the SupervisorMonad NOTE You should not normally use this function as it exists primarily for testing purposes see SupervisorProgram for details",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runUnrestrictedSupervisor",
        "normalized": "ExplorationMode a-\u003eSupervisorCallbacks a b c-\u003e(d e SupervisorMonad a b c f)-\u003ec(SupervisorOutcomeFor a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Unrestricted Supervisor",
        "signature": "ExplorationMode exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003e(forall α. SupervisorMonad exploration_mode worker_id m α)-\u003em(SupervisorOutcomeFor exploration_mode worker_id)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runUnrestrictedSupervisorStartingFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunUnrestrictedSupervisor\u003c/a\u003e\u003c/code\u003e but starting from the given progress. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e (forall α.  SupervisorMonad exploration_mode worker_id m α) -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runUnrestrictedSupervisorStartingFrom",
        "fct-type": "function",
        "title": "runUnrestrictedSupervisorStartingFrom"
      },
      "index": {
        "description": "Like runUnrestrictedSupervisor but starting from the given progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runUnrestrictedSupervisorStartingFrom",
        "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eSupervisorCallbacks a b c-\u003e(d e SupervisorMonad a b c f)-\u003ec(SupervisorOutcomeFor a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Unrestricted Supervisor Starting From",
        "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003e(forall α. SupervisorMonad exploration_mode worker_id m α)-\u003em(SupervisorOutcomeFor exploration_mode worker_id)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWaitingWorkerStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWaitingWorkerStatistics"
      },
      "index": {
        "description": "statistics for the number of workers waiting for workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runWaitingWorkerStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Waiting Worker Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWallTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!NominalDiffTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWallTime"
      },
      "index": {
        "description": "the wall time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runWallTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Wall Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWorkerOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerOccupation"
      },
      "index": {
        "description": "the fraction of the total time that workers were occupied",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runWorkerOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWorkerWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics NominalDiffTime)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerWaitTimes"
      },
      "index": {
        "description": "statistics for how long it took for workers to obtain workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "runWorkerWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:sendWorkloadToWorker",
      "description": {
        "fct-descr": "\u003cp\u003esend the given workload to the given worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e worker_id -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
        "fct-type": "function",
        "title": "sendWorkloadToWorker"
      },
      "index": {
        "description": "send the given workload to the given worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "sendWorkloadToWorker",
        "normalized": "Workload-\u003ea-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload To Worker",
        "signature": "Workload-\u003eworker_id-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:setSupervisorDebugMode",
      "description": {
        "fct-descr": "\u003cp\u003eSets whether the supervisor is in debug mode;  when it is in this mode it\n    performs continuous self-consistency checks.  This mode is intended for\n    assisting in debugging new adapters.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Bool -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#setSupervisorDebugMode",
        "fct-type": "function",
        "title": "setSupervisorDebugMode"
      },
      "index": {
        "description": "Sets whether the supervisor is in debug mode when it is in this mode it performs continuous self-consistency checks This mode is intended for assisting in debugging new adapters",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "setSupervisorDebugMode",
        "normalized": "Bool-\u003eSupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Debug Mode",
        "signature": "Bool-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:setWorkloadBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eSets the workload buffer size, which is the minimum number of workloads that\n    the supervisor will attempt to have available at all times so that requests\n    for new workloads from workers can be responded to immediately.\n\u003c/p\u003e\u003cp\u003eNormally the default value of 4 will be fine, but if you run into a problem\n    where the amount of time needed to steal a workload is greater than the\n    average time between requests for new workloads, then setting this to be\n    proportional to the time needed to steal a workload divided by the time\n    between workload requests may help.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int -\u003e SupervisorMonad exploration_mode worker_id m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#setWorkloadBufferSize",
        "fct-type": "function",
        "title": "setWorkloadBufferSize"
      },
      "index": {
        "description": "Sets the workload buffer size which is the minimum number of workloads that the supervisor will attempt to have available at all times so that requests for new workloads from workers can be responded to immediately Normally the default value of will be fine but if you run into problem where the amount of time needed to steal workload is greater than the average time between requests for new workloads then setting this to be proportional to the time needed to steal workload divided by the time between workload requests may help",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "setWorkloadBufferSize",
        "normalized": "Int-\u003eSupervisorMonad a b c()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Buffer Size",
        "signature": "Int-\u003eSupervisorMonad exploration_mode worker_id m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statAverage",
      "description": {
        "fct-descr": "\u003cp\u003ethe average value \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "statAverage"
      },
      "index": {
        "description": "the average value",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "statAverage",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statCount",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of measurements \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "statCount"
      },
      "index": {
        "description": "the number of measurements",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "statCount",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statMax",
      "description": {
        "fct-descr": "\u003cp\u003ethe maximum measurement value \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "statMax"
      },
      "index": {
        "description": "the maximum measurement value",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "statMax",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statMin",
      "description": {
        "fct-descr": "\u003cp\u003ethe minimum measurement value \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "statMin"
      },
      "index": {
        "description": "the minimum measurement value",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "statMin",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statStdDev",
      "description": {
        "fct-descr": "\u003cp\u003ethe standard deviation \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "statStdDev"
      },
      "index": {
        "description": "the standard deviation",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "statStdDev",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Std Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorRemainingWorkers",
      "description": {
        "fct-descr": "\u003cp\u003ethe workers that were present when it finished \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "[worker_id]",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
        "fct-type": "function",
        "title": "supervisorRemainingWorkers"
      },
      "index": {
        "description": "the workers that were present when it finished",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "supervisorRemainingWorkers",
        "normalized": "[a]",
        "package": "LogicGrowsOnTrees",
        "partial": "Remaining Workers",
        "signature": "[worker_id]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorRunStatistics",
      "description": {
        "fct-descr": "\u003cp\u003ethe statistics for the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
        "fct-type": "function",
        "title": "supervisorRunStatistics"
      },
      "index": {
        "description": "the statistics for the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "supervisorRunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003ethe reason the supervisor terminated \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorTerminationReason final_result progress worker_id",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
        "fct-type": "function",
        "title": "supervisorTerminationReason"
      },
      "index": {
        "description": "the reason the supervisor terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "supervisorTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeAverage",
      "description": {
        "fct-descr": "\u003cp\u003ethe average value of the function over the time period \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "timeAverage"
      },
      "index": {
        "description": "the average value of the function over the time period",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "timeAverage",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeCount",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of points at which the function changed \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "timeCount"
      },
      "index": {
        "description": "the number of points at which the function changed",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "timeCount",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeMax",
      "description": {
        "fct-descr": "\u003cp\u003ethe maximum value of the function over the time period \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "timeMax"
      },
      "index": {
        "description": "the maximum value of the function over the time period",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "timeMax",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeMin",
      "description": {
        "fct-descr": "\u003cp\u003ethe minimum value of the function over the time period \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "timeMin"
      },
      "index": {
        "description": "the minimum value of the function over the time period",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "timeMin",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeStdDev",
      "description": {
        "fct-descr": "\u003cp\u003ethe standard deviation of the function over the time period \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Double",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
        "fct-type": "function",
        "title": "timeStdDev"
      },
      "index": {
        "description": "the standard deviation of the function over the time period",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "timeStdDev",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Std Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:tryGetWaitingWorker",
      "description": {
        "fct-descr": "\u003cp\u003eIf there exists any workers waiting for a workload, it returns the id of one\n    of them wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e; it not, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. (This is useful,\n    for example, if you want to reduce the number of workers as it is best to\n    start by removing ones that are currently idle.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorMonad exploration_mode worker_id m (Maybe worker_id)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#tryGetWaitingWorker",
        "fct-type": "function",
        "title": "tryGetWaitingWorker"
      },
      "index": {
        "description": "If there exists any workers waiting for workload it returns the id of one of them wrapped in Just it not it returns Nothing This is useful for example if you want to reduce the number of workers as it is best to start by removing ones that are currently idle",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
        "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "name": "tryGetWaitingWorker",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Get Waiting Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eWorker\u003c/code\u003e module contains the workhorse code of the parallelization\n    infrastructure in the form of the \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e function, which\n    explores a tree step by step while continuously polling for requests; for\n    more details see \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html",
        "fct-type": "module",
        "title": "Worker"
      },
      "index": {
        "description": "The Worker module contains the workhorse code of the parallelization infrastructure in the form of the forkWorkerThread function which explores tree step by step while continuously polling for requests for more details see forkWorkerThread",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "Worker",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:ProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eA progress update sent to the supervisor;  it has a component which contains\n    information about how much of the tree has been explored and what results\n    have been found so far, as well as the remaining \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e to be completed\n    by this worker.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
        "fct-type": "data",
        "title": "ProgressUpdate"
      },
      "index": {
        "description": "progress update sent to the supervisor it has component which contains information about how much of the tree has been explored and what results have been found so far as well as the remaining Workload to be completed by this worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "ProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:ProgressUpdateFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eProgressUpdate\u003c/a\u003e\u003c/code\u003e associated with the\n    given exploration mode.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdateFor",
        "fct-type": "type",
        "title": "ProgressUpdateFor"
      },
      "index": {
        "description": "convenient type alias for the type of ProgressUpdate associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "ProgressUpdateFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:StolenWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eA stolen workload sent to the supervisor;  in addition to a component with\n    the stolen \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e itself, it also has a \u003ccode\u003e\u003ca\u003eProgressUpdate\u003c/a\u003e\u003c/code\u003e component,\n    which is required in order to maintain the invariant that all of the\n    \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003es that the supervisor has on file (both assigned to workers and\n    unassigned) plus the current progress equals the full tree.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
        "fct-type": "data",
        "title": "StolenWorkload"
      },
      "index": {
        "description": "stolen workload sent to the supervisor in addition to component with the stolen Workload itself it also has ProgressUpdate component which is required in order to maintain the invariant that all of the Workload that the supervisor has on file both assigned to workers and unassigned plus the current progress equals the full tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "StolenWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:StolenWorkloadFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eStolenWorkload\u003c/a\u003e\u003c/code\u003e associated with the\n    the given exploration mode.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkloadFor",
        "fct-type": "type",
        "title": "StolenWorkloadFor"
      },
      "index": {
        "description": "convenient type alias for the type of StolenWorkload associated with the the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "StolenWorkloadFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eThe environment of a running worker. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "data",
        "title": "WorkerEnvironment"
      },
      "index": {
        "description": "The environment of running worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerEnvironment",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerEnvironmentFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerEnvironment\u003c/a\u003e\u003c/code\u003e associated with\n    the given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironmentFor",
        "fct-type": "type",
        "title": "WorkerEnvironmentFor"
      },
      "index": {
        "description": "convenient type alias for the type of WorkerEnvironment associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerEnvironmentFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Environment For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerPushActionFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe action that a worker can take to push a result to the supervisor;  this\n    type is effectively null (with the exact value \u003ccode\u003e\u003ca\u003eabsurd\u003c/a\u003e\u003c/code\u003e) for all modes\n    except \u003ccode\u003e\u003ca\u003eFoundModeUsingPush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerPushActionFor",
        "fct-type": "function",
        "title": "WorkerPushActionFor"
      },
      "index": {
        "description": "The action that worker can take to push result to the supervisor this type is effectively null with the exact value absurd for all modes except FoundModeUsingPush",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerPushActionFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Push Action For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerRequestQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA queue of worker requests.\n\u003c/p\u003e\u003cp\u003eNOTE:  Although the type is a list, and requests are added by prepending\n    them to the list, it still acts as a queue because the worker will reverse\n    the list before processing the requests.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerRequestQueue",
        "fct-type": "type",
        "title": "WorkerRequestQueue"
      },
      "index": {
        "description": "queue of worker requests NOTE Although the type is list and requests are added by prepending them to the list it still acts as queue because the worker will reverse the list before processing the requests",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerRequestQueue",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Request Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerRequestQueueFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerRequestQueue\u003c/a\u003e\u003c/code\u003e associated with\n    the given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerRequestQueueFor",
        "fct-type": "type",
        "title": "WorkerRequestQueueFor"
      },
      "index": {
        "description": "convenient type alias for the type of WorkerRequestQueue associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerRequestQueueFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Request Queue For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003eThe reason why a worker terminated. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
        "fct-type": "data",
        "title": "WorkerTerminationReason"
      },
      "index": {
        "description": "The reason why worker terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerTerminationReasonFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerTerminationReason\u003c/a\u003e\u003c/code\u003e associated\n    with the given exploration mode.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReasonFor",
        "fct-type": "type",
        "title": "WorkerTerminationReasonFor"
      },
      "index": {
        "description": "convenient type alias for the type of WorkerTerminationReason associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerTerminationReasonFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Termination Reason For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:ProgressUpdate",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgressUpdate",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
        "fct-type": "function",
        "title": "ProgressUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "ProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:StolenWorkload",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "StolenWorkload",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
        "fct-type": "function",
        "title": "StolenWorkload"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "StolenWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerAborted",
      "description": {
        "fct-descr": "\u003cp\u003eworker was aborted by either an external request or the \u003ccode\u003e\u003ca\u003eThreadKilled\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUserInterrupt\u003c/a\u003e\u003c/code\u003e exceptions \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerAborted",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
        "fct-type": "function",
        "title": "WorkerAborted"
      },
      "index": {
        "description": "worker was aborted by either an external request or the ThreadKilled or UserInterrupt exceptions",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerAborted",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerEnvironment",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerEnvironment",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "function",
        "title": "WorkerEnvironment"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerEnvironment",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerFailed",
      "description": {
        "fct-descr": "\u003cp\u003eworker failed;  included is the message of the failure (this would have\n        been a value of type \u003ccode\u003eSomeException\u003c/code\u003e if it were not for the fact that\n        this value will often have to be sent over communication channels and\n        exceptions cannot be serialized (as they have unknown type), meaning\n        that it usually has to be turned into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e anyway)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerFailed String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
        "fct-type": "function",
        "title": "WorkerFailed"
      },
      "index": {
        "description": "worker failed included is the message of the failure this would have been value of type SomeException if it were not for the fact that this value will often have to be sent over communication channels and exceptions cannot be serialized as they have unknown type meaning that it usually has to be turned into String via show anyway",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerFailed",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerFinished",
      "description": {
        "fct-descr": "\u003cp\u003eworker completed normally without error;  included is the final result \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerFinished worker_final_progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
        "fct-type": "function",
        "title": "WorkerFinished"
      },
      "index": {
        "description": "worker completed normally without error included is the final result",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "WorkerFinished",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:exploreTreeGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eExplores a tree with the specified purity using the given mode by forking a\n    worker thread and waiting for it to finish; it exists to facilitate testing\n    and benchmarking and is not a function that you are likely to ever have a\n    need for yourself.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e Purity m n -\u003e TreeT m α -\u003e IO (WorkerTerminationReason (FinalResultFor exploration_mode))",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#exploreTreeGeneric",
        "fct-type": "function",
        "title": "exploreTreeGeneric"
      },
      "index": {
        "description": "Explores tree with the specified purity using the given mode by forking worker thread and waiting for it to finish it exists to facilitate testing and benchmarking and is not function that you are likely to ever have need for yourself",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "exploreTreeGeneric",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b d-\u003eIO(WorkerTerminationReason(FinalResultFor a))",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Generic",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m α-\u003eIO(WorkerTerminationReason(FinalResultFor exploration_mode))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:forkWorkerThread",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e function is the workhorse of the parallization\n    infrastructure; it explores a tree in a separate thread while polling for\n    requests. Specifically, the worker alternates between stepping through the\n    tree and checking to see if there are any new requests in the queue.\n\u003c/p\u003e\u003cp\u003eThe worker is optimized around the observation that the vast majority of its\n    time is spent exploring the tree rather than responding to requests, and so\n    the amount of overhead needed to check if any requests are present needs to\n    be minimized at the cost of possibly delaying a response to an incoming\n    request. For this reason, it uses an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e for the queue to minimize the\n    cost of peeking at it rather than an \u003ccode\u003eMVar\u003c/code\u003e or some other thread\n    synchronization variable; the trade-off is that if a request is added to the\n    queue by a different processor then it might not be noticed immediately the\n    caches get synchronized. Likewise, the request queue uses the List type\n    rather than something like \u003ca\u003eData.Sequence\u003c/a\u003e for simplicity; the vast majority\n    of the time the worker will encounter an empty list, and on the rare\n    occasion when the list is non-empty it will be short enough that\n    \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003eing it will not pose a significant cost.\n\u003c/p\u003e\u003cp\u003eAt any given point in the exploration, there is an initial path which\n    locates the subtree that was given as the original workload, a cursor which\n    indicates the subtree \u003cem\u003ewithin\u003c/em\u003e this subtree that makes up the \u003cem\u003ecurrent\u003c/em\u003e\n    workload, and the context which indicates the current location in the\n    subtree that is being explored. All workers start with an empty cursor; when\n    a workload is stolen, decisions made early on in the the context are frozen\n    and moved into the cursor because if they were not then when the worker\n    backtracked it would explore a workload that it just gave away, resulting in\n    some results being observed twice.\n\u003c/p\u003e\u003cp\u003eThe worker terminates either if it finishes exploring all the nodes in its\n    (current) workload, if an error occurs, or if it is aborted either via.\n    the \u003ccode\u003e\u003ca\u003eThreadKilled\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUserInterrupt\u003c/a\u003e\u003c/code\u003e exceptions or by an abort request\n    placed in the request queue.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e (WorkerTerminationReasonFor exploration_mode -\u003e IO ())-\u003e TreeT m (ResultFor exploration_mode)-\u003e Workload-\u003e WorkerPushActionFor exploration_mode-\u003e IO (WorkerEnvironmentFor exploration_mode)",
        "fct-type": "function",
        "title": "forkWorkerThread"
      },
      "index": {
        "description": "The forkWorkerThread function is the workhorse of the parallization infrastructure it explores tree in separate thread while polling for requests Specifically the worker alternates between stepping through the tree and checking to see if there are any new requests in the queue The worker is optimized around the observation that the vast majority of its time is spent exploring the tree rather than responding to requests and so the amount of overhead needed to check if any requests are present needs to be minimized at the cost of possibly delaying response to an incoming request For this reason it uses an IORef for the queue to minimize the cost of peeking at it rather than an MVar or some other thread synchronization variable the trade-off is that if request is added to the queue by different processor then it might not be noticed immediately the caches get synchronized Likewise the request queue uses the List type rather than something like Data.Sequence for simplicity the vast majority of the time the worker will encounter an empty list and on the rare occasion when the list is non-empty it will be short enough that reverse ing it will not pose significant cost At any given point in the exploration there is an initial path which locates the subtree that was given as the original workload cursor which indicates the subtree within this subtree that makes up the current workload and the context which indicates the current location in the subtree that is being explored All workers start with an empty cursor when workload is stolen decisions made early on in the the context are frozen and moved into the cursor because if they were not then when the worker backtracked it would explore workload that it just gave away resulting in some results being observed twice The worker terminates either if it finishes exploring all the nodes in its current workload if an error occurs or if it is aborted either via the ThreadKilled and UserInterrupt exceptions or by an abort request placed in the request queue",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "forkWorkerThread",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003e(WorkerTerminationReasonFor a-\u003eIO())-\u003eTreeT b(ResultFor a)-\u003eWorkload-\u003eWorkerPushActionFor a-\u003eIO(WorkerEnvironmentFor a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Thread",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003e(WorkerTerminationReasonFor exploration_mode-\u003eIO())-\u003eTreeT m(ResultFor exploration_mode)-\u003eWorkload-\u003eWorkerPushActionFor exploration_mode-\u003eIO(WorkerEnvironmentFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:progressUpdateProgress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
        "fct-type": "function",
        "title": "progressUpdateProgress"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "progressUpdateProgress",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Update Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:progressUpdateRemainingWorkload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
        "fct-type": "function",
        "title": "progressUpdateRemainingWorkload"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "progressUpdateRemainingWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Update Remaining Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendAbortRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to abort. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerRequestQueue progress -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#sendAbortRequest",
        "fct-type": "function",
        "title": "sendAbortRequest"
      },
      "index": {
        "description": "Sends request to abort",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "sendAbortRequest",
        "normalized": "WorkerRequestQueue a-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Abort Request",
        "signature": "WorkerRequestQueue progress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendProgressUpdateRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request for a progress update along with a response action to\n    perform when the progress update is available.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerRequestQueue progress-\u003e (ProgressUpdate progress -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "sendProgressUpdateRequest"
      },
      "index": {
        "description": "Sends request for progress update along with response action to perform when the progress update is available",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "sendProgressUpdateRequest",
        "normalized": "WorkerRequestQueue a-\u003e(ProgressUpdate a-\u003eIO())-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update Request",
        "signature": "WorkerRequestQueue progress-\u003e(ProgressUpdate progress-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendWorkloadStealRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to steal a workload along with a response action to\n    perform when the progress update is available.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerRequestQueue progress-\u003e (Maybe (StolenWorkload progress) -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "sendWorkloadStealRequest"
      },
      "index": {
        "description": "Sends request to steal workload along with response action to perform when the progress update is available",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "sendWorkloadStealRequest",
        "normalized": "WorkerRequestQueue a-\u003e(Maybe(StolenWorkload a)-\u003eIO())-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Steal Request",
        "signature": "WorkerRequestQueue progress-\u003e(Maybe(StolenWorkload progress)-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:stolenWorkload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
        "fct-type": "function",
        "title": "stolenWorkload"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "stolenWorkload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:stolenWorkloadProgressUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgressUpdate progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
        "fct-type": "function",
        "title": "stolenWorkloadProgressUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "stolenWorkloadProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerInitialPath",
      "description": {
        "fct-descr": "\u003cp\u003ethe initial path of the worker's workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "function",
        "title": "workerInitialPath"
      },
      "index": {
        "description": "the initial path of the worker workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "workerInitialPath",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Initial Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerPendingRequests",
      "description": {
        "fct-descr": "\u003cp\u003ethe request queue for the worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerRequestQueue progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "function",
        "title": "workerPendingRequests"
      },
      "index": {
        "description": "the request queue for the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "workerPendingRequests",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Pending Requests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerTerminationFlag",
      "description": {
        "fct-descr": "\u003cp\u003ean IVar that is filled when the worker terminates \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IVar ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "function",
        "title": "workerTerminationFlag"
      },
      "index": {
        "description": "an IVar that is filled when the worker terminates",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "workerTerminationFlag",
        "normalized": "IVar()",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Flag",
        "signature": "IVar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerThreadId",
      "description": {
        "fct-descr": "\u003cp\u003ethe thread id of the worker thread \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ThreadId",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
        "fct-type": "function",
        "title": "workerThreadId"
      },
      "index": {
        "description": "the thread id of the worker thread",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
        "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
        "name": "workerThreadId",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides most of the common functionality needed to implement a\n    adapter where the number of workers can be adjusted during the run.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html",
        "fct-type": "module",
        "title": "Workgroup"
      },
      "index": {
        "description": "This module provides most of the common functionality needed to implement adapter where the number of workers can be adjusted during the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "Workgroup",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:InnerMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the monad in which the adapter specific code is run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#InnerMonad",
        "fct-type": "type",
        "title": "InnerMonad"
      },
      "index": {
        "description": "This is the monad in which the adapter specific code is run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "InnerMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Inner Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:MessageForSupervisorReceivers",
      "description": {
        "fct-descr": "\u003cp\u003eThis data structure contains callbacks to be invoked when a message has\n    been received, depending on the kind of message.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "data",
        "title": "MessageForSupervisorReceivers"
      },
      "index": {
        "description": "This data structure contains callbacks to be invoked when message has been received depending on the kind of message",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "MessageForSupervisorReceivers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor Receivers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkerId",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of worker ids used by this module (an alias for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkerId",
        "fct-type": "type",
        "title": "WorkerId"
      },
      "index": {
        "description": "The type of worker ids used by this module an alias for Int",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "WorkerId",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupCallbacks",
      "description": {
        "fct-descr": "\u003cp\u003eA set of callbacks invoked by the supervisor code in this module. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "data",
        "title": "WorkgroupCallbacks"
      },
      "index": {
        "description": "set of callbacks invoked by the supervisor code in this module",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "WorkgroupCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupControllerMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the monad in which the workgroup controller will run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
        "fct-type": "newtype",
        "title": "WorkgroupControllerMonad"
      },
      "index": {
        "description": "This is the monad in which the workgroup controller will run",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "WorkgroupControllerMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup Controller Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupRequestQueueMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkgroupRequestQueueMonad\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eRequestQueueMonad\u003c/a\u003e\u003c/code\u003e but with the\n    additional ability to change the number of workers in the system.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupRequestQueueMonad",
        "fct-type": "class",
        "title": "WorkgroupRequestQueueMonad"
      },
      "index": {
        "description": "WorkgroupRequestQueueMonad is RequestQueueMonad but with the additional ability to change the number of workers in the system",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "WorkgroupRequestQueueMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup Request Queue Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:C",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "C",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "C",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:MessageForSupervisorReceivers",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "MessageForSupervisorReceivers",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "MessageForSupervisorReceivers"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "MessageForSupervisorReceivers",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Message For Supervisor Receivers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:WorkgroupCallbacks",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkgroupCallbacks",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "WorkgroupCallbacks"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "WorkgroupCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:changeNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but it blocks until the number of workers\n    has been changed and returns the new number of workers.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Word -\u003e Word) -\u003e m Word",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkers",
        "fct-type": "function",
        "title": "changeNumberOfWorkers"
      },
      "index": {
        "description": "Like changeNumberOfWorkersAsync but it blocks until the number of workers has been changed and returns the new number of workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "changeNumberOfWorkers",
        "normalized": "(Word-\u003eWord)-\u003ea Word",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": "(Word-\u003eWord)-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:changeNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eChange the number of workers;  the first argument is a map that computes\n        the new number of workers given the old number of workers, and the\n        second argument is a callback that will be invoked with the new number\n        of workers.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echangeNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version of this request.\n\u003c/p\u003e\u003cp\u003eIf you just want to set the number of workers to some fixed value, then\n        see \u003ccode\u003e\u003ca\u003esetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(Word -\u003e Word) -\u003e (Word -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkersAsync",
        "fct-type": "method",
        "title": "changeNumberOfWorkersAsync"
      },
      "index": {
        "description": "Change the number of workers the first argument is map that computes the new number of workers given the old number of workers and the second argument is callback that will be invoked with the new number of workers See changeNumberOfWorkers for the synchronous version of this request If you just want to set the number of workers to some fixed value then see setNumberOfWorkers setNumberOfWorkersAsync",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "changeNumberOfWorkersAsync",
        "normalized": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:createWorker",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a worker with the given id \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerId -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "createWorker"
      },
      "index": {
        "description": "create worker with the given id",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "createWorker",
        "normalized": "WorkerId-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": "WorkerId-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:destroyWorker",
      "description": {
        "fct-descr": "\u003cp\u003edestroy the worker with the given id; ideally this should be\n            implemented by signaling the worker to quit and then waiting for an\n            acknowledgement\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerId -\u003e Bool -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "destroyWorker"
      },
      "index": {
        "description": "destroy the worker with the given id ideally this should be implemented by signaling the worker to quit and then waiting for an acknowledgement",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "destroyWorker",
        "normalized": "WorkerId-\u003eBool-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker",
        "signature": "WorkerId-\u003eBool-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:killAllWorkers",
      "description": {
        "fct-descr": "\u003cp\u003edestroy all of the workers in the given list in a manner that\n            ensures they all terminate promptly; this will be called at the end\n            of the run (successful or not)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "[WorkerId] -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "killAllWorkers"
      },
      "index": {
        "description": "destroy all of the workers in the given list in manner that ensures they all terminate promptly this will be called at the end of the run successful or not",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "killAllWorkers",
        "normalized": "[WorkerId]-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "All Workers",
        "signature": "[WorkerId]-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveFailureFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a failure (with the given message) has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e String -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveFailureFromWorker"
      },
      "index": {
        "description": "to be called when failure with the given message has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "receiveFailureFromWorker",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Failure From Worker",
        "signature": "worker_id-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveFinishedFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a worker has finished with the given final progress \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveFinishedFromWorker"
      },
      "index": {
        "description": "to be called when worker has finished with the given final progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "receiveFinishedFromWorker",
        "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Finished From Worker",
        "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveProgressUpdateFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a progress update has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e ProgressUpdate (ProgressFor exploration_mode) -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveProgressUpdateFromWorker"
      },
      "index": {
        "description": "to be called when progress update has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "receiveProgressUpdateFromWorker",
        "normalized": "a-\u003eProgressUpdate(ProgressFor b)-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update From Worker",
        "signature": "worker_id-\u003eProgressUpdate(ProgressFor exploration_mode)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveQuitFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a worker has quit the system and is no longer available \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveQuitFromWorker"
      },
      "index": {
        "description": "to be called when worker has quit the system and is no longer available",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "receiveQuitFromWorker",
        "normalized": "a-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Quit From Worker",
        "signature": "worker_id-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveStolenWorkloadFromWorker",
      "description": {
        "fct-descr": "\u003cp\u003eto be called when a (possibly) stolen workload has been received from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "worker_id -\u003e Maybe (StolenWorkload (ProgressFor exploration_mode)) -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
        "fct-type": "function",
        "title": "receiveStolenWorkloadFromWorker"
      },
      "index": {
        "description": "to be called when possibly stolen workload has been received from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "receiveStolenWorkloadFromWorker",
        "normalized": "a-\u003eMaybe(StolenWorkload(ProgressFor b))-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Stolen Workload From Worker",
        "signature": "worker_id-\u003eMaybe(StolenWorkload(ProgressFor exploration_mode))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:runWorkgroup",
      "description": {
        "fct-descr": "\u003cp\u003eExplores a tree using a workgroup;  this function is only intended to be\n    used by adapters where the number of workers can be changed on demand.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode-\u003e inner_state-\u003e (MessageForSupervisorReceivers exploration_mode WorkerId -\u003e WorkgroupCallbacks inner_state)-\u003e ProgressFor exploration_mode-\u003e WorkgroupControllerMonad inner_state exploration_mode ()-\u003e IO (RunOutcomeFor exploration_mode)",
        "fct-type": "function",
        "title": "runWorkgroup"
      },
      "index": {
        "description": "Explores tree using workgroup this function is only intended to be used by adapters where the number of workers can be changed on demand",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "runWorkgroup",
        "normalized": "ExplorationMode a-\u003eb-\u003e(MessageForSupervisorReceivers a WorkerId-\u003eWorkgroupCallbacks b)-\u003eProgressFor a-\u003eWorkgroupControllerMonad b a()-\u003eIO(RunOutcomeFor a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Workgroup",
        "signature": "ExplorationMode exploration_mode-\u003einner_state-\u003e(MessageForSupervisorReceivers exploration_mode WorkerId-\u003eWorkgroupCallbacks inner_state)-\u003eProgressFor exploration_mode-\u003eWorkgroupControllerMonad inner_state exploration_mode()-\u003eIO(RunOutcomeFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendProgressUpdateRequestTo",
      "description": {
        "fct-descr": "\u003cp\u003esend a progress update request to the given worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerId -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "sendProgressUpdateRequestTo"
      },
      "index": {
        "description": "send progress update request to the given worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "sendProgressUpdateRequestTo",
        "normalized": "WorkerId-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress Update Request To",
        "signature": "WorkerId-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendWorkloadStealRequestTo",
      "description": {
        "fct-descr": "\u003cp\u003esend a workload steal request to the given worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerId -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "sendWorkloadStealRequestTo"
      },
      "index": {
        "description": "send workload steal request to the given worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "sendWorkloadStealRequestTo",
        "normalized": "WorkerId-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload Steal Request To",
        "signature": "WorkerId-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendWorkloadTo",
      "description": {
        "fct-descr": "\u003cp\u003esend a workload to the given worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerId -\u003e Workload -\u003e InnerMonad inner_state ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
        "fct-type": "function",
        "title": "sendWorkloadTo"
      },
      "index": {
        "description": "send workload to the given worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "sendWorkloadTo",
        "normalized": "WorkerId-\u003eWorkload-\u003eInnerMonad a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload To",
        "signature": "WorkerId-\u003eWorkload-\u003eInnerMonad inner_state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:setNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the number of workers has been set to the desired value. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkers",
        "fct-type": "function",
        "title": "setNumberOfWorkers"
      },
      "index": {
        "description": "Like setNumberOfWorkersAsync but blocks until the number of workers has been set to the desired value",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "setNumberOfWorkers",
        "normalized": "Word-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers",
        "signature": "Word-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:setNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that the number of workers be set to the given amount, invoking the given callback when this has been done. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word -\u003e IO () -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkersAsync",
        "fct-type": "function",
        "title": "setNumberOfWorkersAsync"
      },
      "index": {
        "description": "Request that the number of workers be set to the given amount invoking the given callback when this has been done",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "setNumberOfWorkersAsync",
        "normalized": "Word-\u003eIO()-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Workers Async",
        "signature": "Word-\u003eIO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:unwrapC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RequestQueueReader exploration_mode WorkerId (WorkgroupStateMonad inner_state) α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
        "fct-type": "function",
        "title": "unwrapC"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
        "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
        "name": "unwrapC",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThere are several tasks for which a user may wish to use LogicGrowsOnTrees,\n    such as gathering up all the results in a tree or stopping as soon as the\n    first result is found. Because almost all of the infrastructure required for\n    these different modes is the same, rather than creating a different system\n    for each mode we instead re-use the same system but pass around a mode\n    parameter that dictates its behavior at various points as well as some of\n    the types in the system.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e is defined using a GADT where each constructor has a\n    different argument for \u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e's type parameter; this was\n    done so that type families can be used to specialized types depending on the\n    constructor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html",
        "fct-type": "module",
        "title": "ExplorationMode"
      },
      "index": {
        "description": "There are several tasks for which user may wish to use LogicGrowsOnTrees such as gathering up all the results in tree or stopping as soon as the first result is found Because almost all of the infrastructure required for these different modes is the same rather than creating different system for each mode we instead re-use the same system but pass around mode parameter that dictates its behavior at various points as well as some of the types in the system ExplorationMode is defined using GADT where each constructor has different argument for ExplorationMode type parameter this was done so that type families can be used to specialized types depending on the constructor",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "ExplorationMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:AllMode",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the entire tree and sum the results in all of the leaves. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#AllMode",
        "fct-type": "data",
        "title": "AllMode"
      },
      "index": {
        "description": "Explore the entire tree and sum the results in all of the leaves",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "AllMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "All Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ExplorationMode",
      "description": {
        "fct-descr": "\u003cp\u003eA type indicating the mode of the exploration.  Note that this is a GADT for\n    which the type parameter is unique to each constructor in order to allow\n    associated types to be specialized based on the value.\n\u003c/p\u003e\u003cp\u003eUnfortunately Haddock does not seem to support documenting the constructors\n    of a GADT, so the documentation for each constructor is located at the type\n    it is tagged with, all of which are defined after the \u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e\n    type.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
        "fct-type": "data",
        "title": "ExplorationMode"
      },
      "index": {
        "description": "type indicating the mode of the exploration Note that this is GADT for which the type parameter is unique to each constructor in order to allow associated types to be specialized based on the value Unfortunately Haddock does not seem to support documenting the constructors of GADT so the documentation for each constructor is located at the type it is tagged with all of which are defined after the ExplorationMode type",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "ExplorationMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FinalResultFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the final result of exploring the tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "FinalResultFor",
        "fct-type": "function",
        "title": "FinalResultFor"
      },
      "index": {
        "description": "The type of the final result of exploring the tree",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FinalResultFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Final Result For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FirstMode",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the tree until a result is found, and if so then stop. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FirstMode",
        "fct-type": "data",
        "title": "FirstMode"
      },
      "index": {
        "description": "Explore the tree until result is found and if so then stop",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FirstMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "First Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FoundModeUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the tree, summing the results, until a condition has been met;\n    \u003ccode\u003ePull\u003c/code\u003e means that each worker's results will be kept and summed locally\n    until a request for them has been received from the supervisor, which means\n    that there might be a period of time where the collectively found results\n    meet the condition but the system is unaware of this as they are scattered\n    amongst the workers.\n\u003c/p\u003e\u003cp\u003eNOTE:  If you use this mode then you are responsible for ensuring that a\n           global progress update happens on a regular basis in order to pull\n           the results in from the workers and check to see if the condition has\n           been met;  if you do not do this then the run will not terminate\n           until the tree has been fully explored.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FoundModeUsingPull",
        "fct-type": "data",
        "title": "FoundModeUsingPull"
      },
      "index": {
        "description": "Explore the tree summing the results until condition has been met Pull means that each worker results will be kept and summed locally until request for them has been received from the supervisor which means that there might be period of time where the collectively found results meet the condition but the system is unaware of this as they are scattered amongst the workers NOTE If you use this mode then you are responsible for ensuring that global progress update happens on regular basis in order to pull the results in from the workers and check to see if the condition has been met if you do not do this then the run will not terminate until the tree has been fully explored",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FoundModeUsingPull",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Found Mode Using Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FoundModeUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eFoundModeUsingPull\u003c/a\u003e\u003c/code\u003e, but pushes each result to the supervisor as it\n    is found rather than summing them in the worker until they are requested by\n    the supervisor, which guarantees that the system will recognize when the\n    condition has been met as soon as final result needed was found but has the\n    downside that if there are a large number of results needed then sending\n    each one could be much more costly then summing them locally and sending the\n    current total on a regular basis to the supervisor.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FoundModeUsingPush",
        "fct-type": "data",
        "title": "FoundModeUsingPush"
      },
      "index": {
        "description": "Same as FoundModeUsingPull but pushes each result to the supervisor as it is found rather than summing them in the worker until they are requested by the supervisor which guarantees that the system will recognize when the condition has been met as soon as final result needed was found but has the downside that if there are large number of results needed then sending each one could be much more costly then summing them locally and sending the current total on regular basis to the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FoundModeUsingPush",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Found Mode Using Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:HasExplorationMode",
      "description": {
        "fct-descr": "\u003cp\u003eThis class indicates that a monad has information about the current\n    exploration mode tag type that can be extracted from it.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#HasExplorationMode",
        "fct-type": "class",
        "title": "HasExplorationMode"
      },
      "index": {
        "description": "This class indicates that monad has information about the current exploration mode tag type that can be extracted from it",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "HasExplorationMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Has Exploration Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ProgressFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of progress, which keeps track of how much of the tree has already\n    been explored.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgressFor",
        "fct-type": "function",
        "title": "ProgressFor"
      },
      "index": {
        "description": "The type of progress which keeps track of how much of the tree has already been explored",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "ProgressFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ResultFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe result type of the tree, i.e. the type of values at the leaves. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ResultFor",
        "fct-type": "function",
        "title": "ResultFor"
      },
      "index": {
        "description": "The result type of the tree i.e the type of values at the leaves",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "ResultFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Result For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:WorkerFinishedProgressFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe progress type returned by a worker that has finished. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerFinishedProgressFor",
        "fct-type": "function",
        "title": "WorkerFinishedProgressFor"
      },
      "index": {
        "description": "The progress type returned by worker that has finished",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "WorkerFinishedProgressFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Finished Progress For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:WorkerIntermediateValueFor",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the intermediate value being maintained internally by the worker. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WorkerIntermediateValueFor",
        "fct-type": "function",
        "title": "WorkerIntermediateValueFor"
      },
      "index": {
        "description": "The type of the intermediate value being maintained internally by the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "WorkerIntermediateValueFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Intermediate Value For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:AllMode",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode (AllMode result)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
        "fct-type": "function",
        "title": "AllMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "AllMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "All Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FirstMode",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode (FirstMode result)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
        "fct-type": "function",
        "title": "FirstMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FirstMode",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "First Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FoundModeUsingPull",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool) -\u003e ExplorationMode (FoundModeUsingPull result)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
        "fct-type": "function",
        "title": "FoundModeUsingPull"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FoundModeUsingPull",
        "normalized": "(a-\u003eBool)-\u003eExplorationMode(FoundModeUsingPull a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Found Mode Using Pull",
        "signature": "(result-\u003eBool)-\u003eExplorationMode(FoundModeUsingPull result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FoundModeUsingPush",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool) -\u003e ExplorationMode (FoundModeUsingPush result)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
        "fct-type": "function",
        "title": "FoundModeUsingPush"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "FoundModeUsingPush",
        "normalized": "(a-\u003eBool)-\u003eExplorationMode(FoundModeUsingPush a)",
        "package": "LogicGrowsOnTrees",
        "partial": "Found Mode Using Push",
        "signature": "(result-\u003eBool)-\u003eExplorationMode(FoundModeUsingPush result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:checkpointFromIntermediateProgress",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e component from a progress value. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#checkpointFromIntermediateProgress",
        "fct-type": "function",
        "title": "checkpointFromIntermediateProgress"
      },
      "index": {
        "description": "Extracts the Checkpoint component from progress value",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "checkpointFromIntermediateProgress",
        "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eCheckpoint",
        "package": "LogicGrowsOnTrees",
        "partial": "From Intermediate Progress",
        "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eCheckpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:initialProgress",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial progress at the start of the exploration. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#initialProgress",
        "fct-type": "function",
        "title": "initialProgress"
      },
      "index": {
        "description": "The initial progress at the start of the exploration",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "initialProgress",
        "normalized": "ExplorationMode a-\u003eProgressFor a",
        "package": "LogicGrowsOnTrees",
        "partial": "Progress",
        "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:initialWorkerIntermediateValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial intermediate value for the worker. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ExplorationMode exploration_mode -\u003e WorkerIntermediateValueFor exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#initialWorkerIntermediateValue",
        "fct-type": "function",
        "title": "initialWorkerIntermediateValue"
      },
      "index": {
        "description": "The initial intermediate value for the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
        "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
        "name": "initialWorkerIntermediateValue",
        "normalized": "ExplorationMode a-\u003eWorkerIntermediateValueFor a",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Intermediate Value",
        "signature": "ExplorationMode exploration_mode-\u003eWorkerIntermediateValueFor exploration_mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a framework for creating a program that explores a tree\n    in parallel. There are two families of functions that are available. The\n    first is more general and allows you to construct your tree using arguments\n    given on the command-line; they are described in the section linked to by\n    \u003ca\u003eLogicGrowsOnTrees.Parallel.Main\u003c/a\u003e. If you do not need run-time\n    information via a command-line argument to construct the tree, then you may\n    prefer the simpler family of functions which are described in the section\n    linked to by \u003ca\u003eLogicGrowsOnTrees.Parallel.Main\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAll of this functionality is adapter independent, so if you want to use a\n    different back end you only need to change the driver argument and\n    recompile.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "This module provides framework for creating program that explores tree in parallel There are two families of functions that are available The first is more general and allows you to construct your tree using arguments given on the command-line they are described in the section linked to by LogicGrowsOnTrees.Parallel.Main If you do not need run-time information via command-line argument to construct the tree then you may prefer the simpler family of functions which are described in the section linked to by LogicGrowsOnTrees.Parallel.Main All of this functionality is adapter independent so if you want to use different back end you only need to change the driver argument and recompile",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Main",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:Driver",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDriver\u003c/a\u003e\u003c/code\u003e is the core type that abstracts the various adapters behind a\n    common interface that can be invoked by the main functions; it specifies a\n    function that is called to start the run with a set of parameters specified\n    in \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Unfortunately in haddock the type signature below can be difficult to read\n    because it puts all of the type on a single line; the type is essentially\n    just a map from \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eresult_monad ()\u003c/code\u003e, but involving a\n    bunch of type variables and some constraints on them. It might be easier to\n    click the link to go to the source.)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003econtroller_monad\u003c/code\u003e type parameter is within an existential\n    type; this is because the user of the driver should not need to know what it\n    is.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#Driver",
        "fct-type": "data",
        "title": "Driver"
      },
      "index": {
        "description": "The Driver is the core type that abstracts the various adapters behind common interface that can be invoked by the main functions it specifies function that is called to start the run with set of parameters specified in DriverParameters Unfortunately in haddock the type signature below can be difficult to read because it puts all of the type on single line the type is essentially just map from DriverParameters to result monad but involving bunch of type variables and some constraints on them It might be easier to click the link to go to the source Note that the controller monad type parameter is within an existential type this is because the user of the driver should not need to know what it is",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Driver",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Driver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:DriverParameters",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e type specifies the information that is given to the\n    driver in the main functions.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "data",
        "title": "DriverParameters"
      },
      "index": {
        "description": "The DriverParameters type specifies the information that is given to the driver in the main functions",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "DriverParameters",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Driver Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunOutcome",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "data",
        "title": "RunOutcome"
      },
      "index": {
        "description": "type that represents the outcome of run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunOutcomeFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eRunOutcome\u003c/a\u003e\u003c/code\u003e associated with the given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcomeFor",
        "fct-type": "type",
        "title": "RunOutcomeFor"
      },
      "index": {
        "description": "convenient type alias for the type of RunOutcome associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "RunOutcomeFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "data",
        "title": "RunStatistics"
      },
      "index": {
        "description": "Statistics gathered about the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:TerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "data",
        "title": "TerminationReason"
      },
      "index": {
        "description": "type that represents the reason why run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "TerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:TerminationReasonFor",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eTerminationReason\u003c/a\u003e\u003c/code\u003e associated with the given exploration mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReasonFor",
        "fct-type": "type",
        "title": "TerminationReasonFor"
      },
      "index": {
        "description": "convenient type alias for the type of TerminationReason associated with the given exploration mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "TerminationReasonFor",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Aborted",
      "description": {
        "fct-descr": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Aborted progress",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Aborted"
      },
      "index": {
        "description": "the run was aborted with the given progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Aborted",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Completed",
      "description": {
        "fct-descr": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Completed final_result",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Completed"
      },
      "index": {
        "description": "the run completed with the given final result",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Completed",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Completed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Driver",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "DriverParameters shared_configuration supervisor_configuration m n exploration_mode controller_monad -\u003e result_monad ())",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#Driver",
        "fct-type": "function",
        "title": "Driver"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Driver",
        "normalized": "DriverParameters a b c d e f-\u003eg())",
        "package": "LogicGrowsOnTrees",
        "partial": "Driver",
        "signature": "DriverParameters shared_configuration supervisor_configuration m n exploration_mode controller_monad-\u003eresult_monad())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:DriverParameters",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "DriverParameters",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "DriverParameters"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "DriverParameters",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Driver Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Failure",
      "description": {
        "fct-descr": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Failure progress String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "the run failed with the given progress for the given reason",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "Failure",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:RunOutcome",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunOutcome",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "RunOutcome"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:RunStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "RunStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructController",
      "description": {
        "fct-descr": "\u003cp\u003econstruct the controller, which runs in the supervisor and handles things like periodic checkpointing \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e supervisor_configuration -\u003e controller_monad exploration_mode ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "constructController"
      },
      "index": {
        "description": "construct the controller which runs in the supervisor and handles things like periodic checkpointing",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "constructController",
        "normalized": "a-\u003eb-\u003ec d()",
        "package": "LogicGrowsOnTrees",
        "partial": "Controller",
        "signature": "shared_configuration-\u003esupervisor_configuration-\u003econtroller_monad exploration_mode()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructExplorationMode",
      "description": {
        "fct-descr": "\u003cp\u003econstructs the exploration mode given the shared configuration \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e ExplorationMode exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "constructExplorationMode"
      },
      "index": {
        "description": "constructs the exploration mode given the shared configuration",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "constructExplorationMode",
        "normalized": "a-\u003eExplorationMode b",
        "package": "LogicGrowsOnTrees",
        "partial": "Exploration Mode",
        "signature": "shared_configuration-\u003eExplorationMode exploration_mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructTree",
      "description": {
        "fct-descr": "\u003cp\u003econstructs the tree given the shared configuration \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e TreeT m (ResultFor exploration_mode)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "constructTree"
      },
      "index": {
        "description": "constructs the tree given the shared configuration",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "constructTree",
        "normalized": "a-\u003eTreeT b(ResultFor c)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "shared_configuration-\u003eTreeT m(ResultFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:extractRunOutcomeFromSupervisorOutcome",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSupervisorOutcome\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eRunOutcome\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "SupervisorOutcome fv ip worker_id -\u003e RunOutcome ip fv",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#extractRunOutcomeFromSupervisorOutcome",
        "fct-type": "function",
        "title": "extractRunOutcomeFromSupervisorOutcome"
      },
      "index": {
        "description": "Converts SupervisorOutcome to RunOutcome",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "extractRunOutcomeFromSupervisorOutcome",
        "normalized": "SupervisorOutcome a b c-\u003eRunOutcome b a",
        "package": "LogicGrowsOnTrees",
        "partial": "Run Outcome From Supervisor Outcome",
        "signature": "SupervisorOutcome fv ip worker_id-\u003eRunOutcome ip fv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:genericMain",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just like the previous functions, except that it is generalized over\n    all tree purities and exploration modes.  (In fact, the specialized\n    functions are just wrappers around this function.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e ExplorationMode exploration_mode)-\u003e Purity m n-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m n exploration_mode-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcomeFor exploration_mode -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "genericMain"
      },
      "index": {
        "description": "This is just like the previous functions except that it is generalized over all tree purities and exploration modes In fact the specialized functions are just wrappers around this function",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "genericMain",
        "normalized": "(a-\u003eExplorationMode b)-\u003ePurity c d-\u003eDriver e(SharedConfiguration a)SupervisorConfiguration c d b-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcomeFor b-\u003eIO())-\u003e(a-\u003eTreeT c f)-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main",
        "signature": "(tree_configuration-\u003eExplorationMode exploration_mode)-\u003ePurity m n-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m n exploration_mode-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcomeFor exploration_mode-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:getStartingProgress",
      "description": {
        "fct-descr": "\u003cp\u003ein the supervisor, gets the starting progress for the exploration;  this is where a checkpoint is loaded, if one exists \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e supervisor_configuration -\u003e IO (ProgressFor exploration_mode)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "getStartingProgress"
      },
      "index": {
        "description": "in the supervisor gets the starting progress for the exploration this is where checkpoint is loaded if one exists",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "getStartingProgress",
        "normalized": "a-\u003eb-\u003eIO(ProgressFor c)",
        "package": "LogicGrowsOnTrees",
        "partial": "Starting Progress",
        "signature": "shared_configuration-\u003esupervisor_configuration-\u003eIO(ProgressFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:initializeGlobalState",
      "description": {
        "fct-descr": "\u003cp\u003eaction that initializes the global state of each process --- that\n            is, once for each running instance of the executable, which\n            depending on the adapter might be a supervisor, a worker, or both\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "initializeGlobalState"
      },
      "index": {
        "description": "action that initializes the global state of each process that is once for each running instance of the executable which depending on the adapter might be supervisor worker or both",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "initializeGlobalState",
        "normalized": "a-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Global State",
        "signature": "shared_configuration-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTree",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel; the results in the leaves will be\n    summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTree"
      },
      "index": {
        "description": "Explore the given pure tree in parallel the results in the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTree",
        "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration Identity IO(AllMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome(Progress c)c-\u003eIO())-\u003e(b-\u003eTree c)-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree",
        "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIO",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel; the results in the leaves will be\n    summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeIO"
      },
      "index": {
        "description": "Explore the given IO tree in parallel the results in the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeIO",
        "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration IO IO(AllMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome(Progress c)c-\u003eIO())-\u003e(b-\u003eTreeIO c)-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree IO",
        "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeIOUntilFirst"
      },
      "index": {
        "description": "Explore the given IO tree in parallel stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeIOUntilFirst",
        "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration IO IO(FirstMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome Checkpoint(Maybe(Progress c))-\u003eIO())-\u003e(b-\u003eTreeIO c)-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree IOUntil First",
        "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeIOUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeIOUntilFoundUsingPull",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration IO IO(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeIO b)-\u003ec()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree IOUntil Found Using Pull",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeIOUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeIOUntilFoundUsingPush",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration IO IO(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeIO b)-\u003ec()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree IOUntil Found Using Push",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpure",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel; the results in all of the leaves\n    will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeImpure"
      },
      "index": {
        "description": "Explore the given impure tree in parallel the results in all of the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeImpure",
        "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration f)SupervisorConfiguration c c(AllMode g)-\u003eTerm f-\u003eTermInfo-\u003e(f-\u003eRunOutcome(Progress g)g-\u003eIO())-\u003e(f-\u003eTreeT c g)-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Impure",
        "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeImpureUntilFirst"
      },
      "index": {
        "description": "Explore the given impure tree in parallel stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeImpureUntilFirst",
        "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration f)SupervisorConfiguration c c(FirstMode g)-\u003eTerm f-\u003eTermInfo-\u003e(f-\u003eRunOutcome Checkpoint(Maybe(Progress g))-\u003eIO())-\u003e(f-\u003eTreeT c g)-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Impure Until First",
        "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeImpureUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeImpureUntilFoundUsingPull",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e(c d e f-\u003eIO f)-\u003eDriver g(SharedConfiguration a)SupervisorConfiguration e e(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeT e b)-\u003eg()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Impure Until Found Using Pull",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeImpureUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeImpureUntilFoundUsingPush",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e(c d e f-\u003eIO f)-\u003eDriver g(SharedConfiguration a)SupervisorConfiguration e e(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeT e b)-\u003eg()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Impure Until Found Using Push",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeUntilFirst"
      },
      "index": {
        "description": "Explore the given pure tree in parallel stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeUntilFirst",
        "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration Identity IO(FirstMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome Checkpoint(Maybe(Progress c))-\u003eIO())-\u003e(b-\u003eTree c)-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Until First",
        "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeUntilFoundUsingPull",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration Identity IO(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTree b)-\u003ec()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Until Found Using Pull",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
        "fct-type": "function",
        "title": "mainForExploreTreeUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainForExploreTreeUntilFoundUsingPush",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration Identity IO(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTree b)-\u003ec()",
        "package": "LogicGrowsOnTrees",
        "partial": "For Explore Tree Until Found Using Push",
        "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainParser",
      "description": {
        "fct-descr": "\u003cp\u003eParse the command line options using the given term and term info (the\n    latter of which has the program name added to it);  if successful return the\n    result, otherwise throw an exception.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Term α -\u003e TermInfo -\u003e IO α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#mainParser",
        "fct-type": "function",
        "title": "mainParser"
      },
      "index": {
        "description": "Parse the command line options using the given term and term info the latter of which has the program name added to it if successful return the result otherwise throw an exception",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "mainParser",
        "normalized": "Term a-\u003eTermInfo-\u003eIO a",
        "package": "LogicGrowsOnTrees",
        "partial": "Parser",
        "signature": "Term α-\u003eTermInfo-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:notifyTerminated",
      "description": {
        "fct-descr": "\u003cp\u003ein the supervisor, responds to the termination of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "shared_configuration -\u003e supervisor_configuration -\u003e RunOutcomeFor exploration_mode -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "notifyTerminated"
      },
      "index": {
        "description": "in the supervisor responds to the termination of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "notifyTerminated",
        "normalized": "a-\u003eb-\u003eRunOutcomeFor c-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "Terminated",
        "signature": "shared_configuration-\u003esupervisor_configuration-\u003eRunOutcomeFor exploration_mode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:program_info",
      "description": {
        "fct-descr": "\u003cp\u003eprogram information;  should at a minimum put a brief description of the program in the \u003ccode\u003e\u003ca\u003etermDoc\u003c/a\u003e\u003c/code\u003e field \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TermInfo",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "program_info"
      },
      "index": {
        "description": "program information should at minimum put brief description of the program in the termDoc field",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "program_info",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:purity",
      "description": {
        "fct-descr": "\u003cp\u003ethe purity of the constructed tree \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Purity m n",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "purity"
      },
      "index": {
        "description": "the purity of the constructed tree",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "purity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runAvailableWorkloadStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAvailableWorkloadStatistics"
      },
      "index": {
        "description": "statistics for the number of available workloads waiting for worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runAvailableWorkloadStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Available Workload Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runAverageTimePerCall",
      "description": {
        "fct-descr": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runAverageTimePerCall"
      },
      "index": {
        "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runAverageTimePerCall",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Average Time Per Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runEndTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runEndTime"
      },
      "index": {
        "description": "the end time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runEndTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "End Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runInstantaneousWorkloadRequestRateStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadRequestRateStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runInstantaneousWorkloadRequestRateStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Request Rate Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runInstantaneousWorkloadStealTimeStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadStealTimeStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runInstantaneousWorkloadStealTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Instantaneous Workload Steal Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runNumberOfCalls",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runNumberOfCalls"
      },
      "index": {
        "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runNumberOfCalls",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Number Of Calls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStartTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!UTCTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStartTime"
      },
      "index": {
        "description": "the start time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runStartTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics gathered during the run, useful if the system is not scaling with the number of workers as it should \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RunStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "runStatistics"
      },
      "index": {
        "description": "statistics gathered during the run useful if the system is not scaling with the number of workers as it should",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStealWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!IndependentMeasurementsStatistics",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runStealWaitTimes"
      },
      "index": {
        "description": "statistics for the time needed to steal workload from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runStealWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Steal Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runSupervisorMonadOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorMonadOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runSupervisorMonadOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Monad Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runSupervisorOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runSupervisorOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runSupervisorOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Supervisor Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003ethe reason why the run terminated \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TerminationReason progress final_result",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
        "fct-type": "function",
        "title": "runTerminationReason"
      },
      "index": {
        "description": "the reason why the run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWaitingWorkerStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWaitingWorkerStatistics"
      },
      "index": {
        "description": "statistics for the number of workers waiting for workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runWaitingWorkerStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Waiting Worker Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWallTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!NominalDiffTime",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWallTime"
      },
      "index": {
        "description": "the wall time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runWallTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Wall Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWorkerOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Float",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerOccupation"
      },
      "index": {
        "description": "the fraction of the total time that workers were occupied",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runWorkerOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWorkerWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!(FunctionOfTimeStatistics NominalDiffTime)",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
        "fct-type": "function",
        "title": "runWorkerWaitTimes"
      },
      "index": {
        "description": "statistics for how long it took for workers to obtain workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "runWorkerWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Worker Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:shared_configuration_term",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration information shared between the supervisor and the worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Term shared_configuration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "shared_configuration_term"
      },
      "index": {
        "description": "configuration information shared between the supervisor and the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "shared_configuration_term",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTree",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel; the results\n    in the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTree"
      },
      "index": {
        "description": "Explore the given pure tree in parallel the results in the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTree",
        "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration Identity IO(AllMode b)-\u003e(RunOutcome(Progress b)b-\u003eIO())-\u003eTree b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree",
        "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTree result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIO",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel;\n    the results in the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeIO"
      },
      "index": {
        "description": "Explore the given IO tree in parallel the results in the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeIO",
        "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration IO IO(AllMode b)-\u003e(RunOutcome(Progress b)b-\u003eIO())-\u003eTreeIO b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree IO",
        "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given tree in parallel in IO, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeIOUntilFirst"
      },
      "index": {
        "description": "Explore the given tree in parallel in IO stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeIOUntilFirst",
        "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration IO IO(FirstMode b)-\u003e(RunOutcome Checkpoint(Maybe(Progress b))-\u003eIO())-\u003eTreeIO b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree IOUntil First",
        "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeIOUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeIOUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeIO a-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree IOUntil Found Using Pull",
        "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeIOUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeIOUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeIO a-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree IOUntil Found Using Push",
        "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpure",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel; the\n    results in all of the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeImpure"
      },
      "index": {
        "description": "Explore the given impure tree in parallel the results in all of the leaves will be summed up using the Monoid instance",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeImpure",
        "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration())SupervisorConfiguration c c(AllMode f)-\u003e(RunOutcome(Progress f)f-\u003eIO())-\u003eTreeT c f-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Impure",
        "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeImpureUntilFirst"
      },
      "index": {
        "description": "Explore the given impure tree in parallel stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeImpureUntilFirst",
        "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration())SupervisorConfiguration c c(FirstMode f)-\u003e(RunOutcome Checkpoint(Maybe(Progress f))-\u003eIO())-\u003eTreeT c f-\u003ee()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Impure Until First",
        "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeImpureUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeImpureUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eDriver f(SharedConfiguration())SupervisorConfiguration d d(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeT d a-\u003ef()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Impure Until Found Using Pull",
        "signature": "(result-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeImpureUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeImpureUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eDriver f(SharedConfiguration())SupervisorConfiguration d d(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeT d a-\u003ef()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Impure Until Found Using Push",
        "signature": "(result-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeUntilFirst"
      },
      "index": {
        "description": "Explore the given pure tree in parallel stopping if solution is found",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeUntilFirst",
        "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration Identity IO(FirstMode b)-\u003e(RunOutcome Checkpoint(Maybe(Progress b))-\u003eIO())-\u003eTree b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Until First",
        "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFoundUsingPull",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeUntilFoundUsingPull"
      },
      "index": {
        "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeUntilFoundUsingPull",
        "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTree a-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Until Found Using Pull",
        "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFoundUsingPush",
      "description": {
        "fct-descr": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
        "fct-type": "function",
        "title": "simpleMainForExploreTreeUntilFoundUsingPush"
      },
      "index": {
        "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "simpleMainForExploreTreeUntilFoundUsingPush",
        "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTree a-\u003eb()",
        "package": "LogicGrowsOnTrees",
        "partial": "Main For Explore Tree Until Found Using Push",
        "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:supervisor_configuration_term",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration information specific to the supervisor \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Main",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Term supervisor_configuration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
        "fct-type": "function",
        "title": "supervisor_configuration_term"
      },
      "index": {
        "description": "configuration information specific to the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Main",
        "module": "LogicGrowsOnTrees.Parallel.Main",
        "name": "supervisor_configuration_term",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains types that represent the purity of a tree, which is\n    either pure, impure, or IO (a special case of impure).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Purity",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Purity.html",
        "fct-type": "module",
        "title": "Purity"
      },
      "index": {
        "description": "This module contains types that represent the purity of tree which is either pure impure or IO special case of impure",
        "hierarchy": "LogicGrowsOnTrees Parallel Purity",
        "module": "LogicGrowsOnTrees.Parallel.Purity",
        "name": "Purity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Purity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#t:Purity",
      "description": {
        "fct-descr": "\u003cp\u003eThe purity of a tree, which can be either \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e (for pure trees) or\n    \u003ccode\u003e\u003ca\u003eImpureAtopIO\u003c/a\u003e\u003c/code\u003e (for impure trees); the latter case is restricted to monads\n    that are instances of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e and for which there exists a way to convert\n    the monad into an IO action.\n\u003c/p\u003e\u003cp\u003eThe two kind arguments, \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e, correspond to respectively the monad in\n    on top of which the \u003ccode\u003eTreeT\u003c/code\u003e monad transformer is stacked and the monad in\n    which the worker will be run.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Purity",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
        "fct-type": "data",
        "title": "Purity"
      },
      "index": {
        "description": "The purity of tree which can be either Pure for pure trees or ImpureAtopIO for impure trees the latter case is restricted to monads that are instances of MonadIO and for which there exists way to convert the monad into an IO action The two kind arguments and correspond to respectively the monad in on top of which the TreeT monad transformer is stacked and the monad in which the worker will be run",
        "hierarchy": "LogicGrowsOnTrees Parallel Purity",
        "module": "LogicGrowsOnTrees.Parallel.Purity",
        "name": "Purity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Purity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:ImpureAtopIO",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Purity",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(forall β.  m β -\u003e IO β) -\u003e Purity m m",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
        "fct-type": "function",
        "title": "ImpureAtopIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Purity",
        "module": "LogicGrowsOnTrees.Parallel.Purity",
        "name": "ImpureAtopIO",
        "normalized": "(a b c d-\u003eIO d)-\u003ePurity c c",
        "package": "LogicGrowsOnTrees",
        "partial": "Impure Atop IO",
        "signature": "(forall β. m β-\u003eIO β)-\u003ePurity m m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:Pure",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Purity",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Purity Identity IO",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Purity",
        "module": "LogicGrowsOnTrees.Parallel.Purity",
        "name": "Pure",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:io_purity",
      "description": {
        "fct-descr": "\u003cp\u003eThe purity of trees in the IO monad. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Purity",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Purity IO IO",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Purity.html#io_purity",
        "fct-type": "function",
        "title": "io_purity"
      },
      "index": {
        "description": "The purity of trees in the IO monad",
        "hierarchy": "LogicGrowsOnTrees Parallel Purity",
        "module": "LogicGrowsOnTrees.Parallel.Purity",
        "name": "io_purity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules contains functionality relating to paths through trees. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "This modules contains functionality relating to paths through trees",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "Path",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:BranchChoice",
      "description": {
        "fct-descr": "\u003cp\u003eA choice at a branch point to take either the left branch or the right branch. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
        "fct-type": "data",
        "title": "BranchChoice"
      },
      "index": {
        "description": "choice at branch point to take either the left branch or the right branch",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "BranchChoice",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Branch Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of \u003ccode\u003e\u003ca\u003eStep\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "sequence of Step",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "Path",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:Step",
      "description": {
        "fct-descr": "\u003cp\u003eA step in a path through a tree, which can either pass through a point with\n    a cached result or take a choice to go left or right at a branch point.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "step in path through tree which can either pass through point with cached result or take choice to go left or right at branch point",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "Step",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:WalkError",
      "description": {
        "fct-descr": "\u003cp\u003eThis exception is thrown whenever a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is sent down a path which\n    is incompatible with it.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#WalkError",
        "fct-type": "data",
        "title": "WalkError"
      },
      "index": {
        "description": "This exception is thrown whenever Tree is sent down path which is incompatible with it",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "WalkError",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Walk Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:CacheStep",
      "description": {
        "fct-descr": "\u003cp\u003eStep through a cache point \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "CacheStep ByteString",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#Step",
        "fct-type": "function",
        "title": "CacheStep"
      },
      "index": {
        "description": "Step through cache point",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "CacheStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Cache Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:ChoiceStep",
      "description": {
        "fct-descr": "\u003cp\u003eStep through a choice point \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ChoiceStep BranchChoice",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#Step",
        "fct-type": "function",
        "title": "ChoiceStep"
      },
      "index": {
        "description": "Step through choice point",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "ChoiceStep",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Choice Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:LeftBranch",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "LeftBranch",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
        "fct-type": "function",
        "title": "LeftBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "LeftBranch",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Left Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:PastTreeIsInconsistentWithPresentTree",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that a choice step in a path coincided with a cache point in\n        a tree, or vice versa.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "PastTreeIsInconsistentWithPresentTree",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#WalkError",
        "fct-type": "function",
        "title": "PastTreeIsInconsistentWithPresentTree"
      },
      "index": {
        "description": "Indicates that choice step in path coincided with cache point in tree or vice versa",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "PastTreeIsInconsistentWithPresentTree",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Past Tree Is Inconsistent With Present Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:RightBranch",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "RightBranch",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
        "fct-type": "function",
        "title": "RightBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "RightBranch",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Right Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:TreeEndedBeforeEndOfWalk",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that a path is too long for a given tree --- that is, the walk\n        hit a leaf (or a null) before the end of the path was reached.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeEndedBeforeEndOfWalk",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#WalkError",
        "fct-type": "function",
        "title": "TreeEndedBeforeEndOfWalk"
      },
      "index": {
        "description": "Indicates that path is too long for given tree that is the walk hit leaf or null before the end of the path was reached",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "TreeEndedBeforeEndOfWalk",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Ended Before End Of Walk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:oppositeBranchChoiceOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the opposite of the given branch choice. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "BranchChoice -\u003e BranchChoice",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#oppositeBranchChoiceOf",
        "fct-type": "function",
        "title": "oppositeBranchChoiceOf"
      },
      "index": {
        "description": "Returns the opposite of the given branch choice",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "oppositeBranchChoiceOf",
        "normalized": "BranchChoice-\u003eBranchChoice",
        "package": "LogicGrowsOnTrees",
        "partial": "Branch Choice Of",
        "signature": "BranchChoice-\u003eBranchChoice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:sendTreeDownPath",
      "description": {
        "fct-descr": "\u003cp\u003eFollows a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to a particular subtree;  the\n    main use case of this function is for a processor which has been given a\n    particular subtree as its workload to zoom in on that subtree. The way this\n    function works is as follows: as long as the remaining path is non-empty, it\n    explores the \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e until it encounters either a cache point or a choice\n    point; in the former case the path supplies the cached value in the\n    \u003ccode\u003e\u003ca\u003eCacheStep\u003c/a\u003e\u003c/code\u003e constructor, and in the latter case the path supplies the branch\n    to take in the \u003ccode\u003e\u003ca\u003eChoiceStep\u003c/a\u003e\u003c/code\u003e constructor; when the remaining path is empty\n    then the resulting \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eWARNING: This function is \u003cem\u003enot\u003c/em\u003e valid for all inputs; it makes the\n    assumption that the given \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e has been derived from the given \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e so\n    that the path will always encountered choice points exactly when the tree\n    does and likewise for cache points. Furthermore, the path must not run out\n    before the tree hits a leaf. If any of these conditions is violated, a\n    \u003ccode\u003e\u003ca\u003eWalkError\u003c/a\u003e\u003c/code\u003e exception will be thrown; in fact, you should hope than\n    exception is thrown because it will let you know that there is a bug your\n    code as the alternative is that you accidently give it a path that is not\n    derived from the given tree but which coincidentally matches it which means\n    that it will silently return a nonsensical result. Having said all that, you\n    should almost never need to worry about this possibility in practice because\n    there will normally be only one tree in use at a time and all paths in use\n    will have come from that tree.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path -\u003e Tree α -\u003e Tree α",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#sendTreeDownPath",
        "fct-type": "function",
        "title": "sendTreeDownPath"
      },
      "index": {
        "description": "Follows Path through Tree to particular subtree the main use case of this function is for processor which has been given particular subtree as its workload to zoom in on that subtree The way this function works is as follows as long as the remaining path is non-empty it explores the Tree until it encounters either cache point or choice point in the former case the path supplies the cached value in the CacheStep constructor and in the latter case the path supplies the branch to take in the ChoiceStep constructor when the remaining path is empty then the resulting Tree is returned WARNING This function is not valid for all inputs it makes the assumption that the given Path has been derived from the given Tree so that the path will always encountered choice points exactly when the tree does and likewise for cache points Furthermore the path must not run out before the tree hits leaf If any of these conditions is violated WalkError exception will be thrown in fact you should hope than exception is thrown because it will let you know that there is bug your code as the alternative is that you accidently give it path that is not derived from the given tree but which coincidentally matches it which means that it will silently return nonsensical result Having said all that you should almost never need to worry about this possibility in practice because there will normally be only one tree in use at time and all paths in use will have come from that tree",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "sendTreeDownPath",
        "normalized": "Path-\u003eTree a-\u003eTree a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Down Path",
        "signature": "Path-\u003eTree α-\u003eTree α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:sendTreeTDownPath",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esendTreeDownPath\u003c/a\u003e\u003c/code\u003e, but for impure trees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Path",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path -\u003e TreeT m α -\u003e m (TreeT m α)",
        "fct-source": "src/LogicGrowsOnTrees-Path.html#sendTreeTDownPath",
        "fct-type": "function",
        "title": "sendTreeTDownPath"
      },
      "index": {
        "description": "Like sendTreeDownPath but for impure trees",
        "hierarchy": "LogicGrowsOnTrees Path",
        "module": "LogicGrowsOnTrees.Path",
        "name": "sendTreeTDownPath",
        "normalized": "Path-\u003eTreeT a b-\u003ea(TreeT a b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TDown Path",
        "signature": "Path-\u003eTreeT m α-\u003em(TreeT m α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a couple of utility functions for sending and receiving\n    \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able data over a handle. Because the size of the serialized\n    value can depend on the value being sent, these functions employ a protocol\n    in which first the size of the serialized data is sent as a 64-bit\n    big-endian word, and then the serialized data itself is sent.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html",
        "fct-type": "module",
        "title": "Handle"
      },
      "index": {
        "description": "This module contains couple of utility functions for sending and receiving Serialize able data over handle Because the size of the serialized value can depend on the value being sent these functions employ protocol in which first the size of the serialized data is sent as bit big-endian word and then the serialized data itself is sent",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "Handle",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#t:ConnectionLost",
      "description": {
        "fct-descr": "\u003cp\u003eThis exception is thrown when the connection has been lost. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
        "fct-type": "data",
        "title": "ConnectionLost"
      },
      "index": {
        "description": "This exception is thrown when the connection has been lost",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "ConnectionLost",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:ConnectionLost",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ConnectionLost",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
        "fct-type": "function",
        "title": "ConnectionLost"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "ConnectionLost",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:filterEOFExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces EOF \u003ccode\u003eIOException\u003c/code\u003es with the \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e exception. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#filterEOFExceptions",
        "fct-type": "function",
        "title": "filterEOFExceptions"
      },
      "index": {
        "description": "Replaces EOF IOException with the ConnectionLost exception",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "filterEOFExceptions",
        "normalized": "IO a-\u003eIO a",
        "package": "LogicGrowsOnTrees",
        "partial": "EOFExceptions",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able value from a handle.\n\u003c/p\u003e\u003cp\u003eSpecifically, this function reads in a 64-bit big-endian word with the\n    size of the raw data to be read, reads that much data in bytes into a\n    \u003ccode\u003eByteString\u003c/code\u003e, and then deserializes the \u003ccode\u003eByteString\u003c/code\u003e to produce the\n    resulting value.\n\u003c/p\u003e\u003cp\u003eIf the connection has been lost, it throws \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Handle -\u003e IO α",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receives Serialize able value from handle Specifically this function reads in bit big-endian word with the size of the raw data to be read reads that much data in bytes into ByteString and then deserializes the ByteString to produce the resulting value If the connection has been lost it throws ConnectionLost",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "receive",
        "normalized": "Handle-\u003eIO a",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "Handle-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSends a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able value to a handle.\n\u003c/p\u003e\u003cp\u003eSpecifically, this function serializes the given value to a \u003ccode\u003eByteString\u003c/code\u003e,\n    and then writes the size of the serialized data in bytes as a 64-bit\n    big-endian word followed by the raw data itself.\n\u003c/p\u003e\u003cp\u003eIf the connection has been lost, it throws \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Handle",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Handle -\u003e α -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Handle.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Sends Serialize able value to handle Specifically this function serializes the given value to ByteString and then writes the size of the serialized data in bytes as bit big-endian word followed by the raw data itself If the connection has been lost it throws ConnectionLost",
        "hierarchy": "LogicGrowsOnTrees Utils Handle",
        "module": "LogicGrowsOnTrees.Utils.Handle",
        "name": "send",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "Handle-\u003eα-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type that specializes the \u003ccode\u003eSum\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.IntSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Utils-IntSum.html",
        "fct-type": "module",
        "title": "IntSum"
      },
      "index": {
        "description": "This module contains type that specializes the Sum Monoid to Int",
        "hierarchy": "LogicGrowsOnTrees Utils IntSum",
        "module": "LogicGrowsOnTrees.Utils.IntSum",
        "name": "IntSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Int Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#t:IntSum",
      "description": {
        "fct-descr": "\u003cp\u003eAn unpacked \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e whose \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance is addition. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.IntSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
        "fct-type": "data",
        "title": "IntSum"
      },
      "index": {
        "description": "An unpacked Int whose Monoid instance is addition",
        "hierarchy": "LogicGrowsOnTrees Utils IntSum",
        "module": "LogicGrowsOnTrees.Utils.IntSum",
        "name": "IntSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Int Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#v:IntSum",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.IntSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "IntSum",
        "fct-source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
        "fct-type": "function",
        "title": "IntSum"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils IntSum",
        "module": "LogicGrowsOnTrees.Utils.IntSum",
        "name": "IntSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Int Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#v:getIntSum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.IntSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Int",
        "fct-source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
        "fct-type": "function",
        "title": "getIntSum"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils IntSum",
        "module": "LogicGrowsOnTrees.Utils.IntSum",
        "name": "getIntSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Int Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules contains utility functions for constructing perfect trees for\n    use in some of the tests and examples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html",
        "fct-type": "module",
        "title": "PerfectTree"
      },
      "index": {
        "description": "This modules contains utility functions for constructing perfect trees for use in some of the tests and examples",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "PerfectTree",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Perfect Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#t:Arity",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper for arities that has an \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance that enforces that\n    the arity be at least 2.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
        "fct-type": "newtype",
        "title": "Arity"
      },
      "index": {
        "description": "Newtype wrapper for arities that has an ArgVal instance that enforces that the arity be at least",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "Arity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#t:ArityAndDepth",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype representing the arity and depth of a tree, used for command line\n    argument processing (see \u003ccode\u003e\u003ca\u003emakeArityAndDepthTermAtPositions\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
        "fct-type": "data",
        "title": "ArityAndDepth"
      },
      "index": {
        "description": "Datatype representing the arity and depth of tree used for command line argument processing see makeArityAndDepthTermAtPositions",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "ArityAndDepth",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity And Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:Arity",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Arity",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
        "fct-type": "function",
        "title": "Arity"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "Arity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:ArityAndDepth",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ArityAndDepth",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
        "fct-type": "function",
        "title": "ArityAndDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "ArityAndDepth",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity And Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:arity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
        "fct-type": "function",
        "title": "arity"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "arity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:depth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "depth",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:formArityAndDepth",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function used when you have an value of type \u003ccode\u003e\u003ca\u003eArity\u003c/a\u003e\u003c/code\u003e for the\n    arity of the tree rather than a value of type \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e and want to construct\n    a value of type \u003ccode\u003e\u003ca\u003eArityAndDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Arity -\u003e Word -\u003e ArityAndDepth",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#formArityAndDepth",
        "fct-type": "function",
        "title": "formArityAndDepth"
      },
      "index": {
        "description": "convenience function used when you have an value of type Arity for the arity of the tree rather than value of type Word and want to construct value of type ArityAndDepth",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "formArityAndDepth",
        "normalized": "Arity-\u003eWord-\u003eArityAndDepth",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity And Depth",
        "signature": "Arity-\u003eWord-\u003eArityAndDepth"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:getArity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word",
        "fct-source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
        "fct-type": "function",
        "title": "getArity"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "getArity",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:makeArityAndDepthTermAtPositions",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a configuration term that expects the arity and depth to be at\n    the given command line argument positions.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Int-\u003e Int-\u003e Term ArityAndDepth",
        "fct-type": "function",
        "title": "makeArityAndDepthTermAtPositions"
      },
      "index": {
        "description": "Constructs configuration term that expects the arity and depth to be at the given command line argument positions",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "makeArityAndDepthTermAtPositions",
        "normalized": "Int-\u003eInt-\u003eTerm ArityAndDepth",
        "package": "LogicGrowsOnTrees",
        "partial": "Arity And Depth Term At Positions",
        "signature": "Int-\u003eInt-\u003eTerm ArityAndDepth"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:numberOfLeaves",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the number of leaves in a perfect tree.  It returns a value of type\n    \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e so that it can be easily compared to the \u003ccode\u003e\u003ca\u003eWordSum\u003c/a\u003e\u003c/code\u003e value returned by\n    the tree generators, but a consequence of this is that it will overflow if\n    the arity and/or depth arguments are too large.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e Word-\u003e Word",
        "fct-type": "function",
        "title": "numberOfLeaves"
      },
      "index": {
        "description": "Computes the number of leaves in perfect tree It returns value of type Word so that it can be easily compared to the WordSum value returned by the tree generators but consequence of this is that it will overflow if the arity and or depth arguments are too large",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "numberOfLeaves",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "LogicGrowsOnTrees",
        "partial": "Of Leaves",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:perfectTree",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a perfectly balanced tree with the given leaf value, arity, and leaf. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "α-\u003e Word-\u003e Word-\u003e m α",
        "fct-type": "function",
        "title": "perfectTree"
      },
      "index": {
        "description": "Generate perfectly balanced tree with the given leaf value arity and leaf",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "perfectTree",
        "normalized": "a-\u003eWord-\u003eWord-\u003eb a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "α-\u003eWord-\u003eWord-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:trivialPerfectTree",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eperfectTree\u003c/a\u003e\u003c/code\u003e but with \u003ccode\u003eWordSum 1\u003c/code\u003e at the leaves. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word-\u003e Word-\u003e m WordSum",
        "fct-type": "function",
        "title": "trivialPerfectTree"
      },
      "index": {
        "description": "Like perfectTree but with WordSum at the leaves",
        "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
        "module": "LogicGrowsOnTrees.Utils.PerfectTree",
        "name": "trivialPerfectTree",
        "normalized": "Word-\u003eWord-\u003ea WordSum",
        "package": "LogicGrowsOnTrees",
        "partial": "Perfect Tree",
        "signature": "Word-\u003eWord-\u003em WordSum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type that specializes the \u003ccode\u003eSum\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.WordSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Utils-WordSum.html",
        "fct-type": "module",
        "title": "WordSum"
      },
      "index": {
        "description": "This module contains type that specializes the Sum Monoid to Word",
        "hierarchy": "LogicGrowsOnTrees Utils WordSum",
        "module": "LogicGrowsOnTrees.Utils.WordSum",
        "name": "WordSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#t:WordSum",
      "description": {
        "fct-descr": "\u003cp\u003eAn unpacked \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e whose \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance is addition. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.WordSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
        "fct-type": "data",
        "title": "WordSum"
      },
      "index": {
        "description": "An unpacked Word whose Monoid instance is addition",
        "hierarchy": "LogicGrowsOnTrees Utils WordSum",
        "module": "LogicGrowsOnTrees.Utils.WordSum",
        "name": "WordSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#v:WordSum",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.WordSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "WordSum",
        "fct-source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
        "fct-type": "function",
        "title": "WordSum"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils WordSum",
        "module": "LogicGrowsOnTrees.Utils.WordSum",
        "name": "WordSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#v:getWordSum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.WordSum",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "!Word",
        "fct-source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
        "fct-type": "function",
        "title": "getWordSum"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils WordSum",
        "module": "LogicGrowsOnTrees.Utils.WordSum",
        "name": "getWordSum",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a temporary \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e (via a newtype\n    wrapper \u003ccode\u003e\u003ca\u003eWord_\u003c/a\u003e\u003c/code\u003e) until \u003ccode\u003ecmdtheline\u003c/code\u003e releases a new version that includes an\n    \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Word_",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Word_.html",
        "fct-type": "module",
        "title": "Word_"
      },
      "index": {
        "description": "This module provides temporary ArgVal instance for Word via newtype wrapper Word until cmdtheline releases new version that includes an ArgVal instance for Word itself",
        "hierarchy": "LogicGrowsOnTrees Utils Word_",
        "module": "LogicGrowsOnTrees.Utils.Word_",
        "name": "Word_",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#t:Word_",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper used to indirectly provide an \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for Word. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Utils.Word_",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
        "fct-type": "newtype",
        "title": "Word_"
      },
      "index": {
        "description": "Newtype wrapper used to indirectly provide an ArgVal instance for Word",
        "hierarchy": "LogicGrowsOnTrees Utils Word_",
        "module": "LogicGrowsOnTrees.Utils.Word_",
        "name": "Word_",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#v:Word_",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Utils.Word_",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word_",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
        "fct-type": "function",
        "title": "Word_"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils Word_",
        "module": "LogicGrowsOnTrees.Utils.Word_",
        "name": "Word_",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#v:getWord",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Utils.Word_",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Word",
        "fct-source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
        "fct-type": "function",
        "title": "getWord"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Utils Word_",
        "module": "LogicGrowsOnTrees.Utils.Word_",
        "name": "getWord",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for working with \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003es, which\n    describe a portion of work to be performed by a worker.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html",
        "fct-type": "module",
        "title": "Workload"
      },
      "index": {
        "description": "This module contains infrastructure for working with Workload which describe portion of work to be performed by worker",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "Workload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#t:Workload",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e describes a portion of work to be performed by a worker;  it\n    consists of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to the subtree where the workload is located paired\n    with a \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e that indicates which parts of that subtree have already\n    been explored.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#Workload",
        "fct-type": "data",
        "title": "Workload"
      },
      "index": {
        "description": "Workload describes portion of work to be performed by worker it consists of Path to the subtree where the workload is located paired with Checkpoint that indicates which parts of that subtree have already been explored",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "Workload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:Workload",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#Workload",
        "fct-type": "function",
        "title": "Workload"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "Workload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:entire_workload",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e that consists of the entire tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#entire_workload",
        "fct-type": "function",
        "title": "entire_workload"
      },
      "index": {
        "description": "Workload that consists of the entire tree",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "entire_workload",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTUntilFirstWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e TreeT m α -\u003e m (Maybe α)",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTUntilFirstWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirstWithinWorkload"
      },
      "index": {
        "description": "Same as exploreTreeUntilFirstWithinWorkload but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeTUntilFirstWithinWorkload",
        "normalized": "Workload-\u003eTreeT a b-\u003ea(Maybe b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First Within Workload",
        "signature": "Workload-\u003eTreeT m α-\u003em(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTUntilFoundWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool) -\u003e Workload -\u003e TreeT m α -\u003e m (α, Bool)",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTUntilFoundWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeTUntilFoundWithinWorkload"
      },
      "index": {
        "description": "Same as exploreTreeUntilFoundWithinWorkload but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeTUntilFoundWithinWorkload",
        "normalized": "(a-\u003eBool)-\u003eWorkload-\u003eTreeT b a-\u003eb(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found Within Workload",
        "signature": "(α-\u003eBool)-\u003eWorkload-\u003eTreeT m α-\u003em(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e TreeT m α -\u003e m α",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeTWithinWorkload"
      },
      "index": {
        "description": "Same as exploreTreeWithinWorkload but for an impure tree",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeTWithinWorkload",
        "normalized": "Workload-\u003eTreeT a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TWithin Workload",
        "signature": "Workload-\u003eTreeT m α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeUntilFirstWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e until\n    a result (i.e. a leaf) has been found; if a result has been found then it is\n    returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e Tree α -\u003e Maybe α",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeUntilFirstWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeUntilFirstWithinWorkload"
      },
      "index": {
        "description": "Explores the nodes in pure tree given by Workload until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeUntilFirstWithinWorkload",
        "normalized": "Workload-\u003eTree a-\u003eMaybe a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First Within Workload",
        "signature": "Workload-\u003eTree α-\u003eMaybe α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeUntilFoundWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e, summing\n    all results encountered (i.e., in the leaves) until the current partial sum\n    satisfies the condition provided by the first parameter.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool) -\u003e Workload -\u003e Tree α -\u003e (α, Bool)",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeUntilFoundWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeUntilFoundWithinWorkload"
      },
      "index": {
        "description": "Explores the nodes in pure tree given by Workload summing all results encountered i.e in the leaves until the current partial sum satisfies the condition provided by the first parameter See exploreTreeUntilFound for more details",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeUntilFoundWithinWorkload",
        "normalized": "(a-\u003eBool)-\u003eWorkload-\u003eTree a-\u003e(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found Within Workload",
        "signature": "(α-\u003eBool)-\u003eWorkload-\u003eTree α-\u003e(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeWithinWorkload",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e, and sums\n    over all the results in the leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e Tree α -\u003e α",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeWithinWorkload",
        "fct-type": "function",
        "title": "exploreTreeWithinWorkload"
      },
      "index": {
        "description": "Explores the nodes in pure tree given by Workload and sums over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "exploreTreeWithinWorkload",
        "normalized": "Workload-\u003eTree a-\u003ea",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Within Workload",
        "signature": "Workload-\u003eTree α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadCheckpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Checkpoint",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#Workload",
        "fct-type": "function",
        "title": "workloadCheckpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "workloadCheckpoint",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Checkpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadDepth",
      "description": {
        "fct-descr": "\u003cp\u003eThe depth of the workload, equal to the length of the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e component. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Workload -\u003e Int",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#workloadDepth",
        "fct-type": "function",
        "title": "workloadDepth"
      },
      "index": {
        "description": "The depth of the workload equal to the length of the Path component",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "workloadDepth",
        "normalized": "Workload-\u003eInt",
        "package": "LogicGrowsOnTrees",
        "partial": "Depth",
        "signature": "Workload-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Workload",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Path",
        "fct-source": "src/LogicGrowsOnTrees-Workload.html#Workload",
        "fct-type": "function",
        "title": "workloadPath"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Workload",
        "module": "LogicGrowsOnTrees.Workload",
        "name": "workloadPath",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic functionality for building and exploring trees. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees.html",
        "fct-type": "module",
        "title": "LogicGrowsOnTrees"
      },
      "index": {
        "description": "Basic functionality for building and exploring trees",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "LogicGrowsOnTrees",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Logic Grows On Trees",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:MonadExplorable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadExplorable\u003c/a\u003e\u003c/code\u003e class provides caching functionality when exploring a\n    tree, as well as a way to give a worker a chance to process any pending\n    requests; at minimum \u003ccode\u003e\u003ca\u003ecacheMaybe\u003c/a\u003e\u003c/code\u003e needs to be defined.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees.html#MonadExplorable",
        "fct-type": "class",
        "title": "MonadExplorable"
      },
      "index": {
        "description": "The MonadExplorable class provides caching functionality when exploring tree as well as way to give worker chance to process any pending requests at minimum cacheMaybe needs to be defined",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "MonadExplorable",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Monad Explorable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:MonadExplorableTrans",
      "description": {
        "fct-descr": "\u003cp\u003eThis class is like \u003ccode\u003e\u003ca\u003eMonadExplorable\u003c/a\u003e\u003c/code\u003e, but it is designed to work with monad\n    stacks;  at minimum \u003ccode\u003e\u003ca\u003erunAndCacheMaybe\u003c/a\u003e\u003c/code\u003e needs to be defined.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees.html#MonadExplorableTrans",
        "fct-type": "class",
        "title": "MonadExplorableTrans"
      },
      "index": {
        "description": "This class is like MonadExplorable but it is designed to work with monad stacks at minimum runAndCacheMaybe needs to be defined",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "MonadExplorableTrans",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Monad Explorable Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eA pure tree, which is what you should normally be using. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees.html#Tree",
        "fct-type": "type",
        "title": "Tree"
      },
      "index": {
        "description": "pure tree which is what you should normally be using",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "Tree",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeIO",
      "description": {
        "fct-descr": "\u003cp\u003eA tree running in the I/O monad, which you should only be using for doing\n    things like reading data from an external file or database that will be\n    constant for the entire run.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeIO",
        "fct-type": "type",
        "title": "TreeIO"
      },
      "index": {
        "description": "tree running in the monad which you should only be using for doing things like reading data from an external file or database that will be constant for the entire run",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "TreeIO",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just a convenient alias for working with pure trees. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "type",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeInstruction",
        "fct-type": "type",
        "title": "TreeInstruction"
      },
      "index": {
        "description": "This is just convenient alias for working with pure trees",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "TreeInstruction",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeT",
      "description": {
        "fct-descr": "\u003cp\u003eA tree run in an arbitrary monad. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeT",
        "fct-type": "newtype",
        "title": "TreeT"
      },
      "index": {
        "description": "tree run in an arbitrary monad",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "TreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeTInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eThe core of the implementation of \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is mostly contained in this\n    type, which provides a list of primitive instructions for trees:\n    \u003ccode\u003e\u003ca\u003eCache\u003c/a\u003e\u003c/code\u003e, which caches a value, \u003ccode\u003e\u003ca\u003eChoice\u003c/a\u003e\u003c/code\u003e, which signals a branch with two\n    choices, \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e, which indicates that there are no more results, and\n    \u003ccode\u003e\u003ca\u003eProcessPendingRequests\u003c/a\u003e\u003c/code\u003e, which signals that a break should be taken from\n    exploration to process any pending requests (only meant to be used in\n    exceptional cases).\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
        "fct-type": "data",
        "title": "TreeTInstruction"
      },
      "index": {
        "description": "The core of the implementation of Tree is mostly contained in this type which provides list of primitive instructions for trees Cache which caches value Choice which signals branch with two choices Null which indicates that there are no more results and ProcessPendingRequests which signals that break should be taken from exploration to process any pending requests only meant to be used in exceptional cases",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "TreeTInstruction",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TInstruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Cache",
      "description": {
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m (Maybe α) -\u003e TreeTInstruction m α",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
        "fct-type": "function",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "Cache",
        "normalized": "a(Maybe b)-\u003eTreeTInstruction a b",
        "package": "LogicGrowsOnTrees",
        "partial": "Cache",
        "signature": "m(Maybe α)-\u003eTreeTInstruction m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Choice",
      "description": {
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α -\u003e TreeT m α -\u003e TreeTInstruction m α",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
        "fct-type": "function",
        "title": "Choice"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "Choice",
        "normalized": "TreeT a b-\u003eTreeT a b-\u003eTreeTInstruction a b",
        "package": "LogicGrowsOnTrees",
        "partial": "Choice",
        "signature": "TreeT m α-\u003eTreeT m α-\u003eTreeTInstruction m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Null",
      "description": {
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeTInstruction m α",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "Null",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:ProcessPendingRequests",
      "description": {
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeTInstruction m ()",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
        "fct-type": "function",
        "title": "ProcessPendingRequests"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "ProcessPendingRequests",
        "normalized": "TreeTInstruction a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Process Pending Requests",
        "signature": "TreeTInstruction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:TreeT",
      "description": {
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeT",
        "fct-type": "function",
        "title": "TreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "TreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:allFrom",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a tree (or some other \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e) with all of the results in the\n    input list.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "t α-\u003e m α",
        "fct-type": "function",
        "title": "allFrom"
      },
      "index": {
        "description": "Returns tree or some other MonadPlus with all of the results in the input list",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "allFrom",
        "normalized": "a b-\u003ec b",
        "package": "LogicGrowsOnTrees",
        "partial": "From",
        "signature": "t α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an optimally balanced tree (or some other \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e) that\n    generates all of the elements in the given (inclusive) range; if the lower\n    bound is greater than the upper bound it returns \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "n-\u003e n-\u003e m n",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "Returns an optimally balanced tree or some other MonadPlus that generates all of the elements in the given inclusive range if the lower bound is greater than the upper bound it returns mzero",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "between",
        "normalized": "a-\u003ea-\u003eb a",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "n-\u003en-\u003em n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cache",
      "description": {
        "fct-descr": "\u003cp\u003eCache a value in case we explore this node again. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "x -\u003e m x",
        "fct-source": "src/LogicGrowsOnTrees.html#cache",
        "fct-type": "method",
        "title": "cache"
      },
      "index": {
        "description": "Cache value in case we explore this node again",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "cache",
        "normalized": "a-\u003eb a",
        "package": "LogicGrowsOnTrees",
        "partial": "",
        "signature": "x-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cacheGuard",
      "description": {
        "fct-descr": "\u003cp\u003eThis does the same thing as \u003ccode\u003eguard\u003c/code\u003e but it caches the result. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees.html#cacheGuard",
        "fct-type": "method",
        "title": "cacheGuard"
      },
      "index": {
        "description": "This does the same thing as guard but it caches the result",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "cacheGuard",
        "normalized": "Bool-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Guard",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cacheMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is a combination of the previous two;  it performs a\n        computation which might fail by returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and if that happens\n        it then backtracks; if it passes then the result is cached and returned.\n\u003c/p\u003e\u003cp\u003eNote that the previous two methods are essentially specializations of\n        this method.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Maybe x -\u003e m x",
        "fct-source": "src/LogicGrowsOnTrees.html#cacheMaybe",
        "fct-type": "method",
        "title": "cacheMaybe"
      },
      "index": {
        "description": "This function is combination of the previous two it performs computation which might fail by returning Nothing and if that happens it then backtracks if it passes then the result is cached and returned Note that the previous two methods are essentially specializations of this method",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "cacheMaybe",
        "normalized": "Maybe a-\u003eb a",
        "package": "LogicGrowsOnTrees",
        "partial": "Maybe",
        "signature": "Maybe x-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:endowTree",
      "description": {
        "fct-descr": "\u003cp\u003eThis function lets you take a pure tree and transform it into a\n    tree with an arbitrary base monad.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Tree α-\u003e TreeT m α",
        "fct-type": "function",
        "title": "endowTree"
      },
      "index": {
        "description": "This function lets you take pure tree and transform it into tree with an arbitrary base monad",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "endowTree",
        "normalized": "Tree a-\u003eTreeT b a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "Tree α-\u003eTreeT m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTree",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in a pure tree and sums over all the\n    results in the leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Tree α-\u003e α",
        "fct-type": "function",
        "title": "exploreTree"
      },
      "index": {
        "description": "Explores all the nodes in pure tree and sums over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTree",
        "normalized": "Tree a-\u003ea",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "Tree α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeT",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in an impure tree and sums over all the\n    results in the leaves.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α-\u003e m α",
        "fct-type": "function",
        "title": "exploreTreeT"
      },
      "index": {
        "description": "Explores all the nodes in an impure tree and sums over all the results in the leaves",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeT",
        "normalized": "TreeT a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": "TreeT m α-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTAndIgnoreResults",
      "description": {
        "fct-descr": "\u003cp\u003eExplores a tree for its side-effects, ignoring all results. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α-\u003e m ()",
        "fct-type": "function",
        "title": "exploreTreeTAndIgnoreResults"
      },
      "index": {
        "description": "Explores tree for its side-effects ignoring all results",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeTAndIgnoreResults",
        "normalized": "TreeT a b-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TAnd Ignore Results",
        "signature": "TreeT m α-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e, but taking an impure tree instead\n    of pure one.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "TreeT m α-\u003e m (Maybe α)",
        "fct-type": "function",
        "title": "exploreTreeTUntilFirst"
      },
      "index": {
        "description": "Same as exploreTreeUntilFirst but taking an impure tree instead of pure one",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeTUntilFirst",
        "normalized": "TreeT a b-\u003ea(Maybe b)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil First",
        "signature": "TreeT m α-\u003em(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTUntilFound",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e, but taking an impure tree instead of\n    a pure tree.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool)-\u003e TreeT m α-\u003e m (α, Bool)",
        "fct-type": "function",
        "title": "exploreTreeTUntilFound"
      },
      "index": {
        "description": "Same as exploreTreeUntilFound but taking an impure tree instead of pure tree",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeTUntilFound",
        "normalized": "(a-\u003eBool)-\u003eTreeT b a-\u003eb(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree TUntil Found",
        "signature": "(α-\u003eBool)-\u003eTreeT m α-\u003em(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeUntilFirst",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in a tree until a result (i.e., a leaf) has been\n    found; if a result has been found then it is returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e,\n    otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "Tree α-\u003e Maybe α",
        "fct-type": "function",
        "title": "exploreTreeUntilFirst"
      },
      "index": {
        "description": "Explores all the nodes in tree until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeUntilFirst",
        "normalized": "Tree a-\u003eMaybe a",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until First",
        "signature": "Tree α-\u003eMaybe α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeUntilFound",
      "description": {
        "fct-descr": "\u003cp\u003eExplores all the nodes in a tree, summing all encountered results (i.e., in\n    the leaves) until the current partial sum satisfies the condition provided\n    by the first function. The returned value is a pair where the first\n    component is all of the results that were found during the exploration and\n    the second component is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the exploration terminated early due to\n    the condition being met and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eNOTE:  The condition function is assumed to have two properties: first, it\n           is assumed to return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, and second, it is assumed\n           that if it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ex\u003c/code\u003e then it also returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for\n           \u003ccode\u003emappend x y\u003c/code\u003e and \u003ccode\u003emappend y x\u003c/code\u003e for all values \u003ccode\u003ey\u003c/code\u003e.  The reason for\n           this is that the condition function is used to indicate when enough\n           results have been found, and so it should not be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n           as nothing has been found and if it is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ex\u003c/code\u003e then it should\n           not be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for the sum of \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e as this would mean that\n           having \u003cem\u003emore\u003c/em\u003e than enough results is no longer having enough results.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "(α -\u003e Bool)-\u003e Tree α-\u003e (α, Bool)",
        "fct-type": "function",
        "title": "exploreTreeUntilFound"
      },
      "index": {
        "description": "Explores all the nodes in tree summing all encountered results i.e in the leaves until the current partial sum satisfies the condition provided by the first function The returned value is pair where the first component is all of the results that were found during the exploration and the second component is True if the exploration terminated early due to the condition being met and False otherwise NOTE The condition function is assumed to have two properties first it is assumed to return False for mempty and second it is assumed that if it returns True for then it also returns True for mappend and mappend for all values The reason for this is that the condition function is used to indicate when enough results have been found and so it should not be True for mempty as nothing has been found and if it is True for then it should not be False for the sum of with as this would mean that having more than enough results is no longer having enough results",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "exploreTreeUntilFound",
        "normalized": "(a-\u003eBool)-\u003eTree a-\u003e(a,Bool)",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree Until Found",
        "signature": "(α-\u003eBool)-\u003eTree α-\u003e(α,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:processPendingRequests",
      "description": {
        "fct-descr": "\u003cp\u003eThis function tells the worker to take a break to process any pending\n        requests; it does nothing if we are not in a parallel setting.\n\u003c/p\u003e\u003cp\u003eNOTE: You should normally never need to use this function, as requests\n        are processed whenever a choice point, a cache point, mzero, or a leaf\n        in the decision tree has been encountered. However, if you have noticed\n        that workload steals are taking such a large amount of time that workers\n        are spending too much time sitting idle while they wait for a workload,\n        and you can trace this as being due to a computation that takes so much\n        time that it almost never gives the worker a chance to process requests,\n        then you can use this method to ensure that requests are given a chance\n        to be processed.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "m ()",
        "fct-source": "src/LogicGrowsOnTrees.html#processPendingRequests",
        "fct-type": "method",
        "title": "processPendingRequests"
      },
      "index": {
        "description": "This function tells the worker to take break to process any pending requests it does nothing if we are not in parallel setting NOTE You should normally never need to use this function as requests are processed whenever choice point cache point mzero or leaf in the decision tree has been encountered However if you have noticed that workload steals are taking such large amount of time that workers are spending too much time sitting idle while they wait for workload and you can trace this as being due to computation that takes so much time that it almost never gives the worker chance to process requests then you can use this method to ensure that requests are given chance to be processed",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "processPendingRequests",
        "normalized": "a()",
        "package": "LogicGrowsOnTrees",
        "partial": "Pending Requests",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCache",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given action in the nested monad and caches the result. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NestedMonad m x -\u003e m x",
        "fct-source": "src/LogicGrowsOnTrees.html#runAndCache",
        "fct-type": "method",
        "title": "runAndCache"
      },
      "index": {
        "description": "Runs the given action in the nested monad and caches the result",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "runAndCache",
        "normalized": "NestedMonad a b-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "And Cache",
        "signature": "NestedMonad m x-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCacheGuard",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given action in the nested monad and then does the equivalent\n        of feeding it into \u003ccode\u003eguard\u003c/code\u003e, caching the result.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NestedMonad m Bool -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees.html#runAndCacheGuard",
        "fct-type": "method",
        "title": "runAndCacheGuard"
      },
      "index": {
        "description": "Runs the given action in the nested monad and then does the equivalent of feeding it into guard caching the result",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "runAndCacheGuard",
        "normalized": "NestedMonad a Bool-\u003ea()",
        "package": "LogicGrowsOnTrees",
        "partial": "And Cache Guard",
        "signature": "NestedMonad m Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCacheMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given action in the nested monad;  if it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n        then it acts like \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e,  if it returns 'Just x', then it caches the\n        result.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "NestedMonad m (Maybe x) -\u003e m x",
        "fct-source": "src/LogicGrowsOnTrees.html#runAndCacheMaybe",
        "fct-type": "method",
        "title": "runAndCacheMaybe"
      },
      "index": {
        "description": "Runs the given action in the nested monad if it returns Nothing then it acts like mzero if it returns Just then it caches the result",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "runAndCacheMaybe",
        "normalized": "NestedMonad a(Maybe b)-\u003ea b",
        "package": "LogicGrowsOnTrees",
        "partial": "And Cache Maybe",
        "signature": "NestedMonad m(Maybe x)-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:unwrapTreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees",
        "fct-package": "LogicGrowsOnTrees",
        "fct-signature": "ProgramT (TreeTInstruction m) m α",
        "fct-source": "src/LogicGrowsOnTrees.html#TreeT",
        "fct-type": "function",
        "title": "unwrapTreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees",
        "module": "LogicGrowsOnTrees",
        "name": "unwrapTreeT",
        "normalized": "",
        "package": "LogicGrowsOnTrees",
        "partial": "Tree",
        "signature": ""
      }
    }
  }
]