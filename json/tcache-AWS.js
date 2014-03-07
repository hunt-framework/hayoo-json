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
        "word": "tcache-AWS"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.AWS",
          "name": "AWS",
          "package": "tcache-AWS",
          "source": "src/Data-TCache-AWS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TCache AWS",
          "module": "Data.TCache.AWS",
          "name": "AWS",
          "package": "tcache-AWS",
          "partial": "AWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcache-AWS/docs/Data-TCache-AWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a default persistence mechanism in Amazon S3.\n . It uses the credentials using \u003ccode\u003e\u003ca\u003ebaseConfiguration\u003c/a\u003e\u003c/code\u003e from the package aws,\n which read them from the environment or from a file.\n See \u003ccode\u003e\u003ca\u003ebaseConfiguration\u003c/a\u003e\u003c/code\u003e doc. for further information\n\u003c/p\u003e\u003cp\u003eHere is an example of default persistence for a user defined data structure:\n\u003c/p\u003e\u003cpre\u003e import Data.TCache.DefaultPersistence\n import Data.TCache.AWS\n\n instance  Serializable MyData where\n  serialize=  pack . show\n  deserialize=   read . unpack\n  setPersist =  const . Just amazonSDBPersist \"mydomain\" False\n\u003c/pre\u003e\u003cp\u003eIf you like to use Amazon S3 for all your data structures by default:\n\u003c/p\u003e\u003cpre\u003e instance  Serializable MyData where\n  serialize=  pack . show\n  deserialize=   read . unpack\n  setPersist =  Nothing\n\u003c/pre\u003e\u003cpre\u003e setDefaultPersist  amazonSDBPersist\n\u003c/pre\u003e",
          "module": "Data.TCache.AWS",
          "name": "amazonS3Persist",
          "package": "tcache-AWS",
          "signature": "Bucket -\u003e Persist",
          "source": "src/Data-TCache-AWS.html#amazonS3Persist",
          "type": "function"
        },
        "index": {
          "description": "Define default persistence mechanism in Amazon S3 It uses the credentials using baseConfiguration from the package aws which read them from the environment or from file See baseConfiguration doc for further information Here is an example of default persistence for user defined data structure import Data.TCache.DefaultPersistence import Data.TCache.AWS instance Serializable MyData where serialize pack show deserialize read unpack setPersist const Just amazonSDBPersist mydomain False If you like to use Amazon S3 for all your data structures by default instance Serializable MyData where serialize pack show deserialize read unpack setPersist Nothing setDefaultPersist amazonSDBPersist",
          "hierarchy": "Data TCache AWS",
          "module": "Data.TCache.AWS",
          "name": "amazonS3Persist",
          "normalized": "Bucket-\u003ePersist",
          "package": "tcache-AWS",
          "partial": "Persist",
          "signature": "Bucket-\u003ePersist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcache-AWS/docs/Data-TCache-AWS.html#v:amazonS3Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a default persistence mechanism in Simple AWS.\n . It uses the credentials using \u003ccode\u003e\u003ca\u003ebaseConfiguration\u003c/a\u003e\u003c/code\u003e from the package aws,\n which read them from the environment or from a file.\n See \u003ccode\u003e\u003ca\u003ebaseConfiguration\u003c/a\u003e\u003c/code\u003e doc. for further information\n\u003c/p\u003e\u003cp\u003eThe second parameter specify either if the domain will be cleared or not\n\u003c/p\u003e\u003cp\u003eHere is an example of default persistence for a user defined data structure:\n\u003c/p\u003e\u003cpre\u003e import Data.TCache.DefaultPersistence\n import Data.TCache.AWS\n\n instance  Serializable MyData where\n  serialize  =  pack . show\n  deserialize=  read . unpack\n  setPersist =  const . Just $ amazonSDBPersist \"mydomain\" False\n\u003c/pre\u003e\u003cp\u003eIf you like to use Simple AWS for all your data structures by default:\n\u003c/p\u003e\u003cpre\u003e instance  Serializable MyData where\n  serialize  =  pack . show\n  deserialize=  read . unpack\n  setPersist =  Nothing\n\u003c/pre\u003e\u003cpre\u003e setDefaultPersist  amazonSDBPersist\n\u003c/pre\u003e",
          "module": "Data.TCache.AWS",
          "name": "amazonSDBPersist",
          "package": "tcache-AWS",
          "signature": "Text -\u003e Bool -\u003e Persist",
          "source": "src/Data-TCache-AWS.html#amazonSDBPersist",
          "type": "function"
        },
        "index": {
          "description": "Define default persistence mechanism in Simple AWS It uses the credentials using baseConfiguration from the package aws which read them from the environment or from file See baseConfiguration doc for further information The second parameter specify either if the domain will be cleared or not Here is an example of default persistence for user defined data structure import Data.TCache.DefaultPersistence import Data.TCache.AWS instance Serializable MyData where serialize pack show deserialize read unpack setPersist const Just amazonSDBPersist mydomain False If you like to use Simple AWS for all your data structures by default instance Serializable MyData where serialize pack show deserialize read unpack setPersist Nothing setDefaultPersist amazonSDBPersist",
          "hierarchy": "Data TCache AWS",
          "module": "Data.TCache.AWS",
          "name": "amazonSDBPersist",
          "normalized": "Text-\u003eBool-\u003ePersist",
          "package": "tcache-AWS",
          "partial": "SDBPersist",
          "signature": "Text-\u003eBool-\u003ePersist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcache-AWS/docs/Data-TCache-AWS.html#v:amazonSDBPersist"
      }
    }
  ]
]