[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnap-agnostic low-level CRUD operations. No model definitions are used\non this level. Instead, objects must be \n\u003c/p\u003e\u003cp\u003eThis module may be used for batch uploading of database data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html",
        "fct-type": "module",
        "title": "CRUD"
      },
      "index": {
        "description": "Snap-agnostic low-level CRUD operations No model definitions are used on this level Instead objects must be This module may be used for batch uploading of database data",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "CRUD",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "CRUD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#t:InstanceId",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#InstanceId",
        "fct-type": "type",
        "title": "InstanceId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "InstanceId",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Instance Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:collate",
      "description": {
        "fct-descr": "\u003cp\u003eStrip value of punctuation, spaces, convert all to lowercase.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "FieldValue -\u003e FieldValue",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#collate",
        "fct-type": "function",
        "title": "collate"
      },
      "index": {
        "description": "Strip value of punctuation spaces convert all to lowercase",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "collate",
        "normalized": "FieldValue-\u003eFieldValue",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "FieldValue-\u003eFieldValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new instance in Redis and indices for it.\n\u003c/p\u003e\u003cp\u003eBump model id counter and update timeline, return new instance id.\n\u003c/p\u003e\u003cp\u003eTODO: Support pubsub from here\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName-\u003e Commit-\u003e [FieldIndex]-\u003e Redis (Either Reply InstanceId)",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "Create new instance in Redis and indices for it Bump model id counter and update timeline return new instance id TODO Support pubsub from here",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "create",
        "normalized": "ModelName-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply InstanceId)",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "ModelName-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply InstanceId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove existing instance in Redis, cleaning up old indices.\n\u003c/p\u003e\u003cp\u003eDoes not check if instance exists.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName -\u003e InstanceId -\u003e [FieldIndex] -\u003e Redis (Either Reply ())",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove existing instance in Redis cleaning up old indices Does not check if instance exists",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "delete",
        "normalized": "ModelName-\u003eInstanceId-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "ModelName-\u003eInstanceId-\u003e[FieldIndex]-\u003eRedis(Either Reply())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:instanceKey",
      "description": {
        "fct-descr": "\u003cp\u003eBuild Redis key given model name and instance id\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName -\u003e InstanceId -\u003e ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#instanceKey",
        "fct-type": "function",
        "title": "instanceKey"
      },
      "index": {
        "description": "Build Redis key given model name and instance id",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "instanceKey",
        "normalized": "ModelName-\u003eInstanceId-\u003eByteString",
        "package": "snaplet-redson",
        "partial": "Key",
        "signature": "ModelName-\u003eInstanceId-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:modelIndex",
      "description": {
        "fct-descr": "\u003cp\u003eBuild Redis key for field index of model.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName-\u003e ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "modelIndex"
      },
      "index": {
        "description": "Build Redis key for field index of model",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "modelIndex",
        "normalized": "ModelName-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "snaplet-redson",
        "partial": "Index",
        "signature": "ModelName-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:modelTimeline",
      "description": {
        "fct-descr": "\u003cp\u003eGet Redis key which stores timeline for model\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName -\u003e ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#modelTimeline",
        "fct-type": "function",
        "title": "modelTimeline"
      },
      "index": {
        "description": "Get Redis key which stores timeline for model",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "modelTimeline",
        "normalized": "ModelName-\u003eByteString",
        "package": "snaplet-redson",
        "partial": "Timeline",
        "signature": "ModelName-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:onlyFields",
      "description": {
        "fct-descr": "\u003cp\u003eExtract values of named fields from commit.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "Commit -\u003e [FieldName] -\u003e [Maybe FieldValue]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#onlyFields",
        "fct-type": "function",
        "title": "onlyFields"
      },
      "index": {
        "description": "Extract values of named fields from commit",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "onlyFields",
        "normalized": "Commit-\u003e[FieldName]-\u003e[Maybe FieldValue]",
        "package": "snaplet-redson",
        "partial": "Fields",
        "signature": "Commit-\u003e[FieldName]-\u003e[Maybe FieldValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eModify existing instance in Redis, updating indices\n\u003c/p\u003e\u003cp\u003eTODO: Handle non-existing instance as error here?\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName -\u003e InstanceId -\u003e Commit -\u003e [FieldIndex] -\u003e Redis (Either Reply ())",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Modify existing instance in Redis updating indices TODO Handle non-existing instance as error here",
        "hierarchy": "Snap Snaplet Redson Snapless CRUD",
        "module": "Snap.Snaplet.Redson.Snapless.CRUD",
        "name": "update",
        "normalized": "ModelName-\u003eInstanceId-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "ModelName-\u003eInstanceId-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel definitions loader.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "fct-package": "snaplet-redson",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html",
        "fct-type": "module",
        "title": "Loader"
      },
      "index": {
        "description": "Model definitions loader",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "name": "Loader",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Loader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadGroups",
      "description": {
        "fct-descr": "\u003cp\u003eLoad groups from definitions file.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "fct-package": "snaplet-redson",
        "fct-signature": "FilePath -\u003e IO (Maybe Groups)",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#loadGroups",
        "fct-type": "function",
        "title": "loadGroups"
      },
      "index": {
        "description": "Load groups from definitions file",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "name": "loadGroups",
        "normalized": "FilePath-\u003eIO(Maybe Groups)",
        "package": "snaplet-redson",
        "partial": "Groups",
        "signature": "FilePath-\u003eIO(Maybe Groups)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadModel",
      "description": {
        "fct-descr": "\u003cp\u003eLoad model from specified location, performing group splicing,\n applications and filling index cache.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "fct-package": "snaplet-redson",
        "fct-signature": "FilePath-\u003e Groups-\u003e IO (Maybe Model)",
        "fct-type": "function",
        "title": "loadModel"
      },
      "index": {
        "description": "Load model from specified location performing group splicing applications and filling index cache",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "name": "loadModel",
        "normalized": "FilePath-\u003eGroups-\u003eIO(Maybe Model)",
        "package": "snaplet-redson",
        "partial": "Model",
        "signature": "FilePath-\u003eGroups-\u003eIO(Maybe Model)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadModels",
      "description": {
        "fct-descr": "\u003cp\u003eRead all models from directory to a map.\n\u003c/p\u003e\u003cp\u003eTODO: Perhaps rely on special directory file which explicitly lists\n all models.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "fct-package": "snaplet-redson",
        "fct-signature": "FilePath-\u003e FilePath-\u003e IO (Map ModelName Model)",
        "fct-type": "function",
        "title": "loadModels"
      },
      "index": {
        "description": "Read all models from directory to map TODO Perhaps rely on special directory file which explicitly lists all models",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
        "name": "loadModels",
        "normalized": "FilePath-\u003eFilePath-\u003eIO(Map ModelName Model)",
        "package": "snaplet-redson",
        "partial": "Models",
        "signature": "FilePath-\u003eFilePath-\u003eIO(Map ModelName Model)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel definition parser, served model routines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html",
        "fct-type": "module",
        "title": "Metamodel"
      },
      "index": {
        "description": "Model definition parser served model routines",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Metamodel",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Metamodel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Application",
      "description": {
        "fct-descr": "\u003cp\u003eA list of properties to be applied to named fields.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "data",
        "title": "Application"
      },
      "index": {
        "description": "list of properties to be applied to named fields",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Application",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Commit",
      "description": {
        "fct-descr": "\u003cp\u003eList of field key-value pairs.\n\u003c/p\u003e\u003cp\u003eSuitable for using with \u003ccode\u003e\u003ca\u003ehmset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Commit",
        "fct-type": "type",
        "title": "Commit"
      },
      "index": {
        "description": "List of field key-value pairs Suitable for using with hmset",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Commit",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eForm field object.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Form field object",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Field",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldIndex",
      "description": {
        "fct-descr": "\u003cp\u003eName of indexed field and collation flag.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldIndex",
        "fct-type": "type",
        "title": "FieldIndex"
      },
      "index": {
        "description": "Name of indexed field and collation flag",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "FieldIndex",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldMeta",
      "description": {
        "fct-descr": "\u003cp\u003eMap of field annotations which are transparently handled by\n server without any logic.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldMeta",
        "fct-type": "type",
        "title": "FieldMeta"
      },
      "index": {
        "description": "Map of field annotations which are transparently handled by server without any logic",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "FieldMeta",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldName",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldName",
        "fct-type": "type",
        "title": "FieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "FieldName",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldTargets",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
        "fct-type": "data",
        "title": "FieldTargets"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "FieldTargets",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Targets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldValue",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldValue",
        "fct-type": "type",
        "title": "FieldValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "FieldValue",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Groups",
      "description": {
        "fct-descr": "\u003cp\u003eA named group of fields.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Groups",
        "fct-type": "type",
        "title": "Groups"
      },
      "index": {
        "description": "named group of fields",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Groups",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eModel describes fields and permissions.\n\u003c/p\u003e\u003cp\u003eModels are built from JSON definitions (using FromJSON instance for\n Model) with further group splicing (\u003ccode\u003e\u003ca\u003espliceGroups\u003c/a\u003e\u003c/code\u003e), applications\n (\u003ccode\u003e\u003ca\u003edoApplications\u003c/a\u003e\u003c/code\u003e) and index caching (\u003ccode\u003e\u003ca\u003ecacheIndices\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "data",
        "title": "Model"
      },
      "index": {
        "description": "Model describes fields and permissions Models are built from JSON definitions using FromJSON instance for Model with further group splicing spliceGroups applications doApplications and index caching cacheIndices",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Model",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:ModelName",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#ModelName",
        "fct-type": "type",
        "title": "ModelName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "ModelName",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Model Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Permissions",
      "description": {
        "fct-descr": "\u003cp\u003eField permissions property.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
        "fct-type": "data",
        "title": "Permissions"
      },
      "index": {
        "description": "Field permissions property",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Permissions",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Permissions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:AllFields",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "AllFields",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
        "fct-type": "function",
        "title": "AllFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "AllFields",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "All Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Application",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Application",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "function",
        "title": "Application"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Application",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Everyone",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Everyone",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
        "fct-type": "function",
        "title": "Everyone"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Everyone",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Everyone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Field",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Field",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Field",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Fields",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Fields [FieldName]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
        "fct-type": "function",
        "title": "Fields"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Fields",
        "normalized": "Fields[FieldName]",
        "package": "snaplet-redson",
        "partial": "Fields",
        "signature": "Fields[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Model",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Model",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Model",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Nobody",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Nobody",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
        "fct-type": "function",
        "title": "Nobody"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Nobody",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Nobody",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:NoneFields",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "NoneFields",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
        "fct-type": "function",
        "title": "NoneFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "NoneFields",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "None Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Roles",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Roles [ByteString]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
        "fct-type": "function",
        "title": "Roles"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "Roles",
        "normalized": "Roles[ByteString]",
        "package": "snaplet-redson",
        "partial": "Roles",
        "signature": "Roles[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_apRead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Maybe Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "function",
        "title": "_apRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_apRead",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_apWrite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Maybe Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "function",
        "title": "_apWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_apWrite",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canCreateM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "_canCreateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canCreateM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canDeleteM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "_canDeleteM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canDeleteM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canRead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "_canRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canRead",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canReadM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "_canReadM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canReadM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canUpdateM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "_canUpdateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canUpdateM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canWrite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "_canWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "_canWrite",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apMeta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Maybe FieldMeta",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "function",
        "title": "apMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "apMeta",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apRead",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Application (Maybe Permissions)",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#apRead",
        "fct-type": "function",
        "title": "apRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "apRead",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apWrite",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Application (Maybe Permissions)",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#apWrite",
        "fct-type": "function",
        "title": "apWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "apWrite",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:applications",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "[Application]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "applications"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "applications",
        "normalized": "[Application]",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "[Application]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:cacheIndices",
      "description": {
        "fct-descr": "\u003cp\u003eSet indices field of model to list of \u003ccode\u003e\u003ca\u003eFieldIndex\u003c/a\u003e\u003c/code\u003ees\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Model -\u003e Model",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#cacheIndices",
        "fct-type": "function",
        "title": "cacheIndices"
      },
      "index": {
        "description": "Set indices field of model to list of FieldIndex es",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "cacheIndices",
        "normalized": "Model-\u003eModel",
        "package": "snaplet-redson",
        "partial": "Indices",
        "signature": "Model-\u003eModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canCreateM",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Model Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canCreateM",
        "fct-type": "function",
        "title": "canCreateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canCreateM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canDeleteM",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Model Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canDeleteM",
        "fct-type": "function",
        "title": "canDeleteM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canDeleteM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canRead",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Field Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canRead",
        "fct-type": "function",
        "title": "canRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canRead",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canReadM",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Model Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canReadM",
        "fct-type": "function",
        "title": "canReadM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canReadM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canUpdateM",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Model Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canUpdateM",
        "fct-type": "function",
        "title": "canUpdateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canUpdateM",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canWrite",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens Field Permissions",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canWrite",
        "fct-type": "function",
        "title": "canWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "canWrite",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:defaultFieldType",
      "description": {
        "fct-descr": "\u003cp\u003eUsed when field type is not specified in model description.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#defaultFieldType",
        "fct-type": "function",
        "title": "defaultFieldType"
      },
      "index": {
        "description": "Used when field type is not specified in model description",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "defaultFieldType",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:doApplications",
      "description": {
        "fct-descr": "\u003cp\u003ePerform all applications in model.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Model -\u003e Model",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#doApplications",
        "fct-type": "function",
        "title": "doApplications"
      },
      "index": {
        "description": "Perform all applications in model",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "doApplications",
        "normalized": "Model-\u003eModel",
        "package": "snaplet-redson",
        "partial": "Applications",
        "signature": "Model-\u003eModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:fieldType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "fieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "fieldType",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:fields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "[Field]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "fields"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "fields",
        "normalized": "[Field]",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:groupFieldName",
      "description": {
        "fct-descr": "\u003cp\u003eBuild new name \u003ccode\u003ef_gK\u003c/code\u003e for every field of group \u003ccode\u003eg\u003c/code\u003e to which field\n \u003ccode\u003ef\u003c/code\u003e is spliced into.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "FieldName-\u003e FieldName-\u003e FieldName",
        "fct-type": "function",
        "title": "groupFieldName"
      },
      "index": {
        "description": "Build new name gK for every field of group to which field is spliced into",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "groupFieldName",
        "normalized": "FieldName-\u003eFieldName-\u003eFieldName",
        "package": "snaplet-redson",
        "partial": "Field Name",
        "signature": "FieldName-\u003eFieldName-\u003eFieldName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:groupName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "groupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "groupName",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:index",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Bool",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "index",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:indexCollate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Bool",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "indexCollate"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "indexCollate",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Collate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003eCached list of index fields.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "[FieldIndex]",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "Cached list of index fields",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "indices",
        "normalized": "[FieldIndex]",
        "package": "snaplet-redson",
        "partial": "",
        "signature": "[FieldIndex]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:meta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Maybe FieldMeta",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "meta"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "meta",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:modelName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "ModelName",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "modelName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "modelName",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "FieldName",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "name",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:spliceGroups",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all model fields having \u003ccode\u003e\u003ca\u003egroupName\u003c/a\u003e\u003c/code\u003e annotation with\n actual group fields.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "Groups -\u003e Model -\u003e Model",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#spliceGroups",
        "fct-type": "function",
        "title": "spliceGroups"
      },
      "index": {
        "description": "Replace all model fields having groupName annotation with actual group fields",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "spliceGroups",
        "normalized": "Groups-\u003eModel-\u003eModel",
        "package": "snaplet-redson",
        "partial": "Groups",
        "signature": "Groups-\u003eModel-\u003eModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:targets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "FieldTargets",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
        "fct-type": "function",
        "title": "targets"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "targets",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:title",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "fct-package": "snaplet-redson",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
        "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
        "name": "title",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous functions for Snap.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Miscellaneous functions for Snap",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "Util",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#t:Error",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "Error",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:Error",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#Error",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "Error",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:code",
      "description": {
        "fct-descr": "\u003cp\u003eError response code\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Int",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#Error",
        "fct-type": "function",
        "title": "code"
      },
      "index": {
        "description": "Error response code",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "code",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:forbidden",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#forbidden",
        "fct-type": "function",
        "title": "forbidden"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "forbidden",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:fromIntParam",
      "description": {
        "fct-descr": "\u003cp\u003eGet integer parameter value from Request or return default value.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "ByteString -\u003e Int -\u003e m Int",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#fromIntParam",
        "fct-type": "function",
        "title": "fromIntParam"
      },
      "index": {
        "description": "Get integer parameter value from Request or return default value",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "fromIntParam",
        "normalized": "ByteString-\u003eInt-\u003ea Int",
        "package": "snaplet-redson",
        "partial": "Int Param",
        "signature": "ByteString-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:fromParam",
      "description": {
        "fct-descr": "\u003cp\u003eGet parameter value from Request or return empty string\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#fromParam",
        "fct-type": "function",
        "title": "fromParam"
      },
      "index": {
        "description": "Get parameter value from Request or return empty string",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "fromParam",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "snaplet-redson",
        "partial": "Param",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:handleError",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit MonadSnap flow with error response\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#handleError",
        "fct-type": "function",
        "title": "handleError"
      },
      "index": {
        "description": "Short-circuit MonadSnap flow with error response",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "handleError",
        "normalized": "Error-\u003ea()",
        "package": "snaplet-redson",
        "partial": "Error",
        "signature": "Error-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:notFound",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "notFound",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:serverError",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#serverError",
        "fct-type": "function",
        "title": "serverError"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "serverError",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:unauthorized",
      "description": {
        "fct-module": "Snap.Snaplet.Redson.Util",
        "fct-package": "snaplet-redson",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Snaplet-Redson-Util.html#unauthorized",
        "fct-type": "function",
        "title": "unauthorized"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Redson Util",
        "module": "Snap.Snaplet.Redson.Util",
        "name": "unauthorized",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRUD for JSON data with Redis storage.\n\u003c/p\u003e\u003cp\u003eCan be used as Backbone.sync backend.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Redson",
        "fct-package": "snaplet-redson",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Redson.html",
        "fct-type": "module",
        "title": "Redson"
      },
      "index": {
        "description": "CRUD for JSON data with Redis storage Can be used as Backbone.sync backend",
        "hierarchy": "Snap Snaplet Redson",
        "module": "Snap.Snaplet.Redson",
        "name": "Redson",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Redson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#t:Redson",
      "description": {
        "fct-descr": "\u003cp\u003eRedson snaplet state type.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Redson",
        "fct-package": "snaplet-redson",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Redson.html#Redson",
        "fct-type": "data",
        "title": "Redson"
      },
      "index": {
        "description": "Redson snaplet state type",
        "hierarchy": "Snap Snaplet Redson",
        "module": "Snap.Snaplet.Redson",
        "name": "Redson",
        "normalized": "",
        "package": "snaplet-redson",
        "partial": "Redson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#v:redsonInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize Redson. AuthManager from parent snaplet is required.\n\u003c/p\u003e\u003cp\u003eConnect to Redis, read configuration and set routes.\n\u003c/p\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redson\" Nothing $\n           do\n             r \u003c- nestSnaplet \"_\" redson $ redsonInit auth\n             s \u003c- nestSnaplet \"session\" session $ initCookieSessionManager\n                                                  sesKey \"_session\" sessionTimeout\n             a \u003c- nestSnaplet \"auth\" auth $ initJsonFileAuthManager defAuthSettings\n             return $ MyApp r s a\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Redson",
        "fct-package": "snaplet-redson",
        "fct-signature": "Lens b (Snaplet (AuthManager b)) -\u003e SnapletInit b (Redson b)",
        "fct-source": "src/Snap-Snaplet-Redson.html#redsonInit",
        "fct-type": "function",
        "title": "redsonInit"
      },
      "index": {
        "description": "Initialize Redson AuthManager from parent snaplet is required Connect to Redis read configuration and set routes appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redson Nothing do nestSnaplet redson redsonInit auth nestSnaplet session session initCookieSessionManager sesKey session sessionTimeout nestSnaplet auth auth initJsonFileAuthManager defAuthSettings return MyApp",
        "hierarchy": "Snap Snaplet Redson",
        "module": "Snap.Snaplet.Redson",
        "name": "redsonInit",
        "normalized": "Lens a(Snaplet(AuthManager a))-\u003eSnapletInit a(Redson a)",
        "package": "snaplet-redson",
        "partial": "Init",
        "signature": "Lens b(Snaplet(AuthManager b))-\u003eSnapletInit b(Redson b)"
      }
    }
  }
]