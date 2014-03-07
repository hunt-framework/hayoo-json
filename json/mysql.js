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
        "word": "mysql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDirect bindings to the C \u003ccode\u003emysqlclient\u003c/code\u003e API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.MySQL.Base.C",
          "name": "C",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-C.html",
          "type": "module"
        },
        "index": {
          "description": "Direct bindings to the mysqlclient API",
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "C",
          "package": "mysql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_affected_rows",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CULLong",
          "source": "src/Database-MySQL-Base-C.html#mysql_affected_rows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_affected_rows",
          "normalized": "Ptr MYSQL-\u003eIO CULLong",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_affected_rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_autocommit",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e MyBool -\u003e IO MyBool",
          "source": "src/Database-MySQL-Base-C.html#mysql_autocommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_autocommit",
          "normalized": "Ptr MYSQL-\u003eMyBool-\u003eIO MyBool",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eMyBool-\u003eIO MyBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_autocommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_change_user",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003e CString-\u003e CString-\u003e CString-\u003e IO MyBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_change_user",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eIO MyBool",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eIO MyBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_change_user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_character_set_name",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_character_set_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_character_set_name",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_character_set_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_close",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO ()",
          "source": "src/Database-MySQL-Base-C.html#mysql_close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_close",
          "normalized": "Ptr MYSQL-\u003eIO()",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_commit",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO MyBool",
          "source": "src/Database-MySQL-Base-C.html#mysql_commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_commit",
          "normalized": "Ptr MYSQL-\u003eIO MyBool",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO MyBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_data_seek",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e CULLong -\u003e IO ()",
          "source": "src/Database-MySQL-Base-C.html#mysql_data_seek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_data_seek",
          "normalized": "Ptr MYSQL_RES-\u003eCULLong-\u003eIO()",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eCULLong-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_data_seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_errno",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_errno",
          "normalized": "Ptr MYSQL-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_error",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_error",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_fields",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO (Ptr Field)",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_fields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_fields",
          "normalized": "Ptr MYSQL_RES-\u003eIO(Ptr Field)",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO(Ptr Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_fields_nonblock",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO (Ptr Field)",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_fields_nonblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_fields_nonblock",
          "normalized": "Ptr MYSQL_RES-\u003eIO(Ptr Field)",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO(Ptr Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_fields_nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_lengths",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO (Ptr CULong)",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_lengths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_lengths",
          "normalized": "Ptr MYSQL_RES-\u003eIO(Ptr CULong)",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO(Ptr CULong)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_lengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_lengths_nonblock",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO (Ptr CULong)",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_lengths_nonblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_lengths_nonblock",
          "normalized": "Ptr MYSQL_RES-\u003eIO(Ptr CULong)",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO(Ptr CULong)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_lengths_nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_row",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO MYSQL_ROW",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_row",
          "normalized": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_row_nonblock",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO MYSQL_ROW",
          "source": "src/Database-MySQL-Base-C.html#mysql_fetch_row_nonblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_fetch_row_nonblock",
          "normalized": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_fetch_row_nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_field_count",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CUInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_field_count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_field_count",
          "normalized": "Ptr MYSQL-\u003eIO CUInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_field_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_free_result",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO ()",
          "source": "src/Database-MySQL-Base-C.html#mysql_free_result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_free_result",
          "normalized": "Ptr MYSQL_RES-\u003eIO()",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_free_result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_free_result_nonblock",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO ()",
          "source": "src/Database-MySQL-Base-C.html#mysql_free_result_nonblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_free_result_nonblock",
          "normalized": "Ptr MYSQL_RES-\u003eIO()",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_free_result_nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_client_info",
          "package": "mysql",
          "signature": "CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_client_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_client_info",
          "package": "mysql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_client_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_client_version",
          "package": "mysql",
          "signature": "CULong",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_client_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_client_version",
          "package": "mysql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_client_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_host_info",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_host_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_host_info",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_host_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_proto_info",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CUInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_proto_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_proto_info",
          "normalized": "Ptr MYSQL-\u003eIO CUInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_proto_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_server_info",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_server_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_server_info",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_server_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_ssl_cipher",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_get_ssl_cipher",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_get_ssl_cipher",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_get_ssl_cipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_init",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003e IO (Ptr MYSQL)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_init",
          "normalized": "Ptr MYSQL-\u003eIO(Ptr MYSQL)",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO(Ptr MYSQL)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_insert_id",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CULLong",
          "source": "src/Database-MySQL-Base-C.html#mysql_insert_id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_insert_id",
          "normalized": "Ptr MYSQL-\u003eIO CULLong",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_insert_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_next_result",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_next_result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_next_result",
          "normalized": "Ptr MYSQL-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_next_result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_options",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e Option -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_options",
          "normalized": "Ptr MYSQL-\u003eOption-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eOption-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_ping",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_ping",
          "normalized": "Ptr MYSQL-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_connect",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003e CString-\u003e CString-\u003e CString-\u003e CString-\u003e CInt-\u003e CString-\u003e CULong-\u003e IO (Ptr MYSQL)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_connect",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCInt-\u003eCString-\u003eCULong-\u003eIO(Ptr MYSQL)",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCInt-\u003eCString-\u003eCULong-\u003eIO(Ptr MYSQL)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_real_connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_escape_string",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e CString -\u003e CString -\u003e CULong -\u003e IO CULong",
          "source": "src/Database-MySQL-Base-C.html#mysql_real_escape_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_escape_string",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCULong-\u003eIO CULong",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCULong-\u003eIO CULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_real_escape_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_query",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e CString -\u003e CULong -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_real_query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_real_query",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eCULong-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eCULong-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_real_query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_rollback",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO MyBool",
          "source": "src/Database-MySQL-Base-C.html#mysql_rollback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_rollback",
          "normalized": "Ptr MYSQL-\u003eIO MyBool",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO MyBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_row_seek",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e MYSQL_ROW_OFFSET -\u003e IO MYSQL_ROW_OFFSET",
          "source": "src/Database-MySQL-Base-C.html#mysql_row_seek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_row_seek",
          "normalized": "Ptr MYSQL_RES-\u003eMYSQL_ROW_OFFSET-\u003eIO MYSQL_ROW_OFFSET",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eMYSQL_ROW_OFFSET-\u003eIO MYSQL_ROW_OFFSET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_row_seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_row_tell",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES -\u003e IO MYSQL_ROW_OFFSET",
          "source": "src/Database-MySQL-Base-C.html#mysql_row_tell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_row_tell",
          "normalized": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW_OFFSET",
          "package": "mysql",
          "signature": "Ptr MYSQL_RES-\u003eIO MYSQL_ROW_OFFSET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_row_tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_select_db",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e CString -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_select_db",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_select_db",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_select_db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_set_character_set",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e CString -\u003e IO CInt",
          "source": "src/Database-MySQL-Base-C.html#mysql_set_character_set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_set_character_set",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eIO CInt",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_set_character_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_ssl_set",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003e CString-\u003e CString-\u003e CString-\u003e CString-\u003e CString-\u003e IO MyBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_ssl_set",
          "normalized": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO MyBool",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO MyBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_ssl_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_stat",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CString",
          "source": "src/Database-MySQL-Base-C.html#mysql_stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_stat",
          "normalized": "Ptr MYSQL-\u003eIO CString",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_store_result",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO (Ptr MYSQL_RES)",
          "source": "src/Database-MySQL-Base-C.html#mysql_store_result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_store_result",
          "normalized": "Ptr MYSQL-\u003eIO(Ptr MYSQL_RES)",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO(Ptr MYSQL_RES)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_store_result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_thread_id",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO CULong",
          "source": "src/Database-MySQL-Base-C.html#mysql_thread_id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_thread_id",
          "normalized": "Ptr MYSQL-\u003eIO CULong",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO CULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_thread_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.C",
          "name": "mysql_use_result",
          "package": "mysql",
          "signature": "Ptr MYSQL -\u003e IO (Ptr MYSQL_RES)",
          "source": "src/Database-MySQL-Base-C.html#mysql_use_result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base C",
          "module": "Database.MySQL.Base.C",
          "name": "mysql_use_result",
          "normalized": "Ptr MYSQL-\u003eIO(Ptr MYSQL_RES)",
          "package": "mysql",
          "signature": "Ptr MYSQL-\u003eIO(Ptr MYSQL_RES)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-C.html#v:mysql_use_result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with the direct bindings to the C \u003ccode\u003emysqlclient\u003c/code\u003e\n API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "Types",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with the direct bindings to the mysqlclient API",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Types",
          "package": "mysql",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of a field (column) of a table.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "Field",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "data"
        },
        "index": {
          "description": "description of field column of table",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Field",
          "package": "mysql",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "FieldFlag",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#FieldFlag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "FieldFlag",
          "package": "mysql",
          "partial": "Field Flag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:FieldFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "FieldFlags",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#FieldFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "FieldFlags",
          "package": "mysql",
          "partial": "Field Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:FieldFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MYSQL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL",
          "package": "mysql",
          "partial": "MYSQL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MYSQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_RES",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MYSQL_RES",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_RES",
          "package": "mysql",
          "partial": "MYSQL RES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MYSQL_RES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROW",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MYSQL_ROW",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROW",
          "package": "mysql",
          "partial": "MYSQL ROW",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MYSQL_ROW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROWS",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MYSQL_ROWS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROWS",
          "package": "mysql",
          "partial": "MYSQL ROWS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MYSQL_ROWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROW_OFFSET",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MYSQL_ROW_OFFSET",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MYSQL_ROW_OFFSET",
          "package": "mysql",
          "partial": "MYSQL ROW OFFSET",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MYSQL_ROW_OFFSET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "MyBool",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#MyBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MyBool",
          "package": "mysql",
          "partial": "My Bool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:MyBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "Option",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Option",
          "package": "mysql",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "Protocol",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Protocol",
          "package": "mysql",
          "partial": "Protocol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:Protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "Seconds",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Seconds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Seconds",
          "package": "mysql",
          "partial": "Seconds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn types supported by MySQL.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "Type",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Column types supported by MySQL",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Type",
          "package": "mysql",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Bit",
          "package": "mysql",
          "signature": "Bit",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Bit\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Bit\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Bit",
          "package": "mysql",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Blob",
          "package": "mysql",
          "signature": "Blob",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Blob\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Blob\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Blob",
          "package": "mysql",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "CharsetDir",
          "package": "mysql",
          "signature": "CharsetDir FilePath",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:CharsetDir\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:CharsetDir\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "CharsetDir",
          "package": "mysql",
          "partial": "Charset Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:CharsetDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "CharsetName",
          "package": "mysql",
          "signature": "CharsetName String",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:CharsetName\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:CharsetName\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "CharsetName",
          "package": "mysql",
          "partial": "Charset Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:CharsetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ClientIP",
          "package": "mysql",
          "signature": "ClientIP ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ClientIP\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ClientIP\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ClientIP",
          "package": "mysql",
          "partial": "Client IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ClientIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Compress",
          "package": "mysql",
          "signature": "Compress",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Compress\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Compress\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Compress",
          "package": "mysql",
          "partial": "Compress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ConnectTimeout",
          "package": "mysql",
          "signature": "ConnectTimeout Seconds",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ConnectTimeout\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ConnectTimeout\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ConnectTimeout",
          "package": "mysql",
          "partial": "Connect Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ConnectTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Date",
          "package": "mysql",
          "signature": "Date",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Date\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Date\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Date",
          "package": "mysql",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "DateTime",
          "package": "mysql",
          "signature": "DateTime",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:DateTime\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:DateTime\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "DateTime",
          "package": "mysql",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:DateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Decimal",
          "package": "mysql",
          "signature": "Decimal",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Decimal\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Decimal\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Decimal",
          "package": "mysql",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Double",
          "package": "mysql",
          "signature": "Double",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Double\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Double\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Double",
          "package": "mysql",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Enum",
          "package": "mysql",
          "signature": "Enum",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Enum\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Enum\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Enum",
          "package": "mysql",
          "partial": "Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "Field",
          "package": "mysql",
          "signature": "Field",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Field",
          "package": "mysql",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Float",
          "package": "mysql",
          "signature": "Float",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Float\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Float\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Float",
          "package": "mysql",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "FoundRows",
          "package": "mysql",
          "signature": "FoundRows",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:FoundRows\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:FoundRows\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "FoundRows",
          "package": "mysql",
          "partial": "Found Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:FoundRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Geometry",
          "package": "mysql",
          "signature": "Geometry",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Geometry\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Geometry\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Geometry",
          "package": "mysql",
          "partial": "Geometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "GuessConnection",
          "package": "mysql",
          "signature": "GuessConnection",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:GuessConnection\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:GuessConnection\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "GuessConnection",
          "package": "mysql",
          "partial": "Guess Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:GuessConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "IgnoreSIGPIPE",
          "package": "mysql",
          "signature": "IgnoreSIGPIPE",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:IgnoreSIGPIPE\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:IgnoreSIGPIPE\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "IgnoreSIGPIPE",
          "package": "mysql",
          "partial": "Ignore SIGPIPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:IgnoreSIGPIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "IgnoreSpace",
          "package": "mysql",
          "signature": "IgnoreSpace",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:IgnoreSpace\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:IgnoreSpace\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "IgnoreSpace",
          "package": "mysql",
          "partial": "Ignore Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:IgnoreSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "InitCommand",
          "package": "mysql",
          "signature": "InitCommand ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:InitCommand\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:InitCommand\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "InitCommand",
          "package": "mysql",
          "partial": "Init Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:InitCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Int24",
          "package": "mysql",
          "signature": "Int24",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Int24\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Int24\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Int24",
          "package": "mysql",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Int24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Interactive",
          "package": "mysql",
          "signature": "Interactive",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Interactive\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Interactive\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Interactive",
          "package": "mysql",
          "partial": "Interactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "LocalFiles",
          "package": "mysql",
          "signature": "LocalFiles",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LocalFiles\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:LocalFiles\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "LocalFiles",
          "package": "mysql",
          "partial": "Local Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LocalFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "LocalInFile",
          "package": "mysql",
          "signature": "LocalInFile Bool",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LocalInFile\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:LocalInFile\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "LocalInFile",
          "package": "mysql",
          "partial": "Local In File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LocalInFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Long",
          "package": "mysql",
          "signature": "Long",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Long\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Long\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Long",
          "package": "mysql",
          "partial": "Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "LongBlob",
          "package": "mysql",
          "signature": "LongBlob",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LongBlob\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:LongBlob\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "LongBlob",
          "package": "mysql",
          "partial": "Long Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LongBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "LongLong",
          "package": "mysql",
          "signature": "LongLong",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LongLong\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:LongLong\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "LongLong",
          "package": "mysql",
          "partial": "Long Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:LongLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "MediumBlob",
          "package": "mysql",
          "signature": "MediumBlob",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MediumBlob\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:MediumBlob\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MediumBlob",
          "package": "mysql",
          "partial": "Medium Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MediumBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Memory",
          "package": "mysql",
          "signature": "Memory",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Memory\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Memory\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Memory",
          "package": "mysql",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "MultiResults",
          "package": "mysql",
          "signature": "MultiResults",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MultiResults\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:MultiResults\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MultiResults",
          "package": "mysql",
          "partial": "Multi Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MultiResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "MultiStatements",
          "package": "mysql",
          "signature": "MultiStatements",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MultiStatements\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:MultiStatements\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "MultiStatements",
          "package": "mysql",
          "partial": "Multi Statements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:MultiStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "NamedPipe",
          "package": "mysql",
          "signature": "NamedPipe",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NamedPipe\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:NamedPipe\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "NamedPipe",
          "package": "mysql",
          "partial": "Named Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "NewDate",
          "package": "mysql",
          "signature": "NewDate",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NewDate\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:NewDate\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "NewDate",
          "package": "mysql",
          "partial": "New Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NewDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "NewDecimal",
          "package": "mysql",
          "signature": "NewDecimal",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NewDecimal\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:NewDecimal\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "NewDecimal",
          "package": "mysql",
          "partial": "New Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NewDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "NoSchema",
          "package": "mysql",
          "signature": "NoSchema",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NoSchema\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:NoSchema\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "NoSchema",
          "package": "mysql",
          "partial": "No Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:NoSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Null",
          "package": "mysql",
          "signature": "Null",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Null\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Null\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Null",
          "package": "mysql",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Pipe",
          "package": "mysql",
          "signature": "Pipe",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Pipe\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Pipe\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Pipe",
          "package": "mysql",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Protocol",
          "package": "mysql",
          "signature": "Protocol Protocol",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Protocol\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Protocol\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Protocol",
          "package": "mysql",
          "partial": "Protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ReadDefaultFile",
          "package": "mysql",
          "signature": "ReadDefaultFile FilePath",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadDefaultFile\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ReadDefaultFile\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ReadDefaultFile",
          "package": "mysql",
          "partial": "Read Default File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadDefaultFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ReadDefaultGroup",
          "package": "mysql",
          "signature": "ReadDefaultGroup ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadDefaultGroup\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ReadDefaultGroup\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ReadDefaultGroup",
          "package": "mysql",
          "partial": "Read Default Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadDefaultGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ReadTimeout",
          "package": "mysql",
          "signature": "ReadTimeout Seconds",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadTimeout\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ReadTimeout\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ReadTimeout",
          "package": "mysql",
          "partial": "Read Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Reconnect",
          "package": "mysql",
          "signature": "Reconnect Bool",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Reconnect\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Reconnect\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Reconnect",
          "package": "mysql",
          "partial": "Reconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Reconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "ReportDataTruncation",
          "package": "mysql",
          "signature": "ReportDataTruncation Bool",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReportDataTruncation\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ReportDataTruncation\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "ReportDataTruncation",
          "package": "mysql",
          "partial": "Report Data Truncation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:ReportDataTruncation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "SSLVerifyServerCert",
          "package": "mysql",
          "signature": "SSLVerifyServerCert Bool",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SSLVerifyServerCert\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:SSLVerifyServerCert\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "SSLVerifyServerCert",
          "package": "mysql",
          "partial": "SSLVerify Server Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SSLVerifyServerCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "SecureAuth",
          "package": "mysql",
          "signature": "SecureAuth Bool",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SecureAuth\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:SecureAuth\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "SecureAuth",
          "package": "mysql",
          "partial": "Secure Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SecureAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Set",
          "package": "mysql",
          "signature": "Set",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Set\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Set\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Set",
          "package": "mysql",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "SharedMemoryBaseName",
          "package": "mysql",
          "signature": "SharedMemoryBaseName ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SharedMemoryBaseName\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:SharedMemoryBaseName\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "SharedMemoryBaseName",
          "package": "mysql",
          "partial": "Shared Memory Base Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:SharedMemoryBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Short",
          "package": "mysql",
          "signature": "Short",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Short\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Short\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Short",
          "package": "mysql",
          "partial": "Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Socket",
          "package": "mysql",
          "signature": "Socket",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Socket\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Socket\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Socket",
          "package": "mysql",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "String",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:String\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "String",
          "package": "mysql",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "TCP",
          "package": "mysql",
          "signature": "TCP",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:TCP\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:TCP\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "TCP",
          "package": "mysql",
          "partial": "TCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:TCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Time",
          "package": "mysql",
          "signature": "Time",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Time\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Time\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Time",
          "package": "mysql",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Timestamp",
          "package": "mysql",
          "signature": "Timestamp",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Timestamp\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Timestamp\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Timestamp",
          "package": "mysql",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Tiny",
          "package": "mysql",
          "signature": "Tiny",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Tiny\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Tiny\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Tiny",
          "package": "mysql",
          "partial": "Tiny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Tiny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "TinyBlob",
          "package": "mysql",
          "signature": "TinyBlob",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:TinyBlob\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:TinyBlob\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "TinyBlob",
          "package": "mysql",
          "partial": "Tiny Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:TinyBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "UseEmbeddedConnection",
          "package": "mysql",
          "signature": "UseEmbeddedConnection",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:UseEmbeddedConnection\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:UseEmbeddedConnection\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "UseEmbeddedConnection",
          "package": "mysql",
          "partial": "Use Embedded Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:UseEmbeddedConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "UseRemoteConnection",
          "package": "mysql",
          "signature": "UseRemoteConnection",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:UseRemoteConnection\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:UseRemoteConnection\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "UseRemoteConnection",
          "package": "mysql",
          "partial": "Use Remote Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:UseRemoteConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "VarChar",
          "package": "mysql",
          "signature": "VarChar",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:VarChar\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:VarChar\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "VarChar",
          "package": "mysql",
          "partial": "Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:VarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "VarString",
          "package": "mysql",
          "signature": "VarString",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:VarString\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:VarString\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "VarString",
          "package": "mysql",
          "partial": "Var String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:VarString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "WriteTimeout",
          "package": "mysql",
          "signature": "WriteTimeout Seconds",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:WriteTimeout\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:WriteTimeout\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "WriteTimeout",
          "package": "mysql",
          "partial": "Write Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:WriteTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.MySQL.Base.Types\",\"Database.MySQL.Base\"]",
          "name": "Year",
          "package": "mysql",
          "signature": "Year",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Year\",\"http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:Year\"]"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "Year",
          "package": "mysql",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:Year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatalog for table.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldCatalog",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Catalog for table",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldCatalog",
          "package": "mysql",
          "partial": "Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter set number.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldCharSet",
          "package": "mysql",
          "signature": "Word",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Character set number",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldCharSet",
          "package": "mysql",
          "partial": "Char Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldCharSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase for table.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDB",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Database for table",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDB",
          "package": "mysql",
          "partial": "DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of decimals in field.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDecimals",
          "package": "mysql",
          "signature": "Word",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Number of decimals in field",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDecimals",
          "package": "mysql",
          "partial": "Decimals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldDecimals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDefault",
          "package": "mysql",
          "signature": "Maybe ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Default value",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldDefault",
          "package": "mysql",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiv flags.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldFlags",
          "package": "mysql",
          "signature": "FieldFlags",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Div flags",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldFlags",
          "package": "mysql",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of column (create length).\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldLength",
          "package": "mysql",
          "signature": "Word",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Width of column create length",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldLength",
          "package": "mysql",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum width for selected set.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldMaxLength",
          "package": "mysql",
          "signature": "Word",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Maximum width for selected set",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldMaxLength",
          "package": "mysql",
          "partial": "Max Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldMaxLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of column.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldName",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Name of column",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldName",
          "package": "mysql",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal column name, if an alias.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldOrigName",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Original column name if an alias",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldOrigName",
          "package": "mysql",
          "partial": "Orig Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldOrigName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal table name, if table was an alias.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldOrigTable",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Original table name if table was an alias",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldOrigTable",
          "package": "mysql",
          "partial": "Orig Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldOrigTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of column, if column was a field.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldTable",
          "package": "mysql",
          "signature": "ByteString",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "description": "Table of column if column was field",
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldTable",
          "package": "mysql",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "fieldType",
          "package": "mysql",
          "signature": "Type",
          "source": "src/Database-MySQL-Base-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "fieldType",
          "package": "mysql",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:fieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagAutoIncrement",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagAutoIncrement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagAutoIncrement",
          "package": "mysql",
          "partial": "Auto Increment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagAutoIncrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagBinary",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagBinary",
          "package": "mysql",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagMultipleKey",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagMultipleKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagMultipleKey",
          "package": "mysql",
          "partial": "Multiple Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagMultipleKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagNoDefaultValue",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagNoDefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagNoDefaultValue",
          "package": "mysql",
          "partial": "No Default Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagNoDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagNotNull",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagNotNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagNotNull",
          "package": "mysql",
          "partial": "Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagNotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagNumeric",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagNumeric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagNumeric",
          "package": "mysql",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagPrimaryKey",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagPrimaryKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagPrimaryKey",
          "package": "mysql",
          "partial": "Primary Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagPrimaryKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagUniqueKey",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagUniqueKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagUniqueKey",
          "package": "mysql",
          "partial": "Unique Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagUniqueKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagUnsigned",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagUnsigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagUnsigned",
          "package": "mysql",
          "partial": "Unsigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "flagZeroFill",
          "package": "mysql",
          "signature": "FieldFlag",
          "source": "src/Database-MySQL-Base-Types.html#flagZeroFill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "flagZeroFill",
          "package": "mysql",
          "partial": "Zero Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:flagZeroFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "hasAllFlags",
          "package": "mysql",
          "signature": "FieldFlags -\u003e FieldFlags -\u003e Bool",
          "source": "src/Database-MySQL-Base-Types.html#hasAllFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "hasAllFlags",
          "normalized": "FieldFlags-\u003eFieldFlags-\u003eBool",
          "package": "mysql",
          "partial": "All Flags",
          "signature": "FieldFlags-\u003eFieldFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:hasAllFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base.Types",
          "name": "toConnectFlag",
          "package": "mysql",
          "signature": "Option -\u003e CULong",
          "source": "src/Database-MySQL-Base-Types.html#toConnectFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base Types",
          "module": "Database.MySQL.Base.Types",
          "name": "toConnectFlag",
          "normalized": "Option-\u003eCULong",
          "package": "mysql",
          "partial": "Connect Flag",
          "signature": "Option-\u003eCULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base-Types.html#v:toConnectFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA low-level client library for the MySQL database, implemented as\n bindings to the C \u003ccode\u003emysqlclient\u003c/code\u003e API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.MySQL.Base",
          "name": "Base",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html",
          "type": "module"
        },
        "index": {
          "description": "low-level client library for the MySQL database implemented as bindings to the mysqlclient API",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Base",
          "package": "mysql",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "ConnectInfo",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "ConnectInfo",
          "package": "mysql",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection to a MySQL database.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "Connection",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection to MySQL database",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Connection",
          "package": "mysql",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "MySQLError",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#MySQLError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "MySQLError",
          "package": "mysql",
          "partial": "My SQLError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:MySQLError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "Option",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Option",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Option",
          "package": "mysql",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "Protocol",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Protocol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Protocol",
          "package": "mysql",
          "partial": "Protocol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a database query.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "Result",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result of database query",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Result",
          "package": "mysql",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA row cursor, used by \u003ccode\u003e\u003ca\u003erowSeek\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erowTell\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "Row",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#Row",
          "type": "data"
        },
        "index": {
          "description": "row cursor used by rowSeek and rowTell",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Row",
          "package": "mysql",
          "partial": "Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "SSLInfo",
          "package": "mysql",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "SSLInfo",
          "package": "mysql",
          "partial": "SSLInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:SSLInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "Seconds",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Seconds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Seconds",
          "package": "mysql",
          "partial": "Seconds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn types supported by MySQL.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "Type",
          "package": "mysql",
          "source": "src/Database-MySQL-Base-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Column types supported by MySQL",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "Type",
          "package": "mysql",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "ConnectInfo",
          "package": "mysql",
          "signature": "ConnectInfo",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "ConnectInfo",
          "package": "mysql",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "SSLInfo",
          "package": "mysql",
          "signature": "SSLInfo",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "SSLInfo",
          "package": "mysql",
          "partial": "SSLInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:SSLInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "affectedRows",
          "package": "mysql",
          "signature": "Connection -\u003e IO Int64",
          "source": "src/Database-MySQL-Base.html#affectedRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "affectedRows",
          "normalized": "Connection-\u003eIO Int",
          "package": "mysql",
          "partial": "Rows",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:affectedRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn autocommit on or off.\n\u003c/p\u003e\u003cp\u003eBy default, MySQL runs with autocommit mode enabled. In this mode,\n as soon as you modify a table, MySQL stores your modification\n permanently.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "autocommit",
          "package": "mysql",
          "signature": "Connection -\u003e Bool -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#autocommit",
          "type": "function"
        },
        "index": {
          "description": "Turn autocommit on or off By default MySQL runs with autocommit mode enabled In this mode as soon as you modify table MySQL stores your modification permanently",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "autocommit",
          "normalized": "Connection-\u003eBool-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:autocommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "changeUser",
          "package": "mysql",
          "signature": "Connection -\u003e String -\u003e String -\u003e Maybe String -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#changeUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "changeUser",
          "normalized": "Connection-\u003eString-\u003eString-\u003eMaybe String-\u003eIO()",
          "package": "mysql",
          "partial": "User",
          "signature": "Connection-\u003eString-\u003eString-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:changeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "characterSet",
          "package": "mysql",
          "signature": "Connection -\u003e IO String",
          "source": "src/Database-MySQL-Base.html#characterSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "characterSet",
          "normalized": "Connection-\u003eIO String",
          "package": "mysql",
          "partial": "Set",
          "signature": "Connection-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:characterSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "clientInfo",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#clientInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "clientInfo",
          "package": "mysql",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:clientInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "clientVersion",
          "package": "mysql",
          "signature": "Word",
          "source": "src/Database-MySQL-Base.html#clientVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "clientVersion",
          "package": "mysql",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:clientVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a connection, and mark any outstanding \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e as\n invalid.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "close",
          "package": "mysql",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close connection and mark any outstanding Result as invalid",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit the current transaction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "commit",
          "package": "mysql",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#commit",
          "type": "function"
        },
        "index": {
          "description": "Commit the current transaction",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "commit",
          "normalized": "Connection-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a database.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "connect",
          "package": "mysql",
          "signature": "ConnectInfo -\u003e IO Connection",
          "source": "src/Database-MySQL-Base.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connect to database",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connect",
          "normalized": "ConnectInfo-\u003eIO Connection",
          "package": "mysql",
          "signature": "ConnectInfo-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectDatabase",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectDatabase",
          "package": "mysql",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectHost",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectHost",
          "package": "mysql",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectOptions",
          "package": "mysql",
          "signature": "[Option]",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectOptions",
          "normalized": "[Option]",
          "package": "mysql",
          "partial": "Options",
          "signature": "[Option]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectPassword",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectPassword",
          "package": "mysql",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectPath",
          "package": "mysql",
          "signature": "FilePath",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectPath",
          "package": "mysql",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectPort",
          "package": "mysql",
          "signature": "Word16",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectPort",
          "package": "mysql",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectSSL",
          "package": "mysql",
          "signature": "Maybe SSLInfo",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectSSL",
          "package": "mysql",
          "partial": "SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectSSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "connectUser",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "connectUser",
          "package": "mysql",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:connectUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "dataSeek",
          "package": "mysql",
          "signature": "Result -\u003e Int64 -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#dataSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "dataSeek",
          "normalized": "Result-\u003eInt-\u003eIO()",
          "package": "mysql",
          "partial": "Seek",
          "signature": "Result-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:dataSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003eroot\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003etest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Character set \u003ccode\u003eutf8\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
          "module": "Database.MySQL.Base",
          "name": "defaultConnectInfo",
          "package": "mysql",
          "signature": "ConnectInfo",
          "source": "src/Database-MySQL-Base.html#defaultConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Default information for setting up connection Defaults are as follows Server on localhost User root No password Database test Character set utf8 Use as in the following example connect defaultConnectInfo connectHost db.example.com",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "defaultConnectInfo",
          "package": "mysql",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault (empty) information for setting up an SSL connection.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "defaultSSLInfo",
          "package": "mysql",
          "signature": "SSLInfo",
          "source": "src/Database-MySQL-Base.html#defaultSSLInfo",
          "type": "function"
        },
        "index": {
          "description": "Default empty information for setting up an SSL connection",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "defaultSSLInfo",
          "package": "mysql",
          "partial": "SSLInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:defaultSSLInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "escape",
          "package": "mysql",
          "signature": "Connection -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Database-MySQL-Base.html#escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "escape",
          "normalized": "Connection-\u003eByteString-\u003eIO ByteString",
          "package": "mysql",
          "signature": "Connection-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "fetchFields",
          "package": "mysql",
          "signature": "Result -\u003e IO [Field]",
          "source": "src/Database-MySQL-Base.html#fetchFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "fetchFields",
          "normalized": "Result-\u003eIO[Field]",
          "package": "mysql",
          "partial": "Fields",
          "signature": "Result-\u003eIO[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:fetchFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "fetchRow",
          "package": "mysql",
          "signature": "Result -\u003e IO [Maybe ByteString]",
          "source": "src/Database-MySQL-Base.html#fetchRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "fetchRow",
          "normalized": "Result-\u003eIO[Maybe ByteString]",
          "package": "mysql",
          "partial": "Row",
          "signature": "Result-\u003eIO[Maybe ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:fetchRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of fields (columns) in a result.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e, returns the number of columns for the most\n   recent query on the connection.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e, returns the number of columns in each row\n   of this result.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe number of columns may legitimately be zero.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "fieldCount",
          "package": "mysql",
          "signature": "Either Connection Result -\u003e IO Int",
          "source": "src/Database-MySQL-Base.html#fieldCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of fields columns in result If Left Connection returns the number of columns for the most recent query on the connection For Right Result returns the number of columns in each row of this result The number of columns may legitimately be zero",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "fieldCount",
          "normalized": "Either Connection Result-\u003eIO Int",
          "package": "mysql",
          "partial": "Count",
          "signature": "Either Connection Result-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:fieldCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately free the \u003ccode\u003eMYSQL_RES\u003c/code\u003e value associated with this\n \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e, and mark the \u003ccode\u003eResult\u003c/code\u003e as invalid.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "freeResult",
          "package": "mysql",
          "signature": "Result -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#freeResult",
          "type": "function"
        },
        "index": {
          "description": "Immediately free the MYSQL RES value associated with this Result and mark the Result as invalid",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "freeResult",
          "normalized": "Result-\u003eIO()",
          "package": "mysql",
          "partial": "Result",
          "signature": "Result-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:freeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "hostInfo",
          "package": "mysql",
          "signature": "Connection -\u003e IO String",
          "source": "src/Database-MySQL-Base.html#hostInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "hostInfo",
          "normalized": "Connection-\u003eIO String",
          "package": "mysql",
          "partial": "Info",
          "signature": "Connection-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:hostInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the value generated for an \u003ccode\u003eAUTO_INCREMENT\u003c/code\u003e column by the\n previous \u003ccode\u003eINSERT\u003c/code\u003e or \u003ccode\u003eUPDATE\u003c/code\u003e statement.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://dev.mysql.com/doc/refman/5.5/en/mysql-insert-id.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "insertID",
          "package": "mysql",
          "signature": "Connection -\u003e IO Word64",
          "source": "src/Database-MySQL-Base.html#insertID",
          "type": "function"
        },
        "index": {
          "description": "Return the value generated for an AUTO INCREMENT column by the previous INSERT or UPDATE statement See http dev.mysql.com doc refman en mysql-insert-id.html",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "insertID",
          "normalized": "Connection-\u003eIO Word",
          "package": "mysql",
          "partial": "ID",
          "signature": "Connection-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:insertID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is still valid, i.e. backed by a live\n \u003ccode\u003eMYSQL_RES\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "isResultValid",
          "package": "mysql",
          "signature": "Result -\u003e IO Bool",
          "source": "src/Database-MySQL-Base.html#isResultValid",
          "type": "function"
        },
        "index": {
          "description": "Check whether Result is still valid i.e backed by live MYSQL RES value",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "isResultValid",
          "normalized": "Result-\u003eIO Bool",
          "package": "mysql",
          "partial": "Result Valid",
          "signature": "Result-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:isResultValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next statement result. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if another result\n is available, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eThis function marks the current \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e as invalid, if one exists.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "nextResult",
          "package": "mysql",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-MySQL-Base.html#nextResult",
          "type": "function"
        },
        "index": {
          "description": "Read the next statement result Returns True if another result is available False otherwise This function marks the current Result as invalid if one exists",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "nextResult",
          "normalized": "Connection-\u003eIO Bool",
          "package": "mysql",
          "partial": "Result",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:nextResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "ping",
          "package": "mysql",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "ping",
          "normalized": "Connection-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "protocolInfo",
          "package": "mysql",
          "signature": "Connection -\u003e IO Word",
          "source": "src/Database-MySQL-Base.html#protocolInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "protocolInfo",
          "normalized": "Connection-\u003eIO Word",
          "package": "mysql",
          "partial": "Info",
          "signature": "Connection-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:protocolInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "query",
          "package": "mysql",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "query",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll back the current transaction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "rollback",
          "package": "mysql",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#rollback",
          "type": "function"
        },
        "index": {
          "description": "Roll back the current transaction",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "rollback",
          "normalized": "Connection-\u003eIO()",
          "package": "mysql",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "rowSeek",
          "package": "mysql",
          "signature": "Result -\u003e Row -\u003e IO Row",
          "source": "src/Database-MySQL-Base.html#rowSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "rowSeek",
          "normalized": "Result-\u003eRow-\u003eIO Row",
          "package": "mysql",
          "partial": "Seek",
          "signature": "Result-\u003eRow-\u003eIO Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:rowSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "rowTell",
          "package": "mysql",
          "signature": "Result -\u003e IO Row",
          "source": "src/Database-MySQL-Base.html#rowTell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "rowTell",
          "normalized": "Result-\u003eIO Row",
          "package": "mysql",
          "partial": "Tell",
          "signature": "Result-\u003eIO Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:rowTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "selectDB",
          "package": "mysql",
          "signature": "Connection -\u003e String -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#selectDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "selectDB",
          "normalized": "Connection-\u003eString-\u003eIO()",
          "package": "mysql",
          "partial": "DB",
          "signature": "Connection-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:selectDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "serverInfo",
          "package": "mysql",
          "signature": "Connection -\u003e IO String",
          "source": "src/Database-MySQL-Base.html#serverInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "serverInfo",
          "normalized": "Connection-\u003eIO String",
          "package": "mysql",
          "partial": "Info",
          "signature": "Connection-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:serverInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "serverStatus",
          "package": "mysql",
          "signature": "Connection -\u003e IO String",
          "source": "src/Database-MySQL-Base.html#serverStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "serverStatus",
          "normalized": "Connection-\u003eIO String",
          "package": "mysql",
          "partial": "Status",
          "signature": "Connection-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:serverStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "setCharacterSet",
          "package": "mysql",
          "signature": "Connection -\u003e String -\u003e IO ()",
          "source": "src/Database-MySQL-Base.html#setCharacterSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "setCharacterSet",
          "normalized": "Connection-\u003eString-\u003eIO()",
          "package": "mysql",
          "partial": "Character Set",
          "signature": "Connection-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:setCharacterSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "sslCA",
          "package": "mysql",
          "signature": "FilePath",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslCA",
          "package": "mysql",
          "partial": "CA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "sslCAPath",
          "package": "mysql",
          "signature": "FilePath",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslCAPath",
          "package": "mysql",
          "partial": "CAPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslCAPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "sslCert",
          "package": "mysql",
          "signature": "FilePath",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslCert",
          "package": "mysql",
          "partial": "Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "sslCipher",
          "package": "mysql",
          "signature": "Connection -\u003e IO (Maybe String)",
          "source": "src/Database-MySQL-Base.html#sslCipher",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslCipher",
          "normalized": "Connection-\u003eIO(Maybe String)",
          "package": "mysql",
          "partial": "Cipher",
          "signature": "Connection-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComma-separated list of cipher names.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "sslCiphers",
          "package": "mysql",
          "signature": "String",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "description": "Comma-separated list of cipher names",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslCiphers",
          "package": "mysql",
          "partial": "Ciphers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslCiphers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "sslKey",
          "package": "mysql",
          "signature": "FilePath",
          "source": "src/Database-MySQL-Base.html#SSLInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "sslKey",
          "package": "mysql",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:sslKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a complete result.\n\u003c/p\u003e\u003cp\u003eAny previous outstanding \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is first marked as invalid.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "storeResult",
          "package": "mysql",
          "signature": "Connection -\u003e IO Result",
          "source": "src/Database-MySQL-Base.html#storeResult",
          "type": "function"
        },
        "index": {
          "description": "Retrieve complete result Any previous outstanding Result is first marked as invalid",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "storeResult",
          "normalized": "Connection-\u003eIO Result",
          "package": "mysql",
          "partial": "Result",
          "signature": "Connection-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:storeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Base",
          "name": "threadId",
          "package": "mysql",
          "signature": "Connection -\u003e IO Word",
          "source": "src/Database-MySQL-Base.html#threadId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "threadId",
          "normalized": "Connection-\u003eIO Word",
          "package": "mysql",
          "partial": "Id",
          "signature": "Connection-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:threadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitiate a row-by-row retrieval of a result.\n\u003c/p\u003e\u003cp\u003eAny previous outstanding \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is first marked as invalid.\n\u003c/p\u003e",
          "module": "Database.MySQL.Base",
          "name": "useResult",
          "package": "mysql",
          "signature": "Connection -\u003e IO Result",
          "source": "src/Database-MySQL-Base.html#useResult",
          "type": "function"
        },
        "index": {
          "description": "Initiate row-by-row retrieval of result Any previous outstanding Result is first marked as invalid",
          "hierarchy": "Database MySQL Base",
          "module": "Database.MySQL.Base",
          "name": "useResult",
          "normalized": "Connection-\u003eIO Result",
          "package": "mysql",
          "partial": "Result",
          "signature": "Connection-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql/docs/Database-MySQL-Base.html#v:useResult"
      }
    }
  ]
]