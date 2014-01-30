[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#",
      "description": {
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Coupon.html",
        "fct-type": "module",
        "title": "Coupon"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "Coupon",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Coupon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:Coupon",
      "description": {
        "fct-descr": "\u003cp\u003eCoupons can be used as a proxy for \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe important point is that coupons can be serialized and sent\n over a remote connection.\n\u003c/p\u003e\u003cp\u003eCoupons are in bijection with items:\n Different coupons will yield different items while\n the same item will always be associated to the same coupon.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Foreign-Coupon.html#Coupon",
        "fct-type": "type",
        "title": "Coupon"
      },
      "index": {
        "description": "Coupons can be used as proxy for Item The important point is that coupons can be serialized and sent over remote connection Coupons are in bijection with items Different coupons will yield different items while the same item will always be associated to the same coupon",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "Coupon",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Coupon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:Item",
      "description": {
        "fct-descr": "\u003cp\u003eItems represent foreign objects.\n The intended use case is that these objects do not live in RAM,\n but are only accessible via a remote connection.\n\u003c/p\u003e\u003cp\u003eThe foreign object can be accessed by means of the item data of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Foreign-Coupon.html#Item",
        "fct-type": "type",
        "title": "Item"
      },
      "index": {
        "description": "Items represent foreign objects The intended use case is that these objects do not live in RAM but are only accessible via remote connection The foreign object can be accessed by means of the item data of type",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "Item",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:PrizeBooth",
      "description": {
        "fct-descr": "\u003cp\u003eRemote boothes are a mapping from \u003ccode\u003e\u003ca\u003eCoupon\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePrize boothes are neutral concerning garbage collection,\n they do not keep items alive.\n Moreover, items will be deleted from the booth when they are garbage collected.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Foreign-Coupon.html#PrizeBooth",
        "fct-type": "data",
        "title": "PrizeBooth"
      },
      "index": {
        "description": "Remote boothes are mapping from Coupon to Item Prize boothes are neutral concerning garbage collection they do not keep items alive Moreover items will be deleted from the booth when they are garbage collected",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "PrizeBooth",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Prize Booth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:addFinalizer",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a finalizer that is run when the item is garbage collected.\n\u003c/p\u003e\u003cp\u003eThe coupon cannot be redeemed anymore while the finalizer runs.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Item a -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Foreign-Coupon.html#addFinalizer",
        "fct-type": "function",
        "title": "addFinalizer"
      },
      "index": {
        "description": "Add finalizer that is run when the item is garbage collected The coupon cannot be redeemed anymore while the finalizer runs",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "addFinalizer",
        "normalized": "Item a-\u003eIO()-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Finalizer",
        "signature": "Item a-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:addReachable",
      "description": {
        "fct-descr": "\u003cp\u003eWhen dealing with several foreign objects,\n it is useful to model dependencies between them.\n\u003c/p\u003e\u003cp\u003eAfter this operation, the second \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e will be reachable\n whenever the first one is reachable.\n For instance, you should call this function when the second foreign object\n is actually a subobject of the first one.\n\u003c/p\u003e\u003cp\u003eNote: It is possible to model dependencies in the \u003ccode\u003eparent\u003c/code\u003e data,\n but the \u003ccode\u003e\u003ca\u003eaddReachable\u003c/a\u003e\u003c/code\u003e method is preferrable,\n as it allows all child object to be garbage collected at once.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Item a -\u003e Item a -\u003e IO ()",
        "fct-source": "src/Foreign-Coupon.html#addReachable",
        "fct-type": "function",
        "title": "addReachable"
      },
      "index": {
        "description": "When dealing with several foreign objects it is useful to model dependencies between them After this operation the second Item will be reachable whenever the first one is reachable For instance you should call this function when the second foreign object is actually subobject of the first one Note It is possible to model dependencies in the parent data but the addReachable method is preferrable as it allows all child object to be garbage collected at once",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "addReachable",
        "normalized": "Item a-\u003eItem a-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Reachable",
        "signature": "Item a-\u003eItem a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:clearReachable",
      "description": {
        "fct-descr": "\u003cp\u003eClear all dependencies.\n\u003c/p\u003e\u003cp\u003eReachability of this \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e no longer implies reachability\n of other items, as formerly implied by calls to \u003ccode\u003e\u003ca\u003eaddReachable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Item a -\u003e IO ()",
        "fct-source": "src/Foreign-Coupon.html#clearReachable",
        "fct-type": "function",
        "title": "clearReachable"
      },
      "index": {
        "description": "Clear all dependencies Reachability of this Item no longer implies reachability of other items as formerly implied by calls to addReachable",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "clearReachable",
        "normalized": "Item a-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Reachable",
        "signature": "Item a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy an item and run all finalizers for it.\n Coupons for this item can no longer be redeemed.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Item a -\u003e IO ()",
        "fct-source": "src/Foreign-Coupon.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "Destroy an item and run all finalizers for it Coupons for this item can no longer be redeemed",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "destroy",
        "normalized": "Item a-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Item a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eTake a coupon to the prize booth and maybe you'll get an item for it.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Coupon -\u003e PrizeBooth a -\u003e IO (Maybe (Item a))",
        "fct-source": "src/Foreign-Coupon.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Take coupon to the prize booth and maybe you ll get an item for it",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "lookup",
        "normalized": "Coupon-\u003ePrizeBooth a-\u003eIO(Maybe(Item a))",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Coupon-\u003ePrizeBooth a-\u003eIO(Maybe(Item a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:newItem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new item, which can be exchanged for a coupon\n at an associated prize booth.\n\u003c/p\u003e\u003cp\u003eThe item can become unreachable,\n at which point it will be garbage collected,\n the finalizers will be run and its\n coupon ceases to be valid.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "PrizeBooth a -\u003e a -\u003e IO (Item a)",
        "fct-source": "src/Foreign-Coupon.html#newItem",
        "fct-type": "function",
        "title": "newItem"
      },
      "index": {
        "description": "Create new item which can be exchanged for coupon at an associated prize booth The item can become unreachable at which point it will be garbage collected the finalizers will be run and its coupon ceases to be valid",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "newItem",
        "normalized": "PrizeBooth a-\u003ea-\u003eIO(Item a)",
        "package": "threepenny-gui",
        "partial": "Item",
        "signature": "PrizeBooth a-\u003ea-\u003eIO(Item a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:newPrizeBooth",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new prize booth for creating items and trading coupons.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "IO (PrizeBooth a)",
        "fct-source": "src/Foreign-Coupon.html#newPrizeBooth",
        "fct-type": "function",
        "title": "newPrizeBooth"
      },
      "index": {
        "description": "Create new prize booth for creating items and trading coupons",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "newPrizeBooth",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Prize Booth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:withItem",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action with the item.\n\u003c/p\u003e\u003cp\u003eWhile the action is being performed, it is ensured that the item\n will not be garbage collected\n and its coupon can be succesfully redeemed at the prize booth.\n\u003c/p\u003e",
        "fct-module": "Foreign.Coupon",
        "fct-package": "threepenny-gui",
        "fct-signature": "Item a -\u003e (Coupon -\u003e a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Foreign-Coupon.html#withItem",
        "fct-type": "function",
        "title": "withItem"
      },
      "index": {
        "description": "Perform an action with the item While the action is being performed it is ensured that the item will not be garbage collected and its coupon can be succesfully redeemed at the prize booth",
        "hierarchy": "Foreign Coupon",
        "module": "Foreign.Coupon",
        "name": "withItem",
        "normalized": "Item a-\u003e(Coupon-\u003ea-\u003eIO b)-\u003eIO b",
        "package": "threepenny-gui",
        "partial": "Item",
        "signature": "Item a-\u003e(Coupon-\u003ea-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html",
        "fct-type": "module",
        "title": "Attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "Attributes",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:action",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#action",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "action",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:align",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "align",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:alink",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#alink",
        "fct-type": "function",
        "title": "alink"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "alink",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:alt",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#alt",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "alt",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:altcode",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#altcode",
        "fct-type": "function",
        "title": "altcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "altcode",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:archive",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#archive",
        "fct-type": "function",
        "title": "archive"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "archive",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:background",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#background",
        "fct-type": "function",
        "title": "background"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "background",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:base",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#base",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "base",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:bgcolor",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#bgcolor",
        "fct-type": "function",
        "title": "bgcolor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "bgcolor",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:border",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#border",
        "fct-type": "function",
        "title": "border"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "border",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:bordercolor",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#bordercolor",
        "fct-type": "function",
        "title": "bordercolor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "bordercolor",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cellpadding",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#cellpadding",
        "fct-type": "function",
        "title": "cellpadding"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "cellpadding",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cellspacing",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#cellspacing",
        "fct-type": "function",
        "title": "cellspacing"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "cellspacing",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:checked",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003echecked\u003c/code\u003e status of an input element of type checkbox.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#checked",
        "fct-type": "function",
        "title": "checked"
      },
      "index": {
        "description": "The checked status of an input element of type checkbox",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "checked",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:checked_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#checked_",
        "fct-type": "function",
        "title": "checked_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "checked_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:class_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#class_",
        "fct-type": "function",
        "title": "class_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "class_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:clear_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#clear_",
        "fct-type": "function",
        "title": "clear_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "clear_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:code_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#code_",
        "fct-type": "function",
        "title": "code_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "code_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:codebase",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#codebase",
        "fct-type": "function",
        "title": "codebase"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "codebase",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:color",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#color",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "color",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cols",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#cols",
        "fct-type": "function",
        "title": "cols"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "cols",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:colspan",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#colspan",
        "fct-type": "function",
        "title": "colspan"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "colspan",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:compact",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#compact",
        "fct-type": "function",
        "title": "compact"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "compact",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:content",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#content",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "content",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:coords",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#coords",
        "fct-type": "function",
        "title": "coords"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "coords",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:enabled",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eenabled\u003c/code\u003e status of an input element\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#enabled",
        "fct-type": "function",
        "title": "enabled"
      },
      "index": {
        "description": "The enabled status of an input element",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "enabled",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:enctype",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#enctype",
        "fct-type": "function",
        "title": "enctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "enctype",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:face",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#face",
        "fct-type": "function",
        "title": "face"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "face",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:frameborder",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#frameborder",
        "fct-type": "function",
        "title": "frameborder"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "frameborder",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:height",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "height",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:href",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#href",
        "fct-type": "function",
        "title": "href"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "href",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:hspace",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#hspace",
        "fct-type": "function",
        "title": "hspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "hspace",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:httpequiv",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#httpequiv",
        "fct-type": "function",
        "title": "httpequiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "httpequiv",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:id_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#id_",
        "fct-type": "function",
        "title": "id_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "id_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:ismap",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#ismap",
        "fct-type": "function",
        "title": "ismap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "ismap",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:lang",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#lang",
        "fct-type": "function",
        "title": "lang"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "lang",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:marginheight",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#marginheight",
        "fct-type": "function",
        "title": "marginheight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "marginheight",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:marginwidth",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#marginwidth",
        "fct-type": "function",
        "title": "marginwidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "marginwidth",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:maxlength",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#maxlength",
        "fct-type": "function",
        "title": "maxlength"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "maxlength",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:method",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#method",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "method",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:multiple",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#multiple",
        "fct-type": "function",
        "title": "multiple"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "multiple",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:name",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "name",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:nohref",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#nohref",
        "fct-type": "function",
        "title": "nohref"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "nohref",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:noresize",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#noresize",
        "fct-type": "function",
        "title": "noresize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "noresize",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:noshade",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#noshade",
        "fct-type": "function",
        "title": "noshade"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "noshade",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:nowrap",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#nowrap",
        "fct-type": "function",
        "title": "nowrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "nowrap",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rel",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#rel",
        "fct-type": "function",
        "title": "rel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "rel",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rev",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#rev",
        "fct-type": "function",
        "title": "rev"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "rev",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rows",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#rows",
        "fct-type": "function",
        "title": "rows"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "rows",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rowspan",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#rowspan",
        "fct-type": "function",
        "title": "rowspan"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "rowspan",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rules",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#rules",
        "fct-type": "function",
        "title": "rules"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "rules",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:scrolling",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#scrolling",
        "fct-type": "function",
        "title": "scrolling"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "scrolling",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:selected",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#selected",
        "fct-type": "function",
        "title": "selected"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "selected",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:selection",
      "description": {
        "fct-descr": "\u003cp\u003eIndex of the currently selected option of a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eThe index starts at \u003ccode\u003e0\u003c/code\u003e.\n If no option is selected, then the selection is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Element (Maybe Int)",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#selection",
        "fct-type": "function",
        "title": "selection"
      },
      "index": {
        "description": "Index of the currently selected option of select element The index starts at If no option is selected then the selection is Nothing",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "selection",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:shape",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#shape",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "shape",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:size",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "size",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:src",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#src",
        "fct-type": "function",
        "title": "src"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "src",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:target",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#target",
        "fct-type": "function",
        "title": "target"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "target",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:text_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#text_",
        "fct-type": "function",
        "title": "text_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "text_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:type_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#type_",
        "fct-type": "function",
        "title": "type_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "type_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:usemap",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#usemap",
        "fct-type": "function",
        "title": "usemap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "usemap",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:valign",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#valign",
        "fct-type": "function",
        "title": "valign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "valign",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:version",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "version",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:vlink",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#vlink",
        "fct-type": "function",
        "title": "vlink"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "vlink",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:vspace",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#vspace",
        "fct-type": "function",
        "title": "vspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "vspace",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:width",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Attributes",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Int",
        "fct-source": "src/Graphics-UI-Threepenny-Attributes.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Attributes",
        "module": "Graphics.UI.Threepenny.Attributes",
        "name": "width",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Canvas",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Canvas.html",
        "fct-type": "module",
        "title": "Canvas"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Canvas",
        "module": "Graphics.UI.Threepenny.Canvas",
        "name": "Canvas",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Canvas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#t:Canvas",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Canvas",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Canvas.html#Canvas",
        "fct-type": "type",
        "title": "Canvas"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Canvas",
        "module": "Graphics.UI.Threepenny.Canvas",
        "name": "Canvas",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Canvas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#t:Vector",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Canvas",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Canvas.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Canvas",
        "module": "Graphics.UI.Threepenny.Canvas",
        "name": "Vector",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#v:clearCanvas",
      "description": {
        "fct-descr": "\u003cp\u003eClear the canvas\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Canvas",
        "fct-package": "threepenny-gui",
        "fct-signature": "Canvas -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Canvas.html#clearCanvas",
        "fct-type": "function",
        "title": "clearCanvas"
      },
      "index": {
        "description": "Clear the canvas",
        "hierarchy": "Graphics UI Threepenny Canvas",
        "module": "Graphics.UI.Threepenny.Canvas",
        "name": "clearCanvas",
        "normalized": "Canvas-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Canvas",
        "signature": "Canvas-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#v:drawImage",
      "description": {
        "fct-descr": "\u003cp\u003eDraw the image of an image element onto the canvas at a specified position.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Canvas",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Vector -\u003e Canvas -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Canvas.html#drawImage",
        "fct-type": "function",
        "title": "drawImage"
      },
      "index": {
        "description": "Draw the image of an image element onto the canvas at specified position",
        "hierarchy": "Graphics UI Threepenny Canvas",
        "module": "Graphics.UI.Threepenny.Canvas",
        "name": "drawImage",
        "normalized": "Element-\u003eVector-\u003eCanvas-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Image",
        "signature": "Element-\u003eVector-\u003eCanvas-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Core",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes can be \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#Attr",
        "fct-type": "type",
        "title": "Attr"
      },
      "index": {
        "description": "Attributes can be set and get",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Attr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eRecord for configuring the Threepenny GUI server.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Record for configuring the Threepenny GUI server",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Config",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Element",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#Element",
        "fct-type": "data",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Element",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:EventData",
      "description": {
        "fct-descr": "\u003cp\u003eData from an event. At the moment it is empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#EventData",
        "fct-type": "data",
        "title": "EventData"
      },
      "index": {
        "description": "Data from an event At the moment it is empty",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "EventData",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Event Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:FFI",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class for making \u003ccode\u003e\u003ca\u003effi\u003c/a\u003e\u003c/code\u003e a variable argument function.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-FFI.html#FFI",
        "fct-type": "class",
        "title": "FFI"
      },
      "index": {
        "description": "Helper class for making ffi variable argument function",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "FFI",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "FFI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:JSFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA JavaScript function with a given output type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-FFI.html#JSFunction",
        "fct-type": "data",
        "title": "JSFunction"
      },
      "index": {
        "description": "JavaScript function with given output type",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "JSFunction",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "JSFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ReadAttr",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute that only supports the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#ReadAttr",
        "fct-type": "type",
        "title": "ReadAttr"
      },
      "index": {
        "description": "Attribute that only supports the get operation",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "ReadAttr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Read Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ReadWriteAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized attribute with different types for getting and setting.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
        "fct-type": "data",
        "title": "ReadWriteAttr"
      },
      "index": {
        "description": "Generalized attribute with different types for getting and setting",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "ReadWriteAttr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Read Write Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ToJS",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class for rendering Haskell values as JavaScript expressions.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-FFI.html#ToJS",
        "fct-type": "class",
        "title": "ToJS"
      },
      "index": {
        "description": "Helper class for rendering Haskell values as JavaScript expressions",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "ToJS",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "To JS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:UI",
      "description": {
        "fct-descr": "\u003cp\u003eUser interface elements are created and manipulated in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis monad is essentially just a thin wrapper around the familiar \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\nUse the \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e function to access \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations like reading\nand writing from files.\n\u003c/p\u003e\u003cp\u003eThere are several subtle reasons why Threepenny\nuses a custom \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad instead of the standard \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e More convenience when calling JavaScript.\nThe monad keeps track of a browser \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e context\nin which JavaScript function calls are executed.\n\u003c/li\u003e\u003cli\u003e Recursion for functional reactive programming.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#UI",
        "fct-type": "data",
        "title": "UI"
      },
      "index": {
        "description": "User interface elements are created and manipulated in the UI monad This monad is essentially just thin wrapper around the familiar IO monad Use the liftIO function to access IO operations like reading and writing from files There are several subtle reasons why Threepenny uses custom UI monad instead of the standard IO monad More convenience when calling JavaScript The monad keeps track of browser Window context in which JavaScript function calls are executed Recursion for functional reactive programming",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "UI",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "UI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Widget",
      "description": {
        "fct-descr": "\u003cp\u003eWidgets are data types that have a visual representation.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#Widget",
        "fct-type": "class",
        "title": "Widget"
      },
      "index": {
        "description": "Widgets are data types that have visual representation",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Widget",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Window",
      "description": {
        "fct-descr": "\u003cp\u003eThe client browser window.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Window",
        "fct-type": "type",
        "title": "Window"
      },
      "index": {
        "description": "The client browser window",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Window",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:WriteAttr",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute that only supports the \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#WriteAttr",
        "fct-type": "type",
        "title": "WriteAttr"
      },
      "index": {
        "description": "Attribute that only supports the set operation",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "WriteAttr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Write Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eReverse function application.\n Allows convenient notation for setting properties.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e mkElement \"div\"\n     # set style     [(\"color\",\"#CCAABB\")]\n     # set draggable True\n     # set children  otherElements\n\u003c/pre\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e b",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Reverse function application Allows convenient notation for setting properties Example usage mkElement div set style color CCAABB set draggable True set children otherElements",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "(#) #",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend DOM elements as children to a given element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element -\u003e [UI Element] -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#%23%2B",
        "fct-type": "function",
        "title": "(#+)"
      },
      "index": {
        "description": "Append DOM elements as children to given element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "(#+) #+",
        "normalized": "UI Element-\u003e[UI Element]-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "UI Element-\u003e[UI Element]-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35-.",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient combinator for setting the CSS class on element creation.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element -\u003e String -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#%23.",
        "fct-type": "function",
        "title": "(#.)"
      },
      "index": {
        "description": "Convenient combinator for setting the CSS class on element creation",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "(#.) #.",
        "normalized": "UI Element-\u003eString-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "UI Element-\u003eString-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:Config",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Config",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "Config",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:EventData",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "EventData [Maybe String]",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#EventData",
        "fct-type": "function",
        "title": "EventData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "EventData",
        "normalized": "EventData[Maybe String]",
        "package": "threepenny-gui",
        "partial": "Event Data",
        "signature": "EventData[Maybe String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:ReadWriteAttr",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ReadWriteAttr",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
        "fct-type": "function",
        "title": "ReadWriteAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "ReadWriteAttr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Read Write Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:askWindow",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve current \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e context in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Window",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#askWindow",
        "fct-type": "function",
        "title": "askWindow"
      },
      "index": {
        "description": "Retrieve current Window context in the UI monad",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "askWindow",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:atomic",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically execute the given computation in the context of a browser window\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e IO a -\u003e IO a",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Driver.html#atomic",
        "fct-type": "function",
        "title": "atomic"
      },
      "index": {
        "description": "Atomically execute the given computation in the context of browser window",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "atomic",
        "normalized": "Window-\u003eIO a-\u003eIO a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Window-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:attr",
      "description": {
        "fct-descr": "\u003cp\u003eHTML attributes of an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String -\u003e WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#attr",
        "fct-type": "function",
        "title": "attr"
      },
      "index": {
        "description": "HTML attributes of an element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "attr",
        "normalized": "String-\u003eWriteAttr Element String",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "String-\u003eWriteAttr Element String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:audioPlay",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke the JavaScript expression \u003ccode\u003eaudioElement.play();\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#audioPlay",
        "fct-type": "function",
        "title": "audioPlay"
      },
      "index": {
        "description": "Invoke the JavaScript expression audioElement.play",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "audioPlay",
        "normalized": "Element-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Play",
        "signature": "Element-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:audioStop",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke the JavaScript expression \u003ccode\u003eaudioElement.stop();\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#audioStop",
        "fct-type": "function",
        "title": "audioStop"
      },
      "index": {
        "description": "Invoke the JavaScript expression audioElement.stop",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "audioStop",
        "normalized": "Element-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Stop",
        "signature": "Element-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:callDeferredFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCall the given function with the given continuation. Doesn't block.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window-\u003e String-\u003e [String]-\u003e ([Maybe String] -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "callDeferredFunction"
      },
      "index": {
        "description": "Call the given function with the given continuation Doesn block",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "callDeferredFunction",
        "normalized": "Window-\u003eString-\u003e[String]-\u003e([Maybe String]-\u003eIO())-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Deferred Function",
        "signature": "Window-\u003eString-\u003e[String]-\u003e([Maybe String]-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:callFunction",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given JavaScript function and wait for results. Blocks.\n\u003c/p\u003e\u003cp\u003eThe client window uses JavaScript's \u003ccode\u003eeval()\u003c/code\u003e function to run the code.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "JSFunction a -\u003e UI a",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#callFunction",
        "fct-type": "function",
        "title": "callFunction"
      },
      "index": {
        "description": "Run the given JavaScript function and wait for results Blocks The client window uses JavaScript eval function to run the code",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "callFunction",
        "normalized": "JSFunction a-\u003eUI a",
        "package": "threepenny-gui",
        "partial": "Function",
        "signature": "JSFunction a-\u003eUI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eChild elements of a given element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element [Element]",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "Child elements of given element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "children",
        "normalized": "WriteAttr Element[Element]",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "WriteAttr Element[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:column",
      "description": {
        "fct-descr": "\u003cp\u003eAlign given elements in a column. Special case of \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "[UI Element] -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#column",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "Align given elements in column Special case of grid",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "column",
        "normalized": "[UI Element]-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "[UI Element]-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:cookies",
      "description": {
        "fct-descr": "\u003cp\u003eCookies on the client.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ReadAttr Window [(String, String)]",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#cookies",
        "fct-type": "function",
        "title": "cookies"
      },
      "index": {
        "description": "Cookies on the client",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "cookies",
        "normalized": "ReadAttr Window[(String,String)]",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "ReadAttr Window[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:debug",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a message on the client console if the client has debugging enabled.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#debug",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "Print message on the client console if the client has debugging enabled",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "debug",
        "normalized": "String-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "String-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefault configuration.\n\u003c/p\u003e\u003cp\u003ePort 10000, no custom HTML, no static directory, logging to stderr.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Config",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "Default configuration Port no custom HTML no static directory logging to stderr",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "defaultConfig",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the given element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete the given element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "delete",
        "normalized": "Element-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that occurs whenever the client has disconnected,\n be it by closing the browser window or by exception.\n\u003c/p\u003e\u003cp\u003eNote: DOM Elements in the browser window that has been closed\n can no longer be manipulated.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "Event that occurs whenever the client has disconnected be it by closing the browser window or by exception Note DOM Elements in the browser window that has been closed can no longer be manipulated",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "disconnect",
        "normalized": "Window-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Window-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:domEvent",
      "description": {
        "fct-descr": "\u003cp\u003eObtain DOM event for a given element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String-\u003e Element-\u003e Event EventData",
        "fct-type": "function",
        "title": "domEvent"
      },
      "index": {
        "description": "Obtain DOM event for given element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "domEvent",
        "normalized": "String-\u003eElement-\u003eEvent EventData",
        "package": "threepenny-gui",
        "partial": "Event",
        "signature": "String-\u003eElement-\u003eEvent EventData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eConvience synonym for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e to make elements work well with \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n Also works on \u003ccode\u003e\u003ca\u003eWidget\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e e \u003c- mkElement \"button\"\n element e # set text \"Ok\"\n\u003c/pre\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "w -\u003e m Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#element",
        "fct-type": "function",
        "title": "element"
      },
      "index": {
        "description": "Convience synonym for return to make elements work well with set Also works on Widget Example usage mkElement button element set text Ok",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "element",
        "normalized": "a-\u003eb Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "w-\u003em Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:ffi",
      "description": {
        "fct-descr": "\u003cp\u003eSimple JavaScript FFI with string substitution.\n\u003c/p\u003e\u003cp\u003eInspired by the Fay language. \u003ca\u003ehttp://fay-lang.org/\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e example :: String -\u003e Int -\u003e JSFunction String\n example = ffi \"$(%1).prop('checked',%2)\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003effi\u003c/a\u003e\u003c/code\u003e function takes a string argument representing the JavaScript\n code to be executed on the client.\n Occurrences of the substrings \u003ccode\u003e%1\u003c/code\u003e to \u003ccode\u003e%9\u003c/code\u003e will be replaced by\n subequent arguments.\n\u003c/p\u003e\u003cp\u003eNote: Always specify a type signature! The types automate\n how values are marshalled between Haskell and JavaScript.\n The class instances for the \u003ccode\u003e\u003ca\u003eFFI\u003c/a\u003e\u003c/code\u003e class show which conversions are supported.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-FFI.html#ffi",
        "fct-type": "function",
        "title": "ffi"
      },
      "index": {
        "description": "Simple JavaScript FFI with string substitution Inspired by the Fay language http fay-lang.org example String Int JSFunction String example ffi prop checked The ffi function takes string argument representing the JavaScript code to be executed on the client Occurrences of the substrings to will be replaced by subequent arguments Note Always specify type signature The types automate how values are marshalled between Haskell and JavaScript The class instances for the FFI class show which conversions are supported",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "ffi",
        "normalized": "String-\u003ea",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:fromProp",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String -\u003e (JSValue -\u003e a) -\u003e (a -\u003e JSValue) -\u003e Attr Element a",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#fromProp",
        "fct-type": "function",
        "title": "fromProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "fromProp",
        "normalized": "String-\u003e(JSValue-\u003ea)-\u003e(a-\u003eJSValue)-\u003eAttr Element a",
        "package": "threepenny-gui",
        "partial": "Prop",
        "signature": "String-\u003e(JSValue-\u003ea)-\u003e(a-\u003eJSValue)-\u003eAttr Element a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet attribute value.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ReadWriteAttr x i o -\u003e x -\u003e UI o",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get attribute value",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "get",
        "normalized": "ReadWriteAttr a b c-\u003ea-\u003eUI c",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "ReadWriteAttr x i o-\u003ex-\u003eUI o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:get-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "x -\u003e UI o",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
        "fct-type": "function",
        "title": "get'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "get'",
        "normalized": "a-\u003eUI b",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "x-\u003eUI o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getBody",
      "description": {
        "fct-descr": "\u003cp\u003eGet the body of the page.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#getBody",
        "fct-type": "function",
        "title": "getBody"
      },
      "index": {
        "description": "Get the body of the page",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getBody",
        "normalized": "Window-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "Body",
        "signature": "Window-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElement",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "w -\u003e Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#getElement",
        "fct-type": "method",
        "title": "getElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getElement",
        "normalized": "a-\u003eElement",
        "package": "threepenny-gui",
        "partial": "Element",
        "signature": "w-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementById",
      "description": {
        "fct-descr": "\u003cp\u003eGet an element by a particular ID.  Blocks.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window-\u003e String-\u003e UI (Maybe Element)",
        "fct-type": "function",
        "title": "getElementById"
      },
      "index": {
        "description": "Get an element by particular ID Blocks",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getElementById",
        "normalized": "Window-\u003eString-\u003eUI(Maybe Element)",
        "package": "threepenny-gui",
        "partial": "Element By Id",
        "signature": "Window-\u003eString-\u003eUI(Maybe Element)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementsByClassName",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of elements by particular class.  Blocks.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window-\u003e String-\u003e UI [Element]",
        "fct-type": "function",
        "title": "getElementsByClassName"
      },
      "index": {
        "description": "Get list of elements by particular class Blocks",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getElementsByClassName",
        "normalized": "Window-\u003eString-\u003eUI[Element]",
        "package": "threepenny-gui",
        "partial": "Elements By Class Name",
        "signature": "Window-\u003eString-\u003eUI[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementsByTagName",
      "description": {
        "fct-descr": "\u003cp\u003eGet all elements of the given tag name.  Blocks.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window-\u003e String-\u003e UI [Element]",
        "fct-type": "function",
        "title": "getElementsByTagName"
      },
      "index": {
        "description": "Get all elements of the given tag name Blocks",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getElementsByTagName",
        "normalized": "Window-\u003eString-\u003eUI[Element]",
        "package": "threepenny-gui",
        "partial": "Elements By Tag Name",
        "signature": "Window-\u003eString-\u003eUI[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getHead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the head of the page.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#getHead",
        "fct-type": "function",
        "title": "getHead"
      },
      "index": {
        "description": "Get the head of the page",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getHead",
        "normalized": "Window-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "Head",
        "signature": "Window-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getRequestLocation",
      "description": {
        "fct-descr": "\u003cp\u003eGet the request location.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e IO URI",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Driver.html#getRequestLocation",
        "fct-type": "function",
        "title": "getRequestLocation"
      },
      "index": {
        "description": "Get the request location",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getRequestLocation",
        "normalized": "Window-\u003eIO URI",
        "package": "threepenny-gui",
        "partial": "Request Location",
        "signature": "Window-\u003eIO URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getValuesList",
      "description": {
        "fct-descr": "\u003cp\u003eGet values from inputs. Blocks. This is faster than many \u003ccode\u003egetValue\u003c/code\u003e invocations.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "[Element]-\u003e UI [String]",
        "fct-type": "function",
        "title": "getValuesList"
      },
      "index": {
        "description": "Get values from inputs Blocks This is faster than many getValue invocations",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getValuesList",
        "normalized": "[Element]-\u003eUI[String]",
        "package": "threepenny-gui",
        "partial": "Values List",
        "signature": "[Element]-\u003eUI[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getWindow",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the browser \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e in which the element resides.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e IO Window",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#getWindow",
        "fct-type": "function",
        "title": "getWindow"
      },
      "index": {
        "description": "Retrieve the browser Window in which the element resides",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "getWindow",
        "normalized": "Element-\u003eIO Window",
        "package": "threepenny-gui",
        "partial": "Window",
        "signature": "Element-\u003eIO Window"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:grid",
      "description": {
        "fct-descr": "\u003cp\u003eAlign given elements in a rectangular grid.\n\u003c/p\u003e\u003cp\u003eLayout is achieved by using the CSS \u003ccode\u003edisplay:table\u003c/code\u003e property.\n The following element tree will be generated\n\u003c/p\u003e\u003cpre\u003e  \u003cdiv class=\"table\"\u003e\n    \u003cdiv class=\"table-row\"\u003e\n      \u003cdiv class=\"table-cell\"\u003e ... \u003c/div\u003e\n      \u003cdiv class=\"table-cell\"\u003e ... \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"table-row\"\u003e\n      ...\n    \u003c/div\u003e\n   ...\n   \u003c/div\u003e\n\u003c/pre\u003e\u003cp\u003eYou can customatize the actual layout by assigning an \u003ccode\u003eid\u003c/code\u003e to the element\n and changing the \u003ccode\u003e.table\u003c/code\u003e, \u003ccode\u003e.table-row\u003c/code\u003e and \u003ccode\u003etable-column\u003c/code\u003e\n classes in a custom CSS file.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "[[UI Element]] -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#grid",
        "fct-type": "function",
        "title": "grid"
      },
      "index": {
        "description": "Align given elements in rectangular grid Layout is achieved by using the CSS display table property The following element tree will be generated div class table div class table-row div class table-cell div div class table-cell div div div class table-row div div You can customatize the actual layout by assigning an id to the element and changing the table table-row and table-column classes in custom CSS file",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "grid",
        "normalized": "[[UI Element]]-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "[[UI Element]]-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:html",
      "description": {
        "fct-descr": "\u003cp\u003eChild elements of a given element as a HTML string.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#html",
        "fct-type": "function",
        "title": "html"
      },
      "index": {
        "description": "Child elements of given element as HTML string",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "html",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:liftIOLater",
      "description": {
        "fct-descr": "\u003cp\u003eSchedule an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to be run later.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "IO () -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#liftIOLater",
        "fct-type": "function",
        "title": "liftIOLater"
      },
      "index": {
        "description": "Schedule an IO action to be run later",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "liftIOLater",
        "normalized": "IO()-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "IOLater",
        "signature": "IO()-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:loadDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eMake a local directory available as a relative URI.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "FilePath -\u003e UI String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#loadDirectory",
        "fct-type": "function",
        "title": "loadDirectory"
      },
      "index": {
        "description": "Make local directory available as relative URI",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "loadDirectory",
        "normalized": "FilePath-\u003eUI String",
        "package": "threepenny-gui",
        "partial": "Directory",
        "signature": "FilePath-\u003eUI String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:loadFile",
      "description": {
        "fct-descr": "\u003cp\u003eMake a local file available as a relative URI.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String-\u003e FilePath-\u003e UI String",
        "fct-type": "function",
        "title": "loadFile"
      },
      "index": {
        "description": "Make local file available as relative URI",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "loadFile",
        "normalized": "String-\u003eFilePath-\u003eUI String",
        "package": "threepenny-gui",
        "partial": "File",
        "signature": "String-\u003eFilePath-\u003eUI String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkElement",
      "description": {
        "fct-descr": "\u003cp\u003eMake a new DOM element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String-\u003e UI Element",
        "fct-type": "function",
        "title": "mkElement"
      },
      "index": {
        "description": "Make new DOM element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "mkElement",
        "normalized": "String-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "Element",
        "signature": "String-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkReadAttr",
      "description": {
        "fct-descr": "\u003cp\u003eBuild attribute from a getter.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "(x -\u003e UI o) -\u003e ReadAttr x o",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#mkReadAttr",
        "fct-type": "function",
        "title": "mkReadAttr"
      },
      "index": {
        "description": "Build attribute from getter",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "mkReadAttr",
        "normalized": "(a-\u003eUI b)-\u003eReadAttr a b",
        "package": "threepenny-gui",
        "partial": "Read Attr",
        "signature": "(x-\u003eUI o)-\u003eReadAttr x o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkReadWriteAttr",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an attribute from a getter and a setter.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "(x -\u003e UI o)-\u003e (i -\u003e x -\u003e UI ())-\u003e ReadWriteAttr x i o",
        "fct-type": "function",
        "title": "mkReadWriteAttr"
      },
      "index": {
        "description": "Build an attribute from getter and setter",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "mkReadWriteAttr",
        "normalized": "(a-\u003eUI b)-\u003e(c-\u003ea-\u003eUI())-\u003eReadWriteAttr a c b",
        "package": "threepenny-gui",
        "partial": "Read Write Attr",
        "signature": "(x-\u003eUI o)-\u003e(i-\u003ex-\u003eUI())-\u003eReadWriteAttr x i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkWriteAttr",
      "description": {
        "fct-descr": "\u003cp\u003eBuild attribute from a setter.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "(i -\u003e x -\u003e UI ()) -\u003e WriteAttr x i",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#mkWriteAttr",
        "fct-type": "function",
        "title": "mkWriteAttr"
      },
      "index": {
        "description": "Build attribute from setter",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "mkWriteAttr",
        "normalized": "(a-\u003eb-\u003eUI())-\u003eWriteAttr b a",
        "package": "threepenny-gui",
        "partial": "Write Attr",
        "signature": "(i-\u003ex-\u003eUI())-\u003eWriteAttr x i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:on",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to register \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e on click element $ \\_ -\u003e ...\n\u003c/pre\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "(element -\u003e Event a) -\u003e element -\u003e (a -\u003e UI void) -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#on",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "Convenience function to register Event for Element Example usage on click element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "on",
        "normalized": "(a-\u003eEvent b)-\u003ea-\u003e(b-\u003eUI c)-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "(element-\u003eEvent a)-\u003eelement-\u003e(a-\u003eUI void)-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:onChanges",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action whenever a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e changes.\n Use sparingly, it is recommended that you use \u003ccode\u003e\u003ca\u003esink\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e (a -\u003e UI void) -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#onChanges",
        "fct-type": "function",
        "title": "onChanges"
      },
      "index": {
        "description": "Execute UI action whenever Behavior changes Use sparingly it is recommended that you use sink instead",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "onChanges",
        "normalized": "Behavior a-\u003e(a-\u003eUI b)-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Changes",
        "signature": "Behavior a-\u003e(a-\u003eUI void)-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:onEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRegister an \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action to be executed whenever the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e happens.\n\u003c/p\u003e\u003cp\u003eFIXME: Should be unified with \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Event a -\u003e (a -\u003e UI void) -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#onEvent",
        "fct-type": "function",
        "title": "onEvent"
      },
      "index": {
        "description": "Register an UI action to be executed whenever the Event happens FIXME Should be unified with on",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "onEvent",
        "normalized": "Event a-\u003e(a-\u003eUI b)-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Event",
        "signature": "Event a-\u003e(a-\u003eUI void)-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:row",
      "description": {
        "fct-descr": "\u003cp\u003eAlign given elements in a row. Special case of \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "[UI Element] -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#row",
        "fct-type": "function",
        "title": "row"
      },
      "index": {
        "description": "Align given elements in row Special case of grid",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "row",
        "normalized": "[UI Element]-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "[UI Element]-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:runFunction",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given JavaScript function and carry on. Doesn't block.\n\u003c/p\u003e\u003cp\u003eThe client window uses JavaScript's \u003ccode\u003eeval()\u003c/code\u003e function to run the code.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "JSFunction () -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#runFunction",
        "fct-type": "function",
        "title": "runFunction"
      },
      "index": {
        "description": "Run the given JavaScript function and carry on Doesn block The client window uses JavaScript eval function to run the code",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "runFunction",
        "normalized": "JSFunction()-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Function",
        "signature": "JSFunction()-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:runUI",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action in a particular browser window.\n Also runs all scheduled \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e UI a -\u003e IO a",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#runUI",
        "fct-type": "function",
        "title": "runUI"
      },
      "index": {
        "description": "Execute an UI action in particular browser window Also runs all scheduled IO action",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "runUI",
        "normalized": "Window-\u003eUI a-\u003eIO a",
        "package": "threepenny-gui",
        "partial": "UI",
        "signature": "Window-\u003eUI a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet value of an attribute in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n Best used in conjunction with '#'.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ReadWriteAttr x i o -\u003e i -\u003e UI x -\u003e UI x",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set value of an attribute in the UI monad Best used in conjunction with",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "set",
        "normalized": "ReadWriteAttr a b c-\u003eb-\u003eUI a-\u003eUI a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "ReadWriteAttr x i o-\u003ei-\u003eUI x-\u003eUI x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:set-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "i -\u003e x -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
        "fct-type": "function",
        "title": "set'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "set'",
        "normalized": "a-\u003eb-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "i-\u003ex-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:sink",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of an attribute to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e, that is a time-varying value.\n\u003c/p\u003e\u003cp\u003eNote: For reasons of efficiency, the attribute is only\n updated when the value changes.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ReadWriteAttr x i o -\u003e Behavior i -\u003e UI x -\u003e UI x",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#sink",
        "fct-type": "function",
        "title": "sink"
      },
      "index": {
        "description": "Set the value of an attribute to Behavior that is time-varying value Note For reasons of efficiency the attribute is only updated when the value changes",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "sink",
        "normalized": "ReadWriteAttr a b c-\u003eBehavior b-\u003eUI a-\u003eUI a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "ReadWriteAttr x i o-\u003eBehavior i-\u003eUI x-\u003eUI x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:startGUI",
      "description": {
        "fct-descr": "\u003cp\u003eStart server for GUI sessions.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Config-\u003e (Window -\u003e UI ())-\u003e IO ()",
        "fct-type": "function",
        "title": "startGUI"
      },
      "index": {
        "description": "Start server for GUI sessions",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "startGUI",
        "normalized": "Config-\u003e(Window-\u003eUI())-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "GUI",
        "signature": "Config-\u003e(Window-\u003eUI())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003espan\u003c/code\u003e element with a given text content.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "String -\u003e UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "Make span element with given text content",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "string",
        "normalized": "String-\u003eUI Element",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "String-\u003eUI Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:style",
      "description": {
        "fct-descr": "\u003cp\u003eSet CSS style of an Element\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element [(String, String)]",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "Set CSS style of an Element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "style",
        "normalized": "WriteAttr Element[(String,String)]",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "WriteAttr Element[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eText content of an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Text content of an element",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "text",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:title",
      "description": {
        "fct-descr": "\u003cp\u003eTitle of the client window.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Window String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "Title of the client window",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "title",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:toElement",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Element",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#toElement",
        "fct-type": "function",
        "title": "toElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "toElement",
        "normalized": "Element-\u003eElement",
        "package": "threepenny-gui",
        "partial": "Element",
        "signature": "Element-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpCustomHTML",
      "description": {
        "fct-descr": "\u003cp\u003eCustom HTML file to replace the default one.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "function",
        "title": "tpCustomHTML"
      },
      "index": {
        "description": "Custom HTML file to replace the default one",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "tpCustomHTML",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Custom HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpLog",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a single log message.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "ByteString -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "function",
        "title": "tpLog"
      },
      "index": {
        "description": "Print single log message",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "tpLog",
        "normalized": "ByteString-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Log",
        "signature": "ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort number.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "function",
        "title": "tpPort"
      },
      "index": {
        "description": "Port number",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "tpPort",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpStatic",
      "description": {
        "fct-descr": "\u003cp\u003eDirectory that is served under \u003ccode\u003e/static\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
        "fct-type": "function",
        "title": "tpStatic"
      },
      "index": {
        "description": "Directory that is served under static",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "tpStatic",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eValue attribute of an element.\n Particularly relevant for control widgets like \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Element String",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Value attribute of an element Particularly relevant for control widgets like input",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "value",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:widget",
      "description": {
        "fct-descr": "\u003cp\u003eConvience synonym for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e to make widgets work well with \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Core",
        "fct-package": "threepenny-gui",
        "fct-signature": "w -\u003e UI w",
        "fct-source": "src/Graphics-UI-Threepenny-Core.html#widget",
        "fct-type": "function",
        "title": "widget"
      },
      "index": {
        "description": "Convience synonym for return to make widgets work well with set",
        "hierarchy": "Graphics UI Threepenny Core",
        "module": "Graphics.UI.Threepenny.Core",
        "name": "widget",
        "normalized": "a-\u003eUI a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "w-\u003eUI w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html",
        "fct-type": "module",
        "title": "DragNDrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "DragNDrop",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Drag NDrop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#t:DragData",
      "description": {
        "fct-descr": "\u003cp\u003eData carried by a dragged element. \n\u003c/p\u003e\u003cp\u003eFIXME: Empty data is currently encoded by the empty String.\n Change this to 'Maybe String' instead.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#DragData",
        "fct-type": "type",
        "title": "DragData"
      },
      "index": {
        "description": "Data carried by dragged element FIXME Empty data is currently encoded by the empty String Change this to Maybe String instead",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "DragData",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Drag Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:drag",
      "description": {
        "fct-descr": "\u003cp\u003eOccurs periodically while the element is being dragged around.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#drag",
        "fct-type": "function",
        "title": "drag"
      },
      "index": {
        "description": "Occurs periodically while the element is being dragged around",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "drag",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragData",
      "description": {
        "fct-descr": "\u003cp\u003eSet the data that is transferred when dragging this element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragData",
        "fct-type": "function",
        "title": "dragData"
      },
      "index": {
        "description": "Set the data that is transferred when dragging this element",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragData",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDragging the element ends.\n\u003c/p\u003e\u003cp\u003eWARNING: This event can occur both before and after a corresponding \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e event.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragEnd",
        "fct-type": "function",
        "title": "dragEnd"
      },
      "index": {
        "description": "Dragging the element ends WARNING This event can occur both before and after corresponding drop event",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragEnd",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "End",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragEnter",
      "description": {
        "fct-descr": "\u003cp\u003eThe element is now the current target element for a \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: This element is buggy when moving the mouse over child elements.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragEnter",
        "fct-type": "function",
        "title": "dragEnter"
      },
      "index": {
        "description": "The element is now the current target element for drop WARNING This element is buggy when moving the mouse over child elements",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragEnter",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "Enter",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragLeave",
      "description": {
        "fct-descr": "\u003cp\u003eThe element is no longer the current target element for a \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: This event is also fired when the mouse is moved over a child element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragLeave",
        "fct-type": "function",
        "title": "dragLeave"
      },
      "index": {
        "description": "The element is no longer the current target element for drop WARNING This event is also fired when the mouse is moved over child element",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragLeave",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "Leave",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragOver",
      "description": {
        "fct-descr": "\u003cp\u003eOccurs periodically while the element is the current target element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragOver",
        "fct-type": "function",
        "title": "dragOver"
      },
      "index": {
        "description": "Occurs periodically while the element is the current target element",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragOver",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "Over",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragStart",
      "description": {
        "fct-descr": "\u003cp\u003eDragging the element starts.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragStart",
        "fct-type": "function",
        "title": "dragStart"
      },
      "index": {
        "description": "Dragging the element starts",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "dragStart",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "Start",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:draggable",
      "description": {
        "fct-descr": "\u003cp\u003eEnable or disable whether the element can be dragged by the user.\n\u003c/p\u003e\u003cp\u003eAn element with draggable set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e will receive\n \u003ccode\u003e\u003ca\u003edrag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edragEnd\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#draggable",
        "fct-type": "function",
        "title": "draggable"
      },
      "index": {
        "description": "Enable or disable whether the element can be dragged by the user An element with draggable set to True will receive drag dragStart and dragEnd events",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "draggable",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eThe drag and drop operation is being completed on this element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event DragData",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "The drag and drop operation is being completed on this element",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "drop",
        "normalized": "Element-\u003eEvent DragData",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent DragData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:droppable",
      "description": {
        "fct-descr": "\u003cp\u003eEnable or disable whether the element accepts drops.\n\u003c/p\u003e\u003cp\u003eAn element with \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e will receive\n \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragOver\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragEnter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edragLeave\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e\u003cp\u003eChild elements of a \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e element may also be \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e.\n When dragging something over an element, the closest ancestor element\n that is \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e will be the target and receive corresponding\n events.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.DragNDrop",
        "fct-package": "threepenny-gui",
        "fct-signature": "WriteAttr Element Bool",
        "fct-source": "src/Graphics-UI-Threepenny-DragNDrop.html#droppable",
        "fct-type": "function",
        "title": "droppable"
      },
      "index": {
        "description": "Enable or disable whether the element accepts drops An element with droppable set to True will receive drop dragOver dragEnter and dragLeave events Child elements of droppable element may also be droppable When dragging something over an element the closest ancestor element that is droppable will be the target and receive corresponding events",
        "hierarchy": "Graphics UI Threepenny DragNDrop",
        "module": "Graphics.UI.Threepenny.DragNDrop",
        "name": "droppable",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined DOM elements, for convenience.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html",
        "fct-type": "module",
        "title": "Elements"
      },
      "index": {
        "description": "Predefined DOM elements for convenience",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "Elements",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Elements",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:a",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#a",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "a",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:addStyleSheet",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a stylesheet to the head.\n\u003c/p\u003e\u003cp\u003eThe second argument refers to the filename of the stylesheet,\n but not its complete filepath.\n Threepenny will prefix the \u003ccode\u003ecss\u003c/code\u003e subdirectory of the \u003ccode\u003e\u003ca\u003etpStatic\u003c/a\u003e\u003c/code\u003e configuration field\n to construct the complete filepath.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "Window -\u003e FilePath -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#addStyleSheet",
        "fct-type": "function",
        "title": "addStyleSheet"
      },
      "index": {
        "description": "Add stylesheet to the head The second argument refers to the filename of the stylesheet but not its complete filepath Threepenny will prefix the css subdirectory of the tpStatic configuration field to construct the complete filepath",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "addStyleSheet",
        "normalized": "Window-\u003eFilePath-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Style Sheet",
        "signature": "Window-\u003eFilePath-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:address",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#address",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "address",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:anchor",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#anchor",
        "fct-type": "function",
        "title": "anchor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "anchor",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:applet",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#applet",
        "fct-type": "function",
        "title": "applet"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "applet",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:area",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#area",
        "fct-type": "function",
        "title": "area"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "area",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:audio",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#audio",
        "fct-type": "function",
        "title": "audio"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "audio",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:basefont",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#basefont",
        "fct-type": "function",
        "title": "basefont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "basefont",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:big",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#big",
        "fct-type": "function",
        "title": "big"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "big",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:blockquote",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#blockquote",
        "fct-type": "function",
        "title": "blockquote"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "blockquote",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:body",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "body",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:bold",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#bold",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "bold",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:br",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#br",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "br",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:button",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "button",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:canvas",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#canvas",
        "fct-type": "function",
        "title": "canvas"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "canvas",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:caption",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#caption",
        "fct-type": "function",
        "title": "caption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "caption",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:center",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#center",
        "fct-type": "function",
        "title": "center"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "center",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:cite",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#cite",
        "fct-type": "function",
        "title": "cite"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "cite",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:code",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#code",
        "fct-type": "function",
        "title": "code"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "code",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:ddef",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#ddef",
        "fct-type": "function",
        "title": "ddef"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "ddef",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:define",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#define",
        "fct-type": "function",
        "title": "define"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "define",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:div",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "div",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:dlist",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#dlist",
        "fct-type": "function",
        "title": "dlist"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "dlist",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:dterm",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#dterm",
        "fct-type": "function",
        "title": "dterm"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "dterm",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:emphasize",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#emphasize",
        "fct-type": "function",
        "title": "emphasize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "emphasize",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:fieldset",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#fieldset",
        "fct-type": "function",
        "title": "fieldset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "fieldset",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:font",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#font",
        "fct-type": "function",
        "title": "font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "font",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:form",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#form",
        "fct-type": "function",
        "title": "form"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "form",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:frame",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#frame",
        "fct-type": "function",
        "title": "frame"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "frame",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:frameset",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#frameset",
        "fct-type": "function",
        "title": "frameset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "frameset",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h1",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h1",
        "fct-type": "function",
        "title": "h1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h1",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h2",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h2",
        "fct-type": "function",
        "title": "h2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h2",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h3",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h3",
        "fct-type": "function",
        "title": "h3"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h3",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h4",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h4",
        "fct-type": "function",
        "title": "h4"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h4",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h5",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h5",
        "fct-type": "function",
        "title": "h5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h5",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h6",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#h6",
        "fct-type": "function",
        "title": "h6"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "h6",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:header",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "header",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:hr",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#hr",
        "fct-type": "function",
        "title": "hr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "hr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:image",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#image",
        "fct-type": "function",
        "title": "image"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "image",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:img",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#img",
        "fct-type": "function",
        "title": "img"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "img",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:input",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#input",
        "fct-type": "function",
        "title": "input"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "input",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:italics",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#italics",
        "fct-type": "function",
        "title": "italics"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "italics",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:keyboard",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#keyboard",
        "fct-type": "function",
        "title": "keyboard"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "keyboard",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:legend",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#legend",
        "fct-type": "function",
        "title": "legend"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "legend",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:li",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#li",
        "fct-type": "function",
        "title": "li"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "li",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:link",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "link",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:map",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "map",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:meta",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#meta",
        "fct-type": "function",
        "title": "meta"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "meta",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eMake a new \u003ccode\u003ediv\u003c/code\u003e element, synonym for \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Make new div element synonym for div",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "new",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:noframes",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#noframes",
        "fct-type": "function",
        "title": "noframes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "noframes",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:olist",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#olist",
        "fct-type": "function",
        "title": "olist"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "olist",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:option",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#option",
        "fct-type": "function",
        "title": "option"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "option",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:p",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#p",
        "fct-type": "function",
        "title": "p"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "p",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:paragraph",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#paragraph",
        "fct-type": "function",
        "title": "paragraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "paragraph",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:param",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "param",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:pre",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#pre",
        "fct-type": "function",
        "title": "pre"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "pre",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sample",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "sample",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:select",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "select",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:small",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#small",
        "fct-type": "function",
        "title": "small"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "small",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:source",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#source",
        "fct-type": "function",
        "title": "source"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "source",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:span",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "span",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:strong",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#strong",
        "fct-type": "function",
        "title": "strong"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "strong",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sub",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#sub",
        "fct-type": "function",
        "title": "sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "sub",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sup",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#sup",
        "fct-type": "function",
        "title": "sup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "sup",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:table",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#table",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "table",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:td",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#td",
        "fct-type": "function",
        "title": "td"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "td",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:textarea",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#textarea",
        "fct-type": "function",
        "title": "textarea"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "textarea",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:th",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#th",
        "fct-type": "function",
        "title": "th"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "th",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:thebase",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#thebase",
        "fct-type": "function",
        "title": "thebase"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "thebase",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:thehtml",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#thehtml",
        "fct-type": "function",
        "title": "thehtml"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "thehtml",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:title_",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#title_",
        "fct-type": "function",
        "title": "title_"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "title_",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:tr",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#tr",
        "fct-type": "function",
        "title": "tr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "tr",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:tt",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#tt",
        "fct-type": "function",
        "title": "tt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "tt",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:ul",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#ul",
        "fct-type": "function",
        "title": "ul"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "ul",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:underline",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#underline",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "underline",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:variable",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#variable",
        "fct-type": "function",
        "title": "variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "variable",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:video",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Elements",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Element",
        "fct-source": "src/Graphics-UI-Threepenny-Elements.html#video",
        "fct-type": "function",
        "title": "video"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Elements",
        "module": "Graphics.UI.Threepenny.Elements",
        "name": "video",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html",
        "fct-type": "module",
        "title": "Events"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "Events",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#t:KeyCode",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#KeyCode",
        "fct-type": "type",
        "title": "KeyCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "KeyCode",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Key Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:blur",
      "description": {
        "fct-descr": "\u003cp\u003eElement loses focus.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#blur",
        "fct-type": "function",
        "title": "blur"
      },
      "index": {
        "description": "Element loses focus",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "blur",
        "normalized": "Element-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:checkedChange",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the checked status of an input\n element of type checkbox.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#checkedChange",
        "fct-type": "function",
        "title": "checkedChange"
      },
      "index": {
        "description": "Event that occurs when the user changes the checked status of an input element of type checkbox",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "checkedChange",
        "normalized": "Element-\u003eEvent Bool",
        "package": "threepenny-gui",
        "partial": "Change",
        "signature": "Element-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:click",
      "description": {
        "fct-descr": "\u003cp\u003eMouse click.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#click",
        "fct-type": "function",
        "title": "click"
      },
      "index": {
        "description": "Mouse click",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "click",
        "normalized": "Element-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eElement receives focus.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Element receives focus",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "focus",
        "normalized": "Element-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:hover",
      "description": {
        "fct-descr": "\u003cp\u003eMouse enters an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#hover",
        "fct-type": "function",
        "title": "hover"
      },
      "index": {
        "description": "Mouse enters an element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "hover",
        "normalized": "Element-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:keydown",
      "description": {
        "fct-descr": "\u003cp\u003eKey pressed while element has focus.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event KeyCode",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#keydown",
        "fct-type": "function",
        "title": "keydown"
      },
      "index": {
        "description": "Key pressed while element has focus",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "keydown",
        "normalized": "Element-\u003eEvent KeyCode",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent KeyCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:keyup",
      "description": {
        "fct-descr": "\u003cp\u003eKey released while element has focus.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event KeyCode",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#keyup",
        "fct-type": "function",
        "title": "keyup"
      },
      "index": {
        "description": "Key released while element has focus",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "keyup",
        "normalized": "Element-\u003eEvent KeyCode",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent KeyCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:leave",
      "description": {
        "fct-descr": "\u003cp\u003eMouse leaving an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#leave",
        "fct-type": "function",
        "title": "leave"
      },
      "index": {
        "description": "Mouse leaving an element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "leave",
        "normalized": "Element-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mousedown",
      "description": {
        "fct-descr": "\u003cp\u003eMouse down event.\n The mouse coordinates are relative to the element. \n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event (Int, Int)",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#mousedown",
        "fct-type": "function",
        "title": "mousedown"
      },
      "index": {
        "description": "Mouse down event The mouse coordinates are relative to the element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "mousedown",
        "normalized": "Element-\u003eEvent(Int,Int)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mousemove",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that periodically occurs while the mouse is moving over an element.\n\u003c/p\u003e\u003cp\u003eThe event value represents the mouse coordinates\n relative to the upper left corner of the element.\n\u003c/p\u003e\u003cp\u003eNote: The \u003ccode\u003e\u003ca\u003ebody\u003c/a\u003e\u003c/code\u003e element responds to mouse move events,\n but only in the area occupied by actual content,\n not the whole browser window.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event (Int, Int)",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#mousemove",
        "fct-type": "function",
        "title": "mousemove"
      },
      "index": {
        "description": "Event that periodically occurs while the mouse is moving over an element The event value represents the mouse coordinates relative to the upper left corner of the element Note The body element responds to mouse move events but only in the area occupied by actual content not the whole browser window",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "mousemove",
        "normalized": "Element-\u003eEvent(Int,Int)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mouseup",
      "description": {
        "fct-descr": "\u003cp\u003eMouse up event.\n The mouse coordinates are relative to the element. \n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event (Int, Int)",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#mouseup",
        "fct-type": "function",
        "title": "mouseup"
      },
      "index": {
        "description": "Mouse up event The mouse coordinates are relative to the element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "mouseup",
        "normalized": "Element-\u003eEvent(Int,Int)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003eEvent(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:selectionChange",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the selection of a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event (Maybe Int)",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#selectionChange",
        "fct-type": "function",
        "title": "selectionChange"
      },
      "index": {
        "description": "Event that occurs when the user changes the selection of select element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "selectionChange",
        "normalized": "Element-\u003eEvent(Maybe Int)",
        "package": "threepenny-gui",
        "partial": "Change",
        "signature": "Element-\u003eEvent(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:valueChange",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the value of the input element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Events",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event String",
        "fct-source": "src/Graphics-UI-Threepenny-Events.html#valueChange",
        "fct-type": "function",
        "title": "valueChange"
      },
      "index": {
        "description": "Event that occurs when the user changes the value of the input element",
        "hierarchy": "Graphics UI Threepenny Events",
        "module": "Graphics.UI.Threepenny.Events",
        "name": "valueChange",
        "normalized": "Element-\u003eEvent String",
        "package": "threepenny-gui",
        "partial": "Change",
        "signature": "Element-\u003eEvent String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html",
        "fct-type": "module",
        "title": "JQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "JQuery",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "JQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#t:Easing",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
        "fct-type": "data",
        "title": "Easing"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "Easing",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Easing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:Linear",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Linear",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
        "fct-type": "function",
        "title": "Linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "Linear",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:Swing",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Swing",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
        "fct-type": "function",
        "title": "Swing"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "Swing",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Swing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:animate",
      "description": {
        "fct-descr": "\u003cp\u003eAnimate property changes of a function.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e [(String, String)] -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#animate",
        "fct-type": "function",
        "title": "animate"
      },
      "index": {
        "description": "Animate property changes of function",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "animate",
        "normalized": "Element-\u003e[(String,String)]-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Element-\u003e[(String,String)]-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:fadeIn",
      "description": {
        "fct-descr": "\u003cp\u003eFade in an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#fadeIn",
        "fct-type": "function",
        "title": "fadeIn"
      },
      "index": {
        "description": "Fade in an element",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "fadeIn",
        "normalized": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "In",
        "signature": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:fadeOut",
      "description": {
        "fct-descr": "\u003cp\u003eFade out an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#fadeOut",
        "fct-type": "function",
        "title": "fadeOut"
      },
      "index": {
        "description": "Fade out an element",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "fadeOut",
        "normalized": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Out",
        "signature": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:scrollToBottom",
      "description": {
        "fct-descr": "\u003cp\u003eScroll to the bottom of an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#scrollToBottom",
        "fct-type": "function",
        "title": "scrollToBottom"
      },
      "index": {
        "description": "Scroll to the bottom of an element",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "scrollToBottom",
        "normalized": "Element-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "To Bottom",
        "signature": "Element-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:sendValue",
      "description": {
        "fct-descr": "\u003cp\u003eDo something on return.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e Event String",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#sendValue",
        "fct-type": "function",
        "title": "sendValue"
      },
      "index": {
        "description": "Do something on return",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "sendValue",
        "normalized": "Element-\u003eEvent String",
        "package": "threepenny-gui",
        "partial": "Value",
        "signature": "Element-\u003eEvent String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:setFocus",
      "description": {
        "fct-descr": "\u003cp\u003eFocus an element.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.JQuery",
        "fct-package": "threepenny-gui",
        "fct-signature": "Element -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-JQuery.html#setFocus",
        "fct-type": "function",
        "title": "setFocus"
      },
      "index": {
        "description": "Focus an element",
        "hierarchy": "Graphics UI Threepenny JQuery",
        "module": "Graphics.UI.Threepenny.JQuery",
        "name": "setFocus",
        "normalized": "Element-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "Focus",
        "signature": "Element-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html",
        "fct-type": "module",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#t:Timer",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003eTimer interval in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Timer Int",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "Timer interval in milliseconds",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "interval",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:running",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the timer is running or not.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "Attr Timer Bool",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#running",
        "fct-type": "function",
        "title": "running"
      },
      "index": {
        "description": "Whether the timer is running or not",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "running",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003eStart the timer.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "Timer -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Start the timer",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "start",
        "normalized": "Timer-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Timer-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStop the timer.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "Timer -\u003e UI ()",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stop the timer",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "stop",
        "normalized": "Timer-\u003eUI()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Timer-\u003eUI()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:tick",
      "description": {
        "fct-descr": "\u003cp\u003eTimer event.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "Timer -\u003e Event ()",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#tick",
        "fct-type": "function",
        "title": "tick"
      },
      "index": {
        "description": "Timer event",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "tick",
        "normalized": "Timer-\u003eEvent()",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Timer-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:timer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new timer\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Timer",
        "fct-package": "threepenny-gui",
        "fct-signature": "UI Timer",
        "fct-source": "src/Graphics-UI-Threepenny-Timer.html#timer",
        "fct-type": "function",
        "title": "timer"
      },
      "index": {
        "description": "Create new timer",
        "hierarchy": "Graphics UI Threepenny Timer",
        "module": "Graphics.UI.Threepenny.Timer",
        "name": "timer",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny-Widgets.html",
        "fct-type": "module",
        "title": "Widgets"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "Widgets",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Widgets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:ListBox",
      "description": {
        "fct-descr": "\u003cp\u003eA list of values. The user can select entries.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Widgets.html#ListBox",
        "fct-type": "data",
        "title": "ListBox"
      },
      "index": {
        "description": "list of values The user can select entries",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "ListBox",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "List Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:TextEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA single-line text entry.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Threepenny-Widgets.html#TextEntry",
        "fct-type": "data",
        "title": "TextEntry"
      },
      "index": {
        "description": "single-line text entry",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "TextEntry",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Text Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:Tidings",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a behavior (\u003ccode\u003e\u003ca\u003efacts\u003c/a\u003e\u003c/code\u003e)\n and suggestions to change it (\u003ccode\u003e\u003ca\u003erumors\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Threepenny.html#Tidings",
        "fct-type": "data",
        "title": "Tidings"
      },
      "index": {
        "description": "Data type representing behavior facts and suggestions to change it rumors",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "Tidings",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Tidings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:entry",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a single-line text entry.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior String-\u003e UI TextEntry",
        "fct-type": "function",
        "title": "entry"
      },
      "index": {
        "description": "Create single-line text entry",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "entry",
        "normalized": "Behavior String-\u003eUI TextEntry",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior String-\u003eUI TextEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:facts",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "Tidings a -\u003e Behavior a",
        "fct-source": "src/Reactive-Threepenny.html#facts",
        "fct-type": "function",
        "title": "facts"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "facts",
        "normalized": "Tidings a-\u003eBehavior a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Tidings a-\u003eBehavior a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:listBox",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eListBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior [a]-\u003e Behavior (Maybe a)-\u003e Behavior (a -\u003e UI Element)-\u003e UI (ListBox a)",
        "fct-type": "function",
        "title": "listBox"
      },
      "index": {
        "description": "Create ListBox",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "listBox",
        "normalized": "Behavior[a]-\u003eBehavior(Maybe a)-\u003eBehavior(a-\u003eUI Element)-\u003eUI(ListBox a)",
        "package": "threepenny-gui",
        "partial": "Box",
        "signature": "Behavior[a]-\u003eBehavior(Maybe a)-\u003eBehavior(a-\u003eUI Element)-\u003eUI(ListBox a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:rumors",
      "description": {
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "Tidings a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#rumors",
        "fct-type": "function",
        "title": "rumors"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "rumors",
        "normalized": "Tidings a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Tidings a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:tidings",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor. Combine facts and rumors into \u003ccode\u003e\u003ca\u003eTidings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e Event a -\u003e Tidings a",
        "fct-source": "src/Reactive-Threepenny.html#tidings",
        "fct-type": "function",
        "title": "tidings"
      },
      "index": {
        "description": "Smart constructor Combine facts and rumors into Tidings",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "tidings",
        "normalized": "Behavior a-\u003eEvent a-\u003eTidings a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a-\u003eTidings a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:userSelection",
      "description": {
        "fct-descr": "\u003cp\u003eUser changes to the current selection (possibly empty).\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "ListBox a -\u003e Tidings (Maybe a)",
        "fct-source": "src/Graphics-UI-Threepenny-Widgets.html#userSelection",
        "fct-type": "function",
        "title": "userSelection"
      },
      "index": {
        "description": "User changes to the current selection possibly empty",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "userSelection",
        "normalized": "ListBox a-\u003eTidings(Maybe a)",
        "package": "threepenny-gui",
        "partial": "Selection",
        "signature": "ListBox a-\u003eTidings(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:userText",
      "description": {
        "fct-descr": "\u003cp\u003eUser changes to the text value.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Threepenny.Widgets",
        "fct-package": "threepenny-gui",
        "fct-signature": "TextEntry -\u003e Tidings String",
        "fct-source": "src/Graphics-UI-Threepenny-Widgets.html#userText",
        "fct-type": "function",
        "title": "userText"
      },
      "index": {
        "description": "User changes to the text value",
        "hierarchy": "Graphics UI Threepenny Widgets",
        "module": "Graphics.UI.Threepenny.Widgets",
        "name": "userText",
        "normalized": "TextEntry-\u003eTidings String",
        "package": "threepenny-gui",
        "partial": "Text",
        "signature": "TextEntry-\u003eTidings String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny.html#",
      "description": {
        "fct-module": "Graphics.UI.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Threepenny.html",
        "fct-type": "module",
        "title": "Threepenny"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Threepenny",
        "module": "Graphics.UI.Threepenny",
        "name": "Threepenny",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Threepenny",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#",
      "description": {
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Threepenny.html",
        "fct-type": "module",
        "title": "Threepenny"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "Threepenny",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Threepenny",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Behavior",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBehavior a\u003c/code\u003e represents a value that varies in time. Think of it as\n\u003c/p\u003e\u003cpre\u003e type Behavior a = Time -\u003e a\n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Threepenny.html#Behavior",
        "fct-type": "data",
        "title": "Behavior"
      },
      "index": {
        "description": "Behavior represents value that varies in time Think of it as type Behavior Time",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "Behavior",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEvent a\u003c/code\u003e represents a stream of events as they occur in time.\nSemantically, you can think of \u003ccode\u003eEvent a\u003c/code\u003e as an infinite list of values\nthat are tagged with their corresponding time of occurence,\n\u003c/p\u003e\u003cpre\u003e type Event a = [(Time,a)]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Threepenny.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Event represents stream of events as they occur in time Semantically you can think of Event as an infinite list of values that are tagged with their corresponding time of occurence type Event Time",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "Event",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eevent handler\u003c/em\u003e is a function that takes an\n \u003cem\u003eevent value\u003c/em\u003e and performs some computation.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Threepenny.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "An event handler is function that takes an event value and performs some computation",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "Handler",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Tidings",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a behavior (\u003ccode\u003e\u003ca\u003efacts\u003c/a\u003e\u003c/code\u003e)\n and suggestions to change it (\u003ccode\u003e\u003ca\u003erumors\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Threepenny.html#Tidings",
        "fct-type": "data",
        "title": "Tidings"
      },
      "index": {
        "description": "Data type representing behavior facts and suggestions to change it rumors",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "Tidings",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "Tidings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:-60--64-",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e Event b -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#%3C%40",
        "fct-type": "function",
        "title": "(\u003c@)"
      },
      "index": {
        "description": "Variant of apply similar to",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "(\u003c@) \u003c@",
        "normalized": "Behavior a-\u003eEvent b-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior a-\u003eEvent b-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:-60--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e, similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior (a -\u003e b) -\u003e Event a -\u003e Event b",
        "fct-source": "src/Reactive-Threepenny.html#%3C%40%3E",
        "fct-type": "function",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "Infix synonym for apply similar to",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:accumB",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e function is similar to a \u003cem\u003estrict\u003c/em\u003e left fold, \u003ccode\u003efoldl'\u003c/code\u003e.\n It starts with an initial value and combines it with incoming events.\n For example, think\n\u003c/p\u003e\u003cpre\u003e accumB \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = stepper \"x\" [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the value of the behavior changes \"slightly after\"\n the events occur. This allows for recursive definitions.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "a -\u003e Event (a -\u003e a) -\u003e m (Behavior a)",
        "fct-source": "src/Reactive-Threepenny.html#accumB",
        "fct-type": "function",
        "title": "accumB"
      },
      "index": {
        "description": "The accumB function is similar to strict left fold foldl It starts with an initial value and combines it with incoming events For example think accumB time1 time2 stepper time1 xy time2 xyz Note that the value of the behavior changes slightly after the events occur This allows for recursive definitions",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "accumB",
        "normalized": "a-\u003eEvent(a-\u003ea)-\u003eb(Behavior a)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "a-\u003eEvent(a-\u003ea)-\u003em(Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:accumE",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e function accumulates a stream of events.\n Example:\n\u003c/p\u003e\u003cpre\u003e accumE \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = return [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the output events are simultaneous with the input events,\n there is no \"delay\" like in the case of \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "a -\u003e Event (a -\u003e a) -\u003e m (Event a)",
        "fct-source": "src/Reactive-Threepenny.html#accumE",
        "fct-type": "function",
        "title": "accumE"
      },
      "index": {
        "description": "The accumE function accumulates stream of events Example accumE time1 time2 return time1 xy time2 xyz Note that the output events are simultaneous with the input events there is no delay like in the case of accumB",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "accumE",
        "normalized": "a-\u003eEvent(a-\u003ea)-\u003eb(Event a)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "a-\u003eEvent(a-\u003ea)-\u003em(Event a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a time-varying function to a stream of events.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e apply bf ex = [(time, bf time x) | (time, x) \u003c- ex]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior (a -\u003e b) -\u003e Event a -\u003e Event b",
        "fct-source": "src/Reactive-Threepenny.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply time-varying function to stream of events Think of it as apply bf ex time bf time time ex",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "apply",
        "normalized": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:concatenate",
      "description": {
        "fct-descr": "\u003cp\u003eApply a list of functions in succession.\n Useful in conjunction with \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e concatenate [f,g,h] = f . g . h \n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "[a -\u003e a] -\u003e a -\u003e a",
        "fct-source": "src/Reactive-Threepenny.html#concatenate",
        "fct-type": "function",
        "title": "concatenate"
      },
      "index": {
        "description": "Apply list of functions in succession Useful in conjunction with unions concatenate",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "concatenate",
        "normalized": "[a-\u003ea]-\u003ea-\u003ea",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "[a-\u003ea]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:currentValue",
      "description": {
        "fct-descr": "\u003cp\u003eRead the current value of a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e m a",
        "fct-source": "src/Reactive-Threepenny.html#currentValue",
        "fct-type": "function",
        "title": "currentValue"
      },
      "index": {
        "description": "Read the current value of Behavior",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "currentValue",
        "normalized": "Behavior a-\u003eb a",
        "package": "threepenny-gui",
        "partial": "Value",
        "signature": "Behavior a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:facts",
      "description": {
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Tidings a -\u003e Behavior a",
        "fct-source": "src/Reactive-Threepenny.html#facts",
        "fct-type": "function",
        "title": "facts"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "facts",
        "normalized": "Tidings a-\u003eBehavior a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Tidings a-\u003eBehavior a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterApply",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all event occurrences that fulfill the time-varying predicate,\n discard the rest. Generalization of \u003ccode\u003e\u003ca\u003efilterE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior (a -\u003e Bool) -\u003e Event a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#filterApply",
        "fct-type": "function",
        "title": "filterApply"
      },
      "index": {
        "description": "Return all event occurrences that fulfill the time-varying predicate discard the rest Generalization of filterE",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "filterApply",
        "normalized": "Behavior(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "Apply",
        "signature": "Behavior(a-\u003eBool)-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all event occurrences that fulfill the predicate, discard the rest.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Return all event occurrences that fulfill the predicate discard the rest",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "filterE",
        "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterJust",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all event occurrences that are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values, discard the rest.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e filterJust es = [(time,a) | (time,Just a) \u003c- es]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Event (Maybe a) -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#filterJust",
        "fct-type": "function",
        "title": "filterJust"
      },
      "index": {
        "description": "Return all event occurrences that are Just values discard the rest Think of it as filterJust es time time Just es",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "filterJust",
        "normalized": "Event(Maybe a)-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "Just",
        "signature": "Event(Maybe a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficient combination of \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "acc -\u003e Event (acc -\u003e (x, acc)) -\u003e m (Event x, Behavior acc)",
        "fct-source": "src/Reactive-Threepenny.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Efficient combination of accumE and accumB",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "mapAccum",
        "normalized": "a-\u003eEvent(a-\u003e(b,a))-\u003ec(Event b,Behavior a)",
        "package": "threepenny-gui",
        "partial": "Accum",
        "signature": "acc-\u003eEvent(acc-\u003e(x,acc))-\u003em(Event x,Behavior acc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that never occurs.\n Think of it as \u003ccode\u003enever = []\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Event a",
        "fct-source": "src/Reactive-Threepenny.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "Event that never occurs Think of it as never",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "never",
        "normalized": "",
        "package": "threepenny-gui",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:newEvent",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new event.\n Also returns a function that triggers an event occurrence.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "IO (Event a, Handler a)",
        "fct-source": "src/Reactive-Threepenny.html#newEvent",
        "fct-type": "function",
        "title": "newEvent"
      },
      "index": {
        "description": "Create new event Also returns function that triggers an event occurrence",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "newEvent",
        "normalized": "IO(Event a,Handler a)",
        "package": "threepenny-gui",
        "partial": "Event",
        "signature": "IO(Event a,Handler a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:newEventsNamed",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a series of events with delayed initialization.\n\u003c/p\u003e\u003cp\u003eFor each name, the initialization handler will be called\n exactly once when the event is first \u003ca\u003ebrought to life\u003c/a\u003e,\n e.g. when an event handler is registered to it.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Handler (name, Event a, Handler a)-\u003e IO (name -\u003e Event a)",
        "fct-type": "function",
        "title": "newEventsNamed"
      },
      "index": {
        "description": "Create series of events with delayed initialization For each name the initialization handler will be called exactly once when the event is first brought to life e.g when an event handler is registered to it",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "newEventsNamed",
        "normalized": "Handler(a,Event b,Handler b)-\u003eIO(a-\u003eEvent b)",
        "package": "threepenny-gui",
        "partial": "Events Named",
        "signature": "Handler(name,Event a,Handler a)-\u003eIO(name-\u003eEvent a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:onChange",
      "description": {
        "fct-descr": "\u003cp\u003eRegister an event \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n All registered handlers will be called whenever the behavior changes.\n\u003c/p\u003e\u003cp\u003eHowever, note that this is only an approximation,\n as behaviors may change continuously.\n Consequently, handlers should be idempotent.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e Handler a -\u003e IO ()",
        "fct-source": "src/Reactive-Threepenny.html#onChange",
        "fct-type": "function",
        "title": "onChange"
      },
      "index": {
        "description": "Register an event Handler for Behavior All registered handlers will be called whenever the behavior changes However note that this is only an approximation as behaviors may change continuously Consequently handlers should be idempotent",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "onChange",
        "normalized": "Behavior a-\u003eHandler a-\u003eIO()",
        "package": "threepenny-gui",
        "partial": "Change",
        "signature": "Behavior a-\u003eHandler a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister an event \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n All registered handlers will be called whenever the event occurs.\n\u003c/p\u003e\u003cp\u003eWhen registering an event handler, you will also be given an action\n that unregisters this handler again.\n\u003c/p\u003e\u003cpre\u003e do unregisterMyHandler \u003c- register event myHandler\n\u003c/pre\u003e\u003cp\u003eFIXME: Unregistering event handlers does not work yet.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Event a -\u003e Handler a -\u003e IO (IO ())",
        "fct-source": "src/Reactive-Threepenny.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Register an event Handler for an Event All registered handlers will be called whenever the event occurs When registering an event handler you will also be given an action that unregisters this handler again do unregisterMyHandler register event myHandler FIXME Unregistering event handlers does not work yet",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "register",
        "normalized": "Event a-\u003eHandler a-\u003eIO(IO())",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Event a-\u003eHandler a-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:rumors",
      "description": {
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Tidings a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#rumors",
        "fct-type": "function",
        "title": "rumors"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "rumors",
        "normalized": "Tidings a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Tidings a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit event occurrences according to a tag.\n The \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values go into the left component while the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values\n go into the right component of the result.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Event (Either a b) -\u003e (Event a, Event b)",
        "fct-source": "src/Reactive-Threepenny.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split event occurrences according to tag The Left values go into the left component while the Right values go into the right component of the result",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "split",
        "normalized": "Event(Either a b)-\u003e(Event a,Event b)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Event(Either a b)-\u003e(Event a,Event b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:stepper",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a time-varying function from an initial value and \n a stream of new values. Think of it as\n\u003c/p\u003e\u003cpre\u003e stepper x0 ex = return $ \\time -\u003e\n     last (x0 : [x | (timex,x) \u003c- ex, timex \u003c time])\n\u003c/pre\u003e\u003cp\u003eNote that the smaller-than-sign in the comparision \u003ccode\u003etimex \u003c time\u003c/code\u003e means \n that the value of the behavior changes \"slightly after\"\n the event occurrences. This allows for recursive definitions.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "a -\u003e Event a -\u003e m (Behavior a)",
        "fct-source": "src/Reactive-Threepenny.html#stepper",
        "fct-type": "function",
        "title": "stepper"
      },
      "index": {
        "description": "Construct time-varying function from an initial value and stream of new values Think of it as stepper x0 ex return time last x0 timex ex timex time Note that the smaller-than-sign in the comparision timex time means that the value of the behavior changes slightly after the event occurrences This allows for recursive definitions",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "stepper",
        "normalized": "a-\u003eEvent a-\u003eb(Behavior a)",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "a-\u003eEvent a-\u003em(Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:tidings",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor. Combine facts and rumors into \u003ccode\u003e\u003ca\u003eTidings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior a -\u003e Event a -\u003e Tidings a",
        "fct-source": "src/Reactive-Threepenny.html#tidings",
        "fct-type": "function",
        "title": "tidings"
      },
      "index": {
        "description": "Smart constructor Combine facts and rumors into Tidings",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "tidings",
        "normalized": "Behavior a-\u003eEvent a-\u003eTidings a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a-\u003eTidings a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two event streams of the same type.\n In case of simultaneous occurrences, the event values are combined\n with the binary function.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e unionWith f ((timex,x):xs) ((timey,y):ys)\n    | timex == timey = (timex,f x y) : unionWith f xs ys\n    | timex \u003c  timey = (timex,x)     : unionWith f xs ((timey,y):ys)\n    | timex \u003e  timey = (timey,y)     : unionWith f ((timex,x):xs) ys\n\u003c/pre\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Merge two event streams of the same type In case of simultaneous occurrences the event values are combined with the binary function Think of it as unionWith timex xs timey ys timex timey timex unionWith xs ys timex timey timex unionWith xs timey ys timex timey timey unionWith timex xs ys",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eCollect simultaneous event occurrences in a list.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "[Event a] -\u003e Event [a]",
        "fct-source": "src/Reactive-Threepenny.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Collect simultaneous event occurrences in list",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "unions",
        "normalized": "[Event a]-\u003eEvent[a]",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "[Event a]-\u003eEvent[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unsafeMapIO",
      "description": {
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "(a -\u003e IO b) -\u003e Event a -\u003e Event b",
        "fct-source": "src/Reactive-Threepenny.html#unsafeMapIO",
        "fct-type": "function",
        "title": "unsafeMapIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "unsafeMapIO",
        "normalized": "(a-\u003eIO b)-\u003eEvent a-\u003eEvent b",
        "package": "threepenny-gui",
        "partial": "Map IO",
        "signature": "(a-\u003eIO b)-\u003eEvent a-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:whenE",
      "description": {
        "fct-descr": "\u003cp\u003eReturn event occurrences only when the behavior is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n Variant of \u003ccode\u003e\u003ca\u003efilterApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Threepenny",
        "fct-package": "threepenny-gui",
        "fct-signature": "Behavior Bool -\u003e Event a -\u003e Event a",
        "fct-source": "src/Reactive-Threepenny.html#whenE",
        "fct-type": "function",
        "title": "whenE"
      },
      "index": {
        "description": "Return event occurrences only when the behavior is True Variant of filterApply",
        "hierarchy": "Reactive Threepenny",
        "module": "Reactive.Threepenny",
        "name": "whenE",
        "normalized": "Behavior Bool-\u003eEvent a-\u003eEvent a",
        "package": "threepenny-gui",
        "partial": "",
        "signature": "Behavior Bool-\u003eEvent a-\u003eEvent a"
      }
    }
  }
]