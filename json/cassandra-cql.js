[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell client for Cassandra's CQL protocol\n\u003c/p\u003e\u003cp\u003eFor examples, take a look at the \u003cem\u003etests\u003c/em\u003e directory in the source archive. \n\u003c/p\u003e\u003cp\u003eHere's the correspondence between CQL and Haskell types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ascii - \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e bigint - \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e blob - \u003ccode\u003e\u003ca\u003eBlob\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e boolean - \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e counter - \u003ccode\u003e\u003ca\u003eCounter\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e decimal - \u003ccode\u003e\u003ca\u003eDecimal\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e double - \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e float - \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e int - \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e text / varchar - \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e timestamp - \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e uuid - \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e varint - \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e timeuuid - \u003ccode\u003e\u003ca\u003eTimeUUID\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e inet - \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e list\u003ca\u003e - [a]\n\u003c/li\u003e\u003cli\u003e map\u003ca, b\u003e - \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e a b\n\u003c/li\u003e\u003cli\u003e set\u003ca\u003e - \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e b\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e...and you can define your own \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e instances to extend these types, which is\n a very powerful way to write your code.\n\u003c/p\u003e\u003cp\u003eOne way to do things is to specify your queries with a type signature, like this:\n\u003c/p\u003e\u003cpre\u003e createSongs :: Query Schema () ()\n createSongs = \"create table songs (id uuid PRIMARY KEY, title text, artist text, comment text)\"\n\n insertSong :: Query Write (UUID, Text, Text, Maybe Text) ()\n insertSong = \"insert into songs (id, title, artist, comment) values (?, ?, ?)\"\n\n getOneSong :: Query Rows UUID (Text, Text, Maybe Text)\n getOneSong = \"select title, artist, comment from songs where id=?\"\n\u003c/pre\u003e\u003cp\u003eThe three type parameters are the query type (\u003ccode\u003e\u003ca\u003eSchema\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRows\u003c/a\u003e\u003c/code\u003e) followed by the\n input and output types, which are given as tuples whose constituent types must match\n the ones in the query CQL. If you do not match them correctly, you'll get a runtime\n error when you execute the query. If you do, then the query becomes completely type\n safe.\n\u003c/p\u003e\u003cp\u003eTypes can be \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e types, in which case you can read and write a Cassandra 'null'\n in the table. Cassandra allows any column to be null, but you can lock this out by\n specifying non-Maybe types.\n\u003c/p\u003e\u003cp\u003eThe query types are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSchema\u003c/a\u003e\u003c/code\u003e for modifications to the schema. The output tuple type must be ().\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e for row inserts and updates, and such. The output tuple type must be ().\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRows\u003c/a\u003e\u003c/code\u003e for selects that give a list of rows in response.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe functions to use for these query types are \u003ccode\u003e\u003ca\u003eexecuteSchema\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecuteWrite\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eexecuteRows\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexecuteRow\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003eThe following pattern seems to work very well, especially along with your own \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e\n instances, because it gives you a place to neatly add marshalling details that keeps\n away from the body of your code.\n\u003c/p\u003e\u003cpre\u003e insertSong :: UUID -\u003e Text -\u003e Text -\u003e Maybe Text -\u003e Cas ()\n insertSong id title artist comment = executeWrite QUORUM q (id, title, artist, comment)\n      where q = \"insert into songs (id, title, artist, comment) values (?, ?, ?, ?)\"\n\u003c/pre\u003e\u003cp\u003eIncidentally, here's Haskell's little-known multi-line string syntax.\n You escape it using \\ and then another \\ where the string starts again.\n\u003c/p\u003e\u003cpre\u003e str = \"multi\\\n        \\line\"\n\u003c/pre\u003e\u003cp\u003e(gives \"multiline\")\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTo do\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Add credentials.\n\u003c/li\u003e\u003cli\u003e Improve connection pooling.\n\u003c/li\u003e\u003cli\u003e Add the ability to easily run queries in parallel.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "module",
        "fct-source": "src/Database-Cassandra-CQL.html",
        "fct-type": "module",
        "title": "CQL"
      },
      "index": {
        "description": "Haskell client for Cassandra CQL protocol For examples take look at the tests directory in the source archive Here the correspondence between CQL and Haskell types ascii ByteString bigint Int64 blob Blob boolean Bool counter Counter decimal Decimal double Double float Float int Int text varchar Text timestamp UTCTime uuid UUID varint Integer timeuuid TimeUUID inet SockAddr list map Map set Set and you can define your own CasType instances to extend these types which is very powerful way to write your code One way to do things is to specify your queries with type signature like this createSongs Query Schema createSongs create table songs id uuid PRIMARY KEY title text artist text comment text insertSong Query Write UUID Text Text Maybe Text insertSong insert into songs id title artist comment values getOneSong Query Rows UUID Text Text Maybe Text getOneSong select title artist comment from songs where id The three type parameters are the query type Schema Write or Rows followed by the input and output types which are given as tuples whose constituent types must match the ones in the query CQL If you do not match them correctly you ll get runtime error when you execute the query If you do then the query becomes completely type safe Types can be Maybe types in which case you can read and write Cassandra null in the table Cassandra allows any column to be null but you can lock this out by specifying non-Maybe types The query types are Schema for modifications to the schema The output tuple type must be Write for row inserts and updates and such The output tuple type must be Rows for selects that give list of rows in response The functions to use for these query types are executeSchema executeWrite and executeRows or executeRow respectively The following pattern seems to work very well especially along with your own CasType instances because it gives you place to neatly add marshalling details that keeps away from the body of your code insertSong UUID Text Text Maybe Text Cas insertSong id title artist comment executeWrite QUORUM id title artist comment where insert into songs id title artist comment values Incidentally here Haskell little-known multi-line string syntax You escape it using and then another where the string starts again str multi line gives multiline To do Add credentials Improve connection pooling Add the ability to easily run queries in parallel",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CQL",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Blob",
      "description": {
        "fct-descr": "\u003cp\u003eIf you wrap this round a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it will be treated as a \u003cem\u003eblob\u003c/em\u003e type\n instead of \u003cem\u003eascii\u003c/em\u003e (if it was a plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type).\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#Blob",
        "fct-type": "newtype",
        "title": "Blob"
      },
      "index": {
        "description": "If you wrap this round ByteString it will be treated as blob type instead of ascii if it was plain ByteString type",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Blob",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CType",
      "description": {
        "fct-descr": "\u003cp\u003eCassandra data types as used in metadata.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "data",
        "title": "CType"
      },
      "index": {
        "description": "Cassandra data types as used in metadata",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CType",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Cas",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad used to run Cassandra queries in.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Cas",
        "fct-type": "data",
        "title": "Cas"
      },
      "index": {
        "description": "The monad used to run Cassandra queries in",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Cas",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CasType",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for types that can be used in query arguments or column values in\n returned results.\n\u003c/p\u003e\u003cp\u003eTo define your own newtypes for Cassandra data, you only need to define \u003ccode\u003e\u003ca\u003egetCas\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputCas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecasType\u003c/a\u003e\u003c/code\u003e, like this:\n\u003c/p\u003e\u003cpre\u003e newtype UserId = UserId UUID deriving (Eq, Show)\n\n instance CasType UserId where\n     getCas = UserId \u003c$\u003e getCas\n     putCas (UserId i) = putCas i\n     casType (UserId i) = casType i\n\u003c/pre\u003e\u003cp\u003eThe same can be done more simply using the \u003cem\u003eGeneralizedNewtypeDeriving\u003c/em\u003e language\n extension, e.g.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE GeneralizedNewtypeDeriving #-}\n\n ...\n newtype UserId = UserId UUID deriving (Eq, Show, CasType)\n\u003c/pre\u003e\u003cp\u003eIf you have a more complex type you want to store as a Cassandra blob, you could\n write an instance like this (assuming it's an instance of the \u003cem\u003ecereal\u003c/em\u003e package's\n \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e class):\n\u003c/p\u003e\u003cpre\u003e instance CasType User where\n     getCas = decode . unBlob \u003c$\u003e getCas\n     putCas = putCas . Blob . encode\n     casType _ = CBlob\n\u003c/pre\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "class",
        "fct-source": "src/Database-Cassandra-CQL.html#CasType",
        "fct-type": "class",
        "title": "CasType"
      },
      "index": {
        "description": "type class for types that can be used in query arguments or column values in returned results To define your own newtypes for Cassandra data you only need to define getCas putCas and casType like this newtype UserId UserId UUID deriving Eq Show instance CasType UserId where getCas UserId getCas putCas UserId putCas casType UserId casType The same can be done more simply using the GeneralizedNewtypeDeriving language extension e.g LANGUAGE GeneralizedNewtypeDeriving newtype UserId UserId UUID deriving Eq Show CasType If you have more complex type you want to store as Cassandra blob you could write an instance like this assuming it an instance of the cereal package Serialize class instance CasType User where getCas decode unBlob getCas putCas putCas Blob encode casType CBlob",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CasType",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cas Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CasValues",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for a tuple of \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e instances, representing either a list of\n arguments for a query, or the values in a row of returned query results.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "class",
        "fct-source": "src/Database-Cassandra-CQL.html#CasValues",
        "fct-type": "class",
        "title": "CasValues"
      },
      "index": {
        "description": "type class for tuple of CasType instances representing either list of arguments for query or the values in row of returned query results",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CasValues",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cas Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CassandraCommsError",
      "description": {
        "fct-descr": "\u003cp\u003eAll errors at the communications level are reported with this exception\n (\u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003es from socket I/O are always wrapped), and this exception\n typically would mean that a retry is warranted.\n\u003c/p\u003e\u003cp\u003eNote that this exception isn't guaranteed to be a transient one, so a limit\n on the number of retries is likely to be a good idea.\n \u003ccode\u003e\u003ca\u003eLocalProtocolError\u003c/a\u003e\u003c/code\u003e probably indicates a corrupted database or driver\n bug.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "data",
        "title": "CassandraCommsError"
      },
      "index": {
        "description": "All errors at the communications level are reported with this exception IOException from socket are always wrapped and this exception typically would mean that retry is warranted Note that this exception isn guaranteed to be transient one so limit on the number of retries is likely to be good idea LocalProtocolError probably indicates corrupted database or driver bug",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CassandraCommsError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cassandra Comms Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CassandraException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception that indicates an error originating in the Cassandra server.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "data",
        "title": "CassandraException"
      },
      "index": {
        "description": "An exception that indicates an error originating in the Cassandra server",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CassandraException",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cassandra Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Change",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Change",
        "fct-type": "data",
        "title": "Change"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Change",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:ColumnSpec",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about a table column.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#ColumnSpec",
        "fct-type": "data",
        "title": "ColumnSpec"
      },
      "index": {
        "description": "Information about table column",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ColumnSpec",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Column Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Consistency",
      "description": {
        "fct-descr": "\u003cp\u003eCassandra consistency level. See the Cassandra documentation for an explanation.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "data",
        "title": "Consistency"
      },
      "index": {
        "description": "Cassandra consistency level See the Cassandra documentation for an explanation",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Consistency",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Consistency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Counter",
      "description": {
        "fct-descr": "\u003cp\u003eA Cassandra distributed counter value.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#Counter",
        "fct-type": "newtype",
        "title": "Counter"
      },
      "index": {
        "description": "Cassandra distributed counter value",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Counter",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Keyspace",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a Cassandra keyspace. See the Cassandra documentation for more\n information.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#Keyspace",
        "fct-type": "newtype",
        "title": "Keyspace"
      },
      "index": {
        "description": "The name of Cassandra keyspace See the Cassandra documentation for more information",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Keyspace",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Keyspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Metadata",
      "description": {
        "fct-descr": "\u003cp\u003eThe specification of a list of result set columns.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Metadata",
        "fct-type": "data",
        "title": "Metadata"
      },
      "index": {
        "description": "The specification of list of result set columns",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Metadata",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Metadata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:MonadCassandra",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "class",
        "fct-source": "src/Database-Cassandra-CQL.html#MonadCassandra",
        "fct-type": "class",
        "title": "MonadCassandra"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "MonadCassandra",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Monad Cassandra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Pool",
      "description": {
        "fct-descr": "\u003cp\u003eA handle for the state of the connection pool.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Pool",
        "fct-type": "data",
        "title": "Pool"
      },
      "index": {
        "description": "handle for the state of the connection pool",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Pool",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:PreparedQueryID",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#PreparedQueryID",
        "fct-type": "newtype",
        "title": "PreparedQueryID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "PreparedQueryID",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Prepared Query ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eThe text of a CQL query, along with type parameters to make the query type safe.\n The type arguments are \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e, followed by input and output column types for the\n query each represented as a tuple.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eDataKinds\u003c/em\u003e language extension is required for \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "The text of CQL query along with type parameters to make the query type safe The type arguments are Style followed by input and output column types for the query each represented as tuple The DataKinds language extension is required for Style",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Query",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eA low-level query result used with \u003ccode\u003e\u003ca\u003eexecuteRaw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "low-level query result used with executeRaw",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Result",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Server",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "type",
        "fct-source": "src/Database-Cassandra-CQL.html#Server",
        "fct-type": "type",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Server",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eThe first type argument for Query. Tells us what kind of query it is. \n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "The first type argument for Query Tells us what kind of query it is",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Style",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a Cassandra table (a.k.a. column family).\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#Table",
        "fct-type": "newtype",
        "title": "Table"
      },
      "index": {
        "description": "The name of Cassandra table a.k.a column family",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Table",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TableSpec",
      "description": {
        "fct-descr": "\u003cp\u003eA fully qualified identification of a table that includes the \u003ccode\u003e\u003ca\u003eKeyspace\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#TableSpec",
        "fct-type": "data",
        "title": "TableSpec"
      },
      "index": {
        "description": "fully qualified identification of table that includes the Keyspace",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TableSpec",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Table Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TimeUUID",
      "description": {
        "fct-descr": "\u003cp\u003eIf you wrap this round a \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e then it is treated as a \u003cem\u003etimeuuid\u003c/em\u003e type instead of\n \u003cem\u003euuid\u003c/em\u003e (if it was a plain \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e type).\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Cassandra-CQL.html#TimeUUID",
        "fct-type": "newtype",
        "title": "TimeUUID"
      },
      "index": {
        "description": "If you wrap this round UUID then it is treated as timeuuid type instead of uuid if it was plain UUID type",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TimeUUID",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Time UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TransportDirection",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "data",
        "fct-source": "src/Database-Cassandra-CQL.html#TransportDirection",
        "fct-type": "data",
        "title": "TransportDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TransportDirection",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Transport Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ALL",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ALL",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "ALL"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ALL",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "ALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ANY",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ANY",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "ANY"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ANY",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:AlreadyExists",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "AlreadyExists Text Keyspace Table Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "AlreadyExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "AlreadyExists",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Already Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:AuthenticationException",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "AuthenticationException Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "function",
        "title": "AuthenticationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "AuthenticationException",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Authentication Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:BadCredentials",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "BadCredentials Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "BadCredentials"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "BadCredentials",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Bad Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Blob",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Blob",
        "fct-source": "src/Database-Cassandra-CQL.html#Blob",
        "fct-type": "function",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Blob",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CAscii",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CAscii",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CAscii"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CAscii",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CAscii",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBigint",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CBigint",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CBigint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CBigint",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CBigint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBlob",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CBlob",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CBlob",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CBlob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBoolean",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CBoolean",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CBoolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CBoolean",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CBoolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CCounter",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CCounter",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CCounter",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CCounter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CCustom",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CCustom Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CCustom"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CCustom",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CCustom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CDecimal",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CDecimal",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CDecimal",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CDecimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CDouble",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CDouble",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CDouble",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CDouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CFloat",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CFloat",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CFloat",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CInet",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CInet",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CInet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CInet",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CInet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CInt",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CInt",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CInt",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CList",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CList CType",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CList",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CMap",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CMap CType CType",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CMap",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CMaybe",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CMaybe CType",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CMaybe",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CREATED",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CREATED",
        "fct-source": "src/Database-Cassandra-CQL.html#Change",
        "fct-type": "function",
        "title": "CREATED"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CREATED",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CREATED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CSet",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CSet CType",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CSet",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CText",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CText",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CText",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CTimestamp",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CTimestamp",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CTimestamp",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CTimestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CTimeuuid",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CTimeuuid",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CTimeuuid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CTimeuuid",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CTimeuuid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CUuid",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CUuid",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CUuid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CUuid",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CUuid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CVarint",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CVarint",
        "fct-source": "src/Database-Cassandra-CQL.html#CType",
        "fct-type": "function",
        "title": "CVarint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CVarint",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "CVarint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CassandraIOException",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "CassandraIOException IOException",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "function",
        "title": "CassandraIOException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "CassandraIOException",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cassandra IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ColumnSpec",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ColumnSpec TableSpec Text CType",
        "fct-source": "src/Database-Cassandra-CQL.html#ColumnSpec",
        "fct-type": "function",
        "title": "ColumnSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ColumnSpec",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Column Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ConfigError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ConfigError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "ConfigError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ConfigError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Config Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Counter",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Counter",
        "fct-source": "src/Database-Cassandra-CQL.html#Counter",
        "fct-type": "function",
        "title": "Counter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Counter",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:DROPPED",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "DROPPED",
        "fct-source": "src/Database-Cassandra-CQL.html#Change",
        "fct-type": "function",
        "title": "DROPPED"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "DROPPED",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "DROPPED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:EACH_QUORUM",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "EACH_QUORUM",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "EACH_QUORUM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "EACH_QUORUM",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "EACH QUORUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Invalid",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Invalid Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "Invalid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Invalid",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:IsBootstrapping",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "IsBootstrapping Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "IsBootstrapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "IsBootstrapping",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Is Bootstrapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Keyspace",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Keyspace Text",
        "fct-source": "src/Database-Cassandra-CQL.html#Keyspace",
        "fct-type": "function",
        "title": "Keyspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Keyspace",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Keyspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:LOCAL_QUORUM",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "LOCAL_QUORUM",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "LOCAL_QUORUM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "LOCAL_QUORUM",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "LOCAL QUORUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:LocalProtocolError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "LocalProtocolError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "function",
        "title": "LocalProtocolError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "LocalProtocolError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Local Protocol Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Metadata",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Metadata [ColumnSpec]",
        "fct-source": "src/Database-Cassandra-CQL.html#Metadata",
        "fct-type": "function",
        "title": "Metadata"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Metadata",
        "normalized": "Metadata[ColumnSpec]",
        "package": "cassandra-cql",
        "partial": "Metadata",
        "signature": "Metadata[ColumnSpec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ONE",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ONE",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "ONE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ONE",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "ONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Overloaded",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Overloaded Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "Overloaded"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Overloaded",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Overloaded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Prepared",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Prepared PreparedQueryID Metadata",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "function",
        "title": "Prepared"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Prepared",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Prepared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:PreparedQueryID",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "PreparedQueryID ByteString",
        "fct-source": "src/Database-Cassandra-CQL.html#PreparedQueryID",
        "fct-type": "function",
        "title": "PreparedQueryID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "PreparedQueryID",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Prepared Query ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ProtocolError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ProtocolError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "ProtocolError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ProtocolError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Protocol Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:QUORUM",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "QUORUM",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "QUORUM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "QUORUM",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "QUORUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ReadTimeout",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ReadTimeout Text Consistency Int Int Bool Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "ReadTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ReadTimeout",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Read Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Rows",
      "description": {
        "fct-descr": "\u003cp\u003eA query that returns a list of rows, such as SELECT\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Rows",
        "fct-source": "src/Database-Cassandra-CQL.html#Style",
        "fct-type": "function",
        "title": "Rows"
      },
      "index": {
        "description": "query that returns list of rows such as SELECT",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Rows",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Rows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:RowsResult",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "RowsResult Metadata [vs]",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "function",
        "title": "RowsResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "RowsResult",
        "normalized": "RowsResult Metadata[a]",
        "package": "cassandra-cql",
        "partial": "Rows Result",
        "signature": "RowsResult Metadata[vs]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Schema",
      "description": {
        "fct-descr": "\u003cp\u003eA query that modifies the schema, such as DROP TABLE or CREATE TABLE\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Schema",
        "fct-source": "src/Database-Cassandra-CQL.html#Style",
        "fct-type": "function",
        "title": "Schema"
      },
      "index": {
        "description": "query that modifies the schema such as DROP TABLE or CREATE TABLE",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Schema",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Schema",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SchemaChange",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "SchemaChange Change Keyspace Table",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "function",
        "title": "SchemaChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "SchemaChange",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Schema Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ServerError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ServerError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "ServerError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ServerError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Server Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SetKeyspace",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "SetKeyspace Text",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "function",
        "title": "SetKeyspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "SetKeyspace",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Set Keyspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ShortRead",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ShortRead",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "function",
        "title": "ShortRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ShortRead",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Short Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SyntaxError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "SyntaxError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "SyntaxError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "SyntaxError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Syntax Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:THREE",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "THREE",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "THREE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "THREE",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "THREE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TWO",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TWO",
        "fct-source": "src/Database-Cassandra-CQL.html#Consistency",
        "fct-type": "function",
        "title": "TWO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TWO",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "TWO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Table",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Table Text",
        "fct-source": "src/Database-Cassandra-CQL.html#Table",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Table",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TableSpec",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TableSpec Keyspace Table",
        "fct-source": "src/Database-Cassandra-CQL.html#TableSpec",
        "fct-type": "function",
        "title": "TableSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TableSpec",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Table Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TimeUUID",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TimeUUID",
        "fct-source": "src/Database-Cassandra-CQL.html#TimeUUID",
        "fct-type": "function",
        "title": "TimeUUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TimeUUID",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Time UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TransportReceiving",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TransportReceiving",
        "fct-source": "src/Database-Cassandra-CQL.html#TransportDirection",
        "fct-type": "function",
        "title": "TransportReceiving"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TransportReceiving",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Transport Receiving",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TransportSending",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TransportSending",
        "fct-source": "src/Database-Cassandra-CQL.html#TransportDirection",
        "fct-type": "function",
        "title": "TransportSending"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TransportSending",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Transport Sending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TruncateError",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "TruncateError Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "TruncateError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "TruncateError",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Truncate Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:UPDATED",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "UPDATED",
        "fct-source": "src/Database-Cassandra-CQL.html#Change",
        "fct-type": "function",
        "title": "UPDATED"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "UPDATED",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "UPDATED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Unauthorized",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Unauthorized Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "Unauthorized"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Unauthorized",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Unauthorized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:UnavailableException",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "UnavailableException Text Consistency Int Int Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "UnavailableException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "UnavailableException",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Unavailable Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Unprepared",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Unprepared Text PreparedQueryID Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "Unprepared"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Unprepared",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Unprepared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ValueMarshallingException",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ValueMarshallingException TransportDirection Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
        "fct-type": "function",
        "title": "ValueMarshallingException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "ValueMarshallingException",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Value Marshalling Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Void",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Void",
        "fct-source": "src/Database-Cassandra-CQL.html#Result",
        "fct-type": "function",
        "title": "Void"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Void",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Write",
      "description": {
        "fct-descr": "\u003cp\u003eA query that writes data, such as an INSERT or UPDATE\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Write",
        "fct-source": "src/Database-Cassandra-CQL.html#Style",
        "fct-type": "function",
        "title": "Write"
      },
      "index": {
        "description": "query that writes data such as an INSERT or UPDATE",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "Write",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:WriteTimeout",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "WriteTimeout Text Consistency Int Int Text Text",
        "fct-source": "src/Database-Cassandra-CQL.html#CassandraException",
        "fct-type": "function",
        "title": "WriteTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "WriteTimeout",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Write Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casNothing",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "a",
        "fct-source": "src/Database-Cassandra-CQL.html#casNothing",
        "fct-type": "method",
        "title": "casNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "casNothing",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casObliterate",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "a -\u003e ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Database-Cassandra-CQL.html#casObliterate",
        "fct-type": "method",
        "title": "casObliterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "casObliterate",
        "normalized": "a-\u003eByteString-\u003eMaybe ByteString",
        "package": "cassandra-cql",
        "partial": "Obliterate",
        "signature": "a-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casType",
      "description": {
        "fct-descr": "\u003cp\u003eFor a given Haskell type given as (\u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e :: a), tell the caller how Cassandra\n represents it.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "a -\u003e CType",
        "fct-source": "src/Database-Cassandra-CQL.html#casType",
        "fct-type": "method",
        "title": "casType"
      },
      "index": {
        "description": "For given Haskell type given as undefined tell the caller how Cassandra represents it",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "casType",
        "normalized": "a-\u003eCType",
        "package": "cassandra-cql",
        "partial": "Type",
        "signature": "a-\u003eCType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:decodeValues",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "[(CType, Maybe ByteString)] -\u003e Either CodingFailure v",
        "fct-source": "src/Database-Cassandra-CQL.html#decodeValues",
        "fct-type": "method",
        "title": "decodeValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "decodeValues",
        "normalized": "[(CType,Maybe ByteString)]-\u003eEither CodingFailure a",
        "package": "cassandra-cql",
        "partial": "Values",
        "signature": "[(CType,Maybe ByteString)]-\u003eEither CodingFailure v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:encodeValues",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "v -\u003e [CType] -\u003e Either CodingFailure [Maybe ByteString]",
        "fct-source": "src/Database-Cassandra-CQL.html#encodeValues",
        "fct-type": "method",
        "title": "encodeValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "encodeValues",
        "normalized": "a-\u003e[CType]-\u003eEither CodingFailure[Maybe ByteString]",
        "package": "cassandra-cql",
        "partial": "Values",
        "signature": "v-\u003e[CType]-\u003eEither CodingFailure[Maybe ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eA low-level function in case you need some rarely-used capabilities. \n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Query style any_i any_o -\u003e i -\u003e Consistency -\u003e m (Result [Maybe ByteString])",
        "fct-source": "src/Database-Cassandra-CQL.html#executeRaw",
        "fct-type": "function",
        "title": "executeRaw"
      },
      "index": {
        "description": "low-level function in case you need some rarely-used capabilities",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "executeRaw",
        "normalized": "Query a b c-\u003ed-\u003eConsistency-\u003ee(Result[Maybe ByteString])",
        "package": "cassandra-cql",
        "partial": "Raw",
        "signature": "Query style any_i any_o-\u003ei-\u003eConsistency-\u003em(Result[Maybe ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRow",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for \u003ccode\u003e\u003ca\u003eexecuteRows\u003c/a\u003e\u003c/code\u003e useful in situations where you are only expecting one row\n to be returned.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Consistency-\u003e Query Rows i o-\u003e i-\u003e m (Maybe o)",
        "fct-type": "function",
        "title": "executeRow"
      },
      "index": {
        "description": "Helper for executeRows useful in situations where you are only expecting one row to be returned",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "executeRow",
        "normalized": "Consistency-\u003eQuery Rows a b-\u003ea-\u003ec(Maybe b)",
        "package": "cassandra-cql",
        "partial": "Row",
        "signature": "Consistency-\u003eQuery Rows i o-\u003ei-\u003em(Maybe o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRows",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a query that returns rows.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Consistency-\u003e Query Rows i o-\u003e i-\u003e m [o]",
        "fct-type": "function",
        "title": "executeRows"
      },
      "index": {
        "description": "Execute query that returns rows",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "executeRows",
        "normalized": "Consistency-\u003eQuery Rows a b-\u003ea-\u003ec[b]",
        "package": "cassandra-cql",
        "partial": "Rows",
        "signature": "Consistency-\u003eQuery Rows i o-\u003ei-\u003em[o]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeSchema",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a schema change, such as creating or dropping a table.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Consistency-\u003e Query Schema i ()-\u003e i-\u003e m (Change, Keyspace, Table)",
        "fct-type": "function",
        "title": "executeSchema"
      },
      "index": {
        "description": "Execute schema change such as creating or dropping table",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "executeSchema",
        "normalized": "Consistency-\u003eQuery Schema a()-\u003ea-\u003eb(Change,Keyspace,Table)",
        "package": "cassandra-cql",
        "partial": "Schema",
        "signature": "Consistency-\u003eQuery Schema i()-\u003ei-\u003em(Change,Keyspace,Table)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeWrite",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a write operation that returns void.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Consistency-\u003e Query Write i ()-\u003e i-\u003e m ()",
        "fct-type": "function",
        "title": "executeWrite"
      },
      "index": {
        "description": "Execute write operation that returns void",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "executeWrite",
        "normalized": "Consistency-\u003eQuery Write a()-\u003ea-\u003eb()",
        "package": "cassandra-cql",
        "partial": "Write",
        "signature": "Consistency-\u003eQuery Write i()-\u003ei-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:getCas",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Get a",
        "fct-source": "src/Database-Cassandra-CQL.html#getCas",
        "fct-type": "method",
        "title": "getCas"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "getCas",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:getCassandraPool",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "m Pool",
        "fct-source": "src/Database-Cassandra-CQL.html#getCassandraPool",
        "fct-type": "method",
        "title": "getCassandraPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "getCassandraPool",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Cassandra Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:metadataTypes",
      "description": {
        "fct-descr": "\u003cp\u003eA helper for extracting the types from a metadata definition.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Metadata -\u003e [CType]",
        "fct-source": "src/Database-Cassandra-CQL.html#metadataTypes",
        "fct-type": "function",
        "title": "metadataTypes"
      },
      "index": {
        "description": "helper for extracting the types from metadata definition",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "metadataTypes",
        "normalized": "Metadata-\u003e[CType]",
        "package": "cassandra-cql",
        "partial": "Types",
        "signature": "Metadata-\u003e[CType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:newPool",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a pool of Cassandra connections.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "[Server] -\u003e Keyspace -\u003e IO Pool",
        "fct-source": "src/Database-Cassandra-CQL.html#newPool",
        "fct-type": "function",
        "title": "newPool"
      },
      "index": {
        "description": "Construct pool of Cassandra connections",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "newPool",
        "normalized": "[Server]-\u003eKeyspace-\u003eIO Pool",
        "package": "cassandra-cql",
        "partial": "Pool",
        "signature": "[Server]-\u003eKeyspace-\u003eIO Pool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:putCas",
      "description": {
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Database-Cassandra-CQL.html#putCas",
        "fct-type": "method",
        "title": "putCas"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "putCas",
        "normalized": "a-\u003ePut",
        "package": "cassandra-cql",
        "partial": "Cas",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a query. Another way to construct one is as an overloaded string through\n the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance if you turn on the \u003cem\u003eOverloadedStrings\u003c/em\u003e language extension, e.g.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n ...\n\n getOneSong :: Query Rows UUID (Text, Text, Maybe Text)\n getOneSong = \"select title, artist, comment from songs where id=?\"\n\u003c/pre\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Text -\u003e Query style i o",
        "fct-source": "src/Database-Cassandra-CQL.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Construct query Another way to construct one is as an overloaded string through the IsString instance if you turn on the OverloadedStrings language extension e.g LANGUAGE OverloadedStrings getOneSong Query Rows UUID Text Text Maybe Text getOneSong select title artist comment from songs where id",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "query",
        "normalized": "Text-\u003eQuery a b c",
        "package": "cassandra-cql",
        "partial": "",
        "signature": "Text-\u003eQuery style i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:runCas",
      "description": {
        "fct-descr": "\u003cp\u003eExecute Cassandra queries.\n\u003c/p\u003e",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Pool -\u003e Cas a -\u003e IO a",
        "fct-source": "src/Database-Cassandra-CQL.html#runCas",
        "fct-type": "function",
        "title": "runCas"
      },
      "index": {
        "description": "Execute Cassandra queries",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "runCas",
        "normalized": "Pool-\u003eCas a-\u003eIO a",
        "package": "cassandra-cql",
        "partial": "Cas",
        "signature": "Pool-\u003eCas a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unBlob",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-Cassandra-CQL.html#Blob",
        "fct-type": "function",
        "title": "unBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "unBlob",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "Int64",
        "fct-source": "src/Database-Cassandra-CQL.html#Counter",
        "fct-type": "function",
        "title": "unCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "unCounter",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unTimeUUID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Cassandra.CQL",
        "fct-package": "cassandra-cql",
        "fct-signature": "UUID",
        "fct-source": "src/Database-Cassandra-CQL.html#TimeUUID",
        "fct-type": "function",
        "title": "unTimeUUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Cassandra CQL",
        "module": "Database.Cassandra.CQL",
        "name": "unTimeUUID",
        "normalized": "",
        "package": "cassandra-cql",
        "partial": "Time UUID",
        "signature": ""
      }
    }
  }
]