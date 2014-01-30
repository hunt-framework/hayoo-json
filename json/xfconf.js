[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXfconf-GObject Binding -- Functions to bind Xfconf properties to\n   GObject properties.\n\u003c/p\u003e\u003cp\u003eNote that this haskell API follows closely the original C API. Object\n   properties should be given using their string name from the C API\n   and not their Haskell name deriving from\n   \u003ccode\u003e\u003ca\u003eReadWriteAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf-binding.html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Binding.html",
        "fct-type": "module",
        "title": "Binding"
      },
      "index": {
        "description": "Xfconf-GObject Binding Functions to bind Xfconf properties to GObject properties Note that this haskell API follows closely the original API Object properties should be given using their string name from the API and not their Haskell name deriving from ReadWriteAttr For more information see http docs.xfce.org api xfconf xfconf-xfconf-binding.html",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "Binding",
        "normalized": "",
        "package": "xfconf",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#t:XfconfBindingID",
      "description": {
        "fct-descr": "\u003cp\u003eID number that can be used to later remove corresponding bindings.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "data",
        "fct-source": "src/System-XFCE-Xfconf-Binding.html#XfconfBindingID",
        "fct-type": "data",
        "title": "XfconfBindingID"
      },
      "index": {
        "description": "ID number that can be used to later remove corresponding bindings",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "XfconfBindingID",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Binding ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfBind",
      "description": {
        "fct-descr": "\u003cp\u003eBinds an Xfconf property to a GObject property. If the property is\n changed via either the GObject or Xfconf, the corresponding property\n will also be updated.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003exfconf property type\u003c/code\u003e is required since \u003ccode\u003exfconf property\u003c/code\u003e\n may or may not already exist in the Xfconf store. The type of \u003ccode\u003eobject\n property\u003c/code\u003e will be determined automatically. If the two types do not\n match, a conversion will be attempted.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "conf-\u003e String-\u003e GType-\u003e obj-\u003e String-\u003e IO XfconfBindingID",
        "fct-type": "function",
        "title": "xfconfBind"
      },
      "index": {
        "description": "Binds an Xfconf property to GObject property If the property is changed via either the GObject or Xfconf the corresponding property will also be updated Note that xfconf property type is required since xfconf property may or may not already exist in the Xfconf store The type of object property will be determined automatically If the two types do not match conversion will be attempted",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "xfconfBind",
        "normalized": "a-\u003eString-\u003eGType-\u003eb-\u003eString-\u003eIO XfconfBindingID",
        "package": "xfconf",
        "partial": "Bind",
        "signature": "conf-\u003eString-\u003eGType-\u003eobj-\u003eString-\u003eIO XfconfBindingID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfBindGdkColor",
      "description": {
        "fct-descr": "\u003cp\u003eBinds an Xfconf property to a GObject property of type\n GDK_TYPE_COLOR (aka a GdkColor struct or simply \u003ccode\u003eColor\u003c/code\u003e in Haskell\n Pango library). If the property is changed via either the GObject or\n Xfconf, the corresponding property will also be updated.\n\u003c/p\u003e\u003cp\u003eThis is a special-case binding; the GdkColor struct is not ideal\n as-is for binding to a property, so it is stored in the Xfconf store\n as four 16-bit unsigned ints (red, green, blue, alpha). Since\n GdkColor (currently) only supports RGB and not RGBA, the last value\n will always be set to 0xFFFF.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "conf-\u003e String-\u003e obj-\u003e String-\u003e IO XfconfBindingID",
        "fct-type": "function",
        "title": "xfconfBindGdkColor"
      },
      "index": {
        "description": "Binds an Xfconf property to GObject property of type GDK TYPE COLOR aka GdkColor struct or simply Color in Haskell Pango library If the property is changed via either the GObject or Xfconf the corresponding property will also be updated This is special-case binding the GdkColor struct is not ideal as-is for binding to property so it is stored in the Xfconf store as four bit unsigned ints red green blue alpha Since GdkColor currently only supports RGB and not RGBA the last value will always be set to xFFFF",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "xfconfBindGdkColor",
        "normalized": "a-\u003eString-\u003eb-\u003eString-\u003eIO XfconfBindingID",
        "package": "xfconf",
        "partial": "Bind Gdk Color",
        "signature": "conf-\u003eString-\u003eobj-\u003eString-\u003eIO XfconfBindingID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbind",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves an Xfconf/GObject property binding based on the binding\n \u003ccode\u003e\u003ca\u003eXfconfBindingID\u003c/a\u003e\u003c/code\u003e number. See \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "XfconfBindingID -\u003e IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Binding.html#xfconfUnbind",
        "fct-type": "function",
        "title": "xfconfUnbind"
      },
      "index": {
        "description": "Removes an Xfconf GObject property binding based on the binding XfconfBindingID number See xfconfBind",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "xfconfUnbind",
        "normalized": "XfconfBindingID-\u003eIO()",
        "package": "xfconf",
        "partial": "Unbind",
        "signature": "XfconfBindingID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbindAll",
      "description": {
        "fct-descr": "\u003cp\u003eUnbinds all Xfconf channel bindings (see \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e)\n to object. If object is an \u003ccode\u003e\u003ca\u003eXfconfChannel\u003c/a\u003e\u003c/code\u003e, it will unbind all xfconf\n properties on that channel. If object is a regular \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003e with\n properties bound to a channel, all those bindings will be removed.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "obj -\u003e IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Binding.html#xfconfUnbindAll",
        "fct-type": "function",
        "title": "xfconfUnbindAll"
      },
      "index": {
        "description": "Unbinds all Xfconf channel bindings see xfconfBind to object If object is an XfconfChannel it will unbind all xfconf properties on that channel If object is regular GObject with properties bound to channel all those bindings will be removed",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "xfconfUnbindAll",
        "normalized": "a-\u003eIO()",
        "package": "xfconf",
        "partial": "Unbind All",
        "signature": "obj-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Binding.html#v:xfconfUnbindByProperty",
      "description": {
        "fct-descr": "\u003cp\u003eCauses an Xfconf channel previously bound to a GObject property\n (see \u003ccode\u003e\u003ca\u003exfconfBind\u003c/a\u003e\u003c/code\u003e) to no longer be bound.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Binding",
        "fct-package": "xfconf",
        "fct-signature": "conf-\u003e String-\u003e obj-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "xfconfUnbindByProperty"
      },
      "index": {
        "description": "Causes an Xfconf channel previously bound to GObject property see xfconfBind to no longer be bound",
        "hierarchy": "System XFCE Xfconf Binding",
        "module": "System.XFCE.Xfconf.Binding",
        "name": "xfconfUnbindByProperty",
        "normalized": "a-\u003eString-\u003eb-\u003eString-\u003eIO()",
        "package": "xfconf",
        "partial": "Unbind By Property",
        "signature": "conf-\u003eString-\u003eobj-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn application-defined domain for storing configuration settings.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf-channel.html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html",
        "fct-type": "module",
        "title": "Channel"
      },
      "index": {
        "description": "An application-defined domain for storing configuration settings For more information see http docs.xfce.org api xfconf xfconf-xfconf-channel.html",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "Channel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#t:XfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "data",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
        "fct-type": "data",
        "title": "XfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "XfconfChannel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#t:XfconfChannelClass",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "class",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#XfconfChannelClass",
        "fct-type": "class",
        "title": "XfconfChannelClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "XfconfChannelClass",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Channel Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:afterPropertyChanged",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e (String -\u003e Maybe XfconfValue -\u003e IO ()) -\u003e IO (ConnectId self)",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#afterPropertyChanged",
        "fct-type": "function",
        "title": "afterPropertyChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "afterPropertyChanged",
        "normalized": "a-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "xfconf",
        "partial": "Property Changed",
        "signature": "self-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId self)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGet",
      "description": {
        "fct-descr": "\u003cp\u003eEither creates a new \u003ccode\u003eChannel\u003c/code\u003e, or fetches a singleton object for\n channel_name. This function always returns a valid object; no\n checking is done to see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "String-\u003e IO XfconfChannel",
        "fct-type": "function",
        "title": "channelGet"
      },
      "index": {
        "description": "Either creates new Channel or fetches singleton object for channel name This function always returns valid object no checking is done to see if the channel exists or has valid name May throw GError see xfconfInit for more information",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGet",
        "normalized": "String-\u003eIO XfconfChannel",
        "package": "xfconf",
        "partial": "Get",
        "signature": "String-\u003eIO XfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetAllKeys",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to \u003ccode\u003echannelGetKeys channel \"/\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e IO [String]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetAllKeys",
        "fct-type": "function",
        "title": "channelGetAllKeys"
      },
      "index": {
        "description": "Alias to channelGetKeys channel",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetAllKeys",
        "normalized": "a-\u003eIO[String]",
        "package": "xfconf",
        "partial": "Get All Keys",
        "signature": "self-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetAllProperties",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to \u003ccode\u003echannelGetProperties channel \"/\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e IO [(String, Maybe XfconfValue)]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetAllProperties",
        "fct-type": "function",
        "title": "channelGetAllProperties"
      },
      "index": {
        "description": "Alias to channelGetProperties channel",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetAllProperties",
        "normalized": "a-\u003eIO[(String,Maybe XfconfValue)]",
        "package": "xfconf",
        "partial": "Get All Properties",
        "signature": "self-\u003eIO[(String,Maybe XfconfValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetArray",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO [XfconfValue]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetArray",
        "fct-type": "function",
        "title": "channelGetArray"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetArray",
        "normalized": "a-\u003eString-\u003eIO[XfconfValue]",
        "package": "xfconf",
        "partial": "Get Array",
        "signature": "self-\u003eString-\u003eIO[XfconfValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetBool",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetBool",
        "fct-type": "function",
        "title": "channelGetBool"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetBool",
        "normalized": "a-\u003eString-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Get Bool",
        "signature": "self-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetBoolWithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Bool -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetBoolWithDefault",
        "fct-type": "function",
        "title": "channelGetBoolWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetBoolWithDefault",
        "normalized": "a-\u003eString-\u003eBool-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Get Bool With Default",
        "signature": "self-\u003eString-\u003eBool-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetDouble",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Double",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetDouble",
        "fct-type": "function",
        "title": "channelGetDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetDouble",
        "normalized": "a-\u003eString-\u003eIO Double",
        "package": "xfconf",
        "partial": "Get Double",
        "signature": "self-\u003eString-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetDoubleWithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Double -\u003e IO Double",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetDoubleWithDefault",
        "fct-type": "function",
        "title": "channelGetDoubleWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetDoubleWithDefault",
        "normalized": "a-\u003eString-\u003eDouble-\u003eIO Double",
        "package": "xfconf",
        "partial": "Get Double With Default",
        "signature": "self-\u003eString-\u003eDouble-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Int32",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt",
        "fct-type": "function",
        "title": "channelGetInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetInt",
        "normalized": "a-\u003eString-\u003eIO Int",
        "package": "xfconf",
        "partial": "Get Int",
        "signature": "self-\u003eString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Int16",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt16",
        "fct-type": "function",
        "title": "channelGetInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetInt16",
        "normalized": "a-\u003eString-\u003eIO Int",
        "package": "xfconf",
        "partial": "Get Int",
        "signature": "self-\u003eString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetInt16WithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Int16 -\u003e IO Int16",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetInt16WithDefault",
        "fct-type": "function",
        "title": "channelGetInt16WithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetInt16WithDefault",
        "normalized": "a-\u003eString-\u003eInt-\u003eIO Int",
        "package": "xfconf",
        "partial": "Get Int With Default",
        "signature": "self-\u003eString-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetIntWithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Int32 -\u003e IO Int32",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetIntWithDefault",
        "fct-type": "function",
        "title": "channelGetIntWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetIntWithDefault",
        "normalized": "a-\u003eString-\u003eInt-\u003eIO Int",
        "package": "xfconf",
        "partial": "Get Int With Default",
        "signature": "self-\u003eString-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetKeys",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the list of properties from \u003ccode\u003eChannel\u003c/code\u003e. The value of the\n property specified by the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e property_base and all\n sub-properties are retrieved. To retrieve all properties in the\n channel, specify \"/\".\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetKeys",
        "fct-type": "function",
        "title": "channelGetKeys"
      },
      "index": {
        "description": "Retrieves the list of properties from Channel The value of the property specified by the String property base and all sub-properties are retrieved To retrieve all properties in the channel specify",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetKeys",
        "normalized": "a-\u003eString-\u003eIO[String]",
        "package": "xfconf",
        "partial": "Get Keys",
        "signature": "self-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetName",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e IO String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetName",
        "fct-type": "function",
        "title": "channelGetName"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetName",
        "normalized": "a-\u003eIO String",
        "package": "xfconf",
        "partial": "Get Name",
        "signature": "self-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetProperties",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function returning an association list [(key,\n value)]. Work only for the data types defined in\n \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e (i.e. no (named) structures).\n See also the limitation imposed by \u003ccode\u003e\u003ca\u003egHashTableLookup\u003c/a\u003e\u003c/code\u003e. The value of\n the property specified by the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e property_base and all\n sub-properties are retrieved. To retrieve all properties in the\n channel, specify \"/\".\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO [(String, Maybe XfconfValue)]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetProperties",
        "fct-type": "function",
        "title": "channelGetProperties"
      },
      "index": {
        "description": "convenience function returning an association list key value Work only for the data types defined in System.XFCE.Xfconf.Values i.e no named structures See also the limitation imposed by gHashTableLookup The value of the property specified by the String property base and all sub-properties are retrieved To retrieve all properties in the channel specify",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetProperties",
        "normalized": "a-\u003eString-\u003eIO[(String,Maybe XfconfValue)]",
        "package": "xfconf",
        "partial": "Get Properties",
        "signature": "self-\u003eString-\u003eIO[(String,Maybe XfconfValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetProperty",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function for retrieving \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003es. As for\n \u003ccode\u003e\u003ca\u003echannelGetProperties\u003c/a\u003e\u003c/code\u003e, only work with the limited set of simple\n types supported by \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO (Maybe XfconfValue)",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetProperty",
        "fct-type": "function",
        "title": "channelGetProperty"
      },
      "index": {
        "description": "Generic function for retrieving XfconfValue As for channelGetProperties only work with the limited set of simple types supported by System.XFCE.Xfconf.Values",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetProperty",
        "normalized": "a-\u003eString-\u003eIO(Maybe XfconfValue)",
        "package": "xfconf",
        "partial": "Get Property",
        "signature": "self-\u003eString-\u003eIO(Maybe XfconfValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetPropertyBase",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e IO String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetPropertyBase",
        "fct-type": "function",
        "title": "channelGetPropertyBase"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetPropertyBase",
        "normalized": "a-\u003eIO String",
        "package": "xfconf",
        "partial": "Get Property Base",
        "signature": "self-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetString",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetString",
        "fct-type": "function",
        "title": "channelGetString"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetString",
        "normalized": "a-\u003eString-\u003eIO String",
        "package": "xfconf",
        "partial": "Get String",
        "signature": "self-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetStringList",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetStringList",
        "fct-type": "function",
        "title": "channelGetStringList"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetStringList",
        "normalized": "a-\u003eString-\u003eIO[String]",
        "package": "xfconf",
        "partial": "Get String List",
        "signature": "self-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetStringWithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e String -\u003e IO String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetStringWithDefault",
        "fct-type": "function",
        "title": "channelGetStringWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetStringWithDefault",
        "normalized": "a-\u003eString-\u003eString-\u003eIO String",
        "package": "xfconf",
        "partial": "Get String With Default",
        "signature": "self-\u003eString-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Word32",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt",
        "fct-type": "function",
        "title": "channelGetUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUInt",
        "normalized": "a-\u003eString-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt",
        "signature": "self-\u003eString-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Word16",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt16",
        "fct-type": "function",
        "title": "channelGetUInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUInt16",
        "normalized": "a-\u003eString-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt",
        "signature": "self-\u003eString-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt16WithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word16 -\u003e IO Word16",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt16WithDefault",
        "fct-type": "function",
        "title": "channelGetUInt16WithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUInt16WithDefault",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt With Default",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt64",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Word64",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt64",
        "fct-type": "function",
        "title": "channelGetUInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUInt64",
        "normalized": "a-\u003eString-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt",
        "signature": "self-\u003eString-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUInt64WithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word64 -\u003e IO Word64",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUInt64WithDefault",
        "fct-type": "function",
        "title": "channelGetUInt64WithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUInt64WithDefault",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt With Default",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelGetUIntWithDefault",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word32 -\u003e IO Word32",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelGetUIntWithDefault",
        "fct-type": "function",
        "title": "channelGetUIntWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelGetUIntWithDefault",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt With Default",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelHasProperty",
      "description": {
        "fct-descr": "\u003cp\u003eChecks to see if property exists on channel.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelHasProperty",
        "fct-type": "function",
        "title": "channelHasProperty"
      },
      "index": {
        "description": "Checks to see if property exists on channel",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelHasProperty",
        "normalized": "a-\u003eString-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Has Property",
        "signature": "self-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelIsPropertyLocked",
      "description": {
        "fct-descr": "\u003cp\u003eQueries whether or not property on channel is locked by system\n policy. If the property is locked, calls to \u003ccode\u003esetProperty\u003c/code\u003e (or any of\n the \"set\" family of functions) or \u003ccode\u003eresetProperty\u003c/code\u003e will fail.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelIsPropertyLocked",
        "fct-type": "function",
        "title": "channelIsPropertyLocked"
      },
      "index": {
        "description": "Queries whether or not property on channel is locked by system policy If the property is locked calls to setProperty or any of the set family of functions or resetProperty will fail",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelIsPropertyLocked",
        "normalized": "a-\u003eString-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Is Property Locked",
        "signature": "self-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelName",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "ReadAttr self String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelName",
        "fct-type": "function",
        "title": "channelName"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelName",
        "normalized": "",
        "package": "xfconf",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new channel using \u003ccode\u003ename\u003c/code\u003e as the channel's identifier.\n This function always returns a valid object; no checking is done to\n see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eNote: use of this function is not recommended, in favor of\n \u003ccode\u003e\u003ca\u003echannelGet\u003c/a\u003e\u003c/code\u003e, which returns a singleton object and saves a little\n memory. However, \u003ccode\u003e\u003ca\u003echannelNew\u003c/a\u003e\u003c/code\u003e can be useful in some cases where you\n want to tie an \u003ccode\u003e\u003ca\u003eXfconfChannel\u003c/a\u003e\u003c/code\u003e 's lifetime (and thus the lifetime of\n connected signals and bound GObject properties) to the lifetime of\n another object.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "String-\u003e IO XfconfChannel",
        "fct-type": "function",
        "title": "channelNew"
      },
      "index": {
        "description": "Creates new channel using name as the channel identifier This function always returns valid object no checking is done to see if the channel exists or has valid name Note use of this function is not recommended in favor of channelGet which returns singleton object and saves little memory However channelNew can be useful in some cases where you want to tie an XfconfChannel lifetime and thus the lifetime of connected signals and bound GObject properties to the lifetime of another object May throw GError see xfconfInit for more information",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelNew",
        "normalized": "String-\u003eIO XfconfChannel",
        "package": "xfconf",
        "partial": "New",
        "signature": "String-\u003eIO XfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelNewWithPropertyBase",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new channel using \u003ccode\u003ename\u003c/code\u003e as the channel's identifier,\n restricting the accessible properties to be rooted at \u003ccode\u003eproperty_base\u003c/code\u003e.\n This function always returns a valid object; no checking is done to\n see if the channel exists or has a valid name.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "String-\u003e String-\u003e IO XfconfChannel",
        "fct-type": "function",
        "title": "channelNewWithPropertyBase"
      },
      "index": {
        "description": "Creates new channel using name as the channel identifier restricting the accessible properties to be rooted at property base This function always returns valid object no checking is done to see if the channel exists or has valid name May throw GError see xfconfInit for more information",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelNewWithPropertyBase",
        "normalized": "String-\u003eString-\u003eIO XfconfChannel",
        "package": "xfconf",
        "partial": "New With Property Base",
        "signature": "String-\u003eString-\u003eIO XfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelPropertyBase",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "ReadAttr self String",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelPropertyBase",
        "fct-type": "function",
        "title": "channelPropertyBase"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelPropertyBase",
        "normalized": "",
        "package": "xfconf",
        "partial": "Property Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelResetProperty",
      "description": {
        "fct-descr": "\u003cp\u003eResets properties starting at (and including) the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n property_base. If recursive is \u003ccode\u003eTrue\u003c/code\u003e, will also reset all properties\n that are under property_base in the property hierarchy.\n\u003c/p\u003e\u003cp\u003eA bit of an explanation as to what this function actually does: Since\n Xfconf backends are expected to support setting defaults via what you\n might call \"optional schema,\" you can't really \"remove\"\n properties. Since the client library can't know if a channel\n provides default values (or even if the backend supports it!), at\n best it can only reset properties to their default values. To\n retrieve all properties in the channel, specify \"/\".\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelResetProperty",
        "fct-type": "function",
        "title": "channelResetProperty"
      },
      "index": {
        "description": "Resets properties starting at and including the String property base If recursive is True will also reset all properties that are under property base in the property hierarchy bit of an explanation as to what this function actually does Since Xfconf backends are expected to support setting defaults via what you might call optional schema you can really remove properties Since the client library can know if channel provides default values or even if the backend supports it at best it can only reset properties to their default values To retrieve all properties in the channel specify",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelResetProperty",
        "normalized": "a-\u003eString-\u003eBool-\u003eIO()",
        "package": "xfconf",
        "partial": "Reset Property",
        "signature": "self-\u003eString-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetArray",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e [a] -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetArray",
        "fct-type": "function",
        "title": "channelSetArray"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetArray",
        "normalized": "a-\u003eString-\u003e[b]-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Array",
        "signature": "self-\u003eString-\u003e[a]-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetBool",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Bool -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetBool",
        "fct-type": "function",
        "title": "channelSetBool"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetBool",
        "normalized": "a-\u003eString-\u003eBool-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Bool",
        "signature": "self-\u003eString-\u003eBool-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetDouble",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Double -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetDouble",
        "fct-type": "function",
        "title": "channelSetDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetDouble",
        "normalized": "a-\u003eString-\u003eDouble-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Double",
        "signature": "self-\u003eString-\u003eDouble-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Int32 -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetInt",
        "fct-type": "function",
        "title": "channelSetInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetInt",
        "normalized": "a-\u003eString-\u003eInt-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Int",
        "signature": "self-\u003eString-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Int16 -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetInt16",
        "fct-type": "function",
        "title": "channelSetInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetInt16",
        "normalized": "a-\u003eString-\u003eInt-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Int",
        "signature": "self-\u003eString-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetProperties",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function equivalent to\n \u003ccode\u003e\n mapM ((k,v) -\u003e channelSetProperty channel k v) properties\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e [(String, Maybe a)] -\u003e IO [Bool]",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetProperties",
        "fct-type": "function",
        "title": "channelSetProperties"
      },
      "index": {
        "description": "convenience function equivalent to mapM channelSetProperty channel properties",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetProperties",
        "normalized": "a-\u003e[(String,Maybe b)]-\u003eIO[Bool]",
        "package": "xfconf",
        "partial": "Set Properties",
        "signature": "self-\u003e[(String,Maybe a)]-\u003eIO[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetProperty",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function for storing \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003es. As for\n \u003ccode\u003e\u003ca\u003echannelGetProperties\u003c/a\u003e\u003c/code\u003e, only work with the limited set of simple\n types supported by \u003ca\u003eSystem.XFCE.Xfconf.Values\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eReset property and return True if \u003ccode\u003eMaybe XfconfValue\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or\n throw an error if the value is an instance of \u003ccode\u003eJust\n (\u003ccode\u003e\u003ca\u003eXfconfNotImplemented\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Maybe a -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetProperty",
        "fct-type": "function",
        "title": "channelSetProperty"
      },
      "index": {
        "description": "Generic function for storing XfconfValue As for channelGetProperties only work with the limited set of simple types supported by System.XFCE.Xfconf.Values Reset property and return True if Maybe XfconfValue is Nothing or throw an error if the value is an instance of Just XfconfNotImplemented",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetProperty",
        "normalized": "a-\u003eString-\u003eMaybe b-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set Property",
        "signature": "self-\u003eString-\u003eMaybe a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetString",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e String -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetString",
        "fct-type": "function",
        "title": "channelSetString"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetString",
        "normalized": "a-\u003eString-\u003eString-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set String",
        "signature": "self-\u003eString-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetStringList",
      "description": {
        "fct-descr": "\u003cp\u003eHandles [] empty string lists by resetting the value with\n \u003ccode\u003e\u003ca\u003echannelResetProperty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e [String] -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetStringList",
        "fct-type": "function",
        "title": "channelSetStringList"
      },
      "index": {
        "description": "Handles empty string lists by resetting the value with channelResetProperty",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetStringList",
        "normalized": "a-\u003eString-\u003e[String]-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set String List",
        "signature": "self-\u003eString-\u003e[String]-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word32 -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt",
        "fct-type": "function",
        "title": "channelSetUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetUInt",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set UInt",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word16 -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt16",
        "fct-type": "function",
        "title": "channelSetUInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetUInt16",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set UInt",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:channelSetUInt64",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e String -\u003e Word64 -\u003e IO Bool",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#channelSetUInt64",
        "fct-type": "function",
        "title": "channelSetUInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "channelSetUInt64",
        "normalized": "a-\u003eString-\u003eWord-\u003eIO Bool",
        "package": "xfconf",
        "partial": "Set UInt",
        "signature": "self-\u003eString-\u003eWord-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet an Attr of an object.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "o -\u003e ReadWriteAttr o a b -\u003e IO a",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get an Attr of an object",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "get",
        "normalized": "a-\u003eReadWriteAttr a b c-\u003eIO b",
        "package": "xfconf",
        "partial": "",
        "signature": "o-\u003eReadWriteAttr o a b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:onPropertyChanged",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "self -\u003e (String -\u003e Maybe XfconfValue -\u003e IO ()) -\u003e IO (ConnectId self)",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#onPropertyChanged",
        "fct-type": "function",
        "title": "onPropertyChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "onPropertyChanged",
        "normalized": "a-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "xfconf",
        "partial": "Property Changed",
        "signature": "self-\u003e(String-\u003eMaybe XfconfValue-\u003eIO())-\u003eIO(ConnectId self)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Channel.html#v:propertyChanged",
      "description": {
        "fct-descr": "\u003cp\u003eEmitted whenever a property on channel has changed. If the change\n was caused by the removal of property, value will be unset; you will\n receive \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e instead of (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Channel",
        "fct-package": "xfconf",
        "fct-signature": "Signal self (String -\u003e Maybe XfconfValue -\u003e IO ())",
        "fct-source": "src/System-XFCE-Xfconf-Channel.html#propertyChanged",
        "fct-type": "function",
        "title": "propertyChanged"
      },
      "index": {
        "description": "Emitted whenever property on channel has changed If the change was caused by the removal of property value will be unset you will receive Nothing instead of Just XfconfValue",
        "hierarchy": "System XFCE Xfconf Channel",
        "module": "System.XFCE.Xfconf.Channel",
        "name": "propertyChanged",
        "normalized": "Signal a(String-\u003eMaybe XfconfValue-\u003eIO())",
        "package": "xfconf",
        "partial": "Changed",
        "signature": "Signal self(String-\u003eMaybe XfconfValue-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore functionalities for libxfconf.\n\u003c/p\u003e\u003cp\u003eThere is actually only one core function : \u003ccode\u003e\u003ca\u003exfconfListChannels\u003c/a\u003e\u003c/code\u003e.\n   Access to the C functions xfconf_init() and xfconf_shutdown() are\n   available in the \u003ca\u003eSystem.XFCE.Xfconf.Unsafe\u003c/a\u003e module and should, in\n   most cases, not be used in Haskell.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf.html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Core",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Core functionalities for libxfconf There is actually only one core function xfconfListChannels Access to the functions xfconf init and xfconf shutdown are available in the System.XFCE.Xfconf.Unsafe module and should in most cases not be used in Haskell For more information see http docs.xfce.org api xfconf xfconf-xfconf.html",
        "hierarchy": "System XFCE Xfconf Core",
        "module": "System.XFCE.Xfconf.Core",
        "name": "Core",
        "normalized": "",
        "package": "xfconf",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Core.html#v:xfconfListChannels",
      "description": {
        "fct-descr": "\u003cp\u003eList the names of available channels.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Core",
        "fct-package": "xfconf",
        "fct-signature": "IO [String]",
        "fct-source": "src/System-XFCE-Xfconf-Core.html#xfconfListChannels",
        "fct-type": "function",
        "title": "xfconfListChannels"
      },
      "index": {
        "description": "List the names of available channels",
        "hierarchy": "System XFCE Xfconf Core",
        "module": "System.XFCE.Xfconf.Core",
        "name": "xfconfListChannels",
        "normalized": "IO[String]",
        "package": "xfconf",
        "partial": "List Channels",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXfconf library and daemon error descriptions\n\u003c/p\u003e\u003cp\u003eBoth the Xfconf daemon and library provide error information via the\n use of GErrors.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n http://docs.xfce.org/api/xfconf/xfconf-xfconf-errors.html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Xfconf library and daemon error descriptions Both the Xfconf daemon and library provide error information via the use of GErrors For more information see http docs.xfce.org api xfconf xfconf-xfconf-errors.html",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "Error",
        "normalized": "",
        "package": "xfconf",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#t:XfconfError",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration listing the different kinds of errors under the\n   \u003ccode\u003e\u003ca\u003exfconfErrorDomain\u003c/a\u003e\u003c/code\u003e domain.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorUnknown\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         An unknown error occurred\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorChannelNotFound\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The specified channel does not exist\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorPropertyNotFound\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The specified property does not exist on the channel\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorReadFailure\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         There was a failure reading from the configuration store\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorWriteFailure\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         There was a failure writing to the configuration store\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorPermissionDenied\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The user is not allowed to read or write to the channel or\n         property\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInternalError\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         An internal error (likely a bug in xfconf) occurred\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorNoBackend\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         No backends were found, or those found could not be loaded\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInvalidProperty\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The property name specified was invalid\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003exfconfErrorInvalidChannel\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n         The channel name specified was invalid\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "data",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "data",
        "title": "XfconfError"
      },
      "index": {
        "description": "An enumeration listing the different kinds of errors under the xfconfErrorDomain domain xfconfErrorUnknown An unknown error occurred xfconfErrorChannelNotFound The specified channel does not exist xfconfErrorPropertyNotFound The specified property does not exist on the channel xfconfErrorReadFailure There was failure reading from the configuration store xfconfErrorWriteFailure There was failure writing to the configuration store xfconfErrorPermissionDenied The user is not allowed to read or write to the channel or property xfconfErrorInternalError An internal error likely bug in xfconf occurred xfconfErrorNoBackend No backends were found or those found could not be loaded xfconfErrorInvalidProperty The property name specified was invalid xfconfErrorInvalidChannel The channel name specified was invalid",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfError",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorChannelNotFound",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorChannelNotFound",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorChannelNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorChannelNotFound",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Channel Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInternalError",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorInternalError",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorInternalError"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorInternalError",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Internal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInvalidChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorInvalidChannel",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorInvalidChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorInvalidChannel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Invalid Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorInvalidProperty",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorInvalidProperty",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorInvalidProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorInvalidProperty",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Invalid Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorNoBackend",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorNoBackend",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorNoBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorNoBackend",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error No Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorPermissionDenied",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorPermissionDenied",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorPermissionDenied"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorPermissionDenied",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Permission Denied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorPropertyNotFound",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorPropertyNotFound",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorPropertyNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorPropertyNotFound",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Property Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorReadFailure",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorReadFailure",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorReadFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorReadFailure",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Read Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorUnknown",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorUnknown",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorUnknown",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:XfconfErrorWriteFailure",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "XfconfErrorWriteFailure",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#XfconfError",
        "fct-type": "function",
        "title": "XfconfErrorWriteFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "XfconfErrorWriteFailure",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Error Write Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Error.html#v:xfconfErrorDomain",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGErrorDomain\u003c/a\u003e\u003c/code\u003e for Xfconf.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Error",
        "fct-package": "xfconf",
        "fct-signature": "GErrorDomain",
        "fct-source": "src/System-XFCE-Xfconf-Error.html#xfconfErrorDomain",
        "fct-type": "function",
        "title": "xfconfErrorDomain"
      },
      "index": {
        "description": "The GErrorDomain for Xfconf",
        "hierarchy": "System XFCE Xfconf Error",
        "module": "System.XFCE.Xfconf.Error",
        "name": "xfconfErrorDomain",
        "normalized": "",
        "package": "xfconf",
        "partial": "Error Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA limited binding to glib GHashTable structures. We only handle\n   hash tables as returned by \u003ccode\u003exfconf_channel_get_properties\u003c/code\u003e. They have\n   \u003ccode\u003egchar *\u003c/code\u003e keys and \u003ccode\u003eGValue *\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eObjectives:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e get back the list of keys when keys are strings\n\u003c/li\u003e\u003cli\u003e extract values\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html",
        "fct-type": "module",
        "title": "GHashTable"
      },
      "index": {
        "description": "limited binding to glib GHashTable structures We only handle hash tables as returned by xfconf channel get properties They have gchar keys and GValue values Objectives get back the list of keys when keys are strings extract values",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "GHashTable",
        "normalized": "",
        "package": "xfconf",
        "partial": "GHash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#t:GHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell representation of a C \u003ccode\u003eGHashTable*\u003c/code\u003e with \u003ccode\u003egchar *\u003c/code\u003e keys and\n \u003ccode\u003eGValue*\u003c/code\u003e values. Memory management is automatically managed by a\n special Haskell finalizer calling \u003ccode\u003eg_hash_table_destroy\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "data",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html#GHashTable",
        "fct-type": "data",
        "title": "GHashTable"
      },
      "index": {
        "description": "Haskell representation of GHashTable with gchar keys and GValue values Memory management is automatically managed by special Haskell finalizer calling hash table destroy",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "GHashTable",
        "normalized": "",
        "package": "xfconf",
        "partial": "GHash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:gHashTableKeys",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves every key inside a \u003ccode\u003e\u003ca\u003eGHashTable\u003c/a\u003e\u003c/code\u003e. The returned data is\n valid until the table is modified.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "GHashTable -\u003e IO [String]",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html#gHashTableKeys",
        "fct-type": "function",
        "title": "gHashTableKeys"
      },
      "index": {
        "description": "Retrieves every key inside GHashTable The returned data is valid until the table is modified",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "gHashTableKeys",
        "normalized": "GHashTable-\u003eIO[String]",
        "package": "xfconf",
        "partial": "Hash Table Keys",
        "signature": "GHashTable-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:gHashTableLookup",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up a key in a GHashTable. Note that this function cannot\n distinguish between a key that is not present and one which is\n present and has the value \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "GHashTable -\u003e String -\u003e IO (Maybe GValue)",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html#gHashTableLookup",
        "fct-type": "function",
        "title": "gHashTableLookup"
      },
      "index": {
        "description": "Looks up key in GHashTable Note that this function cannot distinguish between key that is not present and one which is present and has the value Nothing",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "gHashTableLookup",
        "normalized": "GHashTable-\u003eString-\u003eIO(Maybe GValue)",
        "package": "xfconf",
        "partial": "Hash Table Lookup",
        "signature": "GHashTable-\u003eString-\u003eIO(Maybe GValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:mkGHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eMarshal out a raw C \u003ccode\u003eGHashTable*\u003c/code\u003e by wrapping it in the Haskell\n   type \u003ccode\u003e\u003ca\u003eGHashTable\u003c/a\u003e\u003c/code\u003e and adding it a finalizer (which calls\n   \u003ccode\u003eg_hash_table_destroy\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eShould be called for every function returning a \u003ccode\u003eGHashTable*\u003c/code\u003e, see\n   for example in \u003cem\u003eSystem.XFCE.Xfconf.Channel.chs\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e\n        {#fun unsafe get_properties as ^\n                { channelPtr `Channel' -- ^ channel pointer\n                , withUTFString* `String'  -- ^ property base\n                } -\u003e `GHashTable' mkGHashTable* #}\n\u003c/pre\u003e",
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "Ptr GHashTable -\u003e IO GHashTable",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html#mkGHashTable",
        "fct-type": "function",
        "title": "mkGHashTable"
      },
      "index": {
        "description": "Marshal out raw GHashTable by wrapping it in the Haskell type GHashTable and adding it finalizer which calls hash table destroy Should be called for every function returning GHashTable see for example in System.XFCE.Xfconf.Channel.chs fun unsafe get properties as channelPtr Channel channel pointer withUTFString String property base GHashTable mkGHashTable",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "mkGHashTable",
        "normalized": "Ptr GHashTable-\u003eIO GHashTable",
        "package": "xfconf",
        "partial": "GHash Table",
        "signature": "Ptr GHashTable-\u003eIO GHashTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-GHashTable.html#v:withGHashTable",
      "description": {
        "fct-module": "System.XFCE.Xfconf.GHashTable",
        "fct-package": "xfconf",
        "fct-signature": "GHashTable -\u003e (Ptr GHashTable -\u003e IO b) -\u003e IO b",
        "fct-source": "src/System-XFCE-Xfconf-GHashTable.html#withGHashTable",
        "fct-type": "function",
        "title": "withGHashTable"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf GHashTable",
        "module": "System.XFCE.Xfconf.GHashTable",
        "name": "withGHashTable",
        "normalized": "GHashTable-\u003e(Ptr GHashTable-\u003eIO a)-\u003eIO a",
        "package": "xfconf",
        "partial": "GHash Table",
        "signature": "GHashTable-\u003e(Ptr GHashTable-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file reflects the Gtk+ object hierarchy in terms of Haskell classes.\n\u003c/p\u003e\u003cp\u003eNote: the mk... functions were originally meant to simply be an alias\n for the constructor. However, in order to communicate the destructor\n of an object to objectNew, the mk... functions are now a tuple containing\n Haskell constructor and the destructor function pointer. This hack avoids\n changing all modules that simply pass mk... to objectNew.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This file reflects the Gtk object hierarchy in terms of Haskell classes Note the mk functions were originally meant to simply be an alias for the constructor However in order to communicate the destructor of an object to objectNew the mk functions are now tuple containing Haskell constructor and the destructor function pointer This hack avoids changing all modules that simply pass mk to objectNew",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "Types",
        "normalized": "",
        "package": "xfconf",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#t:XfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "newtype",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
        "fct-type": "newtype",
        "title": "XfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "XfconfChannel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#t:XfconfChannelClass",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "class",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#XfconfChannelClass",
        "fct-type": "class",
        "title": "XfconfChannelClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "XfconfChannelClass",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Channel Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:XfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "XfconfChannel (ForeignPtr XfconfChannel)",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#XfconfChannel",
        "fct-type": "function",
        "title": "XfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "XfconfChannel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:castToXfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "obj -\u003e XfconfChannel",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#castToXfconfChannel",
        "fct-type": "function",
        "title": "castToXfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "castToXfconfChannel",
        "normalized": "a-\u003eXfconfChannel",
        "package": "xfconf",
        "partial": "To Xfconf Channel",
        "signature": "obj-\u003eXfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:gTypeXfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "GType",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#gTypeXfconfChannel",
        "fct-type": "function",
        "title": "gTypeXfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "gTypeXfconfChannel",
        "normalized": "",
        "package": "xfconf",
        "partial": "Type Xfconf Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:mkXfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "(ForeignPtr XfconfChannel -\u003e XfconfChannel, FinalizerPtr a)",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#mkXfconfChannel",
        "fct-type": "function",
        "title": "mkXfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "mkXfconfChannel",
        "normalized": "(ForeignPtr XfconfChannel-\u003eXfconfChannel,FinalizerPtr a)",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": "(ForeignPtr XfconfChannel-\u003eXfconfChannel,FinalizerPtr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:toXfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "o -\u003e XfconfChannel",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#toXfconfChannel",
        "fct-type": "function",
        "title": "toXfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "toXfconfChannel",
        "normalized": "a-\u003eXfconfChannel",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": "o-\u003eXfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Types.html#v:unXfconfChannel",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Types",
        "fct-package": "xfconf",
        "fct-signature": "XfconfChannel -\u003e ForeignPtr XfconfChannel",
        "fct-source": "src/System-XFCE-Xfconf-Types.html#unXfconfChannel",
        "fct-type": "function",
        "title": "unXfconfChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Types",
        "module": "System.XFCE.Xfconf.Types",
        "name": "unXfconfChannel",
        "normalized": "XfconfChannel-\u003eForeignPtr XfconfChannel",
        "package": "xfconf",
        "partial": "Xfconf Channel",
        "signature": "XfconfChannel-\u003eForeignPtr XfconfChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLegacy core functions from the C implementation.\n\u003c/p\u003e\u003cp\u003eBefore libxfconf can be use, it must be initialized by calling\n   \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e. To free resources used by the library, call\n   \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e. These calls are \u003ca\u003erecursive\u003c/a\u003e: multiple calls to\n   \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e are allowed, but each call must be matched by a\n   separate call to \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e to really free the library's\n   resources.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n   http://docs.xfce.org/api/xfconf/xfconf-xfconf.html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XFCE.Xfconf.Unsafe",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Legacy core functions from the implementation Before libxfconf can be use it must be initialized by calling xfconfInit To free resources used by the library call xfconfShutdown These calls are recursive multiple calls to xfconfInit are allowed but each call must be matched by separate call to xfconfShutdown to really free the library resources For more information see http docs.xfce.org api xfconf xfconf-xfconf.html",
        "hierarchy": "System XFCE Xfconf Unsafe",
        "module": "System.XFCE.Xfconf.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "xfconf",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#v:xfconfInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the Xfconf library. Can be called multiple times with\n no adverse effects.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003eGError\u003c/code\u003e. You can try to catch it with:\n\u003c/p\u003e\u003cpre\u003e\n catchGError xfconfInit\n ((GError d c m) -\u003e do print d;print c;print m)\n\u003c/pre\u003e\u003cp\u003eN.B.: most Haskell functions automatically calls xfconfInit when\n needed. You should NOT directly use this function.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Unsafe",
        "fct-package": "xfconf",
        "fct-signature": "IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Unsafe.html#xfconfInit",
        "fct-type": "function",
        "title": "xfconfInit"
      },
      "index": {
        "description": "Initializes the Xfconf library Can be called multiple times with no adverse effects May throw GError You can try to catch it with catchGError xfconfInit GError do print print print N.B most Haskell functions automatically calls xfconfInit when needed You should NOT directly use this function",
        "hierarchy": "System XFCE Xfconf Unsafe",
        "module": "System.XFCE.Xfconf.Unsafe",
        "name": "xfconfInit",
        "normalized": "IO()",
        "package": "xfconf",
        "partial": "Init",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Unsafe.html#v:xfconfShutdown",
      "description": {
        "fct-descr": "\u003cp\u003eShuts down and frees any resources consumed by the Xfconf library.\n If \u003ccode\u003e\u003ca\u003exfconfInit\u003c/a\u003e\u003c/code\u003e is called multiple times, \u003ccode\u003e\u003ca\u003exfconfShutdown\u003c/a\u003e\u003c/code\u003e must be\n called an equal number of times to shut down the library.\n\u003c/p\u003e\u003cp\u003eN.B.: most Haskell functions automatically calls xfconfShutdown when\n needed. You should NOT directly use this function.\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Unsafe",
        "fct-package": "xfconf",
        "fct-signature": "IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Unsafe.html#xfconfShutdown",
        "fct-type": "function",
        "title": "xfconfShutdown"
      },
      "index": {
        "description": "Shuts down and frees any resources consumed by the Xfconf library If xfconfInit is called multiple times xfconfShutdown must be called an equal number of times to shut down the library N.B most Haskell functions automatically calls xfconfShutdown when needed You should NOT directly use this function",
        "hierarchy": "System XFCE Xfconf Unsafe",
        "module": "System.XFCE.Xfconf.Unsafe",
        "name": "xfconfShutdown",
        "normalized": "IO()",
        "package": "xfconf",
        "partial": "Shutdown",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf-Values.html",
        "fct-type": "module",
        "title": "Values"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "Values",
        "normalized": "",
        "package": "xfconf",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#t:XfconfValue",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "data",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "data",
        "title": "XfconfValue"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfValue",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#t:XfconfValueClass",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "class",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValueClass",
        "fct-type": "class",
        "title": "XfconfValueClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfValueClass",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Value Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfArray",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfArray [XfconfValue]",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfArray"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfArray",
        "normalized": "XfconfArray[XfconfValue]",
        "package": "xfconf",
        "partial": "Xfconf Array",
        "signature": "XfconfArray[XfconfValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfBool",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfBool Bool",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfBool"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfBool",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfDouble",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfDouble Double",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfDouble",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfInt Int32",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfInt",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfInt16 Int16",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfInt16",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfNotImplemented",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfNotImplemented GType",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfNotImplemented"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfNotImplemented",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf Not Implemented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfString",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfString String",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfString"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfString",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfStringList",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfStringList [String]",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfStringList"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfStringList",
        "normalized": "XfconfStringList[String]",
        "package": "xfconf",
        "partial": "Xfconf String List",
        "signature": "XfconfStringList[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfUInt Word32",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfUInt",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf UInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfUInt16 Word16",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfUInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfUInt16",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf UInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:XfconfUInt64",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "XfconfUInt64 Word64",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#XfconfValue",
        "fct-type": "function",
        "title": "XfconfUInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "XfconfUInt64",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf UInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:allocaGValueArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe big bro' of \u003ccode\u003e\u003ca\u003eallocaGValue\u003c/a\u003e\u003c/code\u003e.\n This function works in three steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Allocate memory for an array of \u003ccode\u003e\u003ca\u003eXfconfValue\u003c/a\u003e\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e containing\n complex elements such as \u003ccode\u003e\u003ca\u003eXfconfStringList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXfconfArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eXfconfNotImplemented\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e perform the operation \u003ccode\u003e(GValue -\u003e IO b)\u003c/code\u003e where the \u003ccode\u003e\u003ca\u003eGValue\u003c/a\u003e\u003c/code\u003e is a\n boxed value wrapping our array of 'GValue*'.\n\u003c/li\u003e\u003cli\u003e free the memory.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "[XfconfValue] -\u003e (GValue -\u003e IO b) -\u003e IO b",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#allocaGValueArray",
        "fct-type": "function",
        "title": "allocaGValueArray"
      },
      "index": {
        "description": "The big bro of allocaGValue This function works in three steps Allocate memory for an array of XfconfValue not containing complex elements such as XfconfStringList XfconfArray or XfconfNotImplemented perform the operation GValue IO where the GValue is boxed value wrapping our array of GValue free the memory",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "allocaGValueArray",
        "normalized": "[XfconfValue]-\u003e(GValue-\u003eIO a)-\u003eIO a",
        "package": "xfconf",
        "partial": "GValue Array",
        "signature": "[XfconfValue]-\u003e(GValue-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:array",
      "description": {
        "fct-descr": "\u003cp\u003eFrom xfconf-common-private.h:\n \u003ccode\u003e\n #define XFCONF_TYPE_G_VALUE_ARRAY (dbus_g_type_get_collection(\"GPtrArray\", G_TYPE_VALUE))\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GType",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#array",
        "fct-type": "function",
        "title": "array"
      },
      "index": {
        "description": "From xfconf-common-private.h define XFCONF TYPE VALUE ARRAY dbus type get collection GPtrArray TYPE VALUE",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "array",
        "normalized": "",
        "package": "xfconf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:int16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GType",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#int16",
        "fct-type": "function",
        "title": "int16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "int16",
        "normalized": "",
        "package": "xfconf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:toXfconfValue",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "a -\u003e IO XfconfValue",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#toXfconfValue",
        "fct-type": "method",
        "title": "toXfconfValue"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "toXfconfValue",
        "normalized": "a-\u003eIO XfconfValue",
        "package": "xfconf",
        "partial": "Xfconf Value",
        "signature": "a-\u003eIO XfconfValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:uint16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GType",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#uint16",
        "fct-type": "function",
        "title": "uint16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "uint16",
        "normalized": "",
        "package": "xfconf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueGetInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GValue -\u003e IO Int16",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#valueGetInt16",
        "fct-type": "function",
        "title": "valueGetInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "valueGetInt16",
        "normalized": "GValue-\u003eIO Int",
        "package": "xfconf",
        "partial": "Get Int",
        "signature": "GValue-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueGetUInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GValue -\u003e IO Word16",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#valueGetUInt16",
        "fct-type": "function",
        "title": "valueGetUInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "valueGetUInt16",
        "normalized": "GValue-\u003eIO Word",
        "package": "xfconf",
        "partial": "Get UInt",
        "signature": "GValue-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueSetInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GValue -\u003e Int16 -\u003e IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#valueSetInt16",
        "fct-type": "function",
        "title": "valueSetInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "valueSetInt16",
        "normalized": "GValue-\u003eInt-\u003eIO()",
        "package": "xfconf",
        "partial": "Set Int",
        "signature": "GValue-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf-Values.html#v:valueSetUInt16",
      "description": {
        "fct-module": "System.XFCE.Xfconf.Values",
        "fct-package": "xfconf",
        "fct-signature": "GValue -\u003e Word16 -\u003e IO ()",
        "fct-source": "src/System-XFCE-Xfconf-Values.html#valueSetUInt16",
        "fct-type": "function",
        "title": "valueSetUInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf Values",
        "module": "System.XFCE.Xfconf.Values",
        "name": "valueSetUInt16",
        "normalized": "GValue-\u003eWord-\u003eIO()",
        "package": "xfconf",
        "partial": "Set UInt",
        "signature": "GValue-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xfconf/docs/System-XFCE-Xfconf.html#",
      "description": {
        "fct-module": "System.XFCE.Xfconf",
        "fct-package": "xfconf",
        "fct-signature": "module",
        "fct-source": "src/System-XFCE-Xfconf.html",
        "fct-type": "module",
        "title": "Xfconf"
      },
      "index": {
        "description": "",
        "hierarchy": "System XFCE Xfconf",
        "module": "System.XFCE.Xfconf",
        "name": "Xfconf",
        "normalized": "",
        "package": "xfconf",
        "partial": "Xfconf",
        "signature": ""
      }
    }
  }
]