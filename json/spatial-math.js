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
        "word": "spatial-math"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "SpatialMath",
          "package": "spatial-math",
          "source": "src/SpatialMath.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "SpatialMath",
          "package": "spatial-math",
          "partial": "Spatial Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3-2-1 Euler angle rotation sequence\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "Euler",
          "package": "spatial-math",
          "source": "src/SpatialMath.html#Euler",
          "type": "data"
        },
        "index": {
          "description": "Euler angle rotation sequence",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "Euler",
          "package": "spatial-math",
          "partial": "Euler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#t:Euler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3x3 matrix with row-major representation\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "M33",
          "package": "spatial-math",
          "type": "type"
        },
        "index": {
          "description": "x3 matrix with row-major representation",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "M33",
          "package": "spatial-math",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#t:M33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuaternions\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "Quaternion",
          "package": "spatial-math",
          "type": "data"
        },
        "index": {
          "description": "Quaternions",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "Quaternion",
          "package": "spatial-math",
          "partial": "Quaternion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#t:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3-dimensional vector\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "V3",
          "package": "spatial-math",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "V3",
          "package": "spatial-math",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#t:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "Euler",
          "package": "spatial-math",
          "signature": "Euler",
          "source": "src/SpatialMath.html#Euler",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "Euler",
          "package": "spatial-math",
          "partial": "Euler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:Euler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "Quaternion",
          "package": "spatial-math",
          "signature": "Quaternion !a !(V3 a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "Quaternion",
          "package": "spatial-math",
          "partial": "Quaternion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "V3",
          "package": "spatial-math",
          "signature": "V3 !a !a !a",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "V3",
          "package": "spatial-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert DCM to euler angles\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edcmOfEuler321 $ Euler {eYaw = 0.0, ePitch = 0, eRoll = 0}\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 1.0 0.0 0.0) (V3 0.0 1.0 0.0) (V3 0.0 0.0 1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edcmOfEuler321 $ Euler {eYaw = pi/2, ePitch = 0, eRoll = 0}\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 2.220446049250313e-16 1.0 0.0) (V3 (-1.0) 2.220446049250313e-16 0.0) (V3 0.0 0.0 1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edcmOfEuler321 $ Euler {eYaw = pi/4, ePitch = 0, eRoll = 0}\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 0.7071067811865475 0.7071067811865476 0.0) (V3 (-0.7071067811865476) 0.7071067811865475 0.0) (V3 0.0 0.0 1.0)\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "dcmOfEuler321",
          "package": "spatial-math",
          "signature": "Euler a -\u003e M33 a",
          "source": "src/SpatialMath.html#dcmOfEuler321",
          "type": "function"
        },
        "index": {
          "description": "Convert DCM to euler angles dcmOfEuler321 Euler eYaw ePitch eRoll V3 V3 V3 V3 dcmOfEuler321 Euler eYaw pi ePitch eRoll V3 V3 e-16 V3 e-16 V3 dcmOfEuler321 Euler eYaw pi ePitch eRoll V3 V3 V3 V3",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "dcmOfEuler321",
          "normalized": "Euler a-\u003eM a",
          "package": "spatial-math",
          "partial": "Of Euler",
          "signature": "Euler a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:dcmOfEuler321"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a quaternion to a DCM\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edcmOfQuat $ Quaternion 1.0 (V3 0.0 0.0 0.0)\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 1.0 0.0 0.0) (V3 0.0 1.0 0.0) (V3 0.0 0.0 1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet s = sqrt(2)/2 in dcmOfQuat $ Quaternion s (V3 0.0 0.0 s)\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 0.0 1.0000000000000002 0.0) (V3 (-1.0000000000000002) 0.0 0.0) (V3 0.0 0.0 1.0000000000000002)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edcmOfQuat $ Quaternion 0.9238795325112867 (V3 0.0 0.0 0.3826834323650898)\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 0.7071067811865475 0.7071067811865476 0.0) (V3 (-0.7071067811865476) 0.7071067811865475 0.0) (V3 0.0 0.0 1.0)\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "dcmOfQuat",
          "package": "spatial-math",
          "signature": "Quaternion a -\u003e M33 a",
          "source": "src/SpatialMath.html#dcmOfQuat",
          "type": "function"
        },
        "index": {
          "description": "convert quaternion to DCM dcmOfQuat Quaternion V3 V3 V3 V3 V3 let sqrt in dcmOfQuat Quaternion V3 V3 V3 V3 V3 dcmOfQuat Quaternion V3 V3 V3 V3 V3",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "dcmOfQuat",
          "normalized": "Quaternion a-\u003eM a",
          "package": "spatial-math",
          "partial": "Of Quat",
          "signature": "Quaternion a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:dcmOfQuat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "dcmOfQuatB2A",
          "package": "spatial-math",
          "signature": "Quaternion a -\u003e M33 a",
          "source": "src/SpatialMath.html#dcmOfQuatB2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "dcmOfQuatB2A",
          "normalized": "Quaternion a-\u003eM a",
          "package": "spatial-math",
          "partial": "Of Quat",
          "signature": "Quaternion a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:dcmOfQuatB2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "ePitch",
          "package": "spatial-math",
          "signature": "a",
          "source": "src/SpatialMath.html#Euler",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "ePitch",
          "package": "spatial-math",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:ePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "eRoll",
          "package": "spatial-math",
          "signature": "a",
          "source": "src/SpatialMath.html#Euler",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "eRoll",
          "package": "spatial-math",
          "partial": "Roll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:eRoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "eYaw",
          "package": "spatial-math",
          "signature": "a",
          "source": "src/SpatialMath.html#Euler",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "eYaw",
          "package": "spatial-math",
          "partial": "Yaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:eYaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert DCM to euler angles\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfDcm $ V3 (V3 1 0 0) (V3 0 1 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 0.0, ePitch = -0.0, eRoll = 0.0}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfDcm $ V3 (V3 0 1 0) (V3 (-1) 0 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 1.5707963267948966, ePitch = -0.0, eRoll = 0.0}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet s = sqrt(2)/2 in euler321OfDcm $ V3 (V3 s s 0) (V3 (-s) s 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 0.7853981633974483, ePitch = -0.0, eRoll = 0.0}\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "euler321OfDcm",
          "package": "spatial-math",
          "signature": "M33 a -\u003e Euler a",
          "source": "src/SpatialMath.html#euler321OfDcm",
          "type": "function"
        },
        "index": {
          "description": "Convert DCM to euler angles euler321OfDcm V3 V3 V3 V3 Euler eYaw ePitch eRoll euler321OfDcm V3 V3 V3 V3 Euler eYaw ePitch eRoll let sqrt in euler321OfDcm V3 V3 V3 V3 Euler eYaw ePitch eRoll",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "euler321OfDcm",
          "normalized": "M a-\u003eEuler a",
          "package": "spatial-math",
          "partial": "Of Dcm",
          "signature": "M a-\u003eEuler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:euler321OfDcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert quaternion to Euler angles\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfQuat (Quaternion 1.0 (V3 0.0 0.0 0.0))\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 0.0, ePitch = -0.0, eRoll = 0.0}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfQuat (Quaternion (sqrt(2)/2) (V3 (sqrt(2)/2) 0.0 0.0))\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 0.0, ePitch = -0.0, eRoll = 1.5707963267948966}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfQuat (Quaternion (sqrt(2)/2) (V3 0.0 (sqrt(2)/2) 0.0))\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 0.0, ePitch = 1.5707963267948966, eRoll = 0.0}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeuler321OfQuat (Quaternion (sqrt(2)/2) (V3 0.0 0.0 (sqrt(2)/2)))\n\u003c/code\u003e\u003c/strong\u003eEuler {eYaw = 1.5707963267948966, ePitch = -0.0, eRoll = 0.0}\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "euler321OfQuat",
          "package": "spatial-math",
          "signature": "Quaternion a -\u003e Euler a",
          "source": "src/SpatialMath.html#euler321OfQuat",
          "type": "function"
        },
        "index": {
          "description": "Convert quaternion to Euler angles euler321OfQuat Quaternion V3 Euler eYaw ePitch eRoll euler321OfQuat Quaternion sqrt V3 sqrt Euler eYaw ePitch eRoll euler321OfQuat Quaternion sqrt V3 sqrt Euler eYaw ePitch eRoll euler321OfQuat Quaternion sqrt V3 sqrt Euler eYaw ePitch eRoll",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "euler321OfQuat",
          "normalized": "Quaternion a-\u003eEuler a",
          "package": "spatial-math",
          "partial": "Of Quat",
          "signature": "Quaternion a-\u003eEuler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:euler321OfQuat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a DCM to a quaternion\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfDcm $ V3 (V3 1 0 0) (V3 0 1 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 1.0 (V3 0.0 0.0 0.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfDcm $ V3 (V3 0 1 0) (V3 (-1) 0 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 0.7071067811865476 (V3 0.0 0.0 0.7071067811865475)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet s = sqrt(2)/2 in quatOfDcm $ V3 (V3 s s 0) (V3 (-s) s 0) (V3 0 0 1)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 0.9238795325112867 (V3 0.0 0.0 0.3826834323650898)\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "quatOfDcm",
          "package": "spatial-math",
          "signature": "M33 a -\u003e Quaternion a",
          "source": "src/SpatialMath.html#quatOfDcm",
          "type": "function"
        },
        "index": {
          "description": "convert DCM to quaternion quatOfDcm V3 V3 V3 V3 Quaternion V3 quatOfDcm V3 V3 V3 V3 Quaternion V3 let sqrt in quatOfDcm V3 V3 V3 V3 Quaternion V3",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "quatOfDcm",
          "normalized": "M a-\u003eQuaternion a",
          "package": "spatial-math",
          "partial": "Of Dcm",
          "signature": "M a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:quatOfDcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "quatOfDcmB2A",
          "package": "spatial-math",
          "signature": "M33 a -\u003e Quaternion a",
          "source": "src/SpatialMath.html#quatOfDcmB2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "quatOfDcmB2A",
          "normalized": "M a-\u003eQuaternion a",
          "package": "spatial-math",
          "partial": "Of Dcm",
          "signature": "M a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:quatOfDcmB2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Euler angles to quaternion\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfEuler321 (Euler 0 0 0)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 1.0 (V3 0.0 0.0 0.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfEuler321 (Euler (pi/2) 0 0)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 0.7071067811865476 (V3 0.0 0.0 0.7071067811865475)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfEuler321 (Euler 0 (pi/2) 0)\n\u003c/code\u003e\u003c/strong\u003eQuaternion 0.7071067811865476 (V3 0.0 0.7071067811865475 0.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equatOfEuler321 (Euler 0 0 (pi/2))\n\u003c/code\u003e\u003c/strong\u003eQuaternion 0.7071067811865476 (V3 0.7071067811865475 0.0 0.0)\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "quatOfEuler321",
          "package": "spatial-math",
          "signature": "Euler a -\u003e Quaternion a",
          "source": "src/SpatialMath.html#quatOfEuler321",
          "type": "function"
        },
        "index": {
          "description": "Convert Euler angles to quaternion quatOfEuler321 Euler Quaternion V3 quatOfEuler321 Euler pi Quaternion V3 quatOfEuler321 Euler pi Quaternion V3 quatOfEuler321 Euler pi Quaternion V3",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "quatOfEuler321",
          "normalized": "Euler a-\u003eQuaternion a",
          "package": "spatial-math",
          "partial": "Of Euler",
          "signature": "Euler a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:quatOfEuler321"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evec_b = R_a2b * vec_a\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "rotVecByDcm",
          "package": "spatial-math",
          "signature": "M33 a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByDcm",
          "type": "function"
        },
        "index": {
          "description": "vec a2b vec",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByDcm",
          "normalized": "M a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Dcm",
          "signature": "M a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByDcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evec_a = R_a2b^T * vec_b\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "rotVecByDcmB2A",
          "package": "spatial-math",
          "signature": "M33 a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByDcmB2A",
          "type": "function"
        },
        "index": {
          "description": "vec a2b vec",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByDcmB2A",
          "normalized": "M a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Dcm",
          "signature": "M a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByDcmB2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "rotVecByEuler",
          "package": "spatial-math",
          "signature": "Euler a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByEuler",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByEuler",
          "normalized": "Euler a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Euler",
          "signature": "Euler a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByEuler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "rotVecByEulerB2A",
          "package": "spatial-math",
          "signature": "Euler a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByEulerB2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByEulerB2A",
          "normalized": "Euler a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Euler",
          "signature": "Euler a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByEulerB2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evec_b = q_a2b * vec_a * q_a2b^(-1)\n   vec_b = R(q_a2b) * vec_a\n\u003c/p\u003e",
          "module": "SpatialMath",
          "name": "rotVecByQuat",
          "package": "spatial-math",
          "signature": "Quaternion a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByQuat",
          "type": "function"
        },
        "index": {
          "description": "vec a2b vec a2b vec a2b vec",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByQuat",
          "normalized": "Quaternion a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Quat",
          "signature": "Quaternion a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByQuat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SpatialMath",
          "name": "rotVecByQuatB2A",
          "package": "spatial-math",
          "signature": "Quaternion a -\u003e V3 a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotVecByQuatB2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotVecByQuatB2A",
          "normalized": "Quaternion a-\u003eV a-\u003eV a",
          "package": "spatial-math",
          "partial": "Vec By Quat",
          "signature": "Quaternion a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotVecByQuatB2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector about the X axis\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutX (V3 0 1 0) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 0.0 6.123233995736766e-17 1.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutX (V3 0 0 1) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 0.0 (-1.0) 6.123233995736766e-17\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "rotateXyzAboutX",
          "package": "spatial-math",
          "signature": "V3 a -\u003e a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotateXyzAboutX",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector about the axis rotateXyzAboutX V3 pi V3 e-17 rotateXyzAboutX V3 pi V3 e-17",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotateXyzAboutX",
          "normalized": "V a-\u003ea-\u003eV a",
          "package": "spatial-math",
          "partial": "Xyz About",
          "signature": "V a-\u003ea-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotateXyzAboutX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector about the Y axis\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutY (V3 0 0 1) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 1.0 0.0 6.123233995736766e-17\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutY (V3 1 0 0) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 6.123233995736766e-17 0.0 (-1.0)\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "rotateXyzAboutY",
          "package": "spatial-math",
          "signature": "V3 a -\u003e a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotateXyzAboutY",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector about the axis rotateXyzAboutY V3 pi V3 e-17 rotateXyzAboutY V3 pi V3 e-17",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotateXyzAboutY",
          "normalized": "V a-\u003ea-\u003eV a",
          "package": "spatial-math",
          "partial": "Xyz About",
          "signature": "V a-\u003ea-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotateXyzAboutY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector about the Z axis\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutZ (V3 1 0 0) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 6.123233995736766e-17 1.0 0.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erotateXyzAboutZ (V3 0 1 0) (pi/2)\n\u003c/code\u003e\u003c/strong\u003eV3 (-1.0) 6.123233995736766e-17 0.0\n\u003c/pre\u003e",
          "module": "SpatialMath",
          "name": "rotateXyzAboutZ",
          "package": "spatial-math",
          "signature": "V3 a -\u003e a -\u003e V3 a",
          "source": "src/SpatialMath.html#rotateXyzAboutZ",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector about the axis rotateXyzAboutZ V3 pi V3 e-17 rotateXyzAboutZ V3 pi V3 e-17",
          "hierarchy": "SpatialMath",
          "module": "SpatialMath",
          "name": "rotateXyzAboutZ",
          "normalized": "V a-\u003ea-\u003eV a",
          "package": "spatial-math",
          "partial": "Xyz About",
          "signature": "V a-\u003ea-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spatial-math/docs/SpatialMath.html#v:rotateXyzAboutZ"
      }
    }
  ]
]