[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-ActionLog.html",
        "fct-type": "module",
        "title": "ActionLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "ActionLog",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:ActionLog",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque data type holding any state needed by the action log snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionLog",
        "fct-type": "data",
        "title": "ActionLog"
      },
      "index": {
        "description": "Opaque data type holding any state needed by the action log snaplet",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "ActionLog",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:ActionType",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration of possible actions in the action log.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
        "fct-type": "data",
        "title": "ActionType"
      },
      "index": {
        "description": "Enumeration of possible actions in the action log",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "ActionType",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:CanDelta",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#CanDelta",
        "fct-type": "class",
        "title": "CanDelta"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "CanDelta",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Can Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:DeltaField",
      "description": {
        "fct-descr": "\u003cp\u003eTo store deltas, you need to be able to get Text representations of each\n field.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#DeltaField",
        "fct-type": "class",
        "title": "DeltaField"
      },
      "index": {
        "description": "To store deltas you need to be able to get Text representations of each field",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "DeltaField",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Delta Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:HasActionLog",
      "description": {
        "fct-descr": "\u003cp\u003eType class that must be implemented to have an action log.  You do not\n have to have any custom splices.  If you don't need to add splices to what\n the snaplet provides by default, just have the custom splice functions\n return an empty list.\n\u003c/p\u003e\u003cp\u003eOne potential use for the custom splices might be if you want to display\n your own custom information in action log lists.  Maybe you want to display\n a user email address in addition to their name, or maybe instead of\n displaying raw entity IDs you want to do some DB query to get a different\n field for display.  The custom splices allow you to make any runtime\n function of a LoggedAction into a splice that can be displayed in action\n log templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#HasActionLog",
        "fct-type": "class",
        "title": "HasActionLog"
      },
      "index": {
        "description": "Type class that must be implemented to have an action log You do not have to have any custom splices If you don need to add splices to what the snaplet provides by default just have the custom splice functions return an empty list One potential use for the custom splices might be if you want to display your own custom information in action log lists Maybe you want to display user email address in addition to their name or maybe instead of displaying raw entity IDs you want to do some DB query to get different field for display The custom splices allow you to make any runtime function of LoggedAction into splice that can be displayed in action log templates",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "HasActionLog",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Has Action Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedAction",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedAction",
        "fct-type": "type",
        "title": "LoggedAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetails",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetails",
        "fct-type": "type",
        "title": "LoggedActionDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionDetails",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetailsGeneric",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "data",
        "title": "LoggedActionDetailsGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionDetailsGeneric",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Details Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionDetailsId",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsId",
        "fct-type": "type",
        "title": "LoggedActionDetailsId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionDetailsId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Details Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionGeneric",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "data",
        "title": "LoggedActionGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionGeneric",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#t:LoggedActionId",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionId",
        "fct-type": "type",
        "title": "LoggedActionId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:CreateAction",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "CreateAction",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
        "fct-type": "function",
        "title": "CreateAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "CreateAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Create Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:DeleteAction",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "DeleteAction",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
        "fct-type": "function",
        "title": "DeleteAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "DeleteAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Delete Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:LoggedAction",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "LoggedAction",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "LoggedAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:LoggedActionDetails",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "LoggedActionDetails",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "function",
        "title": "LoggedActionDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "LoggedActionDetails",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Logged Action Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:UpdateAction",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "UpdateAction",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#ActionType",
        "fct-type": "function",
        "title": "UpdateAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "UpdateAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Update Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:actionLogEntityDefs",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of entity definitions this snaplet exposes. You need them so\n that you can append to your application's list of entity definitions and\n perform the migration in one block.\n\u003c/p\u003e\u003cp\u003eHere's an example of how to combine your app's own entity definitions and\n the action log's in one migration block:\n\u003c/p\u003e\u003cpre\u003e share [mkMigrate \"migrateAll\"] $\n    actionLogEntityDefs ++\n    $(persistFileWith lowerCaseSettings \"schema.txt\")\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "[EntityDef SqlType]",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#actionLogEntityDefs",
        "fct-type": "function",
        "title": "actionLogEntityDefs"
      },
      "index": {
        "description": "The list of entity definitions this snaplet exposes You need them so that you can append to your application list of entity definitions and perform the migration in one block Here an example of how to combine your app own entity definitions and the action log in one migration block share mkMigrate migrateAll actionLogEntityDefs persistFileWith lowerCaseSettings schema.txt",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "actionLogEntityDefs",
        "normalized": "[EntityDef SqlType]",
        "package": "snaplet-actionlog",
        "partial": "Log Entity Defs",
        "signature": "[EntityDef SqlType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:actionToInt",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an ActionType into an Int to be stored in the database.  We\n don't want to use fromEnum here because that will make the numbers\n sensitive to the ordering of the data type and easier to screw up.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "ActionType -\u003e Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#actionToInt",
        "fct-type": "function",
        "title": "actionToInt"
      },
      "index": {
        "description": "Converts an ActionType into an Int to be stored in the database We don want to use fromEnum here because that will make the numbers sensitive to the ordering of the data type and easier to screw up",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "actionToInt",
        "normalized": "ActionType-\u003eInt",
        "package": "snaplet-actionlog",
        "partial": "To Int",
        "signature": "ActionType-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alCustomCSplices",
      "description": {
        "fct-descr": "\u003cp\u003eComplied version of any custom splices that you want to be available\n inside the \u003ccode\u003eactionLogListing\u003c/code\u003e splice.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "[(Text, Promise (Entity LoggedAction) -\u003e Splice m)]",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alCustomCSplices",
        "fct-type": "method",
        "title": "alCustomCSplices"
      },
      "index": {
        "description": "Complied version of any custom splices that you want to be available inside the actionLogListing splice",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alCustomCSplices",
        "normalized": "[(Text,Promise(Entity LoggedAction)-\u003eSplice a)]",
        "package": "snaplet-actionlog",
        "partial": "Custom CSplices",
        "signature": "[(Text,Promise(Entity LoggedAction)-\u003eSplice m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alCustomISplices",
      "description": {
        "fct-descr": "\u003cp\u003eInterpreted version of any custom splices that you want to be\n available inside the \u003ccode\u003eactionLogListing\u003c/code\u003e splice.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Entity LoggedAction -\u003e [(Text, Splice m)]",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alCustomISplices",
        "fct-type": "method",
        "title": "alCustomISplices"
      },
      "index": {
        "description": "Interpreted version of any custom splices that you want to be available inside the actionLogListing splice",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alCustomISplices",
        "normalized": "Entity LoggedAction-\u003e[(Text,Splice a)]",
        "package": "snaplet-actionlog",
        "partial": "Custom ISplices",
        "signature": "Entity LoggedAction-\u003e[(Text,Splice m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetAuthUserId",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current user's user ID.  Again, if your application does not\n have the concept of a user, you can return a constant.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alGetAuthUserId",
        "fct-type": "method",
        "title": "alGetAuthUserId"
      },
      "index": {
        "description": "Gets the current user user ID Again if your application does not have the concept of user you can return constant",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alGetAuthUserId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Get Auth User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetName",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that takes a user ID and returns the user's name, email, or\n whatever you want the snaplet to call that user.  This function is used\n to generate the user dropdown box in action log filter controls.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Int -\u003e m Text",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alGetName",
        "fct-type": "method",
        "title": "alGetName"
      },
      "index": {
        "description": "Function that takes user ID and returns the user name email or whatever you want the snaplet to call that user This function is used to generate the user dropdown box in action log filter controls",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alGetName",
        "normalized": "Int-\u003ea Text",
        "package": "snaplet-actionlog",
        "partial": "Get Name",
        "signature": "Int-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetTenantId",
      "description": {
        "fct-descr": "\u003cp\u003eGets a tenant ID for the current user of your application.  If your\n application is not multi-tenanted, then you can just return a constant\n here.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alGetTenantId",
        "fct-type": "method",
        "title": "alGetTenantId"
      },
      "index": {
        "description": "Gets tenant ID for the current user of your application If your application is not multi-tenanted then you can just return constant here",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alGetTenantId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Get Tenant Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:alGetTime",
      "description": {
        "fct-descr": "\u003cp\u003eIn latency sensitive applications where time stamps are used\n frequently, you may want to do the system call once and then cache the\n results.  This function allows you to provide your own cache-aware\n version of getTime if you choose.  Otherwise you can just lift the\n getCurrentTime function from Data.Time.Clock into your monad.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m UTCTime",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#alGetTime",
        "fct-type": "method",
        "title": "alGetTime"
      },
      "index": {
        "description": "In latency sensitive applications where time stamps are used frequently you may want to do the system call once and then cache the results This function allows you to provide your own cache-aware version of getTime if you choose Otherwise you can just lift the getCurrentTime function from Data.Time.Clock into your monad",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "alGetTime",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Get Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:deltaFields",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "[(Text, a -\u003e ByteString)]",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#deltaFields",
        "fct-type": "method",
        "title": "deltaFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "deltaFields",
        "normalized": "[(Text,a-\u003eByteString)]",
        "package": "snaplet-actionlog",
        "partial": "Fields",
        "signature": "[(Text,a-\u003eByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getAllActions",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the actions in the action log.  In multi-tenant applications\n you probably want this to only be accessible by the administrator of the\n whole site.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m [Entity LoggedAction]",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getAllActions",
        "fct-type": "function",
        "title": "getAllActions"
      },
      "index": {
        "description": "Gets all the actions in the action log In multi-tenant applications you probably want this to only be accessible by the administrator of the whole site",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getAllActions",
        "normalized": "a[Entity LoggedAction]",
        "package": "snaplet-actionlog",
        "partial": "All Actions",
        "signature": "m[Entity LoggedAction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getDeltas",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates a list of fields that changed along with ByteString\n representations of their old and new values.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "a -\u003e a -\u003e [(Text, ByteString, ByteString)]",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#getDeltas",
        "fct-type": "function",
        "title": "getDeltas"
      },
      "index": {
        "description": "Calculates list of fields that changed along with ByteString representations of their old and new values",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getDeltas",
        "normalized": "a-\u003ea-\u003e[(Text,ByteString,ByteString)]",
        "package": "snaplet-actionlog",
        "partial": "Deltas",
        "signature": "a-\u003ea-\u003e[(Text,ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getEntityActions",
      "description": {
        "fct-descr": "\u003cp\u003eGets the LoggedAction entry for the specified entity and id.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Text -\u003e Int -\u003e m [Entity LoggedAction]",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getEntityActions",
        "fct-type": "function",
        "title": "getEntityActions"
      },
      "index": {
        "description": "Gets the LoggedAction entry for the specified entity and id",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getEntityActions",
        "normalized": "Text-\u003eInt-\u003ea[Entity LoggedAction]",
        "package": "snaplet-actionlog",
        "partial": "Entity Actions",
        "signature": "Text-\u003eInt-\u003em[Entity LoggedAction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getLoggedAction",
      "description": {
        "fct-descr": "\u003cp\u003eGets the LoggedAction entry for the specified entity and id.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "LoggedActionId -\u003e m (Maybe LoggedAction)",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getLoggedAction",
        "fct-type": "function",
        "title": "getLoggedAction"
      },
      "index": {
        "description": "Gets the LoggedAction entry for the specified entity and id",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getLoggedAction",
        "normalized": "LoggedActionId-\u003ea(Maybe LoggedAction)",
        "package": "snaplet-actionlog",
        "partial": "Logged Action",
        "signature": "LoggedActionId-\u003em(Maybe LoggedAction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantActions",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the logged actions for the current tenant.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "[Filter LoggedAction] -\u003e [SelectOpt LoggedAction] -\u003e m [Entity LoggedAction]",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getTenantActions",
        "fct-type": "function",
        "title": "getTenantActions"
      },
      "index": {
        "description": "Gets all the logged actions for the current tenant",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getTenantActions",
        "normalized": "[Filter LoggedAction]-\u003e[SelectOpt LoggedAction]-\u003ea[Entity LoggedAction]",
        "package": "snaplet-actionlog",
        "partial": "Tenant Actions",
        "signature": "[Filter LoggedAction]-\u003e[SelectOpt LoggedAction]-\u003em[Entity LoggedAction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantEntities",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list of all entities for a specific tenant.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m [Text]",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getTenantEntities",
        "fct-type": "function",
        "title": "getTenantEntities"
      },
      "index": {
        "description": "Gets list of all entities for specific tenant",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getTenantEntities",
        "normalized": "a[Text]",
        "package": "snaplet-actionlog",
        "partial": "Tenant Entities",
        "signature": "m[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:getTenantUids",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list of all uids for a specific tenant.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "m [Int]",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#getTenantUids",
        "fct-type": "function",
        "title": "getTenantUids"
      },
      "index": {
        "description": "Gets list of all uids for specific tenant",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "getTenantUids",
        "normalized": "a[Int]",
        "package": "snaplet-actionlog",
        "partial": "Tenant Uids",
        "signature": "m[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:initActionLog",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer for the action log snaplet.  It sets up templates, routes,\n and compiled and interpreted splices.\n\u003c/p\u003e\u003cp\u003eIncludes two built-in top level splices: actionLogListing and\n actionLogFilterForm\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Snaplet (Heist b) -\u003e SnapletInit b ActionLog",
        "fct-source": "src/Snap-Snaplet-ActionLog.html#initActionLog",
        "fct-type": "function",
        "title": "initActionLog"
      },
      "index": {
        "description": "Initializer for the action log snaplet It sets up templates routes and compiled and interpreted splices Includes two built-in top level splices actionLogListing and actionLogFilterForm",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "initActionLog",
        "normalized": "Snaplet(Heist a)-\u003eSnapletInit a ActionLog",
        "package": "snaplet-actionlog",
        "partial": "Action Log",
        "signature": "Snaplet(Heist b)-\u003eSnapletInit b ActionLog"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:intToAction",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an Int into an ActionType.  Again, we want this to be explicit\n rather than implied by toEnum.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Int -\u003e Either Text ActionType",
        "fct-source": "src/Snap-Snaplet-ActionLog-InternalTypes.html#intToAction",
        "fct-type": "function",
        "title": "intToAction"
      },
      "index": {
        "description": "Converts an Int into an ActionType Again we want this to be explicit rather than implied by toEnum",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "intToAction",
        "normalized": "Int-\u003eEither Text ActionType",
        "package": "snaplet-actionlog",
        "partial": "To Action",
        "signature": "Int-\u003eEither Text ActionType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:logAction",
      "description": {
        "fct-descr": "\u003cp\u003eLow level function for logging an action.  Usually you will want to use\n one of the other functions like \u003ccode\u003e\u003ca\u003eloggedInsert\u003c/a\u003e\u003c/code\u003e.  But when those aren't\n sufficient, this function provides you maximum control to log actions as\n you see fit.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Text-\u003e Int-\u003e ActionType-\u003e m (Key LoggedAction)",
        "fct-type": "function",
        "title": "logAction"
      },
      "index": {
        "description": "Low level function for logging an action Usually you will want to use one of the other functions like loggedInsert But when those aren sufficient this function provides you maximum control to log actions as you see fit",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "logAction",
        "normalized": "Text-\u003eInt-\u003eActionType-\u003ea(Key LoggedAction)",
        "package": "snaplet-actionlog",
        "partial": "Action",
        "signature": "Text-\u003eInt-\u003eActionType-\u003em(Key LoggedAction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!ActionType",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionAction",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!UTCTime",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionAt",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsActionId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!(KeyBackend backend (LoggedActionGeneric backend))",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "function",
        "title": "loggedActionDetailsActionId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionDetailsActionId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Details Action Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "function",
        "title": "loggedActionDetailsFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionDetailsFieldName",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Details Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsNewValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "function",
        "title": "loggedActionDetailsNewValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionDetailsNewValue",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Details New Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionDetailsOldValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionDetailsGeneric",
        "fct-type": "function",
        "title": "loggedActionDetailsOldValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionDetailsOldValue",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Details Old Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionEntityId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionEntityId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionEntityId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Entity Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionEntityName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionEntityName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionEntityName",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Entity Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionTenantId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionTenantId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionTenantId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Tenant Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedActionUserId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "!Int",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#LoggedActionGeneric",
        "fct-type": "function",
        "title": "loggedActionUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedActionUserId",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedDelete",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a logged delete of an entity in the database.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Entity a -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#loggedDelete",
        "fct-type": "function",
        "title": "loggedDelete"
      },
      "index": {
        "description": "Performs logged delete of an entity in the database",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedDelete",
        "normalized": "Entity a-\u003eb()",
        "package": "snaplet-actionlog",
        "partial": "Delete",
        "signature": "Entity a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedDeleteKey",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a logged delete of a key in the database.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Key a -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#loggedDeleteKey",
        "fct-type": "function",
        "title": "loggedDeleteKey"
      },
      "index": {
        "description": "Performs logged delete of key in the database",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedDeleteKey",
        "normalized": "Key a-\u003eb()",
        "package": "snaplet-actionlog",
        "partial": "Delete Key",
        "signature": "Key a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedInsert",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a logged insert into the database.  Just about everything should\n be inserted using this function instead of \u003ccode\u003erunPersist' . insert\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "a -\u003e m (Key a)",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#loggedInsert",
        "fct-type": "function",
        "title": "loggedInsert"
      },
      "index": {
        "description": "Performs logged insert into the database Just about everything should be inserted using this function instead of runPersist insert",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedInsert",
        "normalized": "a-\u003eb(Key a)",
        "package": "snaplet-actionlog",
        "partial": "Insert",
        "signature": "a-\u003em(Key a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedReplace",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a logged replace of a database record.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Key a -\u003e a -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#loggedReplace",
        "fct-type": "function",
        "title": "loggedReplace"
      },
      "index": {
        "description": "Performs logged replace of database record",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedReplace",
        "normalized": "Key a-\u003ea-\u003eb()",
        "package": "snaplet-actionlog",
        "partial": "Replace",
        "signature": "Key a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:loggedUpdate",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a logged update of a database record.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Key a -\u003e [Update a] -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#loggedUpdate",
        "fct-type": "function",
        "title": "loggedUpdate"
      },
      "index": {
        "description": "Performs logged update of database record",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "loggedUpdate",
        "normalized": "Key a-\u003e[Update a]-\u003eb()",
        "package": "snaplet-actionlog",
        "partial": "Update",
        "signature": "Key a-\u003e[Update a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:migrateActionLog",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "Migration (SqlPersistT m)",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#migrateActionLog",
        "fct-type": "function",
        "title": "migrateActionLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "migrateActionLog",
        "normalized": "",
        "package": "snaplet-actionlog",
        "partial": "Action Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:storeDeltas",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates a list of fields that changed along with ByteString\n representations of their old and new values.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "LoggedActionId -\u003e a -\u003e a -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-ActionLog-API.html#storeDeltas",
        "fct-type": "function",
        "title": "storeDeltas"
      },
      "index": {
        "description": "Calculates list of fields that changed along with ByteString representations of their old and new values",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "storeDeltas",
        "normalized": "LoggedActionId-\u003ea-\u003ea-\u003eb()",
        "package": "snaplet-actionlog",
        "partial": "Deltas",
        "signature": "LoggedActionId-\u003ea-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-actionlog/docs/Snap-Snaplet-ActionLog.html#v:toBS",
      "description": {
        "fct-module": "Snap.Snaplet.ActionLog",
        "fct-package": "snaplet-actionlog",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Snap-Snaplet-ActionLog-Types.html#toBS",
        "fct-type": "method",
        "title": "toBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet ActionLog",
        "module": "Snap.Snaplet.ActionLog",
        "name": "toBS",
        "normalized": "a-\u003eByteString",
        "package": "snaplet-actionlog",
        "partial": "BS",
        "signature": "a-\u003eByteString"
      }
    }
  }
]