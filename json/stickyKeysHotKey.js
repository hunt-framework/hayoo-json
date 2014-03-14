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
        "word": "stickyKeysHotKey"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module can be used to get and set\n STICKYKEYS.SKF_HOTKEYACTIVE on windows.\n If set to True, pressing shift five\n times will result in a window popping up\n asking whether to activate the sticky keys\n feature.\n\u003c/p\u003e\u003cp\u003eOn other platforms, all functions have no\n effect but can be used riskless.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "StickyKeysHotKey",
          "package": "stickyKeysHotKey",
          "source": "src/System-Win32-StickyKeysHotKey.html",
          "type": "module"
        },
        "index": {
          "description": "This module can be used to get and set STICKYKEYS.SKF HOTKEYACTIVE on windows If set to True pressing shift five times will result in window popping up asking whether to activate the sticky keys feature On other platforms all functions have no effect but can be used riskless",
          "hierarchy": "System Win32 StickyKeysHotKey",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "StickyKeysHotKey",
          "package": "stickyKeysHotKey",
          "partial": "Sticky Keys Hot Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stickyKeysHotKey/docs/System-Win32-StickyKeysHotKey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current state of STICKYKEYS.SKF_HOTKEYACTIVE.\n\u003c/p\u003e",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "getHotKeyActive",
          "package": "stickyKeysHotKey",
          "signature": "IO Bool",
          "source": "src/System-Win32-StickyKeysHotKey.html#getHotKeyActive",
          "type": "function"
        },
        "index": {
          "description": "Returns the current state of STICKYKEYS.SKF HOTKEYACTIVE",
          "hierarchy": "System Win32 StickyKeysHotKey",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "getHotKeyActive",
          "package": "stickyKeysHotKey",
          "partial": "Hot Key Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stickyKeysHotKey/docs/System-Win32-StickyKeysHotKey.html#v:getHotKeyActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current state of STICKYKEYS.SKF_HOTKEYACTIVE.\n\u003c/p\u003e",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "setHotKeyActive",
          "package": "stickyKeysHotKey",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Win32-StickyKeysHotKey.html#setHotKeyActive",
          "type": "function"
        },
        "index": {
          "description": "Sets the current state of STICKYKEYS.SKF HOTKEYACTIVE",
          "hierarchy": "System Win32 StickyKeysHotKey",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "setHotKeyActive",
          "normalized": "Bool-\u003eIO()",
          "package": "stickyKeysHotKey",
          "partial": "Hot Key Active",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stickyKeysHotKey/docs/System-Win32-StickyKeysHotKey.html#v:setHotKeyActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets STICKYKEYS.SKF_HOTKEYACTIVE to False during the\n execution of the given command. Resets the original state\n afterwards\n\u003c/p\u003e",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "withHotKeyDeactivated",
          "package": "stickyKeysHotKey",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-Win32-StickyKeysHotKey.html#withHotKeyDeactivated",
          "type": "function"
        },
        "index": {
          "description": "Sets STICKYKEYS.SKF HOTKEYACTIVE to False during the execution of the given command Resets the original state afterwards",
          "hierarchy": "System Win32 StickyKeysHotKey",
          "module": "System.Win32.StickyKeysHotKey",
          "name": "withHotKeyDeactivated",
          "normalized": "IO a-\u003eIO a",
          "package": "stickyKeysHotKey",
          "partial": "Hot Key Deactivated",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stickyKeysHotKey/docs/System-Win32-StickyKeysHotKey.html#v:withHotKeyDeactivated"
      }
    }
  ]
]