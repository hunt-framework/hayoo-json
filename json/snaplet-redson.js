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
        "word": "snaplet-redson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnap-agnostic low-level CRUD operations. No model definitions are used\non this level. Instead, objects must be \n\u003c/p\u003e\u003cp\u003eThis module may be used for batch uploading of database data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "CRUD",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html",
          "type": "module"
        },
        "index": {
          "description": "Snap-agnostic low-level CRUD operations No model definitions are used on this level Instead objects must be This module may be used for batch uploading of database data",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "CRUD",
          "package": "snaplet-redson",
          "partial": "CRUD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "InstanceId",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#InstanceId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "InstanceId",
          "package": "snaplet-redson",
          "partial": "Instance Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#t:InstanceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip value of punctuation, spaces, convert all to lowercase.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "collate",
          "package": "snaplet-redson",
          "signature": "FieldValue -\u003e FieldValue",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#collate",
          "type": "function"
        },
        "index": {
          "description": "Strip value of punctuation spaces convert all to lowercase",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "collate",
          "normalized": "FieldValue-\u003eFieldValue",
          "package": "snaplet-redson",
          "signature": "FieldValue-\u003eFieldValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:collate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new instance in Redis and indices for it.\n\u003c/p\u003e\u003cp\u003eBump model id counter and update timeline, return new instance id.\n\u003c/p\u003e\u003cp\u003eTODO: Support pubsub from here\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "create",
          "package": "snaplet-redson",
          "signature": "ModelName-\u003e Commit-\u003e [FieldIndex]-\u003e Redis (Either Reply InstanceId)",
          "type": "function"
        },
        "index": {
          "description": "Create new instance in Redis and indices for it Bump model id counter and update timeline return new instance id TODO Support pubsub from here",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "create",
          "normalized": "ModelName-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply InstanceId)",
          "package": "snaplet-redson",
          "signature": "ModelName-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply InstanceId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove existing instance in Redis, cleaning up old indices.\n\u003c/p\u003e\u003cp\u003eDoes not check if instance exists.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "delete",
          "package": "snaplet-redson",
          "signature": "ModelName -\u003e InstanceId -\u003e [FieldIndex] -\u003e Redis (Either Reply ())",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove existing instance in Redis cleaning up old indices Does not check if instance exists",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "delete",
          "normalized": "ModelName-\u003eInstanceId-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
          "package": "snaplet-redson",
          "signature": "ModelName-\u003eInstanceId-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild Redis key given model name and instance id\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "instanceKey",
          "package": "snaplet-redson",
          "signature": "ModelName -\u003e InstanceId -\u003e ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#instanceKey",
          "type": "function"
        },
        "index": {
          "description": "Build Redis key given model name and instance id",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "instanceKey",
          "normalized": "ModelName-\u003eInstanceId-\u003eByteString",
          "package": "snaplet-redson",
          "partial": "Key",
          "signature": "ModelName-\u003eInstanceId-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:instanceKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild Redis key for field index of model.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "modelIndex",
          "package": "snaplet-redson",
          "signature": "ModelName-\u003e ByteString-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Build Redis key for field index of model",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "modelIndex",
          "normalized": "ModelName-\u003eByteString-\u003eByteString-\u003eByteString",
          "package": "snaplet-redson",
          "partial": "Index",
          "signature": "ModelName-\u003eByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:modelIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Redis key which stores timeline for model\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "modelTimeline",
          "package": "snaplet-redson",
          "signature": "ModelName -\u003e ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#modelTimeline",
          "type": "function"
        },
        "index": {
          "description": "Get Redis key which stores timeline for model",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "modelTimeline",
          "normalized": "ModelName-\u003eByteString",
          "package": "snaplet-redson",
          "partial": "Timeline",
          "signature": "ModelName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:modelTimeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract values of named fields from commit.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "onlyFields",
          "package": "snaplet-redson",
          "signature": "Commit -\u003e [FieldName] -\u003e [Maybe FieldValue]",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#onlyFields",
          "type": "function"
        },
        "index": {
          "description": "Extract values of named fields from commit",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "onlyFields",
          "normalized": "Commit-\u003e[FieldName]-\u003e[Maybe FieldValue]",
          "package": "snaplet-redson",
          "partial": "Fields",
          "signature": "Commit-\u003e[FieldName]-\u003e[Maybe FieldValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:onlyFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify existing instance in Redis, updating indices\n\u003c/p\u003e\u003cp\u003eTODO: Handle non-existing instance as error here?\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "update",
          "package": "snaplet-redson",
          "signature": "ModelName -\u003e InstanceId -\u003e Commit -\u003e [FieldIndex] -\u003e Redis (Either Reply ())",
          "source": "src/Snap-Snaplet-Redson-Snapless-CRUD.html#update",
          "type": "function"
        },
        "index": {
          "description": "Modify existing instance in Redis updating indices TODO Handle non-existing instance as error here",
          "hierarchy": "Snap Snaplet Redson Snapless CRUD",
          "module": "Snap.Snaplet.Redson.Snapless.CRUD",
          "name": "update",
          "normalized": "ModelName-\u003eInstanceId-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
          "package": "snaplet-redson",
          "signature": "ModelName-\u003eInstanceId-\u003eCommit-\u003e[FieldIndex]-\u003eRedis(Either Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-CRUD.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel definitions loader.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "Loader",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html",
          "type": "module"
        },
        "index": {
          "description": "Model definitions loader",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "Loader",
          "package": "snaplet-redson",
          "partial": "Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad groups from definitions file.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadGroups",
          "package": "snaplet-redson",
          "signature": "FilePath -\u003e IO (Maybe Groups)",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#loadGroups",
          "type": "function"
        },
        "index": {
          "description": "Load groups from definitions file",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadGroups",
          "normalized": "FilePath-\u003eIO(Maybe Groups)",
          "package": "snaplet-redson",
          "partial": "Groups",
          "signature": "FilePath-\u003eIO(Maybe Groups)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad model from specified location, performing group splicing,\n applications and filling index cache.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadModel",
          "package": "snaplet-redson",
          "signature": "FilePath-\u003e Groups-\u003e IO (Maybe Model)",
          "type": "function"
        },
        "index": {
          "description": "Load model from specified location performing group splicing applications and filling index cache",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadModel",
          "normalized": "FilePath-\u003eGroups-\u003eIO(Maybe Model)",
          "package": "snaplet-redson",
          "partial": "Model",
          "signature": "FilePath-\u003eGroups-\u003eIO(Maybe Model)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all models from directory to a map.\n\u003c/p\u003e\u003cp\u003eTODO: Perhaps rely on special directory file which explicitly lists\n all models.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadModels",
          "package": "snaplet-redson",
          "signature": "FilePath-\u003e FilePath-\u003e IO (Map ModelName Model)",
          "type": "function"
        },
        "index": {
          "description": "Read all models from directory to map TODO Perhaps rely on special directory file which explicitly lists all models",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel Loader",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel.Loader",
          "name": "loadModels",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(Map ModelName Model)",
          "package": "snaplet-redson",
          "partial": "Models",
          "signature": "FilePath-\u003eFilePath-\u003eIO(Map ModelName Model)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel-Loader.html#v:loadModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel definition parser, served model routines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Metamodel",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html",
          "type": "module"
        },
        "index": {
          "description": "Model definition parser served model routines",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Metamodel",
          "package": "snaplet-redson",
          "partial": "Metamodel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of properties to be applied to named fields.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Application",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "data"
        },
        "index": {
          "description": "list of properties to be applied to named fields",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Application",
          "package": "snaplet-redson",
          "partial": "Application",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of field key-value pairs.\n\u003c/p\u003e\u003cp\u003eSuitable for using with \u003ccode\u003e\u003ca\u003ehmset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Commit",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Commit",
          "type": "type"
        },
        "index": {
          "description": "List of field key-value pairs Suitable for using with hmset",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Commit",
          "package": "snaplet-redson",
          "partial": "Commit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm field object.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Field",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Form field object",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Field",
          "package": "snaplet-redson",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of indexed field and collation flag.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldIndex",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldIndex",
          "type": "type"
        },
        "index": {
          "description": "Name of indexed field and collation flag",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldIndex",
          "package": "snaplet-redson",
          "partial": "Field Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of field annotations which are transparently handled by\n server without any logic.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldMeta",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldMeta",
          "type": "type"
        },
        "index": {
          "description": "Map of field annotations which are transparently handled by server without any logic",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldMeta",
          "package": "snaplet-redson",
          "partial": "Field Meta",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldName",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldName",
          "package": "snaplet-redson",
          "partial": "Field Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldTargets",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldTargets",
          "package": "snaplet-redson",
          "partial": "Field Targets",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldValue",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldValue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "FieldValue",
          "package": "snaplet-redson",
          "partial": "Field Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:FieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA named group of fields.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Groups",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Groups",
          "type": "type"
        },
        "index": {
          "description": "named group of fields",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Groups",
          "package": "snaplet-redson",
          "partial": "Groups",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModel describes fields and permissions.\n\u003c/p\u003e\u003cp\u003eModels are built from JSON definitions (using FromJSON instance for\n Model) with further group splicing (\u003ccode\u003e\u003ca\u003espliceGroups\u003c/a\u003e\u003c/code\u003e), applications\n (\u003ccode\u003e\u003ca\u003edoApplications\u003c/a\u003e\u003c/code\u003e) and index caching (\u003ccode\u003e\u003ca\u003ecacheIndices\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Model",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "data"
        },
        "index": {
          "description": "Model describes fields and permissions Models are built from JSON definitions using FromJSON instance for Model with further group splicing spliceGroups applications doApplications and index caching cacheIndices",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Model",
          "package": "snaplet-redson",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "ModelName",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#ModelName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "ModelName",
          "package": "snaplet-redson",
          "partial": "Model Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:ModelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField permissions property.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Permissions",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
          "type": "data"
        },
        "index": {
          "description": "Field permissions property",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Permissions",
          "package": "snaplet-redson",
          "partial": "Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#t:Permissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "AllFields",
          "package": "snaplet-redson",
          "signature": "AllFields",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "AllFields",
          "package": "snaplet-redson",
          "partial": "All Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:AllFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Application",
          "package": "snaplet-redson",
          "signature": "Application",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Application",
          "package": "snaplet-redson",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Everyone",
          "package": "snaplet-redson",
          "signature": "Everyone",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Everyone",
          "package": "snaplet-redson",
          "partial": "Everyone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Everyone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Field",
          "package": "snaplet-redson",
          "signature": "Field",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Field",
          "package": "snaplet-redson",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Fields",
          "package": "snaplet-redson",
          "signature": "Fields [FieldName]",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Fields",
          "normalized": "Fields[FieldName]",
          "package": "snaplet-redson",
          "partial": "Fields",
          "signature": "Fields[FieldName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Model",
          "package": "snaplet-redson",
          "signature": "Model",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Model",
          "package": "snaplet-redson",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Nobody",
          "package": "snaplet-redson",
          "signature": "Nobody",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Nobody",
          "package": "snaplet-redson",
          "partial": "Nobody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Nobody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "NoneFields",
          "package": "snaplet-redson",
          "signature": "NoneFields",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#FieldTargets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "NoneFields",
          "package": "snaplet-redson",
          "partial": "None Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:NoneFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Roles",
          "package": "snaplet-redson",
          "signature": "Roles [ByteString]",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "Roles",
          "normalized": "Roles[ByteString]",
          "package": "snaplet-redson",
          "partial": "Roles",
          "signature": "Roles[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:Roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_apRead",
          "package": "snaplet-redson",
          "signature": "Maybe Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_apRead",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_apRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_apWrite",
          "package": "snaplet-redson",
          "signature": "Maybe Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_apWrite",
          "package": "snaplet-redson",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_apWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canCreateM",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canCreateM",
          "package": "snaplet-redson",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canCreateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canDeleteM",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canDeleteM",
          "package": "snaplet-redson",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canDeleteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canRead",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canRead",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canReadM",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canReadM",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canUpdateM",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canUpdateM",
          "package": "snaplet-redson",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canUpdateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canWrite",
          "package": "snaplet-redson",
          "signature": "Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "_canWrite",
          "package": "snaplet-redson",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:_canWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apMeta",
          "package": "snaplet-redson",
          "signature": "Maybe FieldMeta",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apMeta",
          "package": "snaplet-redson",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apRead",
          "package": "snaplet-redson",
          "signature": "Lens Application (Maybe Permissions)",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#apRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apRead",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apWrite",
          "package": "snaplet-redson",
          "signature": "Lens Application (Maybe Permissions)",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#apWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "apWrite",
          "package": "snaplet-redson",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:apWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "applications",
          "package": "snaplet-redson",
          "signature": "[Application]",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "applications",
          "normalized": "[Application]",
          "package": "snaplet-redson",
          "signature": "[Application]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:applications"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet indices field of model to list of \u003ccode\u003e\u003ca\u003eFieldIndex\u003c/a\u003e\u003c/code\u003ees\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "cacheIndices",
          "package": "snaplet-redson",
          "signature": "Model -\u003e Model",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#cacheIndices",
          "type": "function"
        },
        "index": {
          "description": "Set indices field of model to list of FieldIndex es",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "cacheIndices",
          "normalized": "Model-\u003eModel",
          "package": "snaplet-redson",
          "partial": "Indices",
          "signature": "Model-\u003eModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:cacheIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canCreateM",
          "package": "snaplet-redson",
          "signature": "Lens Model Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canCreateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canCreateM",
          "package": "snaplet-redson",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canCreateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canDeleteM",
          "package": "snaplet-redson",
          "signature": "Lens Model Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canDeleteM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canDeleteM",
          "package": "snaplet-redson",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canDeleteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canRead",
          "package": "snaplet-redson",
          "signature": "Lens Field Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canRead",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canReadM",
          "package": "snaplet-redson",
          "signature": "Lens Model Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canReadM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canReadM",
          "package": "snaplet-redson",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canUpdateM",
          "package": "snaplet-redson",
          "signature": "Lens Model Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canUpdateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canUpdateM",
          "package": "snaplet-redson",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canUpdateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canWrite",
          "package": "snaplet-redson",
          "signature": "Lens Field Permissions",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#canWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "canWrite",
          "package": "snaplet-redson",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:canWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when field type is not specified in model description.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "defaultFieldType",
          "package": "snaplet-redson",
          "signature": "ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#defaultFieldType",
          "type": "function"
        },
        "index": {
          "description": "Used when field type is not specified in model description",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "defaultFieldType",
          "package": "snaplet-redson",
          "partial": "Field Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:defaultFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform all applications in model.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "doApplications",
          "package": "snaplet-redson",
          "signature": "Model -\u003e Model",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#doApplications",
          "type": "function"
        },
        "index": {
          "description": "Perform all applications in model",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "doApplications",
          "normalized": "Model-\u003eModel",
          "package": "snaplet-redson",
          "partial": "Applications",
          "signature": "Model-\u003eModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:doApplications"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "fieldType",
          "package": "snaplet-redson",
          "signature": "ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "fieldType",
          "package": "snaplet-redson",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:fieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "fields",
          "package": "snaplet-redson",
          "signature": "[Field]",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "fields",
          "normalized": "[Field]",
          "package": "snaplet-redson",
          "signature": "[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild new name \u003ccode\u003ef_gK\u003c/code\u003e for every field of group \u003ccode\u003eg\u003c/code\u003e to which field\n \u003ccode\u003ef\u003c/code\u003e is spliced into.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "groupFieldName",
          "package": "snaplet-redson",
          "signature": "FieldName-\u003e FieldName-\u003e FieldName",
          "type": "function"
        },
        "index": {
          "description": "Build new name gK for every field of group to which field is spliced into",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "groupFieldName",
          "normalized": "FieldName-\u003eFieldName-\u003eFieldName",
          "package": "snaplet-redson",
          "partial": "Field Name",
          "signature": "FieldName-\u003eFieldName-\u003eFieldName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:groupFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "groupName",
          "package": "snaplet-redson",
          "signature": "Maybe ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "groupName",
          "package": "snaplet-redson",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "index",
          "package": "snaplet-redson",
          "signature": "Bool",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "index",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "indexCollate",
          "package": "snaplet-redson",
          "signature": "Bool",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "indexCollate",
          "package": "snaplet-redson",
          "partial": "Collate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:indexCollate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCached list of index fields.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "indices",
          "package": "snaplet-redson",
          "signature": "[FieldIndex]",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Cached list of index fields",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "indices",
          "normalized": "[FieldIndex]",
          "package": "snaplet-redson",
          "signature": "[FieldIndex]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "meta",
          "package": "snaplet-redson",
          "signature": "Maybe FieldMeta",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "meta",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "modelName",
          "package": "snaplet-redson",
          "signature": "ModelName",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "modelName",
          "package": "snaplet-redson",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:modelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "name",
          "package": "snaplet-redson",
          "signature": "FieldName",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "name",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all model fields having \u003ccode\u003e\u003ca\u003egroupName\u003c/a\u003e\u003c/code\u003e annotation with\n actual group fields.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "spliceGroups",
          "package": "snaplet-redson",
          "signature": "Groups -\u003e Model -\u003e Model",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#spliceGroups",
          "type": "function"
        },
        "index": {
          "description": "Replace all model fields having groupName annotation with actual group fields",
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "spliceGroups",
          "normalized": "Groups-\u003eModel-\u003eModel",
          "package": "snaplet-redson",
          "partial": "Groups",
          "signature": "Groups-\u003eModel-\u003eModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:spliceGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "targets",
          "package": "snaplet-redson",
          "signature": "FieldTargets",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "targets",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:targets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "title",
          "package": "snaplet-redson",
          "signature": "ByteString",
          "source": "src/Snap-Snaplet-Redson-Snapless-Metamodel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Snapless Metamodel",
          "module": "Snap.Snaplet.Redson.Snapless.Metamodel",
          "name": "title",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Snapless-Metamodel.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous functions for Snap.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Util",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous functions for Snap",
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Util",
          "package": "snaplet-redson",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Error",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson-Util.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Error",
          "package": "snaplet-redson",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Error",
          "package": "snaplet-redson",
          "signature": "Error",
          "source": "src/Snap-Snaplet-Redson-Util.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "Error",
          "package": "snaplet-redson",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError response code\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "code",
          "package": "snaplet-redson",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Redson-Util.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Error response code",
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "code",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "forbidden",
          "package": "snaplet-redson",
          "signature": "Error",
          "source": "src/Snap-Snaplet-Redson-Util.html#forbidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "forbidden",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet integer parameter value from Request or return default value.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "fromIntParam",
          "package": "snaplet-redson",
          "signature": "ByteString -\u003e Int -\u003e m Int",
          "source": "src/Snap-Snaplet-Redson-Util.html#fromIntParam",
          "type": "function"
        },
        "index": {
          "description": "Get integer parameter value from Request or return default value",
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "fromIntParam",
          "normalized": "ByteString-\u003eInt-\u003ea Int",
          "package": "snaplet-redson",
          "partial": "Int Param",
          "signature": "ByteString-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:fromIntParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet parameter value from Request or return empty string\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "fromParam",
          "package": "snaplet-redson",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Snap-Snaplet-Redson-Util.html#fromParam",
          "type": "function"
        },
        "index": {
          "description": "Get parameter value from Request or return empty string",
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "fromParam",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "snaplet-redson",
          "partial": "Param",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:fromParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit MonadSnap flow with error response\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "handleError",
          "package": "snaplet-redson",
          "signature": "Error -\u003e m ()",
          "source": "src/Snap-Snaplet-Redson-Util.html#handleError",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit MonadSnap flow with error response",
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "handleError",
          "normalized": "Error-\u003ea()",
          "package": "snaplet-redson",
          "partial": "Error",
          "signature": "Error-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:handleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "notFound",
          "package": "snaplet-redson",
          "signature": "Error",
          "source": "src/Snap-Snaplet-Redson-Util.html#notFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "notFound",
          "package": "snaplet-redson",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "serverError",
          "package": "snaplet-redson",
          "signature": "Error",
          "source": "src/Snap-Snaplet-Redson-Util.html#serverError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "serverError",
          "package": "snaplet-redson",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:serverError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Redson.Util",
          "name": "unauthorized",
          "package": "snaplet-redson",
          "signature": "Error",
          "source": "src/Snap-Snaplet-Redson-Util.html#unauthorized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Redson Util",
          "module": "Snap.Snaplet.Redson.Util",
          "name": "unauthorized",
          "package": "snaplet-redson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson-Util.html#v:unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRUD for JSON data with Redis storage.\n\u003c/p\u003e\u003cp\u003eCan be used as Backbone.sync backend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Redson",
          "name": "Redson",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson.html",
          "type": "module"
        },
        "index": {
          "description": "CRUD for JSON data with Redis storage Can be used as Backbone.sync backend",
          "hierarchy": "Snap Snaplet Redson",
          "module": "Snap.Snaplet.Redson",
          "name": "Redson",
          "package": "snaplet-redson",
          "partial": "Redson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedson snaplet state type.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Redson",
          "name": "Redson",
          "package": "snaplet-redson",
          "source": "src/Snap-Snaplet-Redson.html#Redson",
          "type": "data"
        },
        "index": {
          "description": "Redson snaplet state type",
          "hierarchy": "Snap Snaplet Redson",
          "module": "Snap.Snaplet.Redson",
          "name": "Redson",
          "package": "snaplet-redson",
          "partial": "Redson",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#t:Redson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize Redson. AuthManager from parent snaplet is required.\n\u003c/p\u003e\u003cp\u003eConnect to Redis, read configuration and set routes.\n\u003c/p\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redson\" Nothing $\n           do\n             r \u003c- nestSnaplet \"_\" redson $ redsonInit auth\n             s \u003c- nestSnaplet \"session\" session $ initCookieSessionManager\n                                                  sesKey \"_session\" sessionTimeout\n             a \u003c- nestSnaplet \"auth\" auth $ initJsonFileAuthManager defAuthSettings\n             return $ MyApp r s a\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Redson",
          "name": "redsonInit",
          "package": "snaplet-redson",
          "signature": "Lens b (Snaplet (AuthManager b)) -\u003e SnapletInit b (Redson b)",
          "source": "src/Snap-Snaplet-Redson.html#redsonInit",
          "type": "function"
        },
        "index": {
          "description": "Initialize Redson AuthManager from parent snaplet is required Connect to Redis read configuration and set routes appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redson Nothing do nestSnaplet redson redsonInit auth nestSnaplet session session initCookieSessionManager sesKey session sessionTimeout nestSnaplet auth auth initJsonFileAuthManager defAuthSettings return MyApp",
          "hierarchy": "Snap Snaplet Redson",
          "module": "Snap.Snaplet.Redson",
          "name": "redsonInit",
          "normalized": "Lens a(Snaplet(AuthManager a))-\u003eSnapletInit a(Redson a)",
          "package": "snaplet-redson",
          "partial": "Init",
          "signature": "Lens b(Snaplet(AuthManager b))-\u003eSnapletInit b(Redson b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redson/docs/Snap-Snaplet-Redson.html#v:redsonInit"
      }
    }
  ]
]