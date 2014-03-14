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
        "word": "cassandra-cql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell client for Cassandra's CQL protocol\n\u003c/p\u003e\u003cp\u003eFor examples, take a look at the \u003cem\u003etests\u003c/em\u003e directory in the source archive. \n\u003c/p\u003e\u003cp\u003eHere's the correspondence between CQL and Haskell types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ascii - \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e bigint - \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e blob - \u003ccode\u003e\u003ca\u003eBlob\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e boolean - \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e counter - \u003ccode\u003e\u003ca\u003eCounter\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e decimal - \u003ccode\u003e\u003ca\u003eDecimal\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e double - \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e float - \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e int - \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e text / varchar - \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e timestamp - \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e uuid - \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e varint - \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e timeuuid - \u003ccode\u003e\u003ca\u003eTimeUUID\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e inet - \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e list\u003ca\u003e - [a]\n\u003c/li\u003e\u003cli\u003e map\u003ca, b\u003e - \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e a b\n\u003c/li\u003e\u003cli\u003e set\u003ca\u003e - \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e b\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e...and you can define your own \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e instances to extend these types, which is\n a very powerful way to write your code.\n\u003c/p\u003e\u003cp\u003eOne way to do things is to specify your queries with a type signature, like this:\n\u003c/p\u003e\u003cpre\u003e createSongs :: Query Schema () ()\n createSongs = \"create table songs (id uuid PRIMARY KEY, title text, artist text, comment text)\"\n\n insertSong :: Query Write (UUID, Text, Text, Maybe Text) ()\n insertSong = \"insert into songs (id, title, artist, comment) values (?, ?, ?)\"\n\n getOneSong :: Query Rows UUID (Text, Text, Maybe Text)\n getOneSong = \"select title, artist, comment from songs where id=?\"\n\u003c/pre\u003e\u003cp\u003eThe three type parameters are the query type (\u003ccode\u003e\u003ca\u003eSchema\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRows\u003c/a\u003e\u003c/code\u003e) followed by the\n input and output types, which are given as tuples whose constituent types must match\n the ones in the query CQL. If you do not match them correctly, you'll get a runtime\n error when you execute the query. If you do, then the query becomes completely type\n safe.\n\u003c/p\u003e\u003cp\u003eTypes can be \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e types, in which case you can read and write a Cassandra 'null'\n in the table. Cassandra allows any column to be null, but you can lock this out by\n specifying non-Maybe types.\n\u003c/p\u003e\u003cp\u003eThe query types are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSchema\u003c/a\u003e\u003c/code\u003e for modifications to the schema. The output tuple type must be ().\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e for row inserts and updates, and such. The output tuple type must be ().\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRows\u003c/a\u003e\u003c/code\u003e for selects that give a list of rows in response.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe functions to use for these query types are \u003ccode\u003e\u003ca\u003eexecuteSchema\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecuteWrite\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eexecuteRows\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexecuteRow\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003eThe following pattern seems to work very well, especially along with your own \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e\n instances, because it gives you a place to neatly add marshalling details that keeps\n away from the body of your code.\n\u003c/p\u003e\u003cpre\u003e insertSong :: UUID -\u003e Text -\u003e Text -\u003e Maybe Text -\u003e Cas ()\n insertSong id title artist comment = executeWrite QUORUM q (id, title, artist, comment)\n      where q = \"insert into songs (id, title, artist, comment) values (?, ?, ?, ?)\"\n\u003c/pre\u003e\u003cp\u003eIncidentally, here's Haskell's little-known multi-line string syntax.\n You escape it using \\ and then another \\ where the string starts again.\n\u003c/p\u003e\u003cpre\u003e str = \"multi\\\n        \\line\"\n\u003c/pre\u003e\u003cp\u003e(gives \"multiline\")\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTo do\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Add credentials.\n\u003c/li\u003e\u003cli\u003e Improve connection pooling.\n\u003c/li\u003e\u003cli\u003e Add the ability to easily run queries in parallel.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CQL",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell client for Cassandra CQL protocol For examples take look at the tests directory in the source archive Here the correspondence between CQL and Haskell types ascii ByteString bigint Int64 blob Blob boolean Bool counter Counter decimal Decimal double Double float Float int Int text varchar Text timestamp UTCTime uuid UUID varint Integer timeuuid TimeUUID inet SockAddr list map Map set Set and you can define your own CasType instances to extend these types which is very powerful way to write your code One way to do things is to specify your queries with type signature like this createSongs Query Schema createSongs create table songs id uuid PRIMARY KEY title text artist text comment text insertSong Query Write UUID Text Text Maybe Text insertSong insert into songs id title artist comment values getOneSong Query Rows UUID Text Text Maybe Text getOneSong select title artist comment from songs where id The three type parameters are the query type Schema Write or Rows followed by the input and output types which are given as tuples whose constituent types must match the ones in the query CQL If you do not match them correctly you ll get runtime error when you execute the query If you do then the query becomes completely type safe Types can be Maybe types in which case you can read and write Cassandra null in the table Cassandra allows any column to be null but you can lock this out by specifying non-Maybe types The query types are Schema for modifications to the schema The output tuple type must be Write for row inserts and updates and such The output tuple type must be Rows for selects that give list of rows in response The functions to use for these query types are executeSchema executeWrite and executeRows or executeRow respectively The following pattern seems to work very well especially along with your own CasType instances because it gives you place to neatly add marshalling details that keeps away from the body of your code insertSong UUID Text Text Maybe Text Cas insertSong id title artist comment executeWrite QUORUM id title artist comment where insert into songs id title artist comment values Incidentally here Haskell little-known multi-line string syntax You escape it using and then another where the string starts again str multi line gives multiline To do Add credentials Improve connection pooling Add the ability to easily run queries in parallel",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CQL",
          "package": "cassandra-cql",
          "partial": "CQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you wrap this round a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it will be treated as a \u003cem\u003eblob\u003c/em\u003e type\n instead of \u003cem\u003eascii\u003c/em\u003e (if it was a plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type).\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Blob",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Blob",
          "type": "newtype"
        },
        "index": {
          "description": "If you wrap this round ByteString it will be treated as blob type instead of ascii if it was plain ByteString type",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Blob",
          "package": "cassandra-cql",
          "partial": "Blob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCassandra data types as used in metadata.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CType",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "data"
        },
        "index": {
          "description": "Cassandra data types as used in metadata",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CType",
          "package": "cassandra-cql",
          "partial": "CType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad used to run Cassandra queries in.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Cas",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Cas",
          "type": "data"
        },
        "index": {
          "description": "The monad used to run Cassandra queries in",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Cas",
          "package": "cassandra-cql",
          "partial": "Cas",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Cas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for types that can be used in query arguments or column values in\n returned results.\n\u003c/p\u003e\u003cp\u003eTo define your own newtypes for Cassandra data, you only need to define \u003ccode\u003e\u003ca\u003egetCas\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputCas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecasType\u003c/a\u003e\u003c/code\u003e, like this:\n\u003c/p\u003e\u003cpre\u003e newtype UserId = UserId UUID deriving (Eq, Show)\n\n instance CasType UserId where\n     getCas = UserId \u003c$\u003e getCas\n     putCas (UserId i) = putCas i\n     casType (UserId i) = casType i\n\u003c/pre\u003e\u003cp\u003eThe same can be done more simply using the \u003cem\u003eGeneralizedNewtypeDeriving\u003c/em\u003e language\n extension, e.g.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE GeneralizedNewtypeDeriving #-}\n\n ...\n newtype UserId = UserId UUID deriving (Eq, Show, CasType)\n\u003c/pre\u003e\u003cp\u003eIf you have a more complex type you want to store as a Cassandra blob, you could\n write an instance like this (assuming it's an instance of the \u003cem\u003ecereal\u003c/em\u003e package's\n \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e class):\n\u003c/p\u003e\u003cpre\u003e instance CasType User where\n     getCas = decode . unBlob \u003c$\u003e getCas\n     putCas = putCas . Blob . encode\n     casType _ = CBlob\n\u003c/pre\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CasType",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#CasType",
          "type": "class"
        },
        "index": {
          "description": "type class for types that can be used in query arguments or column values in returned results To define your own newtypes for Cassandra data you only need to define getCas putCas and casType like this newtype UserId UserId UUID deriving Eq Show instance CasType UserId where getCas UserId getCas putCas UserId putCas casType UserId casType The same can be done more simply using the GeneralizedNewtypeDeriving language extension e.g LANGUAGE GeneralizedNewtypeDeriving newtype UserId UserId UUID deriving Eq Show CasType If you have more complex type you want to store as Cassandra blob you could write an instance like this assuming it an instance of the cereal package Serialize class instance CasType User where getCas decode unBlob getCas putCas putCas Blob encode casType CBlob",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CasType",
          "package": "cassandra-cql",
          "partial": "Cas Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CasType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for a tuple of \u003ccode\u003e\u003ca\u003eCasType\u003c/a\u003e\u003c/code\u003e instances, representing either a list of\n arguments for a query, or the values in a row of returned query results.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CasValues",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#CasValues",
          "type": "class"
        },
        "index": {
          "description": "type class for tuple of CasType instances representing either list of arguments for query or the values in row of returned query results",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CasValues",
          "package": "cassandra-cql",
          "partial": "Cas Values",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CasValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll errors at the communications level are reported with this exception\n (\u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003es from socket I/O are always wrapped), and this exception\n typically would mean that a retry is warranted.\n\u003c/p\u003e\u003cp\u003eNote that this exception isn't guaranteed to be a transient one, so a limit\n on the number of retries is likely to be a good idea.\n \u003ccode\u003e\u003ca\u003eLocalProtocolError\u003c/a\u003e\u003c/code\u003e probably indicates a corrupted database or driver\n bug.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CassandraCommsError",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "data"
        },
        "index": {
          "description": "All errors at the communications level are reported with this exception IOException from socket are always wrapped and this exception typically would mean that retry is warranted Note that this exception isn guaranteed to be transient one so limit on the number of retries is likely to be good idea LocalProtocolError probably indicates corrupted database or driver bug",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CassandraCommsError",
          "package": "cassandra-cql",
          "partial": "Cassandra Comms Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CassandraCommsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception that indicates an error originating in the Cassandra server.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "CassandraException",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "data"
        },
        "index": {
          "description": "An exception that indicates an error originating in the Cassandra server",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CassandraException",
          "package": "cassandra-cql",
          "partial": "Cassandra Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:CassandraException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Change",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Change",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Change",
          "package": "cassandra-cql",
          "partial": "Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a table column.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "ColumnSpec",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#ColumnSpec",
          "type": "data"
        },
        "index": {
          "description": "Information about table column",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ColumnSpec",
          "package": "cassandra-cql",
          "partial": "Column Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:ColumnSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCassandra consistency level. See the Cassandra documentation for an explanation.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Consistency",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "data"
        },
        "index": {
          "description": "Cassandra consistency level See the Cassandra documentation for an explanation",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Consistency",
          "package": "cassandra-cql",
          "partial": "Consistency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Consistency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Cassandra distributed counter value.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Counter",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Counter",
          "type": "newtype"
        },
        "index": {
          "description": "Cassandra distributed counter value",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Counter",
          "package": "cassandra-cql",
          "partial": "Counter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a Cassandra keyspace. See the Cassandra documentation for more\n information.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Keyspace",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Keyspace",
          "type": "newtype"
        },
        "index": {
          "description": "The name of Cassandra keyspace See the Cassandra documentation for more information",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Keyspace",
          "package": "cassandra-cql",
          "partial": "Keyspace",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Keyspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specification of a list of result set columns.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Metadata",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Metadata",
          "type": "data"
        },
        "index": {
          "description": "The specification of list of result set columns",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Metadata",
          "package": "cassandra-cql",
          "partial": "Metadata",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "MonadCassandra",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#MonadCassandra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "MonadCassandra",
          "package": "cassandra-cql",
          "partial": "Monad Cassandra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:MonadCassandra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle for the state of the connection pool.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Pool",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Pool",
          "type": "data"
        },
        "index": {
          "description": "handle for the state of the connection pool",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Pool",
          "package": "cassandra-cql",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "PreparedQueryID",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#PreparedQueryID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "PreparedQueryID",
          "package": "cassandra-cql",
          "partial": "Prepared Query ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:PreparedQueryID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text of a CQL query, along with type parameters to make the query type safe.\n The type arguments are \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e, followed by input and output column types for the\n query each represented as a tuple.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eDataKinds\u003c/em\u003e language extension is required for \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Query",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Query",
          "type": "data"
        },
        "index": {
          "description": "The text of CQL query along with type parameters to make the query type safe The type arguments are Style followed by input and output column types for the query each represented as tuple The DataKinds language extension is required for Style",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Query",
          "package": "cassandra-cql",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA low-level query result used with \u003ccode\u003e\u003ca\u003eexecuteRaw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Result",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "data"
        },
        "index": {
          "description": "low-level query result used with executeRaw",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Result",
          "package": "cassandra-cql",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Server",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Server",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Server",
          "package": "cassandra-cql",
          "partial": "Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first type argument for Query. Tells us what kind of query it is. \n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Style",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Style",
          "type": "data"
        },
        "index": {
          "description": "The first type argument for Query Tells us what kind of query it is",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Style",
          "package": "cassandra-cql",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a Cassandra table (a.k.a. column family).\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Table",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#Table",
          "type": "newtype"
        },
        "index": {
          "description": "The name of Cassandra table a.k.a column family",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Table",
          "package": "cassandra-cql",
          "partial": "Table",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fully qualified identification of a table that includes the \u003ccode\u003e\u003ca\u003eKeyspace\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "TableSpec",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#TableSpec",
          "type": "data"
        },
        "index": {
          "description": "fully qualified identification of table that includes the Keyspace",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TableSpec",
          "package": "cassandra-cql",
          "partial": "Table Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TableSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you wrap this round a \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e then it is treated as a \u003cem\u003etimeuuid\u003c/em\u003e type instead of\n \u003cem\u003euuid\u003c/em\u003e (if it was a plain \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e type).\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "TimeUUID",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#TimeUUID",
          "type": "newtype"
        },
        "index": {
          "description": "If you wrap this round UUID then it is treated as timeuuid type instead of uuid if it was plain UUID type",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TimeUUID",
          "package": "cassandra-cql",
          "partial": "Time UUID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TimeUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TransportDirection",
          "package": "cassandra-cql",
          "source": "src/Database-Cassandra-CQL.html#TransportDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TransportDirection",
          "package": "cassandra-cql",
          "partial": "Transport Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#t:TransportDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ALL",
          "package": "cassandra-cql",
          "signature": "ALL",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ALL",
          "package": "cassandra-cql",
          "partial": "ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ANY",
          "package": "cassandra-cql",
          "signature": "ANY",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ANY",
          "package": "cassandra-cql",
          "partial": "ANY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ANY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "AlreadyExists",
          "package": "cassandra-cql",
          "signature": "AlreadyExists Text Keyspace Table Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "AlreadyExists",
          "package": "cassandra-cql",
          "partial": "Already Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:AlreadyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "AuthenticationException",
          "package": "cassandra-cql",
          "signature": "AuthenticationException Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "AuthenticationException",
          "package": "cassandra-cql",
          "partial": "Authentication Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:AuthenticationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "BadCredentials",
          "package": "cassandra-cql",
          "signature": "BadCredentials Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "BadCredentials",
          "package": "cassandra-cql",
          "partial": "Bad Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:BadCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Blob",
          "package": "cassandra-cql",
          "signature": "Blob",
          "source": "src/Database-Cassandra-CQL.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Blob",
          "package": "cassandra-cql",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CAscii",
          "package": "cassandra-cql",
          "signature": "CAscii",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CAscii",
          "package": "cassandra-cql",
          "partial": "CAscii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CBigint",
          "package": "cassandra-cql",
          "signature": "CBigint",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CBigint",
          "package": "cassandra-cql",
          "partial": "CBigint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBigint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CBlob",
          "package": "cassandra-cql",
          "signature": "CBlob",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CBlob",
          "package": "cassandra-cql",
          "partial": "CBlob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CBoolean",
          "package": "cassandra-cql",
          "signature": "CBoolean",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CBoolean",
          "package": "cassandra-cql",
          "partial": "CBoolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CCounter",
          "package": "cassandra-cql",
          "signature": "CCounter",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CCounter",
          "package": "cassandra-cql",
          "partial": "CCounter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CCustom",
          "package": "cassandra-cql",
          "signature": "CCustom Text",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CCustom",
          "package": "cassandra-cql",
          "partial": "CCustom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CDecimal",
          "package": "cassandra-cql",
          "signature": "CDecimal",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CDecimal",
          "package": "cassandra-cql",
          "partial": "CDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CDouble",
          "package": "cassandra-cql",
          "signature": "CDouble",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CDouble",
          "package": "cassandra-cql",
          "partial": "CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CFloat",
          "package": "cassandra-cql",
          "signature": "CFloat",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CFloat",
          "package": "cassandra-cql",
          "partial": "CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CInet",
          "package": "cassandra-cql",
          "signature": "CInet",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CInet",
          "package": "cassandra-cql",
          "partial": "CInet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CInet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CInt",
          "package": "cassandra-cql",
          "signature": "CInt",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CInt",
          "package": "cassandra-cql",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CList",
          "package": "cassandra-cql",
          "signature": "CList CType",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CList",
          "package": "cassandra-cql",
          "partial": "CList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CMap",
          "package": "cassandra-cql",
          "signature": "CMap CType CType",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CMap",
          "package": "cassandra-cql",
          "partial": "CMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CMaybe",
          "package": "cassandra-cql",
          "signature": "CMaybe CType",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CMaybe",
          "package": "cassandra-cql",
          "partial": "CMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CREATED",
          "package": "cassandra-cql",
          "signature": "CREATED",
          "source": "src/Database-Cassandra-CQL.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CREATED",
          "package": "cassandra-cql",
          "partial": "CREATED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CREATED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CSet",
          "package": "cassandra-cql",
          "signature": "CSet CType",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CSet",
          "package": "cassandra-cql",
          "partial": "CSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CText",
          "package": "cassandra-cql",
          "signature": "CText",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CText",
          "package": "cassandra-cql",
          "partial": "CText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CTimestamp",
          "package": "cassandra-cql",
          "signature": "CTimestamp",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CTimestamp",
          "package": "cassandra-cql",
          "partial": "CTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CTimeuuid",
          "package": "cassandra-cql",
          "signature": "CTimeuuid",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CTimeuuid",
          "package": "cassandra-cql",
          "partial": "CTimeuuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CTimeuuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CUuid",
          "package": "cassandra-cql",
          "signature": "CUuid",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CUuid",
          "package": "cassandra-cql",
          "partial": "CUuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CUuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CVarint",
          "package": "cassandra-cql",
          "signature": "CVarint",
          "source": "src/Database-Cassandra-CQL.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CVarint",
          "package": "cassandra-cql",
          "partial": "CVarint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CVarint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "CassandraIOException",
          "package": "cassandra-cql",
          "signature": "CassandraIOException IOException",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "CassandraIOException",
          "package": "cassandra-cql",
          "partial": "Cassandra IOException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:CassandraIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ColumnSpec",
          "package": "cassandra-cql",
          "signature": "ColumnSpec TableSpec Text CType",
          "source": "src/Database-Cassandra-CQL.html#ColumnSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ColumnSpec",
          "package": "cassandra-cql",
          "partial": "Column Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ColumnSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ConfigError",
          "package": "cassandra-cql",
          "signature": "ConfigError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ConfigError",
          "package": "cassandra-cql",
          "partial": "Config Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ConfigError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Counter",
          "package": "cassandra-cql",
          "signature": "Counter",
          "source": "src/Database-Cassandra-CQL.html#Counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Counter",
          "package": "cassandra-cql",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "DROPPED",
          "package": "cassandra-cql",
          "signature": "DROPPED",
          "source": "src/Database-Cassandra-CQL.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "DROPPED",
          "package": "cassandra-cql",
          "partial": "DROPPED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:DROPPED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "EACH_QUORUM",
          "package": "cassandra-cql",
          "signature": "EACH_QUORUM",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "EACH_QUORUM",
          "package": "cassandra-cql",
          "partial": "EACH QUORUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:EACH_QUORUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Invalid",
          "package": "cassandra-cql",
          "signature": "Invalid Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Invalid",
          "package": "cassandra-cql",
          "partial": "Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Invalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "IsBootstrapping",
          "package": "cassandra-cql",
          "signature": "IsBootstrapping Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "IsBootstrapping",
          "package": "cassandra-cql",
          "partial": "Is Bootstrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:IsBootstrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Keyspace",
          "package": "cassandra-cql",
          "signature": "Keyspace Text",
          "source": "src/Database-Cassandra-CQL.html#Keyspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Keyspace",
          "package": "cassandra-cql",
          "partial": "Keyspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Keyspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "LOCAL_QUORUM",
          "package": "cassandra-cql",
          "signature": "LOCAL_QUORUM",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "LOCAL_QUORUM",
          "package": "cassandra-cql",
          "partial": "LOCAL QUORUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:LOCAL_QUORUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "LocalProtocolError",
          "package": "cassandra-cql",
          "signature": "LocalProtocolError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "LocalProtocolError",
          "package": "cassandra-cql",
          "partial": "Local Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:LocalProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Metadata",
          "package": "cassandra-cql",
          "signature": "Metadata [ColumnSpec]",
          "source": "src/Database-Cassandra-CQL.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Metadata",
          "normalized": "Metadata[ColumnSpec]",
          "package": "cassandra-cql",
          "partial": "Metadata",
          "signature": "Metadata[ColumnSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ONE",
          "package": "cassandra-cql",
          "signature": "ONE",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ONE",
          "package": "cassandra-cql",
          "partial": "ONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Overloaded",
          "package": "cassandra-cql",
          "signature": "Overloaded Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Overloaded",
          "package": "cassandra-cql",
          "partial": "Overloaded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Overloaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Prepared",
          "package": "cassandra-cql",
          "signature": "Prepared PreparedQueryID Metadata",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Prepared",
          "package": "cassandra-cql",
          "partial": "Prepared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Prepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "PreparedQueryID",
          "package": "cassandra-cql",
          "signature": "PreparedQueryID ByteString",
          "source": "src/Database-Cassandra-CQL.html#PreparedQueryID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "PreparedQueryID",
          "package": "cassandra-cql",
          "partial": "Prepared Query ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:PreparedQueryID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ProtocolError",
          "package": "cassandra-cql",
          "signature": "ProtocolError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ProtocolError",
          "package": "cassandra-cql",
          "partial": "Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "QUORUM",
          "package": "cassandra-cql",
          "signature": "QUORUM",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "QUORUM",
          "package": "cassandra-cql",
          "partial": "QUORUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:QUORUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ReadTimeout",
          "package": "cassandra-cql",
          "signature": "ReadTimeout Text Consistency Int Int Bool Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ReadTimeout",
          "package": "cassandra-cql",
          "partial": "Read Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ReadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query that returns a list of rows, such as SELECT\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Rows",
          "package": "cassandra-cql",
          "signature": "Rows",
          "source": "src/Database-Cassandra-CQL.html#Style",
          "type": "function"
        },
        "index": {
          "description": "query that returns list of rows such as SELECT",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Rows",
          "package": "cassandra-cql",
          "partial": "Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "RowsResult",
          "package": "cassandra-cql",
          "signature": "RowsResult Metadata [vs]",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "RowsResult",
          "normalized": "RowsResult Metadata[a]",
          "package": "cassandra-cql",
          "partial": "Rows Result",
          "signature": "RowsResult Metadata[vs]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:RowsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query that modifies the schema, such as DROP TABLE or CREATE TABLE\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Schema",
          "package": "cassandra-cql",
          "signature": "Schema",
          "source": "src/Database-Cassandra-CQL.html#Style",
          "type": "function"
        },
        "index": {
          "description": "query that modifies the schema such as DROP TABLE or CREATE TABLE",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Schema",
          "package": "cassandra-cql",
          "partial": "Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "SchemaChange",
          "package": "cassandra-cql",
          "signature": "SchemaChange Change Keyspace Table",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "SchemaChange",
          "package": "cassandra-cql",
          "partial": "Schema Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SchemaChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ServerError",
          "package": "cassandra-cql",
          "signature": "ServerError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ServerError",
          "package": "cassandra-cql",
          "partial": "Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "SetKeyspace",
          "package": "cassandra-cql",
          "signature": "SetKeyspace Text",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "SetKeyspace",
          "package": "cassandra-cql",
          "partial": "Set Keyspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SetKeyspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ShortRead",
          "package": "cassandra-cql",
          "signature": "ShortRead",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ShortRead",
          "package": "cassandra-cql",
          "partial": "Short Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ShortRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "SyntaxError",
          "package": "cassandra-cql",
          "signature": "SyntaxError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "SyntaxError",
          "package": "cassandra-cql",
          "partial": "Syntax Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:SyntaxError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "THREE",
          "package": "cassandra-cql",
          "signature": "THREE",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "THREE",
          "package": "cassandra-cql",
          "partial": "THREE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:THREE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TWO",
          "package": "cassandra-cql",
          "signature": "TWO",
          "source": "src/Database-Cassandra-CQL.html#Consistency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TWO",
          "package": "cassandra-cql",
          "partial": "TWO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TWO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Table",
          "package": "cassandra-cql",
          "signature": "Table Text",
          "source": "src/Database-Cassandra-CQL.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Table",
          "package": "cassandra-cql",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TableSpec",
          "package": "cassandra-cql",
          "signature": "TableSpec Keyspace Table",
          "source": "src/Database-Cassandra-CQL.html#TableSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TableSpec",
          "package": "cassandra-cql",
          "partial": "Table Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TableSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TimeUUID",
          "package": "cassandra-cql",
          "signature": "TimeUUID",
          "source": "src/Database-Cassandra-CQL.html#TimeUUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TimeUUID",
          "package": "cassandra-cql",
          "partial": "Time UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TimeUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TransportReceiving",
          "package": "cassandra-cql",
          "signature": "TransportReceiving",
          "source": "src/Database-Cassandra-CQL.html#TransportDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TransportReceiving",
          "package": "cassandra-cql",
          "partial": "Transport Receiving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TransportReceiving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TransportSending",
          "package": "cassandra-cql",
          "signature": "TransportSending",
          "source": "src/Database-Cassandra-CQL.html#TransportDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TransportSending",
          "package": "cassandra-cql",
          "partial": "Transport Sending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TransportSending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "TruncateError",
          "package": "cassandra-cql",
          "signature": "TruncateError Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "TruncateError",
          "package": "cassandra-cql",
          "partial": "Truncate Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:TruncateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "UPDATED",
          "package": "cassandra-cql",
          "signature": "UPDATED",
          "source": "src/Database-Cassandra-CQL.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "UPDATED",
          "package": "cassandra-cql",
          "partial": "UPDATED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:UPDATED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Unauthorized",
          "package": "cassandra-cql",
          "signature": "Unauthorized Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Unauthorized",
          "package": "cassandra-cql",
          "partial": "Unauthorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "UnavailableException",
          "package": "cassandra-cql",
          "signature": "UnavailableException Text Consistency Int Int Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "UnavailableException",
          "package": "cassandra-cql",
          "partial": "Unavailable Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:UnavailableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Unprepared",
          "package": "cassandra-cql",
          "signature": "Unprepared Text PreparedQueryID Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Unprepared",
          "package": "cassandra-cql",
          "partial": "Unprepared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Unprepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "ValueMarshallingException",
          "package": "cassandra-cql",
          "signature": "ValueMarshallingException TransportDirection Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraCommsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "ValueMarshallingException",
          "package": "cassandra-cql",
          "partial": "Value Marshalling Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:ValueMarshallingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "Void",
          "package": "cassandra-cql",
          "signature": "Void",
          "source": "src/Database-Cassandra-CQL.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Void",
          "package": "cassandra-cql",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query that writes data, such as an INSERT or UPDATE\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "Write",
          "package": "cassandra-cql",
          "signature": "Write",
          "source": "src/Database-Cassandra-CQL.html#Style",
          "type": "function"
        },
        "index": {
          "description": "query that writes data such as an INSERT or UPDATE",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "Write",
          "package": "cassandra-cql",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "WriteTimeout",
          "package": "cassandra-cql",
          "signature": "WriteTimeout Text Consistency Int Int Text Text",
          "source": "src/Database-Cassandra-CQL.html#CassandraException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "WriteTimeout",
          "package": "cassandra-cql",
          "partial": "Write Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:WriteTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "casNothing",
          "package": "cassandra-cql",
          "signature": "a",
          "source": "src/Database-Cassandra-CQL.html#casNothing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "casNothing",
          "package": "cassandra-cql",
          "partial": "Nothing",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "casObliterate",
          "package": "cassandra-cql",
          "signature": "a -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Database-Cassandra-CQL.html#casObliterate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "casObliterate",
          "normalized": "a-\u003eByteString-\u003eMaybe ByteString",
          "package": "cassandra-cql",
          "partial": "Obliterate",
          "signature": "a-\u003eByteString-\u003eMaybe ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casObliterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a given Haskell type given as (\u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e :: a), tell the caller how Cassandra\n represents it.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "casType",
          "package": "cassandra-cql",
          "signature": "a -\u003e CType",
          "source": "src/Database-Cassandra-CQL.html#casType",
          "type": "method"
        },
        "index": {
          "description": "For given Haskell type given as undefined tell the caller how Cassandra represents it",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "casType",
          "normalized": "a-\u003eCType",
          "package": "cassandra-cql",
          "partial": "Type",
          "signature": "a-\u003eCType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:casType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "decodeValues",
          "package": "cassandra-cql",
          "signature": "[(CType, Maybe ByteString)] -\u003e Either CodingFailure v",
          "source": "src/Database-Cassandra-CQL.html#decodeValues",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "decodeValues",
          "normalized": "[(CType,Maybe ByteString)]-\u003eEither CodingFailure a",
          "package": "cassandra-cql",
          "partial": "Values",
          "signature": "[(CType,Maybe ByteString)]-\u003eEither CodingFailure v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:decodeValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "encodeValues",
          "package": "cassandra-cql",
          "signature": "v -\u003e [CType] -\u003e Either CodingFailure [Maybe ByteString]",
          "source": "src/Database-Cassandra-CQL.html#encodeValues",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "encodeValues",
          "normalized": "a-\u003e[CType]-\u003eEither CodingFailure[Maybe ByteString]",
          "package": "cassandra-cql",
          "partial": "Values",
          "signature": "v-\u003e[CType]-\u003eEither CodingFailure[Maybe ByteString]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:encodeValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA low-level function in case you need some rarely-used capabilities. \n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "executeRaw",
          "package": "cassandra-cql",
          "signature": "Query style any_i any_o -\u003e i -\u003e Consistency -\u003e m (Result [Maybe ByteString])",
          "source": "src/Database-Cassandra-CQL.html#executeRaw",
          "type": "function"
        },
        "index": {
          "description": "low-level function in case you need some rarely-used capabilities",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "executeRaw",
          "normalized": "Query a b c-\u003ed-\u003eConsistency-\u003ee(Result[Maybe ByteString])",
          "package": "cassandra-cql",
          "partial": "Raw",
          "signature": "Query style any_i any_o-\u003ei-\u003eConsistency-\u003em(Result[Maybe ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for \u003ccode\u003e\u003ca\u003eexecuteRows\u003c/a\u003e\u003c/code\u003e useful in situations where you are only expecting one row\n to be returned.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "executeRow",
          "package": "cassandra-cql",
          "signature": "Consistency-\u003e Query Rows i o-\u003e i-\u003e m (Maybe o)",
          "type": "function"
        },
        "index": {
          "description": "Helper for executeRows useful in situations where you are only expecting one row to be returned",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "executeRow",
          "normalized": "Consistency-\u003eQuery Rows a b-\u003ea-\u003ec(Maybe b)",
          "package": "cassandra-cql",
          "partial": "Row",
          "signature": "Consistency-\u003eQuery Rows i o-\u003ei-\u003em(Maybe o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a query that returns rows.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "executeRows",
          "package": "cassandra-cql",
          "signature": "Consistency-\u003e Query Rows i o-\u003e i-\u003e m [o]",
          "type": "function"
        },
        "index": {
          "description": "Execute query that returns rows",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "executeRows",
          "normalized": "Consistency-\u003eQuery Rows a b-\u003ea-\u003ec[b]",
          "package": "cassandra-cql",
          "partial": "Rows",
          "signature": "Consistency-\u003eQuery Rows i o-\u003ei-\u003em[o]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a schema change, such as creating or dropping a table.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "executeSchema",
          "package": "cassandra-cql",
          "signature": "Consistency-\u003e Query Schema i ()-\u003e i-\u003e m (Change, Keyspace, Table)",
          "type": "function"
        },
        "index": {
          "description": "Execute schema change such as creating or dropping table",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "executeSchema",
          "normalized": "Consistency-\u003eQuery Schema a()-\u003ea-\u003eb(Change,Keyspace,Table)",
          "package": "cassandra-cql",
          "partial": "Schema",
          "signature": "Consistency-\u003eQuery Schema i()-\u003ei-\u003em(Change,Keyspace,Table)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a write operation that returns void.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "executeWrite",
          "package": "cassandra-cql",
          "signature": "Consistency-\u003e Query Write i ()-\u003e i-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Execute write operation that returns void",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "executeWrite",
          "normalized": "Consistency-\u003eQuery Write a()-\u003ea-\u003eb()",
          "package": "cassandra-cql",
          "partial": "Write",
          "signature": "Consistency-\u003eQuery Write i()-\u003ei-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:executeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "getCas",
          "package": "cassandra-cql",
          "signature": "Get a",
          "source": "src/Database-Cassandra-CQL.html#getCas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "getCas",
          "package": "cassandra-cql",
          "partial": "Cas",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:getCas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "getCassandraPool",
          "package": "cassandra-cql",
          "signature": "m Pool",
          "source": "src/Database-Cassandra-CQL.html#getCassandraPool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "getCassandraPool",
          "package": "cassandra-cql",
          "partial": "Cassandra Pool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:getCassandraPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper for extracting the types from a metadata definition.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "metadataTypes",
          "package": "cassandra-cql",
          "signature": "Metadata -\u003e [CType]",
          "source": "src/Database-Cassandra-CQL.html#metadataTypes",
          "type": "function"
        },
        "index": {
          "description": "helper for extracting the types from metadata definition",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "metadataTypes",
          "normalized": "Metadata-\u003e[CType]",
          "package": "cassandra-cql",
          "partial": "Types",
          "signature": "Metadata-\u003e[CType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:metadataTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pool of Cassandra connections.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "newPool",
          "package": "cassandra-cql",
          "signature": "[Server] -\u003e Keyspace -\u003e IO Pool",
          "source": "src/Database-Cassandra-CQL.html#newPool",
          "type": "function"
        },
        "index": {
          "description": "Construct pool of Cassandra connections",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "newPool",
          "normalized": "[Server]-\u003eKeyspace-\u003eIO Pool",
          "package": "cassandra-cql",
          "partial": "Pool",
          "signature": "[Server]-\u003eKeyspace-\u003eIO Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:newPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "putCas",
          "package": "cassandra-cql",
          "signature": "a -\u003e Put",
          "source": "src/Database-Cassandra-CQL.html#putCas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "putCas",
          "normalized": "a-\u003ePut",
          "package": "cassandra-cql",
          "partial": "Cas",
          "signature": "a-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:putCas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a query. Another way to construct one is as an overloaded string through\n the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance if you turn on the \u003cem\u003eOverloadedStrings\u003c/em\u003e language extension, e.g.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n ...\n\n getOneSong :: Query Rows UUID (Text, Text, Maybe Text)\n getOneSong = \"select title, artist, comment from songs where id=?\"\n\u003c/pre\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "query",
          "package": "cassandra-cql",
          "signature": "Text -\u003e Query style i o",
          "source": "src/Database-Cassandra-CQL.html#query",
          "type": "function"
        },
        "index": {
          "description": "Construct query Another way to construct one is as an overloaded string through the IsString instance if you turn on the OverloadedStrings language extension e.g LANGUAGE OverloadedStrings getOneSong Query Rows UUID Text Text Maybe Text getOneSong select title artist comment from songs where id",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "query",
          "normalized": "Text-\u003eQuery a b c",
          "package": "cassandra-cql",
          "signature": "Text-\u003eQuery style i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Cassandra queries.\n\u003c/p\u003e",
          "module": "Database.Cassandra.CQL",
          "name": "runCas",
          "package": "cassandra-cql",
          "signature": "Pool -\u003e Cas a -\u003e IO a",
          "source": "src/Database-Cassandra-CQL.html#runCas",
          "type": "function"
        },
        "index": {
          "description": "Execute Cassandra queries",
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "runCas",
          "normalized": "Pool-\u003eCas a-\u003eIO a",
          "package": "cassandra-cql",
          "partial": "Cas",
          "signature": "Pool-\u003eCas a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:runCas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "unBlob",
          "package": "cassandra-cql",
          "signature": "ByteString",
          "source": "src/Database-Cassandra-CQL.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "unBlob",
          "package": "cassandra-cql",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "unCounter",
          "package": "cassandra-cql",
          "signature": "Int64",
          "source": "src/Database-Cassandra-CQL.html#Counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "unCounter",
          "package": "cassandra-cql",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Cassandra.CQL",
          "name": "unTimeUUID",
          "package": "cassandra-cql",
          "signature": "UUID",
          "source": "src/Database-Cassandra-CQL.html#TimeUUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Cassandra CQL",
          "module": "Database.Cassandra.CQL",
          "name": "unTimeUUID",
          "package": "cassandra-cql",
          "partial": "Time UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cassandra-cql/docs/Database-Cassandra-CQL.html#v:unTimeUUID"
      }
    }
  ]
]