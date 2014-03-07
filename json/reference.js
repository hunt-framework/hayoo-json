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
        "word": "reference"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReference is class which generalizes references and monads they exists in. It means that IORef, STRef and others can be accessed by common interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reference",
          "name": "Reference",
          "package": "reference",
          "source": "src/Data-Reference.html",
          "type": "module"
        },
        "index": {
          "description": "Reference is class which generalizes references and monads they exists in It means that IORef STRef and others can be accessed by common interface",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "Reference",
          "package": "reference",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass connecting mutable variable and monad it exists in.\n\u003c/p\u003e",
          "module": "Data.Reference",
          "name": "Reference",
          "package": "reference",
          "source": "src/Data-Reference.html#Reference",
          "type": "class"
        },
        "index": {
          "description": "Class connecting mutable variable and monad it exists in",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "Reference",
          "package": "reference",
          "partial": "Reference",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#t:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the reference. Default implementation is provided but it MUST\n be overloaded if the reference is atomic to provide an atomic write.\n\u003c/p\u003e",
          "module": "Data.Reference",
          "name": "modifyRef",
          "package": "reference",
          "signature": "modifyRef",
          "source": "src/Data-Reference.html#modifyRef",
          "type": "method"
        },
        "index": {
          "description": "Modify the reference Default implementation is provided but it MUST be overloaded if the reference is atomic to provide an atomic write",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "modifyRef",
          "package": "reference",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new reference.\n\u003c/p\u003e",
          "module": "Data.Reference",
          "name": "newRef",
          "package": "reference",
          "signature": "newRef",
          "source": "src/Data-Reference.html#newRef",
          "type": "method"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "newRef",
          "package": "reference",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a reference.\n\u003c/p\u003e",
          "module": "Data.Reference",
          "name": "readRef",
          "package": "reference",
          "signature": "readRef",
          "source": "src/Data-Reference.html#readRef",
          "type": "method"
        },
        "index": {
          "description": "Reads reference",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "readRef",
          "package": "reference",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to reference.\n\u003c/p\u003e",
          "module": "Data.Reference",
          "name": "writeRef",
          "package": "reference",
          "signature": "writeRef",
          "source": "src/Data-Reference.html#writeRef",
          "type": "method"
        },
        "index": {
          "description": "Write to reference",
          "hierarchy": "Data Reference",
          "module": "Data.Reference",
          "name": "writeRef",
          "package": "reference",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reference/docs/Data-Reference.html#v:writeRef"
      }
    }
  ]
]