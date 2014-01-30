[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupports monadic and arrow operations for animated\n scenes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation-Animation.html",
        "fct-type": "module",
        "title": "Animation"
      },
      "index": {
        "description": "Supports monadic and arrow operations for animated scenes",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "Animation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Animation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:AniM",
      "description": {
        "fct-descr": "\u003cp\u003eA monad for animation using RSAGL's scene accumulation system.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Animation-Animation.html#AniM",
        "fct-type": "type",
        "title": "AniM"
      },
      "index": {
        "description": "monad for animation using RSAGL scene accumulation system",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "AniM",
        "normalized": "",
        "package": "rsagl",
        "partial": "Ani",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:AnimationObject",
      "description": {
        "fct-descr": "\u003cp\u003eAn object that can capture either a monadic or\n arrow-based animation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Animation-Animation.html#AnimationObject",
        "fct-type": "data",
        "title": "AnimationObject"
      },
      "index": {
        "description": "An object that can capture either monadic or arrow-based animation",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "AnimationObject",
        "normalized": "",
        "package": "rsagl",
        "partial": "Animation Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:TimePlusSceneAccumulator",
      "description": {
        "fct-descr": "\u003cp\u003eA time-aware scene accumulator.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Animation-Animation.html#TimePlusSceneAccumulator",
        "fct-type": "data",
        "title": "TimePlusSceneAccumulator"
      },
      "index": {
        "description": "time-aware scene accumulator",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "TimePlusSceneAccumulator",
        "normalized": "",
        "package": "rsagl",
        "partial": "Time Plus Scene Accumulator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:animateM",
      "description": {
        "fct-descr": "\u003cp\u003eCombine an animation with a continuous affine transformation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "AniM AffineTransformation -\u003e AniM b -\u003e AniM b",
        "fct-source": "src/RSAGL-Animation-Animation.html#animateM",
        "fct-type": "function",
        "title": "animateM"
      },
      "index": {
        "description": "Combine an animation with continuous affine transformation",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "animateM",
        "normalized": "AniM AffineTransformation-\u003eAniM a-\u003eAniM a",
        "package": "rsagl",
        "partial": "",
        "signature": "AniM AffineTransformation-\u003eAniM b-\u003eAniM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:frameTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet's the time of the current frame.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "AniM Time",
        "fct-source": "src/RSAGL-Animation-Animation.html#frameTime",
        "fct-type": "function",
        "title": "frameTime"
      },
      "index": {
        "description": "Get the time of the current frame",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "frameTime",
        "normalized": "",
        "package": "rsagl",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:newAnimationObjectA",
      "description": {
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "(forall e.  FRP e (FRP1 (SceneAccumulator IO) i o) i o) -\u003e IO (AnimationObject i o)",
        "fct-source": "src/RSAGL-Animation-Animation.html#newAnimationObjectA",
        "fct-type": "function",
        "title": "newAnimationObjectA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "newAnimationObjectA",
        "normalized": "(a b FRP c(FRP(SceneAccumulator IO)d e)d e)-\u003eIO(AnimationObject d e)",
        "package": "rsagl",
        "partial": "Animation Object",
        "signature": "(forall e. FRP e(FRP(SceneAccumulator IO)i o)i o)-\u003eIO(AnimationObject i o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:newAnimationObjectM",
      "description": {
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "(i -\u003e AniM o) -\u003e AnimationObject i o",
        "fct-source": "src/RSAGL-Animation-Animation.html#newAnimationObjectM",
        "fct-type": "function",
        "title": "newAnimationObjectM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "newAnimationObjectM",
        "normalized": "(a-\u003eAniM b)-\u003eAnimationObject a b",
        "package": "rsagl",
        "partial": "Animation Object",
        "signature": "(i-\u003eAniM o)-\u003eAnimationObject i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:rotateM",
      "description": {
        "fct-descr": "\u003cp\u003eRotate an animation continuously.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Rate Angle -\u003e AniM a -\u003e AniM a",
        "fct-source": "src/RSAGL-Animation-Animation.html#rotateM",
        "fct-type": "function",
        "title": "rotateM"
      },
      "index": {
        "description": "Rotate an animation continuously",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "rotateM",
        "normalized": "Vector D-\u003eRate Angle-\u003eAniM a-\u003eAniM a",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003eRate Angle-\u003eAniM a-\u003eAniM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:rotationM",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a continuous rotation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Rate Angle -\u003e AniM AffineTransformation",
        "fct-source": "src/RSAGL-Animation-Animation.html#rotationM",
        "fct-type": "function",
        "title": "rotationM"
      },
      "index": {
        "description": "Generates continuous rotation",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "rotationM",
        "normalized": "Vector D-\u003eRate Angle-\u003eAniM AffineTransformation",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003eRate Angle-\u003eAniM AffineTransformation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:runAniM",
      "description": {
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "AniM (a, SceneLayerInfo) -\u003e IO (a, Scene)",
        "fct-source": "src/RSAGL-Animation-Animation.html#runAniM",
        "fct-type": "function",
        "title": "runAniM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "runAniM",
        "normalized": "AniM(a,SceneLayerInfo)-\u003eIO(a,Scene)",
        "package": "rsagl",
        "partial": "Ani",
        "signature": "AniM(a,SceneLayerInfo)-\u003eIO(a,Scene)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:runAnimationObject",
      "description": {
        "fct-module": "RSAGL.Animation.Animation",
        "fct-package": "rsagl",
        "fct-signature": "AnimationObject i o -\u003e i -\u003e AniM o",
        "fct-source": "src/RSAGL-Animation-Animation.html#runAnimationObject",
        "fct-type": "function",
        "title": "runAnimationObject"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Animation",
        "module": "RSAGL.Animation.Animation",
        "name": "runAnimationObject",
        "normalized": "AnimationObject a b-\u003ea-\u003eAniM b",
        "package": "rsagl",
        "partial": "Animation Object",
        "signature": "AnimationObject i o-\u003ei-\u003eAniM o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#",
      "description": {
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html",
        "fct-type": "module",
        "title": "AnimationExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "AnimationExtras",
        "normalized": "",
        "package": "rsagl",
        "partial": "Animation Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:ForceFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA time-varying, velocity-aware vector field that can act on a particle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#ForceFunction",
        "fct-type": "type",
        "title": "ForceFunction"
      },
      "index": {
        "description": "time-varying velocity-aware vector field that can act on particle",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "ForceFunction",
        "normalized": "",
        "package": "rsagl",
        "partial": "Force Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:PV",
      "description": {
        "fct-descr": "\u003cp\u003eA particle with a position and velocity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#PV",
        "fct-type": "type",
        "title": "PV"
      },
      "index": {
        "description": "particle with position and velocity",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "PV",
        "normalized": "",
        "package": "rsagl",
        "partial": "PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:PVA",
      "description": {
        "fct-descr": "\u003cp\u003eA particle with a position, velocity and acceleration.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#PVA",
        "fct-type": "type",
        "title": "PVA"
      },
      "index": {
        "description": "particle with position velocity and acceleration",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "PVA",
        "normalized": "",
        "package": "rsagl",
        "partial": "PVA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:animateA",
      "description": {
        "fct-descr": "\u003cp\u003eApply an affine transformation to an animation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "FRP e m j AffineTransformation -\u003e FRP e m j p -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#animateA",
        "fct-type": "function",
        "title": "animateA"
      },
      "index": {
        "description": "Apply an affine transformation to an animation",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "animateA",
        "normalized": "FRP a b c AffineTransformation-\u003eFRP a b c d-\u003eFRP a b c d",
        "package": "rsagl",
        "partial": "",
        "signature": "FRP e m j AffineTransformation-\u003eFRP e m j p-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:concatForces",
      "description": {
        "fct-descr": "\u003cp\u003eAdd many forces together.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "[ForceFunction] -\u003e ForceFunction",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#concatForces",
        "fct-type": "function",
        "title": "concatForces"
      },
      "index": {
        "description": "Add many forces together",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "concatForces",
        "normalized": "[ForceFunction]-\u003eForceFunction",
        "package": "rsagl",
        "partial": "Forces",
        "signature": "[ForceFunction]-\u003eForceFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:constrainForce",
      "description": {
        "fct-descr": "\u003cp\u003eA filter function on forces.  Where the filter is False,\n the force is coerced to zero.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "(Time -\u003e Point3D -\u003e Rate Vector3D -\u003e Bool) -\u003e ForceFunction -\u003e ForceFunction",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#constrainForce",
        "fct-type": "function",
        "title": "constrainForce"
      },
      "index": {
        "description": "filter function on forces Where the filter is False the force is coerced to zero",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "constrainForce",
        "normalized": "(Time-\u003ePoint D-\u003eRate Vector D-\u003eBool)-\u003eForceFunction-\u003eForceFunction",
        "package": "rsagl",
        "partial": "Force",
        "signature": "(Time-\u003ePoint D-\u003eRate Vector D-\u003eBool)-\u003eForceFunction-\u003eForceFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:drag",
      "description": {
        "fct-descr": "\u003cp\u003eA force function describing aerodynamic drag.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e ForceFunction",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#drag",
        "fct-type": "function",
        "title": "drag"
      },
      "index": {
        "description": "force function describing aerodynamic drag",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "drag",
        "normalized": "RSdouble-\u003eForceFunction",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eForceFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:inverseSquareLaw",
      "description": {
        "fct-descr": "\u003cp\u003eAn energy-conserving force function describing gravitational attraction.\n Accepts the intensity and singularity of the vector field.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Point3D -\u003e ForceFunction",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#inverseSquareLaw",
        "fct-type": "function",
        "title": "inverseSquareLaw"
      },
      "index": {
        "description": "An energy-conserving force function describing gravitational attraction Accepts the intensity and singularity of the vector field",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "inverseSquareLaw",
        "normalized": "RSdouble-\u003ePoint D-\u003eForceFunction",
        "package": "rsagl",
        "partial": "Square Law",
        "signature": "RSdouble-\u003ePoint D-\u003eForceFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:particleSystem",
      "description": {
        "fct-descr": "\u003cp\u003eApply a varying force function to a system of particles.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "Frequency -\u003e [PV] -\u003e FRP e m ([PV] -\u003e ForceFunction) [PVA]",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#particleSystem",
        "fct-type": "function",
        "title": "particleSystem"
      },
      "index": {
        "description": "Apply varying force function to system of particles",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "particleSystem",
        "normalized": "Frequency-\u003e[PV]-\u003eFRP a b([PV]-\u003eForceFunction)[PVA]",
        "package": "rsagl",
        "partial": "System",
        "signature": "Frequency-\u003e[PV]-\u003eFRP e m([PV]-\u003eForceFunction)[PVA]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:pointAtCameraA",
      "description": {
        "fct-descr": "\u003cp\u003eAlways rotates the model so that it's Y+ axis points directly at the camera.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "a (SceneLayer, m model) ()",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#pointAtCameraA",
        "fct-type": "function",
        "title": "pointAtCameraA"
      },
      "index": {
        "description": "Always rotates the model so that it axis points directly at the camera",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "pointAtCameraA",
        "normalized": "a(SceneLayer,b c)()",
        "package": "rsagl",
        "partial": "At Camera",
        "signature": "a(SceneLayer,m model)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:quadraticTrap",
      "description": {
        "fct-descr": "\u003cp\u003eAn energy-conserving force function that increases in\n intensity with distance.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Point3D -\u003e ForceFunction",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#quadraticTrap",
        "fct-type": "function",
        "title": "quadraticTrap"
      },
      "index": {
        "description": "An energy-conserving force function that increases in intensity with distance",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "quadraticTrap",
        "normalized": "RSdouble-\u003ePoint D-\u003eForceFunction",
        "package": "rsagl",
        "partial": "Trap",
        "signature": "RSdouble-\u003ePoint D-\u003eForceFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:rotateA",
      "description": {
        "fct-descr": "\u003cp\u003eAnimation that rotates continuously.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Rate Angle -\u003e FRP e m j p -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#rotateA",
        "fct-type": "function",
        "title": "rotateA"
      },
      "index": {
        "description": "Animation that rotates continuously",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "rotateA",
        "normalized": "Vector D-\u003eRate Angle-\u003eFRP a b c d-\u003eFRP a b c d",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003eRate Angle-\u003eFRP e m j p-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:rotationA",
      "description": {
        "fct-descr": "\u003cp\u003eAnswers a continuous rotation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Rate Angle -\u003e FRP e m ignored AffineTransformation",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#rotationA",
        "fct-type": "function",
        "title": "rotationA"
      },
      "index": {
        "description": "Answers continuous rotation",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "rotationA",
        "normalized": "Vector D-\u003eRate Angle-\u003eFRP a b c AffineTransformation",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003eRate Angle-\u003eFRP e m ignored AffineTransformation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:singleParticle",
      "description": {
        "fct-descr": "\u003cp\u003eApply a varying force function to a particle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.AnimationExtras",
        "fct-package": "rsagl",
        "fct-signature": "Frequency -\u003e PV -\u003e FRP e m ForceFunction PVA",
        "fct-source": "src/RSAGL-Animation-AnimationExtras.html#singleParticle",
        "fct-type": "function",
        "title": "singleParticle"
      },
      "index": {
        "description": "Apply varying force function to particle",
        "hierarchy": "RSAGL Animation AnimationExtras",
        "module": "RSAGL.Animation.AnimationExtras",
        "name": "singleParticle",
        "normalized": "Frequency-\u003ePV-\u003eFRP a b ForceFunction PVA",
        "package": "rsagl",
        "partial": "Particle",
        "signature": "Frequency-\u003ePV-\u003eFRP e m ForceFunction PVA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#",
      "description": {
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html",
        "fct-type": "module",
        "title": "InverseKinematics"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "InverseKinematics",
        "normalized": "",
        "package": "rsagl",
        "partial": "Inverse Kinematics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#t:Leg",
      "description": {
        "fct-descr": "\u003cp\u003eA description of a leg.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#Leg",
        "fct-type": "data",
        "title": "Leg"
      },
      "index": {
        "description": "description of leg",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "Leg",
        "normalized": "",
        "package": "rsagl",
        "partial": "Leg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#t:LegStyle",
      "description": {
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
        "fct-type": "data",
        "title": "LegStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "LegStyle",
        "normalized": "",
        "package": "rsagl",
        "partial": "Leg Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:Insectoid",
      "description": {
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "Insectoid",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
        "fct-type": "function",
        "title": "Insectoid"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "Insectoid",
        "normalized": "",
        "package": "rsagl",
        "partial": "Insectoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:Upright",
      "description": {
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "Upright",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
        "fct-type": "function",
        "title": "Upright"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "Upright",
        "normalized": "",
        "package": "rsagl",
        "partial": "Upright",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approach",
      "description": {
        "fct-descr": "\u003cp\u003eAn acceleration function that that tries to approach a goal point.\n It begins slowing down when it comes within the goal radius, and otherwise\n travels at a fixed speed toward the goal.  The goal radius and speed are\n defined in terms of the magnitude method of the vector type.\n\u003c/p\u003e\u003cp\u003eThis function is just a pure differential equation, see \u003ccode\u003e\u003ca\u003eapproachFrom\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eapproachA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eParameters are:\n * A goal point.\n * A goal radius.\n * An approach speed.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "p -\u003e RSdouble -\u003e Rate RSdouble -\u003e Time -\u003e p -\u003e Rate v",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#approach",
        "fct-type": "function",
        "title": "approach"
      },
      "index": {
        "description": "An acceleration function that that tries to approach goal point It begins slowing down when it comes within the goal radius and otherwise travels at fixed speed toward the goal The goal radius and speed are defined in terms of the magnitude method of the vector type This function is just pure differential equation see approachFrom and approachA Parameters are goal point goal radius An approach speed",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "approach",
        "normalized": "a-\u003eRSdouble-\u003eRate RSdouble-\u003eTime-\u003ea-\u003eRate b",
        "package": "rsagl",
        "partial": "",
        "signature": "p-\u003eRSdouble-\u003eRate RSdouble-\u003eTime-\u003ep-\u003eRate v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approachA",
      "description": {
        "fct-descr": "\u003cp\u003eApproach a moving goal point, starting at the initial\n position of the goal point.  The particle won't move\n until the goal point moves.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Rate RSdouble -\u003e FRP e m p p",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#approachA",
        "fct-type": "function",
        "title": "approachA"
      },
      "index": {
        "description": "Approach moving goal point starting at the initial position of the goal point The particle won move until the goal point moves",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "approachA",
        "normalized": "RSdouble-\u003eRate RSdouble-\u003eFRP a b c c",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRate RSdouble-\u003eFRP e m p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approachFrom",
      "description": {
        "fct-descr": "\u003cp\u003eApproach a moving goal point from the specified starting point.\n See the description of \u003ccode\u003e\u003ca\u003eapproach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Rate RSdouble -\u003e p -\u003e FRP e m p p",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#approachFrom",
        "fct-type": "function",
        "title": "approachFrom"
      },
      "index": {
        "description": "Approach moving goal point from the specified starting point See the description of approach",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "approachFrom",
        "normalized": "RSdouble-\u003eRate RSdouble-\u003ea-\u003eFRP b c a a",
        "package": "rsagl",
        "partial": "From",
        "signature": "RSdouble-\u003eRate RSdouble-\u003ep-\u003eFRP e m p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:jointAnimation",
      "description": {
        "fct-descr": "\u003cp\u003eAnimates the upper and lower limbs of a joint into a single animation,\n using the affine transformations \u003ccode\u003ejoitn_arm_upper\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoint_arm_lower\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "FRP e m () () -\u003e FRP e m () () -\u003e FRP e m Joint ()",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#jointAnimation",
        "fct-type": "function",
        "title": "jointAnimation"
      },
      "index": {
        "description": "Animates the upper and lower limbs of joint into single animation using the affine transformations joitn arm upper and joint arm lower",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "jointAnimation",
        "normalized": "FRP a b()()-\u003eFRP a b()()-\u003eFRP a b Joint()",
        "package": "rsagl",
        "partial": "Animation",
        "signature": "FRP e m()()-\u003eFRP e m()()-\u003eFRP e m Joint()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:leg",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a leg, based on several parameters.\n See the descriptions of \u003ccode\u003efoot\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoint\u003c/a\u003e\u003c/code\u003e for\n more information on how some of these parameters\n are interpreted.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e style - See LegStyle.\n * bend - The bend vector of the articulated joint\n * base - the base or shoulder or fixed point of the joint\n * len - the total length of the articulation\n * end - the natural resting point of the foot\n         the foot will rarely actually be here,\n         but will try to return to this point\n         as it walks.\n * animation - an animation to display the joint\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "LegStyle -\u003e Vector3D -\u003e Point3D -\u003e RSdouble -\u003e Point3D -\u003e FRP e m Joint () -\u003e Leg e m",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#leg",
        "fct-type": "function",
        "title": "leg"
      },
      "index": {
        "description": "Constructs leg based on several parameters See the descriptions of foot and joint for more information on how some of these parameters are interpreted style See LegStyle bend The bend vector of the articulated joint base the base or shoulder or fixed point of the joint len the total length of the articulation end the natural resting point of the foot the foot will rarely actually be here but will try to return to this point as it walks animation an animation to display the joint",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "leg",
        "normalized": "LegStyle-\u003eVector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eFRP a b Joint()-\u003eLeg a b",
        "package": "rsagl",
        "partial": "",
        "signature": "LegStyle-\u003eVector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eFRP e m Joint()-\u003eLeg e m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:legs",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a group of legs into a group that will try to keep at least half\n of the legs on the ground at all times.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.InverseKinematics",
        "fct-package": "rsagl",
        "fct-signature": "[Leg e m] -\u003e FRP e m () ()",
        "fct-source": "src/RSAGL-Animation-InverseKinematics.html#legs",
        "fct-type": "function",
        "title": "legs"
      },
      "index": {
        "description": "Combines group of legs into group that will try to keep at least half of the legs on the ground at all times",
        "hierarchy": "RSAGL Animation InverseKinematics",
        "module": "RSAGL.Animation.InverseKinematics",
        "name": "legs",
        "normalized": "[Leg a b]-\u003eFRP a b()()",
        "package": "rsagl",
        "partial": "",
        "signature": "[Leg e m]-\u003eFRP e m()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#",
      "description": {
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation-Joint.html",
        "fct-type": "module",
        "title": "Joint"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "Joint",
        "normalized": "",
        "package": "rsagl",
        "partial": "Joint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#t:Joint",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of computing a joint.  It provides AffineTransformations that\n describe the orientations of the components of the joint.\n All affine transformations reorient the +Z axis to aim in the direction\n of the far point.  For example, in \u003ccode\u003ejoint_arm_lower\u003c/code\u003e the +Z axis aims\n at the position of the hand.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "data",
        "title": "Joint"
      },
      "index": {
        "description": "The result of computing joint It provides AffineTransformations that describe the orientations of the components of the joint All affine transformations reorient the axis to aim in the direction of the far point For example in joint arm lower the axis aims at the position of the hand",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "Joint",
        "normalized": "",
        "package": "rsagl",
        "partial": "Joint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:Joint",
      "description": {
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "Joint",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "Joint"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "Joint",
        "normalized": "",
        "package": "rsagl",
        "partial": "Joint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a joint where given a bend vector, describing the direction\n in which the articulated point (elbow) will try to move when the\n arm is retracted, and shoulder or base of the joint, the total\n length of the joint, and ideal position of the hand.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Point3D -\u003e RSdouble -\u003e Point3D -\u003e Joint",
        "fct-source": "src/RSAGL-Animation-Joint.html#joint",
        "fct-type": "function",
        "title": "joint"
      },
      "index": {
        "description": "Compute joint where given bend vector describing the direction in which the articulated point elbow will try to move when the arm is retracted and shoulder or base of the joint the total length of the joint and ideal position of the hand",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint",
        "normalized": "Vector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eJoint",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eJoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_hand",
      "description": {
        "fct-descr": "\u003cp\u003eThe affine transformation where the origin\n is the hand.  Oriented to preserve as much as\n possible the +Y axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_arm_hand"
      },
      "index": {
        "description": "The affine transformation where the origin is the hand Oriented to preserve as much as possible the axis",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_arm_hand",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_lower",
      "description": {
        "fct-descr": "\u003cp\u003eThe affine transformation to the lower\n arm, where the origin is the elbow.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_arm_lower"
      },
      "index": {
        "description": "The affine transformation to the lower arm where the origin is the elbow",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_arm_lower",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_upper",
      "description": {
        "fct-descr": "\u003cp\u003eThe affine transformation to the upper\n arm, where the origin is the shoulder.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_arm_upper"
      },
      "index": {
        "description": "The affine transformation to the upper arm where the origin is the shoulder",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_arm_upper",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_elbow",
      "description": {
        "fct-descr": "\u003cp\u003eThe articulated point of the joint.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_elbow"
      },
      "index": {
        "description": "The articulated point of the joint",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_elbow",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_hand",
      "description": {
        "fct-descr": "\u003cp\u003eThe far end point of the joint.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_hand"
      },
      "index": {
        "description": "The far end point of the joint",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_hand",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_shoulder",
      "description": {
        "fct-descr": "\u003cp\u003eThe fixed point of the joint.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.Joint",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Animation-Joint.html#Joint",
        "fct-type": "function",
        "title": "joint_shoulder"
      },
      "index": {
        "description": "The fixed point of the joint",
        "hierarchy": "RSAGL Animation Joint",
        "module": "RSAGL.Animation.Joint",
        "name": "joint_shoulder",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#",
      "description": {
        "fct-module": "RSAGL.Animation.KinematicSensors",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation-KinematicSensors.html",
        "fct-type": "module",
        "title": "KinematicSensors"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation KinematicSensors",
        "module": "RSAGL.Animation.KinematicSensors",
        "name": "KinematicSensors",
        "normalized": "",
        "package": "rsagl",
        "partial": "Kinematic Sensors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#v:inertia",
      "description": {
        "fct-descr": "\u003cp\u003eMeasures the (presumed) acceleration due to inertia of a point\n in the local coordinate system, relative to a (presumably) inertial frame a reference.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.KinematicSensors",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e Point3D -\u003e FRP e m () (Acceleration Vector3D)",
        "fct-source": "src/RSAGL-Animation-KinematicSensors.html#inertia",
        "fct-type": "function",
        "title": "inertia"
      },
      "index": {
        "description": "Measures the presumed acceleration due to inertia of point in the local coordinate system relative to presumably inertial frame reference",
        "hierarchy": "RSAGL Animation KinematicSensors",
        "module": "RSAGL.Animation.KinematicSensors",
        "name": "inertia",
        "normalized": "CoordinateSystem-\u003ePoint D-\u003eFRP a b()(Acceleration Vector D)",
        "package": "rsagl",
        "partial": "",
        "signature": "CoordinateSystem-\u003ePoint D-\u003eFRP e m()(Acceleration Vector D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#v:odometer",
      "description": {
        "fct-descr": "\u003cp\u003eMeasures the distance traveled, by the origin of the local coordinate\n system, as measured in a remote coordinate system, in terms\n of a vector in the local coordinate system.\n\u003c/p\u003e\u003cp\u003eFor example, if we are animating a model of a wheel, we could put an\n odometer at the bottom-most point of the wheel, and then rotate\n the wheel according to the result.  The wheel would seem to\n turn as it travels, but would not turn when dragged sidewise.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Animation.KinematicSensors",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e Vector3D -\u003e FRP e m () RSdouble",
        "fct-source": "src/RSAGL-Animation-KinematicSensors.html#odometer",
        "fct-type": "function",
        "title": "odometer"
      },
      "index": {
        "description": "Measures the distance traveled by the origin of the local coordinate system as measured in remote coordinate system in terms of vector in the local coordinate system For example if we are animating model of wheel we could put an odometer at the bottom-most point of the wheel and then rotate the wheel according to the result The wheel would seem to turn as it travels but would not turn when dragged sidewise",
        "hierarchy": "RSAGL Animation KinematicSensors",
        "module": "RSAGL.Animation.KinematicSensors",
        "name": "odometer",
        "normalized": "CoordinateSystem-\u003eVector D-\u003eFRP a b()RSdouble",
        "package": "rsagl",
        "partial": "",
        "signature": "CoordinateSystem-\u003eVector D-\u003eFRP e m()RSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation.html#",
      "description": {
        "fct-module": "RSAGL.Animation",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Animation.html",
        "fct-type": "module",
        "title": "Animation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Animation",
        "module": "RSAGL.Animation",
        "name": "Animation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Animation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#",
      "description": {
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-Alpha.html",
        "fct-type": "module",
        "title": "Alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "rsagl",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#t:Alpha",
      "description": {
        "fct-descr": "\u003cp\u003eA color with an alpha channel.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-Alpha.html#Alpha",
        "fct-type": "data",
        "title": "Alpha"
      },
      "index": {
        "description": "color with an alpha channel",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "rsagl",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:Alpha",
      "description": {
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "Alpha",
        "fct-source": "src/RSAGL-Color-Alpha.html#Alpha",
        "fct-type": "function",
        "title": "Alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "rsagl",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eApply (more) transparency to a color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Alpha c -\u003e Alpha c",
        "fct-source": "src/RSAGL-Color-Alpha.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Apply more transparency to color",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "alpha",
        "normalized": "RSdouble-\u003eAlpha a-\u003eAlpha a",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eAlpha c-\u003eAlpha c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha256",
      "description": {
        "fct-descr": "\u003cp\u003eIn the range [0..255].\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "i -\u003e Alpha c -\u003e Alpha c",
        "fct-source": "src/RSAGL-Color-Alpha.html#alpha256",
        "fct-type": "function",
        "title": "alpha256"
      },
      "index": {
        "description": "In the range",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "alpha256",
        "normalized": "a-\u003eAlpha b-\u003eAlpha b",
        "package": "rsagl",
        "partial": "",
        "signature": "i-\u003eAlpha c-\u003eAlpha c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha_alpha",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-Alpha.html#Alpha",
        "fct-type": "function",
        "title": "alpha_alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "alpha_alpha",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha_color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.Alpha",
        "fct-package": "rsagl",
        "fct-signature": "!c",
        "fct-source": "src/RSAGL-Color-Alpha.html#Alpha",
        "fct-type": "function",
        "title": "alpha_color"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Alpha",
        "module": "RSAGL.Color.Alpha",
        "name": "alpha_color",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#",
      "description": {
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-Channels.html",
        "fct-type": "module",
        "title": "Channels"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "Channels",
        "normalized": "",
        "package": "rsagl",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_blue",
      "description": {
        "fct-descr": "\u003cp\u003eThe blue channel of the RGB color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_blue",
        "fct-type": "function",
        "title": "channel_blue"
      },
      "index": {
        "description": "The blue channel of the RGB color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_blue_yellow",
      "description": {
        "fct-descr": "\u003cp\u003eA blue (1.0) vs. yellow (-1.0) channel.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_blue_yellow",
        "fct-type": "function",
        "title": "channel_blue_yellow"
      },
      "index": {
        "description": "blue vs yellow channel",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_blue_yellow",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_boldness",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum channel of the subtractive CMY color space.\n This channel represents the device gamut: it should be between 0 and 1.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_boldness",
        "fct-type": "function",
        "title": "channel_boldness"
      },
      "index": {
        "description": "The maximum channel of the subtractive CMY color space This channel represents the device gamut it should be between and",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_boldness",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_brightness",
      "description": {
        "fct-descr": "\u003cp\u003eThe brightness channel in simple device interpretation.\n That is, (red + green + blue) / 3.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_brightness",
        "fct-type": "function",
        "title": "channel_brightness"
      },
      "index": {
        "description": "The brightness channel in simple device interpretation That is red green blue",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_brightness",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_chroma",
      "description": {
        "fct-descr": "\u003cp\u003eThe Chroma (colorfulness) of a color, isotropic to luminance.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_chroma",
        "fct-type": "function",
        "title": "channel_chroma"
      },
      "index": {
        "description": "The Chroma colorfulness of color isotropic to luminance",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_chroma",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_cyan",
      "description": {
        "fct-descr": "\u003cp\u003eThe cyan channel of the CMY color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_cyan",
        "fct-type": "function",
        "title": "channel_cyan"
      },
      "index": {
        "description": "The cyan channel of the CMY color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_cyan",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_green",
      "description": {
        "fct-descr": "\u003cp\u003eThe green channel of the RGB color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_green",
        "fct-type": "function",
        "title": "channel_green"
      },
      "index": {
        "description": "The green channel of the RGB color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_green_magenta",
      "description": {
        "fct-descr": "\u003cp\u003eA green (1.0) vs. magenta (-1.0) channel.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_green_magenta",
        "fct-type": "function",
        "title": "channel_green_magenta"
      },
      "index": {
        "description": "green vs magenta channel",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_green_magenta",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_intensity",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum channel of the neutral RGB color space.\n This channel represents the device gamut: it should be between -1 and 1.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_intensity",
        "fct-type": "function",
        "title": "channel_intensity"
      },
      "index": {
        "description": "The maximum channel of the neutral RGB color space This channel represents the device gamut it should be between and",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_intensity",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_luminance",
      "description": {
        "fct-descr": "\u003cp\u003eLuminance of a color as percieved by the human eye.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_luminance",
        "fct-type": "function",
        "title": "channel_luminance"
      },
      "index": {
        "description": "Luminance of color as percieved by the human eye",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_luminance",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_magenta",
      "description": {
        "fct-descr": "\u003cp\u003eThe magenta channel of the CMY color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_magenta",
        "fct-type": "function",
        "title": "channel_magenta"
      },
      "index": {
        "description": "The magenta channel of the CMY color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_magenta",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_red",
      "description": {
        "fct-descr": "\u003cp\u003eThe red channel of the RGB color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_red",
        "fct-type": "function",
        "title": "channel_red"
      },
      "index": {
        "description": "The red channel of the RGB color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_red",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_red_cyan",
      "description": {
        "fct-descr": "\u003cp\u003eA red (1.0) vs. cyan (-1.0) channel.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_red_cyan",
        "fct-type": "function",
        "title": "channel_red_cyan"
      },
      "index": {
        "description": "red vs cyan channel",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_red_cyan",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_value",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum channel of the additive RGB color space.\n This is identical to the value channel of the HSB color model.\n This channel represents the device gamut: it should be between 0 and 1.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_value",
        "fct-type": "function",
        "title": "channel_value"
      },
      "index": {
        "description": "The maximum channel of the additive RGB color space This is identical to the value channel of the HSB color model This channel represents the device gamut it should be between and",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_value",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_yellow",
      "description": {
        "fct-descr": "\u003cp\u003eThe yellow channel of the CMY color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Channels",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel",
        "fct-source": "src/RSAGL-Color-Channels.html#channel_yellow",
        "fct-type": "function",
        "title": "channel_yellow"
      },
      "index": {
        "description": "The yellow channel of the CMY color space",
        "hierarchy": "RSAGL Color Channels",
        "module": "RSAGL.Color.Channels",
        "name": "channel_yellow",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#",
      "description": {
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-ColorSpace.html",
        "fct-type": "module",
        "title": "ColorSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ColorSpace",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:AffineColorSpace",
      "description": {
        "fct-descr": "\u003cp\u003eAn affine transformation from the default RGB color space\n to the specified color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#AffineColorSpace",
        "fct-type": "data",
        "title": "AffineColorSpace"
      },
      "index": {
        "description": "An affine transformation from the default RGB color space to the specified color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "AffineColorSpace",
        "normalized": "",
        "package": "rsagl",
        "partial": "Affine Color Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ChannelIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e, of a 3-channel color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ChannelIndex",
        "fct-type": "data",
        "title": "ChannelIndex"
      },
      "index": {
        "description": "channel channel channel of channel color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ChannelIndex",
        "normalized": "",
        "package": "rsagl",
        "partial": "Channel Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific component of a 3-channel color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ColorChannel",
        "fct-type": "data",
        "title": "ColorChannel"
      },
      "index": {
        "description": "specific component of channel color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ColorChannel",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorSpace",
      "description": {
        "fct-descr": "\u003cp\u003eA color space specification or color type that has an associated\n color space.\n\u003c/p\u003e\u003cp\u003eIf a type implements both \u003ccode\u003e\u003ca\u003eImportColorCoordinates\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eColorSpace\u003c/a\u003e\u003c/code\u003e, then it must ensure that:\n\u003c/p\u003e\u003cpre\u003eimportColorCoordinates f =\n     (let c = importColorCoordinates (const $ f $ affineColorSpaceOf c) in c)\u003c/pre\u003e\u003cp\u003eThis is not hard -- all that is required is that\n \u003ccode\u003eaffineColorSpaceOf undefined\u003c/code\u003e is defined.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ColorSpace",
        "fct-type": "class",
        "title": "ColorSpace"
      },
      "index": {
        "description": "color space specification or color type that has an associated color space If type implements both ImportColorCoordinates and ColorSpace then it must ensure that importColorCoordinates let importColorCoordinates const affineColorSpaceOf in This is not hard all that is required is that affineColorSpaceOf undefined is defined",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ColorSpace",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorWheel",
      "description": {
        "fct-descr": "\u003cp\u003eA rotatable color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ColorWheel",
        "fct-type": "data",
        "title": "ColorWheel"
      },
      "index": {
        "description": "rotatable color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ColorWheel",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Wheel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ExportColorCoordinates",
      "description": {
        "fct-descr": "\u003cp\u003eA color type that can export its color coordinates.\n An easy implementation is\n\u003c/p\u003e\u003cpre\u003etransformColorFromTo your_color_space your_color_coordinates\u003c/pre\u003e\u003cp\u003eIf a type implements both \u003ccode\u003e\u003ca\u003eExportColorCoordinates\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eImportColorCoordinates\u003c/a\u003e\u003c/code\u003e, then it must ensure that\n \u003ccode\u003eimportColorCoordinates . exportColorCoordinates = id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ExportColorCoordinates",
        "fct-type": "class",
        "title": "ExportColorCoordinates"
      },
      "index": {
        "description": "color type that can export its color coordinates An easy implementation is transformColorFromTo your color space your color coordinates If type implements both ExportColorCoordinates and ImportColorCoordinates then it must ensure that importColorCoordinates exportColorCoordinates id",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ExportColorCoordinates",
        "normalized": "",
        "package": "rsagl",
        "partial": "Export Color Coordinates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ImportColorCoordinates",
      "description": {
        "fct-descr": "\u003cp\u003eA color type that can import its color coordinates.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#ImportColorCoordinates",
        "fct-type": "class",
        "title": "ImportColorCoordinates"
      },
      "index": {
        "description": "color type that can import its color coordinates",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "ImportColorCoordinates",
        "normalized": "",
        "package": "rsagl",
        "partial": "Import Color Coordinates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:LinearMetric",
      "description": {
        "fct-descr": "\u003cp\u003eA view of a specific color channel, such as red, or luminance.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "data",
        "title": "LinearMetric"
      },
      "index": {
        "description": "view of specific color channel such as red or luminance",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "LinearMetric",
        "normalized": "",
        "package": "rsagl",
        "partial": "Linear Metric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:LinearMetric",
      "description": {
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "LinearMetric",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "function",
        "title": "LinearMetric"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "LinearMetric",
        "normalized": "",
        "package": "rsagl",
        "partial": "Linear Metric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:affineColorSpaceOf",
      "description": {
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "cs -\u003e AffineColorSpace",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#affineColorSpaceOf",
        "fct-type": "method",
        "title": "affineColorSpaceOf"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "affineColorSpaceOf",
        "normalized": "a-\u003eAffineColorSpace",
        "package": "rsagl",
        "partial": "Color Space Of",
        "signature": "cs-\u003eAffineColorSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_u",
      "description": {
        "fct-descr": "\u003cp\u003eThe first channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ChannelIndex",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#channel_u",
        "fct-type": "function",
        "title": "channel_u"
      },
      "index": {
        "description": "The first channel of color space represented by the ordered tripple",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "channel_u",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_v",
      "description": {
        "fct-descr": "\u003cp\u003eThe second channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ChannelIndex",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#channel_v",
        "fct-type": "function",
        "title": "channel_v"
      },
      "index": {
        "description": "The second channel of color space represented by the ordered tripple",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "channel_v",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_w",
      "description": {
        "fct-descr": "\u003cp\u003eThe third channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ChannelIndex",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#channel_w",
        "fct-type": "function",
        "title": "channel_w"
      },
      "index": {
        "description": "The third channel of color space represented by the ordered tripple",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "channel_w",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:color_space_rgb",
      "description": {
        "fct-descr": "\u003cp\u003eThe red-green-blue device color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "AffineColorSpace",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#color_space_rgb",
        "fct-type": "function",
        "title": "color_space_rgb"
      },
      "index": {
        "description": "The red-green-blue device color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "color_space_rgb",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:color_wheel_rgbl",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel constructed with red, green and blue device primaries\n and a luminance component.  This is the basis of the HCL color system.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#color_wheel_rgbl",
        "fct-type": "function",
        "title": "color_wheel_rgbl"
      },
      "index": {
        "description": "color wheel constructed with red green and blue device primaries and luminance component This is the basis of the HCL color system",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "color_wheel_rgbl",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:exportColorCoordinates",
      "description": {
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "c -\u003e AffineColorSpace -\u003e Point3D",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#exportColorCoordinates",
        "fct-type": "method",
        "title": "exportColorCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "exportColorCoordinates",
        "normalized": "a-\u003eAffineColorSpace-\u003ePoint D",
        "package": "rsagl",
        "partial": "Color Coordinates",
        "signature": "c-\u003eAffineColorSpace-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:importColorCoordinates",
      "description": {
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "(AffineColorSpace -\u003e Point3D) -\u003e c",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#importColorCoordinates",
        "fct-type": "method",
        "title": "importColorCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "importColorCoordinates",
        "normalized": "(AffineColorSpace-\u003ePoint D)-\u003ea",
        "package": "rsagl",
        "partial": "Color Coordinates",
        "signature": "(AffineColorSpace-\u003ePoint D)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_color_function",
      "description": {
        "fct-descr": "\u003cp\u003eA function to modify a color channel independantly\n from the other color channels in the same color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Color",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "function",
        "title": "linear_color_function"
      },
      "index": {
        "description": "function to modify color channel independantly from the other color channels in the same color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "linear_color_function",
        "normalized": "RSdouble-\u003eColor",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_gamut_bounds",
      "description": {
        "fct-descr": "\u003cp\u003eThe range of a color channel that is within gamut.\n This range depends on the channel and the particular\n color being observed, and may not exist if the\n color itself is out of gamut.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "Maybe (RSdouble, RSdouble)",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "function",
        "title": "linear_gamut_bounds"
      },
      "index": {
        "description": "The range of color channel that is within gamut This range depends on the channel and the particular color being observed and may not exist if the color itself is out of gamut",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "linear_gamut_bounds",
        "normalized": "Maybe(RSdouble,RSdouble)",
        "package": "rsagl",
        "partial": "",
        "signature": "Maybe(RSdouble,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_original",
      "description": {
        "fct-descr": "\u003cp\u003eThe original color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "Color",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "function",
        "title": "linear_original"
      },
      "index": {
        "description": "The original color",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "linear_original",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_value",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of the particular color channel for the\n particular color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
        "fct-type": "function",
        "title": "linear_value"
      },
      "index": {
        "description": "The value of the particular color channel for the particular color",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "linear_value",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newAngularChannel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an isotropic \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e that runs along a\n hue angle.  The meaning of the hue angle depends on the\n primary colors used in the construction of the color wheel.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel -\u003e Angle -\u003e ColorChannel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newAngularChannel",
        "fct-type": "function",
        "title": "newAngularChannel"
      },
      "index": {
        "description": "Construct an isotropic ColorChannel that runs along hue angle The meaning of the hue angle depends on the primary colors used in the construction of the color wheel",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newAngularChannel",
        "normalized": "ColorWheel-\u003eAngle-\u003eColorChannel",
        "package": "rsagl",
        "partial": "Angular Channel",
        "signature": "ColorWheel-\u003eAngle-\u003eColorChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newChannel",
      "description": {
        "fct-descr": "\u003cp\u003ePick a channel from a color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ChannelIndex -\u003e cs -\u003e ColorChannel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newChannel",
        "fct-type": "function",
        "title": "newChannel"
      },
      "index": {
        "description": "Pick channel from color space",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newChannel",
        "normalized": "ChannelIndex-\u003ea-\u003eColorChannel",
        "package": "rsagl",
        "partial": "Channel",
        "signature": "ChannelIndex-\u003ecs-\u003eColorChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newColorSpace",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new color space.  This requires a minimal point\n (the black point in an additive color space, or the white point\n in a subtractive color space), and three primary colors.\n The three primarys color correspond to the \u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "c -\u003e c -\u003e c -\u003e c -\u003e AffineColorSpace",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newColorSpace",
        "fct-type": "function",
        "title": "newColorSpace"
      },
      "index": {
        "description": "Construct new color space This requires minimal point the black point in an additive color space or the white point in subtractive color space and three primary colors The three primarys color correspond to the channel channel and channel respectively",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newColorSpace",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eAffineColorSpace",
        "package": "rsagl",
        "partial": "Color Space",
        "signature": "c-\u003ec-\u003ec-\u003ec-\u003eAffineColorSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newColorWheel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new color wheel.  This requires a minimal point,\n (the black point in an additive color space, or the white point\n in a subtractive color space), and three primary colors with\n assigned hue angles and value parameters.\n The hue angle maps onto \u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, while\n the value parameter maps directly and additively onto\n \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "c -\u003e (c, Angle, RSdouble) -\u003e (c, Angle, RSdouble) -\u003e (c, Angle, RSdouble) -\u003e ColorWheel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newColorWheel",
        "fct-type": "function",
        "title": "newColorWheel"
      },
      "index": {
        "description": "Construct new color wheel This requires minimal point the black point in an additive color space or the white point in subtractive color space and three primary colors with assigned hue angles and value parameters The hue angle maps onto channel and channel while the value parameter maps directly and additively onto channel",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newColorWheel",
        "normalized": "a-\u003e(a,Angle,RSdouble)-\u003e(a,Angle,RSdouble)-\u003e(a,Angle,RSdouble)-\u003eColorWheel",
        "package": "rsagl",
        "partial": "Color Wheel",
        "signature": "c-\u003e(c,Angle,RSdouble)-\u003e(c,Angle,RSdouble)-\u003e(c,Angle,RSdouble)-\u003eColorWheel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newMaximalChannel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e representing the maximum\n of the three color components.  For example, the\n maximum of \u003ccode\u003eRGB 0.25 0.5 0.4\u003c/code\u003e is 0.5.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "AffineColorSpace -\u003e ColorChannel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newMaximalChannel",
        "fct-type": "function",
        "title": "newMaximalChannel"
      },
      "index": {
        "description": "Construct ColorChannel representing the maximum of the three color components For example the maximum of RGB is",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newMaximalChannel",
        "normalized": "AffineColorSpace-\u003eColorChannel",
        "package": "rsagl",
        "partial": "Maximal Channel",
        "signature": "AffineColorSpace-\u003eColorChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newRadialChannel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an isotropic \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e along the radii\n of a color wheel.  This is exactly like calling\n \u003ccode\u003e\u003ca\u003enewAngularChannel\u003c/a\u003e\u003c/code\u003e knowing in advance the specific\n hue of the color in question.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel -\u003e ColorChannel",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#newRadialChannel",
        "fct-type": "function",
        "title": "newRadialChannel"
      },
      "index": {
        "description": "Construct an isotropic ColorChannel along the radii of color wheel This is exactly like calling newAngularChannel knowing in advance the specific hue of the color in question",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "newRadialChannel",
        "normalized": "ColorWheel-\u003eColorChannel",
        "package": "rsagl",
        "partial": "Radial Channel",
        "signature": "ColorWheel-\u003eColorChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:transformColor",
      "description": {
        "fct-descr": "\u003cp\u003eTransform colors between color spaces.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "source -\u003e dest",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#transformColor",
        "fct-type": "function",
        "title": "transformColor"
      },
      "index": {
        "description": "Transform colors between color spaces",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "transformColor",
        "normalized": "a-\u003eb",
        "package": "rsagl",
        "partial": "Color",
        "signature": "source-\u003edest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:transformColorFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eTransform ordered triples between color spaces.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "AffineColorSpace -\u003e Point3D -\u003e AffineColorSpace -\u003e Point3D",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#transformColorFromTo",
        "fct-type": "function",
        "title": "transformColorFromTo"
      },
      "index": {
        "description": "Transform ordered triples between color spaces",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "transformColorFromTo",
        "normalized": "AffineColorSpace-\u003ePoint D-\u003eAffineColorSpace-\u003ePoint D",
        "package": "rsagl",
        "partial": "Color From To",
        "signature": "AffineColorSpace-\u003ePoint D-\u003eAffineColorSpace-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:viewChannel",
      "description": {
        "fct-descr": "\u003cp\u003eRead a specific channel of a color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.ColorSpace",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel -\u003e c -\u003e LinearMetric",
        "fct-source": "src/RSAGL-Color-ColorSpace.html#viewChannel",
        "fct-type": "function",
        "title": "viewChannel"
      },
      "index": {
        "description": "Read specific channel of color",
        "hierarchy": "RSAGL Color ColorSpace",
        "module": "RSAGL.Color.ColorSpace",
        "name": "viewChannel",
        "normalized": "ColorChannel-\u003ea-\u003eLinearMetric",
        "package": "rsagl",
        "partial": "Channel",
        "signature": "ColorChannel-\u003ec-\u003eLinearMetric"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#",
      "description": {
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-HCL.html",
        "fct-type": "module",
        "title": "HCL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "HCL",
        "normalized": "",
        "package": "rsagl",
        "partial": "HCL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#t:HCL",
      "description": {
        "fct-descr": "\u003cp\u003eA color in the hue-chroma-luminance color space.\n This is an additive color system (like RGB).\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-HCL.html#HCL",
        "fct-type": "data",
        "title": "HCL"
      },
      "index": {
        "description": "color in the hue-chroma-luminance color space This is an additive color system like RGB",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "HCL",
        "normalized": "",
        "package": "rsagl",
        "partial": "HCL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:HCL",
      "description": {
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "HCL",
        "fct-source": "src/RSAGL-Color-HCL.html#HCL",
        "fct-type": "function",
        "title": "HCL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "HCL",
        "normalized": "",
        "package": "rsagl",
        "partial": "HCL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_chroma",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-HCL.html#HCL",
        "fct-type": "function",
        "title": "hcl_chroma"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "hcl_chroma",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_hue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "!Angle",
        "fct-source": "src/RSAGL-Color-HCL.html#HCL",
        "fct-type": "function",
        "title": "hcl_hue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "hcl_hue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_luminance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.HCL",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-HCL.html#HCL",
        "fct-type": "function",
        "title": "hcl_luminance"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color HCL",
        "module": "RSAGL.Color.HCL",
        "name": "hcl_luminance",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#",
      "description": {
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html",
        "fct-type": "module",
        "title": "LinearAdjust"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "LinearAdjust",
        "normalized": "",
        "package": "rsagl",
        "partial": "Linear Adjust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#t:LinearAdjustment",
      "description": {
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html#LinearAdjustment",
        "fct-type": "type",
        "title": "LinearAdjustment"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "LinearAdjustment",
        "normalized": "",
        "package": "rsagl",
        "partial": "Linear Adjustment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:adjustColor",
      "description": {
        "fct-descr": "\u003cp\u003eManipulate an arbitrary component of a color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "ColorChannel -\u003e LinearAdjustment -\u003e c -\u003e c'",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html#adjustColor",
        "fct-type": "function",
        "title": "adjustColor"
      },
      "index": {
        "description": "Manipulate an arbitrary component of color",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "adjustColor",
        "normalized": "ColorChannel-\u003eLinearAdjustment-\u003ea-\u003eb",
        "package": "rsagl",
        "partial": "Color",
        "signature": "ColorChannel-\u003eLinearAdjustment-\u003ec-\u003ec'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:clamp",
      "description": {
        "fct-descr": "\u003cp\u003eClamp a channel to the gamut.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "LinearAdjustment",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html#clamp",
        "fct-type": "function",
        "title": "clamp"
      },
      "index": {
        "description": "Clamp channel to the gamut",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "clamp",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:maximize",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease a channel to a maximum in-gamut value.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "LinearAdjustment",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html#maximize",
        "fct-type": "function",
        "title": "maximize"
      },
      "index": {
        "description": "Increase channel to maximum in-gamut value",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "maximize",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:minimize",
      "description": {
        "fct-descr": "\u003cp\u003eDecrease a channel to it's minimum in-gamut value.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.LinearAdjust",
        "fct-package": "rsagl",
        "fct-signature": "LinearAdjustment",
        "fct-source": "src/RSAGL-Color-LinearAdjust.html#minimize",
        "fct-type": "function",
        "title": "minimize"
      },
      "index": {
        "description": "Decrease channel to it minimum in-gamut value",
        "hierarchy": "RSAGL Color LinearAdjust",
        "module": "RSAGL.Color.LinearAdjust",
        "name": "minimize",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#",
      "description": {
        "fct-module": "RSAGL.Color.OpenGL",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-OpenGL.html",
        "fct-type": "module",
        "title": "OpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color OpenGL",
        "module": "RSAGL.Color.OpenGL",
        "name": "OpenGL",
        "normalized": "",
        "package": "rsagl",
        "partial": "Open GL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#t:ColorToOpenGL",
      "description": {
        "fct-module": "RSAGL.Color.OpenGL",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Color-OpenGL.html#ColorToOpenGL",
        "fct-type": "class",
        "title": "ColorToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color OpenGL",
        "module": "RSAGL.Color.OpenGL",
        "name": "ColorToOpenGL",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color To Open GL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#v:colorToOpenGL",
      "description": {
        "fct-module": "RSAGL.Color.OpenGL",
        "fct-package": "rsagl",
        "fct-signature": "c -\u003e Color4 GLdouble",
        "fct-source": "src/RSAGL-Color-OpenGL.html#colorToOpenGL",
        "fct-type": "method",
        "title": "colorToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color OpenGL",
        "module": "RSAGL.Color.OpenGL",
        "name": "colorToOpenGL",
        "normalized": "a-\u003eColor GLdouble",
        "package": "rsagl",
        "partial": "To Open GL",
        "signature": "c-\u003eColor GLdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-RGB.html",
        "fct-type": "module",
        "title": "RGB"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "RGB",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#t:RGB",
      "description": {
        "fct-descr": "\u003cp\u003eA color in the red-green-blue color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Color-RGB.html#RGB",
        "fct-type": "data",
        "title": "RGB"
      },
      "index": {
        "description": "color in the red-green-blue color space",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "RGB",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:RGB",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RGB.html#RGB",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "RGB",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:grayscale",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a gray color from a value in the range\n [0.0..1.0].\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#grayscale",
        "fct-type": "function",
        "title": "grayscale"
      },
      "index": {
        "description": "Construct gray color from value in the range",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "grayscale",
        "normalized": "RSdouble-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:grayscale256",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a gray color from a value in the range\n [0..255].\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "i -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#grayscale256",
        "fct-type": "function",
        "title": "grayscale256"
      },
      "index": {
        "description": "Construct gray color from value in the range",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "grayscale256",
        "normalized": "a-\u003eb",
        "package": "rsagl",
        "partial": "",
        "signature": "i-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:greyscale",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#greyscale",
        "fct-type": "function",
        "title": "greyscale"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "greyscale",
        "normalized": "RSdouble-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:greyscale256",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "i -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#greyscale256",
        "fct-type": "function",
        "title": "greyscale256"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "greyscale256",
        "normalized": "a-\u003eb",
        "package": "rsagl",
        "partial": "",
        "signature": "i-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:mapRGB",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color-RGB.html#mapRGB",
        "fct-type": "function",
        "title": "mapRGB"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "mapRGB",
        "normalized": "(RSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "(RSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from an RGB triple in the range [0.0..1.0].\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#rgb",
        "fct-type": "function",
        "title": "rgb"
      },
      "index": {
        "description": "Construct color from an RGB triple in the range",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "rgb",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb256",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from an RGB triple in the range [0..255].\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "i -\u003e i -\u003e i -\u003e c",
        "fct-source": "src/RSAGL-Color-RGB.html#rgb256",
        "fct-type": "function",
        "title": "rgb256"
      },
      "index": {
        "description": "Construct color from an RGB triple in the range",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "rgb256",
        "normalized": "a-\u003ea-\u003ea-\u003eb",
        "package": "rsagl",
        "partial": "",
        "signature": "i-\u003ei-\u003ei-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_blue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-RGB.html#RGB",
        "fct-type": "function",
        "title": "rgb_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "rgb_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_green",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-RGB.html#RGB",
        "fct-type": "function",
        "title": "rgb_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "rgb_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_red",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "!RSdouble",
        "fct-source": "src/RSAGL-Color-RGB.html#RGB",
        "fct-type": "function",
        "title": "rgb_red"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "rgb_red",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:zipRGB",
      "description": {
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble -\u003e RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color-RGB.html#zipRGB",
        "fct-type": "function",
        "title": "zipRGB"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "zipRGB",
        "normalized": "(RSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "(RSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:zipRGB3",
      "description": {
        "fct-descr": "\u003cp\u003eA combining function on three RGB values.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.RGB",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color-RGB.html#zipRGB3",
        "fct-type": "function",
        "title": "zipRGB3"
      },
      "index": {
        "description": "combining function on three RGB values",
        "hierarchy": "RSAGL Color RGB",
        "module": "RSAGL.Color.RGB",
        "name": "zipRGB3",
        "normalized": "(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html",
        "fct-type": "module",
        "title": "RSAGLColors"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "RSAGLColors",
        "normalized": "",
        "package": "rsagl",
        "partial": "RSAGLColors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:aqua",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#aqua",
        "fct-type": "function",
        "title": "aqua"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "aqua",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:beige",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#beige",
        "fct-type": "function",
        "title": "beige"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "beige",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:black",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#black",
        "fct-type": "function",
        "title": "black"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "black",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:blackbody",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#blackbody",
        "fct-type": "function",
        "title": "blackbody"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "blackbody",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#blue",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:bright_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#bright_green",
        "fct-type": "function",
        "title": "bright_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "bright_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:brown",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#brown",
        "fct-type": "function",
        "title": "brown"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "brown",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:cyan",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#cyan",
        "fct-type": "function",
        "title": "cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "cyan",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#dark_blue",
        "fct-type": "function",
        "title": "dark_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "dark_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#dark_green",
        "fct-type": "function",
        "title": "dark_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "dark_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_pink",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#dark_pink",
        "fct-type": "function",
        "title": "dark_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "dark_pink",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_purple",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#dark_purple",
        "fct-type": "function",
        "title": "dark_purple"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "dark_purple",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:forest_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#forest_green",
        "fct-type": "function",
        "title": "forest_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "forest_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#green",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:grey",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#grey",
        "fct-type": "function",
        "title": "grey"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "grey",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:hot_pink",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#hot_pink",
        "fct-type": "function",
        "title": "hot_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "hot_pink",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:indigo",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#indigo",
        "fct-type": "function",
        "title": "indigo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "indigo",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lavender",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#lavender",
        "fct-type": "function",
        "title": "lavender"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "lavender",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#light_blue",
        "fct-type": "function",
        "title": "light_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "light_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_brown",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#light_brown",
        "fct-type": "function",
        "title": "light_brown"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "light_brown",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#light_green",
        "fct-type": "function",
        "title": "light_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "light_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_pink",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#light_pink",
        "fct-type": "function",
        "title": "light_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "light_pink",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_purple",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#light_purple",
        "fct-type": "function",
        "title": "light_purple"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "light_purple",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lilac",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#lilac",
        "fct-type": "function",
        "title": "lilac"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "lilac",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lime",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#lime",
        "fct-type": "function",
        "title": "lime"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "lime",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lime_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#lime_green",
        "fct-type": "function",
        "title": "lime_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "lime_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:magenta",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#magenta",
        "fct-type": "function",
        "title": "magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "magenta",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:maroon",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#maroon",
        "fct-type": "function",
        "title": "maroon"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "maroon",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:mauve",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#mauve",
        "fct-type": "function",
        "title": "mauve"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "mauve",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:mustard",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#mustard",
        "fct-type": "function",
        "title": "mustard"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "mustard",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:navy_blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#navy_blue",
        "fct-type": "function",
        "title": "navy_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "navy_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:olive",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#olive",
        "fct-type": "function",
        "title": "olive"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "olive",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:olive_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#olive_green",
        "fct-type": "function",
        "title": "olive_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "olive_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:orange",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#orange",
        "fct-type": "function",
        "title": "orange"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "orange",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:pale_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#pale_green",
        "fct-type": "function",
        "title": "pale_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "pale_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:peach",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#peach",
        "fct-type": "function",
        "title": "peach"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "peach",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:periwinkle",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#periwinkle",
        "fct-type": "function",
        "title": "periwinkle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "periwinkle",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:pink",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#pink",
        "fct-type": "function",
        "title": "pink"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "pink",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:purple",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#purple",
        "fct-type": "function",
        "title": "purple"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "purple",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:red",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#red",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "red",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:royal_blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#royal_blue",
        "fct-type": "function",
        "title": "royal_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "royal_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:salmon",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#salmon",
        "fct-type": "function",
        "title": "salmon"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "salmon",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:sea_green",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#sea_green",
        "fct-type": "function",
        "title": "sea_green"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "sea_green",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:sky_blue",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#sky_blue",
        "fct-type": "function",
        "title": "sky_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "sky_blue",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:tan",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "tan",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:teal",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#teal",
        "fct-type": "function",
        "title": "teal"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "teal",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:turquoise",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#turquoise",
        "fct-type": "function",
        "title": "turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "turquoise",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:violet",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#violet",
        "fct-type": "function",
        "title": "violet"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "violet",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:white",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#white",
        "fct-type": "function",
        "title": "white"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "white",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:yellow",
      "description": {
        "fct-module": "RSAGL.Color.RSAGLColors",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Color-RSAGLColors.html#yellow",
        "fct-type": "function",
        "title": "yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color RSAGLColors",
        "module": "RSAGL.Color.RSAGLColors",
        "name": "yellow",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#",
      "description": {
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color-Spaces.html",
        "fct-type": "module",
        "title": "Spaces"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "Spaces",
        "normalized": "",
        "package": "rsagl",
        "partial": "Spaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_space_cmy",
      "description": {
        "fct-descr": "\u003cp\u003eThe subtractive Cyan-Magenta-Yellow color space.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "AffineColorSpace",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_space_cmy",
        "fct-type": "function",
        "title": "color_space_cmy"
      },
      "index": {
        "description": "The subtractive Cyan-Magenta-Yellow color space",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_space_cmy",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_space_neutral",
      "description": {
        "fct-descr": "\u003cp\u003eThe RGB color space with neutral gray as the\n origin.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "AffineColorSpace",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_space_neutral",
        "fct-type": "function",
        "title": "color_space_neutral"
      },
      "index": {
        "description": "The RGB color space with neutral gray as the origin",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_space_neutral",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_blue_yellow_iso",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel with an isotropic Blue-Yellow channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_wheel_blue_yellow_iso",
        "fct-type": "function",
        "title": "color_wheel_blue_yellow_iso"
      },
      "index": {
        "description": "color wheel with an isotropic Blue-Yellow channel The hue definition is identical to color wheel rgbl",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_wheel_blue_yellow_iso",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_cmyk",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel in the subtractive Cyan-Magenta-Yellow color space.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n This color wheel uses a simple definition of black,\n \u003ccode\u003e(cyan + magenta + yellow) / 3\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_wheel_cmyk",
        "fct-type": "function",
        "title": "color_wheel_cmyk"
      },
      "index": {
        "description": "color wheel in the subtractive Cyan-Magenta-Yellow color space The hue definition is identical to color wheel rgbl This color wheel uses simple definition of black cyan magenta yellow",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_wheel_cmyk",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_green_magenta_iso",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel with an isotropic Green-Magenta channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_wheel_green_magenta_iso",
        "fct-type": "function",
        "title": "color_wheel_green_magenta_iso"
      },
      "index": {
        "description": "color wheel with an isotropic Green-Magenta channel The hue definition is identical to color wheel rgbl",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_wheel_green_magenta_iso",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_red_cyan_iso",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel with an isotropic Red-Cyan channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_wheel_red_cyan_iso",
        "fct-type": "function",
        "title": "color_wheel_red_cyan_iso"
      },
      "index": {
        "description": "color wheel with an isotropic Red-Cyan channel The hue definition is identical to color wheel rgbl",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_wheel_red_cyan_iso",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_rgb_brightness",
      "description": {
        "fct-descr": "\u003cp\u003eA color wheel using a simple definition of brightness,\n \u003ccode\u003e(red + green + blue) / 3\u003c/code\u003e.  The hue definition is\n identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color.Spaces",
        "fct-package": "rsagl",
        "fct-signature": "ColorWheel",
        "fct-source": "src/RSAGL-Color-Spaces.html#color_wheel_rgb_brightness",
        "fct-type": "function",
        "title": "color_wheel_rgb_brightness"
      },
      "index": {
        "description": "color wheel using simple definition of brightness red green blue The hue definition is identical to color wheel rgbl",
        "hierarchy": "RSAGL Color Spaces",
        "module": "RSAGL.Color.Spaces",
        "name": "color_wheel_rgb_brightness",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#",
      "description": {
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Color.html",
        "fct-type": "module",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "Color",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#t:RGBA",
      "description": {
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Color.html#RGBA",
        "fct-type": "type",
        "title": "RGBA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "RGBA",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:filterRGB",
      "description": {
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "RGB -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color.html#filterRGB",
        "fct-type": "function",
        "title": "filterRGB"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "filterRGB",
        "normalized": "RGB-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "RGB-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:filterRGBLinear",
      "description": {
        "fct-descr": "\u003cp\u003emaps an RGB color between a black point and a white point.\n The first parameter, the black point, will map to RGB 0 0 0.\n The second parameter, the white point, will map to RGB 1 1 1.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "RGB -\u003e RGB -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color.html#filterRGBLinear",
        "fct-type": "function",
        "title": "filterRGBLinear"
      },
      "index": {
        "description": "maps an RGB color between black point and white point The first parameter the black point will map to RGB The second parameter the white point will map to RGB",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "filterRGBLinear",
        "normalized": "RGB-\u003eRGB-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGBLinear",
        "signature": "RGB-\u003eRGB-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:invertRGB",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic inverse of a color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Color.html#invertRGB",
        "fct-type": "function",
        "title": "invertRGB"
      },
      "index": {
        "description": "Arithmetic inverse of color",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "invertRGB",
        "normalized": "RGB-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "RGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:minRGB",
      "description": {
        "fct-descr": "\u003cp\u003eGet the minimum of the three RGB components.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "RGB -\u003e RSdouble",
        "fct-source": "src/RSAGL-Color.html#minRGB",
        "fct-type": "function",
        "title": "minRGB"
      },
      "index": {
        "description": "Get the minimum of the three RGB components",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "minRGB",
        "normalized": "RGB-\u003eRSdouble",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "RGB-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:rgba",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an RGBA color.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Color",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RGBA",
        "fct-source": "src/RSAGL-Color.html#rgba",
        "fct-type": "function",
        "title": "rgba"
      },
      "index": {
        "description": "Construct an RGBA color",
        "hierarchy": "RSAGL Color",
        "module": "RSAGL.Color",
        "name": "rgba",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRGBA",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRGBA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#",
      "description": {
        "fct-module": "RSAGL.Extras.ColorPhysics",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Extras-ColorPhysics.html",
        "fct-type": "module",
        "title": "ColorPhysics"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Extras ColorPhysics",
        "module": "RSAGL.Extras.ColorPhysics",
        "name": "ColorPhysics",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Physics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:blackBody",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates the intensity of black body radiation in terms of temperature and wavelength, as percieved by the human eye\n with a white point at which all wavelengths equal 1.0 at 5800K.\n Accepts temperature in Kelvins (K) and wavelength in nanometers (nm).\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.ColorPhysics",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble",
        "fct-source": "src/RSAGL-Extras-ColorPhysics.html#blackBody",
        "fct-type": "function",
        "title": "blackBody"
      },
      "index": {
        "description": "Indicates the intensity of black body radiation in terms of temperature and wavelength as percieved by the human eye with white point at which all wavelengths equal at Accepts temperature in Kelvins and wavelength in nanometers nm",
        "hierarchy": "RSAGL Extras ColorPhysics",
        "module": "RSAGL.Extras.ColorPhysics",
        "name": "blackBody",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble",
        "package": "rsagl",
        "partial": "Body",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:blackBodyRGB",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates the percieved color of a black body radiator, where \u003ccode\u003ergb 1.0 1.0 1.0\u003c/code\u003e is the white point representing 5800K.\n Accepts temperature in Kelvins (K).  It is suggested to use \u003ccode\u003emaximizeRGB\u003c/code\u003e or some other filter as very dark or overbright\n colors are easily generated from this function.  In particular \u003ccode\u003emaximizeRGB . blackBodyRGB\u003c/code\u003e tends to approach roughly\n \u003ccode\u003ergb 0.0 0.0 1.0\u003c/code\u003e for very low temperatures and roughly \u003ccode\u003ergb 0.50 0.53 1.0\u003c/code\u003e for very high temperatures.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.ColorPhysics",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB",
        "fct-source": "src/RSAGL-Extras-ColorPhysics.html#blackBodyRGB",
        "fct-type": "function",
        "title": "blackBodyRGB"
      },
      "index": {
        "description": "Indicates the percieved color of black body radiator where rgb is the white point representing Accepts temperature in Kelvins It is suggested to use maximizeRGB or some other filter as very dark or overbright colors are easily generated from this function In particular maximizeRGB blackBodyRGB tends to approach roughly rgb for very low temperatures and roughly rgb for very high temperatures",
        "hierarchy": "RSAGL Extras ColorPhysics",
        "module": "RSAGL.Extras.ColorPhysics",
        "name": "blackBodyRGB",
        "normalized": "RSdouble-\u003eRGB",
        "package": "rsagl",
        "partial": "Body RGB",
        "signature": "RSdouble-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:plancksLaw",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates planck's law respecting blackbody radiation.\n Accepts temperature in Kelvins (K) and wavelength in nanometers (nm).\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.ColorPhysics",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble",
        "fct-source": "src/RSAGL-Extras-ColorPhysics.html#plancksLaw",
        "fct-type": "function",
        "title": "plancksLaw"
      },
      "index": {
        "description": "Evaluates planck law respecting blackbody radiation Accepts temperature in Kelvins and wavelength in nanometers nm",
        "hierarchy": "RSAGL Extras ColorPhysics",
        "module": "RSAGL.Extras.ColorPhysics",
        "name": "plancksLaw",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble",
        "package": "rsagl",
        "partial": "Law",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:spectralRGB",
      "description": {
        "fct-descr": "\u003cp\u003eInterprets a spectral function as an \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color by sampling in the red, green, blue, and indigo wavelengths.\n This is pretty rough, and actually interprets monochromatic spectral yellow or monochromatic spectral cyan as\n black, for example.  It also does not take into account the relative responsiveness of the human eye to\n different wavelengths, so passing \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplancksLaw\u003c/a\u003e\u003c/code\u003e 5800\u003c/code\u003e directly to this function results in bright green.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.ColorPhysics",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble -\u003e RSdouble) -\u003e RGB",
        "fct-source": "src/RSAGL-Extras-ColorPhysics.html#spectralRGB",
        "fct-type": "function",
        "title": "spectralRGB"
      },
      "index": {
        "description": "Interprets spectral function as an RGB color by sampling in the red green blue and indigo wavelengths This is pretty rough and actually interprets monochromatic spectral yellow or monochromatic spectral cyan as black for example It also does not take into account the relative responsiveness of the human eye to different wavelengths so passing plancksLaw directly to this function results in bright green",
        "hierarchy": "RSAGL Extras ColorPhysics",
        "module": "RSAGL.Extras.ColorPhysics",
        "name": "spectralRGB",
        "normalized": "(RSdouble-\u003eRSdouble)-\u003eRGB",
        "package": "rsagl",
        "partial": "RGB",
        "signature": "(RSdouble-\u003eRSdouble)-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate a realistic sky.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Extras-Sky.html",
        "fct-type": "module",
        "title": "Sky"
      },
      "index": {
        "description": "Generate realistic sky",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Sky",
        "normalized": "",
        "package": "rsagl",
        "partial": "Sky",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:Atmosphere",
      "description": {
        "fct-descr": "\u003cp\u003eAn atmosphere, consisting of zero or more layers of different composition.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Extras-Sky.html#Atmosphere",
        "fct-type": "type",
        "title": "Atmosphere"
      },
      "index": {
        "description": "An atmosphere consisting of zero or more layers of different composition",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Atmosphere",
        "normalized": "",
        "package": "rsagl",
        "partial": "Atmosphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:AtmosphereComposition",
      "description": {
        "fct-descr": "\u003cp\u003eA specific scattering model for an \u003ccode\u003e\u003ca\u003eAtmosphereLayer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
        "fct-type": "data",
        "title": "AtmosphereComposition"
      },
      "index": {
        "description": "specific scattering model for an AtmosphereLayer",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "AtmosphereComposition",
        "normalized": "",
        "package": "rsagl",
        "partial": "Atmosphere Composition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:AtmosphereLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA single layer of atmosphere.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
        "fct-type": "data",
        "title": "AtmosphereLayer"
      },
      "index": {
        "description": "single layer of atmosphere",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "AtmosphereLayer",
        "normalized": "",
        "package": "rsagl",
        "partial": "Atmosphere Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:SkyFilter",
      "description": {
        "fct-descr": "\u003cp\u003eAn adaptive color filter, used to set adaptive white and black points.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the result is a constant black.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Extras-Sky.html#SkyFilter",
        "fct-type": "type",
        "title": "SkyFilter"
      },
      "index": {
        "description": "An adaptive color filter used to set adaptive white and black points Returns Nothing if the result is constant black",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "SkyFilter",
        "normalized": "",
        "package": "rsagl",
        "partial": "Sky Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Air",
      "description": {
        "fct-descr": "\u003cp\u003eUses Rayleigh scattering, as though an oxygen-nitrogen atmosphere.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Air",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
        "fct-type": "function",
        "title": "Air"
      },
      "index": {
        "description": "Uses Rayleigh scattering as though an oxygen-nitrogen atmosphere",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Air",
        "normalized": "",
        "package": "rsagl",
        "partial": "Air",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:AtmosphereLayer",
      "description": {
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "AtmosphereLayer",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
        "fct-type": "function",
        "title": "AtmosphereLayer"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "AtmosphereLayer",
        "normalized": "",
        "package": "rsagl",
        "partial": "Atmosphere Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Dust",
      "description": {
        "fct-descr": "\u003cp\u003eMacroscopic colored dust spheres.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Dust RGB",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
        "fct-type": "function",
        "title": "Dust"
      },
      "index": {
        "description": "Macroscopic colored dust spheres",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Dust",
        "normalized": "",
        "package": "rsagl",
        "partial": "Dust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Fog",
      "description": {
        "fct-descr": "\u003cp\u003eUnrealistic colored fog, might be appropriate for some kind of poison gas atmosphere.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Fog RGB",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
        "fct-type": "function",
        "title": "Fog"
      },
      "index": {
        "description": "Unrealistic colored fog might be appropriate for some kind of poison gas atmosphere",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Fog",
        "normalized": "",
        "package": "rsagl",
        "partial": "Fog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Vapor",
      "description": {
        "fct-descr": "\u003cp\u003eUses Mie scattering (approximate) to give an effect similar to what we would expect\n from some kind of suspended water vapor.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Vapor",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
        "fct-type": "function",
        "title": "Vapor"
      },
      "index": {
        "description": "Uses Mie scattering approximate to give an effect similar to what we would expect from some kind of suspended water vapor",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "Vapor",
        "normalized": "",
        "package": "rsagl",
        "partial": "Vapor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:absorbtionFilter",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a filter color and modifies it on a logarithmic scale.  Helps when dealing with very dense color filters.\n In particular, atmosphereScatteringMaterial uses this.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "RGB -\u003e RGB",
        "fct-source": "src/RSAGL-Extras-Sky.html#absorbtionFilter",
        "fct-type": "function",
        "title": "absorbtionFilter"
      },
      "index": {
        "description": "Takes filter color and modifies it on logarithmic scale Helps when dealing with very dense color filters In particular atmosphereScatteringMaterial uses this",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "absorbtionFilter",
        "normalized": "RGB-\u003eRGB",
        "package": "rsagl",
        "partial": "Filter",
        "signature": "RGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereAbsorbtion",
      "description": {
        "fct-descr": "\u003cp\u003eAggrigated absorbtion from multiple \u003ccode\u003eAtmosphereLayers\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Atmosphere -\u003e Point3D -\u003e Vector3D -\u003e RGB",
        "fct-source": "src/RSAGL-Extras-Sky.html#atmosphereAbsorbtion",
        "fct-type": "function",
        "title": "atmosphereAbsorbtion"
      },
      "index": {
        "description": "Aggrigated absorbtion from multiple AtmosphereLayers",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphereAbsorbtion",
        "normalized": "Atmosphere-\u003ePoint D-\u003eVector D-\u003eRGB",
        "package": "rsagl",
        "partial": "Absorbtion",
        "signature": "Atmosphere-\u003ePoint D-\u003eVector D-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereScattering",
      "description": {
        "fct-descr": "\u003cp\u003eAggrigated scattering from multiple \u003ccode\u003eAtmosphereLayers\u003c/code\u003e and multiple suns.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Atmosphere -\u003e [(Vector3D, RGB)] -\u003e Point3D -\u003e Vector3D -\u003e RGB",
        "fct-source": "src/RSAGL-Extras-Sky.html#atmosphereScattering",
        "fct-type": "function",
        "title": "atmosphereScattering"
      },
      "index": {
        "description": "Aggrigated scattering from multiple AtmosphereLayers and multiple suns",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphereScattering",
        "normalized": "Atmosphere-\u003e[(Vector D,RGB)]-\u003ePoint D-\u003eVector D-\u003eRGB",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": "Atmosphere-\u003e[(Vector D,RGB)]-\u003ePoint D-\u003eVector D-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereScatteringMaterial",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a material for a sky sphere.  This material includes both scattering and absorbtion information.\n The material assumes the origin as the eye point, tracing to the geometric point at each vertex.  Therefore,\n this material need not be applied to an exact sphere.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Atmosphere -\u003e [(Vector3D, RGB)] -\u003e SkyFilter -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Extras-Sky.html#atmosphereScatteringMaterial",
        "fct-type": "function",
        "title": "atmosphereScatteringMaterial"
      },
      "index": {
        "description": "Generate material for sky sphere This material includes both scattering and absorbtion information The material assumes the origin as the eye point tracing to the geometric point at each vertex Therefore this material need not be applied to an exact sphere",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphereScatteringMaterial",
        "normalized": "Atmosphere-\u003e[(Vector D,RGB)]-\u003eSkyFilter-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "Scattering Material",
        "signature": "Atmosphere-\u003e[(Vector D,RGB)]-\u003eSkyFilter-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_altitude",
      "description": {
        "fct-descr": "\u003cp\u003eThe altitude to the edge of this atmosphere layer, where 1.0 is the diameter of the planet.  \n Lowering the altitude actually increases the density, and vice-versa, so double or halve the thickness\n and altitude at the same time.  A typical value is 1e-4.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
        "fct-type": "function",
        "title": "atmosphere_altitude"
      },
      "index": {
        "description": "The altitude to the edge of this atmosphere layer where is the diameter of the planet Lowering the altitude actually increases the density and vice-versa so double or halve the thickness and altitude at the same time typical value is e-4",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphere_altitude",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_composition",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents what substance this layer of atmosphere is made of.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "AtmosphereComposition",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
        "fct-type": "function",
        "title": "atmosphere_composition"
      },
      "index": {
        "description": "Represents what substance this layer of atmosphere is made of",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphere_composition",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_thickness",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the optical thickness of this layer looking straight up.  That is,\n if you reduce the altitude but hold the thickness constant, the layer will be\n essentially unchanged in the vertical direction.  A typical value is 1.0.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble",
        "fct-source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
        "fct-type": "function",
        "title": "atmosphere_thickness"
      },
      "index": {
        "description": "Represents the optical thickness of this layer looking straight up That is if you reduce the altitude but hold the thickness constant the layer will be essentially unchanged in the vertical direction typical value is",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "atmosphere_thickness",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:dynamicSkyFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSkyFilter\u003c/a\u003e\u003c/code\u003e that takes a maximum black point and a minimum white point, and applies\n these to black and white points determined by probabalistic means, and then generates a\n linear filter based on those points.  For well chosen parameters this will hopefully \n produce an appealing sky at any time of day or twilight.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e SkyFilter",
        "fct-source": "src/RSAGL-Extras-Sky.html#dynamicSkyFilter",
        "fct-type": "function",
        "title": "dynamicSkyFilter"
      },
      "index": {
        "description": "SkyFilter that takes maximum black point and minimum white point and applies these to black and white points determined by probabalistic means and then generates linear filter based on those points For well chosen parameters this will hopefully produce an appealing sky at any time of day or twilight",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "dynamicSkyFilter",
        "normalized": "RSdouble-\u003eRSdouble-\u003eSkyFilter",
        "package": "rsagl",
        "partial": "Sky Filter",
        "signature": "RSdouble-\u003eRSdouble-\u003eSkyFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:earth_atmosphere",
      "description": {
        "fct-descr": "\u003cp\u003eAn atmosphere that is fairly typical of the earth.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "Atmosphere",
        "fct-source": "src/RSAGL-Extras-Sky.html#earth_atmosphere",
        "fct-type": "function",
        "title": "earth_atmosphere"
      },
      "index": {
        "description": "An atmosphere that is fairly typical of the earth",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "earth_atmosphere",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:rawSkyFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSkyFilter\u003c/a\u003e\u003c/code\u003e that just passes through the raw RGB values, essentially, \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Extras.Sky",
        "fct-package": "rsagl",
        "fct-signature": "SkyFilter",
        "fct-source": "src/RSAGL-Extras-Sky.html#rawSkyFilter",
        "fct-type": "function",
        "title": "rawSkyFilter"
      },
      "index": {
        "description": "SkyFilter that just passes through the raw RGB values essentially id",
        "hierarchy": "RSAGL Extras Sky",
        "module": "RSAGL.Extras.Sky",
        "name": "rawSkyFilter",
        "normalized": "",
        "package": "rsagl",
        "partial": "Sky Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html",
        "fct-type": "module",
        "title": "BakedModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "BakedModel",
        "normalized": "",
        "package": "rsagl",
        "partial": "Baked Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#t:BakedSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html#BakedSurface",
        "fct-type": "data",
        "title": "BakedSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "BakedSurface",
        "normalized": "",
        "package": "rsagl",
        "partial": "Baked Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:bakeSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "(IO () -\u003e IO ()) -\u003e Bool -\u003e [(PrimitiveMode, [a])] -\u003e IO BakedSurface",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html#bakeSurface",
        "fct-type": "function",
        "title": "bakeSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "bakeSurface",
        "normalized": "(IO()-\u003eIO())-\u003eBool-\u003e[(PrimitiveMode,[a])]-\u003eIO BakedSurface",
        "package": "rsagl",
        "partial": "Surface",
        "signature": "(IO()-\u003eIO())-\u003eBool-\u003e[(PrimitiveMode,[a])]-\u003eIO BakedSurface"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:freeSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "BakedSurface -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html#freeSurface",
        "fct-type": "function",
        "title": "freeSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "freeSurface",
        "normalized": "BakedSurface-\u003eIO()",
        "package": "rsagl",
        "partial": "Surface",
        "signature": "BakedSurface-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:surfaceToOpenGL",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "BakedSurface -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html#surfaceToOpenGL",
        "fct-type": "function",
        "title": "surfaceToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "surfaceToOpenGL",
        "normalized": "BakedSurface-\u003eIO()",
        "package": "rsagl",
        "partial": "To Open GL",
        "signature": "BakedSurface-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:tesselatedElementToOpenGL",
      "description": {
        "fct-module": "RSAGL.Modeling.BakedModel",
        "fct-package": "rsagl",
        "fct-signature": "Bool -\u003e TesselatedElement a -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-BakedModel.html#tesselatedElementToOpenGL",
        "fct-type": "function",
        "title": "tesselatedElementToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling BakedModel",
        "module": "RSAGL.Modeling.BakedModel",
        "name": "tesselatedElementToOpenGL",
        "normalized": "Bool-\u003eTesselatedElement a-\u003eIO()",
        "package": "rsagl",
        "partial": "Element To Open GL",
        "signature": "Bool-\u003eTesselatedElement a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Deformation",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Deformation.html",
        "fct-type": "module",
        "title": "Deformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Deformation",
        "module": "RSAGL.Modeling.Deformation",
        "name": "Deformation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Deformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#t:Deformation",
      "description": {
        "fct-descr": "\u003cp\u003eA deformation of a surface.  These come in two types: a deformation that\n modifies only the shape of a surface, leaving the normal vectors to\n be recalculated automatically, or a deformation that modified both\n the shape and the normal vectors explicitly.\n\u003c/p\u003e\u003cp\u003eFor example, the deformation function of type \u003ccode\u003e(Point3D -\u003e Ponit3D)\u003c/code\u003e\n depends on automatic differentiation to determine the new surface normals.\n\u003c/p\u003e\u003cp\u003eOn the other hand, an affine transformation applied as a deformation\n can quickly and correctly compute the new surface normals.\n\u003c/p\u003e\u003cp\u003eFinally, one might want to construct a deformation that modifies\n the surface normals while leaving the shape intact -- this is\n perfectly legal.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Deformation",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Deformation.html#Deformation",
        "fct-type": "type",
        "title": "Deformation"
      },
      "index": {
        "description": "deformation of surface These come in two types deformation that modifies only the shape of surface leaving the normal vectors to be recalculated automatically or deformation that modified both the shape and the normal vectors explicitly For example the deformation function of type Point3D Ponit3D depends on automatic differentiation to determine the new surface normals On the other hand an affine transformation applied as deformation can quickly and correctly compute the new surface normals Finally one might want to construct deformation that modifies the surface normals while leaving the shape intact this is perfectly legal",
        "hierarchy": "RSAGL Modeling Deformation",
        "module": "RSAGL.Modeling.Deformation",
        "name": "Deformation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Deformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#t:DeformationClass",
      "description": {
        "fct-descr": "\u003cp\u003eA convenienve class to convert common descriptions of deformations\n into the canonical representation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Deformation",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Modeling-Deformation.html#DeformationClass",
        "fct-type": "class",
        "title": "DeformationClass"
      },
      "index": {
        "description": "convenienve class to convert common descriptions of deformations into the canonical representation",
        "hierarchy": "RSAGL Modeling Deformation",
        "module": "RSAGL.Modeling.Deformation",
        "name": "DeformationClass",
        "normalized": "",
        "package": "rsagl",
        "partial": "Deformation Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#v:constrain",
      "description": {
        "fct-module": "RSAGL.Modeling.Deformation",
        "fct-package": "rsagl",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Auxiliary-Auxiliary.html#constrain",
        "fct-type": "function",
        "title": "constrain"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Deformation",
        "module": "RSAGL.Modeling.Deformation",
        "name": "constrain",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#v:deformation",
      "description": {
        "fct-module": "RSAGL.Modeling.Deformation",
        "fct-package": "rsagl",
        "fct-signature": "a -\u003e Deformation",
        "fct-source": "src/RSAGL-Modeling-Deformation.html#deformation",
        "fct-type": "method",
        "title": "deformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Deformation",
        "module": "RSAGL.Modeling.Deformation",
        "name": "deformation",
        "normalized": "a-\u003eDeformation",
        "package": "rsagl",
        "partial": "",
        "signature": "a-\u003eDeformation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Extrusion",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Extrusion.html",
        "fct-type": "module",
        "title": "Extrusion"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Extrusion",
        "module": "RSAGL.Modeling.Extrusion",
        "name": "Extrusion",
        "normalized": "",
        "package": "rsagl",
        "partial": "Extrusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrude",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general form of an extrusion.  Requires first a\n control curve for orientation, for example the center of\n a torus or a vector that simply never runs parallel\n to the spine.  Second, the spine of the extrusion,\n and third the shape to be extruded.\n\u003c/p\u003e\u003cp\u003eThe +Y axis of the shape will be oriented toward\n the control curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Extrusion",
        "fct-package": "rsagl",
        "fct-signature": "Curve (Either Point3D Vector3D) -\u003e Curve Point3D -\u003e Curve (Curve Point3D) -\u003e Surface Point3D",
        "fct-source": "src/RSAGL-Modeling-Extrusion.html#extrude",
        "fct-type": "function",
        "title": "extrude"
      },
      "index": {
        "description": "The most general form of an extrusion Requires first control curve for orientation for example the center of torus or vector that simply never runs parallel to the spine Second the spine of the extrusion and third the shape to be extruded The axis of the shape will be oriented toward the control curve",
        "hierarchy": "RSAGL Modeling Extrusion",
        "module": "RSAGL.Modeling.Extrusion",
        "name": "extrude",
        "normalized": "Curve(Either Point D Vector D)-\u003eCurve Point D-\u003eCurve(Curve Point D)-\u003eSurface Point D",
        "package": "rsagl",
        "partial": "",
        "signature": "Curve(Either Point D Vector D)-\u003eCurve Point D-\u003eCurve(Curve Point D)-\u003eSurface Point D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrudePrism",
      "description": {
        "fct-descr": "\u003cp\u003eAn extrusion whose spine is a straight line, with radii specified\n at both ends.  In this case only the extruded shape needs to be\n specified as a curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Extrusion",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e (Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Curve Point3D -\u003e Surface Point3D",
        "fct-source": "src/RSAGL-Modeling-Extrusion.html#extrudePrism",
        "fct-type": "function",
        "title": "extrudePrism"
      },
      "index": {
        "description": "An extrusion whose spine is straight line with radii specified at both ends In this case only the extruded shape needs to be specified as curve",
        "hierarchy": "RSAGL Modeling Extrusion",
        "module": "RSAGL.Modeling.Extrusion",
        "name": "extrudePrism",
        "normalized": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eSurface Point D",
        "package": "rsagl",
        "partial": "Prism",
        "signature": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eSurface Point D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrudeTube",
      "description": {
        "fct-descr": "\u003cp\u003eA tubular extrusion using taking a radius and a spine.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Extrusion",
        "fct-package": "rsagl",
        "fct-signature": "Curve RSdouble -\u003e Curve Point3D -\u003e Surface Point3D",
        "fct-source": "src/RSAGL-Modeling-Extrusion.html#extrudeTube",
        "fct-type": "function",
        "title": "extrudeTube"
      },
      "index": {
        "description": "tubular extrusion using taking radius and spine",
        "hierarchy": "RSAGL Modeling Extrusion",
        "module": "RSAGL.Modeling.Extrusion",
        "name": "extrudeTube",
        "normalized": "Curve RSdouble-\u003eCurve Point D-\u003eSurface Point D",
        "package": "rsagl",
        "partial": "Tube",
        "signature": "Curve RSdouble-\u003eCurve Point D-\u003eSurface Point D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRSAGL.Material handles properties of surfaces such as color, shininess, and transparency\n including procedural textures but not including anything touching the normal vector, such\n as bumpiness.  Materials are handled using layers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Material.html",
        "fct-type": "module",
        "title": "Material"
      },
      "index": {
        "description": "RSAGL.Material handles properties of surfaces such as color shininess and transparency including procedural textures but not including anything touching the normal vector such as bumpiness Materials are handled using layers",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "Material",
        "normalized": "",
        "package": "rsagl",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:Material",
      "description": {
        "fct-descr": "\u003cp\u003eA stack of \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003es.  \u003ccode\u003e\u003ca\u003eMaterial\u003c/a\u003e\u003c/code\u003e is smart about compressing multiple layers into the least of number of equivalent layers.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Material.html#Material",
        "fct-type": "data",
        "title": "Material"
      },
      "index": {
        "description": "stack of MaterialLayer Material is smart about compressing multiple layers into the least of number of equivalent layers",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "Material",
        "normalized": "",
        "package": "rsagl",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:MaterialLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is a layer of material some material quality (diffuse, transparent, emissive, or specular highlight).  \n \u003ccode\u003eMaterialLayers\u003c/code\u003e are rendered one on top of another to create layered effects.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Material.html#MaterialLayer",
        "fct-type": "data",
        "title": "MaterialLayer"
      },
      "index": {
        "description": "MaterialLayer is layer of material some material quality diffuse transparent emissive or specular highlight MaterialLayers are rendered one on top of another to create layered effects",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "MaterialLayer",
        "normalized": "",
        "package": "rsagl",
        "partial": "Material Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:MaterialSurface",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMaterialSurface\u003c/a\u003e\u003c/code\u003e is parameterized either on RGB or RGBA, depending\n on whether or not the \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is capable of transparency.\n \u003ccode\u003e\u003ca\u003eMaterialSurface\u003c/a\u003e\u003c/code\u003es that are only one color (as opposed to procedural textures)\n can be described using \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e, for example \u003ca\u003epure red\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Material.html#MaterialSurface",
        "fct-type": "type",
        "title": "MaterialSurface"
      },
      "index": {
        "description": "MaterialSurface is parameterized either on RGB or RGBA depending on whether or not the MaterialLayer is capable of transparency MaterialSurface that are only one color as opposed to procedural textures can be described using pure for example pure red",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "MaterialSurface",
        "normalized": "",
        "package": "rsagl",
        "partial": "Material Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:diffuseLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA simple colored material.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialSurface RGB -\u003e Material",
        "fct-source": "src/RSAGL-Modeling-Material.html#diffuseLayer",
        "fct-type": "function",
        "title": "diffuseLayer"
      },
      "index": {
        "description": "simple colored material",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "diffuseLayer",
        "normalized": "MaterialSurface RGB-\u003eMaterial",
        "package": "rsagl",
        "partial": "Layer",
        "signature": "MaterialSurface RGB-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:emissiveLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA material that seems to glow.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialSurface RGB -\u003e Material",
        "fct-source": "src/RSAGL-Modeling-Material.html#emissiveLayer",
        "fct-type": "function",
        "title": "emissiveLayer"
      },
      "index": {
        "description": "material that seems to glow",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "emissiveLayer",
        "normalized": "MaterialSurface RGB-\u003eMaterial",
        "package": "rsagl",
        "partial": "Layer",
        "signature": "MaterialSurface RGB-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:filteringLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA material that doesn't reflect or emit life, but simply performs a multiplicative filter on whatever is behind it.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialSurface RGB -\u003e Material",
        "fct-source": "src/RSAGL-Modeling-Material.html#filteringLayer",
        "fct-type": "function",
        "title": "filteringLayer"
      },
      "index": {
        "description": "material that doesn reflect or emit life but simply performs multiplicative filter on whatever is behind it",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "filteringLayer",
        "normalized": "MaterialSurface RGB-\u003eMaterial",
        "package": "rsagl",
        "partial": "Layer",
        "signature": "MaterialSurface RGB-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:isOpaqueLayer",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is completely opaque.  A layer under an opaque layer is not visible.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialLayer -\u003e Bool",
        "fct-source": "src/RSAGL-Modeling-Material.html#isOpaqueLayer",
        "fct-type": "function",
        "title": "isOpaqueLayer"
      },
      "index": {
        "description": "True if the MaterialLayer is completely opaque layer under an opaque layer is not visible",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "isOpaqueLayer",
        "normalized": "MaterialLayer-\u003eBool",
        "package": "rsagl",
        "partial": "Opaque Layer",
        "signature": "MaterialLayer-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialComplexity",
      "description": {
        "fct-descr": "\u003cp\u003eAnswers a complexity heuristic for a \u003ccode\u003e\u003ca\u003eMaterial\u003c/a\u003e\u003c/code\u003e.  Result is a small integer greater than or equal to zero.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "Material -\u003e Integer",
        "fct-source": "src/RSAGL-Modeling-Material.html#materialComplexity",
        "fct-type": "function",
        "title": "materialComplexity"
      },
      "index": {
        "description": "Answers complexity heuristic for Material Result is small integer greater than or equal to zero",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "materialComplexity",
        "normalized": "Material-\u003eInteger",
        "package": "rsagl",
        "partial": "Complexity",
        "signature": "Material-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialIsEmpty",
      "description": {
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "Material -\u003e Bool",
        "fct-source": "src/RSAGL-Modeling-Material.html#materialIsEmpty",
        "fct-type": "function",
        "title": "materialIsEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "materialIsEmpty",
        "normalized": "Material-\u003eBool",
        "package": "rsagl",
        "partial": "Is Empty",
        "signature": "Material-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerRelevant",
      "description": {
        "fct-descr": "\u003cp\u003eGet a relevance layer for a surface.  Purely irrelevant materials can be removed without changing the\n appearance of a model.  Irrelevant triangles can also be selectively culled from a model.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialLayer -\u003e MaterialSurface Bool",
        "fct-source": "src/RSAGL-Modeling-Material.html#materialLayerRelevant",
        "fct-type": "function",
        "title": "materialLayerRelevant"
      },
      "index": {
        "description": "Get relevance layer for surface Purely irrelevant materials can be removed without changing the appearance of model Irrelevant triangles can also be selectively culled from model",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "materialLayerRelevant",
        "normalized": "MaterialLayer-\u003eMaterialSurface Bool",
        "package": "rsagl",
        "partial": "Layer Relevant",
        "signature": "MaterialLayer-\u003eMaterialSurface Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerSurface",
      "description": {
        "fct-descr": "\u003cp\u003eGet the color information for a \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialLayer -\u003e MaterialSurface RGBA",
        "fct-source": "src/RSAGL-Modeling-Material.html#materialLayerSurface",
        "fct-type": "function",
        "title": "materialLayerSurface"
      },
      "index": {
        "description": "Get the color information for MaterialLayer",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "materialLayerSurface",
        "normalized": "MaterialLayer-\u003eMaterialSurface RGBA",
        "package": "rsagl",
        "partial": "Layer Surface",
        "signature": "MaterialLayer-\u003eMaterialSurface RGBA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerToOpenGLWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IO action wrapped in OpenGL state appropriate for the layer in question.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialLayer -\u003e IO () -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-Material.html#materialLayerToOpenGLWrapper",
        "fct-type": "function",
        "title": "materialLayerToOpenGLWrapper"
      },
      "index": {
        "description": "Run an IO action wrapped in OpenGL state appropriate for the layer in question",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "materialLayerToOpenGLWrapper",
        "normalized": "MaterialLayer-\u003eIO()-\u003eIO()",
        "package": "rsagl",
        "partial": "Layer To Open GLWrapper",
        "signature": "MaterialLayer-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:specularLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA shiny material with specular highlight, including a specular exponent parameter.\n Larger exponents give tighter specular highlights, but should be less than 128 (larger than\n that wouldn't have very much effect anyway).  Typical values are 1-10 or so.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialSurface RGB -\u003e GLfloat -\u003e Material",
        "fct-source": "src/RSAGL-Modeling-Material.html#specularLayer",
        "fct-type": "function",
        "title": "specularLayer"
      },
      "index": {
        "description": "shiny material with specular highlight including specular exponent parameter Larger exponents give tighter specular highlights but should be less than larger than that wouldn have very much effect anyway Typical values are or so",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "specularLayer",
        "normalized": "MaterialSurface RGB-\u003eGLfloat-\u003eMaterial",
        "package": "rsagl",
        "partial": "Layer",
        "signature": "MaterialSurface RGB-\u003eGLfloat-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:toLayers",
      "description": {
        "fct-descr": "\u003cp\u003eSplit open a Material into its component layers.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "Material -\u003e [MaterialLayer]",
        "fct-source": "src/RSAGL-Modeling-Material.html#toLayers",
        "fct-type": "function",
        "title": "toLayers"
      },
      "index": {
        "description": "Split open Material into its component layers",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "toLayers",
        "normalized": "Material-\u003e[MaterialLayer]",
        "package": "rsagl",
        "partial": "Layers",
        "signature": "Material-\u003e[MaterialLayer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:transparentLayer",
      "description": {
        "fct-descr": "\u003cp\u003eA transparent colored material.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Material",
        "fct-package": "rsagl",
        "fct-signature": "MaterialSurface RGBA -\u003e Material",
        "fct-source": "src/RSAGL-Modeling-Material.html#transparentLayer",
        "fct-type": "function",
        "title": "transparentLayer"
      },
      "index": {
        "description": "transparent colored material",
        "hierarchy": "RSAGL Modeling Material",
        "module": "RSAGL.Modeling.Material",
        "name": "transparentLayer",
        "normalized": "MaterialSurface RGBA-\u003eMaterial",
        "package": "rsagl",
        "partial": "Layer",
        "signature": "MaterialSurface RGBA-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "Model",
        "normalized": "",
        "package": "rsagl",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:BakedModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Model.html#BakedModel",
        "fct-type": "data",
        "title": "BakedModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "BakedModel",
        "normalized": "",
        "package": "rsagl",
        "partial": "Baked Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:IntermediateModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Model.html#IntermediateModel",
        "fct-type": "data",
        "title": "IntermediateModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "IntermediateModel",
        "normalized": "",
        "package": "rsagl",
        "partial": "Intermediate Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:MaterialM",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Model.html#MaterialM",
        "fct-type": "data",
        "title": "MaterialM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "MaterialM",
        "normalized": "",
        "package": "rsagl",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:Model",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Model.html#Model",
        "fct-type": "type",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "Model",
        "normalized": "",
        "package": "rsagl",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:ModelType",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Modeling-Model.html#ModelType",
        "fct-type": "class",
        "title": "ModelType"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "ModelType",
        "normalized": "",
        "package": "rsagl",
        "partial": "Model Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:Modeling",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Model.html#Modeling",
        "fct-type": "type",
        "title": "Modeling"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "Modeling",
        "normalized": "",
        "package": "rsagl",
        "partial": "Modeling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:ModelingM",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Model.html#ModelingM",
        "fct-type": "data",
        "title": "ModelingM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "ModelingM",
        "normalized": "",
        "package": "rsagl",
        "partial": "Modeling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:MonadAffine",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Modeling-Model.html#MonadAffine",
        "fct-type": "class",
        "title": "MonadAffine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "MonadAffine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Monad Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:RGBAFunction",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Model.html#RGBAFunction",
        "fct-type": "type",
        "title": "RGBAFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "RGBAFunction",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGBAFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:RGBFunction",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Model.html#RGBFunction",
        "fct-type": "type",
        "title": "RGBFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "RGBFunction",
        "normalized": "",
        "package": "rsagl",
        "partial": "RGBFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:adaptive",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#adaptive",
        "fct-type": "function",
        "title": "adaptive"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "adaptive",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:affine",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation -\u003e m ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#affine",
        "fct-type": "method",
        "title": "affine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "affine",
        "normalized": "AffineTransformation-\u003ea()",
        "package": "rsagl",
        "partial": "",
        "signature": "AffineTransformation-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:attribute",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "attr -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#attribute",
        "fct-type": "function",
        "title": "attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "attribute",
        "normalized": "a-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "attr-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:bakeModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "IntermediateModel -\u003e IO BakedModel",
        "fct-source": "src/RSAGL-Modeling-Model.html#bakeModel",
        "fct-type": "function",
        "title": "bakeModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "bakeModel",
        "normalized": "IntermediateModel-\u003eIO BakedModel",
        "package": "rsagl",
        "partial": "Model",
        "signature": "IntermediateModel-\u003eIO BakedModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:box",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#box",
        "fct-type": "function",
        "title": "box"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "box",
        "normalized": "Point D-\u003ePoint D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003ePoint D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:buildIntermediateModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Integer -\u003e Modeling attr -\u003e IntermediateModel",
        "fct-source": "src/RSAGL-Modeling-Model.html#buildIntermediateModel",
        "fct-type": "function",
        "title": "buildIntermediateModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "buildIntermediateModel",
        "normalized": "Integer-\u003eModeling a-\u003eIntermediateModel",
        "package": "rsagl",
        "partial": "Intermediate Model",
        "signature": "Integer-\u003eModeling attr-\u003eIntermediateModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:closedCone",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#closedCone",
        "fct-type": "function",
        "title": "closedCone"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "closedCone",
        "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling a",
        "package": "rsagl",
        "partial": "Cone",
        "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:closedDisc",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#closedDisc",
        "fct-type": "function",
        "title": "closedDisc"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "closedDisc",
        "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "Disc",
        "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:deform",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "dc -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#deform",
        "fct-type": "function",
        "title": "deform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "deform",
        "normalized": "a-\u003eModeling b",
        "package": "rsagl",
        "partial": "",
        "signature": "dc-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:emissive",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#emissive",
        "fct-type": "function",
        "title": "emissive"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "emissive",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:extractModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr -\u003e Model attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#extractModel",
        "fct-type": "function",
        "title": "extractModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "extractModel",
        "normalized": "Modeling a-\u003eModel a",
        "package": "rsagl",
        "partial": "Model",
        "signature": "Modeling attr-\u003eModel attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:filtering",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#filtering",
        "fct-type": "function",
        "title": "filtering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "filtering",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:fixed",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "(Integer, Integer) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#fixed",
        "fct-type": "function",
        "title": "fixed"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "fixed",
        "normalized": "(Integer,Integer)-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "(Integer,Integer)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:freeModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "BakedModel -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#freeModel",
        "fct-type": "function",
        "title": "freeModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "freeModel",
        "normalized": "BakedModel-\u003eIO()",
        "package": "rsagl",
        "partial": "Model",
        "signature": "BakedModel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:generalSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Either (Surface Point3D) (Surface (Point3D, Vector3D)) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#generalSurface",
        "fct-type": "function",
        "title": "generalSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "generalSurface",
        "normalized": "Either(Surface Point D)(Surface(Point D,Vector D))-\u003eModeling a",
        "package": "rsagl",
        "partial": "Surface",
        "signature": "Either(Surface Point D)(Surface(Point D,Vector D))-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:hemisphere",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#hemisphere",
        "fct-type": "function",
        "title": "hemisphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "hemisphere",
        "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:intermediateModelToOpenGL",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "IntermediateModel -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#intermediateModelToOpenGL",
        "fct-type": "function",
        "title": "intermediateModelToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "intermediateModelToOpenGL",
        "normalized": "IntermediateModel-\u003eIO()",
        "package": "rsagl",
        "partial": "Model To Open GL",
        "signature": "IntermediateModel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:intermediateModelToVertexCloud",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "IntermediateModel -\u003e [SurfaceVertex3D]",
        "fct-source": "src/RSAGL-Modeling-Model.html#intermediateModelToVertexCloud",
        "fct-type": "function",
        "title": "intermediateModelToVertexCloud"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "intermediateModelToVertexCloud",
        "normalized": "IntermediateModel-\u003e[SurfaceVertex D]",
        "package": "rsagl",
        "partial": "Model To Vertex Cloud",
        "signature": "IntermediateModel-\u003e[SurfaceVertex D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:material",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "MaterialM attr () -\u003e m attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#material",
        "fct-type": "function",
        "title": "material"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "material",
        "normalized": "MaterialM a()-\u003eb a()",
        "package": "rsagl",
        "partial": "",
        "signature": "MaterialM attr()-\u003em attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:model",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#model",
        "fct-type": "function",
        "title": "model"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "model",
        "normalized": "Modeling a-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Modeling attr-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:modelInfo",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "IntermediateModel -\u003e String",
        "fct-source": "src/RSAGL-Modeling-Model.html#modelInfo",
        "fct-type": "function",
        "title": "modelInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "modelInfo",
        "normalized": "IntermediateModel-\u003eString",
        "package": "rsagl",
        "partial": "Info",
        "signature": "IntermediateModel-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:modelingToOpenGL",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Integer -\u003e Modeling attr -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#modelingToOpenGL",
        "fct-type": "function",
        "title": "modelingToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "modelingToOpenGL",
        "normalized": "Integer-\u003eModeling a-\u003eIO()",
        "package": "rsagl",
        "partial": "To Open GL",
        "signature": "Integer-\u003eModeling attr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:openCone",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#openCone",
        "fct-type": "function",
        "title": "openCone"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "openCone",
        "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling a",
        "package": "rsagl",
        "partial": "Cone",
        "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:openDisc",
      "description": {
        "fct-descr": "\u003cp\u003eA flat disc with a hole in the middle, defined in terms of it's center, normal vector, inner (hole) radius and outer radius.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#openDisc",
        "fct-type": "function",
        "title": "openDisc"
      },
      "index": {
        "description": "flat disc with hole in the middle defined in terms of it center normal vector inner hole radius and outer radius",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "openDisc",
        "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "Disc",
        "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:perspectiveSphere",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eperspectiveSphere\u003c/a\u003e\u003c/code\u003e is rendered anticipating the point from which it is to be viewed.\n Only the part of the surface of the sphere that would be visible from a vantage point is\n rendered, and otherwise the sphere seems clipped.\n\u003c/p\u003e\u003cp\u003eThis is the appropriate geometry to model the curvature of a planet from 200 kilometers altitude, for example.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble -\u003e Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#perspectiveSphere",
        "fct-type": "function",
        "title": "perspectiveSphere"
      },
      "index": {
        "description": "perspectiveSphere is rendered anticipating the point from which it is to be viewed Only the part of the surface of the sphere that would be visible from vantage point is rendered and otherwise the sphere seems clipped This is the appropriate geometry to model the curvature of planet from kilometers altitude for example",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "perspectiveSphere",
        "normalized": "Point D-\u003eRSdouble-\u003ePoint D-\u003eModeling a",
        "package": "rsagl",
        "partial": "Sphere",
        "signature": "Point D-\u003eRSdouble-\u003ePoint D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:pigment",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#pigment",
        "fct-type": "function",
        "title": "pigment"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "pigment",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:prism",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e (Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Curve Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#prism",
        "fct-type": "function",
        "title": "prism"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "prism",
        "normalized": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:quadralateral",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#quadralateral",
        "fct-type": "function",
        "title": "quadralateral"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "quadralateral",
        "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003ePoint D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003ePoint D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:regenerateNormals",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#regenerateNormals",
        "fct-type": "function",
        "title": "regenerateNormals"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "regenerateNormals",
        "normalized": "",
        "package": "rsagl",
        "partial": "Normals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:reverseOrientation",
      "description": {
        "fct-descr": "\u003cp\u003eSwap inside and outside surfaces and reverse normal vectors.  This shouldn't effect \u003ccode\u003e\u003ca\u003etwoSided\u003c/a\u003e\u003c/code\u003e surfaces in any visible way.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#reverseOrientation",
        "fct-type": "function",
        "title": "reverseOrientation"
      },
      "index": {
        "description": "Swap inside and outside surfaces and reverse normal vectors This shouldn effect twoSided surfaces in any visible way",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "reverseOrientation",
        "normalized": "Modeling a-\u003eModeling a",
        "package": "rsagl",
        "partial": "Orientation",
        "signature": "Modeling attr-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:skyHemisphere",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#skyHemisphere",
        "fct-type": "function",
        "title": "skyHemisphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "skyHemisphere",
        "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "Hemisphere",
        "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:skySphere",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#skySphere",
        "fct-type": "function",
        "title": "skySphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "skySphere",
        "normalized": "Point D-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "Sphere",
        "signature": "Point D-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:sor",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Curve Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#sor",
        "fct-type": "function",
        "title": "sor"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "sor",
        "normalized": "Curve Point D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Curve Point D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:specular",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "GLfloat -\u003e RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#specular",
        "fct-type": "function",
        "title": "specular"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "specular",
        "normalized": "GLfloat-\u003eRGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "GLfloat-\u003eRGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:sphere",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#sphere",
        "fct-type": "function",
        "title": "sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "sphere",
        "normalized": "Point D-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:splitOpaques",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "IntermediateModel -\u003e (IntermediateModel, [IntermediateModel])",
        "fct-source": "src/RSAGL-Modeling-Model.html#splitOpaques",
        "fct-type": "function",
        "title": "splitOpaques"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "splitOpaques",
        "normalized": "IntermediateModel-\u003e(IntermediateModel,[IntermediateModel])",
        "package": "rsagl",
        "partial": "Opaques",
        "signature": "IntermediateModel-\u003e(IntermediateModel,[IntermediateModel])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:tesselationHintComplexity",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Integer -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#tesselationHintComplexity",
        "fct-type": "function",
        "title": "tesselationHintComplexity"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "tesselationHintComplexity",
        "normalized": "Integer-\u003eModeling a",
        "package": "rsagl",
        "partial": "Hint Complexity",
        "signature": "Integer-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:toIntermediateModel",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "m -\u003e IntermediateModel",
        "fct-source": "src/RSAGL-Modeling-Model.html#toIntermediateModel",
        "fct-type": "method",
        "title": "toIntermediateModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "toIntermediateModel",
        "normalized": "a-\u003eIntermediateModel",
        "package": "rsagl",
        "partial": "Intermediate Model",
        "signature": "m-\u003eIntermediateModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:torus",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#torus",
        "fct-type": "function",
        "title": "torus"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "torus",
        "normalized": "RSdouble-\u003eRSdouble-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRSdouble-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:transparent",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "RGBAFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#transparent",
        "fct-type": "function",
        "title": "transparent"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "transparent",
        "normalized": "RGBAFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBAFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:triangle",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#triangle",
        "fct-type": "function",
        "title": "triangle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "triangle",
        "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:tube",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Curve (RSdouble, Point3D) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#tube",
        "fct-type": "function",
        "title": "tube"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "tube",
        "normalized": "Curve(RSdouble,Point D)-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Curve(RSdouble,Point D)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:turbulence",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "(SurfaceVertex3D -\u003e SurfaceVertex3D) -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-Model.html#turbulence",
        "fct-type": "function",
        "title": "turbulence"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "turbulence",
        "normalized": "(SurfaceVertex D-\u003eSurfaceVertex D)-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "(SurfaceVertex D-\u003eSurfaceVertex D)-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:twoSided",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "Bool -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#twoSided",
        "fct-type": "function",
        "title": "twoSided"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "twoSided",
        "normalized": "Bool-\u003eModeling a",
        "package": "rsagl",
        "partial": "Sided",
        "signature": "Bool-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:withAttribute",
      "description": {
        "fct-module": "RSAGL.Modeling.Model",
        "fct-package": "rsagl",
        "fct-signature": "(attr -\u003e Bool) -\u003e Modeling attr -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-Model.html#withAttribute",
        "fct-type": "function",
        "title": "withAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Model",
        "module": "RSAGL.Modeling.Model",
        "name": "withAttribute",
        "normalized": "(a-\u003eBool)-\u003eModeling a-\u003eModeling a",
        "package": "rsagl",
        "partial": "Attribute",
        "signature": "(attr-\u003eBool)-\u003eModeling attr-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html",
        "fct-type": "module",
        "title": "ModelingExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "ModelingExtras",
        "normalized": "",
        "package": "rsagl",
        "partial": "Modeling Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:ApplicativeWrapper",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplicativeWrapper\u003c/a\u003e\u003c/code\u003e captures an applicative entity and remembers whether the entity is pure.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "newtype",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#ApplicativeWrapper",
        "fct-type": "newtype",
        "title": "ApplicativeWrapper"
      },
      "index": {
        "description": "ApplicativeWrapper captures an applicative entity and remembers whether the entity is pure",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "ApplicativeWrapper",
        "normalized": "",
        "package": "rsagl",
        "partial": "Applicative Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:ColorFunction",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#ColorFunction",
        "fct-type": "type",
        "title": "ColorFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "ColorFunction",
        "normalized": "",
        "package": "rsagl",
        "partial": "Color Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:Pattern",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#Pattern",
        "fct-type": "type",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "Pattern",
        "normalized": "",
        "package": "rsagl",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:ApplicativeWrapper",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "ApplicativeWrapper (Either (f a) a)",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#ApplicativeWrapper",
        "fct-type": "function",
        "title": "ApplicativeWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "ApplicativeWrapper",
        "normalized": "",
        "package": "rsagl",
        "partial": "Applicative Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:blinkBoxes",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Int -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#blinkBoxes",
        "fct-type": "function",
        "title": "blinkBoxes"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "blinkBoxes",
        "normalized": "Int-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003ePattern",
        "package": "rsagl",
        "partial": "Boxes",
        "signature": "Int-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:bumps",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Pattern -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#bumps",
        "fct-type": "function",
        "title": "bumps"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "bumps",
        "normalized": "Pattern-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "Pattern-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:cloudy",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Int -\u003e RSdouble -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#cloudy",
        "fct-type": "function",
        "title": "cloudy"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "cloudy",
        "normalized": "Int-\u003eRSdouble-\u003ePattern",
        "package": "rsagl",
        "partial": "",
        "signature": "Int-\u003eRSdouble-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:directional",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#directional",
        "fct-type": "function",
        "title": "directional"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "directional",
        "normalized": "Vector D-\u003ePattern",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:disregardSurfaceNormals",
      "description": {
        "fct-descr": "\u003cp\u003eFor models where we are certain surface normals don't matter, then don't calculate them.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#disregardSurfaceNormals",
        "fct-type": "function",
        "title": "disregardSurfaceNormals"
      },
      "index": {
        "description": "For models where we are certain surface normals don matter then don calculate them",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "disregardSurfaceNormals",
        "normalized": "",
        "package": "rsagl",
        "partial": "Surface Normals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:dropRandomElements",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Int -\u003e StdGen -\u003e [a] -\u003e [a]",
        "fct-source": "src/RSAGL-Auxiliary-Auxiliary.html#dropRandomElements",
        "fct-type": "function",
        "title": "dropRandomElements"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "dropRandomElements",
        "normalized": "Int-\u003eStdGen-\u003e[a]-\u003e[a]",
        "package": "rsagl",
        "partial": "Random Elements",
        "signature": "Int-\u003eStdGen-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:fromPure",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "ApplicativeWrapper f a -\u003e Maybe a",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#fromPure",
        "fct-type": "function",
        "title": "fromPure"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "fromPure",
        "normalized": "ApplicativeWrapper a b-\u003eMaybe b",
        "package": "rsagl",
        "partial": "Pure",
        "signature": "ApplicativeWrapper f a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:glass",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#glass",
        "fct-type": "function",
        "title": "glass"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "glass",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:gradient",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#gradient",
        "fct-type": "function",
        "title": "gradient"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "gradient",
        "normalized": "Point D-\u003eVector D-\u003ePattern",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eVector D-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightDisc",
      "description": {
        "fct-descr": "\u003cp\u003eA circular height field rising off of the x-z plane.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble, RSdouble) -\u003e RSdouble -\u003e ((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#heightDisc",
        "fct-type": "function",
        "title": "heightDisc"
      },
      "index": {
        "description": "circular height field rising off of the x-z plane",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "heightDisc",
        "normalized": "(RSdouble,RSdouble)-\u003eRSdouble-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
        "package": "rsagl",
        "partial": "Disc",
        "signature": "(RSdouble,RSdouble)-\u003eRSdouble-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightField",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular height field rising off of the x-z plane.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble) -\u003e ((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#heightField",
        "fct-type": "function",
        "title": "heightField"
      },
      "index": {
        "description": "rectangular height field rising off of the x-z plane",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "heightField",
        "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
        "package": "rsagl",
        "partial": "Field",
        "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightMap",
      "description": {
        "fct-descr": "\u003cp\u003eRaises or lowers each point in a model along the y-axis according to its (x,z) coordinate.\n Typically this is used to construct height fields.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#heightMap",
        "fct-type": "function",
        "title": "heightMap"
      },
      "index": {
        "description": "Raises or lowers each point in model along the y-axis according to its coordinate Typically this is used to construct height fields",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "heightMap",
        "normalized": "((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
        "package": "rsagl",
        "partial": "Map",
        "signature": "((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:isPure",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "ApplicativeWrapper f a -\u003e Bool",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#isPure",
        "fct-type": "function",
        "title": "isPure"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "isPure",
        "normalized": "ApplicativeWrapper a b-\u003eBool",
        "package": "rsagl",
        "partial": "Pure",
        "signature": "ApplicativeWrapper f a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:metallic",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#metallic",
        "fct-type": "function",
        "title": "metallic"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "metallic",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:pattern",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Pattern -\u003e [(RSfloat, ColorFunction a)] -\u003e ColorFunction a",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#pattern",
        "fct-type": "function",
        "title": "pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "pattern",
        "normalized": "Pattern-\u003e[(RSfloat,ColorFunction a)]-\u003eColorFunction a",
        "package": "rsagl",
        "partial": "",
        "signature": "Pattern-\u003e[(RSfloat,ColorFunction a)]-\u003eColorFunction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:plastic",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "RGBFunction -\u003e MaterialM attr ()",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#plastic",
        "fct-type": "function",
        "title": "plastic"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "plastic",
        "normalized": "RGBFunction-\u003eMaterialM a()",
        "package": "rsagl",
        "partial": "",
        "signature": "RGBFunction-\u003eMaterialM attr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:regularPrism",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Integer -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#regularPrism",
        "fct-type": "function",
        "title": "regularPrism"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "regularPrism",
        "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eInteger-\u003eModeling a",
        "package": "rsagl",
        "partial": "Prism",
        "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eInteger-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:rotationGroup",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e Integer -\u003e a -\u003e [a]",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#rotationGroup",
        "fct-type": "function",
        "title": "rotationGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "rotationGroup",
        "normalized": "Vector D-\u003eInteger-\u003ea-\u003e[a]",
        "package": "rsagl",
        "partial": "Group",
        "signature": "Vector D-\u003eInteger-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:smoothbox",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#smoothbox",
        "fct-type": "function",
        "title": "smoothbox"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "smoothbox",
        "normalized": "RSdouble-\u003ePoint D-\u003ePoint D-\u003eModeling a",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003ePoint D-\u003ePoint D-\u003eModeling attr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:spherical",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#spherical",
        "fct-type": "function",
        "title": "spherical"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "spherical",
        "normalized": "Point D-\u003eRSdouble-\u003ePattern",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eRSdouble-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:toApplicative",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "ApplicativeWrapper f a -\u003e f a",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#toApplicative",
        "fct-type": "function",
        "title": "toApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "toApplicative",
        "normalized": "ApplicativeWrapper a b-\u003ea b",
        "package": "rsagl",
        "partial": "Applicative",
        "signature": "ApplicativeWrapper f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:unwrapApplicative",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "ApplicativeWrapper f a -\u003e Either (f a) a",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#unwrapApplicative",
        "fct-type": "function",
        "title": "unwrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "unwrapApplicative",
        "normalized": "ApplicativeWrapper a b-\u003eEither(a b)b",
        "package": "rsagl",
        "partial": "Applicative",
        "signature": "ApplicativeWrapper f a-\u003eEither(f a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:waves",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e Pattern",
        "fct-source": "src/RSAGL-Modeling-ModelingExtras.html#waves",
        "fct-type": "function",
        "title": "waves"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "waves",
        "normalized": "RSdouble-\u003eRSdouble-\u003ePattern",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRSdouble-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:wrapApplicative",
      "description": {
        "fct-module": "RSAGL.Modeling.ModelingExtras",
        "fct-package": "rsagl",
        "fct-signature": "f a -\u003e ApplicativeWrapper f a",
        "fct-source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#wrapApplicative",
        "fct-type": "function",
        "title": "wrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling ModelingExtras",
        "module": "RSAGL.Modeling.ModelingExtras",
        "name": "wrapApplicative",
        "normalized": "a b-\u003eApplicativeWrapper a b",
        "package": "rsagl",
        "partial": "Applicative",
        "signature": "f a-\u003eApplicativeWrapper f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Noise",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Noise.html",
        "fct-type": "module",
        "title": "Noise"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Noise",
        "module": "RSAGL.Modeling.Noise",
        "name": "Noise",
        "normalized": "",
        "package": "rsagl",
        "partial": "Noise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#v:perlinNoise",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an arbitrary, smoothly varying value\n between \u003ccode\u003e-1\u003c/code\u003e and \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Noise",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble",
        "fct-source": "src/RSAGL-Modeling-Noise.html#perlinNoise",
        "fct-type": "function",
        "title": "perlinNoise"
      },
      "index": {
        "description": "Generates an arbitrary smoothly varying value between and",
        "hierarchy": "RSAGL Modeling Noise",
        "module": "RSAGL.Modeling.Noise",
        "name": "perlinNoise",
        "normalized": "Point D-\u003eRSdouble",
        "package": "rsagl",
        "partial": "Noise",
        "signature": "Point D-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#v:perlinTurbulence",
      "description": {
        "fct-descr": "\u003cp\u003eTurbulence function.  Accepts an amplitude, which determines\n how intense turbulence will be.  'perlinTurbulence 0 == id'\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Noise",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Point3D -\u003e Point3D",
        "fct-source": "src/RSAGL-Modeling-Noise.html#perlinTurbulence",
        "fct-type": "function",
        "title": "perlinTurbulence"
      },
      "index": {
        "description": "Turbulence function Accepts an amplitude which determines how intense turbulence will be perlinTurbulence id",
        "hierarchy": "RSAGL Modeling Noise",
        "module": "RSAGL.Modeling.Noise",
        "name": "perlinTurbulence",
        "normalized": "RSdouble-\u003ePoint D-\u003ePoint D",
        "package": "rsagl",
        "partial": "Turbulence",
        "signature": "RSdouble-\u003ePoint D-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Optimization",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Optimization.html",
        "fct-type": "module",
        "title": "Optimization"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Optimization",
        "module": "RSAGL.Modeling.Optimization",
        "name": "Optimization",
        "normalized": "",
        "package": "rsagl",
        "partial": "Optimization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:allocateComplexity",
      "description": {
        "fct-module": "RSAGL.Modeling.Optimization",
        "fct-package": "rsagl",
        "fct-signature": "(p -\u003e p -\u003e RSdouble) -\u003e [(Surface p, RSdouble)] -\u003e Integer -\u003e [Integer]",
        "fct-source": "src/RSAGL-Modeling-Optimization.html#allocateComplexity",
        "fct-type": "function",
        "title": "allocateComplexity"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Optimization",
        "module": "RSAGL.Modeling.Optimization",
        "name": "allocateComplexity",
        "normalized": "(a-\u003ea-\u003eRSdouble)-\u003e[(Surface a,RSdouble)]-\u003eInteger-\u003e[Integer]",
        "package": "rsagl",
        "partial": "Complexity",
        "signature": "(p-\u003ep-\u003eRSdouble)-\u003e[(Surface p,RSdouble)]-\u003eInteger-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:estimateSurfaceArea",
      "description": {
        "fct-module": "RSAGL.Modeling.Optimization",
        "fct-package": "rsagl",
        "fct-signature": "(a -\u003e a -\u003e RSdouble) -\u003e Surface a -\u003e RSdouble",
        "fct-source": "src/RSAGL-Modeling-Optimization.html#estimateSurfaceArea",
        "fct-type": "function",
        "title": "estimateSurfaceArea"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Optimization",
        "module": "RSAGL.Modeling.Optimization",
        "name": "estimateSurfaceArea",
        "normalized": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eRSdouble",
        "package": "rsagl",
        "partial": "Surface Area",
        "signature": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:optimizeSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.Optimization",
        "fct-package": "rsagl",
        "fct-signature": "(a -\u003e a -\u003e RSdouble) -\u003e Surface a -\u003e Integer -\u003e TesselatedSurface a",
        "fct-source": "src/RSAGL-Modeling-Optimization.html#optimizeSurface",
        "fct-type": "function",
        "title": "optimizeSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Optimization",
        "module": "RSAGL.Modeling.Optimization",
        "name": "optimizeSurface",
        "normalized": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eInteger-\u003eTesselatedSurface a",
        "package": "rsagl",
        "partial": "Surface",
        "signature": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eInteger-\u003eTesselatedSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html",
        "fct-type": "module",
        "title": "Tesselation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "Tesselation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#t:TesselatedElement",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
        "fct-type": "data",
        "title": "TesselatedElement"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "TesselatedElement",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselated Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#t:TesselatedSurface",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedSurface",
        "fct-type": "type",
        "title": "TesselatedSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "TesselatedSurface",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselated Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangleFan",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "TesselatedTriangleFan",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
        "fct-type": "function",
        "title": "TesselatedTriangleFan"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "TesselatedTriangleFan",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselated Triangle Fan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangleStrip",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "TesselatedTriangleStrip",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
        "fct-type": "function",
        "title": "TesselatedTriangleStrip"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "TesselatedTriangleStrip",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselated Triangle Strip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangles",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "TesselatedTriangles",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
        "fct-type": "function",
        "title": "TesselatedTriangles"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "TesselatedTriangles",
        "normalized": "",
        "package": "rsagl",
        "partial": "Tesselated Triangles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselateGrid",
      "description": {
        "fct-descr": "\u003cp\u003eTesselate polylines of possibly differing number of elements.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "[[(RSdouble, a)]] -\u003e TesselatedSurface a",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#tesselateGrid",
        "fct-type": "function",
        "title": "tesselateGrid"
      },
      "index": {
        "description": "Tesselate polylines of possibly differing number of elements",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "tesselateGrid",
        "normalized": "[[(RSdouble,a)]]-\u003eTesselatedSurface a",
        "package": "rsagl",
        "partial": "Grid",
        "signature": "[[(RSdouble,a)]]-\u003eTesselatedSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselateSurface",
      "description": {
        "fct-descr": "\u003cp\u003eTesselate a surface into a u-by-v grid of triangles.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "Surface a -\u003e (Integer, Integer) -\u003e TesselatedSurface a",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#tesselateSurface",
        "fct-type": "function",
        "title": "tesselateSurface"
      },
      "index": {
        "description": "Tesselate surface into u-by-v grid of triangles",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "tesselateSurface",
        "normalized": "Surface a-\u003e(Integer,Integer)-\u003eTesselatedSurface a",
        "package": "rsagl",
        "partial": "Surface",
        "signature": "Surface a-\u003e(Integer,Integer)-\u003eTesselatedSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselatedElementToOpenGL",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "Bool -\u003e TesselatedElement a -\u003e IO ()",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#tesselatedElementToOpenGL",
        "fct-type": "function",
        "title": "tesselatedElementToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "tesselatedElementToOpenGL",
        "normalized": "Bool-\u003eTesselatedElement a-\u003eIO()",
        "package": "rsagl",
        "partial": "Element To Open GL",
        "signature": "Bool-\u003eTesselatedElement a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselatedSurfaceToVertexCloud",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of all vertices in a TesselatedSurface.\n There will be duplicate entries.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "TesselatedSurface a -\u003e [a]",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#tesselatedSurfaceToVertexCloud",
        "fct-type": "function",
        "title": "tesselatedSurfaceToVertexCloud"
      },
      "index": {
        "description": "Generates list of all vertices in TesselatedSurface There will be duplicate entries",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "tesselatedSurfaceToVertexCloud",
        "normalized": "TesselatedSurface a-\u003e[a]",
        "package": "rsagl",
        "partial": "Surface To Vertex Cloud",
        "signature": "TesselatedSurface a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselated_vertices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "[a]",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
        "fct-type": "function",
        "title": "tesselated_vertices"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "tesselated_vertices",
        "normalized": "[a]",
        "package": "rsagl",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:unmapTesselatedElement",
      "description": {
        "fct-module": "RSAGL.Modeling.Tesselation",
        "fct-package": "rsagl",
        "fct-signature": "TesselatedElement a -\u003e (PrimitiveMode, [a])",
        "fct-source": "src/RSAGL-Modeling-Tesselation.html#unmapTesselatedElement",
        "fct-type": "function",
        "title": "unmapTesselatedElement"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling Tesselation",
        "module": "RSAGL.Modeling.Tesselation",
        "name": "unmapTesselatedElement",
        "normalized": "TesselatedElement a-\u003e(PrimitiveMode,[a])",
        "package": "rsagl",
        "partial": "Tesselated Element",
        "signature": "TesselatedElement a-\u003e(PrimitiveMode,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling.html#",
      "description": {
        "fct-module": "RSAGL.Modeling",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Modeling.html",
        "fct-type": "module",
        "title": "Modeling"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Modeling",
        "module": "RSAGL.Modeling",
        "name": "Modeling",
        "normalized": "",
        "package": "rsagl",
        "partial": "Modeling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html",
        "fct-type": "module",
        "title": "RayTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "RayTrace",
        "normalized": "",
        "package": "rsagl",
        "partial": "Ray Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Geometry",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#Geometry",
        "fct-type": "class",
        "title": "Geometry"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "Geometry",
        "normalized": "",
        "package": "rsagl",
        "partial": "Geometry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Plane",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#Plane",
        "fct-type": "data",
        "title": "Plane"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "Plane",
        "normalized": "",
        "package": "rsagl",
        "partial": "Plane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Sphere",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#Sphere",
        "fct-type": "type",
        "title": "Sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "Sphere",
        "normalized": "",
        "package": "rsagl",
        "partial": "Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:UnitSphere",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#UnitSphere",
        "fct-type": "data",
        "title": "UnitSphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "UnitSphere",
        "normalized": "",
        "package": "rsagl",
        "partial": "Unit Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:UnitSphere",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "UnitSphere",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#UnitSphere",
        "fct-type": "function",
        "title": "UnitSphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "UnitSphere",
        "normalized": "",
        "package": "rsagl",
        "partial": "Unit Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:plane",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Vector3D -\u003e Plane",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#plane",
        "fct-type": "function",
        "title": "plane"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "plane",
        "normalized": "Point D-\u003eVector D-\u003ePlane",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eVector D-\u003ePlane"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:plane3",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Plane",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#plane3",
        "fct-type": "function",
        "title": "plane3"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "plane3",
        "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003ePlane",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003ePlane"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:shadowDeform",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e g -\u003e SurfaceVertex3D -\u003e SurfaceVertex3D",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#shadowDeform",
        "fct-type": "function",
        "title": "shadowDeform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "shadowDeform",
        "normalized": "Vector D-\u003ea-\u003eSurfaceVertex D-\u003eSurfaceVertex D",
        "package": "rsagl",
        "partial": "Deform",
        "signature": "Vector D-\u003eg-\u003eSurfaceVertex D-\u003eSurfaceVertex D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:sphere",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Point3D -\u003e RSdouble -\u003e Sphere",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#sphere",
        "fct-type": "function",
        "title": "sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "sphere",
        "normalized": "Point D-\u003eRSdouble-\u003eSphere",
        "package": "rsagl",
        "partial": "",
        "signature": "Point D-\u003eRSdouble-\u003eSphere"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:testRay",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Ray3D -\u003e g -\u003e [(RSdouble, SurfaceVertex3D)]",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#testRay",
        "fct-type": "method",
        "title": "testRay"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "testRay",
        "normalized": "Ray D-\u003ea-\u003e[(RSdouble,SurfaceVertex D)]",
        "package": "rsagl",
        "partial": "Ray",
        "signature": "Ray D-\u003eg-\u003e[(RSdouble,SurfaceVertex D)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:testRay1st",
      "description": {
        "fct-module": "RSAGL.RayTrace.RayTrace",
        "fct-package": "rsagl",
        "fct-signature": "Ray3D -\u003e g -\u003e Maybe (RSdouble, SurfaceVertex3D)",
        "fct-source": "src/RSAGL-RayTrace-RayTrace.html#testRay1st",
        "fct-type": "function",
        "title": "testRay1st"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace RayTrace",
        "module": "RSAGL.RayTrace.RayTrace",
        "name": "testRay1st",
        "normalized": "Ray D-\u003ea-\u003eMaybe(RSdouble,SurfaceVertex D)",
        "package": "rsagl",
        "partial": "Ray",
        "signature": "Ray D-\u003eg-\u003eMaybe(RSdouble,SurfaceVertex D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html",
        "fct-type": "module",
        "title": "Scattering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "Scattering",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#t:AdaptiveSample",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#AdaptiveSample",
        "fct-type": "class",
        "title": "AdaptiveSample"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "AdaptiveSample",
        "normalized": "",
        "package": "rsagl",
        "partial": "Adaptive Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#t:Scattering",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
        "fct-type": "data",
        "title": "Scattering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "Scattering",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:Scattering",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
        "fct-type": "function",
        "title": "Scattering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "Scattering",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:absorbtionOverDistance",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#absorbtionOverDistance",
        "fct-type": "function",
        "title": "absorbtionOverDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "absorbtionOverDistance",
        "normalized": "RSdouble-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "Over Distance",
        "signature": "RSdouble-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:achromaticAbsorbtion",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "Scattering -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#achromaticAbsorbtion",
        "fct-type": "function",
        "title": "achromaticAbsorbtion"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "achromaticAbsorbtion",
        "normalized": "Scattering-\u003eScattering",
        "package": "rsagl",
        "partial": "Absorbtion",
        "signature": "Scattering-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:adaptiveSamples",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eadaptiveSamples\u003c/a\u003e\u003c/code\u003e tries to selectively subdivide samples that seem most \"conspicuous\" using a user-supplied\n \"conspicuous-ness\" function.  This should give a better result in less samples for highly detailed media models,\n but is likely to be slower that \u003ccode\u003e\u003ca\u003elinearSamples\u003c/a\u003e\u003c/code\u003e for the same number of samples.\n\u003c/p\u003e",
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "SamplingAlgorithm a",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#adaptiveSamples",
        "fct-type": "function",
        "title": "adaptiveSamples"
      },
      "index": {
        "description": "adaptiveSamples tries to selectively subdivide samples that seem most conspicuous using user-supplied conspicuous-ness function This should give better result in less samples for highly detailed media models but is likely to be slower that linearSamples for the same number of samples",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "adaptiveSamples",
        "normalized": "",
        "package": "rsagl",
        "partial": "Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:dust",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#dust",
        "fct-type": "function",
        "title": "dust"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "dust",
        "normalized": "RSdouble-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticBackScatter",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Angle -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#elasticBackScatter",
        "fct-type": "function",
        "title": "elasticBackScatter"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "elasticBackScatter",
        "normalized": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "Back Scatter",
        "signature": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticForwardScatter",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e Angle -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#elasticForwardScatter",
        "fct-type": "function",
        "title": "elasticForwardScatter"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "elasticForwardScatter",
        "normalized": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "Forward Scatter",
        "signature": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticOmnidirectionalScatter",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#elasticOmnidirectionalScatter",
        "fct-type": "function",
        "title": "elasticOmnidirectionalScatter"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "elasticOmnidirectionalScatter",
        "normalized": "RSdouble-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "Omnidirectional Scatter",
        "signature": "RSdouble-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:emissionOverDistance",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#emissionOverDistance",
        "fct-type": "function",
        "title": "emissionOverDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "emissionOverDistance",
        "normalized": "RSdouble-\u003eRGB-\u003eRGB",
        "package": "rsagl",
        "partial": "Over Distance",
        "signature": "RSdouble-\u003eRGB-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:fog",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#fog",
        "fct-type": "function",
        "title": "fog"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "fog",
        "normalized": "RSdouble-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:linearSamples",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "SamplingAlgorithm a",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#linearSamples",
        "fct-type": "function",
        "title": "linearSamples"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "linearSamples",
        "normalized": "",
        "package": "rsagl",
        "partial": "Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:rayleigh",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e RGB -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#rayleigh",
        "fct-type": "function",
        "title": "rayleigh"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "rayleigh",
        "normalized": "RSdouble-\u003eRGB-\u003eScattering",
        "package": "rsagl",
        "partial": "",
        "signature": "RSdouble-\u003eRGB-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:rayleigh_sky",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#rayleigh_sky",
        "fct-type": "function",
        "title": "rayleigh_sky"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "rayleigh_sky",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:scattering_absorb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
        "fct-type": "function",
        "title": "scattering_absorb"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "scattering_absorb",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:scattering_scatter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "Angle -\u003e RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
        "fct-type": "function",
        "title": "scattering_scatter"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "scattering_scatter",
        "normalized": "Angle-\u003eRGB",
        "package": "rsagl",
        "partial": "",
        "signature": "Angle-\u003eRGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:traceAbsorbtion",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "(Point3D -\u003e Scattering) -\u003e SamplingAlgorithm RGB -\u003e Point3D -\u003e Point3D -\u003e Samples RGB",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#traceAbsorbtion",
        "fct-type": "function",
        "title": "traceAbsorbtion"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "traceAbsorbtion",
        "normalized": "(Point D-\u003eScattering)-\u003eSamplingAlgorithm RGB-\u003ePoint D-\u003ePoint D-\u003eSamples RGB",
        "package": "rsagl",
        "partial": "Absorbtion",
        "signature": "(Point D-\u003eScattering)-\u003eSamplingAlgorithm RGB-\u003ePoint D-\u003ePoint D-\u003eSamples RGB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:traceScattering",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "(Point3D -\u003e Scattering) -\u003e (Point3D -\u003e (Vector3D, RGB)) -\u003e SamplingAlgorithm (RGB, RGB) -\u003e Point3D -\u003e Point3D -\u003e Samples (RGB, RGB)",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#traceScattering",
        "fct-type": "function",
        "title": "traceScattering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "traceScattering",
        "normalized": "(Point D-\u003eScattering)-\u003e(Point D-\u003e(Vector D,RGB))-\u003eSamplingAlgorithm(RGB,RGB)-\u003ePoint D-\u003ePoint D-\u003eSamples(RGB,RGB)",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": "(Point D-\u003eScattering)-\u003e(Point D-\u003e(Vector D,RGB))-\u003eSamplingAlgorithm(RGB,RGB)-\u003ePoint D-\u003ePoint D-\u003eSamples(RGB,RGB)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:withoutAbsorbtion",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "Scattering -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#withoutAbsorbtion",
        "fct-type": "function",
        "title": "withoutAbsorbtion"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "withoutAbsorbtion",
        "normalized": "Scattering-\u003eScattering",
        "package": "rsagl",
        "partial": "Absorbtion",
        "signature": "Scattering-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:withoutScattering",
      "description": {
        "fct-module": "RSAGL.RayTrace.Scattering",
        "fct-package": "rsagl",
        "fct-signature": "Scattering -\u003e Scattering",
        "fct-source": "src/RSAGL-RayTrace-Scattering.html#withoutScattering",
        "fct-type": "function",
        "title": "withoutScattering"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL RayTrace Scattering",
        "module": "RSAGL.RayTrace.Scattering",
        "name": "withoutScattering",
        "normalized": "Scattering-\u003eScattering",
        "package": "rsagl",
        "partial": "Scattering",
        "signature": "Scattering-\u003eScattering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html",
        "fct-type": "module",
        "title": "CoordinateSystems"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "CoordinateSystems",
        "normalized": "",
        "package": "rsagl",
        "partial": "Coordinate Systems",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:Affine",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "newtype",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
        "fct-type": "newtype",
        "title": "Affine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "Affine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:AffineTransformation",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#AffineTransformation",
        "fct-type": "type",
        "title": "AffineTransformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "AffineTransformation",
        "normalized": "",
        "package": "rsagl",
        "partial": "Affine Transformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CSN",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#CSN",
        "fct-type": "data",
        "title": "CSN"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "CSN",
        "normalized": "",
        "package": "rsagl",
        "partial": "CSN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CoordinateSystem",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#CoordinateSystem",
        "fct-type": "data",
        "title": "CoordinateSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "CoordinateSystem",
        "normalized": "",
        "package": "rsagl",
        "partial": "Coordinate System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CoordinateSystemClass",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#CoordinateSystemClass",
        "fct-type": "class",
        "title": "CoordinateSystemClass"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "CoordinateSystemClass",
        "normalized": "",
        "package": "rsagl",
        "partial": "Coordinate System Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:Distance",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#Distance",
        "fct-type": "data",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "Distance",
        "normalized": "",
        "package": "rsagl",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:NestedCoordinateSystemTransformer",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#NestedCoordinateSystemTransformer",
        "fct-type": "class",
        "title": "NestedCoordinateSystemTransformer"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "NestedCoordinateSystemTransformer",
        "normalized": "",
        "package": "rsagl",
        "partial": "Nested Coordinate System Transformer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:Affine",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "Affine",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
        "fct-type": "function",
        "title": "Affine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "Affine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affineOf",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation -\u003e Affine",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#affineOf",
        "fct-type": "function",
        "title": "affineOf"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "affineOf",
        "normalized": "AffineTransformation-\u003eAffine",
        "package": "rsagl",
        "partial": "Of",
        "signature": "AffineTransformation-\u003eAffine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affine_identity",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#affine_identity",
        "fct-type": "function",
        "title": "affine_identity"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "affine_identity",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affine_transformation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
        "fct-type": "function",
        "title": "affine_transformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "affine_transformation",
        "normalized": "a-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:distance",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "Distance -\u003e RSdouble",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#distance",
        "fct-type": "function",
        "title": "distance"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "distance",
        "normalized": "Distance-\u003eRSdouble",
        "package": "rsagl",
        "partial": "",
        "signature": "Distance-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:distanceSquared",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "Distance -\u003e RSdouble",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#distanceSquared",
        "fct-type": "function",
        "title": "distanceSquared"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "distanceSquared",
        "normalized": "Distance-\u003eRSdouble",
        "package": "rsagl",
        "partial": "Squared",
        "signature": "Distance-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "arr a (CSN a)",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#exportA",
        "fct-type": "function",
        "title": "exportA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "exportA",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportCSN",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e a -\u003e CSN a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#exportCSN",
        "fct-type": "function",
        "title": "exportCSN"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "exportCSN",
        "normalized": "CoordinateSystem-\u003ea-\u003eCSN a",
        "package": "rsagl",
        "partial": "CSN",
        "signature": "CoordinateSystem-\u003ea-\u003eCSN a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportCoordinateSystem",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "arr AffineTransformation CoordinateSystem",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#exportCoordinateSystem",
        "fct-type": "function",
        "title": "exportCoordinateSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "exportCoordinateSystem",
        "normalized": "",
        "package": "rsagl",
        "partial": "Coordinate System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportM",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "a -\u003e m (CSN a)",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#exportM",
        "fct-type": "function",
        "title": "exportM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "exportM",
        "normalized": "a-\u003eb(CSN a)",
        "package": "rsagl",
        "partial": "",
        "signature": "a-\u003em(CSN a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportToA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e arr a a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#exportToA",
        "fct-type": "function",
        "title": "exportToA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "exportToA",
        "normalized": "CoordinateSystem-\u003ea b b",
        "package": "rsagl",
        "partial": "To",
        "signature": "CoordinateSystem-\u003earr a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:getCoordinateSystem",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "csc -\u003e CoordinateSystem",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#getCoordinateSystem",
        "fct-type": "method",
        "title": "getCoordinateSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "getCoordinateSystem",
        "normalized": "a-\u003eCoordinateSystem",
        "package": "rsagl",
        "partial": "Coordinate System",
        "signature": "csc-\u003eCoordinateSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "arr (CSN a) a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#importA",
        "fct-type": "function",
        "title": "importA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "importA",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importCSN",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e CSN a -\u003e a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#importCSN",
        "fct-type": "function",
        "title": "importCSN"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "importCSN",
        "normalized": "CoordinateSystem-\u003eCSN a-\u003ea",
        "package": "rsagl",
        "partial": "CSN",
        "signature": "CoordinateSystem-\u003eCSN a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importFromA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e arr a a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#importFromA",
        "fct-type": "function",
        "title": "importFromA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "importFromA",
        "normalized": "CoordinateSystem-\u003ea b b",
        "package": "rsagl",
        "partial": "From",
        "signature": "CoordinateSystem-\u003earr a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importM",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CSN a -\u003e m a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#importM",
        "fct-type": "function",
        "title": "importM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "importM",
        "normalized": "CSN a-\u003eb a",
        "package": "rsagl",
        "partial": "",
        "signature": "CSN a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:inverseTransformation",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#inverseTransformation",
        "fct-type": "function",
        "title": "inverseTransformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "inverseTransformation",
        "normalized": "AffineTransformation-\u003ea-\u003ea",
        "package": "rsagl",
        "partial": "Transformation",
        "signature": "AffineTransformation-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:measure",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "p -\u003e p -\u003e Distance",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#measure",
        "fct-type": "function",
        "title": "measure"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "measure",
        "normalized": "a-\u003ea-\u003eDistance",
        "package": "rsagl",
        "partial": "",
        "signature": "p-\u003ep-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:migrateToFrom",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e CoordinateSystem -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#migrateToFrom",
        "fct-type": "function",
        "title": "migrateToFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "migrateToFrom",
        "normalized": "CoordinateSystem-\u003eCoordinateSystem-\u003ea-\u003ea",
        "package": "rsagl",
        "partial": "To From",
        "signature": "CoordinateSystem-\u003eCoordinateSystem-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "arr (CoordinateSystem, a -\u003e b, a) b",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#remoteA",
        "fct-type": "function",
        "title": "remoteA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "remoteA",
        "normalized": "a(CoordinateSystem,b-\u003ec,b)c",
        "package": "rsagl",
        "partial": "",
        "signature": "arr(CoordinateSystem,a-\u003eb,a)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteCSN",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e (a -\u003e b) -\u003e CSN a -\u003e CSN b",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#remoteCSN",
        "fct-type": "function",
        "title": "remoteCSN"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "remoteCSN",
        "normalized": "CoordinateSystem-\u003e(a-\u003eb)-\u003eCSN a-\u003eCSN b",
        "package": "rsagl",
        "partial": "CSN",
        "signature": "CoordinateSystem-\u003e(a-\u003eb)-\u003eCSN a-\u003eCSN b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteM",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e (a -\u003e b) -\u003e a -\u003e m b",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#remoteM",
        "fct-type": "function",
        "title": "remoteM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "remoteM",
        "normalized": "CoordinateSystem-\u003e(a-\u003eb)-\u003ea-\u003ec b",
        "package": "rsagl",
        "partial": "",
        "signature": "CoordinateSystem-\u003e(a-\u003eb)-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:root_coordinate_system",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#root_coordinate_system",
        "fct-type": "function",
        "title": "root_coordinate_system"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "root_coordinate_system",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:storeCoordinateSystem",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "CoordinateSystem -\u003e csc -\u003e csc",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#storeCoordinateSystem",
        "fct-type": "method",
        "title": "storeCoordinateSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "storeCoordinateSystem",
        "normalized": "CoordinateSystem-\u003ea-\u003ea",
        "package": "rsagl",
        "partial": "Coordinate System",
        "signature": "CoordinateSystem-\u003ecsc-\u003ecsc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformA",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "arr a b -\u003e arr (cst, a) b",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#transformA",
        "fct-type": "function",
        "title": "transformA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "transformA",
        "normalized": "a b c-\u003ea(d,b)c",
        "package": "rsagl",
        "partial": "",
        "signature": "arr a b-\u003earr(cst,a)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformM",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "cst -\u003e m a -\u003e m a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#transformM",
        "fct-type": "function",
        "title": "transformM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "transformM",
        "normalized": "a-\u003eb c-\u003eb c",
        "package": "rsagl",
        "partial": "",
        "signature": "cst-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformation",
      "description": {
        "fct-module": "RSAGL.Scene.CoordinateSystems",
        "fct-package": "rsagl",
        "fct-signature": "AffineTransformation -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Scene-CoordinateSystems.html#transformation",
        "fct-type": "function",
        "title": "transformation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene CoordinateSystems",
        "module": "RSAGL.Scene.CoordinateSystems",
        "name": "transformation",
        "normalized": "AffineTransformation-\u003ea-\u003ea",
        "package": "rsagl",
        "partial": "",
        "signature": "AffineTransformation-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#",
      "description": {
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Scene-LightSource.html",
        "fct-type": "module",
        "title": "LightSource"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "LightSource",
        "normalized": "",
        "package": "rsagl",
        "partial": "Light Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#t:LightSource",
      "description": {
        "fct-descr": "\u003cp\u003eA light source.  In addition to position information, each type of \n light source (except \u003ccode\u003e\u003ca\u003eNoLight\u003c/a\u003e\u003c/code\u003e) has a \u003ca\u003ecolor\u003c/a\u003e term, indicating the color of direct lighting,\n and an \u003ca\u003eambient\u003c/a\u003e term, indicating the color of indirect lighting.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "data",
        "title": "LightSource"
      },
      "index": {
        "description": "light source In addition to position information each type of light source except NoLight has color term indicating the color of direct lighting and an ambient term indicating the color of indirect lighting",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "LightSource",
        "normalized": "",
        "package": "rsagl",
        "partial": "Light Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#t:MapLightSource",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes a transformation of a light source, including the light color and ambient color terms, and any affine transformation.\n The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance supports \u003ccode\u003e\u003ca\u003eMapLightSource\u003c/a\u003e\u003c/code\u003e as a specialized endomorphism (see \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-LightSource.html#MapLightSource",
        "fct-type": "data",
        "title": "MapLightSource"
      },
      "index": {
        "description": "Encodes transformation of light source including the light color and ambient color terms and any affine transformation The Monoid instance supports MapLightSource as specialized endomorphism see Endo",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "MapLightSource",
        "normalized": "",
        "package": "rsagl",
        "partial": "Map Light Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:DirectionalLight",
      "description": {
        "fct-descr": "\u003cp\u003eA directional or infinite light source, which always appears to be comming from the specified vector\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "DirectionalLight",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "DirectionalLight"
      },
      "index": {
        "description": "directional or infinite light source which always appears to be comming from the specified vector",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "DirectionalLight",
        "normalized": "",
        "package": "rsagl",
        "partial": "Directional Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:NoLight",
      "description": {
        "fct-descr": "\u003cp\u003eAn inactive light source, equivalent to any light source with a color and ambient term of \u003ca\u003ergb 0 0 0\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "NoLight",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "NoLight"
      },
      "index": {
        "description": "An inactive light source equivalent to any light source with color and ambient term of rgb",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "NoLight",
        "normalized": "",
        "package": "rsagl",
        "partial": "No Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:PointLight",
      "description": {
        "fct-descr": "\u003cp\u003eA point light, which has a specific position.  The intensity of point light radiation falls off with the\n inverse square of distance, normalized to one at the specified radius.  This means that point lights will\n be overbright inside that radius.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "PointLight",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "PointLight"
      },
      "index": {
        "description": "point light which has specific position The intensity of point light radiation falls off with the inverse square of distance normalized to one at the specified radius This means that point lights will be overbright inside that radius",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "PointLight",
        "normalized": "",
        "package": "rsagl",
        "partial": "Point Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:infiniteLightSourceOf",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003ePointLight\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eDirectionalLight\u003c/a\u003e\u003c/code\u003e, assuming that the camera is at the origin.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "LightSource -\u003e LightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#infiniteLightSourceOf",
        "fct-type": "function",
        "title": "infiniteLightSourceOf"
      },
      "index": {
        "description": "Converts PointLight to DirectionalLight assuming that the camera is at the origin",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "infiniteLightSourceOf",
        "normalized": "LightSource-\u003eLightSource",
        "package": "rsagl",
        "partial": "Light Source Of",
        "signature": "LightSource-\u003eLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:isNoLight",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if a light is \u003ccode\u003e\u003ca\u003eNoLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "LightSource -\u003e Bool",
        "fct-source": "src/RSAGL-Scene-LightSource.html#isNoLight",
        "fct-type": "function",
        "title": "isNoLight"
      },
      "index": {
        "description": "True if light is NoLight",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "isNoLight",
        "normalized": "LightSource-\u003eBool",
        "package": "rsagl",
        "partial": "No Light",
        "signature": "LightSource-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_ambient",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "lightsource_ambient"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "lightsource_ambient",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "RGB",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "lightsource_color"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "lightsource_color",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_direction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "lightsource_direction"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "lightsource_direction",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_position",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "lightsource_position"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "lightsource_position",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_radius",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "Distance",
        "fct-source": "src/RSAGL-Scene-LightSource.html#LightSource",
        "fct-type": "function",
        "title": "lightsource_radius"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "lightsource_radius",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapAmbient",
      "description": {
        "fct-descr": "\u003cp\u003eTransformation of the ambient color of a light source.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#mapAmbient",
        "fct-type": "function",
        "title": "mapAmbient"
      },
      "index": {
        "description": "Transformation of the ambient color of light source",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "mapAmbient",
        "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
        "package": "rsagl",
        "partial": "Ambient",
        "signature": "(RGB-\u003eRGB)-\u003eMapLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapBoth",
      "description": {
        "fct-descr": "\u003cp\u003eTransformation of both the direct illumination and the ambient color terms of a light source.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#mapBoth",
        "fct-type": "function",
        "title": "mapBoth"
      },
      "index": {
        "description": "Transformation of both the direct illumination and the ambient color terms of light source",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "mapBoth",
        "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
        "package": "rsagl",
        "partial": "Both",
        "signature": "(RGB-\u003eRGB)-\u003eMapLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapLight",
      "description": {
        "fct-descr": "\u003cp\u003eTransformation of the direct illumination color of a light source.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#mapLight",
        "fct-type": "function",
        "title": "mapLight"
      },
      "index": {
        "description": "Transformation of the direct illumination color of light source",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "mapLight",
        "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
        "package": "rsagl",
        "partial": "Light",
        "signature": "(RGB-\u003eRGB)-\u003eMapLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapLightSource",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eMapLightSource\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eLightSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "MapLightSource -\u003e LightSource -\u003e LightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#mapLightSource",
        "fct-type": "function",
        "title": "mapLightSource"
      },
      "index": {
        "description": "Apply MapLightSource to LightSource",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "mapLightSource",
        "normalized": "MapLightSource-\u003eLightSource-\u003eLightSource",
        "package": "rsagl",
        "partial": "Light Source",
        "signature": "MapLightSource-\u003eLightSource-\u003eLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:setLightSourceToOpenGL",
      "description": {
        "fct-descr": "\u003cp\u003eSet one specific OpenGL light source.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "(Light, LightSource) -\u003e IO ()",
        "fct-source": "src/RSAGL-Scene-LightSource.html#setLightSourceToOpenGL",
        "fct-type": "function",
        "title": "setLightSourceToOpenGL"
      },
      "index": {
        "description": "Set one specific OpenGL light source",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "setLightSourceToOpenGL",
        "normalized": "(Light,LightSource)-\u003eIO()",
        "package": "rsagl",
        "partial": "Light Source To Open GL",
        "signature": "(Light,LightSource)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:setLightSourcesToOpenGL",
      "description": {
        "fct-descr": "\u003cp\u003eSet OpenGL light sources starting from 0.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "[LightSource] -\u003e IO ()",
        "fct-source": "src/RSAGL-Scene-LightSource.html#setLightSourcesToOpenGL",
        "fct-type": "function",
        "title": "setLightSourcesToOpenGL"
      },
      "index": {
        "description": "Set OpenGL light sources starting from",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "setLightSourcesToOpenGL",
        "normalized": "[LightSource]-\u003eIO()",
        "package": "rsagl",
        "partial": "Light Sources To Open GL",
        "signature": "[LightSource]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:skylight",
      "description": {
        "fct-descr": "\u003cp\u003eA DirectionalLight approximation of ambient sky radiation.  Normally, set the vector to straight up, since that is the direction of the sky.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.LightSource",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D -\u003e RGB -\u003e LightSource",
        "fct-source": "src/RSAGL-Scene-LightSource.html#skylight",
        "fct-type": "function",
        "title": "skylight"
      },
      "index": {
        "description": "DirectionalLight approximation of ambient sky radiation Normally set the vector to straight up since that is the direction of the sky",
        "hierarchy": "RSAGL Scene LightSource",
        "module": "RSAGL.Scene.LightSource",
        "name": "skylight",
        "normalized": "Vector D-\u003eRGB-\u003eLightSource",
        "package": "rsagl",
        "partial": "",
        "signature": "Vector D-\u003eRGB-\u003eLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Scene-Scene.html",
        "fct-type": "module",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:Camera",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "data",
        "title": "Camera"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "Camera",
        "normalized": "",
        "package": "rsagl",
        "partial": "Camera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:LightSourceLayerTransform",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "newtype",
        "fct-source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
        "fct-type": "newtype",
        "title": "LightSourceLayerTransform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "LightSourceLayerTransform",
        "normalized": "",
        "package": "rsagl",
        "partial": "Light Source Layer Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:Scene",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-Scene.html#Scene",
        "fct-type": "data",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneAccumulator",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneAccumulator",
        "fct-type": "data",
        "title": "SceneAccumulator"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "SceneAccumulator",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene Accumulator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneLayer",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneLayer",
        "fct-type": "type",
        "title": "SceneLayer"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "SceneLayer",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneLayerInfo",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
        "fct-type": "data",
        "title": "SceneLayerInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "SceneLayerInfo",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene Layer Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneObject",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneObject",
        "fct-type": "data",
        "title": "SceneObject"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "SceneObject",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:ScenicAccumulator",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Scene-Scene.html#ScenicAccumulator",
        "fct-type": "class",
        "title": "ScenicAccumulator"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "ScenicAccumulator",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scenic Accumulator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:LightSourceLayerTransform",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "LightSourceLayerTransform",
        "fct-source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
        "fct-type": "function",
        "title": "LightSourceLayerTransform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "LightSourceLayerTransform",
        "normalized": "",
        "package": "rsagl",
        "partial": "Light Source Layer Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:PerspectiveCamera",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "PerspectiveCamera",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "function",
        "title": "PerspectiveCamera"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "PerspectiveCamera",
        "normalized": "",
        "package": "rsagl",
        "partial": "Perspective Camera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:SceneLayerInfo",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayerInfo",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
        "fct-type": "function",
        "title": "SceneLayerInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "SceneLayerInfo",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene Layer Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateScene",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer -\u003e SceneObject m -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Scene-Scene.html#accumulateScene",
        "fct-type": "method",
        "title": "accumulateScene"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "accumulateScene",
        "normalized": "SceneLayer-\u003eSceneObject a-\u003eb-\u003eb",
        "package": "rsagl",
        "partial": "Scene",
        "signature": "SceneLayer-\u003eSceneObject m-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateSceneA",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "arr (SceneLayer, SceneObject m) ()",
        "fct-source": "src/RSAGL-Scene-Scene.html#accumulateSceneA",
        "fct-type": "function",
        "title": "accumulateSceneA"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "accumulateSceneA",
        "normalized": "a(SceneLayer,SceneObject b)()",
        "package": "rsagl",
        "partial": "Scene",
        "signature": "arr(SceneLayer,SceneObject m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateSceneM",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer -\u003e SceneObject a -\u003e m ()",
        "fct-source": "src/RSAGL-Scene-Scene.html#accumulateSceneM",
        "fct-type": "function",
        "title": "accumulateSceneM"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "accumulateSceneM",
        "normalized": "SceneLayer-\u003eSceneObject a-\u003eb()",
        "package": "rsagl",
        "partial": "Scene",
        "signature": "SceneLayer-\u003eSceneObject a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:assembleScene",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayerInfo -\u003e SceneAccumulator m -\u003e m Scene",
        "fct-source": "src/RSAGL-Scene-Scene.html#assembleScene",
        "fct-type": "function",
        "title": "assembleScene"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "assembleScene",
        "normalized": "SceneLayerInfo-\u003eSceneAccumulator a-\u003ea Scene",
        "package": "rsagl",
        "partial": "Scene",
        "signature": "SceneLayerInfo-\u003eSceneAccumulator m-\u003em Scene"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:cameraLightSourceLayerTransform",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the minimal light source layer transform needed to maintain correct light sources under camera transformations.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "(SceneLayer -\u003e Camera) -\u003e LightSourceLayerTransform",
        "fct-source": "src/RSAGL-Scene-Scene.html#cameraLightSourceLayerTransform",
        "fct-type": "function",
        "title": "cameraLightSourceLayerTransform"
      },
      "index": {
        "description": "Performs the minimal light source layer transform needed to maintain correct light sources under camera transformations",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "cameraLightSourceLayerTransform",
        "normalized": "(SceneLayer-\u003eCamera)-\u003eLightSourceLayerTransform",
        "package": "rsagl",
        "partial": "Light Source Layer Transform",
        "signature": "(SceneLayer-\u003eCamera)-\u003eLightSourceLayerTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:cameraRelativeSceneObject",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "(Camera -\u003e m (WrappedAffine IntermediateModel)) -\u003e SceneObject m",
        "fct-source": "src/RSAGL-Scene-Scene.html#cameraRelativeSceneObject",
        "fct-type": "function",
        "title": "cameraRelativeSceneObject"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "cameraRelativeSceneObject",
        "normalized": "(Camera-\u003ea(WrappedAffine IntermediateModel))-\u003eSceneObject a",
        "package": "rsagl",
        "partial": "Relative Scene Object",
        "signature": "(Camera-\u003em(WrappedAffine IntermediateModel))-\u003eSceneObject m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_fov",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Angle",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "function",
        "title": "camera_fov"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "camera_fov",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_lookat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "function",
        "title": "camera_lookat"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "camera_lookat",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_position",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "function",
        "title": "camera_position"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "camera_position",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_up",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Vector3D",
        "fct-source": "src/RSAGL-Scene-Scene.html#Camera",
        "fct-type": "function",
        "title": "camera_up"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "camera_up",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:infiniteCameraOf",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Camera -\u003e Camera",
        "fct-source": "src/RSAGL-Scene-Scene.html#infiniteCameraOf",
        "fct-type": "function",
        "title": "infiniteCameraOf"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "infiniteCameraOf",
        "normalized": "Camera-\u003eCamera",
        "package": "rsagl",
        "partial": "Camera Of",
        "signature": "Camera-\u003eCamera"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:lightSource",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "LightSource -\u003e SceneObject m",
        "fct-source": "src/RSAGL-Scene-Scene.html#lightSource",
        "fct-type": "function",
        "title": "lightSource"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "lightSource",
        "normalized": "LightSource-\u003eSceneObject a",
        "package": "rsagl",
        "partial": "Source",
        "signature": "LightSource-\u003eSceneObject m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:lightSourceLayerTransform",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer -\u003e SceneLayer -\u003e LightSource -\u003e LightSource",
        "fct-source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
        "fct-type": "function",
        "title": "lightSourceLayerTransform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "lightSourceLayerTransform",
        "normalized": "SceneLayer-\u003eSceneLayer-\u003eLightSource-\u003eLightSource",
        "package": "rsagl",
        "partial": "Source Layer Transform",
        "signature": "SceneLayer-\u003eSceneLayer-\u003eLightSource-\u003eLightSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:null_scene_accumulator",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneAccumulator m",
        "fct-source": "src/RSAGL-Scene-Scene.html#null_scene_accumulator",
        "fct-type": "function",
        "title": "null_scene_accumulator"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "null_scene_accumulator",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:sceneObject",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "m mt -\u003e SceneObject m",
        "fct-source": "src/RSAGL-Scene-Scene.html#sceneObject",
        "fct-type": "function",
        "title": "sceneObject"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "sceneObject",
        "normalized": "a b-\u003eSceneObject a",
        "package": "rsagl",
        "partial": "Object",
        "signature": "m mt-\u003eSceneObject m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:sceneToOpenGL",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "RSdouble -\u003e (RSdouble, RSdouble) -\u003e Scene -\u003e IO ()",
        "fct-source": "src/RSAGL-Scene-Scene.html#sceneToOpenGL",
        "fct-type": "function",
        "title": "sceneToOpenGL"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "sceneToOpenGL",
        "normalized": "RSdouble-\u003e(RSdouble,RSdouble)-\u003eScene-\u003eIO()",
        "package": "rsagl",
        "partial": "To Open GL",
        "signature": "RSdouble-\u003e(RSdouble,RSdouble)-\u003eScene-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:scene_layer_camera",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer -\u003e Camera",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
        "fct-type": "function",
        "title": "scene_layer_camera"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "scene_layer_camera",
        "normalized": "SceneLayer-\u003eCamera",
        "package": "rsagl",
        "partial": "",
        "signature": "SceneLayer-\u003eCamera"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:scene_layer_light_source_layer_transform",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "LightSourceLayerTransform",
        "fct-source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
        "fct-type": "function",
        "title": "scene_layer_light_source_layer_transform"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "scene_layer_light_source_layer_transform",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:stdSceneLayerInfo",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Camera -\u003e SceneLayerInfo",
        "fct-source": "src/RSAGL-Scene-Scene.html#stdSceneLayerInfo",
        "fct-type": "function",
        "title": "stdSceneLayerInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "stdSceneLayerInfo",
        "normalized": "Camera-\u003eSceneLayerInfo",
        "package": "rsagl",
        "partial": "Scene Layer Info",
        "signature": "Camera-\u003eSceneLayerInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:stdSceneLayers",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "Camera -\u003e SceneLayer -\u003e Camera",
        "fct-source": "src/RSAGL-Scene-Scene.html#stdSceneLayers",
        "fct-type": "function",
        "title": "stdSceneLayers"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "stdSceneLayers",
        "normalized": "Camera-\u003eSceneLayer-\u003eCamera",
        "package": "rsagl",
        "partial": "Scene Layers",
        "signature": "Camera-\u003eSceneLayer-\u003eCamera"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_cockpit",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer",
        "fct-source": "src/RSAGL-Scene-Scene.html#std_scene_layer_cockpit",
        "fct-type": "function",
        "title": "std_scene_layer_cockpit"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "std_scene_layer_cockpit",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_hud",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer",
        "fct-source": "src/RSAGL-Scene-Scene.html#std_scene_layer_hud",
        "fct-type": "function",
        "title": "std_scene_layer_hud"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "std_scene_layer_hud",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_infinite",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer",
        "fct-source": "src/RSAGL-Scene-Scene.html#std_scene_layer_infinite",
        "fct-type": "function",
        "title": "std_scene_layer_infinite"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "std_scene_layer_infinite",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_local",
      "description": {
        "fct-module": "RSAGL.Scene.Scene",
        "fct-package": "rsagl",
        "fct-signature": "SceneLayer",
        "fct-source": "src/RSAGL-Scene-Scene.html#std_scene_layer_local",
        "fct-type": "function",
        "title": "std_scene_layer_local"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene Scene",
        "module": "RSAGL.Scene.Scene",
        "name": "std_scene_layer_local",
        "normalized": "",
        "package": "rsagl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#",
      "description": {
        "fct-module": "RSAGL.Scene.WrappedAffine",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Scene-WrappedAffine.html",
        "fct-type": "module",
        "title": "WrappedAffine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene WrappedAffine",
        "module": "RSAGL.Scene.WrappedAffine",
        "name": "WrappedAffine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Wrapped Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#t:WrappedAffine",
      "description": {
        "fct-descr": "\u003cp\u003eWrappedAffine stores up affine transformations that are commited only when\n the entity is unwrapped.  In this way we can store affine transformations\n for entities that can not be directly transformed, or for which delaying\n transformation an optimization.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Scene.WrappedAffine",
        "fct-package": "rsagl",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Scene-WrappedAffine.html#WrappedAffine",
        "fct-type": "data",
        "title": "WrappedAffine"
      },
      "index": {
        "description": "WrappedAffine stores up affine transformations that are commited only when the entity is unwrapped In this way we can store affine transformations for entities that can not be directly transformed or for which delaying transformation an optimization",
        "hierarchy": "RSAGL Scene WrappedAffine",
        "module": "RSAGL.Scene.WrappedAffine",
        "name": "WrappedAffine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Wrapped Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:WrappedAffine",
      "description": {
        "fct-module": "RSAGL.Scene.WrappedAffine",
        "fct-package": "rsagl",
        "fct-signature": "WrappedAffine CoordinateSystem a",
        "fct-source": "src/RSAGL-Scene-WrappedAffine.html#WrappedAffine",
        "fct-type": "function",
        "title": "WrappedAffine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene WrappedAffine",
        "module": "RSAGL.Scene.WrappedAffine",
        "name": "WrappedAffine",
        "normalized": "",
        "package": "rsagl",
        "partial": "Wrapped Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:unwrapAffine",
      "description": {
        "fct-module": "RSAGL.Scene.WrappedAffine",
        "fct-package": "rsagl",
        "fct-signature": "WrappedAffine a -\u003e a",
        "fct-source": "src/RSAGL-Scene-WrappedAffine.html#unwrapAffine",
        "fct-type": "function",
        "title": "unwrapAffine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene WrappedAffine",
        "module": "RSAGL.Scene.WrappedAffine",
        "name": "unwrapAffine",
        "normalized": "WrappedAffine a-\u003ea",
        "package": "rsagl",
        "partial": "Affine",
        "signature": "WrappedAffine a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:wrapAffine",
      "description": {
        "fct-module": "RSAGL.Scene.WrappedAffine",
        "fct-package": "rsagl",
        "fct-signature": "a -\u003e WrappedAffine a",
        "fct-source": "src/RSAGL-Scene-WrappedAffine.html#wrapAffine",
        "fct-type": "function",
        "title": "wrapAffine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene WrappedAffine",
        "module": "RSAGL.Scene.WrappedAffine",
        "name": "wrapAffine",
        "normalized": "a-\u003eWrappedAffine a",
        "package": "rsagl",
        "partial": "Affine",
        "signature": "a-\u003eWrappedAffine a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene.html#",
      "description": {
        "fct-module": "RSAGL.Scene",
        "fct-package": "rsagl",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Scene.html",
        "fct-type": "module",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Scene",
        "module": "RSAGL.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "rsagl",
        "partial": "Scene",
        "signature": ""
      }
    }
  }
]