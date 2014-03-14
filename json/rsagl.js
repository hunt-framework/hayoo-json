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
        "word": "rsagl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupports monadic and arrow operations for animated\n scenes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "Animation",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Animation.html",
          "type": "module"
        },
        "index": {
          "description": "Supports monadic and arrow operations for animated scenes",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "Animation",
          "package": "rsagl",
          "partial": "Animation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for animation using RSAGL's scene accumulation system.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "AniM",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Animation.html#AniM",
          "type": "type"
        },
        "index": {
          "description": "monad for animation using RSAGL scene accumulation system",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "AniM",
          "package": "rsagl",
          "partial": "Ani",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:AniM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that can capture either a monadic or\n arrow-based animation.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "AnimationObject",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Animation.html#AnimationObject",
          "type": "data"
        },
        "index": {
          "description": "An object that can capture either monadic or arrow-based animation",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "AnimationObject",
          "package": "rsagl",
          "partial": "Animation Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:AnimationObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time-aware scene accumulator.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "TimePlusSceneAccumulator",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Animation.html#TimePlusSceneAccumulator",
          "type": "data"
        },
        "index": {
          "description": "time-aware scene accumulator",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "TimePlusSceneAccumulator",
          "package": "rsagl",
          "partial": "Time Plus Scene Accumulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#t:TimePlusSceneAccumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine an animation with a continuous affine transformation.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "animateM",
          "package": "rsagl",
          "signature": "AniM AffineTransformation -\u003e AniM b -\u003e AniM b",
          "source": "src/RSAGL-Animation-Animation.html#animateM",
          "type": "function"
        },
        "index": {
          "description": "Combine an animation with continuous affine transformation",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "animateM",
          "normalized": "AniM AffineTransformation-\u003eAniM a-\u003eAniM a",
          "package": "rsagl",
          "signature": "AniM AffineTransformation-\u003eAniM b-\u003eAniM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:animateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet's the time of the current frame.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "frameTime",
          "package": "rsagl",
          "signature": "AniM Time",
          "source": "src/RSAGL-Animation-Animation.html#frameTime",
          "type": "function"
        },
        "index": {
          "description": "Get the time of the current frame",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "frameTime",
          "package": "rsagl",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:frameTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Animation",
          "name": "newAnimationObjectA",
          "package": "rsagl",
          "signature": "(forall e.  FRP e (FRP1 (SceneAccumulator IO) i o) i o) -\u003e IO (AnimationObject i o)",
          "source": "src/RSAGL-Animation-Animation.html#newAnimationObjectA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "newAnimationObjectA",
          "normalized": "(a b FRP c(FRP(SceneAccumulator IO)d e)d e)-\u003eIO(AnimationObject d e)",
          "package": "rsagl",
          "partial": "Animation Object",
          "signature": "(forall e. FRP e(FRP(SceneAccumulator IO)i o)i o)-\u003eIO(AnimationObject i o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:newAnimationObjectA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Animation",
          "name": "newAnimationObjectM",
          "package": "rsagl",
          "signature": "(i -\u003e AniM o) -\u003e AnimationObject i o",
          "source": "src/RSAGL-Animation-Animation.html#newAnimationObjectM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "newAnimationObjectM",
          "normalized": "(a-\u003eAniM b)-\u003eAnimationObject a b",
          "package": "rsagl",
          "partial": "Animation Object",
          "signature": "(i-\u003eAniM o)-\u003eAnimationObject i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:newAnimationObjectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate an animation continuously.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "rotateM",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Rate Angle -\u003e AniM a -\u003e AniM a",
          "source": "src/RSAGL-Animation-Animation.html#rotateM",
          "type": "function"
        },
        "index": {
          "description": "Rotate an animation continuously",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "rotateM",
          "normalized": "Vector D-\u003eRate Angle-\u003eAniM a-\u003eAniM a",
          "package": "rsagl",
          "signature": "Vector D-\u003eRate Angle-\u003eAniM a-\u003eAniM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:rotateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a continuous rotation.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Animation",
          "name": "rotationM",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Rate Angle -\u003e AniM AffineTransformation",
          "source": "src/RSAGL-Animation-Animation.html#rotationM",
          "type": "function"
        },
        "index": {
          "description": "Generates continuous rotation",
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "rotationM",
          "normalized": "Vector D-\u003eRate Angle-\u003eAniM AffineTransformation",
          "package": "rsagl",
          "signature": "Vector D-\u003eRate Angle-\u003eAniM AffineTransformation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:rotationM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Animation",
          "name": "runAniM",
          "package": "rsagl",
          "signature": "AniM (a, SceneLayerInfo) -\u003e IO (a, Scene)",
          "source": "src/RSAGL-Animation-Animation.html#runAniM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "runAniM",
          "normalized": "AniM(a,SceneLayerInfo)-\u003eIO(a,Scene)",
          "package": "rsagl",
          "partial": "Ani",
          "signature": "AniM(a,SceneLayerInfo)-\u003eIO(a,Scene)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:runAniM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Animation",
          "name": "runAnimationObject",
          "package": "rsagl",
          "signature": "AnimationObject i o -\u003e i -\u003e AniM o",
          "source": "src/RSAGL-Animation-Animation.html#runAnimationObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation Animation",
          "module": "RSAGL.Animation.Animation",
          "name": "runAnimationObject",
          "normalized": "AnimationObject a b-\u003ea-\u003eAniM b",
          "package": "rsagl",
          "partial": "Animation Object",
          "signature": "AnimationObject i o-\u003ei-\u003eAniM o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Animation.html#v:runAnimationObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "AnimationExtras",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-AnimationExtras.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "AnimationExtras",
          "package": "rsagl",
          "partial": "Animation Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time-varying, velocity-aware vector field that can act on a particle.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "ForceFunction",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-AnimationExtras.html#ForceFunction",
          "type": "type"
        },
        "index": {
          "description": "time-varying velocity-aware vector field that can act on particle",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "ForceFunction",
          "package": "rsagl",
          "partial": "Force Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:ForceFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA particle with a position and velocity.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "PV",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-AnimationExtras.html#PV",
          "type": "type"
        },
        "index": {
          "description": "particle with position and velocity",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "PV",
          "package": "rsagl",
          "partial": "PV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA particle with a position, velocity and acceleration.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "PVA",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-AnimationExtras.html#PVA",
          "type": "type"
        },
        "index": {
          "description": "particle with position velocity and acceleration",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "PVA",
          "package": "rsagl",
          "partial": "PVA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#t:PVA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an affine transformation to an animation.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "animateA",
          "package": "rsagl",
          "signature": "FRP e m j AffineTransformation -\u003e FRP e m j p -\u003e FRP e m j p",
          "source": "src/RSAGL-Animation-AnimationExtras.html#animateA",
          "type": "function"
        },
        "index": {
          "description": "Apply an affine transformation to an animation",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "animateA",
          "normalized": "FRP a b c AffineTransformation-\u003eFRP a b c d-\u003eFRP a b c d",
          "package": "rsagl",
          "signature": "FRP e m j AffineTransformation-\u003eFRP e m j p-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:animateA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd many forces together.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "concatForces",
          "package": "rsagl",
          "signature": "[ForceFunction] -\u003e ForceFunction",
          "source": "src/RSAGL-Animation-AnimationExtras.html#concatForces",
          "type": "function"
        },
        "index": {
          "description": "Add many forces together",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "concatForces",
          "normalized": "[ForceFunction]-\u003eForceFunction",
          "package": "rsagl",
          "partial": "Forces",
          "signature": "[ForceFunction]-\u003eForceFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:concatForces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter function on forces.  Where the filter is False,\n the force is coerced to zero.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "constrainForce",
          "package": "rsagl",
          "signature": "(Time -\u003e Point3D -\u003e Rate Vector3D -\u003e Bool) -\u003e ForceFunction -\u003e ForceFunction",
          "source": "src/RSAGL-Animation-AnimationExtras.html#constrainForce",
          "type": "function"
        },
        "index": {
          "description": "filter function on forces Where the filter is False the force is coerced to zero",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "constrainForce",
          "normalized": "(Time-\u003ePoint D-\u003eRate Vector D-\u003eBool)-\u003eForceFunction-\u003eForceFunction",
          "package": "rsagl",
          "partial": "Force",
          "signature": "(Time-\u003ePoint D-\u003eRate Vector D-\u003eBool)-\u003eForceFunction-\u003eForceFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:constrainForce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA force function describing aerodynamic drag.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "drag",
          "package": "rsagl",
          "signature": "RSdouble -\u003e ForceFunction",
          "source": "src/RSAGL-Animation-AnimationExtras.html#drag",
          "type": "function"
        },
        "index": {
          "description": "force function describing aerodynamic drag",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "drag",
          "normalized": "RSdouble-\u003eForceFunction",
          "package": "rsagl",
          "signature": "RSdouble-\u003eForceFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:drag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn energy-conserving force function describing gravitational attraction.\n Accepts the intensity and singularity of the vector field.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "inverseSquareLaw",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Point3D -\u003e ForceFunction",
          "source": "src/RSAGL-Animation-AnimationExtras.html#inverseSquareLaw",
          "type": "function"
        },
        "index": {
          "description": "An energy-conserving force function describing gravitational attraction Accepts the intensity and singularity of the vector field",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "inverseSquareLaw",
          "normalized": "RSdouble-\u003ePoint D-\u003eForceFunction",
          "package": "rsagl",
          "partial": "Square Law",
          "signature": "RSdouble-\u003ePoint D-\u003eForceFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:inverseSquareLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a varying force function to a system of particles.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "particleSystem",
          "package": "rsagl",
          "signature": "Frequency -\u003e [PV] -\u003e FRP e m ([PV] -\u003e ForceFunction) [PVA]",
          "source": "src/RSAGL-Animation-AnimationExtras.html#particleSystem",
          "type": "function"
        },
        "index": {
          "description": "Apply varying force function to system of particles",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "particleSystem",
          "normalized": "Frequency-\u003e[PV]-\u003eFRP a b([PV]-\u003eForceFunction)[PVA]",
          "package": "rsagl",
          "partial": "System",
          "signature": "Frequency-\u003e[PV]-\u003eFRP e m([PV]-\u003eForceFunction)[PVA]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:particleSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways rotates the model so that it's Y+ axis points directly at the camera.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "pointAtCameraA",
          "package": "rsagl",
          "signature": "a (SceneLayer, m model) ()",
          "source": "src/RSAGL-Animation-AnimationExtras.html#pointAtCameraA",
          "type": "function"
        },
        "index": {
          "description": "Always rotates the model so that it axis points directly at the camera",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "pointAtCameraA",
          "normalized": "a(SceneLayer,b c)()",
          "package": "rsagl",
          "partial": "At Camera",
          "signature": "a(SceneLayer,m model)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:pointAtCameraA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn energy-conserving force function that increases in\n intensity with distance.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "quadraticTrap",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Point3D -\u003e ForceFunction",
          "source": "src/RSAGL-Animation-AnimationExtras.html#quadraticTrap",
          "type": "function"
        },
        "index": {
          "description": "An energy-conserving force function that increases in intensity with distance",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "quadraticTrap",
          "normalized": "RSdouble-\u003ePoint D-\u003eForceFunction",
          "package": "rsagl",
          "partial": "Trap",
          "signature": "RSdouble-\u003ePoint D-\u003eForceFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:quadraticTrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimation that rotates continuously.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "rotateA",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Rate Angle -\u003e FRP e m j p -\u003e FRP e m j p",
          "source": "src/RSAGL-Animation-AnimationExtras.html#rotateA",
          "type": "function"
        },
        "index": {
          "description": "Animation that rotates continuously",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "rotateA",
          "normalized": "Vector D-\u003eRate Angle-\u003eFRP a b c d-\u003eFRP a b c d",
          "package": "rsagl",
          "signature": "Vector D-\u003eRate Angle-\u003eFRP e m j p-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:rotateA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers a continuous rotation.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "rotationA",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Rate Angle -\u003e FRP e m ignored AffineTransformation",
          "source": "src/RSAGL-Animation-AnimationExtras.html#rotationA",
          "type": "function"
        },
        "index": {
          "description": "Answers continuous rotation",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "rotationA",
          "normalized": "Vector D-\u003eRate Angle-\u003eFRP a b c AffineTransformation",
          "package": "rsagl",
          "signature": "Vector D-\u003eRate Angle-\u003eFRP e m ignored AffineTransformation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:rotationA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a varying force function to a particle.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "singleParticle",
          "package": "rsagl",
          "signature": "Frequency -\u003e PV -\u003e FRP e m ForceFunction PVA",
          "source": "src/RSAGL-Animation-AnimationExtras.html#singleParticle",
          "type": "function"
        },
        "index": {
          "description": "Apply varying force function to particle",
          "hierarchy": "RSAGL Animation AnimationExtras",
          "module": "RSAGL.Animation.AnimationExtras",
          "name": "singleParticle",
          "normalized": "Frequency-\u003ePV-\u003eFRP a b ForceFunction PVA",
          "package": "rsagl",
          "partial": "Particle",
          "signature": "Frequency-\u003ePV-\u003eFRP e m ForceFunction PVA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-AnimationExtras.html#v:singleParticle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "InverseKinematics",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-InverseKinematics.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "InverseKinematics",
          "package": "rsagl",
          "partial": "Inverse Kinematics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of a leg.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Leg",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-InverseKinematics.html#Leg",
          "type": "data"
        },
        "index": {
          "description": "description of leg",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Leg",
          "package": "rsagl",
          "partial": "Leg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#t:Leg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "LegStyle",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "LegStyle",
          "package": "rsagl",
          "partial": "Leg Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#t:LegStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Insectoid",
          "package": "rsagl",
          "signature": "Insectoid",
          "source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Insectoid",
          "package": "rsagl",
          "partial": "Insectoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:Insectoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Upright",
          "package": "rsagl",
          "signature": "Upright",
          "source": "src/RSAGL-Animation-InverseKinematics.html#LegStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "Upright",
          "package": "rsagl",
          "partial": "Upright",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:Upright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn acceleration function that that tries to approach a goal point.\n It begins slowing down when it comes within the goal radius, and otherwise\n travels at a fixed speed toward the goal.  The goal radius and speed are\n defined in terms of the magnitude method of the vector type.\n\u003c/p\u003e\u003cp\u003eThis function is just a pure differential equation, see \u003ccode\u003e\u003ca\u003eapproachFrom\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eapproachA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eParameters are:\n * A goal point.\n * A goal radius.\n * An approach speed.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approach",
          "package": "rsagl",
          "signature": "p -\u003e RSdouble -\u003e Rate RSdouble -\u003e Time -\u003e p -\u003e Rate v",
          "source": "src/RSAGL-Animation-InverseKinematics.html#approach",
          "type": "function"
        },
        "index": {
          "description": "An acceleration function that that tries to approach goal point It begins slowing down when it comes within the goal radius and otherwise travels at fixed speed toward the goal The goal radius and speed are defined in terms of the magnitude method of the vector type This function is just pure differential equation see approachFrom and approachA Parameters are goal point goal radius An approach speed",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approach",
          "normalized": "a-\u003eRSdouble-\u003eRate RSdouble-\u003eTime-\u003ea-\u003eRate b",
          "package": "rsagl",
          "signature": "p-\u003eRSdouble-\u003eRate RSdouble-\u003eTime-\u003ep-\u003eRate v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproach a moving goal point, starting at the initial\n position of the goal point.  The particle won't move\n until the goal point moves.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approachA",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Rate RSdouble -\u003e FRP e m p p",
          "source": "src/RSAGL-Animation-InverseKinematics.html#approachA",
          "type": "function"
        },
        "index": {
          "description": "Approach moving goal point starting at the initial position of the goal point The particle won move until the goal point moves",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approachA",
          "normalized": "RSdouble-\u003eRate RSdouble-\u003eFRP a b c c",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRate RSdouble-\u003eFRP e m p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approachA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproach a moving goal point from the specified starting point.\n See the description of \u003ccode\u003e\u003ca\u003eapproach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approachFrom",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Rate RSdouble -\u003e p -\u003e FRP e m p p",
          "source": "src/RSAGL-Animation-InverseKinematics.html#approachFrom",
          "type": "function"
        },
        "index": {
          "description": "Approach moving goal point from the specified starting point See the description of approach",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "approachFrom",
          "normalized": "RSdouble-\u003eRate RSdouble-\u003ea-\u003eFRP b c a a",
          "package": "rsagl",
          "partial": "From",
          "signature": "RSdouble-\u003eRate RSdouble-\u003ep-\u003eFRP e m p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:approachFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimates the upper and lower limbs of a joint into a single animation,\n using the affine transformations \u003ccode\u003ejoitn_arm_upper\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoint_arm_lower\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "jointAnimation",
          "package": "rsagl",
          "signature": "FRP e m () () -\u003e FRP e m () () -\u003e FRP e m Joint ()",
          "source": "src/RSAGL-Animation-InverseKinematics.html#jointAnimation",
          "type": "function"
        },
        "index": {
          "description": "Animates the upper and lower limbs of joint into single animation using the affine transformations joitn arm upper and joint arm lower",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "jointAnimation",
          "normalized": "FRP a b()()-\u003eFRP a b()()-\u003eFRP a b Joint()",
          "package": "rsagl",
          "partial": "Animation",
          "signature": "FRP e m()()-\u003eFRP e m()()-\u003eFRP e m Joint()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:jointAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a leg, based on several parameters.\n See the descriptions of \u003ccode\u003efoot\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoint\u003c/a\u003e\u003c/code\u003e for\n more information on how some of these parameters\n are interpreted.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e style - See LegStyle.\n * bend - The bend vector of the articulated joint\n * base - the base or shoulder or fixed point of the joint\n * len - the total length of the articulation\n * end - the natural resting point of the foot\n         the foot will rarely actually be here,\n         but will try to return to this point\n         as it walks.\n * animation - an animation to display the joint\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "leg",
          "package": "rsagl",
          "signature": "LegStyle -\u003e Vector3D -\u003e Point3D -\u003e RSdouble -\u003e Point3D -\u003e FRP e m Joint () -\u003e Leg e m",
          "source": "src/RSAGL-Animation-InverseKinematics.html#leg",
          "type": "function"
        },
        "index": {
          "description": "Constructs leg based on several parameters See the descriptions of foot and joint for more information on how some of these parameters are interpreted style See LegStyle bend The bend vector of the articulated joint base the base or shoulder or fixed point of the joint len the total length of the articulation end the natural resting point of the foot the foot will rarely actually be here but will try to return to this point as it walks animation an animation to display the joint",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "leg",
          "normalized": "LegStyle-\u003eVector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eFRP a b Joint()-\u003eLeg a b",
          "package": "rsagl",
          "signature": "LegStyle-\u003eVector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eFRP e m Joint()-\u003eLeg e m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:leg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a group of legs into a group that will try to keep at least half\n of the legs on the ground at all times.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "legs",
          "package": "rsagl",
          "signature": "[Leg e m] -\u003e FRP e m () ()",
          "source": "src/RSAGL-Animation-InverseKinematics.html#legs",
          "type": "function"
        },
        "index": {
          "description": "Combines group of legs into group that will try to keep at least half of the legs on the ground at all times",
          "hierarchy": "RSAGL Animation InverseKinematics",
          "module": "RSAGL.Animation.InverseKinematics",
          "name": "legs",
          "normalized": "[Leg a b]-\u003eFRP a b()()",
          "package": "rsagl",
          "signature": "[Leg e m]-\u003eFRP e m()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-InverseKinematics.html#v:legs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Joint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "partial": "Joint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of computing a joint.  It provides AffineTransformations that\n describe the orientations of the components of the joint.\n All affine transformations reorient the +Z axis to aim in the direction\n of the far point.  For example, in \u003ccode\u003ejoint_arm_lower\u003c/code\u003e the +Z axis aims\n at the position of the hand.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "data"
        },
        "index": {
          "description": "The result of computing joint It provides AffineTransformations that describe the orientations of the components of the joint All affine transformations reorient the axis to aim in the direction of the far point For example in joint arm lower the axis aims at the position of the hand",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "partial": "Joint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#t:Joint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "signature": "Joint",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "Joint",
          "package": "rsagl",
          "partial": "Joint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:Joint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a joint where given a bend vector, describing the direction\n in which the articulated point (elbow) will try to move when the\n arm is retracted, and shoulder or base of the joint, the total\n length of the joint, and ideal position of the hand.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Point3D -\u003e RSdouble -\u003e Point3D -\u003e Joint",
          "source": "src/RSAGL-Animation-Joint.html#joint",
          "type": "function"
        },
        "index": {
          "description": "Compute joint where given bend vector describing the direction in which the articulated point elbow will try to move when the arm is retracted and shoulder or base of the joint the total length of the joint and ideal position of the hand",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint",
          "normalized": "Vector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eJoint",
          "package": "rsagl",
          "signature": "Vector D-\u003ePoint D-\u003eRSdouble-\u003ePoint D-\u003eJoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe affine transformation where the origin\n is the hand.  Oriented to preserve as much as\n possible the +Y axis.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_hand",
          "package": "rsagl",
          "signature": "AffineTransformation",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The affine transformation where the origin is the hand Oriented to preserve as much as possible the axis",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_hand",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_hand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe affine transformation to the lower\n arm, where the origin is the elbow.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_lower",
          "package": "rsagl",
          "signature": "AffineTransformation",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The affine transformation to the lower arm where the origin is the elbow",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_lower",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe affine transformation to the upper\n arm, where the origin is the shoulder.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_upper",
          "package": "rsagl",
          "signature": "AffineTransformation",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The affine transformation to the upper arm where the origin is the shoulder",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_arm_upper",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_arm_upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe articulated point of the joint.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_elbow",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The articulated point of the joint",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_elbow",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_elbow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe far end point of the joint.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_hand",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The far end point of the joint",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_hand",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_hand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixed point of the joint.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_shoulder",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Animation-Joint.html#Joint",
          "type": "function"
        },
        "index": {
          "description": "The fixed point of the joint",
          "hierarchy": "RSAGL Animation Joint",
          "module": "RSAGL.Animation.Joint",
          "name": "joint_shoulder",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-Joint.html#v:joint_shoulder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "KinematicSensors",
          "package": "rsagl",
          "source": "src/RSAGL-Animation-KinematicSensors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Animation KinematicSensors",
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "KinematicSensors",
          "package": "rsagl",
          "partial": "Kinematic Sensors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasures the (presumed) acceleration due to inertia of a point\n in the local coordinate system, relative to a (presumably) inertial frame a reference.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "inertia",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e Point3D -\u003e FRP e m () (Acceleration Vector3D)",
          "source": "src/RSAGL-Animation-KinematicSensors.html#inertia",
          "type": "function"
        },
        "index": {
          "description": "Measures the presumed acceleration due to inertia of point in the local coordinate system relative to presumably inertial frame reference",
          "hierarchy": "RSAGL Animation KinematicSensors",
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "inertia",
          "normalized": "CoordinateSystem-\u003ePoint D-\u003eFRP a b()(Acceleration Vector D)",
          "package": "rsagl",
          "signature": "CoordinateSystem-\u003ePoint D-\u003eFRP e m()(Acceleration Vector D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#v:inertia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasures the distance traveled, by the origin of the local coordinate\n system, as measured in a remote coordinate system, in terms\n of a vector in the local coordinate system.\n\u003c/p\u003e\u003cp\u003eFor example, if we are animating a model of a wheel, we could put an\n odometer at the bottom-most point of the wheel, and then rotate\n the wheel according to the result.  The wheel would seem to\n turn as it travels, but would not turn when dragged sidewise.\n\u003c/p\u003e",
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "odometer",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e Vector3D -\u003e FRP e m () RSdouble",
          "source": "src/RSAGL-Animation-KinematicSensors.html#odometer",
          "type": "function"
        },
        "index": {
          "description": "Measures the distance traveled by the origin of the local coordinate system as measured in remote coordinate system in terms of vector in the local coordinate system For example if we are animating model of wheel we could put an odometer at the bottom-most point of the wheel and then rotate the wheel according to the result The wheel would seem to turn as it travels but would not turn when dragged sidewise",
          "hierarchy": "RSAGL Animation KinematicSensors",
          "module": "RSAGL.Animation.KinematicSensors",
          "name": "odometer",
          "normalized": "CoordinateSystem-\u003eVector D-\u003eFRP a b()RSdouble",
          "package": "rsagl",
          "signature": "CoordinateSystem-\u003eVector D-\u003eFRP e m()RSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation-KinematicSensors.html#v:odometer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Animation",
          "name": "Animation",
          "package": "rsagl",
          "source": "src/RSAGL-Animation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Animation",
          "module": "RSAGL.Animation",
          "name": "Animation",
          "package": "rsagl",
          "partial": "Animation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Animation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "source": "src/RSAGL-Color-Alpha.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "partial": "Alpha",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color with an alpha channel.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "source": "src/RSAGL-Color-Alpha.html#Alpha",
          "type": "data"
        },
        "index": {
          "description": "color with an alpha channel",
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "partial": "Alpha",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#t:Alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "signature": "Alpha",
          "source": "src/RSAGL-Color-Alpha.html#Alpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "Alpha",
          "package": "rsagl",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:Alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply (more) transparency to a color.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Alpha c -\u003e Alpha c",
          "source": "src/RSAGL-Color-Alpha.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "Apply more transparency to color",
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha",
          "normalized": "RSdouble-\u003eAlpha a-\u003eAlpha a",
          "package": "rsagl",
          "signature": "RSdouble-\u003eAlpha c-\u003eAlpha c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the range [0..255].\n\u003c/p\u003e",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha256",
          "package": "rsagl",
          "signature": "i -\u003e Alpha c -\u003e Alpha c",
          "source": "src/RSAGL-Color-Alpha.html#alpha256",
          "type": "function"
        },
        "index": {
          "description": "In the range",
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha256",
          "normalized": "a-\u003eAlpha b-\u003eAlpha b",
          "package": "rsagl",
          "signature": "i-\u003eAlpha c-\u003eAlpha c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Alpha",
          "name": "alpha_alpha",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-Alpha.html#Alpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha_alpha",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha_alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Alpha",
          "name": "alpha_color",
          "package": "rsagl",
          "signature": "c",
          "source": "src/RSAGL-Color-Alpha.html#Alpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color Alpha",
          "module": "RSAGL.Color.Alpha",
          "name": "alpha_color",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Alpha.html#v:alpha_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Channels",
          "name": "Channels",
          "package": "rsagl",
          "source": "src/RSAGL-Color-Channels.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "Channels",
          "package": "rsagl",
          "partial": "Channels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe blue channel of the RGB color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_blue",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_blue",
          "type": "function"
        },
        "index": {
          "description": "The blue channel of the RGB color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blue (1.0) vs. yellow (-1.0) channel.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_blue_yellow",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_blue_yellow",
          "type": "function"
        },
        "index": {
          "description": "blue vs yellow channel",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_blue_yellow",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_blue_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum channel of the subtractive CMY color space.\n This channel represents the device gamut: it should be between 0 and 1.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_boldness",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_boldness",
          "type": "function"
        },
        "index": {
          "description": "The maximum channel of the subtractive CMY color space This channel represents the device gamut it should be between and",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_boldness",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_boldness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe brightness channel in simple device interpretation.\n That is, (red + green + blue) / 3.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_brightness",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_brightness",
          "type": "function"
        },
        "index": {
          "description": "The brightness channel in simple device interpretation That is red green blue",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_brightness",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_brightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Chroma (colorfulness) of a color, isotropic to luminance.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_chroma",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_chroma",
          "type": "function"
        },
        "index": {
          "description": "The Chroma colorfulness of color isotropic to luminance",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_chroma",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_chroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cyan channel of the CMY color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_cyan",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_cyan",
          "type": "function"
        },
        "index": {
          "description": "The cyan channel of the CMY color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_cyan",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe green channel of the RGB color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_green",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_green",
          "type": "function"
        },
        "index": {
          "description": "The green channel of the RGB color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA green (1.0) vs. magenta (-1.0) channel.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_green_magenta",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_green_magenta",
          "type": "function"
        },
        "index": {
          "description": "green vs magenta channel",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_green_magenta",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_green_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum channel of the neutral RGB color space.\n This channel represents the device gamut: it should be between -1 and 1.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_intensity",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_intensity",
          "type": "function"
        },
        "index": {
          "description": "The maximum channel of the neutral RGB color space This channel represents the device gamut it should be between and",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_intensity",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_intensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLuminance of a color as percieved by the human eye.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_luminance",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_luminance",
          "type": "function"
        },
        "index": {
          "description": "Luminance of color as percieved by the human eye",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_luminance",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_luminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe magenta channel of the CMY color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_magenta",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_magenta",
          "type": "function"
        },
        "index": {
          "description": "The magenta channel of the CMY color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_magenta",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe red channel of the RGB color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_red",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_red",
          "type": "function"
        },
        "index": {
          "description": "The red channel of the RGB color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_red",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA red (1.0) vs. cyan (-1.0) channel.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_red_cyan",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_red_cyan",
          "type": "function"
        },
        "index": {
          "description": "red vs cyan channel",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_red_cyan",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_red_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum channel of the additive RGB color space.\n This is identical to the value channel of the HSB color model.\n This channel represents the device gamut: it should be between 0 and 1.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_value",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_value",
          "type": "function"
        },
        "index": {
          "description": "The maximum channel of the additive RGB color space This is identical to the value channel of the HSB color model This channel represents the device gamut it should be between and",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_value",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe yellow channel of the CMY color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Channels",
          "name": "channel_yellow",
          "package": "rsagl",
          "signature": "ColorChannel",
          "source": "src/RSAGL-Color-Channels.html#channel_yellow",
          "type": "function"
        },
        "index": {
          "description": "The yellow channel of the CMY color space",
          "hierarchy": "RSAGL Color Channels",
          "module": "RSAGL.Color.Channels",
          "name": "channel_yellow",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Channels.html#v:channel_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorSpace",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorSpace",
          "package": "rsagl",
          "partial": "Color Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn affine transformation from the default RGB color space\n to the specified color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "AffineColorSpace",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#AffineColorSpace",
          "type": "data"
        },
        "index": {
          "description": "An affine transformation from the default RGB color space to the specified color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "AffineColorSpace",
          "package": "rsagl",
          "partial": "Affine Color Space",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:AffineColorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e, of a 3-channel color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ChannelIndex",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ChannelIndex",
          "type": "data"
        },
        "index": {
          "description": "channel channel channel of channel color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ChannelIndex",
          "package": "rsagl",
          "partial": "Channel Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ChannelIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific component of a 3-channel color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorChannel",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ColorChannel",
          "type": "data"
        },
        "index": {
          "description": "specific component of channel color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorChannel",
          "package": "rsagl",
          "partial": "Color Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color space specification or color type that has an associated\n color space.\n\u003c/p\u003e\u003cp\u003eIf a type implements both \u003ccode\u003e\u003ca\u003eImportColorCoordinates\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eColorSpace\u003c/a\u003e\u003c/code\u003e, then it must ensure that:\n\u003c/p\u003e\u003cpre\u003eimportColorCoordinates f =\n     (let c = importColorCoordinates (const $ f $ affineColorSpaceOf c) in c)\u003c/pre\u003e\u003cp\u003eThis is not hard -- all that is required is that\n \u003ccode\u003eaffineColorSpaceOf undefined\u003c/code\u003e is defined.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorSpace",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ColorSpace",
          "type": "class"
        },
        "index": {
          "description": "color space specification or color type that has an associated color space If type implements both ImportColorCoordinates and ColorSpace then it must ensure that importColorCoordinates let importColorCoordinates const affineColorSpaceOf in This is not hard all that is required is that affineColorSpaceOf undefined is defined",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorSpace",
          "package": "rsagl",
          "partial": "Color Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rotatable color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorWheel",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ColorWheel",
          "type": "data"
        },
        "index": {
          "description": "rotatable color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ColorWheel",
          "package": "rsagl",
          "partial": "Color Wheel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ColorWheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color type that can export its color coordinates.\n An easy implementation is\n\u003c/p\u003e\u003cpre\u003etransformColorFromTo your_color_space your_color_coordinates\u003c/pre\u003e\u003cp\u003eIf a type implements both \u003ccode\u003e\u003ca\u003eExportColorCoordinates\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eImportColorCoordinates\u003c/a\u003e\u003c/code\u003e, then it must ensure that\n \u003ccode\u003eimportColorCoordinates . exportColorCoordinates = id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ExportColorCoordinates",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ExportColorCoordinates",
          "type": "class"
        },
        "index": {
          "description": "color type that can export its color coordinates An easy implementation is transformColorFromTo your color space your color coordinates If type implements both ExportColorCoordinates and ImportColorCoordinates then it must ensure that importColorCoordinates exportColorCoordinates id",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ExportColorCoordinates",
          "package": "rsagl",
          "partial": "Export Color Coordinates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ExportColorCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color type that can import its color coordinates.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ImportColorCoordinates",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#ImportColorCoordinates",
          "type": "class"
        },
        "index": {
          "description": "color type that can import its color coordinates",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "ImportColorCoordinates",
          "package": "rsagl",
          "partial": "Import Color Coordinates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:ImportColorCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view of a specific color channel, such as red, or luminance.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "LinearMetric",
          "package": "rsagl",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "data"
        },
        "index": {
          "description": "view of specific color channel such as red or luminance",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "LinearMetric",
          "package": "rsagl",
          "partial": "Linear Metric",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#t:LinearMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.ColorSpace",
          "name": "LinearMetric",
          "package": "rsagl",
          "signature": "LinearMetric",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "LinearMetric",
          "package": "rsagl",
          "partial": "Linear Metric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:LinearMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.ColorSpace",
          "name": "affineColorSpaceOf",
          "package": "rsagl",
          "signature": "cs -\u003e AffineColorSpace",
          "source": "src/RSAGL-Color-ColorSpace.html#affineColorSpaceOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "affineColorSpaceOf",
          "normalized": "a-\u003eAffineColorSpace",
          "package": "rsagl",
          "partial": "Color Space Of",
          "signature": "cs-\u003eAffineColorSpace",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:affineColorSpaceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_u",
          "package": "rsagl",
          "signature": "ChannelIndex",
          "source": "src/RSAGL-Color-ColorSpace.html#channel_u",
          "type": "function"
        },
        "index": {
          "description": "The first channel of color space represented by the ordered tripple",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_u",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe second channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_v",
          "package": "rsagl",
          "signature": "ChannelIndex",
          "source": "src/RSAGL-Color-ColorSpace.html#channel_v",
          "type": "function"
        },
        "index": {
          "description": "The second channel of color space represented by the ordered tripple",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_v",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe third channel of a color space represented by the ordered tripple,\n \u003ccode\u003e(u,v,w)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_w",
          "package": "rsagl",
          "signature": "ChannelIndex",
          "source": "src/RSAGL-Color-ColorSpace.html#channel_w",
          "type": "function"
        },
        "index": {
          "description": "The third channel of color space represented by the ordered tripple",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "channel_w",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:channel_w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe red-green-blue device color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "color_space_rgb",
          "package": "rsagl",
          "signature": "AffineColorSpace",
          "source": "src/RSAGL-Color-ColorSpace.html#color_space_rgb",
          "type": "function"
        },
        "index": {
          "description": "The red-green-blue device color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "color_space_rgb",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:color_space_rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel constructed with red, green and blue device primaries\n and a luminance component.  This is the basis of the HCL color system.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "color_wheel_rgbl",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-ColorSpace.html#color_wheel_rgbl",
          "type": "function"
        },
        "index": {
          "description": "color wheel constructed with red green and blue device primaries and luminance component This is the basis of the HCL color system",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "color_wheel_rgbl",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:color_wheel_rgbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.ColorSpace",
          "name": "exportColorCoordinates",
          "package": "rsagl",
          "signature": "c -\u003e AffineColorSpace -\u003e Point3D",
          "source": "src/RSAGL-Color-ColorSpace.html#exportColorCoordinates",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "exportColorCoordinates",
          "normalized": "a-\u003eAffineColorSpace-\u003ePoint D",
          "package": "rsagl",
          "partial": "Color Coordinates",
          "signature": "c-\u003eAffineColorSpace-\u003ePoint D",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:exportColorCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.ColorSpace",
          "name": "importColorCoordinates",
          "package": "rsagl",
          "signature": "(AffineColorSpace -\u003e Point3D) -\u003e c",
          "source": "src/RSAGL-Color-ColorSpace.html#importColorCoordinates",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "importColorCoordinates",
          "normalized": "(AffineColorSpace-\u003ePoint D)-\u003ea",
          "package": "rsagl",
          "partial": "Color Coordinates",
          "signature": "(AffineColorSpace-\u003ePoint D)-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:importColorCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to modify a color channel independantly\n from the other color channels in the same color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_color_function",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Color",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "function"
        },
        "index": {
          "description": "function to modify color channel independantly from the other color channels in the same color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_color_function",
          "normalized": "RSdouble-\u003eColor",
          "package": "rsagl",
          "signature": "RSdouble-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_color_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range of a color channel that is within gamut.\n This range depends on the channel and the particular\n color being observed, and may not exist if the\n color itself is out of gamut.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_gamut_bounds",
          "package": "rsagl",
          "signature": "Maybe (RSdouble, RSdouble)",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "function"
        },
        "index": {
          "description": "The range of color channel that is within gamut This range depends on the channel and the particular color being observed and may not exist if the color itself is out of gamut",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_gamut_bounds",
          "normalized": "Maybe(RSdouble,RSdouble)",
          "package": "rsagl",
          "signature": "Maybe(RSdouble,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_gamut_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe original color.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_original",
          "package": "rsagl",
          "signature": "Color",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "function"
        },
        "index": {
          "description": "The original color",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_original",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_original"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of the particular color channel for the\n particular color.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_value",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-ColorSpace.html#LinearMetric",
          "type": "function"
        },
        "index": {
          "description": "The value of the particular color channel for the particular color",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "linear_value",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:linear_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an isotropic \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e that runs along a\n hue angle.  The meaning of the hue angle depends on the\n primary colors used in the construction of the color wheel.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newAngularChannel",
          "package": "rsagl",
          "signature": "ColorWheel -\u003e Angle -\u003e ColorChannel",
          "source": "src/RSAGL-Color-ColorSpace.html#newAngularChannel",
          "type": "function"
        },
        "index": {
          "description": "Construct an isotropic ColorChannel that runs along hue angle The meaning of the hue angle depends on the primary colors used in the construction of the color wheel",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newAngularChannel",
          "normalized": "ColorWheel-\u003eAngle-\u003eColorChannel",
          "package": "rsagl",
          "partial": "Angular Channel",
          "signature": "ColorWheel-\u003eAngle-\u003eColorChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newAngularChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePick a channel from a color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newChannel",
          "package": "rsagl",
          "signature": "ChannelIndex -\u003e cs -\u003e ColorChannel",
          "source": "src/RSAGL-Color-ColorSpace.html#newChannel",
          "type": "function"
        },
        "index": {
          "description": "Pick channel from color space",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newChannel",
          "normalized": "ChannelIndex-\u003ea-\u003eColorChannel",
          "package": "rsagl",
          "partial": "Channel",
          "signature": "ChannelIndex-\u003ecs-\u003eColorChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new color space.  This requires a minimal point\n (the black point in an additive color space, or the white point\n in a subtractive color space), and three primary colors.\n The three primarys color correspond to the \u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newColorSpace",
          "package": "rsagl",
          "signature": "c -\u003e c -\u003e c -\u003e c -\u003e AffineColorSpace",
          "source": "src/RSAGL-Color-ColorSpace.html#newColorSpace",
          "type": "function"
        },
        "index": {
          "description": "Construct new color space This requires minimal point the black point in an additive color space or the white point in subtractive color space and three primary colors The three primarys color correspond to the channel channel and channel respectively",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newColorSpace",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eAffineColorSpace",
          "package": "rsagl",
          "partial": "Color Space",
          "signature": "c-\u003ec-\u003ec-\u003ec-\u003eAffineColorSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newColorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new color wheel.  This requires a minimal point,\n (the black point in an additive color space, or the white point\n in a subtractive color space), and three primary colors with\n assigned hue angles and value parameters.\n The hue angle maps onto \u003ccode\u003e\u003ca\u003echannel_u\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echannel_v\u003c/a\u003e\u003c/code\u003e, while\n the value parameter maps directly and additively onto\n \u003ccode\u003e\u003ca\u003echannel_w\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newColorWheel",
          "package": "rsagl",
          "signature": "c -\u003e (c, Angle, RSdouble) -\u003e (c, Angle, RSdouble) -\u003e (c, Angle, RSdouble) -\u003e ColorWheel",
          "source": "src/RSAGL-Color-ColorSpace.html#newColorWheel",
          "type": "function"
        },
        "index": {
          "description": "Construct new color wheel This requires minimal point the black point in an additive color space or the white point in subtractive color space and three primary colors with assigned hue angles and value parameters The hue angle maps onto channel and channel while the value parameter maps directly and additively onto channel",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newColorWheel",
          "normalized": "a-\u003e(a,Angle,RSdouble)-\u003e(a,Angle,RSdouble)-\u003e(a,Angle,RSdouble)-\u003eColorWheel",
          "package": "rsagl",
          "partial": "Color Wheel",
          "signature": "c-\u003e(c,Angle,RSdouble)-\u003e(c,Angle,RSdouble)-\u003e(c,Angle,RSdouble)-\u003eColorWheel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newColorWheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e representing the maximum\n of the three color components.  For example, the\n maximum of \u003ccode\u003eRGB 0.25 0.5 0.4\u003c/code\u003e is 0.5.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newMaximalChannel",
          "package": "rsagl",
          "signature": "AffineColorSpace -\u003e ColorChannel",
          "source": "src/RSAGL-Color-ColorSpace.html#newMaximalChannel",
          "type": "function"
        },
        "index": {
          "description": "Construct ColorChannel representing the maximum of the three color components For example the maximum of RGB is",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newMaximalChannel",
          "normalized": "AffineColorSpace-\u003eColorChannel",
          "package": "rsagl",
          "partial": "Maximal Channel",
          "signature": "AffineColorSpace-\u003eColorChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newMaximalChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an isotropic \u003ccode\u003e\u003ca\u003eColorChannel\u003c/a\u003e\u003c/code\u003e along the radii\n of a color wheel.  This is exactly like calling\n \u003ccode\u003e\u003ca\u003enewAngularChannel\u003c/a\u003e\u003c/code\u003e knowing in advance the specific\n hue of the color in question.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newRadialChannel",
          "package": "rsagl",
          "signature": "ColorWheel -\u003e ColorChannel",
          "source": "src/RSAGL-Color-ColorSpace.html#newRadialChannel",
          "type": "function"
        },
        "index": {
          "description": "Construct an isotropic ColorChannel along the radii of color wheel This is exactly like calling newAngularChannel knowing in advance the specific hue of the color in question",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "newRadialChannel",
          "normalized": "ColorWheel-\u003eColorChannel",
          "package": "rsagl",
          "partial": "Radial Channel",
          "signature": "ColorWheel-\u003eColorChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:newRadialChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform colors between color spaces.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "transformColor",
          "package": "rsagl",
          "signature": "source -\u003e dest",
          "source": "src/RSAGL-Color-ColorSpace.html#transformColor",
          "type": "function"
        },
        "index": {
          "description": "Transform colors between color spaces",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "transformColor",
          "normalized": "a-\u003eb",
          "package": "rsagl",
          "partial": "Color",
          "signature": "source-\u003edest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:transformColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform ordered triples between color spaces.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "transformColorFromTo",
          "package": "rsagl",
          "signature": "AffineColorSpace -\u003e Point3D -\u003e AffineColorSpace -\u003e Point3D",
          "source": "src/RSAGL-Color-ColorSpace.html#transformColorFromTo",
          "type": "function"
        },
        "index": {
          "description": "Transform ordered triples between color spaces",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "transformColorFromTo",
          "normalized": "AffineColorSpace-\u003ePoint D-\u003eAffineColorSpace-\u003ePoint D",
          "package": "rsagl",
          "partial": "Color From To",
          "signature": "AffineColorSpace-\u003ePoint D-\u003eAffineColorSpace-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:transformColorFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a specific channel of a color.\n\u003c/p\u003e",
          "module": "RSAGL.Color.ColorSpace",
          "name": "viewChannel",
          "package": "rsagl",
          "signature": "ColorChannel -\u003e c -\u003e LinearMetric",
          "source": "src/RSAGL-Color-ColorSpace.html#viewChannel",
          "type": "function"
        },
        "index": {
          "description": "Read specific channel of color",
          "hierarchy": "RSAGL Color ColorSpace",
          "module": "RSAGL.Color.ColorSpace",
          "name": "viewChannel",
          "normalized": "ColorChannel-\u003ea-\u003eLinearMetric",
          "package": "rsagl",
          "partial": "Channel",
          "signature": "ColorChannel-\u003ec-\u003eLinearMetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-ColorSpace.html#v:viewChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "source": "src/RSAGL-Color-HCL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "partial": "HCL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color in the hue-chroma-luminance color space.\n This is an additive color system (like RGB).\n\u003c/p\u003e",
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "source": "src/RSAGL-Color-HCL.html#HCL",
          "type": "data"
        },
        "index": {
          "description": "color in the hue-chroma-luminance color space This is an additive color system like RGB",
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "partial": "HCL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#t:HCL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "signature": "HCL",
          "source": "src/RSAGL-Color-HCL.html#HCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "HCL",
          "package": "rsagl",
          "partial": "HCL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:HCL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.HCL",
          "name": "hcl_chroma",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-HCL.html#HCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "hcl_chroma",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_chroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.HCL",
          "name": "hcl_hue",
          "package": "rsagl",
          "signature": "Angle",
          "source": "src/RSAGL-Color-HCL.html#HCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "hcl_hue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_hue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.HCL",
          "name": "hcl_luminance",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-HCL.html#HCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color HCL",
          "module": "RSAGL.Color.HCL",
          "name": "hcl_luminance",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-HCL.html#v:hcl_luminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.LinearAdjust",
          "name": "LinearAdjust",
          "package": "rsagl",
          "source": "src/RSAGL-Color-LinearAdjust.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "LinearAdjust",
          "package": "rsagl",
          "partial": "Linear Adjust",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.LinearAdjust",
          "name": "LinearAdjustment",
          "package": "rsagl",
          "source": "src/RSAGL-Color-LinearAdjust.html#LinearAdjustment",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "LinearAdjustment",
          "package": "rsagl",
          "partial": "Linear Adjustment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#t:LinearAdjustment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManipulate an arbitrary component of a color.\n\u003c/p\u003e",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "adjustColor",
          "package": "rsagl",
          "signature": "ColorChannel -\u003e LinearAdjustment -\u003e c -\u003e c'",
          "source": "src/RSAGL-Color-LinearAdjust.html#adjustColor",
          "type": "function"
        },
        "index": {
          "description": "Manipulate an arbitrary component of color",
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "adjustColor",
          "normalized": "ColorChannel-\u003eLinearAdjustment-\u003ea-\u003eb",
          "package": "rsagl",
          "partial": "Color",
          "signature": "ColorChannel-\u003eLinearAdjustment-\u003ec-\u003ec'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:adjustColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClamp a channel to the gamut.\n\u003c/p\u003e",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "clamp",
          "package": "rsagl",
          "signature": "LinearAdjustment",
          "source": "src/RSAGL-Color-LinearAdjust.html#clamp",
          "type": "function"
        },
        "index": {
          "description": "Clamp channel to the gamut",
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "clamp",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease a channel to a maximum in-gamut value.\n\u003c/p\u003e",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "maximize",
          "package": "rsagl",
          "signature": "LinearAdjustment",
          "source": "src/RSAGL-Color-LinearAdjust.html#maximize",
          "type": "function"
        },
        "index": {
          "description": "Increase channel to maximum in-gamut value",
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "maximize",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease a channel to it's minimum in-gamut value.\n\u003c/p\u003e",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "minimize",
          "package": "rsagl",
          "signature": "LinearAdjustment",
          "source": "src/RSAGL-Color-LinearAdjust.html#minimize",
          "type": "function"
        },
        "index": {
          "description": "Decrease channel to it minimum in-gamut value",
          "hierarchy": "RSAGL Color LinearAdjust",
          "module": "RSAGL.Color.LinearAdjust",
          "name": "minimize",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-LinearAdjust.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.OpenGL",
          "name": "OpenGL",
          "package": "rsagl",
          "source": "src/RSAGL-Color-OpenGL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color OpenGL",
          "module": "RSAGL.Color.OpenGL",
          "name": "OpenGL",
          "package": "rsagl",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.OpenGL",
          "name": "ColorToOpenGL",
          "package": "rsagl",
          "source": "src/RSAGL-Color-OpenGL.html#ColorToOpenGL",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Color OpenGL",
          "module": "RSAGL.Color.OpenGL",
          "name": "ColorToOpenGL",
          "package": "rsagl",
          "partial": "Color To Open GL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#t:ColorToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.OpenGL",
          "name": "colorToOpenGL",
          "package": "rsagl",
          "signature": "c -\u003e Color4 GLdouble",
          "source": "src/RSAGL-Color-OpenGL.html#colorToOpenGL",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Color OpenGL",
          "module": "RSAGL.Color.OpenGL",
          "name": "colorToOpenGL",
          "normalized": "a-\u003eColor GLdouble",
          "package": "rsagl",
          "partial": "To Open GL",
          "signature": "c-\u003eColor GLdouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-OpenGL.html#v:colorToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "source": "src/RSAGL-Color-RGB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "partial": "RGB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color in the red-green-blue color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "source": "src/RSAGL-Color-RGB.html#RGB",
          "type": "data"
        },
        "index": {
          "description": "color in the red-green-blue color space",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "partial": "RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#t:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RGB.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "RGB",
          "package": "rsagl",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a gray color from a value in the range\n [0.0..1.0].\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "grayscale",
          "package": "rsagl",
          "signature": "RSdouble -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#grayscale",
          "type": "function"
        },
        "index": {
          "description": "Construct gray color from value in the range",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "grayscale",
          "normalized": "RSdouble-\u003ea",
          "package": "rsagl",
          "signature": "RSdouble-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:grayscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a gray color from a value in the range\n [0..255].\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "grayscale256",
          "package": "rsagl",
          "signature": "i -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#grayscale256",
          "type": "function"
        },
        "index": {
          "description": "Construct gray color from value in the range",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "grayscale256",
          "normalized": "a-\u003eb",
          "package": "rsagl",
          "signature": "i-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:grayscale256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "greyscale",
          "package": "rsagl",
          "signature": "RSdouble -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#greyscale",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "greyscale",
          "normalized": "RSdouble-\u003ea",
          "package": "rsagl",
          "signature": "RSdouble-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:greyscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "greyscale256",
          "package": "rsagl",
          "signature": "i -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#greyscale256",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "greyscale256",
          "normalized": "a-\u003eb",
          "package": "rsagl",
          "signature": "i-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:greyscale256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "mapRGB",
          "package": "rsagl",
          "signature": "(RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-Color-RGB.html#mapRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "mapRGB",
          "normalized": "(RSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "(RSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:mapRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from an RGB triple in the range [0.0..1.0].\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "rgb",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Construct color from an RGB triple in the range",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "rgb",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from an RGB triple in the range [0..255].\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "rgb256",
          "package": "rsagl",
          "signature": "i -\u003e i -\u003e i -\u003e c",
          "source": "src/RSAGL-Color-RGB.html#rgb256",
          "type": "function"
        },
        "index": {
          "description": "Construct color from an RGB triple in the range",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "rgb256",
          "normalized": "a-\u003ea-\u003ea-\u003eb",
          "package": "rsagl",
          "signature": "i-\u003ei-\u003ei-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "rgb_blue",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-RGB.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "rgb_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "rgb_green",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-RGB.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "rgb_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "rgb_red",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Color-RGB.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "rgb_red",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:rgb_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RGB",
          "name": "zipRGB",
          "package": "rsagl",
          "signature": "(RSdouble -\u003e RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-Color-RGB.html#zipRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "zipRGB",
          "normalized": "(RSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "(RSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:zipRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combining function on three RGB values.\n\u003c/p\u003e",
          "module": "RSAGL.Color.RGB",
          "name": "zipRGB3",
          "package": "rsagl",
          "signature": "(RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble) -\u003e RGB -\u003e RGB -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-Color-RGB.html#zipRGB3",
          "type": "function"
        },
        "index": {
          "description": "combining function on three RGB values",
          "hierarchy": "RSAGL Color RGB",
          "module": "RSAGL.Color.RGB",
          "name": "zipRGB3",
          "normalized": "(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble)-\u003eRGB-\u003eRGB-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RGB.html#v:zipRGB3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "RSAGLColors",
          "package": "rsagl",
          "source": "src/RSAGL-Color-RSAGLColors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "RSAGLColors",
          "package": "rsagl",
          "partial": "RSAGLColors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "aqua",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#aqua",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "aqua",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:aqua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "beige",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#beige",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "beige",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:beige"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "black",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "black",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "blackbody",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#blackbody",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "blackbody",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:blackbody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "bright_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#bright_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "bright_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:bright_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "brown",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "brown",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "cyan",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "cyan",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#dark_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#dark_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_pink",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#dark_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_pink",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_purple",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#dark_purple",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "dark_purple",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:dark_purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "forest_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#forest_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "forest_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:forest_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "grey",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "grey",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "hot_pink",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#hot_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "hot_pink",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:hot_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "indigo",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#indigo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "indigo",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:indigo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lavender",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#lavender",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lavender",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lavender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#light_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_brown",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#light_brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_brown",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#light_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_pink",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#light_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_pink",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_purple",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#light_purple",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "light_purple",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:light_purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lilac",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#lilac",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lilac",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lilac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lime",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#lime",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lime",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lime_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#lime_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "lime_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:lime_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "magenta",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "magenta",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "maroon",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#maroon",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "maroon",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:maroon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "mauve",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#mauve",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "mauve",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:mauve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "mustard",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#mustard",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "mustard",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:mustard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "navy_blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#navy_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "navy_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:navy_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "olive",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#olive",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "olive",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:olive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "olive_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#olive_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "olive_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:olive_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "orange",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#orange",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "orange",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "pale_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#pale_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "pale_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:pale_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "peach",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#peach",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "peach",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:peach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "periwinkle",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#periwinkle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "periwinkle",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:periwinkle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "pink",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "pink",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "purple",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#purple",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "purple",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "red",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "red",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "royal_blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#royal_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "royal_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:royal_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "salmon",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#salmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "salmon",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:salmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "sea_green",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#sea_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "sea_green",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:sea_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "sky_blue",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#sky_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "sky_blue",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:sky_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "tan",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "tan",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "teal",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#teal",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "teal",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:teal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "turquoise",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#turquoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "turquoise",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "violet",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#violet",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "violet",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "white",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "white",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.RSAGLColors",
          "name": "yellow",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Color-RSAGLColors.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color RSAGLColors",
          "module": "RSAGL.Color.RSAGLColors",
          "name": "yellow",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-RSAGLColors.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color.Spaces",
          "name": "Spaces",
          "package": "rsagl",
          "source": "src/RSAGL-Color-Spaces.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "Spaces",
          "package": "rsagl",
          "partial": "Spaces",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe subtractive Cyan-Magenta-Yellow color space.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_space_cmy",
          "package": "rsagl",
          "signature": "AffineColorSpace",
          "source": "src/RSAGL-Color-Spaces.html#color_space_cmy",
          "type": "function"
        },
        "index": {
          "description": "The subtractive Cyan-Magenta-Yellow color space",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_space_cmy",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_space_cmy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RGB color space with neutral gray as the\n origin.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_space_neutral",
          "package": "rsagl",
          "signature": "AffineColorSpace",
          "source": "src/RSAGL-Color-Spaces.html#color_space_neutral",
          "type": "function"
        },
        "index": {
          "description": "The RGB color space with neutral gray as the origin",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_space_neutral",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_space_neutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel with an isotropic Blue-Yellow channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_blue_yellow_iso",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-Spaces.html#color_wheel_blue_yellow_iso",
          "type": "function"
        },
        "index": {
          "description": "color wheel with an isotropic Blue-Yellow channel The hue definition is identical to color wheel rgbl",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_blue_yellow_iso",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_blue_yellow_iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel in the subtractive Cyan-Magenta-Yellow color space.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n This color wheel uses a simple definition of black,\n \u003ccode\u003e(cyan + magenta + yellow) / 3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_cmyk",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-Spaces.html#color_wheel_cmyk",
          "type": "function"
        },
        "index": {
          "description": "color wheel in the subtractive Cyan-Magenta-Yellow color space The hue definition is identical to color wheel rgbl This color wheel uses simple definition of black cyan magenta yellow",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_cmyk",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_cmyk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel with an isotropic Green-Magenta channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_green_magenta_iso",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-Spaces.html#color_wheel_green_magenta_iso",
          "type": "function"
        },
        "index": {
          "description": "color wheel with an isotropic Green-Magenta channel The hue definition is identical to color wheel rgbl",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_green_magenta_iso",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_green_magenta_iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel with an isotropic Red-Cyan channel.\n The hue definition is identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_red_cyan_iso",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-Spaces.html#color_wheel_red_cyan_iso",
          "type": "function"
        },
        "index": {
          "description": "color wheel with an isotropic Red-Cyan channel The hue definition is identical to color wheel rgbl",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_red_cyan_iso",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_red_cyan_iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color wheel using a simple definition of brightness,\n \u003ccode\u003e(red + green + blue) / 3\u003c/code\u003e.  The hue definition is\n identical to \u003ccode\u003e\u003ca\u003ecolor_wheel_rgbl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_rgb_brightness",
          "package": "rsagl",
          "signature": "ColorWheel",
          "source": "src/RSAGL-Color-Spaces.html#color_wheel_rgb_brightness",
          "type": "function"
        },
        "index": {
          "description": "color wheel using simple definition of brightness red green blue The hue definition is identical to color wheel rgbl",
          "hierarchy": "RSAGL Color Spaces",
          "module": "RSAGL.Color.Spaces",
          "name": "color_wheel_rgb_brightness",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color-Spaces.html#v:color_wheel_rgb_brightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color",
          "name": "Color",
          "package": "rsagl",
          "source": "src/RSAGL-Color.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "Color",
          "package": "rsagl",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color",
          "name": "RGBA",
          "package": "rsagl",
          "source": "src/RSAGL-Color.html#RGBA",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "RGBA",
          "package": "rsagl",
          "partial": "RGBA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#t:RGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Color",
          "name": "filterRGB",
          "package": "rsagl",
          "signature": "RGB -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-Color.html#filterRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "filterRGB",
          "normalized": "RGB-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "RGB-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:filterRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps an RGB color between a black point and a white point.\n The first parameter, the black point, will map to RGB 0 0 0.\n The second parameter, the white point, will map to RGB 1 1 1.\n\u003c/p\u003e",
          "module": "RSAGL.Color",
          "name": "filterRGBLinear",
          "package": "rsagl",
          "signature": "RGB -\u003e RGB -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-Color.html#filterRGBLinear",
          "type": "function"
        },
        "index": {
          "description": "maps an RGB color between black point and white point The first parameter the black point will map to RGB The second parameter the white point will map to RGB",
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "filterRGBLinear",
          "normalized": "RGB-\u003eRGB-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGBLinear",
          "signature": "RGB-\u003eRGB-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:filterRGBLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic inverse of a color.\n\u003c/p\u003e",
          "module": "RSAGL.Color",
          "name": "invertRGB",
          "package": "rsagl",
          "signature": "RGB -\u003e RGB",
          "source": "src/RSAGL-Color.html#invertRGB",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic inverse of color",
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "invertRGB",
          "normalized": "RGB-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "RGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:invertRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the minimum of the three RGB components.\n\u003c/p\u003e",
          "module": "RSAGL.Color",
          "name": "minRGB",
          "package": "rsagl",
          "signature": "RGB -\u003e RSdouble",
          "source": "src/RSAGL-Color.html#minRGB",
          "type": "function"
        },
        "index": {
          "description": "Get the minimum of the three RGB components",
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "minRGB",
          "normalized": "RGB-\u003eRSdouble",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "RGB-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:minRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an RGBA color.\n\u003c/p\u003e",
          "module": "RSAGL.Color",
          "name": "rgba",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RGBA",
          "source": "src/RSAGL-Color.html#rgba",
          "type": "function"
        },
        "index": {
          "description": "Construct an RGBA color",
          "hierarchy": "RSAGL Color",
          "module": "RSAGL.Color",
          "name": "rgba",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRGBA",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Color.html#v:rgba"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "ColorPhysics",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-ColorPhysics.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Extras ColorPhysics",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "ColorPhysics",
          "package": "rsagl",
          "partial": "Color Physics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the intensity of black body radiation in terms of temperature and wavelength, as percieved by the human eye\n with a white point at which all wavelengths equal 1.0 at 5800K.\n Accepts temperature in Kelvins (K) and wavelength in nanometers (nm).\n\u003c/p\u003e",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "blackBody",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble",
          "source": "src/RSAGL-Extras-ColorPhysics.html#blackBody",
          "type": "function"
        },
        "index": {
          "description": "Indicates the intensity of black body radiation in terms of temperature and wavelength as percieved by the human eye with white point at which all wavelengths equal at Accepts temperature in Kelvins and wavelength in nanometers nm",
          "hierarchy": "RSAGL Extras ColorPhysics",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "blackBody",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble",
          "package": "rsagl",
          "partial": "Body",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:blackBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the percieved color of a black body radiator, where \u003ccode\u003ergb 1.0 1.0 1.0\u003c/code\u003e is the white point representing 5800K.\n Accepts temperature in Kelvins (K).  It is suggested to use \u003ccode\u003emaximizeRGB\u003c/code\u003e or some other filter as very dark or overbright\n colors are easily generated from this function.  In particular \u003ccode\u003emaximizeRGB . blackBodyRGB\u003c/code\u003e tends to approach roughly\n \u003ccode\u003ergb 0.0 0.0 1.0\u003c/code\u003e for very low temperatures and roughly \u003ccode\u003ergb 0.50 0.53 1.0\u003c/code\u003e for very high temperatures.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "blackBodyRGB",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB",
          "source": "src/RSAGL-Extras-ColorPhysics.html#blackBodyRGB",
          "type": "function"
        },
        "index": {
          "description": "Indicates the percieved color of black body radiator where rgb is the white point representing Accepts temperature in Kelvins It is suggested to use maximizeRGB or some other filter as very dark or overbright colors are easily generated from this function In particular maximizeRGB blackBodyRGB tends to approach roughly rgb for very low temperatures and roughly rgb for very high temperatures",
          "hierarchy": "RSAGL Extras ColorPhysics",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "blackBodyRGB",
          "normalized": "RSdouble-\u003eRGB",
          "package": "rsagl",
          "partial": "Body RGB",
          "signature": "RSdouble-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:blackBodyRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates planck's law respecting blackbody radiation.\n Accepts temperature in Kelvins (K) and wavelength in nanometers (nm).\n\u003c/p\u003e",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "plancksLaw",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble",
          "source": "src/RSAGL-Extras-ColorPhysics.html#plancksLaw",
          "type": "function"
        },
        "index": {
          "description": "Evaluates planck law respecting blackbody radiation Accepts temperature in Kelvins and wavelength in nanometers nm",
          "hierarchy": "RSAGL Extras ColorPhysics",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "plancksLaw",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble",
          "package": "rsagl",
          "partial": "Law",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:plancksLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterprets a spectral function as an \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e color by sampling in the red, green, blue, and indigo wavelengths.\n This is pretty rough, and actually interprets monochromatic spectral yellow or monochromatic spectral cyan as\n black, for example.  It also does not take into account the relative responsiveness of the human eye to\n different wavelengths, so passing \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplancksLaw\u003c/a\u003e\u003c/code\u003e 5800\u003c/code\u003e directly to this function results in bright green.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "spectralRGB",
          "package": "rsagl",
          "signature": "(RSdouble -\u003e RSdouble) -\u003e RGB",
          "source": "src/RSAGL-Extras-ColorPhysics.html#spectralRGB",
          "type": "function"
        },
        "index": {
          "description": "Interprets spectral function as an RGB color by sampling in the red green blue and indigo wavelengths This is pretty rough and actually interprets monochromatic spectral yellow or monochromatic spectral cyan as black for example It also does not take into account the relative responsiveness of the human eye to different wavelengths so passing plancksLaw directly to this function results in bright green",
          "hierarchy": "RSAGL Extras ColorPhysics",
          "module": "RSAGL.Extras.ColorPhysics",
          "name": "spectralRGB",
          "normalized": "(RSdouble-\u003eRSdouble)-\u003eRGB",
          "package": "rsagl",
          "partial": "RGB",
          "signature": "(RSdouble-\u003eRSdouble)-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-ColorPhysics.html#v:spectralRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate a realistic sky.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Sky",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-Sky.html",
          "type": "module"
        },
        "index": {
          "description": "Generate realistic sky",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Sky",
          "package": "rsagl",
          "partial": "Sky",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn atmosphere, consisting of zero or more layers of different composition.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Atmosphere",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-Sky.html#Atmosphere",
          "type": "type"
        },
        "index": {
          "description": "An atmosphere consisting of zero or more layers of different composition",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Atmosphere",
          "package": "rsagl",
          "partial": "Atmosphere",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:Atmosphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific scattering model for an \u003ccode\u003e\u003ca\u003eAtmosphereLayer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereComposition",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
          "type": "data"
        },
        "index": {
          "description": "specific scattering model for an AtmosphereLayer",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereComposition",
          "package": "rsagl",
          "partial": "Atmosphere Composition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:AtmosphereComposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single layer of atmosphere.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereLayer",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
          "type": "data"
        },
        "index": {
          "description": "single layer of atmosphere",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereLayer",
          "package": "rsagl",
          "partial": "Atmosphere Layer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:AtmosphereLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn adaptive color filter, used to set adaptive white and black points.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the result is a constant black.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "SkyFilter",
          "package": "rsagl",
          "source": "src/RSAGL-Extras-Sky.html#SkyFilter",
          "type": "type"
        },
        "index": {
          "description": "An adaptive color filter used to set adaptive white and black points Returns Nothing if the result is constant black",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "SkyFilter",
          "package": "rsagl",
          "partial": "Sky Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#t:SkyFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Rayleigh scattering, as though an oxygen-nitrogen atmosphere.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Air",
          "package": "rsagl",
          "signature": "Air",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
          "type": "function"
        },
        "index": {
          "description": "Uses Rayleigh scattering as though an oxygen-nitrogen atmosphere",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Air",
          "package": "rsagl",
          "partial": "Air",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Air"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereLayer",
          "package": "rsagl",
          "signature": "AtmosphereLayer",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "AtmosphereLayer",
          "package": "rsagl",
          "partial": "Atmosphere Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:AtmosphereLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMacroscopic colored dust spheres.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Dust",
          "package": "rsagl",
          "signature": "Dust RGB",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
          "type": "function"
        },
        "index": {
          "description": "Macroscopic colored dust spheres",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Dust",
          "package": "rsagl",
          "partial": "Dust",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Dust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnrealistic colored fog, might be appropriate for some kind of poison gas atmosphere.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Fog",
          "package": "rsagl",
          "signature": "Fog RGB",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
          "type": "function"
        },
        "index": {
          "description": "Unrealistic colored fog might be appropriate for some kind of poison gas atmosphere",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Fog",
          "package": "rsagl",
          "partial": "Fog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Fog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Mie scattering (approximate) to give an effect similar to what we would expect\n from some kind of suspended water vapor.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "Vapor",
          "package": "rsagl",
          "signature": "Vapor",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereComposition",
          "type": "function"
        },
        "index": {
          "description": "Uses Mie scattering approximate to give an effect similar to what we would expect from some kind of suspended water vapor",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "Vapor",
          "package": "rsagl",
          "partial": "Vapor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:Vapor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a filter color and modifies it on a logarithmic scale.  Helps when dealing with very dense color filters.\n In particular, atmosphereScatteringMaterial uses this.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "absorbtionFilter",
          "package": "rsagl",
          "signature": "RGB -\u003e RGB",
          "source": "src/RSAGL-Extras-Sky.html#absorbtionFilter",
          "type": "function"
        },
        "index": {
          "description": "Takes filter color and modifies it on logarithmic scale Helps when dealing with very dense color filters In particular atmosphereScatteringMaterial uses this",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "absorbtionFilter",
          "normalized": "RGB-\u003eRGB",
          "package": "rsagl",
          "partial": "Filter",
          "signature": "RGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:absorbtionFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggrigated absorbtion from multiple \u003ccode\u003eAtmosphereLayers\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereAbsorbtion",
          "package": "rsagl",
          "signature": "Atmosphere -\u003e Point3D -\u003e Vector3D -\u003e RGB",
          "source": "src/RSAGL-Extras-Sky.html#atmosphereAbsorbtion",
          "type": "function"
        },
        "index": {
          "description": "Aggrigated absorbtion from multiple AtmosphereLayers",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereAbsorbtion",
          "normalized": "Atmosphere-\u003ePoint D-\u003eVector D-\u003eRGB",
          "package": "rsagl",
          "partial": "Absorbtion",
          "signature": "Atmosphere-\u003ePoint D-\u003eVector D-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereAbsorbtion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggrigated scattering from multiple \u003ccode\u003eAtmosphereLayers\u003c/code\u003e and multiple suns.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereScattering",
          "package": "rsagl",
          "signature": "Atmosphere -\u003e [(Vector3D, RGB)] -\u003e Point3D -\u003e Vector3D -\u003e RGB",
          "source": "src/RSAGL-Extras-Sky.html#atmosphereScattering",
          "type": "function"
        },
        "index": {
          "description": "Aggrigated scattering from multiple AtmosphereLayers and multiple suns",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereScattering",
          "normalized": "Atmosphere-\u003e[(Vector D,RGB)]-\u003ePoint D-\u003eVector D-\u003eRGB",
          "package": "rsagl",
          "partial": "Scattering",
          "signature": "Atmosphere-\u003e[(Vector D,RGB)]-\u003ePoint D-\u003eVector D-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereScattering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a material for a sky sphere.  This material includes both scattering and absorbtion information.\n The material assumes the origin as the eye point, tracing to the geometric point at each vertex.  Therefore,\n this material need not be applied to an exact sphere.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereScatteringMaterial",
          "package": "rsagl",
          "signature": "Atmosphere -\u003e [(Vector3D, RGB)] -\u003e SkyFilter -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Extras-Sky.html#atmosphereScatteringMaterial",
          "type": "function"
        },
        "index": {
          "description": "Generate material for sky sphere This material includes both scattering and absorbtion information The material assumes the origin as the eye point tracing to the geometric point at each vertex Therefore this material need not be applied to an exact sphere",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphereScatteringMaterial",
          "normalized": "Atmosphere-\u003e[(Vector D,RGB)]-\u003eSkyFilter-\u003eMaterialM a()",
          "package": "rsagl",
          "partial": "Scattering Material",
          "signature": "Atmosphere-\u003e[(Vector D,RGB)]-\u003eSkyFilter-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphereScatteringMaterial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe altitude to the edge of this atmosphere layer, where 1.0 is the diameter of the planet.  \n Lowering the altitude actually increases the density, and vice-versa, so double or halve the thickness\n and altitude at the same time.  A typical value is 1e-4.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_altitude",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
          "type": "function"
        },
        "index": {
          "description": "The altitude to the edge of this atmosphere layer where is the diameter of the planet Lowering the altitude actually increases the density and vice-versa so double or halve the thickness and altitude at the same time typical value is e-4",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_altitude",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_altitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents what substance this layer of atmosphere is made of.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_composition",
          "package": "rsagl",
          "signature": "AtmosphereComposition",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
          "type": "function"
        },
        "index": {
          "description": "Represents what substance this layer of atmosphere is made of",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_composition",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the optical thickness of this layer looking straight up.  That is,\n if you reduce the altitude but hold the thickness constant, the layer will be\n essentially unchanged in the vertical direction.  A typical value is 1.0.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_thickness",
          "package": "rsagl",
          "signature": "RSdouble",
          "source": "src/RSAGL-Extras-Sky.html#AtmosphereLayer",
          "type": "function"
        },
        "index": {
          "description": "Represents the optical thickness of this layer looking straight up That is if you reduce the altitude but hold the thickness constant the layer will be essentially unchanged in the vertical direction typical value is",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "atmosphere_thickness",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:atmosphere_thickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSkyFilter\u003c/a\u003e\u003c/code\u003e that takes a maximum black point and a minimum white point, and applies\n these to black and white points determined by probabalistic means, and then generates a\n linear filter based on those points.  For well chosen parameters this will hopefully \n produce an appealing sky at any time of day or twilight.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "dynamicSkyFilter",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e SkyFilter",
          "source": "src/RSAGL-Extras-Sky.html#dynamicSkyFilter",
          "type": "function"
        },
        "index": {
          "description": "SkyFilter that takes maximum black point and minimum white point and applies these to black and white points determined by probabalistic means and then generates linear filter based on those points For well chosen parameters this will hopefully produce an appealing sky at any time of day or twilight",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "dynamicSkyFilter",
          "normalized": "RSdouble-\u003eRSdouble-\u003eSkyFilter",
          "package": "rsagl",
          "partial": "Sky Filter",
          "signature": "RSdouble-\u003eRSdouble-\u003eSkyFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:dynamicSkyFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn atmosphere that is fairly typical of the earth.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "earth_atmosphere",
          "package": "rsagl",
          "signature": "Atmosphere",
          "source": "src/RSAGL-Extras-Sky.html#earth_atmosphere",
          "type": "function"
        },
        "index": {
          "description": "An atmosphere that is fairly typical of the earth",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "earth_atmosphere",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:earth_atmosphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSkyFilter\u003c/a\u003e\u003c/code\u003e that just passes through the raw RGB values, essentially, \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Extras.Sky",
          "name": "rawSkyFilter",
          "package": "rsagl",
          "signature": "SkyFilter",
          "source": "src/RSAGL-Extras-Sky.html#rawSkyFilter",
          "type": "function"
        },
        "index": {
          "description": "SkyFilter that just passes through the raw RGB values essentially id",
          "hierarchy": "RSAGL Extras Sky",
          "module": "RSAGL.Extras.Sky",
          "name": "rawSkyFilter",
          "package": "rsagl",
          "partial": "Sky Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Extras-Sky.html#v:rawSkyFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "BakedModel",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-BakedModel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "BakedModel",
          "package": "rsagl",
          "partial": "Baked Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "BakedSurface",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-BakedModel.html#BakedSurface",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "BakedSurface",
          "package": "rsagl",
          "partial": "Baked Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#t:BakedSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "bakeSurface",
          "package": "rsagl",
          "signature": "(IO () -\u003e IO ()) -\u003e Bool -\u003e [(PrimitiveMode, [a])] -\u003e IO BakedSurface",
          "source": "src/RSAGL-Modeling-BakedModel.html#bakeSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "bakeSurface",
          "normalized": "(IO()-\u003eIO())-\u003eBool-\u003e[(PrimitiveMode,[a])]-\u003eIO BakedSurface",
          "package": "rsagl",
          "partial": "Surface",
          "signature": "(IO()-\u003eIO())-\u003eBool-\u003e[(PrimitiveMode,[a])]-\u003eIO BakedSurface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:bakeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "freeSurface",
          "package": "rsagl",
          "signature": "BakedSurface -\u003e IO ()",
          "source": "src/RSAGL-Modeling-BakedModel.html#freeSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "freeSurface",
          "normalized": "BakedSurface-\u003eIO()",
          "package": "rsagl",
          "partial": "Surface",
          "signature": "BakedSurface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:freeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "surfaceToOpenGL",
          "package": "rsagl",
          "signature": "BakedSurface -\u003e IO ()",
          "source": "src/RSAGL-Modeling-BakedModel.html#surfaceToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "surfaceToOpenGL",
          "normalized": "BakedSurface-\u003eIO()",
          "package": "rsagl",
          "partial": "To Open GL",
          "signature": "BakedSurface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:surfaceToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.BakedModel",
          "name": "tesselatedElementToOpenGL",
          "package": "rsagl",
          "signature": "Bool -\u003e TesselatedElement a -\u003e IO ()",
          "source": "src/RSAGL-Modeling-BakedModel.html#tesselatedElementToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling BakedModel",
          "module": "RSAGL.Modeling.BakedModel",
          "name": "tesselatedElementToOpenGL",
          "normalized": "Bool-\u003eTesselatedElement a-\u003eIO()",
          "package": "rsagl",
          "partial": "Element To Open GL",
          "signature": "Bool-\u003eTesselatedElement a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-BakedModel.html#v:tesselatedElementToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Deformation",
          "name": "Deformation",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Deformation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Deformation",
          "module": "RSAGL.Modeling.Deformation",
          "name": "Deformation",
          "package": "rsagl",
          "partial": "Deformation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA deformation of a surface.  These come in two types: a deformation that\n modifies only the shape of a surface, leaving the normal vectors to\n be recalculated automatically, or a deformation that modified both\n the shape and the normal vectors explicitly.\n\u003c/p\u003e\u003cp\u003eFor example, the deformation function of type \u003ccode\u003e(Point3D -\u003e Ponit3D)\u003c/code\u003e\n depends on automatic differentiation to determine the new surface normals.\n\u003c/p\u003e\u003cp\u003eOn the other hand, an affine transformation applied as a deformation\n can quickly and correctly compute the new surface normals.\n\u003c/p\u003e\u003cp\u003eFinally, one might want to construct a deformation that modifies\n the surface normals while leaving the shape intact -- this is\n perfectly legal.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Deformation",
          "name": "Deformation",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Deformation.html#Deformation",
          "type": "type"
        },
        "index": {
          "description": "deformation of surface These come in two types deformation that modifies only the shape of surface leaving the normal vectors to be recalculated automatically or deformation that modified both the shape and the normal vectors explicitly For example the deformation function of type Point3D Ponit3D depends on automatic differentiation to determine the new surface normals On the other hand an affine transformation applied as deformation can quickly and correctly compute the new surface normals Finally one might want to construct deformation that modifies the surface normals while leaving the shape intact this is perfectly legal",
          "hierarchy": "RSAGL Modeling Deformation",
          "module": "RSAGL.Modeling.Deformation",
          "name": "Deformation",
          "package": "rsagl",
          "partial": "Deformation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#t:Deformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenienve class to convert common descriptions of deformations\n into the canonical representation.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Deformation",
          "name": "DeformationClass",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Deformation.html#DeformationClass",
          "type": "class"
        },
        "index": {
          "description": "convenienve class to convert common descriptions of deformations into the canonical representation",
          "hierarchy": "RSAGL Modeling Deformation",
          "module": "RSAGL.Modeling.Deformation",
          "name": "DeformationClass",
          "package": "rsagl",
          "partial": "Deformation Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#t:DeformationClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Deformation",
          "name": "constrain",
          "package": "rsagl",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/RSAGL-Auxiliary-Auxiliary.html#constrain",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Deformation",
          "module": "RSAGL.Modeling.Deformation",
          "name": "constrain",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "rsagl",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#v:constrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Deformation",
          "name": "deformation",
          "package": "rsagl",
          "signature": "a -\u003e Deformation",
          "source": "src/RSAGL-Modeling-Deformation.html#deformation",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Deformation",
          "module": "RSAGL.Modeling.Deformation",
          "name": "deformation",
          "normalized": "a-\u003eDeformation",
          "package": "rsagl",
          "signature": "a-\u003eDeformation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Deformation.html#v:deformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Extrusion",
          "name": "Extrusion",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Extrusion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Extrusion",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "Extrusion",
          "package": "rsagl",
          "partial": "Extrusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general form of an extrusion.  Requires first a\n control curve for orientation, for example the center of\n a torus or a vector that simply never runs parallel\n to the spine.  Second, the spine of the extrusion,\n and third the shape to be extruded.\n\u003c/p\u003e\u003cp\u003eThe +Y axis of the shape will be oriented toward\n the control curve.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrude",
          "package": "rsagl",
          "signature": "Curve (Either Point3D Vector3D) -\u003e Curve Point3D -\u003e Curve (Curve Point3D) -\u003e Surface Point3D",
          "source": "src/RSAGL-Modeling-Extrusion.html#extrude",
          "type": "function"
        },
        "index": {
          "description": "The most general form of an extrusion Requires first control curve for orientation for example the center of torus or vector that simply never runs parallel to the spine Second the spine of the extrusion and third the shape to be extruded The axis of the shape will be oriented toward the control curve",
          "hierarchy": "RSAGL Modeling Extrusion",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrude",
          "normalized": "Curve(Either Point D Vector D)-\u003eCurve Point D-\u003eCurve(Curve Point D)-\u003eSurface Point D",
          "package": "rsagl",
          "signature": "Curve(Either Point D Vector D)-\u003eCurve Point D-\u003eCurve(Curve Point D)-\u003eSurface Point D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extrusion whose spine is a straight line, with radii specified\n at both ends.  In this case only the extruded shape needs to be\n specified as a curve.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrudePrism",
          "package": "rsagl",
          "signature": "Vector3D -\u003e (Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Curve Point3D -\u003e Surface Point3D",
          "source": "src/RSAGL-Modeling-Extrusion.html#extrudePrism",
          "type": "function"
        },
        "index": {
          "description": "An extrusion whose spine is straight line with radii specified at both ends In this case only the extruded shape needs to be specified as curve",
          "hierarchy": "RSAGL Modeling Extrusion",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrudePrism",
          "normalized": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eSurface Point D",
          "package": "rsagl",
          "partial": "Prism",
          "signature": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eSurface Point D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrudePrism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tubular extrusion using taking a radius and a spine.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrudeTube",
          "package": "rsagl",
          "signature": "Curve RSdouble -\u003e Curve Point3D -\u003e Surface Point3D",
          "source": "src/RSAGL-Modeling-Extrusion.html#extrudeTube",
          "type": "function"
        },
        "index": {
          "description": "tubular extrusion using taking radius and spine",
          "hierarchy": "RSAGL Modeling Extrusion",
          "module": "RSAGL.Modeling.Extrusion",
          "name": "extrudeTube",
          "normalized": "Curve RSdouble-\u003eCurve Point D-\u003eSurface Point D",
          "package": "rsagl",
          "partial": "Tube",
          "signature": "Curve RSdouble-\u003eCurve Point D-\u003eSurface Point D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Extrusion.html#v:extrudeTube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRSAGL.Material handles properties of surfaces such as color, shininess, and transparency\n including procedural textures but not including anything touching the normal vector, such\n as bumpiness.  Materials are handled using layers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "Material",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Material.html",
          "type": "module"
        },
        "index": {
          "description": "RSAGL.Material handles properties of surfaces such as color shininess and transparency including procedural textures but not including anything touching the normal vector such as bumpiness Materials are handled using layers",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "Material",
          "package": "rsagl",
          "partial": "Material",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack of \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003es.  \u003ccode\u003e\u003ca\u003eMaterial\u003c/a\u003e\u003c/code\u003e is smart about compressing multiple layers into the least of number of equivalent layers.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "Material",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Material.html#Material",
          "type": "data"
        },
        "index": {
          "description": "stack of MaterialLayer Material is smart about compressing multiple layers into the least of number of equivalent layers",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "Material",
          "package": "rsagl",
          "partial": "Material",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:Material"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is a layer of material some material quality (diffuse, transparent, emissive, or specular highlight).  \n \u003ccode\u003eMaterialLayers\u003c/code\u003e are rendered one on top of another to create layered effects.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "MaterialLayer",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Material.html#MaterialLayer",
          "type": "data"
        },
        "index": {
          "description": "MaterialLayer is layer of material some material quality diffuse transparent emissive or specular highlight MaterialLayers are rendered one on top of another to create layered effects",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "MaterialLayer",
          "package": "rsagl",
          "partial": "Material Layer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:MaterialLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMaterialSurface\u003c/a\u003e\u003c/code\u003e is parameterized either on RGB or RGBA, depending\n on whether or not the \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is capable of transparency.\n \u003ccode\u003e\u003ca\u003eMaterialSurface\u003c/a\u003e\u003c/code\u003es that are only one color (as opposed to procedural textures)\n can be described using \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e, for example \u003ca\u003epure red\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "MaterialSurface",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Material.html#MaterialSurface",
          "type": "type"
        },
        "index": {
          "description": "MaterialSurface is parameterized either on RGB or RGBA depending on whether or not the MaterialLayer is capable of transparency MaterialSurface that are only one color as opposed to procedural textures can be described using pure for example pure red",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "MaterialSurface",
          "package": "rsagl",
          "partial": "Material Surface",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#t:MaterialSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple colored material.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "diffuseLayer",
          "package": "rsagl",
          "signature": "MaterialSurface RGB -\u003e Material",
          "source": "src/RSAGL-Modeling-Material.html#diffuseLayer",
          "type": "function"
        },
        "index": {
          "description": "simple colored material",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "diffuseLayer",
          "normalized": "MaterialSurface RGB-\u003eMaterial",
          "package": "rsagl",
          "partial": "Layer",
          "signature": "MaterialSurface RGB-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:diffuseLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA material that seems to glow.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "emissiveLayer",
          "package": "rsagl",
          "signature": "MaterialSurface RGB -\u003e Material",
          "source": "src/RSAGL-Modeling-Material.html#emissiveLayer",
          "type": "function"
        },
        "index": {
          "description": "material that seems to glow",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "emissiveLayer",
          "normalized": "MaterialSurface RGB-\u003eMaterial",
          "package": "rsagl",
          "partial": "Layer",
          "signature": "MaterialSurface RGB-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:emissiveLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA material that doesn't reflect or emit life, but simply performs a multiplicative filter on whatever is behind it.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "filteringLayer",
          "package": "rsagl",
          "signature": "MaterialSurface RGB -\u003e Material",
          "source": "src/RSAGL-Modeling-Material.html#filteringLayer",
          "type": "function"
        },
        "index": {
          "description": "material that doesn reflect or emit life but simply performs multiplicative filter on whatever is behind it",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "filteringLayer",
          "normalized": "MaterialSurface RGB-\u003eMaterial",
          "package": "rsagl",
          "partial": "Layer",
          "signature": "MaterialSurface RGB-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:filteringLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e is completely opaque.  A layer under an opaque layer is not visible.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "isOpaqueLayer",
          "package": "rsagl",
          "signature": "MaterialLayer -\u003e Bool",
          "source": "src/RSAGL-Modeling-Material.html#isOpaqueLayer",
          "type": "function"
        },
        "index": {
          "description": "True if the MaterialLayer is completely opaque layer under an opaque layer is not visible",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "isOpaqueLayer",
          "normalized": "MaterialLayer-\u003eBool",
          "package": "rsagl",
          "partial": "Opaque Layer",
          "signature": "MaterialLayer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:isOpaqueLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers a complexity heuristic for a \u003ccode\u003e\u003ca\u003eMaterial\u003c/a\u003e\u003c/code\u003e.  Result is a small integer greater than or equal to zero.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "materialComplexity",
          "package": "rsagl",
          "signature": "Material -\u003e Integer",
          "source": "src/RSAGL-Modeling-Material.html#materialComplexity",
          "type": "function"
        },
        "index": {
          "description": "Answers complexity heuristic for Material Result is small integer greater than or equal to zero",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "materialComplexity",
          "normalized": "Material-\u003eInteger",
          "package": "rsagl",
          "partial": "Complexity",
          "signature": "Material-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialComplexity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Material",
          "name": "materialIsEmpty",
          "package": "rsagl",
          "signature": "Material -\u003e Bool",
          "source": "src/RSAGL-Modeling-Material.html#materialIsEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "materialIsEmpty",
          "normalized": "Material-\u003eBool",
          "package": "rsagl",
          "partial": "Is Empty",
          "signature": "Material-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialIsEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a relevance layer for a surface.  Purely irrelevant materials can be removed without changing the\n appearance of a model.  Irrelevant triangles can also be selectively culled from a model.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerRelevant",
          "package": "rsagl",
          "signature": "MaterialLayer -\u003e MaterialSurface Bool",
          "source": "src/RSAGL-Modeling-Material.html#materialLayerRelevant",
          "type": "function"
        },
        "index": {
          "description": "Get relevance layer for surface Purely irrelevant materials can be removed without changing the appearance of model Irrelevant triangles can also be selectively culled from model",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerRelevant",
          "normalized": "MaterialLayer-\u003eMaterialSurface Bool",
          "package": "rsagl",
          "partial": "Layer Relevant",
          "signature": "MaterialLayer-\u003eMaterialSurface Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerRelevant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the color information for a \u003ccode\u003e\u003ca\u003eMaterialLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerSurface",
          "package": "rsagl",
          "signature": "MaterialLayer -\u003e MaterialSurface RGBA",
          "source": "src/RSAGL-Modeling-Material.html#materialLayerSurface",
          "type": "function"
        },
        "index": {
          "description": "Get the color information for MaterialLayer",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerSurface",
          "normalized": "MaterialLayer-\u003eMaterialSurface RGBA",
          "package": "rsagl",
          "partial": "Layer Surface",
          "signature": "MaterialLayer-\u003eMaterialSurface RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action wrapped in OpenGL state appropriate for the layer in question.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerToOpenGLWrapper",
          "package": "rsagl",
          "signature": "MaterialLayer -\u003e IO () -\u003e IO ()",
          "source": "src/RSAGL-Modeling-Material.html#materialLayerToOpenGLWrapper",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action wrapped in OpenGL state appropriate for the layer in question",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "materialLayerToOpenGLWrapper",
          "normalized": "MaterialLayer-\u003eIO()-\u003eIO()",
          "package": "rsagl",
          "partial": "Layer To Open GLWrapper",
          "signature": "MaterialLayer-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:materialLayerToOpenGLWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shiny material with specular highlight, including a specular exponent parameter.\n Larger exponents give tighter specular highlights, but should be less than 128 (larger than\n that wouldn't have very much effect anyway).  Typical values are 1-10 or so.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "specularLayer",
          "package": "rsagl",
          "signature": "MaterialSurface RGB -\u003e GLfloat -\u003e Material",
          "source": "src/RSAGL-Modeling-Material.html#specularLayer",
          "type": "function"
        },
        "index": {
          "description": "shiny material with specular highlight including specular exponent parameter Larger exponents give tighter specular highlights but should be less than larger than that wouldn have very much effect anyway Typical values are or so",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "specularLayer",
          "normalized": "MaterialSurface RGB-\u003eGLfloat-\u003eMaterial",
          "package": "rsagl",
          "partial": "Layer",
          "signature": "MaterialSurface RGB-\u003eGLfloat-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:specularLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit open a Material into its component layers.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "toLayers",
          "package": "rsagl",
          "signature": "Material -\u003e [MaterialLayer]",
          "source": "src/RSAGL-Modeling-Material.html#toLayers",
          "type": "function"
        },
        "index": {
          "description": "Split open Material into its component layers",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "toLayers",
          "normalized": "Material-\u003e[MaterialLayer]",
          "package": "rsagl",
          "partial": "Layers",
          "signature": "Material-\u003e[MaterialLayer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:toLayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transparent colored material.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Material",
          "name": "transparentLayer",
          "package": "rsagl",
          "signature": "MaterialSurface RGBA -\u003e Material",
          "source": "src/RSAGL-Modeling-Material.html#transparentLayer",
          "type": "function"
        },
        "index": {
          "description": "transparent colored material",
          "hierarchy": "RSAGL Modeling Material",
          "module": "RSAGL.Modeling.Material",
          "name": "transparentLayer",
          "normalized": "MaterialSurface RGBA-\u003eMaterial",
          "package": "rsagl",
          "partial": "Layer",
          "signature": "MaterialSurface RGBA-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Material.html#v:transparentLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "Model",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "Model",
          "package": "rsagl",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "BakedModel",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#BakedModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "BakedModel",
          "package": "rsagl",
          "partial": "Baked Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:BakedModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "IntermediateModel",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#IntermediateModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "IntermediateModel",
          "package": "rsagl",
          "partial": "Intermediate Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:IntermediateModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "MaterialM",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#MaterialM",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "MaterialM",
          "package": "rsagl",
          "partial": "Material",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:MaterialM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "Model",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#Model",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "Model",
          "package": "rsagl",
          "partial": "Model",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "ModelType",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#ModelType",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "ModelType",
          "package": "rsagl",
          "partial": "Model Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:ModelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "Modeling",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#Modeling",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "Modeling",
          "package": "rsagl",
          "partial": "Modeling",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:Modeling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "ModelingM",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#ModelingM",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "ModelingM",
          "package": "rsagl",
          "partial": "Modeling",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:ModelingM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "MonadAffine",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#MonadAffine",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "MonadAffine",
          "package": "rsagl",
          "partial": "Monad Affine",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:MonadAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "RGBAFunction",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#RGBAFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "RGBAFunction",
          "package": "rsagl",
          "partial": "RGBAFunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:RGBAFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "RGBFunction",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Model.html#RGBFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "RGBFunction",
          "package": "rsagl",
          "partial": "RGBFunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#t:RGBFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "adaptive",
          "package": "rsagl",
          "signature": "Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#adaptive",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "adaptive",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:adaptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "affine",
          "package": "rsagl",
          "signature": "AffineTransformation -\u003e m ()",
          "source": "src/RSAGL-Modeling-Model.html#affine",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "affine",
          "normalized": "AffineTransformation-\u003ea()",
          "package": "rsagl",
          "signature": "AffineTransformation-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "attribute",
          "package": "rsagl",
          "signature": "attr -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "attribute",
          "normalized": "a-\u003eModeling a",
          "package": "rsagl",
          "signature": "attr-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "bakeModel",
          "package": "rsagl",
          "signature": "IntermediateModel -\u003e IO BakedModel",
          "source": "src/RSAGL-Modeling-Model.html#bakeModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "bakeModel",
          "normalized": "IntermediateModel-\u003eIO BakedModel",
          "package": "rsagl",
          "partial": "Model",
          "signature": "IntermediateModel-\u003eIO BakedModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:bakeModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "box",
          "package": "rsagl",
          "signature": "Point3D -\u003e Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#box",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "box",
          "normalized": "Point D-\u003ePoint D-\u003eModeling a",
          "package": "rsagl",
          "signature": "Point D-\u003ePoint D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "buildIntermediateModel",
          "package": "rsagl",
          "signature": "Integer -\u003e Modeling attr -\u003e IntermediateModel",
          "source": "src/RSAGL-Modeling-Model.html#buildIntermediateModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "buildIntermediateModel",
          "normalized": "Integer-\u003eModeling a-\u003eIntermediateModel",
          "package": "rsagl",
          "partial": "Intermediate Model",
          "signature": "Integer-\u003eModeling attr-\u003eIntermediateModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:buildIntermediateModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "closedCone",
          "package": "rsagl",
          "signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#closedCone",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "closedCone",
          "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling a",
          "package": "rsagl",
          "partial": "Cone",
          "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:closedCone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "closedDisc",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#closedDisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "closedDisc",
          "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "partial": "Disc",
          "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:closedDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "deform",
          "package": "rsagl",
          "signature": "dc -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#deform",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "deform",
          "normalized": "a-\u003eModeling b",
          "package": "rsagl",
          "signature": "dc-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:deform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "emissive",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#emissive",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "emissive",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:emissive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "extractModel",
          "package": "rsagl",
          "signature": "Modeling attr -\u003e Model attr",
          "source": "src/RSAGL-Modeling-Model.html#extractModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "extractModel",
          "normalized": "Modeling a-\u003eModel a",
          "package": "rsagl",
          "partial": "Model",
          "signature": "Modeling attr-\u003eModel attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:extractModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "filtering",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#filtering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "filtering",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:filtering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "fixed",
          "package": "rsagl",
          "signature": "(Integer, Integer) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#fixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "fixed",
          "normalized": "(Integer,Integer)-\u003eModeling a",
          "package": "rsagl",
          "signature": "(Integer,Integer)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "freeModel",
          "package": "rsagl",
          "signature": "BakedModel -\u003e IO ()",
          "source": "src/RSAGL-Modeling-Model.html#freeModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "freeModel",
          "normalized": "BakedModel-\u003eIO()",
          "package": "rsagl",
          "partial": "Model",
          "signature": "BakedModel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:freeModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "generalSurface",
          "package": "rsagl",
          "signature": "Either (Surface Point3D) (Surface (Point3D, Vector3D)) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#generalSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "generalSurface",
          "normalized": "Either(Surface Point D)(Surface(Point D,Vector D))-\u003eModeling a",
          "package": "rsagl",
          "partial": "Surface",
          "signature": "Either(Surface Point D)(Surface(Point D,Vector D))-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:generalSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "hemisphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#hemisphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "hemisphere",
          "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:hemisphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "intermediateModelToOpenGL",
          "package": "rsagl",
          "signature": "IntermediateModel -\u003e IO ()",
          "source": "src/RSAGL-Modeling-Model.html#intermediateModelToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "intermediateModelToOpenGL",
          "normalized": "IntermediateModel-\u003eIO()",
          "package": "rsagl",
          "partial": "Model To Open GL",
          "signature": "IntermediateModel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:intermediateModelToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "intermediateModelToVertexCloud",
          "package": "rsagl",
          "signature": "IntermediateModel -\u003e [SurfaceVertex3D]",
          "source": "src/RSAGL-Modeling-Model.html#intermediateModelToVertexCloud",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "intermediateModelToVertexCloud",
          "normalized": "IntermediateModel-\u003e[SurfaceVertex D]",
          "package": "rsagl",
          "partial": "Model To Vertex Cloud",
          "signature": "IntermediateModel-\u003e[SurfaceVertex D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:intermediateModelToVertexCloud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "material",
          "package": "rsagl",
          "signature": "MaterialM attr () -\u003e m attr ()",
          "source": "src/RSAGL-Modeling-Model.html#material",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "material",
          "normalized": "MaterialM a()-\u003eb a()",
          "package": "rsagl",
          "signature": "MaterialM attr()-\u003em attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:material"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "model",
          "package": "rsagl",
          "signature": "Modeling attr -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#model",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "model",
          "normalized": "Modeling a-\u003eModeling a",
          "package": "rsagl",
          "signature": "Modeling attr-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "modelInfo",
          "package": "rsagl",
          "signature": "IntermediateModel -\u003e String",
          "source": "src/RSAGL-Modeling-Model.html#modelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "modelInfo",
          "normalized": "IntermediateModel-\u003eString",
          "package": "rsagl",
          "partial": "Info",
          "signature": "IntermediateModel-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:modelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "modelingToOpenGL",
          "package": "rsagl",
          "signature": "Integer -\u003e Modeling attr -\u003e IO ()",
          "source": "src/RSAGL-Modeling-Model.html#modelingToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "modelingToOpenGL",
          "normalized": "Integer-\u003eModeling a-\u003eIO()",
          "package": "rsagl",
          "partial": "To Open GL",
          "signature": "Integer-\u003eModeling attr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:modelingToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "openCone",
          "package": "rsagl",
          "signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#openCone",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "openCone",
          "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling a",
          "package": "rsagl",
          "partial": "Cone",
          "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:openCone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flat disc with a hole in the middle, defined in terms of it's center, normal vector, inner (hole) radius and outer radius.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Model",
          "name": "openDisc",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#openDisc",
          "type": "function"
        },
        "index": {
          "description": "flat disc with hole in the middle defined in terms of it center normal vector inner hole radius and outer radius",
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "openDisc",
          "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "partial": "Disc",
          "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:openDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eperspectiveSphere\u003c/a\u003e\u003c/code\u003e is rendered anticipating the point from which it is to be viewed.\n Only the part of the surface of the sphere that would be visible from a vantage point is\n rendered, and otherwise the sphere seems clipped.\n\u003c/p\u003e\u003cp\u003eThis is the appropriate geometry to model the curvature of a planet from 200 kilometers altitude, for example.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Model",
          "name": "perspectiveSphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble -\u003e Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#perspectiveSphere",
          "type": "function"
        },
        "index": {
          "description": "perspectiveSphere is rendered anticipating the point from which it is to be viewed Only the part of the surface of the sphere that would be visible from vantage point is rendered and otherwise the sphere seems clipped This is the appropriate geometry to model the curvature of planet from kilometers altitude for example",
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "perspectiveSphere",
          "normalized": "Point D-\u003eRSdouble-\u003ePoint D-\u003eModeling a",
          "package": "rsagl",
          "partial": "Sphere",
          "signature": "Point D-\u003eRSdouble-\u003ePoint D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:perspectiveSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "pigment",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#pigment",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "pigment",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:pigment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "prism",
          "package": "rsagl",
          "signature": "Vector3D -\u003e (Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Curve Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#prism",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "prism",
          "normalized": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eModeling a",
          "package": "rsagl",
          "signature": "Vector D-\u003e(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eCurve Point D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:prism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "quadralateral",
          "package": "rsagl",
          "signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#quadralateral",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "quadralateral",
          "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003ePoint D-\u003eModeling a",
          "package": "rsagl",
          "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003ePoint D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:quadralateral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "regenerateNormals",
          "package": "rsagl",
          "signature": "Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#regenerateNormals",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "regenerateNormals",
          "package": "rsagl",
          "partial": "Normals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:regenerateNormals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap inside and outside surfaces and reverse normal vectors.  This shouldn't effect \u003ccode\u003e\u003ca\u003etwoSided\u003c/a\u003e\u003c/code\u003e surfaces in any visible way.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Model",
          "name": "reverseOrientation",
          "package": "rsagl",
          "signature": "Modeling attr -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#reverseOrientation",
          "type": "function"
        },
        "index": {
          "description": "Swap inside and outside surfaces and reverse normal vectors This shouldn effect twoSided surfaces in any visible way",
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "reverseOrientation",
          "normalized": "Modeling a-\u003eModeling a",
          "package": "rsagl",
          "partial": "Orientation",
          "signature": "Modeling attr-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:reverseOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "skyHemisphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#skyHemisphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "skyHemisphere",
          "normalized": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "partial": "Hemisphere",
          "signature": "Point D-\u003eVector D-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:skyHemisphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "skySphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#skySphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "skySphere",
          "normalized": "Point D-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "partial": "Sphere",
          "signature": "Point D-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:skySphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "sor",
          "package": "rsagl",
          "signature": "Curve Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#sor",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "sor",
          "normalized": "Curve Point D-\u003eModeling a",
          "package": "rsagl",
          "signature": "Curve Point D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:sor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "specular",
          "package": "rsagl",
          "signature": "GLfloat -\u003e RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#specular",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "specular",
          "normalized": "GLfloat-\u003eRGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "GLfloat-\u003eRGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:specular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "sphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#sphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "sphere",
          "normalized": "Point D-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "signature": "Point D-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "splitOpaques",
          "package": "rsagl",
          "signature": "IntermediateModel -\u003e (IntermediateModel, [IntermediateModel])",
          "source": "src/RSAGL-Modeling-Model.html#splitOpaques",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "splitOpaques",
          "normalized": "IntermediateModel-\u003e(IntermediateModel,[IntermediateModel])",
          "package": "rsagl",
          "partial": "Opaques",
          "signature": "IntermediateModel-\u003e(IntermediateModel,[IntermediateModel])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:splitOpaques"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "tesselationHintComplexity",
          "package": "rsagl",
          "signature": "Integer -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#tesselationHintComplexity",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "tesselationHintComplexity",
          "normalized": "Integer-\u003eModeling a",
          "package": "rsagl",
          "partial": "Hint Complexity",
          "signature": "Integer-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:tesselationHintComplexity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "toIntermediateModel",
          "package": "rsagl",
          "signature": "m -\u003e IntermediateModel",
          "source": "src/RSAGL-Modeling-Model.html#toIntermediateModel",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "toIntermediateModel",
          "normalized": "a-\u003eIntermediateModel",
          "package": "rsagl",
          "partial": "Intermediate Model",
          "signature": "m-\u003eIntermediateModel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:toIntermediateModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "torus",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#torus",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "torus",
          "normalized": "RSdouble-\u003eRSdouble-\u003eModeling a",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRSdouble-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:torus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "transparent",
          "package": "rsagl",
          "signature": "RGBAFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#transparent",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "transparent",
          "normalized": "RGBAFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBAFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "triangle",
          "package": "rsagl",
          "signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#triangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "triangle",
          "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003eModeling a",
          "package": "rsagl",
          "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "tube",
          "package": "rsagl",
          "signature": "Curve (RSdouble, Point3D) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#tube",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "tube",
          "normalized": "Curve(RSdouble,Point D)-\u003eModeling a",
          "package": "rsagl",
          "signature": "Curve(RSdouble,Point D)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:tube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "turbulence",
          "package": "rsagl",
          "signature": "(SurfaceVertex3D -\u003e SurfaceVertex3D) -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-Model.html#turbulence",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "turbulence",
          "normalized": "(SurfaceVertex D-\u003eSurfaceVertex D)-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "(SurfaceVertex D-\u003eSurfaceVertex D)-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:turbulence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "twoSided",
          "package": "rsagl",
          "signature": "Bool -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#twoSided",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "twoSided",
          "normalized": "Bool-\u003eModeling a",
          "package": "rsagl",
          "partial": "Sided",
          "signature": "Bool-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:twoSided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Model",
          "name": "withAttribute",
          "package": "rsagl",
          "signature": "(attr -\u003e Bool) -\u003e Modeling attr -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-Model.html#withAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Model",
          "module": "RSAGL.Modeling.Model",
          "name": "withAttribute",
          "normalized": "(a-\u003eBool)-\u003eModeling a-\u003eModeling a",
          "package": "rsagl",
          "partial": "Attribute",
          "signature": "(attr-\u003eBool)-\u003eModeling attr-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Model.html#v:withAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ModelingExtras",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-ModelingExtras.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ModelingExtras",
          "package": "rsagl",
          "partial": "Modeling Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplicativeWrapper\u003c/a\u003e\u003c/code\u003e captures an applicative entity and remembers whether the entity is pure.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ApplicativeWrapper",
          "package": "rsagl",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#ApplicativeWrapper",
          "type": "newtype"
        },
        "index": {
          "description": "ApplicativeWrapper captures an applicative entity and remembers whether the entity is pure",
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ApplicativeWrapper",
          "package": "rsagl",
          "partial": "Applicative Wrapper",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:ApplicativeWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ColorFunction",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#ColorFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ColorFunction",
          "package": "rsagl",
          "partial": "Color Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:ColorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "Pattern",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#Pattern",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "Pattern",
          "package": "rsagl",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ApplicativeWrapper",
          "package": "rsagl",
          "signature": "ApplicativeWrapper (Either (f a) a)",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#ApplicativeWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "ApplicativeWrapper",
          "package": "rsagl",
          "partial": "Applicative Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:ApplicativeWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "blinkBoxes",
          "package": "rsagl",
          "signature": "Int -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#blinkBoxes",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "blinkBoxes",
          "normalized": "Int-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003ePattern",
          "package": "rsagl",
          "partial": "Boxes",
          "signature": "Int-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:blinkBoxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "bumps",
          "package": "rsagl",
          "signature": "Pattern -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#bumps",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "bumps",
          "normalized": "Pattern-\u003eModeling a",
          "package": "rsagl",
          "signature": "Pattern-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:bumps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "cloudy",
          "package": "rsagl",
          "signature": "Int -\u003e RSdouble -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#cloudy",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "cloudy",
          "normalized": "Int-\u003eRSdouble-\u003ePattern",
          "package": "rsagl",
          "signature": "Int-\u003eRSdouble-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:cloudy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "directional",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#directional",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "directional",
          "normalized": "Vector D-\u003ePattern",
          "package": "rsagl",
          "signature": "Vector D-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:directional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor models where we are certain surface normals don't matter, then don't calculate them.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "disregardSurfaceNormals",
          "package": "rsagl",
          "signature": "Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#disregardSurfaceNormals",
          "type": "function"
        },
        "index": {
          "description": "For models where we are certain surface normals don matter then don calculate them",
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "disregardSurfaceNormals",
          "package": "rsagl",
          "partial": "Surface Normals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:disregardSurfaceNormals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "dropRandomElements",
          "package": "rsagl",
          "signature": "Int -\u003e StdGen -\u003e [a] -\u003e [a]",
          "source": "src/RSAGL-Auxiliary-Auxiliary.html#dropRandomElements",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "dropRandomElements",
          "normalized": "Int-\u003eStdGen-\u003e[a]-\u003e[a]",
          "package": "rsagl",
          "partial": "Random Elements",
          "signature": "Int-\u003eStdGen-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:dropRandomElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "fromPure",
          "package": "rsagl",
          "signature": "ApplicativeWrapper f a -\u003e Maybe a",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#fromPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "fromPure",
          "normalized": "ApplicativeWrapper a b-\u003eMaybe b",
          "package": "rsagl",
          "partial": "Pure",
          "signature": "ApplicativeWrapper f a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:fromPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "glass",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#glass",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "glass",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:glass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "gradient",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "gradient",
          "normalized": "Point D-\u003eVector D-\u003ePattern",
          "package": "rsagl",
          "signature": "Point D-\u003eVector D-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circular height field rising off of the x-z plane.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightDisc",
          "package": "rsagl",
          "signature": "(RSdouble, RSdouble) -\u003e RSdouble -\u003e ((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#heightDisc",
          "type": "function"
        },
        "index": {
          "description": "circular height field rising off of the x-z plane",
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightDisc",
          "normalized": "(RSdouble,RSdouble)-\u003eRSdouble-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
          "package": "rsagl",
          "partial": "Disc",
          "signature": "(RSdouble,RSdouble)-\u003eRSdouble-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular height field rising off of the x-z plane.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightField",
          "package": "rsagl",
          "signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble) -\u003e ((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#heightField",
          "type": "function"
        },
        "index": {
          "description": "rectangular height field rising off of the x-z plane",
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightField",
          "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
          "package": "rsagl",
          "partial": "Field",
          "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003e((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaises or lowers each point in a model along the y-axis according to its (x,z) coordinate.\n Typically this is used to construct height fields.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightMap",
          "package": "rsagl",
          "signature": "((RSdouble, RSdouble) -\u003e RSdouble) -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#heightMap",
          "type": "function"
        },
        "index": {
          "description": "Raises or lowers each point in model along the y-axis according to its coordinate Typically this is used to construct height fields",
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "heightMap",
          "normalized": "((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling a",
          "package": "rsagl",
          "partial": "Map",
          "signature": "((RSdouble,RSdouble)-\u003eRSdouble)-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:heightMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "isPure",
          "package": "rsagl",
          "signature": "ApplicativeWrapper f a -\u003e Bool",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#isPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "isPure",
          "normalized": "ApplicativeWrapper a b-\u003eBool",
          "package": "rsagl",
          "partial": "Pure",
          "signature": "ApplicativeWrapper f a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:isPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "metallic",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#metallic",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "metallic",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:metallic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "pattern",
          "package": "rsagl",
          "signature": "Pattern -\u003e [(RSfloat, ColorFunction a)] -\u003e ColorFunction a",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "pattern",
          "normalized": "Pattern-\u003e[(RSfloat,ColorFunction a)]-\u003eColorFunction a",
          "package": "rsagl",
          "signature": "Pattern-\u003e[(RSfloat,ColorFunction a)]-\u003eColorFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "plastic",
          "package": "rsagl",
          "signature": "RGBFunction -\u003e MaterialM attr ()",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#plastic",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "plastic",
          "normalized": "RGBFunction-\u003eMaterialM a()",
          "package": "rsagl",
          "signature": "RGBFunction-\u003eMaterialM attr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:plastic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "regularPrism",
          "package": "rsagl",
          "signature": "(Point3D, RSdouble) -\u003e (Point3D, RSdouble) -\u003e Integer -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#regularPrism",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "regularPrism",
          "normalized": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eInteger-\u003eModeling a",
          "package": "rsagl",
          "partial": "Prism",
          "signature": "(Point D,RSdouble)-\u003e(Point D,RSdouble)-\u003eInteger-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:regularPrism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "rotationGroup",
          "package": "rsagl",
          "signature": "Vector3D -\u003e Integer -\u003e a -\u003e [a]",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#rotationGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "rotationGroup",
          "normalized": "Vector D-\u003eInteger-\u003ea-\u003e[a]",
          "package": "rsagl",
          "partial": "Group",
          "signature": "Vector D-\u003eInteger-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:rotationGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "smoothbox",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Point3D -\u003e Point3D -\u003e Modeling attr",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#smoothbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "smoothbox",
          "normalized": "RSdouble-\u003ePoint D-\u003ePoint D-\u003eModeling a",
          "package": "rsagl",
          "signature": "RSdouble-\u003ePoint D-\u003ePoint D-\u003eModeling attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:smoothbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "spherical",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#spherical",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "spherical",
          "normalized": "Point D-\u003eRSdouble-\u003ePattern",
          "package": "rsagl",
          "signature": "Point D-\u003eRSdouble-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:spherical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "toApplicative",
          "package": "rsagl",
          "signature": "ApplicativeWrapper f a -\u003e f a",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#toApplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "toApplicative",
          "normalized": "ApplicativeWrapper a b-\u003ea b",
          "package": "rsagl",
          "partial": "Applicative",
          "signature": "ApplicativeWrapper f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:toApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "unwrapApplicative",
          "package": "rsagl",
          "signature": "ApplicativeWrapper f a -\u003e Either (f a) a",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#unwrapApplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "unwrapApplicative",
          "normalized": "ApplicativeWrapper a b-\u003eEither(a b)b",
          "package": "rsagl",
          "partial": "Applicative",
          "signature": "ApplicativeWrapper f a-\u003eEither(f a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:unwrapApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "waves",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RSdouble -\u003e Pattern",
          "source": "src/RSAGL-Modeling-ModelingExtras.html#waves",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "waves",
          "normalized": "RSdouble-\u003eRSdouble-\u003ePattern",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRSdouble-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:waves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "wrapApplicative",
          "package": "rsagl",
          "signature": "f a -\u003e ApplicativeWrapper f a",
          "source": "src/RSAGL-Auxiliary-ApplicativeWrapper.html#wrapApplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling ModelingExtras",
          "module": "RSAGL.Modeling.ModelingExtras",
          "name": "wrapApplicative",
          "normalized": "a b-\u003eApplicativeWrapper a b",
          "package": "rsagl",
          "partial": "Applicative",
          "signature": "f a-\u003eApplicativeWrapper f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-ModelingExtras.html#v:wrapApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Noise",
          "name": "Noise",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Noise.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Noise",
          "module": "RSAGL.Modeling.Noise",
          "name": "Noise",
          "package": "rsagl",
          "partial": "Noise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an arbitrary, smoothly varying value\n between \u003ccode\u003e-1\u003c/code\u003e and \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Noise",
          "name": "perlinNoise",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble",
          "source": "src/RSAGL-Modeling-Noise.html#perlinNoise",
          "type": "function"
        },
        "index": {
          "description": "Generates an arbitrary smoothly varying value between and",
          "hierarchy": "RSAGL Modeling Noise",
          "module": "RSAGL.Modeling.Noise",
          "name": "perlinNoise",
          "normalized": "Point D-\u003eRSdouble",
          "package": "rsagl",
          "partial": "Noise",
          "signature": "Point D-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#v:perlinNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurbulence function.  Accepts an amplitude, which determines\n how intense turbulence will be.  'perlinTurbulence 0 == id'\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Noise",
          "name": "perlinTurbulence",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Point3D -\u003e Point3D",
          "source": "src/RSAGL-Modeling-Noise.html#perlinTurbulence",
          "type": "function"
        },
        "index": {
          "description": "Turbulence function Accepts an amplitude which determines how intense turbulence will be perlinTurbulence id",
          "hierarchy": "RSAGL Modeling Noise",
          "module": "RSAGL.Modeling.Noise",
          "name": "perlinTurbulence",
          "normalized": "RSdouble-\u003ePoint D-\u003ePoint D",
          "package": "rsagl",
          "partial": "Turbulence",
          "signature": "RSdouble-\u003ePoint D-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Noise.html#v:perlinTurbulence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Optimization",
          "name": "Optimization",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Optimization.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Optimization",
          "module": "RSAGL.Modeling.Optimization",
          "name": "Optimization",
          "package": "rsagl",
          "partial": "Optimization",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Optimization",
          "name": "allocateComplexity",
          "package": "rsagl",
          "signature": "(p -\u003e p -\u003e RSdouble) -\u003e [(Surface p, RSdouble)] -\u003e Integer -\u003e [Integer]",
          "source": "src/RSAGL-Modeling-Optimization.html#allocateComplexity",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Optimization",
          "module": "RSAGL.Modeling.Optimization",
          "name": "allocateComplexity",
          "normalized": "(a-\u003ea-\u003eRSdouble)-\u003e[(Surface a,RSdouble)]-\u003eInteger-\u003e[Integer]",
          "package": "rsagl",
          "partial": "Complexity",
          "signature": "(p-\u003ep-\u003eRSdouble)-\u003e[(Surface p,RSdouble)]-\u003eInteger-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:allocateComplexity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Optimization",
          "name": "estimateSurfaceArea",
          "package": "rsagl",
          "signature": "(a -\u003e a -\u003e RSdouble) -\u003e Surface a -\u003e RSdouble",
          "source": "src/RSAGL-Modeling-Optimization.html#estimateSurfaceArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Optimization",
          "module": "RSAGL.Modeling.Optimization",
          "name": "estimateSurfaceArea",
          "normalized": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eRSdouble",
          "package": "rsagl",
          "partial": "Surface Area",
          "signature": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:estimateSurfaceArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Optimization",
          "name": "optimizeSurface",
          "package": "rsagl",
          "signature": "(a -\u003e a -\u003e RSdouble) -\u003e Surface a -\u003e Integer -\u003e TesselatedSurface a",
          "source": "src/RSAGL-Modeling-Optimization.html#optimizeSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Optimization",
          "module": "RSAGL.Modeling.Optimization",
          "name": "optimizeSurface",
          "normalized": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eInteger-\u003eTesselatedSurface a",
          "package": "rsagl",
          "partial": "Surface",
          "signature": "(a-\u003ea-\u003eRSdouble)-\u003eSurface a-\u003eInteger-\u003eTesselatedSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Optimization.html#v:optimizeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "Tesselation",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Tesselation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "Tesselation",
          "package": "rsagl",
          "partial": "Tesselation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedElement",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedElement",
          "package": "rsagl",
          "partial": "Tesselated Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#t:TesselatedElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedSurface",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedSurface",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedSurface",
          "package": "rsagl",
          "partial": "Tesselated Surface",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#t:TesselatedSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangleFan",
          "package": "rsagl",
          "signature": "TesselatedTriangleFan",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangleFan",
          "package": "rsagl",
          "partial": "Tesselated Triangle Fan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangleFan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangleStrip",
          "package": "rsagl",
          "signature": "TesselatedTriangleStrip",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangleStrip",
          "package": "rsagl",
          "partial": "Tesselated Triangle Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangleStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangles",
          "package": "rsagl",
          "signature": "TesselatedTriangles",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "TesselatedTriangles",
          "package": "rsagl",
          "partial": "Tesselated Triangles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:TesselatedTriangles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTesselate polylines of possibly differing number of elements.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselateGrid",
          "package": "rsagl",
          "signature": "[[(RSdouble, a)]] -\u003e TesselatedSurface a",
          "source": "src/RSAGL-Modeling-Tesselation.html#tesselateGrid",
          "type": "function"
        },
        "index": {
          "description": "Tesselate polylines of possibly differing number of elements",
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselateGrid",
          "normalized": "[[(RSdouble,a)]]-\u003eTesselatedSurface a",
          "package": "rsagl",
          "partial": "Grid",
          "signature": "[[(RSdouble,a)]]-\u003eTesselatedSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselateGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTesselate a surface into a u-by-v grid of triangles.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselateSurface",
          "package": "rsagl",
          "signature": "Surface a -\u003e (Integer, Integer) -\u003e TesselatedSurface a",
          "source": "src/RSAGL-Modeling-Tesselation.html#tesselateSurface",
          "type": "function"
        },
        "index": {
          "description": "Tesselate surface into u-by-v grid of triangles",
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselateSurface",
          "normalized": "Surface a-\u003e(Integer,Integer)-\u003eTesselatedSurface a",
          "package": "rsagl",
          "partial": "Surface",
          "signature": "Surface a-\u003e(Integer,Integer)-\u003eTesselatedSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselateSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselatedElementToOpenGL",
          "package": "rsagl",
          "signature": "Bool -\u003e TesselatedElement a -\u003e IO ()",
          "source": "src/RSAGL-Modeling-Tesselation.html#tesselatedElementToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselatedElementToOpenGL",
          "normalized": "Bool-\u003eTesselatedElement a-\u003eIO()",
          "package": "rsagl",
          "partial": "Element To Open GL",
          "signature": "Bool-\u003eTesselatedElement a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselatedElementToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of all vertices in a TesselatedSurface.\n There will be duplicate entries.\n\u003c/p\u003e",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselatedSurfaceToVertexCloud",
          "package": "rsagl",
          "signature": "TesselatedSurface a -\u003e [a]",
          "source": "src/RSAGL-Modeling-Tesselation.html#tesselatedSurfaceToVertexCloud",
          "type": "function"
        },
        "index": {
          "description": "Generates list of all vertices in TesselatedSurface There will be duplicate entries",
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselatedSurfaceToVertexCloud",
          "normalized": "TesselatedSurface a-\u003e[a]",
          "package": "rsagl",
          "partial": "Surface To Vertex Cloud",
          "signature": "TesselatedSurface a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselatedSurfaceToVertexCloud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselated_vertices",
          "package": "rsagl",
          "signature": "[a]",
          "source": "src/RSAGL-Modeling-Tesselation.html#TesselatedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "tesselated_vertices",
          "normalized": "[a]",
          "package": "rsagl",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:tesselated_vertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling.Tesselation",
          "name": "unmapTesselatedElement",
          "package": "rsagl",
          "signature": "TesselatedElement a -\u003e (PrimitiveMode, [a])",
          "source": "src/RSAGL-Modeling-Tesselation.html#unmapTesselatedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Modeling Tesselation",
          "module": "RSAGL.Modeling.Tesselation",
          "name": "unmapTesselatedElement",
          "normalized": "TesselatedElement a-\u003e(PrimitiveMode,[a])",
          "package": "rsagl",
          "partial": "Tesselated Element",
          "signature": "TesselatedElement a-\u003e(PrimitiveMode,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling-Tesselation.html#v:unmapTesselatedElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Modeling",
          "name": "Modeling",
          "package": "rsagl",
          "source": "src/RSAGL-Modeling.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Modeling",
          "module": "RSAGL.Modeling",
          "name": "Modeling",
          "package": "rsagl",
          "partial": "Modeling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Modeling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "RayTrace",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-RayTrace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "RayTrace",
          "package": "rsagl",
          "partial": "Ray Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Geometry",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-RayTrace.html#Geometry",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Geometry",
          "package": "rsagl",
          "partial": "Geometry",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Plane",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-RayTrace.html#Plane",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Plane",
          "package": "rsagl",
          "partial": "Plane",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Plane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Sphere",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-RayTrace.html#Sphere",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "Sphere",
          "package": "rsagl",
          "partial": "Sphere",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:Sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "UnitSphere",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-RayTrace.html#UnitSphere",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "UnitSphere",
          "package": "rsagl",
          "partial": "Unit Sphere",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#t:UnitSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "UnitSphere",
          "package": "rsagl",
          "signature": "UnitSphere",
          "source": "src/RSAGL-RayTrace-RayTrace.html#UnitSphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "UnitSphere",
          "package": "rsagl",
          "partial": "Unit Sphere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:UnitSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "plane",
          "package": "rsagl",
          "signature": "Point3D -\u003e Vector3D -\u003e Plane",
          "source": "src/RSAGL-RayTrace-RayTrace.html#plane",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "plane",
          "normalized": "Point D-\u003eVector D-\u003ePlane",
          "package": "rsagl",
          "signature": "Point D-\u003eVector D-\u003ePlane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:plane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "plane3",
          "package": "rsagl",
          "signature": "Point3D -\u003e Point3D -\u003e Point3D -\u003e Plane",
          "source": "src/RSAGL-RayTrace-RayTrace.html#plane3",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "plane3",
          "normalized": "Point D-\u003ePoint D-\u003ePoint D-\u003ePlane",
          "package": "rsagl",
          "signature": "Point D-\u003ePoint D-\u003ePoint D-\u003ePlane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:plane3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "shadowDeform",
          "package": "rsagl",
          "signature": "Vector3D -\u003e g -\u003e SurfaceVertex3D -\u003e SurfaceVertex3D",
          "source": "src/RSAGL-RayTrace-RayTrace.html#shadowDeform",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "shadowDeform",
          "normalized": "Vector D-\u003ea-\u003eSurfaceVertex D-\u003eSurfaceVertex D",
          "package": "rsagl",
          "partial": "Deform",
          "signature": "Vector D-\u003eg-\u003eSurfaceVertex D-\u003eSurfaceVertex D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:shadowDeform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "sphere",
          "package": "rsagl",
          "signature": "Point3D -\u003e RSdouble -\u003e Sphere",
          "source": "src/RSAGL-RayTrace-RayTrace.html#sphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "sphere",
          "normalized": "Point D-\u003eRSdouble-\u003eSphere",
          "package": "rsagl",
          "signature": "Point D-\u003eRSdouble-\u003eSphere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "testRay",
          "package": "rsagl",
          "signature": "Ray3D -\u003e g -\u003e [(RSdouble, SurfaceVertex3D)]",
          "source": "src/RSAGL-RayTrace-RayTrace.html#testRay",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "testRay",
          "normalized": "Ray D-\u003ea-\u003e[(RSdouble,SurfaceVertex D)]",
          "package": "rsagl",
          "partial": "Ray",
          "signature": "Ray D-\u003eg-\u003e[(RSdouble,SurfaceVertex D)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:testRay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "testRay1st",
          "package": "rsagl",
          "signature": "Ray3D -\u003e g -\u003e Maybe (RSdouble, SurfaceVertex3D)",
          "source": "src/RSAGL-RayTrace-RayTrace.html#testRay1st",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace RayTrace",
          "module": "RSAGL.RayTrace.RayTrace",
          "name": "testRay1st",
          "normalized": "Ray D-\u003ea-\u003eMaybe(RSdouble,SurfaceVertex D)",
          "package": "rsagl",
          "partial": "Ray",
          "signature": "Ray D-\u003eg-\u003eMaybe(RSdouble,SurfaceVertex D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-RayTrace.html#v:testRay1st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-Scattering.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "partial": "Scattering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "AdaptiveSample",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-Scattering.html#AdaptiveSample",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "AdaptiveSample",
          "package": "rsagl",
          "partial": "Adaptive Sample",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#t:AdaptiveSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "partial": "Scattering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#t:Scattering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "signature": "Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "Scattering",
          "package": "rsagl",
          "partial": "Scattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:Scattering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "absorbtionOverDistance",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#absorbtionOverDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "absorbtionOverDistance",
          "normalized": "RSdouble-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "Over Distance",
          "signature": "RSdouble-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:absorbtionOverDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "achromaticAbsorbtion",
          "package": "rsagl",
          "signature": "Scattering -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#achromaticAbsorbtion",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "achromaticAbsorbtion",
          "normalized": "Scattering-\u003eScattering",
          "package": "rsagl",
          "partial": "Absorbtion",
          "signature": "Scattering-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:achromaticAbsorbtion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eadaptiveSamples\u003c/a\u003e\u003c/code\u003e tries to selectively subdivide samples that seem most \"conspicuous\" using a user-supplied\n \"conspicuous-ness\" function.  This should give a better result in less samples for highly detailed media models,\n but is likely to be slower that \u003ccode\u003e\u003ca\u003elinearSamples\u003c/a\u003e\u003c/code\u003e for the same number of samples.\n\u003c/p\u003e",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "adaptiveSamples",
          "package": "rsagl",
          "signature": "SamplingAlgorithm a",
          "source": "src/RSAGL-RayTrace-Scattering.html#adaptiveSamples",
          "type": "function"
        },
        "index": {
          "description": "adaptiveSamples tries to selectively subdivide samples that seem most conspicuous using user-supplied conspicuous-ness function This should give better result in less samples for highly detailed media models but is likely to be slower that linearSamples for the same number of samples",
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "adaptiveSamples",
          "package": "rsagl",
          "partial": "Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:adaptiveSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "dust",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#dust",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "dust",
          "normalized": "RSdouble-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:dust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticBackScatter",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Angle -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#elasticBackScatter",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticBackScatter",
          "normalized": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "partial": "Back Scatter",
          "signature": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticBackScatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticForwardScatter",
          "package": "rsagl",
          "signature": "RSdouble -\u003e Angle -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#elasticForwardScatter",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticForwardScatter",
          "normalized": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "partial": "Forward Scatter",
          "signature": "RSdouble-\u003eAngle-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticForwardScatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticOmnidirectionalScatter",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#elasticOmnidirectionalScatter",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "elasticOmnidirectionalScatter",
          "normalized": "RSdouble-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "partial": "Omnidirectional Scatter",
          "signature": "RSdouble-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:elasticOmnidirectionalScatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "emissionOverDistance",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#emissionOverDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "emissionOverDistance",
          "normalized": "RSdouble-\u003eRGB-\u003eRGB",
          "package": "rsagl",
          "partial": "Over Distance",
          "signature": "RSdouble-\u003eRGB-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:emissionOverDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "fog",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#fog",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "fog",
          "normalized": "RSdouble-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:fog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "linearSamples",
          "package": "rsagl",
          "signature": "SamplingAlgorithm a",
          "source": "src/RSAGL-RayTrace-Scattering.html#linearSamples",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "linearSamples",
          "package": "rsagl",
          "partial": "Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:linearSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "rayleigh",
          "package": "rsagl",
          "signature": "RSdouble -\u003e RGB -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#rayleigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "rayleigh",
          "normalized": "RSdouble-\u003eRGB-\u003eScattering",
          "package": "rsagl",
          "signature": "RSdouble-\u003eRGB-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:rayleigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "rayleigh_sky",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#rayleigh_sky",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "rayleigh_sky",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:rayleigh_sky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "scattering_absorb",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "scattering_absorb",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:scattering_absorb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "scattering_scatter",
          "package": "rsagl",
          "signature": "Angle -\u003e RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#Scattering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "scattering_scatter",
          "normalized": "Angle-\u003eRGB",
          "package": "rsagl",
          "signature": "Angle-\u003eRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:scattering_scatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "traceAbsorbtion",
          "package": "rsagl",
          "signature": "(Point3D -\u003e Scattering) -\u003e SamplingAlgorithm RGB -\u003e Point3D -\u003e Point3D -\u003e Samples RGB",
          "source": "src/RSAGL-RayTrace-Scattering.html#traceAbsorbtion",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "traceAbsorbtion",
          "normalized": "(Point D-\u003eScattering)-\u003eSamplingAlgorithm RGB-\u003ePoint D-\u003ePoint D-\u003eSamples RGB",
          "package": "rsagl",
          "partial": "Absorbtion",
          "signature": "(Point D-\u003eScattering)-\u003eSamplingAlgorithm RGB-\u003ePoint D-\u003ePoint D-\u003eSamples RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:traceAbsorbtion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "traceScattering",
          "package": "rsagl",
          "signature": "(Point3D -\u003e Scattering) -\u003e (Point3D -\u003e (Vector3D, RGB)) -\u003e SamplingAlgorithm (RGB, RGB) -\u003e Point3D -\u003e Point3D -\u003e Samples (RGB, RGB)",
          "source": "src/RSAGL-RayTrace-Scattering.html#traceScattering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "traceScattering",
          "normalized": "(Point D-\u003eScattering)-\u003e(Point D-\u003e(Vector D,RGB))-\u003eSamplingAlgorithm(RGB,RGB)-\u003ePoint D-\u003ePoint D-\u003eSamples(RGB,RGB)",
          "package": "rsagl",
          "partial": "Scattering",
          "signature": "(Point D-\u003eScattering)-\u003e(Point D-\u003e(Vector D,RGB))-\u003eSamplingAlgorithm(RGB,RGB)-\u003ePoint D-\u003ePoint D-\u003eSamples(RGB,RGB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:traceScattering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "withoutAbsorbtion",
          "package": "rsagl",
          "signature": "Scattering -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#withoutAbsorbtion",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "withoutAbsorbtion",
          "normalized": "Scattering-\u003eScattering",
          "package": "rsagl",
          "partial": "Absorbtion",
          "signature": "Scattering-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:withoutAbsorbtion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.RayTrace.Scattering",
          "name": "withoutScattering",
          "package": "rsagl",
          "signature": "Scattering -\u003e Scattering",
          "source": "src/RSAGL-RayTrace-Scattering.html#withoutScattering",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL RayTrace Scattering",
          "module": "RSAGL.RayTrace.Scattering",
          "name": "withoutScattering",
          "normalized": "Scattering-\u003eScattering",
          "package": "rsagl",
          "partial": "Scattering",
          "signature": "Scattering-\u003eScattering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-RayTrace-Scattering.html#v:withoutScattering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystems",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystems",
          "package": "rsagl",
          "partial": "Coordinate Systems",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Affine",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Affine",
          "package": "rsagl",
          "partial": "Affine",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:Affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "AffineTransformation",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#AffineTransformation",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "AffineTransformation",
          "package": "rsagl",
          "partial": "Affine Transformation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:AffineTransformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CSN",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#CSN",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CSN",
          "package": "rsagl",
          "partial": "CSN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystem",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#CoordinateSystem",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystem",
          "package": "rsagl",
          "partial": "Coordinate System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CoordinateSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystemClass",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#CoordinateSystemClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "CoordinateSystemClass",
          "package": "rsagl",
          "partial": "Coordinate System Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:CoordinateSystemClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Distance",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#Distance",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Distance",
          "package": "rsagl",
          "partial": "Distance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "NestedCoordinateSystemTransformer",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#NestedCoordinateSystemTransformer",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "NestedCoordinateSystemTransformer",
          "package": "rsagl",
          "partial": "Nested Coordinate System Transformer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#t:NestedCoordinateSystemTransformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Affine",
          "package": "rsagl",
          "signature": "Affine",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "Affine",
          "package": "rsagl",
          "partial": "Affine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:Affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affineOf",
          "package": "rsagl",
          "signature": "AffineTransformation -\u003e Affine",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#affineOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affineOf",
          "normalized": "AffineTransformation-\u003eAffine",
          "package": "rsagl",
          "partial": "Of",
          "signature": "AffineTransformation-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affineOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affine_identity",
          "package": "rsagl",
          "signature": "AffineTransformation",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#affine_identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affine_identity",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affine_identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affine_transformation",
          "package": "rsagl",
          "signature": "a -\u003e a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#Affine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "affine_transformation",
          "normalized": "a-\u003ea",
          "package": "rsagl",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:affine_transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "distance",
          "package": "rsagl",
          "signature": "Distance -\u003e RSdouble",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#distance",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "distance",
          "normalized": "Distance-\u003eRSdouble",
          "package": "rsagl",
          "signature": "Distance-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "distanceSquared",
          "package": "rsagl",
          "signature": "Distance -\u003e RSdouble",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#distanceSquared",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "distanceSquared",
          "normalized": "Distance-\u003eRSdouble",
          "package": "rsagl",
          "partial": "Squared",
          "signature": "Distance-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:distanceSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportA",
          "package": "rsagl",
          "signature": "arr a (CSN a)",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#exportA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportA",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportCSN",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e a -\u003e CSN a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#exportCSN",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportCSN",
          "normalized": "CoordinateSystem-\u003ea-\u003eCSN a",
          "package": "rsagl",
          "partial": "CSN",
          "signature": "CoordinateSystem-\u003ea-\u003eCSN a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportCSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportCoordinateSystem",
          "package": "rsagl",
          "signature": "arr AffineTransformation CoordinateSystem",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#exportCoordinateSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportCoordinateSystem",
          "package": "rsagl",
          "partial": "Coordinate System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportCoordinateSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportM",
          "package": "rsagl",
          "signature": "a -\u003e m (CSN a)",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#exportM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportM",
          "normalized": "a-\u003eb(CSN a)",
          "package": "rsagl",
          "signature": "a-\u003em(CSN a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportToA",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e arr a a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#exportToA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "exportToA",
          "normalized": "CoordinateSystem-\u003ea b b",
          "package": "rsagl",
          "partial": "To",
          "signature": "CoordinateSystem-\u003earr a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:exportToA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "getCoordinateSystem",
          "package": "rsagl",
          "signature": "csc -\u003e CoordinateSystem",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#getCoordinateSystem",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "getCoordinateSystem",
          "normalized": "a-\u003eCoordinateSystem",
          "package": "rsagl",
          "partial": "Coordinate System",
          "signature": "csc-\u003eCoordinateSystem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:getCoordinateSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importA",
          "package": "rsagl",
          "signature": "arr (CSN a) a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#importA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importA",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importCSN",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e CSN a -\u003e a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#importCSN",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importCSN",
          "normalized": "CoordinateSystem-\u003eCSN a-\u003ea",
          "package": "rsagl",
          "partial": "CSN",
          "signature": "CoordinateSystem-\u003eCSN a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importCSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importFromA",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e arr a a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#importFromA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importFromA",
          "normalized": "CoordinateSystem-\u003ea b b",
          "package": "rsagl",
          "partial": "From",
          "signature": "CoordinateSystem-\u003earr a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importFromA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importM",
          "package": "rsagl",
          "signature": "CSN a -\u003e m a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#importM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "importM",
          "normalized": "CSN a-\u003eb a",
          "package": "rsagl",
          "signature": "CSN a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:importM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "inverseTransformation",
          "package": "rsagl",
          "signature": "AffineTransformation -\u003e a -\u003e a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#inverseTransformation",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "inverseTransformation",
          "normalized": "AffineTransformation-\u003ea-\u003ea",
          "package": "rsagl",
          "partial": "Transformation",
          "signature": "AffineTransformation-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:inverseTransformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "measure",
          "package": "rsagl",
          "signature": "p -\u003e p -\u003e Distance",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "measure",
          "normalized": "a-\u003ea-\u003eDistance",
          "package": "rsagl",
          "signature": "p-\u003ep-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "migrateToFrom",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e CoordinateSystem -\u003e a -\u003e a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#migrateToFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "migrateToFrom",
          "normalized": "CoordinateSystem-\u003eCoordinateSystem-\u003ea-\u003ea",
          "package": "rsagl",
          "partial": "To From",
          "signature": "CoordinateSystem-\u003eCoordinateSystem-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:migrateToFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteA",
          "package": "rsagl",
          "signature": "arr (CoordinateSystem, a -\u003e b, a) b",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#remoteA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteA",
          "normalized": "a(CoordinateSystem,b-\u003ec,b)c",
          "package": "rsagl",
          "signature": "arr(CoordinateSystem,a-\u003eb,a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteCSN",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e (a -\u003e b) -\u003e CSN a -\u003e CSN b",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#remoteCSN",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteCSN",
          "normalized": "CoordinateSystem-\u003e(a-\u003eb)-\u003eCSN a-\u003eCSN b",
          "package": "rsagl",
          "partial": "CSN",
          "signature": "CoordinateSystem-\u003e(a-\u003eb)-\u003eCSN a-\u003eCSN b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteCSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteM",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e (a -\u003e b) -\u003e a -\u003e m b",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#remoteM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "remoteM",
          "normalized": "CoordinateSystem-\u003e(a-\u003eb)-\u003ea-\u003ec b",
          "package": "rsagl",
          "signature": "CoordinateSystem-\u003e(a-\u003eb)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:remoteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "root_coordinate_system",
          "package": "rsagl",
          "signature": "CoordinateSystem",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#root_coordinate_system",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "root_coordinate_system",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:root_coordinate_system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "storeCoordinateSystem",
          "package": "rsagl",
          "signature": "CoordinateSystem -\u003e csc -\u003e csc",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#storeCoordinateSystem",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "storeCoordinateSystem",
          "normalized": "CoordinateSystem-\u003ea-\u003ea",
          "package": "rsagl",
          "partial": "Coordinate System",
          "signature": "CoordinateSystem-\u003ecsc-\u003ecsc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:storeCoordinateSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformA",
          "package": "rsagl",
          "signature": "arr a b -\u003e arr (cst, a) b",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#transformA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformA",
          "normalized": "a b c-\u003ea(d,b)c",
          "package": "rsagl",
          "signature": "arr a b-\u003earr(cst,a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformM",
          "package": "rsagl",
          "signature": "cst -\u003e m a -\u003e m a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#transformM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformM",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "rsagl",
          "signature": "cst-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformation",
          "package": "rsagl",
          "signature": "AffineTransformation -\u003e a -\u003e a",
          "source": "src/RSAGL-Scene-CoordinateSystems.html#transformation",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene CoordinateSystems",
          "module": "RSAGL.Scene.CoordinateSystems",
          "name": "transformation",
          "normalized": "AffineTransformation-\u003ea-\u003ea",
          "package": "rsagl",
          "signature": "AffineTransformation-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-CoordinateSystems.html#v:transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "LightSource",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-LightSource.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "LightSource",
          "package": "rsagl",
          "partial": "Light Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA light source.  In addition to position information, each type of \n light source (except \u003ccode\u003e\u003ca\u003eNoLight\u003c/a\u003e\u003c/code\u003e) has a \u003ca\u003ecolor\u003c/a\u003e term, indicating the color of direct lighting,\n and an \u003ca\u003eambient\u003c/a\u003e term, indicating the color of indirect lighting.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "LightSource",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "data"
        },
        "index": {
          "description": "light source In addition to position information each type of light source except NoLight has color term indicating the color of direct lighting and an ambient term indicating the color of indirect lighting",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "LightSource",
          "package": "rsagl",
          "partial": "Light Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#t:LightSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a transformation of a light source, including the light color and ambient color terms, and any affine transformation.\n The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance supports \u003ccode\u003e\u003ca\u003eMapLightSource\u003c/a\u003e\u003c/code\u003e as a specialized endomorphism (see \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "MapLightSource",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-LightSource.html#MapLightSource",
          "type": "data"
        },
        "index": {
          "description": "Encodes transformation of light source including the light color and ambient color terms and any affine transformation The Monoid instance supports MapLightSource as specialized endomorphism see Endo",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "MapLightSource",
          "package": "rsagl",
          "partial": "Map Light Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#t:MapLightSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directional or infinite light source, which always appears to be comming from the specified vector\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "DirectionalLight",
          "package": "rsagl",
          "signature": "DirectionalLight",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "description": "directional or infinite light source which always appears to be comming from the specified vector",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "DirectionalLight",
          "package": "rsagl",
          "partial": "Directional Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:DirectionalLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inactive light source, equivalent to any light source with a color and ambient term of \u003ca\u003ergb 0 0 0\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "NoLight",
          "package": "rsagl",
          "signature": "NoLight",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "description": "An inactive light source equivalent to any light source with color and ambient term of rgb",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "NoLight",
          "package": "rsagl",
          "partial": "No Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:NoLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point light, which has a specific position.  The intensity of point light radiation falls off with the\n inverse square of distance, normalized to one at the specified radius.  This means that point lights will\n be overbright inside that radius.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "PointLight",
          "package": "rsagl",
          "signature": "PointLight",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "description": "point light which has specific position The intensity of point light radiation falls off with the inverse square of distance normalized to one at the specified radius This means that point lights will be overbright inside that radius",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "PointLight",
          "package": "rsagl",
          "partial": "Point Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:PointLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003ePointLight\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eDirectionalLight\u003c/a\u003e\u003c/code\u003e, assuming that the camera is at the origin.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "infiniteLightSourceOf",
          "package": "rsagl",
          "signature": "LightSource -\u003e LightSource",
          "source": "src/RSAGL-Scene-LightSource.html#infiniteLightSourceOf",
          "type": "function"
        },
        "index": {
          "description": "Converts PointLight to DirectionalLight assuming that the camera is at the origin",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "infiniteLightSourceOf",
          "normalized": "LightSource-\u003eLightSource",
          "package": "rsagl",
          "partial": "Light Source Of",
          "signature": "LightSource-\u003eLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:infiniteLightSourceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if a light is \u003ccode\u003e\u003ca\u003eNoLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "isNoLight",
          "package": "rsagl",
          "signature": "LightSource -\u003e Bool",
          "source": "src/RSAGL-Scene-LightSource.html#isNoLight",
          "type": "function"
        },
        "index": {
          "description": "True if light is NoLight",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "isNoLight",
          "normalized": "LightSource-\u003eBool",
          "package": "rsagl",
          "partial": "No Light",
          "signature": "LightSource-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:isNoLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_ambient",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_ambient",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_ambient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_color",
          "package": "rsagl",
          "signature": "RGB",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_color",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_direction",
          "package": "rsagl",
          "signature": "Vector3D",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_direction",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_position",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_position",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_radius",
          "package": "rsagl",
          "signature": "Distance",
          "source": "src/RSAGL-Scene-LightSource.html#LightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "lightsource_radius",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:lightsource_radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformation of the ambient color of a light source.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapAmbient",
          "package": "rsagl",
          "signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
          "source": "src/RSAGL-Scene-LightSource.html#mapAmbient",
          "type": "function"
        },
        "index": {
          "description": "Transformation of the ambient color of light source",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapAmbient",
          "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "package": "rsagl",
          "partial": "Ambient",
          "signature": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapAmbient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformation of both the direct illumination and the ambient color terms of a light source.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapBoth",
          "package": "rsagl",
          "signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
          "source": "src/RSAGL-Scene-LightSource.html#mapBoth",
          "type": "function"
        },
        "index": {
          "description": "Transformation of both the direct illumination and the ambient color terms of light source",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapBoth",
          "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "package": "rsagl",
          "partial": "Both",
          "signature": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformation of the direct illumination color of a light source.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapLight",
          "package": "rsagl",
          "signature": "(RGB -\u003e RGB) -\u003e MapLightSource",
          "source": "src/RSAGL-Scene-LightSource.html#mapLight",
          "type": "function"
        },
        "index": {
          "description": "Transformation of the direct illumination color of light source",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapLight",
          "normalized": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "package": "rsagl",
          "partial": "Light",
          "signature": "(RGB-\u003eRGB)-\u003eMapLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eMapLightSource\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eLightSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapLightSource",
          "package": "rsagl",
          "signature": "MapLightSource -\u003e LightSource -\u003e LightSource",
          "source": "src/RSAGL-Scene-LightSource.html#mapLightSource",
          "type": "function"
        },
        "index": {
          "description": "Apply MapLightSource to LightSource",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "mapLightSource",
          "normalized": "MapLightSource-\u003eLightSource-\u003eLightSource",
          "package": "rsagl",
          "partial": "Light Source",
          "signature": "MapLightSource-\u003eLightSource-\u003eLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:mapLightSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet one specific OpenGL light source.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "setLightSourceToOpenGL",
          "package": "rsagl",
          "signature": "(Light, LightSource) -\u003e IO ()",
          "source": "src/RSAGL-Scene-LightSource.html#setLightSourceToOpenGL",
          "type": "function"
        },
        "index": {
          "description": "Set one specific OpenGL light source",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "setLightSourceToOpenGL",
          "normalized": "(Light,LightSource)-\u003eIO()",
          "package": "rsagl",
          "partial": "Light Source To Open GL",
          "signature": "(Light,LightSource)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:setLightSourceToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet OpenGL light sources starting from 0.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "setLightSourcesToOpenGL",
          "package": "rsagl",
          "signature": "[LightSource] -\u003e IO ()",
          "source": "src/RSAGL-Scene-LightSource.html#setLightSourcesToOpenGL",
          "type": "function"
        },
        "index": {
          "description": "Set OpenGL light sources starting from",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "setLightSourcesToOpenGL",
          "normalized": "[LightSource]-\u003eIO()",
          "package": "rsagl",
          "partial": "Light Sources To Open GL",
          "signature": "[LightSource]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:setLightSourcesToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DirectionalLight approximation of ambient sky radiation.  Normally, set the vector to straight up, since that is the direction of the sky.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.LightSource",
          "name": "skylight",
          "package": "rsagl",
          "signature": "Vector3D -\u003e RGB -\u003e LightSource",
          "source": "src/RSAGL-Scene-LightSource.html#skylight",
          "type": "function"
        },
        "index": {
          "description": "DirectionalLight approximation of ambient sky radiation Normally set the vector to straight up since that is the direction of the sky",
          "hierarchy": "RSAGL Scene LightSource",
          "module": "RSAGL.Scene.LightSource",
          "name": "skylight",
          "normalized": "Vector D-\u003eRGB-\u003eLightSource",
          "package": "rsagl",
          "signature": "Vector D-\u003eRGB-\u003eLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-LightSource.html#v:skylight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "Scene",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "Scene",
          "package": "rsagl",
          "partial": "Scene",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "Camera",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "Camera",
          "package": "rsagl",
          "partial": "Camera",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "LightSourceLayerTransform",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "LightSourceLayerTransform",
          "package": "rsagl",
          "partial": "Light Source Layer Transform",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:LightSourceLayerTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "Scene",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#Scene",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "Scene",
          "package": "rsagl",
          "partial": "Scene",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:Scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "SceneAccumulator",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#SceneAccumulator",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "SceneAccumulator",
          "package": "rsagl",
          "partial": "Scene Accumulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneAccumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayer",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#SceneLayer",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayer",
          "package": "rsagl",
          "partial": "Scene Layer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayerInfo",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayerInfo",
          "package": "rsagl",
          "partial": "Scene Layer Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneLayerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "SceneObject",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#SceneObject",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "SceneObject",
          "package": "rsagl",
          "partial": "Scene Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:SceneObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "ScenicAccumulator",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-Scene.html#ScenicAccumulator",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "ScenicAccumulator",
          "package": "rsagl",
          "partial": "Scenic Accumulator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#t:ScenicAccumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "LightSourceLayerTransform",
          "package": "rsagl",
          "signature": "LightSourceLayerTransform",
          "source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "LightSourceLayerTransform",
          "package": "rsagl",
          "partial": "Light Source Layer Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:LightSourceLayerTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "PerspectiveCamera",
          "package": "rsagl",
          "signature": "PerspectiveCamera",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "PerspectiveCamera",
          "package": "rsagl",
          "partial": "Perspective Camera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:PerspectiveCamera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayerInfo",
          "package": "rsagl",
          "signature": "SceneLayerInfo",
          "source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "SceneLayerInfo",
          "package": "rsagl",
          "partial": "Scene Layer Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:SceneLayerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateScene",
          "package": "rsagl",
          "signature": "SceneLayer -\u003e SceneObject m -\u003e a -\u003e a",
          "source": "src/RSAGL-Scene-Scene.html#accumulateScene",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateScene",
          "normalized": "SceneLayer-\u003eSceneObject a-\u003eb-\u003eb",
          "package": "rsagl",
          "partial": "Scene",
          "signature": "SceneLayer-\u003eSceneObject m-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateSceneA",
          "package": "rsagl",
          "signature": "arr (SceneLayer, SceneObject m) ()",
          "source": "src/RSAGL-Scene-Scene.html#accumulateSceneA",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateSceneA",
          "normalized": "a(SceneLayer,SceneObject b)()",
          "package": "rsagl",
          "partial": "Scene",
          "signature": "arr(SceneLayer,SceneObject m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateSceneA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateSceneM",
          "package": "rsagl",
          "signature": "SceneLayer -\u003e SceneObject a -\u003e m ()",
          "source": "src/RSAGL-Scene-Scene.html#accumulateSceneM",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "accumulateSceneM",
          "normalized": "SceneLayer-\u003eSceneObject a-\u003eb()",
          "package": "rsagl",
          "partial": "Scene",
          "signature": "SceneLayer-\u003eSceneObject a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:accumulateSceneM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "assembleScene",
          "package": "rsagl",
          "signature": "SceneLayerInfo -\u003e SceneAccumulator m -\u003e m Scene",
          "source": "src/RSAGL-Scene-Scene.html#assembleScene",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "assembleScene",
          "normalized": "SceneLayerInfo-\u003eSceneAccumulator a-\u003ea Scene",
          "package": "rsagl",
          "partial": "Scene",
          "signature": "SceneLayerInfo-\u003eSceneAccumulator m-\u003em Scene",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:assembleScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the minimal light source layer transform needed to maintain correct light sources under camera transformations.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.Scene",
          "name": "cameraLightSourceLayerTransform",
          "package": "rsagl",
          "signature": "(SceneLayer -\u003e Camera) -\u003e LightSourceLayerTransform",
          "source": "src/RSAGL-Scene-Scene.html#cameraLightSourceLayerTransform",
          "type": "function"
        },
        "index": {
          "description": "Performs the minimal light source layer transform needed to maintain correct light sources under camera transformations",
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "cameraLightSourceLayerTransform",
          "normalized": "(SceneLayer-\u003eCamera)-\u003eLightSourceLayerTransform",
          "package": "rsagl",
          "partial": "Light Source Layer Transform",
          "signature": "(SceneLayer-\u003eCamera)-\u003eLightSourceLayerTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:cameraLightSourceLayerTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "cameraRelativeSceneObject",
          "package": "rsagl",
          "signature": "(Camera -\u003e m (WrappedAffine IntermediateModel)) -\u003e SceneObject m",
          "source": "src/RSAGL-Scene-Scene.html#cameraRelativeSceneObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "cameraRelativeSceneObject",
          "normalized": "(Camera-\u003ea(WrappedAffine IntermediateModel))-\u003eSceneObject a",
          "package": "rsagl",
          "partial": "Relative Scene Object",
          "signature": "(Camera-\u003em(WrappedAffine IntermediateModel))-\u003eSceneObject m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:cameraRelativeSceneObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "camera_fov",
          "package": "rsagl",
          "signature": "Angle",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "camera_fov",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_fov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "camera_lookat",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "camera_lookat",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_lookat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "camera_position",
          "package": "rsagl",
          "signature": "Point3D",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "camera_position",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "camera_up",
          "package": "rsagl",
          "signature": "Vector3D",
          "source": "src/RSAGL-Scene-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "camera_up",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:camera_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "infiniteCameraOf",
          "package": "rsagl",
          "signature": "Camera -\u003e Camera",
          "source": "src/RSAGL-Scene-Scene.html#infiniteCameraOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "infiniteCameraOf",
          "normalized": "Camera-\u003eCamera",
          "package": "rsagl",
          "partial": "Camera Of",
          "signature": "Camera-\u003eCamera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:infiniteCameraOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "lightSource",
          "package": "rsagl",
          "signature": "LightSource -\u003e SceneObject m",
          "source": "src/RSAGL-Scene-Scene.html#lightSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "lightSource",
          "normalized": "LightSource-\u003eSceneObject a",
          "package": "rsagl",
          "partial": "Source",
          "signature": "LightSource-\u003eSceneObject m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:lightSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "lightSourceLayerTransform",
          "package": "rsagl",
          "signature": "SceneLayer -\u003e SceneLayer -\u003e LightSource -\u003e LightSource",
          "source": "src/RSAGL-Scene-Scene.html#LightSourceLayerTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "lightSourceLayerTransform",
          "normalized": "SceneLayer-\u003eSceneLayer-\u003eLightSource-\u003eLightSource",
          "package": "rsagl",
          "partial": "Source Layer Transform",
          "signature": "SceneLayer-\u003eSceneLayer-\u003eLightSource-\u003eLightSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:lightSourceLayerTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "null_scene_accumulator",
          "package": "rsagl",
          "signature": "SceneAccumulator m",
          "source": "src/RSAGL-Scene-Scene.html#null_scene_accumulator",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "null_scene_accumulator",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:null_scene_accumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "sceneObject",
          "package": "rsagl",
          "signature": "m mt -\u003e SceneObject m",
          "source": "src/RSAGL-Scene-Scene.html#sceneObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "sceneObject",
          "normalized": "a b-\u003eSceneObject a",
          "package": "rsagl",
          "partial": "Object",
          "signature": "m mt-\u003eSceneObject m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:sceneObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "sceneToOpenGL",
          "package": "rsagl",
          "signature": "RSdouble -\u003e (RSdouble, RSdouble) -\u003e Scene -\u003e IO ()",
          "source": "src/RSAGL-Scene-Scene.html#sceneToOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "sceneToOpenGL",
          "normalized": "RSdouble-\u003e(RSdouble,RSdouble)-\u003eScene-\u003eIO()",
          "package": "rsagl",
          "partial": "To Open GL",
          "signature": "RSdouble-\u003e(RSdouble,RSdouble)-\u003eScene-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:sceneToOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "scene_layer_camera",
          "package": "rsagl",
          "signature": "SceneLayer -\u003e Camera",
          "source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "scene_layer_camera",
          "normalized": "SceneLayer-\u003eCamera",
          "package": "rsagl",
          "signature": "SceneLayer-\u003eCamera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:scene_layer_camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "scene_layer_light_source_layer_transform",
          "package": "rsagl",
          "signature": "LightSourceLayerTransform",
          "source": "src/RSAGL-Scene-Scene.html#SceneLayerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "scene_layer_light_source_layer_transform",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:scene_layer_light_source_layer_transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "stdSceneLayerInfo",
          "package": "rsagl",
          "signature": "Camera -\u003e SceneLayerInfo",
          "source": "src/RSAGL-Scene-Scene.html#stdSceneLayerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "stdSceneLayerInfo",
          "normalized": "Camera-\u003eSceneLayerInfo",
          "package": "rsagl",
          "partial": "Scene Layer Info",
          "signature": "Camera-\u003eSceneLayerInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:stdSceneLayerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "stdSceneLayers",
          "package": "rsagl",
          "signature": "Camera -\u003e SceneLayer -\u003e Camera",
          "source": "src/RSAGL-Scene-Scene.html#stdSceneLayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "stdSceneLayers",
          "normalized": "Camera-\u003eSceneLayer-\u003eCamera",
          "package": "rsagl",
          "partial": "Scene Layers",
          "signature": "Camera-\u003eSceneLayer-\u003eCamera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:stdSceneLayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_cockpit",
          "package": "rsagl",
          "signature": "SceneLayer",
          "source": "src/RSAGL-Scene-Scene.html#std_scene_layer_cockpit",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_cockpit",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_cockpit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_hud",
          "package": "rsagl",
          "signature": "SceneLayer",
          "source": "src/RSAGL-Scene-Scene.html#std_scene_layer_hud",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_hud",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_hud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_infinite",
          "package": "rsagl",
          "signature": "SceneLayer",
          "source": "src/RSAGL-Scene-Scene.html#std_scene_layer_infinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_infinite",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_infinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_local",
          "package": "rsagl",
          "signature": "SceneLayer",
          "source": "src/RSAGL-Scene-Scene.html#std_scene_layer_local",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene Scene",
          "module": "RSAGL.Scene.Scene",
          "name": "std_scene_layer_local",
          "package": "rsagl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-Scene.html#v:std_scene_layer_local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-WrappedAffine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Scene WrappedAffine",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "partial": "Wrapped Affine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrappedAffine stores up affine transformations that are commited only when\n the entity is unwrapped.  In this way we can store affine transformations\n for entities that can not be directly transformed, or for which delaying\n transformation an optimization.\n\u003c/p\u003e",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "source": "src/RSAGL-Scene-WrappedAffine.html#WrappedAffine",
          "type": "data"
        },
        "index": {
          "description": "WrappedAffine stores up affine transformations that are commited only when the entity is unwrapped In this way we can store affine transformations for entities that can not be directly transformed or for which delaying transformation an optimization",
          "hierarchy": "RSAGL Scene WrappedAffine",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "partial": "Wrapped Affine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#t:WrappedAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "signature": "WrappedAffine CoordinateSystem a",
          "source": "src/RSAGL-Scene-WrappedAffine.html#WrappedAffine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene WrappedAffine",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "WrappedAffine",
          "package": "rsagl",
          "partial": "Wrapped Affine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:WrappedAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "unwrapAffine",
          "package": "rsagl",
          "signature": "WrappedAffine a -\u003e a",
          "source": "src/RSAGL-Scene-WrappedAffine.html#unwrapAffine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene WrappedAffine",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "unwrapAffine",
          "normalized": "WrappedAffine a-\u003ea",
          "package": "rsagl",
          "partial": "Affine",
          "signature": "WrappedAffine a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:unwrapAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "wrapAffine",
          "package": "rsagl",
          "signature": "a -\u003e WrappedAffine a",
          "source": "src/RSAGL-Scene-WrappedAffine.html#wrapAffine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Scene WrappedAffine",
          "module": "RSAGL.Scene.WrappedAffine",
          "name": "wrapAffine",
          "normalized": "a-\u003eWrappedAffine a",
          "package": "rsagl",
          "partial": "Affine",
          "signature": "a-\u003eWrappedAffine a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene-WrappedAffine.html#v:wrapAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Scene",
          "name": "Scene",
          "package": "rsagl",
          "source": "src/RSAGL-Scene.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Scene",
          "module": "RSAGL.Scene",
          "name": "Scene",
          "package": "rsagl",
          "partial": "Scene",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl/docs/RSAGL-Scene.html#"
      }
    }
  ]
]