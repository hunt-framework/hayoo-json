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
        "word": "couchdb-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenient wrapper around \u003ca\u003eDatabase.CouchDB.Enumerator\u003c/a\u003e and \u003ca\u003eData.Aeson.Generic\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe aeson library has the ability to encode and decode JSON using the generic\nData and Typeable classes via the \u003ca\u003eData.Aeson.Generic\u003c/a\u003e module.  It isn't too\nhard to use \u003ccode\u003e\u003ca\u003efromJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e combined with the functions in\n\u003ca\u003eDatabase.CouchDB.Enumerator\u003c/a\u003e, except that in several cases Couch DB uses\nsystem fields \u003cem\u003e_id\u003c/em\u003e and \u003cem\u003e_rev\u003c/em\u003e which present a small difficulty.\n\u003c/p\u003e\u003cp\u003eFor example, Couch DB will return an object like the following\n\u003c/p\u003e\u003cpre\u003e {\n    \"_id\": \"somedoc\",\n    \"_rev\": \"11-52b4f9b471de393fab82313b9d8571c1\",\n    \"foo\": 3,\n    \"bar\": true\n }\n\u003c/pre\u003e\u003cp\u003eAlso, occasionally (not always) the \u003cem\u003e_rev\u003c/em\u003e field must be present in an object\nthat is sent to Couch DB during a PUT.\n\u003c/p\u003e\u003cp\u003eThe short wrapper functions in this module take care of handling the \u003cem\u003e_id\u003c/em\u003e\nand \u003cem\u003e_rev\u003c/em\u003e fields separately from the encoding and decoding to the generic\ndata structure.\n\u003c/p\u003e\u003cpre\u003e import Data.Data (Data, Typeable)\n import Data.Bytestring (Bytestring)\n import Database.CouchDB.Enumerator hiding (couchGet, couchPut)\n import qualified Database.CouchDB.Enumerator.Generic as G\n \n data Rec = Rec {\n     field1 :: Int\n   , field2 :: ByteString\n } deriving (Data, Typeable)\n \n testCouch :: IO ()\n testCouch = runCouch \"localhost\" 5984 \"test\" $ do\n    -- Insert doc\n    rev1 \u003c- G.couchPut \"doc1\" Nothing [] $ Rec 1 \"foo\"\n    -- Get doc \n    G.CouchDoc p r doc1 \u003c- G.couchGet \"doc1\" []\n    -- New revision\n    rev2 \u003c- G.couchPut \"doc1\" (Just rev1) [] $ Rec 2 \"bar\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "Generic",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "convenient wrapper around Database.CouchDB.Enumerator and Data.Aeson.Generic The aeson library has the ability to encode and decode JSON using the generic Data and Typeable classes via the Data.Aeson.Generic module It isn too hard to use fromJSON and toJSON combined with the functions in Database.CouchDB.Enumerator except that in several cases Couch DB uses system fields id and rev which present small difficulty For example Couch DB will return an object like the following id somedoc rev b4f9b471de393fab82313b9d8571c1 foo bar true Also occasionally not always the rev field must be present in an object that is sent to Couch DB during PUT The short wrapper functions in this module take care of handling the id and rev fields separately from the encoding and decoding to the generic data structure import Data.Data Data Typeable import Data.Bytestring Bytestring import Database.CouchDB.Enumerator hiding couchGet couchPut import qualified Database.CouchDB.Enumerator.Generic as data Rec Rec field1 Int field2 ByteString deriving Data Typeable testCouch IO testCouch runCouch localhost test do Insert doc rev1 G.couchPut doc1 Nothing Rec foo Get doc G.CouchDoc doc1 G.couchGet doc1 New revision rev2 G.couchPut doc1 Just rev1 Rec bar",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "Generic",
          "package": "couchdb-enumerator",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouchDB document with path and revision.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "CouchDoc",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator-Generic.html#CouchDoc",
          "type": "data"
        },
        "index": {
          "description": "CouchDB document with path and revision",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "CouchDoc",
          "package": "couchdb-enumerator",
          "partial": "Couch Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#t:CouchDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "CouchDoc",
          "package": "couchdb-enumerator",
          "signature": "CouchDoc Path Revision a",
          "source": "src/Database-CouchDB-Enumerator-Generic.html#CouchDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "CouchDoc",
          "package": "couchdb-enumerator",
          "partial": "Couch Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:CouchDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly consumes all view result. Use this if all view data is \n   mandatory and all errors must be handled.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "consumeView",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Strictly consumes all view result Use this if all view data is mandatory and all errors must be handled",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "consumeView",
          "normalized": "Path-\u003eQuery-\u003ea[b]",
          "package": "couchdb-enumerator",
          "partial": "View",
          "signature": "Path-\u003eQuery-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:consumeView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a single object from couch DB.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchGet",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e m (CouchDoc a)",
          "type": "function"
        },
        "index": {
          "description": "Load single object from couch DB",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchGet",
          "normalized": "Path-\u003eQuery-\u003ea(CouchDoc b)",
          "package": "couchdb-enumerator",
          "partial": "Get",
          "signature": "Path-\u003eQuery-\u003em(CouchDoc a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:couchGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an object in Couch DB, returning the new Revision. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchPut",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put an object in Couch DB returning the new Revision",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchPut",
          "normalized": "Path-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-enumerator",
          "partial": "Put",
          "signature": "Path-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:couchPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrute force version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e. Stores document regardless of presence\n   in database (catches \u003ccode\u003e\u003ca\u003ecouchRev\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e \u003cem\u003e404\u003c/em\u003e). \n\u003c/p\u003e\u003cp\u003eThis version is slower that \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e because it first tries to find the\n   document revision.  \n\u003c/p\u003e\u003cp\u003eAlso, there are no guarantees that some other thread or\n   program updated the object (and thus generated a new revision) between loading\n   the existing revision and deleting the object.  If this occurs, an error will\n   still be thrown.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchPut'",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Brute force version of couchPut Stores document regardless of presence in database catches couchRev CouchError This version is slower that couchPut because it first tries to find the document revision Also there are no guarantees that some other thread or program updated the object and thus generated new revision between loading the existing revision and deleting the object If this occurs an error will still be thrown",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "couchPut'",
          "normalized": "Path-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-enumerator",
          "partial": "Put'",
          "signature": "Path-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:couchPut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eextractViewValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "parseGeneric",
          "package": "couchdb-enumerator",
          "signature": "Enumeratee Object a m b",
          "source": "src/Database-CouchDB-Enumerator-Generic.html#parseGeneric",
          "type": "function"
        },
        "index": {
          "description": "Parse Object from extractViewValue",
          "hierarchy": "Database CouchDB Enumerator Generic",
          "module": "Database.CouchDB.Enumerator.Generic",
          "name": "parseGeneric",
          "package": "couchdb-enumerator",
          "partial": "Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator-Generic.html#v:parseGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWith the advent of conduits, you are strongly encouraged to use couchdb-conduit\n\u003ca\u003ehttp://hackage.haskell.org/package/couchdb-conduit\u003c/a\u003e instead of this package.\nIt exports almost the same interface but uses conduits instead of enumerator.\n\u003c/p\u003e\u003cp\u003eThis module is a very thin wrapper around \u003ca\u003eNetwork.HTTP.Enumerator\u003c/a\u003e using \nthe aeson package to parse and encode JSON.  The Couch DB HTTP API is the \nbest place to learn about how to use this library.\n\u003ca\u003ehttp://wiki.apache.org/couchdb/Complete_HTTP_API_Reference\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e \n import Control.Monad.IO.Class (liftIO)\n import Data.Aeson\n import qualified Data.ByteString.Lazy as BL\n import Data.ByteString.UTF8 (fromString)\n import Data.Enumerator (($$), run_)\n import qualified Data.Enumerator.List as EL\n import Database.CouchDB.Enumerator\n\n testCouch :: IO ()\n testCouch = runCouch \"localhost\" 5984 \"test\" $ do\n    -- Make database if not present\n    couchPutDb \"\"\n    \n    -- Insert some documents.   Note that the dbname passed to \n    -- withCouchConnection is prepended to the given path, so this is a put \n    -- to http://localhost:5984/test/doc1\n    rev1 \u003c- couchPut \"doc1\" [] $ object [ \"foo\" .= (3 :: Int), \n                                          \"bar\" .= (\"abc\" :: String) ]\n    rev2 \u003c- couchPut \"doc2\" [] $ object [ \"foo\" .= (7 :: Int), \n                                          \"baz\" .= (145 :: Int) ]\n\n    -- Load the document and print it out\n    couchGet \"doc1\" [] \u003e\u003e= liftIO . BL.putStrLn . encode . Object\n\n    -- Overwite the document.  We supply the revision, otherwise Couch DB \n    -- would give an error. (The revision could also have been passed  \n    -- in the query arguments.)\n    rev3 \u003c- couchPut \"doc1\" [] $ object [ \"foo\" .= (10 :: Int)\n                                        , \"bar\" .= (\"def\" :: String)\n                                        , \"_rev\" .= rev1 ]\n\n    -- Create a view\n    couchPut_ \"_design/testdesign\" [] $ \n        object [ \"language\" .= (\"javascript\" :: String)\n               , \"views\"    .= object [ \"myview\" .= object [ \"map\" .=\n                    (\"function(doc) { emit(doc.foo, doc); }\" :: String)\n                    ]]\n               ]\n\n    -- Read from the view using couchGet and print it out.\n    couchGet \"_design/testdesign/_view/myview\" [] \u003e\u003e= \n            liftIO . BL.putStrLn . encode . Object\n    couchGet \"_design/testdesign/_view/myview\" \n            [(fromString \"key\", Just $ fromString \"10\")]\n            \u003e\u003e= liftIO . BL.putStrLn . encode . Object\n\n    -- Read the view using couchView and print it out.\n    run_ $ couchView \"testdesign/_view/myview\" [] $$\n            EL.foldM (\\_ o -\u003e liftIO $ BL.putStrLn $ encode $ Object o) ()\n\n    -- .. with restrictions and extracting view value\n    run_ $ couchView \"testdesign/_view/myview\" \n            [(fromString \"key\", Just $ fromString \"10\")] $= extractViewValue $$\n            EL.foldM (\\_ o -\u003e liftIO $ BL.putStrLn $ encode $ Object o) ()\n\n    -- .. and in strict manner\n    v1 \u003c- couchView \"testdesign/_view/myview\" [] $= extractViewValue\n            EL.consume\n    print v1\n\n    -- Delete the objects\n    couchDelete \"doc1\" rev3\n    couchDelete \"doc2\" rev2\n\n    -- Delete test database\n    couchDeleteDb \"\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "Enumerator",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "With the advent of conduits you are strongly encouraged to use couchdb-conduit http hackage.haskell.org package couchdb-conduit instead of this package It exports almost the same interface but uses conduits instead of enumerator This module is very thin wrapper around Network.HTTP.Enumerator using the aeson package to parse and encode JSON The Couch DB HTTP API is the best place to learn about how to use this library http wiki.apache.org couchdb Complete HTTP API Reference import Control.Monad.IO.Class liftIO import Data.Aeson import qualified Data.ByteString.Lazy as BL import Data.ByteString.UTF8 fromString import Data.Enumerator run import qualified Data.Enumerator.List as EL import Database.CouchDB.Enumerator testCouch IO testCouch runCouch localhost test do Make database if not present couchPutDb Insert some documents Note that the dbname passed to withCouchConnection is prepended to the given path so this is put to http localhost test doc1 rev1 couchPut doc1 object foo Int bar abc String rev2 couchPut doc2 object foo Int baz Int Load the document and print it out couchGet doc1 liftIO BL.putStrLn encode Object Overwite the document We supply the revision otherwise Couch DB would give an error The revision could also have been passed in the query arguments rev3 couchPut doc1 object foo Int bar def String rev rev1 Create view couchPut design testdesign object language javascript String views object myview object map function doc emit doc.foo doc String Read from the view using couchGet and print it out couchGet design testdesign view myview liftIO BL.putStrLn encode Object couchGet design testdesign view myview fromString key Just fromString liftIO BL.putStrLn encode Object Read the view using couchView and print it out run couchView testdesign view myview EL.foldM liftIO BL.putStrLn encode Object with restrictions and extracting view value run couchView testdesign view myview fromString key Just fromString extractViewValue EL.foldM liftIO BL.putStrLn encode Object and in strict manner v1 couchView testdesign view myview extractViewValue EL.consume print v1 Delete the objects couchDelete doc1 rev3 couchDelete doc2 rev2 Delete test database couchDeleteDb",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "Enumerator",
          "package": "couchdb-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a connection to a single Couch DB Database.  \n\u003c/p\u003e\u003cp\u003eA connection contains a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e and reuses it for multiple requests, \n   which means a single open HTTP connection to CouchDB will be kept around \n   until the manager is closed (http-enumerator will create more connections \n   if needed, it just keeps only one and closes the rest.)  See the Pool \n   section for more information.\n\u003c/p\u003e\u003cp\u003eTo access more than one database, the dbname entry can be set to the\n   empty string.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchConnection",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "data"
        },
        "index": {
          "description": "Represents connection to single Couch DB Database connection contains Manager and reuses it for multiple requests which means single open HTTP connection to CouchDB will be kept around until the manager is closed http-enumerator will create more connections if needed it just keeps only one and closes the rest See the Pool section for more information To access more than one database the dbname entry can be set to the empty string",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchConnection",
          "package": "couchdb-enumerator",
          "partial": "Couch Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#t:CouchConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Couch DB Error. If the error comes from http, the http status code \n   is also given. Non-http errors include things like errors  \n   parsing the response.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchError",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html#CouchError",
          "type": "data"
        },
        "index": {
          "description": "Couch DB Error If the error comes from http the http status code is also given Non-http errors include things like errors parsing the response",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchError",
          "package": "couchdb-enumerator",
          "partial": "Couch Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#t:CouchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad which allows access to the connection.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "MonadCouch",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html#MonadCouch",
          "type": "class"
        },
        "index": {
          "description": "monad which allows access to the connection",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "MonadCouch",
          "package": "couchdb-enumerator",
          "partial": "Monad Couch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#t:MonadCouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a Couch DB Object.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "Path",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html#Path",
          "type": "type"
        },
        "index": {
          "description": "path to Couch DB Object",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "Path",
          "package": "couchdb-enumerator",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a revision of a Couch DB Document.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "Revision",
          "package": "couchdb-enumerator",
          "source": "src/Database-CouchDB-Enumerator.html#Revision",
          "type": "type"
        },
        "index": {
          "description": "Represents revision of Couch DB Document",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "Revision",
          "package": "couchdb-enumerator",
          "partial": "Revision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchConnection",
          "package": "couchdb-enumerator",
          "signature": "CouchConnection",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchConnection",
          "package": "couchdb-enumerator",
          "partial": "Couch Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:CouchConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchError",
          "package": "couchdb-enumerator",
          "signature": "CouchError (Maybe Int) String",
          "source": "src/Database-CouchDB-Enumerator.html#CouchError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "CouchError",
          "package": "couchdb-enumerator",
          "partial": "Couch Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:CouchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified version of \u003ccode\u003e\u003ca\u003ecouch'\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eResponse headers are ignored, and the response status is only used to\n   detect for an error, in which case a \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e is sent down the\n   \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couch",
          "package": "couchdb-enumerator",
          "signature": "Method-\u003e Path-\u003e Query-\u003e Iteratee ByteString m a-\u003e RequestBody m-\u003e Iteratee ByteString m a",
          "type": "function"
        },
        "index": {
          "description": "Simplified version of couch Response headers are ignored and the response status is only used to detect for an error in which case CouchError is sent down the Iteratee",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couch",
          "normalized": "Method-\u003ePath-\u003eQuery-\u003eIteratee ByteString a b-\u003eRequestBody a-\u003eIteratee ByteString a b",
          "package": "couchdb-enumerator",
          "signature": "Method-\u003ePath-\u003eQuery-\u003eIteratee ByteString m a-\u003eRequestBody m-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general method of accessing CouchDB.  This is a very thin wrapper \n   around \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.  Most of the time you should use one of the other access \n   functions, but this function is needed for example to write and read \n   attachments that are not in JSON format.\n\u003c/p\u003e\u003cp\u003eIf CouchDB returns an error, the iteratee passed to this function is not\n   called and instead a \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e is sent out the Iteratee returned from\n   this function.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couch'",
          "package": "couchdb-enumerator",
          "signature": "Method-\u003e Path-\u003e RequestHeaders-\u003e Query-\u003e (ResponseHeaders -\u003e Iteratee ByteString m a)-\u003e RequestBody m-\u003e Iteratee ByteString m a",
          "type": "function"
        },
        "index": {
          "description": "The most general method of accessing CouchDB This is very thin wrapper around http Most of the time you should use one of the other access functions but this function is needed for example to write and read attachments that are not in JSON format If CouchDB returns an error the iteratee passed to this function is not called and instead CouchError is sent out the Iteratee returned from this function",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couch'",
          "normalized": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003e(ResponseHeaders-\u003eIteratee ByteString a b)-\u003eRequestBody a-\u003eIteratee ByteString a b",
          "package": "couchdb-enumerator",
          "signature": "Method-\u003ePath-\u003eRequestHeaders-\u003eQuery-\u003e(ResponseHeaders-\u003eIteratee ByteString m a)-\u003eRequestBody m-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couch-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "couchConnection",
          "package": "couchdb-enumerator",
          "signature": "m CouchConnection",
          "source": "src/Database-CouchDB-Enumerator.html#couchConnection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchConnection",
          "package": "couchdb-enumerator",
          "partial": "Connection",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the given revision of the object.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchDelete",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Revision-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Delete the given revision of the object",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchDelete",
          "normalized": "Path-\u003eRevision-\u003ea()",
          "package": "couchdb-enumerator",
          "partial": "Delete",
          "signature": "Path-\u003eRevision-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a database.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchDeleteDb",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Delete database",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchDeleteDb",
          "normalized": "Path-\u003ea()",
          "package": "couchdb-enumerator",
          "partial": "Delete Db",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchDeleteDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a single object from couch DB.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchGet",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e m Object",
          "type": "function"
        },
        "index": {
          "description": "Load single object from couch DB",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchGet",
          "normalized": "Path-\u003eQuery-\u003ea Object",
          "package": "couchdb-enumerator",
          "partial": "Get",
          "signature": "Path-\u003eQuery-\u003em Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an object in Couch DB, returning the new Revision.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPut",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put an object in Couch DB returning the new Revision",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPut",
          "normalized": "Path-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-enumerator",
          "partial": "Put",
          "signature": "Path-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate CouchDB database regardless of presence. Roughly equivalent to\n\u003c/p\u003e\u003cpre\u003e couchPut_ \"\" [] $ object []\n\u003c/pre\u003e\u003cp\u003ebut catches \u003ccode\u003e\u003ca\u003eCouchError\u003c/a\u003e\u003c/code\u003e \u003cem\u003e412\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPutDb",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Create CouchDB database regardless of presence Roughly equivalent to couchPut object but catches CouchError",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPutDb",
          "normalized": "Path-\u003ea()",
          "package": "couchdb-enumerator",
          "partial": "Put Db",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchPutDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an object in Couch DB with revision, returning the new Revision.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPutRev",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Revision-\u003e Query-\u003e a-\u003e m Revision",
          "type": "function"
        },
        "index": {
          "description": "Put an object in Couch DB with revision returning the new Revision",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPutRev",
          "normalized": "Path-\u003eRevision-\u003eQuery-\u003ea-\u003eb Revision",
          "package": "couchdb-enumerator",
          "partial": "Put Rev",
          "signature": "Path-\u003eRevision-\u003eQuery-\u003ea-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchPutRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecouchPut\u003c/a\u003e\u003c/code\u003e which ignores the return value. This is slightly \n   faster than \u003cem\u003e _ \u003c- couchPut ...\u003c/em\u003e since the JSON parser is not run.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPut_",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e a-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "version of couchPut which ignores the return value This is slightly faster than couchPut since the JSON parser is not run",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchPut_",
          "normalized": "Path-\u003eQuery-\u003ea-\u003eb()",
          "package": "couchdb-enumerator",
          "partial": "Put",
          "signature": "Path-\u003eQuery-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchPut_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Revision of a document. \n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchRev",
          "package": "couchdb-enumerator",
          "signature": "Path -\u003e m Revision",
          "source": "src/Database-CouchDB-Enumerator.html#couchRev",
          "type": "function"
        },
        "index": {
          "description": "Get Revision of document",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchRev",
          "normalized": "Path-\u003ea Revision",
          "package": "couchdb-enumerator",
          "partial": "Rev",
          "signature": "Path-\u003em Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad from a Couch DB View.\n\u003c/p\u003e\u003cp\u003eWhile you can use \u003ccode\u003e\u003ca\u003ecouchGet\u003c/a\u003e\u003c/code\u003e on a view object, this function combines the\n   incredible power of http-enumerator and attoparsec to allow you to process \n   objects in constant space. As data is read from the network, it is fed into \n   attoparsec.  When attoparsec completes parsing an object it is sent out \n   the enumerator.\n\u003c/p\u003e\u003cp\u003eThe objects enumerated are the entries in the \"rows\" property of the \n   view result, which means they are not directly the objects you put into \n   the database.  See \u003ca\u003ehttp://wiki.apache.org/couchdb/HTTP_view_API\u003c/a\u003e for more \n   information.  The objects inserted into the database are available in the \n   \"value\" entry, and can be extracted with the \u003ccode\u003e\u003ca\u003eextractViewValue\u003c/a\u003e\u003c/code\u003e \n   enumeratee, for example:\n\u003c/p\u003e\u003cpre\u003e couchView \"mydesigndoc/_view/myview\" \n     [(fromString \"key\", Just $ fromString \"3\")] \n         $= extractViewValue\n\u003c/pre\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchView",
          "package": "couchdb-enumerator",
          "signature": "Path-\u003e Query-\u003e Enumerator Object m a",
          "type": "function"
        },
        "index": {
          "description": "Load from Couch DB View While you can use couchGet on view object this function combines the incredible power of http-enumerator and attoparsec to allow you to process objects in constant space As data is read from the network it is fed into attoparsec When attoparsec completes parsing an object it is sent out the enumerator The objects enumerated are the entries in the rows property of the view result which means they are not directly the objects you put into the database See http wiki.apache.org couchdb HTTP view API for more information The objects inserted into the database are available in the value entry and can be extracted with the extractViewValue enumeratee for example couchView mydesigndoc view myview fromString key Just fromString extractViewValue",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "couchView",
          "normalized": "Path-\u003eQuery-\u003eEnumerator Object a b",
          "package": "couchdb-enumerator",
          "partial": "View",
          "signature": "Path-\u003eQuery-\u003eEnumerator Object m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:couchView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "dbname",
          "package": "couchdb-enumerator",
          "signature": "String",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "dbname",
          "package": "couchdb-enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:dbname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee to extract the \"value\" member of JSON objects.\n\u003c/p\u003e\u003cp\u003eThis is useful to extract the object from the data returned from a view. \n For example, Couch DB will return objects that look like the following:\n\u003c/p\u003e\u003cpre\u003e { \"id\":\"64ACF01B05F53...\", \"key\":null, \"value\": { some object } }\n\u003c/pre\u003e\u003cp\u003eand this enumeratee will extract \u003cem\u003e{some object}\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "extractViewValue",
          "package": "couchdb-enumerator",
          "signature": "Enumeratee Object Object m a",
          "source": "src/Database-CouchDB-Enumerator.html#extractViewValue",
          "type": "function"
        },
        "index": {
          "description": "An enumeratee to extract the value member of JSON objects This is useful to extract the object from the data returned from view For example Couch DB will return objects that look like the following id ACF01B05F53 key null value some object and this enumeratee will extract some object",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "extractViewValue",
          "package": "couchdb-enumerator",
          "partial": "View Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:extractViewValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "host",
          "package": "couchdb-enumerator",
          "signature": "ByteString",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "host",
          "package": "couchdb-enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "manager",
          "package": "couchdb-enumerator",
          "signature": "Manager",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "manager",
          "package": "couchdb-enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.Enumerator",
          "name": "port",
          "package": "couchdb-enumerator",
          "signature": "Int",
          "source": "src/Database-CouchDB-Enumerator.html#CouchConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "port",
          "package": "couchdb-enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a sequence of CouchDB actions.\n\u003c/p\u003e\u003cp\u003eThe functions below to access CouchDB require a \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e instance to \n   access the connection information.  \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e is an instance of \n   \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003erunCouch\u003c/em\u003e runs a sequence of database actions using \n   \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e.  See the top of this page for an example using \u003cem\u003erunCouch\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe main reason to not use \u003cem\u003erunCouch\u003c/em\u003e is to obtain more control over \n   connection pooling. Also, if your db code is part of a larger monad, it \n   makes sense to just make the larger monad an instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e and \n   skip the intermediate ReaderT, since then performance is improved by \n   eliminating one monad from the final transformer stack.\n\u003c/p\u003e\u003cp\u003eThis function is a combination of \u003ccode\u003e\u003ca\u003ewithCouchConnection\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "runCouch",
          "package": "couchdb-enumerator",
          "signature": "String-\u003e Int-\u003e String-\u003e ReaderT CouchConnection m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run sequence of CouchDB actions The functions below to access CouchDB require MonadCouch instance to access the connection information ReaderT is an instance of MonadCouch and runCouch runs sequence of database actions using ReaderT See the top of this page for an example using runCouch The main reason to not use runCouch is to obtain more control over connection pooling Also if your db code is part of larger monad it makes sense to just make the larger monad an instance of MonadCouch and skip the intermediate ReaderT since then performance is improved by eliminating one monad from the final transformer stack This function is combination of withCouchConnection and runReaderT",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "runCouch",
          "normalized": "String-\u003eInt-\u003eString-\u003eReaderT CouchConnection a b-\u003ea b",
          "package": "couchdb-enumerator",
          "partial": "Couch",
          "signature": "String-\u003eInt-\u003eString-\u003eReaderT CouchConnection m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:runCouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a CouchDB database, call the supplied function, and then close \n   the connection.\n\u003c/p\u003e\u003cp\u003eIf you create your own instance of \u003ccode\u003e\u003ca\u003eMonadCouch\u003c/a\u003e\u003c/code\u003e instead of using \n   \u003ccode\u003e\u003ca\u003erunCouch\u003c/a\u003e\u003c/code\u003e, this function will help you create the \u003ccode\u003e\u003ca\u003eCouchConnection\u003c/a\u003e\u003c/code\u003e. On \n   the other hand, if you want to implement connection pooling, you will not \n   be able to use withCouchConnection and must create the connection yourself.\n\u003c/p\u003e",
          "module": "Database.CouchDB.Enumerator",
          "name": "withCouchConnection",
          "package": "couchdb-enumerator",
          "signature": "String-\u003e Int-\u003e String-\u003e (CouchConnection -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Connect to CouchDB database call the supplied function and then close the connection If you create your own instance of MonadCouch instead of using runCouch this function will help you create the CouchConnection On the other hand if you want to implement connection pooling you will not be able to use withCouchConnection and must create the connection yourself",
          "hierarchy": "Database CouchDB Enumerator",
          "module": "Database.CouchDB.Enumerator",
          "name": "withCouchConnection",
          "normalized": "String-\u003eInt-\u003eString-\u003e(CouchConnection-\u003ea b)-\u003ea b",
          "package": "couchdb-enumerator",
          "partial": "Couch Connection",
          "signature": "String-\u003eInt-\u003eString-\u003e(CouchConnection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couchdb-enumerator/docs/Database-CouchDB-Enumerator.html#v:withCouchConnection"
      }
    }
  ]
]