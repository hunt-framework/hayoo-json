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
        "word": "LogicGrowsOnTrees"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the infrastructure used to maintain a checkpoint during\n    a tree exploration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Checkpoint",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the infrastructure used to maintain checkpoint during tree exploration",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Checkpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the parts of a tree that have been explored. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Checkpoint",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
          "type": "data"
        },
        "index": {
          "description": "Information about the parts of tree that have been explored",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Checkpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Checkpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA zipper that allows us to zoom in on a particular point in the checkpoint. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CheckpointCursor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointCursor",
          "type": "type"
        },
        "index": {
          "description": "zipper that allows us to zoom in on particular point in the checkpoint",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CheckpointCursor",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:CheckpointCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe derivative of \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e, used to implement the zipper type \u003ccode\u003e\u003ca\u003eCheckpointCursor\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CheckpointDifferential",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
          "type": "data"
        },
        "index": {
          "description": "The derivative of Checkpoint used to implement the zipper type CheckpointCursor",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CheckpointDifferential",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint Differential",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:CheckpointDifferential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eCheckpointCursor\u003c/a\u003e\u003c/code\u003e, but each step keeps track of the subtree for the\n    alternative branch in case we backtrack to it.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Context",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Like CheckpointCursor but each step keeps track of the subtree for the alternative branch in case we backtrack to it",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Context",
          "package": "LogicGrowsOnTrees",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eCheckpointDifferential\u003c/a\u003e\u003c/code\u003e, but left branches include the subtree for the\n    right branch; the right branches do not need this information because we\n    always explore the left branch first.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ContextStep",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
          "type": "data"
        },
        "index": {
          "description": "Like CheckpointDifferential but left branches include the subtree for the right branch the right branches do not need this information because we always explore the left branch first",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ContextStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Context Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ContextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eExplorationTState\u003c/a\u003e\u003c/code\u003e in a pure setting. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationState",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationState",
          "type": "type"
        },
        "index": {
          "description": "An alias for ExplorationTState in pure setting",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationState",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ExplorationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the exploration of a tree starting from a checkpoint. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationTState",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
          "type": "data"
        },
        "index": {
          "description": "The current state of the exploration of tree starting from checkpoint",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationTState",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration TState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:ExplorationTState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown when one attempts to merge checkpoints that\n    disagree with each other; this will never happen as long as you only merge\n    checkpoints that came from the same tree, so if you get this\n    exception then there is almost certainly a bug in your code.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "InconsistentCheckpoints",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#InconsistentCheckpoints",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown when one attempts to merge checkpoints that disagree with each other this will never happen as long as you only merge checkpoints that came from the same tree so if you get this exception then there is almost certainly bug in your code",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "InconsistentCheckpoints",
          "package": "LogicGrowsOnTrees",
          "partial": "Inconsistent Checkpoints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:InconsistentCheckpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about both the current checkpoint and the results we have\n    gathered so far.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Progress",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "Information about both the current checkpoint and the results we have gathered so far",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Progress",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CacheContextStep",
          "package": "LogicGrowsOnTrees",
          "signature": "CacheContextStep ByteString",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CacheContextStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Cache Context Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CacheContextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CachePoint",
          "package": "LogicGrowsOnTrees",
          "signature": "CachePoint ByteString Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CachePoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Cache Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CachePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CachePointD",
          "package": "LogicGrowsOnTrees",
          "signature": "CachePointD ByteString",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "CachePointD",
          "package": "LogicGrowsOnTrees",
          "partial": "Cache Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:CachePointD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ChoicePoint",
          "package": "LogicGrowsOnTrees",
          "signature": "ChoicePoint Checkpoint Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ChoicePoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Choice Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ChoicePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ChoicePointD",
          "package": "LogicGrowsOnTrees",
          "signature": "ChoicePointD BranchChoice Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#CheckpointDifferential",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ChoicePointD",
          "package": "LogicGrowsOnTrees",
          "partial": "Choice Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ChoicePointD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationTState",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationTState",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "ExplorationTState",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration TState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:ExplorationTState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Explored",
          "package": "LogicGrowsOnTrees",
          "signature": "Explored",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Explored",
          "package": "LogicGrowsOnTrees",
          "partial": "Explored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Explored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "InconsistentCheckpoints",
          "package": "LogicGrowsOnTrees",
          "signature": "InconsistentCheckpoints Checkpoint Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#InconsistentCheckpoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "InconsistentCheckpoints",
          "package": "LogicGrowsOnTrees",
          "partial": "Inconsistent Checkpoints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:InconsistentCheckpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "LeftBranchContextStep",
          "package": "LogicGrowsOnTrees",
          "signature": "LeftBranchContextStep Checkpoint (TreeT m α)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "LeftBranchContextStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Left Branch Context Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:LeftBranchContextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Progress",
          "package": "LogicGrowsOnTrees",
          "signature": "Progress",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Progress",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "RightBranchContextStep",
          "package": "LogicGrowsOnTrees",
          "signature": "RightBranchContextStep",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ContextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "RightBranchContextStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Right Branch Context Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:RightBranchContextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Unexplored",
          "package": "LogicGrowsOnTrees",
          "signature": "Unexplored",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Checkpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "Unexplored",
          "package": "LogicGrowsOnTrees",
          "partial": "Unexplored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:Unexplored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a full checkpoint given a (context) checkpoint zipper with a hole\n    at your current location and the subcheckpoint at your location.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromContext",
          "package": "LogicGrowsOnTrees",
          "signature": "Context m α -\u003e Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromContext",
          "type": "function"
        },
        "index": {
          "description": "Constructs full checkpoint given context checkpoint zipper with hole at your current location and the subcheckpoint at your location",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromContext",
          "normalized": "Context a b-\u003eCheckpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Context",
          "signature": "Context m α-\u003eCheckpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a full checkpoint given a (cursor) checkpoint zipper with a hole\n    at your current location and the subcheckpoint at your location.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromCursor",
          "package": "LogicGrowsOnTrees",
          "signature": "CheckpointCursor -\u003e Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromCursor",
          "type": "function"
        },
        "index": {
          "description": "Constructs full checkpoint given cursor checkpoint zipper with hole at your current location and the subcheckpoint at your location",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromCursor",
          "normalized": "CheckpointCursor-\u003eCheckpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Cursor",
          "signature": "CheckpointCursor-\u003eCheckpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the current checkpoint given the state of an exploration. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromExplorationState",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationTState m α -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromExplorationState",
          "type": "function"
        },
        "index": {
          "description": "Computes the current checkpoint given the state of an exploration",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromExplorationState",
          "normalized": "ExplorationTState a b-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Exploration State",
          "signature": "ExplorationTState m α-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromExplorationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a full checkpoint given the path to where you are currently\n    searching and the subcheckpoint at your location, assuming that we have no\n    knowledge of anything outside our location (which is indicated by marking it\n    as \u003ccode\u003e\u003ca\u003eUnexplored\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromInitialPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path -\u003e Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromInitialPath",
          "type": "function"
        },
        "index": {
          "description": "Constructs full checkpoint given the path to where you are currently searching and the subcheckpoint at your location assuming that we have no knowledge of anything outside our location which is indicated by marking it as Unexplored",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromInitialPath",
          "normalized": "Path-\u003eCheckpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Initial Path",
          "signature": "Path-\u003eCheckpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromInitialPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally builds up a full checkpoint given a sequence corresponding to\n    some cursor at a particular location of the full checkpoint and the\n    subcheckpoint to splice in at that location.\n\u003c/p\u003e\u003cp\u003eThe main reason that you should use this function is that, as it builds up\n    the full checkpoint, it makes some important simplifications via.\n    \u003ccode\u003e\u003ca\u003esimplifyCheckpointRoot\u003c/a\u003e\u003c/code\u003e, such as replacing \u003ccode\u003eChoicePoint Explored Explored\u003c/code\u003e\n    with \u003ccode\u003eExplored\u003c/code\u003e, which both shrinks the size of the checkpoint as well as\n    making it \u003cem\u003emuch\u003c/em\u003e easier to determine if it is equivalent to \u003ccode\u003e\u003ca\u003eExplored\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromReversedList",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Checkpoint -\u003e Checkpoint) -\u003e [α] -\u003e Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromReversedList",
          "type": "function"
        },
        "index": {
          "description": "Incrementally builds up full checkpoint given sequence corresponding to some cursor at particular location of the full checkpoint and the subcheckpoint to splice in at that location The main reason that you should use this function is that as it builds up the full checkpoint it makes some important simplifications via simplifyCheckpointRoot such as replacing ChoicePoint Explored Explored with Explored which both shrinks the size of the checkpoint as well as making it much easier to determine if it is equivalent to Explored",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromReversedList",
          "normalized": "(a-\u003eCheckpoint-\u003eCheckpoint)-\u003e[a]-\u003eCheckpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Reversed List",
          "signature": "(α-\u003eCheckpoint-\u003eCheckpoint)-\u003e[α]-\u003eCheckpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromReversedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003echeckpointFromReversedList\u003c/a\u003e\u003c/code\u003e, but where the cursor is specified\n    as a (non-reversed) \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e rather than a list.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromSequence",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Checkpoint -\u003e Checkpoint) -\u003e Seq α -\u003e Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromSequence",
          "type": "function"
        },
        "index": {
          "description": "The same as checkpointFromReversedList but where the cursor is specified as non-reversed Seq rather than list",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromSequence",
          "normalized": "(a-\u003eCheckpoint-\u003eCheckpoint)-\u003eSeq a-\u003eCheckpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Sequence",
          "signature": "(α-\u003eCheckpoint-\u003eCheckpoint)-\u003eSeq α-\u003eCheckpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a full checkpoint given the path to where you are currently\n    located, assuming that the current location is \u003ccode\u003e\u003ca\u003eUnexplored\u003c/a\u003e\u003c/code\u003e and everything\n    outside of our location has been fully explored already.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromUnexploredPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#checkpointFromUnexploredPath",
          "type": "function"
        },
        "index": {
          "description": "Constructs full checkpoint given the path to where you are currently located assuming that the current location is Unexplored and everything outside of our location has been fully explored already",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "checkpointFromUnexploredPath",
          "normalized": "Path-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Unexplored Path",
          "signature": "Path-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:checkpointFromUnexploredPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "State Checkpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateContext",
          "package": "LogicGrowsOnTrees",
          "signature": "(Context m α)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateContext",
          "package": "LogicGrowsOnTrees",
          "partial": "State Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateTree",
          "package": "LogicGrowsOnTrees",
          "signature": "(TreeT m α)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#ExplorationTState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "explorationStateTree",
          "package": "LogicGrowsOnTrees",
          "partial": "State Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:explorationStateTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the remaining nodes in a pure tree, starting from the\n    given checkpoint, and sums over all the results in the leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e Tree α -\u003e α",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Explores the remaining nodes in pure tree starting from the given checkpoint and sums over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeStartingFromCheckpoint",
          "normalized": "Checkpoint-\u003eTree a-\u003ea",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Starting From Checkpoint",
          "signature": "Checkpoint-\u003eTree α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the remaining nodes in an impure tree, starting from the\n    given checkpoint, and sums over all the results in the leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e TreeT m α -\u003e m α",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Explores the remaining nodes in an impure tree starting from the given checkpoint and sums over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTStartingFromCheckpoint",
          "normalized": "Checkpoint-\u003eTreeT a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TStarting From Checkpoint",
          "signature": "Checkpoint-\u003eTreeT m α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTUntilFirstStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e TreeT m α -\u003e m (Maybe α)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTUntilFirstStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFirstStartingFromCheckpoint but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTUntilFirstStartingFromCheckpoint",
          "normalized": "Checkpoint-\u003eTreeT a b-\u003ea(Maybe b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First Starting From Checkpoint",
          "signature": "Checkpoint-\u003eTreeT m α-\u003em(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTUntilFirstStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTUntilFoundStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool) -\u003e Checkpoint -\u003e TreeT m α -\u003e m (α, Bool)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeTUntilFoundStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFoundStartingFromCheckpoint but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeTUntilFoundStartingFromCheckpoint",
          "normalized": "(a-\u003eBool)-\u003eCheckpoint-\u003eTreeT b a-\u003eb(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Starting From Checkpoint",
          "signature": "(α-\u003eBool)-\u003eCheckpoint-\u003eTreeT m α-\u003em(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeTUntilFoundStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the remaining nodes in a pure tree, starting from the\n    given checkpoint, until a result (i.e., a leaf) has been found; if a result\n    has been found then it is returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n    returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeUntilFirstStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e Tree α -\u003e Maybe α",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeUntilFirstStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Explores all the remaining nodes in pure tree starting from the given checkpoint until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeUntilFirstStartingFromCheckpoint",
          "normalized": "Checkpoint-\u003eTree a-\u003eMaybe a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First Starting From Checkpoint",
          "signature": "Checkpoint-\u003eTree α-\u003eMaybe α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeUntilFirstStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the remaining nodes in a tree, starting from the given checkpoint\n    and summing all results encountered (i.e., in the leaves) until the current\n    partial sum satisfies the condition provided by the first parameter.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeUntilFoundStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool) -\u003e Checkpoint -\u003e Tree α -\u003e (α, Bool)",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#exploreTreeUntilFoundStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Explores all the remaining nodes in tree starting from the given checkpoint and summing all results encountered i.e in the leaves until the current partial sum satisfies the condition provided by the first parameter See exploreTreeUntilFound for more details",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "exploreTreeUntilFoundStartingFromCheckpoint",
          "normalized": "(a-\u003eBool)-\u003eCheckpoint-\u003eTree a-\u003e(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Starting From Checkpoint",
          "signature": "(α-\u003eBool)-\u003eCheckpoint-\u003eTree α-\u003e(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:exploreTreeUntilFoundStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs the initial \u003ccode\u003e\u003ca\u003eExplorationTState\u003c/a\u003e\u003c/code\u003e for the given tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "initialExplorationState",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e TreeT m α -\u003e ExplorationTState m α",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#initialExplorationState",
          "type": "function"
        },
        "index": {
          "description": "Constructs the initial ExplorationTState for the given tree",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "initialExplorationState",
          "normalized": "Checkpoint-\u003eTreeT a b-\u003eExplorationTState a b",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration State",
          "signature": "Checkpoint-\u003eTreeT m α-\u003eExplorationTState m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:initialExplorationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts a checkpoint so that unexplored areas become explored areas and vice\n    versa.  This function satisfies the law that if you sum the result of\n    exploring the tree with the original checkpoint and the result of summing\n    the tree with the inverted checkpoint then (assuming the result monoid\n    commutes) you will get the same result as exploring the entire tree.  That\n    is to say,\n\u003c/p\u003e\u003cpre\u003e\nexploreTreeStartingFromCheckpoint checkpoint tree\n\u003c\u003e\nexploreTreeStartingFromCheckpoint (invertCheckpoint checkpoint) tree\n==\nexploreTree tree\n\u003c/pre\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "invertCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#invertCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Inverts checkpoint so that unexplored areas become explored areas and vice versa This function satisfies the law that if you sum the result of exploring the tree with the original checkpoint and the result of summing the tree with the inverted checkpoint then assuming the result monoid commutes you will get the same result as exploring the entire tree That is to say exploreTreeStartingFromCheckpoint checkpoint tree exploreTreeStartingFromCheckpoint invertCheckpoint checkpoint tree exploreTree tree",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "invertCheckpoint",
          "normalized": "Checkpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "signature": "Checkpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:invertCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the path to the current location in the checkpoint as given by the\n    context.  (Note that this is a lossy conversation because the resulting path\n    does not contain any information about the branches not taken.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathFromContext",
          "package": "LogicGrowsOnTrees",
          "signature": "Context m α -\u003e Path",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#pathFromContext",
          "type": "function"
        },
        "index": {
          "description": "Computes the path to the current location in the checkpoint as given by the context Note that this is lossy conversation because the resulting path does not contain any information about the branches not taken",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathFromContext",
          "normalized": "Context a b-\u003ePath",
          "package": "LogicGrowsOnTrees",
          "partial": "From Context",
          "signature": "Context m α-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathFromContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the path to the current location in the checkpoint as given by the\n    cursor.  (Note that this is a lossy conversation because the resulting path\n    does not contain any information about the branches not taken.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathFromCursor",
          "package": "LogicGrowsOnTrees",
          "signature": "CheckpointCursor -\u003e Path",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#pathFromCursor",
          "type": "function"
        },
        "index": {
          "description": "Computes the path to the current location in the checkpoint as given by the cursor Note that this is lossy conversation because the resulting path does not contain any information about the branches not taken",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathFromCursor",
          "normalized": "CheckpointCursor-\u003ePath",
          "package": "LogicGrowsOnTrees",
          "partial": "From Cursor",
          "signature": "CheckpointCursor-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathFromCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a context step to a path step by throwing away information about\n    the alternative branch (if present).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathStepFromContextStep",
          "package": "LogicGrowsOnTrees",
          "signature": "ContextStep m α -\u003e Step",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#pathStepFromContextStep",
          "type": "function"
        },
        "index": {
          "description": "Converts context step to path step by throwing away information about the alternative branch if present",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathStepFromContextStep",
          "normalized": "ContextStep a b-\u003eStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Step From Context Step",
          "signature": "ContextStep m α-\u003eStep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathStepFromContextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a cursor differential to a path step by throwing away information\n    about the alternative branch (if present).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathStepFromCursorDifferential",
          "package": "LogicGrowsOnTrees",
          "signature": "CheckpointDifferential -\u003e Step",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#pathStepFromCursorDifferential",
          "type": "function"
        },
        "index": {
          "description": "Converts cursor differential to path step by throwing away information about the alternative branch if present",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "pathStepFromCursorDifferential",
          "normalized": "CheckpointDifferential-\u003eStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Step From Cursor Differential",
          "signature": "CheckpointDifferential-\u003eStep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:pathStepFromCursorDifferential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "progressCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "progressCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:progressCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "progressResult",
          "package": "LogicGrowsOnTrees",
          "signature": "α",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "progressResult",
          "package": "LogicGrowsOnTrees",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:progressResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003esimplifyCheckpointRoot\u003c/a\u003e\u003c/code\u003e everywhere in the checkpoint starting from\n    the bottom up.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "simplifyCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#simplifyCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Applies simplifyCheckpointRoot everywhere in the checkpoint starting from the bottom up",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "simplifyCheckpoint",
          "normalized": "Checkpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "signature": "Checkpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:simplifyCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplifies the root of the checkpoint by replacing\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eChoicepoint Unexplored Unexplored\u003c/code\u003e with \u003ccode\u003eUnexplored\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eChoicepoint Explored Explored\u003c/code\u003e with \u003ccode\u003eExplored\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eCachePoint _ Explored\u003c/code\u003e with \u003ccode\u003eExplored\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "simplifyCheckpointRoot",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#simplifyCheckpointRoot",
          "type": "function"
        },
        "index": {
          "description": "Simplifies the root of the checkpoint by replacing Choicepoint Unexplored Unexplored with Unexplored Choicepoint Explored Explored with Explored and CachePoint Explored with Explored",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "simplifyCheckpointRoot",
          "normalized": "Checkpoint-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint Root",
          "signature": "Checkpoint-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:simplifyCheckpointRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the current state of exploration, perform an additional step of\n    exploration, returning any solution that was found and the next state of the\n    exploration --- which will be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the entire tree has been\n    explored.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "stepThroughTreeStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationState α -\u003e (Maybe α, Maybe (ExplorationState α))",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#stepThroughTreeStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Given the current state of exploration perform an additional step of exploration returning any solution that was found and the next state of the exploration which will be Nothing if the entire tree has been explored",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "stepThroughTreeStartingFromCheckpoint",
          "normalized": "ExplorationState a-\u003e(Maybe a,Maybe(ExplorationState a))",
          "package": "LogicGrowsOnTrees",
          "partial": "Through Tree Starting From Checkpoint",
          "signature": "ExplorationState α-\u003e(Maybe α,Maybe(ExplorationState α))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:stepThroughTreeStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estepThroughTreeStartingFromCheckpoint\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "stepThroughTreeTStartingFromCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationTState m α -\u003e m (Maybe α, Maybe (ExplorationTState m α))",
          "source": "src/LogicGrowsOnTrees-Checkpoint.html#stepThroughTreeTStartingFromCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Like stepThroughTreeStartingFromCheckpoint but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Checkpoint",
          "module": "LogicGrowsOnTrees.Checkpoint",
          "name": "stepThroughTreeTStartingFromCheckpoint",
          "normalized": "ExplorationTState a b-\u003ea(Maybe b,Maybe(ExplorationTState a b))",
          "package": "LogicGrowsOnTrees",
          "partial": "Through Tree TStarting From Checkpoint",
          "signature": "ExplorationTState m α-\u003em(Maybe α,Maybe(ExplorationTState m α))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Checkpoint.html#v:stepThroughTreeTStartingFromCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains examples of logic programs that generate all the valid\n    colorings of a given (geographical) map.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "MapColoring",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-MapColoring.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains examples of logic programs that generate all the valid colorings of given geographical map",
          "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "MapColoring",
          "package": "LogicGrowsOnTrees",
          "partial": "Map Coloring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all valid map colorings. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "coloringSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e Word-\u003e (Word -\u003e Word -\u003e Bool)-\u003e m [(Word, Word)]",
          "type": "function"
        },
        "index": {
          "description": "Generate all valid map colorings",
          "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "coloringSolutions",
          "normalized": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003ea[(Word,Word)]",
          "package": "LogicGrowsOnTrees",
          "partial": "Solutions",
          "signature": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003em[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#v:coloringSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all \u003cem\u003eunique\u003c/em\u003e valid map colorings.  That is, exactly one coloring will\n    be generated from each class of colorings that are equivalent under a\n    permutation of colors.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "coloringUniqueSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e Word-\u003e (Word -\u003e Word -\u003e Bool)-\u003e m [(Word, Word)]",
          "type": "function"
        },
        "index": {
          "description": "Generate all unique valid map colorings That is exactly one coloring will be generated from each class of colorings that are equivalent under permutation of colors",
          "hierarchy": "LogicGrowsOnTrees Examples MapColoring",
          "module": "LogicGrowsOnTrees.Examples.MapColoring",
          "name": "coloringUniqueSolutions",
          "normalized": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003ea[(Word,Word)]",
          "package": "LogicGrowsOnTrees",
          "partial": "Unique Solutions",
          "signature": "Word-\u003eWord-\u003e(Word-\u003eWord-\u003eBool)-\u003em[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-MapColoring.html#v:coloringUniqueSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a heavily optimized solver for the n-queens problems.\nSpecifically, it uses the following tricks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e symmetry breaking to prune redundant solutions\n\u003c/li\u003e\u003cli\u003e unpacked datatypes instead of multiple arguments\n\u003c/li\u003e\u003cli\u003e optimized \u003ccode\u003e\u003ca\u003egetOpenings\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e C code for the inner-most loop\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eINLINE\u003c/code\u003es in many places in order to create optimized specializations of\n    the generic functions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBenchmarks were used to determine that all of these tricks resulted in\nperformance improvements using GHC 7.4.3.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "Advanced",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains heavily optimized solver for the n-queens problems Specifically it uses the following tricks symmetry breaking to prune redundant solutions unpacked datatypes instead of multiple arguments optimized getOpenings code for the inner-most loop INLINE in many places in order to create optimized specializations of the generic functions Benchmarks were used to determine that all of these tricks resulted in performance improvements using GHC",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "Advanced",
          "package": "LogicGrowsOnTrees",
          "partial": "Advanced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state while the 180-degree rotational symmetry is being broken. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak180State",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "data"
        },
        "index": {
          "description": "The state while the degree rotational symmetry is being broken",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak180State",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Break State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensBreak180State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state type while the 90-degree rotational symmetry is being broken. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak90State",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "data"
        },
        "index": {
          "description": "The state type while the degree rotational symmetry is being broken",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak90State",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Break State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensBreak90State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state during the brute-force search. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSearchState",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "data"
        },
        "index": {
          "description": "The state during the brute-force search",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSearchState",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Search State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSearchState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a solution, which takes the form of a list of coordinates. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSolution",
          "type": "type"
        },
        "index": {
          "description": "Type alias for solution which takes the form of list of coordinates",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Solution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a list of solutions. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSolutions",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSolutions",
          "type": "type"
        },
        "index": {
          "description": "Type alias for list of solutions",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSolutions",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Solutions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible board symmetries. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSymmetry",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
          "type": "data"
        },
        "index": {
          "description": "The possible board symmetries",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSymmetry",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Symmetry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:NQueensSymmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a position and bit at that position. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "PositionAndBit",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#PositionAndBit",
          "type": "data"
        },
        "index": {
          "description": "Represents position and bit at that position",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "PositionAndBit",
          "package": "LogicGrowsOnTrees",
          "partial": "Position And Bit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:PositionAndBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ePositionAndBit\u003c/a\u003e\u003c/code\u003e, but also including the same for the reflection of the\n    position (i.e., one less than the board size minus the position).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "PositionAndBitWithReflection",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#PositionAndBitWithReflection",
          "type": "data"
        },
        "index": {
          "description": "Like PositionAndBit but also including the same for the reflection of the position i.e one less than the board size minus the position",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "PositionAndBitWithReflection",
          "package": "LogicGrowsOnTrees",
          "partial": "Position And Bit With Reflection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#t:PositionAndBitWithReflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe board is symmetric under all rotations \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "AllRotations",
          "package": "LogicGrowsOnTrees",
          "signature": "AllRotations",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
          "type": "function"
        },
        "index": {
          "description": "the board is symmetric under all rotations",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "AllRotations",
          "package": "LogicGrowsOnTrees",
          "partial": "All Rotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:AllRotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe board is symmetric under all rotations and reflections \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "AllSymmetries",
          "package": "LogicGrowsOnTrees",
          "signature": "AllSymmetries",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
          "type": "function"
        },
        "index": {
          "description": "the board is symmetric under all rotations and reflections",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "AllSymmetries",
          "package": "LogicGrowsOnTrees",
          "partial": "All Symmetries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:AllSymmetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak180State",
          "package": "LogicGrowsOnTrees",
          "signature": "NQueensBreak180State",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak180State",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Break State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensBreak180State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak90State",
          "package": "LogicGrowsOnTrees",
          "signature": "NQueensBreak90State",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensBreak90State",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Break State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensBreak90State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSearchState",
          "package": "LogicGrowsOnTrees",
          "signature": "NQueensSearchState",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NQueensSearchState",
          "package": "LogicGrowsOnTrees",
          "partial": "NQueens Search State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NQueensSearchState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe board has no symmetries at all \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NoSymmetries",
          "package": "LogicGrowsOnTrees",
          "signature": "NoSymmetries",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
          "type": "function"
        },
        "index": {
          "description": "the board has no symmetries at all",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "NoSymmetries",
          "package": "LogicGrowsOnTrees",
          "partial": "No Symmetries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:NoSymmetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe board is symmetric under 180 degree rotations \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "Rotate180Only",
          "package": "LogicGrowsOnTrees",
          "signature": "Rotate180Only",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSymmetry",
          "type": "function"
        },
        "index": {
          "description": "the board is symmetric under degree rotations",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "Rotate180Only",
          "package": "LogicGrowsOnTrees",
          "partial": "Rotate Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:Rotate180Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes all rotations and reflections of the given solution. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "allRotationsAndReflectionsOf",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolutions",
          "type": "function"
        },
        "index": {
          "description": "Computes all rotations and reflections of the given solution",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "allRotationsAndReflectionsOf",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
          "package": "LogicGrowsOnTrees",
          "partial": "Rotations And Reflections Of",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:allRotationsAndReflectionsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes all rotations of the given solution. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "allRotationsOf",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolutions",
          "type": "function"
        },
        "index": {
          "description": "Computes all rotations of the given solution",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "allRotationsOf",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
          "package": "LogicGrowsOnTrees",
          "partial": "Rotations Of",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolutions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:allRotationsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_number_of_queens_remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_columns",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_columns",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_negative_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_positive_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_right_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_right_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_right_positive_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_rows",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_occupied_rows",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_occupied_rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_window_size",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_window_size",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_window_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_window_start",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak180State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b180_window_start",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b180_window_start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_number_of_queens_remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_negative_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_positive_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_rows_and_columns",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_occupied_rows_and_columns",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_occupied_rows_and_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_window_size",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_window_size",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_window_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_window_start",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensBreak90State",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "b90_window_start",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:b90_window_start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC code that performs a brute-force search for the remaining queens.  The\n    last three arguments are allowed to be NULL, in which case they are ignored\n    and only the count is returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "c_LogicGrowsOnTrees_Queens_count_solutions",
          "package": "LogicGrowsOnTrees",
          "signature": "CUInt-\u003e CUInt-\u003e CUInt-\u003e Word64-\u003e Word64-\u003e Word64-\u003e Word64-\u003e FunPtr (CUInt -\u003e CUInt -\u003e IO ())-\u003e FunPtr (IO ())-\u003e FunPtr (IO ())-\u003e IO CUInt",
          "type": "function"
        },
        "index": {
          "description": "code that performs brute-force search for the remaining queens The last three arguments are allowed to be NULL in which case they are ignored and only the count is returned",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "c_LogicGrowsOnTrees_Queens_count_solutions",
          "normalized": "CUInt-\u003eCUInt-\u003eCUInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eFunPtr(CUInt-\u003eCUInt-\u003eIO())-\u003eFunPtr(IO())-\u003eFunPtr(IO())-\u003eIO CUInt",
          "package": "LogicGrowsOnTrees",
          "partial": "Logic Grows On Trees Queens",
          "signature": "CUInt-\u003eCUInt-\u003eCUInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eFunPtr(CUInt-\u003eCUInt-\u003eIO())-\u003eFunPtr(IO())-\u003eFunPtr(IO())-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:c_LogicGrowsOnTrees_Queens_count_solutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts coordinates of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e to type \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "convertSolutionToWord",
          "package": "LogicGrowsOnTrees",
          "signature": "[(Int, Int)] -\u003e [(Word, Word)]",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#convertSolutionToWord",
          "type": "function"
        },
        "index": {
          "description": "Converts coordinates of type Int to type Word",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "convertSolutionToWord",
          "normalized": "[(Int,Int)]-\u003e[(Word,Word)]",
          "package": "LogicGrowsOnTrees",
          "partial": "Solution To Word",
          "signature": "[(Int,Int)]-\u003e[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:convertSolutionToWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the outermost layers of a solution. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "extractExteriorFromSolution",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e Word-\u003e NQueensSolution-\u003e NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Extracts the outermost layers of solution",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "extractExteriorFromSolution",
          "normalized": "Word-\u003eWord-\u003eNQueensSolution-\u003eNQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Exterior From Solution",
          "signature": "Word-\u003eWord-\u003eNQueensSolution-\u003eNQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:extractExteriorFromSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the openings for a queen \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "getOpenings",
          "package": "LogicGrowsOnTrees",
          "signature": "Int-\u003e Word64-\u003e m PositionAndBit",
          "type": "function"
        },
        "index": {
          "description": "Get the openings for queen",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "getOpenings",
          "normalized": "Int-\u003eWord-\u003ea PositionAndBit",
          "package": "LogicGrowsOnTrees",
          "partial": "Openings",
          "signature": "Int-\u003eWord-\u003em PositionAndBit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:getOpenings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the symmetric openings for a queen \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "getSymmetricOpenings",
          "package": "LogicGrowsOnTrees",
          "signature": "Int-\u003e Word64-\u003e m PositionAndBitWithReflection",
          "type": "function"
        },
        "index": {
          "description": "Get the symmetric openings for queen",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "getSymmetricOpenings",
          "normalized": "Int-\u003eWord-\u003ea PositionAndBitWithReflection",
          "package": "LogicGrowsOnTrees",
          "partial": "Symmetric Openings",
          "signature": "Int-\u003eWord-\u003em PositionAndBitWithReflection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:getSymmetricOpenings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a solution has reflection symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasReflectionSymmetry",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if solution has reflection symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasReflectionSymmetry",
          "normalized": "Word-\u003eNQueensSolution-\u003eBool",
          "package": "LogicGrowsOnTrees",
          "partial": "Reflection Symmetry",
          "signature": "Word-\u003eNQueensSolution-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasReflectionSymmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a solution has 180-degree rotation symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasRotate180Symmetry",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if solution has degree rotation symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasRotate180Symmetry",
          "normalized": "Word-\u003eNQueensSolution-\u003eBool",
          "package": "LogicGrowsOnTrees",
          "partial": "Rotate Symmetry",
          "signature": "Word-\u003eNQueensSolution-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasRotate180Symmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a solution has 90-degree rotation symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasRotate90Symmetry",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if solution has degree rotation symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "hasRotate90Symmetry",
          "normalized": "Word-\u003eNQueensSolution-\u003eBool",
          "package": "LogicGrowsOnTrees",
          "partial": "Rotate Symmetry",
          "signature": "Word-\u003eNQueensSolution-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:hasRotate90Symmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapper stub for the finalize value function pointer \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkFinalizeValue",
          "package": "LogicGrowsOnTrees",
          "signature": "IO () -\u003e IO (FunPtr (IO ()))",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkFinalizeValue",
          "type": "function"
        },
        "index": {
          "description": "wrapper stub for the finalize value function pointer",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkFinalizeValue",
          "normalized": "IO()-\u003eIO(FunPtr(IO()))",
          "package": "LogicGrowsOnTrees",
          "partial": "Finalize Value",
          "signature": "IO()-\u003eIO(FunPtr(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkFinalizeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapper stub for the pop value function pointer \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkPopValue",
          "package": "LogicGrowsOnTrees",
          "signature": "IO () -\u003e IO (FunPtr (IO ()))",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkPopValue",
          "type": "function"
        },
        "index": {
          "description": "wrapper stub for the pop value function pointer",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkPopValue",
          "normalized": "IO()-\u003eIO(FunPtr(IO()))",
          "package": "LogicGrowsOnTrees",
          "partial": "Pop Value",
          "signature": "IO()-\u003eIO(FunPtr(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkPopValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapper stub for the push value function pointer \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkPushValue",
          "package": "LogicGrowsOnTrees",
          "signature": "(CUInt -\u003e CUInt -\u003e IO ()) -\u003e IO (FunPtr (CUInt -\u003e CUInt -\u003e IO ()))",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#mkPushValue",
          "type": "function"
        },
        "index": {
          "description": "wrapper stub for the push value function pointer",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "mkPushValue",
          "normalized": "(CUInt-\u003eCUInt-\u003eIO())-\u003eIO(FunPtr(CUInt-\u003eCUInt-\u003eIO()))",
          "package": "LogicGrowsOnTrees",
          "partial": "Push Value",
          "signature": "(CUInt-\u003eCUInt-\u003eIO())-\u003eIO(FunPtr(CUInt-\u003eCUInt-\u003eIO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:mkPushValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of equivalent solutions for a solution with a given symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "multiplicityForSymmetry",
          "package": "LogicGrowsOnTrees",
          "signature": "NQueensSymmetry -\u003e Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#multiplicityForSymmetry",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of equivalent solutions for solution with given symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "multiplicityForSymmetry",
          "normalized": "NQueensSymmetry-\u003eWord",
          "package": "LogicGrowsOnTrees",
          "partial": "For Symmetry",
          "signature": "NQueensSymmetry-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:multiplicityForSymmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all of the equivalent solutions with an equivalent symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "multiplySolution",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSymmetry-\u003e NQueensSolution-\u003e m NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Gets all of the equivalent solutions with an equivalent symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "multiplySolution",
          "normalized": "Word-\u003eNQueensSymmetry-\u003eNQueensSolution-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Solution",
          "signature": "Word-\u003eNQueensSymmetry-\u003eNQueensSolution-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:multiplySolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak the 180-degree rotational symmetry at the current layer. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBreak180",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e NQueensBreak180State-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Break the degree rotational symmetry at the current layer",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBreak180",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eNQueensBreak State-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Break",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eNQueensBreak State-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBreak180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak the 90-degree rotational symmetry at the current layer. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBreak90",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e (α -\u003e NQueensBreak90State -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e NQueensBreak90State-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Break the degree rotational symmetry at the current layer",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBreak90",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eNQueensBreak State-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Break",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eNQueensBreak State-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBreak90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board size. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensBruteForceCount",
          "type": "function"
        },
        "index": {
          "description": "Generates the solution count to the n-queens problem with the given board size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Brute Force Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for directly using the brute-force search approach \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Interface for directly using the brute-force search approach",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceGeneric",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Brute Force Generic",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensBruteForceSolutions",
          "type": "function"
        },
        "index": {
          "description": "Generates the solutions to the n-queens problem with the given board size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensBruteForceSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Brute Force Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensBruteForceSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board size. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensCCount",
          "type": "function"
        },
        "index": {
          "description": "Generates the solution count to the n-queens problem with the given board size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "CCount",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for directly using the C search approach \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Interface for directly using the search approach",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCGeneric",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "CGeneric",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls C code to perform a brute-force search for the remaining queens.  The\n    types &#945; and &#946; must be \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e because this function actually optimizes\n    for the case where only counting is being done by providing null values for\n    the function pointer inputs.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCSearch",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Int-\u003e Int-\u003e NQueensSearchState-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Calls code to perform brute-force search for the remaining queens The types and must be Typeable because this function actually optimizes for the case where only counting is being done by providing null values for the function pointer inputs",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCSearch",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eInt-\u003eInt-\u003eNQueensSearchState-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "CSearch",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eInt-\u003eInt-\u003eNQueensSearchState-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#nqueensCSolutions",
          "type": "function"
        },
        "index": {
          "description": "Generates the solutions to the n-queens problem with the given board size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensCSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "CSolutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensCSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to the main algorithm;  note that &#945; and &#946; need to be \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n    because of an optimization used in the C part of the code. This function\n   takes functions for its first two operators that operate on partial solutions\n   so that the same algorithm can be used both for generating solutions and\n   counting them; the advantage of this approach is that it is much easier to\n   find problems in the generated solution than it is in their count, so we can\n   test it by looking for problems in the generated solutions, and when we are\n   assured that it works we can trust it to obtain the correct counts.\n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Examples.Queens.Advanced\",\"LogicGrowsOnTrees.Examples.Queens\"]",
          "name": "nqueensGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (Word -\u003e NQueensSymmetry -\u003e α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensGeneric\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensGeneric\"]"
        },
        "index": {
          "description": "Interface to the main algorithm note that and need to be Typeable because of an optimization used in the part of the code This function takes functions for its first two operators that operate on partial solutions so that the same algorithm can be used both for generating solutions and counting them the advantage of this approach is that it is much easier to find problems in the generated solution than it is in their count so we can test it by looking for problems in the generated solutions and when we are assured that it works we can trust it to obtain the correct counts",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensGeneric",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(Word-\u003eNQueensSymmetry-\u003ea-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Generic",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(Word-\u003eNQueensSymmetry-\u003eα-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing brute-force to find placements for all of the remaining queens. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensSearch",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e m β)-\u003e α-\u003e Int-\u003e NQueensSearchState-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Using brute-force to find placements for all of the remaining queens",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensSearch",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eb c)-\u003ea-\u003eInt-\u003eNQueensSearchState-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Search",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003em β)-\u003eα-\u003eInt-\u003eNQueensSearchState-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak the reflection symmetry. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensStart",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (α -\u003e NQueensBreak90State -\u003e m β)-\u003e (α -\u003e NQueensBreak180State -\u003e m β)-\u003e (α -\u003e Int -\u003e NQueensSearchState -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function"
        },
        "index": {
          "description": "Break the reflection symmetry",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensStart",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eNQueensBreak State-\u003eb c)-\u003e(a-\u003eInt-\u003eNQueensSearchState-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "Start",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eNQueensBreak State-\u003em β)-\u003e(α-\u003eInt-\u003eNQueensSearchState-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Examples.Queens.Advanced\",\"LogicGrowsOnTrees.Examples.Queens\"]",
          "name": "nqueensWithListAtBottomGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (Word -\u003e NQueensSymmetry -\u003e α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensWithListAtBottomGeneric\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithListAtBottomGeneric\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensWithListAtBottomGeneric",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(Word-\u003eNQueensSymmetry-\u003ea-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "With List At Bottom Generic",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(Word-\u003eNQueensSymmetry-\u003eα-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensWithListAtBottomGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Examples.Queens.Advanced\",\"LogicGrowsOnTrees.Examples.Queens\"]",
          "name": "nqueensWithNothingAtBottomGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "([(Word, Word)] -\u003e α -\u003e α)-\u003e (Word -\u003e NQueensSymmetry -\u003e α -\u003e m β)-\u003e α-\u003e Word-\u003e m β",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensWithNothingAtBottomGeneric\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithNothingAtBottomGeneric\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "nqueensWithNothingAtBottomGeneric",
          "normalized": "([(Word,Word)]-\u003ea-\u003ea)-\u003e(Word-\u003eNQueensSymmetry-\u003ea-\u003eb c)-\u003ea-\u003eWord-\u003eb c",
          "package": "LogicGrowsOnTrees",
          "partial": "With Nothing At Bottom Generic",
          "signature": "([(Word,Word)]-\u003eα-\u003eα)-\u003e(Word-\u003eNQueensSymmetry-\u003eα-\u003em β)-\u003eα-\u003eWord-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:nqueensWithNothingAtBottomGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflects the bits in a number so that each bit at position i is moved to\n    position -i (i.e., what you get when you take a bit at position 0 and rotate\n    it i positions to the right)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "reflectBits",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64 -\u003e Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#reflectBits",
          "type": "function"
        },
        "index": {
          "description": "Reflects the bits in number so that each bit at position is moved to position i.e what you get when you take bit at position and rotate it positions to the right",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "reflectBits",
          "normalized": "Word-\u003eWord",
          "package": "LogicGrowsOnTrees",
          "partial": "Bits",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:reflectBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflects the columns of a solution \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "reflectSolution",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Reflects the columns of solution",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "reflectSolution",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Solution",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:reflectSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a solution left by 180 degrees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotate180",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Rotate solution left by degrees",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotate180",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotate180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a solution left by 90 degrees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotateLeft",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Rotate solution left by degrees",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotateLeft",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Left",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotateLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a solution right by 90 degrees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotateRight",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSolution",
          "type": "function"
        },
        "index": {
          "description": "Rotate solution right by degrees",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "rotateRight",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Right",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:rotateRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_number_of_queens_remaining",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_number_of_queens_remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_columns",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_columns",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_negative_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_negative_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_positive_diagonals",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_positive_diagonals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_rows",
          "package": "LogicGrowsOnTrees",
          "signature": "Word64",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_occupied_rows",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_occupied_rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_row",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens-Advanced.html#NQueensSearchState",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "s_row",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:s_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the symmetry class of the given solution \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "symmetryOf",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e NQueensSolution-\u003e NQueensSymmetry",
          "type": "function"
        },
        "index": {
          "description": "Computes the symmetry class of the given solution",
          "hierarchy": "LogicGrowsOnTrees Examples Queens Advanced",
          "module": "LogicGrowsOnTrees.Examples.Queens.Advanced",
          "name": "symmetryOf",
          "normalized": "Word-\u003eNQueensSolution-\u003eNQueensSymmetry",
          "package": "LogicGrowsOnTrees",
          "partial": "Of",
          "signature": "Word-\u003eNQueensSolution-\u003eNQueensSymmetry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens-Advanced.html#v:symmetryOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains examples of logic programs that generate solutions to the\n    n-queens problem, which is the problem of finding ways to put n queens on an\n    n x n chessboard in such a way that they do not conflict. Solutions of the\n    n-queens problem take the form of a list of n coordinates such that no\n    coordinates have overlapping rows, columns, or diagonals (as these are the\n    directions in which a queen can attack).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "Queens",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains examples of logic programs that generate solutions to the n-queens problem which is the problem of finding ways to put queens on an chessboard in such way that they do not conflict Solutions of the n-queens problem take the form of list of coordinates such that no coordinates have overlapping rows columns or diagonals as these are the directions in which queen can attack",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "Queens",
          "package": "LogicGrowsOnTrees",
          "partial": "Queens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis newtype wrapper is used to provide an ArgVal instance that ensure that\n    an input board size is between 1 and \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.  In general you\n    do not need to use this type directly but instead can use the function\n    \u003ccode\u003e\u003ca\u003emakeBoardSizeTermAtPosition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "BoardSize",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
          "type": "newtype"
        },
        "index": {
          "description": "This newtype wrapper is used to provide an ArgVal instance that ensure that an input board size is between and nqueens maximum size In general you do not need to use this type directly but instead can use the function makeBoardSizeTermAtPosition",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "BoardSize",
          "package": "LogicGrowsOnTrees",
          "partial": "Board Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#t:BoardSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "BoardSize",
          "package": "LogicGrowsOnTrees",
          "signature": "BoardSize",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "BoardSize",
          "package": "LogicGrowsOnTrees",
          "partial": "Board Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:BoardSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "getBoardSize",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#BoardSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "getBoardSize",
          "package": "LogicGrowsOnTrees",
          "partial": "Board Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:getBoardSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructs a term for the \u003ccode\u003ecmdtheline\u003c/code\u003e command line parser that expects\n    a valid board size (i.e., a number between 1 and \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e) at\n    the given positional argument.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "makeBoardSizeTermAtPosition",
          "package": "LogicGrowsOnTrees",
          "signature": "Int-\u003e Term Word",
          "type": "function"
        },
        "index": {
          "description": "This constructs term for the cmdtheline command line parser that expects valid board size i.e number between and nqueens maximum size at the given positional argument",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "makeBoardSizeTermAtPosition",
          "normalized": "Int-\u003eTerm Word",
          "package": "LogicGrowsOnTrees",
          "partial": "Board Size Term At Position",
          "signature": "Int-\u003eTerm Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:makeBoardSizeTermAtPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003epartial function\u003c/em\u003e that returns the number of solutions for the given\n    input board size;  this should only be used when you are sure that the input\n    is not greater than \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensCorrectCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensCorrectCount",
          "type": "function"
        },
        "index": {
          "description": "partial function that returns the number of solutions for the given input board size this should only be used when you are sure that the input is not greater than nqueens maximum size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensCorrectCount",
          "normalized": "Word-\u003eWord",
          "package": "LogicGrowsOnTrees",
          "partial": "Correct Count",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensCorrectCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensCount",
          "type": "function"
        },
        "index": {
          "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solutions to the n-queens problem with the given board size. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensSolutions",
          "type": "function"
        },
        "index": {
          "description": "Generates the solutions to the n-queens problem with the given board size",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingBitsCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingBitsCount",
          "type": "function"
        },
        "index": {
          "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingBitsCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Using Bits Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingBitsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate solutions to the n-queens problem using bitwise-operations. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingBitsSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingBitsSolutions",
          "type": "function"
        },
        "index": {
          "description": "Generate solutions to the n-queens problem using bitwise-operations",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingBitsSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Using Bits Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingBitsSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the solution count to the n-queens problem with the given board\n    size;  you need to sum over all these counts to obtain the total, which is\n    done by the \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e (and related) functions.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingSetsCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingSetsCount",
          "type": "function"
        },
        "index": {
          "description": "Generates the solution count to the n-queens problem with the given board size you need to sum over all these counts to obtain the total which is done by the exploreTree and related functions",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingSetsCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Using Sets Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingSetsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate solutions to the n-queens problem using \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingSetsSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensUsingSetsSolutions",
          "type": "function"
        },
        "index": {
          "description": "Generate solutions to the n-queens problem using IntSet",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensUsingSetsSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "Using Sets Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensUsingSetsSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enqueensCount\u003c/a\u003e\u003c/code\u003e, but uses List at the bottom instead of C. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithListAtBottomCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensWithListAtBottomCount",
          "type": "function"
        },
        "index": {
          "description": "Like nqueensCount but uses List at the bottom instead of",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithListAtBottomCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "With List At Bottom Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithListAtBottomCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enqueensSolutions\u003c/a\u003e\u003c/code\u003e, but uses List at the bottom instead of C. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithListAtBottomSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensWithListAtBottomSolutions",
          "type": "function"
        },
        "index": {
          "description": "Like nqueensSolutions but uses List at the bottom instead of",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithListAtBottomSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "With List At Bottom Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithListAtBottomSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enqueensCount\u003c/a\u003e\u003c/code\u003e, but uses List at the bottom instead of C. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithNothingAtBottomCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m WordSum",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensWithNothingAtBottomCount",
          "type": "function"
        },
        "index": {
          "description": "Like nqueensCount but uses List at the bottom instead of",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithNothingAtBottomCount",
          "normalized": "Word-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "With Nothing At Bottom Count",
          "signature": "Word-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithNothingAtBottomCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enqueensSolutions\u003c/a\u003e\u003c/code\u003e, but uses List at the bottom instead of C. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithNothingAtBottomSolutions",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m NQueensSolution",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueensWithNothingAtBottomSolutions",
          "type": "function"
        },
        "index": {
          "description": "Like nqueensSolutions but uses List at the bottom instead of",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueensWithNothingAtBottomSolutions",
          "normalized": "Word-\u003ea NQueensSolution",
          "package": "LogicGrowsOnTrees",
          "partial": "With Nothing At Bottom Solutions",
          "signature": "Word-\u003em NQueensSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueensWithNothingAtBottomSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table with the correct number of solutions for board sizes ranging from 1\n    to \u003ccode\u003e\u003ca\u003enqueens_maximum_size\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis data was pulled from \u003ca\u003ehttp://queens.inf.tu-dresden.de/?n=f&l=en\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueens_correct_counts",
          "package": "LogicGrowsOnTrees",
          "signature": "IntMap Word",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueens_correct_counts",
          "type": "function"
        },
        "index": {
          "description": "table with the correct number of solutions for board sizes ranging from to nqueens maximum size This data was pulled from http queens.inf.tu-dresden.de en",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueens_correct_counts",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueens_correct_counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum board size in \u003ccode\u003e\u003ca\u003enqueens_correct_counts\u003c/a\u003e\u003c/code\u003e.  In a 64-bit environment\n    this value is equal to the largest board size for which we know the number\n    of solutions, which is 26.  In a 32-bit environment this value is equal to\n    the largest board size such that the number of solutions fits within a\n    32-bit (unsigned) integer (i.e., the range of \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e), which is 18.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueens_maximum_size",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Examples-Queens.html#nqueens_maximum_size",
          "type": "function"
        },
        "index": {
          "description": "The maximum board size in nqueens correct counts In bit environment this value is equal to the largest board size for which we know the number of solutions which is In bit environment this value is equal to the largest board size such that the number of solutions fits within bit unsigned integer i.e the range of Word which is",
          "hierarchy": "LogicGrowsOnTrees Examples Queens",
          "module": "LogicGrowsOnTrees.Examples.Queens",
          "name": "nqueens_maximum_size",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Examples-Queens.html#v:nqueens_maximum_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for working with \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003es, which\n    indicate a location within a tree but, unlike \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e, without the cached\n    values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Location",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains infrastructure for working with Location which indicate location within tree but unlike Path without the cached values",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Location",
          "package": "LogicGrowsOnTrees",
          "partial": "Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLocatableT\u003c/a\u003e\u003c/code\u003e is a monad transformer that allows you to take any MonadPlus\n    and add to it the ability to tell where you are in the tree created by the\n    \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableT",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
          "type": "newtype"
        },
        "index": {
          "description": "LocatableT is monad transformer that allows you to take any MonadPlus and add to it the ability to tell where you are in the tree created by the mplus",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e augmented with the ability to get the current location \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTree",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableTree",
          "type": "type"
        },
        "index": {
          "description": "Tree augmented with the ability to get the current location",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTree",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e, but running in the IO monad. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeIO",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeIO",
          "type": "type"
        },
        "index": {
          "description": "Like LocatableTree but running in the IO monad",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeIO",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e, but running in an arbitrary monad. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
          "type": "newtype"
        },
        "index": {
          "description": "Like LocatableTree but running in an arbitrary monad",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:LocatableTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e identifies a location in a tree;  unlike \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e it only\n    contains information about the list of branches that have been taken, and\n    not information about the cached values encounted along the way.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Location",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#Location",
          "type": "data"
        },
        "index": {
          "description": "Location identifies location in tree unlike Path it only contains information about the list of branches that have been taken and not information about the cached values encounted along the way",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Location",
          "package": "LogicGrowsOnTrees",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eMonadLocatable\u003c/a\u003e\u003c/code\u003e allows you to get your current location within a tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "MonadLocatable",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#MonadLocatable",
          "type": "class"
        },
        "index": {
          "description": "The class MonadLocatable allows you to get your current location within tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "MonadLocatable",
          "package": "LogicGrowsOnTrees",
          "partial": "Monad Locatable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:MonadLocatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSolution\u003c/a\u003e\u003c/code\u003e is a result tagged with the location of the leaf at which it\n    was found.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Solution",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Location.html#Solution",
          "type": "data"
        },
        "index": {
          "description": "Solution is result tagged with the location of the leaf at which it was found",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Solution",
          "package": "LogicGrowsOnTrees",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableT",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:LocatableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTreeT",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "LocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:LocatableTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "Solution",
          "package": "LogicGrowsOnTrees",
          "signature": "Solution",
          "source": "src/LogicGrowsOnTrees-Location.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "Solution",
          "package": "LogicGrowsOnTrees",
          "partial": "Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend the path indicated by a checkpoint cursor to the given location's path. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyCheckpointCursorToLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "CheckpointCursor-\u003e Location-\u003e Location",
          "type": "function"
        },
        "index": {
          "description": "Append the path indicated by checkpoint cursor to the given location path",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyCheckpointCursorToLocation",
          "normalized": "CheckpointCursor-\u003eLocation-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint Cursor To Location",
          "signature": "CheckpointCursor-\u003eLocation-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyCheckpointCursorToLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend the path indicated by a context to the given location's path. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyContextToLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Context m α-\u003e Location-\u003e Location",
          "type": "function"
        },
        "index": {
          "description": "Append the path indicated by context to the given location path",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyContextToLocation",
          "normalized": "Context a b-\u003eLocation-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Context To Location",
          "signature": "Context m α-\u003eLocation-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyContextToLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a path to a location's path. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyPathToLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Path-\u003e Location-\u003e Location",
          "type": "function"
        },
        "index": {
          "description": "Append path to location path",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "applyPathToLocation",
          "normalized": "Path-\u003eLocation-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Path To Location",
          "signature": "Path-\u003eLocation-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:applyPathToLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a location to a list of branch choices. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "branchingFromLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e [BranchChoice]",
          "source": "src/LogicGrowsOnTrees-Location.html#branchingFromLocation",
          "type": "function"
        },
        "index": {
          "description": "Converts location to list of branch choices",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "branchingFromLocation",
          "normalized": "Location-\u003e[BranchChoice]",
          "package": "LogicGrowsOnTrees",
          "partial": "From Location",
          "signature": "Location-\u003e[BranchChoice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:branchingFromLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore all the nodes in a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e and sum over all the results in the\n    leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTree",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTree α -\u003e α",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTree",
          "type": "function"
        },
        "index": {
          "description": "Explore all the nodes in LocatableTree and sum over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTree",
          "normalized": "LocatableTree a-\u003ea",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "signature": "LocatableTree α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreLocatableTree\u003c/a\u003e\u003c/code\u003e, but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTreeT m α -\u003e m α",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeT",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreLocatableTree but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeT",
          "normalized": "LocatableTreeT a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "signature": "LocatableTreeT m α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreLocatableTree\u003c/a\u003e\u003c/code\u003e, but the results are discarded so the tree is\n    only explored for its side-effects.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeTAndIgnoreResults",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTreeT m α -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeTAndIgnoreResults",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreLocatableTree but the results are discarded so the tree is only explored for its side-effects",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeTAndIgnoreResults",
          "normalized": "LocatableTreeT a b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree TAnd Ignore Results",
          "signature": "LocatableTreeT m α-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeTAndIgnoreResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e until a result (i.e., a leaf) has\n    been found; if a result has been found then it is returned wrapped in\n    \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTree α -\u003e Maybe α",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeUntilFirst",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in LocatableTree until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeUntilFirst",
          "normalized": "LocatableTree a-\u003eMaybe a",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree Until First",
          "signature": "LocatableTree α-\u003eMaybe α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreLocatableTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeUntilFirstT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTreeT m α -\u003e m (Maybe α)",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreLocatableTreeUntilFirstT",
          "type": "function"
        },
        "index": {
          "description": "Like exploreLocatableTreeUntilFirst but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreLocatableTreeUntilFirstT",
          "normalized": "LocatableTreeT a b-\u003ea(Maybe b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree Until First",
          "signature": "LocatableTreeT m α-\u003em(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreLocatableTreeUntilFirstT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocation\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTUntilFirstWithLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α -\u003e m (Maybe (Solution α))",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTUntilFirstWithLocation",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirstWithLocation but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTUntilFirstWithLocation",
          "normalized": "TreeT a b-\u003ea(Maybe(Solution b))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First With Location",
          "signature": "TreeT m α-\u003em(Maybe(Solution α))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTUntilFirstWithLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocationStartingAt\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTUntilFirstWithLocationStartingAt",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e TreeT m α -\u003e m (Maybe (Solution α))",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTUntilFirstWithLocationStartingAt",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirstWithLocationStartingAt but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTUntilFirstWithLocationStartingAt",
          "normalized": "Location-\u003eTreeT a b-\u003ea(Maybe(Solution b))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First With Location Starting At",
          "signature": "Location-\u003eTreeT m α-\u003em(Maybe(Solution α))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTUntilFirstWithLocationStartingAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocations\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTWithLocations",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α -\u003e m [Solution α]",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTWithLocations",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeWithLocations but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTWithLocations",
          "normalized": "TreeT a b-\u003ea[Solution b]",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TWith Locations",
          "signature": "TreeT m α-\u003em[Solution α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTWithLocations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocationsStartingAt\u003c/a\u003e\u003c/code\u003e but for an impure trees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTWithLocationsStartingAt",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e TreeT m α -\u003e m [Solution α]",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeTWithLocationsStartingAt",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeWithLocationsStartingAt but for an impure trees",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeTWithLocationsStartingAt",
          "normalized": "Location-\u003eTreeT a b-\u003ea[Solution b]",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TWith Locations Starting At",
          "signature": "Location-\u003eTreeT m α-\u003em[Solution α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeTWithLocationsStartingAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in a tree until a result (i.e., a leaf) has been found;\n    if a result has been found then it is returned tagged with the location at\n    which it was found and wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeUntilFirstWithLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Tree α -\u003e Maybe (Solution α)",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeUntilFirstWithLocation",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in tree until result i.e leaf has been found if result has been found then it is returned tagged with the location at which it was found and wrapped in Just otherwise Nothing is returned",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeUntilFirstWithLocation",
          "normalized": "Tree a-\u003eMaybe(Solution a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First With Location",
          "signature": "Tree α-\u003eMaybe(Solution α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeUntilFirstWithLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithLocation\u003c/a\u003e\u003c/code\u003e, but for a subtree whose location is\n    given by the first argument; the solution (if present) is labeled by the\n    \u003cem\u003eabsolute\u003c/em\u003e location within the full tree (as opposed to its relative\n    location within the subtree).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeUntilFirstWithLocationStartingAt",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e Tree α -\u003e Maybe (Solution α)",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeUntilFirstWithLocationStartingAt",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirstWithLocation but for subtree whose location is given by the first argument the solution if present is labeled by the absolute location within the full tree as opposed to its relative location within the subtree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeUntilFirstWithLocationStartingAt",
          "normalized": "Location-\u003eTree a-\u003eMaybe(Solution a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First With Location Starting At",
          "signature": "Location-\u003eTree α-\u003eMaybe(Solution α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeUntilFirstWithLocationStartingAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all of the nodes of a tree, returning a list of solutions each\n    tagged with the location at which it was found.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeWithLocations",
          "package": "LogicGrowsOnTrees",
          "signature": "Tree α -\u003e [Solution α]",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeWithLocations",
          "type": "function"
        },
        "index": {
          "description": "Explores all of the nodes of tree returning list of solutions each tagged with the location at which it was found",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeWithLocations",
          "normalized": "Tree a-\u003e[Solution a]",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree With Locations",
          "signature": "Tree α-\u003e[Solution α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeWithLocations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeWithLocations\u003c/a\u003e\u003c/code\u003e, but for a subtree whose location is given by\n    the first argument;  the solutions are labeled by the \u003cem\u003eabsolute\u003c/em\u003e location\n    within the full tree (as opposed to their relative location within the\n    subtree).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeWithLocationsStartingAt",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e Tree α -\u003e [Solution α]",
          "source": "src/LogicGrowsOnTrees-Location.html#exploreTreeWithLocationsStartingAt",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeWithLocations but for subtree whose location is given by the first argument the solutions are labeled by the absolute location within the full tree as opposed to their relative location within the subtree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "exploreTreeWithLocationsStartingAt",
          "normalized": "Location-\u003eTree a-\u003e[Solution a]",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree With Locations Starting At",
          "signature": "Location-\u003eTree α-\u003e[Solution α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:exploreTreeWithLocationsStartingAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "getLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "m Location",
          "source": "src/LogicGrowsOnTrees-Location.html#getLocation",
          "type": "method"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "getLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Location",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:getLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list (or other \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e) of branch choices to a location. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromBranching",
          "package": "LogicGrowsOnTrees",
          "signature": "t BranchChoice -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#labelFromBranching",
          "type": "function"
        },
        "index": {
          "description": "Converts list or other Foldable of branch choices to location",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromBranching",
          "normalized": "a BranchChoice-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "From Branching",
          "signature": "t BranchChoice-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromBranching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContructs a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e representing the location within the tree indicated by the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromContext",
          "package": "LogicGrowsOnTrees",
          "signature": "Context m α -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#labelFromContext",
          "type": "function"
        },
        "index": {
          "description": "Contructs Location representing the location within the tree indicated by the Context",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromContext",
          "normalized": "Context a b-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "From Context",
          "signature": "Context m α-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContructs a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e representing the location within the tree indicated by the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#labelFromPath",
          "type": "function"
        },
        "index": {
          "description": "Contructs Location representing the location within the tree indicated by the Path",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "labelFromPath",
          "normalized": "Path-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "From Path",
          "signature": "Path-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:labelFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e at the left branch of the given location. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "leftBranchOf",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#leftBranchOf",
          "type": "function"
        },
        "index": {
          "description": "Returns the Location at the left branch of the given location",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "leftBranchOf",
          "normalized": "Location-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Branch Of",
          "signature": "Location-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:leftBranchOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function takes a branch choice and returns a location\n    transformer that appends the branch choice to the given location.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "locationTransformerForBranchChoice",
          "package": "LogicGrowsOnTrees",
          "signature": "BranchChoice -\u003e Location -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#locationTransformerForBranchChoice",
          "type": "function"
        },
        "index": {
          "description": "Convenience function takes branch choice and returns location transformer that appends the branch choice to the given location",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "locationTransformerForBranchChoice",
          "normalized": "BranchChoice-\u003eLocation-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Transformer For Branch Choice",
          "signature": "BranchChoice-\u003eLocation-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:locationTransformerForBranchChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eLocatableTree\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "normalizeLocatableTree",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTree α -\u003e Tree α",
          "source": "src/LogicGrowsOnTrees-Location.html#normalizeLocatableTree",
          "type": "function"
        },
        "index": {
          "description": "Converts LocatableTree to Tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "normalizeLocatableTree",
          "normalized": "LocatableTree a-\u003eTree a",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "signature": "LocatableTree α-\u003eTree α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:normalizeLocatableTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eLocatableTreeT\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTreeT\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "normalizeLocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableTreeT m α -\u003e TreeT m α",
          "source": "src/LogicGrowsOnTrees-Location.html#normalizeLocatableTreeT",
          "type": "function"
        },
        "index": {
          "description": "Converts LocatableTreeT to TreeT",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "normalizeLocatableTreeT",
          "normalized": "LocatableTreeT a b-\u003eTreeT a b",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "signature": "LocatableTreeT m α-\u003eTreeT m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:normalizeLocatableTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e at the right branch of the given location. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "rightBranchOf",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e Location",
          "source": "src/LogicGrowsOnTrees-Location.html#rightBranchOf",
          "type": "function"
        },
        "index": {
          "description": "Returns the Location at the right branch of the given location",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "rightBranchOf",
          "normalized": "Location-\u003eLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Branch Of",
          "signature": "Location-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:rightBranchOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location at the root of the tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "rootLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Location",
          "source": "src/LogicGrowsOnTrees-Location.html#rootLocation",
          "type": "function"
        },
        "index": {
          "description": "The location at the root of the tree",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "rootLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:rootLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eLocatableT\u003c/a\u003e\u003c/code\u003e to obtain the nested monad. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "runLocatableT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableT m α -\u003e m α",
          "source": "src/LogicGrowsOnTrees-Location.html#runLocatableT",
          "type": "function"
        },
        "index": {
          "description": "Runs LocatableT to obtain the nested monad",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "runLocatableT",
          "normalized": "LocatableT a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable",
          "signature": "LocatableT m α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:runLocatableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWalks down a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to the subtree at the given \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e. This function is\n    analogous to \u003ccode\u003e\u003ca\u003esendTreeDownPath\u003c/a\u003e\u003c/code\u003e, and shares the\n    same caveats.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "sendTreeDownLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e Tree α -\u003e Tree α",
          "source": "src/LogicGrowsOnTrees-Location.html#sendTreeDownLocation",
          "type": "function"
        },
        "index": {
          "description": "Walks down Tree to the subtree at the given Location This function is analogous to sendTreeDownPath and shares the same caveats",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "sendTreeDownLocation",
          "normalized": "Location-\u003eTree a-\u003eTree a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Down Location",
          "signature": "Location-\u003eTree α-\u003eTree α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:sendTreeDownLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esendTreeDownLocation\u003c/a\u003e\u003c/code\u003e, but for impure trees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "sendTreeTDownLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Location -\u003e TreeT m α -\u003e m (TreeT m α)",
          "source": "src/LogicGrowsOnTrees-Location.html#sendTreeTDownLocation",
          "type": "function"
        },
        "index": {
          "description": "Like sendTreeDownLocation but for impure trees",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "sendTreeTDownLocation",
          "normalized": "Location-\u003eTreeT a b-\u003ea(TreeT a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TDown Location",
          "signature": "Location-\u003eTreeT m α-\u003em(TreeT m α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:sendTreeTDownLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionLocation",
          "package": "LogicGrowsOnTrees",
          "signature": "Location",
          "source": "src/LogicGrowsOnTrees-Location.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionLocation",
          "package": "LogicGrowsOnTrees",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionResult",
          "package": "LogicGrowsOnTrees",
          "signature": "α",
          "source": "src/LogicGrowsOnTrees-Location.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionResult",
          "package": "LogicGrowsOnTrees",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list (or other \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e) of solutions to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from\n    \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003es to results.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionsToMap",
          "package": "LogicGrowsOnTrees",
          "signature": "t (Solution α) -\u003e Map Location α",
          "source": "src/LogicGrowsOnTrees-Location.html#solutionsToMap",
          "type": "function"
        },
        "index": {
          "description": "Converts list or other Foldable of solutions to Map from Location to results",
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "solutionsToMap",
          "normalized": "a(Solution b)-\u003eMap Location b",
          "package": "LogicGrowsOnTrees",
          "partial": "To Map",
          "signature": "t(Solution α)-\u003eMap Location α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:solutionsToMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "unwrapLocatableT",
          "package": "LogicGrowsOnTrees",
          "signature": "ReaderT Location m α",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "unwrapLocatableT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:unwrapLocatableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Location",
          "name": "unwrapLocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "LocatableT (TreeT m) α",
          "source": "src/LogicGrowsOnTrees-Location.html#LocatableTreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Location",
          "module": "LogicGrowsOnTrees.Location",
          "name": "unwrapLocatableTreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Locatable Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Location.html#v:unwrapLocatableTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adapter implements parallelism by spawning multiple worker threads, the\n    number of which can be changed arbitrarily during the run.\n\u003c/p\u003e\u003cp\u003eNOTE: For the use of threads to results in parallelization, you need to make\n    sure that the number of capabilities is at least as large as the largest\n    number of worker threads you will be spawning. If you are using the\n    \u003ccode\u003e\u003ca\u003edriver\u003c/a\u003e\u003c/code\u003e, then this will be taken care of for you. If not, then you will\n    need to either call \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e (but only to increase the\n    number of threads in GHC 7.4, and not too often as it may crash) or use the\n    command-line argument \u003ccode\u003e+RTS -N#\u003c/code\u003e, where \u003ccode\u003e#\u003c/code\u003e is the number of threads you\n    want to run in parallel. The \u003ccode\u003e\u003ca\u003edriver\u003c/a\u003e\u003c/code\u003e takes care of this automatically by\n    calling \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e a single time to set the number of capabilities\n    equal to the number of request threads (provided via. a command-line\n    argument).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "Threads",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html",
          "type": "module"
        },
        "index": {
          "description": "This adapter implements parallelism by spawning multiple worker threads the number of which can be changed arbitrarily during the run NOTE For the use of threads to results in parallelization you need to make sure that the number of capabilities is at least as large as the largest number of worker threads you will be spawning If you are using the driver then this will be taken care of for you If not then you will need to either call setNumCapabilities but only to increase the number of threads in GHC and not too often as it may crash or use the command-line argument RTS where is the number of threads you want to run in parallel The driver takes care of this automatically by calling setNumCapabilities single time to set the number of capabilities equal to the number of request threads provided via command-line argument",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "Threads",
          "package": "LogicGrowsOnTrees",
          "partial": "Threads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
          "type": "data"
        },
        "index": {
          "description": "type that represents the outcome of run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics gathered about the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
          "type": "data"
        },
        "index": {
          "description": "type that represents the reason why run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:TerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the monad in which the thread controller will run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "ThreadsControllerMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#ThreadsControllerMonad",
          "type": "data"
        },
        "index": {
          "description": "This is the monad in which the thread controller will run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "ThreadsControllerMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Threads Controller Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#t:ThreadsControllerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees",
          "signature": "Aborted progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Aborted\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Aborted\"]"
        },
        "index": {
          "description": "the run was aborted with the given progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees",
          "partial": "Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Aborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "Completed",
          "package": "LogicGrowsOnTrees",
          "signature": "Completed final_result",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Completed\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Completed\"]"
        },
        "index": {
          "description": "the run completed with the given final result",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "Completed",
          "package": "LogicGrowsOnTrees",
          "partial": "Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "Failure",
          "package": "LogicGrowsOnTrees",
          "signature": "Failure progress String",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Failure\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Failure\"]"
        },
        "index": {
          "description": "the run failed with the given progress for the given reason",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "Failure",
          "package": "LogicGrowsOnTrees",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "signature": "RunOutcome",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunOutcome\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:RunOutcome\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "RunStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:RunStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:RunStatistics\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "abort",
          "package": "LogicGrowsOnTrees",
          "signature": "m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#abort",
          "type": "function"
        },
        "index": {
          "description": "Abort the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "abort",
          "normalized": "a()",
          "package": "LogicGrowsOnTrees",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but it blocks until the number of workers\n    has been changed and returns the new number of workers.\n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "changeNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "(Word -\u003e Word) -\u003e m Word",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkers\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:changeNumberOfWorkers\"]"
        },
        "index": {
          "description": "Like changeNumberOfWorkersAsync but it blocks until the number of workers has been changed and returns the new number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "changeNumberOfWorkers",
          "normalized": "(Word-\u003eWord)-\u003ea Word",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers",
          "signature": "(Word-\u003eWord)-\u003em Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the number of workers;  the first argument is a map that computes\n        the new number of workers given the old number of workers, and the\n        second argument is a callback that will be invoked with the new number\n        of workers.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echangeNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version of this request.\n\u003c/p\u003e\u003cp\u003eIf you just want to set the number of workers to some fixed value, then\n        see \u003ccode\u003e\u003ca\u003esetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "changeNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(Word -\u003e Word) -\u003e (Word -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkersAsync",
          "type": "function"
        },
        "index": {
          "description": "Change the number of workers the first argument is map that computes the new number of workers given the old number of workers and the second argument is callback that will be invoked with the new number of workers See changeNumberOfWorkers for the synchronous version of this request If you just want to set the number of workers to some fixed value then see setNumberOfWorkers setNumberOfWorkersAsync",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "changeNumberOfWorkersAsync",
          "normalized": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers Async",
          "signature": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the number of a parallel workers to equal the number of capabilities\n    as reported by \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "changeNumberOfWorkersToMatchCapabilities",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadsControllerMonad exploration_mode ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#changeNumberOfWorkersToMatchCapabilities",
          "type": "function"
        },
        "index": {
          "description": "Changes the number of parallel workers to equal the number of capabilities as reported by getNumCapabilities",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "changeNumberOfWorkersToMatchCapabilities",
          "normalized": "ThreadsControllerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers To Match Capabilities",
          "signature": "ThreadsControllerMonad exploration_mode()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:changeNumberOfWorkersToMatchCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the driver for the threads adapter.  The number of workers is\n    specified via. the (required) command-line option \u003ca\u003e-n\u003c/a\u003e; \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e\n    is called exactly once to make sure that there is an equal number of\n    capabilities.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "driver",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver IO shared_configuration supervisor_configuration m n exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This is the driver for the threads adapter The number of workers is specified via the required command-line option setNumCapabilities is called exactly once to make sure that there is an equal number of capabilities",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "driver",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the pure tree and sum over all results. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTree",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadsControllerMonad (AllMode result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Explore the pure tree and sum over all results",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTree",
          "normalized": "ThreadsControllerMonad(AllMode a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "ThreadsControllerMonad(AllMode result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIO",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadsControllerMonad (AllMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTree but with the tree running in IO",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIO",
          "normalized": "ThreadsControllerMonad(AllMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IO",
          "signature": "ThreadsControllerMonad(AllMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIO\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeIO but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOStartingFrom",
          "normalized": "Progress a-\u003eThreadsControllerMonad(AllMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOStarting From",
          "signature": "Progress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadsControllerMonad (FirstMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirst but with the tree running in IO",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFirst",
          "normalized": "ThreadsControllerMonad(FirstMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil First",
          "signature": "ThreadsControllerMonad(FirstMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFirst\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFirstStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeIO result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeIOUntilFirst but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFirstStartingFrom",
          "normalized": "Checkpoint-\u003eThreadsControllerMonad(FirstMode a)()-\u003eTreeIO a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil First Starting From",
          "signature": "Checkpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeIO result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFirstStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPull but with the tree running in IO",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil Found Using Pull",
          "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPullStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeIOUntilFoundUsingPull but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPullStartingFrom",
          "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil Found Using Pull Starting From",
          "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPullStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e but with the tree running in IO. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPush but with the tree running in IO",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil Found Using Push",
          "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeIOUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting result. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPushStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeIO result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeIOUntilFoundUsingPush but with starting result",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeIOUntilFoundUsingPushStartingFrom",
          "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeIO a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IOUntil Found Using Push Starting From",
          "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeIO result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeIOUntilFoundUsingPushStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTree but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeStartingFrom",
          "normalized": "Progress a-\u003eThreadsControllerMonad(AllMode a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Starting From",
          "signature": "Progress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTree\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTree but with generic impure tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeT",
          "normalized": "(a b c d-\u003eIO d)-\u003eThreadsControllerMonad(AllMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome(Progress e)e)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeT\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (AllMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) result)",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeT but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTStartingFrom",
          "normalized": "(a b c d-\u003eIO d)-\u003eProgress e-\u003eThreadsControllerMonad(AllMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome(Progress e)e)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TStarting From",
          "signature": "(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(AllMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirst but with generic impure tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFirst",
          "normalized": "(a b c d-\u003eIO d)-\u003eThreadsControllerMonad(FirstMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome Checkpoint(Maybe(Progress e)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First",
          "signature": "(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFirst\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFirstStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall α.  m α -\u003e IO α)-\u003e Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e TreeT m result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeTUntilFirst but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFirstStartingFrom",
          "normalized": "(a b c d-\u003eIO d)-\u003eCheckpoint-\u003eThreadsControllerMonad(FirstMode e)()-\u003eTreeT c e-\u003eIO(RunOutcome Checkpoint(Maybe(Progress e)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First Starting From",
          "signature": "(forall α. m α-\u003eIO α)-\u003eCheckpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTreeT m result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFirstStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPull but with generic impure tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Using Pull",
          "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPullStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeTUntilFoundUsingPull but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPullStartingFrom",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Using Pull Starting From",
          "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPullStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e but with a generic impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPush but with generic impure tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Using Push",
          "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeTUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPushStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall α.  m α -\u003e IO α)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e TreeT m result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeTUntilFoundUsingPush but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeTUntilFoundUsingPushStartingFrom",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTreeT d a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Using Push Starting From",
          "signature": "(result-\u003eBool)-\u003e(forall α. m α-\u003eIO α)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTreeT m result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeTUntilFoundUsingPushStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the pure tree until a result has been found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadsControllerMonad (FirstMode result) ()-\u003e Tree result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Explore the pure tree until result has been found",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFirst",
          "normalized": "ThreadsControllerMonad(FirstMode a)()-\u003eTree a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First",
          "signature": "ThreadsControllerMonad(FirstMode result)()-\u003eTree result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFirstStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint-\u003e ThreadsControllerMonad (FirstMode result) ()-\u003e Tree result-\u003e IO (RunOutcome Checkpoint (Maybe (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFirst but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFirstStartingFrom",
          "normalized": "Checkpoint-\u003eThreadsControllerMonad(FirstMode a)()-\u003eTree a-\u003eIO(RunOutcome Checkpoint(Maybe(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First Starting From",
          "signature": "Checkpoint-\u003eThreadsControllerMonad(FirstMode result)()-\u003eTree result-\u003eIO(RunOutcome Checkpoint(Maybe(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFirstStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the pure tree until the sum of resuts meets a condition. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Explore the pure tree until the sum of resuts meets condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Using Pull",
          "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPull\u003c/a\u003e\u003c/code\u003e but with a starting progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPullStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPull result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPull but with starting progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPullStartingFrom",
          "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPull a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Using Pull Starting From",
          "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPull result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPullStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the pure tree until the sum of resuts meets a condition. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Explore the pure tree until the sum of resuts meets condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Using Push",
          "signature": "(result-\u003eBool)-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundUsingPush\u003c/a\u003e\u003c/code\u003e, but with a starting result. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPushStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Progress result-\u003e ThreadsControllerMonad (FoundModeUsingPush result) ()-\u003e Tree result-\u003e IO (RunOutcome (Progress result) (Either result (Progress result)))",
          "type": "function"
        },
        "index": {
          "description": "Like exploreTreeUntilFoundUsingPush but with starting result",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "exploreTreeUntilFoundUsingPushStartingFrom",
          "normalized": "(a-\u003eBool)-\u003eProgress a-\u003eThreadsControllerMonad(FoundModeUsingPush a)()-\u003eTree a-\u003eIO(RunOutcome(Progress a)(Either a(Progress a)))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Using Push Starting From",
          "signature": "(result-\u003eBool)-\u003eProgress result-\u003eThreadsControllerMonad(FoundModeUsingPush result)()-\u003eTree result-\u003eIO(RunOutcome(Progress result)(Either result(Progress result)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:exploreTreeUntilFoundUsingPushStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "fork",
          "package": "LogicGrowsOnTrees",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#fork",
          "type": "function"
        },
        "index": {
          "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "LogicGrowsOnTrees",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.RequestQueue\"]",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentProgress\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentProgress\"]"
        },
        "index": {
          "description": "Like getCurrentProgressAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentProgressAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgressAsync",
          "type": "function"
        },
        "index": {
          "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentProgressAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Progress Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentProgressAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentStatisticsAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.RequestQueue\"]",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "m RunStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentStatistics\"]"
        },
        "index": {
          "description": "Like getCurrentStatisticsAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current run statistics. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentStatisticsAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(RunStatistics -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentStatisticsAsync",
          "type": "function"
        },
        "index": {
          "description": "Get the current run statistics",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getCurrentStatisticsAsync",
          "normalized": "(RunStatistics-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Statistics Async",
          "signature": "(RunStatistics-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getCurrentStatisticsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.RequestQueue\"]",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "m Int",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getNumberOfWorkers\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getNumberOfWorkers\"]"
        },
        "index": {
          "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(Int -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkersAsync",
          "type": "function"
        },
        "index": {
          "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "getNumberOfWorkersAsync",
          "normalized": "(Int-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers Async",
          "signature": "(Int-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:getNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.RequestQueue\"]",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:requestProgressUpdate\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestProgressUpdate\"]"
        },
        "index": {
          "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:requestProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "requestProgressUpdateAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdateAsync",
          "type": "function"
        },
        "index": {
          "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "requestProgressUpdateAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:requestProgressUpdateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics Int)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAvailableWorkloadStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runAvailableWorkloadStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runAvailableWorkloadStatistics\"]"
        },
        "index": {
          "description": "statistics for the number of available workloads waiting for worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Available Workload Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAvailableWorkloadStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees",
          "signature": "Float",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAverageTimePerCall\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runAverageTimePerCall\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runAverageTimePerCall\"]"
        },
        "index": {
          "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees",
          "partial": "Average Time Per Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runAverageTimePerCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees",
          "signature": "UTCTime",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runEndTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runEndTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runEndTime\"]"
        },
        "index": {
          "description": "the end time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees",
          "partial": "End Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runEndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the given tree using multiple threads to achieve parallelism.\n\u003c/p\u003e\u003cp\u003eThis function grants access to all of the functionality of this adapter,\n    but because its generality complicates its use (primarily the fact that the\n    types are dependent on the first parameter) you may find it easier to use\n    one of the specialized functions in the preceding section.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runExplorer",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e ProgressFor exploration_mode-\u003e ThreadsControllerMonad exploration_mode ()-\u003e TreeT m (ResultFor exploration_mode)-\u003e IO (RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "index": {
          "description": "Explores the given tree using multiple threads to achieve parallelism This function grants access to all of the functionality of this adapter but because its generality complicates its use primarily the fact that the types are dependent on the first parameter you may find it easier to use one of the specialized functions in the preceding section",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runExplorer",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eProgressFor a-\u003eThreadsControllerMonad a()-\u003eTreeT b(ResultFor a)-\u003eIO(RunOutcomeFor a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Explorer",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eProgressFor exploration_mode-\u003eThreadsControllerMonad exploration_mode()-\u003eTreeT m(ResultFor exploration_mode)-\u003eIO(RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runExplorer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics Float)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadRequestRateStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runInstantaneousWorkloadRequestRateStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runInstantaneousWorkloadRequestRateStatistics\"]"
        },
        "index": {
          "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Instantaneous Workload Request Rate Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadRequestRateStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics Float)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadStealTimeStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runInstantaneousWorkloadStealTimeStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runInstantaneousWorkloadStealTimeStatistics\"]"
        },
        "index": {
          "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Instantaneous Workload Steal Time Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runInstantaneousWorkloadStealTimeStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runNumberOfCalls\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runNumberOfCalls\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runNumberOfCalls\"]"
        },
        "index": {
          "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Calls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runNumberOfCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees",
          "signature": "UTCTime",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStartTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runStartTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStartTime\"]"
        },
        "index": {
          "description": "the start time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees",
          "partial": "Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics gathered during the run, useful if the system is not scaling with the number of workers as it should \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "RunStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStatistics\"]"
        },
        "index": {
          "description": "statistics gathered during the run useful if the system is not scaling with the number of workers as it should",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees",
          "signature": "IndependentMeasurementsStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStealWaitTimes\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runStealWaitTimes\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runStealWaitTimes\"]"
        },
        "index": {
          "description": "statistics for the time needed to steal workload from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees",
          "partial": "Steal Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runStealWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees",
          "signature": "Float",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorMonadOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorMonadOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runSupervisorMonadOccupation\"]"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Monad Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorMonadOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees",
          "signature": "Float",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runSupervisorOccupation\"]"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runSupervisorOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe reason why the run terminated \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runTerminationReason",
          "package": "LogicGrowsOnTrees",
          "signature": "TerminationReason progress final_result",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runTerminationReason\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runTerminationReason\"]"
        },
        "index": {
          "description": "the reason why the run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runTerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runTerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics Int)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWaitingWorkerStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWaitingWorkerStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWaitingWorkerStatistics\"]"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Waiting Worker Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWaitingWorkerStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees",
          "signature": "NominalDiffTime",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWallTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWallTime\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWallTime\"]"
        },
        "index": {
          "description": "the wall time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees",
          "partial": "Wall Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWallTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics Int)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerCountStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWorkerCountStatistics\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWorkerCountStatistics\"]"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Count Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerCountStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees",
          "signature": "Float",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWorkerOccupation\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWorkerOccupation\"]"
        },
        "index": {
          "description": "the fraction of the total time that workers were occupied",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Supervisor\",\"LogicGrowsOnTrees.Parallel.Main\"]",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees",
          "signature": "(FunctionOfTimeStatistics NominalDiffTime)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerWaitTimes\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runWorkerWaitTimes\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:runWorkerWaitTimes\"]"
        },
        "index": {
          "description": "statistics for how long it took for workers to obtain workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:runWorkerWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the number of workers has been set to the desired value. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "setNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkers\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:setNumberOfWorkers\"]"
        },
        "index": {
          "description": "Like setNumberOfWorkersAsync but blocks until the number of workers has been set to the desired value",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "setNumberOfWorkers",
          "normalized": "Word-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers",
          "signature": "Word-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that the number of workers be set to the given amount, invoking the given callback when this has been done. \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Adapter.Threads\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "setNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "Word -\u003e IO () -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#setNumberOfWorkersAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkersAsync\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:setNumberOfWorkersAsync\"]"
        },
        "index": {
          "description": "Request that the number of workers be set to the given amount invoking the given callback when this has been done",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "setNumberOfWorkersAsync",
          "normalized": "Word-\u003eIO()-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers Async",
          "signature": "Word-\u003eIO()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "setWorkloadBufferSize",
          "package": "LogicGrowsOnTrees",
          "signature": "Int -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#setWorkloadBufferSize",
          "type": "function"
        },
        "index": {
          "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Threads",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Threads",
          "name": "setWorkloadBufferSize",
          "normalized": "Int-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Buffer Size",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Adapter-Threads.html#v:setWorkloadBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for communicating with workers over an\n    inter-process channel.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Message",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains infrastructure for communicating with workers over an inter-process channel",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Message",
          "package": "LogicGrowsOnTrees",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message from a worker to the supervisor;  the worker id is assumed to be\n    known based on from where the message was received.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "data"
        },
        "index": {
          "description": "message from worker to the supervisor the worker id is assumed to be known based on from where the message was received",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisor",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Supervisor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient type alias for the \u003ccode\u003e\u003ca\u003eMessageForSupervisor\u003c/a\u003e\u003c/code\u003e type for the given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisorFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorFor",
          "type": "type"
        },
        "index": {
          "description": "Convenient type alias for the MessageForSupervisor type for the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisorFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Supervisor For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisorFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data structure contains callbacks to be invoked when a message has\n    been received, depending on the kind of message.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "data"
        },
        "index": {
          "description": "This data structure contains callbacks to be invoked when message has been received depending on the kind of message",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Supervisor Receivers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForSupervisorReceivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message from the supervisor to a worker.\n\u003c/p\u003e\u003cp\u003eNOTE: It is your responsibility not to send a workload to a worker that\n          already has one;  if you do then the worker will report an error and\n          then terminate.  The converse, however, is not true:  it is okay to\n          send a progress request to a worker without a workload because the\n          worker might have finished between when you sent the message and when\n          it was received.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForWorker",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
          "type": "data"
        },
        "index": {
          "description": "message from the supervisor to worker NOTE It is your responsibility not to send workload to worker that already has one if you do then the worker will report an error and then terminate The converse however is not true it is okay to send progress request to worker without workload because the worker might have finished between when you sent the message and when it was received",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForWorker",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Worker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#t:MessageForWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe worker encountered a failure with the given message while exploring the tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Failed",
          "package": "LogicGrowsOnTrees",
          "signature": "Failed String",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "function"
        },
        "index": {
          "description": "The worker encountered failure with the given message while exploring the tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Failed",
          "package": "LogicGrowsOnTrees",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe worker has finished with the given final progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Finished",
          "package": "LogicGrowsOnTrees",
          "signature": "Finished worker_final_progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "function"
        },
        "index": {
          "description": "The worker has finished with the given final progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "Finished",
          "package": "LogicGrowsOnTrees",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "signature": "MessageForSupervisorReceivers",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:MessageForSupervisorReceivers\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:MessageForSupervisorReceivers\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Supervisor Receivers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:MessageForSupervisorReceivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe worker has responded to the progress update request with the given progress update. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgressUpdate (ProgressUpdate progress)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "function"
        },
        "index": {
          "description": "The worker has responded to the progress update request with the given progress update",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:ProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop what you are doing and quit the system \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "QuitWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "QuitWorker",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
          "type": "function"
        },
        "index": {
          "description": "stop what you are doing and quit the system",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "QuitWorker",
          "package": "LogicGrowsOnTrees",
          "partial": "Quit Worker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:QuitWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest a progress update \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "RequestProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestProgressUpdate",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
          "type": "function"
        },
        "index": {
          "description": "request progress update",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "RequestProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:RequestProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest a stolen workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "RequestWorkloadSteal",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestWorkloadSteal",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
          "type": "function"
        },
        "index": {
          "description": "request stolen workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "RequestWorkloadSteal",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Workload Steal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:RequestWorkloadSteal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart exploring the given workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "StartWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "StartWorkload Workload",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForWorker",
          "type": "function"
        },
        "index": {
          "description": "start exploring the given workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "StartWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Start Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:StartWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe worker has responded to the workload steal request with possibly the stolen workload (and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it was not possible to steal a workload at this time). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "StolenWorkload (Maybe (StolenWorkload progress))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "function"
        },
        "index": {
          "description": "The worker has responded to the workload steal request with possibly the stolen workload and Nothing if it was not possible to steal workload at this time",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:StolenWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe worker has quit the system and is no longer available \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "WorkerQuit",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerQuit",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisor",
          "type": "function"
        },
        "index": {
          "description": "The worker has quit the system and is no longer available",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "WorkerQuit",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:WorkerQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinually performs the given IO action to read a message from a worker\n    with the given id and calls one of the given callbacks depending on the\n    content of the message.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveAndProcessMessagesFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003e IO (MessageForSupervisorFor exploration_mode)-\u003e worker_id-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Continually performs the given IO action to read message from worker with the given id and calls one of the given callbacks depending on the content of the message",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveAndProcessMessagesFromWorker",
          "normalized": "MessageForSupervisorReceivers a b-\u003eIO(MessageForSupervisorFor a)-\u003eb-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "And Process Messages From Worker",
          "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003eIO(MessageForSupervisorFor exploration_mode)-\u003eworker_id-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveAndProcessMessagesFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ereceiveAndProcessMessagesFromWorker\u003c/a\u003e\u003c/code\u003e except that instead of\n    giving it an IO action to fetch a message you provide a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e from which\n    messsages (assumed to be deserializable) are read.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveAndProcessMessagesFromWorkerUsingHandle",
          "package": "LogicGrowsOnTrees",
          "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003e Handle-\u003e worker_id-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as receiveAndProcessMessagesFromWorker except that instead of giving it an IO action to fetch message you provide Handle from which messsages assumed to be deserializable are read",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveAndProcessMessagesFromWorkerUsingHandle",
          "normalized": "MessageForSupervisorReceivers a b-\u003eHandle-\u003eb-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "And Process Messages From Worker Using Handle",
          "signature": "MessageForSupervisorReceivers exploration_mode worker_id-\u003eHandle-\u003eworker_id-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveAndProcessMessagesFromWorkerUsingHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be called when a failure (with the given message) has been received from a worker \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "receiveFailureFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e String -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFailureFromWorker\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveFailureFromWorker\"]"
        },
        "index": {
          "description": "to be called when failure with the given message has been received from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveFailureFromWorker",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Failure From Worker",
          "signature": "worker_id-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFailureFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be called when a worker has finished with the given final progress \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "receiveFinishedFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFinishedFromWorker\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveFinishedFromWorker\"]"
        },
        "index": {
          "description": "to be called when worker has finished with the given final progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveFinishedFromWorker",
          "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Finished From Worker",
          "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveFinishedFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be called when a progress update has been received from a worker \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "receiveProgressUpdateFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e ProgressUpdate (ProgressFor exploration_mode) -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveProgressUpdateFromWorker\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveProgressUpdateFromWorker\"]"
        },
        "index": {
          "description": "to be called when progress update has been received from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveProgressUpdateFromWorker",
          "normalized": "a-\u003eProgressUpdate(ProgressFor b)-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update From Worker",
          "signature": "worker_id-\u003eProgressUpdate(ProgressFor exploration_mode)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveProgressUpdateFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be called when a worker has quit the system and is no longer available \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "receiveQuitFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveQuitFromWorker\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveQuitFromWorker\"]"
        },
        "index": {
          "description": "to be called when worker has quit the system and is no longer available",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveQuitFromWorker",
          "normalized": "a-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Quit From Worker",
          "signature": "worker_id-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveQuitFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be called when a (possibly) stolen workload has been received from a worker \n\u003c/p\u003e",
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Message\",\"LogicGrowsOnTrees.Parallel.Common.Workgroup\"]",
          "name": "receiveStolenWorkloadFromWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e Maybe (StolenWorkload (ProgressFor exploration_mode)) -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveStolenWorkloadFromWorker\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:receiveStolenWorkloadFromWorker\"]"
        },
        "index": {
          "description": "to be called when possibly stolen workload has been received from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Message",
          "module": "LogicGrowsOnTrees.Parallel.Common.Message",
          "name": "receiveStolenWorkloadFromWorker",
          "normalized": "a-\u003eMaybe(StolenWorkload(ProgressFor b))-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload From Worker",
          "signature": "worker_id-\u003eMaybe(StolenWorkload(ProgressFor exploration_mode))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Message.html#v:receiveStolenWorkloadFromWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions that let one easily implement the worker side\n    of an adapter under the assumption that the worker uses a two-way\n    communication channel with the supervisor for sending and receiving\n    messages.  (Examples of when this is NOT the case is the threads adapter,\n    where you can communicate with the worker threads directly, and the MPI\n    adapter, which has communication primitives that don't quite align with\n    this setup.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "Process",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions that let one easily implement the worker side of an adapter under the assumption that the worker uses two-way communication channel with the supervisor for sending and receiving messages Examples of when this is NOT the case is the threads adapter where you can communicate with the worker threads directly and the MPI adapter which has communication primitives that don quite align with this setup",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "Process",
          "package": "LogicGrowsOnTrees",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown when the connection has been lost. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown when the connection has been lost",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "partial": "Connection Lost",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#t:ConnectionLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LogicGrowsOnTrees.Parallel.Common.Process\",\"LogicGrowsOnTrees.Utils.Handle\"]",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "signature": "ConnectionLost",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:ConnectionLost\",\"http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:ConnectionLost\"]"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "partial": "Connection Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:ConnectionLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a loop that continually fetches and reacts to messages from the\n    supervisor until the worker quits.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "runWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e IO MessageForWorker-\u003e (MessageForSupervisorFor exploration_mode -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Runs loop that continually fetches and reacts to messages from the supervisor until the worker quits",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "runWorker",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor a-\u003eIO())-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor exploration_mode-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:runWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erunWorker\u003c/a\u003e\u003c/code\u003e, but it lets you provide handles through which the\n    messages will be sent and received. (Note that the reading and writing\n    handles might be the same.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "runWorkerUsingHandles",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e Handle-\u003e Handle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as runWorker but it lets you provide handles through which the messages will be sent and received Note that the reading and writing handles might be the same",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Process",
          "module": "LogicGrowsOnTrees.Parallel.Common.Process",
          "name": "runWorkerUsingHandles",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eHandle-\u003eHandle-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Using Handles",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eHandle-\u003eHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Process.html#v:runWorkerUsingHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo understand the purpose of this module, it helps to know that there are\n    two main loops running in the supervisor. The first loop runs inside the\n    \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e and is usually taken over by the adapter, which handles\n    the communication between the supervisors and the workers. The second loop\n    (referred to as the \u003cem\u003econtroller\u003c/em\u003e) is intended for the user to be able to\n    submit requests such as a global progress update to the supervisor, or\n    possibly adapter-specific requests (such as changing the number of workers).\n\u003c/p\u003e\u003cp\u003eWith this in mind, the purpose of this module is to create infrastructure\n    for the second loop (the controller) to submit requests to the first loop.\n    It provides this functionality through a class so that specific adapters can\n    extend this to provide requests specific to that adapter (such as changing\n    the number of workers).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html",
          "type": "module"
        },
        "index": {
          "description": "To understand the purpose of this module it helps to know that there are two main loops running in the supervisor The first loop runs inside the SupervisorMonad and is usually taken over by the adapter which handles the communication between the supervisors and the workers The second loop referred to as the controller is intended for the user to be able to submit requests such as global progress update to the supervisor or possibly adapter-specific requests such as changing the number of workers With this in mind the purpose of this module is to create infrastructure for the second loop the controller to submit requests to the first loop It provides this functionality through class so that specific adapters can extend this to provide requests specific to that adapter such as changing the number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that tracks the amount of CPU time that has been used. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "CPUTimeTracker",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#CPUTimeTracker",
          "type": "data"
        },
        "index": {
          "description": "data structure that tracks the amount of CPU time that has been used",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "CPUTimeTracker",
          "package": "LogicGrowsOnTrees",
          "partial": "CPUTime Tracker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:CPUTimeTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supervisor request. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "Request",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#Request",
          "type": "type"
        },
        "index": {
          "description": "supervisor request",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "Request",
          "package": "LogicGrowsOnTrees",
          "partial": "Request",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic supervisor request queue. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
          "type": "data"
        },
        "index": {
          "description": "basic supervisor request queue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides the set of supervisor requests common to all adapters. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueueMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueueMonad",
          "type": "class"
        },
        "index": {
          "description": "This class provides the set of supervisor requests common to all adapters",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueueMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueueMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic supervisor request queue monad, which has an implicit \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e\n    object that it uses to communicate with the supervisor loop.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueueReader",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueueReader",
          "type": "type"
        },
        "index": {
          "description": "basic supervisor request queue monad which has an implicit RequestQueue object that it uses to communicate with the supervisor loop",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueueReader",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#t:RequestQueueReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "RequestQueue",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:RequestQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "abort",
          "package": "LogicGrowsOnTrees",
          "signature": "m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#abort",
          "type": "method"
        },
        "index": {
          "description": "Abort the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "abort",
          "normalized": "a()",
          "package": "LogicGrowsOnTrees",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a callback to the given \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e that will be invoked when the current global progress update has completed. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addProgressReceiver",
          "package": "LogicGrowsOnTrees",
          "signature": "(ProgressFor exploration_mode -\u003e IO ()) -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#addProgressReceiver",
          "type": "function"
        },
        "index": {
          "description": "Adds callback to the given RequestQueue that will be invoked when the current global progress update has completed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addProgressReceiver",
          "normalized": "(ProgressFor a-\u003eIO())-\u003eRequestQueue a b c-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Receiver",
          "signature": "(ProgressFor exploration_mode-\u003eIO())-\u003eRequestQueue exploration_mode worker_id m-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:addProgressReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaddWorkerCountListenerAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the listener has been added. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addWorkerCountListener",
          "package": "LogicGrowsOnTrees",
          "signature": "(Int -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#addWorkerCountListener",
          "type": "function"
        },
        "index": {
          "description": "Like addWorkerCountListenerAsync but blocks until the listener has been added",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addWorkerCountListener",
          "normalized": "(Int-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Count Listener",
          "signature": "(Int-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:addWorkerCountListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a function to be called whenever the number of workers changes;\n        the given function will be also called immediately with the current\n        number of workers.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addWorkerCountListenerAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(Int -\u003e IO ()) -\u003e IO () -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#addWorkerCountListenerAsync",
          "type": "method"
        },
        "index": {
          "description": "Submits function to be called whenever the number of workers changes the given function will be also called immediately with the current number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "addWorkerCountListenerAsync",
          "normalized": "(Int-\u003eIO())-\u003eIO()-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Count Listener Async",
          "signature": "(Int-\u003eIO())-\u003eIO()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:addWorkerCountListenerAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of the controller threads \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "controllerThreads",
          "package": "LogicGrowsOnTrees",
          "signature": "(IORef [ThreadId])",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
          "type": "function"
        },
        "index": {
          "description": "list of the controller threads",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "controllerThreads",
          "normalized": "(IORef[ThreadId])",
          "package": "LogicGrowsOnTrees",
          "partial": "Threads",
          "signature": "(IORef[ThreadId])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:controllerThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueues a supervisor request into the given queue. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "enqueueRequest",
          "package": "LogicGrowsOnTrees",
          "signature": "Request exploration_mode worker_id m -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#enqueueRequest",
          "type": "function"
        },
        "index": {
          "description": "Enqueues supervisor request into the given queue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "enqueueRequest",
          "normalized": "Request a b c-\u003eRequestQueue a b c-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Request",
          "signature": "Request exploration_mode worker_id m-\u003eRequestQueue exploration_mode worker_id m-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:enqueueRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenqueueRequest\u003c/a\u003e\u003c/code\u003e, but does not return until the request has been run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "enqueueRequestAndWait",
          "package": "LogicGrowsOnTrees",
          "signature": "Request exploration_mode worker_id m -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#enqueueRequestAndWait",
          "type": "function"
        },
        "index": {
          "description": "Like enqueueRequest but does not return until the request has been run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "enqueueRequestAndWait",
          "normalized": "Request a b c-\u003eRequestQueue a b c-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Request And Wait",
          "signature": "Request exploration_mode worker_id m-\u003eRequestQueue exploration_mode worker_id m-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:enqueueRequestAndWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "fork",
          "package": "LogicGrowsOnTrees",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#fork",
          "type": "method"
        },
        "index": {
          "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "LogicGrowsOnTrees",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a controller thread;  it's \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is added the list in the request\n    queue. We deliberately do not return the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e from this function\n    because you must always call \u003ccode\u003e\u003ca\u003ekillControllerThreads\u003c/a\u003e\u003c/code\u003e to kill the controller\n    thread as this makes sure that all child threads also get killed.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "forkControllerThread",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue exploration_mode worker_id m-\u003e RequestQueueReader exploration_mode worker_id m ()-\u003e m' ()",
          "type": "function"
        },
        "index": {
          "description": "Forks controller thread it ThreadId is added the list in the request queue We deliberately do not return the ThreadId from this function because you must always call killControllerThreads to kill the controller thread as this makes sure that all child threads also get killed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "forkControllerThread",
          "normalized": "RequestQueue a b c-\u003eRequestQueueReader a b c()-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Controller Thread",
          "signature": "RequestQueue exploration_mode worker_id m-\u003eRequestQueueReader exploration_mode worker_id m()-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:forkControllerThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current CPI time. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentCPUTime",
          "package": "LogicGrowsOnTrees",
          "signature": "CPUTimeTracker -\u003e IO NominalDiffTime",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentCPUTime",
          "type": "function"
        },
        "index": {
          "description": "Gets the current CPI time",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentCPUTime",
          "normalized": "CPUTimeTracker-\u003eIO NominalDiffTime",
          "package": "LogicGrowsOnTrees",
          "partial": "Current CPUTime",
          "signature": "CPUTimeTracker-\u003eIO NominalDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentCPUTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentProgressAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentProgressAsync",
          "type": "method"
        },
        "index": {
          "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentProgressAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Progress Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentProgressAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current run statistics. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentStatisticsAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(RunStatistics -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getCurrentStatisticsAsync",
          "type": "method"
        },
        "index": {
          "description": "Get the current run statistics",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getCurrentStatisticsAsync",
          "normalized": "(RunStatistics-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Statistics Async",
          "signature": "(RunStatistics-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getCurrentStatisticsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(Int -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getNumberOfWorkersAsync",
          "type": "method"
        },
        "index": {
          "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getNumberOfWorkersAsync",
          "normalized": "(Int-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers Async",
          "signature": "(Int-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to the supervisor and invokes the given callback with the\n    result when it is available.  (This function is used by\n    \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getQuantityAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m α -\u003e (α -\u003e IO ()) -\u003e RequestQueue exploration_mode worker_id m -\u003e m' ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#getQuantityAsync",
          "type": "function"
        },
        "index": {
          "description": "Submits Request to the supervisor and invokes the given callback with the result when it is available This function is used by getCurrentProgressAsync and getNumberOfWorkersAsync",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "getQuantityAsync",
          "normalized": "SupervisorMonad a b c d-\u003e(d-\u003eIO())-\u003eRequestQueue a b c-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "Quantity Async",
          "signature": "SupervisorMonad exploration_mode worker_id m α-\u003e(α-\u003eIO())-\u003eRequestQueue exploration_mode worker_id m-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:getQuantityAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all the controller threads and their children. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "killControllerThreads",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue exploration_mode worker_id m-\u003e m' ()",
          "type": "function"
        },
        "index": {
          "description": "Kill all the controller threads and their children",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "killControllerThreads",
          "normalized": "RequestQueue a b c-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Controller Threads",
          "signature": "RequestQueue exploration_mode worker_id m-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:killControllerThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new CPU time tracker, which should be equal to the amount of total\n    time used so far if we are continuing a previous run and zero otherwise.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "newCPUTimeTracker",
          "package": "LogicGrowsOnTrees",
          "signature": "NominalDiffTime -\u003e IO CPUTimeTracker",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#newCPUTimeTracker",
          "type": "function"
        },
        "index": {
          "description": "Creates new CPU time tracker which should be equal to the amount of total time used so far if we are continuing previous run and zero otherwise",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "newCPUTimeTracker",
          "normalized": "NominalDiffTime-\u003eIO CPUTimeTracker",
          "package": "LogicGrowsOnTrees",
          "partial": "CPUTime Tracker",
          "signature": "NominalDiffTime-\u003eIO CPUTimeTracker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:newCPUTimeTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "newRequestQueue",
          "package": "LogicGrowsOnTrees",
          "signature": "m' (RequestQueue exploration_mode worker_id m)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#newRequestQueue",
          "type": "function"
        },
        "index": {
          "description": "Constructs new RequestQueue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "newRequestQueue",
          "package": "LogicGrowsOnTrees",
          "partial": "Request Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:newRequestQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses all of the requests in the given \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e, and returns when\n    the queue has been emptied.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "processAllRequests",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue exploration_mode worker_id m -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#processAllRequests",
          "type": "function"
        },
        "index": {
          "description": "Processes all of the requests in the given RequestQueue and returns when the queue has been emptied",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "processAllRequests",
          "normalized": "RequestQueue a b c-\u003eSupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "All Requests",
          "signature": "RequestQueue exploration_mode worker_id m-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:processAllRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes all of the callbacks with the given progress and then clears the list of callbacks. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "receiveProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue exploration_mode worker_id m -\u003e ProgressFor exploration_mode -\u003e m' ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#receiveProgress",
          "type": "function"
        },
        "index": {
          "description": "Invokes all of the callbacks with the given progress and then clears the list of callbacks",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "receiveProgress",
          "normalized": "RequestQueue a b c-\u003eProgressFor a-\u003ed()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress",
          "signature": "RequestQueue exploration_mode worker_id m-\u003eProgressFor exploration_mode-\u003em'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:receiveProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of callbacks to invoke when a global progress update has completed \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "receivers",
          "package": "LogicGrowsOnTrees",
          "signature": "(IORef [ProgressFor exploration_mode -\u003e IO ()])",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
          "type": "function"
        },
        "index": {
          "description": "list of callbacks to invoke when global progress update has completed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "receivers",
          "normalized": "(IORef[ProgressFor a-\u003eIO()])",
          "package": "LogicGrowsOnTrees",
          "signature": "(IORef[ProgressFor exploration_mode-\u003eIO()])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:receivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requestProgressUpdateAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#requestProgressUpdateAsync",
          "type": "method"
        },
        "index": {
          "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requestProgressUpdateAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestProgressUpdateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a supervisor program that loops forever processing requests from the given queue. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requestQueueProgram",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()-\u003e RequestQueue exploration_mode worker_id m-\u003e SupervisorProgram exploration_mode worker_id m",
          "type": "function"
        },
        "index": {
          "description": "Creates supervisor program that loops forever processing requests from the given queue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requestQueueProgram",
          "normalized": "SupervisorMonad a b c()-\u003eRequestQueue a b c-\u003eSupervisorProgram a b c",
          "package": "LogicGrowsOnTrees",
          "partial": "Queue Program",
          "signature": "SupervisorMonad exploration_mode worker_id m()-\u003eRequestQueue exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requestQueueProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe queue of requests to the supervisor \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requests",
          "package": "LogicGrowsOnTrees",
          "signature": "(TChan (Request exploration_mode worker_id m))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#RequestQueue",
          "type": "function"
        },
        "index": {
          "description": "the queue of requests to the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "requests",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:requests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "setWorkloadBufferSize",
          "package": "LogicGrowsOnTrees",
          "signature": "Int -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#setWorkloadBufferSize",
          "type": "method"
        },
        "index": {
          "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "setWorkloadBufferSize",
          "normalized": "Int-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Buffer Size",
          "signature": "Int-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:setWorkloadBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts the CPU time tracker;  it detects when it has already been started so\n    if you attempt to start it more than once then all subsequent attempts will\n    be ignored.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "startCPUTimeTracker",
          "package": "LogicGrowsOnTrees",
          "signature": "CPUTimeTracker -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#startCPUTimeTracker",
          "type": "function"
        },
        "index": {
          "description": "Starts the CPU time tracker it detects when it has already been started so if you attempt to start it more than once then all subsequent attempts will be ignored",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "startCPUTimeTracker",
          "normalized": "CPUTimeTracker-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "CPUTime Tracker",
          "signature": "CPUTimeTracker-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:startCPUTimeTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral utility function for converting an asynchronous request to a\n    synchronous request;  it uses an \u003ccode\u003eMVar\u003c/code\u003e to hold the result of the request and\n    blocks until the \u003ccode\u003eMVar\u003c/code\u003e has been filled.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "syncAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "((α -\u003e IO ()) -\u003e m ()) -\u003e m α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#syncAsync",
          "type": "function"
        },
        "index": {
          "description": "General utility function for converting an asynchronous request to synchronous request it uses an MVar to hold the result of the request and blocks until the MVar has been filled",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "syncAsync",
          "normalized": "((a-\u003eIO())-\u003eb())-\u003eb a",
          "package": "LogicGrowsOnTrees",
          "partial": "Async",
          "signature": "((α-\u003eIO())-\u003em())-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:syncAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to pop a request from the \u003ccode\u003e\u003ca\u003eRequestQueue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "tryDequeueRequest",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueue exploration_mode worker_id m -\u003e m' (Maybe (Request exploration_mode worker_id m))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#tryDequeueRequest",
          "type": "function"
        },
        "index": {
          "description": "Attempt to pop request from the RequestQueue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common RequestQueue",
          "module": "LogicGrowsOnTrees.Parallel.Common.RequestQueue",
          "name": "tryDequeueRequest",
          "normalized": "RequestQueue a b c-\u003ed(Maybe(Request a b c))",
          "package": "LogicGrowsOnTrees",
          "partial": "Dequeue Request",
          "signature": "RequestQueue exploration_mode worker_id m-\u003em'(Maybe(Request exploration_mode worker_id m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-RequestQueue.html#v:tryDequeueRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Supervisor module contains logic that is common to all of the adapters\n    for the parallization infrastructure. The way to use it is to package the\n    logic for communicating with your workers into a \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e that\n    runs in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e with your state just below the\n    \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e in the monad stack.\n\u003c/p\u003e\u003cp\u003eA great deal of the logic in this module deals with gathering statistics\n    whose purpose is to provide data that can be used to figure out what is\n    going wrong if the runtime is not scaling inversely with the number of\n    workers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "Supervisor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html",
          "type": "module"
        },
        "index": {
          "description": "The Supervisor module contains logic that is common to all of the adapters for the parallization infrastructure The way to use it is to package the logic for communicating with your workers into SupervisorProgram that runs in the SupervisorMonad with your state just below the SupervisorMonad in the monad stack great deal of the logic in this module deals with gathering statistics whose purpose is to provide data that can be used to figure out what is going wrong if the runtime is not scaling inversely with the number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "Supervisor",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics for a value obtained by integrating a value that is a function of\n    time --- i.e., a quantity that holds a single value at any given point in\n    time.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "FunctionOfTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics for value obtained by integrating value that is function of time i.e quantity that holds single value at any given point in time",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "FunctionOfTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Function Of Time Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:FunctionOfTimeStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics for a value obtained by collecting a number of independent measurements. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "IndependentMeasurementsStatistics",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics for value obtained by collecting number of independent measurements",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "IndependentMeasurementsStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Independent Measurements Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:IndependentMeasurementsStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics gathered about the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupervisor callbacks provide the means by which the supervisor logic\n    communicates to the adapter, usually in order to tell it what it wants to\n    say to various workers.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCallbacks",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "data"
        },
        "index": {
          "description": "Supervisor callbacks provide the means by which the supervisor logic communicates to the adapter usually in order to tell it what it wants to say to various workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCallbacks",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Callbacks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just a sum of \u003ccode\u003e\u003ca\u003eSupervisorMonadConstraint\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eSupervisorWorkerIdConstraint\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorFullConstraint",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorFullConstraint",
          "type": "type"
        },
        "index": {
          "description": "This is just sum of SupervisorMonadConstraint and the SupervisorWorkerIdConstraint",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorFullConstraint",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Full Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorFullConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the monad in which the supervisor logic is run;  it keeps track of\n    the state of the system including the current workers and their workloads,\n    the current progress of the system, which workers we are waiting for a\n    progress update or stolen workload from, etc.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorMonad",
          "type": "data"
        },
        "index": {
          "description": "This is the monad in which the supervisor logic is run it keeps track of the state of the system including the current workers and their workloads the current progress of the system which workers we are waiting for progress update or stolen workload from etc",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the constraint placed on the monad in which the supervisor is running. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorMonadConstraint",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorMonadConstraint",
          "type": "type"
        },
        "index": {
          "description": "This is the constraint placed on the monad in which the supervisor is running",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorMonadConstraint",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Monad Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorMonadConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outcome of running the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcome",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
          "type": "data"
        },
        "index": {
          "description": "The outcome of running the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcome",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the \u003ccode\u003e\u003ca\u003eSupervisorOutcome\u003c/a\u003e\u003c/code\u003e associated with a given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcomeFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcomeFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the SupervisorOutcome associated with given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcomeFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Outcome For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorOutcomeFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e is a specification of an event loop to be run inside\n    the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e;  it exists in order to help the supervisor get an\n    estimate for how much time it is spending doing work as opposed to waiting\n    for a message from a worker so that it can generate accurate statistics\n    about how much of the time it was occupied at the end of the run.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorProgram",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
          "type": "data"
        },
        "index": {
          "description": "SupervisorProgram is specification of an event loop to be run inside the SupervisorMonad it exists in order to help the supervisor get an estimate for how much time it is spending doing work as opposed to waiting for message from worker so that it can generate accurate statistics about how much of the time it was occupied at the end of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorProgram",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reason why the supervisor terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorTerminationReason",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
          "type": "data"
        },
        "index": {
          "description": "The reason why the supervisor terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorTerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorTerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the \u003ccode\u003e\u003ca\u003eSupervisorTerminationReason\u003c/a\u003e\u003c/code\u003e associated with a given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorTerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReasonFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the SupervisorTerminationReason associated with given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorTerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Termination Reason For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorTerminationReasonFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the constraint placed on the types that can be used as worker ids. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorWorkerIdConstraint",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorWorkerIdConstraint",
          "type": "type"
        },
        "index": {
          "description": "This is the constraint placed on the types that can be used as worker ids",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorWorkerIdConstraint",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Worker Id Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#t:SupervisorWorkerIdConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlockingProgram\u003c/a\u003e\u003c/code\u003e has an event loop that executes an action that\n        pauses the thread until an event occurs and then reacts to that event.\n        The first argument is the supervisor action that initializes the system,\n        the second argument is an action that blocks until an event has\n        occurred, and the third argument is the supervisor action to run in\n        response to the event.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "BlockingProgram",
          "package": "LogicGrowsOnTrees",
          "signature": "forall α . BlockingProgram (SupervisorMonad exploration_mode worker_id m ()) (m α) (α -\u003e SupervisorMonad exploration_mode worker_id m ())",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
          "type": "function"
        },
        "index": {
          "description": "BlockingProgram has an event loop that executes an action that pauses the thread until an event occurs and then reacts to that event The first argument is the supervisor action that initializes the system the second argument is an action that blocks until an event has occurred and the third argument is the supervisor action to run in response to the event",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "BlockingProgram",
          "normalized": "a b BlockingProgram(SupervisorMonad c d e())(e b)(b-\u003eSupervisorMonad c d e())",
          "package": "LogicGrowsOnTrees",
          "partial": "Blocking Program",
          "signature": "forall α BlockingProgram(SupervisorMonad exploration_mode worker_id m())(m α)(α-\u003eSupervisorMonad exploration_mode worker_id m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:BlockingProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "FunctionOfTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "FunctionOfTimeStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "FunctionOfTimeStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Function Of Time Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:FunctionOfTimeStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "IndependentMeasurementsStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "IndependentMeasurementsStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "IndependentMeasurementsStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Independent Measurements Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:IndependentMeasurementsStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePollingProgram\u003c/a\u003e\u003c/code\u003e has an event loop that executes an action that\n        checks whether an event has occurred and if so then reacts to that\n        event. The first argument is the supervisor action that initializes the\n        system, the second argument is an action that checks whether an event\n        has occurred, and the third argument is the supervisor action to run in\n        response to an event.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "PollingProgram",
          "package": "LogicGrowsOnTrees",
          "signature": "forall α . PollingProgram (SupervisorMonad exploration_mode worker_id m ()) (m (Maybe α)) (α -\u003e SupervisorMonad exploration_mode worker_id m ())",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
          "type": "function"
        },
        "index": {
          "description": "PollingProgram has an event loop that executes an action that checks whether an event has occurred and if so then reacts to that event The first argument is the supervisor action that initializes the system the second argument is an action that checks whether an event has occurred and the third argument is the supervisor action to run in response to an event",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "PollingProgram",
          "normalized": "a b PollingProgram(SupervisorMonad c d e())(e(Maybe b))(b-\u003eSupervisorMonad c d e())",
          "package": "LogicGrowsOnTrees",
          "partial": "Polling Program",
          "signature": "forall α PollingProgram(SupervisorMonad exploration_mode worker_id m())(m(Maybe α))(α-\u003eSupervisorMonad exploration_mode worker_id m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:PollingProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe supervisor aborted before finishing;  included is the current progress at the time it aborted \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorAborted",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorAborted progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "the supervisor aborted before finishing included is the current progress at the time it aborted",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorAborted",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorAborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCallbacks",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorCallbacks",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCallbacks",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Callbacks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe supervisor completed exploring the tree;  included is the final result \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCompleted",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorCompleted final_result",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "the supervisor completed exploring the tree included is the final result",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorCompleted",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe supervisor failed to explore the tree;  included is the worker where the failure occured as well as the message and the current progress at the time of failure \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorFailure",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorFailure progress worker_id String",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "the supervisor failed to explore the tree included is the worker where the failure occured as well as the message and the current progress at the time of failure",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorFailure",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcome",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorOutcome",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "SupervisorOutcome",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:SupervisorOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eUnrestrictedProgram\u003c/a\u003e\u003c/code\u003e is an event loop that you implement manually;\n        note that it must run forever until the logic in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e\n        decides to exit --- although you can always force it to abort by calling\n        \u003ccode\u003e\u003ca\u003eabortSupervisor\u003c/a\u003e\u003c/code\u003e.  This mode exists for testing rather than to be used\n        by an adapter, but if you do use it then you take on responsibility for\n        calling \u003ccode\u003e\u003ca\u003ebeginSupervisorOccupied\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eendSupervisorOccupied\u003c/a\u003e\u003c/code\u003e when\n        respectively the supervisor has begun and ended processing events so\n        that the supervisor occupation statistics are correct.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "UnrestrictedProgram",
          "package": "LogicGrowsOnTrees",
          "signature": "UnrestrictedProgram (forall α.  SupervisorMonad exploration_mode worker_id m α)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#SupervisorProgram",
          "type": "function"
        },
        "index": {
          "description": "An UnrestrictedProgram is an event loop that you implement manually note that it must run forever until the logic in the SupervisorMonad decides to exit although you can always force it to abort by calling abortSupervisor This mode exists for testing rather than to be used by an adapter but if you do use it then you take on responsibility for calling beginSupervisorOccupied and endSupervisorOccupied when respectively the supervisor has begun and ended processing events so that the supervisor occupation statistics are correct",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "UnrestrictedProgram",
          "package": "LogicGrowsOnTrees",
          "partial": "Unrestricted Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:UnrestrictedProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAborts the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "abortSupervisor",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#abortSupervisor",
          "type": "function"
        },
        "index": {
          "description": "Aborts the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "abortSupervisor",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:abortSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has been added to the system;  the\n    supervisor will attempt to obtain a workload for it, stealing one if\n    necessary.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "addWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#addWorker",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has been added to the system the supervisor will attempt to obtain workload for it stealing one if necessary",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "addWorker",
          "normalized": "a-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:addWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a function to be called whenever the number of workers changes; the\n    given function will be also called immediately with the current number of\n    workers.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "addWorkerCountListener",
          "package": "LogicGrowsOnTrees",
          "signature": "(Int -\u003e IO ()) -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#addWorkerCountListener",
          "type": "function"
        },
        "index": {
          "description": "Submits function to be called whenever the number of workers changes the given function will be also called immediately with the current number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "addWorkerCountListener",
          "normalized": "(Int-\u003eIO())-\u003eSupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Count Listener",
          "signature": "(Int-\u003eIO())-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:addWorkerCountListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals that the supervisor has begun processing an event. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "beginSupervisorOccupied",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#beginSupervisorOccupied",
          "type": "function"
        },
        "index": {
          "description": "Signals that the supervisor has begun processing an event",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "beginSupervisorOccupied",
          "normalized": "SupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Occupied",
          "signature": "SupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:beginSupervisorOccupied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a progress update request to the given workers \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "broadcastProgressUpdateToWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "[worker_id] -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send progress update request to the given workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "broadcastProgressUpdateToWorkers",
          "normalized": "[a]-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update To Workers",
          "signature": "[worker_id]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:broadcastProgressUpdateToWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a workload steal request to the given workers \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "broadcastWorkloadStealToWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "[worker_id] -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send workload steal request to the given workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "broadcastWorkloadStealToWorkers",
          "normalized": "[a]-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Steal To Workers",
          "signature": "[worker_id]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:broadcastWorkloadStealToWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns off debug mode;  for more details see \u003ccode\u003e\u003ca\u003esetSupervisorDebugMode\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "disableSupervisorDebugMode",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#disableSupervisorDebugMode",
          "type": "function"
        },
        "index": {
          "description": "Turns off debug mode for more details see setSupervisorDebugMode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "disableSupervisorDebugMode",
          "normalized": "SupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Debug Mode",
          "signature": "SupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:disableSupervisorDebugMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns on debug mode;  for more details see \u003ccode\u003e\u003ca\u003esetSupervisorDebugMode\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "enableSupervisorDebugMode",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#enableSupervisorDebugMode",
          "type": "function"
        },
        "index": {
          "description": "Turns on debug mode for more details see setSupervisorDebugMode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "enableSupervisorDebugMode",
          "normalized": "SupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Debug Mode",
          "signature": "SupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:enableSupervisorDebugMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals that the supervisor has finished processing an event. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "endSupervisorOccupied",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#endSupervisorOccupied",
          "type": "function"
        },
        "index": {
          "description": "Signals that the supervisor has finished processing an event",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "endSupervisorOccupied",
          "normalized": "SupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Occupied",
          "signature": "SupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:endSupervisorOccupied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current progress of the system. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m (ProgressFor exploration_mode)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getCurrentProgress",
          "type": "function"
        },
        "index": {
          "description": "Gets the current progress of the system",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getCurrentProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current statistics of the system. (Unlike the other \"get\"\n    operations, there is a small but non-zero cost to do this as the statistics\n    exist in an intermediate state that needs to be finalized.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m RunStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getCurrentStatistics",
          "type": "function"
        },
        "index": {
          "description": "Gets the current statistics of the system Unlike the other get operations there is small but non-zero cost to do this as the statistics exist in an intermediate state that needs to be finalized",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getCurrentStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the number of workers that are currently present in the system. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m Int",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#getNumberOfWorkers",
          "type": "function"
        },
        "index": {
          "description": "Gets the number of workers that are currently present in the system",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:getNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that a global progress update be performed;  the supervisor will\n    send progress update requests to all workers, and when it has received a\n    response from everyone it will call the \u003ccode\u003e\u003ca\u003ereceiveCurrentProgress\u003c/a\u003e\u003c/code\u003e callback in\n    the \u003ccode\u003e\u003ca\u003eSupervisorCallbacks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "performGlobalProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#performGlobalProgressUpdate",
          "type": "function"
        },
        "index": {
          "description": "Request that global progress update be performed the supervisor will send progress update requests to all workers and when it has received response from everyone it will call the receiveCurrentProgress callback in the SupervisorCallbacks",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "performGlobalProgressUpdate",
          "normalized": "SupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Global Progress Update",
          "signature": "SupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:performGlobalProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereceive the result of the global progress update that was requested by the controller \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveCurrentProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgressFor exploration_mode -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "function"
        },
        "index": {
          "description": "receive the result of the global progress update that was requested by the controller",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveCurrentProgress",
          "normalized": "ProgressFor a-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Current Progress",
          "signature": "ProgressFor exploration_mode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveCurrentProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a progress update has been received by a worker. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e ProgressUpdateFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveProgressUpdate",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that progress update has been received by worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveProgressUpdate",
          "normalized": "a-\u003eProgressUpdateFor b-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update",
          "signature": "worker_id-\u003eProgressUpdateFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has responded to a workload steal\n    request;  a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates that the worker did not have a workload that\n    could be stolen (which occurs if it hadn't taken any branches at the time\n    the request was received).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveStolenWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e Maybe (StolenWorkloadFor exploration_mode) -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveStolenWorkload",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has responded to workload steal request Nothing indicates that the worker did not have workload that could be stolen which occurs if it hadn taken any branches at the time the request was received",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveStolenWorkload",
          "normalized": "a-\u003eMaybe(StolenWorkloadFor b)-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload",
          "signature": "worker_id-\u003eMaybe(StolenWorkloadFor exploration_mode)-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveStolenWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has failed;  the system will be\n    terminated and the given message returned as the failure message.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFailure",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e String -\u003e SupervisorMonad exploration_mode worker_id m α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFailure",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has failed the system will be terminated and the given message returned as the failure message",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFailure",
          "normalized": "a-\u003eString-\u003eSupervisorMonad b a c d",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Failure",
          "signature": "worker_id-\u003eString-\u003eSupervisorMonad exploration_mode worker_id m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinished",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinished",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinished",
          "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Finished",
          "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress; the worker will be removed after its\n    final progress has been processed.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinishedAndRemoved",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinishedAndRemoved",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress the worker will be removed after its final progress has been processed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinishedAndRemoved",
          "normalized": "a-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Finished And Removed",
          "signature": "worker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinishedAndRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker has finished its current workload and\n    returned the given final progress;  if the first argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e then the\n    worker will be removed.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinishedWithRemovalFlag",
          "package": "LogicGrowsOnTrees",
          "signature": "Bool -\u003e worker_id -\u003e WorkerFinishedProgressFor exploration_mode -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#receiveWorkerFinishedWithRemovalFlag",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker has finished its current workload and returned the given final progress if the first argument is True then the worker will be removed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "receiveWorkerFinishedWithRemovalFlag",
          "normalized": "Bool-\u003ea-\u003eWorkerFinishedProgressFor b-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Finished With Removal Flag",
          "signature": "Bool-\u003eworker_id-\u003eWorkerFinishedProgressFor exploration_mode-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:receiveWorkerFinishedWithRemovalFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the supervisor that a worker (which might have been active and\n    possibly even waited on for a progress update and/or stolen workload) has\n    been removed; the worker will be removed from the set of workers with\n    pending requests and its workload will be returned to the pool of available\n    workloads.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "removeWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#removeWorker",
          "type": "function"
        },
        "index": {
          "description": "Informs the supervisor that worker which might have been active and possibly even waited on for progress update and or stolen workload has been removed the worker will be removed from the set of workers with pending requests and its workload will be returned to the pool of available workloads",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "removeWorker",
          "normalized": "a-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:removeWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eremoveWorker\u003c/a\u003e\u003c/code\u003e, but only acts if the worker is present. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "removeWorkerIfPresent",
          "package": "LogicGrowsOnTrees",
          "signature": "worker_id -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#removeWorkerIfPresent",
          "type": "function"
        },
        "index": {
          "description": "Like removeWorker but only acts if the worker is present",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "removeWorkerIfPresent",
          "normalized": "a-\u003eSupervisorMonad b a c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker If Present",
          "signature": "worker_id-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:removeWorkerIfPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the supervisor in the given exploration mode with the given callbacks\n    and program.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runSupervisor",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e SupervisorProgram exploration_mode worker_id m -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runSupervisor",
          "type": "function"
        },
        "index": {
          "description": "Runs the supervisor in the given exploration mode with the given callbacks and program",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runSupervisor",
          "normalized": "ExplorationMode a-\u003eSupervisorCallbacks a b c-\u003eSupervisorProgram a b c-\u003ec(SupervisorOutcomeFor a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor",
          "signature": "ExplorationMode exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m-\u003em(SupervisorOutcomeFor exploration_mode worker_id)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunSupervisor\u003c/a\u003e\u003c/code\u003e but starting from the given progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runSupervisorStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e SupervisorProgram exploration_mode worker_id m -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runSupervisorStartingFrom",
          "type": "function"
        },
        "index": {
          "description": "Like runSupervisor but starting from the given progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runSupervisorStartingFrom",
          "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eSupervisorCallbacks a b c-\u003eSupervisorProgram a b c-\u003ec(SupervisorOutcomeFor a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Starting From",
          "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003eSupervisorProgram exploration_mode worker_id m-\u003em(SupervisorOutcomeFor exploration_mode worker_id)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runSupervisorStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the supervisor with a raw action in the \u003ccode\u003e\u003ca\u003eSupervisorMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE:  You should not normally use this function, as it exists primarily for\n           testing purposes;  see \u003ccode\u003e\u003ca\u003eSupervisorProgram\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runUnrestrictedSupervisor",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e (forall α.  SupervisorMonad exploration_mode worker_id m α) -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runUnrestrictedSupervisor",
          "type": "function"
        },
        "index": {
          "description": "Runs the supervisor with raw action in the SupervisorMonad NOTE You should not normally use this function as it exists primarily for testing purposes see SupervisorProgram for details",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runUnrestrictedSupervisor",
          "normalized": "ExplorationMode a-\u003eSupervisorCallbacks a b c-\u003e(d e SupervisorMonad a b c f)-\u003ec(SupervisorOutcomeFor a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Unrestricted Supervisor",
          "signature": "ExplorationMode exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003e(forall α. SupervisorMonad exploration_mode worker_id m α)-\u003em(SupervisorOutcomeFor exploration_mode worker_id)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runUnrestrictedSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunUnrestrictedSupervisor\u003c/a\u003e\u003c/code\u003e but starting from the given progress. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runUnrestrictedSupervisorStartingFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e SupervisorCallbacks exploration_mode worker_id m -\u003e (forall α.  SupervisorMonad exploration_mode worker_id m α) -\u003e m (SupervisorOutcomeFor exploration_mode worker_id)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#runUnrestrictedSupervisorStartingFrom",
          "type": "function"
        },
        "index": {
          "description": "Like runUnrestrictedSupervisor but starting from the given progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "runUnrestrictedSupervisorStartingFrom",
          "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eSupervisorCallbacks a b c-\u003e(d e SupervisorMonad a b c f)-\u003ec(SupervisorOutcomeFor a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Unrestricted Supervisor Starting From",
          "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eSupervisorCallbacks exploration_mode worker_id m-\u003e(forall α. SupervisorMonad exploration_mode worker_id m α)-\u003em(SupervisorOutcomeFor exploration_mode worker_id)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:runUnrestrictedSupervisorStartingFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend the given workload to the given worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "sendWorkloadToWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e worker_id -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send the given workload to the given worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "sendWorkloadToWorker",
          "normalized": "Workload-\u003ea-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload To Worker",
          "signature": "Workload-\u003eworker_id-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:sendWorkloadToWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether the supervisor is in debug mode;  when it is in this mode it\n    performs continuous self-consistency checks.  This mode is intended for\n    assisting in debugging new adapters.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "setSupervisorDebugMode",
          "package": "LogicGrowsOnTrees",
          "signature": "Bool -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#setSupervisorDebugMode",
          "type": "function"
        },
        "index": {
          "description": "Sets whether the supervisor is in debug mode when it is in this mode it performs continuous self-consistency checks This mode is intended for assisting in debugging new adapters",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "setSupervisorDebugMode",
          "normalized": "Bool-\u003eSupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Supervisor Debug Mode",
          "signature": "Bool-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:setSupervisorDebugMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the workload buffer size, which is the minimum number of workloads that\n    the supervisor will attempt to have available at all times so that requests\n    for new workloads from workers can be responded to immediately.\n\u003c/p\u003e\u003cp\u003eNormally the default value of 4 will be fine, but if you run into a problem\n    where the amount of time needed to steal a workload is greater than the\n    average time between requests for new workloads, then setting this to be\n    proportional to the time needed to steal a workload divided by the time\n    between workload requests may help.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "setWorkloadBufferSize",
          "package": "LogicGrowsOnTrees",
          "signature": "Int -\u003e SupervisorMonad exploration_mode worker_id m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#setWorkloadBufferSize",
          "type": "function"
        },
        "index": {
          "description": "Sets the workload buffer size which is the minimum number of workloads that the supervisor will attempt to have available at all times so that requests for new workloads from workers can be responded to immediately Normally the default value of will be fine but if you run into problem where the amount of time needed to steal workload is greater than the average time between requests for new workloads then setting this to be proportional to the time needed to steal workload divided by the time between workload requests may help",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "setWorkloadBufferSize",
          "normalized": "Int-\u003eSupervisorMonad a b c()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Buffer Size",
          "signature": "Int-\u003eSupervisorMonad exploration_mode worker_id m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:setWorkloadBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe average value \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statAverage",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "the average value",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statAverage",
          "package": "LogicGrowsOnTrees",
          "partial": "Average",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of measurements \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "the number of measurements",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statCount",
          "package": "LogicGrowsOnTrees",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe maximum measurement value \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statMax",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "the maximum measurement value",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statMax",
          "package": "LogicGrowsOnTrees",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe minimum measurement value \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statMin",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "the minimum measurement value",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statMin",
          "package": "LogicGrowsOnTrees",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe standard deviation \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statStdDev",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "the standard deviation",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "statStdDev",
          "package": "LogicGrowsOnTrees",
          "partial": "Std Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:statStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe workers that were present when it finished \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorRemainingWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "[worker_id]",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
          "type": "function"
        },
        "index": {
          "description": "the workers that were present when it finished",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorRemainingWorkers",
          "normalized": "[a]",
          "package": "LogicGrowsOnTrees",
          "partial": "Remaining Workers",
          "signature": "[worker_id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorRemainingWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe statistics for the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorRunStatistics",
          "package": "LogicGrowsOnTrees",
          "signature": "RunStatistics",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
          "type": "function"
        },
        "index": {
          "description": "the statistics for the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorRunStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorRunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe reason the supervisor terminated \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorTerminationReason",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorTerminationReason final_result progress worker_id",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#SupervisorOutcome",
          "type": "function"
        },
        "index": {
          "description": "the reason the supervisor terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "supervisorTerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:supervisorTerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe average value of the function over the time period \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeAverage",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "description": "the average value of the function over the time period",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeAverage",
          "package": "LogicGrowsOnTrees",
          "partial": "Average",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of points at which the function changed \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeCount",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "description": "the number of points at which the function changed",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeCount",
          "package": "LogicGrowsOnTrees",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe maximum value of the function over the time period \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeMax",
          "package": "LogicGrowsOnTrees",
          "signature": "α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "description": "the maximum value of the function over the time period",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeMax",
          "package": "LogicGrowsOnTrees",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe minimum value of the function over the time period \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeMin",
          "package": "LogicGrowsOnTrees",
          "signature": "α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "description": "the minimum value of the function over the time period",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeMin",
          "package": "LogicGrowsOnTrees",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe standard deviation of the function over the time period \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeStdDev",
          "package": "LogicGrowsOnTrees",
          "signature": "Double",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#FunctionOfTimeStatistics",
          "type": "function"
        },
        "index": {
          "description": "the standard deviation of the function over the time period",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "timeStdDev",
          "package": "LogicGrowsOnTrees",
          "partial": "Std Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:timeStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there exists any workers waiting for a workload, it returns the id of one\n    of them wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e; it not, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. (This is useful,\n    for example, if you want to reduce the number of workers as it is best to\n    start by removing ones that are currently idle.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "tryGetWaitingWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorMonad exploration_mode worker_id m (Maybe worker_id)",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#tryGetWaitingWorker",
          "type": "function"
        },
        "index": {
          "description": "If there exists any workers waiting for workload it returns the id of one of them wrapped in Just it not it returns Nothing This is useful for example if you want to reduce the number of workers as it is best to start by removing ones that are currently idle",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Supervisor",
          "module": "LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "name": "tryGetWaitingWorker",
          "package": "LogicGrowsOnTrees",
          "partial": "Get Waiting Worker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Supervisor.html#v:tryGetWaitingWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eWorker\u003c/code\u003e module contains the workhorse code of the parallelization\n    infrastructure in the form of the \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e function, which\n    explores a tree step by step while continuously polling for requests; for\n    more details see \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "Worker",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html",
          "type": "module"
        },
        "index": {
          "description": "The Worker module contains the workhorse code of the parallelization infrastructure in the form of the forkWorkerThread function which explores tree step by step while continuously polling for requests for more details see forkWorkerThread",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "Worker",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA progress update sent to the supervisor;  it has a component which contains\n    information about how much of the tree has been explored and what results\n    have been found so far, as well as the remaining \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e to be completed\n    by this worker.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
          "type": "data"
        },
        "index": {
          "description": "progress update sent to the supervisor it has component which contains information about how much of the tree has been explored and what results have been found so far as well as the remaining Workload to be completed by this worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:ProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eProgressUpdate\u003c/a\u003e\u003c/code\u003e associated with the\n    given exploration mode.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdateFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdateFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of ProgressUpdate associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdateFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:ProgressUpdateFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stolen workload sent to the supervisor;  in addition to a component with\n    the stolen \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e itself, it also has a \u003ccode\u003e\u003ca\u003eProgressUpdate\u003c/a\u003e\u003c/code\u003e component,\n    which is required in order to maintain the invariant that all of the\n    \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003es that the supervisor has on file (both assigned to workers and\n    unassigned) plus the current progress equals the full tree.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
          "type": "data"
        },
        "index": {
          "description": "stolen workload sent to the supervisor in addition to component with the stolen Workload itself it also has ProgressUpdate component which is required in order to maintain the invariant that all of the Workload that the supervisor has on file both assigned to workers and unassigned plus the current progress equals the full tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:StolenWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eStolenWorkload\u003c/a\u003e\u003c/code\u003e associated with the\n    the given exploration mode.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkloadFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkloadFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of StolenWorkload associated with the the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkloadFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:StolenWorkloadFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe environment of a running worker. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironment",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "data"
        },
        "index": {
          "description": "The environment of running worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironment",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Environment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerEnvironment\u003c/a\u003e\u003c/code\u003e associated with\n    the given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironmentFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironmentFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of WorkerEnvironment associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironmentFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Environment For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerEnvironmentFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action that a worker can take to push a result to the supervisor;  this\n    type is effectively null (with the exact value \u003ccode\u003e\u003ca\u003eabsurd\u003c/a\u003e\u003c/code\u003e) for all modes\n    except \u003ccode\u003e\u003ca\u003eFoundModeUsingPush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerPushActionFor",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerPushActionFor",
          "type": "function"
        },
        "index": {
          "description": "The action that worker can take to push result to the supervisor this type is effectively null with the exact value absurd for all modes except FoundModeUsingPush",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerPushActionFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Push Action For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerPushActionFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue of worker requests.\n\u003c/p\u003e\u003cp\u003eNOTE:  Although the type is a list, and requests are added by prepending\n    them to the list, it still acts as a queue because the worker will reverse\n    the list before processing the requests.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerRequestQueue",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerRequestQueue",
          "type": "type"
        },
        "index": {
          "description": "queue of worker requests NOTE Although the type is list and requests are added by prepending them to the list it still acts as queue because the worker will reverse the list before processing the requests",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerRequestQueue",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Request Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerRequestQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerRequestQueue\u003c/a\u003e\u003c/code\u003e associated with\n    the given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerRequestQueueFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerRequestQueueFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of WorkerRequestQueue associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerRequestQueueFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Request Queue For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerRequestQueueFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reason why a worker terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerTerminationReason",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
          "type": "data"
        },
        "index": {
          "description": "The reason why worker terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerTerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerTerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eWorkerTerminationReason\u003c/a\u003e\u003c/code\u003e associated\n    with the given exploration mode.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerTerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReasonFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of WorkerTerminationReason associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerTerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Termination Reason For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#t:WorkerTerminationReasonFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgressUpdate",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "ProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:ProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "StolenWorkload",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "StolenWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Stolen Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:StolenWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworker was aborted by either an external request or the \u003ccode\u003e\u003ca\u003eThreadKilled\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUserInterrupt\u003c/a\u003e\u003c/code\u003e exceptions \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerAborted",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerAborted",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "worker was aborted by either an external request or the ThreadKilled or UserInterrupt exceptions",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerAborted",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerAborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironment",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerEnvironment",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerEnvironment",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworker failed;  included is the message of the failure (this would have\n        been a value of type \u003ccode\u003eSomeException\u003c/code\u003e if it were not for the fact that\n        this value will often have to be sent over communication channels and\n        exceptions cannot be serialized (as they have unknown type), meaning\n        that it usually has to be turned into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e anyway)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerFailed",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerFailed String",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "worker failed included is the message of the failure this would have been value of type SomeException if it were not for the fact that this value will often have to be sent over communication channels and exceptions cannot be serialized as they have unknown type meaning that it usually has to be turned into String via show anyway",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerFailed",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworker completed normally without error;  included is the final result \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerFinished",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerFinished worker_final_progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerTerminationReason",
          "type": "function"
        },
        "index": {
          "description": "worker completed normally without error included is the final result",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "WorkerFinished",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:WorkerFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores a tree with the specified purity using the given mode by forking a\n    worker thread and waiting for it to finish; it exists to facilitate testing\n    and benchmarking and is not a function that you are likely to ever have a\n    need for yourself.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "exploreTreeGeneric",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e Purity m n -\u003e TreeT m α -\u003e IO (WorkerTerminationReason (FinalResultFor exploration_mode))",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#exploreTreeGeneric",
          "type": "function"
        },
        "index": {
          "description": "Explores tree with the specified purity using the given mode by forking worker thread and waiting for it to finish it exists to facilitate testing and benchmarking and is not function that you are likely to ever have need for yourself",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "exploreTreeGeneric",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b d-\u003eIO(WorkerTerminationReason(FinalResultFor a))",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Generic",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m α-\u003eIO(WorkerTerminationReason(FinalResultFor exploration_mode))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:exploreTreeGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforkWorkerThread\u003c/a\u003e\u003c/code\u003e function is the workhorse of the parallization\n    infrastructure; it explores a tree in a separate thread while polling for\n    requests. Specifically, the worker alternates between stepping through the\n    tree and checking to see if there are any new requests in the queue.\n\u003c/p\u003e\u003cp\u003eThe worker is optimized around the observation that the vast majority of its\n    time is spent exploring the tree rather than responding to requests, and so\n    the amount of overhead needed to check if any requests are present needs to\n    be minimized at the cost of possibly delaying a response to an incoming\n    request. For this reason, it uses an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e for the queue to minimize the\n    cost of peeking at it rather than an \u003ccode\u003eMVar\u003c/code\u003e or some other thread\n    synchronization variable; the trade-off is that if a request is added to the\n    queue by a different processor then it might not be noticed immediately the\n    caches get synchronized. Likewise, the request queue uses the List type\n    rather than something like \u003ca\u003eData.Sequence\u003c/a\u003e for simplicity; the vast majority\n    of the time the worker will encounter an empty list, and on the rare\n    occasion when the list is non-empty it will be short enough that\n    \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003eing it will not pose a significant cost.\n\u003c/p\u003e\u003cp\u003eAt any given point in the exploration, there is an initial path which\n    locates the subtree that was given as the original workload, a cursor which\n    indicates the subtree \u003cem\u003ewithin\u003c/em\u003e this subtree that makes up the \u003cem\u003ecurrent\u003c/em\u003e\n    workload, and the context which indicates the current location in the\n    subtree that is being explored. All workers start with an empty cursor; when\n    a workload is stolen, decisions made early on in the the context are frozen\n    and moved into the cursor because if they were not then when the worker\n    backtracked it would explore a workload that it just gave away, resulting in\n    some results being observed twice.\n\u003c/p\u003e\u003cp\u003eThe worker terminates either if it finishes exploring all the nodes in its\n    (current) workload, if an error occurs, or if it is aborted either via.\n    the \u003ccode\u003e\u003ca\u003eThreadKilled\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUserInterrupt\u003c/a\u003e\u003c/code\u003e exceptions or by an abort request\n    placed in the request queue.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "forkWorkerThread",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e (WorkerTerminationReasonFor exploration_mode -\u003e IO ())-\u003e TreeT m (ResultFor exploration_mode)-\u003e Workload-\u003e WorkerPushActionFor exploration_mode-\u003e IO (WorkerEnvironmentFor exploration_mode)",
          "type": "function"
        },
        "index": {
          "description": "The forkWorkerThread function is the workhorse of the parallization infrastructure it explores tree in separate thread while polling for requests Specifically the worker alternates between stepping through the tree and checking to see if there are any new requests in the queue The worker is optimized around the observation that the vast majority of its time is spent exploring the tree rather than responding to requests and so the amount of overhead needed to check if any requests are present needs to be minimized at the cost of possibly delaying response to an incoming request For this reason it uses an IORef for the queue to minimize the cost of peeking at it rather than an MVar or some other thread synchronization variable the trade-off is that if request is added to the queue by different processor then it might not be noticed immediately the caches get synchronized Likewise the request queue uses the List type rather than something like Data.Sequence for simplicity the vast majority of the time the worker will encounter an empty list and on the rare occasion when the list is non-empty it will be short enough that reverse ing it will not pose significant cost At any given point in the exploration there is an initial path which locates the subtree that was given as the original workload cursor which indicates the subtree within this subtree that makes up the current workload and the context which indicates the current location in the subtree that is being explored All workers start with an empty cursor when workload is stolen decisions made early on in the the context are frozen and moved into the cursor because if they were not then when the worker backtracked it would explore workload that it just gave away resulting in some results being observed twice The worker terminates either if it finishes exploring all the nodes in its current workload if an error occurs or if it is aborted either via the ThreadKilled and UserInterrupt exceptions or by an abort request placed in the request queue",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "forkWorkerThread",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003e(WorkerTerminationReasonFor a-\u003eIO())-\u003eTreeT b(ResultFor a)-\u003eWorkload-\u003eWorkerPushActionFor a-\u003eIO(WorkerEnvironmentFor a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Thread",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003e(WorkerTerminationReasonFor exploration_mode-\u003eIO())-\u003eTreeT m(ResultFor exploration_mode)-\u003eWorkload-\u003eWorkerPushActionFor exploration_mode-\u003eIO(WorkerEnvironmentFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:forkWorkerThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "progressUpdateProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "progressUpdateProgress",
          "package": "LogicGrowsOnTrees",
          "partial": "Update Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:progressUpdateProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "progressUpdateRemainingWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#ProgressUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "progressUpdateRemainingWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Update Remaining Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:progressUpdateRemainingWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to abort. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendAbortRequest",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerRequestQueue progress -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#sendAbortRequest",
          "type": "function"
        },
        "index": {
          "description": "Sends request to abort",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendAbortRequest",
          "normalized": "WorkerRequestQueue a-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Abort Request",
          "signature": "WorkerRequestQueue progress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendAbortRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request for a progress update along with a response action to\n    perform when the progress update is available.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendProgressUpdateRequest",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerRequestQueue progress-\u003e (ProgressUpdate progress -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends request for progress update along with response action to perform when the progress update is available",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendProgressUpdateRequest",
          "normalized": "WorkerRequestQueue a-\u003e(ProgressUpdate a-\u003eIO())-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update Request",
          "signature": "WorkerRequestQueue progress-\u003e(ProgressUpdate progress-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendProgressUpdateRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to steal a workload along with a response action to\n    perform when the progress update is available.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendWorkloadStealRequest",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerRequestQueue progress-\u003e (Maybe (StolenWorkload progress) -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends request to steal workload along with response action to perform when the progress update is available",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "sendWorkloadStealRequest",
          "normalized": "WorkerRequestQueue a-\u003e(Maybe(StolenWorkload a)-\u003eIO())-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Steal Request",
          "signature": "WorkerRequestQueue progress-\u003e(Maybe(StolenWorkload progress)-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:sendWorkloadStealRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "stolenWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "stolenWorkload",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:stolenWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "stolenWorkloadProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgressUpdate progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#StolenWorkload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "stolenWorkloadProgressUpdate",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:stolenWorkloadProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe initial path of the worker's workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerInitialPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "function"
        },
        "index": {
          "description": "the initial path of the worker workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerInitialPath",
          "package": "LogicGrowsOnTrees",
          "partial": "Initial Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerInitialPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe request queue for the worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerPendingRequests",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerRequestQueue progress",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "function"
        },
        "index": {
          "description": "the request queue for the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerPendingRequests",
          "package": "LogicGrowsOnTrees",
          "partial": "Pending Requests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerPendingRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean IVar that is filled when the worker terminates \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerTerminationFlag",
          "package": "LogicGrowsOnTrees",
          "signature": "IVar ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "function"
        },
        "index": {
          "description": "an IVar that is filled when the worker terminates",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerTerminationFlag",
          "normalized": "IVar()",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Flag",
          "signature": "IVar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerTerminationFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe thread id of the worker thread \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerThreadId",
          "package": "LogicGrowsOnTrees",
          "signature": "ThreadId",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Worker.html#WorkerEnvironment",
          "type": "function"
        },
        "index": {
          "description": "the thread id of the worker thread",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Worker",
          "module": "LogicGrowsOnTrees.Parallel.Common.Worker",
          "name": "workerThreadId",
          "package": "LogicGrowsOnTrees",
          "partial": "Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Worker.html#v:workerThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides most of the common functionality needed to implement a\n    adapter where the number of workers can be adjusted during the run.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "Workgroup",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides most of the common functionality needed to implement adapter where the number of workers can be adjusted during the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "Workgroup",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the monad in which the adapter specific code is run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "InnerMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#InnerMonad",
          "type": "type"
        },
        "index": {
          "description": "This is the monad in which the adapter specific code is run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "InnerMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Inner Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:InnerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data structure contains callbacks to be invoked when a message has\n    been received, depending on the kind of message.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Message.html#MessageForSupervisorReceivers",
          "type": "data"
        },
        "index": {
          "description": "This data structure contains callbacks to be invoked when message has been received depending on the kind of message",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "MessageForSupervisorReceivers",
          "package": "LogicGrowsOnTrees",
          "partial": "Message For Supervisor Receivers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:MessageForSupervisorReceivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of worker ids used by this module (an alias for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkerId",
          "type": "type"
        },
        "index": {
          "description": "The type of worker ids used by this module an alias for Int",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of callbacks invoked by the supervisor code in this module. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupCallbacks",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "data"
        },
        "index": {
          "description": "set of callbacks invoked by the supervisor code in this module",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupCallbacks",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup Callbacks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the monad in which the workgroup controller will run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupControllerMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
          "type": "newtype"
        },
        "index": {
          "description": "This is the monad in which the workgroup controller will run",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupControllerMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup Controller Monad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupControllerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkgroupRequestQueueMonad\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eRequestQueueMonad\u003c/a\u003e\u003c/code\u003e but with the\n    additional ability to change the number of workers in the system.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupRequestQueueMonad",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupRequestQueueMonad",
          "type": "class"
        },
        "index": {
          "description": "WorkgroupRequestQueueMonad is RequestQueueMonad but with the additional ability to change the number of workers in the system",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupRequestQueueMonad",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup Request Queue Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#t:WorkgroupRequestQueueMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "C",
          "package": "LogicGrowsOnTrees",
          "signature": "C",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "C",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupCallbacks",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkgroupCallbacks",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "WorkgroupCallbacks",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup Callbacks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:WorkgroupCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the number of workers;  the first argument is a map that computes\n        the new number of workers given the old number of workers, and the\n        second argument is a callback that will be invoked with the new number\n        of workers.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echangeNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version of this request.\n\u003c/p\u003e\u003cp\u003eIf you just want to set the number of workers to some fixed value, then\n        see \u003ccode\u003e\u003ca\u003esetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "changeNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees",
          "signature": "(Word -\u003e Word) -\u003e (Word -\u003e IO ()) -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#changeNumberOfWorkersAsync",
          "type": "method"
        },
        "index": {
          "description": "Change the number of workers the first argument is map that computes the new number of workers given the old number of workers and the second argument is callback that will be invoked with the new number of workers See changeNumberOfWorkers for the synchronous version of this request If you just want to set the number of workers to some fixed value then see setNumberOfWorkers setNumberOfWorkersAsync",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "changeNumberOfWorkersAsync",
          "normalized": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Number Of Workers Async",
          "signature": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:changeNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a worker with the given id \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "createWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerId -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "create worker with the given id",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "createWorker",
          "normalized": "WorkerId-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "signature": "WorkerId-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:createWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestroy the worker with the given id; ideally this should be\n            implemented by signaling the worker to quit and then waiting for an\n            acknowledgement\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "destroyWorker",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerId -\u003e Bool -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "destroy the worker with the given id ideally this should be implemented by signaling the worker to quit and then waiting for an acknowledgement",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "destroyWorker",
          "normalized": "WorkerId-\u003eBool-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker",
          "signature": "WorkerId-\u003eBool-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:destroyWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestroy all of the workers in the given list in a manner that\n            ensures they all terminate promptly; this will be called at the end\n            of the run (successful or not)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "killAllWorkers",
          "package": "LogicGrowsOnTrees",
          "signature": "[WorkerId] -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "destroy all of the workers in the given list in manner that ensures they all terminate promptly this will be called at the end of the run successful or not",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "killAllWorkers",
          "normalized": "[WorkerId]-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "All Workers",
          "signature": "[WorkerId]-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:killAllWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores a tree using a workgroup;  this function is only intended to be\n    used by adapters where the number of workers can be changed on demand.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "runWorkgroup",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode-\u003e inner_state-\u003e (MessageForSupervisorReceivers exploration_mode WorkerId -\u003e WorkgroupCallbacks inner_state)-\u003e ProgressFor exploration_mode-\u003e WorkgroupControllerMonad inner_state exploration_mode ()-\u003e IO (RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "index": {
          "description": "Explores tree using workgroup this function is only intended to be used by adapters where the number of workers can be changed on demand",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "runWorkgroup",
          "normalized": "ExplorationMode a-\u003eb-\u003e(MessageForSupervisorReceivers a WorkerId-\u003eWorkgroupCallbacks b)-\u003eProgressFor a-\u003eWorkgroupControllerMonad b a()-\u003eIO(RunOutcomeFor a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Workgroup",
          "signature": "ExplorationMode exploration_mode-\u003einner_state-\u003e(MessageForSupervisorReceivers exploration_mode WorkerId-\u003eWorkgroupCallbacks inner_state)-\u003eProgressFor exploration_mode-\u003eWorkgroupControllerMonad inner_state exploration_mode()-\u003eIO(RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:runWorkgroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a progress update request to the given worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendProgressUpdateRequestTo",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerId -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send progress update request to the given worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendProgressUpdateRequestTo",
          "normalized": "WorkerId-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress Update Request To",
          "signature": "WorkerId-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendProgressUpdateRequestTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a workload steal request to the given worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendWorkloadStealRequestTo",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerId -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send workload steal request to the given worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendWorkloadStealRequestTo",
          "normalized": "WorkerId-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload Steal Request To",
          "signature": "WorkerId-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendWorkloadStealRequestTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a workload to the given worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendWorkloadTo",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerId -\u003e Workload -\u003e InnerMonad inner_state ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupCallbacks",
          "type": "function"
        },
        "index": {
          "description": "send workload to the given worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "sendWorkloadTo",
          "normalized": "WorkerId-\u003eWorkload-\u003eInnerMonad a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload To",
          "signature": "WorkerId-\u003eWorkload-\u003eInnerMonad inner_state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:sendWorkloadTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "unwrapC",
          "package": "LogicGrowsOnTrees",
          "signature": "RequestQueueReader exploration_mode WorkerId (WorkgroupStateMonad inner_state) α",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#WorkgroupControllerMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Common Workgroup",
          "module": "LogicGrowsOnTrees.Parallel.Common.Workgroup",
          "name": "unwrapC",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Common-Workgroup.html#v:unwrapC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThere are several tasks for which a user may wish to use LogicGrowsOnTrees,\n    such as gathering up all the results in a tree or stopping as soon as the\n    first result is found. Because almost all of the infrastructure required for\n    these different modes is the same, rather than creating a different system\n    for each mode we instead re-use the same system but pass around a mode\n    parameter that dictates its behavior at various points as well as some of\n    the types in the system.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e is defined using a GADT where each constructor has a\n    different argument for \u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e's type parameter; this was\n    done so that type families can be used to specialized types depending on the\n    constructor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ExplorationMode",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html",
          "type": "module"
        },
        "index": {
          "description": "There are several tasks for which user may wish to use LogicGrowsOnTrees such as gathering up all the results in tree or stopping as soon as the first result is found Because almost all of the infrastructure required for these different modes is the same rather than creating different system for each mode we instead re-use the same system but pass around mode parameter that dictates its behavior at various points as well as some of the types in the system ExplorationMode is defined using GADT where each constructor has different argument for ExplorationMode type parameter this was done so that type families can be used to specialized types depending on the constructor",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ExplorationMode",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration Mode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the entire tree and sum the results in all of the leaves. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "AllMode",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#AllMode",
          "type": "data"
        },
        "index": {
          "description": "Explore the entire tree and sum the results in all of the leaves",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "AllMode",
          "package": "LogicGrowsOnTrees",
          "partial": "All Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:AllMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type indicating the mode of the exploration.  Note that this is a GADT for\n    which the type parameter is unique to each constructor in order to allow\n    associated types to be specialized based on the value.\n\u003c/p\u003e\u003cp\u003eUnfortunately Haddock does not seem to support documenting the constructors\n    of a GADT, so the documentation for each constructor is located at the type\n    it is tagged with, all of which are defined after the \u003ccode\u003e\u003ca\u003eExplorationMode\u003c/a\u003e\u003c/code\u003e\n    type.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ExplorationMode",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
          "type": "data"
        },
        "index": {
          "description": "type indicating the mode of the exploration Note that this is GADT for which the type parameter is unique to each constructor in order to allow associated types to be specialized based on the value Unfortunately Haddock does not seem to support documenting the constructors of GADT so the documentation for each constructor is located at the type it is tagged with all of which are defined after the ExplorationMode type",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ExplorationMode",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ExplorationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the final result of exploring the tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FinalResultFor",
          "package": "LogicGrowsOnTrees",
          "signature": "FinalResultFor",
          "type": "function"
        },
        "index": {
          "description": "The type of the final result of exploring the tree",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FinalResultFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Final Result For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FinalResultFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the tree until a result is found, and if so then stop. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FirstMode",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FirstMode",
          "type": "data"
        },
        "index": {
          "description": "Explore the tree until result is found and if so then stop",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FirstMode",
          "package": "LogicGrowsOnTrees",
          "partial": "First Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FirstMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the tree, summing the results, until a condition has been met;\n    \u003ccode\u003ePull\u003c/code\u003e means that each worker's results will be kept and summed locally\n    until a request for them has been received from the supervisor, which means\n    that there might be a period of time where the collectively found results\n    meet the condition but the system is unaware of this as they are scattered\n    amongst the workers.\n\u003c/p\u003e\u003cp\u003eNOTE:  If you use this mode then you are responsible for ensuring that a\n           global progress update happens on a regular basis in order to pull\n           the results in from the workers and check to see if the condition has\n           been met;  if you do not do this then the run will not terminate\n           until the tree has been fully explored.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPull",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FoundModeUsingPull",
          "type": "data"
        },
        "index": {
          "description": "Explore the tree summing the results until condition has been met Pull means that each worker results will be kept and summed locally until request for them has been received from the supervisor which means that there might be period of time where the collectively found results meet the condition but the system is unaware of this as they are scattered amongst the workers NOTE If you use this mode then you are responsible for ensuring that global progress update happens on regular basis in order to pull the results in from the workers and check to see if the condition has been met if you do not do this then the run will not terminate until the tree has been fully explored",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPull",
          "package": "LogicGrowsOnTrees",
          "partial": "Found Mode Using Pull",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FoundModeUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eFoundModeUsingPull\u003c/a\u003e\u003c/code\u003e, but pushes each result to the supervisor as it\n    is found rather than summing them in the worker until they are requested by\n    the supervisor, which guarantees that the system will recognize when the\n    condition has been met as soon as final result needed was found but has the\n    downside that if there are a large number of results needed then sending\n    each one could be much more costly then summing them locally and sending the\n    current total on a regular basis to the supervisor.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPush",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#FoundModeUsingPush",
          "type": "data"
        },
        "index": {
          "description": "Same as FoundModeUsingPull but pushes each result to the supervisor as it is found rather than summing them in the worker until they are requested by the supervisor which guarantees that the system will recognize when the condition has been met as soon as final result needed was found but has the downside that if there are large number of results needed then sending each one could be much more costly then summing them locally and sending the current total on regular basis to the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPush",
          "package": "LogicGrowsOnTrees",
          "partial": "Found Mode Using Push",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:FoundModeUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class indicates that a monad has information about the current\n    exploration mode tag type that can be extracted from it.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "HasExplorationMode",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#HasExplorationMode",
          "type": "class"
        },
        "index": {
          "description": "This class indicates that monad has information about the current exploration mode tag type that can be extracted from it",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "HasExplorationMode",
          "package": "LogicGrowsOnTrees",
          "partial": "Has Exploration Mode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:HasExplorationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of progress, which keeps track of how much of the tree has already\n    been explored.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ProgressFor",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgressFor",
          "type": "function"
        },
        "index": {
          "description": "The type of progress which keeps track of how much of the tree has already been explored",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ProgressFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ProgressFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result type of the tree, i.e. the type of values at the leaves. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ResultFor",
          "package": "LogicGrowsOnTrees",
          "signature": "ResultFor",
          "type": "function"
        },
        "index": {
          "description": "The result type of the tree i.e the type of values at the leaves",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "ResultFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Result For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:ResultFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe progress type returned by a worker that has finished. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "WorkerFinishedProgressFor",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerFinishedProgressFor",
          "type": "function"
        },
        "index": {
          "description": "The progress type returned by worker that has finished",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "WorkerFinishedProgressFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Finished Progress For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:WorkerFinishedProgressFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the intermediate value being maintained internally by the worker. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "WorkerIntermediateValueFor",
          "package": "LogicGrowsOnTrees",
          "signature": "WorkerIntermediateValueFor",
          "type": "function"
        },
        "index": {
          "description": "The type of the intermediate value being maintained internally by the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "WorkerIntermediateValueFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Intermediate Value For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#t:WorkerIntermediateValueFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "AllMode",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode (AllMode result)",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "AllMode",
          "package": "LogicGrowsOnTrees",
          "partial": "All Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:AllMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FirstMode",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode (FirstMode result)",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FirstMode",
          "package": "LogicGrowsOnTrees",
          "partial": "First Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FirstMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool) -\u003e ExplorationMode (FoundModeUsingPull result)",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPull",
          "normalized": "(a-\u003eBool)-\u003eExplorationMode(FoundModeUsingPull a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Found Mode Using Pull",
          "signature": "(result-\u003eBool)-\u003eExplorationMode(FoundModeUsingPull result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FoundModeUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool) -\u003e ExplorationMode (FoundModeUsingPush result)",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#ExplorationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "FoundModeUsingPush",
          "normalized": "(a-\u003eBool)-\u003eExplorationMode(FoundModeUsingPush a)",
          "package": "LogicGrowsOnTrees",
          "partial": "Found Mode Using Push",
          "signature": "(result-\u003eBool)-\u003eExplorationMode(FoundModeUsingPush result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:FoundModeUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e component from a progress value. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "checkpointFromIntermediateProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode -\u003e Checkpoint",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#checkpointFromIntermediateProgress",
          "type": "function"
        },
        "index": {
          "description": "Extracts the Checkpoint component from progress value",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "checkpointFromIntermediateProgress",
          "normalized": "ExplorationMode a-\u003eProgressFor a-\u003eCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "From Intermediate Progress",
          "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode-\u003eCheckpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:checkpointFromIntermediateProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial progress at the start of the exploration. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "initialProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e ProgressFor exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#initialProgress",
          "type": "function"
        },
        "index": {
          "description": "The initial progress at the start of the exploration",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "initialProgress",
          "normalized": "ExplorationMode a-\u003eProgressFor a",
          "package": "LogicGrowsOnTrees",
          "partial": "Progress",
          "signature": "ExplorationMode exploration_mode-\u003eProgressFor exploration_mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:initialProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial intermediate value for the worker. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "initialWorkerIntermediateValue",
          "package": "LogicGrowsOnTrees",
          "signature": "ExplorationMode exploration_mode -\u003e WorkerIntermediateValueFor exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-ExplorationMode.html#initialWorkerIntermediateValue",
          "type": "function"
        },
        "index": {
          "description": "The initial intermediate value for the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel ExplorationMode",
          "module": "LogicGrowsOnTrees.Parallel.ExplorationMode",
          "name": "initialWorkerIntermediateValue",
          "normalized": "ExplorationMode a-\u003eWorkerIntermediateValueFor a",
          "package": "LogicGrowsOnTrees",
          "partial": "Worker Intermediate Value",
          "signature": "ExplorationMode exploration_mode-\u003eWorkerIntermediateValueFor exploration_mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-ExplorationMode.html#v:initialWorkerIntermediateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a framework for creating a program that explores a tree\n    in parallel. There are two families of functions that are available. The\n    first is more general and allows you to construct your tree using arguments\n    given on the command-line; they are described in the section linked to by\n    \u003ca\u003eLogicGrowsOnTrees.Parallel.Main\u003c/a\u003e. If you do not need run-time\n    information via a command-line argument to construct the tree, then you may\n    prefer the simpler family of functions which are described in the section\n    linked to by \u003ca\u003eLogicGrowsOnTrees.Parallel.Main\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAll of this functionality is adapter independent, so if you want to use a\n    different back end you only need to change the driver argument and\n    recompile.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Main",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides framework for creating program that explores tree in parallel There are two families of functions that are available The first is more general and allows you to construct your tree using arguments given on the command-line they are described in the section linked to by LogicGrowsOnTrees.Parallel.Main If you do not need run-time information via command-line argument to construct the tree then you may prefer the simpler family of functions which are described in the section linked to by LogicGrowsOnTrees.Parallel.Main All of this functionality is adapter independent so if you want to use different back end you only need to change the driver argument and recompile",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Main",
          "package": "LogicGrowsOnTrees",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDriver\u003c/a\u003e\u003c/code\u003e is the core type that abstracts the various adapters behind a\n    common interface that can be invoked by the main functions; it specifies a\n    function that is called to start the run with a set of parameters specified\n    in \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Unfortunately in haddock the type signature below can be difficult to read\n    because it puts all of the type on a single line; the type is essentially\n    just a map from \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eresult_monad ()\u003c/code\u003e, but involving a\n    bunch of type variables and some constraints on them. It might be easier to\n    click the link to go to the source.)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003econtroller_monad\u003c/code\u003e type parameter is within an existential\n    type; this is because the user of the driver should not need to know what it\n    is.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Driver",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#Driver",
          "type": "data"
        },
        "index": {
          "description": "The Driver is the core type that abstracts the various adapters behind common interface that can be invoked by the main functions it specifies function that is called to start the run with set of parameters specified in DriverParameters Unfortunately in haddock the type signature below can be difficult to read because it puts all of the type on single line the type is essentially just map from DriverParameters to result monad but involving bunch of type variables and some constraints on them It might be easier to click the link to go to the source Note that the controller monad type parameter is within an existential type this is because the user of the driver should not need to know what it is",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Driver",
          "package": "LogicGrowsOnTrees",
          "partial": "Driver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDriverParameters\u003c/a\u003e\u003c/code\u003e type specifies the information that is given to the\n    driver in the main functions.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "DriverParameters",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "data"
        },
        "index": {
          "description": "The DriverParameters type specifies the information that is given to the driver in the main functions",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "DriverParameters",
          "package": "LogicGrowsOnTrees",
          "partial": "Driver Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:DriverParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcome",
          "type": "data"
        },
        "index": {
          "description": "type that represents the outcome of run",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eRunOutcome\u003c/a\u003e\u003c/code\u003e associated with the given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunOutcomeFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#RunOutcomeFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of RunOutcome associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunOutcomeFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Outcome For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunOutcomeFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Common-Supervisor-Implementation.html#RunStatistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics gathered about the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReason",
          "type": "data"
        },
        "index": {
          "description": "type that represents the reason why run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:TerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient type alias for the type of \u003ccode\u003e\u003ca\u003eTerminationReason\u003c/a\u003e\u003c/code\u003e associated with the given exploration mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "TerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#TerminationReasonFor",
          "type": "type"
        },
        "index": {
          "description": "convenient type alias for the type of TerminationReason associated with the given exploration mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "TerminationReasonFor",
          "package": "LogicGrowsOnTrees",
          "partial": "Termination Reason For",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#t:TerminationReasonFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Driver",
          "package": "LogicGrowsOnTrees",
          "signature": "DriverParameters shared_configuration supervisor_configuration m n exploration_mode controller_monad -\u003e result_monad ())",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#Driver",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "Driver",
          "normalized": "DriverParameters a b c d e f-\u003eg())",
          "package": "LogicGrowsOnTrees",
          "partial": "Driver",
          "signature": "DriverParameters shared_configuration supervisor_configuration m n exploration_mode controller_monad-\u003eresult_monad())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "DriverParameters",
          "package": "LogicGrowsOnTrees",
          "signature": "DriverParameters",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "DriverParameters",
          "package": "LogicGrowsOnTrees",
          "partial": "Driver Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:DriverParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct the controller, which runs in the supervisor and handles things like periodic checkpointing \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructController",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e supervisor_configuration -\u003e controller_monad exploration_mode ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "construct the controller which runs in the supervisor and handles things like periodic checkpointing",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructController",
          "normalized": "a-\u003eb-\u003ec d()",
          "package": "LogicGrowsOnTrees",
          "partial": "Controller",
          "signature": "shared_configuration-\u003esupervisor_configuration-\u003econtroller_monad exploration_mode()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructs the exploration mode given the shared configuration \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructExplorationMode",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e ExplorationMode exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "constructs the exploration mode given the shared configuration",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructExplorationMode",
          "normalized": "a-\u003eExplorationMode b",
          "package": "LogicGrowsOnTrees",
          "partial": "Exploration Mode",
          "signature": "shared_configuration-\u003eExplorationMode exploration_mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructExplorationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructs the tree given the shared configuration \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructTree",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e TreeT m (ResultFor exploration_mode)",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "constructs the tree given the shared configuration",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "constructTree",
          "normalized": "a-\u003eTreeT b(ResultFor c)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "shared_configuration-\u003eTreeT m(ResultFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:constructTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSupervisorOutcome\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eRunOutcome\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "extractRunOutcomeFromSupervisorOutcome",
          "package": "LogicGrowsOnTrees",
          "signature": "SupervisorOutcome fv ip worker_id -\u003e RunOutcome ip fv",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#extractRunOutcomeFromSupervisorOutcome",
          "type": "function"
        },
        "index": {
          "description": "Converts SupervisorOutcome to RunOutcome",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "extractRunOutcomeFromSupervisorOutcome",
          "normalized": "SupervisorOutcome a b c-\u003eRunOutcome b a",
          "package": "LogicGrowsOnTrees",
          "partial": "Run Outcome From Supervisor Outcome",
          "signature": "SupervisorOutcome fv ip worker_id-\u003eRunOutcome ip fv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:extractRunOutcomeFromSupervisorOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just like the previous functions, except that it is generalized over\n    all tree purities and exploration modes.  (In fact, the specialized\n    functions are just wrappers around this function.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "genericMain",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e ExplorationMode exploration_mode)-\u003e Purity m n-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m n exploration_mode-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcomeFor exploration_mode -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "This is just like the previous functions except that it is generalized over all tree purities and exploration modes In fact the specialized functions are just wrappers around this function",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "genericMain",
          "normalized": "(a-\u003eExplorationMode b)-\u003ePurity c d-\u003eDriver e(SharedConfiguration a)SupervisorConfiguration c d b-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcomeFor b-\u003eIO())-\u003e(a-\u003eTreeT c f)-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main",
          "signature": "(tree_configuration-\u003eExplorationMode exploration_mode)-\u003ePurity m n-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m n exploration_mode-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcomeFor exploration_mode-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:genericMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein the supervisor, gets the starting progress for the exploration;  this is where a checkpoint is loaded, if one exists \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "getStartingProgress",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e supervisor_configuration -\u003e IO (ProgressFor exploration_mode)",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "in the supervisor gets the starting progress for the exploration this is where checkpoint is loaded if one exists",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "getStartingProgress",
          "normalized": "a-\u003eb-\u003eIO(ProgressFor c)",
          "package": "LogicGrowsOnTrees",
          "partial": "Starting Progress",
          "signature": "shared_configuration-\u003esupervisor_configuration-\u003eIO(ProgressFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:getStartingProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaction that initializes the global state of each process --- that\n            is, once for each running instance of the executable, which\n            depending on the adapter might be a supervisor, a worker, or both\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "initializeGlobalState",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "action that initializes the global state of each process that is once for each running instance of the executable which depending on the adapter might be supervisor worker or both",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "initializeGlobalState",
          "normalized": "a-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Global State",
          "signature": "shared_configuration-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:initializeGlobalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel; the results in the leaves will be\n    summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTree",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel the results in the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTree",
          "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration Identity IO(AllMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome(Progress c)c-\u003eIO())-\u003e(b-\u003eTree c)-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree",
          "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel; the results in the leaves will be\n    summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIO",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel the results in the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIO",
          "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration IO IO(AllMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome(Progress c)c-\u003eIO())-\u003e(b-\u003eTreeIO c)-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree IO",
          "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFirst",
          "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration IO IO(FirstMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome Checkpoint(Maybe(Progress c))-\u003eIO())-\u003e(b-\u003eTreeIO c)-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree IOUntil First",
          "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFoundUsingPull",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration IO IO(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeIO b)-\u003ec()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree IOUntil Found Using Pull",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration IO IO (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeIO result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeIOUntilFoundUsingPush",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration IO IO(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeIO b)-\u003ec()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree IOUntil Found Using Push",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration IO IO(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeIO result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeIOUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel; the results in all of the leaves\n    will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpure",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (AllMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) result -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel the results in all of the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpure",
          "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration f)SupervisorConfiguration c c(AllMode g)-\u003eTerm f-\u003eTermInfo-\u003e(f-\u003eRunOutcome(Progress g)g-\u003eIO())-\u003e(f-\u003eTreeT c g)-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Impure",
          "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(AllMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)result-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFirst",
          "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration f)SupervisorConfiguration c c(FirstMode g)-\u003eTerm f-\u003eTermInfo-\u003e(f-\u003eRunOutcome Checkpoint(Maybe(Progress g))-\u003eIO())-\u003e(f-\u003eTreeT c g)-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Impure Until First",
          "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFoundUsingPull",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e(c d e f-\u003eIO f)-\u003eDriver g(SharedConfiguration a)SupervisorConfiguration e e(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeT e b)-\u003eg()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Impure Until Found Using Pull",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration m m (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e TreeT m result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeImpureUntilFoundUsingPush",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e(c d e f-\u003eIO f)-\u003eDriver g(SharedConfiguration a)SupervisorConfiguration e e(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTreeT e b)-\u003eg()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Impure Until Found Using Push",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration m m(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTreeT m result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeImpureUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FirstMode result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFirst",
          "normalized": "Driver a(SharedConfiguration b)SupervisorConfiguration Identity IO(FirstMode c)-\u003eTerm b-\u003eTermInfo-\u003e(b-\u003eRunOutcome Checkpoint(Maybe(Progress c))-\u003eIO())-\u003e(b-\u003eTree c)-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Until First",
          "signature": "Driver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FirstMode result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FoundModeUsingPull result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFoundUsingPull",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration Identity IO(FoundModeUsingPull b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTree b)-\u003ec()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Until Found Using Pull",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FoundModeUsingPull result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(tree_configuration -\u003e result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration tree_configuration) SupervisorConfiguration Identity IO (FoundModeUsingPush result)-\u003e Term tree_configuration-\u003e TermInfo-\u003e (tree_configuration -\u003e RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e (tree_configuration -\u003e Tree result)-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainForExploreTreeUntilFoundUsingPush",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eDriver c(SharedConfiguration a)SupervisorConfiguration Identity IO(FoundModeUsingPush b)-\u003eTerm a-\u003eTermInfo-\u003e(a-\u003eRunOutcome(Progress b)(Either b(Progress b))-\u003eIO())-\u003e(a-\u003eTree b)-\u003ec()",
          "package": "LogicGrowsOnTrees",
          "partial": "For Explore Tree Until Found Using Push",
          "signature": "(tree_configuration-\u003eresult-\u003eBool)-\u003eDriver result_monad(SharedConfiguration tree_configuration)SupervisorConfiguration Identity IO(FoundModeUsingPush result)-\u003eTerm tree_configuration-\u003eTermInfo-\u003e(tree_configuration-\u003eRunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003e(tree_configuration-\u003eTree result)-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainForExploreTreeUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe additional entries in the manual explaining log format strings and\n    statistics. If you are not using the \u003ca\u003eMain\u003c/a\u003e term info then you should add\n    \u003ccode\u003e\u003ca\u003emainMan\u003c/a\u003e\u003c/code\u003e to your term information as otherwise the documentation will be\n    incomplete; in particular when using \u003ccode\u003e\u003ca\u003eexecChoice\u003c/a\u003e\u003c/code\u003e you will want to use this\n    for each of the modes that corresponds to the supervisor (as logging and\n    statistics are only on the supervisor).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainMan",
          "package": "LogicGrowsOnTrees",
          "signature": "[ManBlock]",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#mainMan",
          "type": "function"
        },
        "index": {
          "description": "The additional entries in the manual explaining log format strings and statistics If you are not using the Main term info then you should add mainMan to your term information as otherwise the documentation will be incomplete in particular when using execChoice you will want to use this for each of the modes that corresponds to the supervisor as logging and statistics are only on the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainMan",
          "normalized": "[ManBlock]",
          "package": "LogicGrowsOnTrees",
          "partial": "Man",
          "signature": "[ManBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainMan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the command line options using the given term and term info (the\n    latter of which has the program name added to it);  if successful return the\n    result, otherwise throw an exception.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainParser",
          "package": "LogicGrowsOnTrees",
          "signature": "Term α -\u003e TermInfo -\u003e IO α",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#mainParser",
          "type": "function"
        },
        "index": {
          "description": "Parse the command line options using the given term and term info the latter of which has the program name added to it if successful return the result otherwise throw an exception",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "mainParser",
          "normalized": "Term a-\u003eTermInfo-\u003eIO a",
          "package": "LogicGrowsOnTrees",
          "partial": "Parser",
          "signature": "Term α-\u003eTermInfo-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:mainParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein the supervisor, responds to the termination of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "notifyTerminated",
          "package": "LogicGrowsOnTrees",
          "signature": "shared_configuration -\u003e supervisor_configuration -\u003e RunOutcomeFor exploration_mode -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "in the supervisor responds to the termination of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "notifyTerminated",
          "normalized": "a-\u003eb-\u003eRunOutcomeFor c-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "partial": "Terminated",
          "signature": "shared_configuration-\u003esupervisor_configuration-\u003eRunOutcomeFor exploration_mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:notifyTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprogram information;  should at a minimum put a brief description of the program in the \u003ccode\u003e\u003ca\u003etermDoc\u003c/a\u003e\u003c/code\u003e field \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "program_info",
          "package": "LogicGrowsOnTrees",
          "signature": "TermInfo",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "program information should at minimum put brief description of the program in the termDoc field",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "program_info",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:program_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe purity of the constructed tree \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "purity",
          "package": "LogicGrowsOnTrees",
          "signature": "Purity m n",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "the purity of the constructed tree",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "purity",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:purity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration information shared between the supervisor and the worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "shared_configuration_term",
          "package": "LogicGrowsOnTrees",
          "signature": "Term shared_configuration",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "configuration information shared between the supervisor and the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "shared_configuration_term",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:shared_configuration_term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel; the results\n    in the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTree",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel the results in the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTree",
          "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration Identity IO(AllMode b)-\u003e(RunOutcome(Progress b)b-\u003eIO())-\u003eTree b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree",
          "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTree result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel;\n    the results in the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIO",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel the results in the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIO",
          "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration IO IO(AllMode b)-\u003e(RunOutcome(Progress b)b-\u003eIO())-\u003eTreeIO b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree IO",
          "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given tree in parallel in IO, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given tree in parallel in IO stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFirst",
          "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration IO IO(FirstMode b)-\u003e(RunOutcome Checkpoint(Maybe(Progress b))-\u003eIO())-\u003eTreeIO b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree IOUntil First",
          "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeIO a-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree IOUntil Found Using Pull",
          "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given IO tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration IO IO (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeIO result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given IO tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeIOUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeIO a-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree IOUntil Found Using Push",
          "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration IO IO(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeIO result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeIOUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel; the\n    results in all of the leaves will be summed up using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpure",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (AllMode result)-\u003e (RunOutcome (Progress result) result -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel the results in all of the leaves will be summed up using the Monoid instance",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpure",
          "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration())SupervisorConfiguration c c(AllMode f)-\u003e(RunOutcome(Progress f)f-\u003eIO())-\u003eTreeT c f-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Impure",
          "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(AllMode result)-\u003e(RunOutcome(Progress result)result-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFirst",
          "normalized": "(a b c d-\u003eIO d)-\u003eDriver e(SharedConfiguration())SupervisorConfiguration c c(FirstMode f)-\u003e(RunOutcome Checkpoint(Maybe(Progress f))-\u003eIO())-\u003eTreeT c f-\u003ee()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Impure Until First",
          "signature": "(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eDriver f(SharedConfiguration())SupervisorConfiguration d d(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeT d a-\u003ef()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Impure Until Found Using Pull",
          "signature": "(result-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given impure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e (forall β.  m β -\u003e IO β)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration m m (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e TreeT m result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given impure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeImpureUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003e(b c d e-\u003eIO e)-\u003eDriver f(SharedConfiguration())SupervisorConfiguration d d(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTreeT d a-\u003ef()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Impure Until Found Using Push",
          "signature": "(result-\u003eBool)-\u003e(forall β. m β-\u003eIO β)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration m m(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTreeT m result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeImpureUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel, stopping if a solution is found. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FirstMode result)-\u003e (RunOutcome Checkpoint (Maybe (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel stopping if solution is found",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFirst",
          "normalized": "Driver a(SharedConfiguration())SupervisorConfiguration Identity IO(FirstMode b)-\u003e(RunOutcome Checkpoint(Maybe(Progress b))-\u003eIO())-\u003eTree b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Until First",
          "signature": "Driver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FirstMode result)-\u003e(RunOutcome Checkpoint(Maybe(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFoundUsingPull",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FoundModeUsingPull result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFoundUsingPull",
          "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPull a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTree a-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Until Found Using Pull",
          "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPull result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFoundUsingPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore the given pure tree in parallel until the sum of results meets the\n    given condition.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFoundUsingPush",
          "package": "LogicGrowsOnTrees",
          "signature": "(result -\u003e Bool)-\u003e Driver result_monad (SharedConfiguration ()) SupervisorConfiguration Identity IO (FoundModeUsingPush result)-\u003e (RunOutcome (Progress result) (Either result (Progress result)) -\u003e IO ())-\u003e Tree result-\u003e result_monad ()",
          "type": "function"
        },
        "index": {
          "description": "Explore the given pure tree in parallel until the sum of results meets the given condition",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "simpleMainForExploreTreeUntilFoundUsingPush",
          "normalized": "(a-\u003eBool)-\u003eDriver b(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPush a)-\u003e(RunOutcome(Progress a)(Either a(Progress a))-\u003eIO())-\u003eTree a-\u003eb()",
          "package": "LogicGrowsOnTrees",
          "partial": "Main For Explore Tree Until Found Using Push",
          "signature": "(result-\u003eBool)-\u003eDriver result_monad(SharedConfiguration())SupervisorConfiguration Identity IO(FoundModeUsingPush result)-\u003e(RunOutcome(Progress result)(Either result(Progress result))-\u003eIO())-\u003eTree result-\u003eresult_monad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:simpleMainForExploreTreeUntilFoundUsingPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration information specific to the supervisor \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "supervisor_configuration_term",
          "package": "LogicGrowsOnTrees",
          "signature": "Term supervisor_configuration",
          "source": "src/LogicGrowsOnTrees-Parallel-Main.html#DriverParameters",
          "type": "function"
        },
        "index": {
          "description": "configuration information specific to the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Main",
          "module": "LogicGrowsOnTrees.Parallel.Main",
          "name": "supervisor_configuration_term",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Main.html#v:supervisor_configuration_term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains types that represent the purity of a tree, which is\n    either pure, impure, or IO (a special case of impure).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Purity",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Purity.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains types that represent the purity of tree which is either pure impure or IO special case of impure",
          "hierarchy": "LogicGrowsOnTrees Parallel Purity",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Purity",
          "package": "LogicGrowsOnTrees",
          "partial": "Purity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe purity of a tree, which can be either \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e (for pure trees) or\n    \u003ccode\u003e\u003ca\u003eImpureAtopIO\u003c/a\u003e\u003c/code\u003e (for impure trees); the latter case is restricted to monads\n    that are instances of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e and for which there exists a way to convert\n    the monad into an IO action.\n\u003c/p\u003e\u003cp\u003eThe two kind arguments, \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e, correspond to respectively the monad in\n    on top of which the \u003ccode\u003eTreeT\u003c/code\u003e monad transformer is stacked and the monad in\n    which the worker will be run.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Purity",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
          "type": "data"
        },
        "index": {
          "description": "The purity of tree which can be either Pure for pure trees or ImpureAtopIO for impure trees the latter case is restricted to monads that are instances of MonadIO and for which there exists way to convert the monad into an IO action The two kind arguments and correspond to respectively the monad in on top of which the TreeT monad transformer is stacked and the monad in which the worker will be run",
          "hierarchy": "LogicGrowsOnTrees Parallel Purity",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Purity",
          "package": "LogicGrowsOnTrees",
          "partial": "Purity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#t:Purity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "ImpureAtopIO",
          "package": "LogicGrowsOnTrees",
          "signature": "(forall β.  m β -\u003e IO β) -\u003e Purity m m",
          "source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Purity",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "ImpureAtopIO",
          "normalized": "(a b c d-\u003eIO d)-\u003ePurity c c",
          "package": "LogicGrowsOnTrees",
          "partial": "Impure Atop IO",
          "signature": "(forall β. m β-\u003eIO β)-\u003ePurity m m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:ImpureAtopIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Pure",
          "package": "LogicGrowsOnTrees",
          "signature": "Purity Identity IO",
          "source": "src/LogicGrowsOnTrees-Parallel-Purity.html#Purity",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Purity",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "Pure",
          "package": "LogicGrowsOnTrees",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe purity of trees in the IO monad. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "io_purity",
          "package": "LogicGrowsOnTrees",
          "signature": "Purity IO IO",
          "source": "src/LogicGrowsOnTrees-Parallel-Purity.html#io_purity",
          "type": "function"
        },
        "index": {
          "description": "The purity of trees in the IO monad",
          "hierarchy": "LogicGrowsOnTrees Parallel Purity",
          "module": "LogicGrowsOnTrees.Parallel.Purity",
          "name": "io_purity",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Parallel-Purity.html#v:io_purity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules contains functionality relating to paths through trees. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Path",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Path.html",
          "type": "module"
        },
        "index": {
          "description": "This modules contains functionality relating to paths through trees",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Path",
          "package": "LogicGrowsOnTrees",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA choice at a branch point to take either the left branch or the right branch. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "BranchChoice",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
          "type": "data"
        },
        "index": {
          "description": "choice at branch point to take either the left branch or the right branch",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "BranchChoice",
          "package": "LogicGrowsOnTrees",
          "partial": "Branch Choice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:BranchChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of \u003ccode\u003e\u003ca\u003eStep\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Path",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Path.html#Path",
          "type": "type"
        },
        "index": {
          "description": "sequence of Step",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Path",
          "package": "LogicGrowsOnTrees",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step in a path through a tree, which can either pass through a point with\n    a cached result or take a choice to go left or right at a branch point.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Step",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Path.html#Step",
          "type": "data"
        },
        "index": {
          "description": "step in path through tree which can either pass through point with cached result or take choice to go left or right at branch point",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "Step",
          "package": "LogicGrowsOnTrees",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown whenever a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is sent down a path which\n    is incompatible with it.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "WalkError",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Path.html#WalkError",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown whenever Tree is sent down path which is incompatible with it",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "WalkError",
          "package": "LogicGrowsOnTrees",
          "partial": "Walk Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#t:WalkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep through a cache point \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "CacheStep",
          "package": "LogicGrowsOnTrees",
          "signature": "CacheStep ByteString",
          "source": "src/LogicGrowsOnTrees-Path.html#Step",
          "type": "function"
        },
        "index": {
          "description": "Step through cache point",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "CacheStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Cache Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:CacheStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep through a choice point \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "ChoiceStep",
          "package": "LogicGrowsOnTrees",
          "signature": "ChoiceStep BranchChoice",
          "source": "src/LogicGrowsOnTrees-Path.html#Step",
          "type": "function"
        },
        "index": {
          "description": "Step through choice point",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "ChoiceStep",
          "package": "LogicGrowsOnTrees",
          "partial": "Choice Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:ChoiceStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Path",
          "name": "LeftBranch",
          "package": "LogicGrowsOnTrees",
          "signature": "LeftBranch",
          "source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "LeftBranch",
          "package": "LogicGrowsOnTrees",
          "partial": "Left Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:LeftBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that a choice step in a path coincided with a cache point in\n        a tree, or vice versa.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "PastTreeIsInconsistentWithPresentTree",
          "package": "LogicGrowsOnTrees",
          "signature": "PastTreeIsInconsistentWithPresentTree",
          "source": "src/LogicGrowsOnTrees-Path.html#WalkError",
          "type": "function"
        },
        "index": {
          "description": "Indicates that choice step in path coincided with cache point in tree or vice versa",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "PastTreeIsInconsistentWithPresentTree",
          "package": "LogicGrowsOnTrees",
          "partial": "Past Tree Is Inconsistent With Present Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:PastTreeIsInconsistentWithPresentTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Path",
          "name": "RightBranch",
          "package": "LogicGrowsOnTrees",
          "signature": "RightBranch",
          "source": "src/LogicGrowsOnTrees-Path.html#BranchChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "RightBranch",
          "package": "LogicGrowsOnTrees",
          "partial": "Right Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:RightBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that a path is too long for a given tree --- that is, the walk\n        hit a leaf (or a null) before the end of the path was reached.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "TreeEndedBeforeEndOfWalk",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeEndedBeforeEndOfWalk",
          "source": "src/LogicGrowsOnTrees-Path.html#WalkError",
          "type": "function"
        },
        "index": {
          "description": "Indicates that path is too long for given tree that is the walk hit leaf or null before the end of the path was reached",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "TreeEndedBeforeEndOfWalk",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Ended Before End Of Walk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:TreeEndedBeforeEndOfWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the opposite of the given branch choice. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "oppositeBranchChoiceOf",
          "package": "LogicGrowsOnTrees",
          "signature": "BranchChoice -\u003e BranchChoice",
          "source": "src/LogicGrowsOnTrees-Path.html#oppositeBranchChoiceOf",
          "type": "function"
        },
        "index": {
          "description": "Returns the opposite of the given branch choice",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "oppositeBranchChoiceOf",
          "normalized": "BranchChoice-\u003eBranchChoice",
          "package": "LogicGrowsOnTrees",
          "partial": "Branch Choice Of",
          "signature": "BranchChoice-\u003eBranchChoice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:oppositeBranchChoiceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFollows a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to a particular subtree;  the\n    main use case of this function is for a processor which has been given a\n    particular subtree as its workload to zoom in on that subtree. The way this\n    function works is as follows: as long as the remaining path is non-empty, it\n    explores the \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e until it encounters either a cache point or a choice\n    point; in the former case the path supplies the cached value in the\n    \u003ccode\u003e\u003ca\u003eCacheStep\u003c/a\u003e\u003c/code\u003e constructor, and in the latter case the path supplies the branch\n    to take in the \u003ccode\u003e\u003ca\u003eChoiceStep\u003c/a\u003e\u003c/code\u003e constructor; when the remaining path is empty\n    then the resulting \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eWARNING: This function is \u003cem\u003enot\u003c/em\u003e valid for all inputs; it makes the\n    assumption that the given \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e has been derived from the given \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e so\n    that the path will always encountered choice points exactly when the tree\n    does and likewise for cache points. Furthermore, the path must not run out\n    before the tree hits a leaf. If any of these conditions is violated, a\n    \u003ccode\u003e\u003ca\u003eWalkError\u003c/a\u003e\u003c/code\u003e exception will be thrown; in fact, you should hope than\n    exception is thrown because it will let you know that there is a bug your\n    code as the alternative is that you accidently give it a path that is not\n    derived from the given tree but which coincidentally matches it which means\n    that it will silently return a nonsensical result. Having said all that, you\n    should almost never need to worry about this possibility in practice because\n    there will normally be only one tree in use at a time and all paths in use\n    will have come from that tree.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "sendTreeDownPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path -\u003e Tree α -\u003e Tree α",
          "source": "src/LogicGrowsOnTrees-Path.html#sendTreeDownPath",
          "type": "function"
        },
        "index": {
          "description": "Follows Path through Tree to particular subtree the main use case of this function is for processor which has been given particular subtree as its workload to zoom in on that subtree The way this function works is as follows as long as the remaining path is non-empty it explores the Tree until it encounters either cache point or choice point in the former case the path supplies the cached value in the CacheStep constructor and in the latter case the path supplies the branch to take in the ChoiceStep constructor when the remaining path is empty then the resulting Tree is returned WARNING This function is not valid for all inputs it makes the assumption that the given Path has been derived from the given Tree so that the path will always encountered choice points exactly when the tree does and likewise for cache points Furthermore the path must not run out before the tree hits leaf If any of these conditions is violated WalkError exception will be thrown in fact you should hope than exception is thrown because it will let you know that there is bug your code as the alternative is that you accidently give it path that is not derived from the given tree but which coincidentally matches it which means that it will silently return nonsensical result Having said all that you should almost never need to worry about this possibility in practice because there will normally be only one tree in use at time and all paths in use will have come from that tree",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "sendTreeDownPath",
          "normalized": "Path-\u003eTree a-\u003eTree a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Down Path",
          "signature": "Path-\u003eTree α-\u003eTree α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:sendTreeDownPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esendTreeDownPath\u003c/a\u003e\u003c/code\u003e, but for impure trees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Path",
          "name": "sendTreeTDownPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path -\u003e TreeT m α -\u003e m (TreeT m α)",
          "source": "src/LogicGrowsOnTrees-Path.html#sendTreeTDownPath",
          "type": "function"
        },
        "index": {
          "description": "Like sendTreeDownPath but for impure trees",
          "hierarchy": "LogicGrowsOnTrees Path",
          "module": "LogicGrowsOnTrees.Path",
          "name": "sendTreeTDownPath",
          "normalized": "Path-\u003eTreeT a b-\u003ea(TreeT a b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TDown Path",
          "signature": "Path-\u003eTreeT m α-\u003em(TreeT m α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Path.html#v:sendTreeTDownPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a couple of utility functions for sending and receiving\n    \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able data over a handle. Because the size of the serialized\n    value can depend on the value being sent, these functions employ a protocol\n    in which first the size of the serialized data is sent as a 64-bit\n    big-endian word, and then the serialized data itself is sent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "Handle",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains couple of utility functions for sending and receiving Serialize able data over handle Because the size of the serialized value can depend on the value being sent these functions employ protocol in which first the size of the serialized data is sent as bit big-endian word and then the serialized data itself is sent",
          "hierarchy": "LogicGrowsOnTrees Utils Handle",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "Handle",
          "package": "LogicGrowsOnTrees",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown when the connection has been lost. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#ConnectionLost",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown when the connection has been lost",
          "hierarchy": "LogicGrowsOnTrees Utils Handle",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "ConnectionLost",
          "package": "LogicGrowsOnTrees",
          "partial": "Connection Lost",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#t:ConnectionLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces EOF \u003ccode\u003eIOException\u003c/code\u003es with the \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e exception. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "filterEOFExceptions",
          "package": "LogicGrowsOnTrees",
          "signature": "IO a -\u003e IO a",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#filterEOFExceptions",
          "type": "function"
        },
        "index": {
          "description": "Replaces EOF IOException with the ConnectionLost exception",
          "hierarchy": "LogicGrowsOnTrees Utils Handle",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "filterEOFExceptions",
          "normalized": "IO a-\u003eIO a",
          "package": "LogicGrowsOnTrees",
          "partial": "EOFExceptions",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:filterEOFExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able value from a handle.\n\u003c/p\u003e\u003cp\u003eSpecifically, this function reads in a 64-bit big-endian word with the\n    size of the raw data to be read, reads that much data in bytes into a\n    \u003ccode\u003eByteString\u003c/code\u003e, and then deserializes the \u003ccode\u003eByteString\u003c/code\u003e to produce the\n    resulting value.\n\u003c/p\u003e\u003cp\u003eIf the connection has been lost, it throws \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "receive",
          "package": "LogicGrowsOnTrees",
          "signature": "Handle -\u003e IO α",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receives Serialize able value from handle Specifically this function reads in bit big-endian word with the size of the raw data to be read reads that much data in bytes into ByteString and then deserializes the ByteString to produce the resulting value If the connection has been lost it throws ConnectionLost",
          "hierarchy": "LogicGrowsOnTrees Utils Handle",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "receive",
          "normalized": "Handle-\u003eIO a",
          "package": "LogicGrowsOnTrees",
          "signature": "Handle-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e-able value to a handle.\n\u003c/p\u003e\u003cp\u003eSpecifically, this function serializes the given value to a \u003ccode\u003eByteString\u003c/code\u003e,\n    and then writes the size of the serialized data in bytes as a 64-bit\n    big-endian word followed by the raw data itself.\n\u003c/p\u003e\u003cp\u003eIf the connection has been lost, it throws \u003ccode\u003e\u003ca\u003eConnectionLost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "send",
          "package": "LogicGrowsOnTrees",
          "signature": "Handle -\u003e α -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Utils-Handle.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends Serialize able value to handle Specifically this function serializes the given value to ByteString and then writes the size of the serialized data in bytes as bit big-endian word followed by the raw data itself If the connection has been lost it throws ConnectionLost",
          "hierarchy": "LogicGrowsOnTrees Utils Handle",
          "module": "LogicGrowsOnTrees.Utils.Handle",
          "name": "send",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "LogicGrowsOnTrees",
          "signature": "Handle-\u003eα-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Handle.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type that specializes the \u003ccode\u003eSum\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-IntSum.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains type that specializes the Sum Monoid to Int",
          "hierarchy": "LogicGrowsOnTrees Utils IntSum",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Int Sum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unpacked \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e whose \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance is addition. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
          "type": "data"
        },
        "index": {
          "description": "An unpacked Int whose Monoid instance is addition",
          "hierarchy": "LogicGrowsOnTrees Utils IntSum",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Int Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#t:IntSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "signature": "IntSum",
          "source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils IntSum",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "IntSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Int Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#v:IntSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "getIntSum",
          "package": "LogicGrowsOnTrees",
          "signature": "Int",
          "source": "src/LogicGrowsOnTrees-Utils-IntSum.html#IntSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils IntSum",
          "module": "LogicGrowsOnTrees.Utils.IntSum",
          "name": "getIntSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Int Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-IntSum.html#v:getIntSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules contains utility functions for constructing perfect trees for\n    use in some of the tests and examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "PerfectTree",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html",
          "type": "module"
        },
        "index": {
          "description": "This modules contains utility functions for constructing perfect trees for use in some of the tests and examples",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "PerfectTree",
          "package": "LogicGrowsOnTrees",
          "partial": "Perfect Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper for arities that has an \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance that enforces that\n    the arity be at least 2.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "Arity",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper for arities that has an ArgVal instance that enforces that the arity be at least",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "Arity",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#t:Arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype representing the arity and depth of a tree, used for command line\n    argument processing (see \u003ccode\u003e\u003ca\u003emakeArityAndDepthTermAtPositions\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "ArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
          "type": "data"
        },
        "index": {
          "description": "Datatype representing the arity and depth of tree used for command line argument processing see makeArityAndDepthTermAtPositions",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "ArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity And Depth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#t:ArityAndDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "Arity",
          "package": "LogicGrowsOnTrees",
          "signature": "Arity",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "Arity",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:Arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "ArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "signature": "ArityAndDepth",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "ArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity And Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:ArityAndDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "arity",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "arity",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "depth",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#ArityAndDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "depth",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function used when you have an value of type \u003ccode\u003e\u003ca\u003eArity\u003c/a\u003e\u003c/code\u003e for the\n    arity of the tree rather than a value of type \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e and want to construct\n    a value of type \u003ccode\u003e\u003ca\u003eArityAndDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "formArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "signature": "Arity -\u003e Word -\u003e ArityAndDepth",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#formArityAndDepth",
          "type": "function"
        },
        "index": {
          "description": "convenience function used when you have an value of type Arity for the arity of the tree rather than value of type Word and want to construct value of type ArityAndDepth",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "formArityAndDepth",
          "normalized": "Arity-\u003eWord-\u003eArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity And Depth",
          "signature": "Arity-\u003eWord-\u003eArityAndDepth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:formArityAndDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "getArity",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Utils-PerfectTree.html#Arity",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "getArity",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:getArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a configuration term that expects the arity and depth to be at\n    the given command line argument positions.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "makeArityAndDepthTermAtPositions",
          "package": "LogicGrowsOnTrees",
          "signature": "Int-\u003e Int-\u003e Term ArityAndDepth",
          "type": "function"
        },
        "index": {
          "description": "Constructs configuration term that expects the arity and depth to be at the given command line argument positions",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "makeArityAndDepthTermAtPositions",
          "normalized": "Int-\u003eInt-\u003eTerm ArityAndDepth",
          "package": "LogicGrowsOnTrees",
          "partial": "Arity And Depth Term At Positions",
          "signature": "Int-\u003eInt-\u003eTerm ArityAndDepth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:makeArityAndDepthTermAtPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the number of leaves in a perfect tree.  It returns a value of type\n    \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e so that it can be easily compared to the \u003ccode\u003e\u003ca\u003eWordSum\u003c/a\u003e\u003c/code\u003e value returned by\n    the tree generators, but a consequence of this is that it will overflow if\n    the arity and/or depth arguments are too large.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "numberOfLeaves",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e Word-\u003e Word",
          "type": "function"
        },
        "index": {
          "description": "Computes the number of leaves in perfect tree It returns value of type Word so that it can be easily compared to the WordSum value returned by the tree generators but consequence of this is that it will overflow if the arity and or depth arguments are too large",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "numberOfLeaves",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "LogicGrowsOnTrees",
          "partial": "Of Leaves",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:numberOfLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a perfectly balanced tree with the given leaf value, arity, and leaf. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "perfectTree",
          "package": "LogicGrowsOnTrees",
          "signature": "α-\u003e Word-\u003e Word-\u003e m α",
          "type": "function"
        },
        "index": {
          "description": "Generate perfectly balanced tree with the given leaf value arity and leaf",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "perfectTree",
          "normalized": "a-\u003eWord-\u003eWord-\u003eb a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "α-\u003eWord-\u003eWord-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:perfectTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eperfectTree\u003c/a\u003e\u003c/code\u003e but with \u003ccode\u003eWordSum 1\u003c/code\u003e at the leaves. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "trivialPerfectTree",
          "package": "LogicGrowsOnTrees",
          "signature": "Word-\u003e Word-\u003e m WordSum",
          "type": "function"
        },
        "index": {
          "description": "Like perfectTree but with WordSum at the leaves",
          "hierarchy": "LogicGrowsOnTrees Utils PerfectTree",
          "module": "LogicGrowsOnTrees.Utils.PerfectTree",
          "name": "trivialPerfectTree",
          "normalized": "Word-\u003eWord-\u003ea WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Perfect Tree",
          "signature": "Word-\u003eWord-\u003em WordSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-PerfectTree.html#v:trivialPerfectTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type that specializes the \u003ccode\u003eSum\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-WordSum.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains type that specializes the Sum Monoid to Word",
          "hierarchy": "LogicGrowsOnTrees Utils WordSum",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Word Sum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unpacked \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e whose \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance is addition. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
          "type": "data"
        },
        "index": {
          "description": "An unpacked Word whose Monoid instance is addition",
          "hierarchy": "LogicGrowsOnTrees Utils WordSum",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Word Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#t:WordSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "signature": "WordSum",
          "source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils WordSum",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "WordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Word Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#v:WordSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "getWordSum",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Utils-WordSum.html#WordSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils WordSum",
          "module": "LogicGrowsOnTrees.Utils.WordSum",
          "name": "getWordSum",
          "package": "LogicGrowsOnTrees",
          "partial": "Word Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-WordSum.html#v:getWordSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a temporary \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e (via a newtype\n    wrapper \u003ccode\u003e\u003ca\u003eWord_\u003c/a\u003e\u003c/code\u003e) until \u003ccode\u003ecmdtheline\u003c/code\u003e releases a new version that includes an\n    \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-Word_.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides temporary ArgVal instance for Word via newtype wrapper Word until cmdtheline releases new version that includes an ArgVal instance for Word itself",
          "hierarchy": "LogicGrowsOnTrees Utils Word_",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper used to indirectly provide an \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance for Word. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper used to indirectly provide an ArgVal instance for Word",
          "hierarchy": "LogicGrowsOnTrees Utils Word_",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "partial": "Word",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#t:Word_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "signature": "Word_",
          "source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils Word_",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "Word_",
          "package": "LogicGrowsOnTrees",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#v:Word_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "getWord",
          "package": "LogicGrowsOnTrees",
          "signature": "Word",
          "source": "src/LogicGrowsOnTrees-Utils-Word_.html#Word_",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Utils Word_",
          "module": "LogicGrowsOnTrees.Utils.Word_",
          "name": "getWord",
          "package": "LogicGrowsOnTrees",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Utils-Word_.html#v:getWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains infrastructure for working with \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003es, which\n    describe a portion of work to be performed by a worker.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Workload.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains infrastructure for working with Workload which describe portion of work to be performed by worker",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e describes a portion of work to be performed by a worker;  it\n    consists of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to the subtree where the workload is located paired\n    with a \u003ccode\u003e\u003ca\u003eCheckpoint\u003c/a\u003e\u003c/code\u003e that indicates which parts of that subtree have already\n    been explored.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees-Workload.html#Workload",
          "type": "data"
        },
        "index": {
          "description": "Workload describes portion of work to be performed by worker it consists of Path to the subtree where the workload is located paired with Checkpoint that indicates which parts of that subtree have already been explored",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#t:Workload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload",
          "source": "src/LogicGrowsOnTrees-Workload.html#Workload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "Workload",
          "package": "LogicGrowsOnTrees",
          "partial": "Workload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:Workload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e that consists of the entire tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "entire_workload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload",
          "source": "src/LogicGrowsOnTrees-Workload.html#entire_workload",
          "type": "function"
        },
        "index": {
          "description": "Workload that consists of the entire tree",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "entire_workload",
          "package": "LogicGrowsOnTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:entire_workload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirstWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTUntilFirstWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e TreeT m α -\u003e m (Maybe α)",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTUntilFirstWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFirstWithinWorkload but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTUntilFirstWithinWorkload",
          "normalized": "Workload-\u003eTreeT a b-\u003ea(Maybe b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First Within Workload",
          "signature": "Workload-\u003eTreeT m α-\u003em(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTUntilFirstWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFoundWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTUntilFoundWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool) -\u003e Workload -\u003e TreeT m α -\u003e m (α, Bool)",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTUntilFoundWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFoundWithinWorkload but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTUntilFoundWithinWorkload",
          "normalized": "(a-\u003eBool)-\u003eWorkload-\u003eTreeT b a-\u003eb(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found Within Workload",
          "signature": "(α-\u003eBool)-\u003eWorkload-\u003eTreeT m α-\u003em(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTUntilFoundWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeWithinWorkload\u003c/a\u003e\u003c/code\u003e but for an impure tree. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e TreeT m α -\u003e m α",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeTWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeWithinWorkload but for an impure tree",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeTWithinWorkload",
          "normalized": "Workload-\u003eTreeT a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TWithin Workload",
          "signature": "Workload-\u003eTreeT m α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeTWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e until\n    a result (i.e. a leaf) has been found; if a result has been found then it is\n    returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeUntilFirstWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e Tree α -\u003e Maybe α",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeUntilFirstWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Explores the nodes in pure tree given by Workload until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeUntilFirstWithinWorkload",
          "normalized": "Workload-\u003eTree a-\u003eMaybe a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First Within Workload",
          "signature": "Workload-\u003eTree α-\u003eMaybe α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeUntilFirstWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e, summing\n    all results encountered (i.e., in the leaves) until the current partial sum\n    satisfies the condition provided by the first parameter.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeUntilFoundWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool) -\u003e Workload -\u003e Tree α -\u003e (α, Bool)",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeUntilFoundWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Explores the nodes in pure tree given by Workload summing all results encountered i.e in the leaves until the current partial sum satisfies the condition provided by the first parameter See exploreTreeUntilFound for more details",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeUntilFoundWithinWorkload",
          "normalized": "(a-\u003eBool)-\u003eWorkload-\u003eTree a-\u003e(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found Within Workload",
          "signature": "(α-\u003eBool)-\u003eWorkload-\u003eTree α-\u003e(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeUntilFoundWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the nodes in a pure tree given by a \u003ccode\u003e\u003ca\u003eWorkload\u003c/a\u003e\u003c/code\u003e, and sums\n    over all the results in the leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeWithinWorkload",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e Tree α -\u003e α",
          "source": "src/LogicGrowsOnTrees-Workload.html#exploreTreeWithinWorkload",
          "type": "function"
        },
        "index": {
          "description": "Explores the nodes in pure tree given by Workload and sums over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "exploreTreeWithinWorkload",
          "normalized": "Workload-\u003eTree a-\u003ea",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Within Workload",
          "signature": "Workload-\u003eTree α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:exploreTreeWithinWorkload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadCheckpoint",
          "package": "LogicGrowsOnTrees",
          "signature": "Checkpoint",
          "source": "src/LogicGrowsOnTrees-Workload.html#Workload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadCheckpoint",
          "package": "LogicGrowsOnTrees",
          "partial": "Checkpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe depth of the workload, equal to the length of the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e component. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadDepth",
          "package": "LogicGrowsOnTrees",
          "signature": "Workload -\u003e Int",
          "source": "src/LogicGrowsOnTrees-Workload.html#workloadDepth",
          "type": "function"
        },
        "index": {
          "description": "The depth of the workload equal to the length of the Path component",
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadDepth",
          "normalized": "Workload-\u003eInt",
          "package": "LogicGrowsOnTrees",
          "partial": "Depth",
          "signature": "Workload-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadPath",
          "package": "LogicGrowsOnTrees",
          "signature": "Path",
          "source": "src/LogicGrowsOnTrees-Workload.html#Workload",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Workload",
          "module": "LogicGrowsOnTrees.Workload",
          "name": "workloadPath",
          "package": "LogicGrowsOnTrees",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees-Workload.html#v:workloadPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic functionality for building and exploring trees. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "LogicGrowsOnTrees",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html",
          "type": "module"
        },
        "index": {
          "description": "Basic functionality for building and exploring trees",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "LogicGrowsOnTrees",
          "package": "LogicGrowsOnTrees",
          "partial": "Logic Grows On Trees",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadExplorable\u003c/a\u003e\u003c/code\u003e class provides caching functionality when exploring a\n    tree, as well as a way to give a worker a chance to process any pending\n    requests; at minimum \u003ccode\u003e\u003ca\u003ecacheMaybe\u003c/a\u003e\u003c/code\u003e needs to be defined.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "MonadExplorable",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#MonadExplorable",
          "type": "class"
        },
        "index": {
          "description": "The MonadExplorable class provides caching functionality when exploring tree as well as way to give worker chance to process any pending requests at minimum cacheMaybe needs to be defined",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "MonadExplorable",
          "package": "LogicGrowsOnTrees",
          "partial": "Monad Explorable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:MonadExplorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is like \u003ccode\u003e\u003ca\u003eMonadExplorable\u003c/a\u003e\u003c/code\u003e, but it is designed to work with monad\n    stacks;  at minimum \u003ccode\u003e\u003ca\u003erunAndCacheMaybe\u003c/a\u003e\u003c/code\u003e needs to be defined.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "MonadExplorableTrans",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#MonadExplorableTrans",
          "type": "class"
        },
        "index": {
          "description": "This class is like MonadExplorable but it is designed to work with monad stacks at minimum runAndCacheMaybe needs to be defined",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "MonadExplorableTrans",
          "package": "LogicGrowsOnTrees",
          "partial": "Monad Explorable Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:MonadExplorableTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure tree, which is what you should normally be using. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "Tree",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#Tree",
          "type": "type"
        },
        "index": {
          "description": "pure tree which is what you should normally be using",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "Tree",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tree running in the I/O monad, which you should only be using for doing\n    things like reading data from an external file or database that will be\n    constant for the entire run.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "TreeIO",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#TreeIO",
          "type": "type"
        },
        "index": {
          "description": "tree running in the monad which you should only be using for doing things like reading data from an external file or database that will be constant for the entire run",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "TreeIO",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just a convenient alias for working with pure trees. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "TreeInstruction",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#TreeInstruction",
          "type": "type"
        },
        "index": {
          "description": "This is just convenient alias for working with pure trees",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "TreeInstruction",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Instruction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tree run in an arbitrary monad. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "TreeT",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#TreeT",
          "type": "newtype"
        },
        "index": {
          "description": "tree run in an arbitrary monad",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "TreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core of the implementation of \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e is mostly contained in this\n    type, which provides a list of primitive instructions for trees:\n    \u003ccode\u003e\u003ca\u003eCache\u003c/a\u003e\u003c/code\u003e, which caches a value, \u003ccode\u003e\u003ca\u003eChoice\u003c/a\u003e\u003c/code\u003e, which signals a branch with two\n    choices, \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e, which indicates that there are no more results, and\n    \u003ccode\u003e\u003ca\u003eProcessPendingRequests\u003c/a\u003e\u003c/code\u003e, which signals that a break should be taken from\n    exploration to process any pending requests (only meant to be used in\n    exceptional cases).\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "TreeTInstruction",
          "package": "LogicGrowsOnTrees",
          "source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
          "type": "data"
        },
        "index": {
          "description": "The core of the implementation of Tree is mostly contained in this type which provides list of primitive instructions for trees Cache which caches value Choice which signals branch with two choices Null which indicates that there are no more results and ProcessPendingRequests which signals that break should be taken from exploration to process any pending requests only meant to be used in exceptional cases",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "TreeTInstruction",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TInstruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#t:TreeTInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "Cache",
          "package": "LogicGrowsOnTrees",
          "signature": "m (Maybe α) -\u003e TreeTInstruction m α",
          "source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "Cache",
          "normalized": "a(Maybe b)-\u003eTreeTInstruction a b",
          "package": "LogicGrowsOnTrees",
          "partial": "Cache",
          "signature": "m(Maybe α)-\u003eTreeTInstruction m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "Choice",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α -\u003e TreeT m α -\u003e TreeTInstruction m α",
          "source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "Choice",
          "normalized": "TreeT a b-\u003eTreeT a b-\u003eTreeTInstruction a b",
          "package": "LogicGrowsOnTrees",
          "partial": "Choice",
          "signature": "TreeT m α-\u003eTreeT m α-\u003eTreeTInstruction m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "Null",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeTInstruction m α",
          "source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "Null",
          "package": "LogicGrowsOnTrees",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "ProcessPendingRequests",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeTInstruction m ()",
          "source": "src/LogicGrowsOnTrees.html#TreeTInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "ProcessPendingRequests",
          "normalized": "TreeTInstruction a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Process Pending Requests",
          "signature": "TreeTInstruction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:ProcessPendingRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "TreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT",
          "source": "src/LogicGrowsOnTrees.html#TreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "TreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a tree (or some other \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e) with all of the results in the\n    input list.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "allFrom",
          "package": "LogicGrowsOnTrees",
          "signature": "t α-\u003e m α",
          "type": "function"
        },
        "index": {
          "description": "Returns tree or some other MonadPlus with all of the results in the input list",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "allFrom",
          "normalized": "a b-\u003ec b",
          "package": "LogicGrowsOnTrees",
          "partial": "From",
          "signature": "t α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:allFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an optimally balanced tree (or some other \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e) that\n    generates all of the elements in the given (inclusive) range; if the lower\n    bound is greater than the upper bound it returns \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "between",
          "package": "LogicGrowsOnTrees",
          "signature": "n-\u003e n-\u003e m n",
          "type": "function"
        },
        "index": {
          "description": "Returns an optimally balanced tree or some other MonadPlus that generates all of the elements in the given inclusive range if the lower bound is greater than the upper bound it returns mzero",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "between",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "LogicGrowsOnTrees",
          "signature": "n-\u003en-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache a value in case we explore this node again. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "cache",
          "package": "LogicGrowsOnTrees",
          "signature": "x -\u003e m x",
          "source": "src/LogicGrowsOnTrees.html#cache",
          "type": "method"
        },
        "index": {
          "description": "Cache value in case we explore this node again",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "cache",
          "normalized": "a-\u003eb a",
          "package": "LogicGrowsOnTrees",
          "signature": "x-\u003em x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis does the same thing as \u003ccode\u003eguard\u003c/code\u003e but it caches the result. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "cacheGuard",
          "package": "LogicGrowsOnTrees",
          "signature": "Bool -\u003e m ()",
          "source": "src/LogicGrowsOnTrees.html#cacheGuard",
          "type": "method"
        },
        "index": {
          "description": "This does the same thing as guard but it caches the result",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "cacheGuard",
          "normalized": "Bool-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Guard",
          "signature": "Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cacheGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is a combination of the previous two;  it performs a\n        computation which might fail by returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and if that happens\n        it then backtracks; if it passes then the result is cached and returned.\n\u003c/p\u003e\u003cp\u003eNote that the previous two methods are essentially specializations of\n        this method.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "cacheMaybe",
          "package": "LogicGrowsOnTrees",
          "signature": "Maybe x -\u003e m x",
          "source": "src/LogicGrowsOnTrees.html#cacheMaybe",
          "type": "method"
        },
        "index": {
          "description": "This function is combination of the previous two it performs computation which might fail by returning Nothing and if that happens it then backtracks if it passes then the result is cached and returned Note that the previous two methods are essentially specializations of this method",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "cacheMaybe",
          "normalized": "Maybe a-\u003eb a",
          "package": "LogicGrowsOnTrees",
          "partial": "Maybe",
          "signature": "Maybe x-\u003em x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:cacheMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function lets you take a pure tree and transform it into a\n    tree with an arbitrary base monad.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "endowTree",
          "package": "LogicGrowsOnTrees",
          "signature": "Tree α-\u003e TreeT m α",
          "type": "function"
        },
        "index": {
          "description": "This function lets you take pure tree and transform it into tree with an arbitrary base monad",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "endowTree",
          "normalized": "Tree a-\u003eTreeT b a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "Tree α-\u003eTreeT m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:endowTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in a pure tree and sums over all the\n    results in the leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTree",
          "package": "LogicGrowsOnTrees",
          "signature": "Tree α-\u003e α",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in pure tree and sums over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTree",
          "normalized": "Tree a-\u003ea",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "Tree α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in an impure tree and sums over all the\n    results in the leaves.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α-\u003e m α",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in an impure tree and sums over all the results in the leaves",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeT",
          "normalized": "TreeT a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "signature": "TreeT m α-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores a tree for its side-effects, ignoring all results. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTAndIgnoreResults",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Explores tree for its side-effects ignoring all results",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTAndIgnoreResults",
          "normalized": "TreeT a b-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TAnd Ignore Results",
          "signature": "TreeT m α-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTAndIgnoreResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFirst\u003c/a\u003e\u003c/code\u003e, but taking an impure tree instead\n    of pure one.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "TreeT m α-\u003e m (Maybe α)",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFirst but taking an impure tree instead of pure one",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTUntilFirst",
          "normalized": "TreeT a b-\u003ea(Maybe b)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil First",
          "signature": "TreeT m α-\u003em(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eexploreTreeUntilFound\u003c/a\u003e\u003c/code\u003e, but taking an impure tree instead of\n    a pure tree.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTUntilFound",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool)-\u003e TreeT m α-\u003e m (α, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Same as exploreTreeUntilFound but taking an impure tree instead of pure tree",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeTUntilFound",
          "normalized": "(a-\u003eBool)-\u003eTreeT b a-\u003eb(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree TUntil Found",
          "signature": "(α-\u003eBool)-\u003eTreeT m α-\u003em(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeTUntilFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in a tree until a result (i.e., a leaf) has been\n    found; if a result has been found then it is returned wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e,\n    otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeUntilFirst",
          "package": "LogicGrowsOnTrees",
          "signature": "Tree α-\u003e Maybe α",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in tree until result i.e leaf has been found if result has been found then it is returned wrapped in Just otherwise Nothing is returned",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeUntilFirst",
          "normalized": "Tree a-\u003eMaybe a",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until First",
          "signature": "Tree α-\u003eMaybe α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeUntilFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores all the nodes in a tree, summing all encountered results (i.e., in\n    the leaves) until the current partial sum satisfies the condition provided\n    by the first function. The returned value is a pair where the first\n    component is all of the results that were found during the exploration and\n    the second component is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the exploration terminated early due to\n    the condition being met and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eNOTE:  The condition function is assumed to have two properties: first, it\n           is assumed to return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, and second, it is assumed\n           that if it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ex\u003c/code\u003e then it also returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for\n           \u003ccode\u003emappend x y\u003c/code\u003e and \u003ccode\u003emappend y x\u003c/code\u003e for all values \u003ccode\u003ey\u003c/code\u003e.  The reason for\n           this is that the condition function is used to indicate when enough\n           results have been found, and so it should not be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n           as nothing has been found and if it is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ex\u003c/code\u003e then it should\n           not be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for the sum of \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e as this would mean that\n           having \u003cem\u003emore\u003c/em\u003e than enough results is no longer having enough results.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeUntilFound",
          "package": "LogicGrowsOnTrees",
          "signature": "(α -\u003e Bool)-\u003e Tree α-\u003e (α, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Explores all the nodes in tree summing all encountered results i.e in the leaves until the current partial sum satisfies the condition provided by the first function The returned value is pair where the first component is all of the results that were found during the exploration and the second component is True if the exploration terminated early due to the condition being met and False otherwise NOTE The condition function is assumed to have two properties first it is assumed to return False for mempty and second it is assumed that if it returns True for then it also returns True for mappend and mappend for all values The reason for this is that the condition function is used to indicate when enough results have been found and so it should not be True for mempty as nothing has been found and if it is True for then it should not be False for the sum of with as this would mean that having more than enough results is no longer having enough results",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "exploreTreeUntilFound",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003e(a,Bool)",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree Until Found",
          "signature": "(α-\u003eBool)-\u003eTree α-\u003e(α,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:exploreTreeUntilFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function tells the worker to take a break to process any pending\n        requests; it does nothing if we are not in a parallel setting.\n\u003c/p\u003e\u003cp\u003eNOTE: You should normally never need to use this function, as requests\n        are processed whenever a choice point, a cache point, mzero, or a leaf\n        in the decision tree has been encountered. However, if you have noticed\n        that workload steals are taking such a large amount of time that workers\n        are spending too much time sitting idle while they wait for a workload,\n        and you can trace this as being due to a computation that takes so much\n        time that it almost never gives the worker a chance to process requests,\n        then you can use this method to ensure that requests are given a chance\n        to be processed.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "processPendingRequests",
          "package": "LogicGrowsOnTrees",
          "signature": "m ()",
          "source": "src/LogicGrowsOnTrees.html#processPendingRequests",
          "type": "method"
        },
        "index": {
          "description": "This function tells the worker to take break to process any pending requests it does nothing if we are not in parallel setting NOTE You should normally never need to use this function as requests are processed whenever choice point cache point mzero or leaf in the decision tree has been encountered However if you have noticed that workload steals are taking such large amount of time that workers are spending too much time sitting idle while they wait for workload and you can trace this as being due to computation that takes so much time that it almost never gives the worker chance to process requests then you can use this method to ensure that requests are given chance to be processed",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "processPendingRequests",
          "normalized": "a()",
          "package": "LogicGrowsOnTrees",
          "partial": "Pending Requests",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:processPendingRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given action in the nested monad and caches the result. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCache",
          "package": "LogicGrowsOnTrees",
          "signature": "NestedMonad m x -\u003e m x",
          "source": "src/LogicGrowsOnTrees.html#runAndCache",
          "type": "method"
        },
        "index": {
          "description": "Runs the given action in the nested monad and caches the result",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCache",
          "normalized": "NestedMonad a b-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "And Cache",
          "signature": "NestedMonad m x-\u003em x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given action in the nested monad and then does the equivalent\n        of feeding it into \u003ccode\u003eguard\u003c/code\u003e, caching the result.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCacheGuard",
          "package": "LogicGrowsOnTrees",
          "signature": "NestedMonad m Bool -\u003e m ()",
          "source": "src/LogicGrowsOnTrees.html#runAndCacheGuard",
          "type": "method"
        },
        "index": {
          "description": "Runs the given action in the nested monad and then does the equivalent of feeding it into guard caching the result",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCacheGuard",
          "normalized": "NestedMonad a Bool-\u003ea()",
          "package": "LogicGrowsOnTrees",
          "partial": "And Cache Guard",
          "signature": "NestedMonad m Bool-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCacheGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given action in the nested monad;  if it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n        then it acts like \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e,  if it returns 'Just x', then it caches the\n        result.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCacheMaybe",
          "package": "LogicGrowsOnTrees",
          "signature": "NestedMonad m (Maybe x) -\u003e m x",
          "source": "src/LogicGrowsOnTrees.html#runAndCacheMaybe",
          "type": "method"
        },
        "index": {
          "description": "Runs the given action in the nested monad if it returns Nothing then it acts like mzero if it returns Just then it caches the result",
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "runAndCacheMaybe",
          "normalized": "NestedMonad a(Maybe b)-\u003ea b",
          "package": "LogicGrowsOnTrees",
          "partial": "And Cache Maybe",
          "signature": "NestedMonad m(Maybe x)-\u003em x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:runAndCacheMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees",
          "name": "unwrapTreeT",
          "package": "LogicGrowsOnTrees",
          "signature": "ProgramT (TreeTInstruction m) m α",
          "source": "src/LogicGrowsOnTrees.html#TreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees",
          "module": "LogicGrowsOnTrees",
          "name": "unwrapTreeT",
          "package": "LogicGrowsOnTrees",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees/docs/LogicGrowsOnTrees.html#v:unwrapTreeT"
      }
    }
  ]
]