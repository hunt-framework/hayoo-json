[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple, Haskell-native simulator for doing force-directed layout,\n \u003cem\u003ee.g.\u003c/em\u003e of trees or graphs.\n\u003c/p\u003e\u003cp\u003eTo use, just create an \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e import           Physics.ForceLayout\n import qualified Data.Map              as M\n import           Data.AffineSpace.Point\n import           Data.Default (def)\n\n e :: Ensemble (Double, Double)\n e = Ensemble [ (edges,    hookeForce 0.05 4)\n              , (allPairs, coulombForce 1)\n              ]\n              particleMap\n   where edges       = [(1,2), (2,3), (2,5), (3,5), (3,4), (4,5)]\n         allPairs    = [(x,y) | x \u003c- [1..4], y \u003c- [x+1..5]]\n         particleMap = M.fromList . zip [1..]\n                     . map (initParticle . P)\n                     $ [ (2.0, 3.1), (6.3, 7.2)\n                       , (0.3, 4.2), (1.6, -1.1)\n                       , (4.8, 2.9)\n                       ]\n\u003c/pre\u003e\u003cp\u003eThen run a simulation using either \u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e (to get the list of\n all intermediate states) or \u003ccode\u003e\u003ca\u003eforceLayout\u003c/a\u003e\u003c/code\u003e (to get only the ending\n state):\n\u003c/p\u003e\u003cpre\u003e e' :: Ensemble (Double, Double)\n e' = forceLayout (def & damping     .~ 0.8\n                       & energyLimit .~ Just 0.001\n                       & stepLimit   .~ Nothing\n                  )\n                  e\n\u003c/pre\u003e\u003cp\u003eSee the diagrams-contrib package\n (\u003ca\u003ehttp://github.com/diagrams/diagrams-contrib/\u003c/a\u003e) for more\n examples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "module",
        "fct-source": "src/Physics-ForceLayout.html",
        "fct-type": "module",
        "title": "ForceLayout"
      },
      "index": {
        "description": "simple Haskell-native simulator for doing force-directed layout e.g of trees or graphs To use just create an Ensemble like so import Physics.ForceLayout import qualified Data.Map as import Data.AffineSpace.Point import Data.Default def Ensemble Double Double Ensemble edges hookeForce allPairs coulombForce particleMap where edges allPairs particleMap M.fromList zip map initParticle Then run simulation using either simulate to get the list of all intermediate states or forceLayout to get only the ending state Ensemble Double Double forceLayout def damping energyLimit Just stepLimit Nothing See the diagrams-contrib package http github.com diagrams diagrams-contrib for more examples",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "ForceLayout",
        "normalized": "",
        "package": "force-layout",
        "partial": "Force Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eAn edge is a pair of particle identifiers.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "type",
        "fct-source": "src/Physics-ForceLayout.html#Edge",
        "fct-type": "type",
        "title": "Edge"
      },
      "index": {
        "description": "An edge is pair of particle identifiers",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "Edge",
        "normalized": "",
        "package": "force-layout",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#t:Ensemble",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eEnsemble\u003c/code\u003e is a physical configuration of particles.  It\n   consists of a mapping from particle IDs (unique integers) to\n   particles, and a list of forces that are operative.  Each force\n   has a list of edges to which it applies, and is represented by a\n   function giving the force between any two points.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "data",
        "fct-source": "src/Physics-ForceLayout.html#Ensemble",
        "fct-type": "data",
        "title": "Ensemble"
      },
      "index": {
        "description": "An Ensemble is physical configuration of particles It consists of mapping from particle IDs unique integers to particles and list of forces that are operative Each force has list of edges to which it applies and is represented by function giving the force between any two points",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "Ensemble",
        "normalized": "",
        "package": "force-layout",
        "partial": "Ensemble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#t:ForceLayoutOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for customizing a simulation.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "data",
        "fct-source": "src/Physics-ForceLayout.html#ForceLayoutOpts",
        "fct-type": "data",
        "title": "ForceLayoutOpts"
      },
      "index": {
        "description": "Options for customizing simulation",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "ForceLayoutOpts",
        "normalized": "",
        "package": "force-layout",
        "partial": "Force Layout Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#t:PID",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to uniquely identify particles.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "type",
        "fct-source": "src/Physics-ForceLayout.html#PID",
        "fct-type": "type",
        "title": "PID"
      },
      "index": {
        "description": "Used to uniquely identify particles",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "PID",
        "normalized": "",
        "package": "force-layout",
        "partial": "PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#t:Particle",
      "description": {
        "fct-descr": "\u003cp\u003eA particle has a current position, current velocity, and current\n   force acting on it.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "data",
        "fct-source": "src/Physics-ForceLayout.html#Particle",
        "fct-type": "data",
        "title": "Particle"
      },
      "index": {
        "description": "particle has current position current velocity and current force acting on it",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "Particle",
        "normalized": "",
        "package": "force-layout",
        "partial": "Particle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:Ensemble",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Ensemble",
        "fct-source": "src/Physics-ForceLayout.html#Ensemble",
        "fct-type": "function",
        "title": "Ensemble"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "Ensemble",
        "normalized": "",
        "package": "force-layout",
        "partial": "Ensemble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:FLOpts",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "FLOpts",
        "fct-source": "src/Physics-ForceLayout.html#ForceLayoutOpts",
        "fct-type": "function",
        "title": "FLOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "FLOpts",
        "normalized": "",
        "package": "force-layout",
        "partial": "FLOpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:Particle",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Particle",
        "fct-source": "src/Physics-ForceLayout.html#Particle",
        "fct-type": "function",
        "title": "Particle"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "Particle",
        "normalized": "",
        "package": "force-layout",
        "partial": "Particle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_damping",
      "description": {
        "fct-descr": "\u003cp\u003eDamping factor to be\n   applied at each step.\n   Should be between 0 and 1.\n   The default is 0.8.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Scalar v",
        "fct-source": "src/Physics-ForceLayout.html#ForceLayoutOpts",
        "fct-type": "function",
        "title": "_damping"
      },
      "index": {
        "description": "Damping factor to be applied at each step Should be between and The default is",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_damping",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_energyLimit",
      "description": {
        "fct-descr": "\u003cp\u003eKinetic energy below which\n   simulation should stop.\n   If \u003ccode\u003eNothing\u003c/code\u003e, pay no\n   attention to kinetic\n   energy.  The default is\n   \u003ccode\u003eJust 0.001\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Maybe (Scalar v)",
        "fct-source": "src/Physics-ForceLayout.html#ForceLayoutOpts",
        "fct-type": "function",
        "title": "_energyLimit"
      },
      "index": {
        "description": "Kinetic energy below which simulation should stop If Nothing pay no attention to kinetic energy The default is Just",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_energyLimit",
        "normalized": "",
        "package": "force-layout",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_force",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "v",
        "fct-source": "src/Physics-ForceLayout.html#Particle",
        "fct-type": "function",
        "title": "_force"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_force",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_forces",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "[([Edge], Point v -\u003e Point v -\u003e v)]",
        "fct-source": "src/Physics-ForceLayout.html#Ensemble",
        "fct-type": "function",
        "title": "_forces"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_forces",
        "normalized": "[([Edge],Point a-\u003ePoint a-\u003ea)]",
        "package": "force-layout",
        "partial": "",
        "signature": "[([Edge],Point v-\u003ePoint v-\u003ev)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_particles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Map PID (Particle v)",
        "fct-source": "src/Physics-ForceLayout.html#Ensemble",
        "fct-type": "function",
        "title": "_particles"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_particles",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_pos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Point v",
        "fct-source": "src/Physics-ForceLayout.html#Particle",
        "fct-type": "function",
        "title": "_pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_pos",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_stepLimit",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of\n   simulation steps.  If\n   \u003ccode\u003eNothing\u003c/code\u003e, pay no\n   attention to the number of\n   steps.  The default is\n   \u003ccode\u003eJust 1000\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Physics-ForceLayout.html#ForceLayoutOpts",
        "fct-type": "function",
        "title": "_stepLimit"
      },
      "index": {
        "description": "Maximum number of simulation steps If Nothing pay no attention to the number of steps The default is Just",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_stepLimit",
        "normalized": "",
        "package": "force-layout",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:_vel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "v",
        "fct-source": "src/Physics-ForceLayout.html#Particle",
        "fct-type": "function",
        "title": "_vel"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "_vel",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:coulombForce",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecoulombForce k\u003c/code\u003e computes the electrostatic repulsive force\n   between two charged particles, with constant of proportionality\n   \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Scalar v -\u003e Point v -\u003e Point v -\u003e v",
        "fct-source": "src/Physics-ForceLayout.html#coulombForce",
        "fct-type": "function",
        "title": "coulombForce"
      },
      "index": {
        "description": "coulombForce computes the electrostatic repulsive force between two charged particles with constant of proportionality",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "coulombForce",
        "normalized": "Scalar a-\u003ePoint a-\u003ePoint a-\u003ea",
        "package": "force-layout",
        "partial": "Force",
        "signature": "Scalar v-\u003ePoint v-\u003ePoint v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:damping",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (ForceLayoutOpts v) (Scalar v)",
        "fct-source": "src/Physics-ForceLayout.html#damping",
        "fct-type": "function",
        "title": "damping"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "damping",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:distForce",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edistForce f p1 p2\u003c/code\u003e computes the force between two points as a\n   multiple of the unit vector in the direction from \u003ccode\u003ep1\u003c/code\u003e to \u003ccode\u003ep2\u003c/code\u003e,\n   given a function \u003ccode\u003ef\u003c/code\u003e which computes the force's magnitude as a\n   function of the distance between the points.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "(Scalar v -\u003e Scalar v) -\u003e Point v -\u003e Point v -\u003e v",
        "fct-source": "src/Physics-ForceLayout.html#distForce",
        "fct-type": "function",
        "title": "distForce"
      },
      "index": {
        "description": "distForce p1 p2 computes the force between two points as multiple of the unit vector in the direction from p1 to p2 given function which computes the force magnitude as function of the distance between the points",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "distForce",
        "normalized": "(Scalar a-\u003eScalar a)-\u003ePoint a-\u003ePoint a-\u003ea",
        "package": "force-layout",
        "partial": "Force",
        "signature": "(Scalar v-\u003eScalar v)-\u003ePoint v-\u003ePoint v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:energyLimit",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (ForceLayoutOpts v) (Maybe (Scalar v))",
        "fct-source": "src/Physics-ForceLayout.html#energyLimit",
        "fct-type": "function",
        "title": "energyLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "energyLimit",
        "normalized": "",
        "package": "force-layout",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:ensembleStep",
      "description": {
        "fct-descr": "\u003cp\u003eSimulate one time step for an entire ensemble, with the given\n   damping factor.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Scalar v -\u003e Ensemble v -\u003e Ensemble v",
        "fct-source": "src/Physics-ForceLayout.html#ensembleStep",
        "fct-type": "function",
        "title": "ensembleStep"
      },
      "index": {
        "description": "Simulate one time step for an entire ensemble with the given damping factor",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "ensembleStep",
        "normalized": "Scalar a-\u003eEnsemble a-\u003eEnsemble a",
        "package": "force-layout",
        "partial": "Step",
        "signature": "Scalar v-\u003eEnsemble v-\u003eEnsemble v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:force",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (Particle v) v",
        "fct-source": "src/Physics-ForceLayout.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "force",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:forceLayout",
      "description": {
        "fct-descr": "\u003cp\u003eRun a simluation from a starting ensemble, yielding either the\n   first ensemble to have kinetic energy below the \u003ccode\u003e\u003ca\u003eenergyLimit\u003c/a\u003e\u003c/code\u003e (if\n   given), or the ensemble that results after a number of steps\n   equal to the \u003ccode\u003e\u003ca\u003estepLimit\u003c/a\u003e\u003c/code\u003e (if given), whichever comes first.\n   Otherwise \u003ccode\u003eforceLayout\u003c/code\u003e will not terminate.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "ForceLayoutOpts v -\u003e Ensemble v -\u003e Ensemble v",
        "fct-source": "src/Physics-ForceLayout.html#forceLayout",
        "fct-type": "function",
        "title": "forceLayout"
      },
      "index": {
        "description": "Run simluation from starting ensemble yielding either the first ensemble to have kinetic energy below the energyLimit if given or the ensemble that results after number of steps equal to the stepLimit if given whichever comes first Otherwise forceLayout will not terminate",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "forceLayout",
        "normalized": "ForceLayoutOpts a-\u003eEnsemble a-\u003eEnsemble a",
        "package": "force-layout",
        "partial": "Layout",
        "signature": "ForceLayoutOpts v-\u003eEnsemble v-\u003eEnsemble v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:forces",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (Ensemble v) [([Edge], Point v -\u003e Point v -\u003e v)]",
        "fct-source": "src/Physics-ForceLayout.html#forces",
        "fct-type": "function",
        "title": "forces"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "forces",
        "normalized": "a b Lens'(Ensemble c)[([Edge],Point c-\u003ePoint c-\u003ec)]",
        "package": "force-layout",
        "partial": "",
        "signature": "forall v. Lens'(Ensemble v)[([Edge],Point v-\u003ePoint v-\u003ev)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:hookeForce",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehookeForce k l p1 p2\u003c/code\u003e computes the force on \u003ccode\u003ep1\u003c/code\u003e, assuming that\n   \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e are connected by a spring with equilibrium length \u003ccode\u003el\u003c/code\u003e\n   and spring constant \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Scalar v -\u003e Scalar v -\u003e Point v -\u003e Point v -\u003e v",
        "fct-source": "src/Physics-ForceLayout.html#hookeForce",
        "fct-type": "function",
        "title": "hookeForce"
      },
      "index": {
        "description": "hookeForce p1 p2 computes the force on p1 assuming that p1 and p2 are connected by spring with equilibrium length and spring constant",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "hookeForce",
        "normalized": "Scalar a-\u003eScalar a-\u003ePoint a-\u003ePoint a-\u003ea",
        "package": "force-layout",
        "partial": "Force",
        "signature": "Scalar v-\u003eScalar v-\u003ePoint v-\u003ePoint v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:initParticle",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an initial particle at rest at a particular location.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Point v -\u003e Particle v",
        "fct-source": "src/Physics-ForceLayout.html#initParticle",
        "fct-type": "function",
        "title": "initParticle"
      },
      "index": {
        "description": "Create an initial particle at rest at particular location",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "initParticle",
        "normalized": "Point a-\u003eParticle a",
        "package": "force-layout",
        "partial": "Particle",
        "signature": "Point v-\u003eParticle v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:kineticEnergy",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the total kinetic energy of an ensemble.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Ensemble v -\u003e Scalar v",
        "fct-source": "src/Physics-ForceLayout.html#kineticEnergy",
        "fct-type": "function",
        "title": "kineticEnergy"
      },
      "index": {
        "description": "Compute the total kinetic energy of an ensemble",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "kineticEnergy",
        "normalized": "Ensemble a-\u003eScalar a",
        "package": "force-layout",
        "partial": "Energy",
        "signature": "Ensemble v-\u003eScalar v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:particleStep",
      "description": {
        "fct-descr": "\u003cp\u003eSimulate one time step for a particle (assuming the force acting\n   on it has already been computed), with the given damping factor.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Scalar v -\u003e Particle v -\u003e Particle v",
        "fct-source": "src/Physics-ForceLayout.html#particleStep",
        "fct-type": "function",
        "title": "particleStep"
      },
      "index": {
        "description": "Simulate one time step for particle assuming the force acting on it has already been computed with the given damping factor",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "particleStep",
        "normalized": "Scalar a-\u003eParticle a-\u003eParticle a",
        "package": "force-layout",
        "partial": "Step",
        "signature": "Scalar v-\u003eParticle v-\u003eParticle v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:particles",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (Ensemble v) (Map PID (Particle v))",
        "fct-source": "src/Physics-ForceLayout.html#particles",
        "fct-type": "function",
        "title": "particles"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "particles",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:pos",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (Particle v) (Point v)",
        "fct-source": "src/Physics-ForceLayout.html#pos",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "pos",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:recalcForces",
      "description": {
        "fct-descr": "\u003cp\u003eRecalculate all the forces acting in the next time step of an\n   ensemble.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "Ensemble v -\u003e Ensemble v",
        "fct-source": "src/Physics-ForceLayout.html#recalcForces",
        "fct-type": "function",
        "title": "recalcForces"
      },
      "index": {
        "description": "Recalculate all the forces acting in the next time step of an ensemble",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "recalcForces",
        "normalized": "Ensemble a-\u003eEnsemble a",
        "package": "force-layout",
        "partial": "Forces",
        "signature": "Ensemble v-\u003eEnsemble v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003eSimulate a starting ensemble according to the given options,\n   producing a list of all the intermediate ensembles.  Useful for,\n   \u003cem\u003ee.g.\u003c/em\u003e, making an animation.  Note that the resulting list could\n   be infinite, if a \u003ccode\u003e\u003ca\u003estepLimit\u003c/a\u003e\u003c/code\u003e is not specified and either the\n   kinetic energy never falls below the specified threshold, or no\n   energy threshold is specified.\n\u003c/p\u003e",
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "ForceLayoutOpts v -\u003e Ensemble v -\u003e [Ensemble v]",
        "fct-source": "src/Physics-ForceLayout.html#simulate",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "Simulate starting ensemble according to the given options producing list of all the intermediate ensembles Useful for e.g making an animation Note that the resulting list could be infinite if stepLimit is not specified and either the kinetic energy never falls below the specified threshold or no energy threshold is specified",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "simulate",
        "normalized": "ForceLayoutOpts a-\u003eEnsemble a-\u003e[Ensemble a]",
        "package": "force-layout",
        "partial": "",
        "signature": "ForceLayoutOpts v-\u003eEnsemble v-\u003e[Ensemble v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:stepLimit",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (ForceLayoutOpts v) (Maybe Int)",
        "fct-source": "src/Physics-ForceLayout.html#stepLimit",
        "fct-type": "function",
        "title": "stepLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "stepLimit",
        "normalized": "",
        "package": "force-layout",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/force-layout/docs/Physics-ForceLayout.html#v:vel",
      "description": {
        "fct-module": "Physics.ForceLayout",
        "fct-package": "force-layout",
        "fct-signature": "forall v.  Lens' (Particle v) v",
        "fct-source": "src/Physics-ForceLayout.html#vel",
        "fct-type": "function",
        "title": "vel"
      },
      "index": {
        "description": "",
        "hierarchy": "Physics ForceLayout",
        "module": "Physics.ForceLayout",
        "name": "vel",
        "normalized": "",
        "package": "force-layout",
        "partial": "",
        "signature": ""
      }
    }
  }
]