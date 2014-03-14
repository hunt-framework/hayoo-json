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
        "word": "yesod-s3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.S3",
          "name": "S3",
          "package": "yesod-s3",
          "source": "src/Yesod-S3.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod S3",
          "module": "Yesod.S3",
          "name": "S3",
          "package": "yesod-s3",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-s3/docs/Yesod-S3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.S3",
          "name": "extractFile",
          "package": "yesod-s3",
          "signature": "FileInfo -\u003e IO ByteString",
          "source": "src/Yesod-S3.html#extractFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod S3",
          "module": "Yesod.S3",
          "name": "extractFile",
          "normalized": "FileInfo-\u003eIO ByteString",
          "package": "yesod-s3",
          "partial": "File",
          "signature": "FileInfo-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-s3/docs/Yesod-S3.html#v:extractFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.S3",
          "name": "getLink",
          "package": "yesod-s3",
          "signature": "AWSConnection-\u003e String-\u003e String-\u003e Integer-\u003e IO URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod S3",
          "module": "Yesod.S3",
          "name": "getLink",
          "normalized": "AWSConnection-\u003eString-\u003eString-\u003eInteger-\u003eIO URI",
          "package": "yesod-s3",
          "partial": "Link",
          "signature": "AWSConnection-\u003eString-\u003eString-\u003eInteger-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-s3/docs/Yesod-S3.html#v:getLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.S3",
          "name": "uploadFile",
          "package": "yesod-s3",
          "signature": "AWSConnection-\u003e FileInfo-\u003e String-\u003e String-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod S3",
          "module": "Yesod.S3",
          "name": "uploadFile",
          "normalized": "AWSConnection-\u003eFileInfo-\u003eString-\u003eString-\u003eIO(AWSResult())",
          "package": "yesod-s3",
          "partial": "File",
          "signature": "AWSConnection-\u003eFileInfo-\u003eString-\u003eString-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-s3/docs/Yesod-S3.html#v:uploadFile"
      }
    }
  ]
]