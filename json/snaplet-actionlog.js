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
        "word": "snaplet-actionlog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionLog",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionLog",
          "package": "snaplet-actionlog",
          "partial": "Action Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque data type holding any state needed by the action log snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionLog",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionLog",
          "type": "data"
        },
        "index": {
          "description": "Opaque data type holding any state needed by the action log snaplet",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionLog",
          "package": "snaplet-actionlog",
          "partial": "Action Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:ActionLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of possible actions in the action log.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionType",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of possible actions in the action log",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "ActionType",
          "package": "snaplet-actionlog",
          "partial": "Action Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:ActionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "CanDelta",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#CanDelta",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "CanDelta",
          "package": "snaplet-actionlog",
          "partial": "Can Delta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:CanDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo store deltas, you need to be able to get Text representations of each\n field.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "DeltaField",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#DeltaField",
          "type": "class"
        },
        "index": {
          "description": "To store deltas you need to be able to get Text representations of each field",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "DeltaField",
          "package": "snaplet-actionlog",
          "partial": "Delta Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:DeltaField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that must be implemented to have an action log.  You do not\n have to have any custom splices.  If you don't need to add splices to what\n the snaplet provides by default, just have the custom splice functions\n return an empty list.\n\u003c/p\u003e\u003cp\u003eOne potential use for the custom splices might be if you want to display\n your own custom information in action log lists.  Maybe you want to display\n a user email address in addition to their name, or maybe instead of\n displaying raw entity IDs you want to do some DB query to get a different\n field for display.  The custom splices allow you to make any runtime\n function of a LoggedAction into a splice that can be displayed in action\n log templates.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "HasActionLog",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#HasActionLog",
          "type": "class"
        },
        "index": {
          "description": "Type class that must be implemented to have an action log You do not have to have any custom splices If you don need to add splices to what the snaplet provides by default just have the custom splice functions return an empty list One potential use for the custom splices might be if you want to display your own custom information in action log lists Maybe you want to display user email address in addition to their name or maybe instead of displaying raw entity IDs you want to do some DB query to get different field for display The custom splices allow you to make any runtime function of LoggedAction into splice that can be displayed in action log templates",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "HasActionLog",
          "package": "snaplet-actionlog",
          "partial": "Has Action Log",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:HasActionLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedAction",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedAction",
          "package": "snaplet-actionlog",
          "partial": "Logged Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetails",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetails",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetails",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Details",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetailsGeneric",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetailsGeneric",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Details Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetailsGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetailsId",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetailsId",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Details Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetailsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionGeneric",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionGeneric",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionId",
          "package": "snaplet-actionlog",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionId",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "CreateAction",
          "package": "snaplet-actionlog",
          "signature": "CreateAction",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "CreateAction",
          "package": "snaplet-actionlog",
          "partial": "Create Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:CreateAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "DeleteAction",
          "package": "snaplet-actionlog",
          "signature": "DeleteAction",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "DeleteAction",
          "package": "snaplet-actionlog",
          "partial": "Delete Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:DeleteAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedAction",
          "package": "snaplet-actionlog",
          "signature": "LoggedAction",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedAction",
          "package": "snaplet-actionlog",
          "partial": "Logged Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:LoggedAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetails",
          "package": "snaplet-actionlog",
          "signature": "LoggedActionDetails",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "LoggedActionDetails",
          "package": "snaplet-actionlog",
          "partial": "Logged Action Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:LoggedActionDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "UpdateAction",
          "package": "snaplet-actionlog",
          "signature": "UpdateAction",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "UpdateAction",
          "package": "snaplet-actionlog",
          "partial": "Update Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:UpdateAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of entity definitions this snaplet exposes. You need them so\n that you can append to your application's list of entity definitions and\n perform the migration in one block.\n\u003c/p\u003e\u003cp\u003eHere's an example of how to combine your app's own entity definitions and\n the action log's in one migration block:\n\u003c/p\u003e\u003cpre\u003e share [mkMigrate \"migrateAll\"] $\n    actionLogEntityDefs ++\n    $(persistFileWith lowerCaseSettings \"schema.txt\")\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "actionLogEntityDefs",
          "package": "snaplet-actionlog",
          "signature": "[EntityDef SqlType]",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#actionLogEntityDefs",
          "type": "function"
        },
        "index": {
          "description": "The list of entity definitions this snaplet exposes You need them so that you can append to your application list of entity definitions and perform the migration in one block Here an example of how to combine your app own entity definitions and the action log in one migration block share mkMigrate migrateAll actionLogEntityDefs persistFileWith lowerCaseSettings schema.txt",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "actionLogEntityDefs",
          "normalized": "[EntityDef SqlType]",
          "package": "snaplet-actionlog",
          "partial": "Log Entity Defs",
          "signature": "[EntityDef SqlType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:actionLogEntityDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an ActionType into an Int to be stored in the database.  We\n don't want to use fromEnum here because that will make the numbers\n sensitive to the ordering of the data type and easier to screw up.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "actionToInt",
          "package": "snaplet-actionlog",
          "signature": "ActionType -\u003e Int",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#actionToInt",
          "type": "function"
        },
        "index": {
          "description": "Converts an ActionType into an Int to be stored in the database We don want to use fromEnum here because that will make the numbers sensitive to the ordering of the data type and easier to screw up",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "actionToInt",
          "normalized": "ActionType-\u003eInt",
          "package": "snaplet-actionlog",
          "partial": "To Int",
          "signature": "ActionType-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:actionToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplied version of any custom splices that you want to be available\n inside the \u003ccode\u003eactionLogListing\u003c/code\u003e splice.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alCustomCSplices",
          "package": "snaplet-actionlog",
          "signature": "[(Text, Promise (Entity LoggedAction) -\u003e Splice m)]",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alCustomCSplices",
          "type": "method"
        },
        "index": {
          "description": "Complied version of any custom splices that you want to be available inside the actionLogListing splice",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alCustomCSplices",
          "normalized": "[(Text,Promise(Entity LoggedAction)-\u003eSplice a)]",
          "package": "snaplet-actionlog",
          "partial": "Custom CSplices",
          "signature": "[(Text,Promise(Entity LoggedAction)-\u003eSplice m)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alCustomCSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpreted version of any custom splices that you want to be\n available inside the \u003ccode\u003eactionLogListing\u003c/code\u003e splice.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alCustomISplices",
          "package": "snaplet-actionlog",
          "signature": "Entity LoggedAction -\u003e [(Text, Splice m)]",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alCustomISplices",
          "type": "method"
        },
        "index": {
          "description": "Interpreted version of any custom splices that you want to be available inside the actionLogListing splice",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alCustomISplices",
          "normalized": "Entity LoggedAction-\u003e[(Text,Splice a)]",
          "package": "snaplet-actionlog",
          "partial": "Custom ISplices",
          "signature": "Entity LoggedAction-\u003e[(Text,Splice m)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alCustomISplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current user's user ID.  Again, if your application does not\n have the concept of a user, you can return a constant.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetAuthUserId",
          "package": "snaplet-actionlog",
          "signature": "m Int",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alGetAuthUserId",
          "type": "method"
        },
        "index": {
          "description": "Gets the current user user ID Again if your application does not have the concept of user you can return constant",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetAuthUserId",
          "package": "snaplet-actionlog",
          "partial": "Get Auth User Id",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetAuthUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that takes a user ID and returns the user's name, email, or\n whatever you want the snaplet to call that user.  This function is used\n to generate the user dropdown box in action log filter controls.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetName",
          "package": "snaplet-actionlog",
          "signature": "Int -\u003e m Text",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alGetName",
          "type": "method"
        },
        "index": {
          "description": "Function that takes user ID and returns the user name email or whatever you want the snaplet to call that user This function is used to generate the user dropdown box in action log filter controls",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetName",
          "normalized": "Int-\u003ea Text",
          "package": "snaplet-actionlog",
          "partial": "Get Name",
          "signature": "Int-\u003em Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a tenant ID for the current user of your application.  If your\n application is not multi-tenanted, then you can just return a constant\n here.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetTenantId",
          "package": "snaplet-actionlog",
          "signature": "m Int",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alGetTenantId",
          "type": "method"
        },
        "index": {
          "description": "Gets tenant ID for the current user of your application If your application is not multi-tenanted then you can just return constant here",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetTenantId",
          "package": "snaplet-actionlog",
          "partial": "Get Tenant Id",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetTenantId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn latency sensitive applications where time stamps are used\n frequently, you may want to do the system call once and then cache the\n results.  This function allows you to provide your own cache-aware\n version of getTime if you choose.  Otherwise you can just lift the\n getCurrentTime function from Data.Time.Clock into your monad.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetTime",
          "package": "snaplet-actionlog",
          "signature": "m UTCTime",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#alGetTime",
          "type": "method"
        },
        "index": {
          "description": "In latency sensitive applications where time stamps are used frequently you may want to do the system call once and then cache the results This function allows you to provide your own cache-aware version of getTime if you choose Otherwise you can just lift the getCurrentTime function from Data.Time.Clock into your monad",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "alGetTime",
          "package": "snaplet-actionlog",
          "partial": "Get Time",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "deltaFields",
          "package": "snaplet-actionlog",
          "signature": "[(Text, a -\u003e ByteString)]",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#deltaFields",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "deltaFields",
          "normalized": "[(Text,a-\u003eByteString)]",
          "package": "snaplet-actionlog",
          "partial": "Fields",
          "signature": "[(Text,a-\u003eByteString)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:deltaFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all the actions in the action log.  In multi-tenant applications\n you probably want this to only be accessible by the administrator of the\n whole site.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getAllActions",
          "package": "snaplet-actionlog",
          "signature": "m [Entity LoggedAction]",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getAllActions",
          "type": "function"
        },
        "index": {
          "description": "Gets all the actions in the action log In multi-tenant applications you probably want this to only be accessible by the administrator of the whole site",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getAllActions",
          "normalized": "a[Entity LoggedAction]",
          "package": "snaplet-actionlog",
          "partial": "All Actions",
          "signature": "m[Entity LoggedAction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getAllActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates a list of fields that changed along with ByteString\n representations of their old and new values.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getDeltas",
          "package": "snaplet-actionlog",
          "signature": "a -\u003e a -\u003e [(Text, ByteString, ByteString)]",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#getDeltas",
          "type": "function"
        },
        "index": {
          "description": "Calculates list of fields that changed along with ByteString representations of their old and new values",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getDeltas",
          "normalized": "a-\u003ea-\u003e[(Text,ByteString,ByteString)]",
          "package": "snaplet-actionlog",
          "partial": "Deltas",
          "signature": "a-\u003ea-\u003e[(Text,ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getDeltas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the LoggedAction entry for the specified entity and id.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getEntityActions",
          "package": "snaplet-actionlog",
          "signature": "Text -\u003e Int -\u003e m [Entity LoggedAction]",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getEntityActions",
          "type": "function"
        },
        "index": {
          "description": "Gets the LoggedAction entry for the specified entity and id",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getEntityActions",
          "normalized": "Text-\u003eInt-\u003ea[Entity LoggedAction]",
          "package": "snaplet-actionlog",
          "partial": "Entity Actions",
          "signature": "Text-\u003eInt-\u003em[Entity LoggedAction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getEntityActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the LoggedAction entry for the specified entity and id.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getLoggedAction",
          "package": "snaplet-actionlog",
          "signature": "LoggedActionId -\u003e m (Maybe LoggedAction)",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getLoggedAction",
          "type": "function"
        },
        "index": {
          "description": "Gets the LoggedAction entry for the specified entity and id",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getLoggedAction",
          "normalized": "LoggedActionId-\u003ea(Maybe LoggedAction)",
          "package": "snaplet-actionlog",
          "partial": "Logged Action",
          "signature": "LoggedActionId-\u003em(Maybe LoggedAction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getLoggedAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all the logged actions for the current tenant.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantActions",
          "package": "snaplet-actionlog",
          "signature": "[Filter LoggedAction] -\u003e [SelectOpt LoggedAction] -\u003e m [Entity LoggedAction]",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getTenantActions",
          "type": "function"
        },
        "index": {
          "description": "Gets all the logged actions for the current tenant",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantActions",
          "normalized": "[Filter LoggedAction]-\u003e[SelectOpt LoggedAction]-\u003ea[Entity LoggedAction]",
          "package": "snaplet-actionlog",
          "partial": "Tenant Actions",
          "signature": "[Filter LoggedAction]-\u003e[SelectOpt LoggedAction]-\u003em[Entity LoggedAction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of all entities for a specific tenant.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantEntities",
          "package": "snaplet-actionlog",
          "signature": "m [Text]",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getTenantEntities",
          "type": "function"
        },
        "index": {
          "description": "Gets list of all entities for specific tenant",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantEntities",
          "normalized": "a[Text]",
          "package": "snaplet-actionlog",
          "partial": "Tenant Entities",
          "signature": "m[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of all uids for a specific tenant.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantUids",
          "package": "snaplet-actionlog",
          "signature": "m [Int]",
          "source": "src/Snap-Snaplet-ActionLog-API.html#getTenantUids",
          "type": "function"
        },
        "index": {
          "description": "Gets list of all uids for specific tenant",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "getTenantUids",
          "normalized": "a[Int]",
          "package": "snaplet-actionlog",
          "partial": "Tenant Uids",
          "signature": "m[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantUids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer for the action log snaplet.  It sets up templates, routes,\n and compiled and interpreted splices.\n\u003c/p\u003e\u003cp\u003eIncludes two built-in top level splices: actionLogListing and\n actionLogFilterForm\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "initActionLog",
          "package": "snaplet-actionlog",
          "signature": "Snaplet (Heist b) -\u003e SnapletInit b ActionLog",
          "source": "src/Snap-Snaplet-ActionLog.html#initActionLog",
          "type": "function"
        },
        "index": {
          "description": "Initializer for the action log snaplet It sets up templates routes and compiled and interpreted splices Includes two built-in top level splices actionLogListing and actionLogFilterForm",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "initActionLog",
          "normalized": "Snaplet(Heist a)-\u003eSnapletInit a ActionLog",
          "package": "snaplet-actionlog",
          "partial": "Action Log",
          "signature": "Snaplet(Heist b)-\u003eSnapletInit b ActionLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:initActionLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an Int into an ActionType.  Again, we want this to be explicit\n rather than implied by toEnum.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "intToAction",
          "package": "snaplet-actionlog",
          "signature": "Int -\u003e Either Text ActionType",
          "source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#intToAction",
          "type": "function"
        },
        "index": {
          "description": "Converts an Int into an ActionType Again we want this to be explicit rather than implied by toEnum",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "intToAction",
          "normalized": "Int-\u003eEither Text ActionType",
          "package": "snaplet-actionlog",
          "partial": "To Action",
          "signature": "Int-\u003eEither Text ActionType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:intToAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow level function for logging an action.  Usually you will want to use\n one of the other functions like \u003ccode\u003e\u003ca\u003eloggedInsert\u003c/a\u003e\u003c/code\u003e.  But when those aren't\n sufficient, this function provides you maximum control to log actions as\n you see fit.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "logAction",
          "package": "snaplet-actionlog",
          "signature": "Text-\u003e Int-\u003e ActionType-\u003e m (Key LoggedAction)",
          "type": "function"
        },
        "index": {
          "description": "Low level function for logging an action Usually you will want to use one of the other functions like loggedInsert But when those aren sufficient this function provides you maximum control to log actions as you see fit",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "logAction",
          "normalized": "Text-\u003eInt-\u003eActionType-\u003ea(Key LoggedAction)",
          "package": "snaplet-actionlog",
          "partial": "Action",
          "signature": "Text-\u003eInt-\u003eActionType-\u003em(Key LoggedAction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:logAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionAction",
          "package": "snaplet-actionlog",
          "signature": "ActionType",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionAction",
          "package": "snaplet-actionlog",
          "partial": "Action Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionAt",
          "package": "snaplet-actionlog",
          "signature": "UTCTime",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionAt",
          "package": "snaplet-actionlog",
          "partial": "Action At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsActionId",
          "package": "snaplet-actionlog",
          "signature": "(KeyBackend backend (LoggedActionGeneric backend))",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsActionId",
          "package": "snaplet-actionlog",
          "partial": "Action Details Action Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsActionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsFieldName",
          "package": "snaplet-actionlog",
          "signature": "Text",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsFieldName",
          "package": "snaplet-actionlog",
          "partial": "Action Details Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsNewValue",
          "package": "snaplet-actionlog",
          "signature": "Text",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsNewValue",
          "package": "snaplet-actionlog",
          "partial": "Action Details New Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsNewValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsOldValue",
          "package": "snaplet-actionlog",
          "signature": "Text",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionDetailsOldValue",
          "package": "snaplet-actionlog",
          "partial": "Action Details Old Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsOldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionEntityId",
          "package": "snaplet-actionlog",
          "signature": "Int",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionEntityId",
          "package": "snaplet-actionlog",
          "partial": "Action Entity Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionEntityId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionEntityName",
          "package": "snaplet-actionlog",
          "signature": "Text",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionEntityName",
          "package": "snaplet-actionlog",
          "partial": "Action Entity Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionEntityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionTenantId",
          "package": "snaplet-actionlog",
          "signature": "Int",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionTenantId",
          "package": "snaplet-actionlog",
          "partial": "Action Tenant Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionTenantId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionUserId",
          "package": "snaplet-actionlog",
          "signature": "Int",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedActionUserId",
          "package": "snaplet-actionlog",
          "partial": "Action User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a logged delete of an entity in the database.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedDelete",
          "package": "snaplet-actionlog",
          "signature": "Entity a -\u003e m ()",
          "source": "src/Snap-Snaplet-ActionLog-API.html#loggedDelete",
          "type": "function"
        },
        "index": {
          "description": "Performs logged delete of an entity in the database",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedDelete",
          "normalized": "Entity a-\u003eb()",
          "package": "snaplet-actionlog",
          "partial": "Delete",
          "signature": "Entity a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a logged delete of a key in the database.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedDeleteKey",
          "package": "snaplet-actionlog",
          "signature": "Key a -\u003e m ()",
          "source": "src/Snap-Snaplet-ActionLog-API.html#loggedDeleteKey",
          "type": "function"
        },
        "index": {
          "description": "Performs logged delete of key in the database",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedDeleteKey",
          "normalized": "Key a-\u003eb()",
          "package": "snaplet-actionlog",
          "partial": "Delete Key",
          "signature": "Key a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedDeleteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a logged insert into the database.  Just about everything should\n be inserted using this function instead of \u003ccode\u003erunPersist' . insert\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedInsert",
          "package": "snaplet-actionlog",
          "signature": "a -\u003e m (Key a)",
          "source": "src/Snap-Snaplet-ActionLog-API.html#loggedInsert",
          "type": "function"
        },
        "index": {
          "description": "Performs logged insert into the database Just about everything should be inserted using this function instead of runPersist insert",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedInsert",
          "normalized": "a-\u003eb(Key a)",
          "package": "snaplet-actionlog",
          "partial": "Insert",
          "signature": "a-\u003em(Key a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a logged replace of a database record.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedReplace",
          "package": "snaplet-actionlog",
          "signature": "Key a -\u003e a -\u003e m ()",
          "source": "src/Snap-Snaplet-ActionLog-API.html#loggedReplace",
          "type": "function"
        },
        "index": {
          "description": "Performs logged replace of database record",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedReplace",
          "normalized": "Key a-\u003ea-\u003eb()",
          "package": "snaplet-actionlog",
          "partial": "Replace",
          "signature": "Key a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a logged update of a database record.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedUpdate",
          "package": "snaplet-actionlog",
          "signature": "Key a -\u003e [Update a] -\u003e m ()",
          "source": "src/Snap-Snaplet-ActionLog-API.html#loggedUpdate",
          "type": "function"
        },
        "index": {
          "description": "Performs logged update of database record",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "loggedUpdate",
          "normalized": "Key a-\u003e[Update a]-\u003eb()",
          "package": "snaplet-actionlog",
          "partial": "Update",
          "signature": "Key a-\u003e[Update a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "migrateActionLog",
          "package": "snaplet-actionlog",
          "signature": "Migration (SqlPersistT m)",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#migrateActionLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "migrateActionLog",
          "package": "snaplet-actionlog",
          "partial": "Action Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:migrateActionLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates a list of fields that changed along with ByteString\n representations of their old and new values.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.ActionLog",
          "name": "storeDeltas",
          "package": "snaplet-actionlog",
          "signature": "LoggedActionId -\u003e a -\u003e a -\u003e m ()",
          "source": "src/Snap-Snaplet-ActionLog-API.html#storeDeltas",
          "type": "function"
        },
        "index": {
          "description": "Calculates list of fields that changed along with ByteString representations of their old and new values",
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "storeDeltas",
          "normalized": "LoggedActionId-\u003ea-\u003ea-\u003eb()",
          "package": "snaplet-actionlog",
          "partial": "Deltas",
          "signature": "LoggedActionId-\u003ea-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:storeDeltas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.ActionLog",
          "name": "toBS",
          "package": "snaplet-actionlog",
          "signature": "a -\u003e ByteString",
          "source": "src/Snap-Snaplet-ActionLog-Types.html#toBS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet ActionLog",
          "module": "Snap.Snaplet.ActionLog",
          "name": "toBS",
          "normalized": "a-\u003eByteString",
          "package": "snaplet-actionlog",
          "partial": "BS",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:toBS"
      }
    }
  ]
]