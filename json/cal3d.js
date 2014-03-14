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
        "word": "cal3d"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a core material thread.\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "createCoreMaterialThread",
          "package": "cal3d",
          "signature": "CoreModel -\u003e MaterialThreadId -\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#createCoreMaterialThread",
          "type": "function"
        },
        "index": {
          "description": "Create core material thread",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "createCoreMaterialThread",
          "normalized": "CoreModel-\u003eMaterialThreadId-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Core Material Thread",
          "signature": "CoreModel-\u003eMaterialThreadId-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:createCoreMaterialThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Destroy a CoreModel\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "deleteCoreModel",
          "package": "cal3d",
          "signature": "CoreModel -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#deleteCoreModel",
          "type": "function"
        },
        "index": {
          "description": "Destroy CoreModel",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "deleteCoreModel",
          "normalized": "CoreModel-\u003eIO()",
          "package": "cal3d",
          "partial": "Core Model",
          "signature": "CoreModel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:deleteCoreModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Load a core animation from a file\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreAnimation",
          "package": "cal3d",
          "signature": "Loader AnimationId",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#loadCoreAnimation",
          "type": "function"
        },
        "index": {
          "description": "Load core animation from file",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreAnimation",
          "package": "cal3d",
          "partial": "Core Animation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:loadCoreAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Load a core material from a file\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreMaterial",
          "package": "cal3d",
          "signature": "Loader MaterialId",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#loadCoreMaterial",
          "type": "function"
        },
        "index": {
          "description": "Load core material from file",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreMaterial",
          "package": "cal3d",
          "partial": "Core Material",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:loadCoreMaterial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Load a core mesh from a file\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreMesh",
          "package": "cal3d",
          "signature": "Loader MeshId",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#loadCoreMesh",
          "type": "function"
        },
        "index": {
          "description": "Load core mesh from file",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreMesh",
          "package": "cal3d",
          "partial": "Core Mesh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:loadCoreMesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Load a core skeleton from a file.\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreSkeleton",
          "package": "cal3d",
          "signature": "CoreModel -\u003e FilePath -\u003e LoadResult ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#loadCoreSkeleton",
          "type": "function"
        },
        "index": {
          "description": "Load core skeleton from file",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "loadCoreSkeleton",
          "normalized": "CoreModel-\u003eFilePath-\u003eLoadResult()",
          "package": "cal3d",
          "partial": "Core Skeleton",
          "signature": "CoreModel-\u003eFilePath-\u003eLoadResult()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:loadCoreSkeleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "name\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "newCoreModel",
          "package": "cal3d",
          "signature": "String-\u003e IO CoreModel",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#newCoreModel",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "newCoreModel",
          "normalized": "String-\u003eIO CoreModel",
          "package": "cal3d",
          "partial": "Core Model",
          "signature": "String-\u003eIO CoreModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:newCoreModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply the material identified by a material thread and material set.\n",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "setCoreMaterialId",
          "package": "cal3d",
          "signature": "CoreModel -\u003e MaterialThreadId -\u003e MaterialSetId -\u003e MaterialId -\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-CoreModel.html#setCoreMaterialId",
          "type": "function"
        },
        "index": {
          "description": "Apply the material identified by material thread and material set",
          "hierarchy": "Graphics Animation Cal3D CoreModel",
          "module": "Graphics.Animation.Cal3D.CoreModel",
          "name": "setCoreMaterialId",
          "normalized": "CoreModel-\u003eMaterialThreadId-\u003eMaterialSetId-\u003eMaterialId-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Core Material Id",
          "signature": "CoreModel-\u003eMaterialThreadId-\u003eMaterialSetId-\u003eMaterialId-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-CoreModel.html#v:setCoreMaterialId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "Fallible",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Error.html#Fallible",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Error",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "Fallible",
          "package": "cal3d",
          "partial": "Fallible",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Error.html#t:Fallible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "IOFallible",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Error.html#IOFallible",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Error",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "IOFallible",
          "package": "cal3d",
          "partial": "IOFallible",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Error.html#t:IOFallible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "action\nbad value\nerror message\n",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "checkError",
          "package": "cal3d",
          "signature": "IO a-\u003e a-\u003e String-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Error.html#checkError",
          "type": "function"
        },
        "index": {
          "description": "action bad value error message",
          "hierarchy": "Graphics Animation Cal3D Error",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "checkError",
          "normalized": "IO a-\u003ea-\u003eString-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Error",
          "signature": "IO a-\u003ea-\u003eString-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Error.html#v:checkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "action\nbad value\nerror message\n",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "checkErrorValue",
          "package": "cal3d",
          "signature": "IO a-\u003e a-\u003e String-\u003e IO (Either String a)",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Error.html#checkErrorValue",
          "type": "function"
        },
        "index": {
          "description": "action bad value error message",
          "hierarchy": "Graphics Animation Cal3D Error",
          "module": "Graphics.Animation.Cal3D.Error",
          "name": "checkErrorValue",
          "normalized": "IO a-\u003ea-\u003eString-\u003eIO(Either String a)",
          "package": "cal3d",
          "partial": "Error Value",
          "signature": "IO a-\u003ea-\u003eString-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Error.html#v:checkErrorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "weight of this animation; weights should sum to 1.0\ndelay in seconds before the animation starts\n",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "blendCycle",
          "package": "cal3d",
          "signature": "Mixer-\u003e AnimationId-\u003e Float-\u003e Float-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Mixer.html#blendCycle",
          "type": "function"
        },
        "index": {
          "description": "weight of this animation weights should sum to delay in seconds before the animation starts",
          "hierarchy": "Graphics Animation Cal3D Mixer",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "blendCycle",
          "normalized": "Mixer-\u003eAnimationId-\u003eFloat-\u003eFloat-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Cycle",
          "signature": "Mixer-\u003eAnimationId-\u003eFloat-\u003eFloat-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Mixer.html#v:blendCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "delay in seconds before the animation ends\n",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "clearCycle",
          "package": "cal3d",
          "signature": "Mixer-\u003e AnimationId-\u003e Float-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Mixer.html#clearCycle",
          "type": "function"
        },
        "index": {
          "description": "delay in seconds before the animation ends",
          "hierarchy": "Graphics Animation Cal3D Mixer",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "clearCycle",
          "normalized": "Mixer-\u003eAnimationId-\u003eFloat-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Cycle",
          "signature": "Mixer-\u003eAnimationId-\u003eFloat-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Mixer.html#v:clearCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Destroy a Mixer.\n",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "deleteMixer",
          "package": "cal3d",
          "signature": "Mixer -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Mixer.html#deleteMixer",
          "type": "function"
        },
        "index": {
          "description": "Destroy Mixer",
          "hierarchy": "Graphics Animation Cal3D Mixer",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "deleteMixer",
          "normalized": "Mixer-\u003eIO()",
          "package": "cal3d",
          "partial": "Mixer",
          "signature": "Mixer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Mixer.html#v:deleteMixer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "delay in\ndelay out\nweight target\nautolock?\n",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "executeAction",
          "package": "cal3d",
          "signature": "Mixer-\u003e AnimationId-\u003e Float-\u003e Float-\u003e Float-\u003e Bool-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Mixer.html#executeAction",
          "type": "function"
        },
        "index": {
          "description": "delay in delay out weight target autolock",
          "hierarchy": "Graphics Animation Cal3D Mixer",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "executeAction",
          "normalized": "Mixer-\u003eAnimationId-\u003eFloat-\u003eFloat-\u003eFloat-\u003eBool-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Action",
          "signature": "Mixer-\u003eAnimationId-\u003eFloat-\u003eFloat-\u003eFloat-\u003eBool-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Mixer.html#v:executeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a Mixer.\n",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "newMixer",
          "package": "cal3d",
          "signature": "IO Mixer",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Mixer.html#newMixer",
          "type": "function"
        },
        "index": {
          "description": "Create Mixer",
          "hierarchy": "Graphics Animation Cal3D Mixer",
          "module": "Graphics.Animation.Cal3D.Mixer",
          "name": "newMixer",
          "package": "cal3d",
          "partial": "Mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Mixer.html#v:newMixer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attach a mesh to a Model.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "attachMesh",
          "package": "cal3d",
          "signature": "Model -\u003e MeshId -\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#attachMesh",
          "type": "function"
        },
        "index": {
          "description": "Attach mesh to Model",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "attachMesh",
          "normalized": "Model-\u003eMeshId-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Mesh",
          "signature": "Model-\u003eMeshId-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:attachMesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Destroy a Model.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "deleteModel",
          "package": "cal3d",
          "signature": "Model -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#deleteModel",
          "type": "function"
        },
        "index": {
          "description": "Destroy Model",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "deleteModel",
          "normalized": "Model-\u003eIO()",
          "package": "cal3d",
          "partial": "Model",
          "signature": "Model-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:deleteModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get a Mixer which can animate the Model.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "getMixer",
          "package": "cal3d",
          "signature": "Model -\u003e IO Mixer",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#getMixer",
          "type": "function"
        },
        "index": {
          "description": "Get Mixer which can animate the Model",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "getMixer",
          "normalized": "Model-\u003eIO Mixer",
          "package": "cal3d",
          "partial": "Mixer",
          "signature": "Model-\u003eIO Mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:getMixer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get a Renderer for the Model, which can provide information\n needed for a graphics API.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "getRenderer",
          "package": "cal3d",
          "signature": "Model -\u003e IO Renderer",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#getRenderer",
          "type": "function"
        },
        "index": {
          "description": "Get Renderer for the Model which can provide information needed for graphics API",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "getRenderer",
          "normalized": "Model-\u003eIO Renderer",
          "package": "cal3d",
          "partial": "Renderer",
          "signature": "Model-\u003eIO Renderer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:getRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a new Model instance from a CoreModel.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "newModel",
          "package": "cal3d",
          "signature": "CoreModel -\u003e IO Model",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#newModel",
          "type": "function"
        },
        "index": {
          "description": "Create new Model instance from CoreModel",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "newModel",
          "normalized": "CoreModel-\u003eIO Model",
          "package": "cal3d",
          "partial": "Model",
          "signature": "CoreModel-\u003eIO Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:newModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set the level of detail for a Model (between 0 and 1).\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "setLodLevel",
          "package": "cal3d",
          "signature": "Model -\u003e Float -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#setLodLevel",
          "type": "function"
        },
        "index": {
          "description": "Set the level of detail for Model between and",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "setLodLevel",
          "normalized": "Model-\u003eFloat-\u003eIO()",
          "package": "cal3d",
          "partial": "Lod Level",
          "signature": "Model-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:setLodLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply a material set to a Model.\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "setMaterialSet",
          "package": "cal3d",
          "signature": "Model -\u003e MaterialSetId -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#setMaterialSet",
          "type": "function"
        },
        "index": {
          "description": "Apply material set to Model",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "setMaterialSet",
          "normalized": "Model-\u003eMaterialSetId-\u003eIO()",
          "package": "cal3d",
          "partial": "Material Set",
          "signature": "Model-\u003eMaterialSetId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:setMaterialSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "elapsed time in seconds\n",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "update",
          "package": "cal3d",
          "signature": "Model-\u003e Float-\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Model.html#update",
          "type": "function"
        },
        "index": {
          "description": "elapsed time in seconds",
          "hierarchy": "Graphics Animation Cal3D Model",
          "module": "Graphics.Animation.Cal3D.Model",
          "name": "update",
          "normalized": "Model-\u003eFloat-\u003eIO()",
          "package": "cal3d",
          "signature": "Model-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Model.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Used to index faces.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "CalIndex",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#CalIndex",
          "type": "type"
        },
        "index": {
          "description": "Used to index faces",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "CalIndex",
          "package": "cal3d",
          "partial": "Cal Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#t:CalIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Destroy a Renderer.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "deleteRenderer",
          "package": "cal3d",
          "signature": "Renderer -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#deleteRenderer",
          "type": "function"
        },
        "index": {
          "description": "Destroy Renderer",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "deleteRenderer",
          "normalized": "Renderer-\u003eIO()",
          "package": "cal3d",
          "partial": "Renderer",
          "signature": "Renderer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:deleteRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The number of faces in the current (mesh, submesh).\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getFaceCount",
          "package": "cal3d",
          "signature": "Renderer -\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getFaceCount",
          "type": "function"
        },
        "index": {
          "description": "The number of faces in the current mesh submesh",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getFaceCount",
          "normalized": "Renderer-\u003eIO Int",
          "package": "cal3d",
          "partial": "Face Count",
          "signature": "Renderer-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getFaceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "buffer\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getFaces",
          "package": "cal3d",
          "signature": "Renderer-\u003e Ptr CalIndex-\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getFaces",
          "type": "function"
        },
        "index": {
          "description": "buffer",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getFaces",
          "normalized": "Renderer-\u003ePtr CalIndex-\u003eIO Int",
          "package": "cal3d",
          "partial": "Faces",
          "signature": "Renderer-\u003ePtr CalIndex-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getFaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The number of meshes in the Renderer's \u003ctt\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getMeshCount",
          "package": "cal3d",
          "signature": "Renderer -\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getMeshCount",
          "type": "function"
        },
        "index": {
          "description": "The number of meshes in the Renderer Model",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getMeshCount",
          "normalized": "Renderer-\u003eIO Int",
          "package": "cal3d",
          "partial": "Mesh Count",
          "signature": "Renderer-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getMeshCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Fills a buffer with the normal data for the current (mesh, submesh).\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getNormals",
          "package": "cal3d",
          "signature": "Renderer -\u003e Ptr Float -\u003e Int -\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getNormals",
          "type": "function"
        },
        "index": {
          "description": "Fills buffer with the normal data for the current mesh submesh",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getNormals",
          "normalized": "Renderer-\u003ePtr Float-\u003eInt-\u003eIO Int",
          "package": "cal3d",
          "partial": "Normals",
          "signature": "Renderer-\u003ePtr Float-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getNormals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The shininess, which affects the extent of speculr effects.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getShininess",
          "package": "cal3d",
          "signature": "Renderer -\u003e IO Float",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getShininess",
          "type": "function"
        },
        "index": {
          "description": "The shininess which affects the extent of speculr effects",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getShininess",
          "normalized": "Renderer-\u003eIO Float",
          "package": "cal3d",
          "partial": "Shininess",
          "signature": "Renderer-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getShininess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "mesh ID\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getSubmeshCount",
          "package": "cal3d",
          "signature": "Renderer-\u003e Int-\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getSubmeshCount",
          "type": "function"
        },
        "index": {
          "description": "mesh ID",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getSubmeshCount",
          "normalized": "Renderer-\u003eInt-\u003eIO Int",
          "package": "cal3d",
          "partial": "Submesh Count",
          "signature": "Renderer-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getSubmeshCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The number of vertices, also the number of normals,\n  in the current (mesh, submesh).\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getVertexCount",
          "package": "cal3d",
          "signature": "Renderer -\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getVertexCount",
          "type": "function"
        },
        "index": {
          "description": "The number of vertices also the number of normals in the current mesh submesh",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getVertexCount",
          "normalized": "Renderer-\u003eIO Int",
          "package": "cal3d",
          "partial": "Vertex Count",
          "signature": "Renderer-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getVertexCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "buffer\nstride\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getVertices",
          "package": "cal3d",
          "signature": "Renderer-\u003e Ptr Float-\u003e Int-\u003e IO Int",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#getVertices",
          "type": "function"
        },
        "index": {
          "description": "buffer stride",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "getVertices",
          "normalized": "Renderer-\u003ePtr Float-\u003eInt-\u003eIO Int",
          "package": "cal3d",
          "partial": "Vertices",
          "signature": "Renderer-\u003ePtr Float-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:getVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a Renderer.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "newRenderer",
          "package": "cal3d",
          "signature": "Model -\u003e IO Renderer",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#newRenderer",
          "type": "function"
        },
        "index": {
          "description": "Create Renderer",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "newRenderer",
          "normalized": "Model-\u003eIO Renderer",
          "package": "cal3d",
          "partial": "Renderer",
          "signature": "Model-\u003eIO Renderer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:newRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "rendering action\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "renderAnimation",
          "package": "cal3d",
          "signature": "Renderer-\u003e IO ()-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#renderAnimation",
          "type": "function"
        },
        "index": {
          "description": "rendering action",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "renderAnimation",
          "normalized": "Renderer-\u003eIO()-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Animation",
          "signature": "Renderer-\u003eIO()-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:renderAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "mesh ID\nsubmesh ID\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "selectMeshSubmesh",
          "package": "cal3d",
          "signature": "Renderer-\u003e Int-\u003e Int-\u003e IO (Either String ())",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#selectMeshSubmesh",
          "type": "function"
        },
        "index": {
          "description": "mesh ID submesh ID",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "selectMeshSubmesh",
          "normalized": "Renderer-\u003eInt-\u003eInt-\u003eIO(Either String())",
          "package": "cal3d",
          "partial": "Mesh Submesh",
          "signature": "Renderer-\u003eInt-\u003eInt-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:selectMeshSubmesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "action\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withAmbientColorPtr",
          "package": "cal3d",
          "signature": "Ptr Word8 -\u003e IO c-\u003e Renderer-\u003e IO c",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#withAmbientColorPtr",
          "type": "function"
        },
        "index": {
          "description": "action",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withAmbientColorPtr",
          "normalized": "Ptr Word-\u003eIO a-\u003eRenderer-\u003eIO a",
          "package": "cal3d",
          "partial": "Ambient Color Ptr",
          "signature": "Ptr Word-\u003eIO c-\u003eRenderer-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:withAmbientColorPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Diffuse color, like \u003ctt\u003e\u003ca\u003ewithAmbientColorPtr\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withDiffuseColorPtr",
          "package": "cal3d",
          "signature": "(Ptr Word8 -\u003e IO c) -\u003e Renderer -\u003e IO c",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#withDiffuseColorPtr",
          "type": "function"
        },
        "index": {
          "description": "Diffuse color like withAmbientColorPtr",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withDiffuseColorPtr",
          "normalized": "(Ptr Word-\u003eIO a)-\u003eRenderer-\u003eIO a",
          "package": "cal3d",
          "partial": "Diffuse Color Ptr",
          "signature": "(Ptr Word-\u003eIO c)-\u003eRenderer-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:withDiffuseColorPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Specular color, like \u003ctt\u003e\u003ca\u003ewithAmbientColorPtr\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withSpecularColorPtr",
          "package": "cal3d",
          "signature": "(Ptr Word8 -\u003e IO c) -\u003e Renderer -\u003e IO c",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Renderer.html#withSpecularColorPtr",
          "type": "function"
        },
        "index": {
          "description": "Specular color like withAmbientColorPtr",
          "hierarchy": "Graphics Animation Cal3D Renderer",
          "module": "Graphics.Animation.Cal3D.Renderer",
          "name": "withSpecularColorPtr",
          "normalized": "(Ptr Word-\u003eIO a)-\u003eRenderer-\u003eIO a",
          "package": "cal3d",
          "partial": "Specular Color Ptr",
          "signature": "(Ptr Word-\u003eIO c)-\u003eRenderer-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Renderer.html#v:withSpecularColorPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "AnimationId",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#AnimationId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "AnimationId",
          "package": "cal3d",
          "partial": "Animation Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:AnimationId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "CLoader",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#CLoader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "CLoader",
          "package": "cal3d",
          "partial": "CLoader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:CLoader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "CoreModel",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#CoreModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "CoreModel",
          "package": "cal3d",
          "partial": "Core Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:CoreModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "LoadResult is (Left error_message) or (Right thing_loaded_from_file)  \n",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "LoadResult",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#LoadResult",
          "type": "type"
        },
        "index": {
          "description": "LoadResult is Left error message or Right thing loaded from file",
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "LoadResult",
          "package": "cal3d",
          "partial": "Load Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:LoadResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A function that loads something from a file.\n",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Loader",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#Loader",
          "type": "type"
        },
        "index": {
          "description": "function that loads something from file",
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Loader",
          "package": "cal3d",
          "partial": "Loader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:Loader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialId",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#MaterialId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialId",
          "package": "cal3d",
          "partial": "Material Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:MaterialId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialSetId",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#MaterialSetId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialSetId",
          "package": "cal3d",
          "partial": "Material Set Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:MaterialSetId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialThreadId",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#MaterialThreadId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MaterialThreadId",
          "package": "cal3d",
          "partial": "Material Thread Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:MaterialThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MeshId",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#MeshId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "MeshId",
          "package": "cal3d",
          "partial": "Mesh Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:MeshId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Mixer",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#Mixer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Mixer",
          "package": "cal3d",
          "partial": "Mixer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:Mixer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Model",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#Model",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Model",
          "package": "cal3d",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Renderer",
          "package": "cal3d",
          "source": "http://hackage.haskell.org/package/cal3d/docs/src/Graphics-Animation-Cal3D-Types.html#Renderer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Animation Cal3D Types",
          "module": "Graphics.Animation.Cal3D.Types",
          "name": "Renderer",
          "package": "cal3d",
          "partial": "Renderer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cal3d/docs/Graphics-Animation-Cal3D-Types.html#t:Renderer"
      }
    }
  ]
]