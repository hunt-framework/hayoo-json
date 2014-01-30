[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB document attachments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote about attachment paths:\u003c/em\u003e Attachments may have embedded \u003ccode\u003e/\u003c/code\u003e \n   characters that are sent unescaped to CouchDB. You can use this to \n   provide a subtree of attachments under a document. A DocID must have \n   any \u003ccode\u003e/\u003c/code\u003e escaped as \u003ccode\u003e%2F\u003c/code\u003e. So if you have document \u003ccode\u003ea/b/c\u003c/code\u003e with an \n   attachment \u003ccode\u003ed/e/f.txt\u003c/code\u003e, you would be able to access it at \n   \u003ccode\u003ehttp://couchdb/db/a%2fb%2fc/d/e/f.txt\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecouchdb-conduit\u003c/code\u003e automaticaly normalizes attachment paths.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.Attachment",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-Attachment.html",
        "fct-type": "module",
        "title": "Attachment"
      },
      "index": {
        "description": "CouchDB document attachments Note about attachment paths Attachments may have embedded characters that are sent unescaped to CouchDB You can use this to provide subtree of attachments under document DocID must have any escaped as So if you have document with an attachment f.txt you would be able to access it at http couchdb db fb fc f.txt couchdb-conduit automaticaly normalizes attachment paths",
        "hierarchy": "Database CouchDB Conduit Attachment",
        "module": "Database.CouchDB.Conduit.Attachment",
        "name": "Attachment",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Attachment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchDeleteAttach",
      "description": {
        "fct-descr": "\u003cp\u003eDelete document attachment\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Attachment",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e ByteString-\u003e Revision-\u003e m Revision",
        "fct-type": "function",
        "title": "couchDeleteAttach"
      },
      "index": {
        "description": "Delete document attachment",
        "hierarchy": "Database CouchDB Conduit Attachment",
        "module": "Database.CouchDB.Conduit.Attachment",
        "name": "couchDeleteAttach",
        "normalized": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003ea Revision",
        "package": "couchdb-conduit",
        "partial": "Delete Attach",
        "signature": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchGetAttach",
      "description": {
        "fct-descr": "\u003cp\u003eGet document attachment and \u003ccode\u003eContent-Type\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Attachment",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e ByteString-\u003e m (ResumableSource m ByteString, ByteString)",
        "fct-type": "function",
        "title": "couchGetAttach"
      },
      "index": {
        "description": "Get document attachment and Content-Type",
        "hierarchy": "Database CouchDB Conduit Attachment",
        "module": "Database.CouchDB.Conduit.Attachment",
        "name": "couchGetAttach",
        "normalized": "Path-\u003ePath-\u003eByteString-\u003ea(ResumableSource a ByteString,ByteString)",
        "package": "couchdb-conduit",
        "partial": "Get Attach",
        "signature": "Path-\u003ePath-\u003eByteString-\u003em(ResumableSource m ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Attachment.html#v:couchPutAttach",
      "description": {
        "fct-descr": "\u003cp\u003ePut or update document attachment\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Attachment",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e ByteString-\u003e Revision-\u003e ByteString-\u003e RequestBody m-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPutAttach"
      },
      "index": {
        "description": "Put or update document attachment",
        "hierarchy": "Database CouchDB Conduit Attachment",
        "module": "Database.CouchDB.Conduit.Attachment",
        "name": "couchPutAttach",
        "normalized": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003eByteString-\u003eRequestBody a-\u003ea Revision",
        "package": "couchdb-conduit",
        "partial": "Put Attach",
        "signature": "Path-\u003ePath-\u003eByteString-\u003eRevision-\u003eByteString-\u003eRequestBody m-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB database methods.\n\u003c/p\u003e\u003cpre\u003e runCouch def {couchDB=\"my_db\"} $ couchPutDb\n runCouch def {couchDB=\"my_new_db\"} $ couchPutDb\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-DB.html",
        "fct-type": "module",
        "title": "DB"
      },
      "index": {
        "description": "CouchDB database methods runCouch def couchDB my db couchPutDb runCouch def couchDB my new db couchPutDb",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "DB",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchDeleteDB",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a database.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e m ()",
        "fct-type": "function",
        "title": "couchDeleteDB"
      },
      "index": {
        "description": "Delete database",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "couchDeleteDB",
        "normalized": "Path-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Delete DB",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchPutDB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate CouchDB database. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e m ()",
        "fct-type": "function",
        "title": "couchPutDB"
      },
      "index": {
        "description": "Create CouchDB database",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "couchPutDB",
        "normalized": "Path-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Put DB",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchPutDB_",
      "description": {
        "fct-descr": "\u003cp\u003e\"Don't care\" version of couchPutDb. Create CouchDB database only in its \n   absence. For this it handles \u003ccode\u003e412\u003c/code\u003e responses.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e m ()",
        "fct-type": "function",
        "title": "couchPutDB_"
      },
      "index": {
        "description": "Don care version of couchPutDb Create CouchDB database only in its absence For this it handles responses",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "couchPutDB_",
        "normalized": "Path-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Put DB",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchReplicateDB",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase replication. \n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://guide.couchdb.org/editions/1/en/api.html#replication\u003c/a\u003e for \n   details.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Bool-\u003e Bool-\u003e Bool-\u003e m ()",
        "fct-type": "function",
        "title": "couchReplicateDB"
      },
      "index": {
        "description": "Database replication See http guide.couchdb.org editions en api.html replication for details",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "couchReplicateDB",
        "normalized": "ByteString-\u003eByteString-\u003eBool-\u003eBool-\u003eBool-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Replicate DB",
        "signature": "ByteString-\u003eByteString-\u003eBool-\u003eBool-\u003eBool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-DB.html#v:couchSecureDB",
      "description": {
        "fct-descr": "\u003cp\u003eMaintain DB security.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.DB",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e [ByteString]-\u003e [ByteString]-\u003e [ByteString]-\u003e [ByteString]-\u003e m ()",
        "fct-type": "function",
        "title": "couchSecureDB"
      },
      "index": {
        "description": "Maintain DB security",
        "hierarchy": "Database CouchDB Conduit DB",
        "module": "Database.CouchDB.Conduit.DB",
        "name": "couchSecureDB",
        "normalized": "Path-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Secure DB",
        "signature": "Path-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003e[ByteString]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Design.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-level API for CouchDB design documents. These methods are very \n   convenient for bootstrapping and testing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.Design",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-Design.html",
        "fct-type": "module",
        "title": "Design"
      },
      "index": {
        "description": "High-level API for CouchDB design documents These methods are very convenient for bootstrapping and testing",
        "hierarchy": "Database CouchDB Conduit Design",
        "module": "Database.CouchDB.Conduit.Design",
        "name": "Design",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Design",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Design.html#v:couchPutView",
      "description": {
        "fct-descr": "\u003cp\u003ePut view to design document. If design document does not exist, \n   it will be created. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Design",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Path-\u003e ByteString-\u003e Maybe ByteString-\u003e m ()",
        "fct-type": "function",
        "title": "couchPutView"
      },
      "index": {
        "description": "Put view to design document If design document does not exist it will be created",
        "hierarchy": "Database CouchDB Conduit Design",
        "module": "Database.CouchDB.Conduit.Design",
        "name": "couchPutView",
        "normalized": "Path-\u003ePath-\u003ePath-\u003eByteString-\u003eMaybe ByteString-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Put View",
        "signature": "Path-\u003ePath-\u003ePath-\u003eByteString-\u003eMaybe ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExplicit methods for CouchDB documents. Documents represents in \"good\n   old\" aeson manner through \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}\n\n import Control.Applicative ((\u003c$\u003e), (\u003c*\u003e))\n import Control.Monad.IO.Class (liftIO)\n import Data.Aeson\n import Database.CouchDB.Conduit\n import Database.CouchDB.Conduit.Explicit\n\n -- | Our doc with instances\n data D = D { f1 :: Int, f2 :: String } deriving (Show)\n \n instance FromJSON D where\n    parseJSON (Object v) = D \u003c$\u003e v .: \"f1\" \u003c*\u003e v .: \"f2\"\n    parseJSON _          = mzero\n\n instance ToJSON D where\n    toJSON (D f1 f2) = object [\"f1\" .= f1, \"f2\" .= f2]\n \n runCouch def $ do\n    -- Put new doc and update it\n    rev1 \u003c- couchPut \"mydb\" \"my-doc1\" \"\" [] $ D 123 \"str\"         \n    rev2 \u003c- couchPut \"mydb\" \"my-doc1\" rev1 [] $ D 1234 \"another\"\n\n    -- get it and print\n    (rev3, d1 :: D) \u003c- couchGet \"mydb\" \"my-doc1\" [] \n    liftIO $ print d1\n\n    -- update it in brute-force manner    \n    couchPut' \"mydb\" \"my-doc1\" [] $ D 12345 \"third\"    -- notice - no rev\n    \n    -- get revision and delete\n    rev3 \u003c- couchRev \"mydb\" \"my-doc1\"\n    couchDelete \"mydb\" \"my-doc1\" rev3\n\u003c/pre\u003e\u003cp\u003eFor details of types see \u003ca\u003eData.Aeson\u003c/a\u003e. To work with documents in \n   generic manner, look at \u003ca\u003eDatabase.CouchDB.Conduit.Generic\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-Explicit.html",
        "fct-type": "module",
        "title": "Explicit"
      },
      "index": {
        "description": "Explicit methods for CouchDB documents Documents represents in good old aeson manner through ToJSON and FromJSON LANGUAGE OverloadedStrings ScopedTypeVariables import Control.Applicative import Control.Monad.IO.Class liftIO import Data.Aeson import Database.CouchDB.Conduit import Database.CouchDB.Conduit.Explicit Our doc with instances data f1 Int f2 String deriving Show instance FromJSON where parseJSON Object f1 f2 parseJSON mzero instance ToJSON where toJSON f1 f2 object f1 f1 f2 f2 runCouch def do Put new doc and update it rev1 couchPut mydb my-doc1 str rev2 couchPut mydb my-doc1 rev1 another get it and print rev3 d1 couchGet mydb my-doc1 liftIO print d1 update it in brute-force manner couchPut mydb my-doc1 third notice no rev get revision and delete rev3 couchRev mydb my-doc1 couchDelete mydb my-doc1 rev3 For details of types see Data.Aeson To work with documents in generic manner look at Database.CouchDB.Conduit.Generic",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "Explicit",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Explicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchGet",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a single \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e object with \u003ccode\u003e\u003ca\u003eRevision\u003c/a\u003e\u003c/code\u003e from couch DB. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
        "fct-type": "function",
        "title": "couchGet"
      },
      "index": {
        "description": "Load single ToJSON object with Revision from couch DB",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "couchGet",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea(Revision,b)",
        "package": "couchdb-conduit",
        "partial": "Get",
        "signature": "Path-\u003ePath-\u003eQuery-\u003em(Revision,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut",
      "description": {
        "fct-descr": "\u003cp\u003ePut an \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e object in Couch DB with revision, returning the \n   new \u003ccode\u003e\u003ca\u003eRevision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut"
      },
      "index": {
        "description": "Put an FromJSON object in Couch DB with revision returning the new Revision",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "couchPut",
        "normalized": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates a document regardless of \n   presence. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut'"
      },
      "index": {
        "description": "Brute force version of couchPut Creates document regardless of presence",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "couchPut'",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put'",
        "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:couchPut_",
      "description": {
        "fct-descr": "\u003cp\u003e\"Don't care\" version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates document only in its \n   absence.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut_"
      },
      "index": {
        "description": "Don care version of couchPut Creates document only in its absence",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "couchPut_",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Explicit.html#v:toType",
      "description": {
        "fct-descr": "\u003cp\u003eConvert CouchDB view row or row value from \u003ca\u003eDatabase.CouchDB.Conduit.View\u003c/a\u003e \n   to concrete \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cpre\u003e res \u003c- couchView \"mydesign\" \"myview\" [] $ rowValue =$= toType =$ consume\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.Explicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Conduit Value m a",
        "fct-source": "src/Database-CouchDB-Conduit-Explicit.html#toType",
        "fct-type": "function",
        "title": "toType"
      },
      "index": {
        "description": "Convert CouchDB view row or row value from Database.CouchDB.Conduit.View to concrete FromJSON type res couchView mydesign myview rowValue toType consume",
        "hierarchy": "Database CouchDB Conduit Explicit",
        "module": "Database.CouchDB.Conduit.Explicit",
        "name": "toType",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric methods for CouchDB documents. Unlike explicit, generic methods \n   uses \u003ca\u003eData.Generics\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveDataTypeable #-}\n {-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}\n\n import Control.Monad.IO.Class (liftIO)\n import Data.Generic (Data, Typeable)\n import Database.CouchDB.Conduit\n import Database.CouchDB.Conduit.Generic\n\n -- | Our doc with instances\n data D = D { f1 :: Int, f2 :: String } deriving (Show, Data, Typeable)\n \n runCouch def $ do\n    -- Put new doc and update it\n    rev1 \u003c- couchPut \"mydb\" \"my-doc1\" \"\" [] $ D 123 \"str\"         \n    rev2 \u003c- couchPut \"mydb\" \"my-doc1\" rev1 [] $ D 1234 \"another\"\n\n    -- get it and print\n    (rev3, d1 :: D) \u003c- couchGet \"mydb\" \"my-doc1\" [] \n    liftIO $ print d1\n\n    -- update it in brute-force manner    \n    couchPut' \"mydb\" \"my-doc1\" [] $ D 12345 \"third\"    -- notice - no rev\n    \n    -- get revision and delete\n    rev3 \u003c- couchRev \"mydb\" \"my-doc1\"\n    couchDelete \"mydb\" \"my-doc1\" rev3\n\u003c/pre\u003e\u003cp\u003eThe main advantage of this approach in the absence of tonns of  \n   boilerplate code. The main disadvantage is inability to influence the \n   process of translation to and from JSON.\n\u003c/p\u003e\u003cp\u003eFor details of types see \u003ca\u003eData.Aeson.Generic\u003c/a\u003e. To work with documents in \n   explicit manner, look at \u003ca\u003eDatabase.CouchDB.Conduit.Explicit\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "Generic methods for CouchDB documents Unlike explicit generic methods uses Data.Generics LANGUAGE DeriveDataTypeable LANGUAGE OverloadedStrings ScopedTypeVariables import Control.Monad.IO.Class liftIO import Data.Generic Data Typeable import Database.CouchDB.Conduit import Database.CouchDB.Conduit.Generic Our doc with instances data f1 Int f2 String deriving Show Data Typeable runCouch def do Put new doc and update it rev1 couchPut mydb my-doc1 str rev2 couchPut mydb my-doc1 rev1 another get it and print rev3 d1 couchGet mydb my-doc1 liftIO print d1 update it in brute-force manner couchPut mydb my-doc1 third notice no rev get revision and delete rev3 couchRev mydb my-doc1 couchDelete mydb my-doc1 rev3 The main advantage of this approach in the absence of tonns of boilerplate code The main disadvantage is inability to influence the process of translation to and from JSON For details of types see Data.Aeson.Generic To work with documents in explicit manner look at Database.CouchDB.Conduit.Explicit",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchGet",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a single object from couch DB.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
        "fct-type": "function",
        "title": "couchGet"
      },
      "index": {
        "description": "Load single object from couch DB",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "couchGet",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea(Revision,b)",
        "package": "couchdb-conduit",
        "partial": "Get",
        "signature": "Path-\u003ePath-\u003eQuery-\u003em(Revision,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut",
      "description": {
        "fct-descr": "\u003cp\u003ePut an object in Couch DB with revision, returning the new Revision.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut"
      },
      "index": {
        "description": "Put an object in Couch DB with revision returning the new Revision",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "couchPut",
        "normalized": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "Path-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates a document regardless of \n   presence. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut'"
      },
      "index": {
        "description": "Brute force version of couchPut Creates document regardless of presence",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "couchPut'",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put'",
        "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:couchPut_",
      "description": {
        "fct-descr": "\u003cp\u003e\"Don't care\" version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates document only in its \n   absence.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut_"
      },
      "index": {
        "description": "Don care version of couchPut Creates document only in its absence",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "couchPut_",
        "normalized": "Path-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "Path-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Generic.html#v:toType",
      "description": {
        "fct-descr": "\u003cp\u003eConvert CouchDB view row or row value from \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e \n   to concrete type.\n\u003c/p\u003e\u003cpre\u003e res \u003c- couchView \"mydesign\" \"myview\" [] $ rowValue =$= toType =$ consume\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.Generic",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Conduit Value m a",
        "fct-source": "src/Database-CouchDB-Conduit-Generic.html#toType",
        "fct-type": "function",
        "title": "toType"
      },
      "index": {
        "description": "Convert CouchDB view row or row value from View to concrete type res couchView mydesign myview rowValue toType consume",
        "hierarchy": "Database CouchDB Conduit Generic",
        "module": "Database.CouchDB.Conduit.Generic",
        "name": "toType",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplicit methods for CouchDB documents.\n\u003c/p\u003e\u003cp\u003eAll implicit methods needs parser or encoder.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.Implicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-Implicit.html",
        "fct-type": "module",
        "title": "Implicit"
      },
      "index": {
        "description": "Implicit methods for CouchDB documents All implicit methods needs parser or encoder",
        "hierarchy": "Database CouchDB Conduit Implicit",
        "module": "Database.CouchDB.Conduit.Implicit",
        "name": "Implicit",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchGet",
      "description": {
        "fct-descr": "\u003cp\u003eLoad CouchDB document and parse it with given parser.\n\u003c/p\u003e\u003cpre\u003e (rev, rawJson) \u003c- couchGet Success \"mydb\" mydoc []\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.Implicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "(Value -\u003e Result a)-\u003e Path-\u003e Path-\u003e Query-\u003e m (Revision, a)",
        "fct-type": "function",
        "title": "couchGet"
      },
      "index": {
        "description": "Load CouchDB document and parse it with given parser rev rawJson couchGet Success mydb mydoc",
        "hierarchy": "Database CouchDB Conduit Implicit",
        "module": "Database.CouchDB.Conduit.Implicit",
        "name": "couchGet",
        "normalized": "(Value-\u003eResult a)-\u003ePath-\u003ePath-\u003eQuery-\u003eb(Revision,a)",
        "package": "couchdb-conduit",
        "partial": "Get",
        "signature": "(Value-\u003eResult a)-\u003ePath-\u003ePath-\u003eQuery-\u003em(Revision,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut",
      "description": {
        "fct-descr": "\u003cp\u003ePut document, with given encoder\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Implicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut"
      },
      "index": {
        "description": "Put document with given encoder",
        "hierarchy": "Database CouchDB Conduit Implicit",
        "module": "Database.CouchDB.Conduit.Implicit",
        "name": "couchPut",
        "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates a document regardless of \n   presence. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Implicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut'"
      },
      "index": {
        "description": "Brute force version of couchPut Creates document regardless of presence",
        "hierarchy": "Database CouchDB Conduit Implicit",
        "module": "Database.CouchDB.Conduit.Implicit",
        "name": "couchPut'",
        "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put'",
        "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-Implicit.html#v:couchPut_",
      "description": {
        "fct-descr": "\u003cp\u003e\"Don't care\" version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Creates document only in its \n   absence.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.Implicit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "(a -\u003e ByteString)-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m Revision",
        "fct-type": "function",
        "title": "couchPut_"
      },
      "index": {
        "description": "Don care version of couchPut Creates document only in its absence",
        "hierarchy": "Database CouchDB Conduit Implicit",
        "module": "Database.CouchDB.Conduit.Implicit",
        "name": "couchPut_",
        "normalized": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb Revision",
        "package": "couchdb-conduit",
        "partial": "Put",
        "signature": "(a-\u003eByteString)-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level method and tools of accessing CouchDB.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-LowLevel.html",
        "fct-type": "module",
        "title": "LowLevel"
      },
      "index": {
        "description": "Low-level method and tools of accessing CouchDB",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "LowLevel",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Low Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#t:CouchResponse",
      "description": {
        "fct-descr": "\u003cp\u003eCouchDB response\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "type",
        "fct-source": "src/Database-CouchDB-Conduit-LowLevel.html#CouchResponse",
        "fct-type": "type",
        "title": "CouchResponse"
      },
      "index": {
        "description": "CouchDB response",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "CouchResponse",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:couch",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general method of accessing CouchDB.  This is a very thin wrapper \n   around \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.  Most of the time you should use one of the other access \n   functions, but this function is needed for example to write and read \n   attachments that are not in JSON format.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Method-\u003e Path-\u003e RequestHeaders-\u003e Query-\u003e RequestBody m-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e m (CouchResponse m)",
        "fct-type": "function",
        "title": "couch"
      },
      "index": {
        "description": "The most general method of accessing CouchDB This is very thin wrapper around http Most of the time you should use one of the other access functions but this function is needed for example to write and read attachments that are not in JSON format",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "couch",
        "normalized": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody a-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003ea(CouchResponse a)",
        "package": "couchdb-conduit",
        "partial": "",
        "signature": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody m-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003em(CouchResponse m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:couch-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMore generalized version of \u003ccode\u003e\u003ca\u003ecouch\u003c/a\u003e\u003c/code\u003e. Instead \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e it takes function\n   what takes prefix and returns a path.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Method-\u003e (Path -\u003e Path)-\u003e RequestHeaders-\u003e Query-\u003e RequestBody m-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e m (CouchResponse m)",
        "fct-type": "function",
        "title": "couch'"
      },
      "index": {
        "description": "More generalized version of couch Instead Path it takes function what takes prefix and returns path",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "couch'",
        "normalized": "Method-\u003e(Path-\u003ePath)-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody a-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003ea(CouchResponse a)",
        "package": "couchdb-conduit",
        "partial": "",
        "signature": "Method-\u003e(Path-\u003ePath)-\u003eRequestHeaders-\u003eQuery-\u003eRequestBody m-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003em(CouchResponse m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:protect",
      "description": {
        "fct-descr": "\u003cp\u003eProtect \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from bad status codes. If status code in list \n   of status codes - just return response. Otherwise - throw \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstead \u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e parses CouchDB response body JSON and\n   extract \"reason\" message.\n\u003c/p\u003e\u003cp\u003eTo protect from typical errors use \u003ccode\u003e\u003ca\u003eprotect'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "[Int]-\u003e (CouchResponse m -\u003e m (CouchResponse m))-\u003e CouchResponse m-\u003e m (CouchResponse m)",
        "fct-type": "function",
        "title": "protect"
      },
      "index": {
        "description": "Protect Response from bad status codes If status code in list of status codes just return response Otherwise throw CouchError Instead checkStatus protect parses CouchDB response body JSON and extract reason message To protect from typical errors use protect",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "protect",
        "normalized": "[Int]-\u003e(CouchResponse a-\u003ea(CouchResponse a))-\u003eCouchResponse a-\u003ea(CouchResponse a)",
        "package": "couchdb-conduit",
        "partial": "",
        "signature": "[Int]-\u003e(CouchResponse m-\u003em(CouchResponse m))-\u003eCouchResponse m-\u003em(CouchResponse m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-LowLevel.html#v:protect-39-",
      "description": {
        "fct-descr": "\u003cp\u003eProtect from typical status codes. It's equivalent of\n\u003c/p\u003e\u003cpre\u003e protect [200, 201, 202, 304] return\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eprotect\u003c/a\u003e\u003c/code\u003e for details.       \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.LowLevel",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchResponse m-\u003e m (CouchResponse m)",
        "fct-type": "function",
        "title": "protect'"
      },
      "index": {
        "description": "Protect from typical status codes It equivalent of protect return See protect for details",
        "hierarchy": "Database CouchDB Conduit LowLevel",
        "module": "Database.CouchDB.Conduit.LowLevel",
        "name": "protect'",
        "normalized": "CouchResponse a-\u003ea(CouchResponse a)",
        "package": "couchdb-conduit",
        "partial": "",
        "signature": "CouchResponse m-\u003em(CouchResponse m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB View Query options.\n\u003c/p\u003e\u003cp\u003eFor details see \n   \u003ca\u003ehttp://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options\u003c/a\u003e. Note, \n   because all options must be a proper URL encoded JSON, construction of \n   complex parameters can be very tedious. To simplify this, use \u003ccode\u003e\u003ca\u003emkQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "CouchDB View Query options For details see http wiki.apache.org couchdb HTTP view API Querying Options Note because all options must be proper URL encoded JSON construction of complex parameters can be very tedious To simplify this use mkQuery",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "Query",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#t:CouchQP",
      "description": {
        "fct-descr": "\u003cp\u003eCouchDB Query options primitives.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "data",
        "title": "CouchQP"
      },
      "index": {
        "description": "CouchDB Query options primitives",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "CouchQP",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch QP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPBS",
      "description": {
        "fct-descr": "\u003cp\u003eQuoted \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=\"value\" \n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPBS ByteString ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPBS"
      },
      "index": {
        "description": "Quoted ByteString query parameter param value",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPBS",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPBool",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=true\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPBool ByteString Bool",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPBool"
      },
      "index": {
        "description": "Bool query parameter param true",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPBool",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPComplex",
      "description": {
        "fct-descr": "\u003cp\u003eComplex view query parameter.  \n\u003c/p\u003e\u003cpre\u003e couchQP [QPComplex \"param\" ([\"a\", \"b\"] :: [String])]\n [(\"param\", Just \"[\\\"a\\\",\\\"b\\\"]\")]\n ...?param=[\"a\",\"b\"]\n \n couchQP [QPComplex \"key\" ((\"a\", 1) :: (String, Int))]\n [(\"key\", Just \"[\\\"a\\\",0]\")]\n ...?param=[\"a\",0]\n\u003c/pre\u003e\u003cp\u003eIt't just convert lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e to strict \n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. For more efficient use specific functions. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPComplex ByteString a",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPComplex"
      },
      "index": {
        "description": "Complex view query parameter couchQP QPComplex param String param Just param couchQP QPComplex key String Int key Just param It just convert lazy ByteString from encode to strict ByteString For more efficient use specific functions",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPComplex",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPComplex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPDescending",
      "description": {
        "fct-descr": "\u003cp\u003eReverse rows output.\n\u003c/p\u003e\u003cpre\u003e ...?descending=true \n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPDescending",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPDescending"
      },
      "index": {
        "description": "Reverse rows output descending true",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPDescending",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPDescending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPEndKey",
      "description": {
        "fct-descr": "\u003cp\u003eRow key to start with. Becomes \u003ccode\u003estartkey\u003c/code\u003e if \u003ccode\u003edescending\u003c/code\u003e \n   turned on. See \u003ccode\u003ecouchQuery\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e ...?endkey=...\n ...?descending=true?startkey=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPEndKey a",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPEndKey"
      },
      "index": {
        "description": "Row key to start with Becomes startkey if descending turned on See couchQuery endkey descending true startkey",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPEndKey",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPEnd Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPEndKeyDocId",
      "description": {
        "fct-descr": "\u003cp\u003eDocument id to end with.\n\u003c/p\u003e\u003cpre\u003e ...?endkey_docid=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPEndKeyDocId Path",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPEndKeyDocId"
      },
      "index": {
        "description": "Document id to end with endkey docid",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPEndKeyDocId",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPEnd Key Doc Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPGroup",
      "description": {
        "fct-descr": "\u003cp\u003eTurn on grouping.\n\u003c/p\u003e\u003cpre\u003e ...?group=true\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPGroup",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPGroup"
      },
      "index": {
        "description": "Turn on grouping group true",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPGroup",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPGroup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPGroupLevel",
      "description": {
        "fct-descr": "\u003cp\u003eSet grouping level. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?group_level=2\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPGroupLevel Int",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPGroupLevel"
      },
      "index": {
        "description": "Set grouping level Use Zero to omit group level",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPGroupLevel",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPGroup Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPIncludeDocs",
      "description": {
        "fct-descr": "\u003cp\u003eTurn on inclusion docs in view results.\n\u003c/p\u003e\u003cpre\u003e ...?include_docs=true\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPIncludeDocs",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPIncludeDocs"
      },
      "index": {
        "description": "Turn on inclusion docs in view results include docs true",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPIncludeDocs",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPInclude Docs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPInclusiveEnd",
      "description": {
        "fct-descr": "\u003cp\u003eTurn off inclusion \u003ccode\u003eendkey\u003c/code\u003e in view results.\n\u003c/p\u003e\u003cpre\u003e ...?inclusive_end=false\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPInclusiveEnd",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPInclusiveEnd"
      },
      "index": {
        "description": "Turn off inclusion endkey in view results inclusive end false",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPInclusiveEnd",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPInclusive End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?param=100 \n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPInt ByteString Int",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPInt"
      },
      "index": {
        "description": "Int query parameter param",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPInt",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ekey\u003c/code\u003e query parameter.\n\u003c/p\u003e\u003cpre\u003e ...?key=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPKey a",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPKey"
      },
      "index": {
        "description": "key query parameter key",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPKey",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPKeys",
      "description": {
        "fct-descr": "\u003cp\u003eRow key to start with. Use only with \u003ccode\u003ecouchView\u003c/code\u003e and \n   \u003ccode\u003ecouchView_\u003c/code\u003e. For large sets of \u003ccode\u003ekeys\u003c/code\u003e use \u003ccode\u003ecouchViewPost\u003c/code\u003e and \n   \u003ccode\u003ecouchViewPost_\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e ...?keys=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPKeys a",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPKeys"
      },
      "index": {
        "description": "Row key to start with Use only with couchView and couchView For large sets of keys use couchViewPost and couchViewPost keys",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPKeys",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPKeys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPLimit",
      "description": {
        "fct-descr": "\u003cp\u003eLimit rows. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?limit=5 \n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPLimit Int",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPLimit"
      },
      "index": {
        "description": "Limit rows Use Zero to omit limit",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPLimit",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPLimit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPReduce",
      "description": {
        "fct-descr": "\u003cp\u003eControl reduce.\n\u003c/p\u003e\u003cpre\u003e ...?reduce=true\n ...?reduce=false\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPReduce Bool",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPReduce"
      },
      "index": {
        "description": "Control reduce reduce true reduce false",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPReduce",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPReduce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPSkip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip rows. Use \u003ccode\u003eZero (0)\u003c/code\u003e to omit.\n\u003c/p\u003e\u003cpre\u003e ...?skip=10\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPSkip Int",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPSkip"
      },
      "index": {
        "description": "Skip rows Use Zero to omit skip",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPSkip",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPSkip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStale",
      "description": {
        "fct-descr": "\u003cp\u003eStale view. On \u003ccode\u003eTrue\u003c/code\u003e sets \u003ccode\u003estale\u003c/code\u003e parameter to \u003ccode\u003eok\u003c/code\u003e, else \n   sets it to \u003ccode\u003eupdate_after\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ...?stale=ok\n ...?stale=update_after\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPStale Bool",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPStale"
      },
      "index": {
        "description": "Stale view On True sets stale parameter to ok else sets it to update after stale ok stale update after",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPStale",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPStale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStartKey",
      "description": {
        "fct-descr": "\u003cp\u003eRow key to start with. Becomes \u003ccode\u003eendkey\u003c/code\u003e if \u003ccode\u003edescending\u003c/code\u003e turned on. \n   See \u003ccode\u003ecouchQuery\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e ...?startkey=...\n ...?descending=true?endkey=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPStartKey a",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPStartKey"
      },
      "index": {
        "description": "Row key to start with Becomes endkey if descending turned on See couchQuery startkey descending true endkey",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPStartKey",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPStart Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPStartKeyDocId",
      "description": {
        "fct-descr": "\u003cp\u003eDocument id to start with.\n\u003c/p\u003e\u003cpre\u003e ...?startkey_docid=...\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPStartKeyDocId Path",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPStartKeyDocId"
      },
      "index": {
        "description": "Document id to start with startkey docid",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPStartKeyDocId",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPStart Key Doc Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:QPUpdateSeq",
      "description": {
        "fct-descr": "\u003cp\u003eResponse includes an update_seq value indicating which sequence \n   id of the database the view reflects\n\u003c/p\u003e\u003cpre\u003e ...?update_seq=true\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "QPUpdateSeq",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#CouchQP",
        "fct-type": "function",
        "title": "QPUpdateSeq"
      },
      "index": {
        "description": "Response includes an update seq value indicating which sequence id of the database the view reflects update seq true",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "QPUpdateSeq",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "QPUpdate Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:mkQuery",
      "description": {
        "fct-descr": "\u003cp\u003eMake CouchDB query options.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "[CouchQP]-\u003e Query",
        "fct-type": "function",
        "title": "mkQuery"
      },
      "index": {
        "description": "Make CouchDB query options",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "mkQuery",
        "normalized": "[CouchQP]-\u003eQuery",
        "package": "couchdb-conduit",
        "partial": "Query",
        "signature": "[CouchQP]-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:qpNull",
      "description": {
        "fct-descr": "\u003cp\u003eSimply return \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Value",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#qpNull",
        "fct-type": "function",
        "title": "qpNull"
      },
      "index": {
        "description": "Simply return Null",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "qpNull",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View-Query.html#v:qpUnit",
      "description": {
        "fct-descr": "\u003cp\u003eReturns empty \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e. Aeson will convert \n   this to \u003ccode\u003e{}\u003c/code\u003e (JSON unit). This useful for \u003ccode\u003estartkey\u003c/code\u003e and \u003ccode\u003eendkey\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e couchQuery [QPStartKey (1, 0), QPEndKey (1, {})]\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View.Query",
        "fct-package": "couchdb-conduit",
        "fct-signature": "HashMap ByteString Bool",
        "fct-source": "src/Database-CouchDB-Conduit-View-Query.html#qpUnit",
        "fct-type": "function",
        "title": "qpUnit"
      },
      "index": {
        "description": "Returns empty HashMap Aeson will convert this to JSON unit This useful for startkey and endkey couchQuery QPStartKey QPEndKey",
        "hierarchy": "Database CouchDB Conduit View Query",
        "module": "Database.CouchDB.Conduit.View.Query",
        "name": "qpUnit",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-level functions to interact with CouchDB views.\n\u003c/p\u003e\u003cp\u003eTo automate creation of CouchDB Query Options see\n   \u003ca\u003eDatabase.CouchDB.Conduit.View.Query\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTo manipulate views in design documents see \n   \u003ca\u003eDatabase.CouchDB.Conduit.Design\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit-View.html",
        "fct-type": "module",
        "title": "View"
      },
      "index": {
        "description": "Higher-level functions to interact with CouchDB views To automate creation of CouchDB Query Options see Database.CouchDB.Conduit.View.Query To manipulate views in design documents see Database.CouchDB.Conduit.Design",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "View",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchView",
      "description": {
        "fct-descr": "\u003cp\u003eRun CouchDB view in manner like \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n\n     -- Print all upon receipt.\n     src \u003c- couchView \"mydb\" \"mydesign\" \"myview\" [] \n     src $$ CL.mapM_ (liftIO . print)\n\n     -- ... Or extract row value and consume\n     src' \u003c- couchView \"mydb\" \"mydesign\" \"myview\" [] \n     res \u003c- src' $= rowValue $$ CL.consume\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e m (Source m Object)",
        "fct-type": "function",
        "title": "couchView"
      },
      "index": {
        "description": "Run CouchDB view in manner like http runCouch def do Print all upon receipt src couchView mydb mydesign myview src CL.mapM liftIO print Or extract row value and consume src couchView mydb mydesign myview res src rowValue CL.consume",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "couchView",
        "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea(Source a Object)",
        "package": "couchdb-conduit",
        "partial": "View",
        "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003em(Source m Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchViewPost",
      "description": {
        "fct-descr": "\u003cp\u003eRun CouchDB view in manner like \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003ePOST\u003c/code\u003e (since CouchDB 0.9).\n   It's convenient in case that \u003ccode\u003ekeys\u003c/code\u003e paremeter too big for \u003ccode\u003eGET\u003c/code\u003e query \n   string. Other query parameters used as usual.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n     src \u003c- couchViewPost \"mydb\" \"mydesign\" \"myview\" \n             (mkQuery [QPGroup])\n             [\"key1\", \"key2\", \"key3\"] \n     src $$ CL.mapM_ (liftIO . print)\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e m (Source m Object)",
        "fct-type": "function",
        "title": "couchViewPost"
      },
      "index": {
        "description": "Run CouchDB view in manner like http using POST since CouchDB It convenient in case that keys paremeter too big for GET query string Other query parameters used as usual runCouch def do src couchViewPost mydb mydesign myview mkQuery QPGroup key1 key2 key3 src CL.mapM liftIO print",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "couchViewPost",
        "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eb(Source b Object)",
        "package": "couchdb-conduit",
        "partial": "View Post",
        "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003em(Source m Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchViewPost_",
      "description": {
        "fct-descr": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchViewPost\u003c/a\u003e\u003c/code\u003e. Takes \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to consume response.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e a-\u003e Sink Object m a-\u003e m a",
        "fct-type": "function",
        "title": "couchViewPost_"
      },
      "index": {
        "description": "Brain-free version of couchViewPost Takes Sink to consume response",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "couchViewPost_",
        "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eSink Object b a-\u003eb a",
        "package": "couchdb-conduit",
        "partial": "View Post",
        "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003ea-\u003eSink Object m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:couchView_",
      "description": {
        "fct-descr": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchView\u003c/a\u003e\u003c/code\u003e. Takes \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to consume response.\n\u003c/p\u003e\u003cpre\u003e runCouch def $ do\n\n     -- Print all upon receipt.\n     couchView' \"mydb\" \"mydesign\" \"myview\" [] $ CL.mapM_ (liftIO . print)\n\n     -- ... Or extract row value and consume\n     res \u003c- couchView' \"mydb\" \"mydesign\" \"myview\" [] $ \n                        rowValue =$ CL.consume\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Path-\u003e Query-\u003e Sink Object m a-\u003e m a",
        "fct-type": "function",
        "title": "couchView_"
      },
      "index": {
        "description": "Brain-free version of couchView Takes Sink to consume response runCouch def do Print all upon receipt couchView mydb mydesign myview CL.mapM liftIO print Or extract row value and consume res couchView mydb mydesign myview rowValue CL.consume",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "couchView_",
        "normalized": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003eSink Object a b-\u003ea b",
        "package": "couchdb-conduit",
        "partial": "View",
        "signature": "Path-\u003ePath-\u003ePath-\u003eQuery-\u003eSink Object m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowDoc",
      "description": {
        "fct-descr": "\u003cp\u003eConduit for extract \"doc\" field from CouchDB view row. \n   Use only with \u003ccode\u003einclude_docs=true\u003c/code\u003e query parameter.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Conduit Object m Value",
        "fct-source": "src/Database-CouchDB-Conduit-View.html#rowDoc",
        "fct-type": "function",
        "title": "rowDoc"
      },
      "index": {
        "description": "Conduit for extract doc field from CouchDB view row Use only with include docs true query parameter",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "rowDoc",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowField",
      "description": {
        "fct-descr": "\u003cp\u003eExtract field from view row\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Text -\u003e Conduit Object m Value",
        "fct-source": "src/Database-CouchDB-Conduit-View.html#rowField",
        "fct-type": "function",
        "title": "rowField"
      },
      "index": {
        "description": "Extract field from view row",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "rowField",
        "normalized": "Text-\u003eConduit Object a Value",
        "package": "couchdb-conduit",
        "partial": "Field",
        "signature": "Text-\u003eConduit Object m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit-View.html#v:rowValue",
      "description": {
        "fct-descr": "\u003cp\u003eConduit for extract \"value\" field from CouchDB view row.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit.View",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Conduit Object m Value",
        "fct-source": "src/Database-CouchDB-Conduit-View.html#rowValue",
        "fct-type": "function",
        "title": "rowValue"
      },
      "index": {
        "description": "Conduit for extract value field from CouchDB view row",
        "hierarchy": "Database CouchDB Conduit View",
        "module": "Database.CouchDB.Conduit.View",
        "name": "rowValue",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCouchDB \n\u003c/p\u003e\u003cp\u003eTo work with concrete objects, use the following modules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.DB\u003c/a\u003e Database\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.View\u003c/a\u003e Views\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eDatabase.CouchDB.Conduit.LowLevel\u003c/a\u003e Low-level methods\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complete documentation about The Couch DB HTTP API see\n\u003ca\u003ehttp://wiki.apache.org/couchdb/Complete_HTTP_API_Reference\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "CouchDB To work with concrete objects use the following modules Database.CouchDB.Conduit.DB Database Database.CouchDB.Conduit.View Views Database.CouchDB.Conduit.LowLevel Low-level methods For complete documentation about The Couch DB HTTP API see http wiki.apache.org couchdb Complete HTTP API Reference",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:CouchConnection",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a single connection to CouchDB server. The constructor for this \n   data type is not exposed. Instead, you should use either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method \n   to retrieve a default instance.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchConnection",
        "fct-type": "data",
        "title": "CouchConnection"
      },
      "index": {
        "description": "Represents single connection to CouchDB server The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "CouchConnection",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:CouchError",
      "description": {
        "fct-descr": "\u003cp\u003eA CouchDB Error.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
        "fct-type": "data",
        "title": "CouchError"
      },
      "index": {
        "description": "CouchDB Error",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "CouchError",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:MonadCouch",
      "description": {
        "fct-descr": "\u003cp\u003eA monad which allows access to the connection.\n\u003c/p\u003e\u003cp\u003eAll functions to access CouchDB require a \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e instance to \n access the connection information.  \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e is an instance of \n \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003erunCouch\u003c/em\u003e runs a sequence of database actions using \n \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your db code is part of a larger monad, it makes sense to just make the \n larger monad an instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e and skip the intermediate ReaderT, \n since then performance is improved by eliminating one monad from the final \n transformer stack.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "class",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#MonadCouch",
        "fct-type": "class",
        "title": "MonadCouch"
      },
      "index": {
        "description": "monad which allows access to the connection All functions to access CouchDB require MonadCouch instance to access the connection information ReaderT is an instance of MonadCouch and runCouch runs sequence of database actions using ReaderT and ResourceT If your db code is part of larger monad it makes sense to just make the larger monad an instance of MonadCouch and skip the intermediate ReaderT since then performance is improved by eliminating one monad from the final transformer stack",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "MonadCouch",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Monad Couch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a path or path fragment.\n\u003c/p\u003e\u003cp\u003eAs a rule, full path to document in CouchDB is just URL path. But there is \n one subtlety. For example, document ids \u003cem\u003ecan\u003c/em\u003e contain slashes. But, \n to work with such objects, path fragments must be escaped.\n\u003c/p\u003e\u003cpre\u003e database/doc%2Fname\n\u003c/pre\u003e\u003cp\u003eBut, fo non-document items such as views, attachments e.t.c., slashes\n between path fragments \u003cem\u003emust not\u003c/em\u003e be escaped. While slashes in path \n fragments \u003cem\u003emust\u003c/em\u003e be escaped.\n\u003c/p\u003e\u003cpre\u003e database/_design/my%2Fdesign/_view/my%2Fview\n\u003c/pre\u003e\u003cp\u003eExcept low-level functions, \u003ccode\u003ecouchdb-conduit\u003c/code\u003e escapes all segments in paths.  \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "type",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "Represents path or path fragment As rule full path to document in CouchDB is just URL path But there is one subtlety For example document ids can contain slashes But to work with such objects path fragments must be escaped database doc Fname But fo non-document items such as views attachments e.t.c slashes between path fragments must not be escaped While slashes in path fragments must be escaped database design my Fdesign view my Fview Except low-level functions couchdb-conduit escapes all segments in paths",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "Path",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#t:Revision",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a revision of a CouchDB Document. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "type",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#Revision",
        "fct-type": "type",
        "title": "Revision"
      },
      "index": {
        "description": "Represents revision of CouchDB Document",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "Revision",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Revision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:CouchHttpError",
      "description": {
        "fct-descr": "\u003cp\u003eError comes from http.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchHttpError Int ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
        "fct-type": "function",
        "title": "CouchHttpError"
      },
      "index": {
        "description": "Error comes from http",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "CouchHttpError",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch Http Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:CouchInternalError",
      "description": {
        "fct-descr": "\u003cp\u003eNon-http errors include things like errors  \n   parsing the response.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchInternalError ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
        "fct-type": "function",
        "title": "CouchInternalError"
      },
      "index": {
        "description": "Non-http errors include things like errors parsing the response",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "CouchInternalError",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Couch Internal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:NotModified",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eIs not an error actually\u003c/em\u003e. It is thrown when CouchDB returns \n   \u003ccode\u003e304 - Not Modified\u003c/code\u003e response to the request. See \n   \u003ca\u003ehttp://wiki.apache.org/couchdb/HTTP_Document_API\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "NotModified",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#CouchError",
        "fct-type": "function",
        "title": "NotModified"
      },
      "index": {
        "description": "Is not an error actually It is thrown when CouchDB returns Not Modified response to the request See http wiki.apache.org couchdb HTTP Document API",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "NotModified",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "Not Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchConnection",
      "description": {
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "m (Manager, CouchConnection)",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchConnection",
        "fct-type": "method",
        "title": "couchConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchConnection",
        "normalized": "a(Manager,CouchConnection)",
        "package": "couchdb-conduit",
        "partial": "Connection",
        "signature": "m(Manager,CouchConnection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchDelete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the given revision of the object.  \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e Revision-\u003e m ()",
        "fct-type": "function",
        "title": "couchDelete"
      },
      "index": {
        "description": "Delete the given revision of the object",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchDelete",
        "normalized": "Path-\u003ePath-\u003eRevision-\u003ea()",
        "package": "couchdb-conduit",
        "partial": "Delete",
        "signature": "Path-\u003ePath-\u003eRevision-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchHost",
      "description": {
        "fct-descr": "\u003cp\u003eHostname. Default value is \"localhost\"\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection -\u003e ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchHost",
        "fct-type": "function",
        "title": "couchHost"
      },
      "index": {
        "description": "Hostname Default value is localhost",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchHost",
        "normalized": "CouchConnection-\u003eByteString",
        "package": "couchdb-conduit",
        "partial": "Host",
        "signature": "CouchConnection-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchLogin",
      "description": {
        "fct-descr": "\u003cp\u003eCouchDB login. By default is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection -\u003e ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchLogin",
        "fct-type": "function",
        "title": "couchLogin"
      },
      "index": {
        "description": "CouchDB login By default is empty",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchLogin",
        "normalized": "CouchConnection-\u003eByteString",
        "package": "couchdb-conduit",
        "partial": "Login",
        "signature": "CouchConnection-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPass",
      "description": {
        "fct-descr": "\u003cp\u003eCouchDB password. By default is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection -\u003e ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPass",
        "fct-type": "function",
        "title": "couchPass"
      },
      "index": {
        "description": "CouchDB password By default is empty",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchPass",
        "normalized": "CouchConnection-\u003eByteString",
        "package": "couchdb-conduit",
        "partial": "Pass",
        "signature": "CouchConnection-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort. 5984 by default.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection -\u003e Int",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPort",
        "fct-type": "function",
        "title": "couchPort"
      },
      "index": {
        "description": "Port by default",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchPort",
        "normalized": "CouchConnection-\u003eInt",
        "package": "couchdb-conduit",
        "partial": "Port",
        "signature": "CouchConnection-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eCouchDB database prefix. It will prepended to first fragment of\n   request path. Must be fully valid DB name fragment.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection -\u003e ByteString",
        "fct-source": "src/Database-CouchDB-Conduit-Internal-Connection.html#couchPrefix",
        "fct-type": "function",
        "title": "couchPrefix"
      },
      "index": {
        "description": "CouchDB database prefix It will prepended to first fragment of request path Must be fully valid DB name fragment",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchPrefix",
        "normalized": "CouchConnection-\u003eByteString",
        "package": "couchdb-conduit",
        "partial": "Prefix",
        "signature": "CouchConnection-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchRev",
      "description": {
        "fct-descr": "\u003cp\u003eGet Revision of a document.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e m Revision",
        "fct-type": "function",
        "title": "couchRev"
      },
      "index": {
        "description": "Get Revision of document",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchRev",
        "normalized": "Path-\u003ePath-\u003ea Revision",
        "package": "couchdb-conduit",
        "partial": "Rev",
        "signature": "Path-\u003ePath-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:couchRev-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBrain-free version of \u003ccode\u003e\u003ca\u003ecouchRev\u003c/a\u003e\u003c/code\u003e. If document absent, \n   just return empty ByteString.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Path-\u003e Path-\u003e m Revision",
        "fct-type": "function",
        "title": "couchRev'"
      },
      "index": {
        "description": "Brain-free version of couchRev If document absent just return empty ByteString",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "couchRev'",
        "normalized": "Path-\u003ePath-\u003ea Revision",
        "package": "couchdb-conduit",
        "partial": "Rev'",
        "signature": "Path-\u003ePath-\u003em Revision"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "def"
      },
      "index": {
        "description": "The default value for this type",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "def",
        "normalized": "",
        "package": "couchdb-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:mkPath",
      "description": {
        "fct-descr": "\u003cp\u003eMake correct path and escape fragments. Filter empty fragments.\n\u003c/p\u003e\u003cpre\u003e mkPath [\"db\", \"\", \"doc/with/slashes\"]\n /db/doc%2Fwith%2Fslashes\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "[Path]-\u003e Path",
        "fct-type": "function",
        "title": "mkPath"
      },
      "index": {
        "description": "Make correct path and escape fragments Filter empty fragments mkPath db doc with slashes db doc Fwith Fslashes",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "mkPath",
        "normalized": "[Path]-\u003ePath",
        "package": "couchdb-conduit",
        "partial": "Path",
        "signature": "[Path]-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:runCouch",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to a CouchDB server, run a sequence of CouchDB actions, and then \n   close the connection.. This function is a combination of \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e, \n   \u003ccode\u003e\u003ca\u003ewithCouchConnection\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you create your own instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e or use connection pool, \n   use \u003ccode\u003e\u003ca\u003ewithCouchConnection\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "CouchConnection-\u003e ReaderT (Manager, CouchConnection) (ResourceT m) a-\u003e m a",
        "fct-type": "function",
        "title": "runCouch"
      },
      "index": {
        "description": "Connect to CouchDB server run sequence of CouchDB actions and then close the connection This function is combination of withManager withCouchConnection runReaderT and runResourceT If you create your own instance of MonadCouch or use connection pool use withCouchConnection",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "runCouch",
        "normalized": "CouchConnection-\u003eReaderT(Manager,CouchConnection)(ResourceT a)b-\u003ea b",
        "package": "couchdb-conduit",
        "partial": "Couch",
        "signature": "CouchConnection-\u003eReaderT(Manager,CouchConnection)(ResourceT m)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/couchdb-conduit/docs/Database-CouchDB-Conduit.html#v:withCouchConnection",
      "description": {
        "fct-descr": "\u003cp\u003eRun a sequence of CouchDB actions with provided \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eCouchConnection\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e withCouchConnection manager def {couchDB = \"db\"} . runReaderT . \n          runResourceT . lift $ do\n    ... -- actions\n\u003c/pre\u003e",
        "fct-module": "Database.CouchDB.Conduit",
        "fct-package": "couchdb-conduit",
        "fct-signature": "Manager-\u003e CouchConnection-\u003e ((Manager, CouchConnection) -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withCouchConnection"
      },
      "index": {
        "description": "Run sequence of CouchDB actions with provided Manager and CouchConnection withCouchConnection manager def couchDB db runReaderT runResourceT lift do actions",
        "hierarchy": "Database CouchDB Conduit",
        "module": "Database.CouchDB.Conduit",
        "name": "withCouchConnection",
        "normalized": "Manager-\u003eCouchConnection-\u003e((Manager,CouchConnection)-\u003ea b)-\u003ea b",
        "package": "couchdb-conduit",
        "partial": "Couch Connection",
        "signature": "Manager-\u003eCouchConnection-\u003e((Manager,CouchConnection)-\u003em a)-\u003em a"
      }
    }
  }
]