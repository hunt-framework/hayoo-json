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
        "word": "X11-xdamage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "Xdamage",
          "package": "X11-xdamage",
          "source": "src/Graphics-X11-Xdamage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "Xdamage",
          "package": "X11-xdamage",
          "partial": "Xdamage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDAMAGE is a 32 bit value where the top three bits are guaranteed to be 0\n\u003c/p\u003e",
          "module": "Graphics.X11.Xdamage",
          "name": "Damage",
          "package": "X11-xdamage",
          "source": "src/Graphics-X11-Xdamage.html#Damage",
          "type": "type"
        },
        "index": {
          "description": "DAMAGE is bit value where the top three bits are guaranteed to be",
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "Damage",
          "package": "X11-xdamage",
          "partial": "Damage",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#t:Damage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "DamageNotify",
          "package": "X11-xdamage",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "DamageNotify",
          "package": "X11-xdamage",
          "partial": "Damage Notify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#t:DamageNotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "DamageReportLevel",
          "package": "X11-xdamage",
          "source": "src/Graphics-X11-Xdamage.html#DamageReportLevel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "DamageReportLevel",
          "package": "X11-xdamage",
          "partial": "Damage Report Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#t:DamageReportLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "DamageNotify",
          "package": "X11-xdamage",
          "signature": "DamageNotify",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "DamageNotify",
          "package": "X11-xdamage",
          "partial": "Damage Notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:DamageNotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageAdd",
          "package": "X11-xdamage",
          "signature": "Display -\u003e Drawable -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xdamage.html#xdamageAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageAdd",
          "normalized": "Display-\u003eDrawable-\u003eRegion-\u003eIO()",
          "package": "X11-xdamage",
          "partial": "Add",
          "signature": "Display-\u003eDrawable-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a damage object to monitor changes to Drawable\n\u003c/p\u003e",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageCreate",
          "package": "X11-xdamage",
          "signature": "Display -\u003e Drawable -\u003e DamageReportLevel -\u003e IO Damage",
          "source": "src/Graphics-X11-Xdamage.html#xdamageCreate",
          "type": "function"
        },
        "index": {
          "description": "Creates damage object to monitor changes to Drawable",
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageCreate",
          "normalized": "Display-\u003eDrawable-\u003eDamageReportLevel-\u003eIO Damage",
          "package": "X11-xdamage",
          "partial": "Create",
          "signature": "Display-\u003eDrawable-\u003eDamageReportLevel-\u003eIO Damage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroys damage.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageDestroy",
          "package": "X11-xdamage",
          "signature": "Display -\u003e Damage -\u003e IO ()",
          "source": "src/Graphics-X11-Xdamage.html#xdamageDestroy",
          "type": "function"
        },
        "index": {
          "description": "Destroys damage",
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageDestroy",
          "normalized": "Display-\u003eDamage-\u003eIO()",
          "package": "X11-xdamage",
          "partial": "Destroy",
          "signature": "Display-\u003eDamage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageQueryExtension",
          "package": "X11-xdamage",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "src/Graphics-X11-Xdamage.html#xdamageQueryExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageQueryExtension",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-xdamage",
          "partial": "Query Extension",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageQueryExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageQueryVersion",
          "package": "X11-xdamage",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "src/Graphics-X11-Xdamage.html#xdamageQueryVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageQueryVersion",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-xdamage",
          "partial": "Query Version",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageQueryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageSubtract",
          "package": "X11-xdamage",
          "signature": "Display -\u003e Damage -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xdamage.html#xdamageSubtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdamageSubtract",
          "normalized": "Display-\u003eDamage-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xdamage",
          "partial": "Subtract",
          "signature": "Display-\u003eDamage-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdamageSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_area",
          "package": "X11-xdamage",
          "signature": "Rectangle",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_area",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_damage",
          "package": "X11-xdamage",
          "signature": "Damage",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_damage",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_damage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_display",
          "package": "X11-xdamage",
          "signature": "Display",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_display",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_drawable",
          "package": "X11-xdamage",
          "signature": "Drawable",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_drawable",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_drawable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_geometry",
          "package": "X11-xdamage",
          "signature": "Rectangle",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_geometry",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_level",
          "package": "X11-xdamage",
          "signature": "CInt",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_level",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_more",
          "package": "X11-xdamage",
          "signature": "Bool",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_more",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_more"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_send_event",
          "package": "X11-xdamage",
          "signature": "Bool",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_send_event",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_send_event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_serial",
          "package": "X11-xdamage",
          "signature": "CUInt",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_serial",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_timestamp",
          "package": "X11-xdamage",
          "signature": "Time",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_timestamp",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_type",
          "package": "X11-xdamage",
          "signature": "CInt",
          "source": "src/Graphics-X11-Xdamage.html#DamageNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xdamage",
          "module": "Graphics.X11.Xdamage",
          "name": "xdn_type",
          "package": "X11-xdamage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xdamage/docs/Graphics-X11-Xdamage.html#v:xdn_type"
      }
    }
  ]
]