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
        "word": "couchdb-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB document attachments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote about attachment paths:\u003c/em\u003e Attachments may have embedded \u003ccode\u003e/\u003c/code\u003e \n   characters that are sent unescaped to CouchDB. You can use this to \n   provide a subtree of attachments under a document. A DocID must have \n   any \u003ccode\u003e/\u003c/code\u003e escaped as \u003ccode\u003e%2F\u003c/code\u003e. So if you have document \u003ccode\u003ea/b/c\u003c/code\u003e with an \n   attachment \u003ccode\u003ed/e/f.txt\u003c/code\u003e, you would be able to access it at \n   \u003ccode\u003ehttp://couchdb/db/a%2fb%2fc/d/e/f.txt\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecouchdb-conduit\u003c/code\u003e automaticaly normalizes attachment paths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "Attachment",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Attachment.html",
          "type": "module"
        },
        "index": {
          "description": "CouchDB document attachments Note about attachment paths Attachments may have embedded characters that are sent unescaped to CouchDB You can use this to provide subtree of attachments under document DocID must have any escaped as So if you have document with an attachment f.txt you would be able to access it at http couchdb db fb fc f.txt couchdb-conduit automaticaly normalizes attachment paths",
          "hierarchy": "Database CouchDB Conduit Attachment",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "Attachment",
          "package": "couchdb-conduit",
          "partial": "Attachment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete document attachment\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchDeleteAttach",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e ByteString-\u003e Revision-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Delete document attachment",
          "hierarchy": "Database CouchDB Conduit Attachment",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchDeleteAttach",
          "normalized": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003ea Revision",
          "package": "couchdb-conduit",
          "partial": "Delete Attach",
          "signature": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchDeleteAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet document attachment and \u003ccode\u003eContent-Type\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchGetAttach",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e ByteString-\u003e m (ResumableSource m ByteString, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Get document attachment and Content-Type",
          "hierarchy": "Database CouchDB Conduit Attachment",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchGetAttach",
          "normalized": "Path-\u003ePath-\u003eByteString-\u003ea(ResumableSource a ByteString,ByteString)",
          "package": "couchdb-conduit",
          "partial": "Get Attach",
          "signature": "Path-\u003ePath-\u003eByteString-\u003em(ResumableSource m ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchGetAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut or update document attachment\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchPutAttach",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e ByteString-\u003e Revision-\u003e ByteString-\u003e RequestBody m-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put or update document attachment",
          "hierarchy": "Database CouchDB Conduit Attachment",
          "module": "Database.CouchDB.Conduit.Attachment",
          "name": "couchPutAttach",
          "normalized": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003eByteString-\u003eRequestBody a-\u003ea Revision",
          "package": "couchdb-conduit",
          "partial": "Put Attach",
          "signature": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003eByteString-\u003eRequestBody m-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchPutAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB database methods.\n\u003c/p\u003e\u003cpre\u003e runCouch def {couchDB=\"my_db\"} $ couchPutDb\n runCouch def {couchDB=\"my_new_db\"} $ couchPutDb\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "DB",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-DB.html",
          "type": "module"
        },
        "index": {
          "description": "CouchDB database methods runCouch def couchDB my db couchPutDb runCouch def couchDB my new db couchPutDb",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "DB",
          "package": "couchdb-conduit",
          "partial": "DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a database.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchDeleteDB",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Delete database",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchDeleteDB",
          "normalized": "Path-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Delete DB",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchDeleteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate CouchDB database. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchPutDB",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Create CouchDB database",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchPutDB",
          "normalized": "Path-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Put DB",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchPutDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Don't care\" version of couchPutDb. Create CouchDB database only in its \n   absence. For this it handles \u003ccode\u003e412\u003c/code\u003e responses.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchPutDB_",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Don care version of couchPutDb Create CouchDB database only in its absence For this it handles responses",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchPutDB_",
          "normalized": "Path-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Put DB",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchPutDB_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase replication. \n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://guide.couchdb.org/editions/1/en/api.html#replication\u003c/a\u003e for \n   details.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchReplicateDB",
          "package": "couchdb-conduit",
          "signature": "ByteString-\u003e ByteString-\u003e Bool-\u003e Bool-\u003e Bool-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Database replication See http guide.couchdb.org editions en api.html replication for details",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchReplicateDB",
          "normalized": "ByteString-\u003eByteString-\u003eBool-\u003eBool-\u003eBool-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Replicate DB",
          "signature": "ByteString-\u003eByteString-\u003eBool-\u003eBool-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchReplicateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaintain DB security.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchSecureDB",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e [ByteString]-\u003e [ByteString]-\u003e [ByteString]-\u003e [ByteString]-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Maintain DB security",
          "hierarchy": "Database CouchDB Conduit DB",
          "module": "Database.CouchDB.Conduit.DB",
          "name": "couchSecureDB",
          "normalized": "Path-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Secure DB",
          "signature": "Path-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchSecureDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-level API for CouchDB design documents. These methods are very \n   convenient for bootstrapping and testing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.Design",
          "name": "Design",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Design.html",
          "type": "module"
        },
        "index": {
          "description": "High-level API for CouchDB design documents These methods are very convenient for bootstrapping and testing",
          "hierarchy": "Database CouchDB Conduit Design",
          "module": "Database.CouchDB.Conduit.Design",
          "name": "Design",
          "package": "couchdb-conduit",
          "partial": "Design",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Design.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut view to design document. If design document does not exist, \n   it will be created. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Design",
          "name": "couchPutView",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Path-\u003e ByteString-\u003e Maybe ByteString-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Put view to design document If design document does not exist it will be created",
          "hierarchy": "Database CouchDB Conduit Design",
          "module": "Database.CouchDB.Conduit.Design",
          "name": "couchPutView",
          "normalized": "Path-\u003ePath-\u003ePath-\u003eByteString-\u003eMaybe ByteString-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Put View",
          "signature": "Path-\u003ePath-\u003ePath-\u003eByteString-\u003eMaybe ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Design.html#v:couchPutView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExplicit methods for CouchDB documents. Documents represents in \"good\n   old\" aeson manner through \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}\n\n import Control.Applicative ((\u003c$\u003e), (\u003c*\u003e))\n import Control.Monad.IO.Class (liftIO)\n import Data.Aeson\n import Database.CouchDB.Conduit\n import Database.CouchDB.Conduit.Explicit\n\n -- | Our doc with instances\n data D = D { f1 :: Int, f2 :: String } deriving (Show)\n \n instance FromJSON D where\n    parseJSON (Object v) = D \u003c$\u003e v .: \"f1\" \u003c*\u003e v .: \"f2\"\n    parseJSON _          = mzero\n\n instance ToJSON D where\n    toJSON (D f1 f2) = object [\"f1\" .= f1, \"f2\" .= f2]\n \n runCouch def $ do\n    -- Put new doc and update it\n    rev1 \u003c- couchPut \"mydb\" \"my-doc1\" \"\" [] $ D 123 \"str\"         \n    rev2 \u003c- couchPut \"mydb\" \"my-doc1\" rev1 [] $ D 1234 \"another\"\n\n    -- get it and print\n    (rev3, d1 :: D) \u003c- couchGet \"mydb\" \"my-doc1\" [] \n    liftIO $ print d1\n\n    -- update it in brute-force manner    \n    couchPut' \"mydb\" \"my-doc1\" [] $ D 12345 \"third\"    -- notice - no rev\n    \n    -- get revision and delete\n    rev3 \u003c- couchRev \"mydb\" \"my-doc1\"\n    couchDelete \"mydb\" \"my-doc1\" rev3\n\u003c/pre\u003e\u003cp\u003eFor details of types see \u003ca\u003eData.Aeson\u003c/a\u003e. To work with documents in \n   generic manner, look at \u003ca\u003eDatabase.CouchDB.Conduit.Generic\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "Explicit",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Explicit.html",
          "type": "module"
        },
        "index": {
          "description": "Explicit methods for CouchDB documents Documents represents in good old aeson manner through ToJSON and FromJSON LANGUAGE OverloadedStrings ScopedTypeVariables import Control.Applicative import Control.Monad.IO.Class liftIO import Data.Aeson import Database.CouchDB.Conduit import Database.CouchDB.Conduit.Explicit Our doc with instances data f1 Int f2 String deriving Show instance FromJSON where parseJSON Object f1 f2 parseJSON mzero instance ToJSON where toJSON f1 f2 object f1 f1 f2 f2 runCouch def do Put new doc and update it rev1 couchPut mydb my-doc1 str rev2 couchPut mydb my-doc1 rev1 another get it and print rev3 d1 couchGet mydb my-doc1 liftIO print d1 update it in brute-force manner couchPut mydb my-doc1 third notice no rev get revision and delete rev3 couchRev mydb my-doc1 couchDelete mydb my-doc1 rev3 For details of types see Data.Aeson To work with documents in generic manner look at Database.CouchDB.Conduit.Generic",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "Explicit",
          "package": "couchdb-conduit",
          "partial": "Explicit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a single \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e object with \u003ccode\u003e\u003ca\u003eRevision\u003c/a\u003e\u003c/code\u003e from couch DB. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchGet",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
          "type": "function"
        },
        "index": {
          "description": "Load single ToJSON object with Revision from couch DB",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchGet",
          "normalized": "Path-\u003ePath-\u003eQuery-\u003ea(Revision,b)",
          "package": "couchdb-conduit",
          "partial": "Get",
          "signature": "Path-\u003ePath-\u003eQuery-\u003em(Revision,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e object in Couch DB with revision, returning the \n   new \u003ccode\u003e\u003ca\u003eRevision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchPut",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put an FromJSON object in Couch DB with revision returning the new Revision",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchPut",
          "normalized": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put",
          "signature": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates a document regardless of \n   presence. \n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.Conduit.Explicit\",\"Database.CouchDB.Conduit.Generic\"]",
          "name": "couchPut'",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut-39-\",\"http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut-39-\"]"
        },
        "index": {
          "description": "Brute force version of couchPut Creates document regardless of presence",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchPut'",
          "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put'",
          "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Don't care\" version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates document only in its \n   absence.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.Conduit.Explicit\",\"Database.CouchDB.Conduit.Generic\"]",
          "name": "couchPut_",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut_\",\"http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut_\"]"
        },
        "index": {
          "description": "Don care version of couchPut Creates document only in its absence",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "couchPut_",
          "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put",
          "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert CouchDB view row or row value from \u003ca\u003eDatabase.CouchDB.Conduit.View\u003c/a\u003e \n   to concrete \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cpre\u003e res \u003c- couchView \"mydesign\" \"myview\" [] $ rowValue =$= toType =$ consume\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "toType",
          "package": "couchdb-conduit",
          "signature": "Conduit Value m a",
          "source": "src/Database-CouchDB-Conduit-Explicit.html#toType",
          "type": "function"
        },
        "index": {
          "description": "Convert CouchDB view row or row value from Database.CouchDB.Conduit.View to concrete FromJSON type res couchView mydesign myview rowValue toType consume",
          "hierarchy": "Database CouchDB Conduit Explicit",
          "module": "Database.CouchDB.Conduit.Explicit",
          "name": "toType",
          "package": "couchdb-conduit",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric methods for CouchDB documents. Unlike explicit, generic methods \n   uses \u003ca\u003eData.Generics\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveDataTypeable #-}\n {-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}\n\n import Control.Monad.IO.Class (liftIO)\n import Data.Generic (Data, Typeable)\n import Database.CouchDB.Conduit\n import Database.CouchDB.Conduit.Generic\n\n -- | Our doc with instances\n data D = D { f1 :: Int, f2 :: String } deriving (Show, Data, Typeable)\n \n runCouch def $ do\n    -- Put new doc and update it\n    rev1 \u003c- couchPut \"mydb\" \"my-doc1\" \"\" [] $ D 123 \"str\"         \n    rev2 \u003c- couchPut \"mydb\" \"my-doc1\" rev1 [] $ D 1234 \"another\"\n\n    -- get it and print\n    (rev3, d1 :: D) \u003c- couchGet \"mydb\" \"my-doc1\" [] \n    liftIO $ print d1\n\n    -- update it in brute-force manner    \n    couchPut' \"mydb\" \"my-doc1\" [] $ D 12345 \"third\"    -- notice - no rev\n    \n    -- get revision and delete\n    rev3 \u003c- couchRev \"mydb\" \"my-doc1\"\n    couchDelete \"mydb\" \"my-doc1\" rev3\n\u003c/pre\u003e\u003cp\u003eThe main advantage of this approach in the absence of tonns of  \n   boilerplate code. The main disadvantage is inability to influence the \n   process of translation to and from JSON.\n\u003c/p\u003e\u003cp\u003eFor details of types see \u003ca\u003eData.Aeson.Generic\u003c/a\u003e. To work with documents in \n   explicit manner, look at \u003ca\u003eDatabase.CouchDB.Conduit.Explicit\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "Generic",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generic methods for CouchDB documents Unlike explicit generic methods uses Data.Generics LANGUAGE DeriveDataTypeable LANGUAGE OverloadedStrings ScopedTypeVariables import Control.Monad.IO.Class liftIO import Data.Generic Data Typeable import Database.CouchDB.Conduit import Database.CouchDB.Conduit.Generic Our doc with instances data f1 Int f2 String deriving Show Data Typeable runCouch def do Put new doc and update it rev1 couchPut mydb my-doc1 str rev2 couchPut mydb my-doc1 rev1 another get it and print rev3 d1 couchGet mydb my-doc1 liftIO print d1 update it in brute-force manner couchPut mydb my-doc1 third notice no rev get revision and delete rev3 couchRev mydb my-doc1 couchDelete mydb my-doc1 rev3 The main advantage of this approach in the absence of tonns of boilerplate code The main disadvantage is inability to influence the process of translation to and from JSON For details of types see Data.Aeson.Generic To work with documents in explicit manner look at Database.CouchDB.Conduit.Explicit",
          "hierarchy": "Database CouchDB Conduit Generic",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "Generic",
          "package": "couchdb-conduit",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a single object from couch DB.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "couchGet",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
          "type": "function"
        },
        "index": {
          "description": "Load single object from couch DB",
          "hierarchy": "Database CouchDB Conduit Generic",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "couchGet",
          "normalized": "Path-\u003ePath-\u003eQuery-\u003ea(Revision,b)",
          "package": "couchdb-conduit",
          "partial": "Get",
          "signature": "Path-\u003ePath-\u003eQuery-\u003em(Revision,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an object in Couch DB with revision, returning the new Revision.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "couchPut",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put an object in Couch DB with revision returning the new Revision",
          "hierarchy": "Database CouchDB Conduit Generic",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "couchPut",
          "normalized": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put",
          "signature": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert CouchDB view row or row value from \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e \n   to concrete type.\n\u003c/p\u003e\u003cpre\u003e res \u003c- couchView \"mydesign\" \"myview\" [] $ rowValue =$= toType =$ consume\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "toType",
          "package": "couchdb-conduit",
          "signature": "Conduit Value m a",
          "source": "src/Database-CouchDB-Conduit-Generic.html#toType",
          "type": "function"
        },
        "index": {
          "description": "Convert CouchDB view row or row value from View to concrete type res couchView mydesign myview rowValue toType consume",
          "hierarchy": "Database CouchDB Conduit Generic",
          "module": "Database.CouchDB.Conduit.Generic",
          "name": "toType",
          "package": "couchdb-conduit",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplicit methods for CouchDB documents.\n\u003c/p\u003e\u003cp\u003eAll implicit methods needs parser or encoder.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "Implicit",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Implicit.html",
          "type": "module"
        },
        "index": {
          "description": "Implicit methods for CouchDB documents All implicit methods needs parser or encoder",
          "hierarchy": "Database CouchDB Conduit Implicit",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "Implicit",
          "package": "couchdb-conduit",
          "partial": "Implicit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad CouchDB document and parse it with given parser.\n\u003c/p\u003e\u003cpre\u003e (rev, rawJson) \u003c- couchGet Success \"mydb\" mydoc []\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchGet",
          "package": "couchdb-conduit",
          "signature": "(Value -\u003e Result a)-\u003e Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
          "type": "function"
        },
        "index": {
          "description": "Load CouchDB document and parse it with given parser rev rawJson couchGet Success mydb mydoc",
          "hierarchy": "Database CouchDB Conduit Implicit",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchGet",
          "normalized": "(Value-\u003eResult a)-\u003ePath-\u003ePath-\u003eQuery-\u003eb(Revision,a)",
          "package": "couchdb-conduit",
          "partial": "Get",
          "signature": "(Value-\u003eResult a)-\u003ePath-\u003ePath-\u003eQuery-\u003em(Revision,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut document, with given encoder\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut",
          "package": "couchdb-conduit",
          "signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put document with given encoder",
          "hierarchy": "Database CouchDB Conduit Implicit",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut",
          "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put",
          "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates a document regardless of \n   presence. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut'",
          "package": "couchdb-conduit",
          "signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Brute force version of couchPut Creates document regardless of presence",
          "hierarchy": "Database CouchDB Conduit Implicit",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut'",
          "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put'",
          "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Don't care\" version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates document only in its \n   absence.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut_",
          "package": "couchdb-conduit",
          "signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Don care version of couchPut Creates document only in its absence",
          "hierarchy": "Database CouchDB Conduit Implicit",
          "module": "Database.CouchDB.Conduit.Implicit",
          "name": "couchPut_",
          "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-conduit",
          "partial": "Put",
          "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level method and tools of accessing CouchDB.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "LowLevel",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-LowLevel.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level method and tools of accessing CouchDB",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "LowLevel",
          "package": "couchdb-conduit",
          "partial": "Low Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB response\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "CouchResponse",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-LowLevel.html#CouchResponse",
          "type": "type"
        },
        "index": {
          "description": "CouchDB response",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "CouchResponse",
          "package": "couchdb-conduit",
          "partial": "Couch Response",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#t:CouchResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general method of accessing CouchDB.  This is a very thin wrapper \n   around \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.  Most of the time you should use one of the other access \n   functions, but this function is needed for example to write and read \n   attachments that are not in JSON format.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "couch",
          "package": "couchdb-conduit",
          "signature": "Method-\u003e Path-\u003e RequestHeaders-\u003e Query-\u003e RequestBody m-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e m (CouchResponse m)",
          "type": "function"
        },
        "index": {
          "description": "The most general method of accessing CouchDB This is very thin wrapper around http Most of the time you should use one of the other access functions but this function is needed for example to write and read attachments that are not in JSON format",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "couch",
          "normalized": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody a-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003ea(CouchResponse a)",
          "package": "couchdb-conduit",
          "signature": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody m-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003em(CouchResponse m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:couch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore generalized version of \u003ccode\u003e\u003ca\u003ecouch\u003c/a\u003e\u003c/code\u003e. Instead \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e it takes function\n   what takes prefix and returns a path.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "couch'",
          "package": "couchdb-conduit",
          "signature": "Method-\u003e (Path -\u003e Path)-\u003e RequestHeaders-\u003e Query-\u003e RequestBody m-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e m (CouchResponse m)",
          "type": "function"
        },
        "index": {
          "description": "More generalized version of couch Instead Path it takes function what takes prefix and returns path",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "couch'",
          "normalized": "Method-\u003e(Path-\u003ePath)-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody a-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003ea(CouchResponse a)",
          "package": "couchdb-conduit",
          "signature": "Method-\u003e(Path-\u003ePath)-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody m-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003em(CouchResponse m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:couch-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtect \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from bad status codes. If status code in list \n   of status codes - just return response. Otherwise - throw \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstead \u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e parses CouchDB response body JSON and\n   extract \"reason\" message.\n\u003c/p\u003e\u003cp\u003eTo protect from typical errors use \u003ccode\u003e\u003ca\u003eprotect'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "protect",
          "package": "couchdb-conduit",
          "signature": "[Int]-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e CouchResponse m-\u003e m (CouchResponse m)",
          "type": "function"
        },
        "index": {
          "description": "Protect Response from bad status codes If status code in list of status codes just return response Otherwise throw CouchError Instead checkStatus protect parses CouchDB response body JSON and extract reason message To protect from typical errors use protect",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "protect",
          "normalized": "[Int]-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003eCouchResponse a-\u003ea(CouchResponse a)",
          "package": "couchdb-conduit",
          "signature": "[Int]-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003eCouchResponse m-\u003em(CouchResponse m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:protect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtect from typical status codes. It's equivalent of\n\u003c/p\u003e\u003cpre\u003e protect [200, 201, 202, 304] return\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e for details.       \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "protect'",
          "package": "couchdb-conduit",
          "signature": "CouchResponse m-\u003e m (CouchResponse m)",
          "type": "function"
        },
        "index": {
          "description": "Protect from typical status codes It equivalent of protect return See protect for details",
          "hierarchy": "Database CouchDB Conduit LowLevel",
          "module": "Database.CouchDB.Conduit.LowLevel",
          "name": "protect'",
          "normalized": "CouchResponse a-\u003ea(CouchResponse a)",
          "package": "couchdb-conduit",
          "signature": "CouchResponse m-\u003em(CouchResponse m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:protect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB View Query options.\n\u003c/p\u003e\u003cp\u003eFor details see \n   \u003ca\u003ehttp://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options\u003c/a\u003e. Note, \n   because all options must be a proper URL encoded JSON, construction of \n   complex parameters can be very tedious. To simplify this, use \u003ccode\u003e\u003ca\u003emkQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "Query",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-View-Query.html",
          "type": "module"
        },
        "index": {
          "description": "CouchDB View Query options For details see http wiki.apache.org couchdb HTTP view API Querying Options Note because all options must be proper URL encoded JSON construction of complex parameters can be very tedious To simplify this use mkQuery",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "Query",
          "package": "couchdb-conduit",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB Query options primitives.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "CouchQP",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "data"
        },
        "index": {
          "description": "CouchDB Query options primitives",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "CouchQP",
          "package": "couchdb-conduit",
          "partial": "Couch QP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#t:CouchQP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuoted \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=\"value\" \n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPBS",
          "package": "couchdb-conduit",
          "signature": "QPBS ByteString ByteString",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Quoted ByteString query parameter param value",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPBS",
          "package": "couchdb-conduit",
          "partial": "QPBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=true\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPBool",
          "package": "couchdb-conduit",
          "signature": "QPBool ByteString Bool",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Bool query parameter param true",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPBool",
          "package": "couchdb-conduit",
          "partial": "QPBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex view query parameter.  \n\u003c/p\u003e\u003cpre\u003e couchQP [QPComplex \"param\" ([\"a\", \"b\"] :: [String])]\n [(\"param\", Just \"[\\\"a\\\",\\\"b\\\"]\")]\n ...?param=[\"a\",\"b\"]\n \n couchQP [QPComplex \"key\" ((\"a\", 1) :: (String, Int))]\n [(\"key\", Just \"[\\\"a\\\",0]\")]\n ...?param=[\"a\",0]\n\u003c/pre\u003e\u003cp\u003eIt't just convert lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e to strict \n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. For more efficient use specific functions. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPComplex",
          "package": "couchdb-conduit",
          "signature": "QPComplex ByteString a",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Complex view query parameter couchQP QPComplex param String param Just param couchQP QPComplex key String Int key Just param It just convert lazy ByteString from encode to strict ByteString For more efficient use specific functions",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPComplex",
          "package": "couchdb-conduit",
          "partial": "QPComplex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse rows output.\n\u003c/p\u003e\u003cpre\u003e ...?descending=true \n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPDescending",
          "package": "couchdb-conduit",
          "signature": "QPDescending",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Reverse rows output descending true",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPDescending",
          "package": "couchdb-conduit",
          "partial": "QPDescending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPDescending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRow key to start with. Becomes \u003ccode\u003estartkey\u003c/code\u003e if \u003ccode\u003edescending\u003c/code\u003e \n   turned on. See \u003ccode\u003ecouchQuery\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e ...?endkey=...\n ...?descending=true?startkey=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPEndKey",
          "package": "couchdb-conduit",
          "signature": "QPEndKey a",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Row key to start with Becomes startkey if descending turned on See couchQuery endkey descending true startkey",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPEndKey",
          "package": "couchdb-conduit",
          "partial": "QPEnd Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPEndKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument id to end with.\n\u003c/p\u003e\u003cpre\u003e ...?endkey_docid=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPEndKeyDocId",
          "package": "couchdb-conduit",
          "signature": "QPEndKeyDocId Path",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Document id to end with endkey docid",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPEndKeyDocId",
          "package": "couchdb-conduit",
          "partial": "QPEnd Key Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPEndKeyDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on grouping.\n\u003c/p\u003e\u003cpre\u003e ...?group=true\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPGroup",
          "package": "couchdb-conduit",
          "signature": "QPGroup",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Turn on grouping group true",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPGroup",
          "package": "couchdb-conduit",
          "partial": "QPGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet grouping level. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?group_level=2\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPGroupLevel",
          "package": "couchdb-conduit",
          "signature": "QPGroupLevel Int",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Set grouping level Use Zero to omit group level",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPGroupLevel",
          "package": "couchdb-conduit",
          "partial": "QPGroup Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPGroupLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on inclusion docs in view results.\n\u003c/p\u003e\u003cpre\u003e ...?include_docs=true\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPIncludeDocs",
          "package": "couchdb-conduit",
          "signature": "QPIncludeDocs",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Turn on inclusion docs in view results include docs true",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPIncludeDocs",
          "package": "couchdb-conduit",
          "partial": "QPInclude Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPIncludeDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn off inclusion \u003ccode\u003eendkey\u003c/code\u003e in view results.\n\u003c/p\u003e\u003cpre\u003e ...?inclusive_end=false\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPInclusiveEnd",
          "package": "couchdb-conduit",
          "signature": "QPInclusiveEnd",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Turn off inclusion endkey in view results inclusive end false",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPInclusiveEnd",
          "package": "couchdb-conduit",
          "partial": "QPInclusive End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPInclusiveEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=100 \n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPInt",
          "package": "couchdb-conduit",
          "signature": "QPInt ByteString Int",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Int query parameter param",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPInt",
          "package": "couchdb-conduit",
          "partial": "QPInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekey\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?key=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPKey",
          "package": "couchdb-conduit",
          "signature": "QPKey a",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "key query parameter key",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPKey",
          "package": "couchdb-conduit",
          "partial": "QPKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRow key to start with. Use only with \u003ccode\u003ecouchView\u003c/code\u003e and \n   \u003ccode\u003ecouchView_\u003c/code\u003e. For large sets of \u003ccode\u003ekeys\u003c/code\u003e use \u003ccode\u003ecouchViewPost\u003c/code\u003e and \n   \u003ccode\u003ecouchViewPost_\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e ...?keys=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPKeys",
          "package": "couchdb-conduit",
          "signature": "QPKeys a",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Row key to start with Use only with couchView and couchView For large sets of keys use couchViewPost and couchViewPost keys",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPKeys",
          "package": "couchdb-conduit",
          "partial": "QPKeys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit rows. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?limit=5 \n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPLimit",
          "package": "couchdb-conduit",
          "signature": "QPLimit Int",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Limit rows Use Zero to omit limit",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPLimit",
          "package": "couchdb-conduit",
          "partial": "QPLimit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl reduce.\n\u003c/p\u003e\u003cpre\u003e ...?reduce=true\n ...?reduce=false\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPReduce",
          "package": "couchdb-conduit",
          "signature": "QPReduce Bool",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Control reduce reduce true reduce false",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPReduce",
          "package": "couchdb-conduit",
          "partial": "QPReduce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip rows. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?skip=10\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPSkip",
          "package": "couchdb-conduit",
          "signature": "QPSkip Int",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Skip rows Use Zero to omit skip",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPSkip",
          "package": "couchdb-conduit",
          "partial": "QPSkip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStale view. On \u003ccode\u003eTrue\u003c/code\u003e sets \u003ccode\u003estale\u003c/code\u003e parameter to \u003ccode\u003eok\u003c/code\u003e, else \n   sets it to \u003ccode\u003eupdate_after\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ...?stale=ok\n ...?stale=update_after\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStale",
          "package": "couchdb-conduit",
          "signature": "QPStale Bool",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Stale view On True sets stale parameter to ok else sets it to update after stale ok stale update after",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStale",
          "package": "couchdb-conduit",
          "partial": "QPStale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRow key to start with. Becomes \u003ccode\u003eendkey\u003c/code\u003e if \u003ccode\u003edescending\u003c/code\u003e turned on. \n   See \u003ccode\u003ecouchQuery\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e ...?startkey=...\n ...?descending=true?endkey=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStartKey",
          "package": "couchdb-conduit",
          "signature": "QPStartKey a",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Row key to start with Becomes endkey if descending turned on See couchQuery startkey descending true endkey",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStartKey",
          "package": "couchdb-conduit",
          "partial": "QPStart Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStartKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument id to start with.\n\u003c/p\u003e\u003cpre\u003e ...?startkey_docid=...\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStartKeyDocId",
          "package": "couchdb-conduit",
          "signature": "QPStartKeyDocId Path",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Document id to start with startkey docid",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPStartKeyDocId",
          "package": "couchdb-conduit",
          "partial": "QPStart Key Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStartKeyDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse includes an update_seq value indicating which sequence \n   id of the database the view reflects\n\u003c/p\u003e\u003cpre\u003e ...?update_seq=true\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPUpdateSeq",
          "package": "couchdb-conduit",
          "signature": "QPUpdateSeq",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
          "type": "function"
        },
        "index": {
          "description": "Response includes an update seq value indicating which sequence id of the database the view reflects update seq true",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "QPUpdateSeq",
          "package": "couchdb-conduit",
          "partial": "QPUpdate Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPUpdateSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake CouchDB query options.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "mkQuery",
          "package": "couchdb-conduit",
          "signature": "[CouchQP]-\u003e Query",
          "type": "function"
        },
        "index": {
          "description": "Make CouchDB query options",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "mkQuery",
          "normalized": "[CouchQP]-\u003eQuery",
          "package": "couchdb-conduit",
          "partial": "Query",
          "signature": "[CouchQP]-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:mkQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply return \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "qpNull",
          "package": "couchdb-conduit",
          "signature": "Value",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#qpNull",
          "type": "function"
        },
        "index": {
          "description": "Simply return Null",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "qpNull",
          "package": "couchdb-conduit",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:qpNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns empty \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e. Aeson will convert \n   this to \u003ccode\u003e{}\u003c/code\u003e (JSON unit). This useful for \u003ccode\u003estartkey\u003c/code\u003e and \u003ccode\u003eendkey\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e couchQuery [QPStartKey (1, 0), QPEndKey (1, {})]\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "qpUnit",
          "package": "couchdb-conduit",
          "signature": "HashMap ByteString Bool",
          "source": "src/Database-CouchDB-Conduit-View-Query.html#qpUnit",
          "type": "function"
        },
        "index": {
          "description": "Returns empty HashMap Aeson will convert this to JSON unit This useful for startkey and endkey couchQuery QPStartKey QPEndKey",
          "hierarchy": "Database CouchDB Conduit View Query",
          "module": "Database.CouchDB.Conduit.View.Query",
          "name": "qpUnit",
          "package": "couchdb-conduit",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:qpUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-level functions to interact with CouchDB views.\n\u003c/p\u003e\u003cp\u003eTo automate creation of CouchDB Query Options see\n   \u003ca\u003eDatabase.CouchDB.Conduit.View.Query\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTo manipulate views in design documents see \n   \u003ca\u003eDatabase.CouchDB.Conduit.Design\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "View",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-View.html",
          "type": "module"
        },
        "index": {
          "description": "Higher-level functions to interact with CouchDB views To automate creation of CouchDB Query Options see Database.CouchDB.Conduit.View.Query To manipulate views in design documents see Database.CouchDB.Conduit.Design",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "View",
          "package": "couchdb-conduit",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun CouchDB view in manner like \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n\n     -- Print all upon receipt.\n     src \u003c- couchView \"mydb\" \"mydesign\" \"myview\" [] \n     src $$ CL.mapM_ (liftIO . print)\n\n     -- ... Or extract row value and consume\n     src' \u003c- couchView \"mydb\" \"mydesign\" \"myview\" [] \n     res \u003c- src' $= rowValue $$ CL.consume\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchView",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e m (Source m Object)",
          "type": "function"
        },
        "index": {
          "description": "Run CouchDB view in manner like http runCouch def do Print all upon receipt src couchView mydb mydesign myview src CL.mapM liftIO print Or extract row value and consume src couchView mydb mydesign myview res src rowValue CL.consume",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchView",
          "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea(Source a Object)",
          "package": "couchdb-conduit",
          "partial": "View",
          "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003em(Source m Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun CouchDB view in manner like \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003ePOST\u003c/code\u003e (since CouchDB 0.9).\n   It's convenient in case that \u003ccode\u003ekeys\u003c/code\u003e paremeter too big for \u003ccode\u003eGET\u003c/code\u003e query \n   string. Other query parameters used as usual.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n     src \u003c- couchViewPost \"mydb\" \"mydesign\" \"myview\" \n             (mkQuery [QPGroup])\n             [\"key1\", \"key2\", \"key3\"] \n     src $$ CL.mapM_ (liftIO . print)\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchViewPost",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m (Source m Object)",
          "type": "function"
        },
        "index": {
          "description": "Run CouchDB view in manner like http using POST since CouchDB It convenient in case that keys paremeter too big for GET query string Other query parameters used as usual runCouch def do src couchViewPost mydb mydesign myview mkQuery QPGroup key1 key2 key3 src CL.mapM liftIO print",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchViewPost",
          "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb(Source b Object)",
          "package": "couchdb-conduit",
          "partial": "View Post",
          "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em(Source m Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchViewPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchViewPost\u003c/a\u003e\u003c/code\u003e. Takes \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to consume response.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchViewPost_",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e Sink Object m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Brain-free version of couchViewPost Takes Sink to consume response",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchViewPost_",
          "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eSink Object b a-\u003eb a",
          "package": "couchdb-conduit",
          "partial": "View Post",
          "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eSink Object m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchViewPost_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchView\u003c/a\u003e\u003c/code\u003e. Takes \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to consume response.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n\n     -- Print all upon receipt.\n     couchView' \"mydb\" \"mydesign\" \"myview\" [] $ CL.mapM_ (liftIO . print)\n\n     -- ... Or extract row value and consume\n     res \u003c- couchView' \"mydb\" \"mydesign\" \"myview\" [] $ \n                        rowValue =$ CL.consume\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchView_",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e Sink Object m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Brain-free version of couchView Takes Sink to consume response runCouch def do Print all upon receipt couchView mydb mydesign myview CL.mapM liftIO print Or extract row value and consume res couchView mydb mydesign myview rowValue CL.consume",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "couchView_",
          "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003eSink Object a b-\u003ea b",
          "package": "couchdb-conduit",
          "partial": "View",
          "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003eSink Object m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchView_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit for extract \"doc\" field from CouchDB view row. \n   Use only with \u003ccode\u003einclude_docs=true\u003c/code\u003e query parameter.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowDoc",
          "package": "couchdb-conduit",
          "signature": "Conduit Object m Value",
          "source": "src/Database-CouchDB-Conduit-View.html#rowDoc",
          "type": "function"
        },
        "index": {
          "description": "Conduit for extract doc field from CouchDB view row Use only with include docs true query parameter",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowDoc",
          "package": "couchdb-conduit",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract field from view row\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowField",
          "package": "couchdb-conduit",
          "signature": "Text -\u003e Conduit Object m Value",
          "source": "src/Database-CouchDB-Conduit-View.html#rowField",
          "type": "function"
        },
        "index": {
          "description": "Extract field from view row",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowField",
          "normalized": "Text-\u003eConduit Object a Value",
          "package": "couchdb-conduit",
          "partial": "Field",
          "signature": "Text-\u003eConduit Object m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit for extract \"value\" field from CouchDB view row.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowValue",
          "package": "couchdb-conduit",
          "signature": "Conduit Object m Value",
          "source": "src/Database-CouchDB-Conduit-View.html#rowValue",
          "type": "function"
        },
        "index": {
          "description": "Conduit for extract value field from CouchDB view row",
          "hierarchy": "Database CouchDB Conduit View",
          "module": "Database.CouchDB.Conduit.View",
          "name": "rowValue",
          "package": "couchdb-conduit",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB \n\u003c/p\u003e\u003cp\u003eTo work with concrete objects, use the following modules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.DB\u003c/a\u003e Database\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.View\u003c/a\u003e Views\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.LowLevel\u003c/a\u003e Low-level methods\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complete documentation about The Couch DB HTTP API see\n\u003ca\u003ehttp://wiki.apache.org/couchdb/Complete_HTTP_API_Reference\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "Conduit",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "CouchDB To work with concrete objects use the following modules Database.CouchDB.Conduit.DB Database Database.CouchDB.Conduit.View Views Database.CouchDB.Conduit.LowLevel Low-level methods For complete documentation about The Couch DB HTTP API see http wiki.apache.org couchdb Complete HTTP API Reference",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "Conduit",
          "package": "couchdb-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single connection to CouchDB server. The constructor for this \n   data type is not exposed. Instead, you should use either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method \n   to retrieve a default instance.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchConnection",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchConnection",
          "type": "data"
        },
        "index": {
          "description": "Represents single connection to CouchDB server The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchConnection",
          "package": "couchdb-conduit",
          "partial": "Couch Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:CouchConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CouchDB Error.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchError",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
          "type": "data"
        },
        "index": {
          "description": "CouchDB Error",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchError",
          "package": "couchdb-conduit",
          "partial": "Couch Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:CouchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad which allows access to the connection.\n\u003c/p\u003e\u003cp\u003eAll functions to access CouchDB require a \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e instance to \n access the connection information.  \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e is an instance of \n \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003erunCouch\u003c/em\u003e runs a sequence of database actions using \n \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your db code is part of a larger monad, it makes sense to just make the \n larger monad an instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e and skip the intermediate ReaderT, \n since then performance is improved by eliminating one monad from the final \n transformer stack.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "MonadCouch",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#MonadCouch",
          "type": "class"
        },
        "index": {
          "description": "monad which allows access to the connection All functions to access CouchDB require MonadCouch instance to access the connection information ReaderT is an instance of MonadCouch and runCouch runs sequence of database actions using ReaderT and ResourceT If your db code is part of larger monad it makes sense to just make the larger monad an instance of MonadCouch and skip the intermediate ReaderT since then performance is improved by eliminating one monad from the final transformer stack",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "MonadCouch",
          "package": "couchdb-conduit",
          "partial": "Monad Couch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:MonadCouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a path or path fragment.\n\u003c/p\u003e\u003cp\u003eAs a rule, full path to document in CouchDB is just URL path. But there is \n one subtlety. For example, document ids \u003cem\u003ecan\u003c/em\u003e contain slashes. But, \n to work with such objects, path fragments must be escaped.\n\u003c/p\u003e\u003cpre\u003e database/doc%2Fname\n\u003c/pre\u003e\u003cp\u003eBut, fo non-document items such as views, attachments e.t.c., slashes\n between path fragments \u003cem\u003emust not\u003c/em\u003e be escaped. While slashes in path \n fragments \u003cem\u003emust\u003c/em\u003e be escaped.\n\u003c/p\u003e\u003cpre\u003e database/_design/my%2Fdesign/_view/my%2Fview\n\u003c/pre\u003e\u003cp\u003eExcept low-level functions, \u003ccode\u003ecouchdb-conduit\u003c/code\u003e escapes all segments in paths.  \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "Path",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#Path",
          "type": "type"
        },
        "index": {
          "description": "Represents path or path fragment As rule full path to document in CouchDB is just URL path But there is one subtlety For example document ids can contain slashes But to work with such objects path fragments must be escaped database doc Fname But fo non-document items such as views attachments e.t.c slashes between path fragments must not be escaped While slashes in path fragments must be escaped database design my Fdesign view my Fview Except low-level functions couchdb-conduit escapes all segments in paths",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "Path",
          "package": "couchdb-conduit",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a revision of a CouchDB Document. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "Revision",
          "package": "couchdb-conduit",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#Revision",
          "type": "type"
        },
        "index": {
          "description": "Represents revision of CouchDB Document",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "Revision",
          "package": "couchdb-conduit",
          "partial": "Revision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError comes from http.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchHttpError",
          "package": "couchdb-conduit",
          "signature": "CouchHttpError Int ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
          "type": "function"
        },
        "index": {
          "description": "Error comes from http",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchHttpError",
          "package": "couchdb-conduit",
          "partial": "Couch Http Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:CouchHttpError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-http errors include things like errors  \n   parsing the response.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchInternalError",
          "package": "couchdb-conduit",
          "signature": "CouchInternalError ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
          "type": "function"
        },
        "index": {
          "description": "Non-http errors include things like errors parsing the response",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "CouchInternalError",
          "package": "couchdb-conduit",
          "partial": "Couch Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:CouchInternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eIs not an error actually\u003c/em\u003e. It is thrown when CouchDB returns \n   \u003ccode\u003e304 - Not Modified\u003c/code\u003e response to the request. See \n   \u003ca\u003ehttp://wiki.apache.org/couchdb/HTTP_Document_API\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "NotModified",
          "package": "couchdb-conduit",
          "signature": "NotModified",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
          "type": "function"
        },
        "index": {
          "description": "Is not an error actually It is thrown when CouchDB returns Not Modified response to the request See http wiki.apache.org couchdb HTTP Document API",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "NotModified",
          "package": "couchdb-conduit",
          "partial": "Not Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:NotModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Conduit",
          "name": "couchConnection",
          "package": "couchdb-conduit",
          "signature": "m (Manager, CouchConnection)",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchConnection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchConnection",
          "normalized": "a(Manager,CouchConnection)",
          "package": "couchdb-conduit",
          "partial": "Connection",
          "signature": "m(Manager,CouchConnection)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the given revision of the object.  \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchDelete",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e Revision-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Delete the given revision of the object",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchDelete",
          "normalized": "Path-\u003ePath-\u003eRevision-\u003ea()",
          "package": "couchdb-conduit",
          "partial": "Delete",
          "signature": "Path-\u003ePath-\u003eRevision-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHostname. Default value is \"localhost\"\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchHost",
          "package": "couchdb-conduit",
          "signature": "CouchConnection -\u003e ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchHost",
          "type": "function"
        },
        "index": {
          "description": "Hostname Default value is localhost",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchHost",
          "normalized": "CouchConnection-\u003eByteString",
          "package": "couchdb-conduit",
          "partial": "Host",
          "signature": "CouchConnection-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB login. By default is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchLogin",
          "package": "couchdb-conduit",
          "signature": "CouchConnection -\u003e ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchLogin",
          "type": "function"
        },
        "index": {
          "description": "CouchDB login By default is empty",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchLogin",
          "normalized": "CouchConnection-\u003eByteString",
          "package": "couchdb-conduit",
          "partial": "Login",
          "signature": "CouchConnection-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB password. By default is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPass",
          "package": "couchdb-conduit",
          "signature": "CouchConnection -\u003e ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPass",
          "type": "function"
        },
        "index": {
          "description": "CouchDB password By default is empty",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPass",
          "normalized": "CouchConnection-\u003eByteString",
          "package": "couchdb-conduit",
          "partial": "Pass",
          "signature": "CouchConnection-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort. 5984 by default.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPort",
          "package": "couchdb-conduit",
          "signature": "CouchConnection -\u003e Int",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPort",
          "type": "function"
        },
        "index": {
          "description": "Port by default",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPort",
          "normalized": "CouchConnection-\u003eInt",
          "package": "couchdb-conduit",
          "partial": "Port",
          "signature": "CouchConnection-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB database prefix. It will prepended to first fragment of\n   request path. Must be fully valid DB name fragment.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPrefix",
          "package": "couchdb-conduit",
          "signature": "CouchConnection -\u003e ByteString",
          "source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPrefix",
          "type": "function"
        },
        "index": {
          "description": "CouchDB database prefix It will prepended to first fragment of request path Must be fully valid DB name fragment",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchPrefix",
          "normalized": "CouchConnection-\u003eByteString",
          "package": "couchdb-conduit",
          "partial": "Prefix",
          "signature": "CouchConnection-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Revision of a document.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchRev",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Get Revision of document",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchRev",
          "normalized": "Path-\u003ePath-\u003ea Revision",
          "package": "couchdb-conduit",
          "partial": "Rev",
          "signature": "Path-\u003ePath-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchRev\u003c/a\u003e\u003c/code\u003e. If document absent, \n   just return empty ByteString.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "couchRev'",
          "package": "couchdb-conduit",
          "signature": "Path-\u003e Path-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Brain-free version of couchRev If document absent just return empty ByteString",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "couchRev'",
          "normalized": "Path-\u003ePath-\u003ea Revision",
          "package": "couchdb-conduit",
          "partial": "Rev'",
          "signature": "Path-\u003ePath-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchRev-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "def",
          "package": "couchdb-conduit",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "def",
          "package": "couchdb-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake correct path and escape fragments. Filter empty fragments.\n\u003c/p\u003e\u003cpre\u003e mkPath [\"db\", \"\", \"doc/with/slashes\"]\n /db/doc%2Fwith%2Fslashes\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "mkPath",
          "package": "couchdb-conduit",
          "signature": "[Path]-\u003e Path",
          "type": "function"
        },
        "index": {
          "description": "Make correct path and escape fragments Filter empty fragments mkPath db doc with slashes db doc Fwith Fslashes",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "mkPath",
          "normalized": "[Path]-\u003ePath",
          "package": "couchdb-conduit",
          "partial": "Path",
          "signature": "[Path]-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:mkPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a CouchDB server, run a sequence of CouchDB actions, and then \n   close the connection.. This function is a combination of \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e, \n   \u003ccode\u003e\u003ca\u003ewithCouchConnection\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you create your own instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e or use connection pool, \n   use \u003ccode\u003e\u003ca\u003ewithCouchConnection\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "runCouch",
          "package": "couchdb-conduit",
          "signature": "CouchConnection-\u003e ReaderT (Manager, CouchConnection) (ResourceT m) a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Connect to CouchDB server run sequence of CouchDB actions and then close the connection This function is combination of withManager withCouchConnection runReaderT and runResourceT If you create your own instance of MonadCouch or use connection pool use withCouchConnection",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "runCouch",
          "normalized": "CouchConnection-\u003eReaderT(Manager,CouchConnection)(ResourceT a)b-\u003ea b",
          "package": "couchdb-conduit",
          "partial": "Couch",
          "signature": "CouchConnection-\u003eReaderT(Manager,CouchConnection)(ResourceT m)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:runCouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a sequence of CouchDB actions with provided \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eCouchConnection\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e withCouchConnection manager def {couchDB = \"db\"} . runReaderT . \n          runResourceT . lift $ do\n    ... -- actions\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Conduit",
          "name": "withCouchConnection",
          "package": "couchdb-conduit",
          "signature": "Manager-\u003e CouchConnection-\u003e ((Manager, CouchConnection) -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run sequence of CouchDB actions with provided Manager and CouchConnection withCouchConnection manager def couchDB db runReaderT runResourceT lift do actions",
          "hierarchy": "Database CouchDB Conduit",
          "module": "Database.CouchDB.Conduit",
          "name": "withCouchConnection",
          "normalized": "Manager-\u003eCouchConnection-\u003e((Manager,CouchConnection)-\u003ea b)-\u003ea b",
          "package": "couchdb-conduit",
          "partial": "Couch Connection",
          "signature": "Manager-\u003eCouchConnection-\u003e((Manager,CouchConnection)-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:withCouchConnection"
      }
    }
  ]
]