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
        "word": "xfconf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXfconf-GObject Binding -- Functions to bind Xfconf properties to\n   GObject properties.\n\u003c/p\u003e\u003cp\u003eNote that this haskell API follows closely the original C API. Object\n   properties should be given using their string name from the C API\n   and not their Haskell name deriving from\n   \u003ccode\u003e\u003ca\u003eReadWriteAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf-binding.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "Binding",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Binding.html",
          "type": "module"
        },
        "index": {
          "description": "Xfconf-GObject Binding Functions to bind Xfconf properties to GObject properties Note that this haskell API follows closely the original API Object properties should be given using their string name from the API and not their Haskell name deriving from ReadWriteAttr For more information see http docs.xfce.org api xfconf xfconf-xfconf-binding.html",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "Binding",
          "package": "xfconf",
          "partial": "Binding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID number that can be used to later remove corresponding bindings.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "XfconfBindingID",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Binding.html#XfconfBindingID",
          "type": "data"
        },
        "index": {
          "description": "ID number that can be used to later remove corresponding bindings",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "XfconfBindingID",
          "package": "xfconf",
          "partial": "Xfconf Binding ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#t:XfconfBindingID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds an Xfconf property to a GObject property. If the property is\n changed via either the GObject or Xfconf, the corresponding property\n will also be updated.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003exfconf property type\u003c/code\u003e is required since \u003ccode\u003exfconf property\u003c/code\u003e\n may or may not already exist in the Xfconf store. The type of \u003ccode\u003eobject\n property\u003c/code\u003e will be determined automatically. If the two types do not\n match, a conversion will be attempted.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfBind",
          "package": "xfconf",
          "signature": "conf-\u003e String-\u003e GType-\u003e obj-\u003e String-\u003e IO XfconfBindingID",
          "type": "function"
        },
        "index": {
          "description": "Binds an Xfconf property to GObject property If the property is changed via either the GObject or Xfconf the corresponding property will also be updated Note that xfconf property type is required since xfconf property may or may not already exist in the Xfconf store The type of object property will be determined automatically If the two types do not match conversion will be attempted",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfBind",
          "normalized": "a-\u003eString-\u003eGType-\u003eb-\u003eString-\u003eIO XfconfBindingID",
          "package": "xfconf",
          "partial": "Bind",
          "signature": "conf-\u003eString-\u003eGType-\u003eobj-\u003eString-\u003eIO XfconfBindingID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds an Xfconf property to a GObject property of type\n GDK_TYPE_COLOR (aka a GdkColor struct or simply \u003ccode\u003eColor\u003c/code\u003e in Haskell\n Pango library). If the property is changed via either the GObject or\n Xfconf, the corresponding property will also be updated.\n\u003c/p\u003e\u003cp\u003eThis is a special-case binding; the GdkColor struct is not ideal\n as-is for binding to a property, so it is stored in the Xfconf store\n as four 16-bit unsigned ints (red, green, blue, alpha). Since\n GdkColor (currently) only supports RGB and not RGBA, the last value\n will always be set to 0xFFFF.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfBindGdkColor",
          "package": "xfconf",
          "signature": "conf-\u003e String-\u003e obj-\u003e String-\u003e IO XfconfBindingID",
          "type": "function"
        },
        "index": {
          "description": "Binds an Xfconf property to GObject property of type GDK TYPE COLOR aka GdkColor struct or simply Color in Haskell Pango library If the property is changed via either the GObject or Xfconf the corresponding property will also be updated This is special-case binding the GdkColor struct is not ideal as-is for binding to property so it is stored in the Xfconf store as four bit unsigned ints red green blue alpha Since GdkColor currently only supports RGB and not RGBA the last value will always be set to xFFFF",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfBindGdkColor",
          "normalized": "a-\u003eString-\u003eb-\u003eString-\u003eIO XfconfBindingID",
          "package": "xfconf",
          "partial": "Bind Gdk Color",
          "signature": "conf-\u003eString-\u003eobj-\u003eString-\u003eIO XfconfBindingID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfBindGdkColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an Xfconf/GObject property binding based on the binding\n \u003ccode\u003e\u003ca\u003eXfconfBindingID\u003c/a\u003e\u003c/code\u003e number. See \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbind",
          "package": "xfconf",
          "signature": "XfconfBindingID -\u003e IO ()",
          "source": "src/System-XFCE-Xfconf-Binding.html#xfconfUnbind",
          "type": "function"
        },
        "index": {
          "description": "Removes an Xfconf GObject property binding based on the binding XfconfBindingID number See xfconfBind",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbind",
          "normalized": "XfconfBindingID-\u003eIO()",
          "package": "xfconf",
          "partial": "Unbind",
          "signature": "XfconfBindingID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbinds all Xfconf channel bindings (see \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e)\n to object. If object is an \u003ccode\u003e\u003ca\u003eXfconfChannel\u003c/a\u003e\u003c/code\u003e, it will unbind all xfconf\n properties on that channel. If object is a regular \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003e with\n properties bound to a channel, all those bindings will be removed.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbindAll",
          "package": "xfconf",
          "signature": "obj -\u003e IO ()",
          "source": "src/System-XFCE-Xfconf-Binding.html#xfconfUnbindAll",
          "type": "function"
        },
        "index": {
          "description": "Unbinds all Xfconf channel bindings see xfconfBind to object If object is an XfconfChannel it will unbind all xfconf properties on that channel If object is regular GObject with properties bound to channel all those bindings will be removed",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbindAll",
          "normalized": "a-\u003eIO()",
          "package": "xfconf",
          "partial": "Unbind All",
          "signature": "obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbindAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses an Xfconf channel previously bound to a GObject property\n (see \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e) to no longer be bound.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbindByProperty",
          "package": "xfconf",
          "signature": "conf-\u003e String-\u003e obj-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Causes an Xfconf channel previously bound to GObject property see xfconfBind to no longer be bound",
          "hierarchy": "System XFCE Xfconf Binding",
          "module": "System.XFCE.Xfconf.Binding",
          "name": "xfconfUnbindByProperty",
          "normalized": "a-\u003eString-\u003eb-\u003eString-\u003eIO()",
          "package": "xfconf",
          "partial": "Unbind By Property",
          "signature": "conf-\u003eString-\u003eobj-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbindByProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn application-defined domain for storing configuration settings.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf-channel.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "Channel",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Channel.html",
          "type": "module"
        },
        "index": {
          "description": "An application-defined domain for storing configuration settings For more information see http docs.xfce.org api xfconf xfconf-xfconf-channel.html",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "Channel",
          "package": "xfconf",
          "partial": "Channel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "XfconfChannel",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
          "type": "data"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "XfconfChannel",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#t:XfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "XfconfChannelClass",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Types.html#XfconfChannelClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "XfconfChannelClass",
          "package": "xfconf",
          "partial": "Xfconf Channel Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#t:XfconfChannelClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "afterPropertyChanged",
          "package": "xfconf",
          "signature": "self -\u003e (String -\u003e Maybe XfconfValue -\u003e IO ()) -\u003e IO (ConnectId self)",
          "source": "src/System-XFCE-Xfconf-Channel.html#afterPropertyChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "afterPropertyChanged",
          "normalized": "a-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "xfconf",
          "partial": "Property Changed",
          "signature": "self-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId self)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:afterPropertyChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither creates a new \u003ccode\u003eChannel\u003c/code\u003e, or fetches a singleton object for\n channel_name. This function always returns a valid object; no\n checking is done to see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGet",
          "package": "xfconf",
          "signature": "String-\u003e IO XfconfChannel",
          "type": "function"
        },
        "index": {
          "description": "Either creates new Channel or fetches singleton object for channel name This function always returns valid object no checking is done to see if the channel exists or has valid name May throw GError see xfconfInit for more information",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGet",
          "normalized": "String-\u003eIO XfconfChannel",
          "package": "xfconf",
          "partial": "Get",
          "signature": "String-\u003eIO XfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003echannelGetKeys channel \"/\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetAllKeys",
          "package": "xfconf",
          "signature": "self -\u003e IO [String]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetAllKeys",
          "type": "function"
        },
        "index": {
          "description": "Alias to channelGetKeys channel",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetAllKeys",
          "normalized": "a-\u003eIO[String]",
          "package": "xfconf",
          "partial": "Get All Keys",
          "signature": "self-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetAllKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003echannelGetProperties channel \"/\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetAllProperties",
          "package": "xfconf",
          "signature": "self -\u003e IO [(String, Maybe XfconfValue)]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetAllProperties",
          "type": "function"
        },
        "index": {
          "description": "Alias to channelGetProperties channel",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetAllProperties",
          "normalized": "a-\u003eIO[(String,Maybe XfconfValue)]",
          "package": "xfconf",
          "partial": "Get All Properties",
          "signature": "self-\u003eIO[(String,Maybe XfconfValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetAllProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetArray",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO [XfconfValue]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetArray",
          "normalized": "a-\u003eString-\u003eIO[XfconfValue]",
          "package": "xfconf",
          "partial": "Get Array",
          "signature": "self-\u003eString-\u003eIO[XfconfValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetBool",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetBool",
          "normalized": "a-\u003eString-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Get Bool",
          "signature": "self-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetBoolWithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Bool -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetBoolWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetBoolWithDefault",
          "normalized": "a-\u003eString-\u003eBool-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Get Bool With Default",
          "signature": "self-\u003eString-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetBoolWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetDouble",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Double",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetDouble",
          "normalized": "a-\u003eString-\u003eIO Double",
          "package": "xfconf",
          "partial": "Get Double",
          "signature": "self-\u003eString-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetDoubleWithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Double -\u003e IO Double",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetDoubleWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetDoubleWithDefault",
          "normalized": "a-\u003eString-\u003eDouble-\u003eIO Double",
          "package": "xfconf",
          "partial": "Get Double With Default",
          "signature": "self-\u003eString-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetDoubleWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Int32",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt",
          "normalized": "a-\u003eString-\u003eIO Int",
          "package": "xfconf",
          "partial": "Get Int",
          "signature": "self-\u003eString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt16",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Int16",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt16",
          "normalized": "a-\u003eString-\u003eIO Int",
          "package": "xfconf",
          "partial": "Get Int",
          "signature": "self-\u003eString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt16WithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Int16 -\u003e IO Int16",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt16WithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetInt16WithDefault",
          "normalized": "a-\u003eString-\u003eInt-\u003eIO Int",
          "package": "xfconf",
          "partial": "Get Int With Default",
          "signature": "self-\u003eString-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt16WithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetIntWithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Int32 -\u003e IO Int32",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetIntWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetIntWithDefault",
          "normalized": "a-\u003eString-\u003eInt-\u003eIO Int",
          "package": "xfconf",
          "partial": "Get Int With Default",
          "signature": "self-\u003eString-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetIntWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the list of properties from \u003ccode\u003eChannel\u003c/code\u003e. The value of the\n property specified by the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e property_base and all\n sub-properties are retrieved. To retrieve all properties in the\n channel, specify \"/\".\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetKeys",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO [String]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetKeys",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the list of properties from Channel The value of the property specified by the String property base and all sub-properties are retrieved To retrieve all properties in the channel specify",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetKeys",
          "normalized": "a-\u003eString-\u003eIO[String]",
          "package": "xfconf",
          "partial": "Get Keys",
          "signature": "self-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetName",
          "package": "xfconf",
          "signature": "self -\u003e IO String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetName",
          "normalized": "a-\u003eIO String",
          "package": "xfconf",
          "partial": "Get Name",
          "signature": "self-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function returning an association list [(key,\n value)]. Work only for the data types defined in\n \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e (i.e. no (named) structures).\n See also the limitation imposed by \u003ccode\u003e\u003ca\u003egHashTableLookup\u003c/a\u003e\u003c/code\u003e. The value of\n the property specified by the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e property_base and all\n sub-properties are retrieved. To retrieve all properties in the\n channel, specify \"/\".\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetProperties",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO [(String, Maybe XfconfValue)]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetProperties",
          "type": "function"
        },
        "index": {
          "description": "convenience function returning an association list key value Work only for the data types defined in System.XFCE.Xfconf.Values i.e no named structures See also the limitation imposed by gHashTableLookup The value of the property specified by the String property base and all sub-properties are retrieved To retrieve all properties in the channel specify",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetProperties",
          "normalized": "a-\u003eString-\u003eIO[(String,Maybe XfconfValue)]",
          "package": "xfconf",
          "partial": "Get Properties",
          "signature": "self-\u003eString-\u003eIO[(String,Maybe XfconfValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric function for retrieving \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003es. As for\n \u003ccode\u003e\u003ca\u003echannelGetProperties\u003c/a\u003e\u003c/code\u003e, only work with the limited set of simple\n types supported by \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetProperty",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO (Maybe XfconfValue)",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetProperty",
          "type": "function"
        },
        "index": {
          "description": "Generic function for retrieving XfconfValue As for channelGetProperties only work with the limited set of simple types supported by System.XFCE.Xfconf.Values",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetProperty",
          "normalized": "a-\u003eString-\u003eIO(Maybe XfconfValue)",
          "package": "xfconf",
          "partial": "Get Property",
          "signature": "self-\u003eString-\u003eIO(Maybe XfconfValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetPropertyBase",
          "package": "xfconf",
          "signature": "self -\u003e IO String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetPropertyBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetPropertyBase",
          "normalized": "a-\u003eIO String",
          "package": "xfconf",
          "partial": "Get Property Base",
          "signature": "self-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetPropertyBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetString",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetString",
          "normalized": "a-\u003eString-\u003eIO String",
          "package": "xfconf",
          "partial": "Get String",
          "signature": "self-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetStringList",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO [String]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetStringList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetStringList",
          "normalized": "a-\u003eString-\u003eIO[String]",
          "package": "xfconf",
          "partial": "Get String List",
          "signature": "self-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetStringList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetStringWithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e String -\u003e IO String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetStringWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetStringWithDefault",
          "normalized": "a-\u003eString-\u003eString-\u003eIO String",
          "package": "xfconf",
          "partial": "Get String With Default",
          "signature": "self-\u003eString-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetStringWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Word32",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt",
          "normalized": "a-\u003eString-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt",
          "signature": "self-\u003eString-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt16",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Word16",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt16",
          "normalized": "a-\u003eString-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt",
          "signature": "self-\u003eString-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt16WithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word16 -\u003e IO Word16",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt16WithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt16WithDefault",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt With Default",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt16WithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt64",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Word64",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt64",
          "normalized": "a-\u003eString-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt",
          "signature": "self-\u003eString-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt64WithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word64 -\u003e IO Word64",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt64WithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUInt64WithDefault",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt With Default",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt64WithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUIntWithDefault",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word32 -\u003e IO Word32",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelGetUIntWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelGetUIntWithDefault",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt With Default",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUIntWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks to see if property exists on channel.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelHasProperty",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelHasProperty",
          "type": "function"
        },
        "index": {
          "description": "Checks to see if property exists on channel",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelHasProperty",
          "normalized": "a-\u003eString-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Has Property",
          "signature": "self-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelHasProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries whether or not property on channel is locked by system\n policy. If the property is locked, calls to \u003ccode\u003esetProperty\u003c/code\u003e (or any of\n the \"set\" family of functions) or \u003ccode\u003eresetProperty\u003c/code\u003e will fail.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelIsPropertyLocked",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelIsPropertyLocked",
          "type": "function"
        },
        "index": {
          "description": "Queries whether or not property on channel is locked by system policy If the property is locked calls to setProperty or any of the set family of functions or resetProperty will fail",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelIsPropertyLocked",
          "normalized": "a-\u003eString-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Is Property Locked",
          "signature": "self-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelIsPropertyLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelName",
          "package": "xfconf",
          "signature": "ReadAttr self String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelName",
          "package": "xfconf",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new channel using \u003ccode\u003ename\u003c/code\u003e as the channel's identifier.\n This function always returns a valid object; no checking is done to\n see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eNote: use of this function is not recommended, in favor of\n \u003ccode\u003e\u003ca\u003echannelGet\u003c/a\u003e\u003c/code\u003e, which returns a singleton object and saves a little\n memory. However, \u003ccode\u003e\u003ca\u003echannelNew\u003c/a\u003e\u003c/code\u003e can be useful in some cases where you\n want to tie an \u003ccode\u003e\u003ca\u003eXfconfChannel\u003c/a\u003e\u003c/code\u003e 's lifetime (and thus the lifetime of\n connected signals and bound GObject properties) to the lifetime of\n another object.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelNew",
          "package": "xfconf",
          "signature": "String-\u003e IO XfconfChannel",
          "type": "function"
        },
        "index": {
          "description": "Creates new channel using name as the channel identifier This function always returns valid object no checking is done to see if the channel exists or has valid name Note use of this function is not recommended in favor of channelGet which returns singleton object and saves little memory However channelNew can be useful in some cases where you want to tie an XfconfChannel lifetime and thus the lifetime of connected signals and bound GObject properties to the lifetime of another object May throw GError see xfconfInit for more information",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelNew",
          "normalized": "String-\u003eIO XfconfChannel",
          "package": "xfconf",
          "partial": "New",
          "signature": "String-\u003eIO XfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new channel using \u003ccode\u003ename\u003c/code\u003e as the channel's identifier,\n restricting the accessible properties to be rooted at \u003ccode\u003eproperty_base\u003c/code\u003e.\n This function always returns a valid object; no checking is done to\n see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelNewWithPropertyBase",
          "package": "xfconf",
          "signature": "String-\u003e String-\u003e IO XfconfChannel",
          "type": "function"
        },
        "index": {
          "description": "Creates new channel using name as the channel identifier restricting the accessible properties to be rooted at property base This function always returns valid object no checking is done to see if the channel exists or has valid name May throw GError see xfconfInit for more information",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelNewWithPropertyBase",
          "normalized": "String-\u003eString-\u003eIO XfconfChannel",
          "package": "xfconf",
          "partial": "New With Property Base",
          "signature": "String-\u003eString-\u003eIO XfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelNewWithPropertyBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelPropertyBase",
          "package": "xfconf",
          "signature": "ReadAttr self String",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelPropertyBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelPropertyBase",
          "package": "xfconf",
          "partial": "Property Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelPropertyBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets properties starting at (and including) the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n property_base. If recursive is \u003ccode\u003eTrue\u003c/code\u003e, will also reset all properties\n that are under property_base in the property hierarchy.\n\u003c/p\u003e\u003cp\u003eA bit of an explanation as to what this function actually does: Since\n Xfconf backends are expected to support setting defaults via what you\n might call \"optional schema,\" you can't really \"remove\"\n properties. Since the client library can't know if a channel\n provides default values (or even if the backend supports it!), at\n best it can only reset properties to their default values. To\n retrieve all properties in the channel, specify \"/\".\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelResetProperty",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Bool -\u003e IO ()",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelResetProperty",
          "type": "function"
        },
        "index": {
          "description": "Resets properties starting at and including the String property base If recursive is True will also reset all properties that are under property base in the property hierarchy bit of an explanation as to what this function actually does Since Xfconf backends are expected to support setting defaults via what you might call optional schema you can really remove properties Since the client library can know if channel provides default values or even if the backend supports it at best it can only reset properties to their default values To retrieve all properties in the channel specify",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelResetProperty",
          "normalized": "a-\u003eString-\u003eBool-\u003eIO()",
          "package": "xfconf",
          "partial": "Reset Property",
          "signature": "self-\u003eString-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelResetProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetArray",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e [a] -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetArray",
          "normalized": "a-\u003eString-\u003e[b]-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Array",
          "signature": "self-\u003eString-\u003e[a]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetBool",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Bool -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetBool",
          "normalized": "a-\u003eString-\u003eBool-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Bool",
          "signature": "self-\u003eString-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetDouble",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Double -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetDouble",
          "normalized": "a-\u003eString-\u003eDouble-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Double",
          "signature": "self-\u003eString-\u003eDouble-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetInt",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Int32 -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetInt",
          "normalized": "a-\u003eString-\u003eInt-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Int",
          "signature": "self-\u003eString-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetInt16",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Int16 -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetInt16",
          "normalized": "a-\u003eString-\u003eInt-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Int",
          "signature": "self-\u003eString-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function equivalent to\n \u003ccode\u003e\n mapM ((k,v) -\u003e channelSetProperty channel k v) properties\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetProperties",
          "package": "xfconf",
          "signature": "self -\u003e [(String, Maybe a)] -\u003e IO [Bool]",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetProperties",
          "type": "function"
        },
        "index": {
          "description": "convenience function equivalent to mapM channelSetProperty channel properties",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetProperties",
          "normalized": "a-\u003e[(String,Maybe b)]-\u003eIO[Bool]",
          "package": "xfconf",
          "partial": "Set Properties",
          "signature": "self-\u003e[(String,Maybe a)]-\u003eIO[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric function for storing \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003es. As for\n \u003ccode\u003e\u003ca\u003echannelGetProperties\u003c/a\u003e\u003c/code\u003e, only work with the limited set of simple\n types supported by \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eReset property and return True if \u003ccode\u003eMaybe XfconfValue\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or\n throw an error if the value is an instance of \u003ccode\u003eJust\n (\u003ccode\u003e\u003ca\u003eXfconfNotImplemented\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetProperty",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Maybe a -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetProperty",
          "type": "function"
        },
        "index": {
          "description": "Generic function for storing XfconfValue As for channelGetProperties only work with the limited set of simple types supported by System.XFCE.Xfconf.Values Reset property and return True if Maybe XfconfValue is Nothing or throw an error if the value is an instance of Just XfconfNotImplemented",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetProperty",
          "normalized": "a-\u003eString-\u003eMaybe b-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set Property",
          "signature": "self-\u003eString-\u003eMaybe a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetString",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e String -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetString",
          "normalized": "a-\u003eString-\u003eString-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set String",
          "signature": "self-\u003eString-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles [] empty string lists by resetting the value with\n \u003ccode\u003e\u003ca\u003echannelResetProperty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetStringList",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e [String] -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetStringList",
          "type": "function"
        },
        "index": {
          "description": "Handles empty string lists by resetting the value with channelResetProperty",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetStringList",
          "normalized": "a-\u003eString-\u003e[String]-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set String List",
          "signature": "self-\u003eString-\u003e[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetStringList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word32 -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set UInt",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt16",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word16 -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt16",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set UInt",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt64",
          "package": "xfconf",
          "signature": "self -\u003e String -\u003e Word64 -\u003e IO Bool",
          "source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "channelSetUInt64",
          "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
          "package": "xfconf",
          "partial": "Set UInt",
          "signature": "self-\u003eString-\u003eWord-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an Attr of an object.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "get",
          "package": "xfconf",
          "signature": "o -\u003e ReadWriteAttr o a b -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Get an Attr of an object",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "get",
          "normalized": "a-\u003eReadWriteAttr a b c-\u003eIO b",
          "package": "xfconf",
          "signature": "o-\u003eReadWriteAttr o a b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Channel",
          "name": "onPropertyChanged",
          "package": "xfconf",
          "signature": "self -\u003e (String -\u003e Maybe XfconfValue -\u003e IO ()) -\u003e IO (ConnectId self)",
          "source": "src/System-XFCE-Xfconf-Channel.html#onPropertyChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "onPropertyChanged",
          "normalized": "a-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "xfconf",
          "partial": "Property Changed",
          "signature": "self-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId self)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:onPropertyChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmitted whenever a property on channel has changed. If the change\n was caused by the removal of property, value will be unset; you will\n receive \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e instead of (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "propertyChanged",
          "package": "xfconf",
          "signature": "Signal self (String -\u003e Maybe XfconfValue -\u003e IO ())",
          "source": "src/System-XFCE-Xfconf-Channel.html#propertyChanged",
          "type": "function"
        },
        "index": {
          "description": "Emitted whenever property on channel has changed If the change was caused by the removal of property value will be unset you will receive Nothing instead of Just XfconfValue",
          "hierarchy": "System XFCE Xfconf Channel",
          "module": "System.XFCE.Xfconf.Channel",
          "name": "propertyChanged",
          "normalized": "Signal a(String-\u003eMaybe XfconfValue-\u003eIO())",
          "package": "xfconf",
          "partial": "Changed",
          "signature": "Signal self(String-\u003eMaybe XfconfValue-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:propertyChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore functionalities for libxfconf.\n\u003c/p\u003e\u003cp\u003eThere is actually only one core function : \u003ccode\u003e\u003ca\u003exfconfListChannels\u003c/a\u003e\u003c/code\u003e.\n   Access to the C functions xfconf_init() and xfconf_shutdown() are\n   available in the \u003ca\u003eSystem.XFCE.Xfconf.Unsafe\u003c/a\u003e module and should, in\n   most cases, not be used in Haskell.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Core",
          "name": "Core",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Core functionalities for libxfconf There is actually only one core function xfconfListChannels Access to the functions xfconf init and xfconf shutdown are available in the System.XFCE.Xfconf.Unsafe module and should in most cases not be used in Haskell For more information see http docs.xfce.org api xfconf xfconf-xfconf.html",
          "hierarchy": "System XFCE Xfconf Core",
          "module": "System.XFCE.Xfconf.Core",
          "name": "Core",
          "package": "xfconf",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the names of available channels.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Core",
          "name": "xfconfListChannels",
          "package": "xfconf",
          "signature": "IO [String]",
          "source": "src/System-XFCE-Xfconf-Core.html#xfconfListChannels",
          "type": "function"
        },
        "index": {
          "description": "List the names of available channels",
          "hierarchy": "System XFCE Xfconf Core",
          "module": "System.XFCE.Xfconf.Core",
          "name": "xfconfListChannels",
          "normalized": "IO[String]",
          "package": "xfconf",
          "partial": "List Channels",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Core.html#v:xfconfListChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXfconf library and daemon error descriptions\n\u003c/p\u003e\u003cp\u003eBoth the Xfconf daemon and library provide error information via the\n use of GErrors.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n http://docs.xfce.org/api/xfconf/xfconf-xfconf-errors.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Error",
          "name": "Error",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Xfconf library and daemon error descriptions Both the Xfconf daemon and library provide error information via the use of GErrors For more information see http docs.xfce.org api xfconf xfconf-xfconf-errors.html",
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "Error",
          "package": "xfconf",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration listing the different kinds of errors under the\n   \u003ccode\u003e\u003ca\u003exfconfErrorDomain\u003c/a\u003e\u003c/code\u003e domain.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorUnknown\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         An unknown error occurred\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorChannelNotFound\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The specified channel does not exist\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorPropertyNotFound\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The specified property does not exist on the channel\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorReadFailure\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         There was a failure reading from the configuration store\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorWriteFailure\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         There was a failure writing to the configuration store\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorPermissionDenied\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The user is not allowed to read or write to the channel or\n         property\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInternalError\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         An internal error (likely a bug in xfconf) occurred\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorNoBackend\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         No backends were found, or those found could not be loaded\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInvalidProperty\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The property name specified was invalid\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInvalidChannel\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The channel name specified was invalid\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfError",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "data"
        },
        "index": {
          "description": "An enumeration listing the different kinds of errors under the xfconfErrorDomain domain xfconfErrorUnknown An unknown error occurred xfconfErrorChannelNotFound The specified channel does not exist xfconfErrorPropertyNotFound The specified property does not exist on the channel xfconfErrorReadFailure There was failure reading from the configuration store xfconfErrorWriteFailure There was failure writing to the configuration store xfconfErrorPermissionDenied The user is not allowed to read or write to the channel or property xfconfErrorInternalError An internal error likely bug in xfconf occurred xfconfErrorNoBackend No backends were found or those found could not be loaded xfconfErrorInvalidProperty The property name specified was invalid xfconfErrorInvalidChannel The channel name specified was invalid",
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfError",
          "package": "xfconf",
          "partial": "Xfconf Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#t:XfconfError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorChannelNotFound",
          "package": "xfconf",
          "signature": "XfconfErrorChannelNotFound",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorChannelNotFound",
          "package": "xfconf",
          "partial": "Xfconf Error Channel Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorChannelNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInternalError",
          "package": "xfconf",
          "signature": "XfconfErrorInternalError",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInternalError",
          "package": "xfconf",
          "partial": "Xfconf Error Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInvalidChannel",
          "package": "xfconf",
          "signature": "XfconfErrorInvalidChannel",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInvalidChannel",
          "package": "xfconf",
          "partial": "Xfconf Error Invalid Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInvalidChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInvalidProperty",
          "package": "xfconf",
          "signature": "XfconfErrorInvalidProperty",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorInvalidProperty",
          "package": "xfconf",
          "partial": "Xfconf Error Invalid Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInvalidProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorNoBackend",
          "package": "xfconf",
          "signature": "XfconfErrorNoBackend",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorNoBackend",
          "package": "xfconf",
          "partial": "Xfconf Error No Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorNoBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorPermissionDenied",
          "package": "xfconf",
          "signature": "XfconfErrorPermissionDenied",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorPermissionDenied",
          "package": "xfconf",
          "partial": "Xfconf Error Permission Denied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorPermissionDenied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorPropertyNotFound",
          "package": "xfconf",
          "signature": "XfconfErrorPropertyNotFound",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorPropertyNotFound",
          "package": "xfconf",
          "partial": "Xfconf Error Property Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorPropertyNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorReadFailure",
          "package": "xfconf",
          "signature": "XfconfErrorReadFailure",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorReadFailure",
          "package": "xfconf",
          "partial": "Xfconf Error Read Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorReadFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorUnknown",
          "package": "xfconf",
          "signature": "XfconfErrorUnknown",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorUnknown",
          "package": "xfconf",
          "partial": "Xfconf Error Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorWriteFailure",
          "package": "xfconf",
          "signature": "XfconfErrorWriteFailure",
          "source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "XfconfErrorWriteFailure",
          "package": "xfconf",
          "partial": "Xfconf Error Write Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorWriteFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGErrorDomain\u003c/a\u003e\u003c/code\u003e for Xfconf.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Error",
          "name": "xfconfErrorDomain",
          "package": "xfconf",
          "signature": "GErrorDomain",
          "source": "src/System-XFCE-Xfconf-Error.html#xfconfErrorDomain",
          "type": "function"
        },
        "index": {
          "description": "The GErrorDomain for Xfconf",
          "hierarchy": "System XFCE Xfconf Error",
          "module": "System.XFCE.Xfconf.Error",
          "name": "xfconfErrorDomain",
          "package": "xfconf",
          "partial": "Error Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:xfconfErrorDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA limited binding to glib GHashTable structures. We only handle\n   hash tables as returned by \u003ccode\u003exfconf_channel_get_properties\u003c/code\u003e. They have\n   \u003ccode\u003egchar *\u003c/code\u003e keys and \u003ccode\u003eGValue *\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eObjectives:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e get back the list of keys when keys are strings\n\u003c/li\u003e\u003cli\u003e extract values\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "GHashTable",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-GHashTable.html",
          "type": "module"
        },
        "index": {
          "description": "limited binding to glib GHashTable structures We only handle hash tables as returned by xfconf channel get properties They have gchar keys and GValue values Objectives get back the list of keys when keys are strings extract values",
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "GHashTable",
          "package": "xfconf",
          "partial": "GHash Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell representation of a C \u003ccode\u003eGHashTable*\u003c/code\u003e with \u003ccode\u003egchar *\u003c/code\u003e keys and\n \u003ccode\u003eGValue*\u003c/code\u003e values. Memory management is automatically managed by a\n special Haskell finalizer calling \u003ccode\u003eg_hash_table_destroy\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "GHashTable",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-GHashTable.html#GHashTable",
          "type": "data"
        },
        "index": {
          "description": "Haskell representation of GHashTable with gchar keys and GValue values Memory management is automatically managed by special Haskell finalizer calling hash table destroy",
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "GHashTable",
          "package": "xfconf",
          "partial": "GHash Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#t:GHashTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves every key inside a \u003ccode\u003e\u003ca\u003eGHashTable\u003c/a\u003e\u003c/code\u003e. The returned data is\n valid until the table is modified.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "gHashTableKeys",
          "package": "xfconf",
          "signature": "GHashTable -\u003e IO [String]",
          "source": "src/System-XFCE-Xfconf-GHashTable.html#gHashTableKeys",
          "type": "function"
        },
        "index": {
          "description": "Retrieves every key inside GHashTable The returned data is valid until the table is modified",
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "gHashTableKeys",
          "normalized": "GHashTable-\u003eIO[String]",
          "package": "xfconf",
          "partial": "Hash Table Keys",
          "signature": "GHashTable-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:gHashTableKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a key in a GHashTable. Note that this function cannot\n distinguish between a key that is not present and one which is\n present and has the value \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "gHashTableLookup",
          "package": "xfconf",
          "signature": "GHashTable -\u003e String -\u003e IO (Maybe GValue)",
          "source": "src/System-XFCE-Xfconf-GHashTable.html#gHashTableLookup",
          "type": "function"
        },
        "index": {
          "description": "Looks up key in GHashTable Note that this function cannot distinguish between key that is not present and one which is present and has the value Nothing",
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "gHashTableLookup",
          "normalized": "GHashTable-\u003eString-\u003eIO(Maybe GValue)",
          "package": "xfconf",
          "partial": "Hash Table Lookup",
          "signature": "GHashTable-\u003eString-\u003eIO(Maybe GValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:gHashTableLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal out a raw C \u003ccode\u003eGHashTable*\u003c/code\u003e by wrapping it in the Haskell\n   type \u003ccode\u003e\u003ca\u003eGHashTable\u003c/a\u003e\u003c/code\u003e and adding it a finalizer (which calls\n   \u003ccode\u003eg_hash_table_destroy\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eShould be called for every function returning a \u003ccode\u003eGHashTable*\u003c/code\u003e, see\n   for example in \u003cem\u003eSystem.XFCE.Xfconf.Channel.chs\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e\n        {#fun unsafe get_properties as ^\n                { channelPtr `Channel' -- ^ channel pointer\n                , withUTFString* `String'  -- ^ property base\n                } -\u003e `GHashTable' mkGHashTable* #}\n\u003c/pre\u003e",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "mkGHashTable",
          "package": "xfconf",
          "signature": "Ptr GHashTable -\u003e IO GHashTable",
          "source": "src/System-XFCE-Xfconf-GHashTable.html#mkGHashTable",
          "type": "function"
        },
        "index": {
          "description": "Marshal out raw GHashTable by wrapping it in the Haskell type GHashTable and adding it finalizer which calls hash table destroy Should be called for every function returning GHashTable see for example in System.XFCE.Xfconf.Channel.chs fun unsafe get properties as channelPtr Channel channel pointer withUTFString String property base GHashTable mkGHashTable",
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "mkGHashTable",
          "normalized": "Ptr GHashTable-\u003eIO GHashTable",
          "package": "xfconf",
          "partial": "GHash Table",
          "signature": "Ptr GHashTable-\u003eIO GHashTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:mkGHashTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "withGHashTable",
          "package": "xfconf",
          "signature": "GHashTable -\u003e (Ptr GHashTable -\u003e IO b) -\u003e IO b",
          "source": "src/System-XFCE-Xfconf-GHashTable.html#withGHashTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf GHashTable",
          "module": "System.XFCE.Xfconf.GHashTable",
          "name": "withGHashTable",
          "normalized": "GHashTable-\u003e(Ptr GHashTable-\u003eIO a)-\u003eIO a",
          "package": "xfconf",
          "partial": "GHash Table",
          "signature": "GHashTable-\u003e(Ptr GHashTable-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:withGHashTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file reflects the Gtk+ object hierarchy in terms of Haskell classes.\n\u003c/p\u003e\u003cp\u003eNote: the mk... functions were originally meant to simply be an alias\n for the constructor. However, in order to communicate the destructor\n of an object to objectNew, the mk... functions are now a tuple containing\n Haskell constructor and the destructor function pointer. This hack avoids\n changing all modules that simply pass mk... to objectNew.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Types",
          "name": "Types",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This file reflects the Gtk object hierarchy in terms of Haskell classes Note the mk functions were originally meant to simply be an alias for the constructor However in order to communicate the destructor of an object to objectNew the mk functions are now tuple containing Haskell constructor and the destructor function pointer This hack avoids changing all modules that simply pass mk to objectNew",
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "Types",
          "package": "xfconf",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannel",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannel",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#t:XfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannelClass",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Types.html#XfconfChannelClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannelClass",
          "package": "xfconf",
          "partial": "Xfconf Channel Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#t:XfconfChannelClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannel",
          "package": "xfconf",
          "signature": "XfconfChannel (ForeignPtr XfconfChannel)",
          "source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "XfconfChannel",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:XfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "castToXfconfChannel",
          "package": "xfconf",
          "signature": "obj -\u003e XfconfChannel",
          "source": "src/System-XFCE-Xfconf-Types.html#castToXfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "castToXfconfChannel",
          "normalized": "a-\u003eXfconfChannel",
          "package": "xfconf",
          "partial": "To Xfconf Channel",
          "signature": "obj-\u003eXfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:castToXfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "gTypeXfconfChannel",
          "package": "xfconf",
          "signature": "GType",
          "source": "src/System-XFCE-Xfconf-Types.html#gTypeXfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "gTypeXfconfChannel",
          "package": "xfconf",
          "partial": "Type Xfconf Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:gTypeXfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "mkXfconfChannel",
          "package": "xfconf",
          "signature": "(ForeignPtr XfconfChannel -\u003e XfconfChannel, FinalizerPtr a)",
          "source": "src/System-XFCE-Xfconf-Types.html#mkXfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "mkXfconfChannel",
          "normalized": "(ForeignPtr XfconfChannel-\u003eXfconfChannel,FinalizerPtr a)",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "signature": "(ForeignPtr XfconfChannel-\u003eXfconfChannel,FinalizerPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:mkXfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "toXfconfChannel",
          "package": "xfconf",
          "signature": "o -\u003e XfconfChannel",
          "source": "src/System-XFCE-Xfconf-Types.html#toXfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "toXfconfChannel",
          "normalized": "a-\u003eXfconfChannel",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "signature": "o-\u003eXfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:toXfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Types",
          "name": "unXfconfChannel",
          "package": "xfconf",
          "signature": "XfconfChannel -\u003e ForeignPtr XfconfChannel",
          "source": "src/System-XFCE-Xfconf-Types.html#unXfconfChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Types",
          "module": "System.XFCE.Xfconf.Types",
          "name": "unXfconfChannel",
          "normalized": "XfconfChannel-\u003eForeignPtr XfconfChannel",
          "package": "xfconf",
          "partial": "Xfconf Channel",
          "signature": "XfconfChannel-\u003eForeignPtr XfconfChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:unXfconfChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLegacy core functions from the C implementation.\n\u003c/p\u003e\u003cp\u003eBefore libxfconf can be use, it must be initialized by calling\n   \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e. To free resources used by the library, call\n   \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e. These calls are \u003ca\u003erecursive\u003c/a\u003e: multiple calls to\n   \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e are allowed, but each call must be matched by a\n   separate call to \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e to really free the library's\n   resources.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "Unsafe",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Legacy core functions from the implementation Before libxfconf can be use it must be initialized by calling xfconfInit To free resources used by the library call xfconfShutdown These calls are recursive multiple calls to xfconfInit are allowed but each call must be matched by separate call to xfconfShutdown to really free the library resources For more information see http docs.xfce.org api xfconf xfconf-xfconf.html",
          "hierarchy": "System XFCE Xfconf Unsafe",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "Unsafe",
          "package": "xfconf",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes the Xfconf library. Can be called multiple times with\n no adverse effects.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e. You can try to catch it with:\n\u003c/p\u003e\u003cpre\u003e\n catchGError xfconfInit\n ((GError d c m) -\u003e do print d;print c;print m)\n\u003c/pre\u003e\u003cp\u003eN.B.: most Haskell functions automatically calls xfconfInit when\n needed. You should NOT directly use this function.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "xfconfInit",
          "package": "xfconf",
          "signature": "IO ()",
          "source": "src/System-XFCE-Xfconf-Unsafe.html#xfconfInit",
          "type": "function"
        },
        "index": {
          "description": "Initializes the Xfconf library Can be called multiple times with no adverse effects May throw GError You can try to catch it with catchGError xfconfInit GError do print print print N.B most Haskell functions automatically calls xfconfInit when needed You should NOT directly use this function",
          "hierarchy": "System XFCE Xfconf Unsafe",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "xfconfInit",
          "normalized": "IO()",
          "package": "xfconf",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#v:xfconfInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuts down and frees any resources consumed by the Xfconf library.\n If \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e is called multiple times, \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e must be\n called an equal number of times to shut down the library.\n\u003c/p\u003e\u003cp\u003eN.B.: most Haskell functions automatically calls xfconfShutdown when\n needed. You should NOT directly use this function.\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "xfconfShutdown",
          "package": "xfconf",
          "signature": "IO ()",
          "source": "src/System-XFCE-Xfconf-Unsafe.html#xfconfShutdown",
          "type": "function"
        },
        "index": {
          "description": "Shuts down and frees any resources consumed by the Xfconf library If xfconfInit is called multiple times xfconfShutdown must be called an equal number of times to shut down the library N.B most Haskell functions automatically calls xfconfShutdown when needed You should NOT directly use this function",
          "hierarchy": "System XFCE Xfconf Unsafe",
          "module": "System.XFCE.Xfconf.Unsafe",
          "name": "xfconfShutdown",
          "normalized": "IO()",
          "package": "xfconf",
          "partial": "Shutdown",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#v:xfconfShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "Values",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Values.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "Values",
          "package": "xfconf",
          "partial": "Values",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfValue",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfValue",
          "package": "xfconf",
          "partial": "Xfconf Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#t:XfconfValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfValueClass",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValueClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfValueClass",
          "package": "xfconf",
          "partial": "Xfconf Value Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#t:XfconfValueClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfArray",
          "package": "xfconf",
          "signature": "XfconfArray [XfconfValue]",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfArray",
          "normalized": "XfconfArray[XfconfValue]",
          "package": "xfconf",
          "partial": "Xfconf Array",
          "signature": "XfconfArray[XfconfValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfBool",
          "package": "xfconf",
          "signature": "XfconfBool Bool",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfBool",
          "package": "xfconf",
          "partial": "Xfconf Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfDouble",
          "package": "xfconf",
          "signature": "XfconfDouble Double",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfDouble",
          "package": "xfconf",
          "partial": "Xfconf Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfInt",
          "package": "xfconf",
          "signature": "XfconfInt Int32",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfInt",
          "package": "xfconf",
          "partial": "Xfconf Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfInt16",
          "package": "xfconf",
          "signature": "XfconfInt16 Int16",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfInt16",
          "package": "xfconf",
          "partial": "Xfconf Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfNotImplemented",
          "package": "xfconf",
          "signature": "XfconfNotImplemented GType",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfNotImplemented",
          "package": "xfconf",
          "partial": "Xfconf Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfString",
          "package": "xfconf",
          "signature": "XfconfString String",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfString",
          "package": "xfconf",
          "partial": "Xfconf String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfStringList",
          "package": "xfconf",
          "signature": "XfconfStringList [String]",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfStringList",
          "normalized": "XfconfStringList[String]",
          "package": "xfconf",
          "partial": "Xfconf String List",
          "signature": "XfconfStringList[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfStringList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt",
          "package": "xfconf",
          "signature": "XfconfUInt Word32",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt",
          "package": "xfconf",
          "partial": "Xfconf UInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt16",
          "package": "xfconf",
          "signature": "XfconfUInt16 Word16",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt16",
          "package": "xfconf",
          "partial": "Xfconf UInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt64",
          "package": "xfconf",
          "signature": "XfconfUInt64 Word64",
          "source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "XfconfUInt64",
          "package": "xfconf",
          "partial": "Xfconf UInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe big bro' of \u003ccode\u003e\u003ca\u003eallocaGValue\u003c/a\u003e\u003c/code\u003e.\n This function works in three steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Allocate memory for an array of \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e containing\n complex elements such as \u003ccode\u003e\u003ca\u003eXfconfStringList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXfconfArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eXfconfNotImplemented\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e perform the operation \u003ccode\u003e(GValue -\u003e IO b)\u003c/code\u003e where the \u003ccode\u003e\u003ca\u003eGValue\u003c/a\u003e\u003c/code\u003e is a\n boxed value wrapping our array of 'GValue*'.\n\u003c/li\u003e\u003cli\u003e free the memory.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "System.XFCE.Xfconf.Values",
          "name": "allocaGValueArray",
          "package": "xfconf",
          "signature": "[XfconfValue] -\u003e (GValue -\u003e IO b) -\u003e IO b",
          "source": "src/System-XFCE-Xfconf-Values.html#allocaGValueArray",
          "type": "function"
        },
        "index": {
          "description": "The big bro of allocaGValue This function works in three steps Allocate memory for an array of XfconfValue not containing complex elements such as XfconfStringList XfconfArray or XfconfNotImplemented perform the operation GValue IO where the GValue is boxed value wrapping our array of GValue free the memory",
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "allocaGValueArray",
          "normalized": "[XfconfValue]-\u003e(GValue-\u003eIO a)-\u003eIO a",
          "package": "xfconf",
          "partial": "GValue Array",
          "signature": "[XfconfValue]-\u003e(GValue-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:allocaGValueArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom xfconf-common-private.h:\n \u003ccode\u003e\n #define XFCONF_TYPE_G_VALUE_ARRAY (dbus_g_type_get_collection(\"GPtrArray\", G_TYPE_VALUE))\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.XFCE.Xfconf.Values",
          "name": "array",
          "package": "xfconf",
          "signature": "GType",
          "source": "src/System-XFCE-Xfconf-Values.html#array",
          "type": "function"
        },
        "index": {
          "description": "From xfconf-common-private.h define XFCONF TYPE VALUE ARRAY dbus type get collection GPtrArray TYPE VALUE",
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "array",
          "package": "xfconf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "int16",
          "package": "xfconf",
          "signature": "GType",
          "source": "src/System-XFCE-Xfconf-Values.html#int16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "int16",
          "package": "xfconf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "toXfconfValue",
          "package": "xfconf",
          "signature": "a -\u003e IO XfconfValue",
          "source": "src/System-XFCE-Xfconf-Values.html#toXfconfValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "toXfconfValue",
          "normalized": "a-\u003eIO XfconfValue",
          "package": "xfconf",
          "partial": "Xfconf Value",
          "signature": "a-\u003eIO XfconfValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:toXfconfValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "uint16",
          "package": "xfconf",
          "signature": "GType",
          "source": "src/System-XFCE-Xfconf-Values.html#uint16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "uint16",
          "package": "xfconf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:uint16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueGetInt16",
          "package": "xfconf",
          "signature": "GValue -\u003e IO Int16",
          "source": "src/System-XFCE-Xfconf-Values.html#valueGetInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueGetInt16",
          "normalized": "GValue-\u003eIO Int",
          "package": "xfconf",
          "partial": "Get Int",
          "signature": "GValue-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueGetInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueGetUInt16",
          "package": "xfconf",
          "signature": "GValue -\u003e IO Word16",
          "source": "src/System-XFCE-Xfconf-Values.html#valueGetUInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueGetUInt16",
          "normalized": "GValue-\u003eIO Word",
          "package": "xfconf",
          "partial": "Get UInt",
          "signature": "GValue-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueGetUInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueSetInt16",
          "package": "xfconf",
          "signature": "GValue -\u003e Int16 -\u003e IO ()",
          "source": "src/System-XFCE-Xfconf-Values.html#valueSetInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueSetInt16",
          "normalized": "GValue-\u003eInt-\u003eIO()",
          "package": "xfconf",
          "partial": "Set Int",
          "signature": "GValue-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueSetInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueSetUInt16",
          "package": "xfconf",
          "signature": "GValue -\u003e Word16 -\u003e IO ()",
          "source": "src/System-XFCE-Xfconf-Values.html#valueSetUInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf Values",
          "module": "System.XFCE.Xfconf.Values",
          "name": "valueSetUInt16",
          "normalized": "GValue-\u003eWord-\u003eIO()",
          "package": "xfconf",
          "partial": "Set UInt",
          "signature": "GValue-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueSetUInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XFCE.Xfconf",
          "name": "Xfconf",
          "package": "xfconf",
          "source": "src/System-XFCE-Xfconf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System XFCE Xfconf",
          "module": "System.XFCE.Xfconf",
          "name": "Xfconf",
          "package": "xfconf",
          "partial": "Xfconf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf.html#"
      }
    }
  ]
]