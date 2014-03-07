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
        "word": "phone-push"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Android",
          "name": "Android",
          "package": "phone-push",
          "source": "src/Android.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Android",
          "module": "Android",
          "name": "Android",
          "package": "phone-push",
          "partial": "Android",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phone-push/docs/Android.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Android",
          "name": "pushMess",
          "package": "phone-push",
          "signature": "ByteString -\u003e ByteString -\u003e IO ()",
          "source": "src/Android.html#pushMess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Android",
          "module": "Android",
          "name": "pushMess",
          "normalized": "ByteString-\u003eByteString-\u003eIO()",
          "package": "phone-push",
          "partial": "Mess",
          "signature": "ByteString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phone-push/docs/Android.html#v:pushMess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IOS",
          "name": "IOS",
          "package": "phone-push",
          "source": "src/IOS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "IOS",
          "module": "IOS",
          "name": "IOS",
          "package": "phone-push",
          "partial": "IOS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phone-push/docs/IOS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IOS",
          "name": "pushMessLive",
          "package": "phone-push",
          "signature": "FilePath -\u003e FilePath -\u003e ByteString -\u003e [ByteString] -\u003e IO ()",
          "source": "src/IOS.html#pushMessLive",
          "type": "function"
        },
        "index": {
          "hierarchy": "IOS",
          "module": "IOS",
          "name": "pushMessLive",
          "normalized": "FilePath-\u003eFilePath-\u003eByteString-\u003e[ByteString]-\u003eIO()",
          "package": "phone-push",
          "partial": "Mess Live",
          "signature": "FilePath-\u003eFilePath-\u003eByteString-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phone-push/docs/IOS.html#v:pushMessLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IOS",
          "name": "pushMessTest",
          "package": "phone-push",
          "signature": "FilePath -\u003e FilePath -\u003e ByteString -\u003e [ByteString] -\u003e IO ()",
          "source": "src/IOS.html#pushMessTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "IOS",
          "module": "IOS",
          "name": "pushMessTest",
          "normalized": "FilePath-\u003eFilePath-\u003eByteString-\u003e[ByteString]-\u003eIO()",
          "package": "phone-push",
          "partial": "Mess Test",
          "signature": "FilePath-\u003eFilePath-\u003eByteString-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phone-push/docs/IOS.html#v:pushMessTest"
      }
    }
  ]
]